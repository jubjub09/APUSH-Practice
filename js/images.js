// ═══════════════════════════════════════════════════════════
// IMAGE REGISTRY — maps imageKey to local file path
// ═══════════════════════════════════════════════════════════

const IMAGE_REGISTRY = {
  // Marco Learning Practice Test 1
  "marco_q4_map_colonial":   "images/marco_q4_map_colonial.jpg",
  "marco_q11_child_labor":   "images/marco_q11_child_labor.jpg",
  "marco_q17_king_andrew":   "images/marco_q17_king_andrew.jpg",
  "marco_q33_railroad":      "images/marco_q33_railroad.jpg",
  "marco_q36_haymarket":     "images/marco_q36_haymarket.jpg",
  "marco_q47_newspaper":     "images/marco_q47_newspaper.jpg",
  "marco_q53_slave_map":     "images/marco_q53_slave_map.jpg",

  // Princeton Review Practice Test 6
  "pr6_q4_carpetbagger":     "images/pr6_q4_carpetbagger.jpg",
  "pr6_q18_westward":        "images/pr6_q18_westward.jpg",
  "pr6_q24_freesoiler":      "images/pr6_q24_freesoiler.jpg",

  // SAQ / DBQ visual stimuli (search-based fallback)
  "tammany_tiger":           null,
  "duck_cover":              null,
};

/**
 * Returns an <img> tag HTML for a given imageKey, or null if none exists.
 * Falls back to a styled placeholder for search-based images.
 */
function getImageHtml(imageKey, imageType, searchQuery) {
  const src = IMAGE_REGISTRY[imageKey];
  if (src) {
    return `<img src="${src}" alt="${imageType || 'Historical image'}" class="stimulus-img" loading="lazy">`;
  }
  if (searchQuery) {
    const url = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}&tbm=isch`;
    return `<div class="img-search-link">
      <a href="${url}" target="_blank" rel="noopener">
        🔍 View <em>${imageType || 'image'}</em> on Google Images →
      </a>
    </div>`;
  }
  return null;
}
