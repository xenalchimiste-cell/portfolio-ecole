# Commandes Git pour votre portfolio

## Pour faire un nouveau commit (après avoir modifié des fichiers)

```bash
# 1. Voir les fichiers modifiés
git status

# 2. Ajouter les fichiers modifiés
git add .

# OU pour ajouter un fichier spécifique
git add nom-du-fichier

# 3. Faire le commit
git commit -m "Description de vos modifications"

# 4. Pousser vers GitHub
git push
```

## Exemples de messages de commit

```bash
git commit -m "Ajout de mes informations personnelles"
git commit -m "Mise à jour de la section projets"
git commit -m "Correction du formulaire de contact"
git commit -m "Amélioration du design responsive"
```

## Si vous avez une erreur d'authentification

Si `git push` vous demande un mot de passe ou donne une erreur d'authentification :

1. **Option 1 : Utiliser GitHub Desktop** (plus simple)
   - Téléchargez [GitHub Desktop](https://desktop.github.com/)
   - Connectez-vous avec votre compte GitHub
   - Ajoutez votre dépôt local
   - Cliquez sur "Push origin" pour pousser vos commits

2. **Option 2 : Utiliser un Personal Access Token**
   - Allez sur GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Générez un nouveau token avec les permissions `repo`
   - Utilisez ce token comme mot de passe lors du push

## Commandes utiles

```bash
# Voir l'historique des commits
git log

# Voir les différences avant de commit
git diff

# Annuler les modifications d'un fichier (attention!)
git checkout -- nom-du-fichier

# Annuler un commit (sans push)
git reset --soft HEAD~1
```

