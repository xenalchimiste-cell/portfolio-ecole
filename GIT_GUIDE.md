# Guide pour mettre votre portfolio sur GitHub

## Étapes à suivre

### 1. Créer un dépôt sur GitHub

1. Allez sur [GitHub.com](https://github.com) et connectez-vous
2. Cliquez sur le bouton "+" en haut à droite → "New repository"
3. Donnez un nom à votre dépôt (ex: `portfolio` ou `mon-portfolio`)
4. **Ne cochez PAS** "Initialize this repository with a README"
5. Cliquez sur "Create repository"

### 2. Initialiser Git dans votre projet

Ouvrez un terminal dans votre dossier et exécutez :

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Faire votre premier commit
git commit -m "Initial commit - Portfolio React"
```

### 3. Lier votre projet à GitHub

```bash
# Remplacer USERNAME et REPOSITORY par vos informations
git remote add origin https://github.com/USERNAME/REPOSITORY.git

# Renommer la branche principale en "main"
git branch -M main

# Pousser votre code sur GitHub
git push -u origin main
```

**Exemple concret :**
Si votre dépôt est `https://github.com/andreas/portfolio`, la commande sera :
```bash
git remote add origin https://github.com/andreas/portfolio.git
```

### 4. Commandes utiles pour la suite

```bash
# Voir l'état de vos fichiers
git status

# Ajouter des fichiers modifiés
git add .

# Faire un commit
git commit -m "Description de vos modifications"

# Pousser vers GitHub
git push
```

## ⚠️ Important

Avant de pousser sur GitHub, assurez-vous que :
- Vous avez créé le dépôt sur GitHub
- Vous êtes connecté à GitHub (via l'application GitHub Desktop ou les credentials Git)
- Vous avez remplacé USERNAME et REPOSITORY dans la commande `git remote add origin`

