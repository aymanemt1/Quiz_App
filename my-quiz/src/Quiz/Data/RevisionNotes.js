// Revision notes (cours): 25 per topic x 16 topics, EN + FR.
// note: { text, explain_dr } — explain_dr is a Darija (Latin script) hint.
export const revisionNotesData = [
  {
    lang: "EN",
    notes: {
  "React": [
    {
      "text": "React is a JavaScript library for building user interfaces from reusable components.",
      "explain_dr": "React howa library dyal JavaScript bach t-sna3 interfaces mn components tqdar t3awed tsta3malhum f bzaf dyal blayes.",
      "example": "function App() {\n  return <div><Header /><Footer /></div>; // reuse components\n}"
    },
    {
      "text": "Components are functions that return JSX; names must start with a capital letter.",
      "explain_dr": "Component howa ghir function kat-rja3 JSX, w lazem smito ybda b 7arf kbir bach React y3arfo.",
      "example": "function Welcome() {\n  return <h1>Hello!</h1>;\n}"
    },
    {
      "text": "Declare state with `useState()`. Renders re-run when state changes.",
      "explain_dr": "useState() bih kat-declari state, w ay mra state ytbedel, component kat-re-renderi.",
      "example": "const [count, setCount] = useState(0);"
    },
    {
      "text": "Never mutate state directly — always pass a new value: `setItems([...items, newItem])`.",
      "explain_dr": "Matsowebch state nichan — dayman 3ti value jdida, b7al spread operator, bach React y7ess b tabdil.",
      "example": "setItems([...items, newItem]); // new array, not items.push()"
    },
    {
      "text": "Run side effects (fetching, subscriptions, timers) inside `useEffect()`, with a dependency array.",
      "explain_dr": "useEffect() howa blassa dyal side effects b7al fetch w timers, w dependency array kat-golo imta y-t3awed.",
      "example": "useEffect(() => {\n  fetchUsers().then(setUsers);\n}, [userId]);"
    },
    {
      "text": "An empty dependency array `[]` makes the effect run once after mount.",
      "explain_dr": "ila khaliti [] khawya, effect ghadi ykhdem ghir mra wa7da melli component y-mounta.",
      "example": "useEffect(() => {\n  console.log(\"mounted once\");\n}, []);"
    },
    {
      "text": "Pass data down with props; props are read-only inside the child component.",
      "explain_dr": "Props kat-hbet mn parent l child, w child ma-yqdarsh ybeddelhum — ghir yqrahum.",
      "example": "function Child({ name }) {\n  return <p>Hello {name}</p>; // can read name, never change it\n}"
    },
    {
      "text": "Lift state up to the closest common parent when two components must share it.",
      "explain_dr": "ila joj components khasshum nafs state, tel3o l a9rab parent moshtarak binathum.",
      "example": "function Parent() {\n  const [shared, setShared] = useState(\"\");\n  return <><A value={shared} /><B onChange={setShared} /></>;\n}"
    },
    {
      "text": "Give list items a stable `key` prop so React can track them across re-renders.",
      "explain_dr": "key stable kat-3awn React y3ref chkon element li tbedel f list, bach ma y-re-renderish kolchi.",
      "example": "{users.map(u => <li key={u.id}>{u.name}</li>)}"
    },
    {
      "text": "A re-render happens when state or props change — avoid heavy work inline without `useMemo()`.",
      "explain_dr": "Re-render kat-w9e3 melli state wla props ytbedlo — 7seb 7wayj t9al b useMemo() bach ma t3awdsh t7sabhom.",
      "example": "const total = useMemo(\n  () => items.reduce((s, i) => s + i.price, 0),\n  [items]\n);"
    },
    {
      "text": "Don't store derived state — if it can be computed from props, compute it during render instead of syncing it with `useEffect()` + `setState()`.",
      "explain_dr": "ila state tqdar t7sabha mn props, ma t7ott-hach f state — 7sebha nichan f render, 7it effect + setState ghadi ydir lag.",
      "example": "const fullName = first + \" \" + last; // derived, no useState needed"
    },
    {
      "text": "A stale closure in `useEffect()` is the #1 timer bug: use the functional form `setCount(c => c + 1)` or include the value in the dependency array.",
      "explain_dr": "Stale closure: setTimeout wla event handler li khda state 9dim — st3mel setCount(c => c + 1) bach takhod akhir value.",
      "example": "setInterval(() => setCount(c => c + 1), 1000); // functional form"
    },
    {
      "text": "Always clean up effects: return a cleanup function from `useEffect()` to clear timers, abort fetches, and remove listeners.",
      "explain_dr": "useEffect lazem y-rja3 cleanup function bach t-ms7 timers w listeners, wla ghadi y-tstackew w y-dirou memory leaks.",
      "example": "useEffect(() => {\n  const id = setInterval(tick, 1000);\n  return () => clearInterval(id);\n}, []);"
    },
    {
      "text": "The functional update form `setCount(c => c + 1)` guarantees you work with the latest state, even with rapid successive updates.",
      "explain_dr": "Functional update setCount(c => c + 1) kat-garantir annak khdam b akhir state, wakha updates yjiw bzriba.",
      "example": "setCount(c => c + 1); // safe even for rapid successive updates"
    },
    {
      "text": "`useRef()` stores a mutable value that survives re-renders without triggering one — ideal for DOM nodes and previous values.",
      "explain_dr": "useRef b7al sandou9 kat-khebbi fih value li kat-b9a bin renders bla ma t-declenchi render.",
      "example": "const inputRef = useRef(null);\ninputRef.current.focus();"
    },
    {
      "text": "`useCallback()` and `useMemo()` only help if the child is memoized with `React.memo()` — otherwise they just add overhead.",
      "explain_dr": "useCallback w useMemo ma 3endhum ta faida ila child ma-kanetch memoized b React.memo — bla bih ghir overhead zayd.",
      "example": "const Child = React.memo(({ onClick }) =>\n  <button onClick={onClick}>Save</button>\n);"
    },
    {
      "text": "React 18 batches all state updates automatically; multiple `setState()` calls in one handler cause a single re-render.",
      "explain_dr": "React 18 kat-jme3 updates dyal state bo7dhum — bzaf dyal setState f nafs handler = ghir render wa7da.",
      "example": "function handleClick() {\n  setCount(c => c + 1);\n  setName(\"Aymane\"); // batched: one re-render total\n}"
    },
    {
      "text": "Props change identity on every render if you pass inline objects/arrays: `<Comp data={{ a: 1 }} />` breaks memoization — hoist them.",
      "explain_dr": "Objet inline f props b7al data={{a:1}} kat-tkhal9 reference jdida kol render — kharjo l barra bach memoization t-khdem.",
      "example": "const data = { a: 1 }; // defined once, outside the render\n<Comp data={data} />"
    },
    {
      "text": "Never call a component as a plain function (`Card()`) — its hooks will break. Always render it as JSX `<Card />`.",
      "explain_dr": "Ma-t3yetsh l component b7al function Card() — hooks ghadi y-tkherb9o. Dayman renderiha b7al JSX <Card />.",
      "example": "<Card /> // correct — hooks keep working\n// Card()  // wrong — hooks break"
    },
    {
      "text": "Conditional hooks (`if (ok) useState(...)`) break the Rules of Hooks — call hooks in the same order, top-level only.",
      "explain_dr": "Hooks khasshum y-t3eyto dayman b nafs tartib — if qbel useState ghadi y-heress rules dyal hooks.",
      "example": "const [data, setData] = useState(null); // always top-level\nif (data) { /* render logic goes here, hooks stay above */ }"
    },
    {
      "text": "Keys must be stable and unique — using the array index as `key` breaks reordering, animations, and input state.",
      "explain_dr": "Index dyal array b7al key ghir f lists static — f lists li kat-tbedel wla kat-t-reorder, key lazem tkon stable w unique.",
      "example": "<li key={todo.id}>{todo.text}</li> // not key={index}"
    },
    {
      "text": "`useReducer()` centralizes complex state logic in one function — cleaner than many `useState()` calls when updates interact.",
      "explain_dr": "useReducer howa l-7al melli state twelli m3a99da — kol logic dyal updates f blassa wa7da, n9iya kter mn bzaf dyal useState.",
      "example": "const [state, dispatch] = useReducer(reducer, { count: 0 });\ndispatch({ type: \"increment\" });"
    },
    {
      "text": "Error boundaries (`componentDidCatch`) are class-only — there is still no hook equivalent; use a class wrapper or a library.",
      "explain_dr": "Error boundaries ghir b classes — ma-kaynch hook equivalent, khassk class wrapper wla library.",
      "example": "class ErrorBoundary extends React.Component {\n  componentDidCatch(err) { this.setState({ hasError: true }); }\n}"
    },
    {
      "text": "Custom hooks must start with `use` (`useFetch`) so the linter and React DevTools recognize them as hooks.",
      "explain_dr": "Custom hook lazem smito ybda b 'use' bach linter w DevTools y3arfo annaho hook.",
      "example": "function useFetch(url) {\n  const [data, setData] = useState(null);\n  return data;\n}"
    },
    {
      "text": "`Suspense` + `lazy()` code-splits routes: `const Page = lazy(() => import('./Page'))` wrapped in `<Suspense fallback={...}>`.",
      "explain_dr": "lazy() + Suspense bach t-code-split: pages kat-t-loada ghir melli user y-7tajha, w fallback kat-ban f blast tsanna.",
      "example": "const Page = lazy(() => import(\"./Page\"));\n<Suspense fallback={<p>Loading...</p>}><Page /></Suspense>"
    }
  ],
  "Javascript": [
    {
      "text": "`let` allows reassignment, `const` does not; `var` is function-scoped and best avoided.",
      "explain_dr": "let kat-tbedel, const la; var function-scoped w 7ssen t-tjannbo.",
      "example": "let x = 1; x = 2; // reassignable\nconst y = 3;        // cannot reassign\n// var is function-scoped — avoid it"
    },
    {
      "text": "`===` compares value and type; `==` coerces types and is a common source of bugs.",
      "explain_dr": "=== kat-9aren value w type bjoj; == kat-dir coercion w kat-jib bugs.",
      "example": "1 === \"1\"; // false (value + type)\n1 == \"1\";  // true (type coercion)"
    },
    {
      "text": "Functions are first-class: they can be assigned, passed as arguments, and returned.",
      "explain_dr": "Functions f JS first-class — tqdar t-assigniha, t-passiha b7al argument, w t-rje3ha.",
      "example": "const run = (fn) => fn();\nrun(() => console.log(\"hi\"));"
    },
    {
      "text": "Arrow functions `() => {}` do not have their own `this`; they inherit it from the enclosing scope.",
      "explain_dr": "Arrow function ma-3endha-sh this dyalha — kat-wereth this mn scope li dayer biha.",
      "example": "button.addEventListener(\"click\", () => this.handle());\n// arrow has no own 'this' — inherits enclosing scope's"
    },
    {
      "text": "`null` means an intentionally empty value; `undefined` means a value was never assigned.",
      "explain_dr": "null = value khawya b niya; undefined = value ma-t3tatsh aslan.",
      "example": "let a = null; // intentionally empty\nlet b;        // undefined — never assigned"
    },
    {
      "text": "`map()`, `filter()`, and `reduce()` transform arrays without mutating them.",
      "explain_dr": "map/filter/reduce kat-bedlo arrays bla ma y-mutew l-asli.",
      "example": "const doubled = [1, 2, 3].map(n => n * 2);\nconst evens = [1, 2, 3, 4].filter(n => n % 2 === 0);\nconst sum = [1, 2, 3].reduce((s, n) => s + n, 0);"
    },
    {
      "text": "A closure is a function that remembers variables from the scope where it was created.",
      "explain_dr": "Closure: function kat-tfker variables mn scope li t-khel9at fih, wakha dak scope sala.",
      "example": "function counter() {\n  let n = 0;\n  return () => ++n; // remembers n after counter() finished\n}"
    },
    {
      "text": "`async/await` handles promises more readably than chained `.then()` calls.",
      "explain_dr": "async/await kat-khli code dyal promises wade7 kter mn .then() li m-chainin.",
      "example": "async function load() {\n  const res = await fetch(\"/api/users\");\n  return res.json();\n}"
    },
    {
      "text": "`JSON.parse()` converts a string to an object; `JSON.stringify()` converts an object to a string.",
      "explain_dr": "JSON.parse: string → object; JSON.stringify: object → string.",
      "example": "JSON.parse('{\"a\":1}');    // string -> object\nJSON.stringify({ a: 1 }); // object -> string"
    },
    {
      "text": "`typeof null` returns `\"object\"` — a well-known historical quirk of the language.",
      "explain_dr": "typeof null = 'object' — ghalta 9dima f language b9at l daba.",
      "example": "typeof null; // \"object\" — a historic quirk"
    },
    {
      "text": "`NaN !== NaN` — test with `Number.isNaN()`, never with equality; `Object.is()` handles `-0` and `NaN` correctly.",
      "explain_dr": "NaN ma-kay-sawich rasso — st3mel Number.isNaN() bach t-testi, w Object.is() l -0 w NaN.",
      "example": "NaN === NaN;       // false — never use equality\nNumber.isNaN(NaN); // true\nObject.is(-0, 0);  // false"
    },
    {
      "text": "Hoisting: `var` and function declarations move to the top; `let`/`const` sit in the temporal dead zone until their line runs.",
      "explain_dr": "Hoisting: var w function declarations kat-tl3o l fo9; let/const kay-b9aw f temporal dead zone 7ta y-wslo l line dyalhum.",
      "example": "console.log(a); // undefined — var is hoisted\nvar a = 1;\nconsole.log(b); // ReferenceError — let is in the TDZ\nlet b = 2;"
    },
    {
      "text": "Destructuring with defaults: `const { name = 'Aymane' } = user` — and rest/spread `...` copies shallowly, not deeply.",
      "explain_dr": "Destructuring m3a defaults: { name = 'Aymane' } — w spread ... kat-copy ghir surface, machi deep.",
      "example": "const { name = \"Aymane\" } = user; // default if missing\nconst copy = { ...user };           // shallow copy only"
    },
    {
      "text": "`||` falls back on any falsy value; `??` only on `null`/`undefined` — use `??` for defaults that allow `0` and `''`.",
      "explain_dr": "|| kat-rje3 l fallback 3la ay falsy; ?? ghir 3la null/undefined — st3mel ?? ila bghiti t-9bel 0 w ''.",
      "example": "0 || 10; // 10 — 0 is falsy\n0 ?? 10; // 0  — ?? only falls back on null/undefined"
    },
    {
      "text": "`Array.prototype` mutators (`push`, `splice`, `sort`) change the array in place; `slice`, `map`, `concat` return new arrays.",
      "explain_dr": "push/splice/sort kat-mutew array nichan; slice/map/concat kat-rj3o array jdida.",
      "example": "arr.push(4);           // mutates arr in place\nconst b = arr.slice(0, 2); // returns a new array"
    },
    {
      "text": "Event loop: `setTimeout` callbacks run after the current stack empties — even `setTimeout(fn, 0)` never runs immediately.",
      "explain_dr": "Event loop: setTimeout kat-tssena 7ta stack y-khwa — wakha 0ms, ma-kat-khdemsh nichan.",
      "example": "setTimeout(() => console.log(\"later\"), 0);\nconsole.log(\"now\"); // logs first, then \"later\"\n"
    },
    {
      "text": "Microtasks (promises) always run before macrotasks (timers): an awaited promise beats a `setTimeout(..., 0)`.",
      "explain_dr": "Microtasks (promises) dayman qbel macrotasks (timers) — awaited promise kat-sbe9 setTimeout(...,0).",
      "example": "setTimeout(() => console.log(\"timer\"), 0);\nPromise.resolve().then(() => console.log(\"promise\")); // logs first"
    },
    {
      "text": "Pass-by-value vs reference: primitives copy the value, objects copy the reference — mutating a passed object mutates the original.",
      "explain_dr": "Primitives kat-t-copya b value, objects b reference — ila beddelti object li t-passa, l-asli ghadi ytbedel.",
      "example": "function bump(o) { o.n++; }\nconst obj = { n: 1 };\nbump(obj); // obj.n is now 2 — the original was mutated"
    },
    {
      "text": "`Object.freeze()` only freezes the top level; nested objects stay mutable — freezing is shallow.",
      "explain_dr": "Object.freeze ghir l-fo9 — nested objects kay-b9aw mutable, freeze machi deep.",
      "example": "const o = Object.freeze({ nested: { a: 1 } });\no.nested.a = 2; // still works — only the top level is frozen"
    },
    {
      "text": "Spreading a string gives its characters: `[...'abc']` → `['a','b','c']`; iterables only — plain objects are not iterable.",
      "explain_dr": "Spread dyal string kat-3ti characters: [...'abc']; ghir iterables — plain object machi iterable.",
      "example": "[...\"abc\"]; // [\"a\", \"b\", \"c\"]"
    },
    {
      "text": "`Promise.all()` rejects on the first failure; `Promise.allSettled()` waits for all and reports each outcome.",
      "explain_dr": "Promise.all kat-fail 3la awel wa7da; allSettled kat-tsenna kolchi w kat-3tik natija dyal kol wa7da.",
      "example": "Promise.all([p1, p2]);        // rejects on the first failure\nPromise.allSettled([p1, p2]); // waits for all, reports each outcome"
    },
    {
      "text": "`for...of` iterates values of an iterable; `for...in` iterates enumerable keys — use `of` for arrays, `in` for objects.",
      "explain_dr": "for...of l values dyal iterable; for...in l keys — of l arrays, in l objects.",
      "example": "for (const v of [1, 2]) {}   // values of an iterable\nfor (const k in { a: 1 }) {} // keys of an object"
    },
    {
      "text": "An `async` function always returns a promise, even if you `return 5` — it resolves with `5`.",
      "explain_dr": "async function dayman kat-rje3 promise — wakha t-dir return 5, kat-resolvi b 5.",
      "example": "async function f() { return 5; }\nf().then(v => console.log(v)); // 5"
    },
    {
      "text": "`this` inside a regular method depends on the call site: `obj.method()` works, but `const f = obj.method; f()` loses `this`.",
      "explain_dr": "this f method 3adiya 3la 7sab kifach 3eyeti liha: obj.method() ok, walakin const f = obj.method; f() kat-daye3 this.",
      "example": "obj.method();            // this = obj\nconst f = obj.method;\nf(); // this is lost (undefined)"
    },
    {
      "text": "Optional chaining `user?.address?.city` short-circuits to `undefined`; combine with `??` for safe defaults: `user?.age ?? 18`.",
      "explain_dr": "user?.address?.city kat-rje3 undefined ila chi wa7da ma-kaynach — zidi ?? bach t-3ti default: user?.age ?? 18.",
      "example": "const city = user?.address?.city; // undefined if any link is missing\nconst age = user?.age ?? 18;        // safe default"
    }
  ],
  "Typescript": [
    {
      "text": "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
      "explain_dr": "TypeScript howa JavaScript zayd 3lih types, w kat-tcompila l JavaScript 3adi.",
      "example": "let name: string = \"Aymane\"; // type annotation, compiles to plain JS"
    },
    {
      "text": "Static types catch bugs at compile time before the code ever runs.",
      "explain_dr": "Types static kat-cheddo bugs f wa9t compilation, 9bel ma code y-khdem.",
      "example": "function add(a: number, b: number) { return a + b; }\nadd(1, \"2\"); // compile-time error — caught before running"
    },
    {
      "text": "Declare types with `type` aliases or `interface` definitions: `interface User { name: string; age: number }`.",
      "explain_dr": "type w interface bach t-declari shapes: interface User { name: string; age: number }.",
      "example": "interface User { name: string; age: number }\nconst u: User = { name: \"Aymane\", age: 24 };"
    },
    {
      "text": "Annotate variables, params, and return values: `function add(a: number, b: number): number`.",
      "explain_dr": "Annoti variables, params, w return: function add(a: number, b: number): number.",
      "example": "function add(a: number, b: number): number {\n  return a + b;\n}"
    },
    {
      "text": "`string | number` is a union type — the value may be either type.",
      "explain_dr": "string | number = union — value tqdar tkon wa7da mn joj.",
      "example": "let id: string | number;\nid = \"abc\"; // ok\nid = 42;    // ok"
    },
    {
      "text": "Generics like `Array<T>` let you write reusable, type-safe code: `function first<T>(arr: T[]): T`.",
      "explain_dr": "Generics Array<T> kat-khlik t-kteb code reusable w type-safe.",
      "example": "function first<T>(arr: T[]): T {\n  return arr[0];\n}\nfirst<number>([1, 2, 3]);"
    },
    {
      "text": "Use `type` for unions and intersections; use `interface` when you plan to extend objects.",
      "explain_dr": "type l unions w intersections; interface melli ghadi t-extendi objects.",
      "example": "type Status = \"ok\" | \"error\";             // union -> type\ninterface Admin extends User { role: string } // extension -> interface"
    },
    {
      "text": "The `unknown` type is the type-safe alternative to `any` — you must narrow it before use.",
      "explain_dr": "unknown howa any l-amina — lazem t-narrowiha 9bel ma t-sta3melha.",
      "example": "let v: unknown = getData();\nif (typeof v === \"string\") v.toUpperCase(); // narrow first"
    },
    {
      "text": "`?` marks an optional property or parameter: `name?: string`.",
      "explain_dr": "? kat-3ni optional: name?: string.",
      "example": "function greet(name?: string) {\n  return \"Hello \" + (name ?? \"guest\");\n}"
    },
    {
      "text": "Enable `strict` mode in `tsconfig.json` for the strongest type checking.",
      "explain_dr": "strict mode f tsconfig.json = a9wa type checking.",
      "example": "{ \"compilerOptions\": { \"strict\": true } } // tsconfig.json"
    },
    {
      "text": "`any` disables type checking entirely; prefer `unknown` and narrow it with `typeof`/`instanceof` guards.",
      "explain_dr": "any kat-tfi type checking kamel — st3mel unknown w narrowi b typeof/instanceof.",
      "example": "let a: any; // no checking — avoid\nlet u: unknown = fetchData();\nif (typeof u === \"number\") u.toFixed(2); // narrow with a guard"
    },
    {
      "text": "`never` is the type of a value that can never occur — functions that always throw or loop forever return `never`.",
      "explain_dr": "never = type dyal 7aja li 3omrha ma-t-w9e3 — functions li dayman kat-throw wla kat-loop bla nihaya.",
      "example": "function fail(msg: string): never {\n  throw new Error(msg);\n}"
    },
    {
      "text": "Discriminated unions (`type: 'ok' | 'error'`) plus a `switch` give exhaustive narrowing — the compiler flags missing cases.",
      "explain_dr": "Discriminated unions (type: 'ok'|'error') m3a switch — compiler kay-golik ila nsiti case.",
      "example": "type Result = { type: \"ok\"; data: string } | { type: \"error\"; msg: string };\nswitch (r.type) {\n  case \"ok\": return r.data;\n  case \"error\": throw new Error(r.msg); // missing case = compile error\n}"
    },
    {
      "text": "Type guards are functions returning a predicate: `function isUser(x: unknown): x is User` — the compiler trusts your check.",
      "explain_dr": "Type guard: function kat-rje3 x is User — compiler kay-tiq f check dyalek.",
      "example": "function isUser(x: unknown): x is User {\n  return typeof x === \"object\" && x !== null && \"name\" in x;\n}"
    },
    {
      "text": "`as const` freezes a literal to its narrowest type: `const roles = ['admin','user'] as const` gives a readonly tuple of literals.",
      "explain_dr": "as const kat-jemmed literal l adya9 type: ['admin','user'] as const → readonly tuple.",
      "example": "const roles = [\"admin\", \"user\"] as const; // readonly tuple of literals\ntype Role = typeof roles[number];           // \"admin\" | \"user\"\n"
    },
    {
      "text": "The `satisfies` operator checks a value against a type without widening it: `const cfg = {...} satisfies Config`.",
      "explain_dr": "satisfies kat-checki value 3la type bla ma t-wesse3 type dyalo.",
      "example": "const cfg = { port: 3000, host: \"localhost\" } satisfies Config;"
    },
    {
      "text": "`Record<string, number>` is shorthand for an object type with string keys and number values.",
      "explain_dr": "Record<string, number> = objet li keys strings w values numbers, b ikhtisar.",
      "example": "const scores: Record<string, number> = { aymane: 95 };"
    },
    {
      "text": "`Pick<T, 'a' | 'b'>`, `Omit<T, 'c'>`, `Partial<T>`, `Required<T>` build new types from existing ones — no duplication.",
      "explain_dr": "Pick/Omit/Partial/Required kat-bniw types jdad mn types 9dam — bla t3awd.",
      "example": "type Preview = Pick<User, \"name\">; // { name: string }\ntype Draft = Partial<User>;           // every property optional"
    },
    {
      "text": "Interfaces merge automatically (declaration merging); types do not — extending a third-party interface requires `interface`.",
      "explain_dr": "Interfaces kat-merge bo7dhum; types la — extend dyal interface dyal library khasso interface.",
      "example": "interface Box { w: number }\ninterface Box { h: number } // merges -> { w: number; h: number }"
    },
    {
      "text": "Covariance trap: assigning `Dog[]` to `Animal[]` compiles, but pushing a `Cat` corrupts it — arrays are unsound in TS.",
      "explain_dr": "Arrays f TS machi sound: Dog[] → Animal[] kat-compile walakin push Cat ghadi y-kherbe9ha.",
      "example": "const dogs: Dog[] = [];\nconst animals: Animal[] = dogs; // compiles...\nanimals.push(new Cat());        // ...but corrupts dogs"
    },
    {
      "text": "`readonly` properties and arrays (`readonly string[]`) exist only at compile time — nothing stops a runtime mutation.",
      "explain_dr": "readonly ghir f compile-time — f runtime walou ma-y-7bess mutation.",
      "example": "const arr: readonly string[] = [\"a\"];\narr.push(\"b\"); // compile error — nothing stops mutation at runtime"
    },
    {
      "text": "Enums compile to real objects at runtime; string-literal unions (`'a' | 'b'`) vanish after compilation — prefer unions.",
      "explain_dr": "Enums kay-b9aw f runtime; unions dyal strings kat-mshiw m3a compilation — unions 7ssen.",
      "example": "enum Role { Admin, User }   // real object at runtime\ntype Status = \"a\" | \"b\";     // vanishes after compile — prefer unions"
    },
    {
      "text": "Generic constraints bound the type parameter: `function get<T extends { id: number }>(item: T)` — T must have `id`.",
      "explain_dr": "T extends { id: number } = constraint — T lazem tkon 3endha id.",
      "example": "function get<T extends { id: number }>(item: T): number {\n  return item.id; // T must have id\n}"
    },
    {
      "text": "`unknown` in a `catch` clause (TS 4.4+): `catch (e: unknown)` is the default under strict — narrow before using `e`.",
      "explain_dr": "catch (e: unknown) howa default f strict — narrowi e 9bel ma t-sta3mlo.",
      "example": "try { risky(); }\ncatch (e: unknown) {\n  if (e instanceof Error) console.log(e.message); // narrow before use\n}"
    },
    {
      "text": "Index signatures `{ [key: string]: any }` allow dynamic keys, but prefer `Record<>` or `Map<>` for type safety.",
      "explain_dr": "Index signatures {[key: string]: any} kat-9bel dynamic keys, walakin Record wla Map amn kter.",
      "example": "const cache: Record<string, User> = {}; // safer than {[k: string]: any}\ncache[\"u1\"] = { name: \"Aymane\", age: 24 };"
    }
  ],
  "VueJs": [
    {
      "text": "Vue is a progressive JavaScript framework for building reactive user interfaces.",
      "explain_dr": "Vue framework progressif bach t-sna3 interfaces reactive.",
      "example": "createApp({ data: () => ({ message: \"Hello\" }) }).mount(\"#app\");"
    },
    {
      "text": "In the Options API, component state lives in `data()`, logic in `methods`, and derived values in `computed`.",
      "explain_dr": "Options API: data() l state, methods l logic, computed l values li kat-t7seb.",
      "example": "export default {\n  data: () => ({ count: 0 }),\n  methods: { inc() { this.count++; } },\n  computed: { double() { return this.count * 2; } }\n};"
    },
    {
      "text": "The Composition API uses `setup()` with `ref()` and `reactive()` for state.",
      "explain_dr": "Composition API: setup() m3a ref() w reactive() l state.",
      "example": "setup() {\n  const count = ref(0);\n  const state = reactive({ name: \"Aymane\" });\n  return { count, state };\n}"
    },
    {
      "text": "Bind data to the DOM with `{{ }}` interpolation and directives like `v-bind`, `v-on`, `v-if`, `v-for`.",
      "explain_dr": "Interpolation {{ }} w directives v-bind, v-on, v-if, v-for bach t-rebt data m3a DOM.",
      "example": "<p>{{ title }}</p>\n<button v-bind:disabled=\"!ok\" v-on:click=\"save\">Save</button>\n<div v-if=\"show\">Hi</div>\n<li v-for=\"t in todos\">{{ t.text }}</li>"
    },
    {
      "text": "Use `v-model` for two-way binding on form inputs.",
      "explain_dr": "v-model = two-way binding l form inputs.",
      "example": "<input v-model=\"username\" />"
    },
    {
      "text": "Props pass data from parent to child; child emits events back up with `$emit`.",
      "explain_dr": "Props mn parent l child; child kay-jawb b $emit l fo9.",
      "example": "props: [\"title\"],\nmethods: { close() { this.$emit(\"close\"); } }"
    },
    {
      "text": "Computed properties cache their result and only recompute when dependencies change.",
      "explain_dr": "computed kat-cachi resultat — kat-t3awd t7seb ghir melli dependencies ytbedlo.",
      "example": "computed: {\n  total() { return this.items.reduce((s, i) => s + i.price, 0); }\n}"
    },
    {
      "text": "Lifecycle hooks: `mounted()` runs after first render, `unmounted()` on teardown — good for cleanup.",
      "explain_dr": "mounted() melli render l-owel y-sali; unmounted() f teardown — mzyan l cleanup.",
      "example": "mounted() { this.timer = setInterval(this.tick, 1000); },\nunmounted() { clearInterval(this.timer); } // cleanup"
    },
    {
      "text": "Use `:key` with `v-for` lists so Vue can track items efficiently.",
      "explain_dr": ":key m3a v-for bach Vue y-tbe3 elements b fa3iliya.",
      "example": "<li v-for=\"u in users\" :key=\"u.id\">{{ u.name }}</li>"
    },
    {
      "text": "Single File Components (`.vue`) combine template, script, and style in one file.",
      "explain_dr": ".vue file wa7da fiha template + script + style.",
      "example": "<template><p>{{ msg }}</p></template>\n<script>export default { data: () => ({ msg: \"Hi\" }) }</script>\n<style scoped>p { color: red }</style>"
    },
    {
      "text": "`ref()` requires `.value` in script but unwraps automatically in the template — forgetting `.value` is the #1 Composition API bug.",
      "explain_dr": "ref() khass .value f script walakin f template kat-tunwrap bo7dha — nsyan .value howa ghalta n°1.",
      "example": "const count = ref(0);\ncount.value++;     // required in script\n// {{ count }}     // auto-unwrapped in template"
    },
    {
      "text": "`reactive()` only works on objects; destructuring it breaks reactivity — use `toRefs()` or stick with `ref()` for primitives.",
      "explain_dr": "reactive() ghir l objects; destructuring kat-heress reactivity — st3mel toRefs() wla ref().",
      "example": "const state = reactive({ a: 1, b: 2 });\nconst { a } = toRefs(state); // destructure without losing reactivity"
    },
    {
      "text": "A getter-only `computed()` is read-only; pass `{ get, set }` to make it writable (handy with `v-model`).",
      "explain_dr": "computed getter ghir read-only; 3tih { get, set } bach y-welli writable (mzyan m3a v-model).",
      "example": "const fullName = computed(() => first.value + \" \" + last.value);"
    },
    {
      "text": "`watch()` is lazy (runs on change); `watchEffect()` runs immediately and tracks whatever it touches — great for quick syncs.",
      "explain_dr": "watch lazy (kat-khdem melli y-tbedel); watchEffect kat-khdem nichan w kat-tbe3 li mes-sat.",
      "example": "watch(count, v => console.log(\"changed:\", v)); // lazy — on change only\nwatchEffect(() => console.log(count.value));     // runs now"
    },
    {
      "text": "Use `watch` with `{ immediate: true }` when the handler must also run on setup.",
      "explain_dr": "watch m3a { immediate: true } bach handler y-khdem mn l-ewel.",
      "example": "watch(user, fetchProfile, { immediate: true });"
    },
    {
      "text": "Emits must be declared in `defineEmits()` in `<script setup>` — otherwise they fall through to the DOM as attributes.",
      "explain_dr": "Emits lazem y-tdeclara b defineEmits() f script setup — wla ghadi y-tihou 3la DOM b7al attributes.",
      "example": "const emit = defineEmits([\"save\"]);\nemit(\"save\", payload);"
    },
    {
      "text": "Non-prop attributes fall through to the root element automatically; disable with `inheritAttrs: false` and bind via `$attrs`.",
      "explain_dr": "Attributes li machi props kat-mshiw l root element bo7dhum; 7bess b inheritAttrs: false w st3mel $attrs.",
      "example": "export default { inheritAttrs: false }; // stops auto fallthrough\n// <div v-bind=\"$attrs\">...</div> — bind manually"
    },
    {
      "text": "`v-if` destroys and recreates the element; `v-show` only toggles CSS — prefer `v-show` for frequent toggles.",
      "explain_dr": "v-if kat-hedem w t-3awd t-bni element; v-show ghir kat-beddel CSS — v-show l toggles li kat-t3awd.",
      "example": "<p v-if=\"loggedIn\">Welcome</p> <!-- destroyed/recreated -->\n<p v-show=\"menuOpen\">Menu</p>     <!-- CSS toggle only -->"
    },
    {
      "text": "Never mix `v-if` and `v-for` on the same element — `v-if` has higher priority and can't see the loop variable.",
      "explain_dr": "Ma-t-khaletch v-if w v-for f nafs element — v-if 3endha priority w ma-kat-shofsh variable dyal loop.",
      "example": "<!-- wrong: <li v-for=\"t in todos\" v-if=\"t.done\"> -->\n<template v-for=\"t in todos\">\n  <li v-if=\"t.done\" :key=\"t.id\">{{ t.text }}</li>\n</template>"
    },
    {
      "text": "The `.lazy`, `.number`, and `.trim` modifiers tune `v-model` on inputs — `v-model.number` casts to a number.",
      "explain_dr": "Modifiers dyal v-model: .lazy, .number, .trim — v-model.number kat-7wel l number.",
      "example": "<input v-model.number=\"age\" />   <!-- cast to number -->\n<input v-model.trim=\"name\" />     <!-- strip whitespace -->\n<input v-model.lazy=\"search\" />   <!-- sync on change, not input -->"
    },
    {
      "text": "`provide()`/`inject()` shares state across deep component trees without prop drilling — prefer a store (Pinia) at scale.",
      "explain_dr": "provide/inject kat-partagi state bin components b3ad bla prop drilling — f scale kbir, Pinia 7ssen.",
      "example": "provide(\"theme\", \"dark\");      // ancestor\nconst theme = inject(\"theme\");   // deep descendant, no prop drilling"
    },
    {
      "text": "In `<script setup>`, top-level bindings are automatically exposed to the template — no `return` needed.",
      "explain_dr": "f script setup, kolchi li declariti l fo9 kay-ban l template bo7do — bla return.",
      "example": "<script setup>\nconst msg = \"Hi\"; // exposed to the template — no return needed\n</script>"
    },
    {
      "text": "Define props with `defineProps()` + TypeScript: `defineProps<{ msg: string }>()` — types are checked at compile time.",
      "explain_dr": "defineProps<{ msg: string }>() = props m3a TypeScript, types kat-tchecka f compilation.",
      "example": "defineProps<{ msg: string }>(); // props type-checked at compile time"
    },
    {
      "text": "Slots pass template content into a child: default, named (`<template #header>`), and scoped slots (`<slot :item>`).",
      "explain_dr": "Slots: content mn parent l dakhel child — default, named (#header), w scoped (<slot :item>).",
      "example": "<Modal><template #header>Title</template>Body text</Modal>\n<!-- child: <slot name=\"header\" /> then <slot /> for default -->"
    },
    {
      "text": "Composition API lifecycle: `onMounted()`, `onUnmounted()` — and `onBeforeUnmount()` runs just before teardown for final cleanup.",
      "explain_dr": "Composition lifecycle: onMounted(), onUnmounted() — w onBeforeUnmount() 9bel teardown l cleanup l-akhir.",
      "example": "onMounted(() => start());\nonBeforeUnmount(() => cleanup()); // just before teardown\nonUnmounted(() => teardown());"
    }
  ],
  "Html": [
    {
      "text": "HTML is the markup language that structures web page content.",
      "explain_dr": "HTML ghir howa l'ossature dyal la page, CSS howa li kayzid la decoration.",
      "example": "<h1>My Page</h1>\n<p>HTML structures the content of the page.</p>"
    },
    {
      "text": "Semantic tags like `<header>`, `<main>`, `<nav>`, `<article>`, and `<footer>` describe meaning, not just layout.",
      "explain_dr": "Semantic tags kaygolo l Google w screen readers chno kay3ni had l'element, machi ghir div khawi.",
      "example": "<header>Site name</header>\n<main>\n  <article>Post text</article>\n</main>\n<footer>© 2026</footer>"
    },
    {
      "text": "Every page should have exactly one `<h1>`; headings must follow a logical hierarchy.",
      "explain_dr": "h1 wahda f page, b7al l3onwan lkbir dyal ktab, w headings li moraha mrettbin.",
      "example": "<h1>Complete Guide</h1>\n<h2>Installation</h2>\n<h3>On Linux</h3>"
    },
    {
      "text": "`<img>` needs an `alt` attribute for accessibility and for when the image fails to load.",
      "explain_dr": "alt howa description dyal tsowira, kayban ila tsowira ma loadatch w screen readers kay9rawh.",
      "example": "<img src=\"photo.jpg\" alt=\"Sunset over the bay\">"
    },
    {
      "text": "Forms: `<input>` types like `email`, `password`, and `number` give built-in validation.",
      "explain_dr": "type=email kaychecki wach l'email s7i7 bo7do, ma t7tajch JavaScript.",
      "example": "<input type=\"email\" required>\n<input type=\"number\" min=\"1\" max=\"10\">"
    },
    {
      "text": "The `label` element linked via `for`/`id` makes form fields clickable and screen-reader friendly.",
      "explain_dr": "label ila kan mrabit m3a input, click 3la label kaydir focus f input — pratique w accessible.",
      "example": "<label for=\"email\">Email</label>\n<input id=\"email\" type=\"email\">"
    },
    {
      "text": "Void elements like `<img>`, `<br>`, and `<input>` have no closing tag.",
      "explain_dr": "Void elements b7al img w br ma 3ndhomch closing tag, kaytseddo bo7dhom.",
      "example": "<img src=\"a.png\" alt=\"\">\n<br>\n<input type=\"text\">"
    },
    {
      "text": "The `<!DOCTYPE html>` declaration puts the browser in standards mode.",
      "explain_dr": "DOCTYPE kaygol l browser: khdem b standards jdad, machi b l9dam.",
      "example": "<!DOCTYPE html>\n<html>\n  <!-- standards mode on -->\n</html>"
    },
    {
      "text": "`data-*` attributes store custom data on elements, readable via `element.dataset`.",
      "explain_dr": "data-* b7al jib sghir kat7et fih info khassa b element w kat9raha b dataset.",
      "example": "<button data-user-id=\"42\">Edit</button>\nel.dataset.userId; // \"42\""
    },
    {
      "text": "Inline elements (`<span>`, `<a>`) flow with text; block elements (`<div>`, `<p>`) start on a new line.",
      "explain_dr": "span w a kaymchiw m3a text f nafs satr, div w p kaybdaw satr jdid.",
      "example": "<p>Text <span>flows inline</span> with the words.</p>\n<div>Starts on a new line.</div>"
    },
    {
      "text": "A `<button>` inside a form defaults to `type=\"submit\"` — always set `type=\"button\"` on JS-only buttons.",
      "explain_dr": "button f form ila ma 3titihch type, kaytssarraf b7al submit — hadi akber ghalta katnssa.",
      "example": "<form>\n  <button type=\"submit\">Save</button>\n  <button type=\"button\">Cancel</button>\n</form>"
    },
    {
      "text": "An `<input>` without a `name` attribute is silently skipped when the form submits.",
      "explain_dr": "ila input ma 3ndoch name, lform kaytajhlo ghir kima ma kaynch.",
      "example": "<!-- no name => field is skipped on submit -->\n<input type=\"text\" name=\"city\">"
    },
    {
      "text": "ARIA roles add no behavior: `role=\"button\"` still needs keyboard handling and `tabindex` to be usable.",
      "explain_dr": "role=button ghir smiya, ma kayzidch lkhadma dyal button — khassk tzid keyboard w tabindex.",
      "example": "<div role=\"button\" tabindex=\"0\">Open</div>\n<!-- still needs a keydown handler! -->"
    },
    {
      "text": "`defer` scripts run in order after parsing; `async` scripts run the moment they download, in no guaranteed order.",
      "explain_dr": "defer kaystna parsing w kaykhdem b tartib, async kaykhdem mli ytelechargea bla tartib — far9 mohim f interviews.",
      "example": "<script src=\"app.js\" defer></script>\n<script src=\"ads.js\" async></script>"
    },
    {
      "text": "The viewport meta tag `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">` is required for responsive layouts on mobile.",
      "explain_dr": "viewport meta tag howa li kaykhali site yban mzyan f telephone, bla bih kolchi yban sghir.",
      "example": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"
    },
    {
      "text": "`<details>` and `<summary>` give you a native accordion with zero JavaScript.",
      "explain_dr": "details/summary b7al accordion jahz, ma kay7tajch JavaScript.",
      "example": "<details>\n  <summary>How does shipping work?</summary>\n  <p>Answer goes here.</p>\n</details>"
    },
    {
      "text": "Put `lang` on the `<html>` tag — screen readers use it to pick the right pronunciation, and it helps SEO.",
      "explain_dr": "lang f html kaygol l screen reader b ina logha y9ra, w kay3awn SEO.",
      "example": "<html lang=\"fr\">\n  <!-- screen readers + SEO know the language -->\n</html>"
    },
    {
      "text": "Native validation comes free with `required`, `minlength`, and `pattern`; call `form.reportValidity()` to trigger it from JS.",
      "explain_dr": "required w pattern kayvalidiw bo7dhom, w reportValidity katkhlik tdeclencheha men JS.",
      "example": "<input required minlength=\"3\" pattern=\"[A-Za-z]+\">\nform.reportValidity(); // trigger native validation"
    },
    {
      "text": "Content inside `<template>` is inert until cloned — perfect for markup your JS renders repeatedly.",
      "explain_dr": "template b7al moule: content dyalo na3s 7ta tclonih b JavaScript.",
      "example": "<template id=\"card\">\n  <div class=\"card\"></div>\n</template>\ncard.content.cloneNode(true); // inert until cloned"
    },
    {
      "text": "Custom elements must contain a hyphen (`<my-card>`); registering `<mycard>` throws an error.",
      "explain_dr": "custom element khasso hyphen (my-card), bla hyphen l browser kayrfdo.",
      "example": "<!-- hyphen is mandatory -->\n<my-card></my-card>\ncustomElements.define(\"my-card\", MyCard);"
    },
    {
      "text": "`loading=\"lazy\"` defers offscreen images and `decoding=\"async\"` keeps image decoding off the main thread.",
      "explain_dr": "loading=lazy kaykhali tsawer li lte7t ma yloadiwch 7ta tqrab lihom — site kaytzad f sor3a.",
      "example": "<img src=\"hero.jpg\" alt=\"Hero\" loading=\"lazy\" decoding=\"async\">"
    },
    {
      "text": "`id` values must be unique per page — duplicates break `getElementById`, labels, and ARIA references.",
      "explain_dr": "id khasso ykon unique f page kamla, ila t3awd getElementById kayjib ghir lwel.",
      "example": "<!-- ids must be unique: only one id=\"email\" per page -->\ndocument.getElementById(\"email\");"
    },
    {
      "text": "The `hidden` attribute loses to any author `display` rule, because it works through the UA stylesheet's `display: none`.",
      "explain_dr": "hidden kaytghleb b ay display rule dyalk, hit howa ghir display:none men browser.",
      "example": "/* author display beats hidden, so re-assert it */\n[hidden] { display: none !important; }"
    },
    {
      "text": "Group related form controls with `<fieldset>` and `<legend>` so screen readers announce them as one unit.",
      "explain_dr": "fieldset w legend kayjm3o inputs li 3ndhom 3ala9a, screen reader kay9rahom b7al group wahda.",
      "example": "<fieldset>\n  <legend>Shipping address</legend>\n  <input name=\"city\">\n</fieldset>"
    },
    {
      "text": "Positive `tabindex` values create fragile tab orders — stick to `tabindex=\"0\"` (focusable) or `-1` (JS-focusable only).",
      "explain_dr": "tabindex positive kaykherbe9 tartib dyal Tab — ghir 0 w -1 li khassk.",
      "example": "<div tabindex=\"0\">Focusable</div>\n<div tabindex=\"-1\">Focusable only via JS</div>"
    }
  ],
  "Css": [
    {
      "text": "CSS styles HTML elements with selectors: element, `.class`, `#id`, and `[attribute]` selectors.",
      "explain_dr": "CSS ghir howa lmaquillage dyal HTML, selectors kaygolo l browser chkon ghadi ytziyan.",
      "example": "p { color: red; }\n.btn { padding: 8px; }\n#nav { height: 60px; }\n[type=\"email\"] { border: 1px solid gray; }"
    },
    {
      "text": "Specificity order: inline styles > `#id` > `.class` > element — later rules win on ties.",
      "explain_dr": "specificity b7al wazn: id t9il 3la class, w class t9ila 3la element.",
      "example": "/* inline > #id > .class > element; later wins ties */\n#nav .link { color: red; }\n.link { color: blue; } /* loses */"
    },
    {
      "text": "The box model is content + padding + border + margin; `box-sizing: border-box` makes sizing predictable.",
      "explain_dr": "box-sizing border-box kaykhali padding w border dakhl l width, bla bih l7sabat katkhroj ghalta.",
      "example": "* { box-sizing: border-box; }\n/* width now includes padding + border */"
    },
    {
      "text": "Flexbox (`display: flex`) lays out items in one dimension; CSS Grid handles two dimensions.",
      "explain_dr": "flex l satr wa7ed (menu), grid l jouj dimensions (layout kaml).",
      "example": ".row { display: flex; }\n.grid { display: grid; grid-template-columns: 1fr 1fr; }"
    },
    {
      "text": "Use `margin` for space between elements and `padding` for space inside an element.",
      "explain_dr": "margin howa lmasafa bin jiran, padding howa lmasafa ldakhl dyal dar.",
      "example": ".card { margin: 16px; }  /* space BETWEEN cards */\n.card { padding: 16px; } /* space INSIDE the card */"
    },
    {
      "text": "Media queries (`@media (max-width: 768px)`) make layouts responsive.",
      "explain_dr": "media queries kaybdlo design 3la 7sab l3ard dyal l'ecran — responsive design.",
      "example": "@media (max-width: 768px) {\n  .grid { grid-template-columns: 1fr; }\n}"
    },
    {
      "text": "Pseudo-classes like `:hover`, `:focus`, and `:nth-child()` style elements in specific states.",
      "explain_dr": "hover w focus w nth-child kaykhaliwk tstili l'element ghir f 7ala mo3ayana.",
      "example": "a:hover { color: red; }\ninput:focus { outline: 2px solid blue; }\nli:nth-child(odd) { background: #eee; }"
    },
    {
      "text": "CSS variables (`--brand: blue;`) declared once can be reused via `var(--brand)`.",
      "explain_dr": "CSS variables b7al 3elba kat7et fiha lon w katst3mlo f blast bzf.",
      "example": ":root { --brand: blue; }\n.btn { background: var(--brand); }"
    },
    {
      "text": "Prefer `rem` units for scalable sizing; `1rem` equals the root font size (usually 16px).",
      "explain_dr": "rem kaykber w ysghar m3a font-size dyal root — mzyan l accessibility.",
      "example": "html { font-size: 16px; }\nh1 { font-size: 2rem; } /* = 32px, scales with root */"
    },
    {
      "text": "`z-index` only works on positioned elements (`relative`, `absolute`, `fixed`, or `sticky`).",
      "explain_dr": "z-index ma kaykhdemch ila l'element ma 3ndoch position (relative, absolute...).",
      "example": ".modal { position: fixed; z-index: 100; }\n/* z-index needs a position */"
    },
    {
      "text": "Adjacent vertical margins collapse to the larger one, not the sum — `margin-bottom: 20px` meeting `margin-top: 30px` leaves a 30px gap.",
      "explain_dr": "margins l3amoudiya ma katjma3ch, katakhdo ghir lkbira — hadi ghalta dyal bzf dyal nas.",
      "example": "/* 20px margin meets 30px margin -> 30px gap, not 50px */\nh1 { margin-bottom: 20px; }\np { margin-top: 30px; }"
    },
    {
      "text": "`position: absolute` anchors to the nearest positioned ancestor — forget `position: relative` on the parent and it jumps up the tree.",
      "explain_dr": "absolute kaytlasa9 f a9rab parent 3ndo position, ila nssiti relative l parent ghadi yherb lb3id.",
      "example": ".parent { position: relative; }\n.child { position: absolute; top: 0; right: 0; }"
    },
    {
      "text": "`flex: 1` is shorthand for `flex: 1 1 0%`; the zero basis is the classic reason flex items shrink to nothing.",
      "explain_dr": "flex:1 kay3ni basis 0%, 3lach flex items kayt9albo 7ta kaywliw sghar bzf.",
      "example": ".item { flex: 1; } /* = flex: 1 1 0%; zero basis */"
    },
    {
      "text": "`grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` builds a responsive grid with zero media queries.",
      "explain_dr": "auto-fit m3a minmax kaydir grid responsive bo7do bla media queries.",
      "example": ".grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}"
    },
    {
      "text": "`display: flow-root` (or `overflow: hidden`) on a parent contains floated children and stops margin collapse.",
      "explain_dr": "flow-root kaykhali parent y7tad l floats dyal wladha w y7bes margin collapse.",
      "example": ".parent { display: flow-root; } /* contains floats, stops margin collapse */"
    },
    {
      "text": "An author `!important` declaration beats a normal inline `style=\"\"` attribute — inline styles are not untouchable.",
      "explain_dr": "!important dyal CSS katghleb inline style l3adi — inline machi dima rab7a.",
      "example": ".a { color: red !important; } /* beats style=\"color: blue\" */"
    },
    {
      "text": "Cascade layers (`@layer base, components;`) decide winners before specificity: later layers win, and unlayered styles beat all layered ones.",
      "explain_dr": "layers kay7kmo 9bel specificity: layer li jaya mor katrbe7 dima.",
      "example": "@layer base, components;\n@layer components { .btn { padding: 8px; } } /* wins over base */"
    },
    {
      "text": "On mobile, `100vh` includes the browser chrome that resizes — use `100dvh` (dynamic viewport height) for full-screen layouts.",
      "explain_dr": "f telephone 100vh kaytbedel m3a address bar, 100dvh howa s7i7 l fullscreen.",
      "example": ".hero { height: 100dvh; } /* dynamic viewport, mobile-safe */"
    },
    {
      "text": "You can't transition `display: none`; animate `opacity` + `visibility`, or the `grid-template-rows: 0fr → 1fr` trick.",
      "explain_dr": "ma ymknch tdir transition 3la display:none — khdem b opacity w visibility.",
      "example": ".menu { opacity: 0; visibility: hidden; transition: .3s; }\n.menu.open { opacity: 1; visibility: visible; }"
    },
    {
      "text": "`:where()` has zero specificity (great for resets); `:is()` takes the specificity of its most specific argument.",
      "explain_dr": ":where() specificity dyalo zero, :is() kayakhod specificity dyal a9wa argument.",
      "example": ":where(.a, #id) { } /* zero specificity */\n:is(.a, #id) { }    /* takes #id specificity */"
    },
    {
      "text": "`::before` and `::after` need `content: \"\"` to render anything, and they are inline by default.",
      "explain_dr": "before w after ma kaybanowch bla content, w homa inline par defaut.",
      "example": ".tip::before { content: \"\"; display: inline-block; width: 8px; }"
    },
    {
      "text": "`object-fit: cover` crops an image to fill its box without distortion — pair it with a fixed aspect-ratio container.",
      "explain_dr": "object-fit cover kay9os tsowira bach t3mer la boite bla ma tt3awaj.",
      "example": ".thumb { width: 200px; height: 200px; object-fit: cover; }"
    },
    {
      "text": "`clamp(1rem, 2vw + 1rem, 2rem)` gives fluid typography with no media queries: a minimum, a preferred, and a maximum.",
      "explain_dr": "clamp kay3tik font-size kaykber w ysghar m3a l'ecran bla media queries.",
      "example": "h1 { font-size: clamp(1rem, 2vw + 1rem, 2rem); }"
    },
    {
      "text": "`position: sticky` needs a `top` (or `bottom`) value and fails silently inside an ancestor with `overflow: hidden`.",
      "explain_dr": "sticky khasso top w kaymout b sokt ila parent 3ndo overflow hidden.",
      "example": ".bar { position: sticky; top: 0; }\n/* breaks silently inside overflow: hidden */"
    },
    {
      "text": "Wrap animations in `@media (prefers-reduced-motion: reduce)` to disable motion for users who request it — an accessibility must.",
      "explain_dr": "prefers-reduced-motion kay7tarm nas li ma kaybghiwch animations — accessibility mohima.",
      "example": "@media (prefers-reduced-motion: reduce) {\n  * { animation: none; transition: none; }\n}"
    }
  ],
  "Tailwind": [
    {
      "text": "Tailwind is a utility-first CSS framework: you style with classes like `flex`, `p-4`, `text-center` directly in markup.",
      "explain_dr": "Tailwind b7al sandou9 dyal classes jahzin, katkteb flex w p-4 nichan f HTML.",
      "example": "<div class=\"flex p-4 text-center\">Hello</div>"
    },
    {
      "text": "No custom CSS is needed for most layouts — the utility classes cover spacing, colors, typography, and more.",
      "explain_dr": "a8lab layouts ma kay7tajoch CSS khass, classes kaykfiw.",
      "example": "<button class=\"rounded px-4 py-2 bg-blue-600 text-white\">Save</button>\n<!-- zero custom CSS -->"
    },
    {
      "text": "Responsive design uses breakpoint prefixes: `md:flex`, `lg:grid-cols-3`, `sm:text-lg`.",
      "explain_dr": "md: w lg: kaybdlo design 3la 7sab l'ecran — responsive b classes.",
      "example": "<div class=\"grid gap-4 sm:grid-cols-2 lg:grid-cols-3\">Cards</div>"
    },
    {
      "text": "State variants style interactions: `hover:bg-blue-600`, `focus:ring-2`, `disabled:opacity-50`.",
      "explain_dr": "hover: w focus: kaystiliw l'element mli kat7et mouse wla katclicki 3lih.",
      "example": "<button class=\"hover:bg-blue-600 focus:ring-2 disabled:opacity-50\">Submit</button>"
    },
    {
      "text": "Dark mode can be class-based: `dark:bg-gray-900` applies when the `dark` class is on a parent.",
      "explain_dr": "dark: kaytbedel design mli dark mode khdam.",
      "example": "<div class=\"bg-white dark:bg-gray-900\">\n  <!-- dark: applies when .dark is on a parent -->\n</div>"
    },
    {
      "text": "Colors follow a scale: `bg-red-500` is lighter than `bg-red-700`; `50` is near-white, `950` near-black.",
      "explain_dr": "l2ar9am dyal colors: sghir = fate7, kbir = ghame9 (50 byed, 950 k7el).",
      "example": "<div class=\"bg-red-500\">Lighter</div>\n<div class=\"bg-red-700\">Darker</div>\n<!-- 50 near-white ... 950 near-black -->"
    },
    {
      "text": "Spacing is based on a `0.25rem` scale: `p-4` means `1rem` of padding, `m-2` means `0.5rem` of margin.",
      "explain_dr": "p-4 kay3ni 1rem, m-2 kay3ni 0.5rem — kol wa7ed = 0.25rem.",
      "example": "<div class=\"p-4 m-2\">\n  <!-- p-4 = 1rem, m-2 = 0.5rem (0.25rem scale) -->\n</div>"
    },
    {
      "text": "Custom design tokens go in `tailwind.config.js` under `theme.extend` — colors, fonts, spacing.",
      "explain_dr": "theme.extend f config howa fin katzid colors w fonts dyalk.",
      "example": "// tailwind.config.js\ntheme: { extend: { colors: { brand: \"#123\" } } }"
    },
    {
      "text": "Use `@apply` in CSS to compose utilities into reusable component classes.",
      "explain_dr": "@apply kayjme3 classes f class wa7da kat3awd tsta3mloha.",
      "example": ".btn {\n  @apply rounded px-4 py-2 bg-blue-600 text-white;\n}"
    },
    {
      "text": "Avoid extremely long class lists by extracting repeated patterns into components or `@apply` classes.",
      "explain_dr": "ila classes twalo bzf, jme3hom f component wla @apply — code an9a.",
      "example": "// Button.jsx - extract the repeated pattern\nfunction Btn({ children }) {\n  return <button className=\"rounded px-4 py-2 bg-blue-600 text-white\">{children}</button>;\n}"
    },
    {
      "text": "Arbitrary values escape the scale without config changes: `w-[350px]`, `text-[#bada55]`, `grid-cols-[1fr_2fr]`.",
      "explain_dr": "arbitrary values b7al w-[350px] kaykhaliwk tkhroj 3la scale bla ma tbdel config.",
      "example": "<div class=\"w-[350px] text-[#bada55] grid-cols-[1fr_2fr]\">"
    },
    {
      "text": "Prefix a utility with `!` to mark it important — `!p-4` compiles to `padding: 1rem !important`; use sparingly.",
      "explain_dr": "!p-4 kay3ni important — sta3mlo ghir ila darty bih.",
      "example": "<div class=\"!p-4\">\n  <!-- compiles to padding: 1rem !important -->\n</div>"
    },
    {
      "text": "Variants stack left to right: `md:hover:bg-blue-700` means hover styles that only apply at the md breakpoint.",
      "explain_dr": "md:hover:bg-blue-700 kay3ni hover ghir f ecran md w lfou9.",
      "example": "<button class=\"md:hover:bg-blue-700\">\n  <!-- hover styles only at md and up -->\n</button>"
    },
    {
      "text": "`space-x-4` breaks when flex children wrap; prefer `gap-4`, which handles wrapping correctly.",
      "explain_dr": "space-x-4 kaytkherbe9 ila flex wrap, gap-4 howa l7al s7i7.",
      "example": "<div class=\"flex flex-wrap gap-4\">\n  <!-- gap handles wrapping; space-x-4 breaks -->\n</div>"
    },
    {
      "text": "The `container` class centers content with responsive max-widths — stop hand-rolling wrapper divs.",
      "explain_dr": "container class jahza katcenter l content — ma t3awdch tsaybha b ydek.",
      "example": "<div class=\"container\">\n  <!-- centered, responsive max-widths built in -->\n</div>"
    },
    {
      "text": "`sr-only` hides content visually while keeping it for screen readers — the right tool for icon labels and skip links.",
      "explain_dr": "sr-only kaykhfi l3in w kaykhlih l screen readers — l icon labels.",
      "example": "<button aria-label=\"Close\">\n  <span class=\"sr-only\">Close menu</span>\n</button>"
    },
    {
      "text": "`truncate`, `line-clamp-2`, and `whitespace-nowrap` control text overflow with zero custom CSS.",
      "explain_dr": "truncate w line-clamp kay9t3o text twil bla CSS khass.",
      "example": "<p class=\"truncate\">Long single line...</p>\n<p class=\"line-clamp-2\">Long paragraph...</p>"
    },
    {
      "text": "`aspect-video` and `aspect-square` reserve space for media and kill cumulative layout shift.",
      "explain_dr": "aspect-video kay7jez blasa l video 9bel ma tloada — ma kaynch layout shift.",
      "example": "<div class=\"aspect-video\">\n  <video src=\"demo.mp4\"></video>\n</div>"
    },
    {
      "text": "Tailwind v4 is CSS-first: define tokens in `@theme { --color-brand: #123; }` and use them as `bg-brand` — no config file needed.",
      "explain_dr": "Tailwind v4: config wlat f CSS b @theme, ma b9atch config file.",
      "example": "/* v4: CSS-first tokens, no config file */\n@theme { --color-brand: #123; }\n<div class=\"bg-brand\">Brand</div>"
    },
    {
      "text": "`group` + `group-hover:` styles children on parent hover — e.g. reveal a button when hovering a card.",
      "explain_dr": "group-hover kaystili lwlad mli parent ythover — b7al button kayban f card.",
      "example": "<div class=\"group relative\">\n  <button class=\"opacity-0 group-hover:opacity-100\">Edit</button>\n</div>"
    },
    {
      "text": "`peer` + `peer-checked:` styles a sibling based on input state — CSS-only toggles with no JavaScript.",
      "explain_dr": "peer-checked kaystili jiran 3la 7sab l input — toggle bla JavaScript.",
      "example": "<input type=\"checkbox\" class=\"peer sr-only\">\n<div class=\"peer-checked:bg-blue-600\">Toggle</div>"
    },
    {
      "text": "`divide-x` / `divide-y` add borders between children — cleaner than putting `border` on every item.",
      "explain_dr": "divide-x kayzid borders bin lwlad, an9a men border f kol wa7ed.",
      "example": "<ul class=\"divide-y divide-gray-200\">\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>"
    },
    {
      "text": "`ring-2 ring-offset-2` builds focus outlines that don't shift layout the way `border` does — better for accessibility.",
      "explain_dr": "ring-2 l focus ma kayherkch layout b7al border — a7san l accessibility.",
      "example": "<button class=\"focus:ring-2 focus:ring-offset-2\">\n  <!-- focus ring, no layout shift -->\n</button>"
    },
    {
      "text": "`max-w-prose` (65ch) keeps line length readable; pair it with `mx-auto` for centered article layouts.",
      "explain_dr": "max-w-prose kay7ded toul satr bach l9raya tkon mori7a.",
      "example": "<article class=\"max-w-prose mx-auto\">\n  <!-- 65ch lines, centered -->\n</article>"
    },
    {
      "text": "Put `@apply` component classes inside `@layer components { ... }` so utilities like `mt-4` can still override them.",
      "explain_dr": "@layer components kaykhali utilities b7al mt-4 yghlebo l component classes dyalk.",
      "example": "@layer components {\n  .btn { @apply rounded px-4 py-2; }\n}\n<!-- utilities like mt-4 still override .btn -->"
    }
  ],
  "NodeJs": [
    {
      "text": "Node.js is a JavaScript runtime built on Chrome's V8 engine, running outside the browser.",
      "explain_dr": "Node.js rah ghir JavaScript li khddam barra l browser, b moteur V8.",
      "example": "// runs JS outside the browser, on Chrome's V8\nconsole.log(process.version);"
    },
    {
      "text": "It uses an event loop with non-blocking I/O, making it efficient for I/O-heavy apps like APIs.",
      "explain_dr": "b7al chi serveur wa7ed li kayrdd 3la bzzaf d tlabat bla maytsnna — I/O ma katbloqish.",
      "example": "const fs = require(\"fs\");\nfs.readFile(\"a.txt\", (err, data) => {\n  // event loop stays free while reading\n});"
    },
    {
      "text": "Install packages with `npm install <name>`; dependencies are listed in `package.json`.",
      "explain_dr": "npm install smiyt l package katnzzlo w katzido f package.json bach kolchi y3ref ach khass.",
      "example": "$ npm install express\n// listed in package.json -> \"dependencies\""
    },
    {
      "text": "Import modules with `require()` (CommonJS) or `import` (ES modules with `\"type\": \"module\"`).",
      "explain_dr": "require dyal l9dam (CommonJS) w import dyal jdid (ES modules) — khass tzid \"type\": \"module\".",
      "example": "const fs = require(\"fs\");            // CommonJS\nimport fs from \"fs\";                  // ESM, needs \"type\": \"module\""
    },
    {
      "text": "Build a server with Express: `app.get(\"/users\", (req, res) => res.json(users))`.",
      "explain_dr": "Express kaysshel 3lik: app.get(\"/users\", ...) katjawb 3la tlabat GET.",
      "example": "const express = require(\"express\");\nconst app = express();\napp.get(\"/users\", (req, res) => res.json(users));"
    },
    {
      "text": "Environment variables live in a `.env` file and are read via `process.env.API_KEY` — never hardcode secrets.",
      "explain_dr": "l asrar b7al API keys khllihom f .env, w qrahom b process.env — 3mro ma tktebhom f code.",
      "example": "require(\"dotenv\").config();\nconst key = process.env.API_KEY; // never hardcoded"
    },
    {
      "text": "Handle errors in async routes with `try/catch` or an error-handling middleware to avoid crashes.",
      "explain_dr": "ila nsiti try/catch f route async, l error ghadi ytiyy7 l serveur kamlo.",
      "example": "app.get(\"/\", async (req, res, next) => {\n  try {\n    res.json(await db.users.find());\n  } catch (err) { next(err); }\n});"
    },
    {
      "text": "`npm start` runs the script named `start` defined in `package.json`.",
      "explain_dr": "npm start ghir kaykhdem script li smito start li katbo f package.json.",
      "example": "// package.json\n\"scripts\": { \"start\": \"node server.js\" }\n$ npm start"
    },
    {
      "text": "Use `nodemon` in development for automatic restarts when files change.",
      "explain_dr": "nodemon kay3awd ykhdem l app rasso mli katbdel chi fichier — mzyan l dev.",
      "example": "// package.json\n\"scripts\": { \"dev\": \"nodemon server.js\" }\n// nodemon restarts on file changes"
    },
    {
      "text": "Node is single-threaded — keep CPU-heavy work out of request handlers or offload it to worker threads.",
      "explain_dr": "Node 3ndo thread wa7ed — l 7sabat t9al (CPU) khrjouhom men request handlers.",
      "example": "const { Worker } = require(\"worker_threads\");\n// offload CPU-heavy work, keep the event loop free"
    },
    {
      "text": "`process.nextTick()` callbacks run before the event loop continues — before `setImmediate()` — a classic interview trap.",
      "explain_dr": "nextTick katssbe9 kolchi, 7ta setImmediate — l interviewers kay7bbo had so2al.",
      "example": "process.nextTick(() => console.log(\"tick\"));      // first\nsetImmediate(() => console.log(\"immediate\"));    // second"
    },
    {
      "text": "An unhandled promise rejection crashes modern Node: always chain `.catch()` or listen on `process.on(\"unhandledRejection\")`.",
      "explain_dr": "promise li trefdat w ma tsdatch kat9tl Node — dima dir .catch().",
      "example": "fetchData().catch(err => console.error(err));\n// or: process.on(\"unhandledRejection\", ...)"
    },
    {
      "text": "`require()` caches modules after the first load — mutating an exported object affects every file that imported it.",
      "explain_dr": "require kay7fed l module mra w7da — ila bdelti l export, kolchi li importah ghadi ychof tbadil.",
      "example": "// counter.js - cached after first require()\nlet n = 0;\nmodule.exports = { inc: () => ++n };\n// every importer shares the same n"
    },
    {
      "text": "Express middleware runs in registration order; error handlers must have four args `(err, req, res, next)` or Express ignores them.",
      "explain_dr": "l ordre dyal app.use mohim; w error handler khass ykon fih 4 arguments.",
      "example": "app.use(logger); // middleware order matters\napp.use((err, req, res, next) => res.status(500).json({})); // 4 args"
    },
    {
      "text": "Sync APIs like `fs.readFileSync()` block the whole event loop — never call them inside a request handler.",
      "explain_dr": "fs.readFileSync katjmd kolchi 7ta tsali — 3mro ma tsta3mlo f route.",
      "example": "// BAD inside a route: fs.readFileSync(path) blocks everyone\nfs.readFile(path, (err, data) => { /* async */ });"
    },
    {
      "text": "Handle `SIGTERM`/`SIGINT` for graceful shutdown: close the HTTP server and DB pool before `process.exit()`.",
      "explain_dr": "mli l serveur kaytf, sed l connections b chouia qbl ma tkhrej — hadi hiya graceful shutdown.",
      "example": "process.on(\"SIGTERM\", () => {\n  server.close(() => process.exit(0)); // graceful shutdown\n});"
    },
    {
      "text": "Use `Buffer.from(str)` for binary data — the `new Buffer()` constructor is deprecated and unsafe.",
      "explain_dr": "Buffer.from hiya t-tri9a s7i7a l binary data; new Buffer 9dima w khatira.",
      "example": "const buf = Buffer.from(\"hello\"); // safe\n// never: new Buffer(\"hello\") - deprecated & unsafe"
    },
    {
      "text": "Scale a single-threaded app with the `cluster` module or PM2 to use every CPU core.",
      "explain_dr": "Node thread wa7ed, donc cluster wlla PM2 kaykhdmo bzzaf d copies bach yst3mlo ga3 CPU.",
      "example": "const cluster = require(\"cluster\");\n// or: pm2 start server.js -i max  (one worker per core)"
    },
    {
      "text": "Use `npm ci` in CI pipelines: it installs exactly what's in `package-lock.json`, unlike `npm install` which can drift.",
      "explain_dr": "npm ci kaynstalli b dabt li f package-lock.json — CI ma kaybghich surprises.",
      "example": "$ npm ci   # CI installs exactly what package-lock.json pins"
    },
    {
      "text": "Importing CommonJS from ESM works via the default export (`import pkg from \"cjs-lib\"`), but named imports often don't resolve.",
      "explain_dr": "import mn ESM l CJS kaydoz b default export; named imports ghaliban ma kaykhdmoch.",
      "example": "import pkg from \"cjs-lib\";       // default export works\n// import { named } from \"cjs-lib\"; // named imports often fail"
    },
    {
      "text": "Stream large payloads instead of buffering them: `fs.createReadStream(path).pipe(res)` keeps memory flat.",
      "explain_dr": "ila l fichier kbir, streameh b pipe bla ma t3mmer RAM.",
      "example": "fs.createReadStream(path).pipe(res); // streams keep memory flat"
    },
    {
      "text": "Harden an API with `helmet` for secure headers and a rate limiter on login routes to blunt brute force.",
      "explain_dr": "helmet katzid headers dyal security, w rate limiter kay7mi login mn brute force.",
      "example": "const helmet = require(\"helmet\");\napp.use(helmet());\napp.use(\"/login\", rateLimiter); // blunt brute force"
    },
    {
      "text": "Gate behavior on `process.env.NODE_ENV`: verbose errors in development, generic messages in production.",
      "explain_dr": "NODE_ENV katgolik wach nta f dev wlla prod — l errors f prod khasshom ykono 3amiyin.",
      "example": "if (process.env.NODE_ENV === \"production\") {\n  res.json({ error: \"Something went wrong\" }); // generic in prod\n}"
    },
    {
      "text": "An `EventEmitter` that gains listeners without `.off()`/`.removeListener()` leaks memory — always clean up.",
      "explain_dr": "ila zdti listeners bla ma t7ydhom, memory katzid — dima .off().",
      "example": "emitter.on(\"data\", handler);\n// cleanup when done:\nemitter.off(\"data\", handler);"
    },
    {
      "text": "Sign JWTs with an expiry — `jwt.sign(payload, secret, { expiresIn: \"1h\" })` — and verify the token on every protected route.",
      "explain_dr": "JWT khass ykon fih expiration, w kol route m7miya khassha tverifih.",
      "example": "const jwt = require(\"jsonwebtoken\");\nconst token = jwt.sign(payload, secret, { expiresIn: \"1h\" });"
    }
  ],
  "RestApi": [
    {
      "text": "REST is an architectural style for APIs built on standard HTTP methods.",
      "explain_dr": "REST b7al 9anoun dyal APIs: kayst3mlo HTTP methods lli kolchi kay3rfhom.",
      "example": "app.get('/users', (req, res) => res.json(users)); // REST API over HTTP methods"
    },
    {
      "text": "Map methods to operations: `GET` (read), `POST` (create), `PUT`/`PATCH` (update), `DELETE` (remove).",
      "explain_dr": "GET l9raya, POST l creation, PUT/PATCH l update, DELETE l ms7 — kol wa7da 3ndha dawrha.",
      "example": "app.get('/users', listUsers); // read\napp.post('/users', createUser); // create\napp.put('/users/:id', replaceUser); // update\napp.delete('/users/:id', removeUser); // remove"
    },
    {
      "text": "Resources are named with plural nouns: `GET /users`, `GET /users/1`, `POST /users`.",
      "explain_dr": "resources b pluriel: /users, /users/1 — smiya kat3ni chno kayn ldakhl.",
      "example": "app.get('/users/:id', (req, res) => res.json(findUser(req.params.id))); // plural noun resources"
    },
    {
      "text": "Use status codes correctly: `200` OK, `201` Created, `400` Bad Request, `401` Unauthorized, `404` Not Found, `500` Server Error.",
      "explain_dr": "200 OK, 201 Created, 404 Not Found, 500 Server Error — codes kaygolo chno w9e3.",
      "example": "res.status(201).json(newUser); // Created\nres.status(404).json({ error: 'User not found' }); // Not Found"
    },
    {
      "text": "APIs are stateless — each request carries its own authentication, often a token in the `Authorization` header.",
      "explain_dr": "API stateless kay3ni kol request katjib m3aha token dyalha, server ma kaytfkrch chkoun nta.",
      "example": "const token = req.headers.authorization?.split(' ')[1]; // stateless: auth sent per request"
    },
    {
      "text": "Return JSON with a consistent shape, including errors: `{ \"error\": \"User not found\" }`.",
      "explain_dr": "JSON b nafs chkl dima, 7ta errors — client kay3rf fin y9leb.",
      "example": "res.status(404).json({ error: 'User not found' }); // consistent JSON shape, incl. errors"
    },
    {
      "text": "Validate and sanitize all input on the server; never trust client data.",
      "explain_dr": "3mer ma tti9 f data dyal client — validation dima f server.",
      "example": "if (!req.body?.email) return res.status(400).json({ error: 'email required' }); // validate server-side"
    },
    {
      "text": "Version your API (`/api/v1/...`) so changes don't break existing clients.",
      "explain_dr": "versioning b7al /api/v1 kay7mik mli tbedel API w clients l9dam khdamin.",
      "example": "app.use('/api/v1/users', userRoutes); // version so changes don't break clients"
    },
    {
      "text": "`PUT` replaces a whole resource; `PATCH` updates only the fields sent.",
      "explain_dr": "PUT kay3awd kolchi, PATCH kaybedel ghir li sifti — far9 mohim.",
      "example": "app.put('/users/:id', replace); // replaces the whole resource\napp.patch('/users/:id', partial); // updates only sent fields"
    },
    {
      "text": "Paginate list endpoints (`?page=2&limit=20`) instead of returning thousands of records at once.",
      "explain_dr": "pagination b page w limit, bach server ma ysiftch alf record d9a wa7da.",
      "example": "const page = Number(req.query.page) || 1;\nconst limit = Number(req.query.limit) || 20; // paginate lists"
    },
    {
      "text": "`GET` must be idempotent and side-effect free — never mutate data in a GET, and never trigger deletes via query params.",
      "explain_dr": "GET khasso ykon safe: ma ymknch ybedel walo f database — hadi 9a3ida.",
      "example": "app.get('/report', (req, res) => res.json(stats())); // GET only reads — never mutates"
    },
    {
      "text": "`POST` is neither safe nor idempotent — a retried POST can double-create, so use an `Idempotency-Key` header for payments and orders.",
      "explain_dr": "POST ila t3awd y9der ykhele9 jouj — Idempotency-Key kay7bes double creation.",
      "example": "const key = req.headers['idempotency-key']; // skip the charge if this key was already processed"
    },
    {
      "text": "Return `204 No Content` for successful DELETEs, and `202 Accepted` when the work is queued asynchronously.",
      "explain_dr": "204 l delete naj7 bla content, 202 l khadma li ghadi tkhdem moraha.",
      "example": "res.status(204).send(); // DELETE ok, nothing to return\nres.status(202).json({ status: 'queued' }); // async job accepted"
    },
    {
      "text": "Don't nest resources deeper than one level: `/users/1/orders` is fine, `/users/1/orders/2/items/3` is not — use `/items/3`.",
      "explain_dr": "nesting ghir level wa7ed: /users/1/orders, ila zedti ghadi yt3e9ed.",
      "example": "app.get('/users/:id/orders', userOrders); // one level is fine\napp.get('/items/:id', itemById); // never nest deeper"
    },
    {
      "text": "Filtering, sorting, and search belong in query params — `GET /products?category=shoes&sort=price&order=desc&q=nike` — and URLs use nouns, never verbs like `/getUsers`.",
      "explain_dr": "filter w sort f query params, w URLs ghir nouns — verbs mamnou3in.",
      "example": "const { category, sort = 'price', order = 'desc', q } = req.query; // filter/sort/search in query params"
    },
    {
      "text": "`401 Unauthorized` = missing or invalid credentials; `403 Forbidden` = authenticated but not allowed — mixing them up is an interview classic.",
      "explain_dr": "401 = ma 3ndkch credentials, 403 = 3ndk walakin mamnou3 — far9 kaytsswel 3lih f interviews.",
      "example": "if (!token) return res.status(401).json({ error: 'Login required' });\nif (user.role !== 'admin') return res.status(403).json({ error: 'Not allowed' });"
    },
    {
      "text": "Answer abuse with `429 Too Many Requests` plus a `Retry-After` header; always rate-limit login endpoints.",
      "explain_dr": "429 kaygol l client: rje3 mor chwiya — w Retry-After kaygol ch7al.",
      "example": "res.set('Retry-After', '60').status(429).json({ error: 'Too many requests' }); // answer abuse with 429"
    },
    {
      "text": "JWT best practice: short-lived access tokens + long-lived refresh tokens in `httpOnly` cookies — never store tokens in `localStorage`.",
      "explain_dr": "tokens f localStorage khatar (XSS) — httpOnly cookies homa l7al l2amen.",
      "example": "res.cookie('refreshToken', token, { httpOnly: true, secure: true }); // never in localStorage"
    },
    {
      "text": "CORS errors are a server-side header problem (`Access-Control-Allow-Origin`), not a frontend bug — the browser is just enforcing the policy.",
      "explain_dr": "CORS error machi bug dyal frontend, howa server ma sifetch l header.",
      "example": "res.set('Access-Control-Allow-Origin', 'https://app.example.com'); // CORS is a server header"
    },
    {
      "text": "Every paginated list should share one envelope: `{ \"data\": [...], \"meta\": { \"page\": 1, \"total\": 200 } }`.",
      "explain_dr": "envelope wa7da l kol paginated list: data + meta — client kay3rf y9raha dima.",
      "example": "res.json({ data: users, meta: { page: 1, total: 200 } }); // one envelope for all paginated lists"
    },
    {
      "text": "Use `ETag` + `If-None-Match` for conditional requests — the server answers `304 Not Modified` and saves bandwidth.",
      "explain_dr": "ETag b7al basma dyal response, ila ma tbedlatch server kayjawb 304 w kaywfer bandwidth.",
      "example": "if (req.headers['if-none-match'] === etag) return res.status(304).end(); // conditional request"
    },
    {
      "text": "Webhooks must carry a signature header (like Stripe's `Stripe-Signature`) — verify it before trusting the payload.",
      "explain_dr": "webhooks khasshom signature — bla verification ay wa7ed y9der ysift payload mzowar.",
      "example": "const sig = req.headers['stripe-signature']; // verify the signature before trusting the payload"
    },
    {
      "text": "Require `Content-Type: application/json` on requests and answer `415 Unsupported Media Type` for the wrong format.",
      "explain_dr": "415 kaygol l client: sifti format ghalat, ana kan9bel ghir JSON.",
      "example": "if (req.headers['content-type'] !== 'application/json') return res.status(415).end();"
    },
    {
      "text": "Never leak stack traces or SQL errors in production responses — log them server-side and return a generic `500`.",
      "explain_dr": "stack traces f production kay3tiw l hackers info — log f server w sifet 500 3adi.",
      "example": "catch (err) { console.error(err); res.status(500).json({ error: 'Internal server error' }); } // log, don't leak"
    },
    {
      "text": "Browsers send automatic `OPTIONS` preflight requests for non-simple CORS calls — your server must answer them or PUT/PATCH/DELETE fail.",
      "explain_dr": "OPTIONS preflight kaytsift bo7do men browser, ila server ma jawbch PUT/PATCH ghadi yfchlo.",
      "example": "app.options('/users/:id', (req, res) => res.set('Access-Control-Allow-Methods', 'PUT,DELETE').sendStatus(204)); // answer preflights"
    }
  ],
  "Laravel": [
    {
      "text": "Laravel is a PHP framework for building web apps and APIs with an elegant, expressive syntax.",
      "explain_dr": "Laravel rah framework dyal PHP bach tbni web apps w API b syntax zwina.",
      "example": "Route::get('/posts', [PostController::class, 'index']);"
    },
    {
      "text": "Routes live in `routes/web.php` or `routes/api.php`; controllers hold the request logic.",
      "explain_dr": "l routes kaynin f routes/web.php wlla api.php, w controllers fihom logic.",
      "example": "Route::get('/users', [UserController::class, 'index']); // routes map to controller actions"
    },
    {
      "text": "Eloquent is Laravel's ORM: each model maps to a database table, e.g. `User::where('active', true)->get()`.",
      "explain_dr": "Eloquent hiya ORM: kol model = table f DB, b7al User::where('active', true)->get().",
      "example": "User::where('active', true)->get(); // Eloquent model -> users table"
    },
    {
      "text": "Migrations (`php artisan migrate`) version-control your database schema.",
      "explain_dr": "migrations katversionni schema dyal DB — b7al git l database.",
      "example": "Schema::create('posts', function (Blueprint $table) {\n    $table->id(); $table->string('title'); $table->timestamps();\n}); // migrations version the schema"
    },
    {
      "text": "Use `$request->validate([...])` to validate incoming data and auto-return 422 errors on failure.",
      "explain_dr": "$request->validate([...]) katvalidi data w katrje3 422 rasha ila ghalt.",
      "example": "$validated = $request->validate(['email' => 'required|email']); // auto-422 on failure"
    },
    {
      "text": "Blade is Laravel's templating engine; `{{ $var }}` escapes output automatically, preventing XSS.",
      "explain_dr": "Blade hiya templates; {{ $var }} katescape rasso — 7imaya mn XSS.",
      "example": "{{ $user->name }} // Blade: escaped output, XSS-safe"
    },
    {
      "text": "Middleware (auth, CORS, throttling) filters HTTP requests before they reach the controller.",
      "explain_dr": "middleware b7al 7aris: kayfilteri requests qbl ma ywslo l controller.",
      "example": "Route::get('/dashboard', [DashController::class, 'index'])->middleware('auth'); // middleware filters first"
    },
    {
      "text": "Artisan is the CLI: `php artisan make:model Post -mcr` scaffolds model, migration, and controller.",
      "explain_dr": "artisan hiya CLI — make:model Post -mcr katgeneri model+migration+controller.",
      "example": "php artisan make:model Post -mcr // model + migration + controller in one command"
    },
    {
      "text": "Sanctum provides lightweight token authentication for SPAs and mobile apps.",
      "explain_dr": "Sanctum kat3tik auth b tokens khfifa l SPA w mobile apps.",
      "example": "$token = $user->createToken('mobile')->plainTextToken; // Sanctum API token"
    },
    {
      "text": "Keep secrets in `.env` and read them via `env()` or config files — never commit `.env` to Git.",
      "explain_dr": "l secrets khllihom f .env — 3mro ma tcommiteh f Git.",
      "example": "'key' => env('STRIPE_KEY'), // secrets in .env, never committed to Git"
    },
    {
      "text": "Inject dependencies through the constructor — Laravel's service container resolves type-hinted classes automatically.",
      "explain_dr": "constructor injection: Laravel kay7ell lik dependencies rasso — ghir type-hinti f constructor.",
      "example": "public function __construct(private UserRepository $users) {} // container auto-resolves it"
    },
    {
      "text": "Move complex validation into Form Requests (`php artisan make:request StorePostRequest`) to keep controllers thin.",
      "explain_dr": "l validation t9ila dirha f Form Request bach controller yb9a n9i.",
      "example": "public function store(StorePostRequest $request) { $request->validated(); } // Form Request keeps it thin"
    },
    {
      "text": "Define relationships on models (`hasMany`, `belongsTo`) and eager-load with `::with('comments')` to kill N+1 queries.",
      "explain_dr": "relations (hasMany, belongsTo) + with() = bla N+1 queries.",
      "example": "Post::with('comments')->get(); // eager load: one extra query instead of N"
    },
    {
      "text": "The N+1 problem: looping `$posts` and calling `$post->comments` fires one query per post — eager loading fixes it.",
      "explain_dr": "N+1: kol post katlancer query — with('comments') katjme3hom f query w7da.",
      "example": "foreach (Post::all() as $p) $p->comments; // N+1: one query per post!"
    },
    {
      "text": "Local query scopes keep queries reusable: `scopeActive($query)` becomes `Post::active()->get()`.",
      "explain_dr": "scopeActive($query) katwlli Post::active()->get() — query kat3awd tst3ml.",
      "example": "public function scopeActive($query) { return $query->where('active', true); } // Post::active()->get()"
    },
    {
      "text": "Use `$casts` on the model (`'price' => 'decimal:2'`) instead of manual conversion in accessors.",
      "explain_dr": "$casts kat7wwel types rasha — bla ma tkteb accessors.",
      "example": "protected $casts = ['price' => 'decimal:2', 'meta' => 'array']; // automatic type casting"
    },
    {
      "text": "Model events and observers (`Post::observe(PostObserver::class)`) centralize logic like cache invalidation.",
      "explain_dr": "observers katjm3o logic li kayt3awd (b7al cache invalidation) f blasa w7da.",
      "example": "Post::observe(PostObserver::class); // register in AppServiceProvider::boot()"
    },
    {
      "text": "Push slow work (emails, image processing) to jobs: `SendReport::dispatch()` and run `php artisan queue:work`.",
      "explain_dr": "l khdma t9ila (emails) df3ha l jobs — queue:work kaykhdmhom f background.",
      "example": "SendReport::dispatch($user); // job runs via: php artisan queue:work"
    },
    {
      "text": "Authorize with policies and gates — `$this->authorize('update', $post)` — instead of `if` checks scattered in controllers.",
      "explain_dr": "authorization dirha b policies — $this->authorize('update', $post) — machi if f kol blasa.",
      "example": "$this->authorize('update', $post); // policies beat scattered if-checks"
    },
    {
      "text": "API Resources (`PostResource`) transform models into consistent JSON shapes for your frontend.",
      "explain_dr": "API Resources kat7dd chkel JSON li katrje3 l frontend — consistent.",
      "example": "return PostResource::collection($posts); // consistent JSON shape for the frontend"
    },
    {
      "text": "Guard against mass assignment: define `$fillable` (or `$guarded`) or `Post::create($request->all())` throws.",
      "explain_dr": "$fillable wlla $guarded khasshom ykono — sinon mass assignment khatar.",
      "example": "protected $fillable = ['title', 'body']; // mass-assignment guard"
    },
    {
      "text": "Soft deletes (`use SoftDeletes`) keep a `deleted_at` timestamp — `withTrashed()` and `restore()` bring records back.",
      "explain_dr": "SoftDeletes: record ma kaytms7ch b s7, ghir deleted_at — w restore kayrje3o.",
      "example": "Post::withTrashed()->find(1)->restore(); // soft deletes keep deleted_at"
    },
    {
      "text": "In production, run `php artisan config:cache` and never call `env()` outside config files — it returns null after caching.",
      "explain_dr": "f prod dir config:cache, w mn b3d env() ma khddamach barra config files.",
      "example": "config('services.stripe.key'); // never env() outside config files in production"
    },
    {
      "text": "Throttle public endpoints with the `throttle:60,1` middleware to stop abuse of login and register routes.",
      "explain_dr": "throttle:60,1 kay7dd ch7al mn request — 7imaya mn spam f login.",
      "example": "Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:60,1');"
    },
    {
      "text": "Seed realistic dev data with factories and seeders (`php artisan db:seed`) instead of hand-inserting rows.",
      "explain_dr": "factories + seeders kaygeneriw data wa9i3iya l dev — bla insert ydawi.",
      "example": "Post::factory()->count(10)->create(); // seeders + factories for dev data"
    }
  ],
  "Php": [
    {
      "text": "PHP is a server-side scripting language; every statement ends with a semicolon.",
      "explain_dr": "PHP lougha dyal serveur — kol instruction katsali b ;.",
      "example": "<?php echo 'Hello'; $x = 5; // every statement ends with ;"
    },
    {
      "text": "Variables start with `$`: `$name = \"Aymane\";` — they are loosely typed by default.",
      "explain_dr": "variables kaybda b $ — loosely typed, ma khassch déclaration.",
      "example": "$name = \"Aymane\"; // variables start with $, loosely typed"
    },
    {
      "text": "`echo` outputs strings; use `.` to concatenate: `echo \"Hello \" . $name;`.",
      "explain_dr": "echo katprinti, w . katjme3 strings.",
      "example": "echo \"Hello \" . $name; // . concatenates strings"
    },
    {
      "text": "Arrays: indexed `$arr = [1, 2, 3];` and associative `$user = [\"name\" => \"Aymane\"];`.",
      "explain_dr": "arrays: [1,2,3] w associative [\"name\" => \"Aymane\"].",
      "example": "$arr = [1, 2, 3]; $user = [\"name\" => \"Aymane\"]; // indexed + associative arrays"
    },
    {
      "text": "Strict comparison uses `===`; loose `==` coerces types and can surprise you.",
      "explain_dr": "=== stricte, == kat7wwel types — t7dder!",
      "example": "var_dump(\"1\" == 1);  // true (coerced)\nvar_dump(\"1\" === 1); // false (strict)"
    },
    {
      "text": "Superglobals: `$_GET`, `$_POST`, `$_SERVER`, and `$_SESSION` give access to request data and the server.",
      "explain_dr": "$_GET, $_POST, $_SESSION... fihom data dyal request.",
      "example": "$page = $_GET['page']; $method = $_SERVER['REQUEST_METHOD']; // superglobals"
    },
    {
      "text": "Functions declare parameter types and return types: `function add(int $a, int $b): int { return $a + $b; }`.",
      "explain_dr": "functions b types: function add(int $a, int $b): int.",
      "example": "function add(int $a, int $b): int { return $a + $b; } // typed params + return"
    },
    {
      "text": "Namespaces (`namespace App\\Models;`) prevent class-name collisions; autoloading follows PSR-4.",
      "explain_dr": "namespaces kaymn3o collision d smiyat classes; autoload PSR-4.",
      "example": "namespace App\\Models; // avoid class-name collisions (PSR-4 autoloading)"
    },
    {
      "text": "Composer (`composer install`) manages dependencies, recorded in `composer.json`.",
      "explain_dr": "composer install kaynzzel dependencies mn composer.json.",
      "example": "composer require stripe/stripe-php // dependencies go in composer.json"
    },
    {
      "text": "`htmlspecialchars()` escapes output to prevent XSS when printing user input.",
      "explain_dr": "htmlspecialchars katescape output — anti-XSS.",
      "example": "echo htmlspecialchars($input, ENT_QUOTES, 'UTF-8'); // escape output: XSS-safe"
    },
    {
      "text": "Use `??` for null-safe defaults (`$name = $_GET['name'] ?? 'guest';`) — it checks `isset()` without a notice.",
      "explain_dr": "?? kat3ti default bla notice — a7san mn isset b yddik.",
      "example": "$name = $_GET['name'] ?? 'guest'; // null-safe default, no notice"
    },
    {
      "text": "`match` is stricter than `switch`: it uses `===` comparison and returns a value — no `break` needed.",
      "explain_dr": "match stricte (===) w katrje3 valeur — bla break.",
      "example": "$type = match($day) { 'Sat', 'Sun' => 'weekend', default => 'workday' }; // strict ===, returns a value"
    },
    {
      "text": "Arrow functions `fn($x) => $x * 2` auto-capture surrounding variables by value — shorter than `function () use ($x)`.",
      "explain_dr": "fn($x) => ... katcapture variables rasha — 9sira.",
      "example": "$double = fn($x) => $x * 2; // arrow fn auto-captures by value"
    },
    {
      "text": "Type juggling traps: `\"0\" == false` is `true`, and `\"10abc\" + 5` equals `15` — prefer `===`.",
      "explain_dr": "\"0\" == false = true! type juggling khatar — st3ml ===.",
      "example": "var_dump(\"0\" == false); // true! type juggling — use ==="
    },
    {
      "text": "`declare(strict_types=1);` at the top of a file makes scalar type hints reject wrong types instead of coercing.",
      "explain_dr": "strict_types=1 kayj3l types strictin — ma kay7wwlch.",
      "example": "declare(strict_types=1); // first line: type hints reject wrong types"
    },
    {
      "text": "Pass arguments by reference with `&$var` when a function must modify the caller's variable.",
      "explain_dr": "&$var: function katbdel variable dyal l caller.",
      "example": "function bump(&$n) { $n++; } bump($count); // by reference: $count changes"
    },
    {
      "text": "Catch `Throwable` (not just `Exception`) to also trap engine errors like `TypeError`.",
      "explain_dr": "Throwable katched 7ta engine errors b7al TypeError.",
      "example": "try { risky(); } catch (Throwable $e) { log($e->getMessage()); } // catches TypeError too"
    },
    {
      "text": "Call `session_start()` before any output — even a stray space — or headers fail with 'headers already sent'.",
      "explain_dr": "session_start() qbl ay output — 7ta espace katdir mochkil.",
      "example": "session_start(); // must run before ANY output"
    },
    {
      "text": "Always use PDO prepared statements (`$stmt->execute([$id])`) — string-interpolated SQL invites injection.",
      "explain_dr": "PDO prepared statements = 7imaya mn SQL injection.",
      "example": "$stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');\n$stmt->execute([$id]); // prepared = injection-safe"
    },
    {
      "text": "`require` halts on failure (fatal error); `include` only warns and continues — use `require` for essential files.",
      "explain_dr": "require katw9ef kolchi; include ghir warning — require l fichiers mohimin.",
      "example": "require 'config.php'; // halts on failure; include only warns"
    },
    {
      "text": "`self::` binds to the defining class, `static::` to the called class — late static binding matters in inheritance.",
      "explain_dr": "self:: = defining class, static:: = called class — late static binding.",
      "example": "public static function who() { return static::class; } // static:: = late static binding"
    },
    {
      "text": "Interfaces declare a contract with no implementation; abstract classes can hold shared logic plus abstract methods.",
      "explain_dr": "interface = contrat bla implémentation; abstract = logic partagée.",
      "example": "interface Loggable { public function log(string $msg): void; } // contract, no implementation"
    },
    {
      "text": "`$count ??= 0;` assigns only when the variable is null or undefined — shorthand for `$count = $count ?? 0;`.",
      "explain_dr": "$count ??= 0 katassigni ghir ila null — raccourci.",
      "example": "$count ??= 0; // assign only when null or undefined"
    },
    {
      "text": "Heredoc (`<<<HTML`) interpolates variables; nowdoc (`<<<'HTML'`) does not — pick by need.",
      "explain_dr": "heredoc kayinterpoli, nowdoc la — khtar 7sab l 7aja.",
      "example": "$html = <<<HTML\n<p>$name</p>\nHTML; // heredoc interpolates; <<<'HTML' (nowdoc) does not"
    },
    {
      "text": "Validate input with `filter_var($email, FILTER_VALIDATE_EMAIL)` instead of hand-rolled regex.",
      "explain_dr": "filter_var l validation dyal email — bla regex ydawiya.",
      "example": "if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { /* invalid email */ }"
    }
  ],
  "Python": [
    {
      "text": "Python is a readable, general-purpose language using indentation — not braces — to define blocks.",
      "explain_dr": "Python kayst3ml indentation machi {} — l code khass ykon mrteb.",
      "example": "if x > 0:\n    print(\"positive\")  # indentation defines the block"
    },
    {
      "text": "Variables need no declaration: `name = \"Aymane\"` infers the type automatically.",
      "explain_dr": "variable bla déclaration — type kayt3ref rasso.",
      "example": "name = \"Aymane\"  # no declaration; type inferred"
    },
    {
      "text": "Lists `[1, 2, 3]` are ordered and mutable; tuples `(1, 2, 3)` are ordered and immutable.",
      "explain_dr": "list mutable, tuple la — l far9 mohim.",
      "example": "nums = [1, 2, 3]; nums.append(4)  # list: mutable\npoint = (1, 2)  # tuple: immutable"
    },
    {
      "text": "Dictionaries map keys to values: `user = {\"name\": \"Aymane\", \"age\": 24}`.",
      "explain_dr": "dict = keys → values, b7al {\"name\": \"Aymane\"}.",
      "example": "user = {\"name\": \"Aymane\", \"age\": 24}  # dict: keys -> values"
    },
    {
      "text": "List comprehensions build lists concisely: `[x * 2 for x in range(5)]`.",
      "explain_dr": "comprehension katbni list f ster wa7ed — 9sira w zwina.",
      "example": "[x * 2 for x in range(5)]  # [0, 2, 4, 6, 8]"
    },
    {
      "text": "Functions use `def`: `def greet(name): return f\"Hello {name}\"` — f-strings format inline.",
      "explain_dr": "def l functions, w f-strings katformat dakhel string.",
      "example": "def greet(name): return f\"Hello {name}\"  # f-strings format inline"
    },
    {
      "text": "Handle errors with `try / except`: `try: ... except ValueError: ...`.",
      "explain_dr": "try/except katched errors bla ma yti7 l program.",
      "example": "try:\n    n = int(s)\nexcept ValueError:\n    n = 0"
    },
    {
      "text": "Virtual environments (`python -m venv venv`) isolate project dependencies.",
      "explain_dr": "venv kay3zel dependencies dyal kol project.",
      "example": "python -m venv venv\nsource venv/bin/activate  # isolate dependencies"
    },
    {
      "text": "`pip install package` installs libraries; freeze them with `pip freeze > requirements.txt`.",
      "explain_dr": "pip install + requirements.txt = kolchi y3ref ach khass.",
      "example": "pip install requests  # then: pip freeze > requirements.txt"
    },
    {
      "text": "Everything is an object, including functions and classes; `None` is Python's null value.",
      "explain_dr": "kolchi object f Python — w None hiya null.",
      "example": "f = len; print(f(\"abc\"))  # functions are objects too\nx = None  # Python's null"
    },
    {
      "text": "Never use a mutable default argument — `def f(items=[])` shares one list across all calls; use `None` and create inside.",
      "explain_dr": "mutable default b7al [] khatar — kaytpartaga bin calls; st3ml None.",
      "example": "def add(item, items=None):\n    items = items or []  # never use a mutable default\n    items.append(item); return items"
    },
    {
      "text": "`*args` collects extra positional arguments into a tuple; `**kwargs` collects keyword arguments into a dict.",
      "explain_dr": "*args = tuple, **kwargs = dict — arguments zyada.",
      "example": "def log(tag, *args, **kwargs): print(tag, args, kwargs)  # extra args -> tuple/dict"
    },
    {
      "text": "Decorators wrap functions: `@app.route(\"/\")` registers the view — it's sugar for calling `route(app, func)`.",
      "explain_dr": "decorator kaywrap function — @app.route b7al sticker.",
      "example": "@app.route(\"/\")\ndef home(): return \"hi\"  # decorator registers the view"
    },
    {
      "text": "Generators `yield` values lazily — `for row in read_lines()` processes huge files without loading them.",
      "explain_dr": "yield kat3ti valeur b valeur — mzyan l fichiers kbar.",
      "example": "def read_lines(path):\n    with open(path) as f:\n        for line in f: yield line  # lazy generator"
    },
    {
      "text": "Context managers guarantee cleanup: `with open(\"f.txt\") as f:` closes the file even if an exception fires.",
      "explain_dr": "with katskker fichier rasso 7ta ila kan error.",
      "example": "with open(\"f.txt\") as f:\n    data = f.read()  # file closed automatically"
    },
    {
      "text": "`==` compares values, `is` compares identity — use `is None`, never `== None`.",
      "explain_dr": "== valeur, is identité — is None hiya s7i7a.",
      "example": "if user is None: ...  # is checks identity; == checks value"
    },
    {
      "text": "Use `d.get(\"key\", default)` to avoid `KeyError`, and `setdefault()` to insert-if-missing in one step.",
      "explain_dr": ".get() katjnnb KeyError — w setdefault katzid ila n9sa.",
      "example": "role = d.get(\"role\", \"guest\")  # no KeyError\nd.setdefault(\"tags\", [])  # insert if missing"
    },
    {
      "text": "Format inline with f-strings: `f\"{price:.2f}\"` rounds to two decimals.",
      "explain_dr": "f\"{price:.2f}\" katarrondi l 2 decimals.",
      "example": "f\"{price:.2f}\"  # \"19.90\" — inline formatting"
    },
    {
      "text": "Prefer dict/set comprehensions and `enumerate()`/`zip()` over manual index loops.",
      "explain_dr": "enumerate w zip 7san mn index ydawi.",
      "example": "for i, name in enumerate(names): print(i, name)  # no manual index loops"
    },
    {
      "text": "An `__init__.py` turns a folder into a package; import siblings with relative imports like `from .utils import helper`.",
      "explain_dr": "__init__.py kat7wwel dossier l package.",
      "example": "from .utils import helper  # relative import inside a package (__init__.py)"
    },
    {
      "text": "Guard runnable code with `if __name__ == \"__main__\":` so imports don't execute your script's side effects.",
      "explain_dr": "if __name__ == \"__main__\" kay7mi code mli timporti.",
      "example": "if __name__ == \"__main__\":\n    main()  # imports don't run side effects"
    },
    {
      "text": "Raise meaningful errors: `raise ValueError(\"age must be positive\")` beats a bare `raise Exception`.",
      "explain_dr": "raise ValueError(\"...\") wade7 7san mn Exception 3amiya.",
      "example": "if age < 0: raise ValueError(\"age must be positive\")  # meaningful error"
    },
    {
      "text": "`lambda` builds tiny anonymous functions — `sorted(users, key=lambda u: u[\"age\"])` sorts by age.",
      "explain_dr": "lambda = function sghira bla smiya — mzyana f sort.",
      "example": "sorted(users, key=lambda u: u[\"age\"])  # tiny anonymous function"
    },
    {
      "text": "Join efficiently: `\", \".join(names)` beats `+` concatenation in a loop (strings are immutable).",
      "explain_dr": "\", \".join() asra3 mn + f loop — strings immutables.",
      "example": "\", \".join(names)  # efficient: strings are immutable"
    },
    {
      "text": "The GIL blocks true multi-threading for CPU-bound work — use `multiprocessing` or offload to workers instead.",
      "explain_dr": "GIL kaymn3 threading 7a9i9i l CPU — st3ml multiprocessing.",
      "example": "from multiprocessing import Pool\nPool().map(work, jobs)  # bypasses the GIL"
    }
  ],
  "Sql": [
    {
      "text": "SQL is the language for querying and managing relational databases.",
      "explain_dr": "SQL hiya logha li biha katkteb les requêtes dyal les bases de données relationnelles b7al MySQL w PostgreSQL.",
      "example": "SELECT id, name FROM users WHERE age >= 18 ORDER BY created_at DESC;"
    },
    {
      "text": "Core commands: `SELECT`, `INSERT`, `UPDATE`, `DELETE`, plus `CREATE TABLE` for schema.",
      "explain_dr": "Commandes assasiya: SELECT bach tjbed data, INSERT tzid, UPDATE tbeddel, DELETE t7eyyed, CREATE TABLE bach tsna3 table jdida.",
      "example": "INSERT INTO products (name, price) VALUES ('Keyboard', 49.99);\nUPDATE products SET price = 39.99 WHERE name = 'Keyboard';\nDELETE FROM products WHERE stock = 0;\nCREATE TABLE products (id INT PRIMARY KEY, name VARCHAR(100), price DECIMAL(10,2), stock INT);"
    },
    {
      "text": "Filter rows with `WHERE`: `SELECT * FROM users WHERE age >= 18;`.",
      "explain_dr": "WHERE hiya li kat7edded ina lignes ghatjbed, b7al filter: WHERE age >= 18 katjbed ghir li 3andhom 18 w lfo9.",
      "example": "SELECT name, email FROM users WHERE age >= 18 AND city = 'Tangier';"
    },
    {
      "text": "`JOIN` combines tables on a relationship: `SELECT * FROM orders JOIN users ON orders.user_id = users.id;`.",
      "explain_dr": "JOIN katjme3 joj tables 3la asas 3ala9a binathom, b7al orders.user_id = users.id.",
      "example": "SELECT orders.id, users.name, orders.total FROM orders JOIN users ON orders.user_id = users.id;"
    },
    {
      "text": "Aggregate with `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()`; group results with `GROUP BY`.",
      "explain_dr": "COUNT/SUM/AVG fonctions d'agrégation, w GROUP BY katjm3ehom 7sab chi colonne, b7al total dyal les commandes lkol user.",
      "example": "SELECT city, COUNT(*) AS total FROM users GROUP BY city;"
    },
    {
      "text": "Filter grouped results with `HAVING` (runs after `GROUP BY`), not `WHERE`.",
      "explain_dr": "WHERE katfiltrer 9bel GROUP BY, w HAVING katfiltrer moraha 3la nataij l'agrégation.",
      "example": "SELECT city, COUNT(*) AS total FROM users GROUP BY city HAVING COUNT(*) > 10;"
    },
    {
      "text": "Primary keys uniquely identify rows; foreign keys link rows across tables.",
      "explain_dr": "Primary key: identifiant wa7id lkol ligne (mayt3awdch). Foreign key: katrbt table b table khra.",
      "example": "CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(100));\nCREATE TABLE orders (id INT PRIMARY KEY, user_id INT, FOREIGN KEY (user_id) REFERENCES users(id));"
    },
    {
      "text": "Indexes speed up reads on filtered/joined columns but slow down writes slightly.",
      "explain_dr": "Index kayserre3 l9ira2a 3la les colonnes li kat7et f WHERE w JOIN, walakin katbette2 chwiya lkitaba (INSERT/UPDATE).",
      "example": "CREATE INDEX idx_users_city ON users (city); -- speeds up WHERE city = ..."
    },
    {
      "text": "SQL vs NoSQL: SQL enforces a fixed schema and relations with joins; NoSQL (e.g. MongoDB) stores flexible documents and scales horizontally more easily.",
      "explain_dr": "SQL: schema fixe + relations + joins; NoSQL b7al MongoDB: documents flexibles w kaytzad horizontalement bsahla.",
      "example": "-- SQL enforces a fixed schema, then joins tables on relations.\nSELECT * FROM orders JOIN users ON orders.user_id = users.id WHERE orders.status = 'paid';"
    },
    {
      "text": "Always use parameterized queries or an ORM to prevent SQL injection — never concatenate user input into SQL strings.",
      "explain_dr": "SQL injection: matkhletech input dyal l'utilisateur m3a string SQL — st3mel requêtes paramétrées wla ORM dima.",
      "example": "SELECT * FROM users WHERE email = ?; -- placeholder, driver fills it safely\n-- never: \"SELECT * FROM users WHERE email = '\" + email + \"'\""
    },
    {
      "text": "`INNER JOIN` vs `LEFT JOIN`: INNER keeps only matching rows, LEFT keeps all rows from the left table with NULLs where there is no match — a classic interview trap.",
      "explain_dr": "INNER JOIN ghir li kaynin f joj tables; LEFT JOIN kayjbed kolchi mn left table w NULL fin makaynch match — f les entretiens kaysewlouha bzf.",
      "example": "SELECT o.id FROM orders o INNER JOIN payments p ON p.order_id = o.id; -- only orders with a payment\nSELECT u.name FROM users u LEFT JOIN payments p ON p.user_id = u.id; -- all users, NULL payment if none"
    },
    {
      "text": "`NULL` never equals `NULL`: use `IS NULL` / `IS NOT NULL` in filters, since `NULL` comparisons evaluate to unknown.",
      "explain_dr": "NULL makayssawich NULL! St3mel IS NULL machi = NULL, 7it la comparaison m3a NULL kat3ti \"unknown\".",
      "example": "SELECT * FROM users WHERE phone IS NULL; -- never: WHERE phone = NULL"
    },
    {
      "text": "`GROUP BY` requires every non-aggregated column in the `SELECT` to appear in it, or the query fails (MySQL's `only_full_group_by`).",
      "explain_dr": "Ila st3melti GROUP BY, ay colonne f SELECT li machi agrégée khassha tkon f GROUP BY, wla l'query ghatfchel.",
      "example": "SELECT city, COUNT(*) AS total FROM users GROUP BY city; -- city is in GROUP BY, OK"
    },
    {
      "text": "Window functions like `ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC)` rank rows without collapsing them like `GROUP BY` does.",
      "explain_dr": "Window functions b7al ROW_NUMBER() katretteb les lignes bla matjm3hom — 7asla 3la ranks w positions f nafs la requête.",
      "example": "SELECT name, ROW_NUMBER() OVER (PARTITION BY city ORDER BY created_at DESC) AS rn FROM users;"
    },
    {
      "text": "`UNION` stacks result sets and removes duplicates; `UNION ALL` keeps duplicates and is faster — know which one you need.",
      "explain_dr": "UNION katjm3 nataij w t7eyyed doublons, UNION ALL kat7fedhoum w hiya asra3 — khtar 3la 7sab li bghiti.",
      "example": "SELECT email FROM staff UNION SELECT email FROM customers; -- dedupes\nSELECT email FROM staff UNION ALL SELECT email FROM customers; -- keeps dupes, faster"
    },
    {
      "text": "Transactions (`BEGIN; ... COMMIT;` / `ROLLBACK;`) make multiple statements atomic: either all apply or none do.",
      "explain_dr": "Transaction: ya kolchi kaytnfed (COMMIT) ya walo (ROLLBACK) — mohima f les opérations li khasshom ykounou kamlin b7al transfert flous.",
      "example": "BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT; -- or ROLLBACK; to cancel"
    },
    {
      "text": "`ON DELETE CASCADE` auto-deletes child rows when a parent row is deleted — handy, but it can wipe data silently, so use it deliberately.",
      "explain_dr": "ON DELETE CASCADE kat7eyyed les lignes dyal lwlidat automatiquement mlli kat7eyyed lparent — zwina walakin khatar 7it katm7i data b sehha.",
      "example": "CREATE TABLE comments (id INT PRIMARY KEY, post_id INT, FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE);"
    },
    {
      "text": "N+1 query problem: fetching a list then one query per item kills performance — fix it with a single `JOIN` or eager loading in your ORM.",
      "explain_dr": "N+1: katjbed lista w moraha query lkol wa7ed — bottleneck kbir; l7al: JOIN wa7ed wla eager loading f ORM.",
      "example": "-- one query instead of N+1:\nSELECT p.title, c.body FROM posts p JOIN comments c ON c.post_id = p.id WHERE p.id = 7;"
    },
    {
      "text": "A composite index `(last_name, first_name)` serves queries filtering on `last_name` or both, but not `first_name` alone — the leftmost-prefix rule.",
      "explain_dr": "Index composite (a, b): kaykhdm 3la a wla (a+b), walakin machi 3la b bo7dha — hadi hiya la règle dyal \"leftmost prefix\".",
      "example": "CREATE INDEX idx_name ON users (last_name, first_name); -- serves last_name, and both -- never first_name alone"
    },
    {
      "text": "Subqueries vs CTEs: `WITH active AS (SELECT ...)` makes complex queries readable and reusable inside the same statement.",
      "explain_dr": "CTE b7al WITH active AS (...) katkhlli les requêtes lme3e99da wadh7a w kat3awd tst3melhom f nafs la requête.",
      "example": "WITH active AS (\n  SELECT id FROM users WHERE last_login > NOW() - INTERVAL '30 days'\n)\nSELECT * FROM orders WHERE user_id IN (SELECT id FROM active);"
    },
    {
      "text": "`LIKE '%text%'` cannot use a normal B-tree index (a leading wildcard forces a scan) — for real text search use `FULLTEXT` or a search engine.",
      "explain_dr": "LIKE '%text%' mayst3melch index 3adi 7it % f lwel katjber 3la scan kaml — l full text search st3mel FULLTEXT wla moteur b7al Elasticsearch.",
      "example": "SELECT * FROM products WHERE name LIKE '%phon%'; -- leading wildcard = full scan; use FULLTEXT for real search"
    },
    {
      "text": "`EXPLAIN` before slow queries shows the execution plan — look for full table scans (`type: ALL`) as the usual culprit.",
      "explain_dr": "EXPLAIN kaywrik kifach l'base de données ghate9ra l'query — ila chefti ALL (full table scan), lmochkil tma.",
      "example": "EXPLAIN SELECT * FROM orders WHERE user_id = 7; -- check for full table scan (type: ALL)"
    },
    {
      "text": "Constraints (`NOT NULL`, `UNIQUE`, `CHECK`, `DEFAULT`) enforce data integrity at the database level, not just in app code.",
      "explain_dr": "Contraintes (NOT NULL, UNIQUE, CHECK, DEFAULT): l'base hiya li kat7mi data machi ghir code dyalk.",
      "example": "CREATE TABLE users (\n  id INT PRIMARY KEY,\n  email VARCHAR(255) NOT NULL UNIQUE,\n  age INT CHECK (age >= 0),\n  role VARCHAR(20) DEFAULT 'user'\n);"
    },
    {
      "text": "`SELECT ... FOR UPDATE` locks selected rows inside a transaction, preventing race conditions like double-spending a balance.",
      "explain_dr": "SELECT ... FOR UPDATE kayverrouiller les lignes f transaction — kaymna3 doublon b7al matssrefch nafs sold joj marat f nafs lwa9t.",
      "example": "BEGIN;\nSELECT balance FROM accounts WHERE id = 1 FOR UPDATE; -- locks the row\nUPDATE accounts SET balance = balance - 50 WHERE id = 1;\nCOMMIT;"
    },
    {
      "text": "Beware `UPDATE`/`DELETE` without `WHERE` — it hits every row; run a `SELECT` with the same `WHERE` first as a safety check.",
      "explain_dr": "UPDATE/DELETE bla WHERE katbeddel/k7eyyed KOL les lignes! Dima jerreb b SELECT 9bel.",
      "example": "SELECT * FROM users WHERE email = 'admin@example.com'; -- verify the WHERE first\n-- then only:\nUPDATE users SET role = 'admin' WHERE email = 'admin@example.com';"
    }
  ],
  "MongoDb": [
    {
      "text": "MongoDB is a NoSQL document database storing data as flexible, JSON-like BSON documents.",
      "explain_dr": "MongoDB base NoSQL katstocker documents b7al JSON (BSON) — flexible, bla schema fixe.",
      "example": "db.users.insertOne({ name: \"Sara\", age: 24, city: \"Tangier\" }); -- one flexible BSON document"
    },
    {
      "text": "Data is organized into databases → collections → documents (roughly tables → rows, but schemaless).",
      "explain_dr": "Database > collection > document — b7al table > ligne, walakin bla schema.",
      "example": "db.users.find({ city: \"Tangier\" }); -- collection = like a table, document = like a row"
    },
    {
      "text": "A document can nest objects and arrays: `{ name: \"Aymane\", skills: [\"React\", \"Laravel\"] }`.",
      "explain_dr": "Document y9der ykon fih objets w arrays mdakhlhin — b7al { name, skills: [...] }.",
      "example": "db.products.insertOne({\n  name: \"Keyboard\",\n  specs: { layout: \"AZERTY\", wireless: true },\n  tags: [\"gaming\", \"office\"]\n});"
    },
    {
      "text": "Every document gets a unique `_id` (an `ObjectId`) automatically unless you provide one.",
      "explain_dr": "Kol document 3ando _id unique (ObjectId) kaytzad automatiquement ila madertich wa7ed.",
      "example": "db.orders.insertOne({ total: 99 }); -- _id: ObjectId(\"...\") added automatically"
    },
    {
      "text": "CRUD via the shell or driver: `db.users.find({ age: { $gte: 18 } })`, `insertOne()`, `updateOne()`, `deleteOne()`.",
      "explain_dr": "CRUD: find() l9ira2a, insertOne() tzid, updateOne() tbeddel, deleteOne() t7eyyed.",
      "example": "db.users.find({ age: { $gte: 18 } });\ndb.users.updateOne({ email: \"sara@ex.com\" }, { $set: { city: \"Rabat\" } });\ndb.users.deleteOne({ email: \"sara@ex.com\" });"
    },
    {
      "text": "The aggregation pipeline (`$match`, `$group`, `$sort`) processes data in stages, like SQL's GROUP BY on steroids.",
      "explain_dr": "Aggregation pipeline: $match, $group, $sort — étapes katmchi b tartib, b7al GROUP BY m9ewwa.",
      "example": "db.orders.aggregate([\n  { $match: { status: \"paid\" } },\n  { $group: { _id: \"$city\", total: { $sum: \"$amount\" } } },\n  { $sort: { total: -1 } }\n]);"
    },
    {
      "text": "Create indexes on frequently queried fields to keep reads fast: `db.users.createIndex({ email: 1 })`.",
      "explain_dr": "Index 3la les champs li kat9elleb 3lihom bzf kayserre3 l9ira2a — b7al index dyal email.",
      "example": "db.users.createIndex({ email: 1 });"
    },
    {
      "text": "Embed related data for read-heavy access; reference (link) it when the data is large or shared.",
      "explain_dr": "Embed (dekhel) data sghar li kat9rahom dima m3a b3d; reference (link) ila kbar wla mchtarkin.",
      "example": "db.users.insertOne({ name: \"Sara\", address: { city: \"Tangier\", zip: \"90000\" } }); -- embed\n-- or reference: { name: \"Sara\", cityId: ObjectId(\"...\") }"
    },
    {
      "text": "Mongoose is the popular Node.js ODM adding schemas, validation, and models on top of MongoDB.",
      "explain_dr": "Mongoose: ODM dyal Node.js kayzid schemas + validation fo9 MongoDB.",
      "example": "const userSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, unique: true }\n});"
    },
    {
      "text": "MongoDB vs SQL: MongoDB favors flexible schemas and horizontal scaling; SQL favors strict schemas, joins, and complex transactions.",
      "explain_dr": "MongoDB: flexibilité + horizontal scaling; SQL: schema strict + joins + transactions me3e99da.",
      "example": "-- MongoDB: one collection, flexible docs --\ndb.products.find({ category: \"phone\", price: { $lt: 500 } });"
    },
    {
      "text": "`updateOne` only touches the fields inside `$set`: `db.users.updateOne({ _id }, { $set: { name: \"Ali\" } })` — forget `$set` and you replace the whole document.",
      "explain_dr": "updateOne m3a $set katbeddel ghir les champs li 3titih — ila nsiti $set, kat3ewwed ldocument kamel! Attention kbira.",
      "example": "db.users.updateOne({ _id: id }, { $set: { name: \"New\" } }); -- only name changes"
    },
    {
      "text": "An `ObjectId` embeds a timestamp: `new ObjectId().getTimestamp()` reveals creation time, and sorting by `_id` is roughly chronological.",
      "explain_dr": "ObjectId fih timestamp mdakhel — t9der t3ref w9t lcréation, w tri par _id kay3ti tartib chronologique t9riban.",
      "example": "new ObjectId().getTimestamp(); -- creation time embedded in the id\ndb.posts.find().sort({ _id: -1 }); -- roughly newest first"
    },
    {
      "text": "`$lookup` is MongoDB's JOIN: it pulls documents from another collection into the aggregation pipeline.",
      "explain_dr": "$lookup howa JOIN dyal MongoDB — kayjbed documents mn collection khra f l'agrégation.",
      "example": "db.orders.aggregate([\n  { $lookup: { from: \"users\", localField: \"userId\", foreignField: \"_id\", as: \"user\" } }\n]);"
    },
    {
      "text": "`db.orders.find({ $or: [{ age: { $lt: 18 } }, { verified: true }] })` combines conditions across different fields.",
      "explain_dr": "$or katjm3 chorout 3la champs mkhtalfin — ay condition t7e9e9, ldocument kaytjb.",
      "example": "db.users.find({ $or: [{ age: { $lt: 18 } }, { verified: true }] });"
    },
    {
      "text": "Multi-document transactions exist (`session.startTransaction()`), but they are slower — design schemas to avoid needing them.",
      "explain_dr": "Transactions multi-documents kaynin walakin bta2 w ghalyin — sennm lschema dyalk bach ttfadhom.",
      "example": "const session = client.startSession();\nsession.startTransaction(); -- slower; prefer schema design that avoids it"
    },
    {
      "text": "Replica sets give high availability (automatic failover); sharding splits data across machines for horizontal scale.",
      "explain_dr": "Replica set = haute disponibilité (ila ta7 wa7ed, wa7ed khor kaykml); sharding = t9sim data 3la machines l scale kbir.",
      "example": "-- replica set: automatic failover; sharding: split data across machines"
    },
    {
      "text": "The 16MB document limit means never embed unbounded arrays (like thousands of comments) — reference them instead.",
      "explain_dr": "Document mahdoud b 16MB — 3mr ma t-embeddi array bla limite b7al comments, st3mel reference.",
      "example": "db.posts.updateOne({ _id: id }, { $push: { commentIds: commentId } }); -- reference, not embed, unbounded comments"
    },
    {
      "text": "TTL indexes auto-delete documents after a time: `db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })` — perfect for sessions and tokens.",
      "explain_dr": "TTL index kay7eyyed documents bo7dha mor wa9t mo3ayan — mitali l sessions w tokens b7al expireAfterSeconds: 3600.",
      "example": "db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });"
    },
    {
      "text": "`explain(\"executionStats\")` shows whether a query used an index (`IXSCAN`) or scanned everything (`COLLSCAN`) — MongoDB's version of SQL's EXPLAIN.",
      "explain_dr": "explain(\"executionStats\"): ila chefti IXSCAN kayst3mel index (mezyan), ila COLLSCAN kayscanni kolchi (khayb).",
      "example": "db.users.find({ email: \"a@b.com\" }).explain(\"executionStats\"); -- check for COLLSCAN"
    },
    {
      "text": "Compound indexes follow the ESR rule: Equality fields first, then Sort, then Range — order matters for performance.",
      "explain_dr": "Index composite: ESR — Égalité lwel, moraha Tri (sort), w lintervalle (range) lkher; tartib mohim bzf.",
      "example": "db.orders.createIndex({ status: 1, createdAt: -1, total: 1 }); -- equality, sort, range"
    },
    {
      "text": "`upsert: true` inserts when no document matches: `db.users.updateOne({ email }, { $set: {...} }, { upsert: true })`.",
      "explain_dr": "upsert: ila makaynch document kaywaf9 lfilter, kaycreeyeh — mitali l \"create or update\".",
      "example": "db.users.updateOne({ email: \"a@b.com\" }, { $set: { name: \"Sara\" } }, { upsert: true });"
    },
    {
      "text": "`$inc` increments atomically: `db.counters.updateOne({}, { $inc: { visits: 1 } })` — safe under concurrent writes.",
      "explain_dr": "$inc kayzid wa7ed ra9m b tari9a atomique — amin m3a ktaba m3awda f nafs lwa9t (b7al compteur dyal visits).",
      "example": "db.counters.updateOne({ name: \"visits\" }, { $inc: { value: 1 } }); -- atomic"
    },
    {
      "text": "Text search needs a text index first: `db.posts.createIndex({ title: \"text\" })`, then `$text: { $search: \"laravel\" }`.",
      "explain_dr": "Recherche textuelle: khass index text lwel, moraha $text $search — b7al google sghir f lbase.",
      "example": "db.posts.createIndex({ title: \"text\" });\ndb.posts.find({ $text: { $search: \"keyboard\" } });"
    },
    {
      "text": "Aggregation `$project` reshapes output — rename fields, compute new ones, drop the rest — before sending results to the client.",
      "explain_dr": "$project katbeddel chakl natija: katbdel smiyat les champs, kat7seb jdod, w kat7eyyed li mabghitich.",
      "example": "db.users.aggregate([{ $project: { fullName: \"$name\", _id: 0, email: 1 } }]);"
    },
    {
      "text": "Denormalize for reads: storing `authorName` on each post avoids a `$lookup` on every list request, at the cost of update complexity.",
      "explain_dr": "Dénormalisation: tkhazn authorName m3a kol post bach ttfada $lookup f kol liste — tmnou: update as3eb.",
      "example": "db.posts.insertOne({ title: \"Hello\", authorName: \"Sara\" }); -- denormalize for reads"
    }
  ],
  "Git": [
    {
      "text": "Git is a distributed version control system tracking every change to your code.",
      "explain_dr": "Git: système kaytbe3 kol tbadilat code dyalk w kay7fdek mn dya3.",
      "example": "git init -- creates a repo\ngit clone <url> -- copies a remote repo"
    },
    {
      "text": "Workflow: `git add .` stages changes, `git commit -m \"message\"` saves a snapshot, `git push` uploads it.",
      "explain_dr": "add . = t7edd lchanges, commit = tsjjel snapshot, push = tsift l GitHub.",
      "example": "git add . -- stage all changes\ngit commit -m \"Add login form\" -- commit them"
    },
    {
      "text": "Check status with `git status` and review history with `git log --oneline`.",
      "explain_dr": "git status kaywrik chno tbdel; git log --oneline kaywrik lhistorique b ikhtisar.",
      "example": "git status -- what's changed\ngit log --oneline -- compact history"
    },
    {
      "text": "`git pull` fetches and merges remote changes; `git fetch` only downloads them.",
      "explain_dr": "pull = fetch + merge (katjbed w katdmj); fetch ghir katjbed bla madmj.",
      "example": "git pull -- fetch + merge remote changes\ngit fetch -- download only, no merge"
    },
    {
      "text": "Branches isolate work: `git checkout -b feature/login` creates and switches to a new branch.",
      "explain_dr": "Branch: khdma m3zoula 3la main; checkout -b katsna3 branch jdida w katmchi liha.",
      "example": "git checkout -b feature/login -- create and switch to a branch"
    },
    {
      "text": "Merge with `git merge feature/login`; resolve conflicts by editing the marked sections, then commit.",
      "explain_dr": "merge katdmj branch f l'akhar — conflicts: beddel les sections lmer9ma b yeddik w commit.",
      "example": "git checkout main && git merge feature/login -- merge the branch into main"
    },
    {
      "text": "A merge conflict happens when two branches change the same lines — fix it manually and commit.",
      "explain_dr": "Conflict: joj branches beddlo nafs les lignes — kat7ellou ydawiyan w katcommiti.",
      "example": "-- conflict markers:\n<<<<<<< HEAD\nmy change\n=======\ntheir change\n>>>>>>> feature/login\n-- edit the file, keep what you want, then git add + git commit"
    },
    {
      "text": "Write clear commit messages in the imperative: `\"Add login validation\"`, not `\"added stuff\"`.",
      "explain_dr": "Messages dyal commit wad7in b l'impératif: \"Add login validation\" machi \"added stuff\".",
      "example": "git commit -m \"Fix login validation\" -- imperative, like a command"
    },
    {
      "text": "Never commit secrets, `.env` files, or `node_modules` — use a `.gitignore` file.",
      "explain_dr": "Secrets, .env, w node_modules 3mr ma tcommitihom — dirhom f .gitignore.",
      "example": "cat .gitignore -- add:\n.env\nnode_modules/\n*.log"
    },
    {
      "text": "`git stash` temporarily shelves uncommitted changes so you can switch branches cleanly.",
      "explain_dr": "stash kaykhbbi changes li mazal matcommitatch bach tbeddel branch n9iya.",
      "example": "git stash -- shelve changes\ngit stash pop -- restore them"
    },
    {
      "text": "`git rebase main` replays your commits on top of `main` for a linear history — but never rebase commits already pushed to a shared branch.",
      "explain_dr": "rebase kayj3el lhistorique khatt wa7ed n9i — walakin 3mr ma trebase chi commit li deja tpushit l branch mchtarka.",
      "example": "git checkout feature/login && git rebase main -- linear history\n-- never rebase commits already pushed to a shared branch"
    },
    {
      "text": "`git reset --soft HEAD~1` undoes the last commit but keeps your changes staged; `--hard` discards them completely — know the difference before you type it.",
      "explain_dr": "reset --soft kayrjj3 commit bla maym7i khdmtk; --hard kaym7i kolchi — fhm lfar9 9bel matktebha.",
      "example": "git reset --soft HEAD~1 -- undo commit, keep changes staged\ngit reset --hard HEAD~1 -- undo commit, discard changes"
    },
    {
      "text": "`git cherry-pick <hash>` applies a single commit from another branch onto the current one.",
      "explain_dr": "cherry-pick: katjbed commit wa7ed mn branch khra l branch li nta fiha.",
      "example": "git cherry-pick a1b2c3d -- apply that one commit here"
    },
    {
      "text": "`git reflog` records every HEAD movement — your rescue tool when you think a commit is lost forever.",
      "explain_dr": "reflog kayssjjel kol 7araka dyal HEAD — howa li kayn9dk ila d7enti chi commit dda3.",
      "example": "git reflog -- every HEAD movement; find the lost hash, then git checkout -b rescue <hash>"
    },
    {
      "text": "Fast-forward vs merge commit: `git merge --no-ff` preserves a merge commit so the feature branch stays visible in history.",
      "explain_dr": "merge --no-ff kaykhlli commit dyal merge bayn — bach lbnach dyal lfeature tb9a bayna f lhistorique.",
      "example": "git merge --no-ff feature/login -- keeps a merge commit, branch stays visible"
    },
    {
      "text": "`git diff --staged` shows what will go into the next commit; plain `git diff` shows only unstaged changes.",
      "explain_dr": "git diff --staged kaywrik chno ghaydkhel f commit jay; diff bo7dha ghir li mazal mastageditch.",
      "example": "git diff --staged -- what the next commit will contain\ngit diff -- what's unstaged"
    },
    {
      "text": "`git remote -v` lists where your branches push to; `git branch -vv` shows each branch's upstream tracking.",
      "explain_dr": "remote -v kaywrik fin katpushi; branch -vv kaywrik l'upstream dyal kol branch.",
      "example": "git remote -v -- where pushes go\ngit branch -vv -- branches with upstream tracking"
    },
    {
      "text": "Detached HEAD means you are on a commit, not a branch — create a branch with `git switch -c rescue` before committing there.",
      "explain_dr": "Detached HEAD: nta 3la commit machi branch — sna3 branch 9bel matcommiti tma.",
      "example": "git switch -c rescue -- create a branch from a detached HEAD before committing"
    },
    {
      "text": "`git bisect` binary-searches history to find the commit that introduced a bug: mark good/bad commits and let Git halve the range.",
      "explain_dr": "bisect: kay9smm lhistorique nss nss bach yl9a lcommit li dkhel lbug — katmarki good/bad w howa kaykml.",
      "example": "git bisect start\ngit bisect bad HEAD\ngit bisect good v1.2.0 -- then test each, mark good/bad"
    },
    {
      "text": "Amending: `git commit --amend` folds changes into the last commit — only before pushing, never after others pulled it.",
      "explain_dr": "amend: katzid changes l akhir commit — ghir 9bel push, machi mor ma nass jbdouh.",
      "example": "git commit --amend -m \"Fix login validation\" -- folds changes into last commit, only before pushing"
    },
    {
      "text": "Force-push with lease, not brute force: `git push --force-with-lease` refuses to overwrite teammates' work pushed after you last fetched.",
      "explain_dr": "force-with-lease: force push l'amin — kayrfed ykhsser khdma dyal sahbek li pushaha morak.",
      "example": "git push --force-with-lease -- refuses to overwrite teammates' newer pushes"
    },
    {
      "text": "`.gitignore` patterns like `*.log` ignore files, but `!important.log` re-includes one — the `!` negation is a handy trap answer.",
      "explain_dr": "f .gitignore, ! kay3ni \"lla had lfile\" — b7al !important.log katstetni wa7ed mn *.log.",
      "example": "-- .gitignore:\n*.log\n!important.log -- re-includes just this one"
    },
    {
      "text": "Squash-and-merge on a PR compresses a feature branch into one clean commit on `main` — tidy history for noisy work-in-progress commits.",
      "explain_dr": "Squash-and-merge: PR kamla katwli commit wa7ed n9i 3la main — historique zwin.",
      "example": "-- PR merge strategy: Squash and merge -- one clean commit on main"
    },
    {
      "text": "`git worktree` lets you check out two branches at once in separate folders — no more stashing to review a teammate's PR.",
      "explain_dr": "worktree: joj branches mfto7in f joj dossiers f nafs lwa9t — bla stash.",
      "example": "git worktree add ../pr-review feature/login -- check out two branches at once"
    },
    {
      "text": "Tags mark releases: `git tag v1.0.0 && git push --tags`; tags are what CI usually builds a release from.",
      "explain_dr": "Tags: kaymarkiw les versions (v1.0.0) — la CI katbni releases 3lihom.",
      "example": "git tag v1.0.0 && git push --tags -- mark a release; CI builds from the tag"
    }
  ],
  "Docker": [
    {
      "text": "Docker packages an app and its dependencies into a portable container that runs anywhere.",
      "explain_dr": "Docker kayjme3 l'app w ga3 dépendances dyalha f container kaykhdm finma mchiti.",
      "example": "docker build -t webstack-site . -- build image\ndocker run -p 8080:80 webstack-site -- run it anywhere"
    },
    {
      "text": "A container is a lightweight, isolated runtime; an image is the immutable template containers are created from.",
      "explain_dr": "Container = runtime khfif m3zoul; image = template li menha kaytkhal9ou les containers.",
      "example": "docker images -- list images (templates)\ndocker ps -- list running containers"
    },
    {
      "text": "The `Dockerfile` defines the image: base image, dependencies, copy steps, and the start command.",
      "explain_dr": "Dockerfile: kaywsef limage — image assasiya, dépendances, copy, w commande dyal démarrage.",
      "example": "FROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nCMD [\"npm\", \"start\"]"
    },
    {
      "text": "Build with `docker build -t myapp .` and run with `docker run -p 3000:3000 myapp`.",
      "explain_dr": "build -t katbni limage; run -p 3000:3000 kaykhdmha w kay7el lport.",
      "example": "docker build -t myapp .\ndocker run -p 3000:3000 myapp"
    },
    {
      "text": "`docker-compose.yml` orchestrates multi-container setups (app + database + cache) with one `docker compose up`.",
      "explain_dr": "docker-compose.yml: kaydir app + base de données + cache b commande wa7da.",
      "example": "version: \"3\"\nservices:\n  app:\n    build: .\n    ports: [\"3000:3000\"]\n  db:\n    image: postgres:16\n-- docker compose up -- everything starts together"
    },
    {
      "text": "Containers vs virtual machines: containers share the host kernel and start in seconds; VMs emulate full hardware and are heavier.",
      "explain_dr": "Container kaypartagi kernel dyal l'hôte w kaybda f secondes; VM kat-emuli hardware kaml w t9ila.",
      "example": "-- containers share the host kernel: seconds to start, MBs of overhead\n-- VMs emulate full hardware: minutes to boot, GBs each"
    },
    {
      "text": "Map host ports to container ports with `-p 8080:80` so the app is reachable from outside.",
      "explain_dr": "-p 8080:80: kayrbt port dyal l'hôte m3a port dyal container bach twsl lapp mn barra.",
      "example": "docker run -p 8080:80 nginx -- host :8080 -> container :80"
    },
    {
      "text": "Persist data with volumes (`-v mydata:/data`) — container filesystems are ephemeral by default.",
      "explain_dr": "Container filesystem mo2a99at — volumes (-v) howa li kay7fed data.",
      "example": "docker run -v mydata:/data postgres -- data survives container removal\n-- without a volume, files vanish when the container is deleted"
    },
    {
      "text": "A `.dockerignore` file keeps `node_modules`, `.git`, and secrets out of the image.",
      "explain_dr": ".dockerignore kaymna3 node_modules, .git w secrets ydkhlo f limage.",
      "example": "-- .dockerignore:\nnode_modules\n.git\n.env"
    },
    {
      "text": "Tag images with versions (`myapp:1.2.0`) instead of relying only on `latest` for reproducible deploys.",
      "explain_dr": "Taggi limages b versions (1.2.0) machi ghir latest — bach deploy ykoun stable.",
      "example": "docker build -t myapp:1.2.0 .\ndocker tag myapp:1.2.0 registry.example.com/myapp:1.2.0"
    },
    {
      "text": "Multi-stage builds (`FROM node AS build`, then `FROM nginx`) ship only the compiled output — final images shrink from ~1GB to tens of MB.",
      "explain_dr": "Multi-stage build: katbni b image kbira w f lkher katjbed ghir natija — image katwli sghar bzf.",
      "example": "FROM node:20 AS build\nWORKDIR /app\nCOPY . .\nRUN npm run build\nFROM nginx:alpine\nCOPY --from=build /app/dist /usr/share/nginx/html -- only compiled output ships"
    },
    {
      "text": "Each Dockerfile instruction creates a layer; put rarely-changing steps (dependency install) before often-changing ones (code copy) to maximize layer caching.",
      "explain_dr": "Kol instruction = layer; dir dépendances (li matbeddlch) lwel w code lkher — bach lcache ykhdm mzyan.",
      "example": "-- good: COPY package*.json first, install, then COPY code last\n-- bad: COPY . . before npm ci -- code changes invalidate the install layer"
    },
    {
      "text": "`docker exec -it myapp sh` opens a shell inside a running container — your first move when debugging a live service.",
      "explain_dr": "docker exec -it: katdkhel l container li khddam — awal 7aja dirha ila bghiti tdebugi.",
      "example": "docker exec -it myapp sh -- open a shell inside the running container"
    },
    {
      "text": "Environment variables via `--env-file .env` or `environment:` in compose beat hardcoding secrets into the image.",
      "explain_dr": "Secrets: st3mel --env-file wla environment f compose — 3mr ma tktebhom f limage.",
      "example": "docker run --env-file .env myapp -- secrets from the file, not baked in\n-- or compose: environment: [PORT=3000]"
    },
    {
      "text": "`docker compose up -d` runs detached; `docker compose logs -f` streams logs; `docker compose down` stops everything and removes the network.",
      "explain_dr": "up -d khddam f background; logs -f katwrik logs; down kay7bess kolchi.",
      "example": "docker compose up -d -- detached\ndocker compose logs -f -- follow logs\ndocker compose down -- stop and remove"
    },
    {
      "text": "Networks: containers on the same user-defined network reach each other by service name (`db:5432`), with no exposed ports needed between them.",
      "explain_dr": "Containers f nafs réseau: kayhdro b smiyat service (db:5432) bla may7tajou ports m7loula binathom.",
      "example": "services:\n  app:\n    networks: [mynet]\n  db:\n    networks: [mynet] -- app reaches db at db:5432"
    },
    {
      "text": "Healthchecks (`HEALTHCHECK CMD curl -f http://localhost/health`) let compose/orchestrators restart containers that stopped responding.",
      "explain_dr": "HEALTHCHECK: ila lcontainer mab9ach kayjawb, l'orchestrateur kayredémarrih bo7dha.",
      "example": "HEALTHCHECK CMD curl -f http://localhost/health || exit 1 -- orchestrator restarts unhealthy containers"
    },
    {
      "text": "The `latest` tag is mutable — pin versions like `node:20-alpine` so your build today equals your build in six months.",
      "explain_dr": "latest kaytbddel — épingle version b7al node:20-alpine bach build dyal lyoum = build dyal ghdda.",
      "example": "FROM node:20-alpine -- pinned, reproducible\n-- avoid FROM node:latest -- the mutable tag breaks builds over time"
    },
    {
      "text": "Alpine-based images are tiny but use musl libc — some native Node modules break; test before you commit to it.",
      "explain_dr": "Alpine sghir walakin musl libc — ba3d modules natifs dyal Node kaytksrou; jerreb 9bel.",
      "example": "FROM node:20-alpine -- tiny, but musl libc: native modules may fail\n-- test with npm ci && npm test before committing to alpine"
    },
    {
      "text": "`docker system prune` reclaims disk from stopped containers, dangling images, and unused networks — run it when the VM fills up.",
      "explain_dr": "system prune: kayn9i disk mn containers w images lmaytin — dirha ila t3emmer l'espace.",
      "example": "docker system prune -- reclaims space from stopped containers and dangling images"
    },
    {
      "text": "Bind mounts (`-v ./src:/app/src`) sync host code into the container — ideal for local-dev hot reload.",
      "explain_dr": "Bind mount: code dyal l'hôte kaytsynkna m3a container — mitali l hot-reload f dev.",
      "example": "docker run -v ./src:/app/src myapp -- host edits appear instantly in the container"
    },
    {
      "text": "`COPY` vs `ADD`: prefer `COPY`; `ADD` also extracts tarballs and fetches URLs, which makes builds surprising.",
      "explain_dr": "COPY ghir katnsakh; ADD katdir 7wayj zyada (tar, URLs) — COPY hiya l'aslam dima.",
      "example": "COPY app /app -- prefer this\n-- ADD fetches URLs and extracts tarballs: surprising, avoid it"
    },
    {
      "text": "Run as non-root: `USER node` in the Dockerfile limits damage if the app is compromised.",
      "explain_dr": "USER node: khddm lapp bla root — ila t-hackat lapp, d-darar kaykoun mahdoud.",
      "example": "USER node -- run as non-root, limits damage if the app is compromised"
    },
    {
      "text": "A container exits when its main process exits — that is why `CMD [\"nginx\", \"-g\", \"daemon off;\"]` runs nginx in the foreground.",
      "explain_dr": "Container kaymout ila mat lprocess r2issi — 3lach nginx khassou ykhdm f foreground (daemon off).",
      "example": "CMD [\"node\", \"server.js\"] -- container exits when node exits\n-- so run the real service as the main process, not a background daemon"
    },
    {
      "text": "Resource limits (`--memory 512m --cpus 1` or compose `deploy.resources`) stop one greedy container from starving the host.",
      "explain_dr": "Limites (--memory, --cpus): kaymn3ou container wa7ed tmma3 yakol ga3 ressources dyal l'hôte.",
      "example": "docker run --memory 512m --cpus 1 myapp -- one greedy container can't starve the host"
    }
  ]
},
  },
  {
    lang: "FR",
    notes: {
  "React": [
    {
      "text": "React est une bibliothèque JavaScript pour construire des interfaces utilisateur à partir de composants réutilisables.",
      "explain_dr": "React howa library dyal JavaScript bach t-sna3 interfaces mn components tqdar t3awed tsta3malhum f bzaf dyal blayes.",
      "example": "function App() {\n  return <div><Header /><Footer /></div>; // reuse components\n}"
    },
    {
      "text": "Les composants sont des fonctions qui retournent du JSX ; leur nom doit commencer par une majuscule.",
      "explain_dr": "Component howa ghir function kat-rja3 JSX, w lazem smito ybda b 7arf kbir bach React y3arfo.",
      "example": "function Welcome() {\n  return <h1>Hello!</h1>;\n}"
    },
    {
      "text": "Déclarez l'état avec `useState()`. Les rendus se répètent à chaque changement d'état.",
      "explain_dr": "useState() bih kat-declari state, w ay mra state ytbedel, component kat-re-renderi.",
      "example": "const [count, setCount] = useState(0);"
    },
    {
      "text": "Ne mutez jamais l'état directement — passez toujours une nouvelle valeur : `setItems([...items, newItem])`.",
      "explain_dr": "Matsowebch state nichan — dayman 3ti value jdida, b7al spread operator, bach React y7ess b tabdil.",
      "example": "setItems([...items, newItem]); // new array, not items.push()"
    },
    {
      "text": "Exécutez les effets de bord (fetch, abonnements, minuteurs) dans `useEffect()`, avec un tableau de dépendances.",
      "explain_dr": "useEffect() howa blassa dyal side effects b7al fetch w timers, w dependency array kat-golo imta y-t3awed.",
      "example": "useEffect(() => {\n  fetchUsers().then(setUsers);\n}, [userId]);"
    },
    {
      "text": "Un tableau de dépendances vide `[]` fait que l'effet ne s'exécute qu'une fois après le montage.",
      "explain_dr": "ila khaliti [] khawya, effect ghadi ykhdem ghir mra wa7da melli component y-mounta.",
      "example": "useEffect(() => {\n  console.log(\"mounted once\");\n}, []);"
    },
    {
      "text": "Transmettez les données vers le bas avec les props ; les props sont en lecture seule dans le composant enfant.",
      "explain_dr": "Props kat-hbet mn parent l child, w child ma-yqdarsh ybeddelhum — ghir yqrahum.",
      "example": "function Child({ name }) {\n  return <p>Hello {name}</p>; // can read name, never change it\n}"
    },
    {
      "text": "Remontez l'état vers le parent commun le plus proche quand deux composants doivent le partager.",
      "explain_dr": "ila joj components khasshum nafs state, tel3o l a9rab parent moshtarak binathum.",
      "example": "function Parent() {\n  const [shared, setShared] = useState(\"\");\n  return <><A value={shared} /><B onChange={setShared} /></>;\n}"
    },
    {
      "text": "Donnez aux éléments de liste une prop `key` stable pour que React puisse les suivre entre les rendus.",
      "explain_dr": "key stable kat-3awn React y3ref chkon element li tbedel f list, bach ma y-re-renderish kolchi.",
      "example": "{users.map(u => <li key={u.id}>{u.name}</li>)}"
    },
    {
      "text": "Un nouveau rendu se produit quand l'état ou les props changent — évitez les calculs lourds en ligne sans `useMemo()`.",
      "explain_dr": "Re-render kat-w9e3 melli state wla props ytbedlo — 7seb 7wayj t9al b useMemo() bach ma t3awdsh t7sabhom.",
      "example": "const total = useMemo(\n  () => items.reduce((s, i) => s + i.price, 0),\n  [items]\n);"
    },
    {
      "text": "Ne stockez pas un état dérivé — s'il peut être calculé depuis les props, calculez-le pendant le rendu plutôt que de le synchroniser avec `useEffect()` + `setState()`.",
      "explain_dr": "ila state tqdar t7sabha mn props, ma t7ott-hach f state — 7sebha nichan f render, 7it effect + setState ghadi ydir lag.",
      "example": "const fullName = first + \" \" + last; // derived, no useState needed"
    },
    {
      "text": "La fermeture obsolète (stale closure) dans `useEffect()` est le bug n°1 des minuteurs : utilisez la forme fonctionnelle `setCount(c => c + 1)` ou incluez la valeur dans le tableau de dépendances.",
      "explain_dr": "Stale closure: setTimeout wla event handler li khda state 9dim — st3mel setCount(c => c + 1) bach takhod akhir value.",
      "example": "setInterval(() => setCount(c => c + 1), 1000); // functional form"
    },
    {
      "text": "Nettoyez toujours vos effets : retournez une fonction de nettoyage depuis `useEffect()` pour effacer les minuteurs, annuler les fetch et retirer les écouteurs.",
      "explain_dr": "useEffect lazem y-rja3 cleanup function bach t-ms7 timers w listeners, wla ghadi y-tstackew w y-dirou memory leaks.",
      "example": "useEffect(() => {\n  const id = setInterval(tick, 1000);\n  return () => clearInterval(id);\n}, []);"
    },
    {
      "text": "La forme fonctionnelle `setCount(c => c + 1)` garantit que vous travaillez avec le dernier état, même lors de mises à jour rapides successives.",
      "explain_dr": "Functional update setCount(c => c + 1) kat-garantir annak khdam b akhir state, wakha updates yjiw bzriba.",
      "example": "setCount(c => c + 1); // safe even for rapid successive updates"
    },
    {
      "text": "`useRef()` stocke une valeur mutable qui survit aux rendus sans en déclencher — idéal pour les nœuds DOM et les valeurs précédentes.",
      "explain_dr": "useRef b7al sandou9 kat-khebbi fih value li kat-b9a bin renders bla ma t-declenchi render.",
      "example": "const inputRef = useRef(null);\ninputRef.current.focus();"
    },
    {
      "text": "`useCallback()` et `useMemo()` ne servent que si l'enfant est mémoïsé avec `React.memo()` — sinon, c'est du surcoût inutile.",
      "explain_dr": "useCallback w useMemo ma 3endhum ta faida ila child ma-kanetch memoized b React.memo — bla bih ghir overhead zayd.",
      "example": "const Child = React.memo(({ onClick }) =>\n  <button onClick={onClick}>Save</button>\n);"
    },
    {
      "text": "React 18 regroupe automatiquement toutes les mises à jour d'état ; plusieurs appels `setState()` dans un gestionnaire provoquent un seul rendu.",
      "explain_dr": "React 18 kat-jme3 updates dyal state bo7dhum — bzaf dyal setState f nafs handler = ghir render wa7da.",
      "example": "function handleClick() {\n  setCount(c => c + 1);\n  setName(\"Aymane\"); // batched: one re-render total\n}"
    },
    {
      "text": "Les props changent d'identité à chaque rendu si vous passez des objets/tableaux en ligne : `<Comp data={{ a: 1 }} />` casse la mémoïsation — extrayez-les.",
      "explain_dr": "Objet inline f props b7al data={{a:1}} kat-tkhal9 reference jdida kol render — kharjo l barra bach memoization t-khdem.",
      "example": "const data = { a: 1 }; // defined once, outside the render\n<Comp data={data} />"
    },
    {
      "text": "N'appelez jamais un composant comme une simple fonction (`Card()`) — ses hooks casseront. Rendez-le toujours en JSX `<Card />`.",
      "explain_dr": "Ma-t3yetsh l component b7al function Card() — hooks ghadi y-tkherb9o. Dayman renderiha b7al JSX <Card />.",
      "example": "<Card /> // correct — hooks keep working\n// Card()  // wrong — hooks break"
    },
    {
      "text": "Les hooks conditionnels (`if (ok) useState(...)`) violent les règles des hooks — appelez-les dans le même ordre, au niveau supérieur uniquement.",
      "explain_dr": "Hooks khasshum y-t3eyto dayman b nafs tartib — if qbel useState ghadi y-heress rules dyal hooks.",
      "example": "const [data, setData] = useState(null); // always top-level\nif (data) { /* render logic goes here, hooks stay above */ }"
    },
    {
      "text": "Les clés doivent être stables et uniques — l'index du tableau comme `key` casse le réordonnancement, les animations et l'état des champs.",
      "explain_dr": "Index dyal array b7al key ghir f lists static — f lists li kat-tbedel wla kat-t-reorder, key lazem tkon stable w unique.",
      "example": "<li key={todo.id}>{todo.text}</li> // not key={index}"
    },
    {
      "text": "`useReducer()` centralise la logique d'état complexe en une seule fonction — plus propre que plusieurs `useState()` quand les mises à jour interagissent.",
      "explain_dr": "useReducer howa l-7al melli state twelli m3a99da — kol logic dyal updates f blassa wa7da, n9iya kter mn bzaf dyal useState.",
      "example": "const [state, dispatch] = useReducer(reducer, { count: 0 });\ndispatch({ type: \"increment\" });"
    },
    {
      "text": "Les error boundaries (`componentDidCatch`) n'existent qu'en classes — il n'y a toujours pas d'équivalent hook ; utilisez une classe ou une bibliothèque.",
      "explain_dr": "Error boundaries ghir b classes — ma-kaynch hook equivalent, khassk class wrapper wla library.",
      "example": "class ErrorBoundary extends React.Component {\n  componentDidCatch(err) { this.setState({ hasError: true }); }\n}"
    },
    {
      "text": "Les hooks personnalisés doivent commencer par `use` (`useFetch`) pour que le linter et les DevTools les reconnaissent comme hooks.",
      "explain_dr": "Custom hook lazem smito ybda b 'use' bach linter w DevTools y3arfo annaho hook.",
      "example": "function useFetch(url) {\n  const [data, setData] = useState(null);\n  return data;\n}"
    },
    {
      "text": "`Suspense` + `lazy()` découpe le code des routes : `const Page = lazy(() => import('./Page'))` enveloppé dans `<Suspense fallback={...}>`.",
      "explain_dr": "lazy() + Suspense bach t-code-split: pages kat-t-loada ghir melli user y-7tajha, w fallback kat-ban f blast tsanna.",
      "example": "const Page = lazy(() => import(\"./Page\"));\n<Suspense fallback={<p>Loading...</p>}><Page /></Suspense>"
    }
  ],
  "Javascript": [
    {
      "text": "`let` permet la réassignation, `const` non ; `var` a une portée de fonction et est à éviter.",
      "explain_dr": "let kat-tbedel, const la; var function-scoped w 7ssen t-tjannbo.",
      "example": "let x = 1; x = 2; // reassignable\nconst y = 3;        // cannot reassign\n// var is function-scoped — avoid it"
    },
    {
      "text": "`===` compare la valeur et le type ; `==` convertit les types et est une source fréquente de bugs.",
      "explain_dr": "=== kat-9aren value w type bjoj; == kat-dir coercion w kat-jib bugs.",
      "example": "1 === \"1\"; // false (value + type)\n1 == \"1\";  // true (type coercion)"
    },
    {
      "text": "Les fonctions sont de première classe : on peut les assigner, les passer en argument et les retourner.",
      "explain_dr": "Functions f JS first-class — tqdar t-assigniha, t-passiha b7al argument, w t-rje3ha.",
      "example": "const run = (fn) => fn();\nrun(() => console.log(\"hi\"));"
    },
    {
      "text": "Les fonctions fléchées `() => {}` n'ont pas leur propre `this` ; elles héritent de celui de la portée englobante.",
      "explain_dr": "Arrow function ma-3endha-sh this dyalha — kat-wereth this mn scope li dayer biha.",
      "example": "button.addEventListener(\"click\", () => this.handle());\n// arrow has no own 'this' — inherits enclosing scope's"
    },
    {
      "text": "`null` signifie une valeur volontairement vide ; `undefined` signifie qu'aucune valeur n'a été assignée.",
      "explain_dr": "null = value khawya b niya; undefined = value ma-t3tatsh aslan.",
      "example": "let a = null; // intentionally empty\nlet b;        // undefined — never assigned"
    },
    {
      "text": "`map()`, `filter()` et `reduce()` transforment les tableaux sans les muter.",
      "explain_dr": "map/filter/reduce kat-bedlo arrays bla ma y-mutew l-asli.",
      "example": "const doubled = [1, 2, 3].map(n => n * 2);\nconst evens = [1, 2, 3, 4].filter(n => n % 2 === 0);\nconst sum = [1, 2, 3].reduce((s, n) => s + n, 0);"
    },
    {
      "text": "Une fermeture (closure) est une fonction qui se souvient des variables de la portée où elle a été créée.",
      "explain_dr": "Closure: function kat-tfker variables mn scope li t-khel9at fih, wakha dak scope sala.",
      "example": "function counter() {\n  let n = 0;\n  return () => ++n; // remembers n after counter() finished\n}"
    },
    {
      "text": "`async/await` gère les promesses de façon plus lisible que les `.then()` chaînés.",
      "explain_dr": "async/await kat-khli code dyal promises wade7 kter mn .then() li m-chainin.",
      "example": "async function load() {\n  const res = await fetch(\"/api/users\");\n  return res.json();\n}"
    },
    {
      "text": "`JSON.parse()` convertit une chaîne en objet ; `JSON.stringify()` convertit un objet en chaîne.",
      "explain_dr": "JSON.parse: string → object; JSON.stringify: object → string.",
      "example": "JSON.parse('{\"a\":1}');    // string -> object\nJSON.stringify({ a: 1 }); // object -> string"
    },
    {
      "text": "`typeof null` retourne `\"object\"` — une bizarrerie historique bien connue du langage.",
      "explain_dr": "typeof null = 'object' — ghalta 9dima f language b9at l daba.",
      "example": "typeof null; // \"object\" — a historic quirk"
    },
    {
      "text": "`NaN !== NaN` — testez avec `Number.isNaN()`, jamais avec l'égalité ; `Object.is()` gère correctement `-0` et `NaN`.",
      "explain_dr": "NaN ma-kay-sawich rasso — st3mel Number.isNaN() bach t-testi, w Object.is() l -0 w NaN.",
      "example": "NaN === NaN;       // false — never use equality\nNumber.isNaN(NaN); // true\nObject.is(-0, 0);  // false"
    },
    {
      "text": "Hoisting : `var` et les déclarations de fonctions remontent en haut ; `let`/`const` restent dans la zone morte temporelle jusqu'à leur ligne.",
      "explain_dr": "Hoisting: var w function declarations kat-tl3o l fo9; let/const kay-b9aw f temporal dead zone 7ta y-wslo l line dyalhum.",
      "example": "console.log(a); // undefined — var is hoisted\nvar a = 1;\nconsole.log(b); // ReferenceError — let is in the TDZ\nlet b = 2;"
    },
    {
      "text": "Déstructuration avec valeurs par défaut : `const { name = 'Aymane' } = user` — et le spread `...` copie en surface, pas en profondeur.",
      "explain_dr": "Destructuring m3a defaults: { name = 'Aymane' } — w spread ... kat-copy ghir surface, machi deep.",
      "example": "const { name = \"Aymane\" } = user; // default if missing\nconst copy = { ...user };           // shallow copy only"
    },
    {
      "text": "`||` retombe sur toute valeur falsy ; `??` uniquement sur `null`/`undefined` — utilisez `??` pour des défauts qui acceptent `0` et `''`.",
      "explain_dr": "|| kat-rje3 l fallback 3la ay falsy; ?? ghir 3la null/undefined — st3mel ?? ila bghiti t-9bel 0 w ''.",
      "example": "0 || 10; // 10 — 0 is falsy\n0 ?? 10; // 0  — ?? only falls back on null/undefined"
    },
    {
      "text": "Les mutateurs d'`Array.prototype` (`push`, `splice`, `sort`) modifient le tableau sur place ; `slice`, `map`, `concat` retournent de nouveaux tableaux.",
      "explain_dr": "push/splice/sort kat-mutew array nichan; slice/map/concat kat-rj3o array jdida.",
      "example": "arr.push(4);           // mutates arr in place\nconst b = arr.slice(0, 2); // returns a new array"
    },
    {
      "text": "Event loop : les callbacks de `setTimeout` s'exécutent après la vidange de la pile — même `setTimeout(fn, 0)` ne s'exécute jamais immédiatement.",
      "explain_dr": "Event loop: setTimeout kat-tssena 7ta stack y-khwa — wakha 0ms, ma-kat-khdemsh nichan.",
      "example": "setTimeout(() => console.log(\"later\"), 0);\nconsole.log(\"now\"); // logs first, then \"later\"\n"
    },
    {
      "text": "Les microtâches (promesses) passent toujours avant les macrotâches (timers) : une promesse attendue bat un `setTimeout(..., 0)`.",
      "explain_dr": "Microtasks (promises) dayman qbel macrotasks (timers) — awaited promise kat-sbe9 setTimeout(...,0).",
      "example": "setTimeout(() => console.log(\"timer\"), 0);\nPromise.resolve().then(() => console.log(\"promise\")); // logs first"
    },
    {
      "text": "Valeur vs référence : les primitifs copient la valeur, les objets copient la référence — muter un objet passé mute l'original.",
      "explain_dr": "Primitives kat-t-copya b value, objects b reference — ila beddelti object li t-passa, l-asli ghadi ytbedel.",
      "example": "function bump(o) { o.n++; }\nconst obj = { n: 1 };\nbump(obj); // obj.n is now 2 — the original was mutated"
    },
    {
      "text": "`Object.freeze()` ne gèle que le niveau supérieur ; les objets imbriqués restent mutables — le gel est superficiel.",
      "explain_dr": "Object.freeze ghir l-fo9 — nested objects kay-b9aw mutable, freeze machi deep.",
      "example": "const o = Object.freeze({ nested: { a: 1 } });\no.nested.a = 2; // still works — only the top level is frozen"
    },
    {
      "text": "Le spread d'une chaîne donne ses caractères : `[...'abc']` → `['a','b','c']` ; itérables uniquement — les objets simples ne sont pas itérables.",
      "explain_dr": "Spread dyal string kat-3ti characters: [...'abc']; ghir iterables — plain object machi iterable.",
      "example": "[...\"abc\"]; // [\"a\", \"b\", \"c\"]"
    },
    {
      "text": "`Promise.all()` rejette dès le premier échec ; `Promise.allSettled()` attend tout et rapporte chaque résultat.",
      "explain_dr": "Promise.all kat-fail 3la awel wa7da; allSettled kat-tsenna kolchi w kat-3tik natija dyal kol wa7da.",
      "example": "Promise.all([p1, p2]);        // rejects on the first failure\nPromise.allSettled([p1, p2]); // waits for all, reports each outcome"
    },
    {
      "text": "`for...of` itère les valeurs d'un itérable ; `for...in` itère les clés énumérables — `of` pour les tableaux, `in` pour les objets.",
      "explain_dr": "for...of l values dyal iterable; for...in l keys — of l arrays, in l objects.",
      "example": "for (const v of [1, 2]) {}   // values of an iterable\nfor (const k in { a: 1 }) {} // keys of an object"
    },
    {
      "text": "Une fonction `async` retourne toujours une promesse, même avec `return 5` — elle se résout avec `5`.",
      "explain_dr": "async function dayman kat-rje3 promise — wakha t-dir return 5, kat-resolvi b 5.",
      "example": "async function f() { return 5; }\nf().then(v => console.log(v)); // 5"
    },
    {
      "text": "`this` dans une méthode classique dépend du site d'appel : `obj.method()` marche, mais `const f = obj.method; f()` perd `this`.",
      "explain_dr": "this f method 3adiya 3la 7sab kifach 3eyeti liha: obj.method() ok, walakin const f = obj.method; f() kat-daye3 this.",
      "example": "obj.method();            // this = obj\nconst f = obj.method;\nf(); // this is lost (undefined)"
    },
    {
      "text": "Le chaînage optionnel `user?.address?.city` court-circuite vers `undefined` ; combinez avec `??` pour des défauts sûrs : `user?.age ?? 18`.",
      "explain_dr": "user?.address?.city kat-rje3 undefined ila chi wa7da ma-kaynach — zidi ?? bach t-3ti default: user?.age ?? 18.",
      "example": "const city = user?.address?.city; // undefined if any link is missing\nconst age = user?.age ?? 18;        // safe default"
    }
  ],
  "Typescript": [
    {
      "text": "TypeScript est un sur-ensemble typé de JavaScript qui se compile en JavaScript pur.",
      "explain_dr": "TypeScript howa JavaScript zayd 3lih types, w kat-tcompila l JavaScript 3adi.",
      "example": "let name: string = \"Aymane\"; // type annotation, compiles to plain JS"
    },
    {
      "text": "Les types statiques détectent les bugs à la compilation, avant même l'exécution du code.",
      "explain_dr": "Types static kat-cheddo bugs f wa9t compilation, 9bel ma code y-khdem.",
      "example": "function add(a: number, b: number) { return a + b; }\nadd(1, \"2\"); // compile-time error — caught before running"
    },
    {
      "text": "Déclarez les types avec des alias `type` ou des définitions `interface` : `interface User { name: string; age: number }`.",
      "explain_dr": "type w interface bach t-declari shapes: interface User { name: string; age: number }.",
      "example": "interface User { name: string; age: number }\nconst u: User = { name: \"Aymane\", age: 24 };"
    },
    {
      "text": "Annotez les variables, les paramètres et les retours : `function add(a: number, b: number): number`.",
      "explain_dr": "Annoti variables, params, w return: function add(a: number, b: number): number.",
      "example": "function add(a: number, b: number): number {\n  return a + b;\n}"
    },
    {
      "text": "`string | number` est un type union — la valeur peut être de l'un ou l'autre type.",
      "explain_dr": "string | number = union — value tqdar tkon wa7da mn joj.",
      "example": "let id: string | number;\nid = \"abc\"; // ok\nid = 42;    // ok"
    },
    {
      "text": "Les génériques comme `Array<T>` permettent d'écrire du code réutilisable et type-safe : `function first<T>(arr: T[]): T`.",
      "explain_dr": "Generics Array<T> kat-khlik t-kteb code reusable w type-safe.",
      "example": "function first<T>(arr: T[]): T {\n  return arr[0];\n}\nfirst<number>([1, 2, 3]);"
    },
    {
      "text": "Utilisez `type` pour les unions et intersections ; utilisez `interface` quand vous prévoyez d'étendre des objets.",
      "explain_dr": "type l unions w intersections; interface melli ghadi t-extendi objects.",
      "example": "type Status = \"ok\" | \"error\";             // union -> type\ninterface Admin extends User { role: string } // extension -> interface"
    },
    {
      "text": "Le type `unknown` est l'alternative sûre à `any` — il faut l'affiner avant de l'utiliser.",
      "explain_dr": "unknown howa any l-amina — lazem t-narrowiha 9bel ma t-sta3melha.",
      "example": "let v: unknown = getData();\nif (typeof v === \"string\") v.toUpperCase(); // narrow first"
    },
    {
      "text": "`?` marque une propriété ou un paramètre optionnel : `name?: string`.",
      "explain_dr": "? kat-3ni optional: name?: string.",
      "example": "function greet(name?: string) {\n  return \"Hello \" + (name ?? \"guest\");\n}"
    },
    {
      "text": "Activez le mode `strict` dans `tsconfig.json` pour la vérification de types la plus forte.",
      "explain_dr": "strict mode f tsconfig.json = a9wa type checking.",
      "example": "{ \"compilerOptions\": { \"strict\": true } } // tsconfig.json"
    },
    {
      "text": "`any` désactive complètement la vérification de types ; préférez `unknown` et affinez avec des gardes `typeof`/`instanceof`.",
      "explain_dr": "any kat-tfi type checking kamel — st3mel unknown w narrowi b typeof/instanceof.",
      "example": "let a: any; // no checking — avoid\nlet u: unknown = fetchData();\nif (typeof u === \"number\") u.toFixed(2); // narrow with a guard"
    },
    {
      "text": "`never` est le type d'une valeur qui ne peut jamais survenir — les fonctions qui lancent toujours ou bouclent sans fin retournent `never`.",
      "explain_dr": "never = type dyal 7aja li 3omrha ma-t-w9e3 — functions li dayman kat-throw wla kat-loop bla nihaya.",
      "example": "function fail(msg: string): never {\n  throw new Error(msg);\n}"
    },
    {
      "text": "Les unions discriminées (`type: 'ok' | 'error'`) plus un `switch` donnent un affinement exhaustif — le compilateur signale les cas manquants.",
      "explain_dr": "Discriminated unions (type: 'ok'|'error') m3a switch — compiler kay-golik ila nsiti case.",
      "example": "type Result = { type: \"ok\"; data: string } | { type: \"error\"; msg: string };\nswitch (r.type) {\n  case \"ok\": return r.data;\n  case \"error\": throw new Error(r.msg); // missing case = compile error\n}"
    },
    {
      "text": "Les gardes de type sont des fonctions retournant un prédicat : `function isUser(x: unknown): x is User` — le compilateur fait confiance à votre test.",
      "explain_dr": "Type guard: function kat-rje3 x is User — compiler kay-tiq f check dyalek.",
      "example": "function isUser(x: unknown): x is User {\n  return typeof x === \"object\" && x !== null && \"name\" in x;\n}"
    },
    {
      "text": "`as const` fige un littéral à son type le plus étroit : `const roles = ['admin','user'] as const` donne un tuple readonly de littéraux.",
      "explain_dr": "as const kat-jemmed literal l adya9 type: ['admin','user'] as const → readonly tuple.",
      "example": "const roles = [\"admin\", \"user\"] as const; // readonly tuple of literals\ntype Role = typeof roles[number];           // \"admin\" | \"user\"\n"
    },
    {
      "text": "L'opérateur `satisfies` vérifie une valeur contre un type sans l'élargir : `const cfg = {...} satisfies Config`.",
      "explain_dr": "satisfies kat-checki value 3la type bla ma t-wesse3 type dyalo.",
      "example": "const cfg = { port: 3000, host: \"localhost\" } satisfies Config;"
    },
    {
      "text": "`Record<string, number>` est un raccourci pour un type objet à clés string et valeurs number.",
      "explain_dr": "Record<string, number> = objet li keys strings w values numbers, b ikhtisar.",
      "example": "const scores: Record<string, number> = { aymane: 95 };"
    },
    {
      "text": "`Pick<T, 'a' | 'b'>`, `Omit<T, 'c'>`, `Partial<T>`, `Required<T>` construisent de nouveaux types depuis les existants — sans duplication.",
      "explain_dr": "Pick/Omit/Partial/Required kat-bniw types jdad mn types 9dam — bla t3awd.",
      "example": "type Preview = Pick<User, \"name\">; // { name: string }\ntype Draft = Partial<User>;           // every property optional"
    },
    {
      "text": "Les interfaces fusionnent automatiquement (fusion de déclarations) ; pas les types — étendre une interface tierce exige `interface`.",
      "explain_dr": "Interfaces kat-merge bo7dhum; types la — extend dyal interface dyal library khasso interface.",
      "example": "interface Box { w: number }\ninterface Box { h: number } // merges -> { w: number; h: number }"
    },
    {
      "text": "Piège de covariance : assigner `Dog[]` à `Animal[]` compile, mais y pousser un `Cat` corrompt le tableau — les tableaux sont malsains en TS.",
      "explain_dr": "Arrays f TS machi sound: Dog[] → Animal[] kat-compile walakin push Cat ghadi y-kherbe9ha.",
      "example": "const dogs: Dog[] = [];\nconst animals: Animal[] = dogs; // compiles...\nanimals.push(new Cat());        // ...but corrupts dogs"
    },
    {
      "text": "Les propriétés et tableaux `readonly` (`readonly string[]`) n'existent qu'à la compilation — rien n'empêche une mutation à l'exécution.",
      "explain_dr": "readonly ghir f compile-time — f runtime walou ma-y-7bess mutation.",
      "example": "const arr: readonly string[] = [\"a\"];\narr.push(\"b\"); // compile error — nothing stops mutation at runtime"
    },
    {
      "text": "Les enums compilent vers de vrais objets à l'exécution ; les unions de littéraux string (`'a' | 'b'`) disparaissent après compilation — préférez les unions.",
      "explain_dr": "Enums kay-b9aw f runtime; unions dyal strings kat-mshiw m3a compilation — unions 7ssen.",
      "example": "enum Role { Admin, User }   // real object at runtime\ntype Status = \"a\" | \"b\";     // vanishes after compile — prefer unions"
    },
    {
      "text": "Les contraintes de génériques bornent le paramètre : `function get<T extends { id: number }>(item: T)` — T doit avoir `id`.",
      "explain_dr": "T extends { id: number } = constraint — T lazem tkon 3endha id.",
      "example": "function get<T extends { id: number }>(item: T): number {\n  return item.id; // T must have id\n}"
    },
    {
      "text": "`unknown` dans une clause `catch` (TS 4.4+) : `catch (e: unknown)` est la valeur par défaut en strict — affinez avant d'utiliser `e`.",
      "explain_dr": "catch (e: unknown) howa default f strict — narrowi e 9bel ma t-sta3mlo.",
      "example": "try { risky(); }\ncatch (e: unknown) {\n  if (e instanceof Error) console.log(e.message); // narrow before use\n}"
    },
    {
      "text": "Les signatures d'index `{ [key: string]: any }` autorisent des clés dynamiques, mais préférez `Record<>` ou `Map<>` pour la sécurité des types.",
      "explain_dr": "Index signatures {[key: string]: any} kat-9bel dynamic keys, walakin Record wla Map amn kter.",
      "example": "const cache: Record<string, User> = {}; // safer than {[k: string]: any}\ncache[\"u1\"] = { name: \"Aymane\", age: 24 };"
    }
  ],
  "VueJs": [
    {
      "text": "Vue est un framework JavaScript progressif pour construire des interfaces utilisateur réactives.",
      "explain_dr": "Vue framework progressif bach t-sna3 interfaces reactive.",
      "example": "createApp({ data: () => ({ message: \"Hello\" }) }).mount(\"#app\");"
    },
    {
      "text": "Avec l'API Options, l'état du composant vit dans `data()`, la logique dans `methods` et les valeurs dérivées dans `computed`.",
      "explain_dr": "Options API: data() l state, methods l logic, computed l values li kat-t7seb.",
      "example": "export default {\n  data: () => ({ count: 0 }),\n  methods: { inc() { this.count++; } },\n  computed: { double() { return this.count * 2; } }\n};"
    },
    {
      "text": "L'API Composition utilise `setup()` avec `ref()` et `reactive()` pour l'état.",
      "explain_dr": "Composition API: setup() m3a ref() w reactive() l state.",
      "example": "setup() {\n  const count = ref(0);\n  const state = reactive({ name: \"Aymane\" });\n  return { count, state };\n}"
    },
    {
      "text": "Liez les données au DOM avec l'interpolation `{{ }}` et des directives comme `v-bind`, `v-on`, `v-if`, `v-for`.",
      "explain_dr": "Interpolation {{ }} w directives v-bind, v-on, v-if, v-for bach t-rebt data m3a DOM.",
      "example": "<p>{{ title }}</p>\n<button v-bind:disabled=\"!ok\" v-on:click=\"save\">Save</button>\n<div v-if=\"show\">Hi</div>\n<li v-for=\"t in todos\">{{ t.text }}</li>"
    },
    {
      "text": "Utilisez `v-model` pour la liaison bidirectionnelle sur les champs de formulaire.",
      "explain_dr": "v-model = two-way binding l form inputs.",
      "example": "<input v-model=\"username\" />"
    },
    {
      "text": "Les props transmettent les données du parent vers l'enfant ; l'enfant émet des événements vers le haut avec `$emit`.",
      "explain_dr": "Props mn parent l child; child kay-jawb b $emit l fo9.",
      "example": "props: [\"title\"],\nmethods: { close() { this.$emit(\"close\"); } }"
    },
    {
      "text": "Les propriétés computed mettent leur résultat en cache et ne sont recalculées que si leurs dépendances changent.",
      "explain_dr": "computed kat-cachi resultat — kat-t3awd t7seb ghir melli dependencies ytbedlo.",
      "example": "computed: {\n  total() { return this.items.reduce((s, i) => s + i.price, 0); }\n}"
    },
    {
      "text": "Hooks de cycle de vie : `mounted()` s'exécute après le premier rendu, `unmounted()` au démontage — idéal pour le nettoyage.",
      "explain_dr": "mounted() melli render l-owel y-sali; unmounted() f teardown — mzyan l cleanup.",
      "example": "mounted() { this.timer = setInterval(this.tick, 1000); },\nunmounted() { clearInterval(this.timer); } // cleanup"
    },
    {
      "text": "Utilisez `:key` avec les listes `v-for` pour que Vue puisse suivre les éléments efficacement.",
      "explain_dr": ":key m3a v-for bach Vue y-tbe3 elements b fa3iliya.",
      "example": "<li v-for=\"u in users\" :key=\"u.id\">{{ u.name }}</li>"
    },
    {
      "text": "Les Single File Components (`.vue`) combinent template, script et style dans un seul fichier.",
      "explain_dr": ".vue file wa7da fiha template + script + style.",
      "example": "<template><p>{{ msg }}</p></template>\n<script>export default { data: () => ({ msg: \"Hi\" }) }</script>\n<style scoped>p { color: red }</style>"
    },
    {
      "text": "`ref()` exige `.value` dans le script mais se déplie tout seul dans le template — oublier `.value` est l'erreur n°1 de la Composition API.",
      "explain_dr": "ref() khass .value f script walakin f template kat-tunwrap bo7dha — nsyan .value howa ghalta n°1.",
      "example": "const count = ref(0);\ncount.value++;     // required in script\n// {{ count }}     // auto-unwrapped in template"
    },
    {
      "text": "`reactive()` ne fonctionne que sur les objets ; le déstructurer casse la réactivité — utilisez `toRefs()` ou restez sur `ref()` pour les primitifs.",
      "explain_dr": "reactive() ghir l objects; destructuring kat-heress reactivity — st3mel toRefs() wla ref().",
      "example": "const state = reactive({ a: 1, b: 2 });\nconst { a } = toRefs(state); // destructure without losing reactivity"
    },
    {
      "text": "Un `computed()` avec un simple getter est en lecture seule ; passez `{ get, set }` pour le rendre inscriptible (pratique avec `v-model`).",
      "explain_dr": "computed getter ghir read-only; 3tih { get, set } bach y-welli writable (mzyan m3a v-model).",
      "example": "const fullName = computed(() => first.value + \" \" + last.value);"
    },
    {
      "text": "`watch()` est paresseux (se déclenche au changement) ; `watchEffect()` s'exécute immédiatement et suit ce qu'il touche — idéal pour les synchros rapides.",
      "explain_dr": "watch lazy (kat-khdem melli y-tbedel); watchEffect kat-khdem nichan w kat-tbe3 li mes-sat.",
      "example": "watch(count, v => console.log(\"changed:\", v)); // lazy — on change only\nwatchEffect(() => console.log(count.value));     // runs now"
    },
    {
      "text": "Utilisez `watch` avec `{ immediate: true }` quand le gestionnaire doit aussi s'exécuter à l'initialisation.",
      "explain_dr": "watch m3a { immediate: true } bach handler y-khdem mn l-ewel.",
      "example": "watch(user, fetchProfile, { immediate: true });"
    },
    {
      "text": "Les emits doivent être déclarés dans `defineEmits()` en `<script setup>` — sinon ils retombent sur le DOM comme des attributs.",
      "explain_dr": "Emits lazem y-tdeclara b defineEmits() f script setup — wla ghadi y-tihou 3la DOM b7al attributes.",
      "example": "const emit = defineEmits([\"save\"]);\nemit(\"save\", payload);"
    },
    {
      "text": "Les attributs non-props retombent automatiquement sur l'élément racine ; désactivez avec `inheritAttrs: false` et liez via `$attrs`.",
      "explain_dr": "Attributes li machi props kat-mshiw l root element bo7dhum; 7bess b inheritAttrs: false w st3mel $attrs.",
      "example": "export default { inheritAttrs: false }; // stops auto fallthrough\n// <div v-bind=\"$attrs\">...</div> — bind manually"
    },
    {
      "text": "`v-if` détruit et recrée l'élément ; `v-show` ne fait que basculer le CSS — préférez `v-show` pour les bascules fréquentes.",
      "explain_dr": "v-if kat-hedem w t-3awd t-bni element; v-show ghir kat-beddel CSS — v-show l toggles li kat-t3awd.",
      "example": "<p v-if=\"loggedIn\">Welcome</p> <!-- destroyed/recreated -->\n<p v-show=\"menuOpen\">Menu</p>     <!-- CSS toggle only -->"
    },
    {
      "text": "Ne mélangez jamais `v-if` et `v-for` sur le même élément — `v-if` a la priorité et ne voit pas la variable de boucle.",
      "explain_dr": "Ma-t-khaletch v-if w v-for f nafs element — v-if 3endha priority w ma-kat-shofsh variable dyal loop.",
      "example": "<!-- wrong: <li v-for=\"t in todos\" v-if=\"t.done\"> -->\n<template v-for=\"t in todos\">\n  <li v-if=\"t.done\" :key=\"t.id\">{{ t.text }}</li>\n</template>"
    },
    {
      "text": "Les modificateurs `.lazy`, `.number` et `.trim` règlent `v-model` sur les champs — `v-model.number` convertit en nombre.",
      "explain_dr": "Modifiers dyal v-model: .lazy, .number, .trim — v-model.number kat-7wel l number.",
      "example": "<input v-model.number=\"age\" />   <!-- cast to number -->\n<input v-model.trim=\"name\" />     <!-- strip whitespace -->\n<input v-model.lazy=\"search\" />   <!-- sync on change, not input -->"
    },
    {
      "text": "`provide()`/`inject()` partage l'état dans des arborescences profondes sans prop drilling — préférez un store (Pinia) à grande échelle.",
      "explain_dr": "provide/inject kat-partagi state bin components b3ad bla prop drilling — f scale kbir, Pinia 7ssen.",
      "example": "provide(\"theme\", \"dark\");      // ancestor\nconst theme = inject(\"theme\");   // deep descendant, no prop drilling"
    },
    {
      "text": "En `<script setup>`, les déclarations de niveau supérieur sont automatiquement exposées au template — pas de `return` nécessaire.",
      "explain_dr": "f script setup, kolchi li declariti l fo9 kay-ban l template bo7do — bla return.",
      "example": "<script setup>\nconst msg = \"Hi\"; // exposed to the template — no return needed\n</script>"
    },
    {
      "text": "Définissez les props avec `defineProps()` + TypeScript : `defineProps<{ msg: string }>()` — les types sont vérifiés à la compilation.",
      "explain_dr": "defineProps<{ msg: string }>() = props m3a TypeScript, types kat-tchecka f compilation.",
      "example": "defineProps<{ msg: string }>(); // props type-checked at compile time"
    },
    {
      "text": "Les slots passent du contenu template dans l'enfant : slots par défaut, nommés (`<template #header>`) et à portée (`<slot :item>`).",
      "explain_dr": "Slots: content mn parent l dakhel child — default, named (#header), w scoped (<slot :item>).",
      "example": "<Modal><template #header>Title</template>Body text</Modal>\n<!-- child: <slot name=\"header\" /> then <slot /> for default -->"
    },
    {
      "text": "Cycle de vie en Composition API : `onMounted()`, `onUnmounted()` — et `onBeforeUnmount()` juste avant le démontage pour le nettoyage final.",
      "explain_dr": "Composition lifecycle: onMounted(), onUnmounted() — w onBeforeUnmount() 9bel teardown l cleanup l-akhir.",
      "example": "onMounted(() => start());\nonBeforeUnmount(() => cleanup()); // just before teardown\nonUnmounted(() => teardown());"
    }
  ],
  "Html": [
    {
      "text": "HTML est le langage de balisage qui structure le contenu des pages web.",
      "explain_dr": "HTML ghir howa l'ossature dyal la page, CSS howa li kayzid la decoration.",
      "example": "<h1>My Page</h1>\n<p>HTML structures the content of the page.</p>"
    },
    {
      "text": "Les balises sémantiques comme `<header>`, `<main>`, `<nav>`, `<article>` et `<footer>` décrivent le sens, pas seulement la mise en page.",
      "explain_dr": "Semantic tags kaygolo l Google w screen readers chno kay3ni had l'element, machi ghir div khawi.",
      "example": "<header>Site name</header>\n<main>\n  <article>Post text</article>\n</main>\n<footer>© 2026</footer>"
    },
    {
      "text": "Chaque page doit avoir exactement un `<h1>` ; les titres doivent suivre une hiérarchie logique.",
      "explain_dr": "h1 wahda f page, b7al l3onwan lkbir dyal ktab, w headings li moraha mrettbin.",
      "example": "<h1>Complete Guide</h1>\n<h2>Installation</h2>\n<h3>On Linux</h3>"
    },
    {
      "text": "`<img>` a besoin d'un attribut `alt` pour l'accessibilité et quand l'image ne charge pas.",
      "explain_dr": "alt howa description dyal tsowira, kayban ila tsowira ma loadatch w screen readers kay9rawh.",
      "example": "<img src=\"photo.jpg\" alt=\"Sunset over the bay\">"
    },
    {
      "text": "Formulaires : les types d'`<input>` comme `email`, `password` et `number` offrent une validation intégrée.",
      "explain_dr": "type=email kaychecki wach l'email s7i7 bo7do, ma t7tajch JavaScript.",
      "example": "<input type=\"email\" required>\n<input type=\"number\" min=\"1\" max=\"10\">"
    },
    {
      "text": "L'élément `label` lié via `for`/`id` rend les champs cliquables et accessibles aux lecteurs d'écran.",
      "explain_dr": "label ila kan mrabit m3a input, click 3la label kaydir focus f input — pratique w accessible.",
      "example": "<label for=\"email\">Email</label>\n<input id=\"email\" type=\"email\">"
    },
    {
      "text": "Les éléments vides comme `<img>`, `<br>` et `<input>` n'ont pas de balise fermante.",
      "explain_dr": "Void elements b7al img w br ma 3ndhomch closing tag, kaytseddo bo7dhom.",
      "example": "<img src=\"a.png\" alt=\"\">\n<br>\n<input type=\"text\">"
    },
    {
      "text": "La déclaration `<!DOCTYPE html>` place le navigateur en mode standards.",
      "explain_dr": "DOCTYPE kaygol l browser: khdem b standards jdad, machi b l9dam.",
      "example": "<!DOCTYPE html>\n<html>\n  <!-- standards mode on -->\n</html>"
    },
    {
      "text": "Les attributs `data-*` stockent des données personnalisées sur les éléments, lisibles via `element.dataset`.",
      "explain_dr": "data-* b7al jib sghir kat7et fih info khassa b element w kat9raha b dataset.",
      "example": "<button data-user-id=\"42\">Edit</button>\nel.dataset.userId; // \"42\""
    },
    {
      "text": "Les éléments inline (`<span>`, `<a>`) suivent le flux du texte ; les éléments block (`<div>`, `<p>`) commencent sur une nouvelle ligne.",
      "explain_dr": "span w a kaymchiw m3a text f nafs satr, div w p kaybdaw satr jdid.",
      "example": "<p>Text <span>flows inline</span> with the words.</p>\n<div>Starts on a new line.</div>"
    },
    {
      "text": "Un `<button>` dans un formulaire vaut `type=\"submit\"` par défaut — mettez toujours `type=\"button\"` sur les boutons pilotés en JS.",
      "explain_dr": "button f form ila ma 3titihch type, kaytssarraf b7al submit — hadi akber ghalta katnssa.",
      "example": "<form>\n  <button type=\"submit\">Save</button>\n  <button type=\"button\">Cancel</button>\n</form>"
    },
    {
      "text": "Un `<input>` sans attribut `name` est ignoré silencieusement à la soumission du formulaire.",
      "explain_dr": "ila input ma 3ndoch name, lform kaytajhlo ghir kima ma kaynch.",
      "example": "<!-- no name => field is skipped on submit -->\n<input type=\"text\" name=\"city\">"
    },
    {
      "text": "Les rôles ARIA n'ajoutent aucun comportement : `role=\"button\"` exige toujours la gestion clavier et `tabindex`.",
      "explain_dr": "role=button ghir smiya, ma kayzidch lkhadma dyal button — khassk tzid keyboard w tabindex.",
      "example": "<div role=\"button\" tabindex=\"0\">Open</div>\n<!-- still needs a keydown handler! -->"
    },
    {
      "text": "Les scripts `defer` s'exécutent dans l'ordre après le parsing ; les scripts `async` s'exécutent dès leur téléchargement, sans ordre garanti.",
      "explain_dr": "defer kaystna parsing w kaykhdem b tartib, async kaykhdem mli ytelechargea bla tartib — far9 mohim f interviews.",
      "example": "<script src=\"app.js\" defer></script>\n<script src=\"ads.js\" async></script>"
    },
    {
      "text": "La balise viewport `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">` est indispensable au responsive sur mobile.",
      "explain_dr": "viewport meta tag howa li kaykhali site yban mzyan f telephone, bla bih kolchi yban sghir.",
      "example": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"
    },
    {
      "text": "`<details>` et `<summary>` offrent un accordéon natif sans aucun JavaScript.",
      "explain_dr": "details/summary b7al accordion jahz, ma kay7tajch JavaScript.",
      "example": "<details>\n  <summary>How does shipping work?</summary>\n  <p>Answer goes here.</p>\n</details>"
    },
    {
      "text": "Mettez `lang` sur la balise `<html>` — les lecteurs d'écran choisissent la bonne prononciation et ça aide le SEO.",
      "explain_dr": "lang f html kaygol l screen reader b ina logha y9ra, w kay3awn SEO.",
      "example": "<html lang=\"fr\">\n  <!-- screen readers + SEO know the language -->\n</html>"
    },
    {
      "text": "La validation native est gratuite avec `required`, `minlength` et `pattern` ; `form.reportValidity()` la déclenche depuis JS.",
      "explain_dr": "required w pattern kayvalidiw bo7dhom, w reportValidity katkhlik tdeclencheha men JS.",
      "example": "<input required minlength=\"3\" pattern=\"[A-Za-z]+\">\nform.reportValidity(); // trigger native validation"
    },
    {
      "text": "Le contenu de `<template>` est inerte jusqu'à son clonage — idéal pour le balisage rendu par JS.",
      "explain_dr": "template b7al moule: content dyalo na3s 7ta tclonih b JavaScript.",
      "example": "<template id=\"card\">\n  <div class=\"card\"></div>\n</template>\ncard.content.cloneNode(true); // inert until cloned"
    },
    {
      "text": "Les custom elements doivent contenir un tiret (`<my-card>`) ; enregistrer `<mycard>` lève une erreur.",
      "explain_dr": "custom element khasso hyphen (my-card), bla hyphen l browser kayrfdo.",
      "example": "<!-- hyphen is mandatory -->\n<my-card></my-card>\ncustomElements.define(\"my-card\", MyCard);"
    },
    {
      "text": "`loading=\"lazy\"` diffère les images hors écran et `decoding=\"async\"` sort le décodage du thread principal.",
      "explain_dr": "loading=lazy kaykhali tsawer li lte7t ma yloadiwch 7ta tqrab lihom — site kaytzad f sor3a.",
      "example": "<img src=\"hero.jpg\" alt=\"Hero\" loading=\"lazy\" decoding=\"async\">"
    },
    {
      "text": "Les valeurs d'`id` doivent être uniques par page — les doublons cassent `getElementById`, les labels et les références ARIA.",
      "explain_dr": "id khasso ykon unique f page kamla, ila t3awd getElementById kayjib ghir lwel.",
      "example": "<!-- ids must be unique: only one id=\"email\" per page -->\ndocument.getElementById(\"email\");"
    },
    {
      "text": "L'attribut `hidden` perd face à toute règle `display` de l'auteur, car il passe par le `display: none` de la feuille UA.",
      "explain_dr": "hidden kaytghleb b ay display rule dyalk, hit howa ghir display:none men browser.",
      "example": "/* author display beats hidden, so re-assert it */\n[hidden] { display: none !important; }"
    },
    {
      "text": "Regroupez les contrôles liés avec `<fieldset>` et `<legend>` pour que les lecteurs d'écran les annoncent comme une unité.",
      "explain_dr": "fieldset w legend kayjm3o inputs li 3ndhom 3ala9a, screen reader kay9rahom b7al group wahda.",
      "example": "<fieldset>\n  <legend>Shipping address</legend>\n  <input name=\"city\">\n</fieldset>"
    },
    {
      "text": "Les valeurs positives de `tabindex` créent des ordres de tabulation fragiles — limitez-vous à `tabindex=\"0\"` ou `-1`.",
      "explain_dr": "tabindex positive kaykherbe9 tartib dyal Tab — ghir 0 w -1 li khassk.",
      "example": "<div tabindex=\"0\">Focusable</div>\n<div tabindex=\"-1\">Focusable only via JS</div>"
    }
  ],
  "Css": [
    {
      "text": "CSS stylise les éléments HTML avec des sélecteurs : élément, `.class`, `#id` et sélecteurs `[attribut]`.",
      "explain_dr": "CSS ghir howa lmaquillage dyal HTML, selectors kaygolo l browser chkon ghadi ytziyan.",
      "example": "p { color: red; }\n.btn { padding: 8px; }\n#nav { height: 60px; }\n[type=\"email\"] { border: 1px solid gray; }"
    },
    {
      "text": "Ordre de spécificité : styles inline > `#id` > `.class` > élément — en cas d'égalité, la dernière règle gagne.",
      "explain_dr": "specificity b7al wazn: id t9il 3la class, w class t9ila 3la element.",
      "example": "/* inline > #id > .class > element; later wins ties */\n#nav .link { color: red; }\n.link { color: blue; } /* loses */"
    },
    {
      "text": "Le modèle de boîte, c'est contenu + padding + bordure + marge ; `box-sizing: border-box` rend les dimensions prévisibles.",
      "explain_dr": "box-sizing border-box kaykhali padding w border dakhl l width, bla bih l7sabat katkhroj ghalta.",
      "example": "* { box-sizing: border-box; }\n/* width now includes padding + border */"
    },
    {
      "text": "Flexbox (`display: flex`) dispose les éléments en une dimension ; CSS Grid gère deux dimensions.",
      "explain_dr": "flex l satr wa7ed (menu), grid l jouj dimensions (layout kaml).",
      "example": ".row { display: flex; }\n.grid { display: grid; grid-template-columns: 1fr 1fr; }"
    },
    {
      "text": "Utilisez `margin` pour l'espace entre les éléments et `padding` pour l'espace à l'intérieur d'un élément.",
      "explain_dr": "margin howa lmasafa bin jiran, padding howa lmasafa ldakhl dyal dar.",
      "example": ".card { margin: 16px; }  /* space BETWEEN cards */\n.card { padding: 16px; } /* space INSIDE the card */"
    },
    {
      "text": "Les media queries (`@media (max-width: 768px)`) rendent les mises en page responsives.",
      "explain_dr": "media queries kaybdlo design 3la 7sab l3ard dyal l'ecran — responsive design.",
      "example": "@media (max-width: 768px) {\n  .grid { grid-template-columns: 1fr; }\n}"
    },
    {
      "text": "Les pseudo-classes comme `:hover`, `:focus` et `:nth-child()` stylisent les éléments dans des états spécifiques.",
      "explain_dr": "hover w focus w nth-child kaykhaliwk tstili l'element ghir f 7ala mo3ayana.",
      "example": "a:hover { color: red; }\ninput:focus { outline: 2px solid blue; }\nli:nth-child(odd) { background: #eee; }"
    },
    {
      "text": "Les variables CSS (`--brand: blue;`) déclarées une fois peuvent être réutilisées via `var(--brand)`.",
      "explain_dr": "CSS variables b7al 3elba kat7et fiha lon w katst3mlo f blast bzf.",
      "example": ":root { --brand: blue; }\n.btn { background: var(--brand); }"
    },
    {
      "text": "Préférez les unités `rem` pour des tailles adaptatives ; `1rem` vaut la taille de police racine (souvent 16px).",
      "explain_dr": "rem kaykber w ysghar m3a font-size dyal root — mzyan l accessibility.",
      "example": "html { font-size: 16px; }\nh1 { font-size: 2rem; } /* = 32px, scales with root */"
    },
    {
      "text": "`z-index` ne fonctionne que sur les éléments positionnés (`relative`, `absolute`, `fixed` ou `sticky`).",
      "explain_dr": "z-index ma kaykhdemch ila l'element ma 3ndoch position (relative, absolute...).",
      "example": ".modal { position: fixed; z-index: 100; }\n/* z-index needs a position */"
    },
    {
      "text": "Les marges verticales adjacentes fusionnent vers la plus grande, pas la somme — `margin-bottom: 20px` face à `margin-top: 30px` donne 30px d'espace.",
      "explain_dr": "margins l3amoudiya ma katjma3ch, katakhdo ghir lkbira — hadi ghalta dyal bzf dyal nas.",
      "example": "/* 20px margin meets 30px margin -> 30px gap, not 50px */\nh1 { margin-bottom: 20px; }\np { margin-top: 30px; }"
    },
    {
      "text": "`position: absolute` s'ancre au plus proche ancêtre positionné — oubliez `position: relative` sur le parent et il remonte dans l'arbre.",
      "explain_dr": "absolute kaytlasa9 f a9rab parent 3ndo position, ila nssiti relative l parent ghadi yherb lb3id.",
      "example": ".parent { position: relative; }\n.child { position: absolute; top: 0; right: 0; }"
    },
    {
      "text": "`flex: 1` est le raccourci de `flex: 1 1 0%` ; la base à zéro explique pourquoi les items flex rétrécissent jusqu'à disparaître.",
      "explain_dr": "flex:1 kay3ni basis 0%, 3lach flex items kayt9albo 7ta kaywliw sghar bzf.",
      "example": ".item { flex: 1; } /* = flex: 1 1 0%; zero basis */"
    },
    {
      "text": "`grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` construit une grille responsive sans aucune media query.",
      "explain_dr": "auto-fit m3a minmax kaydir grid responsive bo7do bla media queries.",
      "example": ".grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}"
    },
    {
      "text": "`display: flow-root` (ou `overflow: hidden`) sur un parent contient les enfants flottants et stoppe la fusion des marges.",
      "explain_dr": "flow-root kaykhali parent y7tad l floats dyal wladha w y7bes margin collapse.",
      "example": ".parent { display: flow-root; } /* contains floats, stops margin collapse */"
    },
    {
      "text": "Une déclaration `!important` de l'auteur bat un attribut `style=\"\"` inline normal — le inline n'est pas intouchable.",
      "explain_dr": "!important dyal CSS katghleb inline style l3adi — inline machi dima rab7a.",
      "example": ".a { color: red !important; } /* beats style=\"color: blue\" */"
    },
    {
      "text": "Les couches de cascade (`@layer base, components;`) tranchent avant la spécificité : la dernière couche gagne, et le non-couché bat tout le couché.",
      "explain_dr": "layers kay7kmo 9bel specificity: layer li jaya mor katrbe7 dima.",
      "example": "@layer base, components;\n@layer components { .btn { padding: 8px; } } /* wins over base */"
    },
    {
      "text": "Sur mobile, `100vh` inclut le chrome du navigateur qui se redimensionne — utilisez `100dvh` pour les mises en page plein écran.",
      "explain_dr": "f telephone 100vh kaytbedel m3a address bar, 100dvh howa s7i7 l fullscreen.",
      "example": ".hero { height: 100dvh; } /* dynamic viewport, mobile-safe */"
    },
    {
      "text": "On ne peut pas transitionner `display: none` ; animez `opacity` + `visibility`, ou l'astuce `grid-template-rows: 0fr → 1fr`.",
      "explain_dr": "ma ymknch tdir transition 3la display:none — khdem b opacity w visibility.",
      "example": ".menu { opacity: 0; visibility: hidden; transition: .3s; }\n.menu.open { opacity: 1; visibility: visible; }"
    },
    {
      "text": "`:where()` a une spécificité nulle (parfait pour les resets) ; `:is()` prend la spécificité de son argument le plus fort.",
      "explain_dr": ":where() specificity dyalo zero, :is() kayakhod specificity dyal a9wa argument.",
      "example": ":where(.a, #id) { } /* zero specificity */\n:is(.a, #id) { }    /* takes #id specificity */"
    },
    {
      "text": "`::before` et `::after` exigent `content: \"\"` pour s'afficher, et ils sont inline par défaut.",
      "explain_dr": "before w after ma kaybanowch bla content, w homa inline par defaut.",
      "example": ".tip::before { content: \"\"; display: inline-block; width: 8px; }"
    },
    {
      "text": "`object-fit: cover` recadre une image pour remplir sa boîte sans déformation — avec un conteneur à ratio fixe.",
      "explain_dr": "object-fit cover kay9os tsowira bach t3mer la boite bla ma tt3awaj.",
      "example": ".thumb { width: 200px; height: 200px; object-fit: cover; }"
    },
    {
      "text": "`clamp(1rem, 2vw + 1rem, 2rem)` donne une typographie fluide sans media queries : minimum, préféré, maximum.",
      "explain_dr": "clamp kay3tik font-size kaykber w ysghar m3a l'ecran bla media queries.",
      "example": "h1 { font-size: clamp(1rem, 2vw + 1rem, 2rem); }"
    },
    {
      "text": "`position: sticky` exige une valeur `top` (ou `bottom`) et échoue silencieusement dans un ancêtre en `overflow: hidden`.",
      "explain_dr": "sticky khasso top w kaymout b sokt ila parent 3ndo overflow hidden.",
      "example": ".bar { position: sticky; top: 0; }\n/* breaks silently inside overflow: hidden */"
    },
    {
      "text": "Enveloppez les animations dans `@media (prefers-reduced-motion: reduce)` pour les utilisateurs qui les refusent — un must d'accessibilité.",
      "explain_dr": "prefers-reduced-motion kay7tarm nas li ma kaybghiwch animations — accessibility mohima.",
      "example": "@media (prefers-reduced-motion: reduce) {\n  * { animation: none; transition: none; }\n}"
    }
  ],
  "Tailwind": [
    {
      "text": "Tailwind est un framework CSS utility-first : on stylise avec des classes comme `flex`, `p-4`, `text-center` directement dans le balisage.",
      "explain_dr": "Tailwind b7al sandou9 dyal classes jahzin, katkteb flex w p-4 nichan f HTML.",
      "example": "<div class=\"flex p-4 text-center\">Hello</div>"
    },
    {
      "text": "Aucun CSS personnalisé n'est nécessaire pour la plupart des mises en page — les classes utilitaires couvrent espacements, couleurs, typographie et plus.",
      "explain_dr": "a8lab layouts ma kay7tajoch CSS khass, classes kaykfiw.",
      "example": "<button class=\"rounded px-4 py-2 bg-blue-600 text-white\">Save</button>\n<!-- zero custom CSS -->"
    },
    {
      "text": "Le design responsive utilise des préfixes de breakpoints : `md:flex`, `lg:grid-cols-3`, `sm:text-lg`.",
      "explain_dr": "md: w lg: kaybdlo design 3la 7sab l'ecran — responsive b classes.",
      "example": "<div class=\"grid gap-4 sm:grid-cols-2 lg:grid-cols-3\">Cards</div>"
    },
    {
      "text": "Les variantes d'état stylisent les interactions : `hover:bg-blue-600`, `focus:ring-2`, `disabled:opacity-50`.",
      "explain_dr": "hover: w focus: kaystiliw l'element mli kat7et mouse wla katclicki 3lih.",
      "example": "<button class=\"hover:bg-blue-600 focus:ring-2 disabled:opacity-50\">Submit</button>"
    },
    {
      "text": "Le mode sombre peut être basé sur une classe : `dark:bg-gray-900` s'applique quand la classe `dark` est sur un parent.",
      "explain_dr": "dark: kaytbedel design mli dark mode khdam.",
      "example": "<div class=\"bg-white dark:bg-gray-900\">\n  <!-- dark: applies when .dark is on a parent -->\n</div>"
    },
    {
      "text": "Les couleurs suivent une échelle : `bg-red-500` est plus clair que `bg-red-700` ; `50` est presque blanc, `950` presque noir.",
      "explain_dr": "l2ar9am dyal colors: sghir = fate7, kbir = ghame9 (50 byed, 950 k7el).",
      "example": "<div class=\"bg-red-500\">Lighter</div>\n<div class=\"bg-red-700\">Darker</div>\n<!-- 50 near-white ... 950 near-black -->"
    },
    {
      "text": "Les espacements reposent sur une échelle de `0.25rem` : `p-4` signifie `1rem` de padding, `m-2` signifie `0.5rem` de marge.",
      "explain_dr": "p-4 kay3ni 1rem, m-2 kay3ni 0.5rem — kol wa7ed = 0.25rem.",
      "example": "<div class=\"p-4 m-2\">\n  <!-- p-4 = 1rem, m-2 = 0.5rem (0.25rem scale) -->\n</div>"
    },
    {
      "text": "Les tokens de design personnalisés vont dans `tailwind.config.js` sous `theme.extend` — couleurs, polices, espacements.",
      "explain_dr": "theme.extend f config howa fin katzid colors w fonts dyalk.",
      "example": "// tailwind.config.js\ntheme: { extend: { colors: { brand: \"#123\" } } }"
    },
    {
      "text": "Utilisez `@apply` en CSS pour composer des utilitaires en classes de composants réutilisables.",
      "explain_dr": "@apply kayjme3 classes f class wa7da kat3awd tsta3mloha.",
      "example": ".btn {\n  @apply rounded px-4 py-2 bg-blue-600 text-white;\n}"
    },
    {
      "text": "Évitez les listes de classes trop longues en extrayant les motifs répétés dans des composants ou des classes `@apply`.",
      "explain_dr": "ila classes twalo bzf, jme3hom f component wla @apply — code an9a.",
      "example": "// Button.jsx - extract the repeated pattern\nfunction Btn({ children }) {\n  return <button className=\"rounded px-4 py-2 bg-blue-600 text-white\">{children}</button>;\n}"
    },
    {
      "text": "Les valeurs arbitraires sortent de l'échelle sans toucher à la config : `w-[350px]`, `text-[#bada55]`, `grid-cols-[1fr_2fr]`.",
      "explain_dr": "arbitrary values b7al w-[350px] kaykhaliwk tkhroj 3la scale bla ma tbdel config.",
      "example": "<div class=\"w-[350px] text-[#bada55] grid-cols-[1fr_2fr]\">"
    },
    {
      "text": "Préfixez un utilitaire par `!` pour le rendre important — `!p-4` compile en `padding: 1rem !important` ; à utiliser avec parcimonie.",
      "explain_dr": "!p-4 kay3ni important — sta3mlo ghir ila darty bih.",
      "example": "<div class=\"!p-4\">\n  <!-- compiles to padding: 1rem !important -->\n</div>"
    },
    {
      "text": "Les variantes s'empilent de gauche à droite : `md:hover:bg-blue-700` = styles hover actifs seulement au breakpoint md.",
      "explain_dr": "md:hover:bg-blue-700 kay3ni hover ghir f ecran md w lfou9.",
      "example": "<button class=\"md:hover:bg-blue-700\">\n  <!-- hover styles only at md and up -->\n</button>"
    },
    {
      "text": "`space-x-4` casse quand les enfants flex passent à la ligne ; préférez `gap-4`, qui gère le wrapping correctement.",
      "explain_dr": "space-x-4 kaytkherbe9 ila flex wrap, gap-4 howa l7al s7i7.",
      "example": "<div class=\"flex flex-wrap gap-4\">\n  <!-- gap handles wrapping; space-x-4 breaks -->\n</div>"
    },
    {
      "text": "La classe `container` centre le contenu avec des largeurs max responsives — fini les wrappers bricolés à la main.",
      "explain_dr": "container class jahza katcenter l content — ma t3awdch tsaybha b ydek.",
      "example": "<div class=\"container\">\n  <!-- centered, responsive max-widths built in -->\n</div>"
    },
    {
      "text": "`sr-only` masque visuellement tout en restant lisible par les lecteurs d'écran — l'outil idéal pour les labels d'icônes et les skip links.",
      "explain_dr": "sr-only kaykhfi l3in w kaykhlih l screen readers — l icon labels.",
      "example": "<button aria-label=\"Close\">\n  <span class=\"sr-only\">Close menu</span>\n</button>"
    },
    {
      "text": "`truncate`, `line-clamp-2` et `whitespace-nowrap` contrôlent le débordement du texte sans CSS personnalisé.",
      "explain_dr": "truncate w line-clamp kay9t3o text twil bla CSS khass.",
      "example": "<p class=\"truncate\">Long single line...</p>\n<p class=\"line-clamp-2\">Long paragraph...</p>"
    },
    {
      "text": "`aspect-video` et `aspect-square` réservent l'espace des médias et éliminent le décalage de mise en page.",
      "explain_dr": "aspect-video kay7jez blasa l video 9bel ma tloada — ma kaynch layout shift.",
      "example": "<div class=\"aspect-video\">\n  <video src=\"demo.mp4\"></video>\n</div>"
    },
    {
      "text": "Tailwind v4 est CSS-first : définissez vos tokens dans `@theme { --color-brand: #123; }` et utilisez `bg-brand` — plus de fichier de config.",
      "explain_dr": "Tailwind v4: config wlat f CSS b @theme, ma b9atch config file.",
      "example": "/* v4: CSS-first tokens, no config file */\n@theme { --color-brand: #123; }\n<div class=\"bg-brand\">Brand</div>"
    },
    {
      "text": "`group` + `group-hover:` stylise les enfants au survol du parent — ex. révéler un bouton au survol d'une carte.",
      "explain_dr": "group-hover kaystili lwlad mli parent ythover — b7al button kayban f card.",
      "example": "<div class=\"group relative\">\n  <button class=\"opacity-0 group-hover:opacity-100\">Edit</button>\n</div>"
    },
    {
      "text": "`peer` + `peer-checked:` stylise un voisin selon l'état de l'input — des toggles en pur CSS sans JavaScript.",
      "explain_dr": "peer-checked kaystili jiran 3la 7sab l input — toggle bla JavaScript.",
      "example": "<input type=\"checkbox\" class=\"peer sr-only\">\n<div class=\"peer-checked:bg-blue-600\">Toggle</div>"
    },
    {
      "text": "`divide-x` / `divide-y` ajoutent des bordures entre les enfants — plus propre qu'un `border` sur chaque élément.",
      "explain_dr": "divide-x kayzid borders bin lwlad, an9a men border f kol wa7ed.",
      "example": "<ul class=\"divide-y divide-gray-200\">\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>"
    },
    {
      "text": "`ring-2 ring-offset-2` crée des contours de focus qui ne déplacent pas la mise en page comme `border` — mieux pour l'accessibilité.",
      "explain_dr": "ring-2 l focus ma kayherkch layout b7al border — a7san l accessibility.",
      "example": "<button class=\"focus:ring-2 focus:ring-offset-2\">\n  <!-- focus ring, no layout shift -->\n</button>"
    },
    {
      "text": "`max-w-prose` (65ch) garde une longueur de ligne lisible ; combinez avec `mx-auto` pour des articles centrés.",
      "explain_dr": "max-w-prose kay7ded toul satr bach l9raya tkon mori7a.",
      "example": "<article class=\"max-w-prose mx-auto\">\n  <!-- 65ch lines, centered -->\n</article>"
    },
    {
      "text": "Placez les classes de composants `@apply` dans `@layer components { ... }` pour que les utilitaires comme `mt-4` puissent toujours les surcharger.",
      "explain_dr": "@layer components kaykhali utilities b7al mt-4 yghlebo l component classes dyalk.",
      "example": "@layer components {\n  .btn { @apply rounded px-4 py-2; }\n}\n<!-- utilities like mt-4 still override .btn -->"
    }
  ],
  "NodeJs": [
    {
      "text": "Node.js est un runtime JavaScript basé sur le moteur V8 de Chrome, qui s'exécute hors du navigateur.",
      "explain_dr": "Node.js rah JavaScript khddam barra l browser, b moteur V8 dyal Chrome.",
      "example": "// runs JS outside the browser, on Chrome's V8\nconsole.log(process.version);"
    },
    {
      "text": "Il utilise une boucle d'événements avec des entrées/sorties non bloquantes, efficace pour les applis gourmandes en I/O comme les API.",
      "explain_dr": "kayrdd 3la bzzaf d tlabat bla blocage — mzyan l API li fiha bzzaf d I/O.",
      "example": "const fs = require(\"fs\");\nfs.readFile(\"a.txt\", (err, data) => {\n  // event loop stays free while reading\n});"
    },
    {
      "text": "Installez les paquets avec `npm install <nom>` ; les dépendances sont listées dans `package.json`.",
      "explain_dr": "npm install katnzzel l package w katzido f package.json.",
      "example": "$ npm install express\n// listed in package.json -> \"dependencies\""
    },
    {
      "text": "Importez les modules avec `require()` (CommonJS) ou `import` (modules ES avec `\"type\": \"module\"`).",
      "explain_dr": "require dyal l9dam, import dyal jdid — khass \"type\": \"module\".",
      "example": "const fs = require(\"fs\");            // CommonJS\nimport fs from \"fs\";                  // ESM, needs \"type\": \"module\""
    },
    {
      "text": "Construisez un serveur avec Express : `app.get(\"/users\", (req, res) => res.json(users))`.",
      "explain_dr": "Express: app.get(\"/users\", ...) katjawb 3la GET.",
      "example": "const express = require(\"express\");\nconst app = express();\napp.get(\"/users\", (req, res) => res.json(users));"
    },
    {
      "text": "Les variables d'environnement vivent dans un fichier `.env` et se lisent via `process.env.API_KEY` — ne codez jamais les secrets en dur.",
      "explain_dr": "secrets f .env, qrahom b process.env — jamais en dur.",
      "example": "require(\"dotenv\").config();\nconst key = process.env.API_KEY; // never hardcoded"
    },
    {
      "text": "Gérez les erreurs dans les routes async avec `try/catch` ou un middleware de gestion d'erreurs pour éviter les crashs.",
      "explain_dr": "try/catch f routes async wlla middleware — sinon crash.",
      "example": "app.get(\"/\", async (req, res, next) => {\n  try {\n    res.json(await db.users.find());\n  } catch (err) { next(err); }\n});"
    },
    {
      "text": "`npm start` exécute le script nommé `start` défini dans `package.json`.",
      "explain_dr": "npm start kaykhdem script start dyal package.json.",
      "example": "// package.json\n\"scripts\": { \"start\": \"node server.js\" }\n$ npm start"
    },
    {
      "text": "Utilisez `nodemon` en développement pour un redémarrage automatique quand les fichiers changent.",
      "explain_dr": "nodemon kayrestart rasso mli katbdel fichier — dev.",
      "example": "// package.json\n\"scripts\": { \"dev\": \"nodemon server.js\" }\n// nodemon restarts on file changes"
    },
    {
      "text": "Node est mono-thread — gardez les tâches gourmandes en CPU hors des gestionnaires de requêtes ou déléguez-les aux worker threads.",
      "explain_dr": "mono-thread — CPU-heavy khrjouh men handlers.",
      "example": "const { Worker } = require(\"worker_threads\");\n// offload CPU-heavy work, keep the event loop free"
    },
    {
      "text": "`process.nextTick()` s'exécute avant que la boucle d'événements continue — avant `setImmediate()` — un piège classique d'entretien.",
      "explain_dr": "nextTick katssbe9 kolchi qbl setImmediate — piège.",
      "example": "process.nextTick(() => console.log(\"tick\"));      // first\nsetImmediate(() => console.log(\"immediate\"));    // second"
    },
    {
      "text": "Une promesse rejetée non gérée fait crasher Node moderne : chaînez toujours `.catch()` ou écoutez `process.on(\"unhandledRejection\")`.",
      "explain_dr": "promise rejetée bla .catch kat9tl Node.",
      "example": "fetchData().catch(err => console.error(err));\n// or: process.on(\"unhandledRejection\", ...)"
    },
    {
      "text": "`require()` met les modules en cache après le premier chargement — modifier un objet exporté affecte tous les fichiers qui l'ont importé.",
      "explain_dr": "require kaycachih — tbadil kayban 3nd ga3.",
      "example": "// counter.js - cached after first require()\nlet n = 0;\nmodule.exports = { inc: () => ++n };\n// every importer shares the same n"
    },
    {
      "text": "Les middlewares Express s'exécutent dans l'ordre de déclaration ; les gestionnaires d'erreurs doivent avoir quatre arguments `(err, req, res, next)` sinon Express les ignore.",
      "explain_dr": "ordre middleware mohim; error handler b 4 args.",
      "example": "app.use(logger); // middleware order matters\napp.use((err, req, res, next) => res.status(500).json({})); // 4 args"
    },
    {
      "text": "Les API synchrones comme `fs.readFileSync()` bloquent toute la boucle d'événements — ne les appelez jamais dans un gestionnaire de requête.",
      "explain_dr": "readFileSync katbloqui kolchi — 3mro f handler.",
      "example": "// BAD inside a route: fs.readFileSync(path) blocks everyone\nfs.readFile(path, (err, data) => { /* async */ });"
    },
    {
      "text": "Gérez `SIGTERM`/`SIGINT` pour un arrêt propre : fermez le serveur HTTP et le pool de connexions avant `process.exit()`.",
      "explain_dr": "SIGTERM: sed serveur w DB qbl exit.",
      "example": "process.on(\"SIGTERM\", () => {\n  server.close(() => process.exit(0)); // graceful shutdown\n});"
    },
    {
      "text": "Utilisez `Buffer.from(str)` pour les données binaires — le constructeur `new Buffer()` est déprécié et dangereux.",
      "explain_dr": "Buffer.from s7i7a; new Buffer déprécié.",
      "example": "const buf = Buffer.from(\"hello\"); // safe\n// never: new Buffer(\"hello\") - deprecated & unsafe"
    },
    {
      "text": "Montez en charge une appli mono-thread avec le module `cluster` ou PM2 pour exploiter tous les cœurs CPU.",
      "explain_dr": "cluster/PM2 l ga3 cœurs CPU.",
      "example": "const cluster = require(\"cluster\");\n// or: pm2 start server.js -i max  (one worker per core)"
    },
    {
      "text": "Utilisez `npm ci` dans les pipelines CI : il installe exactement ce qui est dans `package-lock.json`, contrairement à `npm install` qui peut dériver.",
      "explain_dr": "npm ci = install exact mn package-lock — CI.",
      "example": "$ npm ci   # CI installs exactly what package-lock.json pins"
    },
    {
      "text": "Importer du CommonJS depuis ESM passe par l'export par défaut (`import pkg from \"cjs-lib\"`), mais les imports nommés ne se résolvent souvent pas.",
      "explain_dr": "CJS mn ESM: default export khddam, named la.",
      "example": "import pkg from \"cjs-lib\";       // default export works\n// import { named } from \"cjs-lib\"; // named imports often fail"
    },
    {
      "text": "Streamez les gros volumes au lieu de les mettre en mémoire : `fs.createReadStream(path).pipe(res)` garde la mémoire stable.",
      "explain_dr": "stream fichiers kbar b pipe — RAM stable.",
      "example": "fs.createReadStream(path).pipe(res); // streams keep memory flat"
    },
    {
      "text": "Durcissez une API avec `helmet` pour des en-têtes sécurisés et un limiteur de débit sur les routes de connexion contre la force brute.",
      "explain_dr": "helmet + rate limiter = API m7miya.",
      "example": "const helmet = require(\"helmet\");\napp.use(helmet());\napp.use(\"/login\", rateLimiter); // blunt brute force"
    },
    {
      "text": "Conditionnez le comportement à `process.env.NODE_ENV` : erreurs détaillées en développement, messages génériques en production.",
      "explain_dr": "NODE_ENV: dev mfassal, prod 3ami.",
      "example": "if (process.env.NODE_ENV === \"production\") {\n  res.json({ error: \"Something went wrong\" }); // generic in prod\n}"
    },
    {
      "text": "Un `EventEmitter` qui accumule des écouteurs sans `.off()`/`.removeListener()` fuit de la mémoire — nettoyez toujours.",
      "explain_dr": "EventEmitter bla .off() = fuite mémoire.",
      "example": "emitter.on(\"data\", handler);\n// cleanup when done:\nemitter.off(\"data\", handler);"
    },
    {
      "text": "Signez les JWT avec une expiration — `jwt.sign(payload, secret, { expiresIn: \"1h\" })` — et vérifiez le token sur chaque route protégée.",
      "explain_dr": "JWT b expiration w vérif f kol route.",
      "example": "const jwt = require(\"jsonwebtoken\");\nconst token = jwt.sign(payload, secret, { expiresIn: \"1h\" });"
    }
  ],
  "RestApi": [
    {
      "text": "REST est un style d'architecture pour les API basé sur les méthodes HTTP standard.",
      "explain_dr": "REST b7al 9anoun dyal APIs: kayst3mlo HTTP methods lli kolchi kay3rfhom.",
      "example": "app.get('/users', (req, res) => res.json(users)); // REST API over HTTP methods"
    },
    {
      "text": "Associez les méthodes aux opérations : `GET` (lecture), `POST` (création), `PUT`/`PATCH` (mise à jour), `DELETE` (suppression).",
      "explain_dr": "GET l9raya, POST l creation, PUT/PATCH l update, DELETE l ms7 — kol wa7da 3ndha dawrha.",
      "example": "app.get('/users', listUsers); // read\napp.post('/users', createUser); // create\napp.put('/users/:id', replaceUser); // update\napp.delete('/users/:id', removeUser); // remove"
    },
    {
      "text": "Les ressources se nomment avec des noms pluriels : `GET /users`, `GET /users/1`, `POST /users`.",
      "explain_dr": "resources b pluriel: /users, /users/1 — smiya kat3ni chno kayn ldakhl.",
      "example": "app.get('/users/:id', (req, res) => res.json(findUser(req.params.id))); // plural noun resources"
    },
    {
      "text": "Utilisez correctement les codes de statut : `200` OK, `201` Created, `400` Bad Request, `401` Unauthorized, `404` Not Found, `500` Server Error.",
      "explain_dr": "200 OK, 201 Created, 404 Not Found, 500 Server Error — codes kaygolo chno w9e3.",
      "example": "res.status(201).json(newUser); // Created\nres.status(404).json({ error: 'User not found' }); // Not Found"
    },
    {
      "text": "Les API sont sans état — chaque requête porte sa propre authentification, souvent un token dans l'en-tête `Authorization`.",
      "explain_dr": "API stateless kay3ni kol request katjib m3aha token dyalha, server ma kaytfkrch chkoun nta.",
      "example": "const token = req.headers.authorization?.split(' ')[1]; // stateless: auth sent per request"
    },
    {
      "text": "Retournez du JSON avec une forme cohérente, y compris pour les erreurs : `{ \"error\": \"User not found\" }`.",
      "explain_dr": "JSON b nafs chkl dima, 7ta errors — client kay3rf fin y9leb.",
      "example": "res.status(404).json({ error: 'User not found' }); // consistent JSON shape, incl. errors"
    },
    {
      "text": "Validez et nettoyez toutes les entrées côté serveur ; ne faites jamais confiance aux données du client.",
      "explain_dr": "3mer ma tti9 f data dyal client — validation dima f server.",
      "example": "if (!req.body?.email) return res.status(400).json({ error: 'email required' }); // validate server-side"
    },
    {
      "text": "Versionnez votre API (`/api/v1/...`) pour que les changements ne cassent pas les clients existants.",
      "explain_dr": "versioning b7al /api/v1 kay7mik mli tbedel API w clients l9dam khdamin.",
      "example": "app.use('/api/v1/users', userRoutes); // version so changes don't break clients"
    },
    {
      "text": "`PUT` remplace toute la ressource ; `PATCH` ne met à jour que les champs envoyés.",
      "explain_dr": "PUT kay3awd kolchi, PATCH kaybedel ghir li sifti — far9 mohim.",
      "example": "app.put('/users/:id', replace); // replaces the whole resource\napp.patch('/users/:id', partial); // updates only sent fields"
    },
    {
      "text": "Paginez les endpoints de liste (`?page=2&limit=20`) au lieu de retourner des milliers d'enregistrements d'un coup.",
      "explain_dr": "pagination b page w limit, bach server ma ysiftch alf record d9a wa7da.",
      "example": "const page = Number(req.query.page) || 1;\nconst limit = Number(req.query.limit) || 20; // paginate lists"
    },
    {
      "text": "`GET` doit être idempotent et sans effet de bord — jamais de mutation dans un GET, ni de suppression via query params.",
      "explain_dr": "GET khasso ykon safe: ma ymknch ybedel walo f database — hadi 9a3ida.",
      "example": "app.get('/report', (req, res) => res.json(stats())); // GET only reads — never mutates"
    },
    {
      "text": "`POST` n'est ni sûr ni idempotent — un POST rejoué peut créer en double, d'où l'en-tête `Idempotency-Key` pour les paiements.",
      "explain_dr": "POST ila t3awd y9der ykhele9 jouj — Idempotency-Key kay7bes double creation.",
      "example": "const key = req.headers['idempotency-key']; // skip the charge if this key was already processed"
    },
    {
      "text": "Retournez `204 No Content` pour les DELETE réussis, et `202 Accepted` quand le travail est mis en file d'attente.",
      "explain_dr": "204 l delete naj7 bla content, 202 l khadma li ghadi tkhdem moraha.",
      "example": "res.status(204).send(); // DELETE ok, nothing to return\nres.status(202).json({ status: 'queued' }); // async job accepted"
    },
    {
      "text": "N'imbriquez pas les ressources au-delà d'un niveau : `/users/1/orders` OK, `/users/1/orders/2/items/3` non — utilisez `/items/3`.",
      "explain_dr": "nesting ghir level wa7ed: /users/1/orders, ila zedti ghadi yt3e9ed.",
      "example": "app.get('/users/:id/orders', userOrders); // one level is fine\napp.get('/items/:id', itemById); // never nest deeper"
    },
    {
      "text": "Filtrage, tri et recherche vont dans les query params — `GET /products?category=shoes&sort=price&order=desc&q=nike` — et les URLs utilisent des noms, jamais des verbes comme `/getUsers`.",
      "explain_dr": "filter w sort f query params, w URLs ghir nouns — verbs mamnou3in.",
      "example": "const { category, sort = 'price', order = 'desc', q } = req.query; // filter/sort/search in query params"
    },
    {
      "text": "`401 Unauthorized` = identifiants absents ou invalides ; `403 Forbidden` = authentifié mais non autorisé — les confondre est un classique d'entretien.",
      "explain_dr": "401 = ma 3ndkch credentials, 403 = 3ndk walakin mamnou3 — far9 kaytsswel 3lih f interviews.",
      "example": "if (!token) return res.status(401).json({ error: 'Login required' });\nif (user.role !== 'admin') return res.status(403).json({ error: 'Not allowed' });"
    },
    {
      "text": "Répondez aux abus par `429 Too Many Requests` plus un en-tête `Retry-After` ; limitez toujours le débit des endpoints de login.",
      "explain_dr": "429 kaygol l client: rje3 mor chwiya — w Retry-After kaygol ch7al.",
      "example": "res.set('Retry-After', '60').status(429).json({ error: 'Too many requests' }); // answer abuse with 429"
    },
    {
      "text": "Bonne pratique JWT : access tokens à courte durée + refresh tokens en cookies `httpOnly` — jamais de tokens dans `localStorage`.",
      "explain_dr": "tokens f localStorage khatar (XSS) — httpOnly cookies homa l7al l2amen.",
      "example": "res.cookie('refreshToken', token, { httpOnly: true, secure: true }); // never in localStorage"
    },
    {
      "text": "Les erreurs CORS sont un problème d'en-tête côté serveur (`Access-Control-Allow-Origin`), pas un bug frontend — le navigateur applique juste la politique.",
      "explain_dr": "CORS error machi bug dyal frontend, howa server ma sifetch l header.",
      "example": "res.set('Access-Control-Allow-Origin', 'https://app.example.com'); // CORS is a server header"
    },
    {
      "text": "Chaque liste paginée doit partager la même enveloppe : `{ \"data\": [...], \"meta\": { \"page\": 1, \"total\": 200 } }`.",
      "explain_dr": "envelope wa7da l kol paginated list: data + meta — client kay3rf y9raha dima.",
      "example": "res.json({ data: users, meta: { page: 1, total: 200 } }); // one envelope for all paginated lists"
    },
    {
      "text": "Utilisez `ETag` + `If-None-Match` pour les requêtes conditionnelles — le serveur répond `304 Not Modified` et économise la bande passante.",
      "explain_dr": "ETag b7al basma dyal response, ila ma tbedlatch server kayjawb 304 w kaywfer bandwidth.",
      "example": "if (req.headers['if-none-match'] === etag) return res.status(304).end(); // conditional request"
    },
    {
      "text": "Les webhooks doivent porter un en-tête de signature (comme `Stripe-Signature`) — vérifiez-la avant de faire confiance au payload.",
      "explain_dr": "webhooks khasshom signature — bla verification ay wa7ed y9der ysift payload mzowar.",
      "example": "const sig = req.headers['stripe-signature']; // verify the signature before trusting the payload"
    },
    {
      "text": "Exigez `Content-Type: application/json` sur les requêtes et répondez `415 Unsupported Media Type` pour un mauvais format.",
      "explain_dr": "415 kaygol l client: sifti format ghalat, ana kan9bel ghir JSON.",
      "example": "if (req.headers['content-type'] !== 'application/json') return res.status(415).end();"
    },
    {
      "text": "Ne fuyez jamais stack traces ni erreurs SQL dans les réponses de production — loguez côté serveur, retournez un `500` générique.",
      "explain_dr": "stack traces f production kay3tiw l hackers info — log f server w sifet 500 3adi.",
      "example": "catch (err) { console.error(err); res.status(500).json({ error: 'Internal server error' }); } // log, don't leak"
    },
    {
      "text": "Les navigateurs envoient des requêtes `OPTIONS` preflight automatiques pour les appels CORS non simples — votre serveur doit y répondre sinon PUT/PATCH/DELETE échouent.",
      "explain_dr": "OPTIONS preflight kaytsift bo7do men browser, ila server ma jawbch PUT/PATCH ghadi yfchlo.",
      "example": "app.options('/users/:id', (req, res) => res.set('Access-Control-Allow-Methods', 'PUT,DELETE').sendStatus(204)); // answer preflights"
    }
  ],
  "Laravel": [
    {
      "text": "Laravel est un framework PHP pour construire des applications web et des API avec une syntaxe élégante et expressive.",
      "explain_dr": "Laravel rah framework PHP l web apps w API, syntax élégante.",
      "example": "Route::get('/posts', [PostController::class, 'index']);"
    },
    {
      "text": "Les routes vivent dans `routes/web.php` ou `routes/api.php` ; les contrôleurs contiennent la logique des requêtes.",
      "explain_dr": "routes f routes/web.php wlla api.php; logic f controllers.",
      "example": "Route::get('/users', [UserController::class, 'index']); // routes map to controller actions"
    },
    {
      "text": "Eloquent est l'ORM de Laravel : chaque modèle correspond à une table de la base, ex. `User::where('active', true)->get()`.",
      "explain_dr": "Eloquent = ORM: model wa7ed = table wa7da.",
      "example": "User::where('active', true)->get(); // Eloquent model -> users table"
    },
    {
      "text": "Les migrations (`php artisan migrate`) versionnent le schéma de votre base de données.",
      "explain_dr": "migrations = versioning dyal schema DB.",
      "example": "Schema::create('posts', function (Blueprint $table) {\n    $table->id(); $table->string('title'); $table->timestamps();\n}); // migrations version the schema"
    },
    {
      "text": "Utilisez `$request->validate([...])` pour valider les données entrantes et retourner automatiquement des erreurs 422 en cas d'échec.",
      "explain_dr": "$request->validate katvalidi w katrje3 422 automatiquement.",
      "example": "$validated = $request->validate(['email' => 'required|email']); // auto-422 on failure"
    },
    {
      "text": "Blade est le moteur de templates de Laravel ; `{{ $var }}` échappe la sortie automatiquement, ce qui prévient le XSS.",
      "explain_dr": "Blade: {{ $var }} escape automatique — anti-XSS.",
      "example": "{{ $user->name }} // Blade: escaped output, XSS-safe"
    },
    {
      "text": "Les middlewares (auth, CORS, throttling) filtrent les requêtes HTTP avant qu'elles atteignent le contrôleur.",
      "explain_dr": "middleware kayfiltri requests qbl controller.",
      "example": "Route::get('/dashboard', [DashController::class, 'index'])->middleware('auth'); // middleware filters first"
    },
    {
      "text": "Artisan est le CLI : `php artisan make:model Post -mcr` génère modèle, migration et contrôleur.",
      "explain_dr": "artisan: make:model Post -mcr = model+migration+controller.",
      "example": "php artisan make:model Post -mcr // model + migration + controller in one command"
    },
    {
      "text": "Sanctum fournit une authentification par token légère pour les SPA et les applis mobiles.",
      "explain_dr": "Sanctum: tokens khfaf l SPA w mobile.",
      "example": "$token = $user->createToken('mobile')->plainTextToken; // Sanctum API token"
    },
    {
      "text": "Gardez les secrets dans `.env` et lisez-les via `env()` ou les fichiers de config — ne commitez jamais `.env` dans Git.",
      "explain_dr": "secrets f .env — jamais commité.",
      "example": "'key' => env('STRIPE_KEY'), // secrets in .env, never committed to Git"
    },
    {
      "text": "Injectez les dépendances via le constructeur — le conteneur de services de Laravel résout automatiquement les classes typées.",
      "explain_dr": "injection f constructor — container kayresolve rasso.",
      "example": "public function __construct(private UserRepository $users) {} // container auto-resolves it"
    },
    {
      "text": "Déplacez la validation complexe dans des Form Requests (`php artisan make:request StorePostRequest`) pour des contrôleurs légers.",
      "explain_dr": "validation complexe → Form Request.",
      "example": "public function store(StorePostRequest $request) { $request->validated(); } // Form Request keeps it thin"
    },
    {
      "text": "Définissez les relations sur les modèles (`hasMany`, `belongsTo`) et chargez-les avec `::with('comments')` pour tuer les requêtes N+1.",
      "explain_dr": "relations + with() = fini N+1.",
      "example": "Post::with('comments')->get(); // eager load: one extra query instead of N"
    },
    {
      "text": "Le problème N+1 : boucler sur `$posts` en appelant `$post->comments` lance une requête par post — le chargement eager le corrige.",
      "explain_dr": "N+1 = query l kol post; with() katjme3hom.",
      "example": "foreach (Post::all() as $p) $p->comments; // N+1: one query per post!"
    },
    {
      "text": "Les scopes locaux rendent les requêtes réutilisables : `scopeActive($query)` devient `Post::active()->get()`.",
      "explain_dr": "scopeActive → Post::active()->get() réutilisable.",
      "example": "public function scopeActive($query) { return $query->where('active', true); } // Post::active()->get()"
    },
    {
      "text": "Utilisez `$casts` sur le modèle (`'price' => 'decimal:2'`) au lieu de conversions manuelles dans les accesseurs.",
      "explain_dr": "$casts kay7wwel types automatiquement.",
      "example": "protected $casts = ['price' => 'decimal:2', 'meta' => 'array']; // automatic type casting"
    },
    {
      "text": "Les événements et observateurs de modèle (`Post::observe(PostObserver::class)`) centralisent la logique comme l'invalidation du cache.",
      "explain_dr": "observers: logic centralisée (cache...).",
      "example": "Post::observe(PostObserver::class); // register in AppServiceProvider::boot()"
    },
    {
      "text": "Poussez le travail lent (emails, traitement d'images) dans des jobs : `SendReport::dispatch()` et lancez `php artisan queue:work`.",
      "explain_dr": "jobs l khdma t9ila + queue:work f background.",
      "example": "SendReport::dispatch($user); // job runs via: php artisan queue:work"
    },
    {
      "text": "Autorisez avec les policies et gates — `$this->authorize('update', $post)` — plutôt que des `if` éparpillés dans les contrôleurs.",
      "explain_dr": "policies l authorization — machi if éparpillés.",
      "example": "$this->authorize('update', $post); // policies beat scattered if-checks"
    },
    {
      "text": "Les API Resources (`PostResource`) transforment les modèles en structures JSON cohérentes pour votre frontend.",
      "explain_dr": "API Resources = JSON cohérent l frontend.",
      "example": "return PostResource::collection($posts); // consistent JSON shape for the frontend"
    },
    {
      "text": "Protégez-vous contre l'assignation de masse : définissez `$fillable` (ou `$guarded`) sinon `Post::create($request->all())` lève une exception.",
      "explain_dr": "$fillable obligatoire — sinon exception.",
      "example": "protected $fillable = ['title', 'body']; // mass-assignment guard"
    },
    {
      "text": "Les soft deletes (`use SoftDeletes`) gardent un timestamp `deleted_at` — `withTrashed()` et `restore()` ramènent les enregistrements.",
      "explain_dr": "SoftDeletes: deleted_at, restore kayrje3.",
      "example": "Post::withTrashed()->find(1)->restore(); // soft deletes keep deleted_at"
    },
    {
      "text": "En production, lancez `php artisan config:cache` et n'appelez jamais `env()` hors des fichiers de config — il retourne null après le cache.",
      "explain_dr": "prod: config:cache, w env() ghir f config.",
      "example": "config('services.stripe.key'); // never env() outside config files in production"
    },
    {
      "text": "Limitez les endpoints publics avec le middleware `throttle:60,1` pour stopper l'abus des routes login et register.",
      "explain_dr": "throttle kay7mi login mn abus.",
      "example": "Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:60,1');"
    },
    {
      "text": "Générez des données de dev réalistes avec factories et seeders (`php artisan db:seed`) plutôt que d'insérer les lignes à la main.",
      "explain_dr": "factories/seeders = data réaliste l dev.",
      "example": "Post::factory()->count(10)->create(); // seeders + factories for dev data"
    }
  ],
  "Php": [
    {
      "text": "PHP est un langage de script côté serveur ; chaque instruction se termine par un point-virgule.",
      "explain_dr": "PHP langage serveur — kol instruction b ;.",
      "example": "<?php echo 'Hello'; $x = 5; // every statement ends with ;"
    },
    {
      "text": "Les variables commencent par `$` : `$name = \"Aymane\";` — elles sont faiblement typées par défaut.",
      "explain_dr": "variables b $ — faiblement typées.",
      "example": "$name = \"Aymane\"; // variables start with $, loosely typed"
    },
    {
      "text": "`echo` affiche des chaînes ; utilisez `.` pour concaténer : `echo \"Hello \" . $name;`.",
      "explain_dr": "echo + . l concaténation.",
      "example": "echo \"Hello \" . $name; // . concatenates strings"
    },
    {
      "text": "Tableaux : indexés `$arr = [1, 2, 3];` et associatifs `$user = [\"name\" => \"Aymane\"];`.",
      "explain_dr": "tableaux indexés w associatifs.",
      "example": "$arr = [1, 2, 3]; $user = [\"name\" => \"Aymane\"]; // indexed + associative arrays"
    },
    {
      "text": "La comparaison stricte utilise `===` ; le `==` souple convertit les types et peut surprendre.",
      "explain_dr": "=== stricte; == convertit — attention.",
      "example": "var_dump(\"1\" == 1);  // true (coerced)\nvar_dump(\"1\" === 1); // false (strict)"
    },
    {
      "text": "Superglobales : `$_GET`, `$_POST`, `$_SERVER` et `$_SESSION` donnent accès aux données de requête et au serveur.",
      "explain_dr": "superglobales = données requête + serveur.",
      "example": "$page = $_GET['page']; $method = $_SERVER['REQUEST_METHOD']; // superglobals"
    },
    {
      "text": "Les fonctions déclarent les types des paramètres et du retour : `function add(int $a, int $b): int { return $a + $b; }`.",
      "explain_dr": "fonctions typées: params w retour.",
      "example": "function add(int $a, int $b): int { return $a + $b; } // typed params + return"
    },
    {
      "text": "Les namespaces (`namespace App\\Models;`) évitent les collisions de noms de classes ; l'autoloading suit PSR-4.",
      "explain_dr": "namespaces anti-collision; PSR-4.",
      "example": "namespace App\\Models; // avoid class-name collisions (PSR-4 autoloading)"
    },
    {
      "text": "Composer (`composer install`) gère les dépendances, enregistrées dans `composer.json`.",
      "explain_dr": "composer gère dépendances.",
      "example": "composer require stripe/stripe-php // dependencies go in composer.json"
    },
    {
      "text": "`htmlspecialchars()` échappe la sortie pour prévenir le XSS quand on affiche une entrée utilisateur.",
      "explain_dr": "htmlspecialchars = anti-XSS.",
      "example": "echo htmlspecialchars($input, ENT_QUOTES, 'UTF-8'); // escape output: XSS-safe"
    },
    {
      "text": "Utilisez `??` pour des valeurs par défaut sûres (`$name = $_GET['name'] ?? 'guest';`) — il vérifie `isset()` sans notice.",
      "explain_dr": "?? = défaut sûr sans notice.",
      "example": "$name = $_GET['name'] ?? 'guest'; // null-safe default, no notice"
    },
    {
      "text": "`match` est plus strict que `switch` : il compare avec `===` et retourne une valeur — pas besoin de `break`.",
      "explain_dr": "match: === w retourne valeur, sans break.",
      "example": "$type = match($day) { 'Sat', 'Sun' => 'weekend', default => 'workday' }; // strict ===, returns a value"
    },
    {
      "text": "Les fonctions fléchées `fn($x) => $x * 2` capturent automatiquement les variables environnantes par valeur — plus court que `function () use ($x)`.",
      "explain_dr": "fn() => capture auto — court.",
      "example": "$double = fn($x) => $x * 2; // arrow fn auto-captures by value"
    },
    {
      "text": "Pièges du transtypage : `\"0\" == false` vaut `true`, et `\"10abc\" + 5` vaut `15` — préférez `===`.",
      "explain_dr": "\"0\" == false true! — préfère ===.",
      "example": "var_dump(\"0\" == false); // true! type juggling — use ==="
    },
    {
      "text": "`declare(strict_types=1);` en haut d'un fichier rend les types scalaires stricts au lieu de les convertir.",
      "explain_dr": "strict_types=1 = types stricts.",
      "example": "declare(strict_types=1); // first line: type hints reject wrong types"
    },
    {
      "text": "Passez les arguments par référence avec `&$var` quand une fonction doit modifier la variable de l'appelant.",
      "explain_dr": "&$var modifie variable appelant.",
      "example": "function bump(&$n) { $n++; } bump($count); // by reference: $count changes"
    },
    {
      "text": "Attrapez `Throwable` (pas seulement `Exception`) pour piéger aussi les erreurs moteur comme `TypeError`.",
      "explain_dr": "Throwable attrape aussi TypeError.",
      "example": "try { risky(); } catch (Throwable $e) { log($e->getMessage()); } // catches TypeError too"
    },
    {
      "text": "Appelez `session_start()` avant toute sortie — même un espace perdu — sinon les en-têtes échouent avec 'headers already sent'.",
      "explain_dr": "session_start avant tout output.",
      "example": "session_start(); // must run before ANY output"
    },
    {
      "text": "Utilisez toujours les requêtes préparées PDO (`$stmt->execute([$id])`) — le SQL interpolé invite l'injection.",
      "explain_dr": "PDO préparées = anti-injection.",
      "example": "$stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');\n$stmt->execute([$id]); // prepared = injection-safe"
    },
    {
      "text": "`require` stoppe tout en cas d'échec (erreur fatale) ; `include` émet juste un avertissement et continue — utilisez `require` pour les fichiers essentiels.",
      "explain_dr": "require fatal, include warning.",
      "example": "require 'config.php'; // halts on failure; include only warns"
    },
    {
      "text": "`self::` se lie à la classe de définition, `static::` à la classe appelée — la liaison statique tardive compte en héritage.",
      "explain_dr": "self:: vs static:: — liaison tardive.",
      "example": "public static function who() { return static::class; } // static:: = late static binding"
    },
    {
      "text": "Les interfaces déclarent un contrat sans implémentation ; les classes abstraites peuvent contenir de la logique partagée plus des méthodes abstraites.",
      "explain_dr": "interface contrat; abstract logique partagée.",
      "example": "interface Loggable { public function log(string $msg): void; } // contract, no implementation"
    },
    {
      "text": "`$count ??= 0;` assigne seulement si la variable est nulle ou indéfinie — raccourci pour `$count = $count ?? 0;`.",
      "explain_dr": "??= assigne si null seulement.",
      "example": "$count ??= 0; // assign only when null or undefined"
    },
    {
      "text": "Heredoc (`<<<HTML`) interpole les variables ; nowdoc (`<<<'HTML'`) non — choisissez selon le besoin.",
      "explain_dr": "heredoc interpole, nowdoc non.",
      "example": "$html = <<<HTML\n<p>$name</p>\nHTML; // heredoc interpolates; <<<'HTML' (nowdoc) does not"
    },
    {
      "text": "Validez les entrées avec `filter_var($email, FILTER_VALIDATE_EMAIL)` plutôt qu'une regex artisanale.",
      "explain_dr": "filter_var valide email — sans regex.",
      "example": "if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { /* invalid email */ }"
    }
  ],
  "Python": [
    {
      "text": "Python est un langage généraliste lisible qui utilise l'indentation — pas les accolades — pour définir les blocs.",
      "explain_dr": "Python: indentation machi accolades.",
      "example": "if x > 0:\n    print(\"positive\")  # indentation defines the block"
    },
    {
      "text": "Les variables n'ont pas besoin de déclaration : `name = \"Aymane\"` infère le type automatiquement.",
      "explain_dr": "pas de déclaration — type inféré.",
      "example": "name = \"Aymane\"  # no declaration; type inferred"
    },
    {
      "text": "Les listes `[1, 2, 3]` sont ordonnées et mutables ; les tuples `(1, 2, 3)` sont ordonnés et immuables.",
      "explain_dr": "list mutable, tuple immuable.",
      "example": "nums = [1, 2, 3]; nums.append(4)  # list: mutable\npoint = (1, 2)  # tuple: immutable"
    },
    {
      "text": "Les dictionnaires associent des clés à des valeurs : `user = {\"name\": \"Aymane\", \"age\": 24}`.",
      "explain_dr": "dict = clés → valeurs.",
      "example": "user = {\"name\": \"Aymane\", \"age\": 24}  # dict: keys -> values"
    },
    {
      "text": "Les compréhensions de liste construisent des listes de façon concise : `[x * 2 for x in range(5)]`.",
      "explain_dr": "compréhension = list f ligne w7da.",
      "example": "[x * 2 for x in range(5)]  # [0, 2, 4, 6, 8]"
    },
    {
      "text": "Les fonctions utilisent `def` : `def greet(name): return f\"Hello {name}\"` — les f-strings formatent en ligne.",
      "explain_dr": "def + f-strings.",
      "example": "def greet(name): return f\"Hello {name}\"  # f-strings format inline"
    },
    {
      "text": "Gérez les erreurs avec `try / except` : `try: ... except ValueError: ...`.",
      "explain_dr": "try/except bla crash.",
      "example": "try:\n    n = int(s)\nexcept ValueError:\n    n = 0"
    },
    {
      "text": "Les environnements virtuels (`python -m venv venv`) isolent les dépendances du projet.",
      "explain_dr": "venv isole dépendances.",
      "example": "python -m venv venv\nsource venv/bin/activate  # isolate dependencies"
    },
    {
      "text": "`pip install package` installe les bibliothèques ; figez-les avec `pip freeze > requirements.txt`.",
      "explain_dr": "pip + requirements.txt.",
      "example": "pip install requests  # then: pip freeze > requirements.txt"
    },
    {
      "text": "Tout est objet, y compris les fonctions et les classes ; `None` est la valeur nulle de Python.",
      "explain_dr": "tout est objet; None = null.",
      "example": "f = len; print(f(\"abc\"))  # functions are objects too\nx = None  # Python's null"
    },
    {
      "text": "N'utilisez jamais d'argument par défaut mutable — `def f(items=[])` partage une seule liste entre tous les appels ; utilisez `None` et créez-la dedans.",
      "explain_dr": "défaut mutable partagé — utilise None.",
      "example": "def add(item, items=None):\n    items = items or []  # never use a mutable default\n    items.append(item); return items"
    },
    {
      "text": "`*args` regroupe les arguments positionnels en tuple ; `**kwargs` regroupe les arguments nommés en dictionnaire.",
      "explain_dr": "*args tuple, **kwargs dict.",
      "example": "def log(tag, *args, **kwargs): print(tag, args, kwargs)  # extra args -> tuple/dict"
    },
    {
      "text": "Les décorateurs enveloppent les fonctions : `@app.route(\"/\")` enregistre la vue — c'est du sucre pour appeler `route(app, func)`.",
      "explain_dr": "décorateur enveloppe fonction.",
      "example": "@app.route(\"/\")\ndef home(): return \"hi\"  # decorator registers the view"
    },
    {
      "text": "Les générateurs produisent les valeurs paresseusement avec `yield` — `for row in read_lines()` traite d'énormes fichiers sans les charger.",
      "explain_dr": "yield paresseux — fichiers kbar.",
      "example": "def read_lines(path):\n    with open(path) as f:\n        for line in f: yield line  # lazy generator"
    },
    {
      "text": "Les gestionnaires de contexte garantissent le nettoyage : `with open(\"f.txt\") as f:` ferme le fichier même si une exception survient.",
      "explain_dr": "with ferme fichier même si erreur.",
      "example": "with open(\"f.txt\") as f:\n    data = f.read()  # file closed automatically"
    },
    {
      "text": "`==` compare les valeurs, `is` compare l'identité — utilisez `is None`, jamais `== None`.",
      "explain_dr": "== valeur, is identité — is None.",
      "example": "if user is None: ...  # is checks identity; == checks value"
    },
    {
      "text": "Utilisez `d.get(\"clé\", défaut)` pour éviter `KeyError`, et `setdefault()` pour insérer-si-absent en une étape.",
      "explain_dr": ".get() évite KeyError.",
      "example": "role = d.get(\"role\", \"guest\")  # no KeyError\nd.setdefault(\"tags\", [])  # insert if missing"
    },
    {
      "text": "Formatez en ligne avec les f-strings : `f\"{price:.2f}\"` arrondit à deux décimales.",
      "explain_dr": "f\"{x:.2f}\" arrondit.",
      "example": "f\"{price:.2f}\"  # \"19.90\" — inline formatting"
    },
    {
      "text": "Préférez les compréhensions de dict/set et `enumerate()`/`zip()` aux boucles manuelles sur les index.",
      "explain_dr": "enumerate/zip > index manuel.",
      "example": "for i, name in enumerate(names): print(i, name)  # no manual index loops"
    },
    {
      "text": "Un `__init__.py` transforme un dossier en package ; importez les voisins avec des imports relatifs comme `from .utils import helper`.",
      "explain_dr": "__init__.py = dossier → package.",
      "example": "from .utils import helper  # relative import inside a package (__init__.py)"
    },
    {
      "text": "Protégez le code exécutable avec `if __name__ == \"__main__\":` pour que les imports n'exécutent pas les effets de bord du script.",
      "explain_dr": "__main__ protège imports.",
      "example": "if __name__ == \"__main__\":\n    main()  # imports don't run side effects"
    },
    {
      "text": "Levez des erreurs parlantes : `raise ValueError(\"age must be positive\")` vaut mieux qu'un `raise Exception` nu.",
      "explain_dr": "ValueError parlant > Exception nue.",
      "example": "if age < 0: raise ValueError(\"age must be positive\")  # meaningful error"
    },
    {
      "text": "`lambda` crée de petites fonctions anonymes — `sorted(users, key=lambda u: u[\"age\"])` trie par âge.",
      "explain_dr": "lambda petite fonction anonyme.",
      "example": "sorted(users, key=lambda u: u[\"age\"])  # tiny anonymous function"
    },
    {
      "text": "Joignez efficacement : `\", \".join(names)` bat la concaténation avec `+` en boucle (les chaînes sont immuables).",
      "explain_dr": "join() plus rapide que +.",
      "example": "\", \".join(names)  # efficient: strings are immutable"
    },
    {
      "text": "Le GIL bloque le vrai multithreading pour le travail CPU — utilisez `multiprocessing` ou déléguez à des workers.",
      "explain_dr": "GIL bloque threads CPU — multiprocessing.",
      "example": "from multiprocessing import Pool\nPool().map(work, jobs)  # bypasses the GIL"
    }
  ],
  "Sql": [
    {
      "text": "SQL est le langage pour interroger et gérer les bases de données relationnelles.",
      "explain_dr": "SQL hiya logha li biha katkteb les requêtes dyal les bases de données relationnelles b7al MySQL w PostgreSQL.",
      "example": "SELECT id, name FROM users WHERE age >= 18 ORDER BY created_at DESC;"
    },
    {
      "text": "Commandes de base : `SELECT`, `INSERT`, `UPDATE`, `DELETE`, plus `CREATE TABLE` pour le schéma.",
      "explain_dr": "Commandes assasiya: SELECT bach tjbed data, INSERT tzid, UPDATE tbeddel, DELETE t7eyyed, CREATE TABLE bach tsna3 table jdida.",
      "example": "INSERT INTO products (name, price) VALUES ('Keyboard', 49.99);\nUPDATE products SET price = 39.99 WHERE name = 'Keyboard';\nDELETE FROM products WHERE stock = 0;\nCREATE TABLE products (id INT PRIMARY KEY, name VARCHAR(100), price DECIMAL(10,2), stock INT);"
    },
    {
      "text": "Filtrez les lignes avec `WHERE` : `SELECT * FROM users WHERE age >= 18;`.",
      "explain_dr": "WHERE hiya li kat7edded ina lignes ghatjbed, b7al filter: WHERE age >= 18 katjbed ghir li 3andhom 18 w lfo9.",
      "example": "SELECT name, email FROM users WHERE age >= 18 AND city = 'Tangier';"
    },
    {
      "text": "`JOIN` combine les tables sur une relation : `SELECT * FROM orders JOIN users ON orders.user_id = users.id;`.",
      "explain_dr": "JOIN katjme3 joj tables 3la asas 3ala9a binathom, b7al orders.user_id = users.id.",
      "example": "SELECT orders.id, users.name, orders.total FROM orders JOIN users ON orders.user_id = users.id;"
    },
    {
      "text": "Agrégez avec `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()` ; groupez les résultats avec `GROUP BY`.",
      "explain_dr": "COUNT/SUM/AVG fonctions d'agrégation, w GROUP BY katjm3ehom 7sab chi colonne, b7al total dyal les commandes lkol user.",
      "example": "SELECT city, COUNT(*) AS total FROM users GROUP BY city;"
    },
    {
      "text": "Filtrez les résultats groupés avec `HAVING` (s'exécute après `GROUP BY`), pas `WHERE`.",
      "explain_dr": "WHERE katfiltrer 9bel GROUP BY, w HAVING katfiltrer moraha 3la nataij l'agrégation.",
      "example": "SELECT city, COUNT(*) AS total FROM users GROUP BY city HAVING COUNT(*) > 10;"
    },
    {
      "text": "Les clés primaires identifient chaque ligne de façon unique ; les clés étrangères lient les lignes entre les tables.",
      "explain_dr": "Primary key: identifiant wa7id lkol ligne (mayt3awdch). Foreign key: katrbt table b table khra.",
      "example": "CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(100));\nCREATE TABLE orders (id INT PRIMARY KEY, user_id INT, FOREIGN KEY (user_id) REFERENCES users(id));"
    },
    {
      "text": "Les index accélèrent les lectures sur les colonnes filtrées/jointes mais ralentissent légèrement les écritures.",
      "explain_dr": "Index kayserre3 l9ira2a 3la les colonnes li kat7et f WHERE w JOIN, walakin katbette2 chwiya lkitaba (INSERT/UPDATE).",
      "example": "CREATE INDEX idx_users_city ON users (city); -- speeds up WHERE city = ..."
    },
    {
      "text": "SQL vs NoSQL : SQL impose un schéma fixe et des relations avec jointures ; NoSQL (ex. MongoDB) stocke des documents flexibles et passe plus facilement à l'échelle horizontale.",
      "explain_dr": "SQL: schema fixe + relations + joins; NoSQL b7al MongoDB: documents flexibles w kaytzad horizontalement bsahla.",
      "example": "-- SQL enforces a fixed schema, then joins tables on relations.\nSELECT * FROM orders JOIN users ON orders.user_id = users.id WHERE orders.status = 'paid';"
    },
    {
      "text": "Utilisez toujours des requêtes paramétrées ou un ORM pour prévenir l'injection SQL — ne concaténez jamais d'entrées utilisateur dans les requêtes SQL.",
      "explain_dr": "SQL injection: matkhletech input dyal l'utilisateur m3a string SQL — st3mel requêtes paramétrées wla ORM dima.",
      "example": "SELECT * FROM users WHERE email = ?; -- placeholder, driver fills it safely\n-- never: \"SELECT * FROM users WHERE email = '\" + email + \"'\""
    },
    {
      "text": "`INNER JOIN` vs `LEFT JOIN` : INNER ne garde que les lignes correspondantes, LEFT garde toutes les lignes de la table de gauche avec des NULL là où il n'y a pas de correspondance — un piège classique en entretien.",
      "explain_dr": "INNER JOIN ghir li kaynin f joj tables; LEFT JOIN kayjbed kolchi mn left table w NULL fin makaynch match — f les entretiens kaysewlouha bzf.",
      "example": "SELECT o.id FROM orders o INNER JOIN payments p ON p.order_id = o.id; -- only orders with a payment\nSELECT u.name FROM users u LEFT JOIN payments p ON p.user_id = u.id; -- all users, NULL payment if none"
    },
    {
      "text": "`NULL` n'est jamais égal à `NULL` : utilisez `IS NULL` / `IS NOT NULL` dans les filtres, car les comparaisons avec `NULL` donnent un résultat indéterminé.",
      "explain_dr": "NULL makayssawich NULL! St3mel IS NULL machi = NULL, 7it la comparaison m3a NULL kat3ti \"unknown\".",
      "example": "SELECT * FROM users WHERE phone IS NULL; -- never: WHERE phone = NULL"
    },
    {
      "text": "`GROUP BY` exige que chaque colonne non agrégée du `SELECT` y figure, sinon la requête échoue (le `only_full_group_by` de MySQL).",
      "explain_dr": "Ila st3melti GROUP BY, ay colonne f SELECT li machi agrégée khassha tkon f GROUP BY, wla l'query ghatfchel.",
      "example": "SELECT city, COUNT(*) AS total FROM users GROUP BY city; -- city is in GROUP BY, OK"
    },
    {
      "text": "Les fonctions de fenêtrage comme `ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC)` classent les lignes sans les regrouper comme `GROUP BY`.",
      "explain_dr": "Window functions b7al ROW_NUMBER() katretteb les lignes bla matjm3hom — 7asla 3la ranks w positions f nafs la requête.",
      "example": "SELECT name, ROW_NUMBER() OVER (PARTITION BY city ORDER BY created_at DESC) AS rn FROM users;"
    },
    {
      "text": "`UNION` empile les résultats et supprime les doublons ; `UNION ALL` garde les doublons et est plus rapide — sachez lequel utiliser.",
      "explain_dr": "UNION katjm3 nataij w t7eyyed doublons, UNION ALL kat7fedhoum w hiya asra3 — khtar 3la 7sab li bghiti.",
      "example": "SELECT email FROM staff UNION SELECT email FROM customers; -- dedupes\nSELECT email FROM staff UNION ALL SELECT email FROM customers; -- keeps dupes, faster"
    },
    {
      "text": "Les transactions (`BEGIN; ... COMMIT;` / `ROLLBACK;`) rendent plusieurs requêtes atomiques : tout s'applique ou rien.",
      "explain_dr": "Transaction: ya kolchi kaytnfed (COMMIT) ya walo (ROLLBACK) — mohima f les opérations li khasshom ykounou kamlin b7al transfert flous.",
      "example": "BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT; -- or ROLLBACK; to cancel"
    },
    {
      "text": "`ON DELETE CASCADE` supprime automatiquement les lignes enfants quand une ligne parente est effacée — pratique, mais ça peut effacer des données en silence : utilisez-le en connaissance de cause.",
      "explain_dr": "ON DELETE CASCADE kat7eyyed les lignes dyal lwlidat automatiquement mlli kat7eyyed lparent — zwina walakin khatar 7it katm7i data b sehha.",
      "example": "CREATE TABLE comments (id INT PRIMARY KEY, post_id INT, FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE);"
    },
    {
      "text": "Le problème N+1 : récupérer une liste puis une requête par élément tue les performances — corrigez-le avec un seul `JOIN` ou le chargement eager dans votre ORM.",
      "explain_dr": "N+1: katjbed lista w moraha query lkol wa7ed — bottleneck kbir; l7al: JOIN wa7ed wla eager loading f ORM.",
      "example": "-- one query instead of N+1:\nSELECT p.title, c.body FROM posts p JOIN comments c ON c.post_id = p.id WHERE p.id = 7;"
    },
    {
      "text": "Un index composite `(last_name, first_name)` sert les requêtes filtrant sur `last_name` ou les deux, mais pas sur `first_name` seul — la règle du préfixe le plus à gauche.",
      "explain_dr": "Index composite (a, b): kaykhdm 3la a wla (a+b), walakin machi 3la b bo7dha — hadi hiya la règle dyal \"leftmost prefix\".",
      "example": "CREATE INDEX idx_name ON users (last_name, first_name); -- serves last_name, and both -- never first_name alone"
    },
    {
      "text": "Sous-requêtes vs CTE : `WITH active AS (SELECT ...)` rend les requêtes complexes lisibles et réutilisables dans la même requête.",
      "explain_dr": "CTE b7al WITH active AS (...) katkhlli les requêtes lme3e99da wadh7a w kat3awd tst3melhom f nafs la requête.",
      "example": "WITH active AS (\n  SELECT id FROM users WHERE last_login > NOW() - INTERVAL '30 days'\n)\nSELECT * FROM orders WHERE user_id IN (SELECT id FROM active);"
    },
    {
      "text": "`LIKE '%text%'` ne peut pas utiliser un index B-tree normal (le joker en tête force un scan) — pour la vraie recherche textuelle utilisez `FULLTEXT` ou un moteur de recherche.",
      "explain_dr": "LIKE '%text%' mayst3melch index 3adi 7it % f lwel katjber 3la scan kaml — l full text search st3mel FULLTEXT wla moteur b7al Elasticsearch.",
      "example": "SELECT * FROM products WHERE name LIKE '%phon%'; -- leading wildcard = full scan; use FULLTEXT for real search"
    },
    {
      "text": "`EXPLAIN` avant les requêtes lentes montre le plan d'exécution — cherchez les scans complets de table (`type: ALL`), le coupable habituel.",
      "explain_dr": "EXPLAIN kaywrik kifach l'base de données ghate9ra l'query — ila chefti ALL (full table scan), lmochkil tma.",
      "example": "EXPLAIN SELECT * FROM orders WHERE user_id = 7; -- check for full table scan (type: ALL)"
    },
    {
      "text": "Les contraintes (`NOT NULL`, `UNIQUE`, `CHECK`, `DEFAULT`) garantissent l'intégrité des données au niveau de la base, pas seulement dans le code de l'appli.",
      "explain_dr": "Contraintes (NOT NULL, UNIQUE, CHECK, DEFAULT): l'base hiya li kat7mi data machi ghir code dyalk.",
      "example": "CREATE TABLE users (\n  id INT PRIMARY KEY,\n  email VARCHAR(255) NOT NULL UNIQUE,\n  age INT CHECK (age >= 0),\n  role VARCHAR(20) DEFAULT 'user'\n);"
    },
    {
      "text": "`SELECT ... FOR UPDATE` verrouille les lignes sélectionnées dans une transaction, évitant les conditions de course comme dépenser deux fois un solde.",
      "explain_dr": "SELECT ... FOR UPDATE kayverrouiller les lignes f transaction — kaymna3 doublon b7al matssrefch nafs sold joj marat f nafs lwa9t.",
      "example": "BEGIN;\nSELECT balance FROM accounts WHERE id = 1 FOR UPDATE; -- locks the row\nUPDATE accounts SET balance = balance - 50 WHERE id = 1;\nCOMMIT;"
    },
    {
      "text": "Attention à `UPDATE`/`DELETE` sans `WHERE` — ça touche toutes les lignes ; exécutez d'abord un `SELECT` avec le même `WHERE` par sécurité.",
      "explain_dr": "UPDATE/DELETE bla WHERE katbeddel/k7eyyed KOL les lignes! Dima jerreb b SELECT 9bel.",
      "example": "SELECT * FROM users WHERE email = 'admin@example.com'; -- verify the WHERE first\n-- then only:\nUPDATE users SET role = 'admin' WHERE email = 'admin@example.com';"
    }
  ],
  "MongoDb": [
    {
      "text": "MongoDB est une base de données documentaire NoSQL qui stocke les données sous forme de documents BSON flexibles, proches du JSON.",
      "explain_dr": "MongoDB base NoSQL katstocker documents b7al JSON (BSON) — flexible, bla schema fixe.",
      "example": "db.users.insertOne({ name: \"Sara\", age: 24, city: \"Tangier\" }); -- one flexible BSON document"
    },
    {
      "text": "Les données sont organisées en bases → collections → documents (à peu près tables → lignes, mais sans schéma).",
      "explain_dr": "Database > collection > document — b7al table > ligne, walakin bla schema.",
      "example": "db.users.find({ city: \"Tangier\" }); -- collection = like a table, document = like a row"
    },
    {
      "text": "Un document peut imbriquer objets et tableaux : `{ name: \"Aymane\", skills: [\"React\", \"Laravel\"] }`.",
      "explain_dr": "Document y9der ykon fih objets w arrays mdakhlhin — b7al { name, skills: [...] }.",
      "example": "db.products.insertOne({\n  name: \"Keyboard\",\n  specs: { layout: \"AZERTY\", wireless: true },\n  tags: [\"gaming\", \"office\"]\n});"
    },
    {
      "text": "Chaque document reçoit automatiquement un `_id` unique (un `ObjectId`) sauf si vous en fournissez un.",
      "explain_dr": "Kol document 3ando _id unique (ObjectId) kaytzad automatiquement ila madertich wa7ed.",
      "example": "db.orders.insertOne({ total: 99 }); -- _id: ObjectId(\"...\") added automatically"
    },
    {
      "text": "CRUD via le shell ou le driver : `db.users.find({ age: { $gte: 18 } })`, `insertOne()`, `updateOne()`, `deleteOne()`.",
      "explain_dr": "CRUD: find() l9ira2a, insertOne() tzid, updateOne() tbeddel, deleteOne() t7eyyed.",
      "example": "db.users.find({ age: { $gte: 18 } });\ndb.users.updateOne({ email: \"sara@ex.com\" }, { $set: { city: \"Rabat\" } });\ndb.users.deleteOne({ email: \"sara@ex.com\" });"
    },
    {
      "text": "Le pipeline d'agrégation (`$match`, `$group`, `$sort`) traite les données par étapes, comme un GROUP BY SQL en version puissante.",
      "explain_dr": "Aggregation pipeline: $match, $group, $sort — étapes katmchi b tartib, b7al GROUP BY m9ewwa.",
      "example": "db.orders.aggregate([\n  { $match: { status: \"paid\" } },\n  { $group: { _id: \"$city\", total: { $sum: \"$amount\" } } },\n  { $sort: { total: -1 } }\n]);"
    },
    {
      "text": "Créez des index sur les champs souvent interrogés pour garder les lectures rapides : `db.users.createIndex({ email: 1 })`.",
      "explain_dr": "Index 3la les champs li kat9elleb 3lihom bzf kayserre3 l9ira2a — b7al index dyal email.",
      "example": "db.users.createIndex({ email: 1 });"
    },
    {
      "text": "Embarquez les données liées pour un accès intensif en lecture ; référencez-les (liez) quand les données sont volumineuses ou partagées.",
      "explain_dr": "Embed (dekhel) data sghar li kat9rahom dima m3a b3d; reference (link) ila kbar wla mchtarkin.",
      "example": "db.users.insertOne({ name: \"Sara\", address: { city: \"Tangier\", zip: \"90000\" } }); -- embed\n-- or reference: { name: \"Sara\", cityId: ObjectId(\"...\") }"
    },
    {
      "text": "Mongoose est l'ODM Node.js populaire qui ajoute schémas, validation et modèles au-dessus de MongoDB.",
      "explain_dr": "Mongoose: ODM dyal Node.js kayzid schemas + validation fo9 MongoDB.",
      "example": "const userSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, unique: true }\n});"
    },
    {
      "text": "MongoDB vs SQL : MongoDB privilégie les schémas flexibles et la montée en charge horizontale ; SQL privilégie les schémas stricts, les jointures et les transactions complexes.",
      "explain_dr": "MongoDB: flexibilité + horizontal scaling; SQL: schema strict + joins + transactions me3e99da.",
      "example": "-- MongoDB: one collection, flexible docs --\ndb.products.find({ category: \"phone\", price: { $lt: 500 } });"
    },
    {
      "text": "`updateOne` ne touche que les champs dans `$set` : `db.users.updateOne({ _id }, { $set: { name: \"Ali\" } })` — oubliez `$set` et vous remplacez tout le document.",
      "explain_dr": "updateOne m3a $set katbeddel ghir les champs li 3titih — ila nsiti $set, kat3ewwed ldocument kamel! Attention kbira.",
      "example": "db.users.updateOne({ _id: id }, { $set: { name: \"New\" } }); -- only name changes"
    },
    {
      "text": "Un `ObjectId` contient un timestamp : `new ObjectId().getTimestamp()` révèle l'heure de création, et trier par `_id` est à peu près chronologique.",
      "explain_dr": "ObjectId fih timestamp mdakhel — t9der t3ref w9t lcréation, w tri par _id kay3ti tartib chronologique t9riban.",
      "example": "new ObjectId().getTimestamp(); -- creation time embedded in the id\ndb.posts.find().sort({ _id: -1 }); -- roughly newest first"
    },
    {
      "text": "`$lookup` est le JOIN de MongoDB : il récupère des documents d'une autre collection dans le pipeline d'agrégation.",
      "explain_dr": "$lookup howa JOIN dyal MongoDB — kayjbed documents mn collection khra f l'agrégation.",
      "example": "db.orders.aggregate([\n  { $lookup: { from: \"users\", localField: \"userId\", foreignField: \"_id\", as: \"user\" } }\n]);"
    },
    {
      "text": "`db.orders.find({ $or: [{ age: { $lt: 18 } }, { verified: true }] })` combine des conditions sur des champs différents.",
      "explain_dr": "$or katjm3 chorout 3la champs mkhtalfin — ay condition t7e9e9, ldocument kaytjb.",
      "example": "db.users.find({ $or: [{ age: { $lt: 18 } }, { verified: true }] });"
    },
    {
      "text": "Les transactions multi-documents existent (`session.startTransaction()`), mais elles sont plus lentes — concevez les schémas pour éviter d'en avoir besoin.",
      "explain_dr": "Transactions multi-documents kaynin walakin bta2 w ghalyin — sennm lschema dyalk bach ttfadhom.",
      "example": "const session = client.startSession();\nsession.startTransaction(); -- slower; prefer schema design that avoids it"
    },
    {
      "text": "Les replica sets offrent la haute disponibilité (bascule automatique) ; le sharding répartit les données sur plusieurs machines pour la montée en charge horizontale.",
      "explain_dr": "Replica set = haute disponibilité (ila ta7 wa7ed, wa7ed khor kaykml); sharding = t9sim data 3la machines l scale kbir.",
      "example": "-- replica set: automatic failover; sharding: split data across machines"
    },
    {
      "text": "La limite de 16 Mo par document interdit d'embarquer des tableaux illimités (comme des milliers de commentaires) — référencez-les plutôt.",
      "explain_dr": "Document mahdoud b 16MB — 3mr ma t-embeddi array bla limite b7al comments, st3mel reference.",
      "example": "db.posts.updateOne({ _id: id }, { $push: { commentIds: commentId } }); -- reference, not embed, unbounded comments"
    },
    {
      "text": "Les index TTL suppriment les documents automatiquement après un délai : `db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })` — parfait pour les sessions et les tokens.",
      "explain_dr": "TTL index kay7eyyed documents bo7dha mor wa9t mo3ayan — mitali l sessions w tokens b7al expireAfterSeconds: 3600.",
      "example": "db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });"
    },
    {
      "text": "`explain(\"executionStats\")` montre si une requête a utilisé un index (`IXSCAN`) ou tout scanné (`COLLSCAN`) — la version MongoDB du EXPLAIN de SQL.",
      "explain_dr": "explain(\"executionStats\"): ila chefti IXSCAN kayst3mel index (mezyan), ila COLLSCAN kayscanni kolchi (khayb).",
      "example": "db.users.find({ email: \"a@b.com\" }).explain(\"executionStats\"); -- check for COLLSCAN"
    },
    {
      "text": "Les index composés suivent la règle ESR : champs d'Égalité d'abord, puis Tri, puis Intervalle — l'ordre compte pour les performances.",
      "explain_dr": "Index composite: ESR — Égalité lwel, moraha Tri (sort), w lintervalle (range) lkher; tartib mohim bzf.",
      "example": "db.orders.createIndex({ status: 1, createdAt: -1, total: 1 }); -- equality, sort, range"
    },
    {
      "text": "`upsert: true` insère quand aucun document ne correspond : `db.users.updateOne({ email }, { $set: {...} }, { upsert: true })`.",
      "explain_dr": "upsert: ila makaynch document kaywaf9 lfilter, kaycreeyeh — mitali l \"create or update\".",
      "example": "db.users.updateOne({ email: \"a@b.com\" }, { $set: { name: \"Sara\" } }, { upsert: true });"
    },
    {
      "text": "`$inc` incrémente atomiquement : `db.counters.updateOne({}, { $inc: { visits: 1 } })` — sûr sous écritures concurrentes.",
      "explain_dr": "$inc kayzid wa7ed ra9m b tari9a atomique — amin m3a ktaba m3awda f nafs lwa9t (b7al compteur dyal visits).",
      "example": "db.counters.updateOne({ name: \"visits\" }, { $inc: { value: 1 } }); -- atomic"
    },
    {
      "text": "La recherche textuelle exige d'abord un index text : `db.posts.createIndex({ title: \"text\" })`, puis `$text: { $search: \"laravel\" }`.",
      "explain_dr": "Recherche textuelle: khass index text lwel, moraha $text $search — b7al google sghir f lbase.",
      "example": "db.posts.createIndex({ title: \"text\" });\ndb.posts.find({ $text: { $search: \"keyboard\" } });"
    },
    {
      "text": "L'étape `$project` de l'agrégation remodèle la sortie — renomme les champs, en calcule de nouveaux, supprime le reste — avant d'envoyer les résultats au client.",
      "explain_dr": "$project katbeddel chakl natija: katbdel smiyat les champs, kat7seb jdod, w kat7eyyed li mabghitich.",
      "example": "db.users.aggregate([{ $project: { fullName: \"$name\", _id: 0, email: 1 } }]);"
    },
    {
      "text": "Dénormalisez pour les lectures : stocker `authorName` sur chaque post évite un `$lookup` à chaque liste, au prix d'une complexité de mise à jour.",
      "explain_dr": "Dénormalisation: tkhazn authorName m3a kol post bach ttfada $lookup f kol liste — tmnou: update as3eb.",
      "example": "db.posts.insertOne({ title: \"Hello\", authorName: \"Sara\" }); -- denormalize for reads"
    }
  ],
  "Git": [
    {
      "text": "Git est un système de contrôle de version distribué qui suit chaque changement de votre code.",
      "explain_dr": "Git: système kaytbe3 kol tbadilat code dyalk w kay7fdek mn dya3.",
      "example": "git init -- creates a repo\ngit clone <url> -- copies a remote repo"
    },
    {
      "text": "Workflow : `git add .` prépare les changements, `git commit -m \"message\"` enregistre un instantané, `git push` l'envoie.",
      "explain_dr": "add . = t7edd lchanges, commit = tsjjel snapshot, push = tsift l GitHub.",
      "example": "git add . -- stage all changes\ngit commit -m \"Add login form\" -- commit them"
    },
    {
      "text": "Vérifiez l'état avec `git status` et consultez l'historique avec `git log --oneline`.",
      "explain_dr": "git status kaywrik chno tbdel; git log --oneline kaywrik lhistorique b ikhtisar.",
      "example": "git status -- what's changed\ngit log --oneline -- compact history"
    },
    {
      "text": "`git pull` récupère et fusionne les changements distants ; `git fetch` les télécharge seulement.",
      "explain_dr": "pull = fetch + merge (katjbed w katdmj); fetch ghir katjbed bla madmj.",
      "example": "git pull -- fetch + merge remote changes\ngit fetch -- download only, no merge"
    },
    {
      "text": "Les branches isolent le travail : `git checkout -b feature/login` crée une nouvelle branche et bascule dessus.",
      "explain_dr": "Branch: khdma m3zoula 3la main; checkout -b katsna3 branch jdida w katmchi liha.",
      "example": "git checkout -b feature/login -- create and switch to a branch"
    },
    {
      "text": "Fusionnez avec `git merge feature/login` ; résolvez les conflits en éditant les sections marquées, puis commitez.",
      "explain_dr": "merge katdmj branch f l'akhar — conflicts: beddel les sections lmer9ma b yeddik w commit.",
      "example": "git checkout main && git merge feature/login -- merge the branch into main"
    },
    {
      "text": "Un conflit de fusion survient quand deux branches modifient les mêmes lignes — corrigez-le manuellement et commitez.",
      "explain_dr": "Conflict: joj branches beddlo nafs les lignes — kat7ellou ydawiyan w katcommiti.",
      "example": "-- conflict markers:\n<<<<<<< HEAD\nmy change\n=======\ntheir change\n>>>>>>> feature/login\n-- edit the file, keep what you want, then git add + git commit"
    },
    {
      "text": "Écrivez des messages de commit clairs à l'impératif : `\"Add login validation\"`, pas `\"added stuff\"`.",
      "explain_dr": "Messages dyal commit wad7in b l'impératif: \"Add login validation\" machi \"added stuff\".",
      "example": "git commit -m \"Fix login validation\" -- imperative, like a command"
    },
    {
      "text": "Ne commitez jamais les secrets, les fichiers `.env` ni `node_modules` — utilisez un fichier `.gitignore`.",
      "explain_dr": "Secrets, .env, w node_modules 3mr ma tcommitihom — dirhom f .gitignore.",
      "example": "cat .gitignore -- add:\n.env\nnode_modules/\n*.log"
    },
    {
      "text": "`git stash` met temporairement de côté les changements non commités pour changer de branche proprement.",
      "explain_dr": "stash kaykhbbi changes li mazal matcommitatch bach tbeddel branch n9iya.",
      "example": "git stash -- shelve changes\ngit stash pop -- restore them"
    },
    {
      "text": "`git rebase main` rejoue vos commits au-dessus de `main` pour un historique linéaire — mais ne rebasez jamais des commits déjà poussés sur une branche partagée.",
      "explain_dr": "rebase kayj3el lhistorique khatt wa7ed n9i — walakin 3mr ma trebase chi commit li deja tpushit l branch mchtarka.",
      "example": "git checkout feature/login && git rebase main -- linear history\n-- never rebase commits already pushed to a shared branch"
    },
    {
      "text": "`git reset --soft HEAD~1` annule le dernier commit mais garde vos changements staged ; `--hard` les supprime complètement — connaissez la différence avant de le taper.",
      "explain_dr": "reset --soft kayrjj3 commit bla maym7i khdmtk; --hard kaym7i kolchi — fhm lfar9 9bel matktebha.",
      "example": "git reset --soft HEAD~1 -- undo commit, keep changes staged\ngit reset --hard HEAD~1 -- undo commit, discard changes"
    },
    {
      "text": "`git cherry-pick <hash>` applique un seul commit d'une autre branche sur la branche actuelle.",
      "explain_dr": "cherry-pick: katjbed commit wa7ed mn branch khra l branch li nta fiha.",
      "example": "git cherry-pick a1b2c3d -- apply that one commit here"
    },
    {
      "text": "`git reflog` enregistre chaque mouvement de HEAD — votre outil de secours quand vous croyez un commit perdu à jamais.",
      "explain_dr": "reflog kayssjjel kol 7araka dyal HEAD — howa li kayn9dk ila d7enti chi commit dda3.",
      "example": "git reflog -- every HEAD movement; find the lost hash, then git checkout -b rescue <hash>"
    },
    {
      "text": "Fast-forward vs merge commit : `git merge --no-ff` préserve un commit de fusion pour que la branche de fonctionnalité reste visible dans l'historique.",
      "explain_dr": "merge --no-ff kaykhlli commit dyal merge bayn — bach lbnach dyal lfeature tb9a bayna f lhistorique.",
      "example": "git merge --no-ff feature/login -- keeps a merge commit, branch stays visible"
    },
    {
      "text": "`git diff --staged` montre ce qui entrera dans le prochain commit ; `git diff` simple montre seulement les changements non staged.",
      "explain_dr": "git diff --staged kaywrik chno ghaydkhel f commit jay; diff bo7dha ghir li mazal mastageditch.",
      "example": "git diff --staged -- what the next commit will contain\ngit diff -- what's unstaged"
    },
    {
      "text": "`git remote -v` liste où vos branches se poussent ; `git branch -vv` montre le suivi upstream de chaque branche.",
      "explain_dr": "remote -v kaywrik fin katpushi; branch -vv kaywrik l'upstream dyal kol branch.",
      "example": "git remote -v -- where pushes go\ngit branch -vv -- branches with upstream tracking"
    },
    {
      "text": "Detached HEAD signifie que vous êtes sur un commit, pas une branche — créez une branche avec `git switch -c rescue` avant d'y commiter.",
      "explain_dr": "Detached HEAD: nta 3la commit machi branch — sna3 branch 9bel matcommiti tma.",
      "example": "git switch -c rescue -- create a branch from a detached HEAD before committing"
    },
    {
      "text": "`git bisect` cherche par dichotomie dans l'historique le commit qui a introduit un bug : marquez les bons/mauvais commits et laissez Git diviser l'intervalle.",
      "explain_dr": "bisect: kay9smm lhistorique nss nss bach yl9a lcommit li dkhel lbug — katmarki good/bad w howa kaykml.",
      "example": "git bisect start\ngit bisect bad HEAD\ngit bisect good v1.2.0 -- then test each, mark good/bad"
    },
    {
      "text": "Amend : `git commit --amend` fusionne des changements dans le dernier commit — seulement avant de pousser, jamais après que d'autres l'ont récupéré.",
      "explain_dr": "amend: katzid changes l akhir commit — ghir 9bel push, machi mor ma nass jbdouh.",
      "example": "git commit --amend -m \"Fix login validation\" -- folds changes into last commit, only before pushing"
    },
    {
      "text": "Force-push avec précaution, pas en force brute : `git push --force-with-lease` refuse d'écraser le travail des collègues poussé après votre dernier fetch.",
      "explain_dr": "force-with-lease: force push l'amin — kayrfed ykhsser khdma dyal sahbek li pushaha morak.",
      "example": "git push --force-with-lease -- refuses to overwrite teammates' newer pushes"
    },
    {
      "text": "Les motifs de `.gitignore` comme `*.log` ignorent des fichiers, mais `!important.log` en réinclut un — la négation `!` est une bonne réponse-piège.",
      "explain_dr": "f .gitignore, ! kay3ni \"lla had lfile\" — b7al !important.log katstetni wa7ed mn *.log.",
      "example": "-- .gitignore:\n*.log\n!important.log -- re-includes just this one"
    },
    {
      "text": "Le squash-and-merge d'une PR compresse une branche de fonctionnalité en un seul commit propre sur `main` — historique net malgré des commits de travail bruyants.",
      "explain_dr": "Squash-and-merge: PR kamla katwli commit wa7ed n9i 3la main — historique zwin.",
      "example": "-- PR merge strategy: Squash and merge -- one clean commit on main"
    },
    {
      "text": "`git worktree` permet de checker deux branches à la fois dans des dossiers séparés — fini le stash pour relire la PR d'un collègue.",
      "explain_dr": "worktree: joj branches mfto7in f joj dossiers f nafs lwa9t — bla stash.",
      "example": "git worktree add ../pr-review feature/login -- check out two branches at once"
    },
    {
      "text": "Les tags marquent les releases : `git tag v1.0.0 && git push --tags` ; c'est en général sur les tags que la CI construit une release.",
      "explain_dr": "Tags: kaymarkiw les versions (v1.0.0) — la CI katbni releases 3lihom.",
      "example": "git tag v1.0.0 && git push --tags -- mark a release; CI builds from the tag"
    }
  ],
  "Docker": [
    {
      "text": "Docker empaquette une appli et ses dépendances dans un conteneur portable qui tourne partout.",
      "explain_dr": "Docker kayjme3 l'app w ga3 dépendances dyalha f container kaykhdm finma mchiti.",
      "example": "docker build -t webstack-site . -- build image\ndocker run -p 8080:80 webstack-site -- run it anywhere"
    },
    {
      "text": "Un conteneur est un runtime léger et isolé ; une image est le modèle immuable à partir duquel les conteneurs sont créés.",
      "explain_dr": "Container = runtime khfif m3zoul; image = template li menha kaytkhal9ou les containers.",
      "example": "docker images -- list images (templates)\ndocker ps -- list running containers"
    },
    {
      "text": "Le `Dockerfile` définit l'image : image de base, dépendances, étapes de copie et commande de démarrage.",
      "explain_dr": "Dockerfile: kaywsef limage — image assasiya, dépendances, copy, w commande dyal démarrage.",
      "example": "FROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nCMD [\"npm\", \"start\"]"
    },
    {
      "text": "Construisez avec `docker build -t myapp .` et exécutez avec `docker run -p 3000:3000 myapp`.",
      "explain_dr": "build -t katbni limage; run -p 3000:3000 kaykhdmha w kay7el lport.",
      "example": "docker build -t myapp .\ndocker run -p 3000:3000 myapp"
    },
    {
      "text": "`docker-compose.yml` orchestre les configurations multi-conteneurs (appli + base de données + cache) avec un seul `docker compose up`.",
      "explain_dr": "docker-compose.yml: kaydir app + base de données + cache b commande wa7da.",
      "example": "version: \"3\"\nservices:\n  app:\n    build: .\n    ports: [\"3000:3000\"]\n  db:\n    image: postgres:16\n-- docker compose up -- everything starts together"
    },
    {
      "text": "Conteneurs vs machines virtuelles : les conteneurs partagent le noyau de l'hôte et démarrent en secondes ; les VM émulent tout le matériel et sont plus lourdes.",
      "explain_dr": "Container kaypartagi kernel dyal l'hôte w kaybda f secondes; VM kat-emuli hardware kaml w t9ila.",
      "example": "-- containers share the host kernel: seconds to start, MBs of overhead\n-- VMs emulate full hardware: minutes to boot, GBs each"
    },
    {
      "text": "Mappez les ports de l'hôte vers ceux du conteneur avec `-p 8080:80` pour rendre l'appli accessible de l'extérieur.",
      "explain_dr": "-p 8080:80: kayrbt port dyal l'hôte m3a port dyal container bach twsl lapp mn barra.",
      "example": "docker run -p 8080:80 nginx -- host :8080 -> container :80"
    },
    {
      "text": "Persistez les données avec des volumes (`-v mydata:/data`) — les systèmes de fichiers des conteneurs sont éphémères par défaut.",
      "explain_dr": "Container filesystem mo2a99at — volumes (-v) howa li kay7fed data.",
      "example": "docker run -v mydata:/data postgres -- data survives container removal\n-- without a volume, files vanish when the container is deleted"
    },
    {
      "text": "Un fichier `.dockerignore` garde `node_modules`, `.git` et les secrets hors de l'image.",
      "explain_dr": ".dockerignore kaymna3 node_modules, .git w secrets ydkhlo f limage.",
      "example": "-- .dockerignore:\nnode_modules\n.git\n.env"
    },
    {
      "text": "Taguez les images avec des versions (`myapp:1.2.0`) plutôt que de ne compter que sur `latest` pour des déploiements reproductibles.",
      "explain_dr": "Taggi limages b versions (1.2.0) machi ghir latest — bach deploy ykoun stable.",
      "example": "docker build -t myapp:1.2.0 .\ndocker tag myapp:1.2.0 registry.example.com/myapp:1.2.0"
    },
    {
      "text": "Les builds multi-étapes (`FROM node AS build` puis `FROM nginx`) n'embarquent que le résultat compilé — les images finales passent d'environ 1 Go à quelques dizaines de Mo.",
      "explain_dr": "Multi-stage build: katbni b image kbira w f lkher katjbed ghir natija — image katwli sghar bzf.",
      "example": "FROM node:20 AS build\nWORKDIR /app\nCOPY . .\nRUN npm run build\nFROM nginx:alpine\nCOPY --from=build /app/dist /usr/share/nginx/html -- only compiled output ships"
    },
    {
      "text": "Chaque instruction du Dockerfile crée une couche ; placez les étapes qui changent rarement (installation des dépendances) avant celles qui changent souvent (copie du code) pour maximiser le cache des couches.",
      "explain_dr": "Kol instruction = layer; dir dépendances (li matbeddlch) lwel w code lkher — bach lcache ykhdm mzyan.",
      "example": "-- good: COPY package*.json first, install, then COPY code last\n-- bad: COPY . . before npm ci -- code changes invalidate the install layer"
    },
    {
      "text": "`docker exec -it myapp sh` ouvre un shell dans un conteneur en cours d'exécution — votre premier réflexe pour déboguer un service en production.",
      "explain_dr": "docker exec -it: katdkhel l container li khddam — awal 7aja dirha ila bghiti tdebugi.",
      "example": "docker exec -it myapp sh -- open a shell inside the running container"
    },
    {
      "text": "Les variables d'environnement via `--env-file .env` ou `environment:` dans compose valent mieux que des secrets codés en dur dans l'image.",
      "explain_dr": "Secrets: st3mel --env-file wla environment f compose — 3mr ma tktebhom f limage.",
      "example": "docker run --env-file .env myapp -- secrets from the file, not baked in\n-- or compose: environment: [PORT=3000]"
    },
    {
      "text": "`docker compose up -d` lance en détaché ; `docker compose logs -f` suit les logs ; `docker compose down` arrête tout et supprime le réseau.",
      "explain_dr": "up -d khddam f background; logs -f katwrik logs; down kay7bess kolchi.",
      "example": "docker compose up -d -- detached\ndocker compose logs -f -- follow logs\ndocker compose down -- stop and remove"
    },
    {
      "text": "Réseaux : les conteneurs sur le même réseau défini par l'utilisateur se joignent par nom de service (`db:5432`), sans exposer de ports entre eux.",
      "explain_dr": "Containers f nafs réseau: kayhdro b smiyat service (db:5432) bla may7tajou ports m7loula binathom.",
      "example": "services:\n  app:\n    networks: [mynet]\n  db:\n    networks: [mynet] -- app reaches db at db:5432"
    },
    {
      "text": "Les healthchecks (`HEALTHCHECK CMD curl -f http://localhost/health`) permettent à compose/orchestrateurs de redémarrer les conteneurs qui ne répondent plus.",
      "explain_dr": "HEALTHCHECK: ila lcontainer mab9ach kayjawb, l'orchestrateur kayredémarrih bo7dha.",
      "example": "HEALTHCHECK CMD curl -f http://localhost/health || exit 1 -- orchestrator restarts unhealthy containers"
    },
    {
      "text": "Le tag `latest` est mutable — épinglez les versions comme `node:20-alpine` pour que votre build d'aujourd'hui égale celui dans six mois.",
      "explain_dr": "latest kaytbddel — épingle version b7al node:20-alpine bach build dyal lyoum = build dyal ghdda.",
      "example": "FROM node:20-alpine -- pinned, reproducible\n-- avoid FROM node:latest -- the mutable tag breaks builds over time"
    },
    {
      "text": "Les images basées sur Alpine sont minuscules mais utilisent musl libc — certains modules Node natifs cassent ; testez avant de vous y engager.",
      "explain_dr": "Alpine sghir walakin musl libc — ba3d modules natifs dyal Node kaytksrou; jerreb 9bel.",
      "example": "FROM node:20-alpine -- tiny, but musl libc: native modules may fail\n-- test with npm ci && npm test before committing to alpine"
    },
    {
      "text": "`docker system prune` récupère le disque des conteneurs arrêtés, images orphelines et réseaux inutilisés — lancez-le quand la VM se remplit.",
      "explain_dr": "system prune: kayn9i disk mn containers w images lmaytin — dirha ila t3emmer l'espace.",
      "example": "docker system prune -- reclaims space from stopped containers and dangling images"
    },
    {
      "text": "Les bind mounts (`-v ./src:/app/src`) synchronisent le code de l'hôte dans le conteneur — idéal pour le hot-reload en dev local.",
      "explain_dr": "Bind mount: code dyal l'hôte kaytsynkna m3a container — mitali l hot-reload f dev.",
      "example": "docker run -v ./src:/app/src myapp -- host edits appear instantly in the container"
    },
    {
      "text": "`COPY` vs `ADD` : préférez `COPY` ; `ADD` extrait aussi les tarballs et télécharge des URLs, ce qui rend les builds imprévisibles.",
      "explain_dr": "COPY ghir katnsakh; ADD katdir 7wayj zyada (tar, URLs) — COPY hiya l'aslam dima.",
      "example": "COPY app /app -- prefer this\n-- ADD fetches URLs and extracts tarballs: surprising, avoid it"
    },
    {
      "text": "Exécutez en non-root : `USER node` dans le Dockerfile limite les dégâts si l'appli est compromise.",
      "explain_dr": "USER node: khddm lapp bla root — ila t-hackat lapp, d-darar kaykoun mahdoud.",
      "example": "USER node -- run as non-root, limits damage if the app is compromised"
    },
    {
      "text": "Un conteneur s'arrête quand son processus principal s'arrête — c'est pourquoi `CMD [\"nginx\", \"-g\", \"daemon off;\"]` lance nginx au premier plan.",
      "explain_dr": "Container kaymout ila mat lprocess r2issi — 3lach nginx khassou ykhdm f foreground (daemon off).",
      "example": "CMD [\"node\", \"server.js\"] -- container exits when node exits\n-- so run the real service as the main process, not a background daemon"
    },
    {
      "text": "Les limites de ressources (`--memory 512m --cpus 1` ou `deploy.resources` dans compose) empêchent un conteneur gourmand d'affamer l'hôte.",
      "explain_dr": "Limites (--memory, --cpus): kaymn3ou container wa7ed tmma3 yakol ga3 ressources dyal l'hôte.",
      "example": "docker run --memory 512m --cpus 1 myapp -- one greedy container can't starve the host"
    }
  ]
},
  },
];

export const getRevisionNotes = (topic, langTrans) => {
  const block = revisionNotesData.find((b) => b.lang === langTrans);
  return (block && block.notes[topic]) || [];
};
