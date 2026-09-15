// script.js — reads content.js and fills index.html, then adds the interactions:
// 1. language toggle, 2. filling the page, 3. quote demo, 4. phase tabs, 5. desk drag.
// No libraries. Everything here is plain browser JavaScript.

// ---------- 1. Language ----------

let lang = "en";

// t() turns a { en, zh } pair into the text for the current language.
// A plain string (a name, a tool, an email) comes back unchanged.
function t(value) {
  if (typeof value === "string") return value;
  if (value[lang] === undefined) console.warn("Missing " + lang + " text:", value);
  return value[lang];
}

// get("site.nav.work") walks down the content object one key at a time.
function get(path) {
  return path.split(".").reduce((object, key) => object[key], content);
}

const langButtons = document.querySelectorAll("[data-lang]");

function setLanguage(next) {
  lang = next;
  localStorage.setItem("lang", lang); // remembered for the next visit
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  langButtons.forEach((button) => button.setAttribute("aria-pressed", button.dataset.lang === lang));
  render();
}

langButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));

// ---------- 2. Filling the page ----------

// Which quote and which phase are open. They live outside render() so a
// language switch redraws the page without losing the reader's place.
let activeQuote = 0;
let activePhase = 0;

// Fill the element with this id: one piece of HTML per item.
function fill(id, items, template) {
  document.getElementById(id).innerHTML = items.map(template).join("");
}

const listItem = (item) => `<li>${t(item)}</li>`;

function timelineItem(item) {
  const detail = item.detail ? `<span class="detail">${t(item.detail)}</span>` : "";
  return `<li><span class="when">${t(item.when)}</span><span>${t(item.what)}${detail}</span></li>`;
}

function render() {
  // Elements with data-text="a.b.c" get that string from content.js. Same for data-alt on images.
  document.querySelectorAll("[data-text]").forEach((el) => { el.textContent = t(get(el.dataset.text)); });
  document.querySelectorAll("[data-alt]").forEach((el) => { el.alt = t(get(el.dataset.alt)); });

  fill("note-lines", content.desk.note.lines, listItem);
  fill("project-tags", content.project.tags, listItem);
  fill("project-facts", content.project.facts, (fact) => `<div><dt>${t(fact.label)}</dt><dd>${t(fact.value)}</dd></div>`);
  renderQuotes();
  renderPhases();
  fill("bio", content.about.bio, (paragraph) => `<p>${t(paragraph)}</p>`);
  fill("experience", content.about.experience, timelineItem);
  fill("education", content.about.education, timelineItem);
  fill("work-history", content.about.work, timelineItem);
  fill("languages", content.about.languages, listItem);
  fill("skills-grid", content.skills.groups, (group) =>
    `<div><h3>${t(group.name)}</h3><ul>${group.items.map(listItem).join("")}</ul></div>`);
}

// ---------- 3. Quote demo ----------

const quotes = document.getElementById("quotes");

function renderQuotes() {
  fill("quotes", content.project.insights.items, (item, i) =>
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
  const chosen = content.project.insights.items[index];
  document.getElementById("decision").innerHTML =
    `<p class="decision-label">${t(content.project.insights.decisionLabel)}</p>
     <h4>${t(chosen.title)}</h4>
     <p>${t(chosen.decision)}</p>`;
}

quotes.addEventListener("click", (event) => {
  const button = event.target.closest(".quote");
  if (button) selectQuote(Number(button.dataset.index));
});

// ---------- 4. Phase tabs ----------

const tablist = document.getElementById("tablist");

function renderPhases() {
  const phases = content.project.phases;
  tablist.setAttribute("aria-label", t(content.project.phasesLabel));
  fill("tablist", phases, (phase, i) =>
    `<button type="button" role="tab" id="tab-${i}" data-index="${i}" aria-controls="panel-${i}">${t(phase.name)}</button>`);
  fill("panels", phases, (phase, i) =>
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
  content.project.phases.forEach((phase, i) => {
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
  const count = content.project.phases.length;
  if (event.key === "ArrowRight") selectPhase((activePhase + 1) % count);
  if (event.key === "ArrowLeft") selectPhase((activePhase - 1 + count) % count);
});

// ---------- 5. Desk drag ----------

// Objects can be dragged only while style.css scatters them on the desk (position: absolute),
// which it does on wide screens. On phones they sit in a grid and only respond to clicks.
const desk = document.querySelector(".desk-objects");
let drag = null;             // the drag in progress: which object, where the pointer started, where the object was
let movedDuringDrag = false; // a drag ends with a click event, which must not follow the link
let topLayer = 1;

desk.addEventListener("pointerdown", (event) => {
  const object = event.target.closest(".object");
  if (!object || event.button !== 0 || getComputedStyle(object).position !== "absolute") return;
  drag = {
    object,
    startX: event.clientX, startY: event.clientY,
    x: Number(object.dataset.x || 0), y: Number(object.dataset.y || 0), // where the last drag left it
  };
  object.setPointerCapture(event.pointerId);
  object.classList.add("lifted");
  object.style.zIndex = ++topLayer; // the object you hold comes to the front
});

desk.addEventListener("pointermove", (event) => {
  if (!drag) return;
  const x = drag.x + event.clientX - drag.startX;
  const y = drag.y + event.clientY - drag.startY;
  if (Math.hypot(x - drag.x, y - drag.y) > 4) movedDuringDrag = true;
  drag.object.style.translate = `${x}px ${y}px`; // show it here
  drag.object.dataset.x = x;                      // and remember it for the next drag
  drag.object.dataset.y = y;
});

function endDrag() {
  if (!drag) return;
  drag.object.classList.remove("lifted");
  drag = null;
}
desk.addEventListener("pointerup", endDrag);
desk.addEventListener("pointercancel", endDrag);

// The click that ends a drag is swallowed so the link is not followed.
desk.addEventListener("click", (event) => {
  if (movedDuringDrag) event.preventDefault();
  movedDuringDrag = false;
});

// ---------- Start ----------

document.getElementById("mail-link").href = "mailto:" + content.site.email;
setLanguage(localStorage.getItem("lang") || "en");
