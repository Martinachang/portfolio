// project.js — a case-study page: the cover and the phases.
// site.js has already put this page's project (from <body data-project="…">) in content.project.

const project = content.project;

// The whole section wears the project's colours.
const section = document.querySelector(".project");
section.style.setProperty("--accent", project.accent);
section.style.setProperty("--accent-wash", project.accentWash);

function renderPage() {
  const cover = document.getElementById("cover");
  cover.src = project.cover.src;
  cover.alt = t(project.cover.alt);
  renderPhases();
}

// Every phase is on the page, one after another: its name, its text if it has any, then its slides from the deck, whole.
// Only the overview carries a headline and points; the other phases are slides alone.
// The links at the top glide to each phase (site.js handles any link to #something).
// A slide is a link to its own image file, so a click opens it full size in a new tab.
function renderPhases() {
  document.getElementById("phase-nav").setAttribute("aria-label", t(project.phasesLabel));
  fill("phase-nav", project.phases, (phase, i) => `<a href="#phase-${i}">${t(phase.name)}</a>`);
  fill("phases", project.phases, (phase, i) =>
    `<section class="phase" id="phase-${i}" aria-labelledby="phase-${i}-title">
       <h3 id="phase-${i}-title"><span class="phase-mark">${t(phase.name)}</span>${phase.headline ? t(phase.headline) : ""}</h3>
       ${phase.points ? `<ul class="points">${phase.points.map(listItem).join("")}</ul>` : ""}
       <div class="figures">${phase.figures.map((figure) =>
         `<a href="${figure.src}" target="_blank"><img src="${figure.src}" alt="${t(figure.alt)}" loading="lazy"></a>`).join("")}</div>
     </section>`);
}
