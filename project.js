// project.js — a case-study page: the project's header, the quote demo and the phase tabs.
// site.js has already put this page's project (from <body data-project="…">) in content.project.

const project = content.project;

// The whole section wears the project's colours.
const section = document.querySelector(".project");
section.style.setProperty("--accent", project.accent);
section.style.setProperty("--accent-wash", project.accentWash);

// Which quote and which phase are open. They live outside renderPage() so a
// language switch redraws the page without losing the reader's place.
let activeQuote = 0;
let activePhase = 0;

function renderPage() {
  const cover = document.getElementById("cover");
  cover.src = project.cover.src;
  cover.alt = t(project.cover.alt);
  fill("project-tags", project.tags, listItem);
  fill("project-facts", project.facts, (fact) => `<div><dt>${t(fact.label)}</dt><dd>${t(fact.value)}</dd></div>`);
  renderQuotes();
  renderPhases();
}

// ---------- Quote demo ----------

const quotes = document.getElementById("quotes");

function renderQuotes() {
  fill("quotes", project.insights.items, (item, i) =>
    `<button type="button" class="quote" data-index="${i}">
       <q>${t(item.quote)}</q>
       <span class="who">${t(item.who)}</span>
     </button>`);
  selectQuote(activeQuote);
}

// Marks one quote as pressed and shows the design decision it led to.
function selectQuote(index) {
  activeQuote = index;
  quotes.querySelectorAll(".quote").forEach((button, i) => button.setAttribute("aria-pressed", i === index));
  const chosen = project.insights.items[index];
  document.getElementById("decision").innerHTML =
    `<p class="decision-label">${t(project.insights.decisionLabel)}</p>
     <h4>${t(chosen.title)}</h4>
     <p>${t(chosen.decision)}</p>`;
}

quotes.addEventListener("click", (event) => {
  const button = event.target.closest(".quote");
  if (button) selectQuote(Number(button.dataset.index));
});

// ---------- Phase tabs ----------

const tablist = document.getElementById("tablist");

function renderPhases() {
  tablist.setAttribute("aria-label", t(project.phasesLabel));
  fill("tablist", project.phases, (phase, i) =>
    `<button type="button" role="tab" id="tab-${i}" data-index="${i}" aria-controls="panel-${i}">${t(phase.name)}</button>`);
  fill("panels", project.phases, (phase, i) =>
    `<div role="tabpanel" id="panel-${i}" aria-labelledby="tab-${i}">
       <h3><span class="phase-mark">${t(phase.name)}</span>${t(phase.headline)}</h3>
       <ul class="points">${phase.points.map(listItem).join("")}</ul>
       <div class="figures">${phase.figures.map((figure) =>
         `<figure><img src="${figure.src}" alt="${t(figure.alt)}" loading="lazy"></figure>`).join("")}</div>
     </div>`);
  showPhase(activePhase);
}

// Opens one panel and marks its tab. Only the open tab is reachable with the Tab key;
// the arrow keys move between the others.
function showPhase(index) {
  activePhase = index;
  project.phases.forEach((phase, i) => {
    const tab = document.getElementById("tab-" + i);
    tab.setAttribute("aria-selected", i === index);
    tab.tabIndex = i === index ? 0 : -1;
    document.getElementById("panel-" + i).hidden = i !== index;
  });
}

function selectPhase(index) {
  showPhase(index);
  document.getElementById("tab-" + index).focus();
}

tablist.addEventListener("click", (event) => {
  const tab = event.target.closest("[role=tab]");
  if (tab) selectPhase(Number(tab.dataset.index));
});
tablist.addEventListener("keydown", (event) => {
  const count = project.phases.length;
  if (event.key === "ArrowRight") selectPhase((activePhase + 1) % count);
  if (event.key === "ArrowLeft") selectPhase((activePhase - 1 + count) % count);
});
