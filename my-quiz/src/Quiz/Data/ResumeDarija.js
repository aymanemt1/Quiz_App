// Condensed Darija (Latin script) cheat-sheet per stack.
// resumeDarijaData[topic] = [{ t: section title, b: [bullets] }]
export const resumeDarijaData = {
  React: [
    { t: "Achno howa", b: [
      "React library dyal JavaScript bach tbni UI mn components.",
      "Component = function katrje3 JSX, smiya b capital letter.",
      "JSX = HTML wast JavaScript, walakin className machi class.",
    ]},
    { t: "State w Props", b: [
      "Props: data jaya mn parent, read-only, ma tbdlhach.",
      "State: data dyal component b useState, mli ttbdl kat re-renderi.",
      "Dima new value f setState: setItems([...items, x]) — bla push nichan.",
    ]},
    { t: "useEffect", b: [
      "L side effects: fetch, timers, subscriptions.",
      "[] = mra we7da, [x] = mli x ttbdl, bla array = kol render.",
      "Cleanup: rje3 function bach tms7 timer/subscription.",
    ]},
    { t: "Ghalat cha2i3in", b: [
      "Keys f lists: dima key unique w stable (id, machi index).",
      "State async: setCount(count+1) moraha count mazal 9dim — sta3ml function form.",
      "Conditional render: && w ternary, rdd balk mn 0 li kaybyn.",
    ]},
  ],
  Javascript: [
    { t: "Asasiyat", b: [
      "let/const (block scope) blast var (function scope, hoisting).",
      "== kay9arn b coercion, === bla coercion — dima ===.",
      "Truthy/falsy: 0, '', null, undefined, NaN = falsy.",
    ]},
    { t: "Functions w Arrays", b: [
      "Arrow functions ma 3ndhomch this dyalhom.",
      "map katrje3 array jdida, forEach la — ma tnsach return f map.",
      "filter, find, reduce, some/every: lmost 3amalin bzaf.",
      "Destructuring w spread: const {a} = obj; [...arr, x].",
    ]},
    { t: "Async", b: [
      "Event loop: call stack, task queue, microtasks (promises 9bel).",
      "async/await = syntax 7elwa l promises; try/catch l errors.",
      "Promise.all l parallel, Promise.allSettled mli wa7ed y9dr yfaili.",
    ]},
    { t: "Ghalat cha2i3in", b: [
      "this day3 f callbacks — sta3ml arrow wla bind.",
      "Closure f loop b var: kolhom kayakhdo akhir value — 7el b let.",
      "JSON.parse kayrmi error mli string machi valid — try/catch.",
    ]},
  ],
  Typescript: [
    { t: "Achno howa", b: [
      "JavaScript + types. Katktb types, compiler kay7ydhom f build.",
      "Fayda: errors f wa9t lktaba machi f runtime.",
    ]},
    { t: "Types mohimin", b: [
      "interface l objects, type l unions: type ID = string | number.",
      "Generics: function identity<T>(x: T): T — reusable b type safe.",
      "unknown a7san mn any: khask tchecki 9bel ma tsta3mlo.",
      "Optional: name?: string. Non-null: value! (sta3mlo b7adar).",
    ]},
    { t: "Narrowing", b: [
      "typeof, instanceof, in — kaydy9o type wast if.",
      "Discriminated unions: field mochtarak b7al kind: 'a' | 'b'.",
      "never l exhaustive checks f switch.",
    ]},
    { t: "Ghalat cha2i3in", b: [
      "any kat7yd l fayda kamla — 7ydha b unknown w guards.",
      "Enums 3adiyin kayzido code f build — const object + union a7san.",
    ]},
  ],
  VueJs: [
    { t: "Achno howa", b: [
      "Framework progressive: template + script + style f .vue file.",
      "Reactivity automatique b ref() w reactive().",
    ]},
    { t: "Template", b: [
      "{{ }} l interpolation, v-bind (:) l attributes, v-on (@) l events.",
      "v-if/v-else, v-for (dima :key), v-model l two-way binding.",
      "v-show = display none, v-if = kay7yd mn DOM.",
    ]},
    { t: "Composition API", b: [
      "ref(.value f script), reactive l objects.",
      "computed l derived values (cached), watch l side effects.",
      "Lifecycle: onMounted l fetch/DOM, onUnmounted l cleanup.",
    ]},
    { t: "Ghalat cha2i3in", b: [
      "nsit .value 3la ref wast script = bug saket.",
      "v-for bla :key = warnings w bugs f reorder.",
    ]},
  ],
  Html: [
    { t: "Asasiyat", b: [
      "Semantic tags: header, nav, main, section, article, footer.",
      "Form: label marbout b input (for/id), required, type=email...",
      "img dima alt, button type=submit wla button.",
    ]},
    { t: "Mohim l SEO w Accessibilité", b: [
      "Wa7ed h1 f page, headings b tartib.",
      "Meta description + title wad7in.",
      "Contrast w keyboard navigation l accessibility.",
    ]},
    { t: "Ghalat cha2i3in", b: [
      "div-itis: sta3ml semantic tags blast divs.",
      "a bla href wla button wast a — ghaltin.",
    ]},
  ],
  Css: [
    { t: "Asasiyat", b: [
      "Box model: content, padding, border, margin. box-sizing: border-box.",
      "Specificity: id > class > element. !important akhir 7el.",
      "Cascade: lakher kayrbe7 f nafs specificity.",
    ]},
    { t: "Layout", b: [
      "Flexbox: row/column wa7ed — justify (main), align (cross).",
      "Grid: joj dimensions — template areas l layouts.",
      "Position: static, relative, absolute (9rib positioned parent), fixed, sticky.",
    ]},
    { t: "Responsive", b: [
      "Mobile-first: base sghir, min-width media queries lkbir.",
      "Units: rem l fonts, %, vw/vh, clamp() l fluid.",
    ]},
    { t: "Ghalat cha2i3in", b: [
      "Margin collapse bin blocks — 7sabha.",
      "z-index khdam ghir m3a positioned elements.",
    ]},
  ],
  Tailwind: [
    { t: "Achno howa", b: [
      "Utility-first CSS: classes sghar f HTML blast ma tktb CSS.",
      "JIT: ghir classes li sta3mlti kaytgeneraw.",
    ]},
    { t: "Mohim", b: [
      "Responsive: md:, lg: prefixes. State: hover:, focus:, dark:.",
      "Spacing scale: p-4, m-2, gap-6 — consistent.",
      "@apply l patterns li kat3awd (b7adar).",
    ]},
    { t: "Ghalat cha2i3in", b: [
      "Dynamic classes b template strings ma kayt detectedch f build.",
      "Kter mn custom CSS = ghalt l fikra — rje3 l config.",
    ]},
  ],
  NodeJs: [
    { t: "Achno howa", b: [
      "JavaScript f server b V8. Event-driven, non-blocking I/O.",
      "Wa7ed thread l JS + thread pool l I/O — parfait l APIs w realtime.",
    ]},
    { t: "Modules w NPM", b: [
      "CommonJS (require) wla ESM (import) — khtar wa7ed.",
      "package.json: dependencies vs devDependencies.",
      "npx khatdem package bla install.",
    ]},
    { t: "Async patterns", b: [
      "Callbacks → promises → async/await.",
      "Error-first callbacks f APIs 9dam.",
      "EventEmitter: on/emit l events custom.",
    ]},
    { t: "Ghalat cha2i3in", b: [
      "Blocking l event loop b loops t9al = kolchi kay7bes.",
      "nsit await = promise ma tkmelch w errors day3in.",
    ]},
  ],
  RestApi: [
    { t: "Mabadi2", b: [
      "Resources b URLs (nouns): /users/42, machi /getUser.",
      "Verbs: GET read, POST create, PUT/PATCH update, DELETE remove.",
      "Stateless: kol request fiha kolchi (token f header).",
    ]},
    { t: "Status codes", b: [
      "200 OK, 201 Created, 204 No content.",
      "400 bad request, 401 unauthorized, 403 forbidden, 404 not found.",
      "500 server error — ma tsiftch stack trace l client.",
    ]},
    { t: "Design mzyan", b: [
      "Pagination: ?page=2&limit=20. Filtering/sorting f query.",
      "Versioning: /api/v1. Errors b format wa7ed.",
      "Idempotency: PUT/DELETE y9dro yt3awdo bla mochkil.",
    ]},
  ],
  Laravel: [
    { t: "Achno howa", b: [
      "Framework PHP: MVC, Eloquent ORM, Blade templates.",
      "Convention over configuration — bzaf jahz.",
    ]},
    { t: "Routing w Controllers", b: [
      "routes/web.php w api.php. Route::get('/x', [C::class, 'm']).",
      "Resource controllers: index, store, show, update, destroy.",
      "Middleware l auth, validation f FormRequest.",
    ]},
    { t: "Eloquent", b: [
      "Model = table. Relationships: hasMany, belongsTo...",
      "Eager loading b with() bach t7arb N+1.",
      "Migrations = version control dyal database.",
    ]},
    { t: "Ghalat cha2i3in", b: [
      "N+1 queries: loop kaydir query kol mrra — with() howa l7el.",
      "Logic t9ila f controllers — siro l services/actions.",
    ]},
  ],
  Php: [
    { t: "Asasiyat", b: [
      "$ l variables. Types: string, int, float, bool, array.",
      "== vs === b7al JS — dima ===.",
      "Superglobals: $_GET, $_POST, $_SERVER, $_SESSION.",
    ]},
    { t: "Arrays w Functions", b: [
      "Arrays associative: ['name' => 'Aymane'].",
      "array_map, array_filter, array_reduce.",
      "Null coalescing: $x = $y ?? 'default'.",
    ]},
    { t: "OOP", b: [
      "Classes, interfaces, traits (code sharing bla heritage).",
      "Type hints f params w return — 7ssen l code.",
      "Composer = npm dyal PHP.",
    ]},
  ],
  Sql: [
    { t: "Asasiyat", b: [
      "SELECT ... FROM ... WHERE ... ORDER BY ... LIMIT.",
      "JOINs: INNER (match bjoj), LEFT (kolchi mn left).",
      "GROUP BY + HAVING (filter 3la groups) vs WHERE (9bel group).",
    ]},
    { t: "Modifications", b: [
      "INSERT, UPDATE (dima WHERE!), DELETE (dima WHERE!).",
      "Transactions: kolchi wla walo.",
    ]},
    { t: "Performance", b: [
      "Index 3la columns dyal WHERE/JOIN.",
      "EXPLAIN 9bel ma t optimizi — 9iyas machi tkhmin.",
      "Bla SELECT * f production.",
    ]},
  ],
  MongoDb: [
    { t: "Achno howa", b: [
      "NoSQL: documents (JSON-like) f collections, bla schema fixed.",
      "Parfait mli data flexible w katbdl bzaf.",
    ]},
    { t: "CRUD", b: [
      "db.users.find({age: {$gt: 18}}), insertOne, updateOne, deleteOne.",
      "Operators: $gt, $in, $and, $or, $set.",
    ]},
    { t: "Mongoose", b: [
      "Schema = blueprint, Model = tool dyal CRUD.",
      "Validation f schema, populate() blast JOIN.",
    ]},
    { t: "Ghalat cha2i3in", b: [
      "Embed vs reference: data li katji bjoj → embed, kbira/most9ila → reference.",
    ]},
  ],
  Mysql: [
    { t: "Asasiyat", b: [
      "InnoDB = default: transactions, foreign keys, row locks.",
      "AUTO_INCREMENT l ids, VARCHAR b limit m39ol.",
      "SHOW TABLES, DESCRIBE users l exploration.",
    ]},
    { t: "Procedures w Functions", b: [
      "Procedure: CALL, IN/OUT params, ma katrje3ch value.",
      "Function: RETURN value wa7da, tsta3ml wast SELECT.",
      "DELIMITER // 7it body fih ';'.",
    ]},
    { t: "Triggers w Transactions", b: [
      "BEFORE l validation/modif, AFTER l audit.",
      "NEW/OLD f triggers. START TRANSACTION → COMMIT/ROLLBACK.",
      "Backup: mysqldump db > backup.sql.",
    ]},
  ],
  Git: [
    { t: "Workflow", b: [
      "branch mn main → commits sghar → push → pull request → review → merge.",
      "Commit messages: imperative w 9sir: 'Add login validation'.",
      "Pull 9bel ma tbda khedma jdida.",
    ]},
    { t: "Commands mohimin", b: [
      "git stash: khebi changes bla commit. git stash pop: rj3hom.",
      "git reset --soft HEAD~1: rje3 commit lakher bla ma tmseh changes.",
      "git revert: safe undo l pushed commits.",
      "git rebase: history linear — 7ram 3la shared branches.",
    ]},
    { t: "Ghalat cha2i3in", b: [
      "Secrets f git = catastrophe — .gitignore + env variables.",
      "Merge conflicts: 7el markers, khtar s7i7, commit.",
    ]},
  ],
  Docker: [
    { t: "Achno howa", b: [
      "Containers: isolated, khfaf (kaypartagiw kernel) — machi VMs.",
      "Dockerfile = instructions, Image = snapshot, Container = instance khdama.",
    ]},
    { t: "Mohim", b: [
      "Volumes: data persistent kharej lifecycle dyal container.",
      "Docker Compose: multi-container b file wa7ed.",
      "Multi-stage builds: image production sghira w secure.",
    ]},
    { t: "Ghalat cha2i3in", b: [
      "Bla volume = data katdi3 mli container ytmseh.",
      "Secrets f Dockerfile ENV = ay wa7ed 3ndo image ychofhom.",
    ]},
  ],
  Supabase: [
    { t: "Achno howa", b: [
      "Backend-as-a-service 3la Postgres 7qiqi (SQL).",
      "Auth, database, storage, realtime — kolchi jahz.",
    ]},
    { t: "RLS", b: [
      "Row Level Security: policies f database kat7mi data.",
      "auth.uid() = user_id → user ghir data dyalo.",
      "service_role key = ghir server, 7ram f browser.",
    ]},
    { t: "Ghalat cha2i3in", b: [
      "RLS enabled bla policies = kolchi blocked.",
      "ma tti9ch f session mn localStorage f checks sensitives — getUser().",
    ]},
  ],
  ExpressJs: [
    { t: "Achno howa", b: [
      "Framework Node l APIs. Middleware = (req, res, next) b tartib.",
    ]},
    { t: "Mohim", b: [
      "req.params /:id, req.query ?x=1, req.body (khas express.json()).",
      "Router() l grouper routes. Error middleware b 4 params lkher.",
      "Tartib: parsing → routes → 404 → errors.",
    ]},
    { t: "Ghalat cha2i3in", b: [
      "nsit next() = request kat7bes.",
      "Async errors f Express 4 khashom try/catch w next(err).",
    ]},
  ],
  Agile: [
    { t: "Scrum", b: [
      "PO: backlog w value. Scrum Master: y7yed impediments. Devs: ybniw.",
      "Events: Planning, Daily (15min), Review, Retro, Sprint (1-4 simanat).",
    ]},
    { t: "Mohim", b: [
      "User story: As a [role], I want [goal], so that [benefit].",
      "DoD = quality checklist l kolchi. Acceptance criteria = l story we7da.",
      "Velocity l forecasting — mamnou3 t9arn bih teams.",
    ]},
    { t: "Scrum vs Kanban", b: [
      "Scrum: sprints fixed m3a roles. Kanban: flow mostamir, WIP limits.",
    ]},
  ],
  MaterialUi: [
    { t: "Achno howa", b: [
      "React components b Material Design.",
      "sx prop: styling m3a theme values (primary.main).",
    ]},
    { t: "Mohim", b: [
      "createTheme + ThemeProvider l theme kamel.",
      "styled() l reusable, sx l one-off.",
      "Breakpoints: xs 0, sm 600, md 900, lg 1200, xl 1536.",
      "Dark mode: palette.mode: 'dark'.",
    ]},
    { t: "Ghalat cha2i3in", b: [
      "styled() dakhel render = kayt3awd kol render.",
      "Dialog/Menu controlled: parent 3ndo state.",
    ]},
  ],
  Gsap: [
    { t: "Achno howa", b: [
      "Animation library. to()/from()/fromTo().",
      "Timeline: tweens b tartib m3a position params.",
    ]},
    { t: "Mohim", b: [
      "ScrollTrigger: animations 3la 7sab scroll.",
      "React: useLayoutEffect + gsap.context + cleanup ctx.revert().",
      "quickTo() l mouse follow bla jank.",
      "matchMedia() l responsive animations.",
    ]},
    { t: "Ghalat cha2i3in", b: [
      "Tweens kaytna9so: overwrite: 'auto'.",
      "nsit cleanup = memory leaks w ScrollTriggers miytin.",
    ]},
  ],
  Convex: [
    { t: "Achno howa", b: [
      "Backend-as-a-service reactive: data kat sync bo7dha l client.",
    ]},
    { t: "Functions", b: [
      "Query = read-only reactive. Mutation = writes b transactions.",
      "Action = external APIs (ma katmsch db nichan).",
      "Scheduler/crons l jobs. internal* ghir l backend.",
    ]},
    { t: "Auth", b: [
      "ctx.auth.getUserIdentity() → identity wla null.",
      "7fed userId 3la documents w checki 9bel reads/writes.",
    ]},
  ],
  Clerk: [
    { t: "Achno howa", b: [
      "Auth kamla jahza: UI, sessions, MFA, OAuth, orgs.",
    ]},
    { t: "Mohim", b: [
      "ClerkProvider + useAuth()/useUser() l guards.",
      "Backend: verify JWT b Clerk keys — ma tti9ch f userId mn client.",
      "Webhooks: verify svix signature 9bel kolchi.",
      "sk_... ghir server — 7ram f browser.",
    ]},
  ],
  Postman: [
    { t: "Achno howa", b: [
      "API client: send requests, inspect responses, automate tests.",
    ]},
    { t: "Mohim", b: [
      "Environments: dev/staging/prod bla ma tbdl requests.",
      "Variables b {{name}}. Chaining: token mn login → requests lokhrin.",
      "pm.test() l assertions. Newman l CI/CD.",
      "Auth 3la collection + inherit l kol requests.",
    ]},
  ],
  NextJs: [
    { t: "Achno howa", b: [
      "React framework: SSR, SSG, ISR, routing jahz.",
    ]},
    { t: "App Router", b: [
      "Server Components: async, data fetching, bla JS l client.",
      "'use client': interactivity, hooks, events.",
      "fetch m3a cache: force-cache default, revalidate l fresh.",
    ]},
    { t: "Mohim", b: [
      "Server Actions: 'use server' — validi ldakhel dayman.",
      "Middleware: auth/redirects 9bel page (Edge runtime).",
      "ISR: revalidate = N l pages static li katbdl bchwiya.",
    ]},
    { t: "Ghalat cha2i3in", b: [
      "Hydration mismatch: Date.now()/Math.random f SSR.",
      "Stale data: revalidatePath mor mutation.",
    ]},
  ],
  Bootstrap: [
    { t: "Achno howa", b: [
      "CSS framework: grid + components wajdin. L speed (MVP, admin).",
    ]},
    { t: "Grid", b: [
      "12 columns: col-6 = nass. Mobile-first (min-width).",
      ".container > .row > .col — tartib lazem.",
    ]},
    { t: "Mohim", b: [
      "Customize: $primary f Sass wla --bs-primary variable.",
      "Tooltips khashom JS init explicit.",
      "v5: bla jQuery, data-bs-*, ms-/me-.",
    ]},
  ],
};

export const getResumeDarija = (topic) => resumeDarijaData[topic] || [];
export const RESUME_DARIJA_TOPICS = Object.keys(resumeDarijaData);
