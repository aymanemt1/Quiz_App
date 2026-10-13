export const interviewQuestions = [
  {
    lang: "EN",
    qsts: [
    {
      id: 0,
      topic: "React",
      q: "Explain the difference between state and props.",
      a: "Props are read-only data passed from a parent to a child component, while state is mutable data managed inside the component itself. Changing state triggers a re-render; props flow one-way down the tree."
    },
    {
      id: 1,
      topic: "React",
      q: "What is the virtual DOM and why does React use it?",
      a: "The virtual DOM is a lightweight in-memory copy of the real DOM. When state changes, React diffs the new virtual DOM against the previous one and applies only the minimal real DOM updates, which is much faster than re-rendering everything."
    },
    {
      id: 2,
      topic: "React",
      q: "What are React hooks? Name three and explain useEffect.",
      a: "Hooks let function components use state and lifecycle features. useState manages local state, useEffect runs side effects like data fetching after render, and useContext consumes context values."
    },
    {
      id: 3,
      topic: "React",
      q: "How do you handle forms and user input in React?",
      a: "With controlled components: the input value is stored in state and updated via onChange. On submit you read the state. This gives React full control over form data and validation."
    },
    {
      id: 4,
      topic: "React",
      q: "How would you fetch data from an API in a React component?",
      a: "Inside useEffect with an empty dependency array, call fetch or axios, then store the result in state with useState. Handle loading and error states, and clean up (e.g. abort the request) if the component unmounts."
    },
    {
      id: 5,
      topic: "Javascript",
      q: "What is a closure? Give a use case.",
      a: "A closure is a function that remembers variables from its outer scope even after that scope finished executing. Use cases: private counters, memoization, event handlers."
    },
    {
      id: 6,
      topic: "Javascript",
      q: "Explain the event loop.",
      a: "JavaScript is single-threaded. The event loop takes tasks from the queues and pushes them onto the call stack when it is empty. Microtasks (promises) run before macrotasks (setTimeout)."
    },
    {
      id: 7,
      topic: "Javascript",
      q: "What is the difference between == and ===?",
      a: "== compares with type coercion, === compares without coercion (strict equality of value and type). Always prefer ===."
    },
    {
      id: 8,
      topic: "Javascript",
      q: "What is the difference between var, let and const?",
      a: "var is function-scoped and hoisted; let and const are block-scoped. const cannot be reassigned. let and const live in the temporal dead zone before their declaration."
    },
    {
      id: 9,
      topic: "Javascript",
      q: "How does async/await work?",
      a: "async functions always return a promise. await pauses execution until the promise settles, letting you write asynchronous code that reads like synchronous code. Use try/catch for errors."
    },
    {
      id: 10,
      topic: "Typescript",
      q: "Why use TypeScript instead of JavaScript?",
      a: "Static typing catches errors at compile time, improves autocompletion and refactoring, and documents the shape of data. It compiles down to plain JavaScript."
    },
    {
      id: 11,
      topic: "Typescript",
      q: "Interface vs type — when to use which?",
      a: "Both describe object shapes. Interfaces can be extended and merged (declaration merging); types support unions, intersections and primitives. Use type for unions, either for plain objects."
    },
    {
      id: 12,
      topic: "Typescript",
      q: "What are generics?",
      a: "Generics let you write reusable code that works with multiple types while keeping type safety, e.g. function identity<T>(arg: T): T."
    },
    {
      id: 13,
      topic: "Typescript",
      q: "Explain any vs unknown.",
      a: "any disables type checking entirely. unknown is the type-safe counterpart: you must narrow it (typeof checks, type guards) before using it."
    },
    {
      id: 14,
      topic: "Typescript",
      q: "How do you type a React component's props?",
      a: "With an interface or type, e.g. interface Props { title: string; onClick?: () => void }, then function Button({ title }: Props)."
    },
    {
      id: 15,
      topic: "VueJs",
      q: "How does Vue's reactivity work?",
      a: "Vue tracks dependencies when rendering and re-runs updates when reactive data changes. Vue 3 implements this with Proxies; Vue 2 used Object.defineProperty."
    },
    {
      id: 16,
      topic: "VueJs",
      q: "Options API vs Composition API?",
      a: "Options API organizes code by option (data, methods, computed). Composition API (setup / <script setup>) organizes by feature, is more reusable via composables, and has better TypeScript support."
    },
    {
      id: 17,
      topic: "VueJs",
      q: "What is v-model?",
      a: "A directive for two-way binding on form inputs: it binds the value and listens to input events, keeping the data and the input in sync."
    },
    {
      id: 18,
      topic: "VueJs",
      q: "Computed vs methods vs watch?",
      a: "Computed properties are cached and re-evaluate only when dependencies change; methods run on every render; watchers react to specific data changes with side effects."
    },
    {
      id: 19,
      topic: "VueJs",
      q: "How do parent and child components communicate?",
      a: "Parent to child via props; child to parent via emitted events ($emit). For shared state across many components, use Pinia (or Vuex)."
    },
    {
      id: 20,
      topic: "Html",
      q: "What is semantic HTML? Give examples.",
      a: "Using tags that describe meaning: header, nav, main, article, section, footer. It improves accessibility, SEO and code readability."
    },
    {
      id: 21,
      topic: "Html",
      q: "What is the difference between block and inline elements?",
      a: "Block elements (div, p) take the full width and start on a new line; inline elements (span, a) only take the needed width and stay in the flow."
    },
    {
      id: 22,
      topic: "Html",
      q: "What is the purpose of the meta viewport tag?",
      a: "It tells mobile browsers how to scale the page: <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">. Essential for responsive design."
    },
    {
      id: 23,
      topic: "Html",
      q: "How do you make a form accessible?",
      a: "Use label elements linked to inputs via for/id, fieldset/legend for groups, proper input types, and aria attributes where needed."
    },
    {
      id: 24,
      topic: "Html",
      q: "What are data-* attributes?",
      a: "Custom attributes to store extra data on elements, readable via element.dataset in JavaScript, without using non-standard attributes."
    },
    {
      id: 25,
      topic: "Css",
      q: "Explain the CSS box model.",
      a: "Every element is a box: content, padding, border, margin. box-sizing: border-box makes width include padding and border, which is usually what you want."
    },
    {
      id: 26,
      topic: "Css",
      q: "Flexbox vs Grid?",
      a: "Flexbox is one-dimensional (row or column), great for aligning items. Grid is two-dimensional (rows and columns), great for page layouts. They can be combined."
    },
    {
      id: 27,
      topic: "Css",
      q: "What is specificity? How are conflicts resolved?",
      a: "Specificity decides which rule wins: inline styles > IDs > classes/attributes > elements. With equal specificity, the later rule wins. Avoid !important."
    },
    {
      id: 28,
      topic: "Css",
      q: "How do you center a div?",
      a: "Modern way: display flex or grid with place-items/justify-content/align-items center. Classic: margin: 0 auto for horizontal centering of a block with a set width."
    },
    {
      id: 29,
      topic: "Css",
      q: "What are CSS variables and why use them?",
      a: "Custom properties (--main-color) defined once and reused via var(). They make theming and maintenance easy and can be changed at runtime with JavaScript."
    },
    {
      id: 30,
      topic: "Tailwind",
      q: "What is utility-first CSS?",
      a: "Instead of writing custom classes, you compose small single-purpose utilities (p-4, flex, text-center) directly in HTML. Faster to write, consistent design system."
    },
    {
      id: 31,
      topic: "Tailwind",
      q: "How does responsive design work in Tailwind?",
      a: "Mobile-first breakpoint prefixes: sm:, md:, lg:, xl:. Classes without a prefix apply to all sizes; prefixed ones apply from that breakpoint up."
    },
    {
      id: 32,
      topic: "Tailwind",
      q: "How do you customize Tailwind?",
      a: "Via tailwind.config.js: extend theme colors, fonts, spacing, breakpoints, and add plugins. Use CSS variables for runtime theming."
    },
    {
      id: 33,
      topic: "Tailwind",
      q: "How does Tailwind stay small in production?",
      a: "The JIT engine scans your source files and generates only the utilities you actually use, removing everything else."
    },
    {
      id: 34,
      topic: "Tailwind",
      q: "When would you use @apply?",
      a: "To extract repeated utility patterns into a reusable CSS class, e.g. .btn { @apply px-4 py-2 rounded; }. Use sparingly to keep the utility-first benefits."
    },
    {
      id: 35,
      topic: "NodeJs",
      q: "What is Node.js and why is it used for backends?",
      a: "A JavaScript runtime built on Chrome's V8 engine that runs JS outside the browser. Its non-blocking I/O model handles many concurrent connections efficiently, and sharing JavaScript across the stack reduces context switching."
    },
    {
      id: 36,
      topic: "NodeJs",
      q: "Explain non-blocking I/O and the event loop.",
      a: "Node runs JavaScript on a single thread but offloads I/O to the system. The event loop processes callbacks when operations complete, so the server stays responsive under load."
    },
    {
      id: 37,
      topic: "NodeJs",
      q: "What is npm and package.json?",
      a: "npm is the Node package manager; package.json declares dependencies, scripts and metadata. package-lock.json pins exact versions for reproducible installs."
    },
    {
      id: 38,
      topic: "NodeJs",
      q: "How do you handle async errors in Node?",
      a: "With try/catch around await, .catch() on promises, and error-first callbacks. In Express, forward errors to error-handling middleware with next(err)."
    },
    {
      id: 39,
      topic: "NodeJs",
      q: "What are environment variables and why use them?",
      a: "Configuration kept outside code (process.env): API keys, database URLs. Keeps secrets out of source control and lets the same code run in dev, staging and prod."
    },
    {
      id: 40,
      topic: "RestApi",
      q: "What makes an API RESTful?",
      a: "Resource-based URLs, HTTP methods (GET/POST/PUT/PATCH/DELETE), stateless requests, standard status codes, and JSON representations."
    },
    {
      id: 41,
      topic: "RestApi",
      q: "How do you design good API endpoints?",
      a: "Use nouns not verbs (/users not /getUsers), plural resources, proper methods and status codes, versioning (/api/v1), pagination and filtering for collections."
    },
    {
      id: 42,
      topic: "RestApi",
      q: "How do you secure a REST API?",
      a: "HTTPS everywhere, authentication (JWT/OAuth), authorization checks per resource, input validation, rate limiting, and never expose stack traces."
    },
    {
      id: 43,
      topic: "RestApi",
      q: "What is middleware in Express? Give examples.",
      a: "Functions in the request pipeline (req, res, next): logging (morgan), JSON parsing (express.json), auth checks, CORS, error handlers."
    },
    {
      id: 44,
      topic: "RestApi",
      q: "How do you validate request data?",
      a: "With a validation library (Joi, Zod, express-validator): check types, required fields and formats before touching the database; return 400 with clear messages on failure."
    },
    {
      id: 45,
      topic: "Laravel",
      q: "Explain MVC in Laravel.",
      a: "Model (Eloquent: data + business logic), View (Blade templates), Controller (handles requests, coordinates). Routes map URLs to controllers."
    },
    {
      id: 46,
      topic: "Laravel",
      q: "What is Eloquent?",
      a: "Laravel's ORM: each model maps to a table, you query with expressive syntax (User::where(...)->get()), with relationships like hasMany and belongsTo."
    },
    {
      id: 47,
      topic: "Laravel",
      q: "What are migrations and seeders?",
      a: "Migrations version-control the database schema (up/down); seeders fill tables with initial or fake data for development and testing."
    },
    {
      id: 48,
      topic: "Laravel",
      q: "How does authentication work in Laravel?",
      a: "Via guards and providers; Laravel Breeze/Jetstream for classic apps or Sanctum for SPA/mobile tokens. Middleware like 'auth' protects routes."
    },
    {
      id: 49,
      topic: "Laravel",
      q: "What is middleware in Laravel? Give examples.",
      a: "Code that filters HTTP requests: auth, throttle (rate limiting), CORS, verified. Assigned to routes or controllers."
    },
    {
      id: 50,
      topic: "Php",
      q: "How does PHP handle a web request?",
      a: "The web server passes the request to the PHP interpreter, which executes the script top to bottom, mixing HTML output, then returns the response. Superglobals ($_GET, $_POST) hold request data."
    },
    {
      id: 51,
      topic: "Php",
      q: "How do you prevent SQL injection in PHP?",
      a: "Use prepared statements with bound parameters (PDO); never concatenate user input into queries. Validate input and escape output too."
    },
    {
      id: 52,
      topic: "Php",
      q: "Sessions vs cookies?",
      a: "Cookies live in the browser (small, visible); sessions live on the server, keyed by a cookie ID. Store sensitive data in sessions."
    },
    {
      id: 53,
      topic: "Php",
      q: "What are Composer and Packagist?",
      a: "Composer is PHP's dependency manager (like npm); Packagist is the package registry. composer.json declares dependencies, vendor/ holds them."
    },
    {
      id: 54,
      topic: "Php",
      q: "How do you handle file uploads securely?",
      a: "Check MIME type and extension, limit size, rename files, store outside the web root, and never trust the original filename."
    },
    {
      id: 55,
      topic: "Python",
      q: "What are Python's main data structures?",
      a: "list (ordered, mutable), tuple (ordered, immutable), dict (key-value), set (unique values). Choose by mutability and lookup needs."
    },
    {
      id: 56,
      topic: "Python",
      q: "List vs tuple vs dict — when to use each?",
      a: "List for ordered collections you modify; tuple for fixed records; dict for labeled lookups."
    },
    {
      id: 57,
      topic: "Python",
      q: "What is a virtualenv and why use it?",
      a: "An isolated Python environment per project so dependencies don't clash. Created with venv and activated per shell."
    },
    {
      id: 58,
      topic: "Python",
      q: "How do you handle errors in Python?",
      a: "try/except/else/finally blocks; raise custom exceptions; catch specific exception types, not bare except."
    },
    {
      id: 59,
      topic: "Python",
      q: "What is pip?",
      a: "Python's package installer (like npm). pip install -r requirements.txt reproduces an environment."
    },
    {
      id: 60,
      topic: "Sql",
      q: "Write a query to get all users older than 18, sorted by name.",
      a: "SELECT * FROM users WHERE age > 18 ORDER BY name ASC;"
    },
    {
      id: 61,
      topic: "Sql",
      q: "Explain the JOIN types.",
      a: "INNER JOIN: matching rows only. LEFT JOIN: all left rows plus matches. RIGHT JOIN: all right rows. FULL OUTER JOIN: all rows from both sides."
    },
    {
      id: 62,
      topic: "Sql",
      q: "What is an index and when does it help or hurt?",
      a: "A data structure that speeds up lookups on a column. It helps reads and WHERE/JOIN/ORDER BY clauses; it hurts writes and takes space. Don't over-index."
    },
    {
      id: 63,
      topic: "Sql",
      q: "How do you prevent SQL injection?",
      a: "Parameterized queries / prepared statements — never build SQL by concatenating user input."
    },
    {
      id: 64,
      topic: "Sql",
      q: "What is normalization?",
      a: "Organizing data to reduce redundancy: 1NF atomic values, 2NF no partial dependencies, 3NF no transitive dependencies. Denormalize deliberately for read performance."
    },
    {
      id: 65,
      topic: "MongoDb",
      q: "SQL vs MongoDB — when to choose which?",
      a: "MongoDB for flexible, evolving schemas and hierarchical data; SQL for rigid schemas, complex joins and strong transactions."
    },
    {
      id: 66,
      topic: "MongoDb",
      q: "What is a document? How is data modeled in MongoDB?",
      a: "A BSON object (JSON-like). Model by embedding related data you read together, referencing when data is large or shared."
    },
    {
      id: 67,
      topic: "MongoDb",
      q: "How do you query in MongoDB? Give examples.",
      a: "db.users.find({ age: { $gt: 18 } }), .insertOne(), .updateOne(), .deleteOne(). Aggregation pipelines for analytics."
    },
    {
      id: 68,
      topic: "MongoDb",
      q: "What is indexing in MongoDB?",
      a: "Indexes (default on _id) speed up queries; create them with createIndex(). They speed reads but slow writes."
    },
    {
      id: 69,
      topic: "MongoDb",
      q: "How do you handle relations in MongoDB?",
      a: "Embed for one-to-few data read together; reference via ObjectId plus $lookup for large or shared data."
    },
    {
      id: 70,
      topic: "Git",
      q: "Explain your Git workflow.",
      a: "Create a feature branch from main, commit small logical changes with clear messages, push, open a pull request, review, merge. Pull before starting new work."
    },
    {
      id: 71,
      topic: "Git",
      q: "How do you resolve a merge conflict?",
      a: "Git marks the conflicting sections; I open the files, choose or combine the correct code, remove the markers, git add, then commit to finish the merge."
    },
    {
      id: 72,
      topic: "Git",
      q: "git merge vs git rebase?",
      a: "Merge preserves history with a merge commit; rebase rewrites commits onto the target for a linear history. Never rebase shared branches."
    },
    {
      id: 73,
      topic: "Git",
      q: "How do you undo mistakes in Git?",
      a: "Unstaged: git restore. Staged: git reset. Committed locally: git reset --soft HEAD~1. Already pushed: git revert (safe, adds a new commit)."
    },
    {
      id: 74,
      topic: "Git",
      q: "What makes a good commit message and pull request?",
      a: "Imperative short summary ('Add login validation'), body explaining why, small focused diffs, PR description with context and testing notes."
    },
    {
      id: 75,
      topic: "Docker",
      q: "Containers vs virtual machines?",
      a: "Containers share the host OS kernel and are lightweight (megabytes, start in milliseconds); VMs include a full guest OS (gigabytes, slower). Containers are isolated processes, not full machines."
    },
    {
      id: 76,
      topic: "Docker",
      q: "Explain Dockerfile, image and container.",
      a: "Dockerfile: the build instructions. Image: the immutable snapshot built from it. Container: a running instance of an image."
    },
    {
      id: 77,
      topic: "Docker",
      q: "How do you run a multi-container app?",
      a: "With Docker Compose: a docker-compose.yml declares services, networks and volumes; 'docker compose up' starts everything together."
    },
    {
      id: 78,
      topic: "Docker",
      q: "How do volumes work and why use them?",
      a: "Volumes persist data outside the container lifecycle and share it between containers. Without them, container data is lost when the container is removed."
    },
    {
      id: 79,
      topic: "Docker",
      q: "How would you Dockerize a Node.js app?",
      a: "Dockerfile: FROM node:alpine, WORKDIR, COPY package*.json, RUN npm ci --production, COPY ., EXPOSE 3000, CMD ['node','server.js']. Use a .dockerignore file."
    }
    ]
  },
  {
    lang: "FR",
    qsts: [
    {
      id: 0,
      topic: "React",
      q: "Expliquez la différence entre state et props.",
      a: "Les props sont des données en lecture seule passées d'un parent à un enfant, tandis que le state est une donnée modifiable gérée à l'intérieur du composant. Changer le state déclenche un re-rendu ; les props circulent dans un seul sens."
    },
    {
      id: 1,
      topic: "React",
      q: "Qu'est-ce que le DOM virtuel et pourquoi React l'utilise-t-il ?",
      a: "Le DOM virtuel est une copie légère du vrai DOM en mémoire. Quand le state change, React compare le nouveau DOM virtuel à l'ancien (diffing) et n'applique que les mises à jour minimales au vrai DOM, ce qui est bien plus rapide que tout re-rendre."
    },
    {
      id: 2,
      topic: "React",
      q: "Que sont les hooks React ? Citez-en trois et expliquez useEffect.",
      a: "Les hooks permettent aux composants fonctionnels d'utiliser le state et les fonctionnalités de cycle de vie. useState gère l'état local, useEffect exécute des effets de bord comme le chargement de données après le rendu, et useContext consomme les valeurs de contexte."
    },
    {
      id: 3,
      topic: "React",
      q: "Comment gère-t-on les formulaires et les saisies utilisateur dans React ?",
      a: "Avec des composants contrôlés : la valeur du champ est stockée dans le state et mise à jour via onChange. À la soumission on lit le state. Cela donne à React un contrôle total sur les données et la validation."
    },
    {
      id: 4,
      topic: "React",
      q: "Comment récupéreriez-vous des données d'une API dans un composant React ?",
      a: "Dans un useEffect avec un tableau de dépendances vide, on appelle fetch ou axios, puis on stocke le résultat dans le state avec useState. On gère les états de chargement et d'erreur, et on nettoie (ex. annuler la requête) si le composant se démonte."
    },
    {
      id: 5,
      topic: "Javascript",
      q: "Qu'est-ce qu'une closure ? Donnez un cas d'usage.",
      a: "Une closure est une fonction qui se souvient des variables de sa portée extérieure même après la fin d'exécution de cette portée. Cas d'usage : compteurs privés, mémoïsation, gestionnaires d'événements."
    },
    {
      id: 6,
      topic: "Javascript",
      q: "Expliquez l'event loop.",
      a: "JavaScript est mono-thread. L'event loop prend les tâches des files d'attente et les pousse sur la pile d'appels quand elle est vide. Les microtâches (promesses) s'exécutent avant les macrotâches (setTimeout)."
    },
    {
      id: 7,
      topic: "Javascript",
      q: "Quelle est la différence entre == et === ?",
      a: "== compare avec conversion de type (coercion), === compare sans conversion (égalité stricte de valeur et de type). On préfère toujours ===."
    },
    {
      id: 8,
      topic: "Javascript",
      q: "Quelle est la différence entre var, let et const ?",
      a: "var a une portée de fonction et est hoisted ; let et const ont une portée de bloc. const ne peut pas être réassignée. let et const sont dans la 'temporal dead zone' avant leur déclaration."
    },
    {
      id: 9,
      topic: "Javascript",
      q: "Comment fonctionne async/await ?",
      a: "Les fonctions async retournent toujours une promesse. await suspend l'exécution jusqu'à la résolution de la promesse, ce qui permet d'écrire du code asynchrone qui se lit comme du code synchrone. On utilise try/catch pour les erreurs."
    },
    {
      id: 10,
      topic: "Typescript",
      q: "Pourquoi utiliser TypeScript plutôt que JavaScript ?",
      a: "Le typage statique détecte les erreurs à la compilation, améliore l'autocomplétion et le refactoring, et documente la forme des données. Il se compile en JavaScript classique."
    },
    {
      id: 11,
      topic: "Typescript",
      q: "Interface vs type — quand utiliser lequel ?",
      a: "Les deux décrivent des formes d'objets. Les interfaces peuvent être étendues et fusionnées (declaration merging) ; les types supportent les unions, les intersections et les primitifs. On utilise type pour les unions."
    },
    {
      id: 12,
      topic: "Typescript",
      q: "Que sont les génériques (generics) ?",
      a: "Les génériques permettent d'écrire du code réutilisable qui fonctionne avec plusieurs types tout en gardant la sécurité du typage, ex. function identity<T>(arg: T): T."
    },
    {
      id: 13,
      topic: "Typescript",
      q: "Expliquez any vs unknown.",
      a: "any désactive complètement la vérification de type. unknown est son équivalent sûr : on doit l'affiner (vérifications typeof, type guards) avant de l'utiliser."
    },
    {
      id: 14,
      topic: "Typescript",
      q: "Comment type-t-on les props d'un composant React ?",
      a: "Avec une interface ou un type, ex. interface Props { title: string; onClick?: () => void }, puis function Button({ title }: Props)."
    },
    {
      id: 15,
      topic: "VueJs",
      q: "Comment fonctionne la réactivité de Vue ?",
      a: "Vue suit les dépendances pendant le rendu et relance les mises à jour quand les données réactives changent. Vue 3 l'implémente avec des Proxies ; Vue 2 utilisait Object.defineProperty."
    },
    {
      id: 16,
      topic: "VueJs",
      q: "Options API vs Composition API ?",
      a: "L'Options API organise le code par option (data, methods, computed). La Composition API (setup / <script setup>) organise par fonctionnalité, est plus réutilisable via les composables et a un meilleur support TypeScript."
    },
    {
      id: 17,
      topic: "VueJs",
      q: "Qu'est-ce que v-model ?",
      a: "Une directive pour la liaison bidirectionnelle sur les champs de formulaire : elle lie la valeur et écoute les événements input, gardant les données et le champ synchronisés."
    },
    {
      id: 18,
      topic: "VueJs",
      q: "Computed vs methods vs watch ?",
      a: "Les propriétés computed sont mises en cache et ne se réévaluent que si leurs dépendances changent ; les méthodes s'exécutent à chaque rendu ; les watchers réagissent à des changements précis avec des effets de bord."
    },
    {
      id: 19,
      topic: "VueJs",
      q: "Comment les composants parent et enfant communiquent-ils ?",
      a: "Du parent vers l'enfant via les props ; de l'enfant vers le parent via les événements émis ($emit). Pour un état partagé entre beaucoup de composants, on utilise Pinia (ou Vuex)."
    },
    {
      id: 20,
      topic: "Html",
      q: "Qu'est-ce que le HTML sémantique ? Donnez des exemples.",
      a: "Utiliser des balises qui décrivent le sens : header, nav, main, article, section, footer. Cela améliore l'accessibilité, le SEO et la lisibilité du code."
    },
    {
      id: 21,
      topic: "Html",
      q: "Quelle est la différence entre les éléments block et inline ?",
      a: "Les éléments block (div, p) prennent toute la largeur et commencent sur une nouvelle ligne ; les éléments inline (span, a) ne prennent que la largeur nécessaire et restent dans le flux."
    },
    {
      id: 22,
      topic: "Html",
      q: "Quel est le but de la balise meta viewport ?",
      a: "Elle indique aux navigateurs mobiles comment mettre la page à l'échelle : <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">. Essentiel pour le responsive design."
    },
    {
      id: 23,
      topic: "Html",
      q: "Comment rend-on un formulaire accessible ?",
      a: "On utilise des labels liés aux champs via for/id, fieldset/legend pour les groupes, les bons types d'input, et des attributs aria si nécessaire."
    },
    {
      id: 24,
      topic: "Html",
      q: "Que sont les attributs data-* ?",
      a: "Des attributs personnalisés pour stocker des données supplémentaires sur les éléments, lisibles via element.dataset en JavaScript, sans utiliser d'attributs non standards."
    },
    {
      id: 25,
      topic: "Css",
      q: "Expliquez le modèle de boîte CSS.",
      a: "Chaque élément est une boîte : contenu, padding, bordure, marge. box-sizing: border-box fait inclure le padding et la bordure dans la largeur, ce qu'on veut généralement."
    },
    {
      id: 26,
      topic: "Css",
      q: "Flexbox vs Grid ?",
      a: "Flexbox est unidimensionnel (ligne ou colonne), idéal pour aligner des éléments. Grid est bidimensionnel (lignes et colonnes), idéal pour les mises en page. On peut les combiner."
    },
    {
      id: 27,
      topic: "Css",
      q: "Qu'est-ce que la spécificité ? Comment les conflits sont-ils résolus ?",
      a: "La spécificité décide quelle règle gagne : styles inline > IDs > classes/attributs > éléments. À spécificité égale, la règle la plus tardive gagne. On évite !important."
    },
    {
      id: 28,
      topic: "Css",
      q: "Comment centre-t-on une div ?",
      a: "Méthode moderne : display flex ou grid avec place-items/justify-content/align-items center. Classique : margin: 0 auto pour centrer horizontalement un bloc de largeur fixe."
    },
    {
      id: 29,
      topic: "Css",
      q: "Que sont les variables CSS et pourquoi les utiliser ?",
      a: "Des propriétés personnalisées (--main-color) définies une fois et réutilisées via var(). Elles facilitent le thémage et la maintenance, et peuvent être modifiées à l'exécution avec JavaScript."
    },
    {
      id: 30,
      topic: "Tailwind",
      q: "Qu'est-ce que le CSS utility-first ?",
      a: "Au lieu d'écrire des classes personnalisées, on compose de petits utilitaires à usage unique (p-4, flex, text-center) directement dans le HTML. Plus rapide à écrire, design system cohérent."
    },
    {
      id: 31,
      topic: "Tailwind",
      q: "Comment fonctionne le responsive design dans Tailwind ?",
      a: "Préfixes de breakpoints mobile-first : sm:, md:, lg:, xl:. Les classes sans préfixe s'appliquent à toutes les tailles ; celles avec préfixe s'appliquent à partir de ce breakpoint."
    },
    {
      id: 32,
      topic: "Tailwind",
      q: "Comment personnalise-t-on Tailwind ?",
      a: "Via tailwind.config.js : on étend les couleurs du thème, les polices, les espacements, les breakpoints, et on ajoute des plugins. On utilise des variables CSS pour le thémage dynamique."
    },
    {
      id: 33,
      topic: "Tailwind",
      q: "Comment Tailwind reste-t-il léger en production ?",
      a: "Le moteur JIT analyse vos fichiers sources et ne génère que les utilitaires réellement utilisés, supprimant tout le reste."
    },
    {
      id: 34,
      topic: "Tailwind",
      q: "Quand utiliserait-on @apply ?",
      a: "Pour extraire des motifs d'utilitaires répétés dans une classe CSS réutilisable, ex. .btn { @apply px-4 py-2 rounded; }. À utiliser avec modération pour garder les avantages de l'utility-first."
    },
    {
      id: 35,
      topic: "NodeJs",
      q: "Qu'est-ce que Node.js et pourquoi l'utilise-t-on pour le back-end ?",
      a: "Un runtime JavaScript basé sur le moteur V8 de Chrome qui exécute JS hors du navigateur. Son modèle d'I/O non bloquant gère efficacement beaucoup de connexions simultanées, et partager JavaScript sur toute la stack réduit les changements de contexte."
    },
    {
      id: 36,
      topic: "NodeJs",
      q: "Expliquez l'I/O non bloquant et l'event loop.",
      a: "Node exécute JavaScript sur un seul thread mais délègue l'I/O au système. L'event loop traite les callbacks quand les opérations se terminent, donc le serveur reste réactif sous charge."
    },
    {
      id: 37,
      topic: "NodeJs",
      q: "Que sont npm et package.json ?",
      a: "npm est le gestionnaire de paquets de Node ; package.json déclare les dépendances, les scripts et les métadonnées. package-lock.json fige les versions exactes pour des installations reproductibles."
    },
    {
      id: 38,
      topic: "NodeJs",
      q: "Comment gère-t-on les erreurs asynchrones dans Node ?",
      a: "Avec try/catch autour de await, .catch() sur les promesses, et les callbacks error-first. Dans Express, on transmet les erreurs au middleware de gestion d'erreurs avec next(err)."
    },
    {
      id: 39,
      topic: "NodeJs",
      q: "Que sont les variables d'environnement et pourquoi les utiliser ?",
      a: "De la configuration hors du code (process.env) : clés API, URLs de bases de données. Cela garde les secrets hors du contrôle de version et permet au même code de tourner en dev, staging et prod."
    },
    {
      id: 40,
      topic: "RestApi",
      q: "Qu'est-ce qui rend une API RESTful ?",
      a: "Des URLs basées sur les ressources, les méthodes HTTP (GET/POST/PUT/PATCH/DELETE), des requêtes sans état, des codes de statut standards et des représentations JSON."
    },
    {
      id: 41,
      topic: "RestApi",
      q: "Comment conçoit-on de bons endpoints d'API ?",
      a: "On utilise des noms et non des verbes (/users et non /getUsers), des ressources au pluriel, les bonnes méthodes et codes de statut, le versionnage (/api/v1), la pagination et le filtrage pour les collections."
    },
    {
      id: 42,
      topic: "RestApi",
      q: "Comment sécurise-t-on une API REST ?",
      a: "HTTPS partout, authentification (JWT/OAuth), vérifications d'autorisation par ressource, validation des entrées, limitation de débit, et jamais d'exposition des stack traces."
    },
    {
      id: 43,
      topic: "RestApi",
      q: "Qu'est-ce qu'un middleware dans Express ? Donnez des exemples.",
      a: "Des fonctions dans le pipeline de requête (req, res, next) : journalisation (morgan), analyse JSON (express.json), vérifications d'authentification, CORS, gestionnaires d'erreurs."
    },
    {
      id: 44,
      topic: "RestApi",
      q: "Comment valide-t-on les données de requête ?",
      a: "Avec une bibliothèque de validation (Joi, Zod, express-validator) : on vérifie les types, les champs requis et les formats avant de toucher à la base de données ; on retourne 400 avec des messages clairs en cas d'échec."
    },
    {
      id: 45,
      topic: "Laravel",
      q: "Expliquez le MVC dans Laravel.",
      a: "Modèle (Eloquent : données + logique métier), Vue (templates Blade), Contrôleur (gère les requêtes, coordonne). Les routes associent les URLs aux contrôleurs."
    },
    {
      id: 46,
      topic: "Laravel",
      q: "Qu'est-ce qu'Eloquent ?",
      a: "L'ORM de Laravel : chaque modèle correspond à une table, on interroge avec une syntaxe expressive (User::where(...)->get()), avec des relations comme hasMany et belongsTo."
    },
    {
      id: 47,
      topic: "Laravel",
      q: "Que sont les migrations et les seeders ?",
      a: "Les migrations versionnent le schéma de la base de données (up/down) ; les seeders remplissent les tables avec des données initiales ou fictives pour le développement et les tests."
    },
    {
      id: 48,
      topic: "Laravel",
      q: "Comment fonctionne l'authentification dans Laravel ?",
      a: "Via les guards et providers ; Laravel Breeze/Jetstream pour les apps classiques ou Sanctum pour les tokens SPA/mobile. Le middleware 'auth' protège les routes."
    },
    {
      id: 49,
      topic: "Laravel",
      q: "Qu'est-ce qu'un middleware dans Laravel ? Donnez des exemples.",
      a: "Du code qui filtre les requêtes HTTP : auth, throttle (limitation de débit), CORS, verified. Assigné aux routes ou aux contrôleurs."
    },
    {
      id: 50,
      topic: "Php",
      q: "Comment PHP gère-t-il une requête web ?",
      a: "Le serveur web transmet la requête à l'interpréteur PHP, qui exécute le script de haut en bas en mélangeant le HTML généré, puis retourne la réponse. Les superglobales ($_GET, $_POST) contiennent les données de la requête."
    },
    {
      id: 51,
      topic: "Php",
      q: "Comment prévient-on l'injection SQL en PHP ?",
      a: "On utilise des requêtes préparées avec des paramètres liés (PDO) ; on ne concatène jamais les entrées utilisateur dans les requêtes. On valide aussi les entrées et on échappe les sorties."
    },
    {
      id: 52,
      topic: "Php",
      q: "Sessions vs cookies ?",
      a: "Les cookies vivent dans le navigateur (petits, visibles) ; les sessions vivent sur le serveur, identifiées par un cookie. On stocke les données sensibles en session."
    },
    {
      id: 53,
      topic: "Php",
      q: "Que sont Composer et Packagist ?",
      a: "Composer est le gestionnaire de dépendances de PHP (comme npm) ; Packagist est le registre de paquets. composer.json déclare les dépendances, vendor/ les contient."
    },
    {
      id: 54,
      topic: "Php",
      q: "Comment gère-t-on les uploads de fichiers de façon sécurisée ?",
      a: "On vérifie le type MIME et l'extension, on limite la taille, on renomme les fichiers, on les stocke hors de la racine web, et on ne fait jamais confiance au nom de fichier d'origine."
    },
    {
      id: 55,
      topic: "Python",
      q: "Quelles sont les principales structures de données de Python ?",
      a: "list (ordonnée, modifiable), tuple (ordonnée, immuable), dict (clé-valeur), set (valeurs uniques). On choisit selon la mutabilité et les besoins de recherche."
    },
    {
      id: 56,
      topic: "Python",
      q: "List vs tuple vs dict — quand utiliser chacun ?",
      a: "List pour des collections ordonnées qu'on modifie ; tuple pour des enregistrements fixes ; dict pour des recherches par étiquettes."
    },
    {
      id: 57,
      topic: "Python",
      q: "Qu'est-ce qu'un virtualenv et pourquoi l'utiliser ?",
      a: "Un environnement Python isolé par projet pour éviter les conflits de dépendances. Créé avec venv et activé par shell."
    },
    {
      id: 58,
      topic: "Python",
      q: "Comment gère-t-on les erreurs en Python ?",
      a: "Blocs try/except/else/finally ; lever des exceptions personnalisées ; capturer des types d'exceptions précis, pas de except nu."
    },
    {
      id: 59,
      topic: "Python",
      q: "Qu'est-ce que pip ?",
      a: "L'installateur de paquets de Python (comme npm). pip install -r requirements.txt reproduit un environnement."
    },
    {
      id: 60,
      topic: "Sql",
      q: "Écrivez une requête pour obtenir tous les utilisateurs de plus de 18 ans, triés par nom.",
      a: "SELECT * FROM users WHERE age > 18 ORDER BY name ASC;"
    },
    {
      id: 61,
      topic: "Sql",
      q: "Expliquez les types de JOIN.",
      a: "INNER JOIN : lignes correspondantes uniquement. LEFT JOIN : toutes les lignes de gauche plus les correspondances. RIGHT JOIN : toutes les lignes de droite. FULL OUTER JOIN : toutes les lignes des deux côtés."
    },
    {
      id: 62,
      topic: "Sql",
      q: "Qu'est-ce qu'un index et quand aide-t-il ou nuit-il ?",
      a: "Une structure de données qui accélère les recherches sur une colonne. Il aide les lectures et les clauses WHERE/JOIN/ORDER BY ; il pénalise les écritures et prend de la place. Ne pas sur-indexer."
    },
    {
      id: 63,
      topic: "Sql",
      q: "Comment prévient-on l'injection SQL ?",
      a: "Requêtes paramétrées / préparées — ne jamais construire du SQL en concaténant des entrées utilisateur."
    },
    {
      id: 64,
      topic: "Sql",
      q: "Qu'est-ce que la normalisation ?",
      a: "Organiser les données pour réduire la redondance : 1NF valeurs atomiques, 2NF pas de dépendances partielles, 3NF pas de dépendances transitives. Dénormaliser délibérément pour les performances en lecture."
    },
    {
      id: 65,
      topic: "MongoDb",
      q: "SQL vs MongoDB — quand choisir lequel ?",
      a: "MongoDB pour des schémas flexibles et évolutifs et des données hiérarchiques ; SQL pour des schémas rigides, des jointures complexes et des transactions fortes."
    },
    {
      id: 66,
      topic: "MongoDb",
      q: "Qu'est-ce qu'un document ? Comment modélise-t-on les données dans MongoDB ?",
      a: "Un objet BSON (proche du JSON). On modélise en embarquant les données liées qu'on lit ensemble, en référençant quand les données sont volumineuses ou partagées."
    },
    {
      id: 67,
      topic: "MongoDb",
      q: "Comment interroge-t-on MongoDB ? Donnez des exemples.",
      a: "db.users.find({ age: { $gt: 18 } }), .insertOne(), .updateOne(), .deleteOne(). Pipelines d'agrégation pour l'analytique."
    },
    {
      id: 68,
      topic: "MongoDb",
      q: "Qu'est-ce que l'indexation dans MongoDB ?",
      a: "Les index (par défaut sur _id) accélèrent les requêtes ; on les crée avec createIndex(). Ils accélèrent les lectures mais ralentissent les écritures."
    },
    {
      id: 69,
      topic: "MongoDb",
      q: "Comment gère-t-on les relations dans MongoDB ?",
      a: "On embarque pour les données one-to-few lues ensemble ; on référence via ObjectId plus $lookup pour les données volumineuses ou partagées."
    },
    {
      id: 70,
      topic: "Git",
      q: "Expliquez votre workflow Git.",
      a: "Créer une branche feature depuis main, commiter de petits changements logiques avec des messages clairs, pousser, ouvrir une pull request, relire, fusionner. Faire un pull avant de commencer."
    },
    {
      id: 71,
      topic: "Git",
      q: "Comment résolvez-vous un conflit de fusion ?",
      a: "Git marque les sections en conflit ; j'ouvre les fichiers, je choisis ou combine le bon code, je supprime les marqueurs, git add, puis commit pour terminer la fusion."
    },
    {
      id: 72,
      topic: "Git",
      q: "git merge vs git rebase ?",
      a: "Merge préserve l'historique avec un commit de fusion ; rebase réécrit les commits sur la cible pour un historique linéaire. Ne jamais rebaser des branches partagées."
    },
    {
      id: 73,
      topic: "Git",
      q: "Comment annule-t-on des erreurs dans Git ?",
      a: "Non stagé : git restore. Stagé : git reset. Committé en local : git reset --soft HEAD~1. Déjà poussé : git revert (sûr, ajoute un nouveau commit)."
    },
    {
      id: 74,
      topic: "Git",
      q: "Qu'est-ce qui fait un bon message de commit et une bonne pull request ?",
      a: "Résumé court à l'impératif ('Add login validation'), corps expliquant le pourquoi, diffs petits et ciblés, description de PR avec contexte et notes de test."
    },
    {
      id: 75,
      topic: "Docker",
      q: "Conteneurs vs machines virtuelles ?",
      a: "Les conteneurs partagent le noyau de l'OS hôte et sont légers (mégaoctets, démarrage en millisecondes) ; les VMs incluent un OS invité complet (gigaoctets, plus lentes). Les conteneurs sont des processus isolés, pas des machines complètes."
    },
    {
      id: 76,
      topic: "Docker",
      q: "Expliquez Dockerfile, image et conteneur.",
      a: "Dockerfile : les instructions de construction. Image : l'instantané immuable construit à partir de celles-ci. Conteneur : une instance en cours d'exécution d'une image."
    },
    {
      id: 77,
      topic: "Docker",
      q: "Comment exécute-t-on une app multi-conteneurs ?",
      a: "Avec Docker Compose : un docker-compose.yml déclare les services, réseaux et volumes ; 'docker compose up' démarre tout ensemble."
    },
    {
      id: 78,
      topic: "Docker",
      q: "Comment fonctionnent les volumes et pourquoi les utiliser ?",
      a: "Les volumes persistent les données hors du cycle de vie du conteneur et les partagent entre conteneurs. Sans eux, les données du conteneur sont perdues à sa suppression."
    },
    {
      id: 79,
      topic: "Docker",
      q: "Comment Dockeriseriez-vous une app Node.js ?",
      a: "Dockerfile : FROM node:alpine, WORKDIR, COPY package*.json, RUN npm ci --production, COPY ., EXPOSE 3000, CMD ['node','server.js']. Utiliser un fichier .dockerignore."
    }
    ]
  }
];
