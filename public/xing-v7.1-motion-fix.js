/**
 * XING V7.1 Motion & Font Clarity Fix
 * Load after current homepage animation code.
 */
(() => {
  "use strict";

  const ROOT_SELECTOR = ".xing-v71";
  const TEXT_SELECTORS = [
    ".hero__content",
    ".factory__content",
    "[data-crisp-text]",
    "[data-hero-title]",
    "[data-factory-title]"
  ];

  const root = document.querySelector(ROOT_SELECTOR);
  if (!root) return;

  const crispNodes = [...root.querySelectorAll(TEXT_SELECTORS.join(","))];

  function snapToFinalTextState(node) {
    if (!node) return;

    // Clear inline compositor-producing properties left by GSAP or other libraries.
    [
      "transform",
      "translate",
      "scale",
      "rotate",
      "filter",
      "backdropFilter",
      "perspective",
      "willChange"
    ].forEach((prop) => {
      node.style[prop] = "";
    });

    // Ensure nested text is not left on its own compositor layer.
    node.querySelectorAll("h1,h2,h3,h4,p,a,button,span,strong,em").forEach((child) => {
      child.style.willChange = "";
      child.style.filter = "";
    });
  }

  function finalizeAllText() {
    crispNodes.forEach(snapToFinalTextState);
    // Force one clean layout/paint pass after clearing transforms.
    void document.documentElement.offsetHeight;
  }

  // Initial cleanup after fonts and page assets settle.
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => {
      requestAnimationFrame(() => requestAnimationFrame(finalizeAllText));
    });
  } else {
    window.addEventListener("load", finalizeAllText, { once: true });
  }

  /**
   * GSAP helper:
   * Replace old `gsap.from(...)` calls for text with this helper where possible.
   */
  window.xingAnimateTextIn = function xingAnimateTextIn(targets, vars = {}) {
    if (!window.gsap) {
      document.querySelectorAll(targets).forEach(snapToFinalTextState);
      return;
    }

    const userComplete = vars.onComplete;

    window.gsap.from(targets, {
      y: 28,
      opacity: 0,
      duration: 0.85,
      ease: "power3.out",
      ...vars,
      clearProps: "transform,translate,scale,rotate,filter,willChange",
      onComplete() {
        document.querySelectorAll(targets).forEach(snapToFinalTextState);
        if (typeof userComplete === "function") userComplete();
      }
    });
  };

  /**
   * Cleanup after scroll settles. This avoids text staying rasterized on a
   * transformed layer after Lenis / custom scroll effects.
   */
  let scrollTimer = 0;
  window.addEventListener(
    "scroll",
    () => {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(finalizeAllText, 140);
    },
    { passive: true }
  );

  // Re-run after viewport changes and browser zoom/device rotation.
  let resizeTimer = 0;
  window.addEventListener(
    "resize",
    () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(finalizeAllText, 180);
    },
    { passive: true }
  );
})();
