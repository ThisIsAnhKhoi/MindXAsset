// ============================================================
// ASSET CACHE & PRELOAD PIPELINE FOR CHARACTER BUILDER
// ============================================================

/**
 * In-memory cache map for HTMLImageElement instances.
 * Shared between CanvasPreview, CustomizerInspector and Preloader.
 */
export const assetCache = new Map();

/**
 * Preload a single image URL into memory
 * @param {string} src - The image URL to preload
 * @returns {Promise<HTMLImageElement|null>}
 */
export const preloadImage = (src) => {
  if (!src) return Promise.resolve(null);
  if (assetCache.has(src)) {
    return Promise.resolve(assetCache.get(src));
  }

  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      assetCache.set(src, img);
      resolve(img);
    };
    img.onerror = () => {
      // Do not reject to prevent breaking Promise.all when a single image 404s
      resolve(null);
    };
    img.src = src;
  });
};

/**
 * Preload multiple image URLs in parallel
 * @param {string[]} urls - Array of image URLs
 * @returns {Promise<(HTMLImageElement|null)[]>}
 */
export const preloadImages = (urls) => {
  if (!urls || !Array.isArray(urls)) return Promise.resolve([]);
  const validUrls = urls.filter(u => typeof u === 'string' && u.length > 0 && !assetCache.has(u));
  if (validUrls.length === 0) return Promise.resolve([]);
  return Promise.all(validUrls.map(preloadImage));
};
