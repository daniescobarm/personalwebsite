import './style.css';
import { site, projects, about, approach, gallery } from './content.js';

const icons = {
  resume: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>`,
};

const mailto = `mailto:${site.email}?subject=${encodeURIComponent('Hello Daniela')}`;

// Each word is wrapped so it can rise in on load.
const splitWords = (line, offset) =>
  line
    .split(' ')
    .map((w, i) => `<span class="word"><span style="--d:${(offset + i) * 70}ms">${w}</span></span>`)
    .join(' ');

const actionButtons = (variant = '') => `
  <div class="actions ${variant}">
    <a class="btn" href="${site.resume}" target="_blank" rel="noopener">${icons.resume}<span>Resume</span></a>
    <a class="btn" href="${site.linkedin}" target="_blank" rel="noopener">${icons.linkedin}<span>LinkedIn</span></a>
    <a class="btn btn-primary" href="${mailto}">${icons.email}<span>Email me</span></a>
  </div>`;

let wordCount = 0;
const headline = site.headline
  .map((line) => {
    const html = splitWords(line, wordCount);
    wordCount += line.split(' ').length;
    return `<span class="line">${html}</span>`;
  })
  .join('');

document.querySelector('#app').innerHTML = `
  <header class="nav">
    <a href="#top" class="nav-name">${site.name}</a>
    <nav>
      <a href="#about">About</a>
      <a href="#work">Work</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero">
      <h1>${headline}</h1>
      <p class="hero-sub reveal">${site.subtitle}</p>
      <div class="reveal">${actionButtons()}</div>
    </section>

    <section class="projects" aria-label="Featured projects">
      <div class="track">
        ${projects
          .map(
            (p, i) => `
          <article class="card reveal" style="--i:${i}">
            <div class="card-media" style="--h:${p.hue}">
              <span class="placeholder-label">Project image</span>
            </div>
            <div class="card-body">
              <div class="card-head">
                <div>
                  <h3>${p.title}</h3>
                  <p class="muted">${p.tagline}</p>
                </div>
                <span class="card-arrow">${icons.arrow}</span>
              </div>
              <ul class="tags">${p.tags.map((t) => `<li>${t}</li>`).join('')}</ul>
              <blockquote>
                <p>“${p.quote}”</p>
                <cite>${p.by}</cite>
              </blockquote>
            </div>
          </article>`,
          )
          .join('')}
      </div>
    </section>

    <section id="about" class="about">
      <div class="portrait reveal"><span class="placeholder-label">Your photo</span></div>
      <div>
        <p class="eyebrow reveal">About</p>
        <h2 class="reveal">${about.headline}</h2>
        ${about.body.map((b) => `<p class="muted reveal">${b}</p>`).join('')}
      </div>
    </section>

    <section class="approach">
      <p class="eyebrow reveal">Approach</p>
      <ol>
        ${approach
          .map(
            (s, i) => `
          <li class="reveal" style="--i:${i}">
            <span class="step-num">0${i + 1}</span>
            <h3>${s.title}</h3>
            <p class="muted">${s.body}</p>
          </li>`,
          )
          .join('')}
      </ol>
    </section>

    <section id="work" class="work">
      <p class="eyebrow reveal">Work</p>
      <div class="grid">
        ${Array.from(
          { length: gallery },
          (_, i) => `<div class="tile reveal" style="--i:${i % 4};--h:${(i * 47) % 360}"><span class="placeholder-label">Image ${i + 1}</span></div>`,
        ).join('')}
      </div>
    </section>

    <section id="contact" class="contact">
      <h2 class="reveal">Have something in mind?<br /><span class="muted">Let’s talk.</span></h2>
      <div class="reveal">${actionButtons('large')}</div>
    </section>
  </main>

  <footer class="footer">
    <span>© ${new Date().getFullYear()} ${site.name}</span>
    <div class="footer-icons">
      <a href="${mailto}" aria-label="Email">${icons.email}</a>
      <a href="${site.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icons.linkedin}</a>
      <a href="${site.resume}" target="_blank" rel="noopener" aria-label="Resume">${icons.resume}</a>
    </div>
  </footer>
`;

// Kick off the hero word animation after first paint.
requestAnimationFrame(() => document.body.classList.add('loaded'));

// Fade elements up as they scroll into view.
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Nav gains a backdrop once the page scrolls.
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Click-and-drag to scroll the project track on desktop.
const track = document.querySelector('.track');
let dragging = false;
let startX = 0;
let startScroll = 0;
track.addEventListener('pointerdown', (e) => {
  if (e.pointerType !== 'mouse') return;
  dragging = true;
  startX = e.clientX;
  startScroll = track.scrollLeft;
  track.classList.add('dragging');
});
window.addEventListener('pointermove', (e) => {
  if (!dragging) return;
  track.scrollLeft = startScroll - (e.clientX - startX);
});
window.addEventListener('pointerup', () => {
  dragging = false;
  track.classList.remove('dragging');
});

// Soft glow that follows the cursor on project images.
if (window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches) {
  document.querySelectorAll('.card').forEach((card) => {
    const media = card.querySelector('.card-media');
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      media.style.setProperty('--mx', `${x * 100 + 50}%`);
      media.style.setProperty('--my', `${y * 100 + 50}%`);
    });
  });
}
