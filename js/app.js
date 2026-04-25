// STATE
// ═══════════════════════════════════════════════════════
let mode = 'mcq';
let chosenCount = 40;
let chosenMins = 0;
let sessionQs = [];
let answered = [];   // null | chosen index
let flagged = [];    // bool per question
let score = { correct: 0, incorrect: 0 };
let currentQ = 0;
let timerInterval = null;
let timerSecs = 0;
let currentEssay = null;
let fullPhase = 0;   // 0=mcq,1=saq,2=leq,3=dbq
let essayResponse = '';
let reviewFilter = 'all';
let savedSession = null;  // localStorage persistence
let darkMode = false;

// ═══════════════════════════════════════════════════════
// DARK MODE (feature 11)
// ═══════════════════════════════════════════════════════
function toggleDark() {
  darkMode = !darkMode;
  document.body.classList.toggle('dark-mode', darkMode);
  document.getElementById('dark-btn').textContent = darkMode ? '☀️ Light' : '🌙 Dark';
  try { localStorage.setItem('apush_dark', darkMode ? '1' : '0'); } catch(e){}
}
function initDark() {
  try { if (localStorage.getItem('apush_dark') === '1') toggleDark(); } catch(e){}
}

// ═══════════════════════════════════════════════════════
// START SCREEN
// ═══════════════════════════════════════════════════════
function pickMode(m) {
  mode = m;
  document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('card-' + m).classList.add('selected');
  document.getElementById('mcq-sub').classList.toggle('visible', m === 'mcq' || m === 'full');
  // Show/hide saved session banner
  renderSavedBanner();
}

function pickCount(n, el) {
  chosenCount = n;
  document.querySelectorAll('#count-row .opt-pill').forEach(b => b.classList.remove('sel'));
  el.classList.add('sel');
}

function pickTime(n, el) {
  chosenMins = n;
  document.querySelectorAll('#time-row .opt-pill').forEach(b => b.classList.remove('sel'));
  el.classList.add('sel');
}

function launch() {
  if (!mode) { alert('Please select an exam format.'); return; }
  stopTimer();
  clearSavedSession();
  if (mode === 'mcq') startMCQ();
  else if (mode === 'full') startFull();
  else startEssay(mode);
}

function goHome() {
  stopTimer();
  document.getElementById('top-bar').style.display = 'none';
  renderSavedBanner();
  renderStats();
  showScreen('start-screen');
}

// ═══════════════════════════════════════════════════════
// SAVED SESSION BANNER (feature 8)
// ═══════════════════════════════════════════════════════
function renderSavedBanner() {
  const existing = document.getElementById('saved-banner');
  if (existing) existing.remove();
  try {
    const raw = localStorage.getItem('apush_session');
    if (!raw) return;
    savedSession = JSON.parse(raw);
    if (!savedSession || !savedSession.sessionQs || savedSession.sessionQs.length === 0) return;
    const done = savedSession.answered.filter(a => a !== null).length;
    const total = savedSession.sessionQs.length;
    const banner = document.createElement('div');
    banner.id = 'saved-banner';
    banner.style.cssText = 'background:var(--gold-pale);border:1.5px solid var(--gold);border-radius:2px;padding:14px 20px;margin-bottom:24px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap';
    banner.innerHTML = `
      <div>
        <div style="font-family:'Playfair Display',serif;font-weight:700;font-size:14px;color:var(--ink);margin-bottom:4px">📂 Saved Session Found</div>
        <div style="font-size:12px;color:var(--ink-light)">${done} of ${total} questions answered · ${savedSession.score.correct} correct</div>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-ink" style="padding:8px 16px;font-size:10px" onclick="resumeSession()">Resume →</button>
        <button class="btn btn-ghost" style="padding:8px 16px;font-size:10px" onclick="clearSavedSession()">Discard</button>
      </div>`;
    const startPad = document.querySelector('#start-screen .content-pad, #start-screen');
    const intro = document.querySelector('.start-intro');
    intro.after(banner);
  } catch(e) { savedSession = null; }
}

function saveSession() {
  try {
    localStorage.setItem('apush_session', JSON.stringify({
      sessionQs, answered, flagged, score, currentQ, chosenCount, chosenMins, mode
    }));
  } catch(e) {}
}

function clearSavedSession() {
  try { localStorage.removeItem('apush_session'); } catch(e) {}
  savedSession = null;
  const banner = document.getElementById('saved-banner');
  if (banner) banner.remove();
}

function resumeSession() {
  if (!savedSession) return;
  sessionQs = savedSession.sessionQs;
  answered = savedSession.answered;
  flagged = savedSession.flagged || new Array(sessionQs.length).fill(false);
  score = savedSession.score;
  currentQ = savedSession.currentQ;
  chosenCount = savedSession.chosenCount;
  chosenMins = savedSession.chosenMins;
  mode = savedSession.mode || 'mcq';
  showTopBar();
  updateBar();
  showScreen('mcq-screen');
  renderQ();
  renderGrid();          // ← fix #15: grid now renders with restored answered/flagged state
  updateGridHighlight(); // ← and highlights restored correctly
  if (chosenMins > 0) startTimer(chosenMins);
}

// ═══════════════════════════════════════════════════════
// SCREEN MANAGEMENT
// ═══════════════════════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ═══════════════════════════════════════════════════════
// TIMER
// ═══════════════════════════════════════════════════════
function startTimer(mins) {
  stopTimer();
  if (mins <= 0) { document.getElementById('timer-seg').style.display = 'none'; return; }
  timerSecs = mins * 60;
  document.getElementById('timer-seg').style.display = 'block';
  renderTimer();
  timerInterval = setInterval(() => {
    timerSecs--;
    renderTimer();
    if (timerSecs <= 0) { stopTimer(); onTimeUp(); }
  }, 1000);
}

function stopTimer() { clearInterval(timerInterval); timerInterval = null; }

function renderTimer() {
  const m = Math.floor(timerSecs / 60);
  const s = timerSecs % 60;
  const el = document.getElementById('timer-num');
  el.textContent = `${m}:${s.toString().padStart(2,'0')}`;
  el.classList.toggle('warn', timerSecs <= 300);
}

function onTimeUp() {
  if (mode === 'mcq' || mode === 'full') showResults();
  else submitEssay();
}

// ═══════════════════════════════════════════════════════
// TOP BAR
// ═══════════════════════════════════════════════════════
function showTopBar() { document.getElementById('top-bar').style.display = 'flex'; }

function updateBar() {
  const remain = answered.filter(a => a === null).length;
  document.getElementById('bar-correct').textContent = score.correct;
  document.getElementById('bar-incorrect').textContent = score.incorrect;
  document.getElementById('bar-remain').textContent = remain;
}

function setBarEssay() {
  document.getElementById('bar-correct').textContent = '—';
  document.getElementById('bar-incorrect').textContent = '—';
  document.getElementById('bar-remain').textContent = '—';
}

// ── SKIP TO UNANSWERED (feature #1 simple) ──
function skipToUnanswered() {
  // Search forward from current position, then wrap
  for (let offset = 1; offset <= sessionQs.length; offset++) {
    const idx = (currentQ + offset) % sessionQs.length;
    if (answered[idx] === null) {
      currentQ = idx;
      renderQ();
      updateGridHighlight();
      return;
    }
  }
  // None found
  const btn = document.getElementById('skip-btn');
  const orig = btn.textContent;
  btn.textContent = '✓ All Answered';
  btn.style.color = 'var(--green)';
  setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 1800);
}

// ── SESSION STATS (feature #7) ──
function loadStats() {
  try {
    const raw = localStorage.getItem('apush_stats');
    return raw ? JSON.parse(raw) : { sessions: 0, totalQ: 0, scores: [] };
  } catch(e) { return { sessions: 0, totalQ: 0, scores: [] }; }
}

function saveStats(pct, qCount) {
  try {
    const stats = loadStats();
    stats.sessions++;
    stats.totalQ += qCount;
    stats.scores.push(pct);
    if (stats.scores.length > 50) stats.scores = stats.scores.slice(-50); // keep last 50
    localStorage.setItem('apush_stats', JSON.stringify(stats));
  } catch(e) {}
}

function renderStats() {
  try {
    const stats = loadStats();
    if (stats.sessions === 0) { document.getElementById('stats-strip').style.display = 'none'; return; }
    document.getElementById('stats-strip').style.display = 'flex';
    document.getElementById('stat-sessions').textContent = stats.sessions;
    document.getElementById('stat-questions').textContent = stats.totalQ.toLocaleString();
    const best = Math.max(...stats.scores);
    const avg = Math.round(stats.scores.reduce((a,b) => a+b, 0) / stats.scores.length);
    document.getElementById('stat-best').textContent = best + '%';
    document.getElementById('stat-avg').textContent = avg + '%';
  } catch(e) {}
}

// ═══════════════════════════════════════════════════════
// MCQ
// ═══════════════════════════════════════════════════════
function shuffleChoices(q) {
  const idx = shuffle([0,1,2,3]);
  return { ...q, choices: idx.map(i => q.choices[i]), answer: idx.indexOf(q.answer) };
}

function startMCQ(bank) {
  const pool = bank || allQuestions;
  const n = Math.min(chosenCount, pool.length);
  sessionQs = shuffle([...pool]).slice(0, n).map(shuffleChoices);
  answered = new Array(sessionQs.length).fill(null);
  flagged = new Array(sessionQs.length).fill(false);
  score = { correct: 0, incorrect: 0 };
  currentQ = 0;
  showTopBar();
  document.getElementById('timer-seg').style.display = 'none';
  updateBar();
  showScreen('mcq-screen');
  if (chosenMins > 0) startTimer(chosenMins);
  renderQ();
  renderGrid();
}

function retakeMCQ() { startMCQ(); }

// ── QUESTION GRID (feature 14) ──
function toggleGrid() {
  const panel = document.getElementById('q-grid-panel');
  panel.classList.toggle('open');
}

function renderGrid() {
  const nums = document.getElementById('q-grid-nums');
  nums.innerHTML = '';
  sessionQs.forEach((q, i) => {
    const btn = document.createElement('button');
    btn.className = 'q-dot';
    btn.textContent = i + 1;
    btn.title = q.topic;
    btn.onclick = () => { currentQ = i; renderQ(); updateGridHighlight(); };
    nums.appendChild(btn);
  });
  updateGridHighlight();
}

function updateGridHighlight() {
  const dots = document.querySelectorAll('.q-dot');
  dots.forEach((dot, i) => {
    dot.className = 'q-dot';
    if (i === currentQ) dot.classList.add('current');
    else if (flagged[i]) dot.classList.add('flagged');
    else if (answered[i] !== null) {
      dot.classList.add(answered[i] === sessionQs[i].answer ? 'answered-correct' : 'answered-wrong');
    }
  });
}

// ── FLAG (feature 3) ──
function toggleFlag() {
  flagged[currentQ] = !flagged[currentQ];
  const btn = document.getElementById('flag-btn');
  btn.classList.toggle('flagged', flagged[currentQ]);
  btn.textContent = flagged[currentQ] ? '🚩 Flagged' : '🚩 Flag Question';
  updateGridHighlight();
  saveSession();
}

function renderQ() {
  // Scroll to top of page on every question change (#5)
  document.getElementById('mcq-screen').scrollIntoView({ behavior: 'smooth', block: 'start' });
  const q = sessionQs[currentQ];
  const total = sessionQs.length;
  const pct = (currentQ / total) * 100;

  document.getElementById('q-num-tag').textContent = `Question ${currentQ + 1}`;
  document.getElementById('q-topic-tag').textContent = q.topic;
  document.getElementById('q-text').textContent = q.question;
  document.getElementById('prog-fill').style.width = pct + '%';
  document.getElementById('prog-label').textContent = `${currentQ + 1} of ${total}`;

  // Flag button state
  const flagBtn = document.getElementById('flag-btn');
  flagBtn.classList.toggle('flagged', flagged[currentQ]);
  flagBtn.textContent = flagged[currentQ] ? '🚩 Flagged' : '🚩 Flag Question';

  // Stimulus
  const stimArea = document.getElementById('stimulus-area');
  if (q.stimulus) {
    const sv = q.stimulus.visual === true;
    const imgData = sv && q.stimulus.imageKey ? IMGS[q.stimulus.imageKey] : null;
    let sHTML = `<div class="stimulus-box ${sv ? 'stim-visual' : ''}">
      <span class="stimulus-label">${q.stimulus.label || 'Source'}</span>`;
    if (imgData) {
      sHTML += `<img src="${imgData}" style="max-width:100%;border-radius:1px;margin:8px 0 10px;display:block;border:1px solid var(--parchment-dark)" alt="${q.stimulus.label}">`;
    } else if (sv) {
      sHTML += `<div class="doc-image-notice">🖼️ <strong>Visual Document</strong> — This stimulus is an image (${q.stimulus.imageType || 'political cartoon'}).
        <br>To view it, search: <em class="doc-search-term">${q.stimulus.searchQuery}</em>
        <a class="doc-search-link" href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(q.stimulus.searchQuery)}" target="_blank" rel="noopener">Search Google Images →</a>
      </div>`;
    }
    sHTML += `<div class="stimulus-text">${q.stimulus.text}</div>
      ${q.stimulus.attr ? `<div class="stimulus-attr">— ${q.stimulus.attr}</div>` : ''}
    </div>`;
    stimArea.innerHTML = sHTML;
  } else { stimArea.innerHTML = ''; }

  // Choices
  const box = document.getElementById('choices');
  box.innerHTML = '';
  const ua = answered[currentQ];
  ['A','B','C','D'].forEach((ltr, i) => {
    const div = document.createElement('div');
    div.className = 'choice';
    div.innerHTML = `<span class="choice-ltr">${ltr}</span><span class="choice-text">${q.choices[i]}</span>`;
    if (ua !== null) {
      div.classList.add('locked');
      if (i === q.answer) div.classList.add(ua === i ? 'correct' : 'show-correct');
      if (i === ua && ua !== q.answer) div.classList.add('incorrect');
    } else {
      div.onclick = () => pickAnswer(i);
    }
    box.appendChild(div);
  });

  // Explanation
  const expEl = document.getElementById('explanation');
  if (ua !== null) {
    const ok = ua === q.answer;
    document.getElementById('badge-wrap').innerHTML =
      `<span class="res-badge ${ok ? 'ok' : 'no'}">${ok ? '✓ Correct' : '✗ Incorrect'}</span>`;
    document.getElementById('exp-text').innerHTML = q.explanation;
    expEl.classList.add('visible');
  } else {
    expEl.classList.remove('visible');
    document.getElementById('badge-wrap').innerHTML = '';
  }

  document.getElementById('prev-btn').disabled = currentQ === 0;
  document.getElementById('next-btn').textContent =
    currentQ === total - 1 ? 'See Results →' : 'Next →';

  updateGridHighlight();
}

function pickAnswer(i) {
  if (answered[currentQ] !== null) return;
  const q = sessionQs[currentQ];
  answered[currentQ] = i;
  if (i === q.answer) score.correct++; else score.incorrect++;
  updateBar();
  renderQ();
  saveSession();
}

function prevQ() {
  if (currentQ > 0) { currentQ--; renderQ(); }
}

// ═══════════════════════════════════════════════════════
// KEYBOARD NAVIGATION (feature 9)
// ═══════════════════════════════════════════════════════
document.addEventListener('keydown', e => {
  const mcqActive = document.getElementById('mcq-screen').classList.contains('active');
  if (!mcqActive) return;
  const tag = document.activeElement.tagName;
  if (tag === 'TEXTAREA' || tag === 'INPUT') return;

  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); nextQ(); }
  else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); prevQ(); }
  else if (e.key === 'f' || e.key === 'F') { toggleFlag(); }
  else if (e.key === 'g' || e.key === 'G') { toggleGrid(); }
  else if (['a','b','c','d','1','2','3','4'].includes(e.key.toLowerCase())) {
    const map = {a:0,b:1,c:2,d:3,'1':0,'2':1,'3':2,'4':3};
    const idx = map[e.key.toLowerCase()];
    if (answered[currentQ] === null) pickAnswer(idx);
  }
});

// ═══════════════════════════════════════════════════════
// RESULTS & PERIOD BREAKDOWN (features 1 & 2)
// ═══════════════════════════════════════════════════════
function showResults() {
  stopTimer();
  clearSavedSession();

  const total = sessionQs.length;
  const pct = Math.round((score.correct / total) * 100);
  document.getElementById('res-score').textContent = `${score.correct}/${total}`;
  document.getElementById('res-correct').textContent = score.correct;
  document.getElementById('res-incorrect').textContent = score.incorrect;
  document.getElementById('res-pct').textContent = pct + '%';

  document.getElementById('res-title').textContent =
    mode === 'full' ? 'Full Exam Complete — MCQ Results' : 'Examination Complete';

  let grade, msg;
  if (pct >= 90) { grade = '5 — Extremely Well Qualified'; msg = "Outstanding. You're exam-ready."; }
  else if (pct >= 75) { grade = '4 — Well Qualified'; msg = 'Strong work. Review the questions you missed.'; }
  else if (pct >= 60) { grade = '3 — Qualified'; msg = 'Solid base. Target your weaker periods.'; }
  else if (pct >= 45) { grade = '2 — Possibly Qualified'; msg = 'Keep studying. More reps will raise your score.'; }
  else { grade = '1 — No Recommendation'; msg = "Don't give up — review your notes and retake."; }
  document.getElementById('res-grade').textContent = grade;
  document.getElementById('res-msg').textContent = msg;

  renderAPConversionTable(pct);
  renderPeriodBreakdown();
  saveStats(pct, total);  // ← record session for stats strip
  showScreen('results-screen');
}

// AP SCORE CONVERSION TABLE (feature #6)
function renderAPConversionTable(studentPct) {
  const bands = [
    { score:5, label:'Extremely Well Qualified', min:77, cssClass:'s5', desc:'College credit at most institutions' },
    { score:4, label:'Well Qualified',           min:62, cssClass:'s4', desc:'Credit at many selective institutions' },
    { score:3, label:'Qualified',                min:48, cssClass:'s3', desc:'Credit at some institutions' },
    { score:2, label:'Possibly Qualified',       min:35, cssClass:'s2', desc:'No credit at most institutions' },
    { score:1, label:'No Recommendation',        min:0,  cssClass:'s1', desc:'No credit' },
  ];
  const wrap = document.getElementById('ap-conversion-wrap');
  const table = document.getElementById('ap-conversion-table');
  if (sessionQs.length < 10) { wrap.style.display = 'none'; return; }
  wrap.style.display = 'block';
  const studentBand = bands.find(b => studentPct >= b.min) || bands[4];
  table.innerHTML = bands.map((b, bi) => {
    const isCurrent = b.score === studentBand.score;
    const maxPct = bi === 0 ? 100 : bands[bi-1].min - 1;
    const rangeStr = `${b.min}–${maxPct}%`;
    return `<div class="ap-conv-row${isCurrent ? ' current-score' : ''}">
      <span class="ap-conv-score ${b.cssClass}">${b.score}${isCurrent ? ' ◀' : ''}</span>
      <span class="ap-conv-label"><strong>${b.label}</strong><br><span style="opacity:.65;font-size:11px">${b.desc}</span></span>
      <span class="ap-conv-range">${rangeStr}</span>
    </div>`;
  }).join('');
}

function renderPeriodBreakdown() {
  const periodMap = {};
  sessionQs.forEach((q, i) => {
    const period = q.topic.split(':')[0].trim(); // e.g. "Period 6"
    if (!periodMap[period]) periodMap[period] = { correct: 0, total: 0 };
    periodMap[period].total++;
    if (answered[i] === q.answer) periodMap[period].correct++;
  });

  const list = document.getElementById('period-breakdown-list');
  list.innerHTML = '';
  const periods = Object.keys(periodMap).sort((a, b) => {
    const na = parseInt(a.replace(/\D/g,'')) || 99;
    const nb = parseInt(b.replace(/\D/g,'')) || 99;
    return na - nb;
  });

  periods.forEach(period => {
    const { correct, total } = periodMap[period];
    if (total === 0) return;
    const pct = Math.round((correct / total) * 100);
    const barClass = pct >= 70 ? 'good' : pct >= 50 ? 'ok' : 'poor';
    const row = document.createElement('div');
    row.className = 'period-row';
    row.innerHTML = `
      <div class="period-label">${period}</div>
      <div class="period-bar-wrap"><div class="period-bar ${barClass}" style="width:${pct}%"></div></div>
      <div class="period-pct">${pct}%</div>
      <div class="period-frac">${correct}/${total}</div>`;
    list.appendChild(row);
  });
}

// ═══════════════════════════════════════════════════════
// REVIEW MODE (feature 1)
// ═══════════════════════════════════════════════════════
function openReview(filter) {
  reviewFilter = filter || 'all';
  renderReview();
  showScreen('review-screen');
}

function setReviewFilter(filter, el) {
  reviewFilter = filter;
  document.querySelectorAll('.rf-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  renderReview();
}

function renderReview() {
  const list = document.getElementById('review-list');
  list.innerHTML = '';

  sessionQs.forEach((q, i) => {
    const isCorrect = answered[i] === q.answer;
    const isWrong = answered[i] !== null && !isCorrect;
    const isFlagged = flagged[i];
    const isUnanswered = answered[i] === null;

    if (reviewFilter === 'wrong' && !isWrong) return;
    if (reviewFilter === 'correct' && !isCorrect) return;
    if (reviewFilter === 'flagged' && !isFlagged) return;

    const statusClass = isWrong ? 'wrong' : isCorrect ? 'correct' : 'unanswered';
    const statusLabel = isWrong ? '✗ Incorrect' : isCorrect ? '✓ Correct' : '— Skipped';
    const flagLabel = isFlagged ? ' 🚩' : '';

    const item = document.createElement('div');
    item.className = `review-item ${statusClass}`;
    item.innerHTML = `
      <div class="review-item-hd" onclick="this.parentElement.classList.toggle('open')">
        <span class="review-item-num">Q${i+1}${flagLabel} · ${statusLabel}</span>
        <span class="review-item-q">${q.question.slice(0,90)}${q.question.length>90?'…':''}</span>
        <span class="review-item-chevron">▼</span>
      </div>
      <div class="review-item-body">
        <div style="font-size:12px;color:var(--ink-light);margin-bottom:10px;font-family:'Libre Baskerville',serif;letter-spacing:.08em;text-transform:uppercase">${q.topic}</div>
        <p style="font-size:15px;line-height:1.65;color:var(--ink);margin-bottom:14px">${q.question}</p>
        ${q.choices.map((c, ci) => {
          let cls = '';
          if (ci === q.answer) cls = 'choice correct locked';
          else if (ci === answered[i] && answered[i] !== q.answer) cls = 'choice incorrect locked';
          else cls = 'choice locked';
          return `<div class="${cls}" style="margin-bottom:6px"><span class="choice-ltr">${['A','B','C','D'][ci]}</span><span class="choice-text">${c}</span></div>`;
        }).join('')}
        <div style="margin-top:14px;background:var(--ink);border-radius:1px;padding:14px 18px">
          <div class="exp-hd">Explanation</div>
          <p class="exp-text">${q.explanation}</p>
        </div>
      </div>`;
    list.appendChild(item);
  });

  if (list.children.length === 0) {
    list.innerHTML = `<div style="text-align:center;padding:40px;color:var(--ink-light);font-style:italic;font-size:15px">No questions match this filter.</div>`;
  }
}

// ═══════════════════════════════════════════════════════
// SUBMIT WARNING (feature #2)
// ═══════════════════════════════════════════════════════
function nextQ() {
  if (currentQ === sessionQs.length - 1) {
    const unanswered = answered.filter(a => a === null).length;
    const flaggedCount = flagged.filter(Boolean).length;
    if (unanswered > 0 || flaggedCount > 0) {
      showSubmitWarning(unanswered, flaggedCount);
      return;
    }
    if (mode === 'full') { showPhaseModal(); return; }
    showResults();
    return;
  }
  currentQ++;
  renderQ();
}

function showSubmitWarning(unanswered, flaggedCount) {
  const modal = document.getElementById('submit-modal');
  let lines = [];
  if (unanswered > 0) lines.push(`<strong>${unanswered} question${unanswered>1?'s':''}</strong> unanswered`);
  if (flaggedCount > 0) lines.push(`<strong>${flaggedCount} question${flaggedCount>1?'s':''}</strong> still flagged`);
  document.getElementById('submit-modal-body').innerHTML =
    `You have ${lines.join(' and ')}. You can go back to review them, or submit now.<br><br>
     <span style="font-size:12px;opacity:.7">Once submitted, answers cannot be changed.</span>`;
  modal.style.display = 'flex';
}

function closeSubmitModal() {
  document.getElementById('submit-modal').style.display = 'none';
}

function confirmSubmit() {
  closeSubmitModal();
  if (mode === 'full') { showPhaseModal(); return; }
  showResults();
}

// ═══════════════════════════════════════════════════════
// FULL EXAM — PHASES + SMART TIMING (features #8 & #14)
// ═══════════════════════════════════════════════════════
const FULL_PHASES = [
  { key:'mcq', label:'Section I — Multiple Choice',  icon:'📝', mins:55 },
  { key:'saq', label:'Section II-A — Short Answer',  icon:'✍️', mins:40 },
  { key:'leq', label:'Section II-B — Long Essay',    icon:'📄', mins:40 },
  { key:'dbq', label:'Section II-C — Document-Based',icon:'🗂️', mins:60 },
];

function startFull() {
  fullPhase = 0;
  chosenCount = 55;
  sessionQs = shuffle([...allQuestions]).slice(0, 55).map(shuffleChoices);
  answered = new Array(55).fill(null);
  flagged = new Array(55).fill(false);
  score = { correct: 0, incorrect: 0 };
  currentQ = 0;
  showTopBar();
  updateBar();
  showScreen('mcq-screen');
  startTimer(FULL_PHASES[0].mins);
  renderQ();
  renderGrid();
}

function showPhaseModal() {
  stopTimer();
  const done = FULL_PHASES[fullPhase];
  const next = FULL_PHASES[fullPhase + 1];
  const modal = document.getElementById('phase-modal');
  document.getElementById('phase-modal-icon').textContent = next ? next.icon : '📜';
  document.getElementById('phase-modal-title').textContent = done.label + ' Complete';
  if (next) {
    document.getElementById('phase-modal-body').innerHTML =
      `<strong>${done.label}</strong> is complete.<br><br>
       Next up: <strong>${next.label}</strong><br>
       Allotted time: <strong>${next.mins} minutes</strong><br><br>
       Take a short break if needed, then click below when you're ready to begin.`;
    document.getElementById('phase-modal-btn').textContent = `Begin ${next.label} →`;
  } else {
    document.getElementById('phase-modal-body').innerHTML =
      `You've completed all four sections of the Full AP Exam.<br><br>
       Your MCQ results and period breakdown are ready below.`;
    document.getElementById('phase-modal-btn').textContent = 'See Results →';
  }
  const m = Math.floor(timerSecs/60), s = timerSecs%60;
  document.getElementById('phase-modal-timer-label').textContent = 'Time remaining when submitted';
  document.getElementById('phase-modal-timer').textContent = timerSecs > 0 ? `${m}:${s.toString().padStart(2,'0')}` : '—';
  modal.style.display = 'flex';
}

function advanceFullPhase() {
  document.getElementById('phase-modal').style.display = 'none';
  fullPhase++;
  const phase = FULL_PHASES[fullPhase];
  if (!phase) { showResults(); return; }
  startEssay(phase.key, phase.mins);
}

// ═══════════════════════════════════════════════════════
// ESSAY MODES
// ═══════════════════════════════════════════════════════
function startEssay(type, overrideMins) {
  const banks = { saq: saqPrompts, leq: leqPrompts, dbq: dbqPrompts };
  const bank = banks[type];
  currentEssay = { ...bank[Math.floor(Math.random() * bank.length)], type: type.toUpperCase() };
  document.getElementById('essay-prompt-area').innerHTML = buildPromptHTML(currentEssay);
  document.getElementById('essay-ta').value = '';
  updateWordCount();
  // Show guidance strip (feature #4)
  document.getElementById('essay-guidance').style.display = 'flex';
  const hints = { SAQ:'Aim for ~150–250 words per part', LEQ:'Aim for ~500–800 words', DBQ:'Aim for ~700–1,000 words' };
  document.getElementById('essay-type-hint').textContent = '· ' + (hints[type.toUpperCase()] || '');
  showTopBar();
  setBarEssay();
  showScreen('essay-screen');
  const mins = overrideMins || chosenMins;
  if (mins > 0) startTimer(mins); else document.getElementById('timer-seg').style.display = 'none';
}

// Word count
function updateWordCount() {
  const ta = document.getElementById('essay-ta');
  const words = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
  document.getElementById('word-count').textContent = `${words} word${words !== 1 ? 's' : ''}`;
}

function buildPromptHTML(p) {
  let h = `<div class="essay-card">
    <div class="essay-head">
      <span class="essay-type-badge">${p.type}</span>
      <span class="essay-yr">${p.year}</span>
    </div>
    <div class="essay-body">
      <h3>${p.title}</h3>`;

  if (p.context) h += `<p class="prompt-context">${p.context}</p>`;
  if (p.prompt) h += `<div class="prompt-task"><span class="prompt-task-label">Task</span>${p.prompt}</div>`;
  if (p.parts) {
    h += '<p><strong>Answer all parts of the following question:</strong></p><ul>';
    p.parts.forEach(pt => h += `<li>${pt}</li>`);
    h += '</ul>';
  }
  if (p.stimulus) {
    const sv = p.stimulus.visual === true;
    const imgData = sv && p.stimulus.imageKey ? IMGS[p.stimulus.imageKey] : null;
    h += `<div class="doc-box ${sv ? 'doc-visual' : ''}"><span class="doc-label">${p.stimulus.label}</span>`;
    if (imgData) {
      h += `<img src="${imgData}" style="max-width:100%;border-radius:1px;margin:8px 0 10px;display:block;border:1px solid var(--parchment-dark)" alt="${p.stimulus.label}">`;
    } else if (sv) {
      h += `<div class="doc-image-notice">🖼️ <strong>Visual Document</strong> — This is an image (${p.stimulus.imageType || 'political cartoon'}).
        <br>To view the original, search: <em class="doc-search-term">${p.stimulus.searchQuery}</em>
        <a class="doc-search-link" href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(p.stimulus.searchQuery)}" target="_blank" rel="noopener">Search Google Images →</a>
      </div>`;
    }
    h += `<div class="doc-text">${p.stimulus.text}</div>${p.stimulus.attr ? `<div class="doc-attr">— ${p.stimulus.attr}</div>` : ''}</div>`;
  }
  if (p.documents) {
    h += `<div class="doc-section-hd"><span>📄</span> Primary Source Documents <span class="doc-count">${p.documents.length} documents</span></div>`;
    p.documents.forEach((d, di) => {
      const isVisual = d.visual === true;
      const imgData = isVisual && d.imageKey ? IMGS[d.imageKey] : null;
      h += `<div class="doc-box ${isVisual ? 'doc-visual' : ''}"><span class="doc-label">${d.label}</span>`;
      if (imgData) {
        h += `<img src="${imgData}" style="max-width:100%;border-radius:1px;margin:8px 0 10px;display:block;border:1px solid var(--parchment-dark)" alt="${d.label}">`;
      } else if (isVisual) {
        h += `<div class="doc-image-notice">🖼️ <strong>Visual Document</strong> — This document is an image (${d.imageType || 'political cartoon'}).
          <br>To view the original, search: <em class="doc-search-term">${d.searchQuery}</em>
          <a class="doc-search-link" href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(d.searchQuery)}" target="_blank" rel="noopener">Search Google Images →</a>
        </div>`;
      }
      h += `<div class="doc-text">${d.text}</div>${d.attr ? `<div class="doc-attr">— ${d.attr}</div>` : ''}`;
      // DBQ annotation fields (feature 5)
      if (p.type === 'DBQ') {
        h += `<div class="doc-annotation">
          <span class="doc-annotation-label">📝 Your HAPP Notes (Historical context · Audience · Purpose · Point of view)</span>
          <textarea placeholder="Doc ${di+1} notes: What is the historical situation? Who is the audience? What is the purpose? What is the author's point of view?"></textarea>
        </div>`;
      }
      h += `</div>`;
    });
  }
  if (p.note) h += `<div class="prompt-note"><em>${p.note}</em></div>`;
  h += '</div></div>';
  return h;
}

function submitEssay() {
  stopTimer();
  essayResponse = document.getElementById('essay-ta').value;
  document.getElementById('rubric-area').innerHTML = buildRubricHTML(currentEssay);
  document.getElementById('self-score-area').innerHTML = buildSelfScoreHTML(currentEssay);
  document.getElementById('my-response-area').innerHTML = `
    <div class="my-response-box">
      <h4>Your Response</h4>
      <p>${essayResponse.replace(/</g,'&lt;').replace(/>/g,'&gt;') || '<em style="opacity:.5">No response written.</em>'}</p>
    </div>`;
  // In Full Exam, add a "Continue to next section" button at bottom of rubric screen
  if (mode === 'full' && fullPhase < FULL_PHASES.length - 1) {
    const nextPhase = FULL_PHASES[fullPhase + 1];
    document.getElementById('my-response-area').innerHTML +=
      `<div style="margin-top:20px;padding:20px;background:var(--gold-pale);border:1.5px solid var(--gold);border-radius:2px;text-align:center">
        <div style="font-family:'Playfair Display',serif;font-weight:700;font-size:15px;color:var(--ink);margin-bottom:8px">Ready for the next section?</div>
        <div style="font-size:13px;color:var(--ink-light);margin-bottom:14px">${nextPhase.icon} <strong>${nextPhase.label}</strong> — ${nextPhase.mins} minutes</div>
        <button class="btn btn-ink" onclick="advanceFullPhase()">Begin ${nextPhase.label} →</button>
       </div>`;
  } else if (mode === 'full') {
    document.getElementById('my-response-area').innerHTML +=
      `<div style="margin-top:20px;padding:20px;background:var(--gold-pale);border:1.5px solid var(--gold);border-radius:2px;text-align:center">
        <div style="font-family:'Playfair Display',serif;font-weight:700;font-size:15px;color:var(--ink);margin-bottom:14px">📜 Full Exam Complete — see your MCQ results</div>
        <button class="btn btn-ink" onclick="advanceFullPhase()">See Results →</button>
       </div>`;
  }
  showScreen('rubric-screen');
}

function buildRubricHTML(p) {
  let h = `<div class="rubric-card">
    <div class="rubric-head">
      <h3>Official Scoring Rubric — ${p.type}</h3>
      <p>${p.year} · ${p.title}</p>
    </div><div class="rubric-body">`;
  p.rubric.sections.forEach(sec => {
    h += `<div class="rubric-section"><div class="rubric-sec-title">${sec.title}</div>`;
    sec.rows.forEach(r => {
      h += `<div class="rubric-row"><span class="r-pts">${r.pts} pt${r.pts!==1?'s':''}</span><span class="r-desc">${r.desc}</span></div>`;
    });
    if (sec.note) h += `<div class="rubric-note">${sec.note}</div>`;
    h += '</div>';
  });
  h += `<div class="rubric-total">Total Points Available: ${p.rubric.total}</div></div></div>`;
  return h;
}

// SELF-SCORING CHECKLIST (feature 6)
function buildSelfScoreHTML(p) {
  const checklistMap = {
    SAQ: [
      { pts: 1, label: 'Part A', desc: 'I provided a historically specific and accurate response to Part A.' },
      { pts: 1, label: 'Part B', desc: 'I provided a historically specific and accurate response to Part B.' },
      { pts: 1, label: 'Part C', desc: 'I provided a historically specific and accurate response to Part C.' },
    ],
    LEQ: [
      { pts: 1, label: 'Thesis', desc: 'I wrote a historically defensible thesis that establishes a line of reasoning — not just a restatement of the prompt.' },
      { pts: 1, label: 'Contextualization', desc: 'I described a broader historical context and explained how it is relevant to my argument (more than a phrase — a full explanation).' },
      { pts: 1, label: 'Evidence', desc: 'I used at least two specific, accurate pieces of historical evidence.' },
      { pts: 1, label: 'Evidence supports argument', desc: 'I used that evidence to explicitly support my argument, not just mentioned it.' },
      { pts: 1, label: 'Historical reasoning', desc: 'I used causation, comparison, or continuity/change over time to frame my argument.' },
      { pts: 1, label: 'Complex understanding', desc: 'I demonstrated complexity: explaining nuance, multiple variables, both sides, connections across time periods, or alternative perspectives.' },
    ],
    DBQ: [
      { pts: 1, label: 'Thesis', desc: 'I wrote a historically defensible thesis that establishes a line of reasoning — not just a restatement of the prompt.' },
      { pts: 1, label: 'Contextualization', desc: 'I described a broader historical context and explained how it is relevant to the prompt (more than a phrase).' },
      { pts: 1, label: 'Document evidence (3+)', desc: 'I accurately used content from at least three documents to address the argument.' },
      { pts: 1, label: 'Document evidence (6+)', desc: 'I accurately used content from at least six documents to address the argument.' },
      { pts: 1, label: 'Sourcing (HAPP)', desc: 'I explained how or why at least one document\'s historical situation, audience, purpose, or point of view is relevant to my argument.' },
      { pts: 1, label: 'Outside evidence', desc: 'I used at least one piece of relevant evidence not found in the documents.' },
      { pts: 1, label: 'Complex understanding', desc: 'I demonstrated complexity: explaining both sides, connecting across time/geography, qualifying the argument, or explaining tensions and contradictions.' },
    ],
  };

  const items = checklistMap[p.type] || [];
  if (items.length === 0) return '';

  let h = `<div class="self-score-card">
    <div class="self-score-title">✅ Self-Scoring Checklist — Did you earn this point?</div>
    <div class="self-score-list" id="self-score-list">`;
  items.forEach((item, i) => {
    h += `<div class="self-score-item">
      <input type="checkbox" id="sc${i}" onchange="updateSelfScore()">
      <label for="sc${i}"><span>[${item.pts} pt] ${item.label}:</span> ${item.desc}</label>
    </div>`;
  });
  h += `</div>
    <div class="self-score-tally">
      <span>Estimated score:</span>
      <span class="self-score-pts" id="self-score-pts">0</span>
      <span>/ ${p.rubric.total} points</span>
    </div>
  </div>`;
  return h;
}

function updateSelfScore() {
  const checked = document.querySelectorAll('#self-score-list input:checked').length;
  const el = document.getElementById('self-score-pts');
  if (el) el.textContent = checked;
}

// ═══════════════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════════════
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ── PRINT ESSAY PROMPT ONLY (feature #9) ──
function printPrompt() {
  const promptHTML = document.getElementById('essay-prompt-area').innerHTML;
  const win = window.open('', '_blank', 'width=800,height=700');
  win.document.write(`<!DOCTYPE html><html><head><title>APUSH Prompt</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Crimson+Pro&family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet">
    <style>
      body{font-family:'Crimson Pro',Georgia,serif;max-width:720px;margin:40px auto;padding:0 24px;color:#1c1407;background:#fff}
      h3{font-family:'Playfair Display',serif;font-size:20px;margin-bottom:12px}
      .essay-type-badge{font-family:'Libre Baskerville',serif;font-size:10px;letter-spacing:.2em;text-transform:uppercase;border:1px solid #9a6f0a;color:#9a6f0a;padding:3px 8px;border-radius:2px}
      .prompt-task{background:#1c1407;color:#f4edd8;padding:14px 18px;margin:14px 0;font-size:15px;line-height:1.65}
      .prompt-task-label{display:block;font-family:'Libre Baskerville',serif;font-size:9px;letter-spacing:.28em;text-transform:uppercase;color:#c49020;margin-bottom:6px}
      .doc-box{border:1px solid #e5d5b0;border-left:3px solid #c49020;background:#ede0c4;padding:14px 16px;margin:12px 0}
      .doc-label{font-family:'Libre Baskerville',serif;font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:#9a6f0a;display:block;margin-bottom:6px;font-weight:700}
      .doc-text{font-size:13px;line-height:1.65;font-style:italic}
      .doc-attr{font-size:11px;color:#4a3520;opacity:.75;margin-top:6px;font-style:normal}
      .doc-visual{border-left-color:#7a1515!important}
      .doc-image-notice{background:#fff8f0;border:1px solid #f0d8b8;padding:10px 12px;margin-bottom:8px;font-size:12px}
      .doc-section-hd{font-family:'Playfair Display',serif;font-weight:700;font-size:14px;border-bottom:2px solid #9a6f0a;padding-bottom:6px;margin:20px 0 14px;display:flex;gap:8px}
      .doc-count{margin-left:auto;font-size:11px;font-weight:400;color:#4a3520}
      .prompt-note{background:#ede0c4;border-left:3px solid #9a6f0a;padding:10px 14px;margin:14px 0;font-size:12px;color:#4a3520}
      .essay-head{background:#1c1407;padding:12px 18px;display:flex;align-items:center;gap:12px;margin-bottom:0}
      .essay-yr{font-size:11px;color:rgba(244,237,216,.45);font-style:italic}
      .prompt-context{font-style:italic;font-size:14px;line-height:1.7;margin-bottom:12px}
      li{font-size:14px;line-height:1.65;margin-bottom:4px}
      @media print{body{margin:20px auto}}
    </style></head><body>${promptHTML}</body></html>`);
  win.document.close();
  win.focus();
  setTimeout(() => win.print(), 500);
}

// ═══════════════════════════════════════════════════════
// DOCUMENT LIBRARY
// ═══════════════════════════════════════════════════════


let docPeriodFilter = 'all';

function renderDocs() {
  const search = (document.getElementById('doc-search').value || '').toLowerCase();
  const list = document.getElementById('docs-list');
  const filtered = PRIMARY_DOCS.filter(d => {
    const matchPeriod = docPeriodFilter === 'all' ||
      (docPeriodFilter === '1' && (d.period === '1' || d.period === '2')) ||
      d.period === docPeriodFilter;
    const matchSearch = !search ||
      d.title.toLowerCase().includes(search) ||
      d.excerpt.toLowerCase().includes(search) ||
      d.significance.toLowerCase().includes(search) ||
      d.type.toLowerCase().includes(search);
    return matchPeriod && matchSearch;
  });
  document.getElementById('docs-count').textContent =
    `Showing ${filtered.length} of ${PRIMARY_DOCS.length} documents`;
  list.innerHTML = filtered.map((d, i) => `
    <div class="doc-card" id="doccard-${i}">
      <div class="doc-card-hd" onclick="toggleDocCard(${i})">
        <span class="doc-period-tag">Period ${d.period}</span>
        <span class="doc-card-title">${d.title}</span>
        <span class="doc-card-meta">${d.date} · ${d.type}</span>
        <span class="doc-card-chevron">▼</span>
      </div>
      <div class="doc-card-body">
        <div class="doc-body-text">
          <span class="doc-body-sig">Primary Source Excerpt</span>
          <div class="doc-excerpt">"${d.excerpt}"</div>
          <div class="doc-full-attr">— ${d.attr}</div>
        </div>
        <div class="doc-body-context">
          <span class="doc-context-label">Why It Matters</span>
          <div class="doc-why">${d.significance}</div>
          <div class="doc-key-ideas">
            <span class="doc-key-label">Key Ideas to Know</span>
            ${d.keyIdeas.map(k => `<div class="doc-key-item">${k}</div>`).join('')}
          </div>
        </div>
      </div>
    </div>`).join('');
}

function toggleDocCard(i) {
  const card = document.getElementById('doccard-' + i);
  card.classList.toggle('open');
}

function setDocPeriod(p, el) {
  docPeriodFilter = p;
  document.querySelectorAll('#period-pills .rf-pill').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderDocs();
}

function filterDocs() { renderDocs(); }
pickMode('mcq');
initDark();
renderSavedBanner();
renderStats();
renderDocs();
