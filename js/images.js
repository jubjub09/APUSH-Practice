// ═══════════════════════════════════════════════════════════════════
// IMAGE REGISTRY — maps imageKey to local file path
// All images extracted directly from uploaded PDFs
// ═══════════════════════════════════════════════════════════════════

const IMAGE_REGISTRY = {
  // Marco Learning Practice Test 1 — MCQ stimuli
  "marco_q4_map_colonial":     "images/marco_q4_map_colonial.jpg",
  "marco_q11_child_labor":     "images/marco_q11_child_labor.jpg",
  "marco_q17_king_andrew":     "images/marco_q17_king_andrew.jpg",
  "marco_q33_railroad":        "images/marco_q33_railroad.jpg",
  "marco_q36_haymarket":       "images/marco_q36_haymarket.jpg",
  "marco_q47_newspaper":       "images/marco_q47_newspaper.jpg",
  "marco_q53_slave_map":       "images/marco_q53_slave_map.jpg",

  // Marco Learning Practice Test 1 — FRQ stimuli
  "wilson_1912_cartoon":       "images/marco_saq2_wilson_cartoon.jpg",
  "white_mans_govt_1868":      "images/marco_dbq_doc4_white_mans_govt.jpg",
  "carpetbagger_harpers_1872": "images/marco_dbq_doc7_carpetbagger.jpg",

  // Princeton Review Practice Test 6 — MCQ stimuli
  "pr6_q4_carpetbagger":       "images/pr6_q4_carpetbagger.jpg",
  "pr6_q18_westward":          "images/pr6_q18_westward.jpg",
  "pr6_q24_freesoiler":        "images/pr6_q24_freesoiler.jpg",

  // Princeton Review Practice Test 5 — MCQ stimuli
  "pt5_q1_european_map":       "images/pt5_q1_european_map.jpg",
  "pt5_q19_erie_canal":        "images/pt5_q19_erie_canal.jpg",
  "pt5_q31_bosses_senate":     "images/pt5_q31_bosses_senate.jpg",
  "pt5_q37_taft_investments":  "images/pt5_q37_taft_investments.jpg",
  "pt5_q40_lodge_cartoon":     "images/pt5_q40_lodge_cartoon.jpg",

  // Princeton Review Practice Test 5 — FRQ stimuli
  "pt5_saq2_tammany":          "images/pt5_saq2_tammany.jpg",
  "pt5_dbq_doc1_anaconda":     "images/pt5_dbq_doc1_anaconda.jpg",
};

/**
 * Returns an <img> tag for a given imageKey, or null if not found.
 */
function getImageHtml(imageKey, imageType) {
  const src = IMAGE_REGISTRY[imageKey];
  if (src) {
    return `<img src="${src}" alt="${imageType || 'Historical image'}" class="stimulus-img" loading="lazy">`;
  }
  return null;
}
