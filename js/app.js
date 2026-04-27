/* ═══════════════════════════════════════════════════════════════
   APUSH Practice Examination Center — app.js
   Handles: MCQ (stimulus sets, per-choice dropdowns), Essays,
            Results, Review, Document Library, Dark Mode
   ═══════════════════════════════════════════════════════════════ */

'use strict';

// ── State ────────────────────────────────────────────────────────
let mode        = 'mcq';
let mcqCount    = 40;
let timerMins   = 0;
let timerInterval = null;
let timerSecsLeft = 0;

let sessionQs   = [];   // current question objects
let answered    = [];   // per-question: null | 'correct' | 'wrong'
let selected    = [];   // per-question: chosen index | null
let flagged     = [];   // per-question: bool
let currentIdx  = 0;
let correct     = 0;
let incorrect   = 0;

// Full exam state
let fullPhase   = 0;    // 0=mcq,1=saq,2=leq,3=dbq
let fullEssayType = null;

// Essay state
let currentPrompt = null;

// History (localStorage)
let history     = JSON.parse(localStorage.getItem('apush_history') || '[]');

// ── Session Save / Restore ────────────────────────────────────────
const SESSION_KEY = 'apush_session';

function saveSession() {
  if (!sessionQs.length) return;
  const data = {
    sessionIdxs: sessionQs.map(q => allQuestions.indexOf(q)),
    answered, selected, flagged,
    currentIdx, correct, incorrect, mode, mcqCount,
    savedAt: Date.now()
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(data));
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function hasSavedSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    return data && data.sessionIdxs && data.sessionIdxs.length > 0
      && (Date.now() - data.savedAt) < 86400000;
  } catch(e) { return false; }
}

function offerRestore() {
  if (!hasSavedSession()) return;
  try {
    const data = JSON.parse(localStorage.getItem(SESSION_KEY));
    const answered = data.answered || [];
    const done = answered.filter(a => a !== null).length;
    const total = data.sessionIdxs.length;
    const mins = Math.round((Date.now() - data.savedAt) / 60000);
    const timeStr = mins < 60 ? mins + ' min ago' : Math.round(mins/60) + 'h ago';
    const strip = document.createElement('div');
    strip.id = 'resume-strip';
    strip.style.cssText = 'background:var(--ink);color:var(--gold-light);padding:12px 32px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;font-family:"Libre Baskerville",serif;font-size:13px;';
    strip.innerHTML = `
      <span>📌 Saved session: <strong>${done}/${total}</strong> questions answered (${timeStr})</span>
      <div style="display:flex;gap:8px">
        <button onclick="resumeSession()" style="background:var(--gold);color:var(--ink);border:none;padding:7px 18px;cursor:pointer;font-family:inherit;font-size:12px;letter-spacing:.08em;text-transform:uppercase;border-radius:1px">Resume</button>
        <button onclick="discardSession()" style="background:none;color:var(--gold-light);border:1px solid var(--gold);padding:7px 14px;cursor:pointer;font-family:inherit;font-size:12px;letter-spacing:.08em;text-transform:uppercase;border-radius:1px">Discard</button>
      </div>`;
    const page = document.querySelector('.page');
    const topBar = document.getElementById('top-bar');
    page.insertBefore(strip, topBar.nextSibling);
  } catch(e) { clearSession(); }
}

function resumeSession() {
  try {
    const data = JSON.parse(localStorage.getItem(SESSION_KEY));
    sessionQs  = data.sessionIdxs.map(i => allQuestions[i]).filter(Boolean);
    answered   = data.answered;
    selected   = data.selected;
    flagged    = data.flagged;
    currentIdx = data.currentIdx || 0;
    correct    = data.correct || 0;
    incorrect  = data.incorrect || 0;
    mode       = data.mode || 'mcq';
    mcqCount   = data.mcqCount || 40;
    document.getElementById('resume-strip')?.remove();
    updateTopBar();
    showScreen('mcq-screen');
    renderQuestion(currentIdx);
  } catch(e) {
    clearSession();
    alert('Could not restore session. Starting fresh.');
  }
}

function discardSession() {
  clearSession();
  document.getElementById('resume-strip')?.remove();
}

// ── Helpers ──────────────────────────────────────────────────────
const $  = id => document.getElementById(id);
const el = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
};

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
}

function updateTopBar() {
  const done = answered.filter(a => a !== null).length;
  const rem  = sessionQs.length - done;
  $('bar-correct').textContent   = correct;
  $('bar-incorrect').textContent = incorrect;
  $('bar-remain').textContent    = rem >= 0 ? rem : '—';
}

// ── Dark Mode ─────────────────────────────────────────────────────
function toggleDark() {
  const isDark = document.body.classList.toggle('dark');
  $('dark-btn').textContent = isDark ? '☀️ Light' : '🌙 Dark';
  localStorage.setItem('apush_dark', isDark ? '1' : '0');
}
if (localStorage.getItem('apush_dark') === '1') {
  document.body.classList.add('dark');
  setTimeout(() => { if ($('dark-btn')) $('dark-btn').textContent = '☀️ Light'; }, 0);
}

// ── Start Screen ─────────────────────────────────────────────────
function pickMode(m) {
  mode = m;
  document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
  const card = $('card-' + m);
  if (card) card.classList.add('selected');
  $('mcq-sub').style.display = (m === 'mcq') ? 'block' : 'none';
}

function pickCount(n, btn) {
  mcqCount = n;
  document.querySelectorAll('#count-row .opt-pill').forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel');
}

function pickTime(mins, btn) {
  timerMins = mins;
  document.querySelectorAll('#time-row .opt-pill').forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel');
  $('timer-seg').style.display = mins > 0 ? 'flex' : 'none';
}

// Initialise start screen stats
function initStartStats() {
  if (history.length === 0) { $('stats-strip').style.display = 'none'; return; }
  $('stats-strip').style.display = 'flex';
  const totalQ = history.reduce((s, h) => s + h.questions, 0);
  const scores = history.map(h => h.pct);
  const best   = Math.max(...scores);
  const avg    = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  $('stat-sessions').textContent  = history.length;
  $('stat-questions').textContent = totalQ;
  $('stat-best').textContent      = best + '%';
  $('stat-avg').textContent       = avg + '%';
}
initStartStats();
offerRestore();

// ── Launch ────────────────────────────────────────────────────────
function launch() {
  if (mode === 'mcq') {
    startMCQ();
  } else if (mode === 'saq') {
    startEssay('saq');
  } else if (mode === 'leq') {
    startEssay('leq');
  } else if (mode === 'dbq') {
    startEssay('dbq');
  } else if (mode === 'full') {
    startFull();
  }
}

// ── MCQ ───────────────────────────────────────────────────────────

/**
 * Build session question list.
 * Preserves stimulus set integrity — if any question from a set is selected,
 * include all questions from that set (up to count).
 */
function buildSessionQuestions(count) {
  const total = allQuestions.length;
  if (count >= total) return shuffle([...allQuestions]);

  // Group by setId
  const sets = {};
  allQuestions.forEach(q => {
    const sid = q.setId || '_';
    if (!sets[sid]) sets[sid] = [];
    sets[sid].push(q);
  });

  const setIds = shuffle(Object.keys(sets));
  const result = [];
  for (const sid of setIds) {
    if (result.length >= count) break;
    for (const q of sets[sid]) {
      result.push(q);
      if (result.length >= count) break;
    }
  }
  return result;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startMCQ(questions) {
  sessionQs  = questions || buildSessionQuestions(mcqCount);
  answered   = new Array(sessionQs.length).fill(null);
  selected   = new Array(sessionQs.length).fill(null);
  flagged    = new Array(sessionQs.length).fill(false);
  currentIdx = 0;
  correct    = 0;
  incorrect  = 0;

  updateTopBar();
  if (timerMins > 0) startTimer(timerMins * 60);
  showScreen('mcq-screen');
  renderQuestion(0);
}

function renderQuestion(idx) {
  const q = sessionQs[idx];
  currentIdx = idx;
  if (answered.some(a => a !== null)) saveSession();

  // Progress bar
  const done = answered.filter(a => a !== null).length;
  $('prog-fill').style.width = (done / sessionQs.length * 100) + '%';
  $('prog-label').textContent = `${idx + 1} of ${sessionQs.length}`;

  // Tags
  $('q-num-tag').textContent   = `Question ${idx + 1}`;
  $('q-topic-tag').textContent = q.topic || '';

  // Flag button
  $('flag-btn').textContent = flagged[idx] ? '🚩 Flagged' : '🚩 Flag';
  $('flag-btn').classList.toggle('flagged', flagged[idx]);

  // Stimulus area — show on every question in the set by looking up the set's stimulus
  const sa = $('stimulus-area');
  sa.innerHTML = '';

  // Find the stimulus: use this question's or walk back to the first in the set that has one
  const setStimulus = q.stimulus ||
    (q.setId ? (sessionQs.find(sq => sq.setId === q.setId && sq.stimulus) || {}).stimulus : null);

  if (setStimulus) {
    const box = el('div', 'stimulus-box');
    const lbl = el('span', 'stimulus-label', 'Primary Source · ' + (q.source || 'Practice Test'));
    box.appendChild(lbl);

    // Visual image
    if (setStimulus.visual && setStimulus.imageKey) {
      const imgHtml = getImageHtml(setStimulus.imageKey, setStimulus.imageType, setStimulus.searchQuery);
      if (imgHtml) box.insertAdjacentHTML('beforeend', imgHtml);
    }

    // Stimulus label line
    const labelEl = el('div', '', `<em>${setStimulus.label}</em>`);
    labelEl.style.cssText = 'font-size:12px;color:var(--ink-light);margin-bottom:8px;font-family:"Libre Baskerville",serif';
    box.appendChild(labelEl);

    // Text
    if (setStimulus.text) {
      const txt = el('div', 'stimulus-text', setStimulus.text);
      box.appendChild(txt);
    }

    // Attribution
    if (setStimulus.attr) {
      const attr = el('span', 'stimulus-attr', '— ' + setStimulus.attr);
      box.appendChild(attr);
    }

    sa.appendChild(box);

    // Set badge showing position within set
    const setQs    = sessionQs.filter(sq => sq.setId === q.setId);
    const posInSet = setQs.indexOf(q) + 1;
    if (setQs.length > 1) {
      const badge = el('div', 'set-badge', `Question ${posInSet} of ${setQs.length} in this set`);
      sa.appendChild(badge);
    }
  }

  // Question text
  $('q-text').textContent = q.question;

  // Choices
  const choicesEl = $('choices');
  choicesEl.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D', 'E'];
  const isAnswered = answered[idx] !== null;

  q.choices.forEach((choice, ci) => {
    const block = el('div', 'choice-block');

    // Choice button
    const btn = el('button', 'choice-btn');
    btn.disabled = isAnswered;

    const letter = el('span', 'choice-letter', letters[ci]);
    const text   = el('span', '', choice);
    btn.appendChild(letter);
    btn.appendChild(text);

    if (isAnswered) {
      if (ci === q.answer) {
        btn.classList.add('correct-choice');
      } else if (ci === selected[idx]) {
        btn.classList.add('selected-wrong');
      }
    } else {
      btn.addEventListener('click', () => handleAnswer(idx, ci));
    }
    block.appendChild(btn);

    // Per-choice explanation toggle (visible after answering)
    if (isAnswered && q.choiceExplanations && q.choiceExplanations[ci] !== null) {
      const isCorrect = (ci === q.answer);
      const isSelected = (ci === selected[idx]);

      const toggle = el('button', 'choice-exp-toggle visible');
      const arrow  = el('span', 'toggle-arrow', '▶');
      const label  = el('span', '', isCorrect
        ? 'Why this is correct'
        : (isSelected ? 'Why your choice was wrong' : 'Why this is wrong'));
      toggle.appendChild(arrow);
      toggle.appendChild(label);

      const content = el('div', `choice-exp-content ${isCorrect ? 'correct-exp' : 'wrong-exp'}`);
      content.innerHTML = q.choiceExplanations[ci];

      // Auto-expand the selected answer's explanation
      if (isSelected || (isCorrect && selected[idx] === q.answer)) {
        content.classList.add('open');
        arrow.classList.add('open');
        toggle.textContent = '';
        toggle.appendChild(arrow);
        toggle.appendChild(label);
      }

      toggle.addEventListener('click', () => {
        const isOpen = content.classList.toggle('open');
        arrow.classList.toggle('open', isOpen);
      });

      block.appendChild(toggle);
      block.appendChild(content);
    }

    choicesEl.appendChild(block);
  });

  // General explanation (for questions WITHOUT per-choice explanations)
  const expEl = $('explanation');
  if (isAnswered && (!q.choiceExplanations)) {
    const wasCorrect = answered[idx] === 'correct';
    $('badge-wrap').innerHTML =
      `<span class="result-badge ${wasCorrect ? 'correct' : 'wrong'}">${wasCorrect ? '✓ Correct' : '✗ Incorrect'}</span>`;
    $('exp-text').innerHTML = q.explanation || '';
    expEl.classList.add('visible');
  } else {
    expEl.classList.remove('visible');
  }

  // Nav buttons
  $('prev-btn').disabled = (idx === 0);
  $('next-btn').textContent = (idx === sessionQs.length - 1) ? 'Submit →' : 'Next →';

  // Update grid
  buildGrid();
}

function handleAnswer(idx, choiceIdx) {
  if (answered[idx] !== null) return;
  const q = sessionQs[idx];
  selected[idx] = choiceIdx;

  if (choiceIdx === q.answer) {
    answered[idx] = 'correct';
    correct++;
  } else {
    answered[idx] = 'wrong';
    incorrect++;
  }

  updateTopBar();
  saveSession();
  renderQuestion(idx);
}

function nextQ() {
  if (currentIdx === sessionQs.length - 1) {
    confirmSubmitModal();
  } else {
    renderQuestion(currentIdx + 1);
  }
}

function prevQ() {
  if (currentIdx > 0) renderQuestion(currentIdx - 1);
}

function toggleFlag() {
  flagged[currentIdx] = !flagged[currentIdx];
  renderQuestion(currentIdx);
}

function skipToUnanswered() {
  for (let i = currentIdx + 1; i < sessionQs.length; i++) {
    if (answered[i] === null) { renderQuestion(i); return; }
  }
  for (let i = 0; i < currentIdx; i++) {
    if (answered[i] === null) { renderQuestion(i); return; }
  }
}

// ── Question Grid ─────────────────────────────────────────────────
function buildGrid() {
  const grid = $('q-grid-nums');
  grid.innerHTML = '';
  sessionQs.forEach((q, i) => {
    const btn = el('button', 'q-num-btn', i + 1);

    // Mark set starts
    const prev = sessionQs[i - 1];
    if (!prev || prev.setId !== q.setId) btn.classList.add('set-start');

    if (i === currentIdx)        btn.classList.add('current');
    else if (answered[i] === 'correct') btn.classList.add('correct');
    else if (answered[i] === 'wrong')   btn.classList.add('incorrect');
    if (flagged[i])              btn.classList.add('flagged');

    btn.addEventListener('click', () => renderQuestion(i));
    grid.appendChild(btn);
  });
}

function toggleGrid() {
  const panel = $('q-grid-panel');
  panel.classList.toggle('open');
}

// ── Submit / Results ──────────────────────────────────────────────
function confirmSubmitModal() {
  const unanswered = answered.filter(a => a === null).length;
  const body = unanswered > 0
    ? `You have <strong>${unanswered} unanswered question${unanswered > 1 ? 's' : ''}</strong>. They will be marked incorrect. Submit anyway?`
    : 'You have answered all questions. Ready to submit?';
  $('submit-modal-body').innerHTML = body;
  const modal = $('submit-modal');
  modal.style.display = 'flex';
}

function closeSubmitModal() {
  $('submit-modal').style.display = 'none';
}

function confirmSubmit() {
  closeSubmitModal();
  clearSession();
  stopTimer();
  // Count unanswered as wrong
  answered.forEach((a, i) => {
    if (a === null) { answered[i] = 'wrong'; incorrect++; }
  });
  updateTopBar();
  showResults();
}

function showResults() {
  const total = sessionQs.length;
  const pct   = Math.round(correct / total * 100);
  const grade = apGrade(pct, total);

  $('res-title').textContent  = 'Examination Complete';
  $('res-score').textContent  = pct + '%';
  $('res-msg').textContent    = grade.msg;
  $('res-grade').textContent  = grade.label;
  $('res-correct').textContent   = correct;
  $('res-incorrect').textContent = incorrect;
  $('res-pct').textContent    = pct + '%';

  buildAPConversionTable(pct, total);
  buildPeriodBreakdown();

  // Save history
  history.push({ date: new Date().toISOString(), questions: total, correct, pct });
  localStorage.setItem('apush_history', JSON.stringify(history.slice(-20)));
  initStartStats();

  showScreen('results-screen');
}

function apGrade(pct, total) {
  if (pct >= 75) return { label: 'AP Score: ~5', msg: 'Outstanding. Likely a 5 on the AP exam.' };
  if (pct >= 63) return { label: 'AP Score: ~4', msg: 'Strong performance. Likely a 4 on the AP exam.' };
  if (pct >= 50) return { label: 'AP Score: ~3', msg: 'Solid foundation. Likely a 3 on the AP exam.' };
  if (pct >= 37) return { label: 'AP Score: ~2', msg: 'Developing. Focus on weak periods.' };
  return { label: 'AP Score: ~1', msg: 'Keep studying. Review primary sources and key themes.' };
}

function buildAPConversionTable(pct, total) {
  const rows = [
    { score: 5, min: 75, max: 100, label: 'Extremely well qualified' },
    { score: 4, min: 63, max: 74,  label: 'Well qualified' },
    { score: 3, min: 50, max: 62,  label: 'Qualified' },
    { score: 2, min: 37, max: 49,  label: 'Possibly qualified' },
    { score: 1, min: 0,  max: 36,  label: 'No recommendation' },
  ];
  const wrap = $('ap-conversion-table');
  wrap.innerHTML = '';
  rows.forEach(r => {
    const row = el('div', 'ap-conv-row' + (pct >= r.min && pct <= r.max ? ' highlight' : ''));
    row.innerHTML = `<span class="ap-score">${r.score}</span>
      <span class="ap-range">${r.min}%–${r.max}% &nbsp;·&nbsp; ${r.label}</span>`;
    wrap.appendChild(row);
  });
}

function buildPeriodBreakdown() {
  const periods = {};
  sessionQs.forEach((q, i) => {
    const p = q.topic ? q.topic.split(':')[0].trim() : 'General';
    if (!periods[p]) periods[p] = { correct: 0, total: 0 };
    periods[p].total++;
    if (answered[i] === 'correct') periods[p].correct++;
  });

  const list = $('period-breakdown-list');
  list.innerHTML = '';
  Object.entries(periods).sort().forEach(([p, data]) => {
    const pct = data.total ? Math.round(data.correct / data.total * 100) : 0;
    const row = el('div', 'period-row');
    row.innerHTML = `
      <span class="period-name">${p} <small style="color:var(--ink-light)">(${data.correct}/${data.total})</small></span>
      <div class="period-bar-wrap"><div class="period-bar" style="width:${pct}%"></div></div>
      <span class="period-pct">${pct}%</span>`;
    list.appendChild(row);
  });
}

// ── Review Screen ─────────────────────────────────────────────────
let reviewFilter = 'all';

function openReview(filter) {
  reviewFilter = filter || 'all';
  setReviewFilter(reviewFilter, document.querySelector(`.rf-pill[onclick*="${reviewFilter}"]`));
  showScreen('review-screen');
}

function setReviewFilter(f, btn) {
  reviewFilter = f;
  document.querySelectorAll('.rf-pill').forEach(p => p.classList.remove('active'));
  if (btn) btn.classList.add('active');
  buildReviewList();
}

function buildReviewList() {
  const list = $('review-list');
  list.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D', 'E'];

  sessionQs.forEach((q, i) => {
    const a = answered[i];
    if (reviewFilter === 'correct'  && a !== 'correct')  return;
    if (reviewFilter === 'wrong'    && a !== 'wrong')     return;
    if (reviewFilter === 'flagged'  && !flagged[i])       return;

    const item = el('div', `review-item ${a === 'correct' ? 'correct' : 'wrong'}`);
    const head = el('div', 'review-item-head');
    head.innerHTML = `
      <span class="review-icon">${a === 'correct' ? '✓' : '✗'}</span>
      <span class="review-q-num">Q${i + 1}</span>
      <span class="review-q-text">${q.question}</span>
      <span style="font-size:12px;color:var(--ink-light)">▼</span>`;

    const body = el('div', 'review-item-body');

    // Stimulus thumbnail
    if (q.stimulus) {
      const src = el('div', '', `<em style="font-size:13px;color:var(--ink-light)">${q.stimulus.label}</em>`);
      body.appendChild(src);
    }

    // Choices
    const choicesDiv = el('div', 'review-choices');
    q.choices.forEach((c, ci) => {
      const cls = ci === q.answer ? 'correct' : (ci === selected[i] && ci !== q.answer ? 'wrong' : '');
      if (cls) {
        const cd = el('div', `review-choice ${cls}`);
        cd.textContent = `${letters[ci]}. ${c}`;
        choicesDiv.appendChild(cd);
      }
    });
    body.appendChild(choicesDiv);

    // Explanation
    if (q.explanation) {
      const exp = el('div', 'review-explanation');
      exp.innerHTML = q.explanation;
      body.appendChild(exp);
    }

    head.addEventListener('click', () => body.classList.toggle('open'));
    item.appendChild(head);
    item.appendChild(body);
    list.appendChild(item);
  });

  if (list.children.length === 0) {
    list.innerHTML = '<p style="color:var(--ink-light);font-style:italic;padding:20px 0">No questions match this filter.</p>';
  }
}

function retakeMCQ() {
  timerMins = 0;
  startMCQ();
}

// ── Timer ─────────────────────────────────────────────────────────
function startTimer(secs) {
  timerSecsLeft = secs;
  $('timer-seg').style.display = 'flex';
  timerInterval = setInterval(() => {
    timerSecsLeft--;
    const m = Math.floor(timerSecsLeft / 60);
    const s = String(timerSecsLeft % 60).padStart(2, '0');
    $('timer-num').textContent = `${m}:${s}`;
    if (timerSecsLeft <= 0) { stopTimer(); confirmSubmit(); }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}

// ── Essays ────────────────────────────────────────────────────────
function startEssay(type) {
  const prompts = type === 'saq' ? saqPrompts : type === 'leq' ? leqPrompts : dbqPrompts;
  if (!prompts || prompts.length === 0) {
    alert('No prompts available for this type.');
    return;
  }
  currentPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  renderEssayScreen(currentPrompt, type);

  // Restore saved draft if one exists for this prompt
  const essayKey = 'apush_essay_' + (currentPrompt.title || 'draft').replace(/\s+/g,'_').slice(0,40);
  const savedDraft = localStorage.getItem(essayKey);
  if (savedDraft) {
    try {
      const draft = JSON.parse(savedDraft);
      const mins = Math.round((Date.now() - draft.savedAt) / 60000);
      const timeStr = mins < 60 ? mins + ' min ago' : Math.round(mins/60) + 'h ago';
      if (draft.text && confirm(`A saved draft for this prompt was found (${timeStr}).\n\nRestore it?`)) {
        $('essay-ta').value = draft.text;
      } else {
        $('essay-ta').value = '';
      }
    } catch(e) { $('essay-ta').value = ''; }
  } else {
    $('essay-ta').value = '';
  }
  updateWordCount();
  showScreen('essay-screen');
}

function renderEssayScreen(p, type) {
  const area = $('essay-prompt-area');
  area.innerHTML = '';

  const wrap = el('div', 'essay-prompt-box');

  // Header
  const title = el('div', 'essay-prompt-title', p.title || 'Essay Prompt');
  wrap.appendChild(title);
  if (p.year) {
    const yr = el('div', '', `<em style="font-size:14px;color:var(--ink-light)">${p.year}</em>`);
    wrap.appendChild(yr);
  }

  // Context / Directions
  if (p.context || p.prompt) {
    const ctx = el('div', '', p.context || p.prompt);
    ctx.style.cssText = 'font-size:15px;margin:12px 0;color:var(--ink-light)';
    wrap.appendChild(ctx);
  }

  // Stimulus
  if (p.stimulus) {
    const sbox = el('div', 'stimulus-box');
    const slbl = el('span', 'stimulus-label', p.stimulus.label || 'Primary Source');
    sbox.appendChild(slbl);
    if (p.stimulus.visual && p.stimulus.imageKey) {
      const imgHtml = getImageHtml(p.stimulus.imageKey, p.stimulus.imageType, p.stimulus.searchQuery);
      if (imgHtml) sbox.insertAdjacentHTML('beforeend', imgHtml);
    }
    if (p.stimulus.text) {
      const st = el('div', 'stimulus-text', p.stimulus.text);
      sbox.appendChild(st);
    }
    if (p.stimulus.attr) {
      const sa = el('span', 'stimulus-attr', '— ' + p.stimulus.attr);
      sbox.appendChild(sa);
    }
    wrap.appendChild(sbox);
  }

  // DBQ documents
  if (p.documents) {
    const docsDiv = el('div', 'essay-docs');
    p.documents.forEach((doc, di) => {
      const d = el('div', 'essay-doc');
      const lbl = el('span', 'essay-doc-label', `Document ${di + 1} — ${doc.label}`);
      d.appendChild(lbl);
      if (doc.visual && doc.imageKey) {
        const imgHtml = getImageHtml(doc.imageKey, doc.imageType, doc.searchQuery);
        if (imgHtml) d.insertAdjacentHTML('beforeend', imgHtml);
      }
      if (doc.text) {
        const dt = el('div', '', doc.text);
        dt.style.cssText = 'font-size:14px;line-height:1.65;font-style:italic;color:var(--ink)';
        d.appendChild(dt);
      }
      if (doc.attr) {
        const da = el('div', '', '— ' + doc.attr);
        da.style.cssText = 'font-size:12px;color:var(--ink-light);margin-top:6px;text-align:right';
        d.appendChild(da);
      }
      docsDiv.appendChild(d);
    });
    wrap.appendChild(docsDiv);
  }

  // Parts (SAQ/LEQ)
  if (p.parts) {
    const partsDiv = el('div', 'essay-parts');
    const partLabels = ['A', 'B', 'C', 'D'];
    p.parts.forEach((part, pi) => {
      const pd = el('div', 'essay-part');
      const pl = el('span', 'part-label', partLabels[pi] + ')');
      const pt = el('span', '', part);
      pd.appendChild(pl); pd.appendChild(pt);
      partsDiv.appendChild(pd);
    });
    wrap.appendChild(partsDiv);
  }

  // LEQ / DBQ prompt
  if (p.prompt && type !== 'saq') {
    const pDiv = el('div', '');
    pDiv.style.cssText = 'font-size:16px;font-weight:600;margin-top:14px;line-height:1.5;color:var(--ink)';
    pDiv.textContent = p.prompt;
    wrap.appendChild(pDiv);
  }

  area.appendChild(wrap);

  // Essay type hint
  const hints = { saq:'Short Answer — ~3 sentences per part', leq:'Long Essay — ~4–6 paragraphs', dbq:'Document-Based Question — ~6–8 paragraphs using documents' };
  $('essay-type-hint').textContent = hints[type] || '';
  fullEssayType = type;
}

function updateWordCount() {
  const words = $('essay-ta').value.trim().split(/\s+/).filter(w => w).length;
  $('word-count').textContent = `${words} word${words !== 1 ? 's' : ''}`;
  // Auto-save essay text
  if (currentPrompt) {
    const essayKey = 'apush_essay_' + (currentPrompt.title || 'draft').replace(/\s+/g,'_').slice(0,40);
    localStorage.setItem(essayKey, JSON.stringify({
      text: $('essay-ta').value,
      promptTitle: currentPrompt.title,
      essayType: fullEssayType,
      savedAt: Date.now()
    }));
    localStorage.setItem('apush_essay_last_key', essayKey);
  }
}

function submitEssay() {
  // Clear saved draft on submit
  if (currentPrompt) {
    const essayKey = 'apush_essay_' + (currentPrompt.title || 'draft').replace(/\s+/g,'_').slice(0,40);
    localStorage.removeItem(essayKey);
    localStorage.removeItem('apush_essay_last_key');
  }
  renderRubricScreen();
  showScreen('rubric-screen');
}

function renderRubricScreen() {
  const p = currentPrompt;
  if (!p) return;

  // My response
  const myResp = $('my-response-area');
  myResp.innerHTML = '';
  const rl = el('div', 'my-response-label', 'Your Response');
  const rt = el('div', 'my-response-text', $('essay-ta').value || '(No response written)');
  myResp.appendChild(rl); myResp.appendChild(rt);

  // Rubric
  const rubricArea = $('rubric-area');
  rubricArea.innerHTML = '';
  if (!p.rubric) { rubricArea.innerHTML = '<p style="color:var(--ink-light)">No rubric available.</p>'; return; }

  const totalDiv = el('div', '', `<div style="font-family:'Playfair Display',serif;font-size:20px;font-weight:700;margin-bottom:16px">Rubric — ${p.rubric.total} Points</div>`);
  rubricArea.appendChild(totalDiv);

  p.rubric.sections.forEach(sec => {
    const section = el('div', 'rubric-section');
    const stitle  = el('div', 'rubric-section-title', sec.title);
    section.appendChild(stitle);
    if (sec.rows) {
      sec.rows.forEach(row => {
        const r = el('div', 'rubric-row');
        r.innerHTML = `<span class="rubric-pts">${row.pts}</span><span>${row.desc}</span>`;
        section.appendChild(r);
      });
    }
    if (sec.note) {
      const note = el('div', 'rubric-note', sec.note);
      section.appendChild(note);
    }
    rubricArea.appendChild(section);
  });

  // Self-score
  const ss = $('self-score-area');
  ss.innerHTML = '';
  const ssl = el('div', 'self-score-title', '✍️ Self-Score');
  ss.appendChild(ssl);
  for (let i = 0; i < (p.rubric.total || 3); i++) {
    const row = el('div', 'score-input-row');
    row.innerHTML = `<label>Point ${i + 1}</label><input type="number" min="0" max="1" value="0" style="width:54px">`;
    ss.appendChild(row);
  }
  const total = el('div', '', '<strong>Total: <span id="score-total">0</span> / ' + p.rubric.total + '</strong>');
  total.style.cssText = 'font-family:"Playfair Display",serif;font-size:18px;margin-top:10px;color:var(--gold)';
  ss.appendChild(total);

  ss.querySelectorAll('input').forEach(inp => {
    inp.addEventListener('input', () => {
      const sum = [...ss.querySelectorAll('input')].reduce((s, i) => s + (parseInt(i.value) || 0), 0);
      $('score-total').textContent = sum;
    });
  });
}

// ── Full Exam ─────────────────────────────────────────────────────
function startFull() {
  fullPhase = 0;
  sessionQs = buildSessionQuestions(55);
  answered  = new Array(55).fill(null);
  selected  = new Array(55).fill(null);
  flagged   = new Array(55).fill(false);
  correct   = 0; incorrect = 0;
  currentIdx = 0;
  if (timerMins > 0) startTimer(195 * 60);
  showScreen('mcq-screen');
  renderQuestion(0);
}

function advanceFullPhase() {
  const modal = $('phase-modal');
  modal.style.display = 'none';
  fullPhase++;
  if      (fullPhase === 1) startEssay('saq');
  else if (fullPhase === 2) startEssay('leq');
  else if (fullPhase === 3) startEssay('dbq');
  else                      showResults();
}

// ── Document Library ──────────────────────────────────────────────
let docPeriodFilter = 'all';

function filterDocs() {
  renderDocs();
}

function setDocPeriod(p, btn) {
  docPeriodFilter = p;
  document.querySelectorAll('#period-pills .rf-pill').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderDocs();
}

function renderDocs() {
  const q     = ($('doc-search').value || '').toLowerCase();
  const docs  = PRIMARY_DOCS.filter(d => {
    const matchPeriod = docPeriodFilter === 'all' || d.period === docPeriodFilter ||
      (docPeriodFilter === '1' && (d.period === '1' || d.period === '2'));
    const matchSearch = !q ||
      d.title.toLowerCase().includes(q) ||
      (d.excerpt && d.excerpt.toLowerCase().includes(q)) ||
      (d.significance && d.significance.toLowerCase().includes(q));
    return matchPeriod && matchSearch;
  });

  $('docs-count').textContent = `Showing ${docs.length} of ${PRIMARY_DOCS.length} documents`;
  const list = $('docs-list');
  list.innerHTML = '';

  docs.forEach(doc => {
    const card = el('div', 'doc-card');
    const head = el('div', 'doc-card-head');
    head.innerHTML = `<span class="doc-title">${doc.title}</span><span class="doc-date">${doc.date}</span>`;
    card.appendChild(head);

    const type = el('span', 'doc-type', doc.type);
    card.appendChild(type);

    if (doc.excerpt) {
      const ex = el('div', 'doc-excerpt', '"' + doc.excerpt + '"');
      card.appendChild(ex);
    }
    if (doc.attr) {
      const at = el('div', '', '— ' + doc.attr);
      at.style.cssText = 'font-size:12px;color:var(--ink-light);margin-bottom:8px;text-align:right;font-style:italic';
      card.appendChild(at);
    }
    if (doc.significance) {
      const sig = el('div', 'doc-significance', doc.significance);
      card.appendChild(sig);
    }
    if (doc.keyIdeas && doc.keyIdeas.length) {
      const ki = el('div', 'doc-key-ideas');
      doc.keyIdeas.forEach(idea => ki.appendChild(el('span', 'doc-key-idea', idea)));
      card.appendChild(ki);
    }
    list.appendChild(card);
  });
}

// ── Navigation helpers ────────────────────────────────────────────
function goHome() {
  stopTimer();
  showScreen('start-screen');
  initStartStats();
}

// ── Keyboard shortcuts ────────────────────────────────────────────
document.addEventListener('keydown', e => {
  const screen = document.querySelector('.screen.active');
  if (!screen || screen.id !== 'mcq-screen') return;
  const letters = { a:0, b:1, c:2, d:3, e:4 };
  const key = e.key.toLowerCase();

  if (key in letters && answered[currentIdx] === null) {
    const idx = letters[key];
    if (idx < sessionQs[currentIdx].choices.length) handleAnswer(currentIdx, idx);
  }
  if (key === 'arrowright' || key === 'enter') nextQ();
  if (key === 'arrowleft')  prevQ();
  if (key === 'f') toggleFlag();
});

// ── Init ──────────────────────────────────────────────────────────
pickMode('mcq');
