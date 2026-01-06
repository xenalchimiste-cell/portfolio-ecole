# Portfolio React

Un portfolio moderne et responsive créé avec React, TypeScript et Vite.

## 🚀 Fonctionnalités

- **Design moderne et responsive** - S'adapte à tous les écrans
- **Mode sombre/clair** - Basculement entre les thèmes
- **Sections complètes** :
  - Hero section avec présentation
  - À propos
  - Compétences techniques
  - Projets avec liens GitHub et démo
  - Formulaire de contact
- **Animations fluides** - Transitions et effets visuels
- **TypeScript** - Code type-safe
- **Performance optimisée** - Build avec Vite

## 📦 Installation

1. Installez les dépendances :
```bash
npm install
```

2. Lancez le serveur de développement :
```bash
npm run dev
```

3. Ouvrez votre navigateur sur `http://localhost:5173`

## 🛠️ Technologies utilisées

- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool rapide
- **React Icons** - Icônes
- **CSS3** - Styles modernes avec variables CSS

## 📝 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée une version de production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint

## 🎨 Personnalisation

### Modifier les informations personnelles

1. **Hero section** : Modifiez `src/components/Hero.tsx`
2. **À propos** : Modifiez `src/components/About.tsx`
3. **Compétences** : Modifiez le tableau `skills` dans `src/components/Skills.tsx`
4. **Projets** : Modifiez le tableau `projects` dans `src/components/Projects.tsx`
5. **Contact** : Modifiez les informations dans `src/components/Contact.tsx`

### Modifier les couleurs

Les couleurs sont définies dans `src/index.css` avec des variables CSS. Vous pouvez les modifier pour personnaliser le thème.

### Ajouter des projets

Ajoutez de nouveaux objets dans le tableau `projects` de `src/components/Projects.tsx`.

## 📱 Responsive

Le portfolio est entièrement responsive et s'adapte à :
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔧 Configuration

### ESLint

Le projet utilise ESLint pour maintenir la qualité du code. La configuration se trouve dans `.eslintrc.cjs`.

### TypeScript

La configuration TypeScript se trouve dans `tsconfig.json` et `tsconfig.node.json`.

## 📄 Licence

Ce projet est sous licence MIT.

