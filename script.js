const cardsEl = document.getElementById("cards");
const searchEl = document.getElementById("search");
const countEl = document.getElementById("count");
const emptyEl = document.getElementById("empty");
const tabButtons = document.querySelectorAll(".tab-btn");

let activeFilter = "all";

function render() {
  const query = searchEl.value.trim().toLowerCase();

  const filtered = ITEMS.filter(item => {
    const matchesFilter = activeFilter === "all" || item.status === activeFilter;
    const haystack = [item.title, item.description, ...(item.tags || [])]
      .join(" ")
      .toLowerCase();
    const matchesQuery = haystack.includes(query);
    return matchesFilter && matchesQuery;
  });

  cardsEl.innerHTML = filtered.map(cardHtml).join("");
  countEl.textContent = `${filtered.length} položek`;
  emptyEl.classList.toggle("hidden", filtered.length > 0);
}

function cardHtml(item) {
  const badge = item.status === "done"
    ? `<span class="badge badge-done">✅ Hotovo</span>`
    : `<span class="badge badge-idea">💡 Nápad</span>`;
  const tags = (item.tags || [])
    .map(t => `<span class="tag">${escapeHtml(t)}</span>`)
    .join("");
  const date = item.date ? `<span class="date">${escapeHtml(item.date)}</span>` : "";
  const preview = item.link ? previewHtml(item) : "";
  const repoHint = item.link
    ? `<div class="card-link-hint">🔗 ${escapeHtml(item.repo || "Zahrát si")} · GitHub Pages ↗</div>`
    : "";

  const body = `
    <div class="card-top">
      ${badge}
      ${date}
    </div>
    ${preview}
    <h3>${escapeHtml(item.title)}</h3>
    <p>${escapeHtml(item.description)}</p>
    <div class="tags">${tags}</div>
    ${repoHint}
  `;

  return item.link
    ? `<a class="card card-link" href="${escapeAttr(item.link)}" target="_blank" rel="noopener noreferrer">${body}</a>`
    : `<article class="card">${body}</article>`;
}

function previewHtml(item) {
  if (item.preview === "snake") {
    return `
      <div class="preview preview-snake" aria-hidden="true">
        <div class="snake-board">
          <span class="cell snake s1"></span>
          <span class="cell snake s2"></span>
          <span class="cell snake s3"></span>
          <span class="cell snake s4"></span>
          <span class="cell snake s5"></span>
          <span class="cell food"></span>
        </div>
        <div class="preview-overlay">
          <span class="play-btn">▶ Hrát hru</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="preview preview-generic" aria-hidden="true">
      <div class="preview-overlay preview-overlay-static">
        <span class="play-btn">🔗 Otevřít</span>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function escapeAttr(str) {
  return escapeHtml(str).replaceAll('"', "&quot;");
}

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    render();
  });
});

searchEl.addEventListener("input", render);

render();
