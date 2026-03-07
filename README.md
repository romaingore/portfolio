# Modèle de Landing Page Astro

Un modèle de Landing Page haute performance, accessible et optimisé pour le SEO, construit avec **Astro 5.0** et **Tailwind CSS 4.0**.

## 🚀 Fonctionnalités

- **Performance First** : Zéro-JS par défaut (Architecture en Îles), chargement efficace des images.
- **Stack Moderne** : Astro 5, Tailwind CSS 4 (via Vite), TypeScript.
- **Accessibilité** : HTML sémantique, aides à la conformité WCAG 2.1 AA+.
- **Optimisé SEO** : Balises méta dynamiques, OpenGraph, Twitter Cards, URLs canoniques, Sitemap.
- **Configuration Facile** : Fichier de configuration centralisé pour les métadonnées et le contenu du site.
- **Mode Sombre** : Support du mode sombre respectant les préférences système.

## 🛠️ Pour Commencer

### Prérequis

- Node.js (v18 ou supérieur)
- npm, pnpm, ou yarn

### Installation

1.  Clonez le dépôt :
    ```bash
    git clone https://github.com/votre-nom-utilisateur/astro-landing-page.git
    cd astro-landing-page
    ```

2.  Installez les dépendances :
    ```bash
    npm install
    ```

3.  Démarrez le serveur de développement :
    ```bash
    npm run dev
    ```
    Visitez `http://localhost:4321` pour voir votre nouvelle landing page !

## ⚙️ Configuration

### Métadonnées du Site & Contenu

La plupart du contenu peut être géré directement depuis `src/config/site.ts`. Ici, vous pouvez configurer :

- **Infos du Site** : Titre, description, URL.
- **Navigation** : Éléments du menu.
- **Sections** : Données des fonctionnalités, témoignages, plans tarifaires, entrées de la FAQ.

Exemple `src/config/site.ts` :
```typescript
export const SITE = {
  name: 'Ma Startup B2C',
  title: 'Boostez votre Productivité',
  // ...
};

export const PRICING_PLANS = [
  // ... éditez vos plans ici
];
```

### Styles (Tailwind CSS 4.0)

Ce projet utilise **Tailwind CSS v4** configuré via Vite.
Les styles globaux et les extensions de thème sont définis dans `src/styles/global.css`.

- **Couleurs** : Le thème utilise des variables CSS pour les couleurs (ex: `--color-primary-500`). Vous pouvez changer la palette de couleurs dans le bloc `@theme` de `src/styles/global.css`.
- **Polices** : La police Inter est configurée par défaut.

### 🖼️ Gestion des Images

Astro optimise automatiquement vos images.

1.  Placez vos images dans `src/assets/` (recommandé) ou `public/` (pour les favicons/robots.txt).
2.  Utilisez le composant `<Image />` d'Astro dans vos fichiers `.astro` :

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/my-image.png';
---

<!-- Génère une image optimisée, lazy-loaded avec dimensions -->
<Image src={myImage} alt="Description de l'image" />
```

### 🔍 SEO et Méta-tags

Le SEO est géré centralement pour assurer une indexation optimale.

1.  **Configuration Globale** : Le fichier `src/config/site.ts` définit les valeurs par défaut (Titre, Description, URL, Image de partage).
2.  **Par Page** : Chaque page peut surcharger ces valeurs via le layout `BaseLayout` :

```astro
<BaseLayout
  title="Page Contact"
  description="Contactez-nous pour..."
  image="/images/contact-share.png"
>
  <!-- Contenu de la page -->
</BaseLayout>
```

Le composant `SEO.astro` génère automatiquement :
- Les balises Open Graph (Facebook, LinkedIn) et Twitter Cards.
- L'URL canonique.
- Le sitemap est généré automatiquement lors du build (`sitemap-index.xml`).


## 📦 Construction pour la Production

Pour créer une version de production :

```bash
npm run build
```

Le résultat sera dans le dossier `dist/`, prêt à être déployé sur n'importe quel hébergeur statique (Vercel, Netlify, Github Pages, etc.).

## 🧞 Commandes

| Commande | Action |
| :--- | :--- |
| `npm run dev` | Démarre le serveur local sur `localhost:4321` |
| `npm run build` | Construit votre site de production dans `./dist/` |
| `npm run preview` | Prévisualise votre build localement avant déploiement |
| `npm run astro ...` | Lance des commandes CLI comme `astro add`, `astro check` |
| `npm run lint` | Lance ESLint pour vérifier la qualité du code |
