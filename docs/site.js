// Step-back cover: the front cover swings open on its spine as you scroll,
// revealing the interior through (and then beyond) its die-cut window.
(() => {
  const root = document.documentElement;
  const stage = document.querySelector('.stage');
  const frame = stage.querySelector('.stage__frame');
  const cover = document.getElementById('cover');
  const win = document.getElementById('window');
  const interior = stage.querySelector('.interior');
  const opener = document.getElementById('opener');
  const bar = document.getElementById('bar');
  const barLinks = bar.querySelectorAll('a');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const maskOK = CSS.supports('mask-image', 'none') || CSS.supports('-webkit-mask-image', 'none');
  let hinge = false;
  let queued = false;

  const canHinge = () => maskOK && !reduce.matches && innerHeight >= 560 && innerWidth >= 340;

  function layout() {
    hinge = canHinge();
    root.classList.toggle('hinge', hinge);
    opener.hidden = !hinge;
    if (!hinge) {
      frame.style.removeProperty('--p');
      update();
      return;
    }
    // Measure the window's inner (padding) box with the cover flat.
    frame.style.setProperty('--p', '0');
    const c = cover.getBoundingClientRect();
    const r = win.getBoundingClientRect();
    const w = c.width, h = c.height;
    const x = r.left - c.left + win.clientLeft;
    const y = r.top - c.top + win.clientTop;
    const iw = win.clientWidth, ih = win.clientHeight;
    const rad = iw / 2;
    const d = `M0 0H${w}V${h}H0Z M${x} ${y + ih}V${y + rad}A${rad} ${rad} 0 0 1 ${x + iw} ${y + rad}V${y + ih}Z`;
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}' preserveAspectRatio='none'><path fill-rule='evenodd' d='${d}'/></svg>`;
    cover.style.setProperty('--hole', `url("data:image/svg+xml,${encodeURIComponent(svg)}")`);
    frame.style.setProperty('--wx', `${x}px`);
    frame.style.setProperty('--wy', `${y}px`);
    frame.style.setProperty('--ww', `${iw}px`);
    frame.style.setProperty('--wh', `${ih}px`);
    // Where the fan settles once the cover is fully open: the right side on
    // wide screens, the full width under the heading on narrow ones.
    const wide = innerWidth > 860;
    const copyBottom = interior.querySelector('.interior__copy').getBoundingClientRect().bottom - c.top;
    const o = wide
      ? { x: w * 0.38, y: h * 0.1, w: w * 0.55, h: h * 0.8 }
      : { x: w * 0.04, y: copyBottom + 12, w: w * 0.92, h: h - copyBottom - 24 };
    frame.style.setProperty('--card', `${wide ? Math.min(iw * 0.5, ih * 0.64) : Math.min(w * 0.32, ih * 0.64)}px`);
    frame.style.setProperty('--grow', wide ? '0.9' : '0');
    frame.style.setProperty('--ox', `${o.x}px`);
    frame.style.setProperty('--oy', `${o.y}px`);
    frame.style.setProperty('--ow', `${o.w}px`);
    frame.style.setProperty('--oh', `${o.h}px`);
    update();
  }

  function progress() {
    const travel = stage.offsetHeight - innerHeight;
    return travel > 0 ? Math.min(1, Math.max(0, -stage.getBoundingClientRect().top / travel)) : 1;
  }

  function update() {
    queued = false;
    if (hinge) {
      const p = progress();
      frame.style.setProperty('--p', p.toFixed(4));
      cover.classList.toggle('is-open', p > 0.985);
    }
    const past = stage.getBoundingClientRect().bottom < 60;
    if (bar.classList.contains('is-on') !== past) {
      bar.classList.toggle('is-on', past);
      bar.setAttribute('aria-hidden', String(!past));
      barLinks.forEach((a) => { a.tabIndex = past ? 0 : -1; });
    }
  }

  const openTop = () => stage.offsetTop + stage.offsetHeight - innerHeight;

  addEventListener('scroll', () => {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }, { passive: true });
  addEventListener('resize', layout);
  reduce.addEventListener('change', layout);
  opener.addEventListener('click', () => scrollTo({ top: openTop(), behavior: 'smooth' }));
  // Tabbing into the interior while the cover is closed opens it.
  interior.addEventListener('focusin', () => {
    if (hinge && progress() < 0.98) scrollTo({ top: openTop(), behavior: 'auto' });
  });

  layout();
  if (document.fonts) document.fonts.ready.then(layout);
})();
