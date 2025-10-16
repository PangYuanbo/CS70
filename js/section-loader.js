function loadSectionFrom(sourcePath, sectionSelector, targetSelector) {
  fetch(sourcePath)
    .then(r => r.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const section = doc.querySelector(sectionSelector);
      if (!section) return;
      const target = document.querySelector(targetSelector);
      if (!target) return;
      target.innerHTML = section.outerHTML;
      // Re-run MathJax typesetting if available
      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise();
      }
    })
    .catch(() => {/* ignore */});
}
