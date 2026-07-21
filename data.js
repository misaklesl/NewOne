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
    title: "Vytěžování faktur",
    date: "",
    description: "AI přečte došlou fakturu (PDF/sken) a sama vyplní dodavatele, částku, VS i položky do ERP – obchodník už jen zkontroluje a potvrdí.",
    tags: ["obchodník", "faktury", "AI"],
    repo: "misaklesl/invoices",
    link: "https://github.com/misaklesl/invoices"
  },
  {
    status: "idea",
    title: "Smlouva na pár kliků",
    date: "",
    description: "Smlouva se poskládá ze šablony a dat z CRM (strany, ceny, termíny) a systém sám pohlídá, že nechybí povinné doložky.",
    tags: ["obchodník", "smlouvy"]
  },
  {
    status: "idea",
    title: "Hlídač splatností",
    date: "",
    description: "Sleduje splatnosti faktur a konce platnosti smluv a s předstihem pošle připomínku zákazníkovi i obchodníkovi.",
    tags: ["obchodník", "faktury", "smlouvy"]
  },
  {
    status: "idea",
    title: "Zápis ze schůzky do CRM",
    date: "",
    description: "Obchodník po schůzce nadiktuje shrnutí a AI ho rozdělí do správných polí CRM – kontakt, další krok, termín follow-upu.",
    tags: ["obchodník", "CRM"]
  },
  {
    status: "idea",
    title: "Faktura vs. objednávka",
    date: "",
    description: "Přijatou fakturu automaticky porovná s objednávkou nebo smlouvou a upozorní na rozdíl v ceně či množství.",
    tags: ["obchodník", "faktury"]
  },
  {
    status: "idea",
    title: "Code review parťák pro Pascal",
    date: "",
    description: "Před uložením zkontroluje styl, časté chyby a firemní konvence a napíše k tomu srozumitelný komentář, ne strojový výpis.",
    tags: ["ERP vývojář", "Pascal"]
  },
  {
    status: "idea",
    title: "Dopadová analýza změny",
    date: "",
    description: "Než se sáhne na tabulku nebo proceduru, ukáže, co všechno na ni navazuje – jiné procedury, reporty, integrace.",
    tags: ["ERP vývojář", "SQL"]
  },
  {
    status: "idea",
    title: "Živá dokumentace databáze",
    date: "",
    description: "Z komentářů a kódu si sama skládá popis tabulek a vazeb, takže nikdo nemusí ručně kreslit a udržovat ER diagram.",
    tags: ["ERP vývojář", "SQL"]
  },
  {
    status: "idea",
    title: "Generátor testovacích dat",
    date: "",
    description: "Ke každé úpravě ERP připraví realistickou sadu testovacích dat a scénářů, ať se netestuje nazdařbůh.",
    tags: ["ERP vývojář", "testování"]
  },
  {
    status: "idea",
    title: "Parťák nad historií tiketů",
    date: "",
    description: "Než hotline zvedne telefon, AI mu našeptá podobné dřívější případy a jak se tehdy vyřešily.",
    tags: ["IT podpora", "hotline"]
  },
  {
    status: "idea",
    title: "Automatické třídění tiketů",
    date: "",
    description: "Nový tiket se sám zařadí podle typu problému a přiřadí správnému řešiteli, místo aby čekal ve frontě.",
    tags: ["IT podpora", "hotline"]
  },
  {
    status: "idea",
    title: "Návody, co se píšou samy",
    date: "",
    description: "Z vyřešeného tiketu AI rovnou navrhne krátký návod do znalostní báze pro příště.",
    tags: ["IT podpora", "znalostní báze"]
  },
  {
    status: "idea",
    title: "Hlídač ERP logů",
    date: "",
    description: "Sleduje chybové vzory v provozu ERP a upozorní podporu dřív, než se ozve naštvaný zákazník.",
    tags: ["IT podpora", "monitoring"]
  },
  {
    status: "idea",
    title: "Chatbot nad firemní dokumentací",
    date: "",
    description: "Zeptá se do manuálů k ERP, směrnic, šablon smluv a ceníků a odpoví s odkazem na zdroj – místo hledání ve sdílených discích.",
    tags: ["IT podpora", "dokumentace", "chatbot"]
  }
];
