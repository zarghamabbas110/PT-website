/* =========================================================================
   main.js — small bits of interactivity used across the site:
     1. Mobile navigation toggle
     2. Highlight the current page in the nav
     3. Render + filter the exercise library (only on the exercises page)
     4. Friendly, no-backend contact form handling
   ========================================================================= */

document.addEventListener("DOMContentLoaded", function () {
  setupMobileNav();
  highlightCurrentNav();
  renderExercises();
  setupContactForm();
  setFooterYear();
});

/* ---------------------------------------------------------- 1. Mobile nav */
function setupMobileNav() {
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Close the menu after tapping a link (nice on mobile)
  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ------------------------------------------------ 2. Highlight active nav */
function highlightCurrentNav() {
  var here = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__links a").forEach(function (a) {
    var target = a.getAttribute("href");
    if (target === here) a.setAttribute("aria-current", "page");
  });
}

/* --------------------------------------------- 3. Exercise library render */
function renderExercises() {
  var grid = document.getElementById("exercise-grid");
  if (!grid || !window.EXERCISES) return; // not on the exercises page

  var searchInput = document.getElementById("exercise-search");
  var chipsWrap = document.getElementById("category-chips");
  var activeArea = "All";
  var query = "";

  // Build category chips from the areas present in the data.
  var areas = ["All"].concat(uniqueAreas(window.EXERCISES));
  chipsWrap.innerHTML = areas
    .map(function (area, i) {
      return (
        '<button class="chip' +
        (i === 0 ? " is-active" : "") +
        '" data-area="' +
        area +
        '">' +
        area +
        "</button>"
      );
    })
    .join("");

  chipsWrap.addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (!chip) return;
    chipsWrap.querySelectorAll(".chip").forEach(function (c) {
      c.classList.remove("is-active");
    });
    chip.classList.add("is-active");
    activeArea = chip.getAttribute("data-area");
    draw();
  });

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      query = searchInput.value.trim().toLowerCase();
      draw();
    });
  }

  function draw() {
    var matches = window.EXERCISES.filter(function (ex) {
      var areaOk = activeArea === "All" || ex.area === activeArea;
      var text = (ex.title + " " + ex.summary + " " + ex.area).toLowerCase();
      var searchOk = query === "" || text.indexOf(query) !== -1;
      return areaOk && searchOk;
    });

    if (matches.length === 0) {
      grid.innerHTML =
        '<p class="no-results">No exercises match your search. Try a different word or category.</p>';
      return;
    }

    grid.innerHTML = matches.map(exerciseCard).join("");
  }

  draw();
}

function exerciseCard(ex) {
  var steps = ex.steps
    .map(function (s) {
      return "<li>" + escapeHtml(s) + "</li>";
    })
    .join("");

  var caution = ex.caution
    ? '<div class="exercise__caution">⚠️ <strong>Take care:</strong> ' +
      escapeHtml(ex.caution) +
      "</div>"
    : "";

  return (
    '<article class="exercise">' +
    '<div class="exercise__banner"></div>' +
    '<div class="exercise__body">' +
    '<span class="exercise__tag">' + escapeHtml(ex.area) + "</span>" +
    "<h3>" + escapeHtml(ex.title) + "</h3>" +
    '<p class="exercise__desc">' + escapeHtml(ex.summary) + "</p>" +
    '<div class="exercise__meta">' +
    "<span>📊 " + escapeHtml(ex.level) + "</span>" +
    "<span>⏱️ " + escapeHtml(ex.duration) + "</span>" +
    "</div>" +
    "<details>" +
    "<summary>How to do it</summary>" +
    "<ol>" + steps + "</ol>" +
    caution +
    "</details>" +
    "</div>" +
    "</article>"
  );
}

function uniqueAreas(list) {
  var seen = [];
  list.forEach(function (ex) {
    if (seen.indexOf(ex.area) === -1) seen.push(ex.area);
  });
  return seen;
}

/* ---------------------------------------------- 4. Contact form (no server) */
function setupContactForm() {
  var form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var status = document.getElementById("form-status");
    var name = (form.querySelector("#name") || {}).value || "there";
    status.textContent =
      "Thanks, " + name.split(" ")[0] +
      "! This is a demo form, so nothing was sent yet. " +
      "Once the site is live we can connect it to email.";
    status.style.color = "var(--color-primary-dark)";
    form.reset();
  });
}

/* ------------------------------------------------------- helpers */
function setFooterYear() {
  var el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

// Prevent any stray characters in the data from breaking the page markup.
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
