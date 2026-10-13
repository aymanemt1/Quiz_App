export const gitQuestions = [
  {
    lang: "EN",
    qsts: [
    {
      id: 0,
      level: 1,
      text: "What is Git?",
      answers: [
        "A distributed version control system",
        "A code editor",
        "A hosting website",
        "A programming language"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 1,
      level: 1,
      text: "Which command stages files for commit?",
      answers: [
        "git add",
        "git stage-it",
        "git commit",
        "git push"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 2,
      level: 1,
      text: "Which command saves staged changes with a message?",
      answers: [
        "git commit -m \"message\"",
        "git save -m \"message\"",
        "git store \"message\"",
        "git write \"message\""
      ],
      correct: 0,
      selection: null
    },
    {
      id: 3,
      level: 1,
      text: "Which command shows the commit history?",
      answers: [
        "git log",
        "git history",
        "git commits",
        "git show-all"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 4,
      level: 2,
      text: "What is the difference between 'git pull' and 'git fetch'?",
      answers: [
        "git pull fetches and merges; git fetch only downloads without merging",
        "They are identical",
        "git fetch deletes branches",
        "git pull only works offline"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 5,
      level: 2,
      text: "How do you create a new branch and switch to it?",
      answers: [
        "git checkout -b feature",
        "git branch feature (stays on current branch)",
        "git create feature",
        "git new-branch feature"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 6,
      level: 2,
      text: "What is a merge conflict?",
      answers: [
        "Competing changes to the same lines that Git cannot auto-resolve",
        "A network error",
        "A deleted repository",
        "A wrong commit message"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 7,
      level: 3,
      text: "What does 'git rebase' do?",
      answers: [
        "Reapplies commits on top of another base commit",
        "Deletes the repository",
        "Merges without history",
        "It pushes to remote"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 8,
      level: 3,
      text: "How do you undo the last commit but keep your changes?",
      answers: [
        "git reset --soft HEAD~1",
        "git revert --hard",
        "git delete HEAD",
        "git checkout -- ."
      ],
      correct: 0,
      selection: null
    },
    {
      id: 9,
      level: 3,
      text: "What does 'git stash' do?",
      answers: [
        "Temporarily shelves changes so you can work on a clean tree",
        "Deletes all branches",
        "Pushes to GitHub",
        "It creates a tag"
      ],
      correct: 0,
      selection: null
    }
    ]
  },
  {
    lang: "FR",
    qsts: [
    {
      id: 0,
      level: 1,
      text: "Qu'est-ce que Git ?",
      answers: [
        "Un système de gestion de versions distribué",
        "Un éditeur de code",
        "Un site d'hébergement",
        "Un langage de programmation"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 1,
      level: 1,
      text: "Quelle commande prépare les fichiers pour le commit (staging) ?",
      answers: [
        "git add",
        "git stage-it",
        "git commit",
        "git push"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 2,
      level: 1,
      text: "Quelle commande enregistre les changements avec un message ?",
      answers: [
        "git commit -m \"message\"",
        "git save -m \"message\"",
        "git store \"message\"",
        "git write \"message\""
      ],
      correct: 0,
      selection: null
    },
    {
      id: 3,
      level: 1,
      text: "Quelle commande affiche l'historique des commits ?",
      answers: [
        "git log",
        "git history",
        "git commits",
        "git show-all"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 4,
      level: 2,
      text: "Quelle est la différence entre 'git pull' et 'git fetch' ?",
      answers: [
        "git pull récupère et fusionne ; git fetch télécharge sans fusionner",
        "Ils sont identiques",
        "git fetch supprime les branches",
        "git pull ne fonctionne que hors ligne"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 5,
      level: 2,
      text: "Comment crée-t-on une nouvelle branche et bascule-t-on dessus ?",
      answers: [
        "git checkout -b feature",
        "git branch feature (reste sur la branche actuelle)",
        "git create feature",
        "git new-branch feature"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 6,
      level: 2,
      text: "Qu'est-ce qu'un conflit de fusion (merge conflict) ?",
      answers: [
        "Des modifications concurrentes sur les mêmes lignes que Git ne peut pas résoudre seul",
        "Une erreur réseau",
        "Un dépôt supprimé",
        "Un mauvais message de commit"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 7,
      level: 3,
      text: "Que fait 'git rebase' ?",
      answers: [
        "Réapplique les commits sur une autre base",
        "Supprime le dépôt",
        "Fusionne sans historique",
        "Il pousse vers le distant"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 8,
      level: 3,
      text: "Comment annuler le dernier commit tout en gardant ses modifications ?",
      answers: [
        "git reset --soft HEAD~1",
        "git revert --hard",
        "git delete HEAD",
        "git checkout -- ."
      ],
      correct: 0,
      selection: null
    },
    {
      id: 9,
      level: 3,
      text: "Que fait 'git stash' ?",
      answers: [
        "Met temporairement les modifications de côté pour travailler sur un arbre propre",
        "Supprime toutes les branches",
        "Pousse vers GitHub",
        "Crée un tag"
      ],
      correct: 0,
      selection: null
    }
    ]
  }
];
