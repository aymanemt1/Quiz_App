export const typescriptQuestions = [
  {
    lang: "EN",
    qsts: [
    {
      id: 0,
      level: 1,
      text: "What is TypeScript?",
      answers: [
        "A superset of JavaScript that adds static typing",
        "A JavaScript database library",
        "A CSS framework",
        "An operating system"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 1,
      level: 1,
      text: "Which file extension is used for TypeScript files?",
      answers: [
        ".js",
        ".ts",
        ".java",
        ".tsx"
      ],
      correct: 1,
      selection: null
    },
    {
      id: 2,
      level: 1,
      text: "How do you declare a variable of type string in TypeScript?",
      answers: [
        "let name: string;",
        "let name = string;",
        "string name;",
        "let string name;"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 3,
      level: 2,
      text: "What does the '?' mean in 'name?: string'?",
      answers: [
        "The property is optional",
        "The property is required",
        "The property is read-only",
        "It is a syntax error"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 4,
      level: 1,
      text: "Which command compiles a TypeScript file to JavaScript?",
      answers: [
        "tsc",
        "ts-node",
        "npm compile",
        "typescript-build"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 5,
      level: 2,
      text: "What is a generic in TypeScript?",
      answers: [
        "A reusable type parameter, e.g. function identity<T>(arg: T)",
        "A global variable",
        "A type of interface",
        "A built-in class"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 6,
      level: 2,
      text: "Which of the following is a valid union type?",
      answers: [
        "string | number",
        "string + number",
        "string & number",
        "string, number"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 7,
      level: 3,
      text: "What is the difference between 'any' and 'unknown'?",
      answers: [
        "'unknown' requires type narrowing before use, 'any' disables checking",
        "They are identical",
        "'any' is safer than 'unknown'",
        "'unknown' can only hold null"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 8,
      level: 3,
      text: "What does 'strictNullChecks' do when enabled?",
      answers: [
        "Prevents null and undefined from being assigned to other types implicitly",
        "Removes all null values at runtime",
        "Makes every variable nullable",
        "Disables type checking"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 9,
      level: 3,
      text: "What is the purpose of the 'readonly' modifier?",
      answers: [
        "Prevents a property from being reassigned after initialization",
        "Makes a property optional",
        "Hides a property from IntelliSense",
        "Converts a property to a method"
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
      text: "Qu'est-ce que TypeScript ?",
      answers: [
        "Un sur-ensemble de JavaScript qui ajoute le typage statique",
        "Une bibliothèque de base de données JavaScript",
        "Un framework CSS",
        "Un système d'exploitation"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 1,
      level: 1,
      text: "Quelle extension de fichier est utilisée pour les fichiers TypeScript ?",
      answers: [
        ".js",
        ".ts",
        ".java",
        ".tsx"
      ],
      correct: 1,
      selection: null
    },
    {
      id: 2,
      level: 1,
      text: "Comment déclare-t-on une variable de type string en TypeScript ?",
      answers: [
        "let name: string;",
        "let name = string;",
        "string name;",
        "let string name;"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 3,
      level: 2,
      text: "Que signifie le '?' dans 'name?: string' ?",
      answers: [
        "La propriété est optionnelle",
        "La propriété est obligatoire",
        "La propriété est en lecture seule",
        "C'est une erreur de syntaxe"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 4,
      level: 1,
      text: "Quelle commande compile un fichier TypeScript en JavaScript ?",
      answers: [
        "tsc",
        "ts-node",
        "npm compile",
        "typescript-build"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 5,
      level: 2,
      text: "Qu'est-ce qu'un générique (generic) en TypeScript ?",
      answers: [
        "Un paramètre de type réutilisable, ex. function identity<T>(arg: T)",
        "Une variable globale",
        "Un type d'interface",
        "Une classe intégrée"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 6,
      level: 2,
      text: "Lequel des éléments suivants est un type union valide ?",
      answers: [
        "string | number",
        "string + number",
        "string & number",
        "string, number"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 7,
      level: 3,
      text: "Quelle est la différence entre 'any' et 'unknown' ?",
      answers: [
        "'unknown' exige un affinement de type avant usage, 'any' désactive la vérification",
        "Ils sont identiques",
        "'any' est plus sûr que 'unknown'",
        "'unknown' ne peut contenir que null"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 8,
      level: 3,
      text: "Que fait 'strictNullChecks' quand il est activé ?",
      answers: [
        "Empêche d'assigner null et undefined à d'autres types implicitement",
        "Supprime toutes les valeurs null à l'exécution",
        "Rend chaque variable nullable",
        "Désactive la vérification de type"
      ],
      correct: 0,
      selection: null
    },
    {
      id: 9,
      level: 3,
      text: "Quel est le but du modificateur 'readonly' ?",
      answers: [
        "Empêche la réassignation d'une propriété après l'initialisation",
        "Rend une propriété optionnelle",
        "Cache une propriété dans IntelliSense",
        "Convertit une propriété en méthode"
      ],
      correct: 0,
      selection: null
    }
    ]
  }
];
