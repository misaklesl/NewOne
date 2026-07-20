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

  return `
    <article class="card">
      <div class="card-top">
        ${badge}
        ${date}
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
      <div class="tags">${tags}</div>
    </article>
  `;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
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
