/* Podhigai Thottam — interactions */

(() => {
  /* ---------- Sticky nav ---------- */
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 60);
    // Parallax hero
    const hero = document.querySelector('.hero__bg');
    if (hero) {
      const y = Math.min(window.scrollY * 0.4, 300);
      hero.style.transform = `translateY(${y}px)`;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll reveal ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---------- Activities rail ---------- */
  const rail = document.querySelector('.activities__rail');
  const railPrev = document.querySelector('[data-rail="prev"]');
  const railNext = document.querySelector('[data-rail="next"]');
  if (rail && railPrev && railNext) {
    const step = () => Math.min(rail.clientWidth * 0.8, 700);
    railPrev.addEventListener('click', () => rail.scrollBy({ left: -step(), behavior: 'smooth' }));
    railNext.addEventListener('click', () => rail.scrollBy({ left: step(), behavior: 'smooth' }));
    const updateBtns = () => {
      railPrev.disabled = rail.scrollLeft <= 4;
      railNext.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4;
    };
    rail.addEventListener('scroll', updateBtns, { passive: true });
    setTimeout(updateBtns, 100);
    window.addEventListener('resize', updateBtns);
  }

  /* ---------- Tabs (cuisine + packages) ---------- */
  document.querySelectorAll('[data-tabs]').forEach(group => {
    const tabs = group.querySelectorAll('[data-tab]');
    const panels = document.querySelectorAll(`[data-panel-group="${group.dataset.tabs}"] [data-panel]`);
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const id = tab.dataset.tab;
        tabs.forEach(t => t.classList.toggle('is-active', t === tab));
        panels.forEach(p => p.classList.toggle('is-active', p.dataset.panel === id));
      });
    });
  });

  /* ---------- Lightbox (real images + prev/next + a11y) ---------- */
  const lb = document.querySelector('.lightbox');
  if (lb) {
    const lbContent = lb.querySelector('.lightbox__content');
    const lbClose = lb.querySelector('.lightbox__close');
    const lbPrev = lb.querySelector('.lightbox__nav--prev');
    const lbNext = lb.querySelector('.lightbox__nav--next');

    let lbImg = lb.querySelector('.lightbox__img');
    if (!lbImg) {
      lbContent.textContent = '';
      lbImg = document.createElement('img');
      lbImg.className = 'lightbox__img';
      lbImg.alt = '';
      lbContent.appendChild(lbImg);
    }

    let lbCounter = lb.querySelector('.lightbox__counter');
    if (!lbCounter) {
      lbCounter = document.createElement('div');
      lbCounter.className = 'lightbox__counter';
      lbCounter.setAttribute('aria-hidden', 'true');
      lb.appendChild(lbCounter);
    }

    const urlOf = (el) => {
      const s = (el.getAttribute('style') || '') + ' ' + (el.dataset.lazybg || '');
      const m = s.match(/url\((['"]?)(.*?)\1\)/i);
      return m ? m[2] : null;
    };
    const labelOf = (el) => (el.dataset.label || 'Photo').replace(/^\s*\d+\s*·\s*/, '');

    const tiles = Array.from(document.querySelectorAll('.g-item, .rg-item'));
    let group = [];
    let idx = 0;
    let lastFocus = null;

    const render = () => {
      const item = group[idx];
      if (!item) return;
      lbImg.src = urlOf(item);
      lbImg.alt = labelOf(item);
      const multi = group.length > 1;
      if (lbPrev) lbPrev.style.display = multi ? '' : 'none';
      if (lbNext) lbNext.style.display = multi ? '' : 'none';
      if (lbCounter) lbCounter.textContent = multi ? (idx + 1) + ' / ' + group.length : '';
    };
    const openLb = (item) => {
      group = tiles.filter(t => t.style.display !== 'none' && urlOf(t));
      idx = group.indexOf(item);
      if (idx < 0) return;
      lastFocus = document.activeElement;
      render();
      lb.classList.add('is-open');
      lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      lbClose && lbClose.focus();
    };
    const closeLb = () => {
      lb.classList.remove('is-open');
      lb.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      lbImg.removeAttribute('src');
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    };
    const go = (d) => {
      if (group.length < 2) return;
      idx = (idx + d + group.length) % group.length;
      render();
    };

    tiles.forEach(item => {
      if (!urlOf(item)) return;
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      item.setAttribute('aria-label', 'View photo: ' + labelOf(item));
      item.addEventListener('click', () => openLb(item));
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(item); }
      });
    });

    lbClose && lbClose.addEventListener('click', closeLb);
    lbPrev && lbPrev.addEventListener('click', (e) => { e.stopPropagation(); go(-1); });
    lbNext && lbNext.addEventListener('click', (e) => { e.stopPropagation(); go(1); });
    lb.addEventListener('click', (e) => { if (e.target === lb || e.target === lbContent) closeLb(); });
    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLb();
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'ArrowRight') go(1);
    });

    /* Swipe gestures (mobile) */
    let tsX = 0, tsY = 0, tsT = 0;
    lbContent.addEventListener('touchstart', (e) => {
      if (e.touches.length !== 1) return;
      tsX = e.touches[0].clientX; tsY = e.touches[0].clientY; tsT = Date.now();
    }, { passive: true });
    lbContent.addEventListener('touchend', (e) => {
      const t = e.changedTouches[0];
      const dx = t.clientX - tsX, dy = t.clientY - tsY;
      if (Date.now() - tsT > 600) return;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
      else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) closeLb();
    }, { passive: true });
  }

  /* ---------- Stats count up ---------- */
  const statNums = document.querySelectorAll('.stats__num[data-count]');
  const countIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const decimals = (el.dataset.decimals|0);
      const dur = 1400;
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const val = target * eased;
        el.textContent = (decimals ? val.toFixed(decimals) : Math.round(val)) + suffix;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countIo.unobserve(el);
    });
  }, { threshold: 0.4 });
  statNums.forEach(n => countIo.observe(n));

  /* ---------- Smooth in-page links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const top = target.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({ top, behavior: 'smooth' });
          if (target.hasAttribute('tabindex')) target.focus({ preventScroll: true });
        }
      }
    });
  });

  /* ---------- Mobile nav drawer ---------- */
  const navEl = document.querySelector('.nav');
  if (navEl) {
    const burger = navEl.querySelector('.nav__burger');
    const links = navEl.querySelectorAll('.nav__menu a, .nav__cta');
    const closeNav = () => {
      navEl.classList.remove('is-open');
      document.body.classList.remove('nav-is-open');
      burger?.setAttribute('aria-expanded', 'false');
    };
    const openNav = () => {
      navEl.style.setProperty('--nav-h', navEl.offsetHeight + 'px');
      navEl.classList.add('is-open');
      document.body.classList.add('nav-is-open');
      burger?.setAttribute('aria-expanded', 'true');
    };
    if (burger) {
      burger.setAttribute('aria-expanded', 'false');
      burger.addEventListener('click', (e) => {
        e.stopPropagation();
        navEl.classList.contains('is-open') ? closeNav() : openNav();
      });
    }
    links.forEach(a => a.addEventListener('click', closeNav));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 980) closeNav(); });
  }

  /* ---------- Performance: prefetch internal pages on hover/idle ---------- */
  (function () {
    const seen = new Set();
    const add = (href) => {
      if (seen.has(href)) return; seen.add(href);
      const l = document.createElement('link');
      l.rel = 'prefetch'; l.href = href;
      document.head.appendChild(l);
    };
    const ok = (a) => {
      if (!a || !a.getAttribute('href')) return false;
      let u; try { u = new URL(a.href, location.href); } catch (e) { return false; }
      if (u.origin !== location.origin) return false;
      if (u.pathname === location.pathname) return false;
      return /\.html?$/.test(u.pathname);
    };
    const onHover = (e) => { const a = e.target.closest && e.target.closest('a'); if (ok(a)) add(a.href); };
    document.addEventListener('mouseover', onHover, { passive: true });
    document.addEventListener('touchstart', onHover, { passive: true });
    const warm = () => document.querySelectorAll('.nav__menu a, .footer__menu a').forEach(a => { if (ok(a)) add(a.href); });
    ('requestIdleCallback' in window) ? requestIdleCallback(warm, { timeout: 2500 }) : setTimeout(warm, 1500);
  })();

  /* ---------- Performance: lazy-load remote background images ---------- */
  (function () {
    const els = document.querySelectorAll('[style*="googleusercontent"]:not(.lightbox__content)');
    if (!els.length) return;
    // No IntersectionObserver support: leave inline backgrounds intact (eager load).
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        if (el.dataset.lazybg) { el.style.backgroundImage = el.dataset.lazybg; delete el.dataset.lazybg; }
        obs.unobserve(el);
      });
    }, { rootMargin: '300px 0px' });
    els.forEach(el => {
      const bg = el.style.backgroundImage;
      if (!bg || bg === 'none') return;
      el.dataset.lazybg = bg;
      el.style.backgroundImage = 'none';
      io.observe(el);
    });
  })();

})();
