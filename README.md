# Přehled vývoje

Jednoduchá statická webová stránka pro prezentaci dokončených vývojů a potenciálních nápadů. Žádný build proces není potřeba — čisté HTML/CSS/JS.

## Spuštění

Stačí otevřít `index.html` v prohlížeči, nebo spustit lokální server, např.:

```bash
python3 -m http.server 8000
```

a otevřít `http://localhost:8000`.

## Úprava obsahu

Veškerý obsah (položky vývoje a nápadů) se upravuje v souboru `data.js` — přidejte/upravte objekty v poli `ITEMS`:

```js
{
  status: "done" | "idea",
  title: "Název",
  date: "2026-07",
  description: "Popis",
  tags: ["štítek1", "štítek2"]
}
```

## Nasazení

Stránka je čistě statická, takže ji lze nasadit např. na GitHub Pages, Netlify, Vercel nebo jakýkoli statický hosting.
