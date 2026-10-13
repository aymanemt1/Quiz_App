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
      id: 80,
      topic: "React",
      q: "What is 'lifting state up', and when does this pattern break down?",
      a: "Lifting state up means moving shared state to the closest common parent and passing it down as props. It breaks down with deep nesting (prop drilling), at which point context or a state library is cleaner."
    },
    {
      id: 81,
      topic: "React",
      q: "Explain React's reconciliation and why keys matter in lists.",
      a: "Reconciliation is how React diffs the new virtual DOM against the old one to decide the minimal real DOM updates. Keys let React match list items across renders; unstable keys (like array indexes) cause stale state and UI bugs when items reorder."
    },
    {
      id: 82,
      topic: "React",
      q: "What causes unnecessary re-renders, and how would you fix them?",
      a: "Re-rendering a parent re-renders all its children by default, even if their props didn't change. Fix it by splitting components, memoizing with React.memo, and stabilizing callbacks and values with useCallback and useMemo."
    },
    {
      id: 83,
      topic: "React",
      q: "useMemo vs useCallback — when is each worth it, and when is it overkill?",
      a: "useMemo memoizes a computed value, useCallback memoizes a function reference — both mainly help when passed to memoized children. They're overkill for cheap computations; profile first, because unnecessary memoization adds complexity for no gain."
    },
    {
      id: 84,
      topic: "React",
      q: "How would you update deeply nested state without mutating it?",
      a: "Use the functional updater form and spread each level to create new objects, or use a library like Immer for complex shapes. Never mutate state directly, because React relies on reference changes to detect updates."
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
      id: 85,
      topic: "Javascript",
      q: "Explain hoisting. What gets hoisted, and in what order?",
      a: "Function declarations are fully hoisted, var declarations are hoisted but initialized to undefined, while let and const stay in the temporal dead zone until their declaration. When a function and a var share a name, the function declaration wins."
    },
    {
      id: 86,
      topic: "Javascript",
      q: "How is the value of `this` determined in JavaScript?",
      a: "It's determined by how the function is called: a method call binds `this` to the object, a plain call gives undefined (strict mode) or the global object, arrow functions inherit the lexical `this`, and bind/call/apply set it explicitly."
    },
    {
      id: 87,
      topic: "Javascript",
      q: "What problem do promises solve compared to callbacks?",
      a: "They flatten callback hell into chainable .then() calls and centralize error handling — one .catch() handles failures anywhere in the chain. A promise is an object representing a future value, making async flow composable."
    },
    {
      id: 88,
      topic: "Javascript",
      q: "Shallow copy vs deep copy — how would you clone an object, and what can break?",
      a: "Spread and Object.assign only copy the top level, so nested objects stay shared. structuredClone() deep-copies but drops functions, prototypes and some special objects like DOM nodes."
    },
    {
      id: 89,
      topic: "Javascript",
      q: "A fetch call inside a loop silently fails — how would you debug it?",
      a: "Check the network tab for the actual request and status, then verify promise handling: forEach doesn't await async callbacks, so unhandled rejections get swallowed. Rewrite with for...of plus try/catch, and always check response.ok before parsing."
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
      id: 90,
      topic: "Typescript",
      q: "What are union and intersection types? Give an example of each.",
      a: "A union (string | number) means a value can be one of several types — great for state machines. An intersection (A & B) combines multiple types into one that has all their members."
    },
    {
      id: 91,
      topic: "Typescript",
      q: "What does `as const` do, and when is it useful?",
      a: "It narrows a value to its literal type and makes it deeply readonly. It's useful for config objects and discriminated unions where you want exact string literals instead of widened string types."
    },
    {
      id: 92,
      topic: "Typescript",
      q: "How would you type a function that only accepts valid keys of an object?",
      a: "With keyof and a generic constraint: function get<T, K extends keyof T>(obj: T, key: K). The compiler then rejects any key that isn't on the object, and the return type is inferred correctly."
    },
    {
      id: 93,
      topic: "Typescript",
      q: "A third-party API returns untyped JSON. How do you make it type-safe?",
      a: "Define interfaces for the expected shape and validate the payload at runtime with a library like Zod, then infer the TypeScript type from the schema. Never blindly cast with `as`, which just silences the compiler."
    },
    {
      id: 94,
      topic: "Typescript",
      q: "strict mode on vs off — when is strict worth the friction?",
      a: "Strict mode (especially strictNullChecks) catches null/undefined bugs at compile time instead of production. It's worth it for any new project; for legacy codebases, enable flags incrementally to avoid a huge rewrite."
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
      id: 95,
      topic: "VueJs",
      q: "How would you share state between unrelated components without a store?",
      a: "Use provide/inject to pass data down the tree without prop drilling. It works for simple shared state, but for complex or frequently changing state, Pinia is the better choice."
    },
    {
      id: 96,
      topic: "VueJs",
      q: "What are lifecycle hooks, and which would you use to fetch initial data?",
      a: "Hooks like onMounted, onUpdated and onUnmounted run at specific moments of a component's life. Fetch initial data in onMounted (the DOM exists by then), and clean up listeners or timers in onUnmounted."
    },
    {
      id: 97,
      topic: "VueJs",
      q: "Explain slots — default, named and scoped — and when you'd use a scoped slot.",
      a: "Slots let a parent inject content into a child: default and named slots define insertion points. A scoped slot passes data back from child to parent, so the parent can customize rendering — e.g. a list component letting the parent decide each item's template."
    },
    {
      id: 98,
      topic: "VueJs",
      q: "A list re-renders slowly on every keystroke — how would you debug it?",
      a: "First check for missing or unstable keys and expensive computed properties running per render. Use the Vue devtools profiler, debounce the input, and consider v-show instead of v-if for elements toggled frequently."
    },
    {
      id: 99,
      topic: "VueJs",
      q: "When would you choose Vue over React, or vice versa?",
      a: "Vue has a gentler learning curve and opinionated single-file components, which suits small teams wanting conventions. React has the larger ecosystem and job market. In practice, team familiarity and existing codebase matter more than the frameworks' technical differences."
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
      id: 100,
      topic: "Html",
      q: "What happens between typing a URL and the page rendering?",
      a: "The browser resolves DNS, fetches the HTML, parses it into the DOM, builds the CSSOM, combines them into the render tree, then does layout and paint. Blocking scripts and large resources slow each of these steps."
    },
    {
      id: 101,
      topic: "Html",
      q: "How do you optimize a page with many images?",
      a: "Use loading='lazy' for below-the-fold images, srcset/sizes for responsive variants, modern formats like WebP or AVIF, and always set width/height attributes to prevent layout shift."
    },
    {
      id: 102,
      topic: "Html",
      q: "What is the difference between <script>, <script async> and <script defer>?",
      a: "A plain script blocks HTML parsing until it downloads and executes. async downloads in parallel and executes as soon as ready, in no guaranteed order. defer also downloads in parallel but executes after parsing, in document order."
    },
    {
      id: 103,
      topic: "Html",
      q: "A form submits but the backend receives empty fields — how would you debug it?",
      a: "Check that each input has a name attribute (without it nothing is sent), verify method and enctype in the network tab, and make sure no JavaScript preventDefault or validation is swallowing the data before submit."
    },
    {
      id: 104,
      topic: "Html",
      q: "When would you use <button> vs <a> vs <div onclick>?",
      a: "Use <button> for actions that stay on the page and <a> for navigation to a new URL. <div onclick> is an accessibility failure — it has no keyboard support, focus behavior or semantics for screen readers."
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
      id: 105,
      topic: "Css",
      q: "Explain the difference between position: relative, absolute, fixed and sticky.",
      a: "relative offsets an element from its normal place without leaving the flow; absolute positions it against the nearest positioned ancestor; fixed pins it to the viewport; sticky behaves like relative until a scroll threshold, then like fixed."
    },
    {
      id: 106,
      topic: "Css",
      q: "How would you build a responsive layout without media queries?",
      a: "Use fluid techniques: flex-wrap, grid with auto-fit and minmax(), clamp() for fluid typography, and relative units like % and vw. This handles intermediate sizes gracefully where fixed breakpoints would miss."
    },
    {
      id: 107,
      topic: "Css",
      q: "What causes cumulative layout shift (CLS), and how do you prevent it?",
      a: "CLS comes from content moving after load — unsized images, late-loading fonts or ads. Prevent it by reserving space (width/height or aspect-ratio), using font-display: swap, and avoiding inserting content above existing content."
    },
    {
      id: 108,
      topic: "Css",
      q: "A style 'doesn't apply' — how would you debug a specificity conflict?",
      a: "Open the browser devtools computed/Styles panel to see which rule wins and which are struck through. Check for higher-specificity selectors, inline styles, or source order issues — and fix the selector rather than reaching for !important."
    },
    {
      id: 109,
      topic: "Css",
      q: "CSS-in-JS vs utility classes vs plain CSS — how do you choose?",
      a: "Plain CSS (or Sass) with a naming convention suits small projects and full control. Utility classes like Tailwind speed up custom designs with consistency. CSS-in-JS fits component libraries needing dynamic, scoped styles, at the cost of runtime overhead."
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
      id: 110,
      topic: "Tailwind",
      q: "How do you implement dark mode in Tailwind?",
      a: "Use the dark: variant (e.g. dark:bg-gray-900) and set the strategy in config: 'media' follows the OS preference, 'class' lets you toggle it manually with JavaScript."
    },
    {
      id: 111,
      topic: "Tailwind",
      q: "How would you build a brand design system with Tailwind?",
      a: "Extend the theme in tailwind.config.js with brand colors, fonts and spacing, and expose runtime-switchable values (like themes) through CSS variables. Keep the config as the single source of truth for the design tokens."
    },
    {
      id: 112,
      topic: "Tailwind",
      q: "Your class strings are getting long and unreadable — what do you do?",
      a: "Extract a real component (in React/Vue) instead of repeating the string — that's the primary fix. @apply is a fallback for non-component contexts, but overusing it recreates the CSS maintenance problems utility-first was meant to avoid."
    },
    {
      id: 113,
      topic: "Tailwind",
      q: "Tailwind vs a component library like Bootstrap — when is Tailwind the wrong choice?",
      a: "Tailwind is wrong when you need prebuilt components fast, like an admin prototype — Bootstrap or a UI kit ships that out of the box. Tailwind wins for custom, branded designs where you want full visual control without fighting a library's defaults."
    },
    {
      id: 114,
      topic: "Tailwind",
      q: "How does the `content` configuration affect the production build?",
      a: "The JIT engine scans only the files listed in `content`; utilities used in missing paths are silently dropped from production CSS. Keep the globs accurate — too narrow loses styles, too broad slows the build."
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
      id: 115,
      topic: "NodeJs",
      q: "What happens when a CPU-heavy task runs on the event loop, and what would you do about it?",
      a: "It blocks the single thread, so no other request is handled until it finishes — the server appears frozen. Offload it to worker threads, a child process, or a job queue, keeping the event loop free for I/O."
    },
    {
      id: 116,
      topic: "NodeJs",
      q: "Your API's memory usage grows steadily over days — how would you debug it?",
      a: "Take heap snapshots with --inspect and compare them to find what's accumulating — typical culprits are unbounded caches, forgotten event listeners, and timers. Also track RSS over time and review anything stored in module-level globals."
    },
    {
      id: 117,
      topic: "NodeJs",
      q: "What is the difference between process.nextTick, setImmediate and setTimeout(0)?",
      a: "process.nextTick callbacks run before the event loop continues to the next phase — they can starve I/O if overused. setImmediate runs in the check phase after I/O callbacks; setTimeout(0) runs in the timers phase, roughly after at least 1ms."
    },
    {
      id: 118,
      topic: "NodeJs",
      q: "How would you structure a larger Express app to stay maintainable?",
      a: "Separate concerns into layers: routes define endpoints, controllers handle request/response, services hold business logic, and middleware handles cross-cutting concerns like auth. Add centralized error middleware and load all config from environment variables."
    },
    {
      id: 119,
      topic: "NodeJs",
      q: "Monolith vs microservices in Node — how do you decide?",
      a: "Start with a modular monolith: it's simpler to develop, test and deploy, and Node handles it well. Split into microservices only when you hit real scaling bottlenecks or need independent team ownership — distribution adds operational cost from day one."
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
      id: 120,
      topic: "RestApi",
      q: "What is idempotency in a REST API, and which HTTP methods are idempotent?",
      a: "An idempotent operation produces the same result when repeated. GET, PUT and DELETE are idempotent; POST generally is not. Idempotency matters for safe retries — a client can resend a PUT without creating duplicates."
    },
    {
      id: 121,
      topic: "RestApi",
      q: "When would you choose REST over GraphQL or WebSockets?",
      a: "REST for standard CRUD with cacheable, predictable resources and simple tooling. GraphQL when clients need flexible, nested queries in one round trip. WebSockets when you need real-time bidirectional updates like chat or live dashboards."
    },
    {
      id: 122,
      topic: "RestApi",
      q: "How do you version an API, and how would you deprecate an old version without breaking clients?",
      a: "Version in the URL (/api/v1) or via headers. To deprecate: announce a sunset date, add Deprecation/Sunset headers, publish a changelog, keep both versions running during an overlap window, and monitor old-version traffic before removing it."
    },
    {
      id: 123,
      topic: "RestApi",
      q: "A client reports intermittent 500 errors on a POST endpoint. How would you debug it?",
      a: "Reproduce with the exact payload, then check server logs with a request ID for correlation. Common causes: unhandled validation edge cases, database errors or deadlocks, race conditions under concurrent requests, and exhausted resources. Add monitoring and structured logging to catch the next occurrence."
    },
    {
      id: 124,
      topic: "RestApi",
      q: "PUT vs PATCH — what is the practical difference, and when would you use each?",
      a: "PUT replaces the entire resource, so the client must send the full representation; PATCH applies a partial update with only the changed fields. Use PUT for full replacements, PATCH for small updates to large resources — PATCH reduces payload size and avoids overwriting fields the client never read."
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
      id: 125,
      topic: "Laravel",
      q: "What are service providers and the service container in Laravel?",
      a: "The service container manages dependency injection: it resolves and injects class dependencies automatically. Service providers bootstrap the app — in register() you bind interfaces to implementations, in boot() you extend framework behavior after all providers are registered."
    },
    {
      id: 126,
      topic: "Laravel",
      q: "What is the N+1 query problem in Eloquent, and how do you fix it?",
      a: "It happens when you load models (1 query) then lazy-load a relationship inside a loop (N extra queries). Fix it with eager loading: User::with('posts')->get(). Use a debug bar or query log to spot the extra queries during development."
    },
    {
      id: 127,
      topic: "Laravel",
      q: "How do you handle background jobs in Laravel?",
      a: "Dispatch job classes to a queue driver (database, Redis); worker processes (queue:work) execute them asynchronously. Failed jobs go to the failed_jobs table for inspection and retry, and Laravel Horizon provides a dashboard to monitor Redis-backed queues."
    },
    {
      id: 128,
      topic: "Laravel",
      q: "Form Requests vs inline validation in controllers — when and why use Form Requests?",
      a: "Form Requests move validation into a dedicated class with rules() and authorize() methods. Use them when validation is complex, reused across endpoints, or needs authorization logic — controllers stay thin and validation becomes testable in isolation."
    },
    {
      id: 129,
      topic: "Laravel",
      q: "How would you debug a slow Laravel page?",
      a: "Start with the query log or Laravel Debugbar to find N+1 queries and missing indexes. Then check for uncached repeated work (use cache()->remember), enable route/config caching, and use Telescope or a profiler to find the actual bottleneck instead of guessing."
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
      id: 130,
      topic: "Php",
      q: "What does declare(strict_types=1) do, and why does it matter?",
      a: "It makes scalar type hints strict in that file: passing an int where a string is expected throws a TypeError instead of silently coercing the value. It catches type bugs early instead of letting wrong values flow through your code."
    },
    {
      id: 131,
      topic: "Php",
      q: "Explain PHP's modern type system: scalar hints, nullable types and union types.",
      a: "You can type-hint parameters and returns with scalars (int, string), mark them nullable (?string) or combine them (int|string) with union types. Combined with strict_types, wrong values throw TypeError immediately, which turns many runtime bugs into instant, obvious failures."
    },
    {
      id: 132,
      topic: "Php",
      q: "How do you debug the classic \"headers already sent\" error?",
      a: "It means output was sent before header() or session_start() was called. Check for stray whitespace or a BOM before the opening <?php tag, or echo/print calls earlier in the flow. As a safety net, output buffering (ob_start()) holds output until you flush it."
    },
    {
      id: 133,
      topic: "Php",
      q: "Traits vs inheritance vs interfaces in PHP — when would you use each?",
      a: "Inheritance for a true is-a relationship, but PHP allows only single inheritance. Traits share reusable method implementations horizontally across unrelated classes. Interfaces define contracts (method signatures) without implementation — use them to type-hint capabilities."
    },
    {
      id: 134,
      topic: "Php",
      q: "How does OPcache improve PHP performance?",
      a: "Normally PHP recompiles every script to bytecode on each request. OPcache caches that compiled bytecode in shared memory, so subsequent requests skip parsing and compilation entirely — a major speedup with zero code changes."
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
      id: 140,
      topic: "Sql",
      q: "WHERE vs HAVING — what is the difference?",
      a: "WHERE filters individual rows before grouping and aggregation; HAVING filters groups after aggregation. You cannot use aggregate functions like COUNT() in WHERE, but you can in HAVING."
    },
    {
      id: 141,
      topic: "Sql",
      q: "What is a database transaction, and what does ACID mean?",
      a: "A transaction groups statements into an all-or-nothing unit via BEGIN/COMMIT/ROLLBACK. ACID guarantees: Atomicity (all or nothing), Consistency (valid state to valid state), Isolation (concurrent transactions don't interfere), Durability (committed data survives crashes)."
    },
    {
      id: 142,
      topic: "Sql",
      q: "How would you debug a slow SQL query?",
      a: "Run EXPLAIN to see the execution plan: look for full table scans, missing indexes, and unexpectedly large row counts. Common fixes: add the right index, avoid SELECT *, filter early with WHERE, and rewrite correlated subqueries as joins."
    },
    {
      id: 143,
      topic: "Sql",
      q: "Subquery vs JOIN — when would you choose one over the other?",
      a: "Use JOINs when combining related data from multiple tables — the optimizer usually handles them well. Use subqueries for existence checks (WHERE EXISTS), scalar lookups, or when the logic reads more clearly as a nested filter. Measure with EXPLAIN when performance matters."
    },
    {
      id: 144,
      topic: "Sql",
      q: "What are window functions? Give an example.",
      a: "Window functions compute values across a set of rows related to the current row without collapsing them into one row. Example: ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) ranks employees within each department while keeping every row."
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
      id: 145,
      topic: "MongoDb",
      q: "What is the aggregation pipeline, and when is it better than find()?",
      a: "The aggregation pipeline chains stages ($match, $group, $sort, $project) to transform data server-side. It's better than find() for analytics — counts, averages, groupings — because the heavy work happens in the database instead of in your application code."
    },
    {
      id: 146,
      topic: "MongoDb",
      q: "How do you keep data consistent across documents without joins?",
      a: "Design the schema around read patterns: embed data that is read together so a single document write is atomic. When multiple documents must change together, use multi-document transactions (available since MongoDB 4.0) for ACID guarantees."
    },
    {
      id: 147,
      topic: "MongoDb",
      q: "Replica sets vs sharding — what problem does each solve?",
      a: "Replica sets solve high availability: multiple copies of the data with automatic failover if the primary goes down. Sharding solves scale: it partitions data across servers so a dataset too large for one machine can keep growing."
    },
    {
      id: 148,
      topic: "MongoDb",
      q: "How would you debug a slow MongoDB query?",
      a: "Run explain('executionStats') and check whether the winning plan uses an index (IXSCAN) or scans the whole collection (COLLSCAN). A COLLSCAN usually means a missing or wrong index; also check the number of examined vs returned documents — a big gap signals an inefficient query shape."
    },
    {
      id: 149,
      topic: "MongoDb",
      q: "What are TTL indexes and capped collections, and when are they useful?",
      a: "TTL indexes auto-delete documents after a set time — ideal for sessions, tokens and temporary logs. Capped collections are fixed-size and keep insertion order, overwriting the oldest data — useful for high-throughput logs where you only care about recent entries."
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
      id: 150,
      topic: "Git",
      q: "What is git stash, and when would you use it?",
      a: "Stash temporarily shelves uncommitted changes so you can switch branches with a clean tree, then restores them with git stash pop. Use it when you need to jump to a hotfix or pull updates without committing half-finished work."
    },
    {
      id: 151,
      topic: "Git",
      q: "How do you find which commit introduced a bug?",
      a: "With git bisect: mark the current commit as bad and a known-good older commit as good, then Git binary-searches the range — you test each midpoint and mark it good or bad until it isolates the exact commit that introduced the bug."
    },
    {
      id: 152,
      topic: "Git",
      q: "What are Git tags, and when would you use them?",
      a: "Tags mark specific points in history, typically releases (v1.2.0). Annotated tags store a message, date and author and are meant for public releases; lightweight tags are just pointers. CI pipelines often trigger deployments off tags."
    },
    {
      id: 153,
      topic: "Git",
      q: "When would you cherry-pick instead of merging?",
      a: "Cherry-pick applies one specific commit onto another branch without merging everything. Use it to port a hotfix from main to a release branch, or to grab a single fix without pulling in unrelated changes from a full merge."
    },
    {
      id: 154,
      topic: "Git",
      q: "How do you keep secrets out of a repo, and what do you do if one leaks?",
      a: "Never commit secrets: keep them in environment variables or a secret manager, and list sensitive files in .gitignore. If one leaks, rotate it immediately — assume it's compromised — then purge it from history (git filter-repo) and revoke the old credential; deleting the file alone is not enough."
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
    },
    {
      id: 155,
      topic: "Docker",
      q: "What is a multi-stage build, and why would you use one?",
      a: "A Dockerfile with multiple FROM stages: the first builds the app with compilers and dev tools, the final stage copies only the built artifacts into a slim runtime image. The result is a much smaller, more secure production image with no build tools inside."
    },
    {
      id: 156,
      topic: "Docker",
      q: "How do containers talk to each other, and how does a container expose a port to the host?",
      a: "Containers on the same user-defined network reach each other by container or service name as hostname — no hardcoded IPs needed. To expose a port to the host, publish it with -p host:container (e.g. -p 8080:3000); without publishing, the port is only reachable inside the network."
    },
    {
      id: 157,
      topic: "Docker",
      q: "A container crashes immediately on startup. How do you debug it?",
      a: "Read the output with docker logs — the error is usually there. If logs are empty, override the entrypoint to start a shell instead (docker run --entrypoint sh) and inspect the filesystem, env vars and the failing command manually. Also check the exit code, which often hints at the cause."
    },
    {
      id: 158,
      topic: "Docker",
      q: "How do you pass configuration and secrets to containers safely?",
      a: "Pass non-sensitive config via environment variables or mounted config files, and secrets via a proper secret mechanism (Docker Swarm secrets, or a vault injected at runtime). Never bake secrets into the image with ENV in the Dockerfile — anyone with the image can extract them."
    },
    {
      id: 159,
      topic: "Docker",
      q: "What is the difference between CMD and ENTRYPOINT in a Dockerfile?",
      a: "ENTRYPOINT defines the fixed executable that always runs when the container starts; CMD provides the default arguments, which can be overridden at docker run time. Together they form the full command — a common pattern is ENTRYPOINT ['node'] with CMD ['server.js']."
    },
    {
      id: 160,
      topic: "Supabase",
      q: "What is Supabase, and how does it differ from Firebase?",
      a: "Supabase is an open-source backend-as-a-service built on Postgres, so you get a real relational database with SQL, while Firebase is built on NoSQL datastores. Supabase is also self-hostable and gives you Postgres extensions, Row Level Security, and standard SQL tooling."
    },
    {
      id: 161,
      topic: "Supabase",
      q: "How do you initialize the Supabase client in a JavaScript app?",
      a: "Import createClient from @supabase/supabase-js and call it with the project URL and the anon key, usually read from environment variables like import.meta.env.VITE_SUPABASE_URL. The client is then reused across the app for queries, auth, storage, and realtime."
    },
    {
      id: 162,
      topic: "Supabase",
      q: "Explain Row Level Security and how you would restrict users to their own rows.",
      a: "RLS is a Postgres feature that filters which rows a query can see, enforced by the database itself. You enable it on the table and write a policy like using (auth.uid() = user_id) for SELECT, so even if client code is tampered with, users can only ever read their own rows."
    },
    {
      id: 163,
      topic: "Supabase",
      q: "What is the difference between the anon key and the service_role key?",
      a: "The anon key is public and safe for frontend use because every request still goes through RLS policies. The service_role key bypasses RLS entirely and must only live on a trusted server — exposing it in the browser gives anyone full database access."
    },
    {
      id: 164,
      topic: "Supabase",
      q: "How do realtime subscriptions work in Supabase?",
      a: "You open a channel with supabase.channel(), attach a postgres_changes listener for an event, schema, and table, then call .subscribe(). Postgres notifies Supabase of the change via logical replication and the payload is pushed to clients — but the table must be in the supabase_realtime publication and RLS policies must allow the read."
    },
    {
      id: 165,
      topic: "Supabase",
      q: "How would you handle file uploads, and public vs private files?",
      a: "Use supabase.storage.from('bucket').upload(path, file) for uploads, guarding overwrites with the upsert option. Public buckets serve files via getPublicUrl(); private buckets need time-limited signed URLs from createSignedUrl(), and access to both is governed by RLS policies on storage.objects."
    },
    {
      id: 166,
      topic: "Supabase",
      q: "What does supabase.auth.getUser() do differently from reading the session?",
      a: "getUser() re-validates the JWT against the Supabase Auth server, so a forged or revoked token is rejected. Reading the session from localStorage trusts whatever is stored there, which is why security-sensitive checks should prefer getUser() or happen server-side."
    },
    {
      id: 167,
      topic: "Supabase",
      q: "How do you call server-side logic — Postgres functions vs Edge Functions?",
      a: "Use supabase.rpc('fn_name', params) to call a Postgres function for logic that lives close to the data, ideally SECURITY DEFINER with a fixed search_path. Use supabase.functions.invoke('fn-name', { body }) for Edge Functions — Deno-based serverless endpoints — when you need external APIs, secrets, or non-SQL work."
    },
    {
      id: 168,
      topic: "Supabase",
      q: "A query returns no rows even though data exists. How do you debug it?",
      a: "First check RLS: enabled with no policies denies everything, so verify the active policies and that the user is authenticated as expected. Then check the filters (.eq, .or), confirm the table is in the right schema, and inspect the error object — PostgREST errors usually name the exact cause."
    },
    {
      id: 169,
      topic: "Supabase",
      q: "How do you model a one-to-many relationship query in supabase-js?",
      a: "With foreign table embedding: .select('id, title, profiles ( username )') follows the foreign key and nests the related row. This works when the foreign key constraint exists, and you can go multiple levels deep or embed in the reverse direction."
    },
    {
          id: 170,
          topic: "ExpressJs",
          q: "What is middleware in Express and how does the middleware chain work?",
          a: "Middleware are functions with access to req, res, and next that run in registration order. Each one either ends the request-response cycle or calls next() to pass control to the next middleware; this chain is how Express handles logging, auth, parsing, and routing."
        },
        {
          id: 171,
          topic: "ExpressJs",
          q: "How do you handle errors in an Express application?",
          a: "You define error-handling middleware with four parameters (err, req, res, next) registered after all routes, and you forward errors with next(err) or by throwing in sync handlers. In Express 4, async rejections must be caught manually with try/catch and passed to next(err)."
        },
        {
          id: 172,
          topic: "ExpressJs",
          q: "Explain the difference between req.params, req.query, and req.body.",
          a: "req.params holds route path segments like /users/:id, req.query holds the ?key=value pairs of the URL for filtering and pagination, and req.body holds the parsed payload of POST/PUT requests (available only after body-parsing middleware like express.json())."
        },
        {
          id: 173,
          topic: "ExpressJs",
          q: "What is express.Router() and when would you use it?",
          a: "express.Router() creates a mini, isolated router for grouping related routes with their own middleware. You mount it with app.use('/api', router) so all its routes share the /api prefix, which keeps large apps modular."
        },
        {
          id: 174,
          topic: "ExpressJs",
          q: "How does the order of middleware registration affect request handling?",
          a: "Express processes middleware and routes strictly in registration order, so body parsing must come before routes, the 404 catch-all after all routes, and error handlers last. A misplaced catch-all or error handler will silently swallow routes or never run."
        },
        {
          id: 175,
          topic: "ExpressJs",
          q: "How do you serve static files and parse request bodies in Express?",
          a: "You serve static assets with app.use(express.static('public')), and parse bodies with express.json() for JSON and express.urlencoded() for HTML forms — both built in since Express 4.16, replacing the old body-parser package."
        },
        {
          id: 176,
          topic: "ExpressJs",
          q: "What is the difference between next(), next('route'), and next('router')?",
          a: "next() passes control to the next middleware or handler in the chain, next('route') skips the remaining handlers of the current route and jumps to the next matching route, and next('router') exits the current router entirely and continues with middleware after it."
        },
        {
          id: 177,
          topic: "ExpressJs",
          q: "How would you protect an Express API with basic security measures?",
          a: "I'd use helmet for secure HTTP headers, cors to control cross-origin access, express-rate-limit against brute force, validate all input instead of trusting req.body, and never leak err.stack to clients in production."
        },
        {
          id: 178,
          topic: "ExpressJs",
          q: "How do route parameters and query strings differ in REST API design?",
          a: "Route parameters identify a specific resource, like /users/42, while query strings modify how a collection is returned — filtering, sorting, pagination — like /users?role=admin&page=2. Params are required path segments; query values are optional and Express parses repeats into arrays."
        },
        {
          id: 179,
          topic: "ExpressJs",
          q: "How do you structure a production-ready Express app (config, shutdown, env)?",
          a: "I read config from environment variables with sane defaults like process.env.PORT || 3000, keep routes in mounted routers, centralize error handling, and shut down gracefully with server.close() so in-flight requests finish. Secrets never go in code, and stack traces are logged server-side, not sent to clients."
        },
    { id: 180, topic: "Agile", q: "What are the three Scrum roles and what is each accountable for?", a: "The Product Owner owns the Product Backlog and maximizes value by ordering it. The Scrum Master serves the team by removing impediments and coaching on Scrum. The Developers build the increment each sprint and decide how the work gets done." },
    { id: 181, topic: "Agile", q: "Explain the five Scrum events and the purpose of each.", a: "Sprint Planning sets the Sprint Goal and plan; the Daily Standup is a 15-minute team sync; the Sprint Review inspects the increment with stakeholders for feedback; the Retrospective inspects the process for improvements; the Sprint itself is the container event, typically 1-4 weeks." },
    { id: 182, topic: "Agile", q: "What is a user story, and what makes a good one?", a: "A user story is a short requirement from the user's perspective: 'As a [role], I want [goal], so that [benefit]'. A good story meets INVEST criteria — Independent, Negotiable, Valuable, Estimable, Small, Testable — and has clear acceptance criteria." },
    { id: 183, topic: "Agile", q: "What is the difference between the Definition of Done and acceptance criteria?", a: "Acceptance criteria are story-specific conditions for that one story to be accepted. The Definition of Done is a shared quality checklist (tested, reviewed, documented) that applies to every increment the team produces." },
    { id: 184, topic: "Agile", q: "What is velocity, and how should (and shouldn't) it be used?", a: "Velocity is the amount of work, usually in story points, a team completes per sprint. It should be used for forecasting capacity. It should never be used to compare teams or judge individuals, since estimates are team-relative." },
    { id: 185, topic: "Agile", q: "A stakeholder demands a change mid-sprint. How do you handle it?", a: "Protect the Sprint Goal: the new request goes to the Product Backlog, where the Product Owner prioritizes it for a future sprint. Only the Product Owner can cancel a sprint, and only when its goal becomes obsolete." },
    { id: 186, topic: "Agile", q: "What is the difference between Scrum and Kanban?", a: "Scrum works in fixed-length sprints with defined roles and ceremonies, estimating in points and measuring velocity. Kanban is a continuous flow system with a visual board, WIP limits, and no prescribed roles or timeboxes — work is pulled as capacity frees up." },
    { id: 187, topic: "Agile", q: "How do Agile teams estimate work, and why story points instead of hours?", a: "Teams use relative estimation techniques like Planning Poker. Story points express relative size and complexity, which avoids false precision and long debates about exact hours, and keeps estimates stable regardless of who does the work." },
    { id: 188, topic: "Agile", q: "What is technical debt, and how does Agile address it?", a: "Technical debt is the future cost of shortcuts taken today — skipped tests, rushed design. Agile addresses it through a strong Definition of Done with built-in quality, sustainable pace, refactoring as part of normal work, and making debt visible in the backlog." },
    { id: 189, topic: "Agile", q: "What does 'responding to change over following a plan' mean in practice?", a: "It means planning in short horizons with feedback loops: near-term work is detailed, long-term is coarse. When you learn something new — from a review, a retro, or the market — you reprioritize the backlog instead of clinging to an outdated plan." },
    { id: 190, topic: "MaterialUi", q: "What is the sx prop and how does it differ from the style prop?", a: "The sx prop is MUI's styling shortcut that accepts theme-aware values like color: 'primary.main', shorthand spacing (p, mt), responsive breakpoint objects, and nested selectors such as '&:hover'. Unlike style, it resolves values against the theme and generates optimized Emotion classes." },
    { id: 191, topic: "MaterialUi", q: "How do you customize the MUI theme for a whole application?", a: "Use createTheme() to override palette, typography, spacing, and breakpoints, then provide it via <ThemeProvider>. For component-wide defaults, use the theme's components section with styleOverrides and defaultProps, e.g. components: { MuiButton: { defaultProps: { variant: 'contained' } } }." },
    { id: 192, topic: "MaterialUi", q: "When should you use styled() instead of the sx prop?", a: "Use sx for one-off, ad-hoc styles on a single element. Use styled() for reusable components or styles that depend on props, and always define styled components outside the render function so they are not recreated on every render." },
    { id: 193, topic: "MaterialUi", q: "How does responsive design work in MUI?", a: "The sx prop accepts breakpoint objects like display: { xs: 'none', md: 'block' }, theme.breakpoints.up/down() helpers build media queries, and the useMediaQuery hook returns a boolean for a query. Default breakpoints are xs 0, sm 600, md 900, lg 1200, xl 1536." },
    { id: 194, topic: "MaterialUi", q: "How do you implement dark mode in a MUI app?", a: "Create the theme with createTheme({ palette: { mode: 'dark' } }), keep the mode in state, memoize the theme with useMemo, and pass it to ThemeProvider. Components adapt automatically when they use theme-aware tokens like bgcolor: 'background.paper'." },
    { id: 195, topic: "MaterialUi", q: "Explain the MUI Grid layout system.", a: "Grid is a 12-column flexbox layout: a container wraps items whose widths are set per breakpoint (xs, md, ...). In v5 you write <Grid item xs={12} md={6}>; in v6's Grid v2 the item prop was replaced by size={{ xs: 12, md: 6 }}. The spacing prop is implemented with a compensating negative margin on the container and padding on items." },
    { id: 196, topic: "MaterialUi", q: "What are slots, and how do you customize a sub-part of a component like a TextField?", a: "MUI components are composed of named slots (root, input, htmlInput, ...). In v6 you customize a slot via the slotProps prop, e.g. <TextField slotProps={{ htmlInput: { placeholder: 'Search' } }} /> to set a placeholder on the native input." },
    { id: 197, topic: "MaterialUi", q: "How do controlled components like Dialog, Menu, and Tabs work in MUI?", a: "They do not manage their own open/selected state. The parent holds state (open boolean, anchorEl element, selected value) and passes it down with handlers like onClose or onChange — nothing opens or changes until the parent updates that state." },
    { id: 198, topic: "MaterialUi", q: "How do you stop a custom styling prop from leaking to the DOM in styled()?", a: "Pass the shouldForwardProp option, e.g. styled(Button, { shouldForwardProp: (prop) => prop !== 'danger' })(...). This filters the prop out so React never sees an unknown DOM attribute and no warning is logged." },
    { id: 199, topic: "MaterialUi", q: "How would you apply brand colors and a custom button variant app-wide?", a: "Define the brand palette and typography in createTheme(), register the variant under components.MuiButton.variants with its props and style (or styleOverrides for the root slot), then wrap the app in <ThemeProvider theme={theme}> with <CssBaseline /> at the root." },
    { id: 200, topic: "Gsap", q: "What is the difference between gsap.to(), gsap.from() and gsap.fromTo()?", a: "gsap.to() animates from the element's current values to the given values, gsap.from() animates from the given values back to the current values, and gsap.fromTo() explicitly defines both the start and end values. Use fromTo when you need a guaranteed starting point regardless of prior animations." },
    { id: 201, topic: "Gsap", q: "How do timelines work and what are position parameters?", a: "A timeline (gsap.timeline()) chains tweens so they play in sequence by default. Position parameters like \"<\", \">\", \"-=0.5\" or an absolute time control exactly when each tween starts, letting you overlap, sync, or gap animations precisely." },
    { id: 202, topic: "Gsap", q: "Explain repeat, yoyo and repeatDelay.", a: "repeat replays a tween a set number of times (-1 for infinite), yoyo makes each repeat play backwards so the animation goes back and forth, and repeatDelay inserts a pause between repeats. yoyo only takes effect when repeat is set." },
    { id: 203, topic: "Gsap", q: "What is ScrollTrigger and how do you set one up?", a: "ScrollTrigger is a GSAP plugin that fires animations based on scroll position. After gsap.registerPlugin(ScrollTrigger), you pass a scrollTrigger config with a trigger element, start/end positions like \"top 80%\", and options such as scrub to link progress to the scrollbar or toggleActions to control play/reverse behavior." },
    { id: 204, topic: "Gsap", q: "What is the recommended pattern for using GSAP in a React component?", a: "Run animations inside useLayoutEffect (so they apply before paint and avoid flashes), scope selectors with gsap.context(() => {...}, ref), and return () => ctx.revert() as cleanup. This also kills ScrollTriggers on unmount and survives StrictMode's double-effect invocation in development." },
    { id: 205, topic: "Gsap", q: "How do you prevent two tweens from fighting over the same property?", a: "Use overwrite: \"auto\" on the new tween so it immediately kills only the conflicting parts of older tweens on the same targets, or call gsap.killTweensOf(target) before starting the replacement animation." },
    { id: 206, topic: "Gsap", q: "What is the difference between delay and a timeline position, and when would you use stagger?", a: "delay postpones a single tween's start, while timeline positions schedule tweens relative to each other. stagger is for animating many targets with the same tween, automatically offsetting each target's start time — ideal for lists and grids." },
    { id: 207, topic: "Gsap", q: "How do you make an animation follow the mouse smoothly without jank?", a: "Use gsap.quickTo(), which creates one reusable tween per property that you can call on every mousemove. Creating a new gsap.to() per mousemove event would spawn hundreds of conflicting tweens and hurt performance." },
    { id: 208, topic: "Gsap", q: "What are function-based values and invalidateOnRefresh used for?", a: "Function-based values like x: () => window.innerWidth / 2 are evaluated when the tween first renders, so they adapt to layout. With ScrollTrigger, invalidateOnRefresh: true re-evaluates them on refresh (e.g. after resize) so scroll animations stay correct." },
    { id: 209, topic: "Gsap", q: "How would you build responsive scroll animations that only run on desktop?", a: "Use gsap.matchMedia(): mm.add(\"(min-width: 768px)\", () => { ... }) creates the desktop ScrollTriggers, and GSAP automatically reverts and cleans them up when the media query stops matching — no manual resize listeners needed." },
    {
          id: 210,
          topic: "Convex",
          q: "What's the difference between a query, a mutation, and an action in Convex?",
          a: "Queries are read-only, deterministic functions whose results sync reactively to clients. Mutations change data and run as atomic transactions (all writes commit or none do). Actions can call third-party APIs and run non-deterministic code, but they can't touch ctx.db directly — they read and write through ctx.runQuery and ctx.runMutation."
        },
        {
          id: 211,
          topic: "Convex",
          q: "How does realtime work in Convex?",
          a: "useQuery subscribes to a query result; when any write changes data that query depends on, Convex pushes the new result and React re-renders automatically. There's no polling or manual websocket code on the client."
        },
        {
          id: 212,
          topic: "Convex",
          q: "How do you define a schema and indexes in Convex?",
          a: "In convex/schema.ts using defineSchema and defineTable from 'convex/server', with field validators from 'convex/values'. Chain .index('by_user', ['userId']) on a table, then query it with .withIndex('by_user', q => q.eq('userId', id)) for fast lookups instead of full scans."
        },
        {
          id: 213,
          topic: "Convex",
          q: "How do you handle authentication and authorization in Convex functions?",
          a: "Call await ctx.auth.getUserIdentity() — it returns the logged-in identity or null when anonymous. Use identity.subject as the stable user ID: store it on documents (e.g. userId) and check it before reads/writes to scope data to its owner."
        },
        {
          id: 214,
          topic: "Convex",
          q: "How do you paginate large result sets in Convex?",
          a: "Accept paginationOptsValidator from 'convex/server' as an argument and return ctx.db.query('posts').order('desc').paginate(args.paginationOpts). It returns { page, continueCursor, isDone }, and the client passes continueCursor back to load the next page."
        },
        {
          id: 215,
          topic: "Convex",
          q: "How do you store and serve files with Convex?",
          a: "From a mutation, call ctx.storage.generateUploadUrl() and POST the file to that URL from the client, or ctx.storage.store(blob) server-side — both give you a storage ID. In a query, turn it into a viewable URL with ctx.storage.getUrl(storageId), and delete it with ctx.storage.delete(storageId)."
        },
        {
          id: 216,
          topic: "Convex",
          q: "How do you run code on a schedule in Convex?",
          a: "For one-off delayed runs, use ctx.scheduler.runAfter or runAt inside a mutation or action, targeting an internal function. For recurring jobs, define convex/crons.ts with cronJobs() and crons.interval('name', { hours: 1 }, internal.jobs.cleanup)."
        },
        {
          id: 217,
          topic: "Convex",
          q: "When would you use internalQuery, internalMutation, or internalAction?",
          a: "When a function must never be callable from the client — for example an admin cleanup job triggered by the scheduler or a cron. Internal functions are only reachable from other backend code, which protects privileged operations."
        },
        {
          id: 218,
          topic: "Convex",
          q: "What guarantees do Convex mutations give you under concurrent writes?",
          a: "Mutations are ACID transactions: either all writes commit or none do. If two mutations conflict on the same document, one commits and the other is automatically retried against fresh data — optimistic concurrency control, so you don't write your own locking."
        },
        {
          id: 219,
          topic: "Convex",
          q: "How do you expose a public HTTP endpoint, like a Stripe webhook, in Convex?",
          a: "Define an httpAction and register it on an httpRouter in convex/http.ts with a path and method. The handler still can't use ctx.db directly, so it delegates database work to internal queries and mutations."
        },
    { id: 220, topic: "Clerk", q: "What is Clerk, and why would you choose it over building authentication yourself?", a: "Clerk is a complete authentication and user-management platform: prebuilt sign-in/sign-up UI, session management, MFA, social OAuth, organizations and roles. Building it yourself means owning password hashing, session security, email flows and compliance — Clerk removes that risk and ships in hours." },
    { id: 221, topic: "Clerk", q: "How do you protect a page in a React SPA using Clerk?", a: "Wrap the app in <ClerkProvider>, then guard the route with useAuth(): wait for isLoaded, redirect to /sign-in when not signed in, or render conditionally with <SignedIn>/<SignedOut>. Never rely on UI hiding alone — the API must also verify the token." },
    { id: 222, topic: "Clerk", q: "What is the difference between useUser() and useAuth()?", a: "useUser() returns the full user resource (profile data, emails, isLoaded, isSignedIn). useAuth() returns lightweight auth state and helpers — userId, sessionId, getToken, signOut — without fetching the whole user object, so it is cheaper for guards and API calls." },
    { id: 223, topic: "Clerk", q: "How does your backend verify a request from a Clerk-authenticated user?", a: "The frontend calls getToken() and sends the JWT as a Bearer token. The backend validates the signature against Clerk's keys using verifyToken/clerkClient with the secret key (or clerkMiddleware), then trusts the userId inside — never trust a userId sent as plain data." },
    { id: 224, topic: "Clerk", q: "Explain Clerk webhooks and how you secure them.", a: "Clerk POSTs events like user.created to your endpoint so you can sync your database. You must verify the svix-id / svix-timestamp / svix-signature headers with the Svix Webhook class using your signing secret, on the raw request body, before processing anything — and make handlers idempotent since events can redeliver." },
    { id: 225, topic: "Clerk", q: "How do organizations and roles work in Clerk?", a: "Organizations group users for B2B SaaS, with built-in roles like org:admin and org:member plus custom roles and permissions. In the UI you use <OrganizationSwitcher/> and useOrganization(); for checks you use has({ role: 'org:admin' }) or has({ permission: '...' }) from useAuth()." },
    { id: 226, topic: "Clerk", q: "What is the difference between the publishable key and the secret key?", a: "The publishable key (pk_...) identifies your app and is safe in frontend code. The secret key (sk_...) grants full Backend API access and must live server-side only — exposing it lets anyone manage your users." },
    { id: 227, topic: "Clerk", q: "How do you enforce authentication in Next.js middleware with Clerk?", a: "Use clerkMiddleware() from @clerk/nextjs/server, define public vs protected routes with createRouteMatcher(), and call auth().protect() (or check auth()) inside the middleware so unauthenticated requests are blocked or redirected before reaching the page." },
    { id: 228, topic: "Clerk", q: "What happens if the publishable key is missing or invalid?", a: "ClerkProvider throws a 'Missing publishableKey' error and auth state never resolves — useUser()/useAuth() stay in loading state. The fix is passing the correct pk_test_/pk_live_ key, since every Clerk call is scoped to that application instance." },
    { id: 229, topic: "Clerk", q: "How would you migrate existing users into Clerk?", a: "Use the Backend API to bulk-import users, supplying their existing password hashes (e.g. bcrypt) so they keep their passwords, and store your old IDs as external IDs to map records. Alternatively, invite users to set a new password via the invitation flow." },
    { id: 230, topic: "Postman", q: "What is Postman and why do developers use it?", a: "Postman is an API client for building, testing, and documenting APIs. Developers use it to send HTTP requests, inspect responses, automate test suites, and share collections with their team." },
    { id: 231, topic: "Postman", q: "Explain environments and variables in Postman.", a: "An environment is a named set of key-value pairs (dev, staging, prod) you can switch between without editing requests. Variables are referenced with {{name}} syntax and can also hold secrets in their local-only current value." },
    { id: 232, topic: "Postman", q: "How do you chain requests together?", a: "In the first request's Tests tab you extract a value from the response with pm.environment.set(), then reuse it as {{variable}} in the next request — typically an auth token from a login call." },
    { id: 233, topic: "Postman", q: "What are pre-request scripts used for?", a: "They run before the request is sent. Common uses: setting dynamic variables, generating timestamps or HMAC signatures, and fetching a fresh token with pm.sendRequest()." },
    { id: 234, topic: "Postman", q: "How do you write assertions in Postman tests?", a: "With pm.test(), which groups assertions about the response: pm.response.to.have.status(200) for status codes, or pm.expect() with Chai matchers to validate the JSON body." },
    { id: 235, topic: "Postman", q: "What is Newman and how does it fit into CI/CD?", a: "Newman is Postman's command-line collection runner. You run newman run collection.json -e env.json in the pipeline, and its exit code fails the build when any test fails." },
    { id: 236, topic: "Postman", q: "What are mock servers and when would you use one?", a: "Mock servers simulate endpoints by returning saved example responses. You use them so frontend development can proceed before the real backend is ready." },
    { id: 237, topic: "Postman", q: "Explain the variable scope hierarchy.", a: "When a variable exists in multiple scopes, the narrowest wins: local > data > environment > collection > global." },
    { id: 238, topic: "Postman", q: "How do you handle authentication in Postman?", a: "Through the Authorization tab: Bearer Token, Basic Auth, API Key, or OAuth 2.0 via 'Get New Access Token'. Setting auth on the collection with 'Inherit auth from parent' applies it to every request." },
    { id: 239, topic: "Postman", q: "What are Postman Monitors?", a: "Scheduled collection runs from the Postman cloud with a results dashboard and failure alerts — ideal for continuously checking the health of a production API." },
    { id: 240, topic: "NextJs", q: "Explain the difference between Server Components and Client Components, and when you would use each.", a: "Server Components render on the server, can be async, and keep secrets and heavy code out of the client bundle — use them for data fetching and static UI. Client Components (\"use client\") render in the browser and unlock hooks, events, and browser APIs — use them for interactivity." },
    { id: 241, topic: "NextJs", q: "How does data fetching in the App Router differ from getServerSideProps in the old Pages Router?", a: "In the App Router you fetch directly inside async Server Components with the extended fetch API (caching, revalidation, tags) instead of a separate getServerSideProps export. Fetching colocates with the component and each fetch can have its own cache policy." },
    { id: 242, topic: "NextJs", q: "Explain ISR and when you would choose it over SSR.", a: "ISR statically generates a page once and rebuilds it in the background at most every N seconds (export const revalidate = N). Choose it when data changes infrequently — you get static speed for most visitors without rebuilding on every request like SSR does." },
    { id: 243, topic: "NextJs", q: "Your app throws a hydration mismatch in production. What are the common causes and how do you fix them?", a: "Common causes: rendering values that differ between server and client (Date.now(), Math.random(), locale formatting) or browser-only APIs during SSR. Fix by rendering the non-deterministic part only on the client (useEffect/useState guard), or use suppressHydrationWarning for intentionally different content." },
    { id: 244, topic: "NextJs", q: "How do Server Actions work, and what security mistake must you avoid with them?", a: "A \"use server\" function runs on the server but is callable from client code or a form action; Next.js creates a secure endpoint for it. Never trust the client: always validate and authorize inside the action, because anyone can invoke the endpoint directly." },
    { id: 245, topic: "NextJs", q: "What is middleware used for, and what is its main limitation?", a: "Middleware runs before a request completes for auth checks, redirects, rewrites, A/B tests, and header manipulation based on the matcher. Its limitation is the Edge Runtime: no Node.js-only APIs (fs, child_process), so keep it light and fast." },
    { id: 246, topic: "NextJs", q: "Users report seeing stale data after an update. How do you debug and fix it in Next.js?", a: "Check the fetch cache policy: the default is force-cache. Fix with on-demand revalidation (revalidatePath/revalidateTag after the mutation), tag-based invalidation for shared data, or cache: 'no-store' / force-dynamic for truly live data." },
    { id: 247, topic: "NextJs", q: "How does streaming with Suspense improve performance, and how is it different from a single loading spinner?", a: "Streaming sends the page shell immediately and each Suspense boundary fills in as its data resolves, so users see content progressively. A single spinner blocks everything until all data arrives; Suspense lets fast parts render while slow parts stream in." },
    { id: 248, topic: "NextJs", q: "What is the trade-off of setting output: 'export' for a fully static site?", a: "You get portable static HTML that can be hosted anywhere, but you lose all server features: no middleware, no ISR, no dynamic rendering, no Route Handlers at runtime, and Server Actions cannot run without a server." },
    { id: 249, topic: "NextJs", q: "How would you build a form with a Server Action that feels instant, including a pending state?", a: "Wire the form's action to the Server Action (works without JS via progressive enhancement), use useFormStatus in a child component to disable the button and show a spinner while pending, and optionally use useOptimistic for an instant UI update before the server responds." },
    { id: 250, topic: "Bootstrap", q: "What is Bootstrap, and when would you pick it over writing custom CSS?", a: "Bootstrap is a CSS framework with a responsive grid, pre-built components, and utility classes. I would pick it for speed — admin panels, MVPs, prototypes — where a proven, consistent design system matters more than a unique visual identity." },
    { id: 251, topic: "Bootstrap", q: "Explain the Bootstrap grid system. What does '12 columns' actually mean?", a: "Every .row is divided into 12 equal columns; column classes like col-6 take a fraction of that (6/12 = half). Columns must sit inside a .row inside a .container, and widths are percentage-based so they flex with the viewport." },
    { id: 252, topic: "Bootstrap", q: "What does 'mobile-first' mean for Bootstrap breakpoints?", a: "Breakpoint classes are min-width: col-md-6 applies at 768px and up. You design the base (mobile) styles first, then add breakpoint classes to enhance the layout on larger screens." },
    { id: 253, topic: "Bootstrap", q: "A modal's backdrop appears but the dialog box looks broken or unstyled. How do you debug it?", a: "Check the required nesting: .modal > .modal-dialog > .modal-content. A missing .modal-dialog or .modal-content breaks positioning and styling. Also verify the Bootstrap JS bundle loaded and data-bs-target matches the modal id." },
    { id: 254, topic: "Bootstrap", q: "Bootstrap vs Tailwind CSS — what are the trade-offs?", a: "Bootstrap gives ready-made styled components, so you ship fast with a consistent look, but sites can look generic and overriding styles can fight the framework. Tailwind gives total design control via utilities but you build every component yourself. Choose Bootstrap for speed and convention, Tailwind for custom design systems." },
    { id: 255, topic: "Bootstrap", q: "How would you customize Bootstrap's primary color in a real project?", a: "Two ways: with Sass, override $primary (or $theme-colors) before importing Bootstrap and recompile; without Sass, override the --bs-primary CSS variable at runtime. Never edit the compiled bootstrap.min.css directly." },
    { id: 256, topic: "Bootstrap", q: "Why don't Bootstrap 5 tooltips work with just data-bs-toggle='tooltip'?", a: "Unlike most components, tooltips and popovers are opt-in for performance: Bootstrap 5 requires explicit JavaScript initialization, e.g. new bootstrap.Tooltip(el) for each element, because initializing them page-wide by default would be costly." },
    { id: 257, topic: "Bootstrap", q: "Build a responsive layout: sidebar after content on mobile, sidebar left of content on desktop. How?", a: "Put the sidebar second in the HTML, give content and sidebar col-12 col-lg-* widths, and add order-lg-first to the sidebar so it visually moves first on large screens while staying after content on mobile." },
    { id: 258, topic: "Bootstrap", q: "What are the key breaking changes migrating from Bootstrap 4 to 5?", a: "jQuery was removed — all plugins are vanilla JS. Data attributes were renamed from data-* to data-bs-*. Spacing classes ml-*/mr-* became ms-*/me-* (logical properties), custom-file inputs became form-control, and Internet Explorer support was dropped." },
    { id: 259, topic: "Bootstrap", q: "How do you keep Bootstrap's CSS footprint small in production?", a: "Import only the Sass modules you use instead of the full bundle, or run PurgeCSS at build time to remove unused classes. Also prefer the minified files and avoid loading both the CDN and npm copies." },
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
      id: 80,
      topic: "React",
      q: "Qu'est-ce que le 'lifting state up' (remonter l'état), et quand ce modèle montre-t-il ses limites ?",
      a: "Remonter l'état consiste à déplacer l'état partagé vers le parent commun le plus proche et à le transmettre via les props. Cela devient ingérable avec un imbriquement profond (prop drilling), auquel cas le contexte ou une bibliothèque d'état est plus adapté."
    },
    {
      id: 81,
      topic: "React",
      q: "Expliquez la réconciliation de React et pourquoi les clés (keys) comptent dans les listes.",
      a: "La réconciliation est la façon dont React compare le nouveau DOM virtuel à l'ancien pour décider des mises à jour minimales du vrai DOM. Les keys permettent à React d'identifier les éléments d'une liste entre les rendus ; des clés instables (comme les index de tableau) provoquent des états obsolètes et des bugs d'interface quand les éléments changent d'ordre."
    },
    {
      id: 82,
      topic: "React",
      q: "Qu'est-ce qui provoque des re-rendus inutiles, et comment les corriger ?",
      a: "Re-rendre un parent re-rend par défaut tous ses enfants, même si leurs props n'ont pas changé. On corrige cela en découpant les composants, en mémoïsant avec React.memo, et en stabilisant les callbacks et valeurs avec useCallback et useMemo."
    },
    {
      id: 83,
      topic: "React",
      q: "useMemo vs useCallback — quand chacun vaut-il le coup, et quand est-ce excessif ?",
      a: "useMemo mémoïse une valeur calculée, useCallback mémoïse une référence de fonction — les deux servent surtout quand ils sont passés à des enfants mémoïsés. Ils sont excessifs pour des calculs peu coûteux ; on profile d'abord, car une mémoïsation inutile ajoute de la complexité sans gain."
    },
    {
      id: 84,
      topic: "React",
      q: "Comment mettriez-vous à jour un état profondément imbriqué sans le muter ?",
      a: "On utilise la forme fonctionnelle du setter en copiant chaque niveau avec le spread pour créer de nouveaux objets, ou une bibliothèque comme Immer pour les structures complexes. On ne mute jamais l'état directement, car React se base sur les changements de référence pour détecter les mises à jour."
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
      id: 85,
      topic: "Javascript",
      q: "Expliquez le hoisting. Qu'est-ce qui est hoisted, et dans quel ordre ?",
      a: "Les déclarations de fonctions sont entièrement remontées, les déclarations var sont remontées mais initialisées à undefined, tandis que let et const restent dans la 'temporal dead zone' jusqu'à leur déclaration. Quand une fonction et un var partagent un nom, la déclaration de fonction l'emporte."
    },
    {
      id: 86,
      topic: "Javascript",
      q: "Comment la valeur de `this` est-elle déterminée en JavaScript ?",
      a: "Elle est déterminée par la façon dont la fonction est appelée : un appel de méthode lie `this` à l'objet, un appel simple donne undefined (mode strict) ou l'objet global, les fonctions fléchées héritent du `this` lexical, et bind/call/apply le fixent explicitement."
    },
    {
      id: 87,
      topic: "Javascript",
      q: "Quel problème les promesses résolvent-elles par rapport aux callbacks ?",
      a: "Elles aplatissent le 'callback hell' en appels .then() chaînables et centralisent la gestion d'erreurs — un seul .catch() gère les échecs partout dans la chaîne. Une promesse est un objet représentant une valeur future, ce qui rend le flux asynchrone composable."
    },
    {
      id: 88,
      topic: "Javascript",
      q: "Copie superficielle vs copie profonde — comment cloneriez-vous un objet, et qu'est-ce qui peut casser ?",
      a: "Le spread et Object.assign ne copient que le premier niveau, donc les objets imbriqués restent partagés. structuredClone() fait une copie profonde mais perd les fonctions, les prototypes et certains objets spéciaux comme les nœuds DOM."
    },
    {
      id: 89,
      topic: "Javascript",
      q: "Un appel fetch dans une boucle échoue silencieusement — comment le débogueriez-vous ?",
      a: "On vérifie l'onglet réseau pour la vraie requête et son statut, puis la gestion des promesses : forEach n'attend pas les callbacks async, donc les rejets non gérés sont avalés. On réécrit avec for...of plus try/catch, et on vérifie toujours response.ok avant de parser."
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
      id: 90,
      topic: "Typescript",
      q: "Que sont les types union et intersection ? Donnez un exemple de chacun.",
      a: "Une union (string | number) signifie qu'une valeur peut être l'un de plusieurs types — idéal pour les machines à états. Une intersection (A & B) combine plusieurs types en un seul qui possède tous leurs membres."
    },
    {
      id: 91,
      topic: "Typescript",
      q: "Que fait `as const`, et quand est-ce utile ?",
      a: "Il restreint une valeur à son type littéral et la rend profondément readonly. C'est utile pour les objets de configuration et les unions discriminées où l'on veut des littéraux de chaîne exacts plutôt que des types string élargis."
    },
    {
      id: 92,
      topic: "Typescript",
      q: "Comment typeriez-vous une fonction qui n'accepte que des clés valides d'un objet ?",
      a: "Avec keyof et une contrainte générique : function get<T, K extends keyof T>(obj: T, key: K). Le compilateur rejette alors toute clé absente de l'objet, et le type de retour est inféré correctement."
    },
    {
      id: 93,
      topic: "Typescript",
      q: "Une API tierce retourne du JSON non typé. Comment le rendre type-safe ?",
      a: "On définit des interfaces pour la forme attendue et on valide la réponse à l'exécution avec une bibliothèque comme Zod, puis on infère le type TypeScript depuis le schéma. On ne fait jamais de cast aveugle avec `as`, qui ne fait que faire taire le compilateur."
    },
    {
      id: 94,
      topic: "Typescript",
      q: "Mode strict activé ou non — quand le strict vaut-il la contrainte ?",
      a: "Le mode strict (surtout strictNullChecks) détecte les bugs null/undefined à la compilation plutôt qu'en production. Il vaut le coup pour tout nouveau projet ; pour du code existant, on active les options progressivement pour éviter une réécriture massive."
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
      id: 95,
      topic: "VueJs",
      q: "Comment partageriez-vous l'état entre des composants non liés sans store ?",
      a: "On utilise provide/inject pour transmettre des données dans l'arbre sans prop drilling. Cela convient pour un état partagé simple, mais pour un état complexe ou qui change souvent, Pinia est le meilleur choix."
    },
    {
      id: 96,
      topic: "VueJs",
      q: "Que sont les hooks de cycle de vie, et lequel utiliseriez-vous pour charger les données initiales ?",
      a: "Des hooks comme onMounted, onUpdated et onUnmounted s'exécutent à des moments précis de la vie d'un composant. On charge les données initiales dans onMounted (le DOM existe alors), et on nettoie les écouteurs ou timers dans onUnmounted."
    },
    {
      id: 97,
      topic: "VueJs",
      q: "Expliquez les slots — par défaut, nommés et scopés — et quand utiliseriez-vous un slot scopé ?",
      a: "Les slots permettent à un parent d'injecter du contenu dans un enfant : les slots par défaut et nommés définissent des points d'insertion. Un slot scopé renvoie des données de l'enfant vers le parent, pour que le parent personnalise le rendu — ex. un composant de liste laissant le parent décider du template de chaque élément."
    },
    {
      id: 98,
      topic: "VueJs",
      q: "Une liste se re-rend lentement à chaque frappe — comment le débogueriez-vous ?",
      a: "On vérifie d'abord les clés manquantes ou instables et les propriétés computed coûteuses exécutées à chaque rendu. On utilise le profiler des devtools Vue, on debounce la saisie, et on envisage v-show plutôt que v-if pour les éléments basculés fréquemment."
    },
    {
      id: 99,
      topic: "VueJs",
      q: "Quand choisiriez-vous Vue plutôt que React, ou l'inverse ?",
      a: "Vue a une courbe d'apprentissage plus douce et des composants monofichiers avec conventions, ce qui convient aux petites équipes. React a le plus grand écosystème et marché de l'emploi. En pratique, la familiarité de l'équipe et le code existant comptent plus que les différences techniques."
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
      id: 100,
      topic: "Html",
      q: "Que se passe-t-il entre la saisie d'une URL et l'affichage de la page ?",
      a: "Le navigateur résout le DNS, récupère le HTML, le parse en DOM, construit le CSSOM, les combine en arbre de rendu, puis fait la mise en page et le paint. Les scripts bloquants et les grosses ressources ralentissent chacune de ces étapes."
    },
    {
      id: 101,
      topic: "Html",
      q: "Comment optimise-t-on une page avec beaucoup d'images ?",
      a: "On utilise loading='lazy' pour les images sous la ligne de flottaison, srcset/sizes pour les variantes responsives, des formats modernes comme WebP ou AVIF, et on définit toujours les attributs width/height pour éviter les décalages de mise en page."
    },
    {
      id: 102,
      topic: "Html",
      q: "Quelle est la différence entre <script>, <script async> et <script defer> ?",
      a: "Un script classique bloque le parsing HTML jusqu'à son téléchargement et son exécution. async télécharge en parallèle et s'exécute dès qu'il est prêt, sans ordre garanti. defer télécharge aussi en parallèle mais s'exécute après le parsing, dans l'ordre du document."
    },
    {
      id: 103,
      topic: "Html",
      q: "Un formulaire est soumis mais le back-end reçoit des champs vides — comment le débogueriez-vous ?",
      a: "On vérifie que chaque champ a un attribut name (sans lui rien n'est envoyé), on contrôle method et enctype dans l'onglet réseau, et on s'assure qu'aucun preventDefault ou validation JavaScript n'avale les données avant la soumission."
    },
    {
      id: 104,
      topic: "Html",
      q: "Quand utiliser <button> vs <a> vs <div onclick> ?",
      a: "On utilise <button> pour les actions qui restent sur la page et <a> pour naviguer vers une nouvelle URL. <div onclick> est un échec d'accessibilité — pas de support clavier, pas de comportement de focus, pas de sémantique pour les lecteurs d'écran."
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
      id: 105,
      topic: "Css",
      q: "Expliquez la différence entre position: relative, absolute, fixed et sticky.",
      a: "relative décale un élément de sa place normale sans quitter le flux ; absolute le positionne par rapport à l'ancêtre positionné le plus proche ; fixed le fixe au viewport ; sticky se comporte comme relative jusqu'à un seuil de scroll, puis comme fixed."
    },
    {
      id: 106,
      topic: "Css",
      q: "Comment construiriez-vous une mise en page responsive sans media queries ?",
      a: "On utilise des techniques fluides : flex-wrap, grid avec auto-fit et minmax(), clamp() pour la typographie fluide, et des unités relatives comme % et vw. Cela gère élégamment les tailles intermédiaires que des breakpoints fixes manqueraient."
    },
    {
      id: 107,
      topic: "Css",
      q: "Qu'est-ce qui cause le cumulative layout shift (CLS), et comment le prévenir ?",
      a: "Le CLS vient du contenu qui bouge après le chargement — images sans dimensions, polices ou pubs chargées tardivement. On le prévient en réservant l'espace (width/height ou aspect-ratio), avec font-display: swap, et en évitant d'insérer du contenu au-dessus du contenu existant."
    },
    {
      id: 108,
      topic: "Css",
      q: "Un style 'ne s'applique pas' — comment débogueriez-vous un conflit de spécificité ?",
      a: "On ouvre le panneau Styles/calculé des devtools pour voir quelle règle gagne et lesquelles sont barrées. On cherche des sélecteurs plus spécifiques, des styles inline ou des problèmes d'ordre des sources — et on corrige le sélecteur plutôt que de recourir à !important."
    },
    {
      id: 109,
      topic: "Css",
      q: "CSS-in-JS vs classes utilitaires vs CSS classique — comment choisir ?",
      a: "Le CSS classique (ou Sass) avec une convention de nommage convient aux petits projets et au contrôle total. Les classes utilitaires comme Tailwind accélèrent les designs sur mesure avec cohérence. Le CSS-in-JS convient aux bibliothèques de composants nécessitant des styles dynamiques et scopés, au prix d'un coût d'exécution."
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
      id: 110,
      topic: "Tailwind",
      q: "Comment implémente-t-on le dark mode dans Tailwind ?",
      a: "On utilise la variante dark: (ex. dark:bg-gray-900) et on définit la stratégie dans la config : 'media' suit la préférence de l'OS, 'class' permet de le basculer manuellement avec JavaScript."
    },
    {
      id: 111,
      topic: "Tailwind",
      q: "Comment construiriez-vous un design system de marque avec Tailwind ?",
      a: "On étend le thème dans tailwind.config.js avec les couleurs de marque, les polices et les espacements, et on expose les valeurs modifiables à l'exécution (comme les thèmes) via des variables CSS. La config reste la source unique de vérité pour les design tokens."
    },
    {
      id: 112,
      topic: "Tailwind",
      q: "Vos chaînes de classes deviennent longues et illisibles — que faites-vous ?",
      a: "On extrait un vrai composant (en React/Vue) au lieu de répéter la chaîne — c'est la solution principale. @apply est un recours pour les contextes sans composants, mais en abuser recrée les problèmes de maintenance CSS que l'utility-first devait éviter."
    },
    {
      id: 113,
      topic: "Tailwind",
      q: "Tailwind vs une bibliothèque de composants comme Bootstrap — quand Tailwind est-il le mauvais choix ?",
      a: "Tailwind est le mauvais choix quand on a besoin de composants prêts à l'emploi rapidement, comme pour un prototype d'admin — Bootstrap ou un kit UI les fournit d'emblée. Tailwind gagne pour les designs sur mesure où l'on veut un contrôle visuel total sans lutter contre les styles par défaut d'une bibliothèque."
    },
    {
      id: 114,
      topic: "Tailwind",
      q: "Comment la configuration `content` affecte-t-elle le build de production ?",
      a: "Le moteur JIT n'analyse que les fichiers listés dans `content` ; les utilitaires utilisés dans des chemins manquants sont silencieusement absents du CSS de production. On garde les globs précis — trop étroits, on perd des styles ; trop larges, on ralentit le build."
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
      id: 115,
      topic: "NodeJs",
      q: "Que se passe-t-il quand une tâche gourmande en CPU tourne sur l'event loop, et que feriez-vous ?",
      a: "Elle bloque le thread unique, donc aucune autre requête n'est traitée jusqu'à sa fin — le serveur semble figé. On la délègue à des worker threads, un processus enfant ou une file de tâches, en gardant l'event loop libre pour l'I/O."
    },
    {
      id: 116,
      topic: "NodeJs",
      q: "La mémoire de votre API augmente régulièrement sur plusieurs jours — comment le débogueriez-vous ?",
      a: "On prend des snapshots du heap avec --inspect et on les compare pour trouver ce qui s'accumule — les coupables typiques sont les caches sans limite, les écouteurs d'événements oubliés et les timers. On suit aussi la RSS dans le temps et on revoit tout ce qui est stocké dans des globales de module."
    },
    {
      id: 117,
      topic: "NodeJs",
      q: "Quelle est la différence entre process.nextTick, setImmediate et setTimeout(0) ?",
      a: "Les callbacks process.nextTick s'exécutent avant que l'event loop passe à la phase suivante — ils peuvent affamer l'I/O si on en abuse. setImmediate s'exécute dans la phase check après les callbacks d'I/O ; setTimeout(0) s'exécute dans la phase timers, après environ 1ms minimum."
    },
    {
      id: 118,
      topic: "NodeJs",
      q: "Comment structureriez-vous une app Express de taille conséquente pour la garder maintenable ?",
      a: "On sépare les responsabilités en couches : les routes définissent les endpoints, les contrôleurs gèrent requête/réponse, les services portent la logique métier, et les middlewares les préoccupations transverses comme l'auth. On ajoute un middleware d'erreurs centralisé et on charge toute la config depuis les variables d'environnement."
    },
    {
      id: 119,
      topic: "NodeJs",
      q: "Monolithe vs microservices en Node — comment décider ?",
      a: "On commence avec un monolithe modulaire : plus simple à développer, tester et déployer, et Node le gère bien. On découpe en microservices seulement face à de vrais goulots d'étranglement ou un besoin d'autonomie des équipes — la distribution ajoute un coût opérationnel dès le premier jour."
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
      id: 120,
      topic: "RestApi",
      q: "Qu'est-ce que l'idempotence dans une API REST, et quelles méthodes HTTP sont idempotentes ?",
      a: "Une opération idempotente produit le même résultat quand on la répète. GET, PUT et DELETE sont idempotentes ; POST ne l'est généralement pas. L'idempotence compte pour les réessais sûrs — un client peut renvoyer un PUT sans créer de doublons."
    },
    {
      id: 121,
      topic: "RestApi",
      q: "Quand choisiriez-vous REST plutôt que GraphQL ou les WebSockets ?",
      a: "REST pour du CRUD standard avec des ressources cachables, prévisibles et un outillage simple. GraphQL quand les clients ont besoin de requêtes flexibles et imbriquées en un seul aller-retour. WebSockets pour des mises à jour bidirectionnelles en temps réel comme le chat ou les tableaux de bord live."
    },
    {
      id: 122,
      topic: "RestApi",
      q: "Comment versionne-t-on une API, et comment déprécier une ancienne version sans casser les clients ?",
      a: "On versionne dans l'URL (/api/v1) ou via les en-têtes. Pour déprécier : annoncer une date de fin, ajouter les en-têtes Deprecation/Sunset, publier un changelog, garder les deux versions en parallèle pendant une période de transition, et surveiller le trafic de l'ancienne version avant de la retirer."
    },
    {
      id: 123,
      topic: "RestApi",
      q: "Un client signale des erreurs 500 intermittentes sur un endpoint POST. Comment débogueriez-vous cela ?",
      a: "Reproduire avec la charge exacte, puis vérifier les logs serveur avec un identifiant de requête pour la corrélation. Causes fréquentes : cas limites de validation non gérés, erreurs ou deadlocks de base de données, conditions de concurrence sous requêtes simultanées, et ressources épuisées. Ajouter du monitoring et des logs structurés pour attraper la prochaine occurrence."
    },
    {
      id: 124,
      topic: "RestApi",
      q: "PUT vs PATCH — quelle est la différence pratique, et quand utiliser chacun ?",
      a: "PUT remplace la ressource entière, donc le client doit envoyer la représentation complète ; PATCH applique une mise à jour partielle avec uniquement les champs modifiés. On utilise PUT pour les remplacements complets, PATCH pour de petites mises à jour de grosses ressources — PATCH réduit la taille des requêtes et évite d'écraser des champs que le client n'a jamais lus."
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
      id: 125,
      topic: "Laravel",
      q: "Que sont les service providers et le conteneur de services dans Laravel ?",
      a: "Le conteneur de services gère l'injection de dépendances : il résout et injecte automatiquement les dépendances des classes. Les service providers amorcent l'application — dans register() on lie les interfaces aux implémentations, dans boot() on étend le comportement du framework une fois tous les providers enregistrés."
    },
    {
      id: 126,
      topic: "Laravel",
      q: "Qu'est-ce que le problème de requêtes N+1 dans Eloquent, et comment le corrige-t-on ?",
      a: "Il survient quand on charge des modèles (1 requête) puis qu'on charge une relation paresseusement dans une boucle (N requêtes supplémentaires). On le corrige avec le chargement anticipé : User::with('posts')->get(). On utilise une barre de debug ou un journal de requêtes pour repérer les requêtes superflues en développement."
    },
    {
      id: 127,
      topic: "Laravel",
      q: "Comment gère-t-on les tâches en arrière-plan dans Laravel ?",
      a: "On envoie des classes de jobs vers un pilote de file (base de données, Redis) ; des workers (queue:work) les exécutent de façon asynchrone. Les jobs échoués vont dans la table failed_jobs pour inspection et réessai, et Laravel Horizon fournit un tableau de bord pour surveiller les files basées sur Redis."
    },
    {
      id: 128,
      topic: "Laravel",
      q: "Form Requests vs validation inline dans les contrôleurs — quand et pourquoi utiliser les Form Requests ?",
      a: "Les Form Requests déplacent la validation dans une classe dédiée avec les méthodes rules() et authorize(). On les utilise quand la validation est complexe, réutilisée entre endpoints, ou nécessite une logique d'autorisation — les contrôleurs restent minces et la validation devient testable isolément."
    },
    {
      id: 129,
      topic: "Laravel",
      q: "Comment débogueriez-vous une page Laravel lente ?",
      a: "On commence par le journal de requêtes ou Laravel Debugbar pour trouver les requêtes N+1 et les index manquants. Puis on vérifie le travail répété non caché (utiliser cache()->remember), on active le cache des routes/config, et on utilise Telescope ou un profiler pour trouver le vrai goulot au lieu de deviner."
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
      id: 130,
      topic: "Php",
      q: "Que fait declare(strict_types=1), et pourquoi est-ce important ?",
      a: "Cela rend les types scalaires stricts dans ce fichier : passer un int là où une string est attendue lève une TypeError au lieu de convertir silencieusement la valeur. Cela détecte les erreurs de type tôt au lieu de laisser de mauvaises valeurs circuler dans le code."
    },
    {
      id: 131,
      topic: "Php",
      q: "Expliquez le système de types moderne de PHP : types scalaires, types nullables et types union.",
      a: "On peut typer les paramètres et retours avec des scalaires (int, string), les marquer nullables (?string) ou les combiner (int|string) avec les types union. Combiné à strict_types, les mauvaises valeurs lèvent immédiatement une TypeError, ce qui transforme beaucoup de bugs d'exécution en échecs instantanés et évidents."
    },
    {
      id: 132,
      topic: "Php",
      q: "Comment débogue-t-on la classique erreur « headers already sent » ?",
      a: "Cela signifie qu'une sortie a été envoyée avant l'appel à header() ou session_start(). On vérifie les espaces parasites ou un BOM avant la balise ouvrante <?php, ou des appels echo/print plus tôt dans le flux. En filet de sécurité, la temporisation de sortie (ob_start()) retient la sortie jusqu'à ce qu'on la vide."
    },
    {
      id: 133,
      topic: "Php",
      q: "Traits vs héritage vs interfaces en PHP — quand utiliser chacun ?",
      a: "L'héritage pour une vraie relation est-un, mais PHP n'autorise que l'héritage simple. Les traits partagent des implémentations de méthodes réutilisables horizontalement entre classes sans lien. Les interfaces définissent des contrats (signatures de méthodes) sans implémentation — on les utilise pour typer des capacités."
    },
    {
      id: 134,
      topic: "Php",
      q: "Comment OPcache améliore-t-il les performances de PHP ?",
      a: "Normalement PHP recompile chaque script en bytecode à chaque requête. OPcache met en cache ce bytecode compilé en mémoire partagée, donc les requêtes suivantes sautent entièrement l'analyse et la compilation — un gain de vitesse majeur sans changer une ligne de code."
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
      id: 140,
      topic: "Sql",
      q: "WHERE vs HAVING — quelle est la différence ?",
      a: "WHERE filtre les lignes individuelles avant le regroupement et l'agrégation ; HAVING filtre les groupes après l'agrégation. On ne peut pas utiliser de fonctions d'agrégation comme COUNT() dans WHERE, mais on le peut dans HAVING."
    },
    {
      id: 141,
      topic: "Sql",
      q: "Qu'est-ce qu'une transaction de base de données, et que signifie ACID ?",
      a: "Une transaction regroupe des instructions en une unité tout-ou-rien via BEGIN/COMMIT/ROLLBACK. ACID garantit : Atomicité (tout ou rien), Cohérence (d'un état valide à un état valide), Isolation (les transactions concurrentes n'interfèrent pas), Durabilité (les données validées survivent aux pannes)."
    },
    {
      id: 142,
      topic: "Sql",
      q: "Comment débogueriez-vous une requête SQL lente ?",
      a: "On exécute EXPLAIN pour voir le plan d'exécution : on cherche les scans complets de table, les index manquants et les nombres de lignes anormalement élevés. Corrections fréquentes : ajouter le bon index, éviter SELECT *, filtrer tôt avec WHERE, et réécrire les sous-requêtes corrélées en jointures."
    },
    {
      id: 143,
      topic: "Sql",
      q: "Sous-requête vs JOIN — quand choisir l'un plutôt que l'autre ?",
      a: "On utilise les JOINs pour combiner des données liées de plusieurs tables — l'optimiseur les gère généralement bien. On utilise les sous-requêtes pour les tests d'existence (WHERE EXISTS), les recherches scalaires, ou quand la logique se lit plus clairement comme un filtre imbriqué. On mesure avec EXPLAIN quand la performance compte."
    },
    {
      id: 144,
      topic: "Sql",
      q: "Que sont les fonctions de fenêtrage ? Donnez un exemple.",
      a: "Les fonctions de fenêtrage calculent des valeurs sur un ensemble de lignes liées à la ligne courante sans les fusionner en une seule ligne. Exemple : ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) classe les employés au sein de chaque département tout en gardant chaque ligne."
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
      id: 145,
      topic: "MongoDb",
      q: "Qu'est-ce que le pipeline d'agrégation, et quand est-il meilleur que find() ?",
      a: "Le pipeline d'agrégation enchaîne des étapes ($match, $group, $sort, $project) pour transformer les données côté serveur. Il est meilleur que find() pour l'analytique — comptages, moyennes, regroupements — car le gros du travail se fait dans la base plutôt que dans le code applicatif."
    },
    {
      id: 146,
      topic: "MongoDb",
      q: "Comment garde-t-on la cohérence des données entre documents sans jointures ?",
      a: "On conçoit le schéma autour des patterns de lecture : on embarque les données lues ensemble pour qu'une seule écriture de document soit atomique. Quand plusieurs documents doivent changer ensemble, on utilise les transactions multi-documents (disponibles depuis MongoDB 4.0) pour des garanties ACID."
    },
    {
      id: 147,
      topic: "MongoDb",
      q: "Replica sets vs sharding — quel problème chacun résout-il ?",
      a: "Les replica sets résolvent la haute disponibilité : plusieurs copies des données avec bascule automatique si le primaire tombe. Le sharding résout la scalabilité : il partitionne les données sur plusieurs serveurs pour qu'un jeu de données trop gros pour une machine puisse continuer à croître."
    },
    {
      id: 148,
      topic: "MongoDb",
      q: "Comment débogueriez-vous une requête MongoDB lente ?",
      a: "On exécute explain('executionStats') et on vérifie si le plan gagnant utilise un index (IXSCAN) ou scanne toute la collection (COLLSCAN). Un COLLSCAN signifie généralement un index manquant ou inadapté ; on vérifie aussi le nombre de documents examinés vs retournés — un gros écart signale une requête inefficace."
    },
    {
      id: 149,
      topic: "MongoDb",
      q: "Que sont les index TTL et les collections capped, et quand sont-ils utiles ?",
      a: "Les index TTL suppriment automatiquement les documents après un délai — idéals pour les sessions, tokens et logs temporaires. Les collections capped ont une taille fixe et conservent l'ordre d'insertion en écrasant les données les plus anciennes — utiles pour des logs à fort débit où seules les entrées récentes comptent."
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
      id: 150,
      topic: "Git",
      q: "Qu'est-ce que git stash, et quand l'utiliserait-on ?",
      a: "Stash met temporairement de côté les changements non committés pour changer de branche avec un arbre propre, puis les restaure avec git stash pop. On l'utilise quand on doit passer à un correctif urgent ou récupérer des mises à jour sans committer un travail à moitié fini."
    },
    {
      id: 151,
      topic: "Git",
      q: "Comment trouve-t-on quel commit a introduit un bug ?",
      a: "Avec git bisect : on marque le commit actuel comme mauvais et un commit plus ancien connu comme bon, puis Git fait une recherche dichotomique sur l'intervalle — on teste chaque point médian et on le marque bon ou mauvais jusqu'à isoler le commit exact qui a introduit le bug."
    },
    {
      id: 152,
      topic: "Git",
      q: "Que sont les tags Git, et quand les utiliserait-on ?",
      a: "Les tags marquent des points précis de l'historique, typiquement les releases (v1.2.0). Les tags annotés stockent un message, une date et un auteur et sont destinés aux releases publiques ; les tags légers sont de simples pointeurs. Les pipelines CI déclenchent souvent les déploiements à partir des tags."
    },
    {
      id: 153,
      topic: "Git",
      q: "Quand ferait-on un cherry-pick plutôt qu'un merge ?",
      a: "Le cherry-pick applique un commit précis sur une autre branche sans tout fusionner. On l'utilise pour porter un correctif urgent de main vers une branche de release, ou pour récupérer un seul correctif sans ramener les changements non liés d'un merge complet."
    },
    {
      id: 154,
      topic: "Git",
      q: "Comment garde-t-on les secrets hors d'un dépôt, et que faire si l'un fuite ?",
      a: "Ne jamais committer de secrets : les garder dans des variables d'environnement ou un gestionnaire de secrets, et lister les fichiers sensibles dans .gitignore. En cas de fuite, le renouveler immédiatement — le considérer comme compromis — puis le purger de l'historique (git filter-repo) et révoquer l'ancien identifiant ; supprimer le fichier seul ne suffit pas."
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
    },
    {
      id: 155,
      topic: "Docker",
      q: "Qu'est-ce qu'un build multi-stage, et pourquoi en utiliser un ?",
      a: "Un Dockerfile avec plusieurs étapes FROM : la première construit l'app avec compilateurs et outils de dev, l'étape finale ne copie que les artefacts construits dans une image d'exécution allégée. Le résultat est une image de production bien plus petite et plus sûre, sans outils de build à l'intérieur."
    },
    {
      id: 156,
      topic: "Docker",
      q: "Comment les conteneurs communiquent-ils entre eux, et comment un conteneur expose-t-il un port à l'hôte ?",
      a: "Les conteneurs sur le même réseau défini par l'utilisateur se joignent par nom de conteneur ou de service comme nom d'hôte — pas besoin d'IPs codées en dur. Pour exposer un port à l'hôte, on le publie avec -p hôte:conteneur (ex. -p 8080:3000) ; sans publication, le port n'est joignable que depuis le réseau."
    },
    {
      id: 157,
      topic: "Docker",
      q: "Un conteneur plante immédiatement au démarrage. Comment le débogue-t-on ?",
      a: "On lit la sortie avec docker logs — l'erreur s'y trouve généralement. Si les logs sont vides, on remplace l'entrypoint pour démarrer un shell à la place (docker run --entrypoint sh) et on inspecte manuellement le système de fichiers, les variables d'environnement et la commande défaillante. On vérifie aussi le code de sortie, qui indique souvent la cause."
    },
    {
      id: 158,
      topic: "Docker",
      q: "Comment passe-t-on la configuration et les secrets aux conteneurs en sécurité ?",
      a: "On passe la config non sensible via variables d'environnement ou fichiers de config montés, et les secrets via un vrai mécanisme de secrets (secrets Docker Swarm, ou un coffre injecté à l'exécution). Ne jamais intégrer de secrets dans l'image avec ENV dans le Dockerfile — quiconque a l'image peut les extraire."
    },
    {
      id: 159,
      topic: "Docker",
      q: "Quelle est la différence entre CMD et ENTRYPOINT dans un Dockerfile ?",
      a: "ENTRYPOINT définit l'exécutable fixe qui tourne toujours au démarrage du conteneur ; CMD fournit les arguments par défaut, qu'on peut surcharger au docker run. Ensemble ils forment la commande complète — un pattern courant est ENTRYPOINT ['node'] avec CMD ['server.js']."
    },
    {
      id: 160,
      topic: "Supabase",
      q: "Qu'est-ce que Supabase, et en quoi diffère-t-il de Firebase ?",
      a: "Supabase est un backend-as-a-service open-source construit sur Postgres : on dispose d'une vraie base relationnelle avec SQL, alors que Firebase repose sur des bases NoSQL. Supabase est aussi auto-hébergeable et offre les extensions Postgres, Row Level Security et l'outillage SQL standard."
    },
    {
      id: 161,
      topic: "Supabase",
      q: "Comment initialiser le client Supabase dans une app JavaScript ?",
      a: "On importe createClient depuis @supabase/supabase-js et on l'appelle avec l'URL du projet et la clé anon, généralement lues depuis les variables d'environnement comme import.meta.env.VITE_SUPABASE_URL. Le client est ensuite réutilisé dans toute l'app pour les requêtes, l'auth, le stockage et le realtime."
    },
    {
      id: 162,
      topic: "Supabase",
      q: "Expliquez Row Level Security et comment limiter les utilisateurs à leurs propres lignes.",
      a: "RLS est une fonctionnalité Postgres qui filtre les lignes visibles par une requête, appliquée par la base elle-même. On l'active sur la table et on écrit une politique comme using (auth.uid() = user_id) pour le SELECT : même si le code client est trafiqué, l'utilisateur ne lit que ses propres lignes."
    },
    {
      id: 163,
      topic: "Supabase",
      q: "Quelle est la différence entre la clé anon et la clé service_role ?",
      a: "La clé anon est publique et utilisable dans le frontend car chaque requête passe par les politiques RLS. La clé service_role contourne entièrement RLS et ne doit vivre que sur un serveur de confiance — l'exposer dans le navigateur donne à quiconque un accès total à la base."
    },
    {
      id: 164,
      topic: "Supabase",
      q: "Comment fonctionnent les abonnements realtime dans Supabase ?",
      a: "On ouvre un canal avec supabase.channel(), on attache un écouteur postgres_changes pour un événement, un schéma et une table, puis on appelle .subscribe(). Postgres notifie Supabase du changement via la réplication logique et le payload est poussé aux clients — mais la table doit être dans la publication supabase_realtime et les politiques RLS doivent autoriser la lecture."
    },
    {
      id: 165,
      topic: "Supabase",
      q: "Comment gérer les uploads de fichiers, et les fichiers publics vs privés ?",
      a: "On utilise supabase.storage.from('bucket').upload(path, file) pour les uploads, en protégeant les écrasements avec l'option upsert. Les buckets publics servent les fichiers via getPublicUrl() ; les buckets privés exigent des URL signées à durée limitée via createSignedUrl(), et l'accès aux deux est régi par des politiques RLS sur storage.objects."
    },
    {
      id: 166,
      topic: "Supabase",
      q: "Que fait supabase.auth.getUser() différemment de la lecture de la session ?",
      a: "getUser() re-valide le JWT auprès du serveur Supabase Auth : un token falsifié ou révoqué est donc rejeté. Lire la session depuis localStorage fait confiance à ce qui y est stocké, d'où l'intérêt de préférer getUser() — ou un contrôle côté serveur — pour les vérifications sensibles."
    },
    {
      id: 167,
      topic: "Supabase",
      q: "Comment appeler de la logique côté serveur — fonctions Postgres vs Edge Functions ?",
      a: "On utilise supabase.rpc('nom_fn', params) pour appeler une fonction Postgres quand la logique vit près des données, idéalement en SECURITY DEFINER avec un search_path fixé. On utilise supabase.functions.invoke('nom-fn', { body }) pour les Edge Functions — des endpoints serverless basés sur Deno — quand il faut des API externes, des secrets ou du travail non-SQL."
    },
    {
      id: 168,
      topic: "Supabase",
      q: "Une requête ne retourne aucune ligne alors que des données existent. Comment déboguer ?",
      a: "D'abord vérifier RLS : activé sans politiques, il refuse tout — on contrôle donc les politiques actives et que l'utilisateur est bien authentifié. Ensuite on vérifie les filtres (.eq, .or), que la table est dans le bon schéma, et on inspecte l'objet error — les erreurs PostgREST nomment généralement la cause exacte."
    },
    {
      id: 169,
      topic: "Supabase",
      q: "Comment modéliser une requête de relation un-à-plusieurs dans supabase-js ?",
      a: "Avec l'imbrication de table étrangère : .select('id, title, profiles ( username )') suit la clé étrangère et imbrique la ligne liée. Cela fonctionne quand la contrainte de clé étrangère existe, et on peut descendre sur plusieurs niveaux ou imbriquer dans le sens inverse."
    },
    {
          id: 170,
          topic: "ExpressJs",
          q: "Qu'est-ce qu'un middleware en Express et comment fonctionne la chaîne de middlewares ?",
          a: "Les middlewares sont des fonctions ayant accès à req, res et next, exécutées dans l'ordre d'enregistrement. Chacun termine le cycle requête-réponse ou appelle next() pour passer le contrôle au suivant ; c'est ainsi qu'Express gère le logging, l'authentification, l'analyse et le routage."
        },
        {
          id: 171,
          topic: "ExpressJs",
          q: "Comment gérez-vous les erreurs dans une application Express ?",
          a: "On définit un middleware de gestion d'erreur à quatre paramètres (err, req, res, next) enregistré après toutes les routes, et on transmet les erreurs avec next(err) ou en les levant dans les gestionnaires synchrones. En Express 4, les rejets async doivent être attrapés manuellement avec try/catch et passés à next(err)."
        },
        {
          id: 172,
          topic: "ExpressJs",
          q: "Expliquez la différence entre req.params, req.query et req.body.",
          a: "req.params contient les segments du chemin comme /users/:id, req.query contient les paires ?clé=valeur de l'URL pour le filtrage et la pagination, et req.body contient le payload analysé des requêtes POST/PUT (disponible uniquement après un middleware d'analyse comme express.json())."
        },
        {
          id: 173,
          topic: "ExpressJs",
          q: "Qu'est-ce que express.Router() et quand l'utiliser ?",
          a: "express.Router() crée un mini-routeur isolé pour regrouper des routes liées avec leurs propres middlewares. On le monte avec app.use('/api', router) pour que toutes ses routes partagent le préfixe /api, ce qui garde les grosses applications modulaires."
        },
        {
          id: 174,
          topic: "ExpressJs",
          q: "Comment l'ordre d'enregistrement des middlewares affecte-t-il le traitement des requêtes ?",
          a: "Express traite middlewares et routes strictement dans l'ordre d'enregistrement : l'analyse du corps doit venir avant les routes, l'attrape-tout 404 après toutes les routes, et les gestionnaires d'erreur en dernier. Un attrape-tout ou un gestionnaire d'erreur mal placé avalera silencieusement des routes ou ne s'exécutera jamais."
        },
        {
          id: 175,
          topic: "ExpressJs",
          q: "Comment servir des fichiers statiques et analyser les corps de requête en Express ?",
          a: "On sert les assets statiques avec app.use(express.static('public')), et on analyse les corps avec express.json() pour le JSON et express.urlencoded() pour les formulaires HTML — les deux intégrés depuis Express 4.16, remplaçant l'ancien paquet body-parser."
        },
        {
          id: 176,
          topic: "ExpressJs",
          q: "Quelle est la différence entre next(), next('route') et next('router') ?",
          a: "next() passe le contrôle au middleware ou gestionnaire suivant de la chaîne, next('route') saute les gestionnaires restants de la route courante et passe à la prochaine route correspondante, et next('router') quitte entièrement le routeur courant pour continuer avec les middlewares situés après lui."
        },
        {
          id: 177,
          topic: "ExpressJs",
          q: "Comment protégeriez-vous une API Express avec des mesures de sécurité de base ?",
          a: "J'utiliserais helmet pour des en-têtes HTTP sécurisés, cors pour contrôler l'accès cross-origin, express-rate-limit contre le brute-force, je validerais toutes les entrées au lieu de faire confiance à req.body, et je ne révélerais jamais err.stack aux clients en production."
        },
        {
          id: 178,
          topic: "ExpressJs",
          q: "En conception d'API REST, quelle est la différence entre paramètres de route et query strings ?",
          a: "Les paramètres de route identifient une ressource précise, comme /users/42, tandis que les query strings modifient la façon dont une collection est renvoyée — filtrage, tri, pagination — comme /users?role=admin&page=2. Les params sont des segments de chemin requis ; les valeurs de requête sont optionnelles et Express convertit les répétitions en tableaux."
        },
        {
          id: 179,
          topic: "ExpressJs",
          q: "Comment structurer une application Express prête pour la production (config, arrêt, env) ?",
          a: "Je lis la configuration depuis les variables d'environnement avec des valeurs par défaut raisonnables comme process.env.PORT || 3000, je garde les routes dans des routeurs montés, je centralise la gestion d'erreurs, et j'arrête proprement avec server.close() pour laisser finir les requêtes en cours. Les secrets ne vont jamais dans le code, et les stack traces sont journalisées côté serveur, pas envoyées aux clients."
        },
    { id: 180, topic: "Agile", q: "Quels sont les trois rôles Scrum et de quoi chacun est-il responsable ?", a: "Le Product Owner possède le Product Backlog et maximise la valeur en l'ordonnant. Le Scrum Master sert l'équipe en levant les obstacles et en la coachant sur Scrum. Les développeurs construisent l'incrément à chaque sprint et décident comment réaliser le travail." },
    { id: 181, topic: "Agile", q: "Expliquez les cinq événements Scrum et le but de chacun.", a: "La planification de sprint fixe l'objectif et le plan ; le Daily Standup est une synchro d'équipe de 15 minutes ; la revue de sprint inspecte l'incrément avec les parties prenantes pour recueillir leurs retours ; la rétrospective examine le processus pour l'améliorer ; le sprint lui-même est l'événement conteneur, typiquement de 1 à 4 semaines." },
    { id: 182, topic: "Agile", q: "Qu'est-ce qu'une user story, et qu'est-ce qui en fait une bonne ?", a: "Une user story est un besoin court exprimé du point de vue de l'utilisateur : « En tant que [rôle], je veux [objectif], afin de [bénéfice] ». Une bonne story respecte les critères INVEST — Indépendante, Négociable, Valable, Estimable, Petite, Testable — et a des critères d'acceptation clairs." },
    { id: 183, topic: "Agile", q: "Quelle est la différence entre la Definition of Done et les critères d'acceptation ?", a: "Les critères d'acceptation sont des conditions propres à une story pour qu'elle soit acceptée. La Definition of Done est une checklist qualité partagée (testé, relu, documenté) qui s'applique à chaque incrément produit par l'équipe." },
    { id: 184, topic: "Agile", q: "Qu'est-ce que la vélocité, et comment doit-on (et ne doit-on pas) l'utiliser ?", a: "La vélocité est la quantité de travail, généralement en story points, qu'une équipe termine par sprint. Elle sert à prévoir la capacité. Elle ne doit jamais servir à comparer des équipes ni à juger des individus, car les estimations sont relatives à chaque équipe." },
    { id: 185, topic: "Agile", q: "Une partie prenante exige un changement en plein sprint. Comment gérez-vous cela ?", a: "On protège l'objectif du sprint : la nouvelle demande va dans le Product Backlog, où le Product Owner la priorise pour un sprint ultérieur. Seul le Product Owner peut annuler un sprint, et uniquement quand son objectif devient obsolète." },
    { id: 186, topic: "Agile", q: "Quelle est la différence entre Scrum et Kanban ?", a: "Scrum fonctionne en sprints de durée fixe avec des rôles et des cérémonies définis, estime en points et mesure la vélocité. Kanban est un système de flux continu avec un tableau visuel, des limites WIP, sans rôles ni timeboxes imposés — le travail est tiré dès qu'une capacité se libère." },
    { id: 187, topic: "Agile", q: "Comment les équipes agiles estiment-elles le travail, et pourquoi des story points plutôt que des heures ?", a: "Les équipes utilisent des techniques d'estimation relative comme le Planning Poker. Les story points expriment une taille et une complexité relatives, ce qui évite la fausse précision et les longs débats sur les heures exactes, et garde les estimations stables quel que soit l'exécutant." },
    { id: 188, topic: "Agile", q: "Qu'est-ce que la dette technique, et comment l'agilité la traite-t-elle ?", a: "La dette technique est le coût futur des raccourcis pris aujourd'hui — tests sautés, design bâclé. L'agilité la traite via une Definition of Done exigeante avec qualité intégrée, un rythme soutenable, du refactoring dans le travail normal, et en rendant la dette visible dans le backlog." },
    { id: 189, topic: "Agile", q: "Que signifie « l'adaptation au changement plutôt que le suivi d'un plan » en pratique ?", a: "Cela signifie planifier à horizon court avec des boucles de retour : le court terme est détaillé, le long terme reste grossier. Quand on apprend quelque chose de nouveau — via une revue, une rétro ou le marché — on repriorise le backlog au lieu de s'accrocher à un plan dépassé." },
    { id: 190, topic: "MaterialUi", q: "Qu'est-ce que la prop sx et en quoi diffère-t-elle de la prop style ?", a: "La prop sx est le raccourci de style de MUI : elle accepte des valeurs liées au thème comme color: 'primary.main', des espacements abrégés (p, mt), des objets de breakpoints responsives et des sélecteurs imbriqués comme '&:hover'. Contrairement à style, elle résout les valeurs via le thème et génère des classes Emotion optimisées." },
    { id: 191, topic: "MaterialUi", q: "Comment personnaliser le thème MUI pour toute une application ?", a: "Utilisez createTheme() pour surcharger palette, typography, spacing et breakpoints, puis fournissez-le via <ThemeProvider>. Pour des réglages par composant, utilisez la section components du thème avec styleOverrides et defaultProps, par ex. components: { MuiButton: { defaultProps: { variant: 'contained' } } }." },
    { id: 192, topic: "MaterialUi", q: "Quand faut-il utiliser styled() plutôt que la prop sx ?", a: "Utilisez sx pour des styles ponctuels sur un seul élément. Utilisez styled() pour des composants réutilisables ou des styles dépendant de props, et définissez toujours les composants styled en dehors de la fonction de rendu pour ne pas les recréer à chaque render." },
    { id: 193, topic: "MaterialUi", q: "Comment fonctionne le responsive design dans MUI ?", a: "La prop sx accepte des objets de breakpoints comme display: { xs: 'none', md: 'block' }, les helpers theme.breakpoints.up/down() construisent des media queries, et le hook useMediaQuery retourne un booléen. Les breakpoints par défaut sont xs 0, sm 600, md 900, lg 1200, xl 1536." },
    { id: 194, topic: "MaterialUi", q: "Comment implémenter le mode sombre dans une application MUI ?", a: "Créez le thème avec createTheme({ palette: { mode: 'dark' } }), gardez le mode dans un state, mémorisez le thème avec useMemo et passez-le à ThemeProvider. Les composants s'adaptent automatiquement s'ils utilisent des tokens liés au thème comme bgcolor: 'background.paper'." },
    { id: 195, topic: "MaterialUi", q: "Expliquez le système de grille (Grid) de MUI.", a: "Grid est une mise en page flexbox à 12 colonnes : un conteneur enveloppe des éléments dont la largeur est définie par breakpoint (xs, md, ...). En v5 on écrit <Grid item xs={12} md={6}> ; en v6 avec Grid v2, la prop item est remplacée par size={{ xs: 12, md: 6 }}. La prop spacing est implémentée avec une marge négative compensatrice sur le conteneur et du padding sur les éléments." },
    { id: 196, topic: "MaterialUi", q: "Que sont les slots et comment personnaliser une sous-partie d'un composant comme TextField ?", a: "Les composants MUI sont composés de slots nommés (root, input, htmlInput, ...). En v6 on personnalise un slot via la prop slotProps, par ex. <TextField slotProps={{ htmlInput: { placeholder: 'Search' } }} /> pour définir un placeholder sur l'input natif." },
    { id: 197, topic: "MaterialUi", q: "Comment fonctionnent les composants contrôlés comme Dialog, Menu et Tabs dans MUI ?", a: "Ils ne gèrent pas eux-mêmes leur état d'ouverture ou de sélection. Le parent détient l'état (booléen open, élément anchorEl, valeur sélectionnée) et le transmet avec des gestionnaires comme onClose ou onChange — rien ne s'ouvre ni ne change tant que le parent ne met pas à jour cet état." },
    { id: 198, topic: "MaterialUi", q: "Comment empêcher une prop de style personnalisée de fuir vers le DOM avec styled() ?", a: "Passez l'option shouldForwardProp, par ex. styled(Button, { shouldForwardProp: (prop) => prop !== 'danger' })(...). Cela filtre la prop pour que React ne voie jamais un attribut DOM inconnu et qu'aucun avertissement ne soit affiché." },
    { id: 199, topic: "MaterialUi", q: "Comment appliquer des couleurs de marque et une variante de bouton personnalisée à toute l'application ?", a: "Définissez la palette de marque et la typographie dans createTheme(), enregistrez la variante sous components.MuiButton.variants avec ses props et son style (ou styleOverrides pour le slot root), puis enveloppez l'application dans <ThemeProvider theme={theme}> avec <CssBaseline /> à la racine." },
    { id: 200, topic: "Gsap", q: "Quelle est la différence entre gsap.to(), gsap.from() et gsap.fromTo() ?", a: "gsap.to() anime depuis les valeurs actuelles de l'élément vers les valeurs données, gsap.from() anime depuis les valeurs données vers les valeurs actuelles, et gsap.fromTo() définit explicitement le début et la fin. Utilisez fromTo quand vous avez besoin d'un point de départ garanti, quelles que soient les animations précédentes." },
    { id: 201, topic: "Gsap", q: "Comment fonctionnent les timelines et que sont les paramètres de position ?", a: "Une timeline (gsap.timeline()) enchaîne les tweens pour qu'ils se jouent en séquence par défaut. Les paramètres de position comme « < », « > », « -=0.5 » ou un temps absolu contrôlent exactement le démarrage de chaque tween, permettant de chevaucher, synchroniser ou espacer les animations avec précision." },
    { id: 202, topic: "Gsap", q: "Expliquez repeat, yoyo et repeatDelay.", a: "repeat rejoue un tween un nombre défini de fois (-1 pour l'infini), yoyo fait jouer chaque répétition à l'envers pour un va-et-vient, et repeatDelay insère une pause entre les répétitions. yoyo n'a d'effet que si repeat est défini." },
    { id: 203, topic: "Gsap", q: "Qu'est-ce que ScrollTrigger et comment le configure-t-on ?", a: "ScrollTrigger est un plugin GSAP qui déclenche des animations selon la position du défilement. Après gsap.registerPlugin(ScrollTrigger), on passe une config scrollTrigger avec un élément déclencheur, des positions start/end comme « top 80% », et des options comme scrub pour lier la progression à la barre de défilement ou toggleActions pour contrôler le comportement lecture/inversion." },
    { id: 204, topic: "Gsap", q: "Quel est le pattern recommandé pour utiliser GSAP dans un composant React ?", a: "Lancez les animations dans useLayoutEffect (appliquées avant le paint, sans flash), limitez les sélecteurs avec gsap.context(() => {...}, ref), et retournez () => ctx.revert() comme nettoyage. Cela détruit aussi les ScrollTriggers au démontage et survit à la double exécution des effets de StrictMode en développement." },
    { id: 205, topic: "Gsap", q: "Comment empêcher deux tweens de se disputer la même propriété ?", a: "Utilisez overwrite: « auto » sur le nouveau tween pour tuer immédiatement uniquement les parties en conflit des anciens tweens sur les mêmes cibles, ou appelez gsap.killTweensOf(cible) avant de démarrer l'animation de remplacement." },
    { id: 206, topic: "Gsap", q: "Quelle est la différence entre delay et une position de timeline, et quand utiliser stagger ?", a: "delay retarde le démarrage d'un seul tween, tandis que les positions de timeline planifient les tweens les uns par rapport aux autres. stagger sert à animer plusieurs cibles avec le même tween en décalant automatiquement le démarrage de chacune — idéal pour les listes et les grilles." },
    { id: 207, topic: "Gsap", q: "Comment faire suivre la souris à une animation en douceur, sans saccades ?", a: "Utilisez gsap.quickTo(), qui crée un tween réutilisable par propriété, appelable à chaque mousemove. Créer un nouveau gsap.to() par événement mousemove générerait des centaines de tweens en conflit et nuirait aux performances." },
    { id: 208, topic: "Gsap", q: "À quoi servent les valeurs fonctionnelles (function-based values) et invalidateOnRefresh ?", a: "Les valeurs fonctionnelles comme x: () => window.innerWidth / 2 sont évaluées au premier rendu du tween et s'adaptent donc à la mise en page. Avec ScrollTrigger, invalidateOnRefresh: true les réévalue au refresh (par ex. après un redimensionnement) pour garder des animations de scroll correctes." },
    { id: 209, topic: "Gsap", q: "Comment construiriez-vous des animations de scroll responsives qui ne tournent que sur desktop ?", a: "Avec gsap.matchMedia() : mm.add(\"(min-width: 768px)\", () => { ... }) crée les ScrollTriggers desktop, et GSAP les annule et nettoie automatiquement quand la media query ne correspond plus — sans écouteurs de resize manuels." },
    {
          id: 210,
          topic: "Convex",
          q: "Quelle est la différence entre une query, une mutation et une action dans Convex ?",
          a: "Les queries sont des fonctions déterministes en lecture seule dont les résultats se synchronisent de façon réactive avec les clients. Les mutations modifient les données et s'exécutent comme des transactions atomiques (tout est validé ou rien ne l'est). Les actions peuvent appeler des API tierces et exécuter du code non déterministe, mais elles ne peuvent pas toucher ctx.db directement — elles lisent et écrivent via ctx.runQuery et ctx.runMutation."
        },
        {
          id: 211,
          topic: "Convex",
          q: "Comment fonctionne le temps réel dans Convex ?",
          a: "useQuery s'abonne au résultat d'une query ; dès qu'une écriture modifie des données dont cette query dépend, Convex pousse le nouveau résultat et React re-rend automatiquement. Aucun polling ni code websocket manuel côté client."
        },
        {
          id: 212,
          topic: "Convex",
          q: "Comment définit-on un schéma et des index dans Convex ?",
          a: "Dans convex/schema.ts avec defineSchema et defineTable de 'convex/server', et des validateurs de champs de 'convex/values'. On chaîne .index('by_user', ['userId']) sur une table, puis on l'interroge avec .withIndex('by_user', q => q.eq('userId', id)) pour des recherches rapides au lieu de scans complets."
        },
        {
          id: 213,
          topic: "Convex",
          q: "Comment gère-t-on l'authentification et l'autorisation dans les fonctions Convex ?",
          a: "On appelle await ctx.auth.getUserIdentity() — elle retourne l'identité connectée ou null en anonyme. On utilise identity.subject comme ID utilisateur stable : on le stocke sur les documents (p. ex. userId) et on le vérifie avant lectures/écritures pour limiter les données à leur propriétaire."
        },
        {
          id: 214,
          topic: "Convex",
          q: "Comment pagine-t-on de gros résultats dans Convex ?",
          a: "On accepte paginationOptsValidator de 'convex/server' en argument et on retourne ctx.db.query('posts').order('desc').paginate(args.paginationOpts). Ça retourne { page, continueCursor, isDone }, et le client renvoie continueCursor pour charger la page suivante."
        },
        {
          id: 215,
          topic: "Convex",
          q: "Comment stocke-t-on et sert-on des fichiers avec Convex ?",
          a: "Depuis une mutation, on appelle ctx.storage.generateUploadUrl() puis on POSTe le fichier vers cette URL côté client, ou ctx.storage.store(blob) côté serveur — les deux donnent un ID de stockage. Dans une query, on le convertit en URL affichable avec ctx.storage.getUrl(storageId), et on le supprime avec ctx.storage.delete(storageId)."
        },
        {
          id: 216,
          topic: "Convex",
          q: "Comment exécute-t-on du code planifié dans Convex ?",
          a: "Pour des exécutions différées uniques, on utilise ctx.scheduler.runAfter ou runAt dans une mutation ou une action, en ciblant une fonction interne. Pour les tâches récurrentes, on définit convex/crons.ts avec cronJobs() et crons.interval('nom', { hours: 1 }, internal.jobs.cleanup)."
        },
        {
          id: 217,
          topic: "Convex",
          q: "Quand utiliser internalQuery, internalMutation ou internalAction ?",
          a: "Quand une fonction ne doit jamais être appelable depuis le client — par exemple un nettoyage admin déclenché par le planificateur ou un cron. Les fonctions internes ne sont accessibles que depuis le code backend, ce qui protège les opérations privilégiées."
        },
        {
          id: 218,
          topic: "Convex",
          q: "Quelles garanties les mutations Convex offrent-elles en cas d'écritures concurrentes ?",
          a: "Les mutations sont des transactions ACID : soit toutes les écritures sont validées, soit aucune. Si deux mutations entrent en conflit sur le même document, l'une commit et l'autre est automatiquement réessayée avec des données fraîches — du contrôle de concurrence optimiste, sans verrous à écrire soi-même."
        },
        {
          id: 219,
          topic: "Convex",
          q: "Comment exposer un endpoint HTTP public, comme un webhook Stripe, dans Convex ?",
          a: "On définit une httpAction et on l'enregistre sur un httpRouter dans convex/http.ts avec un chemin et une méthode. Le handler ne peut toujours pas utiliser ctx.db directement, donc il délègue le travail base de données à des queries et mutations internes."
        },
    { id: 220, topic: "Clerk", q: "Qu'est-ce que Clerk, et pourquoi le choisir plutôt que de construire l'authentification soi-même ?", a: "Clerk est une plateforme complète d'authentification et de gestion des utilisateurs : UI de connexion/inscription préconstruite, gestion des sessions, MFA, OAuth social, organisations et rôles. Le construire soi-même signifie assumer le hachage des mots de passe, la sécurité des sessions, les emails et la conformité — Clerk élimine ce risque et se déploie en quelques heures." },
    { id: 221, topic: "Clerk", q: "Comment protéger une page dans une SPA React avec Clerk ?", a: "Envelopper l'app dans <ClerkProvider>, puis garder la route avec useAuth() : attendre isLoaded, rediriger vers /sign-in si non connecté, ou rendre conditionnellement avec <SignedIn>/<SignedOut>. Ne jamais se fier au seul masquage UI — l'API doit aussi vérifier le token." },
    { id: 222, topic: "Clerk", q: "Quelle est la différence entre useUser() et useAuth() ?", a: "useUser() retourne la ressource utilisateur complète (profil, emails, isLoaded, isSignedIn). useAuth() retourne un état d'auth léger et des helpers — userId, sessionId, getToken, signOut — sans récupérer tout l'objet utilisateur, donc moins coûteux pour les gardes et les appels API." },
    { id: 223, topic: "Clerk", q: "Comment votre backend vérifie-t-il une requête d'un utilisateur authentifié via Clerk ?", a: "Le frontend appelle getToken() et envoie le JWT en token Bearer. Le backend valide la signature avec les clés Clerk via verifyToken/clerkClient et la clé secrète (ou clerkMiddleware), puis fait confiance au userId contenu — jamais à un userId envoyé en clair." },
    { id: 224, topic: "Clerk", q: "Expliquez les webhooks Clerk et comment les sécuriser.", a: "Clerk envoie par POST des événements comme user.created vers votre endpoint pour synchroniser votre base. Il faut vérifier les en-têtes svix-id / svix-timestamp / svix-signature avec la classe Svix Webhook et votre secret de signature, sur le corps brut de la requête, avant tout traitement — et rendre les gestionnaires idempotents car les événements peuvent être relivrés." },
    { id: 225, topic: "Clerk", q: "Comment fonctionnent les organisations et les rôles dans Clerk ?", a: "Les organisations regroupent les utilisateurs pour le SaaS B2B, avec des rôles intégrés comme org:admin et org:member plus des rôles et permissions personnalisés. Dans l'UI on utilise <OrganizationSwitcher/> et useOrganization() ; pour les vérifications, has({ role: 'org:admin' }) ou has({ permission: '...' }) depuis useAuth()." },
    { id: 226, topic: "Clerk", q: "Quelle est la différence entre la clé publique et la clé secrète ?", a: "La clé publique (pk_...) identifie votre application et peut figurer dans le code frontend. La clé secrète (sk_...) donne un accès complet à l'API Backend et doit rester côté serveur uniquement — l'exposer permet à n'importe qui de gérer vos utilisateurs." },
    { id: 227, topic: "Clerk", q: "Comment imposer l'authentification dans le middleware Next.js avec Clerk ?", a: "Utiliser clerkMiddleware() de @clerk/nextjs/server, définir les routes publiques vs protégées avec createRouteMatcher(), et appeler auth().protect() (ou vérifier auth()) dans le middleware pour bloquer ou rediriger les requêtes non authentifiées avant qu'elles n'atteignent la page." },
    { id: 228, topic: "Clerk", q: "Que se passe-t-il si la clé publique est manquante ou invalide ?", a: "ClerkProvider lève une erreur « Missing publishableKey » et l'état d'auth ne se résout jamais — useUser()/useAuth() restent en chargement. La correction est de passer la bonne clé pk_test_/pk_live_, car chaque appel Clerk est rattaché à cette instance d'application." },
    { id: 229, topic: "Clerk", q: "Comment migrer des utilisateurs existants vers Clerk ?", a: "Utiliser l'API Backend pour importer les utilisateurs en masse, en fournissant leurs hash de mots de passe existants (ex. bcrypt) pour qu'ils gardent leurs mots de passe, et stocker vos anciens IDs comme IDs externes pour mapper les enregistrements. Alternativement, inviter les utilisateurs à définir un nouveau mot de passe via le flux d'invitation." },
    { id: 230, topic: "Postman", q: "Qu'est-ce que Postman et pourquoi les développeurs l'utilisent-ils ?", a: "Postman est un client API pour construire, tester et documenter les API. Il permet d'envoyer des requêtes HTTP, d'inspecter les réponses, d'automatiser les suites de tests et de partager des collections avec l'équipe." },
    { id: 231, topic: "Postman", q: "Expliquez les environnements et les variables dans Postman.", a: "Un environnement est un ensemble nommé de paires clé-valeur (dev, staging, prod) entre lesquels on bascule sans modifier les requêtes. Les variables s'utilisent avec la syntaxe {{nom}} et peuvent contenir des secrets dans leur valeur courante locale." },
    { id: 232, topic: "Postman", q: "Comment enchaîner des requêtes entre elles ?", a: "Dans l'onglet Tests de la première requête, on extrait une valeur de la réponse avec pm.environment.set(), puis on la réutilise comme {{variable}} dans la requête suivante — typiquement un jeton d'authentification issu du login." },
    { id: 233, topic: "Postman", q: "À quoi servent les scripts de pré-requête ?", a: "Ils s'exécutent avant l'envoi de la requête. Usages courants : définir des variables dynamiques, générer des horodatages ou des signatures HMAC, et récupérer un jeton frais avec pm.sendRequest()." },
    { id: 234, topic: "Postman", q: "Comment écrire des assertions dans les tests Postman ?", a: "Avec pm.test(), qui regroupe les assertions sur la réponse : pm.response.to.have.status(200) pour les codes de statut, ou pm.expect() avec les matchers Chai pour valider le corps JSON." },
    { id: 235, topic: "Postman", q: "Qu'est-ce que Newman et quel est son rôle dans le CI/CD ?", a: "Newman est l'exécuteur en ligne de commande des collections Postman. On lance newman run collection.json -e env.json dans le pipeline, et son code de sortie fait échouer le build dès qu'un test échoue." },
    { id: 236, topic: "Postman", q: "Que sont les serveurs mock et quand les utiliser ?", a: "Les serveurs mock simulent des endpoints en retournant des exemples de réponses enregistrés. On les utilise pour que le développement frontend avance avant que le vrai backend soit prêt." },
    { id: 237, topic: "Postman", q: "Expliquez la hiérarchie des portées de variables.", a: "Quand une variable existe dans plusieurs portées, la plus restreinte gagne : local > data > environment > collection > global." },
    { id: 238, topic: "Postman", q: "Comment gérer l'authentification dans Postman ?", a: "Via l'onglet Authorization : Bearer Token, Basic Auth, API Key ou OAuth 2.0 avec le bouton « Get New Access Token ». Définir l'auth au niveau de la collection avec « Inherit auth from parent » l'applique à toutes les requêtes." },
    { id: 239, topic: "Postman", q: "Que sont les Monitors Postman ?", a: "Des exécutions planifiées d'une collection depuis le cloud Postman, avec tableau de bord et alertes en cas d'échec — idéal pour surveiller en continu la santé d'une API en production." },
    { id: 240, topic: "NextJs", q: "Expliquez la différence entre Server Components et Client Components, et quand utiliser chacun.", a: "Les Server Components sont rendus sur le serveur, peuvent être async, et gardent les secrets et le code lourd hors du bundle client — utilisez-les pour le fetching de données et l'UI statique. Les Client Components (\"use client\") sont rendus dans le navigateur et débloquent les hooks, les événements et les APIs du navigateur — utilisez-les pour l'interactivité." },
    { id: 241, topic: "NextJs", q: "En quoi le fetching de données dans l'App Router diffère-t-il de getServerSideProps dans l'ancien Pages Router ?", a: "Dans l'App Router on fetch directement dans des Server Components async avec l'API fetch étendue (cache, revalidation, tags) au lieu d'un export getServerSideProps séparé. Le fetching est colocalisé avec le composant et chaque fetch peut avoir sa propre politique de cache." },
    { id: 242, topic: "NextJs", q: "Expliquez l'ISR et quand le choisir plutôt que le SSR.", a: "L'ISR génère une page statiquement une fois puis la reconstruit en arrière-plan au plus toutes les N secondes (export const revalidate = N). Choisissez-le quand les données changent peu souvent — vous avez la vitesse du statique pour la plupart des visiteurs sans reconstruire à chaque requête comme le SSR." },
    { id: 243, topic: "NextJs", q: "Votre app lève une erreur d'hydratation en production. Quelles sont les causes fréquentes et comment les corriger ?", a: "Causes fréquentes : afficher des valeurs qui diffèrent entre serveur et client (Date.now(), Math.random(), formatage de locale) ou des APIs réservées au navigateur pendant le SSR. Corrigez en n'affichant la partie non déterministe que côté client (garde useEffect/useState), ou utilisez suppressHydrationWarning pour du contenu intentionnellement différent." },
    { id: 244, topic: "NextJs", q: "Comment fonctionnent les Server Actions, et quelle erreur de sécurité faut-il éviter avec elles ?", a: "Une fonction \"use server\" s'exécute sur le serveur mais est appelable depuis le code client ou l'action d'un formulaire ; Next.js crée un endpoint sécurisé pour elle. Ne faites jamais confiance au client : validez et autorisez toujours à l'intérieur de l'action, car n'importe qui peut invoquer l'endpoint directement." },
    { id: 245, topic: "NextJs", q: "À quoi sert le middleware, et quelle est sa principale limitation ?", a: "Le middleware s'exécute avant qu'une requête ne se termine pour les vérifications d'auth, les redirections, les rewrites, les tests A/B et la manipulation de headers selon le matcher. Sa limitation est l'Edge Runtime : pas d'APIs réservées à Node.js (fs, child_process), donc restez léger et rapide." },
    { id: 246, topic: "NextJs", q: "Les utilisateurs voient des données périmées après une mise à jour. Comment débuggez-vous et corrigez-vous cela dans Next.js ?", a: "Vérifiez la politique de cache du fetch : le défaut est force-cache. Corrigez avec la revalidation à la demande (revalidatePath/revalidateTag après la mutation), l'invalidation par tags pour les données partagées, ou cache: 'no-store' / force-dynamic pour des données vraiment en direct." },
    { id: 247, topic: "NextJs", q: "Comment le streaming avec Suspense améliore-t-il la performance, et en quoi diffère-t-il d'un simple spinner de chargement ?", a: "Le streaming envoie immédiatement la coquille de la page et chaque limite Suspense se remplit dès que ses données sont résolues, donc les utilisateurs voient le contenu progressivement. Un spinner unique bloque tout jusqu'à l'arrivée de toutes les données ; Suspense laisse les parties rapides s'afficher pendant que les lentes arrivent en streaming." },
    { id: 248, topic: "NextJs", q: "Quel est le compromis de output: 'export' pour un site entièrement statique ?", a: "Vous obtenez du HTML statique portable hébergeable partout, mais vous perdez toutes les fonctionnalités serveur : pas de middleware, pas d'ISR, pas de rendu dynamique, pas de Route Handlers au runtime, et les Server Actions ne peuvent pas tourner sans serveur." },
    { id: 249, topic: "NextJs", q: "Comment construiriez-vous un formulaire avec une Server Action qui semble instantané, avec un état de chargement ?", a: "Branchez l'action du formulaire à la Server Action (marche sans JS via progressive enhancement), utilisez useFormStatus dans un composant enfant pour désactiver le bouton et afficher un spinner en cours, et optionnellement useOptimistic pour une mise à jour UI instantanée avant la réponse du serveur." },
    { id: 250, topic: "Bootstrap", q: "Qu'est-ce que Bootstrap, et quand le choisiriez-vous plutôt que d'écrire du CSS personnalisé ?", a: "Bootstrap est un framework CSS avec une grille responsive, des composants prêts à l'emploi et des classes utilitaires. Je le choisirais pour la rapidité — panneaux d'administration, MVP, prototypes — quand un système de design éprouvé et cohérent compte plus qu'une identité visuelle unique." },
    { id: 251, topic: "Bootstrap", q: "Expliquez le système de grille de Bootstrap. Que signifie réellement « 12 colonnes » ?", a: "Chaque .row est divisée en 12 colonnes égales ; des classes comme col-6 prennent une fraction de ce total (6/12 = la moitié). Les colonnes doivent se trouver dans une .row elle-même dans un .container, et les largeurs sont en pourcentages donc elles s'adaptent au viewport." },
    { id: 252, topic: "Bootstrap", q: "Que signifie « mobile-first » pour les breakpoints de Bootstrap ?", a: "Les classes de breakpoint sont en min-width : col-md-6 s'applique à partir de 768px et au-delà. On conçoit d'abord les styles de base (mobile), puis on ajoute des classes de breakpoint pour enrichir la mise en page sur les écrans plus grands." },
    { id: 253, topic: "Bootstrap", q: "Le fond d'une modale apparaît mais la boîte de dialogue semble cassée ou sans style. Comment débuggez-vous ?", a: "Vérifiez l'imbrication requise : .modal > .modal-dialog > .modal-content. Un .modal-dialog ou .modal-content manquant casse le positionnement et le style. Vérifiez aussi que le bundle JS de Bootstrap est chargé et que data-bs-target correspond à l'id de la modale." },
    { id: 254, topic: "Bootstrap", q: "Bootstrap vs Tailwind CSS — quels sont les compromis ?", a: "Bootstrap fournit des composants stylés prêts à l'emploi, donc on livre vite avec un look cohérent, mais les sites peuvent sembler génériques et surcharger les styles peut combattre le framework. Tailwind donne un contrôle total du design via des utilitaires mais on construit chaque composant soi-même. Choisissez Bootstrap pour la rapidité et les conventions, Tailwind pour des systèmes de design sur mesure." },
    { id: 255, topic: "Bootstrap", q: "Comment personnaliseriez-vous la couleur primaire de Bootstrap dans un vrai projet ?", a: "Deux façons : avec Sass, surchargez $primary (ou $theme-colors) avant d'importer Bootstrap puis recompilez ; sans Sass, surchargez la variable CSS --bs-primary à l'exécution. Ne modifiez jamais directement le fichier bootstrap.min.css compilé." },
    { id: 256, topic: "Bootstrap", q: "Pourquoi les infobulles de Bootstrap 5 ne fonctionnent-elles pas avec le seul data-bs-toggle='tooltip' ?", a: "Contrairement à la plupart des composants, les infobulles et popovers sont opt-in pour des raisons de performance : Bootstrap 5 exige une initialisation JavaScript explicite, par ex. new bootstrap.Tooltip(el) pour chaque élément, car les initialiser partout par défaut coûterait cher." },
    { id: 257, topic: "Bootstrap", q: "Construisez une mise en page responsive : barre latérale après le contenu sur mobile, à gauche du contenu sur desktop. Comment ?", a: "Placez la barre latérale en deuxième dans le HTML, donnez au contenu et à la barre latérale des largeurs col-12 col-lg-*, et ajoutez order-lg-first à la barre latérale pour qu'elle passe visuellement en premier sur grands écrans tout en restant après le contenu sur mobile." },
    { id: 258, topic: "Bootstrap", q: "Quels sont les principaux changements cassants lors de la migration de Bootstrap 4 à 5 ?", a: "jQuery a été supprimé — tous les plugins sont en JS natif. Les attributs data ont été renommés de data-* vers data-bs-*. Les classes d'espacement ml-*/mr-* sont devenues ms-*/me-* (propriétés logiques), les champs custom-file sont devenus form-control, et le support d'Internet Explorer a été abandonné." },
    { id: 259, topic: "Bootstrap", q: "Comment garder l'empreinte CSS de Bootstrap réduite en production ?", a: "Importez uniquement les modules Sass que vous utilisez au lieu du bundle complet, ou lancez PurgeCSS au build pour supprimer les classes inutilisées. Préférez aussi les fichiers minifiés et évitez de charger à la fois les copies CDN et npm." },
    ]
  }
];
