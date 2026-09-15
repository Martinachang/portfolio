// home.js — the home page: the desk, the list of projects, and the profile sections.
// site.js has already loaded, so t(), fill(), listItem and content.project exist.

function timelineItem(item) {
  const detail = item.detail ? `<span class="detail">${t(item.detail)}</span>` : "";
  return `<li><span class="when">${t(item.when)}</span><span>${t(item.what)}${detail}</span></li>`;
}

// One card in the Work section. The whole card is a link to the project's own page.
function workCard(project) {
  return `<a class="work-card" href="${project.page}" style="--accent: ${project.accent}; --accent-wash: ${project.accentWash}">
       <img src="${project.cover.src}" alt="${t(project.cover.alt)}" loading="lazy">
       <div class="work-card-body">
         <h3>${project.name} <span class="zh-name">${project.nameZh}</span></h3>
         <p>${t(project.summary)}</p>
         <ul class="tags">${project.tags.map(listItem).join("")}</ul>
         <span class="read">${t(content.work.readMore)}</span>
       </div>
     </a>`;
}

function renderPage() {
  // The desk folder wears the newest project's colours.
  const folder = document.querySelector(".folder");
  folder.style.setProperty("--accent", content.project.accent);
  folder.style.setProperty("--accent-wash", content.project.accentWash);

  fill("note-lines", content.desk.note.lines, listItem);
  fill("work-grid", content.projects, workCard);
  fill("bio", content.about.bio, (paragraph) => `<p>${t(paragraph)}</p>`);
  fill("experience", content.about.experience, timelineItem);
  fill("education", content.about.education, timelineItem);
  fill("work-history", content.about.work, timelineItem);
  fill("languages", content.about.languages, listItem);
  fill("skills-grid", content.skills.groups, (group) =>
    `<div><h3>${t(group.name)}</h3><ul>${group.items.map(listItem).join("")}</ul></div>`);
  document.getElementById("mail-link").href = "mailto:" + content.site.email;
}

// ---------- Desk drag ----------

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
