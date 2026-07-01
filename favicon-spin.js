(function () {
  // Matrix Bond Management logo pre-encoded — no file load, no CORS, works on every page
  var DATA = 'data:image/png;base64,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';
  var SIZE = 64;

  var canvas  = document.createElement('canvas');
  canvas.width = canvas.height = SIZE;
  var ctx   = canvas.getContext('2d');
  var angle = 0;

  function getFavLink() {
    var el = document.getElementById('Matrix Bond Management-favicon');
    if (!el) {
      document.querySelectorAll('link[rel*="icon"]').forEach(function (l) { l.remove(); });
      el = document.createElement('link');
      el.id = 'Matrix Bond Management-favicon'; el.rel = 'icon'; el.type = 'image/png';
      document.head.appendChild(el);
    }
    return el;
  }

  function draw(img) {
    ctx.clearRect(0, 0, SIZE, SIZE);
    var sx = Math.cos(angle);
    ctx.save();
    ctx.translate(SIZE / 2, SIZE / 2);
    ctx.transform(sx, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 0.35 + 0.65 * Math.abs(sx);
    ctx.drawImage(img, -SIZE / 2, -SIZE / 2, SIZE, SIZE);
    ctx.restore();
    ctx.globalAlpha = 1;
    getFavLink().href = canvas.toDataURL('image/png');
    angle += 0.04;
    requestAnimationFrame(function () { draw(img); });
  }

  // Remove any icon link WordPress/Elementor injects after us
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      m.addedNodes.forEach(function (node) {
        if (node.nodeType === 1 && node.tagName === 'LINK' &&
            node.rel && node.rel.indexOf('icon') !== -1 &&
            node.id !== 'Matrix Bond Management-favicon') {
          node.remove();
        }
      });
    });
  });

  function init() {
    observer.observe(document.head, { childList: true });
    var img = new Image();
    img.onload = function () { draw(img); };
    img.src = DATA;
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();
})();
