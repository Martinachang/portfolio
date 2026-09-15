// site.js — shared by every page. Picks the language, fills the words from content.js
// into every element with data-text, and switches language from the top bar.
// Each page also has its own script (home.js or project.js) that defines renderPage().

// The project this page is about, read from <body data-project="…">.
// The home page has no data-project, so it gets the newest project for the desk folder.
content.project = content.projects.find((project) => project.id === document.body.dataset.project) || content.projects[0];

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

// Fill the element with this id: one piece of HTML per item.
function fill(id, items, template) {
  document.getElementById(id).innerHTML = items.map(template).join("");
}

const listItem = (item) => `<li>${t(item)}</li>`;

const langButtons = document.querySelectorAll("[data-lang]");

function setLanguage(next) {
  lang = next;
  localStorage.setItem("lang", lang); // remembered for the next visit
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  langButtons.forEach((button) => button.setAttribute("aria-pressed", button.dataset.lang === lang));
  render();
}

langButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));

function render() {
  // Elements with data-text="a.b.c" get that string from content.js. Same for data-alt on images.
  document.querySelectorAll("[data-text]").forEach((el) => { el.textContent = t(get(el.dataset.text)); });
  document.querySelectorAll("[data-html]").forEach((el) => { el.innerHTML = t(get(el.dataset.html)); }); // the headline, which has <em> in it
  document.querySelectorAll("[data-alt]").forEach((el) => { el.alt = t(get(el.dataset.alt)); });
  renderPage(); // the lists only this page has, see home.js or project.js
}

// ---------- Gliding to a section ----------

// A link to a place on this page (href="#work") glides there instead of jumping.
// The skip link keeps the browser's own jump so keyboard users land on the section at once.
const SCROLL_TIME = 1200; // milliseconds
document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]:not(.skip)');
  const target = link && link.hash.length > 1 && document.querySelector(link.hash);
  if (!target || event.defaultPrevented) return;
  event.preventDefault();
  const from = window.scrollY;
  const to = target.getBoundingClientRect().top + from - document.querySelector(".topbar").offsetHeight;
  const started = performance.now();
  function step(now) {
    const p = Math.min((now - started) / SCROLL_TIME, 1);           // 0 at the start, 1 at the end
    const eased = p < 0.5 ? 2 * p * p : 1 - (2 - 2 * p) ** 2 / 2;  // slow start, slow finish
    window.scrollTo({ top: from + (to - from) * eased, behavior: "instant" });
    if (p < 1) requestAnimationFrame(step);
    else history.replaceState(null, "", link.hash);                 // the address bar shows #work, as a normal jump would
  }
  requestAnimationFrame(step);
});

// Start once the whole page, including the page's own script, has loaded.
document.addEventListener("DOMContentLoaded", () => setLanguage(localStorage.getItem("lang") || "en"));
