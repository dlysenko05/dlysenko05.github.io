---
layout: default
title:
description: Daniil Lysenko — undergraduate researcher in astrophysics.
---

<section class="hero shell">
  <div class="hero-copy">
    <p class="eyebrow">ASTROPHYSICS / SPECTROSCOPY / NUMERICAL PHYSICS</p>
    <h1>Daniil<br>Lysenko</h1>
    <p class="lede">I am an undergraduate researcher interested in understanding astrophysical systems through spectroscopy, physical modelling, and computation.</p>
    <p class="affiliation">{{ site.affiliation }}</p>
    <div class="hero-links">
      <a href="{{ '/research/' | relative_url }}">Research <span aria-hidden="true">↗</span></a>
      <a href="{{ '/cv/' | relative_url }}">CV <span aria-hidden="true">↗</span></a>
      <a href="https://github.com/{{ site.github_username }}">GitHub <span aria-hidden="true">↗</span></a>
    </div>
  </div>
  <div class="hero-mark" aria-hidden="true">
    <div class="spectrum"></div>
    <p>absorption · fields · high-energy</p>
  </div>
</section>

<section class="section shell" id="questions">
  <div class="section-kicker">01 / QUESTIONS</div>
  <div class="section-heading">
    <h2>Questions I work on</h2>
    <p>Three scientific directions that connect my current projects.</p>
  </div>

  <div class="question-list">
    <a class="question-card" href="{{ '/research/#quasar-absorption' | relative_url }}">
      <span class="index">01</span>
      <div>
        <h3>What can quasar absorption systems tell us about distant astrophysical gas?</h3>
        <p>Quasar spectroscopy · absorption systems · physical conditions</p>
      </div>
      <span class="arrow" aria-hidden="true">↗</span>
    </a>

    <a class="question-card" href="{{ '/research/#compact-objects' | relative_url }}">
      <span class="index">02</span>
      <div>
        <h3>How do magnetic fields and flows evolve in compact astrophysical objects?</h3>
        <p>Magnetohydrodynamics · numerical PDEs · compact objects</p>
      </div>
      <span class="arrow" aria-hidden="true">↗</span>
    </a>

    <a class="question-card" href="{{ '/research/#high-energy' | relative_url }}">
      <span class="index">03</span>
      <div>
        <h3>What can high-energy observations reveal about extreme astrophysical environments?</h3>
        <p>X-ray &amp; gamma-ray astronomy · transients · data analysis</p>
      </div>
      <span class="arrow" aria-hidden="true">↗</span>
    </a>
  </div>
</section>

<section class="section shell selected-work">
  <div class="section-kicker">02 / SELECTED WORK</div>
  <div class="section-heading">
    <h2>Current research</h2>
    <p>The site is intentionally selective: each item should explain a real scientific contribution rather than merely list an activity.</p>
  </div>

  <div class="work-list">
    <article class="work-row">
      <div class="work-meta">SPECTROSCOPY</div>
      <div class="work-body">
        <h3>Quasar absorption systems</h3>
        <p>Research with Sergei Balashev. Add a two- or three-sentence description of the scientific problem, the data you use, and your own contribution.</p>
      </div>
      <a href="{{ '/research/#quasar-absorption' | relative_url }}">Open</a>
    </article>

    <article class="work-row">
      <div class="work-meta">NUMERICAL PHYSICS</div>
      <div class="work-body">
        <h3>Magnetic-field evolution in compact objects</h3>
        <p>Research with Alexander Vinokurov. Add the physical question, model, numerical method, and the result you are currently trying to establish.</p>
      </div>
      <a href="{{ '/research/#compact-objects' | relative_url }}">Open</a>
    </article>

    <article class="work-row">
      <div class="work-meta">HIGH ENERGY</div>
      <div class="work-body">
        <h3>X-ray and gamma-ray astrophysics</h3>
        <p>Coursework / research direction with Dmitry Svinkin. Replace this note with the exact project once its scope is fixed.</p>
      </div>
      <a href="{{ '/research/#high-energy' | relative_url }}">Open</a>
    </article>
  </div>
</section>

<section class="section shell contact-strip">
  <div>
    <div class="section-kicker">03 / CONTACT</div>
    <h2>Scientific correspondence</h2>
  </div>
  <p>{% if site.email contains '[' %}Add your public academic email in <code>_config.yml</code>.{% else %}<a href="mailto:{{ site.email }}">{{ site.email }}</a>{% endif %}</p>
</section>
