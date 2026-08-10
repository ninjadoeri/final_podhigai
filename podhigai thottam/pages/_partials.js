/* ============================================================
   Shared partials for internal pages
   Injects: nav, footer, floating CTAs
   Also: scroll-reveal, count-up, sticky nav class
   ============================================================ */

(function() {
  const PHONE_NUM = "+919698542424";
  const PHONE_DISPLAY = "+91 96985 42424";
  const WA_LINK = "https://wa.me/919698542424?text=Hi%2C%20I%27d%20like%20to%20book%20a%20stay%20at%20Podhigai%20Thottam";
  const ROOT = "../"; // pages live one level deep

  // ====== NAV ======
  const navHTML = `
    <header class="nav is-scrolled" id="nav">
      <div class="container nav__inner">
        <a href="${ROOT}index.html" class="nav__logo" aria-label="Podhigai Thottam">
          <img src="${ROOT}assets/logo-full.webp" class="nav__house-img" alt="Podhigai Thottam" decoding="async" />
        </a>
        <nav>
          <ul class="nav__menu">
            <li><a href="${ROOT}index.html">Home</a></li>
            <li><a href="about.html" data-page="about">About</a></li>
            <li><a href="rooms.html" data-page="rooms">Rooms</a></li>
            <li><a href="services.html" data-page="services">Services</a></li>
            <li><a href="dining.html" data-page="dining">Dining</a></li>
            <li><a href="gallery.html" data-page="gallery">Gallery</a></li>
            <li><a href="contact.html" data-page="contact">Contact</a></li>
          </ul>
        </nav>
        <a href="tel:${PHONE_NUM}" class="btn btn--gold nav__cta">Book Now</a>
        <button class="nav__burger" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </header>
  `;

  // ====== SHARED SVG SYMBOLS (leaf, used by logo) ======
  const symbolsHTML = `
    <svg width="0" height="0" style="position:absolute" aria-hidden="true">
      <defs>
        <symbol id="leaf-fill" viewBox="0 0 64 64">
          <path d="M44 6 C24 8, 8 24, 8 46 C8 54, 14 58, 22 58 C42 56, 58 40, 58 18 C58 10, 52 6, 44 6 Z" fill-rule="evenodd"/>
          <path d="M14 54 C24 38, 38 22, 56 10" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.4" stroke-linecap="round"/>
        </symbol>
        <symbol id="house-mark" viewBox="0 0 140 90">
          <path d="M 12 88 L 12 50 L 70 14 L 96 30 L 96 18 L 110 18 L 110 38 L 128 50"
                fill="none" stroke="currentColor" stroke-width="3.5"
                stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="4" />
        </symbol>
      </defs>
    </svg>
  `;

  // ====== FOOTER ======
  const footerHTML = `
    <footer class="footer" id="contact">
      <div class="container">

        <div class="footer__notice">
          <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="9" cy="9" r="7"/><path d="M9 5 L9 10 M9 12.5 L9 12.6"/></svg>
          Pre-booking is mandatory — call ${PHONE_DISPLAY}.
        </div>

        <div class="footer__grid">
          <div>
            <div class="footer__logo">
              <img src="${ROOT}assets/logo-full.webp" class="footer__logo-img" alt="Podhigai Thottam" decoding="async" loading="lazy" />
            </div>
            <p class="footer__about">Podhigai Thottam is a peaceful farm stay near Coimbatore offering private villas, swimming pool access, celebration arrangements, and a relaxing atmosphere surrounded by nature.</p>
            <div class="footer__social" aria-label="Social media">
              <a href="#" aria-label="Facebook"><svg viewBox="0 0 16 16"><path d="M9.5 16 L9.5 9 L11.6 9 L12 6.5 L9.5 6.5 L9.5 5 C9.5 4.3, 9.7 3.8, 10.7 3.8 L12 3.8 L12 1.5 C11.7 1.5, 10.9 1.4, 10 1.4 C8.1 1.4, 6.8 2.6, 6.8 4.7 L6.8 6.5 L4.7 6.5 L4.7 9 L6.8 9 L6.8 16 Z"/></svg></a>
              <a href="https://www.instagram.com/podhigai8?utm_source=qr" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 16 16"><path d="M4.5 2 C3.1 2, 2 3.1, 2 4.5 L2 11.5 C2 12.9, 3.1 14, 4.5 14 L11.5 14 C12.9 14, 14 12.9, 14 11.5 L14 4.5 C14 3.1, 12.9 2, 11.5 2 Z M11.8 4 C12.2 4, 12.5 4.3, 12.5 4.7 C12.5 5.1, 12.2 5.4, 11.8 5.4 C11.4 5.4, 11.1 5.1, 11.1 4.7 C11.1 4.3, 11.4 4, 11.8 4 Z M8 5 C9.7 5, 11 6.3, 11 8 C11 9.7, 9.7 11, 8 11 C6.3 11, 5 9.7, 5 8 C5 6.3, 6.3 5, 8 5 Z M8 6.5 C7.2 6.5, 6.5 7.2, 6.5 8 C6.5 8.8, 7.2 9.5, 8 9.5 C8.8 9.5, 9.5 8.8, 9.5 8 C9.5 7.2, 8.8 6.5, 8 6.5 Z" fill-rule="evenodd"/></svg></a>
              <a href="${WA_LINK}" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 16 16"><path d="M8 1.5 C4.4 1.5, 1.5 4.4, 1.5 8 C1.5 9.2, 1.8 10.3, 2.4 11.3 L1.5 14.5 L4.8 13.6 C5.8 14.1, 6.9 14.4, 8 14.4 C11.6 14.4, 14.5 11.5, 14.5 7.9 C14.5 4.3, 11.6 1.5, 8 1.5 Z"/></svg></a>
            </div>
          </div>

          <div>
            <h5>Sitemap</h5>
            <ul class="footer__menu">
              <li><a href="about.html">About Us</a></li>
              <li><a href="rooms.html">Rooms & Villas</a></li>
              <li><a href="dining.html">Dining</a></li>
              <li><a href="services.html">Services & Activities</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5>Get in Touch</h5>
            <div class="footer__contact-row">
              <svg viewBox="0 0 18 18"><path d="M9 1 C5.1 1, 2 4.1, 2 8 C2 13, 9 17, 9 17 C9 17, 16 13, 16 8 C16 4.1, 12.9 1, 9 1 Z"/><circle cx="9" cy="8" r="2.5"/></svg>
              <div>Podhigai Thottam Farmstay<br/>D.No. 1/39,18, Ponnandam Palayam,<br/>Kaniyur, Sulur,<br/>Coimbatore – 641659</div>
            </div>
            <div class="footer__contact-row">
              <svg viewBox="0 0 18 18"><path d="M3 2 L6 2 L7 6 L5 7 C6 10, 8 12, 11 13 L12 11 L16 12 L16 15 C16 15.5, 15.5 16, 15 16 C8 16, 2 10, 2 3 C2 2.5, 2.5 2, 3 2 Z"/></svg>
              <div><a href="tel:${PHONE_NUM}">${PHONE_DISPLAY}</a><br/><span style="font-size:12px;opacity:0.6;">Available 7 AM – 10 PM IST</span></div>
            </div>
            <div class="footer__contact-row">
              <svg viewBox="0 0 18 18"><rect x="2" y="4" width="14" height="10" rx="1"/><path d="M2 5 L9 10 L16 5"/></svg>
              <div><a href="mailto:podhigaithottam123@gmail.com">podhigaithottam123@gmail.com</a></div>
            </div>
          </div>
        </div>

        <div class="footer__bottom">
          <div>© 2026 Podhigai Thottam Homestay. All rights reserved.</div>
          <div style="display:flex;gap:24px;">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cancellation</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  // ====== FLOAT CTA ======
  const floatHTML = `
    <div class="float-cta" aria-label="Quick booking">
      <a href="tel:${PHONE_NUM}" class="float-cta__call" data-tip="Call to book" aria-label="Call to book">
        <svg viewBox="0 0 24 24"><path d="M4 4 L9 4 L11 9 L8 11 C9.5 14.5, 11.5 16.5, 15 18 L17 15 L22 17 L22 20 C22 21, 21 22, 20 22 C10 22, 2 14, 2 4 C2 3, 3 2, 4 2 Z"/></svg>
      </a>
      <a href="${WA_LINK}" target="_blank" rel="noopener" class="float-cta__wa" data-tip="WhatsApp us" aria-label="WhatsApp us">
        <svg viewBox="0 0 24 24"><path d="M12 2 C6.5 2, 2 6.5, 2 12 C2 14, 2.5 15.8, 3.5 17.4 L2 22 L6.7 20.5 C8.3 21.4, 10.1 22, 12 22 C17.5 22, 22 17.5, 22 12 C22 6.5, 17.5 2, 12 2 Z M17.4 16.3 C17.2 16.9, 16.2 17.5, 15.7 17.6 C15.2 17.7, 14.6 17.7, 13.9 17.5 C13.5 17.4, 13 17.2, 12.3 16.9 C9.7 15.8, 8 13.2, 7.9 13 C7.8 12.9, 6.9 11.7, 6.9 10.4 C6.9 9.2, 7.5 8.6, 7.7 8.4 C7.9 8.2, 8.2 8.1, 8.3 8.1 L8.8 8.1 C8.9 8.1, 9.1 8.1, 9.3 8.6 C9.5 9.1, 9.9 10.3, 10 10.4 C10 10.5, 10.1 10.7, 10 10.9 C9.9 11, 9.9 11.2, 9.7 11.3 L9.2 11.9 C9.1 12, 9 12.2, 9.1 12.4 C9.3 12.7, 9.7 13.5, 10.4 14.2 C11.4 15, 12.2 15.3, 12.5 15.4 C12.7 15.5, 12.9 15.4, 13.1 15.3 C13.2 15.1, 13.6 14.7, 13.7 14.5 C13.9 14.2, 14 14.3, 14.3 14.4 C14.5 14.5, 15.8 15.1, 16 15.2 C16.3 15.3, 16.5 15.4, 16.5 15.5 C16.6 15.6, 16.6 16, 16.4 16.3 Z"/></svg>
      </a>
    </div>
  `;

  // ====== Inject before/after DOMContentLoaded ======
  // NOTE: nav, footer, symbols and the float CTA are baked into each page's
  // static HTML so the header/logo paint immediately (no flicker on navigation).
  // The guards below keep this idempotent: markup is only injected if a page
  // is missing it (legacy fallback) — never duplicated.
  function inject() {
    // Shared SVG symbols (leaf-fill / house-mark)
    if (!document.getElementById('leaf-fill')) {
      const symbolsSlot = document.querySelector('[data-slot="symbols"]');
      if (symbolsSlot) symbolsSlot.innerHTML = symbolsHTML;
      else document.body.insertAdjacentHTML('afterbegin', symbolsHTML);
    }

    // Header / nav
    if (!document.querySelector('.nav')) {
      const navSlot = document.querySelector('[data-slot="nav"]');
      if (navSlot) navSlot.innerHTML = navHTML;
      else document.body.insertAdjacentHTML('afterbegin', navHTML);
    }

    // Footer
    if (!document.querySelector('.footer')) {
      const footerSlot = document.querySelector('[data-slot="footer"]');
      if (footerSlot) footerSlot.innerHTML = footerHTML;
      else document.body.insertAdjacentHTML('beforeend', footerHTML);
    }

    // Float CTA
    if (!document.querySelector('.float-cta')) {
      document.body.insertAdjacentHTML('beforeend', floatHTML);
    }

    // Highlight current page in nav
    const page = document.body.dataset.page;
    if (page) {
      const link = document.querySelector(`.nav__menu [data-page="${page}"]`);
      if (link) link.style.color = "var(--gold-soft)";
    }

    afterInject();
  }

/* ============================================================
   Performance: instant nav prefetch + lazy background images
   ============================================================ */
  // Prefetch internal .html pages on hover/touch + warm primary nav on idle,
  // so clicking a link loads from cache instead of a fresh network round-trip.
  function prefetchInternalPages() {
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
  }

  // Defer off-screen remote background images until they near the viewport.
  // Preserves the existing background-color fallback (only the image is deferred).
  function lazyLoadBackgrounds() {
    const els = document.querySelectorAll('[style*="googleusercontent"]:not(.lightbox__content)');
    if (!els.length) return;
    const restore = (el) => { if (el.dataset.lazybg) { el.style.backgroundImage = el.dataset.lazybg; delete el.dataset.lazybg; } };
    // No IntersectionObserver support: leave inline backgrounds intact (eager load).
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        restore(e.target);
        obs.unobserve(e.target);
      });
    }, { rootMargin: '300px 0px' });
    els.forEach(el => {
      const bg = el.style.backgroundImage;
      if (!bg || bg === 'none') return;
      el.dataset.lazybg = bg;
      el.style.backgroundImage = 'none';
      io.observe(el);
    });
  }

/* ============================================================
   Mobile nav drawer behaviour
   ============================================================ */
  function setupMobileNav() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    const burger = nav.querySelector('.nav__burger');
    const menuLinks = nav.querySelectorAll('.nav__menu a, .nav__cta');
    if (!burger) return;

    const close = () => {
      nav.classList.remove('is-open');
      document.body.classList.remove('nav-is-open');
      burger.setAttribute('aria-expanded', 'false');
    };
    const open = () => {
      nav.style.setProperty('--nav-h', nav.offsetHeight + 'px');
      nav.classList.add('is-open');
      document.body.classList.add('nav-is-open');
      burger.setAttribute('aria-expanded', 'true');
    };
    burger.setAttribute('aria-expanded', 'false');
    burger.addEventListener('click', (e) => {
      e.stopPropagation();
      nav.classList.contains('is-open') ? close() : open();
    });
    menuLinks.forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 980) close();
    });
  }

  function afterInject() {
    setupMobileNav();
    prefetchInternalPages();
    lazyLoadBackgrounds();
    // Sticky nav scroll (always solid on internal pages, but still re-style on scroll)
    const nav = document.querySelector('.nav');
    if (nav) {
      const onScroll = () => nav.classList.toggle('is-scrolled', true); // always solid
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    // Scroll reveal
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Count up
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
    document.querySelectorAll('[data-count]').forEach(n => countIo.observe(n));

    // Smooth anchors that stay on this page only
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

    // Lightbox for gallery / room images — real <img>, prev/next, a11y
    const lb = document.querySelector('.lightbox');
    if (lb) {
      const lbContent = lb.querySelector('.lightbox__content');
      const lbClose = lb.querySelector('.lightbox__close');
      const lbPrev = lb.querySelector('.lightbox__nav--prev');
      const lbNext = lb.querySelector('.lightbox__nav--next');

      // Ensure a real <img> element exists inside the content frame.
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

      // Pull the image URL out of a tile's inline background (or its
      // deferred-lazy copy). Returns null for image-less placeholder tiles.
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
        // Navigable set = currently visible tiles that actually have an image.
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

      // Only image-bearing tiles become interactive.
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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
