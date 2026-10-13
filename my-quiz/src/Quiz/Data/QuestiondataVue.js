export const vueQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "text": "What is Vue.js?",
        "answers": [
          "A progressive JavaScript framework for building user interfaces",
          "A JavaScript database",
          "A CSS preprocessor",
          "A back-end framework"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "text": "Which directive is used to render a list in Vue?",
        "answers": [
          "v-for",
          "v-list",
          "v-each",
          "v-loop"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "text": "How do you bind data to an HTML attribute in Vue?",
        "answers": [
          "v-bind or :",
          "v-model or =",
          "v-data",
          "v-attr"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 3,
        "level": 2,
        "text": "What is the 'data' option in a Vue component?",
        "answers": [
          "A function returning the component's reactive state object",
          "A static string",
          "An API endpoint",
          "A CSS class"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 4,
        "level": 2,
        "text": "Which lifecycle hook is called after the component is mounted to the DOM?",
        "answers": [
          "mounted",
          "created",
          "updated",
          "beforeMount"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 5,
        "level": 3,
        "text": "What does 'v-model' do?",
        "answers": [
          "Creates two-way data binding on form inputs",
          "Renders a list",
          "Binds a CSS class",
          "Defines a method"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 6,
        "level": 2,
        "text": "Which file is the entry point of a Vue CLI application?",
        "answers": [
          "src/main.js",
          "src/app.js",
          "public/index.js",
          "src/root.js"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 4,
        "text": "What is the difference between computed properties and methods in Vue?",
        "answers": [
          "Computed properties are cached based on dependencies; methods re-run on every render",
          "There is no difference",
          "Methods are cached, computed are not",
          "Computed properties cannot return values"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 8,
        "level": 4,
        "text": "What are slots in Vue used for?",
        "answers": [
          "Content distribution into child components",
          "Styling components",
          "Defining routes",
          "Managing state"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 9,
        "level": 5,
        "text": "What does the '<script setup>' syntax provide in Vue 3?",
        "answers": [
          "A more concise Composition API syntax with less boilerplate",
          "A new template language",
          "Server-side rendering only",
          "It replaces the router"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 3,
        "text": "What does the v-bind directive (shorthand ':') do?",
        "answers": [
          "It creates a loop",
          "It binds an attribute or prop to a reactive value",
          "It binds an event",
          "It hides an element"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 4,
        "text": "What is the difference between ref() and reactive()?",
        "answers": [
          "They are identical",
          "ref() wraps any value (needs .value); reactive() makes a deep reactive object",
          "ref() is for templates only",
          "reactive() is deprecated"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 12,
        "level": 4,
        "text": "What is a computed property?",
        "answers": [
          "A method that runs on every render",
          "A cached value derived from reactive state",
          "A lifecycle hook",
          "A global variable"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 13,
        "level": 5,
        "text": "In the Composition API, when does onMounted run compared to setup()?",
        "answers": [
          "Before setup()",
          "After the component is mounted to the DOM; setup() runs before mount",
          "At the same time",
          "It never runs"
        ],
        "correct": 1,
        "selection": null
      }
    ]
  },
  {
    "lang": "FR",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "text": "Qu'est-ce que Vue.js ?",
        "answers": [
          "Un framework JavaScript progressif pour construire des interfaces utilisateur",
          "Une base de données JavaScript",
          "Un préprocesseur CSS",
          "Un framework back-end"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "text": "Quelle directive est utilisée pour afficher une liste dans Vue ?",
        "answers": [
          "v-for",
          "v-list",
          "v-each",
          "v-loop"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "text": "Comment lie-t-on des données à un attribut HTML dans Vue ?",
        "answers": [
          "v-bind ou :",
          "v-model ou =",
          "v-data",
          "v-attr"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 3,
        "level": 2,
        "text": "Qu'est-ce que l'option 'data' dans un composant Vue ?",
        "answers": [
          "Une fonction retournant l'objet d'état réactif du composant",
          "Une chaîne statique",
          "Un point d'API",
          "Une classe CSS"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 4,
        "level": 2,
        "text": "Quel hook de cycle de vie est appelé après le montage du composant dans le DOM ?",
        "answers": [
          "mounted",
          "created",
          "updated",
          "beforeMount"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 5,
        "level": 3,
        "text": "Que fait 'v-model' ?",
        "answers": [
          "Crée une liaison de données bidirectionnelle sur les champs de formulaire",
          "Affiche une liste",
          "Lie une classe CSS",
          "Définit une méthode"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 6,
        "level": 2,
        "text": "Quel fichier est le point d'entrée d'une application Vue CLI ?",
        "answers": [
          "src/main.js",
          "src/app.js",
          "public/index.js",
          "src/root.js"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 4,
        "text": "Quelle est la différence entre les propriétés calculées (computed) et les méthodes dans Vue ?",
        "answers": [
          "Les propriétés calculées sont mises en cache selon leurs dépendances ; les méthodes se réexécutent à chaque rendu",
          "Il n'y a pas de différence",
          "Les méthodes sont mises en cache, pas les computed",
          "Les propriétés calculées ne peuvent pas retourner de valeurs"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 8,
        "level": 4,
        "text": "À quoi servent les slots dans Vue ?",
        "answers": [
          "À distribuer du contenu dans les composants enfants",
          "À styliser les composants",
          "À définir les routes",
          "À gérer l'état"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 9,
        "level": 5,
        "text": "Qu'apporte la syntaxe '<script setup>' dans Vue 3 ?",
        "answers": [
          "Une syntaxe Composition API plus concise avec moins de code répétitif",
          "Un nouveau langage de template",
          "Uniquement le rendu côté serveur",
          "Elle remplace le routeur"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 3,
        "text": "Que fait la directive v-bind (raccourci ':') ?",
        "answers": [
          "Elle crée une boucle",
          "Elle lie un attribut ou une prop à une valeur réactive",
          "Elle lie un événement",
          "Elle cache un élément"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 4,
        "text": "Quelle est la différence entre ref() et reactive() ?",
        "answers": [
          "Ils sont identiques",
          "ref() enveloppe n'importe quelle valeur (nécessite .value) ; reactive() rend un objet profondément réactif",
          "ref() est réservé aux templates",
          "reactive() est déprécié"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 12,
        "level": 4,
        "text": "Qu'est-ce qu'une propriété calculée (computed) ?",
        "answers": [
          "Une méthode exécutée à chaque rendu",
          "Une valeur mise en cache dérivée d'un état réactif",
          "Un hook de cycle de vie",
          "Une variable globale"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 13,
        "level": 5,
        "text": "En Composition API, quand s'exécute onMounted par rapport à setup() ?",
        "answers": [
          "Avant setup()",
          "Après le montage du composant dans le DOM ; setup() s'exécute avant",
          "En même temps",
          "Il ne s'exécute jamais"
        ],
        "correct": 1,
        "selection": null
      }
    ]
  }
];
