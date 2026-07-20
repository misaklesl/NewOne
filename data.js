// Zde upravujte obsah stránky.
// status: "done" = dokončený vývoj, "idea" = potenciální nápad
// U dokončených položek lze volitelně přidat:
//   link: URL, kam se karta prokliká (např. GitHub Pages s hotovou hrou/appkou, nebo GitHub repozitář)
//   repo: "uzivatel/repo" – zobrazí se jako odkaz na GitHub repozitář
//   preview: "snake" | "prani" | "rituals" – zapne speciální animovaný náhled pro danou položku
const ITEMS = [
  {
    status: "done",
    title: "Had vs. Počítač",
    date: "2026-06",
    description: "Hra Had pro dva hráče přímo v prohlížeči – zelený had ovládaný hráčem proti červenému hadovi řízenému počítačem, s náhodnými překážkami a průběžným skóre.",
    tags: ["hra", "HTML/JS"],
    repo: "misaklesl/snake",
    link: "https://misaklesl.github.io/snake/",
    preview: "snake"
  },
  {
    status: "done",
    title: "Narozeninové přání",
    date: "2026-07",
    description: "Interaktivní narozeninové přání – návštěvník otevírá dvířka šipkami nebo kliknutím a odhaluje přání s konfetovou oslavou.",
    tags: ["přání", "HTML/JS"],
    repo: "misaklesl/prani",
    link: "https://misaklesl.github.io/prani/",
    preview: "prani"
  },
  {
    status: "done",
    title: "Rituals – sledování návyků",
    date: "2026-07",
    description: "Minimalistická appka na sledování denních návyků – týdenní mřížka, odškrtávání, statistiky a světlý/tmavý režim, funguje i offline jako PWA.",
    tags: ["PWA", "návyky"],
    repo: "misaklesl/rituals",
    link: "https://misaklesl.github.io/rituals/",
    preview: "rituals"
  },
  {
    status: "idea",
    title: "Ukázkový nápad č. 1",
    date: "",
    description: "Popis potenciálního nápadu k budoucímu rozvoji. Doplňte vlastní návrhy.",
    tags: ["nápad", "budoucnost"]
  },
  {
    status: "idea",
    title: "Ukázkový nápad č. 2",
    date: "",
    description: "Další nápad, který stojí za zvážení. Klidně přidejte odhad přínosu nebo náročnosti.",
    tags: ["nápad"]
  }
];
