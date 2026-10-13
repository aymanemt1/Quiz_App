// True/False blitz statements: 4 per topic x 16 topics, EN + FR.
// statement: { id, topic, level, text, answer: true|false }

const S = (id, topic, level, en, fr, answer) => ({ id, topic, level, en, fr, answer });

const STATEMENTS = [
  // React
  S(0, "React", 1, "In React, state updates are always applied immediately and synchronously.", "En React, les mises à jour d'état sont toujours appliquées immédiatement et de façon synchrone.", false),
  S(1, "React", 1, "Keys help React identify which items have changed in a list.", "Les clés (keys) aident React à identifier les éléments modifiés d'une liste.", true),
  S(2, "React", 2, "useEffect with an empty dependency array runs after every render.", "useEffect avec un tableau de dépendances vide s'exécute après chaque rendu.", false),
  S(3, "React", 1, "Props flow from parent components down to child components.", "Les props circulent des composants parents vers les composants enfants.", true),
  // Javascript
  S(4, "Javascript", 2, "typeof null returns 'object' in JavaScript.", "typeof null retourne 'object' en JavaScript.", true),
  S(5, "Javascript", 2, "const makes the contents of an object immutable.", "const rend le contenu d'un objet immuable.", false),
  S(6, "Javascript", 2, "Arrow functions have their own this binding.", "Les fonctions fléchées ont leur propre liaison de this.", false),
  S(7, "Javascript", 1, "=== compares both value and type without coercion.", "=== compare la valeur et le type sans coercition.", true),
  // Typescript
  S(8, "Typescript", 1, "TypeScript code runs directly in the browser without compilation.", "Le code TypeScript s'exécute directement dans le navigateur sans compilation.", false),
  S(9, "Typescript", 2, "unknown is a type-safe alternative to any.", "unknown est une alternative sûre à any.", true),
  S(10, "Typescript", 3, "Interfaces can be merged by declaring them twice with the same name.", "Les interfaces peuvent être fusionnées en les déclarant deux fois avec le même nom.", true),
  S(11, "Typescript", 3, "With strictNullChecks, a string variable can hold null.", "Avec strictNullChecks, une variable string peut contenir null.", false),
  // VueJs
  S(12, "VueJs", 2, "Vue 3's Composition API is written inside setup() or <script setup>.", "La Composition API de Vue 3 s'écrit dans setup() ou <script setup>.", true),
  S(13, "VueJs", 2, "v-if and v-for should be used together on the same element.", "v-if et v-for doivent être utilisés ensemble sur le même élément.", false),
  S(14, "VueJs", 1, "In Vue, ref() values are accessed via .value in JavaScript.", "En Vue, on accède aux valeurs de ref() via .value en JavaScript.", true),
  S(15, "VueJs", 3, "Vuex is the only official state management solution for Vue 3.", "Vuex est la seule solution officielle de gestion d'état pour Vue 3.", false),
  // Html
  S(16, "Html", 1, "The div element is an inline element by default.", "L'élément div est un élément inline par défaut.", false),
  S(17, "Html", 2, "An HTML page should contain only one main element.", "Une page HTML ne doit contenir qu'un seul élément main.", true),
  S(18, "Html", 1, "alt attributes on images improve accessibility.", "Les attributs alt des images améliorent l'accessibilité.", true),
  S(19, "Html", 1, "br requires a closing tag.", "br nécessite une balise fermante.", false),
  // Css
  S(20, "Css", 2, "In the CSS box model, margin is inside the border.", "Dans le modèle de boîte CSS, la marge (margin) est à l'intérieur de la bordure.", false),
  S(21, "Css", 1, "display: none removes an element from the layout flow.", "display: none retire un élément du flux de mise en page.", true),
  S(22, "Css", 2, "IDs have higher specificity than classes in CSS.", "Les IDs ont une spécificité plus élevée que les classes en CSS.", true),
  S(23, "Css", 3, "z-index works on statically positioned elements.", "z-index fonctionne sur les éléments en position statique.", false),
  // Tailwind
  S(24, "Tailwind", 1, "Tailwind CSS is a utility-first CSS framework.", "Tailwind CSS est un framework CSS utilitaire (utility-first).", true),
  S(25, "Tailwind", 2, "The md: prefix in Tailwind applies styles on mobile screens.", "Le préfixe md: de Tailwind applique les styles sur mobile.", false),
  S(26, "Tailwind", 1, "Tailwind's flex class sets display: flex.", "La classe flex de Tailwind applique display: flex.", true),
  S(27, "Tailwind", 1, "You must write custom CSS files to use Tailwind.", "Il faut écrire des fichiers CSS personnalisés pour utiliser Tailwind.", false),
  // NodeJs
  S(28, "NodeJs", 1, "Node.js runs JavaScript outside the browser using the V8 engine.", "Node.js exécute JavaScript hors navigateur grâce au moteur V8.", true),
  S(29, "NodeJs", 2, "Node.js is single-threaded and cannot handle concurrent requests.", "Node.js est mono-thread et ne peut pas gérer de requêtes concurrentes.", false),
  S(30, "NodeJs", 1, "require() is the CommonJS way to import modules.", "require() est la façon CommonJS d'importer des modules.", true),
  S(31, "NodeJs", 3, "The event loop blocks while waiting for file I/O.", "La boucle d'événements (event loop) se bloque en attendant les I/O fichiers.", false),
  // RestApi
  S(32, "RestApi", 1, "A GET request should not change server state.", "Une requête GET ne doit pas modifier l'état du serveur.", true),
  S(33, "RestApi", 2, "HTTP status 201 means the resource was created.", "Le statut HTTP 201 signifie que la ressource a été créée.", true),
  S(34, "RestApi", 3, "PUT and PATCH have exactly the same semantics.", "PUT et PATCH ont exactement la même sémantique.", false),
  S(35, "RestApi", 1, "REST APIs must always return XML.", "Les API REST doivent toujours retourner du XML.", false),
  // Laravel
  S(36, "Laravel", 1, "Laravel's Eloquent is an ORM for database interaction.", "Eloquent de Laravel est un ORM pour interagir avec la base de données.", true),
  S(37, "Laravel", 2, "Migrations modify the database schema in versioned steps.", "Les migrations modifient le schéma de base de données par étapes versionnées.", true),
  S(38, "Laravel", 1, "Blade is Laravel's JavaScript framework.", "Blade est le framework JavaScript de Laravel.", false),
  S(39, "Laravel", 2, "Laravel routes are defined in routes/web.php and routes/api.php.", "Les routes Laravel sont définies dans routes/web.php et routes/api.php.", true),
  // Php
  S(40, "Php", 1, "PHP variables start with a $ sign.", "Les variables PHP commencent par le signe $.", true),
  S(41, "Php", 3, "echo and print behave identically in every situation.", "echo et print se comportent exactement pareil dans tous les cas.", false),
  S(42, "Php", 2, "PHP 8 introduced the match expression.", "PHP 8 a introduit l'expression match.", true),
  S(43, "Php", 2, "== in PHP never performs type juggling.", "== en PHP ne fait jamais de conversion de type implicite.", false),
  // Python
  S(44, "Python", 1, "Python lists are mutable.", "Les listes Python sont mutables.", true),
  S(45, "Python", 1, "Tuples in Python can be modified after creation.", "Les tuples Python peuvent être modifiés après leur création.", false),
  S(46, "Python", 1, "len() returns the number of items in a collection.", "len() retourne le nombre d'éléments d'une collection.", true),
  S(47, "Python", 1, "Python uses braces {} to define code blocks.", "Python utilise des accolades {} pour définir les blocs de code.", false),
  // Sql
  S(48, "Sql", 3, "WHERE filters rows before grouping; HAVING filters after.", "WHERE filtre les lignes avant le regroupement ; HAVING filtre après.", true),
  S(49, "Sql", 3, "COUNT(*) ignores NULL values.", "COUNT(*) ignore les valeurs NULL.", false),
  S(50, "Sql", 1, "A primary key column can contain duplicate values.", "Une colonne clé primaire peut contenir des doublons.", false),
  S(51, "Sql", 1, "JOIN combines rows from two or more tables.", "JOIN combine les lignes de deux tables ou plus.", true),
  // MongoDb
  S(52, "MongoDb", 1, "MongoDB stores data in JSON-like documents.", "MongoDB stocke les données dans des documents de type JSON.", true),
  S(53, "MongoDb", 2, "Every MongoDB document must have exactly the same fields.", "Chaque document MongoDB doit avoir exactement les mêmes champs.", false),
  S(54, "MongoDb", 1, "db.users.find() returns all documents in the users collection.", "db.users.find() retourne tous les documents de la collection users.", true),
  S(55, "MongoDb", 1, "MongoDB is a relational database.", "MongoDB est une base de données relationnelle.", false),
  // Git
  S(56, "Git", 1, "git pull fetches and merges remote changes.", "git pull récupère et fusionne les changements distants.", true),
  S(57, "Git", 2, "A merge conflict can only happen on binary files.", "Un conflit de fusion ne peut arriver que sur des fichiers binaires.", false),
  S(58, "Git", 2, "git stash temporarily saves uncommitted changes.", "git stash sauvegarde temporairement les changements non commités.", true),
  S(59, "Git", 1, "Commits in Git are identified by sequential numbers.", "Les commits Git sont identifiés par des numéros séquentiels.", false),
  // Docker
  S(60, "Docker", 1, "A Docker image is a read-only template used to create containers.", "Une image Docker est un modèle en lecture seule pour créer des conteneurs.", true),
  S(61, "Docker", 2, "Containers share the host OS kernel.", "Les conteneurs partagent le noyau du système hôte.", true),
  S(62, "Docker", 2, "docker-compose.yml defines multi-container applications.", "docker-compose.yml définit des applications multi-conteneurs.", true),
  S(63, "Docker", 1, "Deleting a container also deletes its image.", "Supprimer un conteneur supprime aussi son image.", false),
];

export const trueFalseStatements = [
  {
    lang: "EN",
    statements: STATEMENTS.map((s) => ({
      id: s.id, topic: s.topic, level: s.level, text: s.en, answer: s.answer,
    })),
  },
  {
    lang: "FR",
    statements: STATEMENTS.map((s) => ({
      id: s.id, topic: s.topic, level: s.level, text: s.fr, answer: s.answer,
    })),
  },
];

export const BLITZ_DURATION = 60;

// Shuffled copy of the statements for a blitz run
export const getBlitzStatements = (langTrans) => {
  const block = trueFalseStatements.find((b) => b.lang === langTrans);
  if (!block) return [];
  const arr = block.statements.map((s) => ({ ...s }));
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
