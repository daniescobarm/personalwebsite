(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const s={name:"Daniela Escobar",headline:["Placeholder headline","about what I do best"],subtitle:"Your role or title goes here",email:"daniescobar11@gmail.com",linkedin:"https://www.linkedin.com/in/your-handle",resume:"/resume.pdf"},b=[{title:"Project One",tagline:"A one-line description of what this project is.",tags:["Category","Role"],quote:"A short testimonial or result from this project goes here.",by:"Name, Title at Company",hue:18},{title:"Project Two",tagline:"A one-line description of what this project is.",tags:["Category","Role"],quote:"A short testimonial or result from this project goes here.",by:"Name, Title at Company",hue:210},{title:"Project Three",tagline:"A one-line description of what this project is.",tags:["Category","Role"],quote:"A short testimonial or result from this project goes here.",by:"Name, Title at Company",hue:145},{title:"Project Four",tagline:"A one-line description of what this project is.",tags:["Category","Role"],quote:"A short testimonial or result from this project goes here.",by:"Name, Title at Company",hue:280}],p={headline:"A one-sentence statement about how you help people or what drives your work.",body:["A short bio paragraph. Where you are from, what you studied, and what you focus on today.","A second paragraph about past experience, interests outside of work, or what you are looking for next."]},w=[{title:"Step one",body:"A sentence describing the first part of how you work."},{title:"Step two",body:"A sentence describing the second part of how you work."},{title:"Step three",body:"A sentence describing the third part of how you work."},{title:"Step four",body:"A sentence describing the fourth part of how you work."}],$=8,i={resume:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',linkedin:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',email:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>'},m=`mailto:${s.email}?subject=${encodeURIComponent("Hello Daniela")}`,k=(e,t)=>e.split(" ").map((n,a)=>`<span class="word"><span style="--d:${(t+a)*70}ms">${n}</span></span>`).join(" "),h=(e="")=>`
  <div class="actions ${e}">
    <a class="btn" href="${s.resume}" target="_blank" rel="noopener">${i.resume}<span>Resume</span></a>
    <a class="btn" href="${s.linkedin}" target="_blank" rel="noopener">${i.linkedin}<span>LinkedIn</span></a>
    <a class="btn btn-primary" href="${m}">${i.email}<span>Email me</span></a>
  </div>`;let u=0;const j=s.headline.map(e=>{const t=k(e,u);return u+=e.split(" ").length,`<span class="line">${t}</span>`}).join("");document.querySelector("#app").innerHTML=`
  <header class="nav">
    <a href="#top" class="nav-name">${s.name}</a>
    <nav>
      <a href="#about">About</a>
      <a href="#work">Work</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero">
      <h1>${j}</h1>
      <p class="hero-sub reveal">${s.subtitle}</p>
      <div class="reveal">${h()}</div>
    </section>

    <section class="projects" aria-label="Featured projects">
      <div class="track">
        ${b.map((e,t)=>`
          <article class="card reveal" style="--i:${t}">
            <div class="card-media" style="--h:${e.hue}">
              <span class="placeholder-label">Project image</span>
            </div>
            <div class="card-body">
              <div class="card-head">
                <div>
                  <h3>${e.title}</h3>
                  <p class="muted">${e.tagline}</p>
                </div>
                <span class="card-arrow">${i.arrow}</span>
              </div>
              <ul class="tags">${e.tags.map(n=>`<li>${n}</li>`).join("")}</ul>
              <blockquote>
                <p>“${e.quote}”</p>
                <cite>${e.by}</cite>
              </blockquote>
            </div>
          </article>`).join("")}
      </div>
    </section>

    <section id="about" class="about">
      <div class="portrait reveal"><span class="placeholder-label">Your photo</span></div>
      <div>
        <p class="eyebrow reveal">About</p>
        <h2 class="reveal">${p.headline}</h2>
        ${p.body.map(e=>`<p class="muted reveal">${e}</p>`).join("")}
      </div>
    </section>

    <section class="approach">
      <p class="eyebrow reveal">Approach</p>
      <ol>
        ${w.map((e,t)=>`
          <li class="reveal" style="--i:${t}">
            <span class="step-num">0${t+1}</span>
            <h3>${e.title}</h3>
            <p class="muted">${e.body}</p>
          </li>`).join("")}
      </ol>
    </section>

    <section id="work" class="work">
      <p class="eyebrow reveal">Work</p>
      <div class="grid">
        ${Array.from({length:$},(e,t)=>`<div class="tile reveal" style="--i:${t%4};--h:${t*47%360}"><span class="placeholder-label">Image ${t+1}</span></div>`).join("")}
      </div>
    </section>

    <section id="contact" class="contact">
      <h2 class="reveal">Have something in mind?<br /><span class="muted">Let’s talk.</span></h2>
      <div class="reveal">${h("large")}</div>
    </section>
  </main>

  <footer class="footer">
    <span>© ${new Date().getFullYear()} ${s.name}</span>
    <div class="footer-icons">
      <a href="${m}" aria-label="Email">${i.email}</a>
      <a href="${s.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${i.linkedin}</a>
      <a href="${s.resume}" target="_blank" rel="noopener" aria-label="Resume">${i.resume}</a>
    </div>
  </footer>
`;requestAnimationFrame(()=>document.body.classList.add("loaded"));const v=new IntersectionObserver(e=>{for(const t of e)t.isIntersecting&&(t.target.classList.add("in"),v.unobserve(t.target))},{threshold:.15,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll(".reveal").forEach(e=>v.observe(e));const A=document.querySelector(".nav"),f=()=>A.classList.toggle("scrolled",window.scrollY>8);window.addEventListener("scroll",f,{passive:!0});f();const l=document.querySelector(".track");let d=!1,g=0,y=0;l.addEventListener("pointerdown",e=>{e.pointerType==="mouse"&&(d=!0,g=e.clientX,y=l.scrollLeft,l.classList.add("dragging"))});window.addEventListener("pointermove",e=>{d&&(l.scrollLeft=y-(e.clientX-g))});window.addEventListener("pointerup",()=>{d=!1,l.classList.remove("dragging")});window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches&&document.querySelectorAll(".card").forEach(e=>{const t=e.querySelector(".card-media");e.addEventListener("pointermove",n=>{const a=e.getBoundingClientRect(),o=(n.clientX-a.left)/a.width-.5,r=(n.clientY-a.top)/a.height-.5;t.style.setProperty("--mx",`${o*100+50}%`),t.style.setProperty("--my",`${r*100+50}%`)})});
