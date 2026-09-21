/**
 * Motor de animação do site — anime.js v4.
 * Convenções por atributo de dados (sem JS por página):
 *  data-reveal="up|left|right|scale|clip"   revela ao entrar na viewport
 *  data-reveal-delay="120"                  atraso em ms
 *  data-stagger="80"                        num container: aplica stagger nos filhos diretos [data-reveal]
 *  data-split="words|chars|lines"           título dividido e animado por partes
 *  data-count="2000" data-suffix="+"        contador numérico
 *  data-parallax="0.2"                      translateY proporcional ao scroll (sync)
 *  data-draw                                SVG path/line/polyline desenhado no scroll
 *  data-rotate-scroll="180"                 rotação sincronizada ao scroll
 *  data-progress-scale                      barra que cresce de 0 a 1 conforme a seção passa
 */
import { animate, stagger, onScroll, utils, svg, createTimeline, splitText } from 'animejs';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.documentElement.classList.add('js');

const num = (v: string | null | undefined, d: number) => (v == null || v === '' ? d : Number(v));

function reveal(el: HTMLElement, delay = 0) {
  const kind = el.dataset.reveal || 'up';
  const base = { duration: 900, ease: 'out(4)', delay } as const;
  if (kind === 'clip') {
    animate(el, { clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'], ...base, autoplay: onScroll({ target: el, enter: 'bottom-=8% top', sync: 'play', repeat: false }) as any });
    return;
  }
  const from: Record<string, any> = { opacity: [0, 1] };
  if (kind === 'up') from.translateY = [32, 0];
  if (kind === 'left') from.translateX = [-32, 0];
  if (kind === 'right') from.translateX = [32, 0];
  if (kind === 'scale') from.scale = [0.92, 1];
  animate(el, { ...from, ...base, autoplay: onScroll({ target: el, enter: 'bottom-=8% top', sync: 'play', repeat: false }) as any });
}

function initReveals() {
  // Containers com stagger
  document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((box) => {
    const step = num(box.dataset.stagger, 90);
    const kids = Array.from(box.querySelectorAll<HTMLElement>('[data-reveal]')).filter((k) => k.closest('[data-stagger]') === box);
    kids.forEach((k, i) => {
      k.dataset.staggered = '1';
      reveal(k, i * step + num(k.dataset.revealDelay, 0));
    });
  });
  document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-staggered])').forEach((el) => reveal(el, num(el.dataset.revealDelay, 0)));
}

function initSplit() {
  document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    const mode = el.dataset.split || 'words';
    const params: any = { accessible: true };
    if (mode === 'chars') params.chars = { class: 'split-char' };
    else params.words = { class: 'split-word' };
    if (mode !== 'chars') params.lines = { class: 'split-line' };
    // A divisão por linhas espera `document.fonts.ready`; addEffect roda quando o texto está pronto
    // e novamente a cada re-divisão (resize), revertendo a animação anterior.
    const s = splitText(el, params) as any;
    s.addEffect((self: any) =>
      animate(mode === 'chars' ? self.chars : self.words, {
        opacity: [0, 1],
        translateY: ['0.5em', '0em'],
        duration: mode === 'chars' ? 700 : 900,
        ease: 'out(4)',
        delay: stagger(mode === 'chars' ? 22 : 55, { start: num(el.dataset.revealDelay, 80) }),
        autoplay: onScroll({ target: el, enter: 'bottom-=5% top', sync: 'play', repeat: false }) as any,
      }),
    );
  });
}

function initCounters() {
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const end = num(el.dataset.count, 0);
    const suffix = el.dataset.suffix ?? '';
    const prefix = el.dataset.prefix ?? '';
    const fmt = new Intl.NumberFormat('pt-BR');
    const obj = { v: 0 };
    el.textContent = `${prefix}0${suffix}`;
    animate(obj, {
      v: end,
      duration: 1800,
      ease: 'out(5)',
      modifier: utils.round(0),
      onUpdate: () => (el.textContent = `${prefix}${fmt.format(obj.v)}${suffix}`),
      autoplay: onScroll({ target: el, enter: 'bottom-=10% top', sync: 'play', repeat: false }) as any,
    });
  });
}

function initParallax() {
  if (reduced) return;
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const f = num(el.dataset.parallax, 0.2);
    const dist = 240 * f;
    animate(el, {
      translateY: [dist, -dist],
      ease: 'linear',
      autoplay: onScroll({ target: el.closest('[data-parallax-root]') || el, enter: 'bottom top', leave: 'top bottom', sync: true }) as any,
    });
  });
}

function initDraw() {
  document.querySelectorAll<SVGElement>('[data-draw]').forEach((root) => {
    const shapes = root.querySelectorAll<SVGGeometryElement>('path, line, polyline, polygon, circle, rect, ellipse');
    if (!shapes.length) return;
    const sync = root.dataset.draw === 'sync';
    animate(svg.createDrawable(shapes as any), {
      draw: ['0 0', '0 1'],
      duration: 1600,
      ease: 'inOut(3)',
      delay: stagger(120),
      autoplay: sync
        ? (onScroll({ target: root, enter: 'bottom top+=10%', leave: 'center center', sync: 0.25 }) as any)
        : (onScroll({ target: root, enter: 'bottom-=10% top', sync: 'play', repeat: false }) as any),
    });
  });
}

function initScrollSync() {
  if (reduced) return;
  document.querySelectorAll<HTMLElement>('[data-rotate-scroll]').forEach((el) => {
    animate(el, {
      rotate: [0, num(el.dataset.rotateScroll, 180)],
      ease: 'linear',
      autoplay: onScroll({ target: el.closest('section') || el, enter: 'bottom top', leave: 'top bottom', sync: true }) as any,
    });
  });
  document.querySelectorAll<HTMLElement>('[data-progress-scale]').forEach((el) => {
    animate(el, {
      scaleX: [0, 1],
      ease: 'linear',
      autoplay: onScroll({ target: el.closest('section') || el, enter: 'center bottom', leave: 'center top', sync: 0.4 }) as any,
    });
  });
}

/** Hero: big bag SVG sendo preenchido com grãos + rótulos flutuando. */
function initHero() {
  const hero = document.querySelector<HTMLElement>('#hero-scene');
  if (!hero) return;
  const tl = createTimeline({ defaults: { ease: 'out(3)' } });
  tl.add('#hb-body', { scaleY: [0.6, 1], opacity: [0, 1], duration: 900 }, 200)
    .add('.hb-strap', { translateY: [-30, 0], opacity: [0, 1], duration: 700, delay: stagger(80) }, 500)
    .add('#hb-fill', { scaleY: [0, 0.68], duration: 1600, ease: 'inOut(2)' }, 800)
    .add('.hb-bean', { translateY: [-220, 0], opacity: [0, 1], rotate: () => utils.random(-90, 90), duration: 900, ease: 'outBounce', delay: stagger(60) }, 700)
    .add('.hb-tag', { translateX: [24, 0], opacity: [0, 1], duration: 700, delay: stagger(140) }, 1400);
  if (!reduced) {
    animate('#hb-group', { translateY: [0, -10], duration: 3000, alternate: true, loop: true, ease: 'inOut(2)' });
    animate('.hb-tag', { translateY: [0, -6], duration: 2200, alternate: true, loop: true, ease: 'inOut(2)', delay: stagger(300) });
  }
}

function initMarqueeSpeed() {
  document.querySelectorAll<HTMLElement>('.marquee').forEach((m) => {
    const track = m.querySelector<HTMLElement>('.marquee-track');
    if (!track) return;
    const w = track.scrollWidth / 2;
    track.style.setProperty('--marquee-speed', `${Math.max(20, w / 60)}s`);
  });
}

function initHeader() {
  const header = document.querySelector<HTMLElement>('#site-header');
  if (!header) return;
  const toggle = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
  const btn = header.querySelector<HTMLButtonElement>('#menu-toggle');
  const panel = document.querySelector<HTMLElement>('#mobile-menu');
  if (btn && panel) {
    btn.addEventListener('click', () => {
      const open = panel.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('overflow-hidden', open);
      if (open) animate(panel.querySelectorAll('a'), { opacity: [0, 1], translateY: [16, 0], delay: stagger(50), duration: 500, ease: 'out(3)' });
    });
    panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => { panel.classList.remove('is-open'); document.body.classList.remove('overflow-hidden'); }));
  }
}

function initTilt() {
  if (reduced || window.matchMedia('(pointer: coarse)').matches) return;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      animate(el, { rotateY: x * 8, rotateX: -y * 8, duration: 400, ease: 'out(2)' });
    });
    el.addEventListener('pointerleave', () => animate(el, { rotateY: 0, rotateX: 0, duration: 600, ease: 'out(3)' }));
  });
}

function initWhatsFab() {
  const fab = document.querySelector<HTMLElement>('#wa-fab');
  if (!fab) return;
  animate(fab, { scale: [0, 1], opacity: [0, 1], duration: 600, ease: 'outBack', delay: 1200 });
  if (!reduced) animate(fab.querySelector('.wa-pulse')!, { scale: [1, 1.6], opacity: [0.5, 0], duration: 1800, loop: true, ease: 'out(2)' });
}

function boot() {
  initHeader();
  initSplit();
  initReveals();
  initCounters();
  initParallax();
  initDraw();
  initScrollSync();
  initHero();
  initMarqueeSpeed();
  initTilt();
  initWhatsFab();
}

/** O ScrollObserver só avalia thresholds em eventos de scroll: força uma avaliação inicial
 *  para elementos já visíveis no carregamento (hero, primeira dobra, âncoras). */
function kickScroll() {
  const fire = () => window.dispatchEvent(new Event('scroll'));
  requestAnimationFrame(() => requestAnimationFrame(fire));
  setTimeout(fire, 250);
  setTimeout(fire, 800);
  window.addEventListener('load', fire, { once: true });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => { boot(); kickScroll(); });
else { boot(); kickScroll(); }
