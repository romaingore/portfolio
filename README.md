# romain-gore.fr — Portfolio

Site vitrine personnel de Romain Goré, développeur web indépendant basé à Angers. Conçu pour présenter ses offres de création de sites aux artisans et petites entreprises.

## Stack

- **Astro 5** — génération statique, zéro JS par défaut
- **Tailwind CSS 4** — via Vite
- **TypeScript**
- Déployé sur VPS via SSH

## Structure

```
src/
├── assets/          # Images (optimisées par Astro)
├── components/
│   └── sections/    # Hero, About, Pricing, FAQ...
├── config/
│   └── site.ts      # Contenu centralisé (tarifs, FAQ, témoignages...)
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css   # Thème Tailwind, variables CSS
```

## Commandes

| Commande | Action |
| :--- | :--- |
| `npm run dev` | Serveur local sur `localhost:4321` |
| `npm run build` | Build de production dans `./dist/` |
| `npm run preview` | Prévisualisation du build |

## Contenu

Tout le contenu éditable (tarifs, FAQ, témoignages, menu) est centralisé dans `src/config/site.ts`.
