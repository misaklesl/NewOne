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
      <div class="preview preview-snake">
        <div class="snake-board" aria-hidden="true">
          <span class="cell snake s1"></span>
          <span class="cell snake s2"></span>
          <span class="cell snake s3"></span>
          <span class="cell snake s4"></span>
          <span class="cell snake s5"></span>
          <span class="cell food"></span>
        </div>
        <span class="qr-caption">Sken pro hraní</span>
        <div class="qr-badge" title="Naskenuj a hraj s námi" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31" shape-rendering="crispEdges"><path stroke="#111111" d="M1 1.5h7m1 0h2m5 0h3m4 0h7M1 2.5h1m5 0h1m2 0h6m1 0h1m1 0h1m3 0h1m5 0h1M1 3.5h1m1 0h3m1 0h1m1 0h1m1 0h1m1 0h1m1 0h4m1 0h2m1 0h1m1 0h3m1 0h1M1 4.5h1m1 0h3m1 0h1m2 0h1m4 0h1m2 0h3m2 0h1m1 0h3m1 0h1M1 5.5h1m1 0h3m1 0h1m3 0h2m1 0h3m1 0h2m3 0h1m1 0h3m1 0h1M1 6.5h1m5 0h1m1 0h2m1 0h1m3 0h1m1 0h1m4 0h1m5 0h1M1 7.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M10 8.5h1m2 0h1m1 0h3m3 0h1M1 9.5h1m1 0h1m3 0h2m2 0h2m1 0h2m1 0h1m1 0h2m3 0h1m2 0h1m1 0h1M1 10.5h2m8 0h1m2 0h2m2 0h1m1 0h2m1 0h2m3 0h2M4 11.5h2m1 0h1m8 0h1m3 0h1m1 0h1m2 0h3m1 0h1M3 12.5h1m1 0h1m2 0h1m3 0h3m1 0h2m4 0h2m2 0h1M3 13.5h1m1 0h1m1 0h1m1 0h2m3 0h1m2 0h1m3 0h1m1 0h2m4 0h1M6 14.5h1m3 0h3m3 0h1m1 0h1m1 0h2m1 0h2m3 0h2M2 15.5h3m2 0h1m1 0h2m3 0h3m1 0h3m8 0h1M2 16.5h3m1 0h1m1 0h1m1 0h1m1 0h2m1 0h1m1 0h1m1 0h3M1 17.5h1m5 0h3m3 0h5m2 0h2m1 0h1m5 0h1M2 18.5h1m2 0h1m3 0h3m1 0h6m1 0h2m1 0h2m2 0h3M1 19.5h4m2 0h1m1 0h1m1 0h1m4 0h1m3 0h2m1 0h1m1 0h2m2 0h1M3 20.5h2m1 0h1m1 0h3m3 0h1m1 0h1m2 0h4m2 0h1M1 21.5h2m1 0h2m1 0h1m1 0h1m1 0h1m2 0h1m2 0h1m1 0h1m1 0h6m1 0h1M9 22.5h1m2 0h1m3 0h3m2 0h1m3 0h3m1 0h1M1 23.5h7m1 0h2m2 0h4m4 0h1m1 0h1m1 0h1m3 0h1M1 24.5h1m5 0h1m2 0h2m3 0h1m3 0h1m1 0h1m3 0h1m3 0h1M1 25.5h1m1 0h3m1 0h1m3 0h2m1 0h4m2 0h7m1 0h2M1 26.5h1m1 0h3m1 0h1m2 0h4m1 0h3m1 0h1m2 0h1m2 0h3m1 0h1M1 27.5h1m1 0h3m1 0h1m1 0h1m1 0h3m2 0h2m1 0h1m5 0h1m2 0h2M1 28.5h1m5 0h1m3 0h2m2 0h3m1 0h1m1 0h1m2 0h1m1 0h1M1 29.5h7m1 0h2m1 0h4m1 0h1m3 0h1m4 0h1m2 0h1"/></svg></div>
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
