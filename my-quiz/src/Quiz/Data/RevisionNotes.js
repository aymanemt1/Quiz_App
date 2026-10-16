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
      "example": "function App() {\n  return <div><Header /><Footer /></div>; // reuse components\n}",
      "q": "In the example, what do `<Header />` and `<Footer />` illustrate about how React apps are built?",
      "a": "They illustrate that React apps are assembled from reusable components — the same Header or Footer can be rendered in any number of pages."
    },
    {
      "text": "Components are functions that return JSX; names must start with a capital letter.",
      "explain_dr": "Component howa ghir function kat-rja3 JSX, w lazem smito ybda b 7arf kbir bach React y3arfo.",
      "example": "function Welcome() {\n  return <h1>Hello!</h1>;\n}",
      "q": "What would go wrong if you named the example component `welcome` (lowercase) instead of `Welcome`?",
      "a": "React would treat `<welcome>` as a plain HTML tag instead of your component, so your component function would never run."
    },
    {
      "text": "Declare state with `useState()`. Renders re-run when state changes.",
      "explain_dr": "useState() bih kat-declari state, w ay mra state ytbedel, component kat-re-renderi.",
      "example": "const [count, setCount] = useState(0);",
      "q": "After `const [count, setCount] = useState(0);`, what happens on screen when you call `setCount(5)`?",
      "a": "React re-renders the component with the new state value, so `count` displays as 5."
    },
    {
      "text": "Never mutate state directly — always pass a new value: `setItems([...items, newItem])`.",
      "explain_dr": "Matsowebch state nichan — dayman 3ti value jdida, b7al spread operator, bach React y7ess b tabdil.",
      "example": "setItems([...items, newItem]); // new array, not items.push()",
      "q": "Why is `setItems([...items, newItem])` correct while `items.push(newItem); setItems(items)` fails to update the UI?",
      "a": "Because `push` mutates the same array reference, so React sees no change and skips the re-render; spreading creates a new array reference that triggers the update."
    },
    {
      "text": "Run side effects (fetching, subscriptions, timers) inside `useEffect()`, with a dependency array.",
      "explain_dr": "useEffect() howa blassa dyal side effects b7al fetch w timers, w dependency array kat-golo imta y-t3awed.",
      "example": "useEffect(() => {\n  fetchUsers().then(setUsers);\n}, [userId]);",
      "q": "In the example, when does the fetch run again?",
      "a": "Only when `userId` changes — the dependency array tells React to re-run the effect after renders where `userId` differs."
    },
    {
      "text": "An empty dependency array `[]` makes the effect run once after mount.",
      "explain_dr": "ila khaliti [] khawya, effect ghadi ykhdem ghir mra wa7da melli component y-mounta.",
      "example": "useEffect(() => {\n  console.log(\"mounted once\");\n}, []);",
      "q": "If the effect in the example logged `\"mounted once\"`, how many times would you see it in the console during the component's lifetime (assuming no StrictMode double-invoke)?",
      "a": "Exactly once — an empty dependency array means the effect runs only after the first mount and never again."
    },
    {
      "text": "Pass data down with props; props are read-only inside the child component.",
      "explain_dr": "Props kat-hbet mn parent l child, w child ma-yqdarsh ybeddelhum — ghir yqrahum.",
      "example": "function Child({ name }) {\n  return <p>Hello {name}</p>; // can read name, never change it\n}",
      "q": "What happens if the Child component in the example tries `name = \"Bob\"` before rendering?",
      "a": "Nothing useful — props are read-only in the child; reassigning a prop locally doesn't update the parent's data and the assignment is discarded on the next render."
    },
    {
      "text": "Lift state up to the closest common parent when two components must share it.",
      "explain_dr": "ila joj components khasshum nafs state, tel3o l a9rab parent moshtarak binathum.",
      "example": "function Parent() {\n  const [shared, setShared] = useState(\"\");\n  return <><A value={shared} /><B onChange={setShared} /></>;\n}",
      "q": "In the example, why does the `shared` state live in Parent instead of inside A or B?",
      "a": "Because both A and B need it — lifting it to their closest common parent lets A receive it as a prop and B update it via the passed setter."
    },
    {
      "text": "Give list items a stable `key` prop so React can track them across re-renders.",
      "explain_dr": "key stable kat-3awn React y3ref chkon element li tbedel f list, bach ma y-re-renderish kolchi.",
      "example": "{users.map(u => <li key={u.id}>{u.name}</li>)}",
      "q": "If `users` is reordered in the example, how does `key={u.id}` help React?",
      "a": "React matches each `<li>` to the same user by the stable id, so it moves the existing DOM nodes instead of destroying and recreating them."
    },
    {
      "text": "A re-render happens when state or props change — avoid heavy work inline without `useMemo()`.",
      "explain_dr": "Re-render kat-w9e3 melli state wla props ytbedlo — 7seb 7wayj t9al b useMemo() bach ma t3awdsh t7sabhom.",
      "example": "const total = useMemo(\n  () => items.reduce((s, i) => s + i.price, 0),\n  [items]\n);",
      "q": "In the example, what does `useMemo` prevent when the component re-renders for an unrelated reason (e.g. a different state changes)?",
      "a": "It prevents recomputing the `reduce` over `items` — the cached total is reused since `items` didn't change."
    },
    {
      "text": "Don't store derived state — if it can be computed from props, compute it during render instead of syncing it with `useEffect()` + `setState()`.",
      "explain_dr": "ila state tqdar t7sabha mn props, ma t7ott-hach f state — 7sebha nichan f render, 7it effect + setState ghadi ydir lag.",
      "example": "const fullName = first + \" \" + last; // derived, no useState needed",
      "q": "Why is computing `fullName` during render better than storing it with `useState` + syncing via `useEffect`?",
      "a": "Deriving it in render is always in sync and needs no extra re-render; syncing with an effect adds a lag of one render and risks stale values."
    },
    {
      "text": "A stale closure in `useEffect()` is the #1 timer bug: use the functional form `setCount(c => c + 1)` or include the value in the dependency array.",
      "explain_dr": "Stale closure: setTimeout wla event handler li khda state 9dim — st3mel setCount(c => c + 1) bach takhod akhir value.",
      "example": "setInterval(() => setCount(c => c + 1), 1000); // functional form",
      "q": "In a `setInterval` that calls `setCount(count + 1)`, why does the counter get stuck — and how does the example's `setCount(c => c + 1)` fix it?",
      "a": "The interval closure captures the `count` value from the first render, so it keeps setting the same value; the functional form reads the latest state on every tick."
    },
    {
      "text": "Always clean up effects: return a cleanup function from `useEffect()` to clear timers, abort fetches, and remove listeners.",
      "explain_dr": "useEffect lazem y-rja3 cleanup function bach t-ms7 timers w listeners, wla ghadi y-tstackew w y-dirou memory leaks.",
      "example": "useEffect(() => {\n  const id = setInterval(tick, 1000);\n  return () => clearInterval(id);\n}, []);",
      "q": "In the example, what would happen if the cleanup `() => clearInterval(id)` were missing and the component unmounted?",
      "a": "The interval would keep firing `tick` after unmount — a memory leak that can also call `setState` on an unmounted component."
    },
    {
      "text": "The functional update form `setCount(c => c + 1)` guarantees you work with the latest state, even with rapid successive updates.",
      "explain_dr": "Functional update setCount(c => c + 1) kat-garantir annak khdam b akhir state, wakha updates yjiw bzriba.",
      "example": "setCount(c => c + 1); // safe even for rapid successive updates",
      "q": "If a click handler calls `setCount(count + 1)` twice in a row, what is the final count — and how does the example's form change that?",
      "a": "With `count + 1` twice, both calls use the same stale `count`, so the total only increases by 1; the functional form applies each update to the latest value, so it increases by 2."
    },
    {
      "text": "`useRef()` stores a mutable value that survives re-renders without triggering one — ideal for DOM nodes and previous values.",
      "explain_dr": "useRef b7al sandou9 kat-khebbi fih value li kat-b9a bin renders bla ma t-declenchi render.",
      "example": "const inputRef = useRef(null);\ninputRef.current.focus();",
      "q": "Why is `inputRef` better than a `useState` for storing the input DOM node in the example?",
      "a": "Assigning `inputRef.current` doesn't trigger a re-render, while `useState` would re-render the component every time the ref is set."
    },
    {
      "text": "`useCallback()` and `useMemo()` only help if the child is memoized with `React.memo()` — otherwise they just add overhead.",
      "explain_dr": "useCallback w useMemo ma 3endhum ta faida ila child ma-kanetch memoized b React.memo — bla bih ghir overhead zayd.",
      "example": "const Child = React.memo(({ onClick }) =>\n  <button onClick={onClick}>Save</button>\n);",
      "q": "In the example, what breaks if you remove `React.memo` from Child but keep memoizing the `onClick` prop?",
      "a": "The optimization stops working — Child re-renders on every parent render anyway, so memoizing the callback just adds overhead with no benefit."
    },
    {
      "text": "React 18 batches all state updates automatically; multiple `setState()` calls in one handler cause a single re-render.",
      "explain_dr": "React 18 kat-jme3 updates dyal state bo7dhum — bzaf dyal setState f nafs handler = ghir render wa7da.",
      "example": "function handleClick() {\n  setCount(c => c + 1);\n  setName(\"Aymane\"); // batched: one re-render total\n}",
      "q": "In the example handler, how many re-renders do the two `setState` calls cause?",
      "a": "One — React 18 batches all state updates made in the same event handler into a single re-render."
    },
    {
      "text": "Props change identity on every render if you pass inline objects/arrays: `<Comp data={{ a: 1 }} />` breaks memoization — hoist them.",
      "explain_dr": "Objet inline f props b7al data={{a:1}} kat-tkhal9 reference jdida kol render — kharjo l barra bach memoization t-khdem.",
      "example": "const data = { a: 1 }; // defined once, outside the render\n<Comp data={data} />",
      "q": "Why does `<Comp data={{ a: 1 }} />` defeat `React.memo` while the example's hoisted `data` doesn't?",
      "a": "The inline literal creates a new object identity on every render, so the memo comparison always sees changed props; the hoisted `data` keeps a stable identity across renders."
    },
    {
      "text": "Never call a component as a plain function (`Card()`) — its hooks will break. Always render it as JSX `<Card />`.",
      "explain_dr": "Ma-t3yetsh l component b7al function Card() — hooks ghadi y-tkherb9o. Dayman renderiha b7al JSX <Card />.",
      "example": "<Card /> // correct — hooks keep working\n// Card()  // wrong — hooks break",
      "q": "What breaks if you write `Card()` instead of `<Card />` in the example?",
      "a": "React can't track the call as a component instance, so its hooks share no isolated state and violate the Rules of Hooks — state and effects will misbehave."
    },
    {
      "text": "Conditional hooks (`if (ok) useState(...)`) break the Rules of Hooks — call hooks in the same order, top-level only.",
      "explain_dr": "Hooks khasshum y-t3eyto dayman b nafs tartib — if qbel useState ghadi y-heress rules dyal hooks.",
      "example": "const [data, setData] = useState(null); // always top-level\nif (data) { /* render logic goes here, hooks stay above */ }",
      "q": "Why must `useState` stay above the `if (data)` in the example instead of inside it?",
      "a": "Hooks must run in the same order on every render; calling one conditionally shifts the order on later renders and React loses track of which state belongs to which hook."
    },
    {
      "text": "Keys must be stable and unique — using the array index as `key` breaks reordering, animations, and input state.",
      "explain_dr": "Index dyal array b7al key ghir f lists static — f lists li kat-tbedel wla kat-t-reorder, key lazem tkon stable w unique.",
      "example": "<li key={todo.id}>{todo.text}</li> // not key={index}",
      "q": "In the example's todo list, what goes wrong if you use `key={index}` and then delete the first todo?",
      "a": "React keeps the DOM nodes matched to their index positions, so inputs, focus, or animations attached to items follow the wrong todo after the shift."
    },
    {
      "text": "`useReducer()` centralizes complex state logic in one function — cleaner than many `useState()` calls when updates interact.",
      "explain_dr": "useReducer howa l-7al melli state twelli m3a99da — kol logic dyal updates f blassa wa7da, n9iya kter mn bzaf dyal useState.",
      "example": "const [state, dispatch] = useReducer(reducer, { count: 0 });\ndispatch({ type: \"increment\" });",
      "q": "When should you prefer the example's `useReducer` over several `useState` calls?",
      "a": "When state updates interact with each other or depend on previous values in complex ways — a reducer keeps all transition logic in one predictable function."
    },
    {
      "text": "Error boundaries (`componentDidCatch`) are class-only — there is still no hook equivalent; use a class wrapper or a library.",
      "explain_dr": "Error boundaries ghir b classes — ma-kaynch hook equivalent, khassk class wrapper wla library.",
      "example": "class ErrorBoundary extends React.Component {\n  componentDidCatch(err) { this.setState({ hasError: true }); }\n}",
      "q": "Why can't you replace the example's class with a function component + `useEffect` to catch render errors?",
      "a": "Because `componentDidCatch` is a class-only API — there is no hook equivalent, so function components can't implement error boundaries directly."
    },
    {
      "text": "Custom hooks must start with `use` (`useFetch`) so the linter and React DevTools recognize them as hooks.",
      "explain_dr": "Custom hook lazem smito ybda b 'use' bach linter w DevTools y3arfo annaho hook.",
      "example": "function useFetch(url) {\n  const [data, setData] = useState(null);\n  return data;\n}",
      "q": "What breaks if you rename the example's `useFetch` to `fetchData`?",
      "a": "React and the linter no longer recognize it as a hook — the Rules-of-Hooks checks stop applying and DevTools won't treat it as a hook, even if it calls hooks internally."
    },
    {
      "text": "`Suspense` + `lazy()` code-splits routes: `const Page = lazy(() => import('./Page'))` wrapped in `<Suspense fallback={...}>`.",
      "explain_dr": "lazy() + Suspense bach t-code-split: pages kat-t-loada ghir melli user y-7tajha, w fallback kat-ban f blast tsanna.",
      "example": "const Page = lazy(() => import(\"./Page\"));\n<Suspense fallback={<p>Loading...</p>}><Page /></Suspense>",
      "q": "In the example, what does the user see while `./Page` is still downloading?",
      "a": "The `<p>Loading...</p>` fallback — Suspense renders it until the lazy import resolves."
    }
  ],
  "Javascript": [
    {
      "text": "`let` allows reassignment, `const` does not; `var` is function-scoped and best avoided.",
      "explain_dr": "let kat-tbedel, const la; var function-scoped w 7ssen t-tjannbo.",
      "example": "let x = 1; x = 2; // reassignable\nconst y = 3;        // cannot reassign\n// var is function-scoped — avoid it",
      "q": "In the example, which line would throw if you tried to reassign the variable afterwards?",
      "a": "The `const y = 3` line — `const` forbids reassignment, while `let x` can be reassigned freely."
    },
    {
      "text": "`===` compares value and type; `==` coerces types and is a common source of bugs.",
      "explain_dr": "=== kat-9aren value w type bjoj; == kat-dir coercion w kat-jib bugs.",
      "example": "1 === \"1\"; // false (value + type)\n1 == \"1\";  // true (type coercion)",
      "q": "According to the example, what does `1 === \"1\"` return and why does `1 == \"1\"` differ?",
      "a": "`1 === \"1\"` is false because the types differ; `1 == \"1\"` is true because `==` coerces the string to a number before comparing."
    },
    {
      "text": "Functions are first-class: they can be assigned, passed as arguments, and returned.",
      "explain_dr": "Functions f JS first-class — tqdar t-assigniha, t-passiha b7al argument, w t-rje3ha.",
      "example": "const run = (fn) => fn();\nrun(() => console.log(\"hi\"));",
      "q": "What does `run(() => console.log(\"hi\"))` print, and why?",
      "a": "It prints `hi` — `run` receives the arrow function as `fn` and invokes it with `fn()`."
    },
    {
      "text": "Arrow functions `() => {}` do not have their own `this`; they inherit it from the enclosing scope.",
      "explain_dr": "Arrow function ma-3endha-sh this dyalha — kat-wereth this mn scope li dayer biha.",
      "example": "button.addEventListener(\"click\", () => this.handle());\n// arrow has no own 'this' — inherits enclosing scope's",
      "q": "In the example, whose `this` does the arrow function use when the click fires?",
      "a": "The enclosing scope's `this` (e.g. the class instance where the listener was registered) — the arrow function has no `this` of its own."
    },
    {
      "text": "`null` means an intentionally empty value; `undefined` means a value was never assigned.",
      "explain_dr": "null = value khawya b niya; undefined = value ma-t3tatsh aslan.",
      "example": "let a = null; // intentionally empty\nlet b;        // undefined — never assigned",
      "q": "In the example, what is the difference in meaning between `a` and `b`?",
      "a": "`a` was deliberately set to empty (`null`); `b` was never assigned, so it's `undefined` by default."
    },
    {
      "text": "`map()`, `filter()`, and `reduce()` transform arrays without mutating them.",
      "explain_dr": "map/filter/reduce kat-bedlo arrays bla ma y-mutew l-asli.",
      "example": "const doubled = [1, 2, 3].map(n => n * 2);\nconst evens = [1, 2, 3, 4].filter(n => n % 2 === 0);\nconst sum = [1, 2, 3].reduce((s, n) => s + n, 0);",
      "q": "What are the values of `doubled`, `evens`, and `sum` in the example?",
      "a": "`doubled` is `[2, 4, 6]`, `evens` is `[2, 4]`, and `sum` is `6` — the original arrays are untouched."
    },
    {
      "text": "A closure is a function that remembers variables from the scope where it was created.",
      "explain_dr": "Closure: function kat-tfker variables mn scope li t-khel9at fih, wakha dak scope sala.",
      "example": "function counter() {\n  let n = 0;\n  return () => ++n; // remembers n after counter() finished\n}",
      "q": "What does the returned function print on its first three calls?",
      "a": "`1`, `2`, then `3` — the closure keeps `n` alive between calls, incrementing it each time."
    },
    {
      "text": "`async/await` handles promises more readably than chained `.then()` calls.",
      "explain_dr": "async/await kat-khli code dyal promises wade7 kter mn .then() li m-chainin.",
      "example": "async function load() {\n  const res = await fetch(\"/api/users\");\n  return res.json();\n}",
      "q": "What does `load()` return, and what type is it?",
      "a": "A promise that resolves to the parsed JSON of `/api/users` — `res.json()` itself returns a promise that `load` awaits."
    },
    {
      "text": "`JSON.parse()` converts a string to an object; `JSON.stringify()` converts an object to a string.",
      "explain_dr": "JSON.parse: string → object; JSON.stringify: object → string.",
      "example": "JSON.parse('{\"a\":1}');    // string -> object\nJSON.stringify({ a: 1 }); // object -> string",
      "q": "In the example, what are the types of the results of `JSON.parse('{\"a\":1}')` and `JSON.stringify({ a: 1 })`?",
      "a": "`JSON.parse` returns an object (`{ a: 1 }`); `JSON.stringify` returns a string (`'{\"a\":1}'`)."
    },
    {
      "text": "`typeof null` returns `\"object\"` — a well-known historical quirk of the language.",
      "explain_dr": "typeof null = 'object' — ghalta 9dima f language b9at l daba.",
      "example": "typeof null; // \"object\" — a historic quirk",
      "q": "What does `typeof null` evaluate to, and is that logically correct?",
      "a": "`\"object\"` — it's a historic bug from the language's first implementation, not a logically correct result."
    },
    {
      "text": "`NaN !== NaN` — test with `Number.isNaN()`, never with equality; `Object.is()` handles `-0` and `NaN` correctly.",
      "explain_dr": "NaN ma-kay-sawich rasso — st3mel Number.isNaN() bach t-testi, w Object.is() l -0 w NaN.",
      "example": "NaN === NaN;       // false — never use equality\nNumber.isNaN(NaN); // true\nObject.is(-0, 0);  // false",
      "q": "What do the three expressions in the example evaluate to?",
      "a": "`NaN === NaN` is false, `Number.isNaN(NaN)` is true, and `Object.is(-0, 0)` is false (it distinguishes `-0` from `0`)."
    },
    {
      "text": "Hoisting: `var` and function declarations move to the top; `let`/`const` sit in the temporal dead zone until their line runs.",
      "explain_dr": "Hoisting: var w function declarations kat-tl3o l fo9; let/const kay-b9aw f temporal dead zone 7ta y-wslo l line dyalhum.",
      "example": "console.log(a); // undefined — var is hoisted\nvar a = 1;\nconsole.log(b); // ReferenceError — let is in the TDZ\nlet b = 2;",
      "q": "Why does the first `console.log` print `undefined` while the second throws?",
      "a": "`var a` is hoisted and initialized to `undefined` before the log; `let b` is hoisted but stays in the temporal dead zone until its declaration line, so accessing it throws a ReferenceError."
    },
    {
      "text": "Destructuring with defaults: `const { name = 'Aymane' } = user` — and rest/spread `...` copies shallowly, not deeply.",
      "explain_dr": "Destructuring m3a defaults: { name = 'Aymane' } — w spread ... kat-copy ghir surface, machi deep.",
      "example": "const { name = \"Aymane\" } = user; // default if missing\nconst copy = { ...user };           // shallow copy only",
      "q": "In the example, if `user` has no `name` property, what is `name` — and if you later mutate `copy.address.city`, does `user.address.city` change?",
      "a": "`name` falls back to `\"Aymane\"`; yes, `user.address.city` also changes because the spread only copies the top level — nested objects are still shared by reference."
    },
    {
      "text": "`||` falls back on any falsy value; `??` only on `null`/`undefined` — use `??` for defaults that allow `0` and `''`.",
      "explain_dr": "|| kat-rje3 l fallback 3la ay falsy; ?? ghir 3la null/undefined — st3mel ?? ila bghiti t-9bel 0 w ''.",
      "example": "0 || 10; // 10 — 0 is falsy\n0 ?? 10; // 0  — ?? only falls back on null/undefined",
      "q": "Why does `0 || 10` give `10` while `0 ?? 10` gives `0`?",
      "a": "`||` falls back on any falsy value (and `0` is falsy); `??` only falls back on `null`/`undefined`, so the valid `0` is kept."
    },
    {
      "text": "`Array.prototype` mutators (`push`, `splice`, `sort`) change the array in place; `slice`, `map`, `concat` return new arrays.",
      "explain_dr": "push/splice/sort kat-mutew array nichan; slice/map/concat kat-rj3o array jdida.",
      "example": "arr.push(4);           // mutates arr in place\nconst b = arr.slice(0, 2); // returns a new array",
      "q": "After the example runs, what changed in `arr` and what is `b`?",
      "a": "`arr` now contains the pushed `4` (mutated in place); `b` is a brand-new array with the first two elements, leaving `arr` otherwise intact."
    },
    {
      "text": "Event loop: `setTimeout` callbacks run after the current stack empties — even `setTimeout(fn, 0)` never runs immediately.",
      "explain_dr": "Event loop: setTimeout kat-tssena 7ta stack y-khwa — wakha 0ms, ma-kat-khdemsh nichan.",
      "example": "setTimeout(() => console.log(\"later\"), 0);\nconsole.log(\"now\"); // logs first, then \"later\"\n",
      "q": "What is the console output order in the example, and why?",
      "a": "`\"now\"` first, then `\"later\"` — the `setTimeout` callback waits in the queue until the current call stack empties, even with a 0ms delay."
    },
    {
      "text": "Microtasks (promises) always run before macrotasks (timers): an awaited promise beats a `setTimeout(..., 0)`.",
      "explain_dr": "Microtasks (promises) dayman qbel macrotasks (timers) — awaited promise kat-sbe9 setTimeout(...,0).",
      "example": "setTimeout(() => console.log(\"timer\"), 0);\nPromise.resolve().then(() => console.log(\"promise\")); // logs first",
      "q": "What logs first in the example — `\"timer\"` or `\"promise\"`?",
      "a": "`\"promise\"` — microtasks (promise callbacks) always drain before macrotasks (timers), regardless of registration order."
    },
    {
      "text": "Pass-by-value vs reference: primitives copy the value, objects copy the reference — mutating a passed object mutates the original.",
      "explain_dr": "Primitives kat-t-copya b value, objects b reference — ila beddelti object li t-passa, l-asli ghadi ytbedel.",
      "example": "function bump(o) { o.n++; }\nconst obj = { n: 1 };\nbump(obj); // obj.n is now 2 — the original was mutated",
      "q": "What is `obj.n` after `bump(obj)` runs, and why?",
      "a": "`2` — objects are passed by reference copy, so `o.n++` inside `bump` mutates the original object's property."
    },
    {
      "text": "`Object.freeze()` only freezes the top level; nested objects stay mutable — freezing is shallow.",
      "explain_dr": "Object.freeze ghir l-fo9 — nested objects kay-b9aw mutable, freeze machi deep.",
      "example": "const o = Object.freeze({ nested: { a: 1 } });\no.nested.a = 2; // still works — only the top level is frozen",
      "q": "Why does `o.nested.a = 2` succeed even though `o` was frozen?",
      "a": "`Object.freeze` only freezes the top level; the nested object remains a live, mutable reference."
    },
    {
      "text": "Spreading a string gives its characters: `[...'abc']` → `['a','b','c']`; iterables only — plain objects are not iterable.",
      "explain_dr": "Spread dyal string kat-3ti characters: [...'abc']; ghir iterables — plain object machi iterable.",
      "example": "[...\"abc\"]; // [\"a\", \"b\", \"c\"]",
      "q": "What does `[... \"abc\"]` produce, and would `[... {a: 1}]` work the same way?",
      "a": "It produces `[\"a\", \"b\", \"c\"]` because strings are iterable; `{a: 1}` is not iterable, so spreading it throws a TypeError."
    },
    {
      "text": "`Promise.all()` rejects on the first failure; `Promise.allSettled()` waits for all and reports each outcome.",
      "explain_dr": "Promise.all kat-fail 3la awel wa7da; allSettled kat-tsenna kolchi w kat-3tik natija dyal kol wa7da.",
      "example": "Promise.all([p1, p2]);        // rejects on the first failure\nPromise.allSettled([p1, p2]); // waits for all, reports each outcome",
      "q": "If `p1` rejects and `p2` resolves, how do the two calls in the example differ in outcome?",
      "a": "`Promise.all` rejects immediately with `p1`'s reason and ignores `p2`; `Promise.allSettled` waits for both and returns an array describing each result."
    },
    {
      "text": "`for...of` iterates values of an iterable; `for...in` iterates enumerable keys — use `of` for arrays, `in` for objects.",
      "explain_dr": "for...of l values dyal iterable; for...in l keys — of l arrays, in l objects.",
      "example": "for (const v of [1, 2]) {}   // values of an iterable\nfor (const k in { a: 1 }) {} // keys of an object",
      "q": "What does each loop iterate over in the example?",
      "a": "`for...of` iterates the array's values (`1`, `2`); `for...in` iterates the object's keys (`\"a\"`)."
    },
    {
      "text": "An `async` function always returns a promise, even if you `return 5` — it resolves with `5`.",
      "explain_dr": "async function dayman kat-rje3 promise — wakha t-dir return 5, kat-resolvi b 5.",
      "example": "async function f() { return 5; }\nf().then(v => console.log(v)); // 5",
      "q": "Why does `f().then(...)` work even though the example's function returns the plain number `5`?",
      "a": "An `async` function always wraps its return value in a promise — `return 5` becomes a promise resolved with `5`."
    },
    {
      "text": "`this` inside a regular method depends on the call site: `obj.method()` works, but `const f = obj.method; f()` loses `this`.",
      "explain_dr": "this f method 3adiya 3la 7sab kifach 3eyeti liha: obj.method() ok, walakin const f = obj.method; f() kat-daye3 this.",
      "example": "obj.method();            // this = obj\nconst f = obj.method;\nf(); // this is lost (undefined)",
      "q": "In the example, why does `obj.method()` keep `this` but `f()` lose it?",
      "a": "`obj.method()` is called as a method of `obj`, so `this` is `obj`; assigning it to `f` detaches it, and the bare call `f()` has no receiver, so `this` is `undefined`."
    },
    {
      "text": "Optional chaining `user?.address?.city` short-circuits to `undefined`; combine with `??` for safe defaults: `user?.age ?? 18`.",
      "explain_dr": "user?.address?.city kat-rje3 undefined ila chi wa7da ma-kaynach — zidi ?? bach t-3ti default: user?.age ?? 18.",
      "example": "const city = user?.address?.city; // undefined if any link is missing\nconst age = user?.age ?? 18;        // safe default",
      "q": "In the example, when is `city` `undefined`, and what does `age` become if `user` is `null`?",
      "a": "`city` is `undefined` if `user`, `user.address`, or `user.address.city` is missing; `age` becomes `18` because `user?.age` short-circuits to `undefined` and `??` supplies the default."
    }
  ],
  "Typescript": [
    {
      "text": "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
      "explain_dr": "TypeScript howa JavaScript zayd 3lih types, w kat-tcompila l JavaScript 3adi.",
      "example": "let name: string = \"Aymane\"; // type annotation, compiles to plain JS",
      "q": "What does the example's `: string` annotation add that plain JavaScript lacks?",
      "a": "A compile-time guarantee that `name` holds a string — assigning a number would fail before the code ever runs."
    },
    {
      "text": "Static types catch bugs at compile time before the code ever runs.",
      "explain_dr": "Types static kat-cheddo bugs f wa9t compilation, 9bel ma code y-khdem.",
      "example": "function add(a: number, b: number) { return a + b; }\nadd(1, \"2\"); // compile-time error — caught before running",
      "q": "Why does the example's `add(1, \"2\")` fail before the program runs?",
      "a": "The signature requires two `number`s, so the type checker rejects the string argument at compile time instead of producing a runtime `\"12\"` concatenation surprise."
    },
    {
      "text": "Declare types with `type` aliases or `interface` definitions: `interface User { name: string; age: number }`.",
      "explain_dr": "type w interface bach t-declari shapes: interface User { name: string; age: number }.",
      "example": "interface User { name: string; age: number }\nconst u: User = { name: \"Aymane\", age: 24 };",
      "q": "What happens if you write `const u: User = { name: \"Aymane\" };` (missing `age`)?",
      "a": "Compile error — the `User` interface requires both `name` and `age`, and `age` is not optional."
    },
    {
      "text": "Annotate variables, params, and return values: `function add(a: number, b: number): number`.",
      "explain_dr": "Annoti variables, params, w return: function add(a: number, b: number): number.",
      "example": "function add(a: number, b: number): number {\n  return a + b;\n}",
      "q": "How does the `: number` return annotation in the example protect callers of `add`?",
      "a": "It guarantees callers that `add` always returns a number, so the compiler will flag any code that treats its result as a string."
    },
    {
      "text": "`string | number` is a union type — the value may be either type.",
      "explain_dr": "string | number = union — value tqdar tkon wa7da mn joj.",
      "example": "let id: string | number;\nid = \"abc\"; // ok\nid = 42;    // ok",
      "q": "In the example, which assignments to `id` compile and which fail?",
      "a": "`\"abc\"` and `42` compile (both members of the union); assigning `true` would fail because `boolean` is not in `string | number`."
    },
    {
      "text": "Generics like `Array<T>` let you write reusable, type-safe code: `function first<T>(arr: T[]): T`.",
      "explain_dr": "Generics Array<T> kat-khlik t-kteb code reusable w type-safe.",
      "example": "function first<T>(arr: T[]): T {\n  return arr[0];\n}\nfirst<number>([1, 2, 3]);",
      "q": "In the example, what is the return type of `first<number>([1, 2, 3])`, and what would `first<string>([\"a\"])` return?",
      "a": "`number` (the element `1`); `first<string>([\"a\"])` would return a `string` — the generic `T` adapts to the call."
    },
    {
      "text": "Use `type` for unions and intersections; use `interface` when you plan to extend objects.",
      "explain_dr": "type l unions w intersections; interface melli ghadi t-extendi objects.",
      "example": "type Status = \"ok\" | \"error\";             // union -> type\ninterface Admin extends User { role: string } // extension -> interface",
      "q": "Why does the example use `type` for `Status` but `interface` for `Admin`?",
      "a": "`Status` is a union of literals, which only `type` can express; `Admin` extends `User`, and `interface` is the idiomatic tool for object extension."
    },
    {
      "text": "The `unknown` type is the type-safe alternative to `any` — you must narrow it before use.",
      "explain_dr": "unknown howa any l-amina — lazem t-narrowiha 9bel ma t-sta3melha.",
      "example": "let v: unknown = getData();\nif (typeof v === \"string\") v.toUpperCase(); // narrow first",
      "q": "In the example, why is the `typeof v === \"string\"` check required before `v.toUpperCase()`?",
      "a": "`unknown` forbids any operation until narrowed — without the check, the compiler can't prove `v` is a string, so calling a string method is an error."
    },
    {
      "text": "`?` marks an optional property or parameter: `name?: string`.",
      "explain_dr": "? kat-3ni optional: name?: string.",
      "example": "function greet(name?: string) {\n  return \"Hello \" + (name ?? \"guest\");\n}",
      "q": "What does `greet()` return with no argument, and why?",
      "a": "`\"Hello guest\"` — `name` is `undefined` when omitted, and `?? \"guest\"` supplies the fallback."
    },
    {
      "text": "Enable `strict` mode in `tsconfig.json` for the strongest type checking.",
      "explain_dr": "strict mode f tsconfig.json = a9wa type checking.",
      "example": "{ \"compilerOptions\": { \"strict\": true } } // tsconfig.json",
      "q": "What does enabling `strict: true` in the example's tsconfig change for the project?",
      "a": "It turns on the full set of strict type-checking flags (strict null checks, no implicit `any`, etc.), catching more bugs at compile time."
    },
    {
      "text": "`any` disables type checking entirely; prefer `unknown` and narrow it with `typeof`/`instanceof` guards.",
      "explain_dr": "any kat-tfi type checking kamel — st3mel unknown w narrowi b typeof/instanceof.",
      "example": "let a: any; // no checking — avoid\nlet u: unknown = fetchData();\nif (typeof u === \"number\") u.toFixed(2); // narrow with a guard",
      "q": "In the example, what is the practical difference between `a` and `u` when you try to call `.toFixed(2)` on each?",
      "a": "`a.toFixed(2)` compiles without complaint (no checking at all — it may crash at runtime); `u.toFixed(2)` only compiles after the `typeof` guard proves `u` is a number."
    },
    {
      "text": "`never` is the type of a value that can never occur — functions that always throw or loop forever return `never`.",
      "explain_dr": "never = type dyal 7aja li 3omrha ma-t-w9e3 — functions li dayman kat-throw wla kat-loop bla nihaya.",
      "example": "function fail(msg: string): never {\n  throw new Error(msg);\n}",
      "q": "Why is `never` the right return type for the example's `fail` instead of `void`?",
      "a": "Because `fail` never returns at all — it always throws; `never` tells the compiler that code after the call is unreachable."
    },
    {
      "text": "Discriminated unions (`type: 'ok' | 'error'`) plus a `switch` give exhaustive narrowing — the compiler flags missing cases.",
      "explain_dr": "Discriminated unions (type: 'ok'|'error') m3a switch — compiler kay-golik ila nsiti case.",
      "example": "type Result = { type: \"ok\"; data: string } | { type: \"error\"; msg: string };\nswitch (r.type) {\n  case \"ok\": return r.data;\n  case \"error\": throw new Error(r.msg); // missing case = compile error\n}",
      "q": "If you deleted the `case \"error\"` branch from the example's switch, what would the compiler do?",
      "a": "With exhaustive narrowing it flags the missing case as a compile error, since `r` would remain the unhandled `error` variant after the switch."
    },
    {
      "text": "Type guards are functions returning a predicate: `function isUser(x: unknown): x is User` — the compiler trusts your check.",
      "explain_dr": "Type guard: function kat-rje3 x is User — compiler kay-tiq f check dyalek.",
      "example": "function isUser(x: unknown): x is User {\n  return typeof x === \"object\" && x !== null && \"name\" in x;\n}",
      "q": "After `if (isUser(x)) { ... }` succeeds in the example, what does TypeScript know about `x` inside the block?",
      "a": "It narrows `x` to `User` — the `x is User` predicate tells the compiler to trust your runtime check for the rest of the block."
    },
    {
      "text": "`as const` freezes a literal to its narrowest type: `const roles = ['admin','user'] as const` gives a readonly tuple of literals.",
      "explain_dr": "as const kat-jemmed literal l adya9 type: ['admin','user'] as const → readonly tuple.",
      "example": "const roles = [\"admin\", \"user\"] as const; // readonly tuple of literals\ntype Role = typeof roles[number];           // \"admin\" | \"user\"\n",
      "q": "In the example, what is the type of `roles[0]` and of `Role`, and why couldn't `roles.push(\"super\")` compile?",
      "a": "`roles[0]` is the literal type `\"admin\"` and `Role` is `\"admin\" | \"user\"`; `push` fails because `as const` made the tuple readonly."
    },
    {
      "text": "The `satisfies` operator checks a value against a type without widening it: `const cfg = {...} satisfies Config`.",
      "explain_dr": "satisfies kat-checki value 3la type bla ma t-wesse3 type dyalo.",
      "example": "const cfg = { port: 3000, host: \"localhost\" } satisfies Config;",
      "q": "What does `satisfies Config` check in the example without changing about `cfg`'s inferred type?",
      "a": "It verifies the object matches `Config` at compile time, while keeping `cfg`'s narrow inferred type (e.g. literal `3000`) instead of widening it to `Config`."
    },
    {
      "text": "`Record<string, number>` is shorthand for an object type with string keys and number values.",
      "explain_dr": "Record<string, number> = objet li keys strings w values numbers, b ikhtisar.",
      "example": "const scores: Record<string, number> = { aymane: 95 };",
      "q": "In the example, would `scores.bob = \"high\"` compile?",
      "a": "No — `Record<string, number>` requires every value to be a `number`, so assigning a string is a compile error."
    },
    {
      "text": "`Pick<T, 'a' | 'b'>`, `Omit<T, 'c'>`, `Partial<T>`, `Required<T>` build new types from existing ones — no duplication.",
      "explain_dr": "Pick/Omit/Partial/Required kat-bniw types jdad mn types 9dam — bla t3awd.",
      "example": "type Preview = Pick<User, \"name\">; // { name: string }\ntype Draft = Partial<User>;           // every property optional",
      "q": "In the example, what shape does `Draft` have compared to `User`?",
      "a": "The same properties as `User`, but all optional — `Partial<User>` makes every property optional while `Pick<User, \"name\">` keeps only `name`."
    },
    {
      "text": "Interfaces merge automatically (declaration merging); types do not — extending a third-party interface requires `interface`.",
      "explain_dr": "Interfaces kat-merge bo7dhum; types la — extend dyal interface dyal library khasso interface.",
      "example": "interface Box { w: number }\ninterface Box { h: number } // merges -> { w: number; h: number }",
      "q": "After the two declarations in the example, what is the full shape of `Box` — and could a `type Box` alias do the same?",
      "a": "`{ w: number; h: number }` — the declarations merge automatically; a `type` alias cannot merge, so redeclaring it would be a duplicate-identifier error."
    },
    {
      "text": "Covariance trap: assigning `Dog[]` to `Animal[]` compiles, but pushing a `Cat` corrupts it — arrays are unsound in TS.",
      "explain_dr": "Arrays f TS machi sound: Dog[] → Animal[] kat-compile walakin push Cat ghadi y-kherbe9ha.",
      "example": "const dogs: Dog[] = [];\nconst animals: Animal[] = dogs; // compiles...\nanimals.push(new Cat());        // ...but corrupts dogs",
      "q": "In the example, why is `dogs` corrupted after `animals.push(new Cat())`?",
      "a": "`animals` and `dogs` reference the same array — `Dog[]` was assignable to `Animal[]`, but that unsound assignment lets a `Cat` slip into what is really a dog array."
    },
    {
      "text": "`readonly` properties and arrays (`readonly string[]`) exist only at compile time — nothing stops a runtime mutation.",
      "explain_dr": "readonly ghir f compile-time — f runtime walou ma-y-7bess mutation.",
      "example": "const arr: readonly string[] = [\"a\"];\narr.push(\"b\"); // compile error — nothing stops mutation at runtime",
      "q": "The example's `arr.push(\"b\")` fails to compile — but what would happen at runtime if you bypassed the checker (e.g. via `as any`)?",
      "a": "The push would succeed — `readonly` is erased at compile time, so nothing stops the mutation at runtime."
    },
    {
      "text": "Enums compile to real objects at runtime; string-literal unions (`'a' | 'b'`) vanish after compilation — prefer unions.",
      "explain_dr": "Enums kay-b9aw f runtime; unions dyal strings kat-mshiw m3a compilation — unions 7ssen.",
      "example": "enum Role { Admin, User }   // real object at runtime\ntype Status = \"a\" | \"b\";     // vanishes after compile — prefer unions",
      "q": "After compilation, what remains of the example's `Role` enum versus the `Status` union?",
      "a": "`Role` remains as a real JavaScript object at runtime; the `Status` union is erased entirely since types vanish after compilation."
    },
    {
      "text": "Generic constraints bound the type parameter: `function get<T extends { id: number }>(item: T)` — T must have `id`.",
      "explain_dr": "T extends { id: number } = constraint — T lazem tkon 3endha id.",
      "example": "function get<T extends { id: number }>(item: T): number {\n  return item.id; // T must have id\n}",
      "q": "In the example, would `get({ name: \"x\" })` compile, and why?",
      "a": "No — `T extends { id: number }` requires the argument to have a numeric `id`, which `{ name: \"x\" }` lacks."
    },
    {
      "text": "`unknown` in a `catch` clause (TS 4.4+): `catch (e: unknown)` is the default under strict — narrow before using `e`.",
      "explain_dr": "catch (e: unknown) howa default f strict — narrowi e 9bel ma t-sta3mlo.",
      "example": "try { risky(); }\ncatch (e: unknown) {\n  if (e instanceof Error) console.log(e.message); // narrow before use\n}",
      "q": "Why must the example narrow `e` with `instanceof Error` before reading `e.message`?",
      "a": "Under strict mode the caught value is `unknown`, so the compiler forbids touching `.message` until you prove `e` is actually an `Error`."
    },
    {
      "text": "Index signatures `{ [key: string]: any }` allow dynamic keys, but prefer `Record<>` or `Map<>` for type safety.",
      "explain_dr": "Index signatures {[key: string]: any} kat-9bel dynamic keys, walakin Record wla Map amn kter.",
      "example": "const cache: Record<string, User> = {}; // safer than {[k: string]: any}\ncache[\"u1\"] = { name: \"Aymane\", age: 24 };",
      "q": "Why is the example's `Record<string, User>` safer than `{ [key: string]: any }`?",
      "a": "`Record<string, User>` guarantees every value is a `User` — with `any` values, any property access compiles unchecked and can fail at runtime."
    }
  ],
  "VueJs": [
    {
      "text": "Vue is a progressive JavaScript framework for building reactive user interfaces.",
      "explain_dr": "Vue framework progressif bach t-sna3 interfaces reactive.",
      "example": "createApp({ data: () => ({ message: \"Hello\" }) }).mount(\"#app\");",
      "q": "What do the three parts of the example do — `createApp(...)`, `data: () => ({ message: \"Hello\" })`, and `.mount(\"#app\")`?",
      "a": "`createApp` creates the Vue application, `data` declares the reactive state, and `.mount(\"#app\")` attaches the app to the DOM element with id `app`."
    },
    {
      "text": "In the Options API, component state lives in `data()`, logic in `methods`, and derived values in `computed`.",
      "explain_dr": "Options API: data() l state, methods l logic, computed l values li kat-t7seb.",
      "example": "export default {\n  data: () => ({ count: 0 }),\n  methods: { inc() { this.count++; } },\n  computed: { double() { return this.count * 2; } }\n};",
      "q": "In the example, if `count` is 3, what does `double` return — and where would you put a function that increments `count`?",
      "a": "`double` returns `6`; an incrementing function belongs in `methods` (like `inc`), while `data` holds state and `computed` holds derived values."
    },
    {
      "text": "The Composition API uses `setup()` with `ref()` and `reactive()` for state.",
      "explain_dr": "Composition API: setup() m3a ref() w reactive() l state.",
      "example": "setup() {\n  const count = ref(0);\n  const state = reactive({ name: \"Aymane\" });\n  return { count, state };\n}",
      "q": "What does `setup()` return in the example, and why is that needed?",
      "a": "It returns `{ count, state }` so the template can access those refs — anything not returned stays invisible to the template."
    },
    {
      "text": "Bind data to the DOM with `{{ }}` interpolation and directives like `v-bind`, `v-on`, `v-if`, `v-for`.",
      "explain_dr": "Interpolation {{ }} w directives v-bind, v-on, v-if, v-for bach t-rebt data m3a DOM.",
      "example": "<p>{{ title }}</p>\n<button v-bind:disabled=\"!ok\" v-on:click=\"save\">Save</button>\n<div v-if=\"show\">Hi</div>\n<li v-for=\"t in todos\">{{ t.text }}</li>",
      "q": "In the example, when is the Save button disabled?",
      "a": "When `!ok` is true — `v-bind:disabled` binds the disabled attribute to the negation of `ok`."
    },
    {
      "text": "Use `v-model` for two-way binding on form inputs.",
      "explain_dr": "v-model = two-way binding l form inputs.",
      "example": "<input v-model=\"username\" />",
      "q": "What does `<input v-model=\"username\" />` do when the user types?",
      "a": "It updates `username` in state on every keystroke, and if `username` changes programmatically the input updates too — binding works both ways."
    },
    {
      "text": "Props pass data from parent to child; child emits events back up with `$emit`.",
      "explain_dr": "Props mn parent l child; child kay-jawb b $emit l fo9.",
      "example": "props: [\"title\"],\nmethods: { close() { this.$emit(\"close\"); } }",
      "q": "In the example, how does the parent give data to the child, and how does the child tell the parent it closed?",
      "a": "The parent passes `title` down as a prop; the child calls `this.$emit(\"close\")` so the parent can listen with `@close`."
    },
    {
      "text": "Computed properties cache their result and only recompute when dependencies change.",
      "explain_dr": "computed kat-cachi resultat — kat-t3awd t7seb ghir melli dependencies ytbedlo.",
      "example": "computed: {\n  total() { return this.items.reduce((s, i) => s + i.price, 0); }\n}",
      "q": "If `total` is accessed three times without `items` changing, how many times does the reduce run?",
      "a": "Once — the computed property caches its result and only recomputes when `items` changes."
    },
    {
      "text": "Lifecycle hooks: `mounted()` runs after first render, `unmounted()` on teardown — good for cleanup.",
      "explain_dr": "mounted() melli render l-owel y-sali; unmounted() f teardown — mzyan l cleanup.",
      "example": "mounted() { this.timer = setInterval(this.tick, 1000); },\nunmounted() { clearInterval(this.timer); } // cleanup",
      "q": "In the example, why is `clearInterval` placed in `unmounted()` rather than `mounted()`?",
      "a": "Because `mounted()` starts the timer after first render, and `unmounted()` is the teardown hook — clearing there prevents the interval from running after the component is destroyed."
    },
    {
      "text": "Use `:key` with `v-for` lists so Vue can track items efficiently.",
      "explain_dr": ":key m3a v-for bach Vue y-tbe3 elements b fa3iliya.",
      "example": "<li v-for=\"u in users\" :key=\"u.id\">{{ u.name }}</li>",
      "q": "What does `:key=\"u.id\"` give Vue that the loop index couldn't?",
      "a": "A stable identity per user, so Vue can reorder or patch existing DOM nodes instead of recreating them when the list changes."
    },
    {
      "text": "Single File Components (`.vue`) combine template, script, and style in one file.",
      "explain_dr": ".vue file wa7da fiha template + script + style.",
      "example": "<template><p>{{ msg }}</p></template>\n<script>export default { data: () => ({ msg: \"Hi\" }) }</script>\n<style scoped>p { color: red }</style>",
      "q": "What are the three blocks in the example's `.vue` file, and what does `scoped` do to the style?",
      "a": "`template` (markup), `script` (logic), and `style` (CSS); `scoped` limits the CSS to this component so it doesn't leak to others."
    },
    {
      "text": "`ref()` requires `.value` in script but unwraps automatically in the template — forgetting `.value` is the #1 Composition API bug.",
      "explain_dr": "ref() khass .value f script walakin f template kat-tunwrap bo7dha — nsyan .value howa ghalta n°1.",
      "example": "const count = ref(0);\ncount.value++;     // required in script\n// {{ count }}     // auto-unwrapped in template",
      "q": "In the example, what happens if you write `count++` in the script instead of `count.value++`?",
      "a": "It tries to increment the ref object itself instead of the wrapped number — the displayed count never changes."
    },
    {
      "text": "`reactive()` only works on objects; destructuring it breaks reactivity — use `toRefs()` or stick with `ref()` for primitives.",
      "explain_dr": "reactive() ghir l objects; destructuring kat-heress reactivity — st3mel toRefs() wla ref().",
      "example": "const state = reactive({ a: 1, b: 2 });\nconst { a } = toRefs(state); // destructure without losing reactivity",
      "q": "Why does the example use `toRefs(state)` instead of plain destructuring `const { a } = state`?",
      "a": "Plain destructuring extracts raw values and breaks reactivity; `toRefs` converts each property to a ref that stays linked to the reactive object."
    },
    {
      "text": "A getter-only `computed()` is read-only; pass `{ get, set }` to make it writable (handy with `v-model`).",
      "explain_dr": "computed getter ghir read-only; 3tih { get, set } bach y-welli writable (mzyan m3a v-model).",
      "example": "const fullName = computed(() => first.value + \" \" + last.value);",
      "q": "The example's `fullName` is getter-only — what happens if a `v-model` tries to write to it?",
      "a": "The write is ignored (and Vue warns) — a read-only computed can't accept assignments; you'd need the `{ get, set }` form to make it writable."
    },
    {
      "text": "`watch()` is lazy (runs on change); `watchEffect()` runs immediately and tracks whatever it touches — great for quick syncs.",
      "explain_dr": "watch lazy (kat-khdem melli y-tbedel); watchEffect kat-khdem nichan w kat-tbe3 li mes-sat.",
      "example": "watch(count, v => console.log(\"changed:\", v)); // lazy — on change only\nwatchEffect(() => console.log(count.value));     // runs now",
      "q": "In the example, which watcher runs immediately at setup, and which only reacts to changes?",
      "a": "`watchEffect` runs immediately and tracks `count.value` automatically; `watch(count, ...)` is lazy and fires only when `count` changes."
    },
    {
      "text": "Use `watch` with `{ immediate: true }` when the handler must also run on setup.",
      "explain_dr": "watch m3a { immediate: true } bach handler y-khdem mn l-ewel.",
      "example": "watch(user, fetchProfile, { immediate: true });",
      "q": "Without `{ immediate: true }`, when would `fetchProfile` first run in the example?",
      "a": "Only after `user` changes post-setup — the handler would miss the initial value, which is why `immediate: true` is used to also run it on setup."
    },
    {
      "text": "Emits must be declared in `defineEmits()` in `<script setup>` — otherwise they fall through to the DOM as attributes.",
      "explain_dr": "Emits lazem y-tdeclara b defineEmits() f script setup — wla ghadi y-tihou 3la DOM b7al attributes.",
      "example": "const emit = defineEmits([\"save\"]);\nemit(\"save\", payload);",
      "q": "What goes wrong if you call `emit(\"save\", payload)` without declaring `defineEmits([\"save\"])` in `<script setup>`?",
      "a": "Vue doesn't recognize `save` as an emitted event, so it falls through onto the root element as a plain DOM attribute instead of reaching parent listeners."
    },
    {
      "text": "Non-prop attributes fall through to the root element automatically; disable with `inheritAttrs: false` and bind via `$attrs`.",
      "explain_dr": "Attributes li machi props kat-mshiw l root element bo7dhum; 7bess b inheritAttrs: false w st3mel $attrs.",
      "example": "export default { inheritAttrs: false }; // stops auto fallthrough\n// <div v-bind=\"$attrs\">...</div> — bind manually",
      "q": "In the example, what changes when `inheritAttrs: false` is set and the parent passes `class=\"x\"` without a matching prop?",
      "a": "The class no longer lands automatically on the root element — you must bind it yourself with `v-bind=\"$attrs\"` where you want it."
    },
    {
      "text": "`v-if` destroys and recreates the element; `v-show` only toggles CSS — prefer `v-show` for frequent toggles.",
      "explain_dr": "v-if kat-hedem w t-3awd t-bni element; v-show ghir kat-beddel CSS — v-show l toggles li kat-t3awd.",
      "example": "<p v-if=\"loggedIn\">Welcome</p> <!-- destroyed/recreated -->\n<p v-show=\"menuOpen\">Menu</p>     <!-- CSS toggle only -->",
      "q": "For a menu toggled open and closed 50 times a second, which should you use in the example's terms — and why?",
      "a": "`v-show` — it only toggles CSS `display`, while `v-if` would destroy and recreate the element 50 times a second."
    },
    {
      "text": "Never mix `v-if` and `v-for` on the same element — `v-if` has higher priority and can't see the loop variable.",
      "explain_dr": "Ma-t-khaletch v-if w v-for f nafs element — v-if 3endha priority w ma-kat-shofsh variable dyal loop.",
      "example": "<!-- wrong: <li v-for=\"t in todos\" v-if=\"t.done\"> -->\n<template v-for=\"t in todos\">\n  <li v-if=\"t.done\" :key=\"t.id\">{{ t.text }}</li>\n</template>",
      "q": "Why does `<li v-for=\"t in todos\" v-if=\"t.done\">` fail to filter the list?",
      "a": "`v-if` has higher priority than `v-for`, so it runs before the loop variable `t` exists and can't see it — the fix is wrapping in `<template v-for>` with `v-if` on the inner element."
    },
    {
      "text": "The `.lazy`, `.number`, and `.trim` modifiers tune `v-model` on inputs — `v-model.number` casts to a number.",
      "explain_dr": "Modifiers dyal v-model: .lazy, .number, .trim — v-model.number kat-7wel l number.",
      "example": "<input v-model.number=\"age\" />   <!-- cast to number -->\n<input v-model.trim=\"name\" />     <!-- strip whitespace -->\n<input v-model.lazy=\"search\" />   <!-- sync on change, not input -->",
      "q": "In the example, if the user types `\" 42 \"` into the age input, what value does `age` get — and what does `name` get from `\" Aymane \"`?",
      "a": "`age` becomes the number `42` (`.number` casts and trims); `name` becomes `\"Aymane\"` (`.trim` strips surrounding whitespace)."
    },
    {
      "text": "`provide()`/`inject()` shares state across deep component trees without prop drilling — prefer a store (Pinia) at scale.",
      "explain_dr": "provide/inject kat-partagi state bin components b3ad bla prop drilling — f scale kbir, Pinia 7ssen.",
      "example": "provide(\"theme\", \"dark\");      // ancestor\nconst theme = inject(\"theme\");   // deep descendant, no prop drilling",
      "q": "In the example, how does the deep descendant get `\"dark\"` without the intermediate components knowing about it?",
      "a": "The ancestor calls `provide(\"theme\", \"dark\")` and the descendant calls `inject(\"theme\")` — intermediate components need no props at all."
    },
    {
      "text": "In `<script setup>`, top-level bindings are automatically exposed to the template — no `return` needed.",
      "explain_dr": "f script setup, kolchi li declariti l fo9 kay-ban l template bo7do — bla return.",
      "example": "<script setup>\nconst msg = \"Hi\"; // exposed to the template — no return needed\n</script>",
      "q": "In the example, why is there no `return { msg }` at the end of `<script setup>`?",
      "a": "Because `<script setup>` automatically exposes all top-level bindings to the template — an explicit return is unnecessary."
    },
    {
      "text": "Define props with `defineProps()` + TypeScript: `defineProps<{ msg: string }>()` — types are checked at compile time.",
      "explain_dr": "defineProps<{ msg: string }>() = props m3a TypeScript, types kat-tchecka f compilation.",
      "example": "defineProps<{ msg: string }>(); // props type-checked at compile time",
      "q": "If a parent passes `<Child msg={42} />` against the example's `defineProps<{ msg: string }>()`, when is the mistake caught?",
      "a": "At compile time — the generic type annotation lets the type checker flag the number where a string is expected before anything runs."
    },
    {
      "text": "Slots pass template content into a child: default, named (`<template #header>`), and scoped slots (`<slot :item>`).",
      "explain_dr": "Slots: content mn parent l dakhel child — default, named (#header), w scoped (<slot :item>).",
      "example": "<Modal><template #header>Title</template>Body text</Modal>\n<!-- child: <slot name=\"header\" /> then <slot /> for default -->",
      "q": "In the example, where does \"Title\" render and where does \"Body text\" render inside the Modal?",
      "a": "\"Title\" renders at the child's `<slot name=\"header\" />` outlet; \"Body text\" renders at the default `<slot />` outlet."
    },
    {
      "text": "Composition API lifecycle: `onMounted()`, `onUnmounted()` — and `onBeforeUnmount()` runs just before teardown for final cleanup.",
      "explain_dr": "Composition lifecycle: onMounted(), onUnmounted() — w onBeforeUnmount() 9bel teardown l cleanup l-akhir.",
      "example": "onMounted(() => start());\nonBeforeUnmount(() => cleanup()); // just before teardown\nonUnmounted(() => teardown());",
      "q": "In the example's order, when does `onBeforeUnmount` run relative to `onUnmounted`?",
      "a": "`onBeforeUnmount` runs just before teardown (while the component is still alive), then `onUnmounted` runs after it is fully removed."
    }
  ],
  "Html": [
    {
      "text": "HTML is the markup language that structures web page content.",
      "explain_dr": "HTML ghir howa l'ossature dyal la page, CSS howa li kayzid la decoration.",
      "example": "<h1>My Page</h1>\n<p>HTML structures the content of the page.</p>",
      "q": "What is HTML used for?",
      "a": "HTML is the markup language that structures web page content, e.g. headings and paragraphs."
    },
    {
      "text": "Semantic tags like `<header>`, `<main>`, `<nav>`, `<article>`, and `<footer>` describe meaning, not just layout.",
      "explain_dr": "Semantic tags kaygolo l Google w screen readers chno kay3ni had l'element, machi ghir div khawi.",
      "example": "<header>Site name</header>\n<main>\n  <article>Post text</article>\n</main>\n<footer>© 2026</footer>",
      "q": "In the example, which tags are semantic, and what would change if you replaced them all with <div>s?",
      "a": "header, main, article, and footer are semantic; replacing them with divs removes the meaning that helps screen readers and SEO, while the layout stays the same."
    },
    {
      "text": "Every page should have exactly one `<h1>`; headings must follow a logical hierarchy.",
      "explain_dr": "h1 wahda f page, b7al l3onwan lkbir dyal ktab, w headings li moraha mrettbin.",
      "example": "<h1>Complete Guide</h1>\n<h2>Installation</h2>\n<h3>On Linux</h3>",
      "q": "What is wrong with a page that has three <h1> tags, and how does the example do it correctly?",
      "a": "A page should have exactly one h1 followed by a logical h2/h3 hierarchy; multiple h1s confuse screen readers and search engines. The example uses one h1 with a nested h2 then h3."
    },
    {
      "text": "`<img>` needs an `alt` attribute for accessibility and for when the image fails to load.",
      "explain_dr": "alt howa description dyal tsowira, kayban ila tsowira ma loadatch w screen readers kay9rawh.",
      "example": "<img src=\"photo.jpg\" alt=\"Sunset over the bay\">",
      "q": "Why does the example's <img> include an alt attribute, and when would it matter?",
      "a": "The alt text describes the image for screen readers and displays if the image fails to load; both accessibility and the fallback depend on it."
    },
    {
      "text": "Forms: `<input>` types like `email`, `password`, and `number` give built-in validation.",
      "explain_dr": "type=email kaychecki wach l'email s7i7 bo7do, ma t7tajch JavaScript.",
      "example": "<input type=\"email\" required>\n<input type=\"number\" min=\"1\" max=\"10\">",
      "q": "A user types \"abc\" into <input type=\"email\" required> — what happens on submit?",
      "a": "Built-in validation blocks the submit and the browser shows an error, because \"abc\" is not a valid email address."
    },
    {
      "text": "The `label` element linked via `for`/`id` makes form fields clickable and screen-reader friendly.",
      "explain_dr": "label ila kan mrabit m3a input, click 3la label kaydir focus f input — pratique w accessible.",
      "example": "<label for=\"email\">Email</label>\n<input id=\"email\" type=\"email\">",
      "q": "What breaks if you remove the for/id link between the label and the input in the example?",
      "a": "Clicking the label no longer focuses the input, and screen readers may not associate the label with the field, hurting accessibility."
    },
    {
      "text": "Void elements like `<img>`, `<br>`, and `<input>` have no closing tag.",
      "explain_dr": "Void elements b7al img w br ma 3ndhomch closing tag, kaytseddo bo7dhom.",
      "example": "<img src=\"a.png\" alt=\"\">\n<br>\n<input type=\"text\">",
      "q": "Which elements in the example must NOT have a closing tag, and what happens if you add one?",
      "a": "img, br, and input are void elements; adding a closing tag is invalid HTML — browsers ignore it and it can create unexpected DOM nodes."
    },
    {
      "text": "The `<!DOCTYPE html>` declaration puts the browser in standards mode.",
      "explain_dr": "DOCTYPE kaygol l browser: khdem b standards jdad, machi b l9dam.",
      "example": "<!DOCTYPE html>\n<html>\n  <!-- standards mode on -->\n</html>",
      "q": "What happens if you remove the <!DOCTYPE html> line from a page?",
      "a": "The browser switches to quirks mode, where old non-standard rendering rules apply and layouts can break; the doctype keeps it in standards mode."
    },
    {
      "text": "`data-*` attributes store custom data on elements, readable via `element.dataset`.",
      "explain_dr": "data-* b7al jib sghir kat7et fih info khassa b element w kat9raha b dataset.",
      "example": "<button data-user-id=\"42\">Edit</button>\nel.dataset.userId; // \"42\"",
      "q": "What is the value of el.dataset.userId in the example, and how is the attribute written in the markup?",
      "a": "It is the string \"42\"; the markup attribute is written as data-user-id=\"42\" (the hyphenated attribute maps to camelCase in dataset)."
    },
    {
      "text": "Inline elements (`<span>`, `<a>`) flow with text; block elements (`<div>`, `<p>`) start on a new line.",
      "explain_dr": "span w a kaymchiw m3a text f nafs satr, div w p kaybdaw satr jdid.",
      "example": "<p>Text <span>flows inline</span> with the words.</p>\n<div>Starts on a new line.</div>",
      "q": "In the example, why does the <span> stay on the same line while the <div> starts on a new line?",
      "a": "span is an inline element that flows with the surrounding text; div is a block element that always starts on a new line."
    },
    {
      "text": "A `<button>` inside a form defaults to `type=\"submit\"` — always set `type=\"button\"` on JS-only buttons.",
      "explain_dr": "button f form ila ma 3titihch type, kaytssarraf b7al submit — hadi akber ghalta katnssa.",
      "example": "<form>\n  <button type=\"submit\">Save</button>\n  <button type=\"button\">Cancel</button>\n</form>",
      "q": "In the example form, which button submits the form, and why must the other one say type=\"button\"?",
      "a": "The \"Save\" button submits the form (a button inside a form defaults to type=submit); the \"Cancel\" button needs type=\"button\" so clicking it does not accidentally submit the form."
    },
    {
      "text": "An `<input>` without a `name` attribute is silently skipped when the form submits.",
      "explain_dr": "ila input ma 3ndoch name, lform kaytajhlo ghir kima ma kaynch.",
      "example": "<!-- no name => field is skipped on submit -->\n<input type=\"text\" name=\"city\">",
      "q": "You add a second <input> to the example form but forget its name attribute — what does the server receive?",
      "a": "The server never sees that field: inputs without a name are silently skipped when the form submits."
    },
    {
      "text": "ARIA roles add no behavior: `role=\"button\"` still needs keyboard handling and `tabindex` to be usable.",
      "explain_dr": "role=button ghir smiya, ma kayzidch lkhadma dyal button — khassk tzid keyboard w tabindex.",
      "example": "<div role=\"button\" tabindex=\"0\">Open</div>\n<!-- still needs a keydown handler! -->",
      "q": "The example's <div role=\"button\" tabindex=\"0\"> is clickable — what two things does it still lack?",
      "a": "A keyboard (keydown) handler so Enter/Space activate it; tabindex=\"0\" only makes it focusable — ARIA roles add semantics but no behavior."
    },
    {
      "text": "`defer` scripts run in order after parsing; `async` scripts run the moment they download, in no guaranteed order.",
      "explain_dr": "defer kaystna parsing w kaykhdem b tartib, async kaykhdem mli ytelechargea bla tartib — far9 mohim f interviews.",
      "example": "<script src=\"app.js\" defer></script>\n<script src=\"ads.js\" async></script>",
      "q": "In the example, which script can safely manipulate the DOM on load, and why?",
      "a": "app.js with defer — deferred scripts run after the document is parsed, in order; the async ads script may run before parsing finishes and has no guaranteed order."
    },
    {
      "text": "The viewport meta tag `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">` is required for responsive layouts on mobile.",
      "explain_dr": "viewport meta tag howa li kaykhali site yban mzyan f telephone, bla bih kolchi yban sghir.",
      "example": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
      "q": "What would a mobile user see on a site that omits the viewport meta tag in the example?",
      "a": "The page renders zoomed out at a desktop width (typically 980px), forcing the user to pinch-zoom; the tag makes the layout match the device width."
    },
    {
      "text": "`<details>` and `<summary>` give you a native accordion with zero JavaScript.",
      "explain_dr": "details/summary b7al accordion jahz, ma kay7tajch JavaScript.",
      "example": "<details>\n  <summary>How does shipping work?</summary>\n  <p>Answer goes here.</p>\n</details>",
      "q": "What does the example achieve without any JavaScript, and which element is the clickable one?",
      "a": "A native collapsible accordion: <summary> is the clickable heading, and clicking it toggles the visibility of the rest of the <details> content."
    },
    {
      "text": "Put `lang` on the `<html>` tag — screen readers use it to pick the right pronunciation, and it helps SEO.",
      "explain_dr": "lang f html kaygol l screen reader b ina logha y9ra, w kay3awn SEO.",
      "example": "<html lang=\"fr\">\n  <!-- screen readers + SEO know the language -->\n</html>",
      "q": "Why is <html lang=\"fr\"> used in the example instead of setting lang on individual paragraphs?",
      "a": "Setting lang once on html tells screen readers the correct pronunciation for the whole page and helps search engines; per-paragraph lang is only needed for mixed-language content."
    },
    {
      "text": "Native validation comes free with `required`, `minlength`, and `pattern`; call `form.reportValidity()` to trigger it from JS.",
      "explain_dr": "required w pattern kayvalidiw bo7dhom, w reportValidity katkhlik tdeclencheha men JS.",
      "example": "<input required minlength=\"3\" pattern=\"[A-Za-z]+\">\nform.reportValidity(); // trigger native validation",
      "q": "The example input requires minlength=\"3\" — the user types \"ab\" and your JS calls form.reportValidity(). What happens?",
      "a": "reportValidity() triggers the browser's native validation UI, which blocks the submit and shows an error because \"ab\" is shorter than 3 characters."
    },
    {
      "text": "Content inside `<template>` is inert until cloned — perfect for markup your JS renders repeatedly.",
      "explain_dr": "template b7al moule: content dyalo na3s 7ta tclonih b JavaScript.",
      "example": "<template id=\"card\">\n  <div class=\"card\"></div>\n</template>\ncard.content.cloneNode(true); // inert until cloned",
      "q": "Why is nothing from the <template> in the example visible on the page, and how do you display it?",
      "a": "Template content is inert — not rendered — until you clone it (card.content.cloneNode(true)) and insert the clone into the DOM."
    },
    {
      "text": "Custom elements must contain a hyphen (`<my-card>`); registering `<mycard>` throws an error.",
      "explain_dr": "custom element khasso hyphen (my-card), bla hyphen l browser kayrfdo.",
      "example": "<!-- hyphen is mandatory -->\n<my-card></my-card>\ncustomElements.define(\"my-card\", MyCard);",
      "q": "What error do you get from customElements.define(\"mycard\", MyCard), and how does the example fix it?",
      "a": "It throws a DOMException because custom element names must contain a hyphen; the example uses the hyphenated name my-card."
    },
    {
      "text": "`loading=\"lazy\"` defers offscreen images and `decoding=\"async\"` keeps image decoding off the main thread.",
      "explain_dr": "loading=lazy kaykhali tsawer li lte7t ma yloadiwch 7ta tqrab lihom — site kaytzad f sor3a.",
      "example": "<img src=\"hero.jpg\" alt=\"Hero\" loading=\"lazy\" decoding=\"async\">",
      "q": "In the example, when is hero.jpg downloaded, and what does decoding=\"async\" add?",
      "a": "The browser downloads it only when it nears the viewport (lazy); decoding=\"async\" decodes the image off the main thread so scrolling stays smooth."
    },
    {
      "text": "`id` values must be unique per page — duplicates break `getElementById`, labels, and ARIA references.",
      "explain_dr": "id khasso ykon unique f page kamla, ila t3awd getElementById kayjib ghir lwel.",
      "example": "<!-- ids must be unique: only one id=\"email\" per page -->\ndocument.getElementById(\"email\");",
      "q": "Two inputs on the page both have id=\"email\" — what is wrong with document.getElementById(\"email\") now?",
      "a": "ids must be unique per page; getElementById returns only the first match, so labels and scripts may target the wrong element."
    },
    {
      "text": "The `hidden` attribute loses to any author `display` rule, because it works through the UA stylesheet's `display: none`.",
      "explain_dr": "hidden kaytghleb b ay display rule dyalk, hit howa ghir display:none men browser.",
      "example": "/* author display beats hidden, so re-assert it */\n[hidden] { display: none !important; }",
      "q": "An element has hidden but your CSS says div { display: flex; } — is it visible? Why?",
      "a": "Yes, it is visible: hidden works via the UA stylesheet's display: none, which any author display rule overrides; the example fixes it with [hidden] { display: none !important; }."
    },
    {
      "text": "Group related form controls with `<fieldset>` and `<legend>` so screen readers announce them as one unit.",
      "explain_dr": "fieldset w legend kayjm3o inputs li 3ndhom 3ala9a, screen reader kay9rahom b7al group wahda.",
      "example": "<fieldset>\n  <legend>Shipping address</legend>\n  <input name=\"city\">\n</fieldset>",
      "q": "What do <fieldset> and <legend> give screen-reader users that plain <div> wrappers do not?",
      "a": "They group related controls so the screen reader announces them as one unit, with the legend as the group's name."
    },
    {
      "text": "Positive `tabindex` values create fragile tab orders — stick to `tabindex=\"0\"` (focusable) or `-1` (JS-focusable only).",
      "explain_dr": "tabindex positive kaykherbe9 tartib dyal Tab — ghir 0 w -1 li khassk.",
      "example": "<div tabindex=\"0\">Focusable</div>\n<div tabindex=\"-1\">Focusable only via JS</div>",
      "q": "Why is tabindex=\"5\" on one button and tabindex=\"1\" on another considered fragile?",
      "a": "Positive tabindex values override the natural DOM order and break whenever the layout changes; use tabindex=\"0\" for normal tab order or -1 for JS-only focus."
    }
  ],
  "Css": [
    {
      "text": "CSS styles HTML elements with selectors: element, `.class`, `#id`, and `[attribute]` selectors.",
      "explain_dr": "CSS ghir howa lmaquillage dyal HTML, selectors kaygolo l browser chkon ghadi ytziyan.",
      "example": "p { color: red; }\n.btn { padding: 8px; }\n#nav { height: 60px; }\n[type=\"email\"] { border: 1px solid gray; }",
      "q": "The example has four selectors — which one targets <input type=\"email\">, and what does each select?",
      "a": "The [type=\"email\"] attribute selector; p selects all paragraphs, .btn all elements with that class, #nav the element with id nav."
    },
    {
      "text": "Specificity order: inline styles > `#id` > `.class` > element — later rules win on ties.",
      "explain_dr": "specificity b7al wazn: id t9il 3la class, w class t9ila 3la element.",
      "example": "/* inline > #id > .class > element; later wins ties */\n#nav .link { color: red; }\n.link { color: blue; } /* loses */",
      "q": "Both rules match a link inside #nav: #nav .link { color: red } and .link { color: blue }. Which wins and why?",
      "a": "red wins: #nav .link combines an id and a class, which is more specific than the single class .link; specificity outranks source order."
    },
    {
      "text": "The box model is content + padding + border + margin; `box-sizing: border-box` makes sizing predictable.",
      "explain_dr": "box-sizing border-box kaykhali padding w border dakhl l width, bla bih l7sabat katkhroj ghalta.",
      "example": "* { box-sizing: border-box; }\n/* width now includes padding + border */",
      "q": "An element has width: 200px, padding: 20px, border: 2px — how wide is it with and without box-sizing: border-box?",
      "a": "With border-box it is 200px wide (padding and border included); without it (content-box, the default) it is 244px wide — 200 + 2x20 + 2x2."
    },
    {
      "text": "Flexbox (`display: flex`) lays out items in one dimension; CSS Grid handles two dimensions.",
      "explain_dr": "flex l satr wa7ed (menu), grid l jouj dimensions (layout kaml).",
      "example": ".row { display: flex; }\n.grid { display: grid; grid-template-columns: 1fr 1fr; }",
      "q": "When would you choose display: grid over display: flex in the example's terms?",
      "a": "Use grid for two-dimensional layouts (rows and columns, like the 2-column card grid); use flex for one-dimensional layouts (a row or a column of items)."
    },
    {
      "text": "Use `margin` for space between elements and `padding` for space inside an element.",
      "explain_dr": "margin howa lmasafa bin jiran, padding howa lmasafa ldakhl dyal dar.",
      "example": ".card { margin: 16px; }  /* space BETWEEN cards */\n.card { padding: 16px; } /* space INSIDE the card */",
      "q": "Two cards need 16px of space between them, and text inside each card needs 16px from the edge — which property for each?",
      "a": "margin: 16px on the cards for space between them; padding: 16px inside each card for space between the content and the card edge."
    },
    {
      "text": "Media queries (`@media (max-width: 768px)`) make layouts responsive.",
      "explain_dr": "media queries kaybdlo design 3la 7sab l3ard dyal l'ecran — responsive design.",
      "example": "@media (max-width: 768px) {\n  .grid { grid-template-columns: 1fr; }\n}",
      "q": "The example grid is 2 columns; on a 500px-wide phone, how many columns does it show and why?",
      "a": "One column: the @media (max-width: 768px) rule overrides the grid to a single column below 768px."
    },
    {
      "text": "Pseudo-classes like `:hover`, `:focus`, and `:nth-child()` style elements in specific states.",
      "explain_dr": "hover w focus w nth-child kaykhaliwk tstili l'element ghir f 7ala mo3ayana.",
      "example": "a:hover { color: red; }\ninput:focus { outline: 2px solid blue; }\nli:nth-child(odd) { background: #eee; }",
      "q": "In the example, when does li:nth-child(odd) apply, and what happens on hover of a link?",
      "a": "nth-child(odd) styles every odd-positioned list item (1st, 3rd, 5th...); the link turns red only while the pointer is over it (:hover)."
    },
    {
      "text": "CSS variables (`--brand: blue;`) declared once can be reused via `var(--brand)`.",
      "explain_dr": "CSS variables b7al 3elba kat7et fiha lon w katst3mlo f blast bzf.",
      "example": ":root { --brand: blue; }\n.btn { background: var(--brand); }",
      "q": "You change --brand: blue to --brand: red in the example — how many rules must you edit?",
      "a": "Just one: the variable is declared once in :root, so every var(--brand) usage updates automatically."
    },
    {
      "text": "Prefer `rem` units for scalable sizing; `1rem` equals the root font size (usually 16px).",
      "explain_dr": "rem kaykber w ysghar m3a font-size dyal root — mzyan l accessibility.",
      "example": "html { font-size: 16px; }\nh1 { font-size: 2rem; } /* = 32px, scales with root */",
      "q": "The root font size is 16px and a user zooms so it becomes 20px — what is 2rem on the h1 now, and why is rem better than px here?",
      "a": "40px: 2rem always equals twice the root font size, so it scales with the user's zoom — fixed px would not."
    },
    {
      "text": "`z-index` only works on positioned elements (`relative`, `absolute`, `fixed`, or `sticky`).",
      "explain_dr": "z-index ma kaykhdemch ila l'element ma 3ndoch position (relative, absolute...).",
      "example": ".modal { position: fixed; z-index: 100; }\n/* z-index needs a position */",
      "q": "Your modal has z-index: 100 but appears under another element — what is the likely cause, per the example?",
      "a": "The modal is probably not positioned: z-index only works on positioned elements (relative, absolute, fixed, sticky); a static element's z-index is ignored."
    },
    {
      "text": "Adjacent vertical margins collapse to the larger one, not the sum — `margin-bottom: 20px` meeting `margin-top: 30px` leaves a 30px gap.",
      "explain_dr": "margins l3amoudiya ma katjma3ch, katakhdo ghir lkbira — hadi ghalta dyal bzf dyal nas.",
      "example": "/* 20px margin meets 30px margin -> 30px gap, not 50px */\nh1 { margin-bottom: 20px; }\np { margin-top: 30px; }",
      "q": "The h1 has margin-bottom: 20px and the paragraph margin-top: 30px — how large is the actual gap, and why?",
      "a": "30px, not 50px: adjacent vertical margins collapse into a single gap equal to the larger of the two."
    },
    {
      "text": "`position: absolute` anchors to the nearest positioned ancestor — forget `position: relative` on the parent and it jumps up the tree.",
      "explain_dr": "absolute kaytlasa9 f a9rab parent 3ndo position, ila nssiti relative l parent ghadi yherb lb3id.",
      "example": ".parent { position: relative; }\n.child { position: absolute; top: 0; right: 0; }",
      "q": "The child is position: absolute; top: 0; right: 0 but lands in the page's top-right corner instead of the parent's — what did you forget?",
      "a": "position: relative on the parent: absolute elements anchor to the nearest positioned ancestor, and without one they jump up to the viewport."
    },
    {
      "text": "`flex: 1` is shorthand for `flex: 1 1 0%`; the zero basis is the classic reason flex items shrink to nothing.",
      "explain_dr": "flex:1 kay3ni basis 0%, 3lach flex items kayt9albo 7ta kaywliw sghar bzf.",
      "example": ".item { flex: 1; } /* = flex: 1 1 0%; zero basis */",
      "q": "Your flex items collapse to nothing even though each has flex: 1 — what does the shorthand expand to, and why does this happen?",
      "a": "flex: 1 expands to 1 1 0% — the zero flex-basis means items start from zero width, so content with no intrinsic width shrinks to nothing; the basis is the cause."
    },
    {
      "text": "`grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` builds a responsive grid with zero media queries.",
      "explain_dr": "auto-fit m3a minmax kaydir grid responsive bo7do bla media queries.",
      "example": ".grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}",
      "q": "What does repeat(auto-fit, minmax(200px, 1fr)) do when the container is 650px wide?",
      "a": "It fits as many columns as possible (here three 200px+ columns, stretched to fill) and wraps automatically as the container shrinks — no media queries needed."
    },
    {
      "text": "`display: flow-root` (or `overflow: hidden`) on a parent contains floated children and stops margin collapse.",
      "explain_dr": "flow-root kaykhali parent y7tad l floats dyal wladha w y7bes margin collapse.",
      "example": ".parent { display: flow-root; } /* contains floats, stops margin collapse */",
      "q": "A parent with floated children collapses to zero height — how does the example's display: flow-root fix it?",
      "a": "flow-root creates a new block formatting context, which makes the parent contain its floated children (and also stops child margins from collapsing through it)."
    },
    {
      "text": "An author `!important` declaration beats a normal inline `style=\"\"` attribute — inline styles are not untouchable.",
      "explain_dr": "!important dyal CSS katghleb inline style l3adi — inline machi dima rab7a.",
      "example": ".a { color: red !important; } /* beats style=\"color: blue\" */",
      "q": "An element has style=\"color: blue\" but renders red, matching the example's rule — how is that possible?",
      "a": "An author !important rule (.a { color: red !important }) beats a normal inline style; inline styles only win when both are non-important."
    },
    {
      "text": "Cascade layers (`@layer base, components;`) decide winners before specificity: later layers win, and unlayered styles beat all layered ones.",
      "explain_dr": "layers kay7kmo 9bel specificity: layer li jaya mor katrbe7 dima.",
      "example": "@layer base, components;\n@layer components { .btn { padding: 8px; } } /* wins over base */",
      "q": "You have an unlayered .btn { padding: 4px } and @layer components { .btn { padding: 8px } } — which wins?",
      "a": "The unlayered rule wins: unlayered styles beat all layered styles, and layers are decided before specificity. (Within layers, later-declared layers win.)"
    },
    {
      "text": "On mobile, `100vh` includes the browser chrome that resizes — use `100dvh` (dynamic viewport height) for full-screen layouts.",
      "explain_dr": "f telephone 100vh kaytbedel m3a address bar, 100dvh howa s7i7 l fullscreen.",
      "example": ".hero { height: 100dvh; } /* dynamic viewport, mobile-safe */",
      "q": "Your hero uses 100vh and jumps when the mobile address bar hides — what does the example recommend instead, and why?",
      "a": "100dvh: it tracks the dynamic viewport height, excluding browser chrome, so it does not resize when the address bar shows or hides."
    },
    {
      "text": "You can't transition `display: none`; animate `opacity` + `visibility`, or the `grid-template-rows: 0fr → 1fr` trick.",
      "explain_dr": "ma ymknch tdir transition 3la display:none — khdem b opacity w visibility.",
      "example": ".menu { opacity: 0; visibility: hidden; transition: .3s; }\n.menu.open { opacity: 1; visibility: visible; }",
      "q": "You want a menu to fade in on open — why can't you just transition display: none to display: block?",
      "a": "display is not animatable (it is discrete) and display: none removes the element entirely; instead animate opacity + visibility, or use the grid-template-rows 0fr to 1fr trick."
    },
    {
      "text": "`:where()` has zero specificity (great for resets); `:is()` takes the specificity of its most specific argument.",
      "explain_dr": ":where() specificity dyalo zero, :is() kayakhod specificity dyal a9wa argument.",
      "example": ":where(.a, #id) { } /* zero specificity */\n:is(.a, #id) { }    /* takes #id specificity */",
      "q": ":where(.a, #id) and :is(.a, #id) match the same element — why might a later simple rule beat one but not the other?",
      "a": ":where() always has zero specificity, so any later normal rule overrides it; :is() takes the specificity of its most specific argument (#id here), which is hard to override."
    },
    {
      "text": "`::before` and `::after` need `content: \"\"` to render anything, and they are inline by default.",
      "explain_dr": "before w after ma kaybanowch bla content, w homa inline par defaut.",
      "example": ".tip::before { content: \"\"; display: inline-block; width: 8px; }",
      "q": "Your .tip::before adds nothing visible — what is the most likely missing declaration in the example's terms?",
      "a": "content: \"\" — ::before and ::after do not render at all without a content declaration."
    },
    {
      "text": "`object-fit: cover` crops an image to fill its box without distortion — pair it with a fixed aspect-ratio container.",
      "explain_dr": "object-fit cover kay9os tsowira bach t3mer la boite bla ma tt3awaj.",
      "example": ".thumb { width: 200px; height: 200px; object-fit: cover; }",
      "q": "A 200x200 thumbnail shows a stretched image — what does adding object-fit: cover change?",
      "a": "The image is cropped, not stretched, to fill the square box while keeping its aspect ratio; pair it with the fixed-size container."
    },
    {
      "text": "`clamp(1rem, 2vw + 1rem, 2rem)` gives fluid typography with no media queries: a minimum, a preferred, and a maximum.",
      "explain_dr": "clamp kay3tik font-size kaykber w ysghar m3a l'ecran bla media queries.",
      "example": "h1 { font-size: clamp(1rem, 2vw + 1rem, 2rem); }",
      "q": "In clamp(1rem, 2vw + 1rem, 2rem), what size is the h1 on a very wide screen, and what are the three arguments?",
      "a": "2rem (the maximum): the three arguments are minimum, preferred, and maximum — the size stays fluid via 2vw+1rem but never exceeds the bounds."
    },
    {
      "text": "`position: sticky` needs a `top` (or `bottom`) value and fails silently inside an ancestor with `overflow: hidden`.",
      "explain_dr": "sticky khasso top w kaymout b sokt ila parent 3ndo overflow hidden.",
      "example": ".bar { position: sticky; top: 0; }\n/* breaks silently inside overflow: hidden */",
      "q": "Your sticky header never sticks — what two things does the example say to check?",
      "a": "That it has a threshold value like top: 0 (sticky needs one to know when to stick), and that no ancestor has overflow: hidden, which breaks sticky silently."
    },
    {
      "text": "Wrap animations in `@media (prefers-reduced-motion: reduce)` to disable motion for users who request it — an accessibility must.",
      "explain_dr": "prefers-reduced-motion kay7tarm nas li ma kaybghiwch animations — accessibility mohima.",
      "example": "@media (prefers-reduced-motion: reduce) {\n  * { animation: none; transition: none; }\n}",
      "q": "A user has \"Reduce motion\" enabled in their OS — what should your CSS do, per the example?",
      "a": "Disable or minimize animations inside @media (prefers-reduced-motion: reduce) — the example sets animation and transition to none — an accessibility requirement."
    }
  ],
  "Tailwind": [
    {
      "text": "Tailwind is a utility-first CSS framework: you style with classes like `flex`, `p-4`, `text-center` directly in markup.",
      "explain_dr": "Tailwind b7al sandou9 dyal classes jahzin, katkteb flex w p-4 nichan f HTML.",
      "example": "<div class=\"flex p-4 text-center\">Hello</div>",
      "q": "What does class=\"flex p-4 text-center\" in the example replace?",
      "a": "Custom CSS rules: flex replaces display: flex, p-4 replaces a padding rule, text-center replaces text-align — styling is done directly in the markup."
    },
    {
      "text": "No custom CSS is needed for most layouts — the utility classes cover spacing, colors, typography, and more.",
      "explain_dr": "a8lab layouts ma kay7tajoch CSS khass, classes kaykfiw.",
      "example": "<button class=\"rounded px-4 py-2 bg-blue-600 text-white\">Save</button>\n<!-- zero custom CSS -->",
      "q": "The example button looks styled but \"zero custom CSS\" — where do its styles actually come from?",
      "a": "From Tailwind's pre-built utility classes (rounded, px-4, bg-blue-600, text-white), which compile to CSS automatically."
    },
    {
      "text": "Responsive design uses breakpoint prefixes: `md:flex`, `lg:grid-cols-3`, `sm:text-lg`.",
      "explain_dr": "md: w lg: kaybdlo design 3la 7sab l'ecran — responsive b classes.",
      "example": "<div class=\"grid gap-4 sm:grid-cols-2 lg:grid-cols-3\">Cards</div>",
      "q": "The example grid shows 1 column on mobile, 2 on sm, 3 on lg — which classes do this, and what is the mobile default?",
      "a": "grid gap-4 sm:grid-cols-2 lg:grid-cols-3: the unprefixed grid is the mobile default (single column), and sm:/lg: prefixes apply at those breakpoints and up."
    },
    {
      "text": "State variants style interactions: `hover:bg-blue-600`, `focus:ring-2`, `disabled:opacity-50`.",
      "explain_dr": "hover: w focus: kaystiliw l'element mli kat7et mouse wla katclicki 3lih.",
      "example": "<button class=\"hover:bg-blue-600 focus:ring-2 disabled:opacity-50\">Submit</button>",
      "q": "What three states does the example button style, and when does disabled:opacity-50 apply?",
      "a": "hover, focus, and disabled; disabled:opacity-50 applies only when the button is disabled."
    },
    {
      "text": "Dark mode can be class-based: `dark:bg-gray-900` applies when the `dark` class is on a parent.",
      "explain_dr": "dark: kaytbedel design mli dark mode khdam.",
      "example": "<div class=\"bg-white dark:bg-gray-900\">\n  <!-- dark: applies when .dark is on a parent -->\n</div>",
      "q": "When does dark:bg-gray-900 apply in the example, and how do you switch it?",
      "a": "When an ancestor (usually <html>) has the dark class — with class-based dark mode configured, toggling that class switches the theme."
    },
    {
      "text": "Colors follow a scale: `bg-red-500` is lighter than `bg-red-700`; `50` is near-white, `950` near-black.",
      "explain_dr": "l2ar9am dyal colors: sghir = fate7, kbir = ghame9 (50 byed, 950 k7el).",
      "example": "<div class=\"bg-red-500\">Lighter</div>\n<div class=\"bg-red-700\">Darker</div>\n<!-- 50 near-white ... 950 near-black -->",
      "q": "Which is darker, bg-red-500 or bg-red-700, and where do 50 and 950 sit on the scale?",
      "a": "bg-red-700 is darker; 50 is near-white and 950 near-black — higher numbers mean darker shades."
    },
    {
      "text": "Spacing is based on a `0.25rem` scale: `p-4` means `1rem` of padding, `m-2` means `0.5rem` of margin.",
      "explain_dr": "p-4 kay3ni 1rem, m-2 kay3ni 0.5rem — kol wa7ed = 0.25rem.",
      "example": "<div class=\"p-4 m-2\">\n  <!-- p-4 = 1rem, m-2 = 0.5rem (0.25rem scale) -->\n</div>",
      "q": "What are the computed values of p-4 and m-2 in the example?",
      "a": "p-4 = 1rem of padding and m-2 = 0.5rem of margin, from the 0.25rem scale (4x0.25 = 1, 2x0.25 = 0.5)."
    },
    {
      "text": "Custom design tokens go in `tailwind.config.js` under `theme.extend` — colors, fonts, spacing.",
      "explain_dr": "theme.extend f config howa fin katzid colors w fonts dyalk.",
      "example": "// tailwind.config.js\ntheme: { extend: { colors: { brand: \"#123\" } } }",
      "q": "Where do you add a brand color like #123 in Tailwind v3, and what utility does the example generate?",
      "a": "In tailwind.config.js under theme.extend.colors; the example defines brand: \"#123\", usable as bg-brand, text-brand, etc."
    },
    {
      "text": "Use `@apply` in CSS to compose utilities into reusable component classes.",
      "explain_dr": "@apply kayjme3 classes f class wa7da kat3awd tsta3mloha.",
      "example": ".btn {\n  @apply rounded px-4 py-2 bg-blue-600 text-white;\n}",
      "q": "What does the .btn rule in the example's CSS produce, and where can it be used?",
      "a": "A reusable .btn class that inlines the compiled CSS of rounded, px-4, py-2, bg-blue-600, text-white — usable on any element instead of repeating the utilities."
    },
    {
      "text": "Avoid extremely long class lists by extracting repeated patterns into components or `@apply` classes.",
      "explain_dr": "ila classes twalo bzf, jme3hom f component wla @apply — code an9a.",
      "example": "// Button.jsx - extract the repeated pattern\nfunction Btn({ children }) {\n  return <button className=\"rounded px-4 py-2 bg-blue-600 text-white\">{children}</button>;\n}",
      "q": "The same long class string appears on 20 buttons — what two extraction options does the example show?",
      "a": "Extract it into a component (the Button.jsx example) or into an @apply component class — both keep one source of truth."
    },
    {
      "text": "Arbitrary values escape the scale without config changes: `w-[350px]`, `text-[#bada55]`, `grid-cols-[1fr_2fr]`.",
      "explain_dr": "arbitrary values b7al w-[350px] kaykhaliwk tkhroj 3la scale bla ma tbdel config.",
      "example": "<div class=\"w-[350px] text-[#bada55] grid-cols-[1fr_2fr]\">",
      "q": "You need a 350px-wide box, but Tailwind has no w-350 — what does the example do?",
      "a": "Use an arbitrary value: w-[350px] — it escapes the scale without touching the config."
    },
    {
      "text": "Prefix a utility with `!` to mark it important — `!p-4` compiles to `padding: 1rem !important`; use sparingly.",
      "explain_dr": "!p-4 kay3ni important — sta3mlo ghir ila darty bih.",
      "example": "<div class=\"!p-4\">\n  <!-- compiles to padding: 1rem !important -->\n</div>",
      "q": "What CSS does !p-4 compile to, and why should you use it sparingly?",
      "a": "padding: 1rem !important — it breaks the normal utility override order and becomes hard to manage, so it is a last resort."
    },
    {
      "text": "Variants stack left to right: `md:hover:bg-blue-700` means hover styles that only apply at the md breakpoint.",
      "explain_dr": "md:hover:bg-blue-700 kay3ni hover ghir f ecran md w lfou9.",
      "example": "<button class=\"md:hover:bg-blue-700\">\n  <!-- hover styles only at md and up -->\n</button>",
      "q": "When does md:hover:bg-blue-700 apply?",
      "a": "Only on hover AND at the md breakpoint and up — variants apply left to right, so the md condition gates the hover style."
    },
    {
      "text": "`space-x-4` breaks when flex children wrap; prefer `gap-4`, which handles wrapping correctly.",
      "explain_dr": "space-x-4 kaytkherbe9 ila flex wrap, gap-4 howa l7al s7i7.",
      "example": "<div class=\"flex flex-wrap gap-4\">\n  <!-- gap handles wrapping; space-x-4 breaks -->\n</div>",
      "q": "Your flex row wraps to two lines and the second row's first item has a weird left margin — which utility caused it and what is the fix?",
      "a": "space-x-4: it adds margin-left to every child except the first, which breaks on wrap; replace it with gap-4, which handles wrapping correctly."
    },
    {
      "text": "The `container` class centers content with responsive max-widths — stop hand-rolling wrapper divs.",
      "explain_dr": "container class jahza katcenter l content — ma t3awdch tsaybha b ydek.",
      "example": "<div class=\"container\">\n  <!-- centered, responsive max-widths built in -->\n</div>",
      "q": "What layout work does the container class do for you?",
      "a": "It centers content with responsive max-widths built in — no hand-rolled wrapper divs with margins and breakpoints."
    },
    {
      "text": "`sr-only` hides content visually while keeping it for screen readers — the right tool for icon labels and skip links.",
      "explain_dr": "sr-only kaykhfi l3in w kaykhlih l screen readers — l icon labels.",
      "example": "<button aria-label=\"Close\">\n  <span class=\"sr-only\">Close menu</span>\n</button>",
      "q": "Why put sr-only on the span in the example instead of just deleting the text?",
      "a": "sr-only hides the text visually while keeping it readable by screen readers — deleting it would remove the accessible label entirely."
    },
    {
      "text": "`truncate`, `line-clamp-2`, and `whitespace-nowrap` control text overflow with zero custom CSS.",
      "explain_dr": "truncate w line-clamp kay9t3o text twil bla CSS khass.",
      "example": "<p class=\"truncate\">Long single line...</p>\n<p class=\"line-clamp-2\">Long paragraph...</p>",
      "q": "You have a single-line title that must not wrap and a paragraph limited to 2 lines — which classes?",
      "a": "truncate for the single line (no wrap + ellipsis) and line-clamp-2 for the two-line paragraph."
    },
    {
      "text": "`aspect-video` and `aspect-square` reserve space for media and kill cumulative layout shift.",
      "explain_dr": "aspect-video kay7jez blasa l video 9bel ma tloada — ma kaynch layout shift.",
      "example": "<div class=\"aspect-video\">\n  <video src=\"demo.mp4\"></video>\n</div>",
      "q": "Your page jumps when a video loads — how does the example's aspect-video prevent this?",
      "a": "It reserves a 16:9 box before the video loads, eliminating cumulative layout shift when the media arrives."
    },
    {
      "text": "Tailwind v4 is CSS-first: define tokens in `@theme { --color-brand: #123; }` and use them as `bg-brand` — no config file needed.",
      "explain_dr": "Tailwind v4: config wlat f CSS b @theme, ma b9atch config file.",
      "example": "/* v4: CSS-first tokens, no config file */\n@theme { --color-brand: #123; }\n<div class=\"bg-brand\">Brand</div>",
      "q": "In Tailwind v4, how do you define a brand color without a config file, per the example?",
      "a": "In CSS with @theme { --color-brand: #123; }, then use bg-brand — no tailwind.config.js needed."
    },
    {
      "text": "`group` + `group-hover:` styles children on parent hover — e.g. reveal a button when hovering a card.",
      "explain_dr": "group-hover kaystili lwlad mli parent ythover — b7al button kayban f card.",
      "example": "<div class=\"group relative\">\n  <button class=\"opacity-0 group-hover:opacity-100\">Edit</button>\n</div>",
      "q": "In the example, when is the Edit button visible, and what two classes on the parent make this work?",
      "a": "Only when hovering the card: the parent needs the group class and the button uses group-hover:opacity-100 (starting from opacity-0)."
    },
    {
      "text": "`peer` + `peer-checked:` styles a sibling based on input state — CSS-only toggles with no JavaScript.",
      "explain_dr": "peer-checked kaystili jiran 3la 7sab l input — toggle bla JavaScript.",
      "example": "<input type=\"checkbox\" class=\"peer sr-only\">\n<div class=\"peer-checked:bg-blue-600\">Toggle</div>",
      "q": "How does the example build a CSS-only toggle with no JavaScript?",
      "a": "The checkbox gets class peer; the sibling div uses peer-checked:bg-blue-600 to restyle itself when the checkbox is checked."
    },
    {
      "text": "`divide-x` / `divide-y` add borders between children — cleaner than putting `border` on every item.",
      "explain_dr": "divide-x kayzid borders bin lwlad, an9a men border f kol wa7ed.",
      "example": "<ul class=\"divide-y divide-gray-200\">\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>",
      "q": "You want hairline dividers between list items — why is divide-y better than border on each li?",
      "a": "divide-y adds borders only between children, so there is no extra border on the first/last item — cleaner than border on every item."
    },
    {
      "text": "`ring-2 ring-offset-2` builds focus outlines that don't shift layout the way `border` does — better for accessibility.",
      "explain_dr": "ring-2 l focus ma kayherkch layout b7al border — a7san l accessibility.",
      "example": "<button class=\"focus:ring-2 focus:ring-offset-2\">\n  <!-- focus ring, no layout shift -->\n</button>",
      "q": "Why does the example prefer focus:ring-2 over adding a border on focus?",
      "a": "A ring adds an outline-like highlight without changing the element's size, so it never shifts layout the way adding a border would."
    },
    {
      "text": "`max-w-prose` (65ch) keeps line length readable; pair it with `mx-auto` for centered article layouts.",
      "explain_dr": "max-w-prose kay7ded toul satr bach l9raya tkon mori7a.",
      "example": "<article class=\"max-w-prose mx-auto\">\n  <!-- 65ch lines, centered -->\n</article>",
      "q": "Your article's lines stretch full-width on a desktop — what does max-w-prose mx-auto fix?",
      "a": "max-w-prose caps line length at ~65ch for readability, and mx-auto centers the article."
    },
    {
      "text": "Put `@apply` component classes inside `@layer components { ... }` so utilities like `mt-4` can still override them.",
      "explain_dr": "@layer components kaykhali utilities b7al mt-4 yghlebo l component classes dyalk.",
      "example": "@layer components {\n  .btn { @apply rounded px-4 py-2; }\n}\n<!-- utilities like mt-4 still override .btn -->",
      "q": "You defined .btn with @apply but mt-4 on the same element does not override its margin — what did the example warn about?",
      "a": "@apply component classes must go inside @layer components { ... }; outside a layer, the component rule can beat utilities, breaking overrides."
    }
  ],
  "NodeJs": [
    {
      "text": "Node.js is a JavaScript runtime built on Chrome's V8 engine, running outside the browser.",
      "explain_dr": "Node.js rah ghir JavaScript li khddam barra l browser, b moteur V8.",
      "example": "// runs JS outside the browser, on Chrome's V8\nconsole.log(process.version);",
      "q": "What does console.log(process.version) print, and why can it run outside a browser?",
      "a": "The Node.js version (e.g. v20.x) — Node runs JavaScript on Chrome's V8 engine as a standalone runtime, not in a browser."
    },
    {
      "text": "It uses an event loop with non-blocking I/O, making it efficient for I/O-heavy apps like APIs.",
      "explain_dr": "b7al chi serveur wa7ed li kayrdd 3la bzzaf d tlabat bla maytsnna — I/O ma katbloqish.",
      "example": "const fs = require(\"fs\");\nfs.readFile(\"a.txt\", (err, data) => {\n  // event loop stays free while reading\n});",
      "q": "While fs.readFile is reading a.txt, what can the event loop do?",
      "a": "Keep serving other work: the I/O is non-blocking, so the event loop stays free and runs the callback when the read completes."
    },
    {
      "text": "Install packages with `npm install <name>`; dependencies are listed in `package.json`.",
      "explain_dr": "npm install smiyt l package katnzzlo w katzido f package.json bach kolchi y3ref ach khass.",
      "example": "$ npm install express\n// listed in package.json -> \"dependencies\"",
      "q": "After running npm install express, where is express recorded, and why does that matter?",
      "a": "In package.json under \"dependencies\" — that record lets anyone reproduce the install with npm install/ci."
    },
    {
      "text": "Import modules with `require()` (CommonJS) or `import` (ES modules with `\"type\": \"module\"`).",
      "explain_dr": "require dyal l9dam (CommonJS) w import dyal jdid (ES modules) — khass tzid \"type\": \"module\".",
      "example": "const fs = require(\"fs\");            // CommonJS\nimport fs from \"fs\";                  // ESM, needs \"type\": \"module\"",
      "q": "You write import fs from \"fs\" and get a SyntaxError — what is the fix, per the example?",
      "a": "Add \"type\": \"module\" to package.json (ESM), or switch to const fs = require(\"fs\") (CommonJS)."
    },
    {
      "text": "Build a server with Express: `app.get(\"/users\", (req, res) => res.json(users))`.",
      "explain_dr": "Express kaysshel 3lik: app.get(\"/users\", ...) katjawb 3la tlabat GET.",
      "example": "const express = require(\"express\");\nconst app = express();\napp.get(\"/users\", (req, res) => res.json(users));",
      "q": "In the example, what does a GET request to /users return?",
      "a": "The users array as JSON — res.json(users) serializes it and sets the JSON content type."
    },
    {
      "text": "Environment variables live in a `.env` file and are read via `process.env.API_KEY` — never hardcode secrets.",
      "explain_dr": "l asrar b7al API keys khllihom f .env, w qrahom b process.env — 3mro ma tktebhom f code.",
      "example": "require(\"dotenv\").config();\nconst key = process.env.API_KEY; // never hardcoded",
      "q": "Your API key is in code as a string literal — what does the example say to do instead?",
      "a": "Put it in a .env file (loaded via dotenv) and read it with process.env.API_KEY — never hardcode secrets."
    },
    {
      "text": "Handle errors in async routes with `try/catch` or an error-handling middleware to avoid crashes.",
      "explain_dr": "ila nsiti try/catch f route async, l error ghadi ytiyy7 l serveur kamlo.",
      "example": "app.get(\"/\", async (req, res, next) => {\n  try {\n    res.json(await db.users.find());\n  } catch (err) { next(err); }\n});",
      "q": "Your async route throws — why does the example wrap it in try/catch with next(err)?",
      "a": "Unhandled async errors can crash the process or hang the request; catching and calling next(err) forwards the error to Express's error-handling middleware."
    },
    {
      "text": "`npm start` runs the script named `start` defined in `package.json`.",
      "explain_dr": "npm start ghir kaykhdem script li smito start li katbo f package.json.",
      "example": "// package.json\n\"scripts\": { \"start\": \"node server.js\" }\n$ npm start",
      "q": "You run npm start but there is no start script — what happens?",
      "a": "npm errors out: it runs the script named \"start\" from package.json (here node server.js), and fails if that script is not defined."
    },
    {
      "text": "Use `nodemon` in development for automatic restarts when files change.",
      "explain_dr": "nodemon kay3awd ykhdem l app rasso mli katbdel chi fichier — mzyan l dev.",
      "example": "// package.json\n\"scripts\": { \"dev\": \"nodemon server.js\" }\n// nodemon restarts on file changes",
      "q": "Why use nodemon server.js instead of node server.js during development?",
      "a": "nodemon watches your files and restarts the server automatically on every change — node alone requires a manual restart."
    },
    {
      "text": "Node is single-threaded — keep CPU-heavy work out of request handlers or offload it to worker threads.",
      "explain_dr": "Node 3ndo thread wa7ed — l 7sabat t9al (CPU) khrjouhom men request handlers.",
      "example": "const { Worker } = require(\"worker_threads\");\n// offload CPU-heavy work, keep the event loop free",
      "q": "Your request handler does heavy image processing and all other requests stall — what does the example recommend?",
      "a": "Keep CPU-heavy work out of request handlers: offload it to worker threads (or a queue), so the single-threaded event loop stays free."
    },
    {
      "text": "`process.nextTick()` callbacks run before the event loop continues — before `setImmediate()` — a classic interview trap.",
      "explain_dr": "nextTick katssbe9 kolchi, 7ta setImmediate — l interviewers kay7bbo had so2al.",
      "example": "process.nextTick(() => console.log(\"tick\"));      // first\nsetImmediate(() => console.log(\"immediate\"));    // second",
      "q": "What does the example print, in order, and why is it an interview trap?",
      "a": "tick, then immediate: process.nextTick() callbacks run before the event loop continues, ahead of setImmediate() — many assume the opposite."
    },
    {
      "text": "An unhandled promise rejection crashes modern Node: always chain `.catch()` or listen on `process.on(\"unhandledRejection\")`.",
      "explain_dr": "promise li trefdat w ma tsdatch kat9tl Node — dima dir .catch().",
      "example": "fetchData().catch(err => console.error(err));\n// or: process.on(\"unhandledRejection\", ...)",
      "q": "Your promise rejects and nothing catches it — what happens in modern Node, and what is the fix?",
      "a": "The process crashes: always chain .catch() or listen for process.on(\"unhandledRejection\")."
    },
    {
      "text": "`require()` caches modules after the first load — mutating an exported object affects every file that imported it.",
      "explain_dr": "require kay7fed l module mra w7da — ila bdelti l export, kolchi li importah ghadi ychof tbadil.",
      "example": "// counter.js - cached after first require()\nlet n = 0;\nmodule.exports = { inc: () => ++n };\n// every importer shares the same n",
      "q": "Two files require the same counter.js and both call inc() — the second sees n=2, not 1. Why?",
      "a": "require() caches the module after the first load, so both files share the same exported object — mutating it affects every importer."
    },
    {
      "text": "Express middleware runs in registration order; error handlers must have four args `(err, req, res, next)` or Express ignores them.",
      "explain_dr": "l ordre dyal app.use mohim; w error handler khass ykon fih 4 arguments.",
      "example": "app.use(logger); // middleware order matters\napp.use((err, req, res, next) => res.status(500).json({})); // 4 args",
      "q": "Your error handler never runs, and it has signature (req, res, next) — what is wrong?",
      "a": "Two things: error handlers need four args (err, req, res, next) or Express ignores them, and middleware runs in registration order, so the handler must come after the routes."
    },
    {
      "text": "Sync APIs like `fs.readFileSync()` block the whole event loop — never call them inside a request handler.",
      "explain_dr": "fs.readFileSync katjmd kolchi 7ta tsali — 3mro ma tsta3mlo f route.",
      "example": "// BAD inside a route: fs.readFileSync(path) blocks everyone\nfs.readFile(path, (err, data) => { /* async */ });",
      "q": "Why is fs.readFileSync(path) fine in a startup script but \"BAD inside a route\", per the example?",
      "a": "Inside a request handler it blocks the entire event loop for all users while it reads; at startup there is no traffic to block, so sync APIs are acceptable."
    },
    {
      "text": "Handle `SIGTERM`/`SIGINT` for graceful shutdown: close the HTTP server and DB pool before `process.exit()`.",
      "explain_dr": "mli l serveur kaytf, sed l connections b chouia qbl ma tkhrej — hadi hiya graceful shutdown.",
      "example": "process.on(\"SIGTERM\", () => {\n  server.close(() => process.exit(0)); // graceful shutdown\n});",
      "q": "Your container shuts down mid-request and drops connections — what does the example's SIGTERM handler change?",
      "a": "It lets in-flight work finish: server.close() stops accepting new connections, then the process exits — a graceful shutdown instead of an abrupt kill."
    },
    {
      "text": "Use `Buffer.from(str)` for binary data — the `new Buffer()` constructor is deprecated and unsafe.",
      "explain_dr": "Buffer.from hiya t-tri9a s7i7a l binary data; new Buffer 9dima w khatira.",
      "example": "const buf = Buffer.from(\"hello\"); // safe\n// never: new Buffer(\"hello\") - deprecated & unsafe",
      "q": "Why does the example forbid new Buffer(\"hello\") in favor of Buffer.from(\"hello\")?",
      "a": "new Buffer() is deprecated and unsafe (it can leak uninitialized memory); Buffer.from() is the safe API."
    },
    {
      "text": "Scale a single-threaded app with the `cluster` module or PM2 to use every CPU core.",
      "explain_dr": "Node thread wa7ed, donc cluster wlla PM2 kaykhdmo bzzaf d copies bach yst3mlo ga3 CPU.",
      "example": "const cluster = require(\"cluster\");\n// or: pm2 start server.js -i max  (one worker per core)",
      "q": "Your Node app uses only one CPU core on an 8-core machine — what are the example's two fixes?",
      "a": "Use the cluster module to fork a worker per core, or run pm2 start server.js -i max — both multiply the single-threaded app across cores."
    },
    {
      "text": "Use `npm ci` in CI pipelines: it installs exactly what's in `package-lock.json`, unlike `npm install` which can drift.",
      "explain_dr": "npm ci kaynstalli b dabt li f package-lock.json — CI ma kaybghich surprises.",
      "example": "$ npm ci   # CI installs exactly what package-lock.json pins",
      "q": "Why does the example prefer npm ci over npm install in CI?",
      "a": "npm ci installs exactly what is pinned in package-lock.json for a reproducible build; npm install can drift versions."
    },
    {
      "text": "Importing CommonJS from ESM works via the default export (`import pkg from \"cjs-lib\"`), but named imports often don't resolve.",
      "explain_dr": "import mn ESM l CJS kaydoz b default export; named imports ghaliban ma kaykhdmoch.",
      "example": "import pkg from \"cjs-lib\";       // default export works\n// import { named } from \"cjs-lib\"; // named imports often fail",
      "q": "You import a CommonJS library in ESM and import { named } from \"cjs-lib\" fails — what works, per the example?",
      "a": "Import the default export: import pkg from \"cjs-lib\" — named imports from CJS often do not resolve; destructure from pkg if needed."
    },
    {
      "text": "Stream large payloads instead of buffering them: `fs.createReadStream(path).pipe(res)` keeps memory flat.",
      "explain_dr": "ila l fichier kbir, streameh b pipe bla ma t3mmer RAM.",
      "example": "fs.createReadStream(path).pipe(res); // streams keep memory flat",
      "q": "Your endpoint buffers a 2GB file before sending — what is the memory-safe alternative in the example?",
      "a": "Stream it: fs.createReadStream(path).pipe(res) sends the file in chunks, keeping memory flat instead of loading 2GB at once."
    },
    {
      "text": "Harden an API with `helmet` for secure headers and a rate limiter on login routes to blunt brute force.",
      "explain_dr": "helmet katzid headers dyal security, w rate limiter kay7mi login mn brute force.",
      "example": "const helmet = require(\"helmet\");\napp.use(helmet());\napp.use(\"/login\", rateLimiter); // blunt brute force",
      "q": "What two hardening steps does the example apply to a login route?",
      "a": "helmet() for secure HTTP headers, and a rate limiter on /login to blunt brute-force attacks."
    },
    {
      "text": "Gate behavior on `process.env.NODE_ENV`: verbose errors in development, generic messages in production.",
      "explain_dr": "NODE_ENV katgolik wach nta f dev wlla prod — l errors f prod khasshom ykono 3amiyin.",
      "example": "if (process.env.NODE_ENV === \"production\") {\n  res.json({ error: \"Something went wrong\" }); // generic in prod\n}",
      "q": "A production error shows a full stack trace to users — what should the code check, per the example?",
      "a": "process.env.NODE_ENV: send verbose errors only in development, and generic messages like \"Something went wrong\" in production."
    },
    {
      "text": "An `EventEmitter` that gains listeners without `.off()`/`.removeListener()` leaks memory — always clean up.",
      "explain_dr": "ila zdti listeners bla ma t7ydhom, memory katzid — dima .off().",
      "example": "emitter.on(\"data\", handler);\n// cleanup when done:\nemitter.off(\"data\", handler);",
      "q": "You add a \"data\" listener per request but never remove it — what happens over time?",
      "a": "Memory leak: listeners accumulate on the emitter — always clean up with .off() or .removeListener() when done."
    },
    {
      "text": "Sign JWTs with an expiry — `jwt.sign(payload, secret, { expiresIn: \"1h\" })` — and verify the token on every protected route.",
      "explain_dr": "JWT khass ykon fih expiration, w kol route m7miya khassha tverifih.",
      "example": "const jwt = require(\"jsonwebtoken\");\nconst token = jwt.sign(payload, secret, { expiresIn: \"1h\" });",
      "q": "Your tokens never expire — what does the example add to jwt.sign, and what must happen on protected routes?",
      "a": "An expiry ({ expiresIn: \"1h\" }) so stolen tokens stop working; and the token must be verified on every protected route."
    }
  ],
  "RestApi": [
    {
      "text": "REST is an architectural style for APIs built on standard HTTP methods.",
      "explain_dr": "REST b7al 9anoun dyal APIs: kayst3mlo HTTP methods lli kolchi kay3rfhom.",
      "example": "app.get('/users', (req, res) => res.json(users)); // REST API over HTTP methods",
      "q": "The example registers `app.get('/users', ...)`. Which operation (create, read, update, delete) does this route perform, and what makes the API RESTful here?",
      "a": "It performs a read operation. It is RESTful because it uses a standard HTTP method (GET) on a resource path (/users) instead of a custom action name."
    },
    {
      "text": "Map methods to operations: `GET` (read), `POST` (create), `PUT`/`PATCH` (update), `DELETE` (remove).",
      "explain_dr": "GET l9raya, POST l creation, PUT/PATCH l update, DELETE l ms7 — kol wa7da 3ndha dawrha.",
      "example": "app.get('/users', listUsers); // read\napp.post('/users', createUser); // create\napp.put('/users/:id', replaceUser); // update\napp.delete('/users/:id', removeUser); // remove",
      "q": "Which HTTP method would you use to replace a user's entire profile document, and which one to remove a user?",
      "a": "Use PUT (or PATCH for a partial update) to replace the profile, and DELETE to remove the user."
    },
    {
      "text": "Resources are named with plural nouns: `GET /users`, `GET /users/1`, `POST /users`.",
      "explain_dr": "resources b pluriel: /users, /users/1 — smiya kat3ni chno kayn ldakhl.",
      "example": "app.get('/users/:id', (req, res) => res.json(findUser(req.params.id))); // plural noun resources",
      "q": "Is `GET /users/1` a correct REST route name according to the example? What naming rule does it follow?",
      "a": "Yes. Resources are named with plural nouns (/users) plus an id for a single item — no verbs in the URL."
    },
    {
      "text": "Use status codes correctly: `200` OK, `201` Created, `400` Bad Request, `401` Unauthorized, `404` Not Found, `500` Server Error.",
      "explain_dr": "200 OK, 201 Created, 404 Not Found, 500 Server Error — codes kaygolo chno w9e3.",
      "example": "res.status(201).json(newUser); // Created\nres.status(404).json({ error: 'User not found' }); // Not Found",
      "q": "After successfully creating a user, should the example respond with 200 or 201? And what should it send when the user does not exist?",
      "a": "201 Created for a successful creation; 404 Not Found when the user does not exist."
    },
    {
      "text": "APIs are stateless — each request carries its own authentication, often a token in the `Authorization` header.",
      "explain_dr": "API stateless kay3ni kol request katjib m3aha token dyalha, server ma kaytfkrch chkoun nta.",
      "example": "const token = req.headers.authorization?.split(' ')[1]; // stateless: auth sent per request",
      "q": "The example extracts the token from `req.headers.authorization` on every request. What does this tell you about how this API authenticates?",
      "a": "The API is stateless — each request carries its own credentials, so the server does not rely on a stored session."
    },
    {
      "text": "Return JSON with a consistent shape, including errors: `{ \"error\": \"User not found\" }`.",
      "explain_dr": "JSON b nafs chkl dima, 7ta errors — client kay3rf fin y9leb.",
      "example": "res.status(404).json({ error: 'User not found' }); // consistent JSON shape, incl. errors",
      "q": "When the user is not found, what body does the example return, and why does the shape matter?",
      "a": "It returns `{ error: 'User not found' }`. A consistent JSON shape (even for errors) lets clients parse every response the same way."
    },
    {
      "text": "Validate and sanitize all input on the server; never trust client data.",
      "explain_dr": "3mer ma tti9 f data dyal client — validation dima f server.",
      "example": "if (!req.body?.email) return res.status(400).json({ error: 'email required' }); // validate server-side",
      "q": "If the client omits `email` from the request body, what does the example do? Why must this check live on the server?",
      "a": "It returns 400 with `{ error: 'email required' }`. Client data cannot be trusted, so validation must be enforced server-side."
    },
    {
      "text": "Version your API (`/api/v1/...`) so changes don't break existing clients.",
      "explain_dr": "versioning b7al /api/v1 kay7mik mli tbedel API w clients l9dam khdamin.",
      "example": "app.use('/api/v1/users', userRoutes); // version so changes don't break clients",
      "q": "What happens to existing clients if you add a breaking change under `/api/v1/users` after shipping `/api/v2/users`?",
      "a": "Nothing — existing clients keep using the stable v1 routes while new clients adopt v2; versioning isolates breaking changes."
    },
    {
      "text": "`PUT` replaces a whole resource; `PATCH` updates only the fields sent.",
      "explain_dr": "PUT kay3awd kolchi, PATCH kaybedel ghir li sifti — far9 mohim.",
      "example": "app.put('/users/:id', replace); // replaces the whole resource\napp.patch('/users/:id', partial); // updates only sent fields",
      "q": "You send only `{ \"name\": \"Aymane\" }` to `PATCH /users/1` on a user that also has email and age. Which fields change?",
      "a": "Only `name` changes. PATCH updates just the fields sent; PUT would replace the whole resource."
    },
    {
      "text": "Paginate list endpoints (`?page=2&limit=20`) instead of returning thousands of records at once.",
      "explain_dr": "pagination b page w limit, bach server ma ysiftch alf record d9a wa7da.",
      "example": "const page = Number(req.query.page) || 1;\nconst limit = Number(req.query.limit) || 20; // paginate lists",
      "q": "What do `page` and `limit` default to in the example, and why paginate at all?",
      "a": "Page defaults to 1 and limit to 20. Paginating avoids dumping thousands of records into one response, which is slow and wasteful."
    },
    {
      "text": "`GET` must be idempotent and side-effect free — never mutate data in a GET, and never trigger deletes via query params.",
      "explain_dr": "GET khasso ykon safe: ma ymknch ybedel walo f database — hadi 9a3ida.",
      "example": "app.get('/report', (req, res) => res.json(stats())); // GET only reads — never mutates",
      "q": "Someone suggests making `GET /report?delete=old` clean up old data. Why is this a bad idea?",
      "a": "GET must be idempotent and side-effect free — crawlers and browsers may call it repeatedly or prefetch it, which would trigger unwanted deletions."
    },
    {
      "text": "`POST` is neither safe nor idempotent — a retried POST can double-create, so use an `Idempotency-Key` header for payments and orders.",
      "explain_dr": "POST ila t3awd y9der ykhele9 jouj — Idempotency-Key kay7bes double creation.",
      "example": "const key = req.headers['idempotency-key']; // skip the charge if this key was already processed",
      "q": "A payment POST is sent twice due to a network retry. What goes wrong without an Idempotency-Key, and how does the header fix it?",
      "a": "The payment could be charged twice, because POST is not idempotent. An Idempotency-Key lets the server recognize the duplicate and skip reprocessing it."
    },
    {
      "text": "Return `204 No Content` for successful DELETEs, and `202 Accepted` when the work is queued asynchronously.",
      "explain_dr": "204 l delete naj7 bla content, 202 l khadma li ghadi tkhdem moraha.",
      "example": "res.status(204).send(); // DELETE ok, nothing to return\nres.status(202).json({ status: 'queued' }); // async job accepted",
      "q": "What body should accompany the `204` response in the example, and what does `202` signal to the client?",
      "a": "204 carries no body (No Content). 202 Accepted means the request was received but the work is queued asynchronously."
    },
    {
      "text": "Don't nest resources deeper than one level: `/users/1/orders` is fine, `/users/1/orders/2/items/3` is not — use `/items/3`.",
      "explain_dr": "nesting ghir level wa7ed: /users/1/orders, ila zedti ghadi yt3e9ed.",
      "example": "app.get('/users/:id/orders', userOrders); // one level is fine\napp.get('/items/:id', itemById); // never nest deeper",
      "q": "Is `/users/1/orders/2/items/3` an acceptable route? What should you use instead?",
      "a": "No — do not nest resources deeper than one level. Use the top-level `/items/3` instead."
    },
    {
      "text": "Filtering, sorting, and search belong in query params — `GET /products?category=shoes&sort=price&order=desc&q=nike` — and URLs use nouns, never verbs like `/getUsers`.",
      "explain_dr": "filter w sort f query params, w URLs ghir nouns — verbs mamnou3in.",
      "example": "const { category, sort = 'price', order = 'desc', q } = req.query; // filter/sort/search in query params",
      "q": "The example reads `category`, `sort`, `order`, and `q` from the URL. Where in the URL do they live, and why not `GET /getUsers`?",
      "a": "They live in query params (`?category=...`). Routes use nouns, never verbs — `/getUsers` embeds an action where a resource name belongs."
    },
    {
      "text": "`401 Unauthorized` = missing or invalid credentials; `403 Forbidden` = authenticated but not allowed — mixing them up is an interview classic.",
      "explain_dr": "401 = ma 3ndkch credentials, 403 = 3ndk walakin mamnou3 — far9 kaytsswel 3lih f interviews.",
      "example": "if (!token) return res.status(401).json({ error: 'Login required' });\nif (user.role !== 'admin') return res.status(403).json({ error: 'Not allowed' });",
      "q": "A logged-in non-admin user hits an admin endpoint. Should the example return 401 or 403?",
      "a": "403 Forbidden — the user is authenticated but not allowed. 401 is for missing or invalid credentials."
    },
    {
      "text": "Answer abuse with `429 Too Many Requests` plus a `Retry-After` header; always rate-limit login endpoints.",
      "explain_dr": "429 kaygol l client: rje3 mor chwiya — w Retry-After kaygol ch7al.",
      "example": "res.set('Retry-After', '60').status(429).json({ error: 'Too many requests' }); // answer abuse with 429",
      "q": "What does the example send when a client exceeds the rate limit, and which endpoints should you always rate-limit?",
      "a": "It sends 429 Too Many Requests with a `Retry-After: 60` header. Always rate-limit login endpoints to block brute-force attacks."
    },
    {
      "text": "JWT best practice: short-lived access tokens + long-lived refresh tokens in `httpOnly` cookies — never store tokens in `localStorage`.",
      "explain_dr": "tokens f localStorage khatar (XSS) — httpOnly cookies homa l7al l2amen.",
      "example": "res.cookie('refreshToken', token, { httpOnly: true, secure: true }); // never in localStorage",
      "q": "Why does the example store the refresh token in an `httpOnly` cookie instead of `localStorage`?",
      "a": "httpOnly cookies cannot be read by JavaScript, so an injected XSS script cannot steal the token — localStorage tokens are exposed to any injected script."
    },
    {
      "text": "CORS errors are a server-side header problem (`Access-Control-Allow-Origin`), not a frontend bug — the browser is just enforcing the policy.",
      "explain_dr": "CORS error machi bug dyal frontend, howa server ma sifetch l header.",
      "example": "res.set('Access-Control-Allow-Origin', 'https://app.example.com'); // CORS is a server header",
      "q": "The frontend shows a CORS error. According to the note, whose bug is it, and what header fixes it?",
      "a": "It is a server-side issue, not a frontend bug. The server must send `Access-Control-Allow-Origin` permitting the frontend's origin."
    },
    {
      "text": "Every paginated list should share one envelope: `{ \"data\": [...], \"meta\": { \"page\": 1, \"total\": 200 } }`.",
      "explain_dr": "envelope wa7da l kol paginated list: data + meta — client kay3rf y9raha dima.",
      "example": "res.json({ data: users, meta: { page: 1, total: 200 } }); // one envelope for all paginated lists",
      "q": "What shape should every paginated response share, per the example?",
      "a": "`{ data: [...], meta: { page, total } }` — one consistent envelope across all list endpoints."
    },
    {
      "text": "Use `ETag` + `If-None-Match` for conditional requests — the server answers `304 Not Modified` and saves bandwidth.",
      "explain_dr": "ETag b7al basma dyal response, ila ma tbedlatch server kayjawb 304 w kaywfer bandwidth.",
      "example": "if (req.headers['if-none-match'] === etag) return res.status(304).end(); // conditional request",
      "q": "The client sends `If-None-Match` with the ETag it already has and the resource has not changed. What does the server return?",
      "a": "304 Not Modified with an empty body — the client reuses its cached copy, saving bandwidth."
    },
    {
      "text": "Webhooks must carry a signature header (like Stripe's `Stripe-Signature`) — verify it before trusting the payload.",
      "explain_dr": "webhooks khasshom signature — bla verification ay wa7ed y9der ysift payload mzowar.",
      "example": "const sig = req.headers['stripe-signature']; // verify the signature before trusting the payload",
      "q": "Before trusting a webhook payload, what must the example do with the `stripe-signature` header?",
      "a": "Verify the signature header first — an unverified payload could be forged by an attacker."
    },
    {
      "text": "Require `Content-Type: application/json` on requests and answer `415 Unsupported Media Type` for the wrong format.",
      "explain_dr": "415 kaygol l client: sifti format ghalat, ana kan9bel ghir JSON.",
      "example": "if (req.headers['content-type'] !== 'application/json') return res.status(415).end();",
      "q": "A client POSTs XML to a JSON-only endpoint. What status should the server answer with?",
      "a": "415 Unsupported Media Type, since the request's Content-Type is not application/json."
    },
    {
      "text": "Never leak stack traces or SQL errors in production responses — log them server-side and return a generic `500`.",
      "explain_dr": "stack traces f production kay3tiw l hackers info — log f server w sifet 500 3adi.",
      "example": "catch (err) { console.error(err); res.status(500).json({ error: 'Internal server error' }); } // log, don't leak",
      "q": "What does the example do inside the catch block, and what must it NOT include in the 500 response?",
      "a": "It logs the error server-side and returns a generic `{ error: 'Internal server error' }`. It must never include the stack trace or SQL error details."
    },
    {
      "text": "Browsers send automatic `OPTIONS` preflight requests for non-simple CORS calls — your server must answer them or PUT/PATCH/DELETE fail.",
      "explain_dr": "OPTIONS preflight kaytsift bo7do men browser, ila server ma jawbch PUT/PATCH ghadi yfchlo.",
      "example": "app.options('/users/:id', (req, res) => res.set('Access-Control-Allow-Methods', 'PUT,DELETE').sendStatus(204)); // answer preflights",
      "q": "Why would a cross-origin `PUT /users/1` from a browser fail even though the route exists?",
      "a": "Browsers send an automatic OPTIONS preflight for non-simple CORS requests — if the server does not answer it with the allowed methods, the PUT never fires."
    }
  ],
  "Laravel": [
    {
      "text": "Laravel is a PHP framework for building web apps and APIs with an elegant, expressive syntax.",
      "explain_dr": "Laravel rah framework dyal PHP bach tbni web apps w API b syntax zwina.",
      "example": "Route::get('/posts', [PostController::class, 'index']);",
      "q": "What does `Route::get('/posts', [PostController::class, 'index'])` connect together?",
      "a": "It maps the GET /posts URL to the `index` method of PostController — routes bind URLs to controller actions."
    },
    {
      "text": "Routes live in `routes/web.php` or `routes/api.php`; controllers hold the request logic.",
      "explain_dr": "l routes kaynin f routes/web.php wlla api.php, w controllers fihom logic.",
      "example": "Route::get('/users', [UserController::class, 'index']); // routes map to controller actions",
      "q": "Where would you define an API route versus a web page route, per the note?",
      "a": "API routes go in `routes/api.php`, web page routes in `routes/web.php`."
    },
    {
      "text": "Eloquent is Laravel's ORM: each model maps to a database table, e.g. `User::where('active', true)->get()`.",
      "explain_dr": "Eloquent hiya ORM: kol model = table f DB, b7al User::where('active', true)->get().",
      "example": "User::where('active', true)->get(); // Eloquent model -> users table",
      "q": "What result does `User::where('active', true)->get()` produce, and which table does it hit?",
      "a": "A collection of all active users — Eloquent maps the `User` model to the `users` table automatically."
    },
    {
      "text": "Migrations (`php artisan migrate`) version-control your database schema.",
      "explain_dr": "migrations katversionni schema dyal DB — b7al git l database.",
      "example": "Schema::create('posts', function (Blueprint $table) {\n    $table->id(); $table->string('title'); $table->timestamps();\n}); // migrations version the schema",
      "q": "After writing the `Schema::create('posts', ...)` migration, what command applies it to the database?",
      "a": "`php artisan migrate` — migrations version-control the schema and this command runs the pending ones."
    },
    {
      "text": "Use `$request->validate([...])` to validate incoming data and auto-return 422 errors on failure.",
      "explain_dr": "$request->validate([...]) katvalidi data w katrje3 422 rasha ila ghalt.",
      "example": "$validated = $request->validate(['email' => 'required|email']); // auto-422 on failure",
      "q": "A request hits the example with no `email` field. What HTTP status does Laravel return automatically?",
      "a": "422 Unprocessable Entity — `$request->validate()` auto-returns 422 on failure."
    },
    {
      "text": "Blade is Laravel's templating engine; `{{ $var }}` escapes output automatically, preventing XSS.",
      "explain_dr": "Blade hiya templates; {{ $var }} katescape rasso — 7imaya mn XSS.",
      "example": "{{ $user->name }} // Blade: escaped output, XSS-safe",
      "q": "The example prints `{{ $user->name }}` where name contains `<script>`. What reaches the browser?",
      "a": "The escaped text `&lt;script&gt;` — Blade's `{{ }}` escapes output automatically, blocking XSS."
    },
    {
      "text": "Middleware (auth, CORS, throttling) filters HTTP requests before they reach the controller.",
      "explain_dr": "middleware b7al 7aris: kayfilteri requests qbl ma ywslo l controller.",
      "example": "Route::get('/dashboard', [DashController::class, 'index'])->middleware('auth'); // middleware filters first",
      "q": "In the example, when does the `auth` middleware run — before or after `DashController@index`?",
      "a": "Before — middleware filters the request before it reaches the controller, rejecting unauthenticated visitors."
    },
    {
      "text": "Artisan is the CLI: `php artisan make:model Post -mcr` scaffolds model, migration, and controller.",
      "explain_dr": "artisan hiya CLI — make:model Post -mcr katgeneri model+migration+controller.",
      "example": "php artisan make:model Post -mcr // model + migration + controller in one command",
      "q": "What three things does `php artisan make:model Post -mcr` generate?",
      "a": "The `Post` model, its migration, and a resource controller — all scaffolded by one Artisan command."
    },
    {
      "text": "Sanctum provides lightweight token authentication for SPAs and mobile apps.",
      "explain_dr": "Sanctum kat3tik auth b tokens khfifa l SPA w mobile apps.",
      "example": "$token = $user->createToken('mobile')->plainTextToken; // Sanctum API token",
      "q": "What does `$user->createToken('mobile')->plainTextToken` give you, and what is it for?",
      "a": "A plain-text API token (Sanctum) that a mobile app or SPA stores and sends as a bearer token on each request."
    },
    {
      "text": "Keep secrets in `.env` and read them via `env()` or config files — never commit `.env` to Git.",
      "explain_dr": "l secrets khllihom f .env — 3mro ma tcommiteh f Git.",
      "example": "'key' => env('STRIPE_KEY'), // secrets in .env, never committed to Git",
      "q": "Why must `.env` never be committed to Git, and how does the example read a secret safely?",
      "a": "It holds secrets like API keys — committing it leaks them. Read secrets via `env()`/config files, which load from the untracked `.env`."
    },
    {
      "text": "Inject dependencies through the constructor — Laravel's service container resolves type-hinted classes automatically.",
      "explain_dr": "constructor injection: Laravel kay7ell lik dependencies rasso — ghir type-hinti f constructor.",
      "example": "public function __construct(private UserRepository $users) {} // container auto-resolves it",
      "q": "How does Laravel know how to build the `UserRepository` in the example's constructor?",
      "a": "The service container auto-resolves type-hinted constructor dependencies — no manual `new` needed."
    },
    {
      "text": "Move complex validation into Form Requests (`php artisan make:request StorePostRequest`) to keep controllers thin.",
      "explain_dr": "l validation t9ila dirha f Form Request bach controller yb9a n9i.",
      "example": "public function store(StorePostRequest $request) { $request->validated(); } // Form Request keeps it thin",
      "q": "Where should complex validation live instead of the controller, and what stays in the controller?",
      "a": "In a Form Request class; the controller then just calls `$request->validated()` and stays thin."
    },
    {
      "text": "Define relationships on models (`hasMany`, `belongsTo`) and eager-load with `::with('comments')` to kill N+1 queries.",
      "explain_dr": "relations (hasMany, belongsTo) + with() = bla N+1 queries.",
      "example": "Post::with('comments')->get(); // eager load: one extra query instead of N",
      "q": "The example uses `Post::with('comments')`. How many queries does fetching 10 posts with their comments take?",
      "a": "Two — one for posts, one for all comments. Eager loading replaces the N+1 lazy queries."
    },
    {
      "text": "The N+1 problem: looping `$posts` and calling `$post->comments` fires one query per post — eager loading fixes it.",
      "explain_dr": "N+1: kol post katlancer query — with('comments') katjme3hom f query w7da.",
      "example": "foreach (Post::all() as $p) $p->comments; // N+1: one query per post!",
      "q": "In the example loop, `Post::all()` returns 50 posts. Roughly how many queries run, and why?",
      "a": "About 51 — one for the posts plus one per post when `$p->comments` lazy-loads. That is the N+1 problem."
    },
    {
      "text": "Local query scopes keep queries reusable: `scopeActive($query)` becomes `Post::active()->get()`.",
      "explain_dr": "scopeActive($query) katwlli Post::active()->get() — query kat3awd tst3ml.",
      "example": "public function scopeActive($query) { return $query->where('active', true); } // Post::active()->get()",
      "q": "What does calling `Post::active()->get()` require on the model?",
      "a": "A local scope method named `scopeActive($query)` on the model — Laravel strips the `scope` prefix and calls it fluently."
    },
    {
      "text": "Use `$casts` on the model (`'price' => 'decimal:2'`) instead of manual conversion in accessors.",
      "explain_dr": "$casts kat7wwel types rasha — bla ma tkteb accessors.",
      "example": "protected $casts = ['price' => 'decimal:2', 'meta' => 'array']; // automatic type casting",
      "q": "The example casts `price` to `decimal:2`. What does Eloquent do when you read `$post->price`?",
      "a": "It automatically converts the raw value to a decimal with 2 places — no manual conversion in accessors needed."
    },
    {
      "text": "Model events and observers (`Post::observe(PostObserver::class)`) centralize logic like cache invalidation.",
      "explain_dr": "observers katjm3o logic li kayt3awd (b7al cache invalidation) f blasa w7da.",
      "example": "Post::observe(PostObserver::class); // register in AppServiceProvider::boot()",
      "q": "Where do you register `Post::observe(PostObserver::class)`, and why use an observer at all?",
      "a": "In `AppServiceProvider::boot()`. Observers centralize model-event logic (like cache invalidation) instead of scattering it."
    },
    {
      "text": "Push slow work (emails, image processing) to jobs: `SendReport::dispatch()` and run `php artisan queue:work`.",
      "explain_dr": "l khdma t9ila (emails) df3ha l jobs — queue:work kaykhdmhom f background.",
      "example": "SendReport::dispatch($user); // job runs via: php artisan queue:work",
      "q": "What happens when you call `SendReport::dispatch($user)` — does the email send immediately?",
      "a": "No — it is pushed onto the queue; a worker running `php artisan queue:work` picks it up and processes it asynchronously."
    },
    {
      "text": "Authorize with policies and gates — `$this->authorize('update', $post)` — instead of `if` checks scattered in controllers.",
      "explain_dr": "authorization dirha b policies — $this->authorize('update', $post) — machi if f kol blasa.",
      "example": "$this->authorize('update', $post); // policies beat scattered if-checks",
      "q": "Why is `$this->authorize('update', $post)` better than `if ($post->user_id !== auth()->id())` in the controller?",
      "a": "It centralizes the rule in a policy/gate, so authorization logic is not duplicated as scattered if-checks."
    },
    {
      "text": "API Resources (`PostResource`) transform models into consistent JSON shapes for your frontend.",
      "explain_dr": "API Resources kat7dd chkel JSON li katrje3 l frontend — consistent.",
      "example": "return PostResource::collection($posts); // consistent JSON shape for the frontend",
      "q": "What does `PostResource::collection($posts)` return to the frontend?",
      "a": "A consistently shaped JSON array — resources transform models so every consumer gets the same structure."
    },
    {
      "text": "Guard against mass assignment: define `$fillable` (or `$guarded`) or `Post::create($request->all())` throws.",
      "explain_dr": "$fillable wlla $guarded khasshom ykono — sinon mass assignment khatar.",
      "example": "protected $fillable = ['title', 'body']; // mass-assignment guard",
      "q": "What happens if you call `Post::create($request->all())` without defining `$fillable`?",
      "a": "It throws a MassAssignmentException — you must whitelist fillable fields (or set `$guarded`) to guard mass assignment."
    },
    {
      "text": "Soft deletes (`use SoftDeletes`) keep a `deleted_at` timestamp — `withTrashed()` and `restore()` bring records back.",
      "explain_dr": "SoftDeletes: record ma kaytms7ch b s7, ghir deleted_at — w restore kayrje3o.",
      "example": "Post::withTrashed()->find(1)->restore(); // soft deletes keep deleted_at",
      "q": "After deleting a post that uses `SoftDeletes`, how do you list it again and bring it back?",
      "a": "Query with `Post::withTrashed()` and call `->restore()` — the row was never removed, only timestamped `deleted_at`."
    },
    {
      "text": "In production, run `php artisan config:cache` and never call `env()` outside config files — it returns null after caching.",
      "explain_dr": "f prod dir config:cache, w mn b3d env() ma khddamach barra config files.",
      "example": "config('services.stripe.key'); // never env() outside config files in production",
      "q": "In production with a cached config, what does `env('STRIPE_KEY')` return when called from a controller?",
      "a": "`null` — after `config:cache`, `env()` only works inside config files; controllers must use `config('services.stripe.key')`."
    },
    {
      "text": "Throttle public endpoints with the `throttle:60,1` middleware to stop abuse of login and register routes.",
      "explain_dr": "throttle:60,1 kay7dd ch7al mn request — 7imaya mn spam f login.",
      "example": "Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:60,1');",
      "q": "What does `throttle:60,1` on the login route allow?",
      "a": "60 requests per minute per client — it rate-limits the public login endpoint against abuse and brute force."
    },
    {
      "text": "Seed realistic dev data with factories and seeders (`php artisan db:seed`) instead of hand-inserting rows.",
      "explain_dr": "factories + seeders kaygeneriw data wa9i3iya l dev — bla insert ydawi.",
      "example": "Post::factory()->count(10)->create(); // seeders + factories for dev data",
      "q": "What does `Post::factory()->count(10)->create()` do, and why prefer it over hand-inserted rows?",
      "a": "It creates 10 realistic posts via factories — faster than manual inserts and reproducible for every developer via `db:seed`."
    }
  ],
  "Php": [
    {
      "text": "PHP is a server-side scripting language; every statement ends with a semicolon.",
      "explain_dr": "PHP lougha dyal serveur — kol instruction katsali b ;.",
      "example": "<?php echo 'Hello'; $x = 5; // every statement ends with ;",
      "q": "What is missing at the end of `echo 'Hello'` that PHP requires?",
      "a": "The semicolon — every PHP statement must end with `;`."
    },
    {
      "text": "Variables start with `$`: `$name = \"Aymane\";` — they are loosely typed by default.",
      "explain_dr": "variables kaybda b $ — loosely typed, ma khassch déclaration.",
      "example": "$name = \"Aymane\"; // variables start with $, loosely typed",
      "q": "What does `$name = \"Aymane\";` tell you about how PHP variables are declared?",
      "a": "Variables start with `$` and need no type declaration — the type is inferred from the value."
    },
    {
      "text": "`echo` outputs strings; use `.` to concatenate: `echo \"Hello \" . $name;`.",
      "explain_dr": "echo katprinti, w . katjme3 strings.",
      "example": "echo \"Hello \" . $name; // . concatenates strings",
      "q": "What does `echo \"Hello \" . $name;` output if `$name` is `\"Aymane\"`?",
      "a": "`Hello Aymane` — the `.` operator concatenates strings."
    },
    {
      "text": "Arrays: indexed `$arr = [1, 2, 3];` and associative `$user = [\"name\" => \"Aymane\"];`.",
      "explain_dr": "arrays: [1,2,3] w associative [\"name\" => \"Aymane\"].",
      "example": "$arr = [1, 2, 3]; $user = [\"name\" => \"Aymane\"]; // indexed + associative arrays",
      "q": "What is the difference between `$arr = [1, 2, 3]` and `$user = [\"name\" => \"Aymane\"]`?",
      "a": "The first is an indexed array (numeric keys); the second is an associative array (string keys mapping to values)."
    },
    {
      "text": "Strict comparison uses `===`; loose `==` coerces types and can surprise you.",
      "explain_dr": "=== stricte, == kat7wwel types — t7dder!",
      "example": "var_dump(\"1\" == 1);  // true (coerced)\nvar_dump(\"1\" === 1); // false (strict)",
      "q": "What do `var_dump(\"1\" == 1)` and `var_dump(\"1\" === 1)` each print?",
      "a": "`bool(true)` for `==` (type coercion) and `bool(false)` for `===` (strict: string and int differ)."
    },
    {
      "text": "Superglobals: `$_GET`, `$_POST`, `$_SERVER`, and `$_SESSION` give access to request data and the server.",
      "explain_dr": "$_GET, $_POST, $_SESSION... fihom data dyal request.",
      "example": "$page = $_GET['page']; $method = $_SERVER['REQUEST_METHOD']; // superglobals",
      "q": "Which superglobal holds the `?page=2` value, and which one tells you the HTTP method?",
      "a": "`$_GET['page']` holds the query value; `$_SERVER['REQUEST_METHOD']` tells you the method."
    },
    {
      "text": "Functions declare parameter types and return types: `function add(int $a, int $b): int { return $a + $b; }`.",
      "explain_dr": "functions b types: function add(int $a, int $b): int.",
      "example": "function add(int $a, int $b): int { return $a + $b; } // typed params + return",
      "q": "What happens if you call `add(\"1\", \"2\")` on `function add(int $a, int $b): int` without strict types?",
      "a": "It returns `3` — PHP coerces the numeric strings to ints (without `declare(strict_types=1)`, scalar hints coerce)."
    },
    {
      "text": "Namespaces (`namespace App\\Models;`) prevent class-name collisions; autoloading follows PSR-4.",
      "explain_dr": "namespaces kaymn3o collision d smiyat classes; autoload PSR-4.",
      "example": "namespace App\\Models; // avoid class-name collisions (PSR-4 autoloading)",
      "q": "Two libraries both define a `User` class. What PHP feature from the example prevents the collision?",
      "a": "Namespaces (`namespace App\\\\Models;`) — each class lives in its own namespace so identical names do not clash."
    },
    {
      "text": "Composer (`composer install`) manages dependencies, recorded in `composer.json`.",
      "explain_dr": "composer install kaynzzel dependencies mn composer.json.",
      "example": "composer require stripe/stripe-php // dependencies go in composer.json",
      "q": "After running `composer require stripe/stripe-php`, where is the dependency recorded?",
      "a": "In `composer.json` — Composer manages dependencies and records them there."
    },
    {
      "text": "`htmlspecialchars()` escapes output to prevent XSS when printing user input.",
      "explain_dr": "htmlspecialchars katescape output — anti-XSS.",
      "example": "echo htmlspecialchars($input, ENT_QUOTES, 'UTF-8'); // escape output: XSS-safe",
      "q": "Why is `echo $input` dangerous but `echo htmlspecialchars($input, ENT_QUOTES, 'UTF-8')` safe?",
      "a": "Raw echo prints user input as-is, letting an injected `<script>` run (XSS); `htmlspecialchars()` escapes it so it renders as harmless text."
    },
    {
      "text": "Use `??` for null-safe defaults (`$name = $_GET['name'] ?? 'guest';`) — it checks `isset()` without a notice.",
      "explain_dr": "?? kat3ti default bla notice — a7san mn isset b yddik.",
      "example": "$name = $_GET['name'] ?? 'guest'; // null-safe default, no notice",
      "q": "What is `$name` when `$_GET['name']` is not set in the example?",
      "a": "`'guest'` — `??` falls back to the default without triggering an 'undefined index' notice."
    },
    {
      "text": "`match` is stricter than `switch`: it uses `===` comparison and returns a value — no `break` needed.",
      "explain_dr": "match stricte (===) w katrje3 valeur — bla break.",
      "example": "$type = match($day) { 'Sat', 'Sun' => 'weekend', default => 'workday' }; // strict ===, returns a value",
      "q": "With `$day = \"Sun\"`, what does the `match` example assign to `$type`?",
      "a": "`'weekend'` — `match` compares strictly (`===`) and returns the matched arm's value with no `break` needed."
    },
    {
      "text": "Arrow functions `fn($x) => $x * 2` auto-capture surrounding variables by value — shorter than `function () use ($x)`.",
      "explain_dr": "fn($x) => ... katcapture variables rasha — 9sira.",
      "example": "$double = fn($x) => $x * 2; // arrow fn auto-captures by value",
      "q": "If `$x = 10` outside and you run `$double = fn($x) => $x * 2;`, does the arrow function change the outer `$x`? Why?",
      "a": "No — arrow functions auto-capture surrounding variables by value, and `$x` here is the function's parameter, so the outer `$x` is untouched."
    },
    {
      "text": "Type juggling traps: `\"0\" == false` is `true`, and `\"10abc\" + 5` equals `15` — prefer `===`.",
      "explain_dr": "\"0\" == false = true! type juggling khatar — st3ml ===.",
      "example": "var_dump(\"0\" == false); // true! type juggling — use ===",
      "q": "What does `var_dump(\"0\" == false)` print, and why is it a trap?",
      "a": "`bool(true)` — loose `==` coerces `\"0\"` to `false`. That is why strict `===` is preferred."
    },
    {
      "text": "`declare(strict_types=1);` at the top of a file makes scalar type hints reject wrong types instead of coercing.",
      "explain_dr": "strict_types=1 kayj3l types strictin — ma kay7wwlch.",
      "example": "declare(strict_types=1); // first line: type hints reject wrong types",
      "q": "What does `declare(strict_types=1);` change about the `add(\"1\", \"2\")` call?",
      "a": "It throws a `TypeError` instead of coercing — scalar type hints reject wrong types under strict mode."
    },
    {
      "text": "Pass arguments by reference with `&$var` when a function must modify the caller's variable.",
      "explain_dr": "&$var: function katbdel variable dyal l caller.",
      "example": "function bump(&$n) { $n++; } bump($count); // by reference: $count changes",
      "q": "After `function bump(&$n) { $n++; } bump($count);` with `$count = 5`, what is `$count`?",
      "a": "`6` — the `&` passes the variable by reference, so the function modifies the caller's `$count`."
    },
    {
      "text": "Catch `Throwable` (not just `Exception`) to also trap engine errors like `TypeError`.",
      "explain_dr": "Throwable katched 7ta engine errors b7al TypeError.",
      "example": "try { risky(); } catch (Throwable $e) { log($e->getMessage()); } // catches TypeError too",
      "q": "Why catch `Throwable` instead of `Exception` in the example?",
      "a": "`Throwable` also traps engine errors like `TypeError` and `DivisionByZeroError`, which do not extend `Exception`."
    },
    {
      "text": "Call `session_start()` before any output — even a stray space — or headers fail with 'headers already sent'.",
      "explain_dr": "session_start() qbl ay output — 7ta espace katdir mochkil.",
      "example": "session_start(); // must run before ANY output",
      "q": "What goes wrong if you `echo` anything before `session_start()`?",
      "a": "PHP fails with 'headers already sent' — sessions set headers, and headers cannot be sent after output."
    },
    {
      "text": "Always use PDO prepared statements (`$stmt->execute([$id])`) — string-interpolated SQL invites injection.",
      "explain_dr": "PDO prepared statements = 7imaya mn SQL injection.",
      "example": "$stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');\n$stmt->execute([$id]); // prepared = injection-safe",
      "q": "How does the prepared-statement example stop SQL injection?",
      "a": "The query and data travel separately: `prepare()` fixes the SQL shape and `execute([$id])` binds the value, so `$id` can never be interpreted as SQL."
    },
    {
      "text": "`require` halts on failure (fatal error); `include` only warns and continues — use `require` for essential files.",
      "explain_dr": "require katw9ef kolchi; include ghir warning — require l fichiers mohimin.",
      "example": "require 'config.php'; // halts on failure; include only warns",
      "q": "Your `config.php` is missing. How does `require 'config.php'` behave differently from `include 'config.php'`?",
      "a": "`require` halts with a fatal error; `include` only emits a warning and continues."
    },
    {
      "text": "`self::` binds to the defining class, `static::` to the called class — late static binding matters in inheritance.",
      "explain_dr": "self:: = defining class, static:: = called class — late static binding.",
      "example": "public static function who() { return static::class; } // static:: = late static binding",
      "q": "In a child class that overrides nothing, what does `static::class` return inside the inherited `who()` method?",
      "a": "The child's class name — `static::` uses late static binding (the called class), while `self::` would return the parent."
    },
    {
      "text": "Interfaces declare a contract with no implementation; abstract classes can hold shared logic plus abstract methods.",
      "explain_dr": "interface = contrat bla implémentation; abstract = logic partagée.",
      "example": "interface Loggable { public function log(string $msg): void; } // contract, no implementation",
      "q": "When would you pick an interface over an abstract class, per the example?",
      "a": "Use an interface when you only need a contract with no implementation; abstract classes are for shared logic plus abstract methods."
    },
    {
      "text": "`$count ??= 0;` assigns only when the variable is null or undefined — shorthand for `$count = $count ?? 0;`.",
      "explain_dr": "$count ??= 0 katassigni ghir ila null — raccourci.",
      "example": "$count ??= 0; // assign only when null or undefined",
      "q": "After `$count ??= 0;` runs twice — first with `$count = null`, then with `$count = 7` — what is `$count`?",
      "a": "First it becomes `0` (null gets assigned), then it stays `7` — `??=` only assigns when the value is null or undefined."
    },
    {
      "text": "Heredoc (`<<<HTML`) interpolates variables; nowdoc (`<<<'HTML'`) does not — pick by need.",
      "explain_dr": "heredoc kayinterpoli, nowdoc la — khtar 7sab l 7aja.",
      "example": "$html = <<<HTML\n<p>$name</p>\nHTML; // heredoc interpolates; <<<'HTML' (nowdoc) does not",
      "q": "In the heredoc example, what does `<p>$name</p>` render as when `$name = \"Aymane\"`? How would nowdoc differ?",
      "a": "It renders `<p>Aymane</p>` — heredoc interpolates variables. Nowdoc (`<<<'HTML'`) would print the literal `$name`."
    },
    {
      "text": "Validate input with `filter_var($email, FILTER_VALIDATE_EMAIL)` instead of hand-rolled regex.",
      "explain_dr": "filter_var l validation dyal email — bla regex ydawiya.",
      "example": "if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { /* invalid email */ }",
      "q": "Why prefer `filter_var($email, FILTER_VALIDATE_EMAIL)` over a hand-rolled regex?",
      "a": "It is a maintained, well-tested validator — hand-rolled email regexes are error-prone and easy to get wrong."
    }
  ],"Sql": [
    {
      "text": "SQL is the language for querying and managing relational databases.",
      "explain_dr": "SQL hiya logha li biha katkteb les requêtes dyal les bases de données relationnelles b7al MySQL w PostgreSQL.",
      "example": "SELECT id, name FROM users WHERE age >= 18 ORDER BY created_at DESC;",
      "q": "In the example, which users are returned and in what order?",
      "a": "Only users aged 18 or more, showing just id and name, with the most recently created users first."
    },
    {
      "text": "Core commands: `SELECT`, `INSERT`, `UPDATE`, `DELETE`, plus `CREATE TABLE` for schema.",
      "explain_dr": "Commandes assasiya: SELECT bach tjbed data, INSERT tzid, UPDATE tbeddel, DELETE t7eyyed, CREATE TABLE bach tsna3 table jdida.",
      "example": "INSERT INTO products (name, price) VALUES ('Keyboard', 49.99);\nUPDATE products SET price = 39.99 WHERE name = 'Keyboard';\nDELETE FROM products WHERE stock = 0;\nCREATE TABLE products (id INT PRIMARY KEY, name VARCHAR(100), price DECIMAL(10,2), stock INT);",
      "q": "In the example, what happens to the product named 'Keyboard' across the three statements, and what columns does the created table have?",
      "a": "It is inserted with price 49.99, then updated to 39.99; the delete only removes products with stock = 0, so Keyboard stays. The table has id, name, price, stock."
    },
    {
      "text": "Filter rows with `WHERE`: `SELECT * FROM users WHERE age >= 18;`.",
      "explain_dr": "WHERE hiya li kat7edded ina lignes ghatjbed, b7al filter: WHERE age >= 18 katjbed ghir li 3andhom 18 w lfo9.",
      "example": "SELECT name, email FROM users WHERE age >= 18 AND city = 'Tangier';",
      "q": "Which rows does the example query return?",
      "a": "Users aged 18 or older AND living in Tangier — only the name and email columns."
    },
    {
      "text": "`JOIN` combines tables on a relationship: `SELECT * FROM orders JOIN users ON orders.user_id = users.id;`.",
      "explain_dr": "JOIN katjme3 joj tables 3la asas 3ala9a binathom, b7al orders.user_id = users.id.",
      "example": "SELECT orders.id, users.name, orders.total FROM orders JOIN users ON orders.user_id = users.id;",
      "q": "What does each row of the example's result represent?",
      "a": "One order joined with its buyer: the order id, the user's name, and the order total — only orders whose user_id matches a row in users."
    },
    {
      "text": "Aggregate with `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()`; group results with `GROUP BY`.",
      "explain_dr": "COUNT/SUM/AVG fonctions d'agrégation, w GROUP BY katjm3ehom 7sab chi colonne, b7al total dyal les commandes lkol user.",
      "example": "SELECT city, COUNT(*) AS total FROM users GROUP BY city;",
      "q": "What does the example query return?",
      "a": "One row per city with the number of users in that city (as 'total')."
    },
    {
      "text": "Filter grouped results with `HAVING` (runs after `GROUP BY`), not `WHERE`.",
      "explain_dr": "WHERE katfiltrer 9bel GROUP BY, w HAVING katfiltrer moraha 3la nataij l'agrégation.",
      "example": "SELECT city, COUNT(*) AS total FROM users GROUP BY city HAVING COUNT(*) > 10;",
      "q": "How does the example differ from using WHERE, and what does it return?",
      "a": "HAVING filters after grouping, so it returns only cities with more than 10 users; WHERE cannot filter on COUNT(*)."
    },
    {
      "text": "Primary keys uniquely identify rows; foreign keys link rows across tables.",
      "explain_dr": "Primary key: identifiant wa7id lkol ligne (mayt3awdch). Foreign key: katrbt table b table khra.",
      "example": "CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(100));\nCREATE TABLE orders (id INT PRIMARY KEY, user_id INT, FOREIGN KEY (user_id) REFERENCES users(id));",
      "q": "In the example, what does the FOREIGN KEY on orders.user_id guarantee?",
      "a": "Every order's user_id must match an existing users.id — you cannot create an order for a nonexistent user."
    },
    {
      "text": "Indexes speed up reads on filtered/joined columns but slow down writes slightly.",
      "explain_dr": "Index kayserre3 l9ira2a 3la les colonnes li kat7et f WHERE w JOIN, walakin katbette2 chwiya lkitaba (INSERT/UPDATE).",
      "example": "CREATE INDEX idx_users_city ON users (city); -- speeds up WHERE city = ...",
      "q": "What does the example's index speed up, and what is the trade-off?",
      "a": "It speeds up queries filtering on city (WHERE city = ...), at the cost of slightly slower inserts and updates on that column."
    },
    {
      "text": "SQL vs NoSQL: SQL enforces a fixed schema and relations with joins; NoSQL (e.g. MongoDB) stores flexible documents and scales horizontally more easily.",
      "explain_dr": "SQL: schema fixe + relations + joins; NoSQL b7al MongoDB: documents flexibles w kaytzad horizontalement bsahla.",
      "example": "-- SQL enforces a fixed schema, then joins tables on relations.\nSELECT * FROM orders JOIN users ON orders.user_id = users.id WHERE orders.status = 'paid';",
      "q": "Why would the example query be harder to write in a document database like MongoDB?",
      "a": "It joins two related tables (orders + users); MongoDB stores denormalized documents, so this kind of relational join needs $lookup or a different schema design."
    },
    {
      "text": "Always use parameterized queries or an ORM to prevent SQL injection — never concatenate user input into SQL strings.",
      "explain_dr": "SQL injection: matkhletech input dyal l'utilisateur m3a string SQL — st3mel requêtes paramétrées wla ORM dima.",
      "example": "SELECT * FROM users WHERE email = ?; -- placeholder, driver fills it safely\n-- never: \"SELECT * FROM users WHERE email = '\" + email + \"'\"",
      "q": "In the example, why is the `?` placeholder version safe while the string-concatenated version is not?",
      "a": "The placeholder keeps user input as data — the driver escapes it — while concatenation lets an attacker inject SQL code that runs as part of the query."
    },
    {
      "text": "`INNER JOIN` vs `LEFT JOIN`: INNER keeps only matching rows, LEFT keeps all rows from the left table with NULLs where there is no match — a classic interview trap.",
      "explain_dr": "INNER JOIN ghir li kaynin f joj tables; LEFT JOIN kayjbed kolchi mn left table w NULL fin makaynch match — f les entretiens kaysewlouha bzf.",
      "example": "SELECT o.id FROM orders o INNER JOIN payments p ON p.order_id = o.id; -- only orders with a payment\nSELECT u.name FROM users u LEFT JOIN payments p ON p.user_id = u.id; -- all users, NULL payment if none",
      "q": "What is the difference between the two queries in the example?",
      "a": "The INNER JOIN returns only orders that have a payment; the LEFT JOIN returns every user, with NULL payment columns for users who have none."
    },
    {
      "text": "`NULL` never equals `NULL`: use `IS NULL` / `IS NOT NULL` in filters, since `NULL` comparisons evaluate to unknown.",
      "explain_dr": "NULL makayssawich NULL! St3mel IS NULL machi = NULL, 7it la comparaison m3a NULL kat3ti \"unknown\".",
      "example": "SELECT * FROM users WHERE phone IS NULL; -- never: WHERE phone = NULL",
      "q": "Why does the example use `IS NULL` instead of `= NULL`?",
      "a": "NULL never equals anything, not even NULL — `= NULL` evaluates to unknown and matches nothing, so you must use IS NULL."
    },
    {
      "text": "`GROUP BY` requires every non-aggregated column in the `SELECT` to appear in it, or the query fails (MySQL's `only_full_group_by`).",
      "explain_dr": "Ila st3melti GROUP BY, ay colonne f SELECT li machi agrégée khassha tkon f GROUP BY, wla l'query ghatfchel.",
      "example": "SELECT city, COUNT(*) AS total FROM users GROUP BY city; -- city is in GROUP BY, OK",
      "q": "In the example, why must `city` appear in the GROUP BY clause?",
      "a": "city is not aggregated, so under only_full_group_by MySQL requires every non-aggregated SELECT column to be in GROUP BY — otherwise the query errors."
    },
    {
      "text": "Window functions like `ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC)` rank rows without collapsing them like `GROUP BY` does.",
      "explain_dr": "Window functions b7al ROW_NUMBER() katretteb les lignes bla matjm3hom — 7asla 3la ranks w positions f nafs la requête.",
      "example": "SELECT name, ROW_NUMBER() OVER (PARTITION BY city ORDER BY created_at DESC) AS rn FROM users;",
      "q": "What does the example compute for each user, and how is that different from GROUP BY?",
      "a": "A row number ranking users within their city by creation date — unlike GROUP BY, it keeps every row instead of collapsing them into one per city."
    },
    {
      "text": "`UNION` stacks result sets and removes duplicates; `UNION ALL` keeps duplicates and is faster — know which one you need.",
      "explain_dr": "UNION katjm3 nataij w t7eyyed doublons, UNION ALL kat7fedhoum w hiya asra3 — khtar 3la 7sab li bghiti.",
      "example": "SELECT email FROM staff UNION SELECT email FROM customers; -- dedupes\nSELECT email FROM staff UNION ALL SELECT email FROM customers; -- keeps dupes, faster",
      "q": "What is the difference between the two example queries?",
      "a": "UNION removes duplicate emails across both tables; UNION ALL keeps duplicates and runs faster because it skips the dedupe step."
    },
    {
      "text": "Transactions (`BEGIN; ... COMMIT;` / `ROLLBACK;`) make multiple statements atomic: either all apply or none do.",
      "explain_dr": "Transaction: ya kolchi kaytnfed (COMMIT) ya walo (ROLLBACK) — mohima f les opérations li khasshom ykounou kamlin b7al transfert flous.",
      "example": "BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT; -- or ROLLBACK; to cancel",
      "q": "If the second UPDATE in the example fails after the first one ran, what happens and why?",
      "a": "ROLLBACK undoes the first UPDATE too — all statements in the transaction apply together or not at all (atomicity)."
    },
    {
      "text": "`ON DELETE CASCADE` auto-deletes child rows when a parent row is deleted — handy, but it can wipe data silently, so use it deliberately.",
      "explain_dr": "ON DELETE CASCADE kat7eyyed les lignes dyal lwlidat automatiquement mlli kat7eyyed lparent — zwina walakin khatar 7it katm7i data b sehha.",
      "example": "CREATE TABLE comments (id INT PRIMARY KEY, post_id INT, FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE);",
      "q": "What happens to the comments table if a post row is deleted in the example?",
      "a": "All comments with that post_id are deleted automatically — convenient but dangerous, since the data disappears silently."
    },
    {
      "text": "N+1 query problem: fetching a list then one query per item kills performance — fix it with a single `JOIN` or eager loading in your ORM.",
      "explain_dr": "N+1: katjbed lista w moraha query lkol wa7ed — bottleneck kbir; l7al: JOIN wa7ed wla eager loading f ORM.",
      "example": "-- one query instead of N+1:\nSELECT p.title, c.body FROM posts p JOIN comments c ON c.post_id = p.id WHERE p.id = 7;",
      "q": "How does the example's single JOIN query fix the N+1 problem?",
      "a": "Instead of one query for post 7 plus one query per comment, it fetches post titles and comment bodies in one JOINed query."
    },
    {
      "text": "A composite index `(last_name, first_name)` serves queries filtering on `last_name` or both, but not `first_name` alone — the leftmost-prefix rule.",
      "explain_dr": "Index composite (a, b): kaykhdm 3la a wla (a+b), walakin machi 3la b bo7dha — hadi hiya la règle dyal \"leftmost prefix\".",
      "example": "CREATE INDEX idx_name ON users (last_name, first_name); -- serves last_name, and both -- never first_name alone",
      "q": "For the index in the example, which WHERE clauses can use it and which cannot?",
      "a": "Filters on last_name, or on last_name + first_name, can use it; a filter on first_name alone cannot (leftmost-prefix rule)."
    },
    {
      "text": "Subqueries vs CTEs: `WITH active AS (SELECT ...)` makes complex queries readable and reusable inside the same statement.",
      "explain_dr": "CTE b7al WITH active AS (...) katkhlli les requêtes lme3e99da wadh7a w kat3awd tst3melhom f nafs la requête.",
      "example": "WITH active AS (\n  SELECT id FROM users WHERE last_login > NOW() - INTERVAL '30 days'\n)\nSELECT * FROM orders WHERE user_id IN (SELECT id FROM active);",
      "q": "What does the WITH clause in the example do?",
      "a": "It defines a named temporary result set 'active' (users who logged in within 30 days) that the main query then uses in an IN subquery — more readable than a nested subquery."
    },
    {
      "text": "`LIKE '%text%'` cannot use a normal B-tree index (a leading wildcard forces a scan) — for real text search use `FULLTEXT` or a search engine.",
      "explain_dr": "LIKE '%text%' mayst3melch index 3adi 7it % f lwel katjber 3la scan kaml — l full text search st3mel FULLTEXT wla moteur b7al Elasticsearch.",
      "example": "SELECT * FROM products WHERE name LIKE '%phon%'; -- leading wildcard = full scan; use FULLTEXT for real search",
      "q": "Why is the example query slow even with an index on name?",
      "a": "The leading % wildcard forces a full table scan because a B-tree index cannot be used; real text search needs a FULLTEXT index or a search engine."
    },
    {
      "text": "`EXPLAIN` before slow queries shows the execution plan — look for full table scans (`type: ALL`) as the usual culprit.",
      "explain_dr": "EXPLAIN kaywrik kifach l'base de données ghate9ra l'query — ila chefti ALL (full table scan), lmochkil tma.",
      "example": "EXPLAIN SELECT * FROM orders WHERE user_id = 7; -- check for full table scan (type: ALL)",
      "q": "What does the example command tell you, and what value would confirm a performance problem?",
      "a": "It shows the query's execution plan; `type: ALL` means a full table scan — the usual suspect for a slow query."
    },
    {
      "text": "Constraints (`NOT NULL`, `UNIQUE`, `CHECK`, `DEFAULT`) enforce data integrity at the database level, not just in app code.",
      "explain_dr": "Contraintes (NOT NULL, UNIQUE, CHECK, DEFAULT): l'base hiya li kat7mi data machi ghir code dyalk.",
      "example": "CREATE TABLE users (\n  id INT PRIMARY KEY,\n  email VARCHAR(255) NOT NULL UNIQUE,\n  age INT CHECK (age >= 0),\n  role VARCHAR(20) DEFAULT 'user'\n);",
      "q": "In the example, what does each constraint on the users table enforce?",
      "a": "email must always be present and unique, age cannot be negative, role defaults to 'user' when not provided — enforced by the database, not just app code."
    },
    {
      "text": "`SELECT ... FOR UPDATE` locks selected rows inside a transaction, preventing race conditions like double-spending a balance.",
      "explain_dr": "SELECT ... FOR UPDATE kayverrouiller les lignes f transaction — kaymna3 doublon b7al matssrefch nafs sold joj marat f nafs lwa9t.",
      "example": "BEGIN;\nSELECT balance FROM accounts WHERE id = 1 FOR UPDATE; -- locks the row\nUPDATE accounts SET balance = balance - 50 WHERE id = 1;\nCOMMIT;",
      "q": "What does the FOR UPDATE clause add to the example transaction?",
      "a": "It locks account row 1 until COMMIT, so no other transaction can modify it concurrently — preventing double-spending race conditions."
    },
    {
      "text": "Beware `UPDATE`/`DELETE` without `WHERE` — it hits every row; run a `SELECT` with the same `WHERE` first as a safety check.",
      "explain_dr": "UPDATE/DELETE bla WHERE katbeddel/k7eyyed KOL les lignes! Dima jerreb b SELECT 9bel.",
      "example": "SELECT * FROM users WHERE email = 'admin@example.com'; -- verify the WHERE first\n-- then only:\nUPDATE users SET role = 'admin' WHERE email = 'admin@example.com';",
      "q": "What safety habit does the example demonstrate?",
      "a": "Run a SELECT with the same WHERE first to verify it targets only admin@example.com, because an UPDATE without (or with a wrong) WHERE would hit every row."
    }
  ],
  "Mysql": [
    {
      "text": "Stored procedures bundle reusable SQL logic: CREATE PROCEDURE name() BEGIN ... END, run with CALL name();",
      "explain_dr": "Procedure hiya batch dyal SQL code kat-7efdo f database w kat-3yet liha b CALL. Mzyana l logic li kat-t3awed.",
      "example": "DELIMITER //\nCREATE PROCEDURE list_active()\nBEGIN\n  SELECT * FROM users WHERE active = 1;\nEND //\nDELIMITER ;\n\nCALL list_active();",
      "q": "How do you run the procedure, and why the DELIMITER lines?",
      "a": "With CALL list_active();. The DELIMITER lines stop the client from ending the CREATE at the first semicolon inside the body."
    },
    {
      "text": "Stored functions must RETURN a value: CREATE FUNCTION name() RETURNS type BEGIN ... RETURN x; END",
      "explain_dr": "Fonction khasha t-returni valeur b RETURN, w kat-st3ml wast SELECT b7al ay function.",
      "example": "CREATE FUNCTION double_it(x INT) RETURNS INT\nBEGIN\n  RETURN x * 2;\nEND;\n\nSELECT double_it(21); -- 42",
      "q": "What is mandatory in every stored function?",
      "a": "A RETURN statement producing a value of the declared RETURNS type."
    },
    {
      "text": "Cursors walk query results row by row: DECLARE → OPEN → FETCH → CLOSE, with a NOT FOUND handler for the end.",
      "explain_dr": "Curseur kat-mchi 3la resultat ligne b ligne. L ordre: DECLARE, OPEN, FETCH, CLOSE — w handler bach t3ref imta salaw l lignes.",
      "example": "DECLARE done INT DEFAULT 0;\nDECLARE c CURSOR FOR SELECT id FROM users;\nDECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;\nOPEN c;\nread_loop: LOOP\n  FETCH c INTO uid;\n  IF done THEN LEAVE read_loop; END IF;\nEND LOOP;\nCLOSE c;",
      "q": "How do you know when the cursor is finished?",
      "a": "The CONTINUE HANDLER FOR NOT FOUND sets done = 1 when FETCH finds no more rows, and the loop LEAVEs."
    },
    {
      "text": "Triggers fire automatically: BEFORE/AFTER INSERT/UPDATE/DELETE, with NEW (incoming) and OLD (previous) rows.",
      "explain_dr": "Trigger kay-tactiva bo7do mli kat-w93 INSERT/UPDATE/DELETE. NEW = jdid, OLD = 9dim.",
      "example": "CREATE TRIGGER check_qty BEFORE INSERT ON orders\nFOR EACH ROW\nBEGIN\n  IF NEW.qty < 0 THEN\n    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Negative quantity';\n  END IF;\nEND;",
      "q": "Why BEFORE INSERT here and not AFTER?",
      "a": "BEFORE lets you validate and reject the row with SIGNAL before it is written; AFTER would be too late."
    },
    {
      "text": "Transactions group statements atomically: START TRANSACTION ... COMMIT to save, ROLLBACK to undo.",
      "explain_dr": "Transaction = majmou3a dyal operations: ya kolhom y-nj7o ya walo. COMMIT kay-7fed, ROLLBACK kay-rje3.",
      "example": "START TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT; -- or ROLLBACK on error",
      "q": "The second UPDATE fails — what should happen?",
      "a": "ROLLBACK: undo the first UPDATE too, so money is never lost between the two accounts."
    },
    {
      "text": "Control flow inside procedures: IF ... THEN ... END IF, CASE WHEN, and LOOP/WHILE/REPEAT with LEAVE.",
      "explain_dr": "F wast procedures 3ndek IF, CASE, w loops (LOOP, WHILE, REPEAT) — w LEAVE bach t-khrej mn loop.",
      "example": "IF stock > 0 THEN\n  SET msg = 'in stock';\nELSE\n  SET msg = 'out of stock';\nEND IF;",
      "q": "How do you exit a LOOP early?",
      "a": "With LEAVE label; — e.g. my_loop: LOOP ... LEAVE my_loop; ... END LOOP my_loop;"
    },
  ],
  "Postgresql": [
    {
      "text": "psql is the interactive terminal: connect with psql -U user -d db, \\l lists databases, \\dt lists tables, \\d describes a table.",
      "explain_dr": "psql howa CLI: psql -U user -d db l connection. \\l = databases, \\dt = tables, \\d = describe table, \\q = quit.",
      "example": "psql -U shop -d shopdb\nshopdb=> \\dt\nshopdb=> \\d users",
      "q": "How do you list tables and inspect one?",
      "a": "With \\dt to list tables, then \\d users to see its columns, types and indexes."
    },
    {
      "text": "Rich data types: SERIAL (auto-increment via sequence), UUID with gen_random_uuid(), JSONB for documents, native arrays like TEXT[], and TIMESTAMPTZ for time-zone-aware instants.",
      "explain_dr": "SERIAL = auto-increment, UUID l ids uniques, JSONB l documents, TEXT[] arrays, TIMESTAMPTZ dima l wa9t (bla timezone = machakil).",
      "example": "CREATE TABLE events (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  tags TEXT[],\n  payload JSONB,\n  created_at TIMESTAMPTZ DEFAULT now()\n);",
      "q": "Why TIMESTAMPTZ instead of TIMESTAMP?",
      "a": "TIMESTAMPTZ stores a real instant; plain TIMESTAMP is time-zone-naive and causes bugs across zones."
    },
    {
      "text": "RETURNING gives back affected rows without a second query; UPSERT handles conflicts atomically with INSERT ... ON CONFLICT.",
      "explain_dr": "RETURNING kat-rje3 rows li t-2athro (b7al id jdid) bla SELECT moraha. ON CONFLICT = insert wla update ila key kayn — atomic, bla race.",
      "example": "INSERT INTO users (email) VALUES ('a@mail.com')\nON CONFLICT (email) DO UPDATE SET last_seen = now()\nRETURNING id;",
      "q": "What does EXCLUDED mean in DO UPDATE?",
      "a": "The row as it would have been inserted — the proposed new values you can copy into the update."
    },
    {
      "text": "JSONB operators: -> returns JSON, ->> returns text, @> tests containment. Index JSONB with GIN for fast containment queries.",
      "explain_dr": "-> = JSON, ->> = text, @> = wach fiha. GIN index l JSONB bach @> tkhdem b sor3a — B-tree ma kaynfa3ch hna.",
      "example": "CREATE INDEX idx_specs ON products USING GIN (specs);\nSELECT * FROM products WHERE specs @> '{\"color\":\"red\"}';",
      "q": "When is GIN the wrong choice?",
      "a": "For plain equality/range/sort on scalar columns — B-tree is smaller and faster there."
    },
    {
      "text": "CTEs name a subquery with WITH for readability; window functions compute OVER rows without collapsing them like GROUP BY does.",
      "explain_dr": "WITH kat3ti smiya l subquery — readable. Window functions (ROW_NUMBER() OVER...) kat-7esbo 3la rows bla ma tjme3hom b7al GROUP BY.",
      "example": "WITH ranked AS (\n  SELECT *, ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) AS rn\n  FROM staff\n)\nSELECT * FROM ranked WHERE rn = 1;",
      "q": "PARTITION BY vs GROUP BY?",
      "a": "PARTITION BY slices rows inside a window function but keeps all rows; GROUP BY collapses each group to one row."
    },
    {
      "text": "Transactions: default isolation READ COMMITTED; MVCC means writers don't block readers but leave dead tuples — VACUUM reclaims them. Back up with pg_dump + WAL archiving for point-in-time recovery.",
      "explain_dr": "READ COMMITTED default. MVCC: writers ma kay-bloquiwch readers walakin kay-khliw dead tuples → VACUUM kay-nddf. Backup: pg_dump + WAL l PITR.",
      "example": "BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;\n-- backup: pg_dump mydb > backup.sql",
      "q": "UPDATE is slow on a big table full of old rows — what do you check?",
      "a": "Whether autovacuum keeps up: dead tuples bloat the table and slow scans; check pg_stat_user_tables and VACUUM if needed."
    },
  ],
  "MongoDb": [
    {
      "text": "MongoDB is a NoSQL document database storing data as flexible, JSON-like BSON documents.",
      "explain_dr": "MongoDB base NoSQL katstocker documents b7al JSON (BSON) — flexible, bla schema fixe.",
      "example": "db.users.insertOne({ name: \"Sara\", age: 24, city: \"Tangier\" }); -- one flexible BSON document",
      "q": "What does the example store, and what is BSON?",
      "a": "One document with name, age, city in the users collection; BSON is the binary JSON-like format MongoDB stores documents in."
    },
    {
      "text": "Data is organized into databases → collections → documents (roughly tables → rows, but schemaless).",
      "explain_dr": "Database > collection > document — b7al table > ligne, walakin bla schema.",
      "example": "db.users.find({ city: \"Tangier\" }); -- collection = like a table, document = like a row",
      "q": "In the example, what is `users`, and how does it map to SQL?",
      "a": "users is a collection (like a SQL table); each matching document is like a row — but schemaless."
    },
    {
      "text": "A document can nest objects and arrays: `{ name: \"Aymane\", skills: [\"React\", \"Laravel\"] }`.",
      "explain_dr": "Document y9der ykon fih objets w arrays mdakhlhin — b7al { name, skills: [...] }.",
      "example": "db.products.insertOne({\n  name: \"Keyboard\",\n  specs: { layout: \"AZERTY\", wireless: true },\n  tags: [\"gaming\", \"office\"]\n});",
      "q": "What two kinds of nesting does the example demonstrate?",
      "a": "An embedded object (specs: layout, wireless) and an array (tags)."
    },
    {
      "text": "Every document gets a unique `_id` (an `ObjectId`) automatically unless you provide one.",
      "explain_dr": "Kol document 3ando _id unique (ObjectId) kaytzad automatiquement ila madertich wa7ed.",
      "example": "db.orders.insertOne({ total: 99 }); -- _id: ObjectId(\"...\") added automatically",
      "q": "What `_id` does the example document get?",
      "a": "An auto-generated ObjectId, since none was provided — every document gets a unique _id automatically."
    },
    {
      "text": "CRUD via the shell or driver: `db.users.find({ age: { $gte: 18 } })`, `insertOne()`, `updateOne()`, `deleteOne()`.",
      "explain_dr": "CRUD: find() l9ira2a, insertOne() tzid, updateOne() tbeddel, deleteOne() t7eyyed.",
      "example": "db.users.find({ age: { $gte: 18 } });\ndb.users.updateOne({ email: \"sara@ex.com\" }, { $set: { city: \"Rabat\" } });\ndb.users.deleteOne({ email: \"sara@ex.com\" });",
      "q": "What do the three example statements do?",
      "a": "Find all users 18+, set Sara's city to Rabat, then delete Sara's document — matching by email."
    },
    {
      "text": "The aggregation pipeline (`$match`, `$group`, `$sort`) processes data in stages, like SQL's GROUP BY on steroids.",
      "explain_dr": "Aggregation pipeline: $match, $group, $sort — étapes katmchi b tartib, b7al GROUP BY m9ewwa.",
      "example": "db.orders.aggregate([\n  { $match: { status: \"paid\" } },\n  { $group: { _id: \"$city\", total: { $sum: \"$amount\" } } },\n  { $sort: { total: -1 } }\n]);",
      "q": "What do the three pipeline stages in the example do?",
      "a": "$match keeps only paid orders, $group sums amounts per city, $sort orders cities by total descending."
    },
    {
      "text": "Create indexes on frequently queried fields to keep reads fast: `db.users.createIndex({ email: 1 })`.",
      "explain_dr": "Index 3la les champs li kat9elleb 3lihom bzf kayserre3 l9ira2a — b7al index dyal email.",
      "example": "db.users.createIndex({ email: 1 });",
      "q": "What does the example index optimize?",
      "a": "Lookups by email (db.users.find({email: ...})), keeping reads fast."
    },
    {
      "text": "Embed related data for read-heavy access; reference (link) it when the data is large or shared.",
      "explain_dr": "Embed (dekhel) data sghar li kat9rahom dima m3a b3d; reference (link) ila kbar wla mchtarkin.",
      "example": "db.users.insertOne({ name: \"Sara\", address: { city: \"Tangier\", zip: \"90000\" } }); -- embed\n-- or reference: { name: \"Sara\", cityId: ObjectId(\"...\") }",
      "q": "Which approach does each half of the example show, and when would you pick the second?",
      "a": "First embeds the address inside the user document (read-heavy access); the cityId reference is for large or shared data that many documents reuse."
    },
    {
      "text": "Mongoose is the popular Node.js ODM adding schemas, validation, and models on top of MongoDB.",
      "explain_dr": "Mongoose: ODM dyal Node.js kayzid schemas + validation fo9 MongoDB.",
      "example": "const userSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, unique: true }\n});",
      "q": "What does the example schema add on top of raw MongoDB?",
      "a": "Validation and structure: name is required and a String, email must be unique — MongoDB itself is schemaless."
    },
    {
      "text": "MongoDB vs SQL: MongoDB favors flexible schemas and horizontal scaling; SQL favors strict schemas, joins, and complex transactions.",
      "explain_dr": "MongoDB: flexibilité + horizontal scaling; SQL: schema strict + joins + transactions me3e99da.",
      "example": "-- MongoDB: one collection, flexible docs --\ndb.products.find({ category: \"phone\", price: { $lt: 500 } });",
      "q": "What kind of query does the example show, and what does MongoDB skip here compared to SQL?",
      "a": "A filtered find on one collection — no joins, no fixed schema, just flexible documents filtered by fields."
    },
    {
      "text": "`updateOne` only touches the fields inside `$set`: `db.users.updateOne({ _id }, { $set: { name: \"Ali\" } })` — forget `$set` and you replace the whole document.",
      "explain_dr": "updateOne m3a $set katbeddel ghir les champs li 3titih — ila nsiti $set, kat3ewwed ldocument kamel! Attention kbira.",
      "example": "db.users.updateOne({ _id: id }, { $set: { name: \"New\" } }); -- only name changes",
      "q": "What happens if you run the example update WITHOUT $set?",
      "a": "The whole document is replaced by just { name: 'New' } — all other fields are lost. $set limits the update to the named fields."
    },
    {
      "text": "An `ObjectId` embeds a timestamp: `new ObjectId().getTimestamp()` reveals creation time, and sorting by `_id` is roughly chronological.",
      "explain_dr": "ObjectId fih timestamp mdakhel — t9der t3ref w9t lcréation, w tri par _id kay3ti tartib chronologique t9riban.",
      "example": "new ObjectId().getTimestamp(); -- creation time embedded in the id\ndb.posts.find().sort({ _id: -1 }); -- roughly newest first",
      "q": "What do the two example lines demonstrate about ObjectIds?",
      "a": "An ObjectId embeds its creation time (getTimestamp), so sorting by _id descending returns roughly newest-first posts."
    },
    {
      "text": "`$lookup` is MongoDB's JOIN: it pulls documents from another collection into the aggregation pipeline.",
      "explain_dr": "$lookup howa JOIN dyal MongoDB — kayjbed documents mn collection khra f l'agrégation.",
      "example": "db.orders.aggregate([\n  { $lookup: { from: \"users\", localField: \"userId\", foreignField: \"_id\", as: \"user\" } }\n]);",
      "q": "What does the example aggregation stage do?",
      "a": "It joins each order with matching users (userId = _id) and embeds them as a 'user' array — MongoDB's JOIN."
    },
    {
      "text": "`db.orders.find({ $or: [{ age: { $lt: 18 } }, { verified: true }] })` combines conditions across different fields.",
      "explain_dr": "$or katjm3 chorout 3la champs mkhtalfin — ay condition t7e9e9, ldocument kaytjb.",
      "example": "db.users.find({ $or: [{ age: { $lt: 18 } }, { verified: true }] });",
      "q": "Which documents does the example find?",
      "a": "Users under 18 OR verified — the conditions apply across different fields, and matching either one is enough."
    },
    {
      "text": "Multi-document transactions exist (`session.startTransaction()`), but they are slower — design schemas to avoid needing them.",
      "explain_dr": "Transactions multi-documents kaynin walakin bta2 w ghalyin — sennm lschema dyalk bach ttfadhom.",
      "example": "const session = client.startSession();\nsession.startTransaction(); -- slower; prefer schema design that avoids it",
      "q": "Why does the example warn that transactions are slower?",
      "a": "Multi-document transactions add coordination overhead, so you should design schemas (e.g. embedding) to avoid needing them."
    },
    {
      "text": "Replica sets give high availability (automatic failover); sharding splits data across machines for horizontal scale.",
      "explain_dr": "Replica set = haute disponibilité (ila ta7 wa7ed, wa7ed khor kaykml); sharding = t9sim data 3la machines l scale kbir.",
      "example": "-- replica set: automatic failover; sharding: split data across machines",
      "q": "What problem does each solve: replica sets and sharding?",
      "a": "Replica sets provide high availability via automatic failover; sharding splits data across machines for horizontal scaling."
    },
    {
      "text": "The 16MB document limit means never embed unbounded arrays (like thousands of comments) — reference them instead.",
      "explain_dr": "Document mahdoud b 16MB — 3mr ma t-embeddi array bla limite b7al comments, st3mel reference.",
      "example": "db.posts.updateOne({ _id: id }, { $push: { commentIds: commentId } }); -- reference, not embed, unbounded comments",
      "q": "What does the example's $push of commentIds demonstrate?",
      "a": "For unbounded arrays like comments, store references (ids) instead of embedding — embedding thousands of comments could hit the 16MB document limit."
    },
    {
      "text": "TTL indexes auto-delete documents after a time: `db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })` — perfect for sessions and tokens.",
      "explain_dr": "TTL index kay7eyyed documents bo7dha mor wa9t mo3ayan — mitali l sessions w tokens b7al expireAfterSeconds: 3600.",
      "example": "db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });",
      "q": "What does the example index do?",
      "a": "It auto-deletes session documents 3600 seconds after their createdAt time — ideal for sessions and tokens."
    },
    {
      "text": "`explain(\"executionStats\")` shows whether a query used an index (`IXSCAN`) or scanned everything (`COLLSCAN`) — MongoDB's version of SQL's EXPLAIN.",
      "explain_dr": "explain(\"executionStats\"): ila chefti IXSCAN kayst3mel index (mezyan), ila COLLSCAN kayscanni kolchi (khayb).",
      "example": "db.users.find({ email: \"a@b.com\" }).explain(\"executionStats\"); -- check for COLLSCAN",
      "q": "In the example output, what does COLLSCAN vs IXSCAN tell you?",
      "a": "IXSCAN means the query used an index (good); COLLSCAN means it scanned the whole collection (slow) — the same idea as SQL's EXPLAIN."
    },
    {
      "text": "Compound indexes follow the ESR rule: Equality fields first, then Sort, then Range — order matters for performance.",
      "explain_dr": "Index composite: ESR — Égalité lwel, moraha Tri (sort), w lintervalle (range) lkher; tartib mohim bzf.",
      "example": "db.orders.createIndex({ status: 1, createdAt: -1, total: 1 }); -- equality, sort, range",
      "q": "How does the example index follow the ESR rule?",
      "a": "status is the equality field first, createdAt the sort field next, total the range field last — order matters for performance."
    },
    {
      "text": "`upsert: true` inserts when no document matches: `db.users.updateOne({ email }, { $set: {...} }, { upsert: true })`.",
      "explain_dr": "upsert: ila makaynch document kaywaf9 lfilter, kaycreeyeh — mitali l \"create or update\".",
      "example": "db.users.updateOne({ email: \"a@b.com\" }, { $set: { name: \"Sara\" } }, { upsert: true });",
      "q": "What happens if no document matches { email: 'a@b.com' } in the example?",
      "a": "With upsert: true, MongoDB inserts a new document with that email and name 'Sara' instead of updating nothing."
    },
    {
      "text": "`$inc` increments atomically: `db.counters.updateOne({}, { $inc: { visits: 1 } })` — safe under concurrent writes.",
      "explain_dr": "$inc kayzid wa7ed ra9m b tari9a atomique — amin m3a ktaba m3awda f nafs lwa9t (b7al compteur dyal visits).",
      "example": "db.counters.updateOne({ name: \"visits\" }, { $inc: { value: 1 } }); -- atomic",
      "q": "Why is the example safe under concurrent writes?",
      "a": "$inc increments atomically on the server — two simultaneous updates each add 1, so no count is lost."
    },
    {
      "text": "Text search needs a text index first: `db.posts.createIndex({ title: \"text\" })`, then `$text: { $search: \"laravel\" }`.",
      "explain_dr": "Recherche textuelle: khass index text lwel, moraha $text $search — b7al google sghir f lbase.",
      "example": "db.posts.createIndex({ title: \"text\" });\ndb.posts.find({ $text: { $search: \"keyboard\" } });",
      "q": "Why must the example create the index BEFORE running the $text query?",
      "a": "$text search requires a text index to exist; without createIndex({title: 'text'}), the query fails."
    },
    {
      "text": "Aggregation `$project` reshapes output — rename fields, compute new ones, drop the rest — before sending results to the client.",
      "explain_dr": "$project katbeddel chakl natija: katbdel smiyat les champs, kat7seb jdod, w kat7eyyed li mabghitich.",
      "example": "db.users.aggregate([{ $project: { fullName: \"$name\", _id: 0, email: 1 } }]);",
      "q": "What does the example stage output?",
      "a": "Documents reshaped to { fullName, email } — name renamed to fullName, _id excluded, everything else dropped."
    },
    {
      "text": "Denormalize for reads: storing `authorName` on each post avoids a `$lookup` on every list request, at the cost of update complexity.",
      "explain_dr": "Dénormalisation: tkhazn authorName m3a kol post bach ttfada $lookup f kol liste — tmnou: update as3eb.",
      "example": "db.posts.insertOne({ title: \"Hello\", authorName: \"Sara\" }); -- denormalize for reads",
      "q": "What trade-off does the example's authorName illustrate?",
      "a": "Storing authorName on each post avoids a $lookup on every list (fast reads), but renaming the author later means updating many posts."
    }
  ],
  "Git": [
    {
      "text": "Git is a distributed version control system tracking every change to your code.",
      "explain_dr": "Git: système kaytbe3 kol tbadilat code dyalk w kay7fdek mn dya3.",
      "example": "git init -- creates a repo\ngit clone <url> -- copies a remote repo",
      "q": "When would you use `git init` vs `git clone <url>` from the example?",
      "a": "init starts a new local repo from scratch; clone copies an existing remote repo to your machine."
    },
    {
      "text": "Workflow: `git add .` stages changes, `git commit -m \"message\"` saves a snapshot, `git push` uploads it.",
      "explain_dr": "add . = t7edd lchanges, commit = tsjjel snapshot, push = tsift l GitHub.",
      "example": "git add . -- stage all changes\ngit commit -m \"Add login form\" -- commit them",
      "q": "What does each of the three example commands do?",
      "a": "add stages the changes, commit saves a snapshot with a message, push uploads it to the remote."
    },
    {
      "text": "Check status with `git status` and review history with `git log --oneline`.",
      "explain_dr": "git status kaywrik chno tbdel; git log --oneline kaywrik lhistorique b ikhtisar.",
      "example": "git status -- what's changed\ngit log --oneline -- compact history",
      "q": "What is the difference between the two example commands?",
      "a": "status shows current working-tree changes; log --oneline shows the compact commit history."
    },
    {
      "text": "`git pull` fetches and merges remote changes; `git fetch` only downloads them.",
      "explain_dr": "pull = fetch + merge (katjbed w katdmj); fetch ghir katjbed bla madmj.",
      "example": "git pull -- fetch + merge remote changes\ngit fetch -- download only, no merge",
      "q": "What does `git fetch` do that `git pull` also does, and what does it skip?",
      "a": "fetch downloads remote changes; it skips the merge that pull performs — fetch alone changes nothing in your working tree."
    },
    {
      "text": "Branches isolate work: `git checkout -b feature/login` creates and switches to a new branch.",
      "explain_dr": "Branch: khdma m3zoula 3la main; checkout -b katsna3 branch jdida w katmchi liha.",
      "example": "git checkout -b feature/login -- create and switch to a branch",
      "q": "What does `git checkout -b feature/login` do?",
      "a": "Creates the feature/login branch and switches to it, isolating your work from main."
    },
    {
      "text": "Merge with `git merge feature/login`; resolve conflicts by editing the marked sections, then commit.",
      "explain_dr": "merge katdmj branch f l'akhar — conflicts: beddel les sections lmer9ma b yeddik w commit.",
      "example": "git checkout main && git merge feature/login -- merge the branch into main",
      "q": "What does the example command do?",
      "a": "Switches to main, then merges feature/login into it."
    },
    {
      "text": "A merge conflict happens when two branches change the same lines — fix it manually and commit.",
      "explain_dr": "Conflict: joj branches beddlo nafs les lignes — kat7ellou ydawiyan w katcommiti.",
      "example": "-- conflict markers:\n<<<<<<< HEAD\nmy change\n=======\ntheir change\n>>>>>>> feature/login\n-- edit the file, keep what you want, then git add + git commit",
      "q": "In the example, what do the `<<<<<<< HEAD` / `=======` / `>>>>>>>` markers mean?",
      "a": "They mark the conflicting section: HEAD's version above =======, the branch's version below — you edit to keep what you want, then add and commit."
    },
    {
      "text": "Write clear commit messages in the imperative: `\"Add login validation\"`, not `\"added stuff\"`.",
      "explain_dr": "Messages dyal commit wad7in b l'impératif: \"Add login validation\" machi \"added stuff\".",
      "example": "git commit -m \"Fix login validation\" -- imperative, like a command",
      "q": "Why is the example message better than 'added stuff'?",
      "a": "It is imperative and specific ('Fix login validation'), so the history reads like a list of commands describing what each commit does."
    },
    {
      "text": "Never commit secrets, `.env` files, or `node_modules` — use a `.gitignore` file.",
      "explain_dr": "Secrets, .env, w node_modules 3mr ma tcommitihom — dirhom f .gitignore.",
      "example": "cat .gitignore -- add:\n.env\nnode_modules/\n*.log",
      "q": "What does the example .gitignore prevent?",
      "a": "It stops .env files, node_modules/, and *.log files from ever being committed — secrets and noise stay out of the repo."
    },
    {
      "text": "`git stash` temporarily shelves uncommitted changes so you can switch branches cleanly.",
      "explain_dr": "stash kaykhbbi changes li mazal matcommitatch bach tbeddel branch n9iya.",
      "example": "git stash -- shelve changes\ngit stash pop -- restore them",
      "q": "In the example, when would you stash, and what does `git stash pop` do?",
      "a": "Stash shelves uncommitted changes so you can switch branches cleanly; pop restores them back into your working tree."
    },
    {
      "text": "`git rebase main` replays your commits on top of `main` for a linear history — but never rebase commits already pushed to a shared branch.",
      "explain_dr": "rebase kayj3el lhistorique khatt wa7ed n9i — walakin 3mr ma trebase chi commit li deja tpushit l branch mchtarka.",
      "example": "git checkout feature/login && git rebase main -- linear history\n-- never rebase commits already pushed to a shared branch",
      "q": "What does the example rebase do, and what is the warning?",
      "a": "It replays feature/login's commits on top of main for a linear history — but never rebase commits already pushed to a shared branch, or you rewrite teammates' history."
    },
    {
      "text": "`git reset --soft HEAD~1` undoes the last commit but keeps your changes staged; `--hard` discards them completely — know the difference before you type it.",
      "explain_dr": "reset --soft kayrjj3 commit bla maym7i khdmtk; --hard kaym7i kolchi — fhm lfar9 9bel matktebha.",
      "example": "git reset --soft HEAD~1 -- undo commit, keep changes staged\ngit reset --hard HEAD~1 -- undo commit, discard changes",
      "q": "What is the difference between the two example resets?",
      "a": "--soft undoes the commit but keeps the changes staged; --hard discards the changes completely. --hard is destructive."
    },
    {
      "text": "`git cherry-pick <hash>` applies a single commit from another branch onto the current one.",
      "explain_dr": "cherry-pick: katjbed commit wa7ed mn branch khra l branch li nta fiha.",
      "example": "git cherry-pick a1b2c3d -- apply that one commit here",
      "q": "What does the example do?",
      "a": "Applies only commit a1b2c3d from another branch onto your current branch, without merging the whole branch."
    },
    {
      "text": "`git reflog` records every HEAD movement — your rescue tool when you think a commit is lost forever.",
      "explain_dr": "reflog kayssjjel kol 7araka dyal HEAD — howa li kayn9dk ila d7enti chi commit dda3.",
      "example": "git reflog -- every HEAD movement; find the lost hash, then git checkout -b rescue <hash>",
      "q": "How does the example recover a 'lost' commit?",
      "a": "reflog lists every HEAD movement, so you can find the lost commit's hash and create a branch from it."
    },
    {
      "text": "Fast-forward vs merge commit: `git merge --no-ff` preserves a merge commit so the feature branch stays visible in history.",
      "explain_dr": "merge --no-ff kaykhlli commit dyal merge bayn — bach lbnach dyal lfeature tb9a bayna f lhistorique.",
      "example": "git merge --no-ff feature/login -- keeps a merge commit, branch stays visible",
      "q": "What does the example preserve that a fast-forward merge would not?",
      "a": "A merge commit, so the feature/login branch stays visible in history instead of disappearing into a straight line."
    },
    {
      "text": "`git diff --staged` shows what will go into the next commit; plain `git diff` shows only unstaged changes.",
      "explain_dr": "git diff --staged kaywrik chno ghaydkhel f commit jay; diff bo7dha ghir li mazal mastageditch.",
      "example": "git diff --staged -- what the next commit will contain\ngit diff -- what's unstaged",
      "q": "What does the example show that plain `git diff` does not?",
      "a": "The changes already staged for the next commit; plain diff only shows unstaged changes."
    },
    {
      "text": "`git remote -v` lists where your branches push to; `git branch -vv` shows each branch's upstream tracking.",
      "explain_dr": "remote -v kaywrik fin katpushi; branch -vv kaywrik l'upstream dyal kol branch.",
      "example": "git remote -v -- where pushes go\ngit branch -vv -- branches with upstream tracking",
      "q": "What does each example command tell you?",
      "a": "remote -v lists the push/fetch URLs; branch -vv shows each local branch and the remote branch it tracks."
    },
    {
      "text": "Detached HEAD means you are on a commit, not a branch — create a branch with `git switch -c rescue` before committing there.",
      "explain_dr": "Detached HEAD: nta 3la commit machi branch — sna3 branch 9bel matcommiti tma.",
      "example": "git switch -c rescue -- create a branch from a detached HEAD before committing",
      "q": "What is wrong with committing in the example's situation, and what is the fix?",
      "a": "In detached HEAD you are on a commit, not a branch — commits there can be lost; `git switch -c rescue` creates a branch first."
    },
    {
      "text": "`git bisect` binary-searches history to find the commit that introduced a bug: mark good/bad commits and let Git halve the range.",
      "explain_dr": "bisect: kay9smm lhistorique nss nss bach yl9a lcommit li dkhel lbug — katmarki good/bad w howa kaykml.",
      "example": "git bisect start\ngit bisect bad HEAD\ngit bisect good v1.2.0 -- then test each, mark good/bad",
      "q": "What do the three example commands set up?",
      "a": "A binary search: mark HEAD as bad, v1.2.0 as good, then Git halves the commit range each round until it finds the bug-introducing commit."
    },
    {
      "text": "Amending: `git commit --amend` folds changes into the last commit — only before pushing, never after others pulled it.",
      "explain_dr": "amend: katzid changes l akhir commit — ghir 9bel push, machi mor ma nass jbdouh.",
      "example": "git commit --amend -m \"Fix login validation\" -- folds changes into last commit, only before pushing",
      "q": "What does the example do, and what is the warning?",
      "a": "It folds new changes (or a new message) into the last commit — only before pushing; amending after others pulled it rewrites shared history."
    },
    {
      "text": "Force-push with lease, not brute force: `git push --force-with-lease` refuses to overwrite teammates' work pushed after you last fetched.",
      "explain_dr": "force-with-lease: force push l'amin — kayrfed ykhsser khdma dyal sahbek li pushaha morak.",
      "example": "git push --force-with-lease -- refuses to overwrite teammates' newer pushes",
      "q": "How is the example safer than plain --force?",
      "a": "It refuses to overwrite if a teammate pushed after your last fetch — plain --force would silently destroy their work."
    },
    {
      "text": "`.gitignore` patterns like `*.log` ignore files, but `!important.log` re-includes one — the `!` negation is a handy trap answer.",
      "explain_dr": "f .gitignore, ! kay3ni \"lla had lfile\" — b7al !important.log katstetni wa7ed mn *.log.",
      "example": "-- .gitignore:\n*.log\n!important.log -- re-includes just this one",
      "q": "What does the example .gitignore do?",
      "a": "It ignores all *.log files but re-includes important.log — the `!` pattern is an exception to the earlier rule."
    },
    {
      "text": "Squash-and-merge on a PR compresses a feature branch into one clean commit on `main` — tidy history for noisy work-in-progress commits.",
      "explain_dr": "Squash-and-merge: PR kamla katwli commit wa7ed n9i 3la main — historique zwin.",
      "example": "-- PR merge strategy: Squash and merge -- one clean commit on main",
      "q": "What does the example PR strategy do to main's history?",
      "a": "It compresses the whole feature branch into one clean commit on main — tidy history for noisy work-in-progress commits."
    },
    {
      "text": "`git worktree` lets you check out two branches at once in separate folders — no more stashing to review a teammate's PR.",
      "explain_dr": "worktree: joj branches mfto7in f joj dossiers f nafs lwa9t — bla stash.",
      "example": "git worktree add ../pr-review feature/login -- check out two branches at once",
      "q": "What problem does the example solve?",
      "a": "It checks out feature/login in a second folder, so you can review a teammate's PR without stashing your current work."
    },
    {
      "text": "Tags mark releases: `git tag v1.0.0 && git push --tags`; tags are what CI usually builds a release from.",
      "explain_dr": "Tags: kaymarkiw les versions (v1.0.0) — la CI katbni releases 3lihom.",
      "example": "git tag v1.0.0 && git push --tags -- mark a release; CI builds from the tag",
      "q": "What do the two example commands do?",
      "a": "tag marks v1.0.0 as a release point locally, and push --tags sends it to the remote — CI usually builds releases from tags."
    }
  ],
  "Docker": [
    {
      "text": "Docker packages an app and its dependencies into a portable container that runs anywhere.",
      "explain_dr": "Docker kayjme3 l'app w ga3 dépendances dyalha f container kaykhdm finma mchiti.",
      "example": "docker build -t webstack-site . -- build image\ndocker run -p 8080:80 webstack-site -- run it anywhere",
      "q": "What do the two example commands do?",
      "a": "build creates the webstack-site image from the Dockerfile; run starts a container from it, mapping host port 8080."
    },
    {
      "text": "A container is a lightweight, isolated runtime; an image is the immutable template containers are created from.",
      "explain_dr": "Container = runtime khfif m3zoul; image = template li menha kaytkhal9ou les containers.",
      "example": "docker images -- list images (templates)\ndocker ps -- list running containers",
      "q": "What is the difference between the two example commands' outputs?",
      "a": "docker images lists image templates; docker ps lists running containers created from them."
    },
    {
      "text": "The `Dockerfile` defines the image: base image, dependencies, copy steps, and the start command.",
      "explain_dr": "Dockerfile: kaywsef limage — image assasiya, dépendances, copy, w commande dyal démarrage.",
      "example": "FROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nCMD [\"npm\", \"start\"]",
      "q": "In the example, what does each instruction do?",
      "a": "FROM sets the base image, WORKDIR the working dir, COPY brings files in, RUN npm ci installs deps, and CMD is the start command."
    },
    {
      "text": "Build with `docker build -t myapp .` and run with `docker run -p 3000:3000 myapp`.",
      "explain_dr": "build -t katbni limage; run -p 3000:3000 kaykhdmha w kay7el lport.",
      "example": "docker build -t myapp .\ndocker run -p 3000:3000 myapp",
      "q": "What does `-p 3000:3000` do in the example?",
      "a": "Maps host port 3000 to container port 3000 so the app inside is reachable from outside."
    },
    {
      "text": "`docker-compose.yml` orchestrates multi-container setups (app + database + cache) with one `docker compose up`.",
      "explain_dr": "docker-compose.yml: kaydir app + base de données + cache b commande wa7da.",
      "example": "version: \"3\"\nservices:\n  app:\n    build: .\n    ports: [\"3000:3000\"]\n  db:\n    image: postgres:16\n-- docker compose up -- everything starts together",
      "q": "What does the example compose file orchestrate?",
      "a": "An app container (built locally, port 3000) plus a postgres:16 database container — one `docker compose up` starts everything together."
    },
    {
      "text": "Containers vs virtual machines: containers share the host kernel and start in seconds; VMs emulate full hardware and are heavier.",
      "explain_dr": "Container kaypartagi kernel dyal l'hôte w kaybda f secondes; VM kat-emuli hardware kaml w t9ila.",
      "example": "-- containers share the host kernel: seconds to start, MBs of overhead\n-- VMs emulate full hardware: minutes to boot, GBs each",
      "q": "Why are containers lighter than VMs per the example?",
      "a": "Containers share the host kernel (seconds to start, MBs overhead); VMs emulate full hardware (minutes to boot, GBs each)."
    },
    {
      "text": "Map host ports to container ports with `-p 8080:80` so the app is reachable from outside.",
      "explain_dr": "-p 8080:80: kayrbt port dyal l'hôte m3a port dyal container bach twsl lapp mn barra.",
      "example": "docker run -p 8080:80 nginx -- host :8080 -> container :80",
      "q": "In `docker run -p 8080:80 nginx`, which port is the host's and which is the container's?",
      "a": "8080 is the host port, 80 is the container's — host:8080 forwards to container:80."
    },
    {
      "text": "Persist data with volumes (`-v mydata:/data`) — container filesystems are ephemeral by default.",
      "explain_dr": "Container filesystem mo2a99at — volumes (-v) howa li kay7fed data.",
      "example": "docker run -v mydata:/data postgres -- data survives container removal\n-- without a volume, files vanish when the container is deleted",
      "q": "What does the example demonstrate about container filesystems?",
      "a": "They are ephemeral: postgres data survives container removal only because -v mydata:/data persists it in a named volume."
    },
    {
      "text": "A `.dockerignore` file keeps `node_modules`, `.git`, and secrets out of the image.",
      "explain_dr": ".dockerignore kaymna3 node_modules, .git w secrets ydkhlo f limage.",
      "example": "-- .dockerignore:\nnode_modules\n.git\n.env",
      "q": "What does the example .dockerignore keep out of the image?",
      "a": "node_modules, .git, and .env — dependencies, history, and secrets do not get baked into the image."
    },
    {
      "text": "Tag images with versions (`myapp:1.2.0`) instead of relying only on `latest` for reproducible deploys.",
      "explain_dr": "Taggi limages b versions (1.2.0) machi ghir latest — bach deploy ykoun stable.",
      "example": "docker build -t myapp:1.2.0 .\ndocker tag myapp:1.2.0 registry.example.com/myapp:1.2.0",
      "q": "Why is the example's myapp:1.2.0 better than myapp:latest?",
      "a": "Version tags make deploys reproducible — latest is mutable and you cannot tell what code actually runs."
    },
    {
      "text": "Multi-stage builds (`FROM node AS build`, then `FROM nginx`) ship only the compiled output — final images shrink from ~1GB to tens of MB.",
      "explain_dr": "Multi-stage build: katbni b image kbira w f lkher katjbed ghir natija — image katwli sghar bzf.",
      "example": "FROM node:20 AS build\nWORKDIR /app\nCOPY . .\nRUN npm run build\nFROM nginx:alpine\nCOPY --from=build /app/dist /usr/share/nginx/html -- only compiled output ships",
      "q": "What does the example's two FROM stages achieve?",
      "a": "The build stage compiles the app with node, then only the compiled dist output is copied into a tiny nginx:alpine final image — shrinking it from ~1GB to tens of MB."
    },
    {
      "text": "Each Dockerfile instruction creates a layer; put rarely-changing steps (dependency install) before often-changing ones (code copy) to maximize layer caching.",
      "explain_dr": "Kol instruction = layer; dir dépendances (li matbeddlch) lwel w code lkher — bach lcache ykhdm mzyan.",
      "example": "-- good: COPY package*.json first, install, then COPY code last\n-- bad: COPY . . before npm ci -- code changes invalidate the install layer",
      "q": "Why is the 'good' example order better?",
      "a": "COPY package*.json + npm ci run before COPY . ., so code changes do not invalidate the cached dependency-install layer — rebuilds are fast."
    },
    {
      "text": "`docker exec -it myapp sh` opens a shell inside a running container — your first move when debugging a live service.",
      "explain_dr": "docker exec -it: katdkhel l container li khddam — awal 7aja dirha ila bghiti tdebugi.",
      "example": "docker exec -it myapp sh -- open a shell inside the running container",
      "q": "What does the example command do?",
      "a": "Opens an interactive shell (sh) inside the running myapp container — the first move for debugging a live service."
    },
    {
      "text": "Environment variables via `--env-file .env` or `environment:` in compose beat hardcoding secrets into the image.",
      "explain_dr": "Secrets: st3mel --env-file wla environment f compose — 3mr ma tktebhom f limage.",
      "example": "docker run --env-file .env myapp -- secrets from the file, not baked in\n-- or compose: environment: [PORT=3000]",
      "q": "What does the example recommend over hardcoding secrets?",
      "a": "Passing secrets via --env-file .env or compose environment:, so they are never baked into the image."
    },
    {
      "text": "`docker compose up -d` runs detached; `docker compose logs -f` streams logs; `docker compose down` stops everything and removes the network.",
      "explain_dr": "up -d khddam f background; logs -f katwrik logs; down kay7bess kolchi.",
      "example": "docker compose up -d -- detached\ndocker compose logs -f -- follow logs\ndocker compose down -- stop and remove",
      "q": "What do the three example compose commands do?",
      "a": "up -d starts everything detached, logs -f streams logs, down stops everything and removes the network."
    },
    {
      "text": "Networks: containers on the same user-defined network reach each other by service name (`db:5432`), with no exposed ports needed between them.",
      "explain_dr": "Containers f nafs réseau: kayhdro b smiyat service (db:5432) bla may7tajou ports m7loula binathom.",
      "example": "services:\n  app:\n    networks: [mynet]\n  db:\n    networks: [mynet] -- app reaches db at db:5432",
      "q": "How does the app reach the database in the example?",
      "a": "Both are on the mynet network, so the app connects to the db container simply as db:5432 — by service name, no exposed ports needed."
    },
    {
      "text": "Healthchecks (`HEALTHCHECK CMD curl -f http://localhost/health`) let compose/orchestrators restart containers that stopped responding.",
      "explain_dr": "HEALTHCHECK: ila lcontainer mab9ach kayjawb, l'orchestrateur kayredémarrih bo7dha.",
      "example": "HEALTHCHECK CMD curl -f http://localhost/health || exit 1 -- orchestrator restarts unhealthy containers",
      "q": "What does the example HEALTHCHECK do?",
      "a": "It curls the container's /health endpoint; if it fails, the orchestrator restarts the unhealthy container."
    },
    {
      "text": "The `latest` tag is mutable — pin versions like `node:20-alpine` so your build today equals your build in six months.",
      "explain_dr": "latest kaytbddel — épingle version b7al node:20-alpine bach build dyal lyoum = build dyal ghdda.",
      "example": "FROM node:20-alpine -- pinned, reproducible\n-- avoid FROM node:latest -- the mutable tag breaks builds over time",
      "q": "Why is the example's `FROM node:20-alpine` better than `FROM node:latest`?",
      "a": "latest is mutable — a rebuild months later could pull a different Node version and break; pinned tags are reproducible."
    },
    {
      "text": "Alpine-based images are tiny but use musl libc — some native Node modules break; test before you commit to it.",
      "explain_dr": "Alpine sghir walakin musl libc — ba3d modules natifs dyal Node kaytksrou; jerreb 9bel.",
      "example": "FROM node:20-alpine -- tiny, but musl libc: native modules may fail\n-- test with npm ci && npm test before committing to alpine",
      "q": "What risk does the example warn about with node:20-alpine?",
      "a": "Alpine uses musl libc, so some native Node modules may fail — run npm ci && npm test before committing to alpine."
    },
    {
      "text": "`docker system prune` reclaims disk from stopped containers, dangling images, and unused networks — run it when the VM fills up.",
      "explain_dr": "system prune: kayn9i disk mn containers w images lmaytin — dirha ila t3emmer l'espace.",
      "example": "docker system prune -- reclaims space from stopped containers and dangling images",
      "q": "What does the example command reclaim?",
      "a": "Disk space from stopped containers, dangling images, and unused networks — run it when the VM fills up."
    },
    {
      "text": "Bind mounts (`-v ./src:/app/src`) sync host code into the container — ideal for local-dev hot reload.",
      "explain_dr": "Bind mount: code dyal l'hôte kaytsynkna m3a container — mitali l hot-reload f dev.",
      "example": "docker run -v ./src:/app/src myapp -- host edits appear instantly in the container",
      "q": "What does the example enable for local development?",
      "a": "Host ./src edits appear instantly inside the container — ideal for hot reload during dev."
    },
    {
      "text": "`COPY` vs `ADD`: prefer `COPY`; `ADD` also extracts tarballs and fetches URLs, which makes builds surprising.",
      "explain_dr": "COPY ghir katnsakh; ADD katdir 7wayj zyada (tar, URLs) — COPY hiya l'aslam dima.",
      "example": "COPY app /app -- prefer this\n-- ADD fetches URLs and extracts tarballs: surprising, avoid it",
      "q": "Why does the example say to prefer COPY?",
      "a": "ADD also extracts tarballs and fetches URLs, which makes builds surprising; COPY just copies files."
    },
    {
      "text": "Run as non-root: `USER node` in the Dockerfile limits damage if the app is compromised.",
      "explain_dr": "USER node: khddm lapp bla root — ila t-hackat lapp, d-darar kaykoun mahdoud.",
      "example": "USER node -- run as non-root, limits damage if the app is compromised",
      "q": "What does the example's `USER node` protect against?",
      "a": "Running as root: if the app is compromised, a non-root user limits the damage."
    },
    {
      "text": "A container exits when its main process exits — that is why `CMD [\"nginx\", \"-g\", \"daemon off;\"]` runs nginx in the foreground.",
      "explain_dr": "Container kaymout ila mat lprocess r2issi — 3lach nginx khassou ykhdm f foreground (daemon off).",
      "example": "CMD [\"node\", \"server.js\"] -- container exits when node exits\n-- so run the real service as the main process, not a background daemon",
      "q": "Why does the example run nginx in the foreground (`daemon off;`)?",
      "a": "A container exits when its main process exits — nginx must be the foreground main process or the container stops immediately."
    },
    {
      "text": "Resource limits (`--memory 512m --cpus 1` or compose `deploy.resources`) stop one greedy container from starving the host.",
      "explain_dr": "Limites (--memory, --cpus): kaymn3ou container wa7ed tmma3 yakol ga3 ressources dyal l'hôte.",
      "example": "docker run --memory 512m --cpus 1 myapp -- one greedy container can't starve the host",
      "q": "What does the example protect?",
      "a": "The host: --memory 512m --cpus 1 caps the container so one greedy container cannot starve everything else."
    }
  ],
  "Supabase": [
  {
    "text": "Supabase is an open-source backend-as-a-service: Postgres database, authentication, storage, realtime, and edge functions behind one client library.",
    "explain_dr": "Supabase kat3tik backend kaml: database, auth, storage, realtime... bla ma tkteb server.",
    "example": "import { createClient } from '@supabase/supabase-js';\nconst supabase = createClient(URL, ANON_KEY);",
    "q": "What backend pieces does the single supabase client give you access to?",
    "a": "The Postgres database, authentication, file storage, realtime subscriptions, and edge functions — all through one client instance."
  },
  {
    "text": "Under the hood Supabase is managed PostgreSQL — you get real SQL tables, foreign keys, and Postgres extensions.",
    "explain_dr": "Supabase machi database jdida — hiya Postgres m-gérée, b SQL 7a9i9i.",
    "example": "create table todos (\n  id bigint generated always as identity primary key,\n  title text not null\n);",
    "q": "Why does it matter that Supabase is 'just Postgres'?",
    "a": "Because you can use standard SQL, foreign keys, and Postgres extensions — your data stays portable and fully relational."
  },
  {
    "text": "Create the client once with createClient(projectUrl, anonKey) and reuse it everywhere in the app.",
    "explain_dr": "createClient kat-tsayb b URL w anon key, w kat-3awed t-sta3mel nafs l instance f app kamla.",
    "example": "export const supabase = createClient(\n  import.meta.env.VITE_SUPABASE_URL,\n  import.meta.env.VITE_SUPABASE_ANON_KEY\n);",
    "q": "What two arguments does createClient() require?",
    "a": "The project URL and the anon (public) key — usually read from environment variables."
  },
  {
    "text": "Never hardcode keys: in Vite, only variables prefixed with VITE_ are exposed to the browser via import.meta.env.",
    "explain_dr": "Ma t-ktebch keys nichan f code — 7ethom f .env b prefix VITE_.",
    "example": "VITE_SUPABASE_URL=https://xyz.supabase.co\nVITE_SUPABASE_ANON_KEY=eyJ...",
    "q": "Why must the variables start with VITE_?",
    "a": "Vite only exposes environment variables prefixed with VITE_ to client-side code via import.meta.env."
  },
  {
    "text": "Every query resolves to { data, error }: data holds the rows, error is null on success — always check it.",
    "explain_dr": "Kol query kat-rja3 { data, error } — dayman verifi error 9bel ma t-sta3mel data.",
    "example": "const { data, error } = await supabase.from('todos').select();\nif (error) console.error(error.message);",
    "q": "In the example, how do you know the query failed?",
    "a": "The error object is non-null — on success error is null and data holds the rows."
  },
  {
    "text": "Filter rows with .eq('column', value) — and chain .neq(), .gt(), .lt(), .like(), .ilike(), .in() for other comparisons.",
    "explain_dr": ".eq() kat-filtri rows; kaynin methods khrin b7al gt, lt, ilike l comparisons lokhrin.",
    "example": "await supabase.from('todos').select().eq('done', false);",
    "q": "What does the example return?",
    "a": "Only the rows whose done column is false — .eq() keeps rows where the column equals the value."
  },
  {
    "text": "Shape results with .order('created_at', { ascending: false }), .limit(n), and .range(from, to) — range bounds are inclusive.",
    "explain_dr": "order/limit/range kat-nedmo natija; range inclusive mn joj jihat.",
    "example": "await supabase.from('todos').select()\n  .order('id').range(0, 9); // first 10 rows",
    "q": "How many rows does .range(0, 9) return, and why?",
    "a": "10 rows — PostgREST ranges are inclusive on both ends, so indexes 0 through 9."
  },
  {
    "text": ".insert() takes an object or an array of objects and returns the inserted row(s).",
    "explain_dr": ".insert() kat-zid row wla bzaf, w kat-rja3 rows li tzado.",
    "example": "const { data } = await supabase\n  .from('todos').insert({ title: 'Buy milk' });\n// data: [ { id: 1, title: 'Buy milk', ... } ]",
    "q": "What is inside data after the insert?",
    "a": "An array with the newly inserted row object(s), including database-generated fields like id."
  },
  {
    "text": ".update({...}) must be paired with a filter like .eq() — otherwise it touches every row.",
    "explain_dr": ".update() khaso filter m3ah, bla filter ghadi y-bedel kolchi.",
    "example": "await supabase.from('todos')\n  .update({ done: true }).eq('id', 7);",
    "q": "Which rows does the example update?",
    "a": "Only the row with id 7 — the .eq('id', 7) filter scopes the update to that row."
  },
  {
    "text": ".delete() also needs a filter: .delete().eq('id', 9) removes just that row.",
    "explain_dr": ".delete() b filter kat-msa7 ghir rows li kay-tab9o chart.",
    "example": "await supabase.from('todos').delete().eq('id', 9);",
    "q": "What would happen if you called .delete() with no filter?",
    "a": "It would attempt to delete every row in the table — always scope deletes with a filter like .eq()."
  },
  {
    "text": ".single() expects exactly one row and returns an object; .maybeSingle() returns null instead of erroring on zero rows.",
    "explain_dr": ".single() kat-tsenna row wa7da; .maybeSingle() kat-rja3 null melli ma kayn walo bla error.",
    "example": "const { data } = await supabase.from('profiles')\n  .select().eq('id', 1).single();\n// data is an object, not an array",
    "q": "The query matches no rows. How do .single() and .maybeSingle() differ?",
    "a": ".single() returns an error (0 rows), while .maybeSingle() returns { data: null, error: null }."
  },
  {
    "text": ".upsert(data, { onConflict: 'id' }) inserts the row, or updates it when the conflict column already exists.",
    "explain_dr": "upsert = insert wla update ila row mojoud deja 3la 7sab onConflict.",
    "example": "await supabase.from('profiles')\n  .upsert({ id: 1, username: 'aymane' }, { onConflict: 'id' });",
    "q": "A profile with id 1 already exists. What does the example do?",
    "a": "It updates the existing row instead of inserting a duplicate, because id 1 conflicts."
  },
  {
    "text": "Get a row count without fetching rows: .select('*', { count: 'exact' }) — the count comes back alongside data.",
    "explain_dr": "count: 'exact' kat-7seb ch7al mn row bla ma tjib data kamla.",
    "example": "const { count } = await supabase\n  .from('todos').select('*', { count: 'exact' });",
    "q": "What does count contain?",
    "a": "The total number of rows matching the query — independent of limit/range."
  },
  {
    "text": "Follow foreign keys in one query: .select('id, title, profiles ( username )') embeds the related row.",
    "explain_dr": "Kat-tb3 foreign key f nafs query w kat-jib data dyal table li mratbta.",
    "example": "const { data } = await supabase.from('todos')\n  .select('id, title, profiles ( username )');\n// todo.profiles.username",
    "q": "What does profiles ( username ) add to each todo?",
    "a": "A nested profiles object with the related profile's username, joined via the foreign key."
  },
  {
    "text": "Auth essentials: signUp() creates a user, signInWithPassword() logs one in, signOut() clears the session.",
    "explain_dr": "signUp kat-cree compte, signInWithPassword kat-dkhel, signOut kat-khrej.",
    "example": "await supabase.auth.signUp({ email, password });\nawait supabase.auth.signInWithPassword({ email, password });\nawait supabase.auth.signOut();",
    "q": "Which of the three creates a brand-new account?",
    "a": "signUp() — the other two log an existing user in or out."
  },
  {
    "text": "getSession() reads the locally stored session; getUser() re-validates the JWT with the Auth server — prefer getUser() for security checks.",
    "explain_dr": "getUser() kat-verifi token m3a server, a7san l security mn 9raya mn localStorage.",
    "example": "const { data: { user } } = await supabase.auth.getUser();",
    "q": "Why is getUser() safer than trusting the stored session?",
    "a": "It asks the Supabase Auth server to validate the token, so forged or revoked tokens are rejected."
  },
  {
    "text": "React to auth changes with onAuthStateChange() — it returns a subscription you must unsubscribe on unmount.",
    "explain_dr": "onAuthStateChange kat-sme3 l login/logout; ma tnsach unsubscribe melli component yt7eyed.",
    "example": "const { data: { subscription } } =\n  supabase.auth.onAuthStateChange((event, session) => {});\n// cleanup: subscription.unsubscribe();",
    "q": "What must you do with subscription when the component unmounts?",
    "a": "Call subscription.unsubscribe() so the listener is removed and doesn't leak."
  },
  {
    "text": "Row Level Security: when enabled on a table with no policies, ALL access is denied — you must write policies to open it up.",
    "explain_dr": "RLS bla policies = kolchi msdoud. Khassek t-kteb policies bach t-7ell.",
    "example": "alter table todos enable row level security;",
    "q": "You enabled RLS but wrote no policies, and .select() returns nothing. Is this a bug?",
    "a": "No — it's the secure default: with RLS on and zero policies, every row is hidden until a policy allows it."
  },
  {
    "text": "Policies use USING to filter existing rows (SELECT/UPDATE/DELETE) and WITH CHECK to validate newly written rows (INSERT/UPDATE).",
    "explain_dr": "USING l rows li kaynin, WITH CHECK l rows jdad li ghadi yt-ktbo.",
    "example": "create policy \"insert_own\" on todos for insert\nwith check (auth.uid() = user_id);",
    "q": "Why does an INSERT policy use WITH CHECK instead of USING?",
    "a": "Because there is no existing row to filter yet — WITH CHECK validates the new row being written."
  },
  {
    "text": "auth.uid() inside a policy returns the UUID of the currently logged-in user — the key to per-user data isolation.",
    "explain_dr": "auth.uid() kat-rja3 id dyal user li dayer login — biha kat-freq data dyal kol wa7ed.",
    "example": "create policy \"own_rows\" on todos for select\nusing (auth.uid() = user_id);",
    "q": "What does the example policy allow?",
    "a": "Reading only the rows whose user_id matches the logged-in user's id."
  },
  {
    "text": "Upload files with storage.from('bucket').upload(path, file) — it fails if the file exists unless you pass { upsert: true }.",
    "explain_dr": "upload kat-fail ila file mojoud, 7ta t-golih upsert: true.",
    "example": "await supabase.storage.from('avatars')\n  .upload('me.png', file, { upsert: true });",
    "q": "The file me.png already exists and you omit the options. What happens?",
    "a": "The upload fails with an 'already exists' error — upsert defaults to false."
  },
  {
    "text": "getPublicUrl() builds a public URL locally (no existence check); createSignedUrl(path, seconds) gives a temporary URL for private buckets.",
    "explain_dr": "getPublicUrl l public bla verification; createSignedUrl kat-3ti URL mo2a9at l private files.",
    "example": "supabase.storage.from('avatars').getPublicUrl('me.png');\nawait supabase.storage.from('docs').createSignedUrl('c.pdf', 120);",
    "q": "When would you use createSignedUrl() instead of getPublicUrl()?",
    "a": "For files in a private bucket — it mints a URL that works for only 120 seconds instead of exposing the file publicly."
  },
  {
    "text": "Realtime: supabase.channel().on('postgres_changes', { event, schema, table }, cb).subscribe() — and the table must be added to the supabase_realtime publication.",
    "explain_dr": "Realtime b channel + postgres_changes; table khasha t-tzad l publication.",
    "example": "supabase.channel('room')\n  .on('postgres_changes',\n    { event: 'INSERT', schema: 'public', table: 'todos' },\n    (p) => console.log(p.new))\n  .subscribe();\n-- alter publication supabase_realtime add table todos;",
    "q": "Your subscription receives nothing. What SQL step might be missing?",
    "a": "Adding the table to the supabase_realtime publication — without it Postgres never forwards the changes."
  },
  {
    "text": "Call Postgres functions with rpc('function_name', { arg: value }) — great for logic that belongs close to the data.",
    "explain_dr": "rpc() kat-3yet l Postgres functions b arguments.",
    "example": "const { data } = await supabase\n  .rpc('get_top_products', { limit_count: 5 });",
    "q": "What does rpc() do?",
    "a": "It executes the Postgres function get_top_products with the given arguments and returns its result."
  },
  {
    "text": "Edge Functions (Deno serverless) are invoked with functions.invoke('name', { body }); the anon key is public, while service_role bypasses RLS and must stay server-side.",
    "explain_dr": "Edge Functions b functions.invoke; anon key public, service_role ghir f server 7it kat-jawz RLS.",
    "example": "await supabase.functions.invoke('send-email', { body: { to } });\n// NEVER expose the service_role key in the browser",
    "q": "Why must the service_role key never appear in frontend code?",
    "a": "It bypasses all RLS policies — anyone with it gets unrestricted read/write access to the whole database."
  }
  ],
  "ExpressJs": [
    {
      "text": "Express is a minimal Node.js web framework for building servers and REST APIs with routing and middleware.",
      "explain_dr": "Express howa framework khfif dyal Node.js bach t-sna3 servers w APIs b routing w middleware.",
      "example": "const express = require('express');\nconst app = express();\napp.listen(3000);",
      "q": "In the example, what are the three steps to get a basic Express server running?",
      "a": "Require express, create the app with express(), then start it with app.listen(3000) so it accepts requests on port 3000."
    },
    {
      "text": "app.listen(PORT) starts the HTTP server; without it the app never accepts requests.",
      "explain_dr": "app.listen() bih server kay-bda y-sta9bel requests — bla bih app katb9a ghir code.",
      "example": "const PORT = process.env.PORT || 3000;\napp.listen(PORT);",
      "q": "Why read the port from process.env.PORT with a fallback?",
      "a": "Hosting platforms assign the port through an environment variable, so the app must read it; the fallback keeps local development working on 3000."
    },
    {
      "text": "Routes pair an HTTP method with a path: app.get/post/put/delete('/path', handler).",
      "explain_dr": "Route kat-jma3 HTTP method m3a path — nafs path y9der y-kon 3ndo methods mokhtalfin.",
      "example": "app.get('/users', listUsers);\napp.post('/users', createUser);",
      "q": "In the example, which handler runs for POST /users?",
      "a": "createUser — Express matches both the method and the path, so GET and POST to /users are separate routes."
    },
    {
      "text": "Route handlers receive (req, res): req describes the incoming request, res builds the outgoing response.",
      "explain_dr": "req fih li ja mn client, res bih kat-sift jawab — jojhom dayman bjoj f handler.",
      "example": "app.get('/hi', (req, res) => {\n  res.send('hello');\n});",
      "q": "Which object would you inspect to read the request URL, and which one to send the reply?",
      "a": "Inspect req for the incoming request details (URL, headers, params); use res to send the reply."
    },
    {
      "text": "res.send() sends a string (as text/html) or an object (as JSON); res.json() always sends JSON.",
      "explain_dr": "res.send kat-detecti type dyal data, res.json dayman kat-sift JSON.",
      "example": "res.send('Hello');        // text/html\nres.json({ ok: true });  // application/json",
      "q": "What Content-Type does each line in the example produce?",
      "a": "res.send('Hello') produces text/html; res.json({ ok: true }) produces application/json."
    },
    {
      "text": "Chain res.status(code) before sending to set the HTTP status: 200 OK, 201 Created, 404 Not Found, 500 Error.",
      "explain_dr": "res.status() kat-khlik t-7dded status code 9bel ma t-sift response.",
      "example": "res.status(201).json(newUser); // created",
      "q": "In the example, what status code does the client receive and what does it mean?",
      "a": "201, which means a new resource was successfully created."
    },
    {
      "text": "Route parameters (:id) capture path segments into req.params — always as strings.",
      "explain_dr": "Params dyal path b7al :id kay-tjm3o f req.params, dayman strings.",
      "example": "app.get('/users/:id', (req, res) => {\n  res.json({ id: req.params.id }); // '42'\n});",
      "q": "For GET /users/42, what does the example send back?",
      "a": "{ id: '42' } — the parameter value is the string '42', not the number 42."
    },
    {
      "text": "Query strings (?key=value) land in req.query; repeated keys become arrays.",
      "explain_dr": "Li mn ba3d ? f URL kay-mchi l req.query, w key li t-3awed kat-wli array.",
      "example": "// GET /search?q=phone&page=2\nconst { q, page } = req.query; // 'phone', '2'",
      "q": "In the example, what are the values and types of q and page?",
      "a": "q is the string 'phone' and page is the string '2' — query values are always strings."
    },
    {
      "text": "Without body-parsing middleware, req.body is undefined; add app.use(express.json()) for JSON bodies.",
      "explain_dr": "Bla express.json(), req.body undefined — Express ma kay-parse-ich body bo7do.",
      "example": "app.use(express.json()); // before routes\napp.post('/users', (req, res) => {\n  console.log(req.body.name);\n});",
      "q": "Why must app.use(express.json()) come before the route?",
      "a": "Because middleware runs in registration order — the body must be parsed before the route handler tries to read req.body."
    },
    {
      "text": "Use express.urlencoded({ extended: true }) to parse HTML form submissions into req.body.",
      "explain_dr": "Forms dyal HTML kay-sifto format akhor mn JSON — khashom middleware dyalhom.",
      "example": "app.use(express.urlencoded({ extended: true }));",
      "q": "A form posts username=sara. After this middleware, where do you read 'sara'?",
      "a": "In req.body.username — the middleware parses the form-encoded body into req.body."
    },
    {
      "text": "Middleware are functions (req, res, next) that run in registration order; call next() to continue the chain.",
      "explain_dr": "Middleware kat-khdem b tartib tssjil — next() hiya li kat-dfe3 request l 9ddam.",
      "example": "app.use((req, res, next) => {\n  console.log(req.method, req.path);\n  next(); // continue\n});",
      "q": "What happens to the request if next() is never called and no response is sent?",
      "a": "It hangs until it times out — nothing downstream ever runs."
    },
    {
      "text": "app.use('/path', fn) scopes middleware to a path prefix: it runs for /path and everything under it.",
      "explain_dr": "app.use m3a path kat-chedd l path w ga3 li ta7to, l ga3 HTTP methods.",
      "example": "app.use('/admin', checkAuth); // /admin, /admin/users, ...",
      "q": "Does checkAuth run for GET /admin/users? For POST /admin?",
      "a": "Yes to both — path-scoped app.use matches the prefix and all subpaths for every HTTP method."
    },
    {
      "text": "A route can take several handlers; each must call next() (or end the response) for the next to run.",
      "explain_dr": "Route wa7da t9der y-kon 3ndha bzaf handlers — lwl khaso y-3ayet l next().",
      "example": "app.get('/dash', auth, (req, res) => {\n  res.send('welcome');\n});",
      "q": "In the example, when does the final handler run?",
      "a": "Only after auth calls next() — otherwise the request stops at the auth middleware."
    },
    {
      "text": "express.Router() groups related routes; mount it with app.use('/prefix', router).",
      "explain_dr": "Router kat-jma3 routes li 3ndhom 3ala9a — app.use kat-zidhom prefix.",
      "example": "const r = express.Router();\nr.get('/users', list);\napp.use('/api', r); // GET /api/users",
      "q": "In the example, what full path reaches the list handler?",
      "a": "GET /api/users — the mount prefix /api is prepended to the router's /users."
    },
    {
      "text": "Serve static files with app.use(express.static('public')) — /style.css maps to public/style.css.",
      "explain_dr": "express.static kat-khali server y-sift files nichan bla routes.",
      "example": "app.use(express.static('public'));",
      "q": "A client requests /logo.png and public/logo.png exists. What happens?",
      "a": "Express serves the file directly with the right Content-Type; no route handler is needed."
    },
    {
      "text": "Register a 404 catch-all AFTER all routes: app.use((req, res) => res.status(404).send(...)).",
      "explain_dr": "404 handler khaso y-kon f lkher — kay-chedd ghir li ma cheddo 7ta route.",
      "example": "app.use((req, res) => {\n  res.status(404).json({ error: 'Not found' });\n});",
      "q": "What breaks if you register this before your API routes?",
      "a": "Every request hits the catch-all first, so all API routes return 404 — registration order decides."
    },
    {
      "text": "Error-handling middleware has FOUR parameters: (err, req, res, next) — Express detects it by arity.",
      "explain_dr": "Error handler kat-3rfo Express mn 4 parameters — lwl howa err.",
      "example": "app.use((err, req, res, next) => {\n  console.error(err);\n  res.status(500).json({ error: 'Server error' });\n});",
      "q": "In the example, how does Express know this is an error handler and not normal middleware?",
      "a": "By its four parameters — Express treats any middleware with the (err, req, res, next) signature as an error handler."
    },
    {
      "text": "Forward errors with next(err); error middleware must be registered AFTER the routes that can fail.",
      "explain_dr": "next(err) kat-sift error l error handlers — w khashom y-kono mn b3d routes.",
      "example": "app.get('/x', (req, res, next) => {\n  try { risky(); } catch (e) { next(e); }\n});",
      "q": "Why wrap risky() in try/catch and call next(e)?",
      "a": "So a thrown error reaches the centralized error handler instead of crashing the request or hanging it."
    },
    {
      "text": "In Express 4, rejected promises in async handlers are NOT caught automatically — use try/catch + next(err).",
      "explain_dr": "F Express 4, async errors ma kay-tchddoch bo7dhom — khask t-cheddhom b yeddek.",
      "example": "app.get('/d', async (req, res, next) => {\n  try {\n    res.json(await db.query('SELECT 1'));\n  } catch (e) { next(e); }\n});",
      "q": "What happens without the try/catch if db.query rejects?",
      "a": "The request hangs and Node emits an unhandled promise rejection — the error handler never sees it."
    },
    {
      "text": "res.redirect('/new') sends a 302 telling the browser to request the new URL.",
      "explain_dr": "res.redirect kat-gol l browser y-mchi l URL akhra — default 302.",
      "example": "app.get('/old', (req, res) => res.redirect('/new'));",
      "q": "In the example, does the server render /new itself?",
      "a": "No — it responds 302 and the browser makes a brand-new request to /new."
    },
    {
      "text": "app.route('/users') chains method handlers for one path: .get().post().put().delete().",
      "explain_dr": "app.route kat-jma3 ga3 methods dyal nafs path f blassa wa7da.",
      "example": "app.route('/users')\n  .get(listUsers)\n  .post(createUser);",
      "q": "What is the benefit of the example over two separate app.get/app.post lines?",
      "a": "It groups every handler for /users in one chain, so the shared path is declared once and stays consistent."
    },
    {
      "text": "Validate untrusted input in middleware or the handler BEFORE touching the database — never trust req.body.",
      "explain_dr": "Data dyal client ma t-tiqch fiha — verifiha 9bel ma t-sta3melha.",
      "example": "app.post('/users', (req, res) => {\n  if (!req.body.email) return res.status(400).json({ error: 'email required' });\n  // ...save\n});",
      "q": "In the example, why return the 400 response immediately?",
      "a": "To reject invalid input before any database work happens, and return stops the handler from continuing."
    },
    {
      "text": "helmet sets secure HTTP headers on every response, hardening the app against known attacks.",
      "explain_dr": "helmet kat-zid headers dyal security l kol response.",
      "example": "const helmet = require('helmet');\napp.use(helmet());",
      "q": "In the example, what does helmet() protect against in general terms?",
      "a": "Common web attacks that exploit missing or weak HTTP security headers, like MIME sniffing and clickjacking."
    },
    {
      "text": "cors lets browsers call your API from another origin by sending Access-Control headers.",
      "explain_dr": "cors kat-sm7 l browsers y-3ayto l API mn origin akhra.",
      "example": "const cors = require('cors');\napp.use(cors()); // allow all origins (dev)",
      "q": "Without cors, what happens when a page on site A fetches your API on site B?",
      "a": "The browser blocks the response — the same-origin policy forbids it unless the API sends CORS headers."
    },
    {
      "text": "Shut down gracefully with server.close() and keep secrets in environment variables, never in code.",
      "explain_dr": "Sed server b chouia b server.close() — w secrets f env variables, machi f code.",
      "example": "const server = app.listen(PORT);\n// later: server.close(); // finish in-flight requests",
      "q": "Why is server.close() better than process.exit() for stopping?",
      "a": "server.close() stops accepting new connections but lets in-flight requests finish; process.exit() kills them mid-response."
    }
  ],
  "Agile": [
{ "text": "Agile is an iterative approach: build small increments, get feedback, and adapt the plan.", "explain_dr": "Agile tari9a takhdem b dawrat 9sar: t-bni chwiya, t-jme3 feedback, w t-3del l plan.", "example": "Sprint 1: login page -> demo -> feedback -> Sprint 2: adjusted dashboard", "q": "In the example, what happens between Sprint 1 and Sprint 2?", "a": "A demo and feedback loop — the team inspects the increment and adapts the next sprint's plan based on what it learned." },
{ "text": "The Agile Manifesto has 4 values: individuals and interactions, working software, customer collaboration, responding to change — each preferred OVER its counterpart.", "explain_dr": "Manifesto 3ndo 4 dyal l9iyam, kol wa7da mfdala 3la mo9abil dyalha (over ma kat-3nich bala).", "example": "Working software OVER comprehensive documentation", "q": "Does 'working software over comprehensive documentation' mean zero documentation?", "a": "No — 'over' means preference, not elimination. You document what adds value, but working software comes first." },
{ "text": "Scrum has 3 roles: Product Owner (WHAT and in what order), Developers (HOW), Scrum Master (process health, impediments).", "explain_dr": "Scrum fih 3 dyal roles: PO kay-gol CHNO, Developers kay-golo KIFACH, SM kay-7mi l process.", "example": "PO: 'Checkout first, it earns money' / Devs: 'We'll use Stripe' / SM: unblocks API access", "q": "In the example, who decides the technical approach for checkout?", "a": "The Developers — the Product Owner decides what gets built and its priority, the team decides how to build it." },
{ "text": "A sprint is a fixed timebox of 1-4 weeks that never gets extended; it ends with a potentially releasable increment.", "explain_dr": "Sprint wa9t thabet 1-4 simanat ma kay-tmeddedch, w kay-sali b increment t9dar t-tlansa.", "example": "2-week sprint -> demo-able checkout flow on Friday, even if reports slipped", "q": "The sprint ends Friday and reports aren't done. What happens?", "a": "The sprint still ends Friday — the increment ships without reports, and the unfinished work returns to the backlog." },
{ "text": "Sprint Planning answers: WHAT can we deliver (Sprint Goal + selected backlog items) and HOW will we do it.", "explain_dr": "Sprint Planning kat-jawb 3la joj: CHNO ghadi n-delivriw, w KIFACH ghadi n-diroha.", "example": "Goal: 'Shoppers can pay by card' / Plan: Stripe integration + checkout UI tasks", "q": "Why does the team set a Sprint Goal instead of just picking stories?", "a": "The goal gives a shared purpose and a decision basis when surprises force trade-offs mid-sprint." },
{ "text": "The Daily Standup is a 15-minute peer sync: what I did, what I'll do, what's blocking me. Not a status report to managers.", "explain_dr": "Daily 15 d9i9a bin l team: chno dert, chno ghadi n-dir, chno 7abesni — machi rapport l manager.", "example": "'Yesterday: cart API. Today: checkout UI. Blocker: waiting on Stripe keys.'", "q": "A manager asks everyone to give a detailed progress report in the Daily. What's wrong?", "a": "It stops being a peer sync and becomes a status meeting — the format drifts past its 15-minute timebox and purpose." },
{ "text": "The Sprint Review inspects the finished increment WITH stakeholders and collects feedback that feeds the backlog.", "explain_dr": "Sprint Review kat-werri l increment l stakeholders w kat-jme3 feedback li kay-dkhol l backlog.", "example": "Demo checkout -> stakeholder: 'add Apple Pay' -> new backlog item", "q": "In the example, where does the Apple Pay request go?", "a": "Into the Product Backlog, where the Product Owner prioritizes it against everything else for a future sprint." },
{ "text": "The Sprint Retrospective inspects HOW the team worked and must produce at least one actionable improvement for the next sprint.", "explain_dr": "Retro kat-na9ech tari9a dyal l khadma w lazem t-khrej b ta7sin 3amali wa7ed 3la l a9al.", "example": "'PRs wait 2 days' -> experiment: 'review within 4h next sprint'", "q": "A retro ends with good discussion but no action items. What failed?", "a": "Its purpose — continuous improvement requires at least one concrete experiment to try in the next sprint." },
{ "text": "The Product Backlog is a single ordered list of everything the product might need; the Product Owner owns its order.", "explain_dr": "Product Backlog lista wa7da mratba dyal kolchi li l produit y9dar y-7taj; PO howa l mas2ol 3la tartibha.", "example": "1. Card payments  2. Apple Pay  3. Dark mode  4. Gift cards", "q": "Why must there be exactly one ordered backlog per product, even with three teams?", "a": "So priorities stay unified — separate backlogs would let teams pull in conflicting directions with no single source of truth." },
{ "text": "The Sprint Backlog = the items pulled for the sprint plus the Developers' plan to deliver them; only Developers change it.", "explain_dr": "Sprint Backlog = stories dyal sprint + plan dyal Developers; ghir Developers li kay-bdloh.", "example": "Sprint Backlog: [card payments, receipt email] + task breakdown", "q": "Can the Product Owner add a story to the Sprint Backlog mid-sprint?", "a": "No — the sprint scope is the Developers' commitment; new requests go through the Product Owner into the Product Backlog." },
{ "text": "A user story follows: As a [role], I want [goal], so that [benefit] — plus acceptance criteria.", "explain_dr": "User story format: As a [role], I want [goal], so that [benefit] + choro6 l 9obol.", "example": "As a shopper, I want to pay by card, so that I can check out quickly.\nAC: Given a valid card, when I pay, then I see a confirmation.", "q": "What do the acceptance criteria add that the story sentence lacks?", "a": "Testable conditions defining exactly when the story counts as accepted — the Given/When/Then contract for 'done' on that story." },
{ "text": "INVEST: good stories are Independent, Negotiable, Valuable, Estimable, Small, Testable.", "explain_dr": "INVEST = story mzyana: mosta9illa, 9abila l ni9ach, fiha 9ima, t9dar t-t9der, sghira, t9dar t-tester.", "example": "'As a user I want the whole app' -> NOT INVEST (not small, not testable)", "q": "Why does the example story fail INVEST?", "a": "It's not Small or Testable — 'the whole app' can't fit a sprint or be verified by clear criteria, so it must be split." },
{ "text": "An epic is a large body of work split into smaller stories; a story must fit in one sprint.", "explain_dr": "Epic khadma kbira kat-t9ssem l stories sghar; story lazem t-dkhol f sprint wa7ed.", "example": "Epic: Payments -> stories: card pay, Apple Pay, refunds, receipts", "q": "An epic is estimated at 40 points and your velocity is 25. What's the move?", "a": "Split it — no single story should exceed what fits a sprint; each split story must still deliver value." },
{ "text": "Acceptance criteria are story-specific; the Definition of Done is a team-wide quality checklist for every increment.", "explain_dr": "AC khasin b story wa7da; DoD checklist dyal l jawda 3amma 3la kol increment.", "example": "DoD: code reviewed + tests pass + deployed to staging + docs updated", "q": "All acceptance criteria pass but code wasn't reviewed. Is the story done?", "a": "No — the Definition of Done applies to every story, so missing review means it's not a completed increment." },
{ "text": "Definition of Ready: a backlog item is clear, estimated, and has everything needed before the team pulls it.", "explain_dr": "Definition of Ready: story wad7a, m9ddra, w fiha kolchi 9bel ma l team t-bda biha.", "example": "Ready checklist: story written + AC defined + design attached + estimated", "q": "A story has no acceptance criteria and no estimate. Can it enter Sprint Planning?", "a": "No — it isn't Ready. The team would start with unknowns, which is exactly what the checklist prevents." },
{ "text": "Story points are relative size estimates (Fibonacci: 1,2,3,5,8,13...) — never hours, never comparable across teams.", "explain_dr": "Story points a7jam nisbya (1,2,3,5,8,13) — machi sa3at, w ma kay-t9arnoch bin teams.", "example": "Login form = 2 pts; card payments = 8 pts (about 4x bigger)", "q": "Team A does 45 pts/sprint and Team B does 30. Which team is better?", "a": "Neither conclusion is valid — points are team-relative, so cross-team velocity comparison is meaningless." },
{ "text": "Planning Poker: everyone estimates privately, reveals together; big gaps trigger discussion, then re-estimate.", "explain_dr": "Planning Poker: kol wa7ed kay-9der b sirriya, kay-werriw m3a b3d; l far9 l kbir kay-jib ni9ach.", "example": "Cards: 3, 3, 13 -> the '13' explains hidden API work -> re-vote: 8, 8, 8", "q": "Why not just average the 3 and the 13?", "a": "Because the gap signals different understandings — the discussion surfaces hidden work, which is the real value of the exercise." },
{ "text": "Velocity = completed points per sprint, averaged over a few sprints; used ONLY for forecasting, never for judging people.", "explain_dr": "Velocity = points li salaw f sprint, moyenne dyal chhar; ghir l tawa9o3, machi l mo7asaba.", "example": "Last 3 sprints: 22, 26, 24 -> forecast ~24 pts next sprint", "q": "Your velocity dropped from 26 to 18 after a teammate left. Should the team work weekends to 'recover' it?", "a": "No — velocity reflects current capacity; plan the next sprint around 18 and let the average re-stabilize honestly." },
{ "text": "A burndown chart shows remaining sprint work per day; a flat line means no progress, a cliff means late bulk completion.", "explain_dr": "Burndown kay-werri l khadma li b9at kol nhar; khatt ofo9i = ma kayn ta9addom.", "example": "40 pts Mon -> 32 Tue -> 32 Wed -> 30 Thu -> 0 Fri (cliff = risky)", "q": "What does the flat line between Tuesday and Thursday tell the team?", "a": "That nothing burned down for two days — an early warning to inspect blockers in the Daily before Friday." },
{ "text": "The Sprint Goal protects the sprint: new requests go to the backlog; only the PO can cancel a sprint, when the goal is obsolete.", "explain_dr": "Sprint Goal kay-7mi sprint: talab jdid kay-mchi l backlog; ghir PO y9dar y-lghi sprint ila l hadaf mat.", "example": "Mid-sprint request: 'add gift cards now!' -> backlog item, PO prioritizes later", "q": "The CEO demands the team drop sprint work for an urgent request. Who decides?", "a": "The Product Owner — they own priority decisions; the team keeps its commitment unless the PO judges the Sprint Goal obsolete." },
{ "text": "The Scrum Master is a servant-leader: removes impediments, coaches the team and PO, protects the process — never assigns tasks.", "explain_dr": "SM 9a2id khadim: kay-7yed l 3awa2i9, kay-coachi, kay-7mi l process — ma kay-wzza3ch tasks.", "example": "Dev blocked on API keys -> SM chases access; PO churns priorities -> SM coaches PO", "q": "The team waits for the Scrum Master to assign daily tasks. What's broken?", "a": "Self-organization — Developers pull their own work; the SM facilitates, never commands or assigns." },
{ "text": "Kanban visualizes flow on a board with WIP limits: finish work before starting new work; limits expose bottlenecks.", "explain_dr": "Kanban tableau b WIP limits: sali l khadma 9bel ma t-bda jdida; l 7odod kat-kchef l ikhtina9at.", "example": "| To Do | In Progress (WIP 3) | Done |  — 4th card must wait", "q": "The 'In Progress' column is full at its WIP limit and a dev is free. What should they do?", "a": "Help finish something in progress (review, test, unblock) instead of starting a new card — that's the point of the limit." },
{ "text": "A Cumulative Flow Diagram shows cards moving through stages over time; a widening band = work piling up = bottleneck.", "explain_dr": "CFD kay-werri l kartat kifach kat-doz m3a l wa9t; chari6 kay-tsa3 = ikhtina9.", "example": "'In Review' band doubles in width over 2 weeks -> reviews are the bottleneck", "q": "In the example, where should the team focus improvement effort?", "a": "On the review stage — the widening band proves work accumulates there, so adding reviewers or pairing unblocks flow." },
{ "text": "Agile principle: welcome changing requirements, even late — short iterations and automated tests keep change cheap.", "explain_dr": "Mabda2: r7eb b taghyirat 7ta f lkher — iterations 9sar w tests kay-khaliw t-taghyir rkhis.", "example": "Waterfall: late change = rewrite specs. Agile: next sprint just reprioritizes.", "q": "Why is a late change cheaper in Agile than in waterfall?", "a": "Small batches, working software each sprint, and automated tests mean there's little speculative work to throw away." },
{ "text": "Agile measures success by outcomes, not output: working software delivering value, at a sustainable pace that keeps improving.", "explain_dr": "Naja7 f Agile = nata2ij (9ima 7a9i9iya), machi kamiya dyal l code wla sa3at.", "example": "Team shipped 200 story points but users churned -> not success", "q": "In the example, why doesn't high velocity mean success?", "a": "Because success is business outcomes — value delivered to users — not the volume of output produced." }
  ],
  "Postman": [
{ "text": "Postman is an API client for sending HTTP requests and inspecting responses.", "explain_dr": "Postman howa outil bach t-sift HTTP requests l API w t-chof responses li rj3o.", "example": "GET https://api.shop.test/users  →  200 OK", "q": "In the example, what are the two things you see after sending the request?", "a": "The response status (200 OK) and the response body — Postman shows both so you can verify the API behaves as expected." },
{ "text": "Every request has a method, a URL, headers, parameters, and an optional body.", "explain_dr": "Kol request fiha method, URL, headers, params, w body ikhtiyari.", "example": "POST https://api.shop.test/users\nContent-Type: application/json\n{ \"name\": \"Sara\" }", "q": "Which parts of the example tell the server what to do, and which carry the data?", "a": "The method (POST) and URL say what to do; the Content-Type header and JSON body carry the data." },
{ "text": "A collection is a saved, organized group of requests you can run and share together.", "explain_dr": "Collection hiya majmo3a mn requests m7fodin w mnadmin bach t-runi w t-partagihom.", "example": "// Collection: Shop API\n// ├─ POST /login\n// └─ GET /users", "q": "Why put the login and get-users requests in one collection?", "a": "Because they belong to the same API — you can run, document, and share them as one unit." },
{ "text": "An environment is a named set of variables (dev, staging, prod) you switch between without editing requests.", "explain_dr": "Environment hiya majmo3a dyal variables l context wa7ed (dev, prod...) kat-bdel binathom bla ma t-mess requests.", "example": "{{baseUrl}}/users  // dev → http://localhost:8000, prod → https://api.shop.test", "q": "What changes when you switch the active environment from dev to prod?", "a": "Only the variable values (like {{baseUrl}}) — the requests themselves stay untouched." },
{ "text": "Reference any variable with double curly braces: {{variableName}}.", "explain_dr": "Bach t-sta3mel variable, kteb smitha wast joj accolades: {{smiya}}.", "example": "GET {{baseUrl}}/users/{{userId}}", "q": "In the example, how many variables are used and what are their names?", "a": "Two: baseUrl and userId — each wrapped in {{ }}." },
{ "text": "When a variable exists in several scopes, the narrowest scope wins: local > data > environment > collection > global.", "explain_dr": "Ila nafs variable kayna f scopes bzf, dima l scope l d9i9 howa li kayghlb.", "example": "// apiKey = \"AAA\" (global), \"BBB\" (environment)\n// {{apiKey}} → \"BBB\"", "q": "In the example, which value does {{apiKey}} resolve to, and why?", "a": "\"BBB\", because the environment scope is narrower than global and therefore wins." },
{ "text": "Set authentication in the Authorization tab; Bearer Token sends \"Authorization: Bearer <token>\".", "explain_dr": "Auth kat-t7dded f Authorization tab; Bearer Token kay-sift token f header.", "example": "Authorization: Bearer eyJhbGciOi...", "q": "Where does the token travel in the example?", "a": "In the Authorization header, prefixed with the word Bearer." },
{ "text": "Basic Auth sends username:password Base64-encoded in the Authorization header.", "explain_dr": "Basic Auth kat-sift username:password m-encodi b Base64 f Authorization header.", "example": "Authorization: Basic dXNlcjpwYXNz  // user:pass", "q": "Is Basic Auth encrypted? What does the example show?", "a": "No — Base64 is only encoding, not encryption; anyone reading the header can decode it, so always use HTTPS." },
{ "text": "Query parameters go after ? in the URL; path variables like :id are edited in the Params tab.", "explain_dr": "Query params kayjiw mor ? f URL; path variables b7al :id kat-bdelhom f Params tab.", "example": "GET /users?page=2&limit=10\nGET /users/:id  →  /users/42", "q": "In the example, what is the difference between page and :id?", "a": "page is a query parameter filtering the list; :id is a path variable identifying one specific user." },
{ "text": "Send JSON with Body → raw → JSON, and always include the Content-Type: application/json header.", "explain_dr": "Bach t-sift JSON, khtar Body → raw → JSON w zid header Content-Type.", "example": "POST /users\nContent-Type: application/json\n{ \"name\": \"Sara\" }", "q": "What would break if you forgot the Content-Type header in the example?", "a": "The server might not parse the body as JSON and could reject the request with a 415 or 400 error." },
{ "text": "Pre-request scripts run before the request is sent — use them to set variables, timestamps, or signatures.", "explain_dr": "Pre-request script kay-khdem 9bel ma t-tsift request — l variables w signatures.", "example": "pm.environment.set(\"ts\", Date.now());", "q": "In the example, when is the ts variable set relative to the request?", "a": "Before the request is sent, so the request can use {{ts}} in its URL, headers, or body." },
{ "text": "Test scripts run after the response arrives; pm.test() groups assertions about that response.", "explain_dr": "Test scripts kay-khedmo mor ma t-wsal response; pm.test() kat-jma3 assertions.", "example": "pm.test(\"Status is 200\", function () {\n  pm.response.to.have.status(200);\n});", "q": "What are the two arguments of pm.test in the example?", "a": "A description string (\"Status is 200\") and a function containing the assertions." },
{ "text": "Parse the body with pm.response.json(), then assert with pm.expect() (Chai syntax).", "explain_dr": "7awel body l object b pm.response.json(), w verifi b pm.expect().", "example": "const json = pm.response.json();\npm.expect(json.name).to.eql(\"Sara\");", "q": "What would happen in the example if the body were not valid JSON?", "a": "pm.response.json() would throw, failing the test." },
{ "text": "Chain requests: save a value from one response, reuse it as {{variable}} in the next request.", "explain_dr": "Chaining: savei 9ima mn response w 3awed sta3melha b {{variable}} f request li moraha.", "example": "// Tests of POST /login:\npm.environment.set(\"token\", pm.response.json().token);", "q": "After the example runs, how does the next request use the token?", "a": "It references {{token}} in its Authorization header — no copy-paste needed." },
{ "text": "pm.sendRequest() sends an HTTP call from inside a pre-request or test script.", "explain_dr": "pm.sendRequest() kat-sift HTTP request mn wast script.", "example": "pm.sendRequest(\"https://auth.test/token\", function (err, res) {\n  pm.environment.set(\"token\", res.json().token);\n});", "q": "Why use pm.sendRequest in a pre-request script instead of a separate request?", "a": "To fetch a fresh token automatically before the main request, without adding an extra request to the collection flow." },
{ "text": "Dynamic variables like {{$guid}}, {{$timestamp}}, and {{$randomInt}} generate fresh values per request.", "explain_dr": "Dynamic variables b7al {{$guid}} kat-generiw 9ima jdida m3a kol request.", "example": "{ \"requestId\": \"{{$guid}}\" }", "q": "What is different about {{$guid}} each time the example request runs?", "a": "A brand-new random GUID is generated on every run — you never get the same value twice." },
{ "text": "postman.setNextRequest(\"Name\") controls which request runs next; setNextRequest(null) stops the run.", "explain_dr": "setNextRequest kat-7dded ina request ghadi moraha; null kat-7bes l run.", "example": "postman.setNextRequest(null); // stop after this request", "q": "In the example, what happens to the remaining requests in the runner?", "a": "They are skipped — the run stops after the current request." },
{ "text": "The Collection Runner executes a whole collection, optionally iterating over rows of a CSV/JSON data file.", "explain_dr": "Collection Runner kay-runi collection kamla, w y9der y3awed m3a kol row dyal CSV/JSON.", "example": "pm.iterationData.get(\"email\"); // current CSV row", "q": "If the CSV has 100 rows, how many times does each request run?", "a": "100 times — once per row, with pm.iterationData giving the current row's values." },
{ "text": "A mock server returns saved example responses, so frontends can develop before the backend exists.", "explain_dr": "Mock server kay-rja3 examples m7fodin, bach frontend y-khdem 9bel ma backend y-wjed.", "example": "GET https://<mock-id>.mock.pstmn.io/users → saved example", "q": "In the example, where does the response actually come from?", "a": "From the mock server's saved example, not from a real backend." },
{ "text": "Monitors run a collection on a schedule from the Postman cloud and alert you on failures.", "explain_dr": "Monitors kay-runniw collection b schedule mn cloud dyal Postman w kay-notifiwk melli kay-fchlo.", "example": "// Monitor: Shop API health — every hour", "q": "What problem does the example monitor solve?", "a": "It catches API regressions automatically every hour without anyone clicking run." },
{ "text": "Newman is Postman's CLI runner: newman run collection.json -e env.json.", "explain_dr": "Newman howa runner dyal Postman f command line.", "example": "$ newman run api-tests.json -e prod.json", "q": "Why run the example command instead of clicking Run in the app?", "a": "Because it runs headless in terminals and CI pipelines, and its exit code fails the build when tests fail." },
{ "text": "In CI, Newman runs on every push; reporters like junit and htmlextra publish machine-readable results.", "explain_dr": "F CI, Newman kay-khdem m3a kol push; reporters kay-generiw rapports.", "example": "newman run api-tests.json -r cli,junit", "q": "What does the junit reporter add in the example?", "a": "A machine-readable test report that CI tools can display and use to pass or fail the build." },
{ "text": "OAuth 2.0 in Postman: click \"Get New Access Token\" and Postman handles the authorization flow.", "explain_dr": "L OAuth 2.0, cliqui 3la \"Get New Access Token\" w Postman kay-dir l flow kamel.", "example": "// Authorization tab → OAuth 2.0 → Get New Access Token", "q": "What does Postman do for you after you click the button in the example?", "a": "It opens the provider's login, captures the code, exchanges it for tokens, and stores the access token for the request." },
{ "text": "\"Inherit auth from parent\" makes a request reuse the authorization set on its collection or folder.", "explain_dr": "\"Inherit auth from parent\" kat-khali request t-sta3mel auth dyal collection/folder.", "example": "// Collection auth: Bearer {{token}}\n// Request auth: Inherit auth from parent", "q": "If the token changes, how many places must you update in the example setup?", "a": "One — the collection level; every inheriting request picks it up automatically." },
{ "text": "Keep secrets in a variable's CURRENT value (local-only), never in the initial value that syncs with the team.", "explain_dr": "Secrets 7ethom f CURRENT value (local ghir 3ndek), machi f initial li kat-partaga m3a team.", "example": "{{apiKey}}  // current value: secret, initial value: empty", "q": "In the example, what would a teammate see for apiKey?", "a": "An empty initial value — the secret in your current value never syncs to them." }
  ],
  "NextJs": [
  {
    "text": "Next.js is a React framework for full-stack web apps: file-based routing, server rendering (SSR/SSG/ISR), API route handlers, and image/font optimization out of the box.",
    "explain_dr": "Next.js kat-zid 3la React: routing, server rendering, API... tfekkar chno kat-rba7 bla ma t-configuri walo.",
    "example": "npx create-next-app@latest my-app\ncd my-app\nnpm run dev",
    "q": "What full-stack pieces does Next.js give you on top of plain React?",
    "a": "File-based routing, server-side rendering options (SSR/SSG/ISR), API route handlers, middleware, and built-in image and font optimization."
  },
  {
    "text": "The App Router lives in the app/ directory: every folder is a route segment and special files (page.js, layout.js, loading.js) define the UI of each segment.",
    "explain_dr": "F App Router, l dossier = route, w smiyat l files mo3ayana kat-7added chno kayt-renda. Fker chno smiyat had l files.",
    "example": "app/\n  page.js          // /\n  about/page.js    // /about\n  blog/[slug]/page.js",
    "q": "How does a folder inside app/ become a URL?",
    "a": "Each folder is a route segment; a page.js inside it renders that URL, e.g. app/about/page.js renders /about."
  },
  {
    "text": "A page.js file exports the React component rendered for its route segment — it is the only file name that creates a publicly reachable page.",
    "explain_dr": "Ghir page.js kat-sayb page public. Files khrin b smiyat khrin ma kay-banouch. Fker chno smit l file l wa7id li kay-rendi route.",
    "example": "// app/about/page.js\nexport default function About() {\n  return <h1>About us</h1>;\n}",
    "q": "Which file name makes a route publicly reachable in the App Router?",
    "a": "page.js — only page.js creates a public page; other file names (like helpers) are never routed."
  },
  {
    "text": "Components in the App Router are Server Components by default: they render on the server, can be async, and keep secrets and heavy dependencies off the client bundle.",
    "explain_dr": "Bla ma tzid walo, l component kayt-renda f server. Fker chno kat-rba7: async, secrets, bundle sghir.",
    "example": "export default async function Page() {\n  const posts = await db.query('SELECT * FROM posts');\n  return <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>;\n}",
    "q": "What can a default App Router component do that a Client Component cannot?",
    "a": "Be async and run server-only code (like direct database queries), since it renders on the server and never ships that code to the browser."
  },
  {
    "text": "The \"use client\" directive at the top of a file marks a Client Component: it renders in the browser and unlocks hooks, event handlers, and browser APIs.",
    "explain_dr": "\"use client\" kat-gol: hadchi khaso browser. Fker imta kat-7tajha: useState, onClick...",
    "example": "\"use client\";\nimport { useState } from 'react';\nexport default function Counter() {\n  const [n, setN] = useState(0);\n  return <button onClick={() => setN(n + 1)}>{n}</button>;\n}",
    "q": "When must you add \"use client\" to a component?",
    "a": "When it needs interactivity: hooks like useState/useEffect, event handlers, or browser-only APIs — all of which run in the browser."
  },
  {
    "text": "Server Actions are async functions marked with \"use server\" that run on the server but can be called directly from client code or wired to a <form> action.",
    "explain_dr": "\"use server\" = function kat-khdem f server wakha t-3ayet liha mn client. Fker kifach kat-tsaybha w fin kat-sta3melha.",
    "example": "\"use server\";\nexport async function createPost(formData) {\n  const title = formData.get('title');\n  await db.insert({ title });\n}",
    "q": "How does a Server Action reach the server without an API route?",
    "a": "Next.js serializes the call: the \"use server\" function executes on the server while the client invokes it like a normal async function or form action."
  },
  {
    "text": "next/link enables client-side navigation: clicking a <Link> swaps the page without a full reload and prefetches the target route for instant transitions.",
    "explain_dr": "Link kat-bedel l page bla reload w kat-prefetchi l route. Fker l far9 m3a <a> 3adiya.",
    "example": "import Link from 'next/link';\n<Link href=\"/blog\">Blog</Link>",
    "q": "What two performance wins does <Link> give over a plain <a>?",
    "a": "No full page reload (client-side navigation) and automatic prefetching of the linked route so it loads instantly."
  },
  {
    "text": "next/image automatically optimizes images: responsive resizing, lazy loading, modern formats (WebP/AVIF), and blur placeholders — you must set width/height or use fill.",
    "explain_dr": "next/image kat-sghar w kat-optimiw tsawer bo7dha. Fker chno khaso tzid: width/height wla fill.",
    "example": "import Image from 'next/image';\n<Image src=\"/hero.jpg\" alt=\"Hero\" width={1200} height={600} />",
    "q": "What must you always provide to next/image besides src and alt?",
    "a": "Dimensions: width and height, or the fill prop — Next.js needs them to reserve space and avoid layout shift."
  },
  {
    "text": "Exporting a metadata object (or generateMetadata for dynamic values) sets the page <head>: title, description, openGraph — no manual <head> tags needed.",
    "explain_dr": "metadata kat-bedel <head>: title, description... bla ma tkteb <head>. Fker l far9 bin metadata w generateMetadata.",
    "example": "export const metadata = {\n  title: 'Pricing',\n  description: 'Our plans',\n};",
    "q": "When do you use generateMetadata instead of a static metadata object?",
    "a": "When head values depend on data — e.g. fetching a post by slug to set a dynamic title — since generateMetadata can be async and receive params."
  },
  {
    "text": "A folder named [slug] creates a dynamic route: /blog/hello-world renders app/blog/[slug]/page.js with params.slug equal to \"hello-world\".",
    "explain_dr": "[slug] = placeholder f URL. Fker kifach kat-wsal l value l page: params.",
    "example": "// app/blog/[slug]/page.js\nexport default function Post({ params }) {\n  return <h1>{params.slug}</h1>;\n}",
    "q": "How does the page component read the dynamic part of the URL?",
    "a": "Through the params prop: the [slug] segment arrives as params.slug."
  },
  {
    "text": "layout.js defines shared UI (navbar, footer) that wraps all pages in its segment; it preserves state across navigation and does not re-render when only the child page changes.",
    "explain_dr": "layout.js UI mochtaraka ma kat-t3awdch t-renda melli kat-navigi. Fker 3lach: state kat-b9a.",
    "example": "// app/layout.js\nexport default function RootLayout({ children }) {\n  return (\n    <html><body>\n      <nav>...</nav>\n      {children}\n    </body></html>\n  );\n}",
    "q": "Why does a navbar inside layout.js not lose its state when you navigate?",
    "a": "Layouts are preserved across navigation — only the page segment re-renders, so layout state (like an open menu) survives."
  },
  {
    "text": "A loading.js file next to page.js renders instantly inside a Suspense boundary while the page streams in, giving an automatic skeleton/loading UI per route.",
    "explain_dr": "loading.js = UI li kat-ban melli l page mazal kat-ji. Fker chno kat-warri l user f had l wa9t.",
    "example": "// app/blog/loading.js\nexport default function Loading() {\n  return <p>Loading posts...</p>;\n}",
    "q": "What triggers the loading.js UI to appear?",
    "a": "Next.js wraps the page in a Suspense boundary, so loading.js shows automatically while the page's async data is still streaming in."
  },
  {
    "text": "error.js is a Client Component error boundary for its segment: it receives { error, reset } so the user can retry without losing the whole app.",
    "explain_dr": "error.js kat-ched l errors dyal segment dyalha w kat-3ti reset(). Fker 3lach khaso \"use client\".",
    "example": "\"use client\";\nexport default function Error({ error, reset }) {\n  return (\n    <div>\n      <p>Something broke</p>\n      <button onClick={() => reset()}>Try again</button>\n    </div>\n  );\n}",
    "q": "What does the reset() prop of error.js do?",
    "a": "It re-renders the failed segment, giving the user a 'try again' that retries just that part of the page instead of a full reload."
  },
  {
    "text": "A route.js file creates a Route Handler: an API endpoint where exported HTTP method functions (GET, POST...) return Response objects for that URL.",
    "explain_dr": "route.js = API endpoint f App Router. Fker chno kat-exporti: GET, POST...",
    "example": "// app/api/users/route.js\nexport async function GET() {\n  const users = await db.getUsers();\n  return Response.json(users);\n}\nexport async function POST(req) {\n  const body = await req.json();\n  return Response.json({ created: true }, { status: 201 });\n}",
    "q": "How do you handle two HTTP methods in one Route Handler file?",
    "a": "Export one async function per method — GET(), POST(), etc. — each returning a Response; Next.js routes the request to the matching export."
  },
  {
    "text": "middleware.js runs at the project root before a request completes: it can redirect, rewrite, or add headers — e.g. protecting /dashboard when no session cookie exists.",
    "explain_dr": "middleware.js kay-khdem 9bel l page: redirect, auth check... Fker fin kayn w chno y9dar ydir.",
    "example": "// middleware.js\nimport { NextResponse } from 'next/server';\nexport function middleware(req) {\n  if (!req.cookies.get('session')) {\n    return NextResponse.redirect(new URL('/login', req.url));\n  }\n}\nexport const config = { matcher: '/dashboard/:path*' };",
    "q": "How do you limit middleware to only run on certain URLs?",
    "a": "With the exported config.matcher — a path pattern like '/dashboard/:path*' — so the middleware only executes for matching requests."
  },
  {
    "text": "fetch() in Server Components is cached by default (force-cache); pass { cache: 'no-store' } for always-fresh data or { next: { revalidate: N } } for time-based revalidation.",
    "explain_dr": "fetch f server kat-t-cacha by default. Fker kifach kat-t7akem f cache: no-store, revalidate.",
    "example": "const fresh = await fetch(url, { cache: 'no-store' });\nconst hourly = await fetch(url, { next: { revalidate: 3600 } });",
    "q": "What is the difference between cache: 'no-store' and next: { revalidate: 3600 }?",
    "a": "no-store never caches (always dynamic and fresh); revalidate: 3600 caches the result but refreshes it at most once per hour."
  },
  {
    "text": "ISR (Incremental Static Regeneration): export const revalidate = N makes a statically generated page rebuild in the background at most every N seconds after the first request.",
    "explain_dr": "ISR = static + refresh kol N seconds. Fker l far9 binha w bin SSR.",
    "example": "// app/blog/page.js\nexport const revalidate = 60;\nexport default async function Blog() {\n  const posts = await getPosts();\n  return <List posts={posts} />;\n}",
    "q": "When is ISR a better choice than rendering on every request (SSR)?",
    "a": "When the data changes infrequently: you get static speed for most visitors and only rebuild in the background every N seconds."
  },
  {
    "text": "generateStaticParams() returns the list of dynamic route params to pre-render at build time — e.g. all blog slugs — so those pages are static HTML from the start.",
    "explain_dr": "generateStaticParams kat-gol l Next.js: pre-rendi had l slugs f build. Fker chno kat-rja3.",
    "example": "export async function generateStaticParams() {\n  const posts = await getPosts();\n  return posts.map(p => ({ slug: p.slug }));\n}",
    "q": "What shape must each item returned by generateStaticParams() have?",
    "a": "An object whose keys match the dynamic segment names — e.g. { slug: 'hello' } for a [slug] route."
  },
  {
    "text": "After a mutation, call revalidatePath('/blog') or revalidateTag('posts') in a Server Action to purge the cache on demand so the next visit gets fresh data.",
    "explain_dr": "Badelti data — l cache 9dim khaso ytm7a daba. Fker b chno: path wla tag.",
    "example": "\"use server\";\nimport { revalidatePath } from 'next/cache';\nexport async function createPost(formData) {\n  await db.insert({ title: formData.get('title') });\n  revalidatePath('/blog');\n}",
    "q": "When would you use revalidateTag instead of revalidatePath?",
    "a": "When the same data appears on many pages: tag all related fetches with next: { tags: ['posts'] }, then one revalidateTag('posts') purges them all."
  },
  {
    "text": "Environment variables without a prefix are server-only; only variables starting with NEXT_PUBLIC_ are inlined into browser JavaScript.",
    "explain_dr": "Bla NEXT_PUBLIC_ l variable ghir f server — secret. Fker chno kat-dir l prefix.",
    "example": "DATABASE_URL=postgres://...        # server only\nNEXT_PUBLIC_API_URL=https://...  # visible in browser",
    "q": "Where should you put a secret API key so the browser never sees it?",
    "a": "In a plain (non-NEXT_PUBLIC_) variable like API_SECRET: it stays server-only and is never bundled into client JavaScript."
  },
  {
    "text": "not-found.js renders a custom 404 UI for its segment; call notFound() from next/navigation inside a page when the data does not exist (e.g. unknown slug).",
    "explain_dr": "notFound() kat-warri not-found.js b 404. Fker imta kat-3ayet liha: slug ma kaynach.",
    "example": "import { notFound } from 'next/navigation';\nexport default async function Post({ params }) {\n  const post = await getPost(params.slug);\n  if (!post) notFound();\n  return <h1>{post.title}</h1>;\n}",
    "q": "What HTTP status does the notFound() UI return?",
    "a": "404 — the closest not-found.js renders with a proper 404 status, which is also what search engines expect for missing pages."
  },
  {
    "text": "Streaming with <Suspense>: wrap a slow Server Component in Suspense with a fallback so the rest of the page renders instantly and the slow part streams in when ready.",
    "explain_dr": "Suspense kat-khali l page t-ban w l slow part kat-ji mn ba3d. Fker chno kat-warri l fallback.",
    "example": "import { Suspense } from 'react';\n<Suspense fallback={<p>Loading comments...</p>}>\n  <Comments postId={id} />\n</Suspense>",
    "q": "How does streaming improve perceived performance versus waiting for all data?",
    "a": "The shell of the page reaches the browser immediately; each Suspense boundary fills in as its data resolves instead of blocking the whole page."
  },
  {
    "text": "next/font self-hosts Google (or local) fonts at build time: no external request, automatic subsetting, and zero layout shift via size-adjust fallbacks.",
    "explain_dr": "next/font kat-host l font m3a site dyalk f build. Fker chno kat-rba7: privacy, speed, CLS.",
    "example": "import { Inter } from 'next/font/google';\nconst inter = Inter({ subsets: ['latin'] });\nexport default function RootLayout({ children }) {\n  return <html className={inter.className}><body>{children}</body></html>;\n}",
    "q": "How do you apply a next/font font to the whole app?",
    "a": "Call the font loader (e.g. Inter({ subsets: ['latin'] })) and put its className on the <html> or <body> element in the root layout."
  },
  {
    "text": "In a Server Component, start independent fetches together with Promise.all instead of sequential awaits — sequential awaits create a request waterfall that adds up latencies.",
    "explain_dr": "await mor await = waterfall bati2. Promise.all bjojhom m3a b3d. Fker l far9 f wa9t.",
    "example": "const [user, posts] = await Promise.all([getUser(id), getPosts(id)]);",
    "q": "Two requests take 300ms each. How long do sequential awaits take versus Promise.all?",
    "a": "Sequential: ~600ms (one waits for the other); Promise.all: ~300ms (both run at once) — the waterfall doubles the latency."
  },
  {
    "text": "Deploying to Vercel is the zero-config path: push to Git and every commit gets a preview URL; alternatively next build + next start runs the production server anywhere Node.js runs.",
    "explain_dr": "Vercel = push w deploy bo7do. Wla next build + next start f ay server. Fker chno kat-rba7 m3a Vercel.",
    "example": "npm run build   # next build\nnpm start       # next start (production server)",
    "q": "What do you get on Vercel for every pull request automatically?",
    "a": "A unique preview deployment URL, so reviewers can test the exact changes before merging."
  },
  ],
  "Bootstrap": [
  {
    "text": "Bootstrap is a mobile-first CSS framework: it ships a responsive 12-column grid, pre-styled components, and utility classes so you build layouts without writing much custom CSS.",
    "explain_dr": "Bootstrap framework dyal CSS: grid responsive, components jahzin, w utilities — kat-bni dghya bla CSS bzaf.",
    "example": "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet'>",
    "q": "What three things does Bootstrap give you out of the box?",
    "a": "A responsive 12-column grid, pre-styled components (navbar, cards, modals...), and utility classes for spacing, layout, and typography."
  },
  {
    "text": "The fastest way to try Bootstrap is the CDN: add the compiled CSS <link> in <head> and the JS bundle just before </body>.",
    "explain_dr": "Bach t-jareb Bootstrap dghya, zid link dyal CSS f head w script dyal JS 9bel ma ytssed body.",
    "example": "<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'></script>",
    "q": "Where do the Bootstrap CSS link and JS script go in an HTML page?",
    "a": "The CSS <link> goes in <head>; the JS bundle goes at the end of <body>, just before </body>."
  },
  {
    "text": "bootstrap.bundle.min.js already includes Popper.js, which dropdowns, tooltips, and popovers need to position themselves.",
    "explain_dr": "Bundle = Bootstrap + Popper mjmo3in; Popper howa li kay-positioni dropdowns w tooltips.",
    "example": "<!-- bundle = bootstrap + popper in one file -->\n<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'></script>",
    "q": "Why should you prefer the bundle file over bootstrap.min.js?",
    "a": "Because the bundle includes Popper.js, required for positioning dropdowns, tooltips, and popovers — with bootstrap.min.js alone you would have to add Popper separately."
  },
  {
    "text": "The grid always has 12 columns per row: column widths are fractions of 12, e.g. col-4 is one third of the row.",
    "explain_dr": "Grid fih 12 columns — col-4 = 4/12 ya3ni 1/3 dyal row.",
    "example": "<div class='row'>\n  <div class='col-4'>A</div>\n  <div class='col-4'>B</div>\n  <div class='col-4'>C</div>\n</div>",
    "q": "Three equal columns in one row — which class does each get?",
    "a": "col-4: 4 + 4 + 4 = 12, so each takes one third of the row."
  },
  {
    "text": ".container centers content with responsive fixed max-widths; .container-fluid always spans 100% of the viewport width.",
    "explain_dr": "container kay-markazi w 3ndo max-width, container-fluid dayman 100% width.",
    "example": "<div class='container'><!-- centered, max-width --></div>\n<div class='container-fluid'><!-- full width --></div>",
    "q": "You want a full-width hero banner. Which wrapper do you use?",
    "a": "container-fluid, because it always spans the full viewport width, unlike container which caps the width and centers the content."
  },
  {
    "text": "Breakpoints are mobile-first min-widths: sm 576px, md 768px, lg 992px, xl 1200px, xxl 1400px — an md class applies at md and everything larger.",
    "explain_dr": "Breakpoints mobile-first: sm 576, md 768, lg 992, xl 1200, xxl 1400 — class dyal md kat-khdem mn md lfo9.",
    "example": "<div class='col-12 col-lg-6'><!-- stacked until lg --></div>",
    "q": "What does col-lg-6 do on an 800px-wide screen?",
    "a": "Nothing yet — 800px is below lg (992px), so col-12 applies and the column stays full-width; col-lg-6 kicks in at 992px and up."
  },
  {
    "text": "Combine a base column class with a breakpoint one (col-12 col-md-6) to stack on phones and split 50/50 on tablets and up.",
    "explain_dr": "col-12 col-md-6 = full-width f tele, nss-nss mn md lfo9.",
    "example": "<div class='row'>\n  <div class='col-12 col-md-6'>A</div>\n  <div class='col-12 col-md-6'>B</div>\n</div>",
    "q": "How do two columns stack on mobile but sit side-by-side on desktop?",
    "a": "Give each col-12 col-md-6: full-width by default (mobile), half-width from the md breakpoint upward."
  },
  {
    "text": "Gutters are the gaps between columns: set them on the row with g-* (g-3), or gx-* / gy-* for horizontal/vertical only.",
    "explain_dr": "Gutters = l-faragh bin columns, kat-tzad b g-* 3la row.",
    "example": "<div class='row g-4'>\n  <div class='col-6'>...</div>\n  <div class='col-6'>...</div>\n</div>",
    "q": "Why add g-4 to the row instead of m-4 to each column?",
    "a": "Because margins on columns break the 12-column math and alignment; g-* sets gutters cleanly through the row."
  },
  {
    "text": "Spacing utilities follow {m|p}-{side}-{size}: m = margin, p = padding, sides t/b/s/e/x/y, size 0-5 (3 = 1rem), plus auto.",
    "explain_dr": "m w p, sides t/b/s/e/x/y, sizes 0-5 (3 = 1rem). Hfed had l pattern.",
    "example": "<div class='mt-3 px-4 mx-auto'>...</div>",
    "q": "What does px-4 do?",
    "a": "It adds horizontal padding (left + right) of size 4, i.e. 1.5rem on each side."
  },
  {
    "text": "Display utilities (d-none, d-block, d-flex...) can be breakpoint-scoped: d-none d-md-block hides on phones, shows from md up.",
    "explain_dr": "d-none d-md-block = mkhebbi f tele, bayen mn md lfo9.",
    "example": "<aside class='d-none d-lg-block'><!-- desktop only --></aside>",
    "q": "How do you show a sidebar only on large screens?",
    "a": "With d-none d-lg-block: hidden everywhere by default, displayed as block from the lg breakpoint upward."
  },
  {
    "text": "Flex utilities turn any element into a flex container: d-flex with justify-content-* (main axis) and align-items-* (cross axis).",
    "explain_dr": "d-flex + justify-content-* w align-items-* bach t-centreri w t-rteb l children.",
    "example": "<div class='d-flex justify-content-between align-items-center'>...</div>",
    "q": "How do you push two children to opposite ends of a flex row and center them vertically?",
    "a": "d-flex justify-content-between align-items-center: between spreads them to the ends, align-items-center centers them on the cross axis."
  },
  {
    "text": "Text utilities handle alignment, weight, and size: text-center, fw-bold, fst-italic, fs-4, text-muted, text-decoration-none.",
    "explain_dr": "text-* l alignment w colors, fw-bold l weight, fs-* l size.",
    "example": "<p class='text-center fw-bold fs-5 text-muted'>Hello</p>",
    "q": "Which classes make a paragraph centered, bold, and gray?",
    "a": "text-center fw-bold text-muted (add fs-5 for a larger size)."
  },
  {
    "text": "Theme colors apply via bg-* and text-* (bg-primary, text-white, bg-danger...), and borders via border / border-primary.",
    "explain_dr": "Colors: bg-* l background, text-* l text, border-* l borders.",
    "example": "<div class='bg-primary text-white border border-light p-3'>...</div>",
    "q": "How do you make a blue box with white text and a light border?",
    "a": "bg-primary text-white border border-light — bg-* sets the background, text-* the text color, border adds the border."
  },
  {
    "text": "Buttons need the base .btn class plus a style: btn-primary, btn-outline-secondary, btn-lg / btn-sm for sizes.",
    "explain_dr": "Button khaso .btn + style bhal btn-primary wla btn-outline-danger.",
    "example": "<button class='btn btn-outline-danger btn-sm'>Delete</button>",
    "q": "How do you make a small outlined red button?",
    "a": "btn btn-outline-danger btn-sm: btn is required, btn-outline-danger gives the red outline style, btn-sm shrinks it."
  },
  {
    "text": "A card is .card containing .card-body, with optional .card-title, .card-text, .card-img-top, and .card-footer.",
    "explain_dr": "Card = .card w ldakhel .card-body, w ymkn t-zid title, image, footer.",
    "example": "<div class='card' style='width: 18rem;'>\n  <img class='card-img-top' src='a.jpg'>\n  <div class='card-body'>\n    <h5 class='card-title'>Title</h5>\n  </div>\n</div>",
    "q": "Where does the card title go inside a card?",
    "a": "Inside .card-body (which is inside .card), using the .card-title class on a heading."
  },
  {
    "text": "A responsive navbar uses navbar + navbar-expand-lg; below lg the links hide behind the navbar-toggler button targeting the collapse div.",
    "explain_dr": "Navbar: navbar-expand-lg bach t-t replia lte7t mn lg, w toggler kay-che3el l collapse.",
    "example": "<nav class='navbar navbar-expand-lg navbar-dark bg-dark'>\n  <button class='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#nav'>...</button>\n  <div class='collapse navbar-collapse' id='nav'>...</div>\n</nav>",
    "q": "The hamburger shows but clicking does nothing — what do you check first?",
    "a": "That the toggler's data-bs-target exactly matches the collapse div's id (including the #), and that the Bootstrap JS bundle is loaded."
  },
  {
    "text": "Modals need the nesting .modal > .modal-dialog > .modal-content, and open via data-bs-toggle='modal' data-bs-target='#id' — no custom JS required.",
    "explain_dr": "Modal = .modal > .modal-dialog > .modal-content, w kat-t7al b data-bs-toggle='modal'.",
    "example": "<div class='modal' id='demo' tabindex='-1'>\n  <div class='modal-dialog'>\n    <div class='modal-content'><!-- header / body / footer --></div>\n  </div>\n</div>",
    "q": "Your modal opens but looks broken (no dialog box styling). What's the likely cause?",
    "a": "The .modal-dialog and/or .modal-content wrappers are missing — the required three-level nesting must be exact."
  },
  {
    "text": "Bootstrap 5 dropped jQuery: all interactive components are vanilla JS, triggered with data-bs-* attributes (not data-*).",
    "explain_dr": "v5 bla jQuery — components b data-bs-* (data-bs-toggle...).",
    "example": "<button data-bs-toggle='collapse' data-bs-target='#more'>More</button>",
    "q": "You copied a Bootstrap 4 snippet with data-toggle='modal' and it doesn't work in v5. Why?",
    "a": "Bootstrap 5 renamed all data attributes to the data-bs-* namespace, so it must be data-bs-toggle='modal'."
  },
  {
    "text": "An accordion is a stack of .accordion-item blocks; data-bs-parent on each collapse keeps only one item open at a time.",
    "explain_dr": "Accordion: items, w data-bs-parent bach wa7ed bo7do yt7al.",
    "example": "<div class='accordion' id='faq'>\n  <div class='accordion-item'>\n    <div id='c1' class='accordion-collapse collapse' data-bs-parent='#faq'>...</div>\n  </div>\n</div>",
    "q": "Two accordion items stay open at once — what attribute is missing?",
    "a": "data-bs-parent='#faq' on each .accordion-collapse: without it, items open and close independently."
  },
  {
    "text": "A carousel needs .carousel.slide on the wrapper, .carousel-inner > .carousel-item children (first one .active), and data-bs-ride='carousel' to auto-cycle.",
    "explain_dr": "Carousel: .carousel.slide + .carousel-item (lwel active) + data-bs-ride.",
    "example": "<div id='hero' class='carousel slide' data-bs-ride='carousel'>\n  <div class='carousel-inner'>\n    <div class='carousel-item active'>...</div>\n  </div>\n</div>",
    "q": "Your carousel shows only the first slide statically. What makes it cycle?",
    "a": "data-bs-ride='carousel' on the wrapper starts auto-cycling; add prev/next controls or indicators for manual navigation."
  },
  {
    "text": "A dropdown is .dropdown wrapping a button with data-bs-toggle='dropdown' and a sibling .dropdown-menu list.",
    "explain_dr": "Dropdown: button b data-bs-toggle='dropdown' + .dropdown-menu.",
    "example": "<div class='dropdown'>\n  <button class='btn' data-bs-toggle='dropdown'>Menu</button>\n  <ul class='dropdown-menu'><li><a class='dropdown-item' href='#'>One</a></li></ul>\n</div>",
    "q": "The dropdown button does nothing when clicked. What's the first thing to verify?",
    "a": "That the button has data-bs-toggle='dropdown' and the Bootstrap bundle JS (with Popper) is loaded — dropdowns need JavaScript."
  },
  {
    "text": "Tooltips and popovers need JavaScript initialization in Bootstrap 5 — data-bs-toggle='tooltip' alone is not enough.",
    "explain_dr": "Tooltip khaso JS init, data attribute bo7do ma kafich.",
    "example": "<button id='tip' data-bs-toggle='tooltip' title='Hi'>?</button>\n<script>new bootstrap.Tooltip(document.getElementById('tip'));</script>",
    "q": "Why doesn't your tooltip appear even though the attribute is correct?",
    "a": "Because Bootstrap 5 requires explicit JS initialization — e.g. new bootstrap.Tooltip(element) — for tooltips and popovers."
  },
  {
    "text": "Form controls use .form-control (inputs), .form-label, .form-select (dropdowns), and .form-check for checkboxes/radios.",
    "explain_dr": "Forms: form-control l inputs, form-select l selects, form-check l checkboxes.",
    "example": "<label class='form-label'>Email</label>\n<input type='email' class='form-control' placeholder='you@mail.com'>\n<select class='form-select'>...</select>",
    "q": "Your <select> looks like a plain browser dropdown. Which class styles it?",
    "a": "form-select — the Bootstrap class that styles native <select> elements (form-control is only for text-like inputs)."
  },
  {
    "text": "Custom validation: add novalidate + .needs-validation to the form, then add .was-validated on submit via JS to show valid/invalid feedback.",
    "explain_dr": "Validation: novalidate + needs-validation, w melli t-submiti zid was-validated b JS.",
    "example": "<form class='needs-validation' novalidate>\n  <input class='form-control' required>\n  <div class='invalid-feedback'>Required.</div>\n</form>",
    "q": "When do the green/red validation styles actually appear?",
    "a": "Only after .was-validated is added to the form (typically on submit via JavaScript) — .needs-validation alone just prepares the form."
  },
  {
    "text": "Dark mode is a color mode: add data-bs-theme='dark' to <html>; components adapt automatically via CSS variables.",
    "explain_dr": "Dark mode: data-bs-theme='dark' 3la <html> w kolchi kaytbedel.",
    "example": "<html data-bs-theme='dark'><!-- whole page goes dark --></html>",
    "q": "How do you scope dark mode to just one card instead of the whole page?",
    "a": "Put data-bs-theme='dark' on the card's wrapper div instead of <html> — color modes cascade to descendants."
  },
  ],
},
  },
  {
    lang: "FR",
    notes: {
  "React": [
    {
      "text": "React est une bibliothèque JavaScript pour construire des interfaces utilisateur à partir de composants réutilisables.",
      "explain_dr": "React howa library dyal JavaScript bach t-sna3 interfaces mn components tqdar t3awed tsta3malhum f bzaf dyal blayes.",
      "example": "function App() {\n  return <div><Header /><Footer /></div>; // reuse components\n}",
      "q": "Dans l'exemple, qu'illustrent `<Header />` et `<Footer />` sur la construction des apps React ?",
      "a": "Ils illustrent que les apps React sont assemblées à partir de composants réutilisables — le même Header ou Footer peut être affiché dans autant de pages qu'on veut."
    },
    {
      "text": "Les composants sont des fonctions qui retournent du JSX ; leur nom doit commencer par une majuscule.",
      "explain_dr": "Component howa ghir function kat-rja3 JSX, w lazem smito ybda b 7arf kbir bach React y3arfo.",
      "example": "function Welcome() {\n  return <h1>Hello!</h1>;\n}",
      "q": "Que se passerait-il si le composant de l'exemple s'appelait `welcome` (minuscule) au lieu de `Welcome` ?",
      "a": "React traiterait `<welcome>` comme une simple balise HTML au lieu de votre composant, donc votre fonction composant ne s'exécuterait jamais."
    },
    {
      "text": "Déclarez l'état avec `useState()`. Les rendus se répètent à chaque changement d'état.",
      "explain_dr": "useState() bih kat-declari state, w ay mra state ytbedel, component kat-re-renderi.",
      "example": "const [count, setCount] = useState(0);",
      "q": "Après `const [count, setCount] = useState(0);`, que se passe-t-il à l'écran quand on appelle `setCount(5)` ?",
      "a": "React re-affiche le composant avec la nouvelle valeur d'état, donc `count` affiche 5."
    },
    {
      "text": "Ne mutez jamais l'état directement — passez toujours une nouvelle valeur : `setItems([...items, newItem])`.",
      "explain_dr": "Matsowebch state nichan — dayman 3ti value jdida, b7al spread operator, bach React y7ess b tabdil.",
      "example": "setItems([...items, newItem]); // new array, not items.push()",
      "q": "Pourquoi `setItems([...items, newItem])` est-il correct alors que `items.push(newItem); setItems(items)` ne met pas l'UI à jour ?",
      "a": "Parce que `push` modifie la même référence de tableau, donc React ne détecte aucun changement et saute le re-rendu ; le spread crée une nouvelle référence qui déclenche la mise à jour."
    },
    {
      "text": "Exécutez les effets de bord (fetch, abonnements, minuteurs) dans `useEffect()`, avec un tableau de dépendances.",
      "explain_dr": "useEffect() howa blassa dyal side effects b7al fetch w timers, w dependency array kat-golo imta y-t3awed.",
      "example": "useEffect(() => {\n  fetchUsers().then(setUsers);\n}, [userId]);",
      "q": "Dans l'exemple, quand la requête fetch s'exécute-t-elle à nouveau ?",
      "a": "Uniquement quand `userId` change — le tableau de dépendances dit à React de relancer l'effet après les rendus où `userId` diffère."
    },
    {
      "text": "Un tableau de dépendances vide `[]` fait que l'effet ne s'exécute qu'une fois après le montage.",
      "explain_dr": "ila khaliti [] khawya, effect ghadi ykhdem ghir mra wa7da melli component y-mounta.",
      "example": "useEffect(() => {\n  console.log(\"mounted once\");\n}, []);",
      "q": "Si l'effet de l'exemple affiche `\"mounted once\"`, combien de fois le verriez-vous dans la console pendant la vie du composant (sans le double appel de StrictMode) ?",
      "a": "Exactement une fois — un tableau de dépendances vide signifie que l'effet ne s'exécute qu'après le premier montage, jamais ensuite."
    },
    {
      "text": "Transmettez les données vers le bas avec les props ; les props sont en lecture seule dans le composant enfant.",
      "explain_dr": "Props kat-hbet mn parent l child, w child ma-yqdarsh ybeddelhum — ghir yqrahum.",
      "example": "function Child({ name }) {\n  return <p>Hello {name}</p>; // can read name, never change it\n}",
      "q": "Que se passe-t-il si le composant Child de l'exemple essaie `name = \"Bob\"` avant d'afficher ?",
      "a": "Rien d'utile — les props sont en lecture seule dans l'enfant ; réaffecter une prop localement ne met pas à jour les données du parent et l'affectation est perdue au rendu suivant."
    },
    {
      "text": "Remontez l'état vers le parent commun le plus proche quand deux composants doivent le partager.",
      "explain_dr": "ila joj components khasshum nafs state, tel3o l a9rab parent moshtarak binathum.",
      "example": "function Parent() {\n  const [shared, setShared] = useState(\"\");\n  return <><A value={shared} /><B onChange={setShared} /></>;\n}",
      "q": "Dans l'exemple, pourquoi l'état `shared` vit-il dans Parent plutôt que dans A ou B ?",
      "a": "Parce que A et B en ont tous deux besoin — le remonter à leur plus proche parent commun permet à A de le recevoir en prop et à B de le modifier via le setter passé en prop."
    },
    {
      "text": "Donnez aux éléments de liste une prop `key` stable pour que React puisse les suivre entre les rendus.",
      "explain_dr": "key stable kat-3awn React y3ref chkon element li tbedel f list, bach ma y-re-renderish kolchi.",
      "example": "{users.map(u => <li key={u.id}>{u.name}</li>)}",
      "q": "Si `users` est réordonné dans l'exemple, en quoi `key={u.id}` aide-t-il React ?",
      "a": "React associe chaque `<li>` au même utilisateur grâce à l'id stable, et déplace donc les nœuds DOM existants au lieu de les détruire et de les recréer."
    },
    {
      "text": "Un nouveau rendu se produit quand l'état ou les props changent — évitez les calculs lourds en ligne sans `useMemo()`.",
      "explain_dr": "Re-render kat-w9e3 melli state wla props ytbedlo — 7seb 7wayj t9al b useMemo() bach ma t3awdsh t7sabhom.",
      "example": "const total = useMemo(\n  () => items.reduce((s, i) => s + i.price, 0),\n  [items]\n);",
      "q": "Dans l'exemple, qu'est-ce que `useMemo` évite quand le composant se re-rend pour une raison sans rapport (p. ex. un autre état change) ?",
      "a": "Il évite de recalculer le `reduce` sur `items` — le total en cache est réutilisé car `items` n'a pas changé."
    },
    {
      "text": "Ne stockez pas un état dérivé — s'il peut être calculé depuis les props, calculez-le pendant le rendu plutôt que de le synchroniser avec `useEffect()` + `setState()`.",
      "explain_dr": "ila state tqdar t7sabha mn props, ma t7ott-hach f state — 7sebha nichan f render, 7it effect + setState ghadi ydir lag.",
      "example": "const fullName = first + \" \" + last; // derived, no useState needed",
      "q": "Pourquoi calculer `fullName` pendant le rendu vaut-il mieux que le stocker avec `useState` + le synchroniser via `useEffect` ?",
      "a": "Le dériver pendant le rendu le garde toujours synchronisé sans re-rendu supplémentaire ; le synchroniser avec un effet ajoute un retard d'un rendu et risque des valeurs obsolètes."
    },
    {
      "text": "La fermeture obsolète (stale closure) dans `useEffect()` est le bug n°1 des minuteurs : utilisez la forme fonctionnelle `setCount(c => c + 1)` ou incluez la valeur dans le tableau de dépendances.",
      "explain_dr": "Stale closure: setTimeout wla event handler li khda state 9dim — st3mel setCount(c => c + 1) bach takhod akhir value.",
      "example": "setInterval(() => setCount(c => c + 1), 1000); // functional form",
      "q": "Dans un `setInterval` qui appelle `setCount(count + 1)`, pourquoi le compteur reste-t-il bloqué — et comment le `setCount(c => c + 1)` de l'exemple corrige-t-il ça ?",
      "a": "La closure de l'intervalle capture la valeur de `count` du premier rendu, donc elle réaffecte toujours la même valeur ; la forme fonctionnelle lit l'état le plus récent à chaque tick."
    },
    {
      "text": "Nettoyez toujours vos effets : retournez une fonction de nettoyage depuis `useEffect()` pour effacer les minuteurs, annuler les fetch et retirer les écouteurs.",
      "explain_dr": "useEffect lazem y-rja3 cleanup function bach t-ms7 timers w listeners, wla ghadi y-tstackew w y-dirou memory leaks.",
      "example": "useEffect(() => {\n  const id = setInterval(tick, 1000);\n  return () => clearInterval(id);\n}, []);",
      "q": "Dans l'exemple, que se passerait-il s'il manquait le nettoyage `() => clearInterval(id)` et que le composant se démontait ?",
      "a": "L'intervalle continuerait à déclencher `tick` après le démontage — une fuite mémoire qui peut aussi appeler `setState` sur un composant démonté."
    },
    {
      "text": "La forme fonctionnelle `setCount(c => c + 1)` garantit que vous travaillez avec le dernier état, même lors de mises à jour rapides successives.",
      "explain_dr": "Functional update setCount(c => c + 1) kat-garantir annak khdam b akhir state, wakha updates yjiw bzriba.",
      "example": "setCount(c => c + 1); // safe even for rapid successive updates",
      "q": "Si un gestionnaire de clic appelle `setCount(count + 1)` deux fois de suite, quel est le compteur final — et comment la forme de l'exemple change-t-elle ça ?",
      "a": "Avec `count + 1` deux fois, les deux appels utilisent le même `count` obsolète, donc le total n'augmente que de 1 ; la forme fonctionnelle applique chaque mise à jour à la valeur la plus récente, donc il augmente de 2."
    },
    {
      "text": "`useRef()` stocke une valeur mutable qui survit aux rendus sans en déclencher — idéal pour les nœuds DOM et les valeurs précédentes.",
      "explain_dr": "useRef b7al sandou9 kat-khebbi fih value li kat-b9a bin renders bla ma t-declenchi render.",
      "example": "const inputRef = useRef(null);\ninputRef.current.focus();",
      "q": "Pourquoi `inputRef` vaut-il mieux qu'un `useState` pour stocker le nœud DOM de l'input dans l'exemple ?",
      "a": "Affecter `inputRef.current` ne déclenche pas de re-rendu, alors qu'un `useState` re-rendrait le composant à chaque affectation de la ref."
    },
    {
      "text": "`useCallback()` et `useMemo()` ne servent que si l'enfant est mémoïsé avec `React.memo()` — sinon, c'est du surcoût inutile.",
      "explain_dr": "useCallback w useMemo ma 3endhum ta faida ila child ma-kanetch memoized b React.memo — bla bih ghir overhead zayd.",
      "example": "const Child = React.memo(({ onClick }) =>\n  <button onClick={onClick}>Save</button>\n);",
      "q": "Dans l'exemple, que se passe-t-il si on retire `React.memo` de Child mais qu'on continue à mémoïser la prop `onClick` ?",
      "a": "L'optimisation cesse de fonctionner — Child se re-rend de toute façon à chaque rendu du parent, donc mémoïser le callback ajoute juste du coût sans bénéfice."
    },
    {
      "text": "React 18 regroupe automatiquement toutes les mises à jour d'état ; plusieurs appels `setState()` dans un gestionnaire provoquent un seul rendu.",
      "explain_dr": "React 18 kat-jme3 updates dyal state bo7dhum — bzaf dyal setState f nafs handler = ghir render wa7da.",
      "example": "function handleClick() {\n  setCount(c => c + 1);\n  setName(\"Aymane\"); // batched: one re-render total\n}",
      "q": "Dans le gestionnaire de l'exemple, combien de re-rendus les deux appels `setState` provoquent-ils ?",
      "a": "Un seul — React 18 regroupe toutes les mises à jour d'état faites dans le même gestionnaire d'événement en un seul re-rendu."
    },
    {
      "text": "Les props changent d'identité à chaque rendu si vous passez des objets/tableaux en ligne : `<Comp data={{ a: 1 }} />` casse la mémoïsation — extrayez-les.",
      "explain_dr": "Objet inline f props b7al data={{a:1}} kat-tkhal9 reference jdida kol render — kharjo l barra bach memoization t-khdem.",
      "example": "const data = { a: 1 }; // defined once, outside the render\n<Comp data={data} />",
      "q": "Pourquoi `<Comp data={{ a: 1 }} />` neutralise-t-il `React.memo` alors que le `data` remonté de l'exemple ne le fait pas ?",
      "a": "Le littéral inline crée une nouvelle identité d'objet à chaque rendu, donc la comparaison de mémo voit toujours des props changées ; le `data` remonté garde une identité stable entre les rendus."
    },
    {
      "text": "N'appelez jamais un composant comme une simple fonction (`Card()`) — ses hooks casseront. Rendez-le toujours en JSX `<Card />`.",
      "explain_dr": "Ma-t3yetsh l component b7al function Card() — hooks ghadi y-tkherb9o. Dayman renderiha b7al JSX <Card />.",
      "example": "<Card /> // correct — hooks keep working\n// Card()  // wrong — hooks break",
      "q": "Qu'est-ce qui casse si on écrit `Card()` au lieu de `<Card />` dans l'exemple ?",
      "a": "React ne peut pas suivre l'appel comme une instance de composant, donc ses hooks ne partagent aucun état isolé et violent les règles des hooks — l'état et les effets se comporteront mal."
    },
    {
      "text": "Les hooks conditionnels (`if (ok) useState(...)`) violent les règles des hooks — appelez-les dans le même ordre, au niveau supérieur uniquement.",
      "explain_dr": "Hooks khasshum y-t3eyto dayman b nafs tartib — if qbel useState ghadi y-heress rules dyal hooks.",
      "example": "const [data, setData] = useState(null); // always top-level\nif (data) { /* render logic goes here, hooks stay above */ }",
      "q": "Pourquoi `useState` doit-il rester au-dessus du `if (data)` dans l'exemple au lieu d'être dedans ?",
      "a": "Les hooks doivent s'exécuter dans le même ordre à chaque rendu ; en appeler un conditionnellement décale l'ordre aux rendus suivants et React perd le lien entre l'état et son hook."
    },
    {
      "text": "Les clés doivent être stables et uniques — l'index du tableau comme `key` casse le réordonnancement, les animations et l'état des champs.",
      "explain_dr": "Index dyal array b7al key ghir f lists static — f lists li kat-tbedel wla kat-t-reorder, key lazem tkon stable w unique.",
      "example": "<li key={todo.id}>{todo.text}</li> // not key={index}",
      "q": "Dans la liste de todos de l'exemple, que se passe-t-il si on utilise `key={index}` puis qu'on supprime le premier todo ?",
      "a": "React garde les nœuds DOM associés à leurs positions d'index, donc les inputs, le focus ou les animations suivent le mauvais todo après le décalage."
    },
    {
      "text": "`useReducer()` centralise la logique d'état complexe en une seule fonction — plus propre que plusieurs `useState()` quand les mises à jour interagissent.",
      "explain_dr": "useReducer howa l-7al melli state twelli m3a99da — kol logic dyal updates f blassa wa7da, n9iya kter mn bzaf dyal useState.",
      "example": "const [state, dispatch] = useReducer(reducer, { count: 0 });\ndispatch({ type: \"increment\" });",
      "q": "Quand faut-il préférer le `useReducer` de l'exemple à plusieurs appels `useState` ?",
      "a": "Quand les mises à jour d'état interagissent entre elles ou dépendent de valeurs précédentes de façon complexe — un reducer regroupe toute la logique de transition dans une seule fonction prévisible."
    },
    {
      "text": "Les error boundaries (`componentDidCatch`) n'existent qu'en classes — il n'y a toujours pas d'équivalent hook ; utilisez une classe ou une bibliothèque.",
      "explain_dr": "Error boundaries ghir b classes — ma-kaynch hook equivalent, khassk class wrapper wla library.",
      "example": "class ErrorBoundary extends React.Component {\n  componentDidCatch(err) { this.setState({ hasError: true }); }\n}",
      "q": "Pourquoi ne peut-on pas remplacer la classe de l'exemple par un composant fonction + `useEffect` pour attraper les erreurs de rendu ?",
      "a": "Parce que `componentDidCatch` est une API réservée aux classes — il n'existe aucun hook équivalent, donc les composants fonction ne peuvent pas implémenter directement les error boundaries."
    },
    {
      "text": "Les hooks personnalisés doivent commencer par `use` (`useFetch`) pour que le linter et les DevTools les reconnaissent comme hooks.",
      "explain_dr": "Custom hook lazem smito ybda b 'use' bach linter w DevTools y3arfo annaho hook.",
      "example": "function useFetch(url) {\n  const [data, setData] = useState(null);\n  return data;\n}",
      "q": "Qu'est-ce qui casse si on renomme le `useFetch` de l'exemple en `fetchData` ?",
      "a": "React et le linter ne le reconnaissent plus comme un hook — les vérifications des règles des hooks cessent de s'appliquer et DevTools ne le traitera plus comme un hook, même s'il appelle des hooks en interne."
    },
    {
      "text": "`Suspense` + `lazy()` découpe le code des routes : `const Page = lazy(() => import('./Page'))` enveloppé dans `<Suspense fallback={...}>`.",
      "explain_dr": "lazy() + Suspense bach t-code-split: pages kat-t-loada ghir melli user y-7tajha, w fallback kat-ban f blast tsanna.",
      "example": "const Page = lazy(() => import(\"./Page\"));\n<Suspense fallback={<p>Loading...</p>}><Page /></Suspense>",
      "q": "Dans l'exemple, que voit l'utilisateur pendant que `./Page` est encore en cours de téléchargement ?",
      "a": "Le fallback `<p>Loading...</p>` — Suspense l'affiche jusqu'à ce que l'import lazy se résolve."
    }
  ],
  "Javascript": [
    {
      "text": "`let` permet la réassignation, `const` non ; `var` a une portée de fonction et est à éviter.",
      "explain_dr": "let kat-tbedel, const la; var function-scoped w 7ssen t-tjannbo.",
      "example": "let x = 1; x = 2; // reassignable\nconst y = 3;        // cannot reassign\n// var is function-scoped — avoid it",
      "q": "Dans l'exemple, quelle ligne lèverait une erreur si on essayait de réaffecter la variable ensuite ?",
      "a": "La ligne `const y = 3` — `const` interdit la réaffectation, alors que `let x` peut être réaffecté librement."
    },
    {
      "text": "`===` compare la valeur et le type ; `==` convertit les types et est une source fréquente de bugs.",
      "explain_dr": "=== kat-9aren value w type bjoj; == kat-dir coercion w kat-jib bugs.",
      "example": "1 === \"1\"; // false (value + type)\n1 == \"1\";  // true (type coercion)",
      "q": "D'après l'exemple, que retourne `1 === \"1\"` et pourquoi `1 == \"1\"` diffère-t-il ?",
      "a": "`1 === \"1\"` vaut false car les types diffèrent ; `1 == \"1\"` vaut true car `==` convertit la chaîne en nombre avant de comparer."
    },
    {
      "text": "Les fonctions sont de première classe : on peut les assigner, les passer en argument et les retourner.",
      "explain_dr": "Functions f JS first-class — tqdar t-assigniha, t-passiha b7al argument, w t-rje3ha.",
      "example": "const run = (fn) => fn();\nrun(() => console.log(\"hi\"));",
      "q": "Qu'affiche `run(() => console.log(\"hi\"))`, et pourquoi ?",
      "a": "Ça affiche `hi` — `run` reçoit la fonction fléchée en paramètre `fn` et l'appelle avec `fn()`."
    },
    {
      "text": "Les fonctions fléchées `() => {}` n'ont pas leur propre `this` ; elles héritent de celui de la portée englobante.",
      "explain_dr": "Arrow function ma-3endha-sh this dyalha — kat-wereth this mn scope li dayer biha.",
      "example": "button.addEventListener(\"click\", () => this.handle());\n// arrow has no own 'this' — inherits enclosing scope's",
      "q": "Dans l'exemple, quel `this` la fonction fléchée utilise-t-elle quand le clic se déclenche ?",
      "a": "Le `this` de la portée englobante (p. ex. l'instance de classe où l'écouteur a été enregistré) — la fonction fléchée n'a pas de `this` propre."
    },
    {
      "text": "`null` signifie une valeur volontairement vide ; `undefined` signifie qu'aucune valeur n'a été assignée.",
      "explain_dr": "null = value khawya b niya; undefined = value ma-t3tatsh aslan.",
      "example": "let a = null; // intentionally empty\nlet b;        // undefined — never assigned",
      "q": "Dans l'exemple, quelle est la différence de sens entre `a` et `b` ?",
      "a": "`a` a été délibérément vidé (`null`) ; `b` n'a jamais été assigné, donc il vaut `undefined` par défaut."
    },
    {
      "text": "`map()`, `filter()` et `reduce()` transforment les tableaux sans les muter.",
      "explain_dr": "map/filter/reduce kat-bedlo arrays bla ma y-mutew l-asli.",
      "example": "const doubled = [1, 2, 3].map(n => n * 2);\nconst evens = [1, 2, 3, 4].filter(n => n % 2 === 0);\nconst sum = [1, 2, 3].reduce((s, n) => s + n, 0);",
      "q": "Quelles sont les valeurs de `doubled`, `evens` et `sum` dans l'exemple ?",
      "a": "`doubled` vaut `[2, 4, 6]`, `evens` vaut `[2, 4]` et `sum` vaut `6` — les tableaux d'origine restent intacts."
    },
    {
      "text": "Une fermeture (closure) est une fonction qui se souvient des variables de la portée où elle a été créée.",
      "explain_dr": "Closure: function kat-tfker variables mn scope li t-khel9at fih, wakha dak scope sala.",
      "example": "function counter() {\n  let n = 0;\n  return () => ++n; // remembers n after counter() finished\n}",
      "q": "Qu'affiche la fonction retournée à ses trois premiers appels ?",
      "a": "`1`, `2`, puis `3` — la closure garde `n` en vie entre les appels, en l'incrémentant à chaque fois."
    },
    {
      "text": "`async/await` gère les promesses de façon plus lisible que les `.then()` chaînés.",
      "explain_dr": "async/await kat-khli code dyal promises wade7 kter mn .then() li m-chainin.",
      "example": "async function load() {\n  const res = await fetch(\"/api/users\");\n  return res.json();\n}",
      "q": "Que retourne `load()`, et de quel type s'agit-il ?",
      "a": "Une promesse qui se résout avec le JSON parsé de `/api/users` — `res.json()` retourne lui-même une promesse que `load` attend."
    },
    {
      "text": "`JSON.parse()` convertit une chaîne en objet ; `JSON.stringify()` convertit un objet en chaîne.",
      "explain_dr": "JSON.parse: string → object; JSON.stringify: object → string.",
      "example": "JSON.parse('{\"a\":1}');    // string -> object\nJSON.stringify({ a: 1 }); // object -> string",
      "q": "Dans l'exemple, quels sont les types des résultats de `JSON.parse('{\"a\":1}')` et de `JSON.stringify({ a: 1 })` ?",
      "a": "`JSON.parse` retourne un objet (`{ a: 1 }`) ; `JSON.stringify` retourne une chaîne (`'{\"a\":1}'`)."
    },
    {
      "text": "`typeof null` retourne `\"object\"` — une bizarrerie historique bien connue du langage.",
      "explain_dr": "typeof null = 'object' — ghalta 9dima f language b9at l daba.",
      "example": "typeof null; // \"object\" — a historic quirk",
      "q": "Que vaut `typeof null`, et est-ce logiquement correct ?",
      "a": "`\"object\"` — c'est un bug historique de la première implémentation du langage, pas un résultat logiquement correct."
    },
    {
      "text": "`NaN !== NaN` — testez avec `Number.isNaN()`, jamais avec l'égalité ; `Object.is()` gère correctement `-0` et `NaN`.",
      "explain_dr": "NaN ma-kay-sawich rasso — st3mel Number.isNaN() bach t-testi, w Object.is() l -0 w NaN.",
      "example": "NaN === NaN;       // false — never use equality\nNumber.isNaN(NaN); // true\nObject.is(-0, 0);  // false",
      "q": "Que valent les trois expressions de l'exemple ?",
      "a": "`NaN === NaN` vaut false, `Number.isNaN(NaN)` vaut true, et `Object.is(-0, 0)` vaut false (il distingue `-0` de `0`)."
    },
    {
      "text": "Hoisting : `var` et les déclarations de fonctions remontent en haut ; `let`/`const` restent dans la zone morte temporelle jusqu'à leur ligne.",
      "explain_dr": "Hoisting: var w function declarations kat-tl3o l fo9; let/const kay-b9aw f temporal dead zone 7ta y-wslo l line dyalhum.",
      "example": "console.log(a); // undefined — var is hoisted\nvar a = 1;\nconsole.log(b); // ReferenceError — let is in the TDZ\nlet b = 2;",
      "q": "Pourquoi le premier `console.log` affiche-t-il `undefined` alors que le second lève une erreur ?",
      "a": "`var a` est hissé et initialisé à `undefined` avant le log ; `let b` est hissé mais reste dans la zone morte temporelle jusqu'à sa ligne de déclaration, donc y accéder lève une ReferenceError."
    },
    {
      "text": "Déstructuration avec valeurs par défaut : `const { name = 'Aymane' } = user` — et le spread `...` copie en surface, pas en profondeur.",
      "explain_dr": "Destructuring m3a defaults: { name = 'Aymane' } — w spread ... kat-copy ghir surface, machi deep.",
      "example": "const { name = \"Aymane\" } = user; // default if missing\nconst copy = { ...user };           // shallow copy only",
      "q": "Dans l'exemple, si `user` n'a pas de propriété `name`, que vaut `name` — et si on modifie ensuite `copy.address.city`, `user.address.city` change-t-il ?",
      "a": "`name` retombe sur `\"Aymane\"` ; oui, `user.address.city` change aussi car le spread ne copie que le premier niveau — les objets imbriqués restent partagés par référence."
    },
    {
      "text": "`||` retombe sur toute valeur falsy ; `??` uniquement sur `null`/`undefined` — utilisez `??` pour des défauts qui acceptent `0` et `''`.",
      "explain_dr": "|| kat-rje3 l fallback 3la ay falsy; ?? ghir 3la null/undefined — st3mel ?? ila bghiti t-9bel 0 w ''.",
      "example": "0 || 10; // 10 — 0 is falsy\n0 ?? 10; // 0  — ?? only falls back on null/undefined",
      "q": "Pourquoi `0 || 10` donne-t-il `10` alors que `0 ?? 10` donne `0` ?",
      "a": "`||` retombe sur toute valeur falsy (et `0` est falsy) ; `??` ne retombe que sur `null`/`undefined`, donc le `0` valide est conservé."
    },
    {
      "text": "Les mutateurs d'`Array.prototype` (`push`, `splice`, `sort`) modifient le tableau sur place ; `slice`, `map`, `concat` retournent de nouveaux tableaux.",
      "explain_dr": "push/splice/sort kat-mutew array nichan; slice/map/concat kat-rj3o array jdida.",
      "example": "arr.push(4);           // mutates arr in place\nconst b = arr.slice(0, 2); // returns a new array",
      "q": "Après l'exécution de l'exemple, qu'est-ce qui a changé dans `arr` et que vaut `b` ?",
      "a": "`arr` contient maintenant le `4` poussé (modifié sur place) ; `b` est un tout nouveau tableau avec les deux premiers éléments, laissant `arr` par ailleurs intact."
    },
    {
      "text": "Event loop : les callbacks de `setTimeout` s'exécutent après la vidange de la pile — même `setTimeout(fn, 0)` ne s'exécute jamais immédiatement.",
      "explain_dr": "Event loop: setTimeout kat-tssena 7ta stack y-khwa — wakha 0ms, ma-kat-khdemsh nichan.",
      "example": "setTimeout(() => console.log(\"later\"), 0);\nconsole.log(\"now\"); // logs first, then \"later\"\n",
      "q": "Quel est l'ordre d'affichage dans la console de l'exemple, et pourquoi ?",
      "a": "`\"now\"` d'abord, puis `\"later\"` — le callback de `setTimeout` attend dans la file que la pile d'appels actuelle se vide, même avec un délai de 0 ms."
    },
    {
      "text": "Les microtâches (promesses) passent toujours avant les macrotâches (timers) : une promesse attendue bat un `setTimeout(..., 0)`.",
      "explain_dr": "Microtasks (promises) dayman qbel macrotasks (timers) — awaited promise kat-sbe9 setTimeout(...,0).",
      "example": "setTimeout(() => console.log(\"timer\"), 0);\nPromise.resolve().then(() => console.log(\"promise\")); // logs first",
      "q": "Qu'est-ce qui s'affiche en premier dans l'exemple — `\"timer\"` ou `\"promise\"` ?",
      "a": "`\"promise\"` — les microtâches (callbacks de promesses) s'exécutent toujours avant les macrotâches (timers), quel que soit l'ordre d'enregistrement."
    },
    {
      "text": "Valeur vs référence : les primitifs copient la valeur, les objets copient la référence — muter un objet passé mute l'original.",
      "explain_dr": "Primitives kat-t-copya b value, objects b reference — ila beddelti object li t-passa, l-asli ghadi ytbedel.",
      "example": "function bump(o) { o.n++; }\nconst obj = { n: 1 };\nbump(obj); // obj.n is now 2 — the original was mutated",
      "q": "Que vaut `obj.n` après l'exécution de `bump(obj)`, et pourquoi ?",
      "a": "`2` — les objets sont passés par copie de référence, donc `o.n++` dans `bump` modifie la propriété de l'objet d'origine."
    },
    {
      "text": "`Object.freeze()` ne gèle que le niveau supérieur ; les objets imbriqués restent mutables — le gel est superficiel.",
      "explain_dr": "Object.freeze ghir l-fo9 — nested objects kay-b9aw mutable, freeze machi deep.",
      "example": "const o = Object.freeze({ nested: { a: 1 } });\no.nested.a = 2; // still works — only the top level is frozen",
      "q": "Pourquoi `o.nested.a = 2` réussit-il alors que `o` a été gelé ?",
      "a": "`Object.freeze` ne gèle que le premier niveau ; l'objet imbriqué reste une référence vivante et modifiable."
    },
    {
      "text": "Le spread d'une chaîne donne ses caractères : `[...'abc']` → `['a','b','c']` ; itérables uniquement — les objets simples ne sont pas itérables.",
      "explain_dr": "Spread dyal string kat-3ti characters: [...'abc']; ghir iterables — plain object machi iterable.",
      "example": "[...\"abc\"]; // [\"a\", \"b\", \"c\"]",
      "q": "Que produit `[... \"abc\"]`, et `[... {a: 1}]` fonctionnerait-il pareil ?",
      "a": "Ça produit `[\"a\", \"b\", \"c\"]` car les chaînes sont itérables ; `{a: 1}` n'est pas itérable, donc le spread lèverait une TypeError."
    },
    {
      "text": "`Promise.all()` rejette dès le premier échec ; `Promise.allSettled()` attend tout et rapporte chaque résultat.",
      "explain_dr": "Promise.all kat-fail 3la awel wa7da; allSettled kat-tsenna kolchi w kat-3tik natija dyal kol wa7da.",
      "example": "Promise.all([p1, p2]);        // rejects on the first failure\nPromise.allSettled([p1, p2]); // waits for all, reports each outcome",
      "q": "Si `p1` échoue et `p2` réussit, en quoi les deux appels de l'exemple diffèrent-ils ?",
      "a": "`Promise.all` échoue immédiatement avec la raison de `p1` et ignore `p2` ; `Promise.allSettled` attend les deux et retourne un tableau décrivant chaque résultat."
    },
    {
      "text": "`for...of` itère les valeurs d'un itérable ; `for...in` itère les clés énumérables — `of` pour les tableaux, `in` pour les objets.",
      "explain_dr": "for...of l values dyal iterable; for...in l keys — of l arrays, in l objects.",
      "example": "for (const v of [1, 2]) {}   // values of an iterable\nfor (const k in { a: 1 }) {} // keys of an object",
      "q": "Sur quoi chaque boucle itère-t-elle dans l'exemple ?",
      "a": "`for...of` itère les valeurs du tableau (`1`, `2`) ; `for...in` itère les clés de l'objet (`\"a\"`)."
    },
    {
      "text": "Une fonction `async` retourne toujours une promesse, même avec `return 5` — elle se résout avec `5`.",
      "explain_dr": "async function dayman kat-rje3 promise — wakha t-dir return 5, kat-resolvi b 5.",
      "example": "async function f() { return 5; }\nf().then(v => console.log(v)); // 5",
      "q": "Pourquoi `f().then(...)` fonctionne-t-il alors que la fonction de l'exemple retourne le simple nombre `5` ?",
      "a": "Une fonction `async` enveloppe toujours sa valeur de retour dans une promesse — `return 5` devient une promesse résolue avec `5`."
    },
    {
      "text": "`this` dans une méthode classique dépend du site d'appel : `obj.method()` marche, mais `const f = obj.method; f()` perd `this`.",
      "explain_dr": "this f method 3adiya 3la 7sab kifach 3eyeti liha: obj.method() ok, walakin const f = obj.method; f() kat-daye3 this.",
      "example": "obj.method();            // this = obj\nconst f = obj.method;\nf(); // this is lost (undefined)",
      "q": "Dans l'exemple, pourquoi `obj.method()` garde-t-il `this` mais `f()` le perd-il ?",
      "a": "`obj.method()` est appelé comme méthode de `obj`, donc `this` vaut `obj` ; l'affecter à `f` le détache, et l'appel nu `f()` n'a pas de receveur, donc `this` vaut `undefined`."
    },
    {
      "text": "Le chaînage optionnel `user?.address?.city` court-circuite vers `undefined` ; combinez avec `??` pour des défauts sûrs : `user?.age ?? 18`.",
      "explain_dr": "user?.address?.city kat-rje3 undefined ila chi wa7da ma-kaynach — zidi ?? bach t-3ti default: user?.age ?? 18.",
      "example": "const city = user?.address?.city; // undefined if any link is missing\nconst age = user?.age ?? 18;        // safe default",
      "q": "Dans l'exemple, quand `city` vaut-il `undefined`, et que devient `age` si `user` est `null` ?",
      "a": "`city` vaut `undefined` si `user`, `user.address` ou `user.address.city` manque ; `age` devient `18` car `user?.age` court-circuite vers `undefined` et `??` fournit la valeur par défaut."
    }
  ],
  "Typescript": [
    {
      "text": "TypeScript est un sur-ensemble typé de JavaScript qui se compile en JavaScript pur.",
      "explain_dr": "TypeScript howa JavaScript zayd 3lih types, w kat-tcompila l JavaScript 3adi.",
      "example": "let name: string = \"Aymane\"; // type annotation, compiles to plain JS",
      "q": "Qu'est-ce que l'annotation `: string` de l'exemple ajoute par rapport au JavaScript pur ?",
      "a": "Une garantie à la compilation que `name` contient une chaîne — assigner un nombre échouerait avant même l'exécution."
    },
    {
      "text": "Les types statiques détectent les bugs à la compilation, avant même l'exécution du code.",
      "explain_dr": "Types static kat-cheddo bugs f wa9t compilation, 9bel ma code y-khdem.",
      "example": "function add(a: number, b: number) { return a + b; }\nadd(1, \"2\"); // compile-time error — caught before running",
      "q": "Pourquoi le `add(1, \"2\")` de l'exemple échoue-t-il avant l'exécution du programme ?",
      "a": "La signature exige deux `number`, donc le vérificateur de types rejette l'argument chaîne à la compilation au lieu de produire la surprise `\"12\"` à l'exécution."
    },
    {
      "text": "Déclarez les types avec des alias `type` ou des définitions `interface` : `interface User { name: string; age: number }`.",
      "explain_dr": "type w interface bach t-declari shapes: interface User { name: string; age: number }.",
      "example": "interface User { name: string; age: number }\nconst u: User = { name: \"Aymane\", age: 24 };",
      "q": "Que se passe-t-il si on écrit `const u: User = { name: \"Aymane\" };` (sans `age`) ?",
      "a": "Erreur de compilation — l'interface `User` exige `name` et `age`, et `age` n'est pas optionnel."
    },
    {
      "text": "Annotez les variables, les paramètres et les retours : `function add(a: number, b: number): number`.",
      "explain_dr": "Annoti variables, params, w return: function add(a: number, b: number): number.",
      "example": "function add(a: number, b: number): number {\n  return a + b;\n}",
      "q": "En quoi l'annotation de retour `: number` de l'exemple protège-t-elle les appelants de `add` ?",
      "a": "Elle garantit aux appelants que `add` retourne toujours un nombre, donc le compilateur signalera tout code qui traite son résultat comme une chaîne."
    },
    {
      "text": "`string | number` est un type union — la valeur peut être de l'un ou l'autre type.",
      "explain_dr": "string | number = union — value tqdar tkon wa7da mn joj.",
      "example": "let id: string | number;\nid = \"abc\"; // ok\nid = 42;    // ok",
      "q": "Dans l'exemple, quelles affectations à `id` compilent et lesquelles échouent ?",
      "a": "`\"abc\"` et `42` compilent (tous deux membres de l'union) ; assigner `true` échouerait car `boolean` n'est pas dans `string | number`."
    },
    {
      "text": "Les génériques comme `Array<T>` permettent d'écrire du code réutilisable et type-safe : `function first<T>(arr: T[]): T`.",
      "explain_dr": "Generics Array<T> kat-khlik t-kteb code reusable w type-safe.",
      "example": "function first<T>(arr: T[]): T {\n  return arr[0];\n}\nfirst<number>([1, 2, 3]);",
      "q": "Dans l'exemple, quel est le type de retour de `first<number>([1, 2, 3])`, et que retournerait `first<string>([\"a\"])` ?",
      "a": "`number` (l'élément `1`) ; `first<string>([\"a\"])` retournerait une `string` — le générique `T` s'adapte à l'appel."
    },
    {
      "text": "Utilisez `type` pour les unions et intersections ; utilisez `interface` quand vous prévoyez d'étendre des objets.",
      "explain_dr": "type l unions w intersections; interface melli ghadi t-extendi objects.",
      "example": "type Status = \"ok\" | \"error\";             // union -> type\ninterface Admin extends User { role: string } // extension -> interface",
      "q": "Pourquoi l'exemple utilise-t-il `type` pour `Status` mais `interface` pour `Admin` ?",
      "a": "`Status` est une union de littéraux, que seul `type` peut exprimer ; `Admin` étend `User`, et `interface` est l'outil idiomatique pour étendre des objets."
    },
    {
      "text": "Le type `unknown` est l'alternative sûre à `any` — il faut l'affiner avant de l'utiliser.",
      "explain_dr": "unknown howa any l-amina — lazem t-narrowiha 9bel ma t-sta3melha.",
      "example": "let v: unknown = getData();\nif (typeof v === \"string\") v.toUpperCase(); // narrow first",
      "q": "Dans l'exemple, pourquoi le test `typeof v === \"string\"` est-il requis avant `v.toUpperCase()` ?",
      "a": "`unknown` interdit toute opération avant affinement — sans le test, le compilateur ne peut pas prouver que `v` est une chaîne, donc appeler une méthode de chaîne est une erreur."
    },
    {
      "text": "`?` marque une propriété ou un paramètre optionnel : `name?: string`.",
      "explain_dr": "? kat-3ni optional: name?: string.",
      "example": "function greet(name?: string) {\n  return \"Hello \" + (name ?? \"guest\");\n}",
      "q": "Que retourne `greet()` sans argument, et pourquoi ?",
      "a": "`\"Hello guest\"` — `name` vaut `undefined` quand il est omis, et `?? \"guest\"` fournit la valeur de repli."
    },
    {
      "text": "Activez le mode `strict` dans `tsconfig.json` pour la vérification de types la plus forte.",
      "explain_dr": "strict mode f tsconfig.json = a9wa type checking.",
      "example": "{ \"compilerOptions\": { \"strict\": true } } // tsconfig.json",
      "q": "Qu'est-ce qu'activer `strict: true` dans le tsconfig de l'exemple change pour le projet ?",
      "a": "Ça active l'ensemble complet des vérifications strictes (vérification stricte des null, pas de `any` implicite, etc.), détectant plus de bugs à la compilation."
    },
    {
      "text": "`any` désactive complètement la vérification de types ; préférez `unknown` et affinez avec des gardes `typeof`/`instanceof`.",
      "explain_dr": "any kat-tfi type checking kamel — st3mel unknown w narrowi b typeof/instanceof.",
      "example": "let a: any; // no checking — avoid\nlet u: unknown = fetchData();\nif (typeof u === \"number\") u.toFixed(2); // narrow with a guard",
      "q": "Dans l'exemple, quelle est la différence pratique entre `a` et `u` quand on essaie d'appeler `.toFixed(2)` sur chacun ?",
      "a": "`a.toFixed(2)` compile sans broncher (aucune vérification — ça peut planter à l'exécution) ; `u.toFixed(2)` ne compile qu'après que le garde `typeof` a prouvé que `u` est un nombre."
    },
    {
      "text": "`never` est le type d'une valeur qui ne peut jamais survenir — les fonctions qui lancent toujours ou bouclent sans fin retournent `never`.",
      "explain_dr": "never = type dyal 7aja li 3omrha ma-t-w9e3 — functions li dayman kat-throw wla kat-loop bla nihaya.",
      "example": "function fail(msg: string): never {\n  throw new Error(msg);\n}",
      "q": "Pourquoi `never` est-il le bon type de retour pour le `fail` de l'exemple plutôt que `void` ?",
      "a": "Parce que `fail` ne retourne jamais — il lève toujours une exception ; `never` dit au compilateur que le code après l'appel est inatteignable."
    },
    {
      "text": "Les unions discriminées (`type: 'ok' | 'error'`) plus un `switch` donnent un affinement exhaustif — le compilateur signale les cas manquants.",
      "explain_dr": "Discriminated unions (type: 'ok'|'error') m3a switch — compiler kay-golik ila nsiti case.",
      "example": "type Result = { type: \"ok\"; data: string } | { type: \"error\"; msg: string };\nswitch (r.type) {\n  case \"ok\": return r.data;\n  case \"error\": throw new Error(r.msg); // missing case = compile error\n}",
      "q": "Si on supprimait la branche `case \"error\"` du switch de l'exemple, que ferait le compilateur ?",
      "a": "Avec l'affinement exhaustif, il signalerait le cas manquant comme erreur de compilation, car `r` resterait la variante `error` non traitée après le switch."
    },
    {
      "text": "Les gardes de type sont des fonctions retournant un prédicat : `function isUser(x: unknown): x is User` — le compilateur fait confiance à votre test.",
      "explain_dr": "Type guard: function kat-rje3 x is User — compiler kay-tiq f check dyalek.",
      "example": "function isUser(x: unknown): x is User {\n  return typeof x === \"object\" && x !== null && \"name\" in x;\n}",
      "q": "Après un `if (isUser(x)) { ... }` réussi dans l'exemple, que sait TypeScript sur `x` dans le bloc ?",
      "a": "Il affine `x` vers `User` — le prédicat `x is User` dit au compilateur de faire confiance à votre vérification d'exécution pour le reste du bloc."
    },
    {
      "text": "`as const` fige un littéral à son type le plus étroit : `const roles = ['admin','user'] as const` donne un tuple readonly de littéraux.",
      "explain_dr": "as const kat-jemmed literal l adya9 type: ['admin','user'] as const → readonly tuple.",
      "example": "const roles = [\"admin\", \"user\"] as const; // readonly tuple of literals\ntype Role = typeof roles[number];           // \"admin\" | \"user\"\n",
      "q": "Dans l'exemple, quel est le type de `roles[0]` et de `Role`, et pourquoi `roles.push(\"super\")` ne compilerait-il pas ?",
      "a": "`roles[0]` est le type littéral `\"admin\"` et `Role` vaut `\"admin\" | \"user\"` ; `push` échoue car `as const` a rendu le tuple readonly."
    },
    {
      "text": "L'opérateur `satisfies` vérifie une valeur contre un type sans l'élargir : `const cfg = {...} satisfies Config`.",
      "explain_dr": "satisfies kat-checki value 3la type bla ma t-wesse3 type dyalo.",
      "example": "const cfg = { port: 3000, host: \"localhost\" } satisfies Config;",
      "q": "Que vérifie `satisfies Config` dans l'exemple sans modifier le type inféré de `cfg` ?",
      "a": "Il vérifie que l'objet correspond à `Config` à la compilation, tout en gardant le type inféré étroit de `cfg` (p. ex. le littéral `3000`) au lieu de l'élargir vers `Config`."
    },
    {
      "text": "`Record<string, number>` est un raccourci pour un type objet à clés string et valeurs number.",
      "explain_dr": "Record<string, number> = objet li keys strings w values numbers, b ikhtisar.",
      "example": "const scores: Record<string, number> = { aymane: 95 };",
      "q": "Dans l'exemple, est-ce que `scores.bob = \"high\"` compilerait ?",
      "a": "Non — `Record<string, number>` exige que chaque valeur soit un `number`, donc assigner une chaîne est une erreur de compilation."
    },
    {
      "text": "`Pick<T, 'a' | 'b'>`, `Omit<T, 'c'>`, `Partial<T>`, `Required<T>` construisent de nouveaux types depuis les existants — sans duplication.",
      "explain_dr": "Pick/Omit/Partial/Required kat-bniw types jdad mn types 9dam — bla t3awd.",
      "example": "type Preview = Pick<User, \"name\">; // { name: string }\ntype Draft = Partial<User>;           // every property optional",
      "q": "Dans l'exemple, quelle forme `Draft` a-t-il par rapport à `User` ?",
      "a": "Les mêmes propriétés que `User`, mais toutes optionnelles — `Partial<User>` rend chaque propriété optionnelle tandis que `Pick<User, \"name\">` ne garde que `name`."
    },
    {
      "text": "Les interfaces fusionnent automatiquement (fusion de déclarations) ; pas les types — étendre une interface tierce exige `interface`.",
      "explain_dr": "Interfaces kat-merge bo7dhum; types la — extend dyal interface dyal library khasso interface.",
      "example": "interface Box { w: number }\ninterface Box { h: number } // merges -> { w: number; h: number }",
      "q": "Après les deux déclarations de l'exemple, quelle est la forme complète de `Box` — et un alias `type Box` pourrait-il faire pareil ?",
      "a": "`{ w: number; h: number }` — les déclarations fusionnent automatiquement ; un alias `type` ne peut pas fusionner, donc le redéclarer serait une erreur d'identifiant dupliqué."
    },
    {
      "text": "Piège de covariance : assigner `Dog[]` à `Animal[]` compile, mais y pousser un `Cat` corrompt le tableau — les tableaux sont malsains en TS.",
      "explain_dr": "Arrays f TS machi sound: Dog[] → Animal[] kat-compile walakin push Cat ghadi y-kherbe9ha.",
      "example": "const dogs: Dog[] = [];\nconst animals: Animal[] = dogs; // compiles...\nanimals.push(new Cat());        // ...but corrupts dogs",
      "q": "Dans l'exemple, pourquoi `dogs` est-il corrompu après `animals.push(new Cat())` ?",
      "a": "`animals` et `dogs` référencent le même tableau — `Dog[]` était assignable à `Animal[]`, mais cette assignation non sûre laisse un `Cat` s'infiltrer dans ce qui est vraiment un tableau de chiens."
    },
    {
      "text": "Les propriétés et tableaux `readonly` (`readonly string[]`) n'existent qu'à la compilation — rien n'empêche une mutation à l'exécution.",
      "explain_dr": "readonly ghir f compile-time — f runtime walou ma-y-7bess mutation.",
      "example": "const arr: readonly string[] = [\"a\"];\narr.push(\"b\"); // compile error — nothing stops mutation at runtime",
      "q": "Le `arr.push(\"b\")` de l'exemple échoue à la compilation — mais que se passerait-il à l'exécution si on contournait le vérificateur (p. ex. via `as any`) ?",
      "a": "Le push réussirait — `readonly` est effacé à la compilation, donc rien n'empêche la mutation à l'exécution."
    },
    {
      "text": "Les enums compilent vers de vrais objets à l'exécution ; les unions de littéraux string (`'a' | 'b'`) disparaissent après compilation — préférez les unions.",
      "explain_dr": "Enums kay-b9aw f runtime; unions dyal strings kat-mshiw m3a compilation — unions 7ssen.",
      "example": "enum Role { Admin, User }   // real object at runtime\ntype Status = \"a\" | \"b\";     // vanishes after compile — prefer unions",
      "q": "Après compilation, que reste-t-il de l'enum `Role` de l'exemple par rapport à l'union `Status` ?",
      "a": "`Role` subsiste comme un vrai objet JavaScript à l'exécution ; l'union `Status` est entièrement effacée car les types disparaissent après compilation."
    },
    {
      "text": "Les contraintes de génériques bornent le paramètre : `function get<T extends { id: number }>(item: T)` — T doit avoir `id`.",
      "explain_dr": "T extends { id: number } = constraint — T lazem tkon 3endha id.",
      "example": "function get<T extends { id: number }>(item: T): number {\n  return item.id; // T must have id\n}",
      "q": "Dans l'exemple, est-ce que `get({ name: \"x\" })` compilerait, et pourquoi ?",
      "a": "Non — `T extends { id: number }` exige que l'argument ait un `id` numérique, ce que `{ name: \"x\" }` n'a pas."
    },
    {
      "text": "`unknown` dans une clause `catch` (TS 4.4+) : `catch (e: unknown)` est la valeur par défaut en strict — affinez avant d'utiliser `e`.",
      "explain_dr": "catch (e: unknown) howa default f strict — narrowi e 9bel ma t-sta3mlo.",
      "example": "try { risky(); }\ncatch (e: unknown) {\n  if (e instanceof Error) console.log(e.message); // narrow before use\n}",
      "q": "Pourquoi l'exemple doit-il affiner `e` avec `instanceof Error` avant de lire `e.message` ?",
      "a": "En mode strict, la valeur capturée est `unknown`, donc le compilateur interdit de toucher `.message` tant qu'on n'a pas prouvé que `e` est bien une `Error`."
    },
    {
      "text": "Les signatures d'index `{ [key: string]: any }` autorisent des clés dynamiques, mais préférez `Record<>` ou `Map<>` pour la sécurité des types.",
      "explain_dr": "Index signatures {[key: string]: any} kat-9bel dynamic keys, walakin Record wla Map amn kter.",
      "example": "const cache: Record<string, User> = {}; // safer than {[k: string]: any}\ncache[\"u1\"] = { name: \"Aymane\", age: 24 };",
      "q": "Pourquoi le `Record<string, User>` de l'exemple est-il plus sûr que `{ [key: string]: any }` ?",
      "a": "`Record<string, User>` garantit que chaque valeur est un `User` — avec des valeurs `any`, tout accès à une propriété compile sans vérification et peut échouer à l'exécution."
    }
  ],
  "VueJs": [
    {
      "text": "Vue est un framework JavaScript progressif pour construire des interfaces utilisateur réactives.",
      "explain_dr": "Vue framework progressif bach t-sna3 interfaces reactive.",
      "example": "createApp({ data: () => ({ message: \"Hello\" }) }).mount(\"#app\");",
      "q": "Que font les trois parties de l'exemple — `createApp(...)`, `data: () => ({ message: \"Hello\" })` et `.mount(\"#app\")` ?",
      "a": "`createApp` crée l'application Vue, `data` déclare l'état réactif, et `.mount(\"#app\")` attache l'app à l'élément DOM d'id `app`."
    },
    {
      "text": "Avec l'API Options, l'état du composant vit dans `data()`, la logique dans `methods` et les valeurs dérivées dans `computed`.",
      "explain_dr": "Options API: data() l state, methods l logic, computed l values li kat-t7seb.",
      "example": "export default {\n  data: () => ({ count: 0 }),\n  methods: { inc() { this.count++; } },\n  computed: { double() { return this.count * 2; } }\n};",
      "q": "Dans l'exemple, si `count` vaut 3, que retourne `double` — et où placerait-on une fonction qui incrémente `count` ?",
      "a": "`double` retourne `6` ; une fonction d'incrémentation va dans `methods` (comme `inc`), tandis que `data` contient l'état et `computed` les valeurs dérivées."
    },
    {
      "text": "L'API Composition utilise `setup()` avec `ref()` et `reactive()` pour l'état.",
      "explain_dr": "Composition API: setup() m3a ref() w reactive() l state.",
      "example": "setup() {\n  const count = ref(0);\n  const state = reactive({ name: \"Aymane\" });\n  return { count, state };\n}",
      "q": "Que retourne `setup()` dans l'exemple, et pourquoi est-ce nécessaire ?",
      "a": "Il retourne `{ count, state }` pour que le template puisse accéder à ces refs — tout ce qui n'est pas retourné reste invisible pour le template."
    },
    {
      "text": "Liez les données au DOM avec l'interpolation `{{ }}` et des directives comme `v-bind`, `v-on`, `v-if`, `v-for`.",
      "explain_dr": "Interpolation {{ }} w directives v-bind, v-on, v-if, v-for bach t-rebt data m3a DOM.",
      "example": "<p>{{ title }}</p>\n<button v-bind:disabled=\"!ok\" v-on:click=\"save\">Save</button>\n<div v-if=\"show\">Hi</div>\n<li v-for=\"t in todos\">{{ t.text }}</li>",
      "q": "Dans l'exemple, quand le bouton Save est-il désactivé ?",
      "a": "Quand `!ok` est vrai — `v-bind:disabled` lie l'attribut disabled à la négation de `ok`."
    },
    {
      "text": "Utilisez `v-model` pour la liaison bidirectionnelle sur les champs de formulaire.",
      "explain_dr": "v-model = two-way binding l form inputs.",
      "example": "<input v-model=\"username\" />",
      "q": "Que fait `<input v-model=\"username\" />` quand l'utilisateur tape ?",
      "a": "Ça met à jour `username` dans l'état à chaque frappe, et si `username` change par programme l'input se met à jour aussi — la liaison fonctionne dans les deux sens."
    },
    {
      "text": "Les props transmettent les données du parent vers l'enfant ; l'enfant émet des événements vers le haut avec `$emit`.",
      "explain_dr": "Props mn parent l child; child kay-jawb b $emit l fo9.",
      "example": "props: [\"title\"],\nmethods: { close() { this.$emit(\"close\"); } }",
      "q": "Dans l'exemple, comment le parent donne-t-il des données à l'enfant, et comment l'enfant signale-t-il au parent qu'il s'est fermé ?",
      "a": "Le parent passe `title` en prop vers le bas ; l'enfant appelle `this.$emit(\"close\")` pour que le parent écoute avec `@close`."
    },
    {
      "text": "Les propriétés computed mettent leur résultat en cache et ne sont recalculées que si leurs dépendances changent.",
      "explain_dr": "computed kat-cachi resultat — kat-t3awd t7seb ghir melli dependencies ytbedlo.",
      "example": "computed: {\n  total() { return this.items.reduce((s, i) => s + i.price, 0); }\n}",
      "q": "Si on accède à `total` trois fois sans que `items` change, combien de fois le reduce s'exécute-t-il ?",
      "a": "Une seule fois — la propriété calculée met son résultat en cache et ne recalcule que quand `items` change."
    },
    {
      "text": "Hooks de cycle de vie : `mounted()` s'exécute après le premier rendu, `unmounted()` au démontage — idéal pour le nettoyage.",
      "explain_dr": "mounted() melli render l-owel y-sali; unmounted() f teardown — mzyan l cleanup.",
      "example": "mounted() { this.timer = setInterval(this.tick, 1000); },\nunmounted() { clearInterval(this.timer); } // cleanup",
      "q": "Dans l'exemple, pourquoi `clearInterval` est-il placé dans `unmounted()` plutôt que dans `mounted()` ?",
      "a": "Parce que `mounted()` démarre le timer après le premier rendu, et `unmounted()` est le hook de démontage — nettoyer là empêche l'intervalle de tourner après la destruction du composant."
    },
    {
      "text": "Utilisez `:key` avec les listes `v-for` pour que Vue puisse suivre les éléments efficacement.",
      "explain_dr": ":key m3a v-for bach Vue y-tbe3 elements b fa3iliya.",
      "example": "<li v-for=\"u in users\" :key=\"u.id\">{{ u.name }}</li>",
      "q": "Qu'est-ce que `:key=\"u.id\"` donne à Vue qu'un index de boucle ne pourrait pas ?",
      "a": "Une identité stable par utilisateur, pour que Vue puisse réordonner ou mettre à jour les nœuds DOM existants au lieu de les recréer quand la liste change."
    },
    {
      "text": "Les Single File Components (`.vue`) combinent template, script et style dans un seul fichier.",
      "explain_dr": ".vue file wa7da fiha template + script + style.",
      "example": "<template><p>{{ msg }}</p></template>\n<script>export default { data: () => ({ msg: \"Hi\" }) }</script>\n<style scoped>p { color: red }</style>",
      "q": "Quels sont les trois blocs du fichier `.vue` de l'exemple, et que fait `scoped` au style ?",
      "a": "`template` (le markup), `script` (la logique) et `style` (le CSS) ; `scoped` limite le CSS à ce composant pour qu'il ne fuite pas vers les autres."
    },
    {
      "text": "`ref()` exige `.value` dans le script mais se déplie tout seul dans le template — oublier `.value` est l'erreur n°1 de la Composition API.",
      "explain_dr": "ref() khass .value f script walakin f template kat-tunwrap bo7dha — nsyan .value howa ghalta n°1.",
      "example": "const count = ref(0);\ncount.value++;     // required in script\n// {{ count }}     // auto-unwrapped in template",
      "q": "Dans l'exemple, que se passe-t-il si on écrit `count++` dans le script au lieu de `count.value++` ?",
      "a": "Ça essaie d'incrémenter l'objet ref lui-même au lieu du nombre enveloppé — le compteur affiché ne change jamais."
    },
    {
      "text": "`reactive()` ne fonctionne que sur les objets ; le déstructurer casse la réactivité — utilisez `toRefs()` ou restez sur `ref()` pour les primitifs.",
      "explain_dr": "reactive() ghir l objects; destructuring kat-heress reactivity — st3mel toRefs() wla ref().",
      "example": "const state = reactive({ a: 1, b: 2 });\nconst { a } = toRefs(state); // destructure without losing reactivity",
      "q": "Pourquoi l'exemple utilise-t-il `toRefs(state)` plutôt qu'une simple déstructuration `const { a } = state` ?",
      "a": "La déstructuration simple extrait des valeurs brutes et casse la réactivité ; `toRefs` convertit chaque propriété en ref qui reste liée à l'objet réactif."
    },
    {
      "text": "Un `computed()` avec un simple getter est en lecture seule ; passez `{ get, set }` pour le rendre inscriptible (pratique avec `v-model`).",
      "explain_dr": "computed getter ghir read-only; 3tih { get, set } bach y-welli writable (mzyan m3a v-model).",
      "example": "const fullName = computed(() => first.value + \" \" + last.value);",
      "q": "Le `fullName` de l'exemple est en lecture seule — que se passe-t-il si un `v-model` essaie d'y écrire ?",
      "a": "L'écriture est ignorée (et Vue avertit) — un computed en lecture seule ne peut pas accepter d'affectation ; il faudrait la forme `{ get, set }` pour le rendre modifiable."
    },
    {
      "text": "`watch()` est paresseux (se déclenche au changement) ; `watchEffect()` s'exécute immédiatement et suit ce qu'il touche — idéal pour les synchros rapides.",
      "explain_dr": "watch lazy (kat-khdem melli y-tbedel); watchEffect kat-khdem nichan w kat-tbe3 li mes-sat.",
      "example": "watch(count, v => console.log(\"changed:\", v)); // lazy — on change only\nwatchEffect(() => console.log(count.value));     // runs now",
      "q": "Dans l'exemple, quel watcher s'exécute immédiatement à la configuration, et lequel ne réagit qu'aux changements ?",
      "a": "`watchEffect` s'exécute immédiatement et suit `count.value` automatiquement ; `watch(count, ...)` est paresseux et ne se déclenche que quand `count` change."
    },
    {
      "text": "Utilisez `watch` avec `{ immediate: true }` quand le gestionnaire doit aussi s'exécuter à l'initialisation.",
      "explain_dr": "watch m3a { immediate: true } bach handler y-khdem mn l-ewel.",
      "example": "watch(user, fetchProfile, { immediate: true });",
      "q": "Sans `{ immediate: true }`, quand `fetchProfile` s'exécuterait-il pour la première fois dans l'exemple ?",
      "a": "Uniquement après un changement de `user` post-configuration — le gestionnaire raterait la valeur initiale, d'où l'usage de `immediate: true` pour l'exécuter aussi à la configuration."
    },
    {
      "text": "Les emits doivent être déclarés dans `defineEmits()` en `<script setup>` — sinon ils retombent sur le DOM comme des attributs.",
      "explain_dr": "Emits lazem y-tdeclara b defineEmits() f script setup — wla ghadi y-tihou 3la DOM b7al attributes.",
      "example": "const emit = defineEmits([\"save\"]);\nemit(\"save\", payload);",
      "q": "Qu'est-ce qui ne va pas si on appelle `emit(\"save\", payload)` sans déclarer `defineEmits([\"save\"])` dans `<script setup>` ?",
      "a": "Vue ne reconnaît pas `save` comme événement émis, donc il retombe sur l'élément racine comme simple attribut DOM au lieu d'atteindre les écouteurs du parent."
    },
    {
      "text": "Les attributs non-props retombent automatiquement sur l'élément racine ; désactivez avec `inheritAttrs: false` et liez via `$attrs`.",
      "explain_dr": "Attributes li machi props kat-mshiw l root element bo7dhum; 7bess b inheritAttrs: false w st3mel $attrs.",
      "example": "export default { inheritAttrs: false }; // stops auto fallthrough\n// <div v-bind=\"$attrs\">...</div> — bind manually",
      "q": "Dans l'exemple, que change `inheritAttrs: false` quand le parent passe `class=\"x\"` sans prop correspondante ?",
      "a": "La classe ne tombe plus automatiquement sur l'élément racine — il faut la lier soi-même avec `v-bind=\"$attrs\"` où on la veut."
    },
    {
      "text": "`v-if` détruit et recrée l'élément ; `v-show` ne fait que basculer le CSS — préférez `v-show` pour les bascules fréquentes.",
      "explain_dr": "v-if kat-hedem w t-3awd t-bni element; v-show ghir kat-beddel CSS — v-show l toggles li kat-t3awd.",
      "example": "<p v-if=\"loggedIn\">Welcome</p> <!-- destroyed/recreated -->\n<p v-show=\"menuOpen\">Menu</p>     <!-- CSS toggle only -->",
      "q": "Pour un menu ouvert et fermé 50 fois par seconde, lequel faut-il utiliser selon l'exemple — et pourquoi ?",
      "a": "`v-show` — il ne fait que basculer le CSS `display`, alors que `v-if` détruirait et recréerait l'élément 50 fois par seconde."
    },
    {
      "text": "Ne mélangez jamais `v-if` et `v-for` sur le même élément — `v-if` a la priorité et ne voit pas la variable de boucle.",
      "explain_dr": "Ma-t-khaletch v-if w v-for f nafs element — v-if 3endha priority w ma-kat-shofsh variable dyal loop.",
      "example": "<!-- wrong: <li v-for=\"t in todos\" v-if=\"t.done\"> -->\n<template v-for=\"t in todos\">\n  <li v-if=\"t.done\" :key=\"t.id\">{{ t.text }}</li>\n</template>",
      "q": "Pourquoi `<li v-for=\"t in todos\" v-if=\"t.done\">` ne filtre-t-il pas la liste ?",
      "a": "`v-if` a une priorité plus haute que `v-for`, donc il s'exécute avant que la variable de boucle `t` existe et ne peut pas la voir — la solution est d'envelopper dans `<template v-for>` avec `v-if` sur l'élément interne."
    },
    {
      "text": "Les modificateurs `.lazy`, `.number` et `.trim` règlent `v-model` sur les champs — `v-model.number` convertit en nombre.",
      "explain_dr": "Modifiers dyal v-model: .lazy, .number, .trim — v-model.number kat-7wel l number.",
      "example": "<input v-model.number=\"age\" />   <!-- cast to number -->\n<input v-model.trim=\"name\" />     <!-- strip whitespace -->\n<input v-model.lazy=\"search\" />   <!-- sync on change, not input -->",
      "q": "Dans l'exemple, si l'utilisateur tape `\" 42 \"` dans l'input age, quelle valeur `age` reçoit-il — et que reçoit `name` de `\" Aymane \"` ?",
      "a": "`age` devient le nombre `42` (`.number` convertit et nettoie) ; `name` devient `\"Aymane\"` (`.trim` supprime les espaces autour)."
    },
    {
      "text": "`provide()`/`inject()` partage l'état dans des arborescences profondes sans prop drilling — préférez un store (Pinia) à grande échelle.",
      "explain_dr": "provide/inject kat-partagi state bin components b3ad bla prop drilling — f scale kbir, Pinia 7ssen.",
      "example": "provide(\"theme\", \"dark\");      // ancestor\nconst theme = inject(\"theme\");   // deep descendant, no prop drilling",
      "q": "Dans l'exemple, comment le descendant profond reçoit-il `\"dark\"` sans que les composants intermédiaires le sachent ?",
      "a": "L'ancêtre appelle `provide(\"theme\", \"dark\")` et le descendant appelle `inject(\"theme\")` — les composants intermédiaires n'ont besoin d'aucune prop."
    },
    {
      "text": "En `<script setup>`, les déclarations de niveau supérieur sont automatiquement exposées au template — pas de `return` nécessaire.",
      "explain_dr": "f script setup, kolchi li declariti l fo9 kay-ban l template bo7do — bla return.",
      "example": "<script setup>\nconst msg = \"Hi\"; // exposed to the template — no return needed\n</script>",
      "q": "Dans l'exemple, pourquoi n'y a-t-il pas de `return { msg }` à la fin du `<script setup>` ?",
      "a": "Parce que `<script setup>` expose automatiquement toutes les liaisons de premier niveau au template — un return explicite est inutile."
    },
    {
      "text": "Définissez les props avec `defineProps()` + TypeScript : `defineProps<{ msg: string }>()` — les types sont vérifiés à la compilation.",
      "explain_dr": "defineProps<{ msg: string }>() = props m3a TypeScript, types kat-tchecka f compilation.",
      "example": "defineProps<{ msg: string }>(); // props type-checked at compile time",
      "q": "Si un parent passe `<Child msg={42} />` face au `defineProps<{ msg: string }>()` de l'exemple, quand l'erreur est-elle détectée ?",
      "a": "À la compilation — l'annotation de type générique permet au vérificateur de types de signaler le nombre là où une chaîne est attendue avant toute exécution."
    },
    {
      "text": "Les slots passent du contenu template dans l'enfant : slots par défaut, nommés (`<template #header>`) et à portée (`<slot :item>`).",
      "explain_dr": "Slots: content mn parent l dakhel child — default, named (#header), w scoped (<slot :item>).",
      "example": "<Modal><template #header>Title</template>Body text</Modal>\n<!-- child: <slot name=\"header\" /> then <slot /> for default -->",
      "q": "Dans l'exemple, où \"Title\" s'affiche-t-il et où \"Body text\" s'affiche-t-il dans le Modal ?",
      "a": "\"Title\" s'affiche à la sortie `<slot name=\"header\" />` de l'enfant ; \"Body text\" s'affiche à la sortie `<slot />` par défaut."
    },
    {
      "text": "Cycle de vie en Composition API : `onMounted()`, `onUnmounted()` — et `onBeforeUnmount()` juste avant le démontage pour le nettoyage final.",
      "explain_dr": "Composition lifecycle: onMounted(), onUnmounted() — w onBeforeUnmount() 9bel teardown l cleanup l-akhir.",
      "example": "onMounted(() => start());\nonBeforeUnmount(() => cleanup()); // just before teardown\nonUnmounted(() => teardown());",
      "q": "Dans l'ordre de l'exemple, quand `onBeforeUnmount` s'exécute-t-il par rapport à `onUnmounted` ?",
      "a": "`onBeforeUnmount` s'exécute juste avant le démontage (tant que le composant est encore vivant), puis `onUnmounted` s'exécute après sa suppression complète."
    }
  ],
  "Html": [
    {
      "text": "HTML est le langage de balisage qui structure le contenu des pages web.",
      "explain_dr": "HTML ghir howa l'ossature dyal la page, CSS howa li kayzid la decoration.",
      "example": "<h1>My Page</h1>\n<p>HTML structures the content of the page.</p>",
      "q": "Quel est le rôle de HTML dans une page web ?",
      "a": "HTML est le langage de balisage qui structure le contenu d'une page web, comme les titres et les paragraphes."
    },
    {
      "text": "Les balises sémantiques comme `<header>`, `<main>`, `<nav>`, `<article>` et `<footer>` décrivent le sens, pas seulement la mise en page.",
      "explain_dr": "Semantic tags kaygolo l Google w screen readers chno kay3ni had l'element, machi ghir div khawi.",
      "example": "<header>Site name</header>\n<main>\n  <article>Post text</article>\n</main>\n<footer>© 2026</footer>",
      "q": "Dans l'exemple, quelles balises sont sémantiques, et que changerait leur remplacement par des <div> ?",
      "a": "header, main, article et footer sont sémantiques ; les remplacer par des div enlève le sens utile aux lecteurs d'écran et au SEO, sans changer la mise en page."
    },
    {
      "text": "Chaque page doit avoir exactement un `<h1>` ; les titres doivent suivre une hiérarchie logique.",
      "explain_dr": "h1 wahda f page, b7al l3onwan lkbir dyal ktab, w headings li moraha mrettbin.",
      "example": "<h1>Complete Guide</h1>\n<h2>Installation</h2>\n<h3>On Linux</h3>",
      "q": "Que se passe-t-il si une page contient trois balises <h1>, et comment l'exemple fait-il correctement ?",
      "a": "Une page ne doit avoir qu'un seul h1 suivi d'une hiérarchie logique h2/h3 ; plusieurs h1 perturbent les lecteurs d'écran et les moteurs de recherche. L'exemple utilise un h1 avec un h2 puis un h3 imbriqués."
    },
    {
      "text": "`<img>` a besoin d'un attribut `alt` pour l'accessibilité et quand l'image ne charge pas.",
      "explain_dr": "alt howa description dyal tsowira, kayban ila tsowira ma loadatch w screen readers kay9rawh.",
      "example": "<img src=\"photo.jpg\" alt=\"Sunset over the bay\">",
      "q": "Pourquoi l'<img> de l'exemple inclut-elle un attribut alt, et quand cela compte-t-il ?",
      "a": "Le texte alt décrit l'image pour les lecteurs d'écran et s'affiche si l'image ne charge pas ; l'accessibilité et le repli en dépendent."
    },
    {
      "text": "Formulaires : les types d'`<input>` comme `email`, `password` et `number` offrent une validation intégrée.",
      "explain_dr": "type=email kaychecki wach l'email s7i7 bo7do, ma t7tajch JavaScript.",
      "example": "<input type=\"email\" required>\n<input type=\"number\" min=\"1\" max=\"10\">",
      "q": "Un utilisateur tape « abc » dans <input type=\"email\" required> — que se passe-t-il à la soumission ?",
      "a": "La validation intégrée bloque l'envoi et le navigateur affiche une erreur, car « abc » n'est pas une adresse email valide."
    },
    {
      "text": "L'élément `label` lié via `for`/`id` rend les champs cliquables et accessibles aux lecteurs d'écran.",
      "explain_dr": "label ila kan mrabit m3a input, click 3la label kaydir focus f input — pratique w accessible.",
      "example": "<label for=\"email\">Email</label>\n<input id=\"email\" type=\"email\">",
      "q": "Que casse la suppression du lien for/id entre le label et l'input dans l'exemple ?",
      "a": "Cliquer sur le label ne focalise plus le champ, et les lecteurs d'écran peuvent ne plus associer le label au champ, ce qui nuit à l'accessibilité."
    },
    {
      "text": "Les éléments vides comme `<img>`, `<br>` et `<input>` n'ont pas de balise fermante.",
      "explain_dr": "Void elements b7al img w br ma 3ndhomch closing tag, kaytseddo bo7dhom.",
      "example": "<img src=\"a.png\" alt=\"\">\n<br>\n<input type=\"text\">",
      "q": "Quels éléments de l'exemple ne doivent PAS avoir de balise fermante, et que se passe-t-il si on en ajoute une ?",
      "a": "img, br et input sont des éléments vides ; ajouter une balise fermante est du HTML invalide — les navigateurs l'ignorent et cela peut créer des nœuds DOM inattendus."
    },
    {
      "text": "La déclaration `<!DOCTYPE html>` place le navigateur en mode standards.",
      "explain_dr": "DOCTYPE kaygol l browser: khdem b standards jdad, machi b l9dam.",
      "example": "<!DOCTYPE html>\n<html>\n  <!-- standards mode on -->\n</html>",
      "q": "Que se passe-t-il si on retire la ligne <!DOCTYPE html> d'une page ?",
      "a": "Le navigateur passe en mode quirks, avec d'anciennes règles de rendu non standard qui peuvent casser les mises en page ; le doctype le maintient en mode standards."
    },
    {
      "text": "Les attributs `data-*` stockent des données personnalisées sur les éléments, lisibles via `element.dataset`.",
      "explain_dr": "data-* b7al jib sghir kat7et fih info khassa b element w kat9raha b dataset.",
      "example": "<button data-user-id=\"42\">Edit</button>\nel.dataset.userId; // \"42\"",
      "q": "Quelle est la valeur de el.dataset.userId dans l'exemple, et comment l'attribut s'écrit-il dans le balisage ?",
      "a": "C'est la chaîne « 42 » ; dans le balisage l'attribut s'écrit data-user-id=\"42\" (l'attribut avec tirets devient camelCase dans dataset)."
    },
    {
      "text": "Les éléments inline (`<span>`, `<a>`) suivent le flux du texte ; les éléments block (`<div>`, `<p>`) commencent sur une nouvelle ligne.",
      "explain_dr": "span w a kaymchiw m3a text f nafs satr, div w p kaybdaw satr jdid.",
      "example": "<p>Text <span>flows inline</span> with the words.</p>\n<div>Starts on a new line.</div>",
      "q": "Dans l'exemple, pourquoi le <span> reste-t-il sur la même ligne alors que le <div> commence sur une nouvelle ligne ?",
      "a": "span est un élément inline qui suit le flux du texte ; div est un élément block qui commence toujours sur une nouvelle ligne."
    },
    {
      "text": "Un `<button>` dans un formulaire vaut `type=\"submit\"` par défaut — mettez toujours `type=\"button\"` sur les boutons pilotés en JS.",
      "explain_dr": "button f form ila ma 3titihch type, kaytssarraf b7al submit — hadi akber ghalta katnssa.",
      "example": "<form>\n  <button type=\"submit\">Save</button>\n  <button type=\"button\">Cancel</button>\n</form>",
      "q": "Dans le formulaire de l'exemple, quel bouton soumet le formulaire, et pourquoi l'autre doit-il porter type=\"button\" ?",
      "a": "Le bouton « Save » soumet le formulaire (un bouton dans un formulaire vaut type=submit par défaut) ; le bouton « Cancel » doit porter type=\"button\" pour ne pas soumettre le formulaire par accident."
    },
    {
      "text": "Un `<input>` sans attribut `name` est ignoré silencieusement à la soumission du formulaire.",
      "explain_dr": "ila input ma 3ndoch name, lform kaytajhlo ghir kima ma kaynch.",
      "example": "<!-- no name => field is skipped on submit -->\n<input type=\"text\" name=\"city\">",
      "q": "Vous ajoutez un second <input> au formulaire mais oubliez son attribut name — que reçoit le serveur ?",
      "a": "Le serveur ne voit jamais ce champ : les inputs sans name sont ignorés silencieusement à la soumission du formulaire."
    },
    {
      "text": "Les rôles ARIA n'ajoutent aucun comportement : `role=\"button\"` exige toujours la gestion clavier et `tabindex`.",
      "explain_dr": "role=button ghir smiya, ma kayzidch lkhadma dyal button — khassk tzid keyboard w tabindex.",
      "example": "<div role=\"button\" tabindex=\"0\">Open</div>\n<!-- still needs a keydown handler! -->",
      "q": "Le <div role=\"button\" tabindex=\"0\"> de l'exemple est cliquable — que lui manque-t-il encore ?",
      "a": "Un gestionnaire clavier (keydown) pour activer avec Entrée/Espace ; tabindex=\"0\" ne fait que le rendre focalisable — les rôles ARIA ajoutent du sens mais aucun comportement."
    },
    {
      "text": "Les scripts `defer` s'exécutent dans l'ordre après le parsing ; les scripts `async` s'exécutent dès leur téléchargement, sans ordre garanti.",
      "explain_dr": "defer kaystna parsing w kaykhdem b tartib, async kaykhdem mli ytelechargea bla tartib — far9 mohim f interviews.",
      "example": "<script src=\"app.js\" defer></script>\n<script src=\"ads.js\" async></script>",
      "q": "Dans l'exemple, quel script peut manipuler le DOM en toute sécurité au chargement, et pourquoi ?",
      "a": "app.js avec defer — les scripts différés s'exécutent après l'analyse du document, dans l'ordre ; le script async des pubs peut s'exécuter avant la fin de l'analyse, sans ordre garanti."
    },
    {
      "text": "La balise viewport `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">` est indispensable au responsive sur mobile.",
      "explain_dr": "viewport meta tag howa li kaykhali site yban mzyan f telephone, bla bih kolchi yban sghir.",
      "example": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
      "q": "Que verrait un utilisateur mobile sur un site qui omet la balise viewport de l'exemple ?",
      "a": "La page s'afficherait dézoomée à une largeur desktop (souvent 980px), obligeant à pincer-zoomer ; la balise adapte la mise en page à la largeur de l'appareil."
    },
    {
      "text": "`<details>` et `<summary>` offrent un accordéon natif sans aucun JavaScript.",
      "explain_dr": "details/summary b7al accordion jahz, ma kay7tajch JavaScript.",
      "example": "<details>\n  <summary>How does shipping work?</summary>\n  <p>Answer goes here.</p>\n</details>",
      "q": "Que réalise l'exemple sans aucun JavaScript, et quel élément est cliquable ?",
      "a": "Un accordéon natif repliable : <summary> est l'en-tête cliquable, et un clic bascule la visibilité du contenu du <details>."
    },
    {
      "text": "Mettez `lang` sur la balise `<html>` — les lecteurs d'écran choisissent la bonne prononciation et ça aide le SEO.",
      "explain_dr": "lang f html kaygol l screen reader b ina logha y9ra, w kay3awn SEO.",
      "example": "<html lang=\"fr\">\n  <!-- screen readers + SEO know the language -->\n</html>",
      "q": "Pourquoi l'exemple utilise-t-il <html lang=\"fr\"> plutôt que de mettre lang sur chaque paragraphe ?",
      "a": "Déclarer lang une fois sur html indique aux lecteurs d'écran la bonne prononciation pour toute la page et aide le SEO ; un lang par paragraphe n'est utile que pour du contenu multilingue."
    },
    {
      "text": "La validation native est gratuite avec `required`, `minlength` et `pattern` ; `form.reportValidity()` la déclenche depuis JS.",
      "explain_dr": "required w pattern kayvalidiw bo7dhom, w reportValidity katkhlik tdeclencheha men JS.",
      "example": "<input required minlength=\"3\" pattern=\"[A-Za-z]+\">\nform.reportValidity(); // trigger native validation",
      "q": "L'input de l'exemple exige minlength=\"3\" — l'utilisateur tape « ab » et votre JS appelle form.reportValidity(). Que se passe-t-il ?",
      "a": "reportValidity() déclenche l'interface de validation native du navigateur, qui bloque l'envoi et affiche une erreur car « ab » fait moins de 3 caractères."
    },
    {
      "text": "Le contenu de `<template>` est inerte jusqu'à son clonage — idéal pour le balisage rendu par JS.",
      "explain_dr": "template b7al moule: content dyalo na3s 7ta tclonih b JavaScript.",
      "example": "<template id=\"card\">\n  <div class=\"card\"></div>\n</template>\ncard.content.cloneNode(true); // inert until cloned",
      "q": "Pourquoi rien du <template> de l'exemple n'est-il visible sur la page, et comment l'afficher ?",
      "a": "Le contenu d'un template est inerte — non rendu — jusqu'à son clonage (card.content.cloneNode(true)) et l'insertion du clone dans le DOM."
    },
    {
      "text": "Les custom elements doivent contenir un tiret (`<my-card>`) ; enregistrer `<mycard>` lève une erreur.",
      "explain_dr": "custom element khasso hyphen (my-card), bla hyphen l browser kayrfdo.",
      "example": "<!-- hyphen is mandatory -->\n<my-card></my-card>\ncustomElements.define(\"my-card\", MyCard);",
      "q": "Quelle erreur produit customElements.define(\"mycard\", MyCard), et comment l'exemple la corrige-t-il ?",
      "a": "Cela lève une DOMException car les noms de custom elements doivent contenir un tiret ; l'exemple utilise le nom avec tiret my-card."
    },
    {
      "text": "`loading=\"lazy\"` diffère les images hors écran et `decoding=\"async\"` sort le décodage du thread principal.",
      "explain_dr": "loading=lazy kaykhali tsawer li lte7t ma yloadiwch 7ta tqrab lihom — site kaytzad f sor3a.",
      "example": "<img src=\"hero.jpg\" alt=\"Hero\" loading=\"lazy\" decoding=\"async\">",
      "q": "Dans l'exemple, quand hero.jpg est-elle téléchargée, et qu'apporte decoding=\"async\" ?",
      "a": "Le navigateur ne la télécharge que lorsqu'elle approche du viewport (lazy) ; decoding=\"async\" décode l'image hors du thread principal pour un défilement fluide."
    },
    {
      "text": "Les valeurs d'`id` doivent être uniques par page — les doublons cassent `getElementById`, les labels et les références ARIA.",
      "explain_dr": "id khasso ykon unique f page kamla, ila t3awd getElementById kayjib ghir lwel.",
      "example": "<!-- ids must be unique: only one id=\"email\" per page -->\ndocument.getElementById(\"email\");",
      "q": "Deux inputs de la page ont tous deux id=\"email\" — quel est le problème avec document.getElementById(\"email\") ?",
      "a": "Les id doivent être uniques par page ; getElementById ne retourne que la première correspondance, donc labels et scripts peuvent cibler le mauvais élément."
    },
    {
      "text": "L'attribut `hidden` perd face à toute règle `display` de l'auteur, car il passe par le `display: none` de la feuille UA.",
      "explain_dr": "hidden kaytghleb b ay display rule dyalk, hit howa ghir display:none men browser.",
      "example": "/* author display beats hidden, so re-assert it */\n[hidden] { display: none !important; }",
      "q": "Un élément porte hidden mais votre CSS dit div { display: flex; } — est-il visible ? Pourquoi ?",
      "a": "Oui, il est visible : hidden fonctionne via le display: none de la feuille de style UA, que toute règle display de l'auteur surcharge ; l'exemple corrige avec [hidden] { display: none !important; }."
    },
    {
      "text": "Regroupez les contrôles liés avec `<fieldset>` et `<legend>` pour que les lecteurs d'écran les annoncent comme une unité.",
      "explain_dr": "fieldset w legend kayjm3o inputs li 3ndhom 3ala9a, screen reader kay9rahom b7al group wahda.",
      "example": "<fieldset>\n  <legend>Shipping address</legend>\n  <input name=\"city\">\n</fieldset>",
      "q": "Qu'apportent <fieldset> et <legend> aux utilisateurs de lecteurs d'écran qu'un simple <div> n'apporte pas ?",
      "a": "Ils regroupent les contrôles liés pour que le lecteur d'écran les annonce comme une seule unité, avec le legend comme nom du groupe."
    },
    {
      "text": "Les valeurs positives de `tabindex` créent des ordres de tabulation fragiles — limitez-vous à `tabindex=\"0\"` ou `-1`.",
      "explain_dr": "tabindex positive kaykherbe9 tartib dyal Tab — ghir 0 w -1 li khassk.",
      "example": "<div tabindex=\"0\">Focusable</div>\n<div tabindex=\"-1\">Focusable only via JS</div>",
      "q": "Pourquoi tabindex=\"5\" sur un bouton et tabindex=\"1\" sur un autre est-il considéré comme fragile ?",
      "a": "Les valeurs positives de tabindex écrasent l'ordre naturel du DOM et cassent dès que la mise en page change ; utilisez tabindex=\"0\" pour l'ordre normal ou -1 pour la focalisation par JS uniquement."
    }
  ],
  "Css": [
    {
      "text": "CSS stylise les éléments HTML avec des sélecteurs : élément, `.class`, `#id` et sélecteurs `[attribut]`.",
      "explain_dr": "CSS ghir howa lmaquillage dyal HTML, selectors kaygolo l browser chkon ghadi ytziyan.",
      "example": "p { color: red; }\n.btn { padding: 8px; }\n#nav { height: 60px; }\n[type=\"email\"] { border: 1px solid gray; }",
      "q": "L'exemple contient quatre sélecteurs — lequel cible <input type=\"email\">, et que sélectionne chacun ?",
      "a": "Le sélecteur d'attribut [type=\"email\"] ; p sélectionne tous les paragraphes, .btn tous les éléments de cette classe, #nav l'élément d'id nav."
    },
    {
      "text": "Ordre de spécificité : styles inline > `#id` > `.class` > élément — en cas d'égalité, la dernière règle gagne.",
      "explain_dr": "specificity b7al wazn: id t9il 3la class, w class t9ila 3la element.",
      "example": "/* inline > #id > .class > element; later wins ties */\n#nav .link { color: red; }\n.link { color: blue; } /* loses */",
      "q": "Deux règles ciblent un lien dans #nav : #nav .link { color: red } et .link { color: blue }. Laquelle gagne et pourquoi ?",
      "a": "Le rouge gagne : #nav .link combine un id et une classe, plus spécifique que la seule classe .link ; la spécificité prime sur l'ordre source."
    },
    {
      "text": "Le modèle de boîte, c'est contenu + padding + bordure + marge ; `box-sizing: border-box` rend les dimensions prévisibles.",
      "explain_dr": "box-sizing border-box kaykhali padding w border dakhl l width, bla bih l7sabat katkhroj ghalta.",
      "example": "* { box-sizing: border-box; }\n/* width now includes padding + border */",
      "q": "Un élément a width: 200px, padding: 20px, border: 2px — quelle est sa largeur avec et sans box-sizing: border-box ?",
      "a": "Avec border-box il fait 200px de large (padding et bordure inclus) ; sans (content-box, la valeur par défaut) il fait 244px — 200 + 2x20 + 2x2."
    },
    {
      "text": "Flexbox (`display: flex`) dispose les éléments en une dimension ; CSS Grid gère deux dimensions.",
      "explain_dr": "flex l satr wa7ed (menu), grid l jouj dimensions (layout kaml).",
      "example": ".row { display: flex; }\n.grid { display: grid; grid-template-columns: 1fr 1fr; }",
      "q": "Quand choisir display: grid plutôt que display: flex, selon l'exemple ?",
      "a": "Utilisez grid pour les mises en page en deux dimensions (lignes et colonnes, comme la grille de cartes à 2 colonnes) ; flex pour les mises en page en une dimension (une ligne ou une colonne d'éléments)."
    },
    {
      "text": "Utilisez `margin` pour l'espace entre les éléments et `padding` pour l'espace à l'intérieur d'un élément.",
      "explain_dr": "margin howa lmasafa bin jiran, padding howa lmasafa ldakhl dyal dar.",
      "example": ".card { margin: 16px; }  /* space BETWEEN cards */\n.card { padding: 16px; } /* space INSIDE the card */",
      "q": "Deux cartes ont besoin de 16px d'espace entre elles, et le texte de chaque carte de 16px depuis le bord — quelle propriété pour chaque cas ?",
      "a": "margin: 16px sur les cartes pour l'espace entre elles ; padding: 16px à l'intérieur de chaque carte pour l'espace entre le contenu et le bord."
    },
    {
      "text": "Les media queries (`@media (max-width: 768px)`) rendent les mises en page responsives.",
      "explain_dr": "media queries kaybdlo design 3la 7sab l3ard dyal l'ecran — responsive design.",
      "example": "@media (max-width: 768px) {\n  .grid { grid-template-columns: 1fr; }\n}",
      "q": "La grille de l'exemple a 2 colonnes ; sur un téléphone de 500px de large, combien de colonnes affiche-t-elle et pourquoi ?",
      "a": "Une seule colonne : la règle @media (max-width: 768px) force la grille à une colonne sous 768px."
    },
    {
      "text": "Les pseudo-classes comme `:hover`, `:focus` et `:nth-child()` stylisent les éléments dans des états spécifiques.",
      "explain_dr": "hover w focus w nth-child kaykhaliwk tstili l'element ghir f 7ala mo3ayana.",
      "example": "a:hover { color: red; }\ninput:focus { outline: 2px solid blue; }\nli:nth-child(odd) { background: #eee; }",
      "q": "Dans l'exemple, quand li:nth-child(odd) s'applique-t-il, et que se passe-t-il au survol d'un lien ?",
      "a": "nth-child(odd) stylise les éléments de liste en position impaire (1er, 3e, 5e…) ; le lien devient rouge uniquement tant que le pointeur est dessus (:hover)."
    },
    {
      "text": "Les variables CSS (`--brand: blue;`) déclarées une fois peuvent être réutilisées via `var(--brand)`.",
      "explain_dr": "CSS variables b7al 3elba kat7et fiha lon w katst3mlo f blast bzf.",
      "example": ":root { --brand: blue; }\n.btn { background: var(--brand); }",
      "q": "Vous changez --brand: blue en --brand: red dans l'exemple — combien de règles devez-vous modifier ?",
      "a": "Une seule : la variable est déclarée une fois dans :root, donc chaque usage de var(--brand) se met à jour automatiquement."
    },
    {
      "text": "Préférez les unités `rem` pour des tailles adaptatives ; `1rem` vaut la taille de police racine (souvent 16px).",
      "explain_dr": "rem kaykber w ysghar m3a font-size dyal root — mzyan l accessibility.",
      "example": "html { font-size: 16px; }\nh1 { font-size: 2rem; } /* = 32px, scales with root */",
      "q": "La taille de police racine est de 16px et un utilisateur zoome pour la porter à 20px — que vaut 2rem sur le h1, et pourquoi rem est-il meilleur que px ici ?",
      "a": "40px : 2rem vaut toujours deux fois la taille de police racine, donc cela suit le zoom de l'utilisateur — un px fixe ne le ferait pas."
    },
    {
      "text": "`z-index` ne fonctionne que sur les éléments positionnés (`relative`, `absolute`, `fixed` ou `sticky`).",
      "explain_dr": "z-index ma kaykhdemch ila l'element ma 3ndoch position (relative, absolute...).",
      "example": ".modal { position: fixed; z-index: 100; }\n/* z-index needs a position */",
      "q": "Votre modale a z-index: 100 mais apparaît sous un autre élément — quelle est la cause probable, selon l'exemple ?",
      "a": "La modale n'est probablement pas positionnée : z-index ne fonctionne que sur les éléments positionnés (relative, absolute, fixed, sticky) ; sur un élément static, z-index est ignoré."
    },
    {
      "text": "Les marges verticales adjacentes fusionnent vers la plus grande, pas la somme — `margin-bottom: 20px` face à `margin-top: 30px` donne 30px d'espace.",
      "explain_dr": "margins l3amoudiya ma katjma3ch, katakhdo ghir lkbira — hadi ghalta dyal bzf dyal nas.",
      "example": "/* 20px margin meets 30px margin -> 30px gap, not 50px */\nh1 { margin-bottom: 20px; }\np { margin-top: 30px; }",
      "q": "Le h1 a margin-bottom: 20px et le paragraphe margin-top: 30px — quelle est la taille réelle de l'espace, et pourquoi ?",
      "a": "30px, pas 50px : les marges verticales adjacentes fusionnent en un seul espace égal à la plus grande des deux."
    },
    {
      "text": "`position: absolute` s'ancre au plus proche ancêtre positionné — oubliez `position: relative` sur le parent et il remonte dans l'arbre.",
      "explain_dr": "absolute kaytlasa9 f a9rab parent 3ndo position, ila nssiti relative l parent ghadi yherb lb3id.",
      "example": ".parent { position: relative; }\n.child { position: absolute; top: 0; right: 0; }",
      "q": "L'enfant est en position: absolute; top: 0; right: 0 mais atterrit en haut à droite de la page au lieu du parent — qu'avez-vous oublié ?",
      "a": "position: relative sur le parent : les éléments absolute s'ancrent au plus proche ancêtre positionné, et sans lui ils remontent jusqu'au viewport."
    },
    {
      "text": "`flex: 1` est le raccourci de `flex: 1 1 0%` ; la base à zéro explique pourquoi les items flex rétrécissent jusqu'à disparaître.",
      "explain_dr": "flex:1 kay3ni basis 0%, 3lach flex items kayt9albo 7ta kaywliw sghar bzf.",
      "example": ".item { flex: 1; } /* = flex: 1 1 0%; zero basis */",
      "q": "Vos items flex s'effondrent malgré flex: 1 sur chacun — en quoi le raccourci se déploie-t-il, et pourquoi cela arrive-t-il ?",
      "a": "flex: 1 se déploie en 1 1 0% — la base flex à zéro signifie que les items partent d'une largeur nulle, donc un contenu sans largeur intrinsèque rétrécit jusqu'à disparaître ; c'est la base qui en est la cause."
    },
    {
      "text": "`grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` construit une grille responsive sans aucune media query.",
      "explain_dr": "auto-fit m3a minmax kaydir grid responsive bo7do bla media queries.",
      "example": ".grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}",
      "q": "Que fait repeat(auto-fit, minmax(200px, 1fr)) quand le conteneur fait 650px de large ?",
      "a": "Il place autant de colonnes que possible (ici trois colonnes de 200px et plus, étirées pour remplir) et les passe à la ligne automatiquement quand le conteneur rétrécit — sans media queries."
    },
    {
      "text": "`display: flow-root` (ou `overflow: hidden`) sur un parent contient les enfants flottants et stoppe la fusion des marges.",
      "explain_dr": "flow-root kaykhali parent y7tad l floats dyal wladha w y7bes margin collapse.",
      "example": ".parent { display: flow-root; } /* contains floats, stops margin collapse */",
      "q": "Un parent aux enfants flottants s'effondre à hauteur zéro — comment le display: flow-root de l'exemple corrige-t-il cela ?",
      "a": "flow-root crée un nouveau contexte de formatage de bloc, ce qui fait contenir les enfants flottants par le parent (et empêche aussi les marges des enfants de fusionner à travers lui)."
    },
    {
      "text": "Une déclaration `!important` de l'auteur bat un attribut `style=\"\"` inline normal — le inline n'est pas intouchable.",
      "explain_dr": "!important dyal CSS katghleb inline style l3adi — inline machi dima rab7a.",
      "example": ".a { color: red !important; } /* beats style=\"color: blue\" */",
      "q": "Un élément porte style=\"color: blue\" mais s'affiche en rouge, comme la règle de l'exemple — comment est-ce possible ?",
      "a": "Une règle d'auteur !important (.a { color: red !important }) bat un style inline normal ; les styles inline ne gagnent que si aucun des deux n'est important."
    },
    {
      "text": "Les couches de cascade (`@layer base, components;`) tranchent avant la spécificité : la dernière couche gagne, et le non-couché bat tout le couché.",
      "explain_dr": "layers kay7kmo 9bel specificity: layer li jaya mor katrbe7 dima.",
      "example": "@layer base, components;\n@layer components { .btn { padding: 8px; } } /* wins over base */",
      "q": "Vous avez .btn { padding: 4px } non couché et @layer components { .btn { padding: 8px } } — lequel gagne ?",
      "a": "La règle non couchée gagne : les styles non couchés battent tous les styles couchés, et les couches se décident avant la spécificité. (Au sein des couches, la dernière déclarée gagne.)"
    },
    {
      "text": "Sur mobile, `100vh` inclut le chrome du navigateur qui se redimensionne — utilisez `100dvh` pour les mises en page plein écran.",
      "explain_dr": "f telephone 100vh kaytbedel m3a address bar, 100dvh howa s7i7 l fullscreen.",
      "example": ".hero { height: 100dvh; } /* dynamic viewport, mobile-safe */",
      "q": "Votre hero en 100vh saute quand la barre d'adresse mobile se masque — que recommande l'exemple à la place, et pourquoi ?",
      "a": "100dvh : il suit la hauteur dynamique du viewport, sans le chrome du navigateur, donc il ne se redimensionne pas quand la barre d'adresse apparaît ou disparaît."
    },
    {
      "text": "On ne peut pas transitionner `display: none` ; animez `opacity` + `visibility`, ou l'astuce `grid-template-rows: 0fr → 1fr`.",
      "explain_dr": "ma ymknch tdir transition 3la display:none — khdem b opacity w visibility.",
      "example": ".menu { opacity: 0; visibility: hidden; transition: .3s; }\n.menu.open { opacity: 1; visibility: visible; }",
      "q": "Vous voulez un menu qui apparaît en fondu à l'ouverture — pourquoi ne pas simplement transitionner display: none vers display: block ?",
      "a": "display n'est pas animable (c'est une valeur discrète) et display: none retire complètement l'élément ; animez plutôt opacity + visibility, ou utilisez l'astuce grid-template-rows 0fr vers 1fr."
    },
    {
      "text": "`:where()` a une spécificité nulle (parfait pour les resets) ; `:is()` prend la spécificité de son argument le plus fort.",
      "explain_dr": ":where() specificity dyalo zero, :is() kayakhod specificity dyal a9wa argument.",
      "example": ":where(.a, #id) { } /* zero specificity */\n:is(.a, #id) { }    /* takes #id specificity */",
      "q": ":where(.a, #id) et :is(.a, #id) ciblent le même élément — pourquoi une simple règle ultérieure battrait-elle l'un mais pas l'autre ?",
      "a": ":where() a toujours une spécificité nulle, donc toute règle normale ultérieure le surcharge ; :is() prend la spécificité de son argument le plus fort (#id ici), difficile à surcharger."
    },
    {
      "text": "`::before` et `::after` exigent `content: \"\"` pour s'afficher, et ils sont inline par défaut.",
      "explain_dr": "before w after ma kaybanowch bla content, w homa inline par defaut.",
      "example": ".tip::before { content: \"\"; display: inline-block; width: 8px; }",
      "q": "Votre .tip::before n'affiche rien de visible — quelle déclaration manque probablement, selon l'exemple ?",
      "a": "content: \"\" — ::before et ::after ne s'affichent pas du tout sans déclaration content."
    },
    {
      "text": "`object-fit: cover` recadre une image pour remplir sa boîte sans déformation — avec un conteneur à ratio fixe.",
      "explain_dr": "object-fit cover kay9os tsowira bach t3mer la boite bla ma tt3awaj.",
      "example": ".thumb { width: 200px; height: 200px; object-fit: cover; }",
      "q": "Une miniature 200x200 affiche une image étirée — qu'est-ce qu'ajouter object-fit: cover change ?",
      "a": "L'image est recadrée, pas étirée, pour remplir la boîte carrée en gardant ses proportions ; à combiner avec le conteneur à taille fixe."
    },
    {
      "text": "`clamp(1rem, 2vw + 1rem, 2rem)` donne une typographie fluide sans media queries : minimum, préféré, maximum.",
      "explain_dr": "clamp kay3tik font-size kaykber w ysghar m3a l'ecran bla media queries.",
      "example": "h1 { font-size: clamp(1rem, 2vw + 1rem, 2rem); }",
      "q": "Dans clamp(1rem, 2vw + 1rem, 2rem), quelle est la taille du h1 sur un écran très large, et que sont les trois arguments ?",
      "a": "2rem (le maximum) : les trois arguments sont minimum, préféré et maximum — la taille reste fluide via 2vw+1rem mais ne dépasse jamais les bornes."
    },
    {
      "text": "`position: sticky` exige une valeur `top` (ou `bottom`) et échoue silencieusement dans un ancêtre en `overflow: hidden`.",
      "explain_dr": "sticky khasso top w kaymout b sokt ila parent 3ndo overflow hidden.",
      "example": ".bar { position: sticky; top: 0; }\n/* breaks silently inside overflow: hidden */",
      "q": "Votre en-tête sticky ne colle jamais — quelles deux choses l'exemple dit-il de vérifier ?",
      "a": "Qu'il a une valeur de seuil comme top: 0 (sticky en a besoin pour savoir quand coller), et qu'aucun ancêtre n'a overflow: hidden, qui casse sticky silencieusement."
    },
    {
      "text": "Enveloppez les animations dans `@media (prefers-reduced-motion: reduce)` pour les utilisateurs qui les refusent — un must d'accessibilité.",
      "explain_dr": "prefers-reduced-motion kay7tarm nas li ma kaybghiwch animations — accessibility mohima.",
      "example": "@media (prefers-reduced-motion: reduce) {\n  * { animation: none; transition: none; }\n}",
      "q": "Un utilisateur a activé « Réduire les animations » dans son OS — que devrait faire votre CSS, selon l'exemple ?",
      "a": "Désactiver ou minimiser les animations dans @media (prefers-reduced-motion: reduce) — l'exemple met animation et transition à none — une exigence d'accessibilité."
    }
  ],
  "Tailwind": [
    {
      "text": "Tailwind est un framework CSS utility-first : on stylise avec des classes comme `flex`, `p-4`, `text-center` directement dans le balisage.",
      "explain_dr": "Tailwind b7al sandou9 dyal classes jahzin, katkteb flex w p-4 nichan f HTML.",
      "example": "<div class=\"flex p-4 text-center\">Hello</div>",
      "q": "Que remplace class=\"flex p-4 text-center\" dans l'exemple ?",
      "a": "Des règles CSS personnalisées : flex remplace display: flex, p-4 une règle de padding, text-center text-align — le style se fait directement dans le balisage."
    },
    {
      "text": "Aucun CSS personnalisé n'est nécessaire pour la plupart des mises en page — les classes utilitaires couvrent espacements, couleurs, typographie et plus.",
      "explain_dr": "a8lab layouts ma kay7tajoch CSS khass, classes kaykfiw.",
      "example": "<button class=\"rounded px-4 py-2 bg-blue-600 text-white\">Save</button>\n<!-- zero custom CSS -->",
      "q": "Le bouton de l'exemple est stylé mais « zéro CSS personnalisé » — d'où viennent réellement ses styles ?",
      "a": "Des classes utilitaires pré-construites de Tailwind (rounded, px-4, bg-blue-600, text-white), qui se compilent en CSS automatiquement."
    },
    {
      "text": "Le design responsive utilise des préfixes de breakpoints : `md:flex`, `lg:grid-cols-3`, `sm:text-lg`.",
      "explain_dr": "md: w lg: kaybdlo design 3la 7sab l'ecran — responsive b classes.",
      "example": "<div class=\"grid gap-4 sm:grid-cols-2 lg:grid-cols-3\">Cards</div>",
      "q": "La grille de l'exemple affiche 1 colonne sur mobile, 2 sur sm, 3 sur lg — quelles classes font cela, et quel est le défaut mobile ?",
      "a": "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 : la grille sans préfixe est le défaut mobile (une colonne), et les préfixes sm:/lg: s'appliquent à ces breakpoints et au-delà."
    },
    {
      "text": "Les variantes d'état stylisent les interactions : `hover:bg-blue-600`, `focus:ring-2`, `disabled:opacity-50`.",
      "explain_dr": "hover: w focus: kaystiliw l'element mli kat7et mouse wla katclicki 3lih.",
      "example": "<button class=\"hover:bg-blue-600 focus:ring-2 disabled:opacity-50\">Submit</button>",
      "q": "Quels trois états le bouton de l'exemple stylise-t-il, et quand disabled:opacity-50 s'applique-t-il ?",
      "a": "hover, focus et disabled ; disabled:opacity-50 s'applique uniquement quand le bouton est désactivé."
    },
    {
      "text": "Le mode sombre peut être basé sur une classe : `dark:bg-gray-900` s'applique quand la classe `dark` est sur un parent.",
      "explain_dr": "dark: kaytbedel design mli dark mode khdam.",
      "example": "<div class=\"bg-white dark:bg-gray-900\">\n  <!-- dark: applies when .dark is on a parent -->\n</div>",
      "q": "Quand dark:bg-gray-900 s'applique-t-il dans l'exemple, et comment bascule-t-on le thème ?",
      "a": "Quand un ancêtre (souvent <html>) porte la classe dark — avec le mode sombre basé sur une classe, basculer cette classe change le thème."
    },
    {
      "text": "Les couleurs suivent une échelle : `bg-red-500` est plus clair que `bg-red-700` ; `50` est presque blanc, `950` presque noir.",
      "explain_dr": "l2ar9am dyal colors: sghir = fate7, kbir = ghame9 (50 byed, 950 k7el).",
      "example": "<div class=\"bg-red-500\">Lighter</div>\n<div class=\"bg-red-700\">Darker</div>\n<!-- 50 near-white ... 950 near-black -->",
      "q": "Lequel est plus foncé, bg-red-500 ou bg-red-700, et où se situent 50 et 950 sur l'échelle ?",
      "a": "bg-red-700 est plus foncé ; 50 est presque blanc et 950 presque noir — plus le chiffre est élevé, plus la teinte est foncée."
    },
    {
      "text": "Les espacements reposent sur une échelle de `0.25rem` : `p-4` signifie `1rem` de padding, `m-2` signifie `0.5rem` de marge.",
      "explain_dr": "p-4 kay3ni 1rem, m-2 kay3ni 0.5rem — kol wa7ed = 0.25rem.",
      "example": "<div class=\"p-4 m-2\">\n  <!-- p-4 = 1rem, m-2 = 0.5rem (0.25rem scale) -->\n</div>",
      "q": "Quelles sont les valeurs calculées de p-4 et m-2 dans l'exemple ?",
      "a": "p-4 = 1rem de padding et m-2 = 0,5rem de marge, sur l'échelle de 0,25rem (4x0,25 = 1, 2x0,25 = 0,5)."
    },
    {
      "text": "Les tokens de design personnalisés vont dans `tailwind.config.js` sous `theme.extend` — couleurs, polices, espacements.",
      "explain_dr": "theme.extend f config howa fin katzid colors w fonts dyalk.",
      "example": "// tailwind.config.js\ntheme: { extend: { colors: { brand: \"#123\" } } }",
      "q": "Où ajouter une couleur de marque comme #123 dans Tailwind v3, et quel utilitaire l'exemple génère-t-il ?",
      "a": "Dans tailwind.config.js sous theme.extend.colors ; l'exemple définit brand: \"#123\", utilisable en bg-brand, text-brand, etc."
    },
    {
      "text": "Utilisez `@apply` en CSS pour composer des utilitaires en classes de composants réutilisables.",
      "explain_dr": "@apply kayjme3 classes f class wa7da kat3awd tsta3mloha.",
      "example": ".btn {\n  @apply rounded px-4 py-2 bg-blue-600 text-white;\n}",
      "q": "Que produit la règle .btn du CSS de l'exemple, et où peut-elle être utilisée ?",
      "a": "Une classe .btn réutilisable qui incorpore le CSS compilé de rounded, px-4, py-2, bg-blue-600, text-white — utilisable sur tout élément au lieu de répéter les utilitaires."
    },
    {
      "text": "Évitez les listes de classes trop longues en extrayant les motifs répétés dans des composants ou des classes `@apply`.",
      "explain_dr": "ila classes twalo bzf, jme3hom f component wla @apply — code an9a.",
      "example": "// Button.jsx - extract the repeated pattern\nfunction Btn({ children }) {\n  return <button className=\"rounded px-4 py-2 bg-blue-600 text-white\">{children}</button>;\n}",
      "q": "La même longue chaîne de classes apparaît sur 20 boutons — quelles deux options d'extraction l'exemple montre-t-il ?",
      "a": "L'extraire dans un composant (l'exemple Button.jsx) ou dans une classe de composant @apply — les deux gardent une seule source de vérité."
    },
    {
      "text": "Les valeurs arbitraires sortent de l'échelle sans toucher à la config : `w-[350px]`, `text-[#bada55]`, `grid-cols-[1fr_2fr]`.",
      "explain_dr": "arbitrary values b7al w-[350px] kaykhaliwk tkhroj 3la scale bla ma tbdel config.",
      "example": "<div class=\"w-[350px] text-[#bada55] grid-cols-[1fr_2fr]\">",
      "q": "Vous avez besoin d'une boîte de 350px de large, mais Tailwind n'a pas de w-350 — que fait l'exemple ?",
      "a": "Utiliser une valeur arbitraire : w-[350px] — elle sort de l'échelle sans toucher à la config."
    },
    {
      "text": "Préfixez un utilitaire par `!` pour le rendre important — `!p-4` compile en `padding: 1rem !important` ; à utiliser avec parcimonie.",
      "explain_dr": "!p-4 kay3ni important — sta3mlo ghir ila darty bih.",
      "example": "<div class=\"!p-4\">\n  <!-- compiles to padding: 1rem !important -->\n</div>",
      "q": "En quoi !p-4 se compile-t-il, et pourquoi l'utiliser avec parcimonie ?",
      "a": "En padding: 1rem !important — cela casse l'ordre normal de surcharge des utilitaires et devient difficile à gérer, donc c'est un dernier recours."
    },
    {
      "text": "Les variantes s'empilent de gauche à droite : `md:hover:bg-blue-700` = styles hover actifs seulement au breakpoint md.",
      "explain_dr": "md:hover:bg-blue-700 kay3ni hover ghir f ecran md w lfou9.",
      "example": "<button class=\"md:hover:bg-blue-700\">\n  <!-- hover styles only at md and up -->\n</button>",
      "q": "Quand md:hover:bg-blue-700 s'applique-t-il ?",
      "a": "Uniquement au survol ET au breakpoint md et au-delà — les variantes s'appliquent de gauche à droite, donc la condition md conditionne le style hover."
    },
    {
      "text": "`space-x-4` casse quand les enfants flex passent à la ligne ; préférez `gap-4`, qui gère le wrapping correctement.",
      "explain_dr": "space-x-4 kaytkherbe9 ila flex wrap, gap-4 howa l7al s7i7.",
      "example": "<div class=\"flex flex-wrap gap-4\">\n  <!-- gap handles wrapping; space-x-4 breaks -->\n</div>",
      "q": "Votre rangée flex passe sur deux lignes et le premier élément de la seconde ligne a une marge gauche bizarre — quel utilitaire en est la cause et quel est le correctif ?",
      "a": "space-x-4 : il ajoute margin-left à chaque enfant sauf le premier, ce qui casse au passage à la ligne ; remplacez-le par gap-4, qui gère le wrapping correctement."
    },
    {
      "text": "La classe `container` centre le contenu avec des largeurs max responsives — fini les wrappers bricolés à la main.",
      "explain_dr": "container class jahza katcenter l content — ma t3awdch tsaybha b ydek.",
      "example": "<div class=\"container\">\n  <!-- centered, responsive max-widths built in -->\n</div>",
      "q": "Quel travail de mise en page la classe container fait-elle pour vous ?",
      "a": "Elle centre le contenu avec des largeurs max responsives intégrées — fini les divs wrappers bricolés à la main avec marges et breakpoints."
    },
    {
      "text": "`sr-only` masque visuellement tout en restant lisible par les lecteurs d'écran — l'outil idéal pour les labels d'icônes et les skip links.",
      "explain_dr": "sr-only kaykhfi l3in w kaykhlih l screen readers — l icon labels.",
      "example": "<button aria-label=\"Close\">\n  <span class=\"sr-only\">Close menu</span>\n</button>",
      "q": "Pourquoi mettre sr-only sur le span de l'exemple au lieu de simplement supprimer le texte ?",
      "a": "sr-only masque le texte visuellement tout en le gardant lisible par les lecteurs d'écran — le supprimer retirerait complètement le label accessible."
    },
    {
      "text": "`truncate`, `line-clamp-2` et `whitespace-nowrap` contrôlent le débordement du texte sans CSS personnalisé.",
      "explain_dr": "truncate w line-clamp kay9t3o text twil bla CSS khass.",
      "example": "<p class=\"truncate\">Long single line...</p>\n<p class=\"line-clamp-2\">Long paragraph...</p>",
      "q": "Vous avez un titre sur une ligne qui ne doit pas passer à la ligne et un paragraphe limité à 2 lignes — quelles classes ?",
      "a": "truncate pour la ligne unique (pas de retour à la ligne + points de suspension) et line-clamp-2 pour le paragraphe de deux lignes."
    },
    {
      "text": "`aspect-video` et `aspect-square` réservent l'espace des médias et éliminent le décalage de mise en page.",
      "explain_dr": "aspect-video kay7jez blasa l video 9bel ma tloada — ma kaynch layout shift.",
      "example": "<div class=\"aspect-video\">\n  <video src=\"demo.mp4\"></video>\n</div>",
      "q": "Votre page saute quand une vidéo charge — comment l'aspect-video de l'exemple prévient-il cela ?",
      "a": "Il réserve une boîte 16:9 avant le chargement de la vidéo, éliminant le décalage de mise en page cumulé à l'arrivée du média."
    },
    {
      "text": "Tailwind v4 est CSS-first : définissez vos tokens dans `@theme { --color-brand: #123; }` et utilisez `bg-brand` — plus de fichier de config.",
      "explain_dr": "Tailwind v4: config wlat f CSS b @theme, ma b9atch config file.",
      "example": "/* v4: CSS-first tokens, no config file */\n@theme { --color-brand: #123; }\n<div class=\"bg-brand\">Brand</div>",
      "q": "Dans Tailwind v4, comment définir une couleur de marque sans fichier de config, selon l'exemple ?",
      "a": "En CSS avec @theme { --color-brand: #123; }, puis utilisez bg-brand — plus besoin de tailwind.config.js."
    },
    {
      "text": "`group` + `group-hover:` stylise les enfants au survol du parent — ex. révéler un bouton au survol d'une carte.",
      "explain_dr": "group-hover kaystili lwlad mli parent ythover — b7al button kayban f card.",
      "example": "<div class=\"group relative\">\n  <button class=\"opacity-0 group-hover:opacity-100\">Edit</button>\n</div>",
      "q": "Dans l'exemple, quand le bouton Edit est-il visible, et quelles deux classes sur le parent rendent cela possible ?",
      "a": "Uniquement au survol de la carte : le parent doit porter la classe group et le bouton utilise group-hover:opacity-100 (en partant de opacity-0)."
    },
    {
      "text": "`peer` + `peer-checked:` stylise un voisin selon l'état de l'input — des toggles en pur CSS sans JavaScript.",
      "explain_dr": "peer-checked kaystili jiran 3la 7sab l input — toggle bla JavaScript.",
      "example": "<input type=\"checkbox\" class=\"peer sr-only\">\n<div class=\"peer-checked:bg-blue-600\">Toggle</div>",
      "q": "Comment l'exemple construit-il un toggle en pur CSS sans JavaScript ?",
      "a": "La case à cocher reçoit la classe peer ; le div voisin utilise peer-checked:bg-blue-600 pour se restyler quand la case est cochée."
    },
    {
      "text": "`divide-x` / `divide-y` ajoutent des bordures entre les enfants — plus propre qu'un `border` sur chaque élément.",
      "explain_dr": "divide-x kayzid borders bin lwlad, an9a men border f kol wa7ed.",
      "example": "<ul class=\"divide-y divide-gray-200\">\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>",
      "q": "Vous voulez de fines séparations entre les éléments de liste — pourquoi divide-y est-il meilleur qu'un border sur chaque li ?",
      "a": "divide-y n'ajoute des bordures qu'entre les enfants, donc pas de bordure superflue sur le premier/dernier élément — plus propre qu'un border sur chaque élément."
    },
    {
      "text": "`ring-2 ring-offset-2` crée des contours de focus qui ne déplacent pas la mise en page comme `border` — mieux pour l'accessibilité.",
      "explain_dr": "ring-2 l focus ma kayherkch layout b7al border — a7san l accessibility.",
      "example": "<button class=\"focus:ring-2 focus:ring-offset-2\">\n  <!-- focus ring, no layout shift -->\n</button>",
      "q": "Pourquoi l'exemple préfère-t-il focus:ring-2 à l'ajout d'une bordure au focus ?",
      "a": "Un ring ajoute un surlignage façon contour sans changer la taille de l'élément, donc il ne déplace jamais la mise en page comme le ferait l'ajout d'une bordure."
    },
    {
      "text": "`max-w-prose` (65ch) garde une longueur de ligne lisible ; combinez avec `mx-auto` pour des articles centrés.",
      "explain_dr": "max-w-prose kay7ded toul satr bach l9raya tkon mori7a.",
      "example": "<article class=\"max-w-prose mx-auto\">\n  <!-- 65ch lines, centered -->\n</article>",
      "q": "Les lignes de votre article s'étirent sur toute la largeur sur desktop — que corrige max-w-prose mx-auto ?",
      "a": "max-w-prose limite la longueur de ligne à ~65ch pour la lisibilité, et mx-auto centre l'article."
    },
    {
      "text": "Placez les classes de composants `@apply` dans `@layer components { ... }` pour que les utilitaires comme `mt-4` puissent toujours les surcharger.",
      "explain_dr": "@layer components kaykhali utilities b7al mt-4 yghlebo l component classes dyalk.",
      "example": "@layer components {\n  .btn { @apply rounded px-4 py-2; }\n}\n<!-- utilities like mt-4 still override .btn -->",
      "q": "Vous avez défini .btn avec @apply mais mt-4 sur le même élément ne surcharge pas sa marge — de quoi l'exemple mettait-il en garde ?",
      "a": "Les classes de composants @apply doivent aller dans @layer components { ... } ; hors d'une couche, la règle du composant peut battre les utilitaires et casser les surcharges."
    }
  ],
  "NodeJs": [
    {
      "text": "Node.js est un runtime JavaScript basé sur le moteur V8 de Chrome, qui s'exécute hors du navigateur.",
      "explain_dr": "Node.js rah JavaScript khddam barra l browser, b moteur V8 dyal Chrome.",
      "example": "// runs JS outside the browser, on Chrome's V8\nconsole.log(process.version);",
      "q": "Qu'affiche console.log(process.version), et pourquoi peut-il s'exécuter hors d'un navigateur ?",
      "a": "La version de Node.js (ex. v20.x) — Node exécute JavaScript sur le moteur V8 de Chrome comme runtime autonome, pas dans un navigateur."
    },
    {
      "text": "Il utilise une boucle d'événements avec des entrées/sorties non bloquantes, efficace pour les applis gourmandes en I/O comme les API.",
      "explain_dr": "kayrdd 3la bzzaf d tlabat bla blocage — mzyan l API li fiha bzzaf d I/O.",
      "example": "const fs = require(\"fs\");\nfs.readFile(\"a.txt\", (err, data) => {\n  // event loop stays free while reading\n});",
      "q": "Pendant que fs.readFile lit a.txt, que peut faire la boucle d'événements ?",
      "a": "Continuer à servir d'autres tâches : les I/O sont non bloquantes, donc la boucle d'événements reste libre et exécute le callback quand la lecture se termine."
    },
    {
      "text": "Installez les paquets avec `npm install <nom>` ; les dépendances sont listées dans `package.json`.",
      "explain_dr": "npm install katnzzel l package w katzido f package.json.",
      "example": "$ npm install express\n// listed in package.json -> \"dependencies\"",
      "q": "Après npm install express, où express est-il enregistré, et pourquoi est-ce important ?",
      "a": "Dans package.json sous « dependencies » — cet enregistrement permet à quiconque de reproduire l'installation avec npm install/ci."
    },
    {
      "text": "Importez les modules avec `require()` (CommonJS) ou `import` (modules ES avec `\"type\": \"module\"`).",
      "explain_dr": "require dyal l9dam, import dyal jdid — khass \"type\": \"module\".",
      "example": "const fs = require(\"fs\");            // CommonJS\nimport fs from \"fs\";                  // ESM, needs \"type\": \"module\"",
      "q": "Vous écrivez import fs from \"fs\" et obtenez une SyntaxError — quel est le correctif, selon l'exemple ?",
      "a": "Ajouter \"type\": \"module\" à package.json (ESM), ou passer à const fs = require(\"fs\") (CommonJS)."
    },
    {
      "text": "Construisez un serveur avec Express : `app.get(\"/users\", (req, res) => res.json(users))`.",
      "explain_dr": "Express: app.get(\"/users\", ...) katjawb 3la GET.",
      "example": "const express = require(\"express\");\nconst app = express();\napp.get(\"/users\", (req, res) => res.json(users));",
      "q": "Dans l'exemple, que retourne une requête GET sur /users ?",
      "a": "Le tableau users en JSON — res.json(users) le sérialise et définit le type de contenu JSON."
    },
    {
      "text": "Les variables d'environnement vivent dans un fichier `.env` et se lisent via `process.env.API_KEY` — ne codez jamais les secrets en dur.",
      "explain_dr": "secrets f .env, qrahom b process.env — jamais en dur.",
      "example": "require(\"dotenv\").config();\nconst key = process.env.API_KEY; // never hardcoded",
      "q": "Votre clé API est en dur dans le code comme littéral de chaîne — que dit l'exemple de faire à la place ?",
      "a": "La mettre dans un fichier .env (chargé via dotenv) et la lire avec process.env.API_KEY — ne jamais coder les secrets en dur."
    },
    {
      "text": "Gérez les erreurs dans les routes async avec `try/catch` ou un middleware de gestion d'erreurs pour éviter les crashs.",
      "explain_dr": "try/catch f routes async wlla middleware — sinon crash.",
      "example": "app.get(\"/\", async (req, res, next) => {\n  try {\n    res.json(await db.users.find());\n  } catch (err) { next(err); }\n});",
      "q": "Votre route async lève une erreur — pourquoi l'exemple l'enveloppe-t-il dans try/catch avec next(err) ?",
      "a": "Les erreurs async non gérées peuvent crasher le processus ou bloquer la requête ; les capturer et appeler next(err) transmet l'erreur au middleware de gestion d'erreurs d'Express."
    },
    {
      "text": "`npm start` exécute le script nommé `start` défini dans `package.json`.",
      "explain_dr": "npm start kaykhdem script start dyal package.json.",
      "example": "// package.json\n\"scripts\": { \"start\": \"node server.js\" }\n$ npm start",
      "q": "Vous lancez npm start mais il n'y a pas de script start — que se passe-t-il ?",
      "a": "npm échoue : il exécute le script nommé « start » de package.json (ici node server.js), et échoue si ce script n'est pas défini."
    },
    {
      "text": "Utilisez `nodemon` en développement pour un redémarrage automatique quand les fichiers changent.",
      "explain_dr": "nodemon kayrestart rasso mli katbdel fichier — dev.",
      "example": "// package.json\n\"scripts\": { \"dev\": \"nodemon server.js\" }\n// nodemon restarts on file changes",
      "q": "Pourquoi utiliser nodemon server.js plutôt que node server.js en développement ?",
      "a": "nodemon surveille vos fichiers et redémarre le serveur automatiquement à chaque changement — node seul exige un redémarrage manuel."
    },
    {
      "text": "Node est mono-thread — gardez les tâches gourmandes en CPU hors des gestionnaires de requêtes ou déléguez-les aux worker threads.",
      "explain_dr": "mono-thread — CPU-heavy khrjouh men handlers.",
      "example": "const { Worker } = require(\"worker_threads\");\n// offload CPU-heavy work, keep the event loop free",
      "q": "Votre gestionnaire de requête fait du traitement d'image lourd et toutes les autres requêtes se figent — que recommande l'exemple ?",
      "a": "Garder les tâches gourmandes en CPU hors des gestionnaires de requêtes : les déléguer aux worker threads (ou à une file), pour que la boucle d'événements mono-thread reste libre."
    },
    {
      "text": "`process.nextTick()` s'exécute avant que la boucle d'événements continue — avant `setImmediate()` — un piège classique d'entretien.",
      "explain_dr": "nextTick katssbe9 kolchi qbl setImmediate — piège.",
      "example": "process.nextTick(() => console.log(\"tick\"));      // first\nsetImmediate(() => console.log(\"immediate\"));    // second",
      "q": "Qu'affiche l'exemple, dans quel ordre, et pourquoi est-ce un piège d'entretien ?",
      "a": "tick, puis immediate : les callbacks de process.nextTick() s'exécutent avant que la boucle d'événements continue, avant setImmediate() — beaucoup supposent l'inverse."
    },
    {
      "text": "Une promesse rejetée non gérée fait crasher Node moderne : chaînez toujours `.catch()` ou écoutez `process.on(\"unhandledRejection\")`.",
      "explain_dr": "promise rejetée bla .catch kat9tl Node.",
      "example": "fetchData().catch(err => console.error(err));\n// or: process.on(\"unhandledRejection\", ...)",
      "q": "Votre promesse rejette et rien ne la capture — que se passe-t-il dans Node moderne, et quel est le correctif ?",
      "a": "Le processus crashe : chaînez toujours .catch() ou écoutez process.on(\"unhandledRejection\")."
    },
    {
      "text": "`require()` met les modules en cache après le premier chargement — modifier un objet exporté affecte tous les fichiers qui l'ont importé.",
      "explain_dr": "require kaycachih — tbadil kayban 3nd ga3.",
      "example": "// counter.js - cached after first require()\nlet n = 0;\nmodule.exports = { inc: () => ++n };\n// every importer shares the same n",
      "q": "Deux fichiers requièrent le même counter.js et appellent tous deux inc() — le second voit n=2, pas 1. Pourquoi ?",
      "a": "require() met le module en cache après le premier chargement, donc les deux fichiers partagent le même objet exporté — le modifier affecte chaque importateur."
    },
    {
      "text": "Les middlewares Express s'exécutent dans l'ordre de déclaration ; les gestionnaires d'erreurs doivent avoir quatre arguments `(err, req, res, next)` sinon Express les ignore.",
      "explain_dr": "ordre middleware mohim; error handler b 4 args.",
      "example": "app.use(logger); // middleware order matters\napp.use((err, req, res, next) => res.status(500).json({})); // 4 args",
      "q": "Votre gestionnaire d'erreurs ne s'exécute jamais, et il a la signature (req, res, next) — qu'est-ce qui cloche ?",
      "a": "Deux choses : les gestionnaires d'erreurs ont besoin de quatre arguments (err, req, res, next) sinon Express les ignore, et les middlewares s'exécutent dans l'ordre de déclaration, donc le gestionnaire doit venir après les routes."
    },
    {
      "text": "Les API synchrones comme `fs.readFileSync()` bloquent toute la boucle d'événements — ne les appelez jamais dans un gestionnaire de requête.",
      "explain_dr": "readFileSync katbloqui kolchi — 3mro f handler.",
      "example": "// BAD inside a route: fs.readFileSync(path) blocks everyone\nfs.readFile(path, (err, data) => { /* async */ });",
      "q": "Pourquoi fs.readFileSync(path) est-il acceptable dans un script de démarrage mais « BAD dans une route », selon l'exemple ?",
      "a": "Dans un gestionnaire de requête, il bloque toute la boucle d'événements pour tous les utilisateurs pendant la lecture ; au démarrage il n'y a pas de trafic à bloquer, donc les API synchrones sont acceptables."
    },
    {
      "text": "Gérez `SIGTERM`/`SIGINT` pour un arrêt propre : fermez le serveur HTTP et le pool de connexions avant `process.exit()`.",
      "explain_dr": "SIGTERM: sed serveur w DB qbl exit.",
      "example": "process.on(\"SIGTERM\", () => {\n  server.close(() => process.exit(0)); // graceful shutdown\n});",
      "q": "Votre conteneur s'arrête en pleine requête et coupe les connexions — que change le gestionnaire SIGTERM de l'exemple ?",
      "a": "Il laisse le travail en cours se terminer : server.close() cesse d'accepter de nouvelles connexions, puis le processus quitte — un arrêt propre au lieu d'un kill brutal."
    },
    {
      "text": "Utilisez `Buffer.from(str)` pour les données binaires — le constructeur `new Buffer()` est déprécié et dangereux.",
      "explain_dr": "Buffer.from s7i7a; new Buffer déprécié.",
      "example": "const buf = Buffer.from(\"hello\"); // safe\n// never: new Buffer(\"hello\") - deprecated & unsafe",
      "q": "Pourquoi l'exemple interdit-il new Buffer(\"hello\") au profit de Buffer.from(\"hello\") ?",
      "a": "new Buffer() est déprécié et dangereux (il peut fuir de la mémoire non initialisée) ; Buffer.from() est l'API sûre."
    },
    {
      "text": "Montez en charge une appli mono-thread avec le module `cluster` ou PM2 pour exploiter tous les cœurs CPU.",
      "explain_dr": "cluster/PM2 l ga3 cœurs CPU.",
      "example": "const cluster = require(\"cluster\");\n// or: pm2 start server.js -i max  (one worker per core)",
      "q": "Votre appli Node n'utilise qu'un seul cœur CPU sur une machine à 8 cœurs — quelles sont les deux solutions de l'exemple ?",
      "a": "Utiliser le module cluster pour forker un worker par cœur, ou lancer pm2 start server.js -i max — les deux multiplient l'appli mono-thread sur les cœurs."
    },
    {
      "text": "Utilisez `npm ci` dans les pipelines CI : il installe exactement ce qui est dans `package-lock.json`, contrairement à `npm install` qui peut dériver.",
      "explain_dr": "npm ci = install exact mn package-lock — CI.",
      "example": "$ npm ci   # CI installs exactly what package-lock.json pins",
      "q": "Pourquoi l'exemple préfère-t-il npm ci à npm install en CI ?",
      "a": "npm ci installe exactement ce qui est épinglé dans package-lock.json pour un build reproductible ; npm install peut faire dériver les versions."
    },
    {
      "text": "Importer du CommonJS depuis ESM passe par l'export par défaut (`import pkg from \"cjs-lib\"`), mais les imports nommés ne se résolvent souvent pas.",
      "explain_dr": "CJS mn ESM: default export khddam, named la.",
      "example": "import pkg from \"cjs-lib\";       // default export works\n// import { named } from \"cjs-lib\"; // named imports often fail",
      "q": "Vous importez une bibliothèque CommonJS en ESM et import { named } from \"cjs-lib\" échoue — que fonctionne, selon l'exemple ?",
      "a": "Importer l'export par défaut : import pkg from \"cjs-lib\" — les imports nommés depuis CJS ne se résolvent souvent pas ; déstructurez depuis pkg si besoin."
    },
    {
      "text": "Streamez les gros volumes au lieu de les mettre en mémoire : `fs.createReadStream(path).pipe(res)` garde la mémoire stable.",
      "explain_dr": "stream fichiers kbar b pipe — RAM stable.",
      "example": "fs.createReadStream(path).pipe(res); // streams keep memory flat",
      "q": "Votre endpoint met en mémoire un fichier de 2 Go avant de l'envoyer — quelle est l'alternative économe en mémoire de l'exemple ?",
      "a": "Le streamer : fs.createReadStream(path).pipe(res) envoie le fichier par morceaux, gardant la mémoire stable au lieu de charger 2 Go d'un coup."
    },
    {
      "text": "Durcissez une API avec `helmet` pour des en-têtes sécurisés et un limiteur de débit sur les routes de connexion contre la force brute.",
      "explain_dr": "helmet + rate limiter = API m7miya.",
      "example": "const helmet = require(\"helmet\");\napp.use(helmet());\napp.use(\"/login\", rateLimiter); // blunt brute force",
      "q": "Quelles deux mesures de durcissement l'exemple applique-t-il à une route de connexion ?",
      "a": "helmet() pour des en-têtes HTTP sécurisés, et un limiteur de débit sur /login contre les attaques par force brute."
    },
    {
      "text": "Conditionnez le comportement à `process.env.NODE_ENV` : erreurs détaillées en développement, messages génériques en production.",
      "explain_dr": "NODE_ENV: dev mfassal, prod 3ami.",
      "example": "if (process.env.NODE_ENV === \"production\") {\n  res.json({ error: \"Something went wrong\" }); // generic in prod\n}",
      "q": "Une erreur de production affiche une stack trace complète aux utilisateurs — que le code devrait-il vérifier, selon l'exemple ?",
      "a": "process.env.NODE_ENV : n'envoyer les erreurs détaillées qu'en développement, et des messages génériques comme « Something went wrong » en production."
    },
    {
      "text": "Un `EventEmitter` qui accumule des écouteurs sans `.off()`/`.removeListener()` fuit de la mémoire — nettoyez toujours.",
      "explain_dr": "EventEmitter bla .off() = fuite mémoire.",
      "example": "emitter.on(\"data\", handler);\n// cleanup when done:\nemitter.off(\"data\", handler);",
      "q": "Vous ajoutez un écouteur « data » par requête sans jamais le retirer — que se passe-t-il avec le temps ?",
      "a": "Fuite de mémoire : les écouteurs s'accumulent sur l'émetteur — nettoyez toujours avec .off() ou .removeListener() une fois terminé."
    },
    {
      "text": "Signez les JWT avec une expiration — `jwt.sign(payload, secret, { expiresIn: \"1h\" })` — et vérifiez le token sur chaque route protégée.",
      "explain_dr": "JWT b expiration w vérif f kol route.",
      "example": "const jwt = require(\"jsonwebtoken\");\nconst token = jwt.sign(payload, secret, { expiresIn: \"1h\" });",
      "q": "Vos tokens n'expirent jamais — qu'ajoute l'exemple à jwt.sign, et que doit-il se passer sur les routes protégées ?",
      "a": "Une expiration ({ expiresIn: \"1h\" }) pour que les tokens volés cessent de fonctionner ; et le token doit être vérifié sur chaque route protégée."
    }
  ],
  "RestApi": [
    {
      "text": "REST est un style d'architecture pour les API basé sur les méthodes HTTP standard.",
      "explain_dr": "REST b7al 9anoun dyal APIs: kayst3mlo HTTP methods lli kolchi kay3rfhom.",
      "example": "app.get('/users', (req, res) => res.json(users)); // REST API over HTTP methods",
      "q": "La route `app.get('/users', ...)` correspond à quelle opération (créer, lire, mettre à jour, supprimer), et qu'est-ce qui rend cette API RESTful ?",
      "a": "C'est une opération de lecture. L'API est RESTful car elle utilise une méthode HTTP standard (GET) sur un chemin de ressource (/users), sans nom d'action personnalisé."
    },
    {
      "text": "Associez les méthodes aux opérations : `GET` (lecture), `POST` (création), `PUT`/`PATCH` (mise à jour), `DELETE` (suppression).",
      "explain_dr": "GET l9raya, POST l creation, PUT/PATCH l update, DELETE l ms7 — kol wa7da 3ndha dawrha.",
      "example": "app.get('/users', listUsers); // read\napp.post('/users', createUser); // create\napp.put('/users/:id', replaceUser); // update\napp.delete('/users/:id', removeUser); // remove",
      "q": "Quelle méthode HTTP utiliseriez-vous pour remplacer entièrement le profil d'un utilisateur, et laquelle pour supprimer un utilisateur ?",
      "a": "PUT (ou PATCH pour une mise à jour partielle) pour remplacer le profil, et DELETE pour supprimer l'utilisateur."
    },
    {
      "text": "Les ressources se nomment avec des noms pluriels : `GET /users`, `GET /users/1`, `POST /users`.",
      "explain_dr": "resources b pluriel: /users, /users/1 — smiya kat3ni chno kayn ldakhl.",
      "example": "app.get('/users/:id', (req, res) => res.json(findUser(req.params.id))); // plural noun resources",
      "q": "`GET /users/1` est-elle une route REST correcte selon l'exemple ? Quelle règle de nommage suit-elle ?",
      "a": "Oui. Les ressources se nomment avec des noms pluriels (/users), plus un id pour un élément unique — pas de verbes dans l'URL."
    },
    {
      "text": "Utilisez correctement les codes de statut : `200` OK, `201` Created, `400` Bad Request, `401` Unauthorized, `404` Not Found, `500` Server Error.",
      "explain_dr": "200 OK, 201 Created, 404 Not Found, 500 Server Error — codes kaygolo chno w9e3.",
      "example": "res.status(201).json(newUser); // Created\nres.status(404).json({ error: 'User not found' }); // Not Found",
      "q": "Après la création réussie d'un utilisateur, faut-il répondre 200 ou 201 ? Et quand l'utilisateur n'existe pas ?",
      "a": "201 Created après une création réussie ; 404 Not Found quand l'utilisateur n'existe pas."
    },
    {
      "text": "Les API sont sans état — chaque requête porte sa propre authentification, souvent un token dans l'en-tête `Authorization`.",
      "explain_dr": "API stateless kay3ni kol request katjib m3aha token dyalha, server ma kaytfkrch chkoun nta.",
      "example": "const token = req.headers.authorization?.split(' ')[1]; // stateless: auth sent per request",
      "q": "L'exemple extrait le token de `req.headers.authorization` à chaque requête. Qu'est-ce que cela révèle sur l'authentification ?",
      "a": "L'API est sans état — chaque requête porte ses propres identifiants, le serveur ne s'appuie pas sur une session stockée."
    },
    {
      "text": "Retournez du JSON avec une forme cohérente, y compris pour les erreurs : `{ \"error\": \"User not found\" }`.",
      "explain_dr": "JSON b nafs chkl dima, 7ta errors — client kay3rf fin y9leb.",
      "example": "res.status(404).json({ error: 'User not found' }); // consistent JSON shape, incl. errors",
      "q": "Quand l'utilisateur est introuvable, quel corps l'exemple retourne-t-il, et pourquoi cette forme compte-t-elle ?",
      "a": "Il retourne `{ error: 'User not found' }`. Une forme JSON cohérente (même pour les erreurs) permet au client de tout parser de la même façon."
    },
    {
      "text": "Validez et nettoyez toutes les entrées côté serveur ; ne faites jamais confiance aux données du client.",
      "explain_dr": "3mer ma tti9 f data dyal client — validation dima f server.",
      "example": "if (!req.body?.email) return res.status(400).json({ error: 'email required' }); // validate server-side",
      "q": "Si le client omet `email` dans le corps, que fait l'exemple ? Pourquoi ce contrôle doit-il vivre côté serveur ?",
      "a": "Il répond 400 avec `{ error: 'email required' }`. On ne peut pas faire confiance aux données du client : la validation doit être imposée côté serveur."
    },
    {
      "text": "Versionnez votre API (`/api/v1/...`) pour que les changements ne cassent pas les clients existants.",
      "explain_dr": "versioning b7al /api/v1 kay7mik mli tbedel API w clients l9dam khdamin.",
      "example": "app.use('/api/v1/users', userRoutes); // version so changes don't break clients",
      "q": "Que deviennent les clients existants si vous ajoutez un changement cassant sous `/api/v1/users` après avoir livré `/api/v2/users` ?",
      "a": "Rien — ils continuent d'utiliser la v1 stable pendant que les nouveaux clients adoptent la v2 ; le versionnage isole les changements cassants."
    },
    {
      "text": "`PUT` remplace toute la ressource ; `PATCH` ne met à jour que les champs envoyés.",
      "explain_dr": "PUT kay3awd kolchi, PATCH kaybedel ghir li sifti — far9 mohim.",
      "example": "app.put('/users/:id', replace); // replaces the whole resource\napp.patch('/users/:id', partial); // updates only sent fields",
      "q": "Vous envoyez seulement `{ \"name\": \"Aymane\" }` en `PATCH /users/1` sur un utilisateur qui a aussi email et âge. Quels champs changent ?",
      "a": "Seul `name` change. PATCH ne met à jour que les champs envoyés ; PUT remplacerait toute la ressource."
    },
    {
      "text": "Paginez les endpoints de liste (`?page=2&limit=20`) au lieu de retourner des milliers d'enregistrements d'un coup.",
      "explain_dr": "pagination b page w limit, bach server ma ysiftch alf record d9a wa7da.",
      "example": "const page = Number(req.query.page) || 1;\nconst limit = Number(req.query.limit) || 20; // paginate lists",
      "q": "Quelles sont les valeurs par défaut de `page` et `limit` dans l'exemple, et pourquoi paginer ?",
      "a": "Page vaut 1 et limit 20 par défaut. Paginer évite de déverser des milliers d'enregistrements dans une seule réponse, lent et coûteux."
    },
    {
      "text": "`GET` doit être idempotent et sans effet de bord — jamais de mutation dans un GET, ni de suppression via query params.",
      "explain_dr": "GET khasso ykon safe: ma ymknch ybedel walo f database — hadi 9a3ida.",
      "example": "app.get('/report', (req, res) => res.json(stats())); // GET only reads — never mutates",
      "q": "On propose `GET /report?delete=old` pour nettoyer d'anciennes données. Pourquoi est-ce une mauvaise idée ?",
      "a": "GET doit être idempotent et sans effet de bord — robots et navigateurs peuvent l'appeler en boucle ou en préchargement, ce qui déclencherait des suppressions non voulues."
    },
    {
      "text": "`POST` n'est ni sûr ni idempotent — un POST rejoué peut créer en double, d'où l'en-tête `Idempotency-Key` pour les paiements.",
      "explain_dr": "POST ila t3awd y9der ykhele9 jouj — Idempotency-Key kay7bes double creation.",
      "example": "const key = req.headers['idempotency-key']; // skip the charge if this key was already processed",
      "q": "Un POST de paiement est envoyé deux fois à cause d'un retry réseau. Que se passe-t-il sans Idempotency-Key, et comment l'en-tête corrige-t-il cela ?",
      "a": "Le paiement pourrait être débité deux fois, car POST n'est pas idempotent. L'Idempotency-Key permet au serveur de reconnaître le doublon et de ne pas le retraiter."
    },
    {
      "text": "Retournez `204 No Content` pour les DELETE réussis, et `202 Accepted` quand le travail est mis en file d'attente.",
      "explain_dr": "204 l delete naj7 bla content, 202 l khadma li ghadi tkhdem moraha.",
      "example": "res.status(204).send(); // DELETE ok, nothing to return\nres.status(202).json({ status: 'queued' }); // async job accepted",
      "q": "Quel corps doit accompagner la réponse `204` de l'exemple, et que signale `202` au client ?",
      "a": "204 ne porte aucun corps (No Content). 202 Accepted signifie que la requête est reçue mais que le travail est mis en file d'attente."
    },
    {
      "text": "N'imbriquez pas les ressources au-delà d'un niveau : `/users/1/orders` OK, `/users/1/orders/2/items/3` non — utilisez `/items/3`.",
      "explain_dr": "nesting ghir level wa7ed: /users/1/orders, ila zedti ghadi yt3e9ed.",
      "example": "app.get('/users/:id/orders', userOrders); // one level is fine\napp.get('/items/:id', itemById); // never nest deeper",
      "q": "`/users/1/orders/2/items/3` est-elle une route acceptable ? Que faut-il utiliser à la place ?",
      "a": "Non — on n'imbrique pas les ressources au-delà d'un niveau. Utilisez la route de premier niveau `/items/3`."
    },
    {
      "text": "Filtrage, tri et recherche vont dans les query params — `GET /products?category=shoes&sort=price&order=desc&q=nike` — et les URLs utilisent des noms, jamais des verbes comme `/getUsers`.",
      "explain_dr": "filter w sort f query params, w URLs ghir nouns — verbs mamnou3in.",
      "example": "const { category, sort = 'price', order = 'desc', q } = req.query; // filter/sort/search in query params",
      "q": "L'exemple lit `category`, `sort`, `order` et `q` dans l'URL. Où vivent-ils, et pourquoi pas `GET /getUsers` ?",
      "a": "Ils vivent dans les query params (`?category=...`). Les routes utilisent des noms, jamais des verbes — `/getUsers` met une action là où un nom de ressource devrait être."
    },
    {
      "text": "`401 Unauthorized` = identifiants absents ou invalides ; `403 Forbidden` = authentifié mais non autorisé — les confondre est un classique d'entretien.",
      "explain_dr": "401 = ma 3ndkch credentials, 403 = 3ndk walakin mamnou3 — far9 kaytsswel 3lih f interviews.",
      "example": "if (!token) return res.status(401).json({ error: 'Login required' });\nif (user.role !== 'admin') return res.status(403).json({ error: 'Not allowed' });",
      "q": "Un utilisateur connecté non-admin appelle un endpoint admin. L'exemple doit-il retourner 401 ou 403 ?",
      "a": "403 Forbidden — l'utilisateur est authentifié mais non autorisé. 401, c'est pour des identifiants absents ou invalides."
    },
    {
      "text": "Répondez aux abus par `429 Too Many Requests` plus un en-tête `Retry-After` ; limitez toujours le débit des endpoints de login.",
      "explain_dr": "429 kaygol l client: rje3 mor chwiya — w Retry-After kaygol ch7al.",
      "example": "res.set('Retry-After', '60').status(429).json({ error: 'Too many requests' }); // answer abuse with 429",
      "q": "Qu'envoie l'exemple quand un client dépasse la limite de débit, et quels endpoints faut-il toujours limiter ?",
      "a": "Il envoie 429 Too Many Requests avec l'en-tête `Retry-After: 60`. Limitez toujours les endpoints de login contre le brute-force."
    },
    {
      "text": "Bonne pratique JWT : access tokens à courte durée + refresh tokens en cookies `httpOnly` — jamais de tokens dans `localStorage`.",
      "explain_dr": "tokens f localStorage khatar (XSS) — httpOnly cookies homa l7al l2amen.",
      "example": "res.cookie('refreshToken', token, { httpOnly: true, secure: true }); // never in localStorage",
      "q": "Pourquoi l'exemple stocke-t-il le refresh token dans un cookie `httpOnly` plutôt que dans `localStorage` ?",
      "a": "Les cookies httpOnly sont illisibles en JavaScript : un script XSS injecté ne peut pas récupérer le token — ceux de localStorage sont exposés à tout script injecté."
    },
    {
      "text": "Les erreurs CORS sont un problème d'en-tête côté serveur (`Access-Control-Allow-Origin`), pas un bug frontend — le navigateur applique juste la politique.",
      "explain_dr": "CORS error machi bug dyal frontend, howa server ma sifetch l header.",
      "example": "res.set('Access-Control-Allow-Origin', 'https://app.example.com'); // CORS is a server header",
      "q": "Le frontend affiche une erreur CORS. Selon la note, à qui la faute, et quel en-tête corrige cela ?",
      "a": "C'est un problème côté serveur, pas un bug frontend. Le serveur doit envoyer `Access-Control-Allow-Origin` autorisant l'origine du frontend."
    },
    {
      "text": "Chaque liste paginée doit partager la même enveloppe : `{ \"data\": [...], \"meta\": { \"page\": 1, \"total\": 200 } }`.",
      "explain_dr": "envelope wa7da l kol paginated list: data + meta — client kay3rf y9raha dima.",
      "example": "res.json({ data: users, meta: { page: 1, total: 200 } }); // one envelope for all paginated lists",
      "q": "Quelle forme chaque réponse paginée doit-elle partager, selon l'exemple ?",
      "a": "`{ data: [...], meta: { page, total } }` — une seule enveloppe cohérente pour tous les endpoints de liste."
    },
    {
      "text": "Utilisez `ETag` + `If-None-Match` pour les requêtes conditionnelles — le serveur répond `304 Not Modified` et économise la bande passante.",
      "explain_dr": "ETag b7al basma dyal response, ila ma tbedlatch server kayjawb 304 w kaywfer bandwidth.",
      "example": "if (req.headers['if-none-match'] === etag) return res.status(304).end(); // conditional request",
      "q": "Le client envoie `If-None-Match` avec l'ETag qu'il possède et la ressource n'a pas changé. Que retourne le serveur ?",
      "a": "304 Not Modified avec un corps vide — le client réutilise son cache, ce qui économise la bande passante."
    },
    {
      "text": "Les webhooks doivent porter un en-tête de signature (comme `Stripe-Signature`) — vérifiez-la avant de faire confiance au payload.",
      "explain_dr": "webhooks khasshom signature — bla verification ay wa7ed y9der ysift payload mzowar.",
      "example": "const sig = req.headers['stripe-signature']; // verify the signature before trusting the payload",
      "q": "Avant de faire confiance à un payload de webhook, que doit faire l'exemple avec l'en-tête `stripe-signature` ?",
      "a": "Vérifier d'abord la signature — un payload non vérifié pourrait être forgé par un attaquant."
    },
    {
      "text": "Exigez `Content-Type: application/json` sur les requêtes et répondez `415 Unsupported Media Type` pour un mauvais format.",
      "explain_dr": "415 kaygol l client: sifti format ghalat, ana kan9bel ghir JSON.",
      "example": "if (req.headers['content-type'] !== 'application/json') return res.status(415).end();",
      "q": "Un client envoie du XML à un endpoint JSON uniquement. Quel statut le serveur doit-il répondre ?",
      "a": "415 Unsupported Media Type, car le Content-Type de la requête n'est pas application/json."
    },
    {
      "text": "Ne fuyez jamais stack traces ni erreurs SQL dans les réponses de production — loguez côté serveur, retournez un `500` générique.",
      "explain_dr": "stack traces f production kay3tiw l hackers info — log f server w sifet 500 3adi.",
      "example": "catch (err) { console.error(err); res.status(500).json({ error: 'Internal server error' }); } // log, don't leak",
      "q": "Que fait l'exemple dans le bloc catch, et que ne doit jamais contenir la réponse 500 ?",
      "a": "Il logue l'erreur côté serveur et retourne un générique `{ error: 'Internal server error' }`. Jamais de stack trace ni de détails SQL."
    },
    {
      "text": "Les navigateurs envoient des requêtes `OPTIONS` preflight automatiques pour les appels CORS non simples — votre serveur doit y répondre sinon PUT/PATCH/DELETE échouent.",
      "explain_dr": "OPTIONS preflight kaytsift bo7do men browser, ila server ma jawbch PUT/PATCH ghadi yfchlo.",
      "example": "app.options('/users/:id', (req, res) => res.set('Access-Control-Allow-Methods', 'PUT,DELETE').sendStatus(204)); // answer preflights",
      "q": "Pourquoi un `PUT /users/1` cross-origin depuis un navigateur échouerait-il alors que la route existe ?",
      "a": "Les navigateurs envoient un preflight OPTIONS automatique pour les requêtes CORS non simples — si le serveur n'y répond pas avec les méthodes autorisées, le PUT ne part jamais."
    }
  ],
  "Laravel": [
    {
      "text": "Laravel est un framework PHP pour construire des applications web et des API avec une syntaxe élégante et expressive.",
      "explain_dr": "Laravel rah framework PHP l web apps w API, syntax élégante.",
      "example": "Route::get('/posts', [PostController::class, 'index']);",
      "q": "Que relie `Route::get('/posts', [PostController::class, 'index'])` ?",
      "a": "Elle associe l'URL GET /posts à la méthode `index` de PostController — les routes lient les URLs aux actions des contrôleurs."
    },
    {
      "text": "Les routes vivent dans `routes/web.php` ou `routes/api.php` ; les contrôleurs contiennent la logique des requêtes.",
      "explain_dr": "routes f routes/web.php wlla api.php; logic f controllers.",
      "example": "Route::get('/users', [UserController::class, 'index']); // routes map to controller actions",
      "q": "Où définir une route API plutôt qu'une route de page web, selon la note ?",
      "a": "Les routes API vont dans `routes/api.php`, celles des pages web dans `routes/web.php`."
    },
    {
      "text": "Eloquent est l'ORM de Laravel : chaque modèle correspond à une table de la base, ex. `User::where('active', true)->get()`.",
      "explain_dr": "Eloquent = ORM: model wa7ed = table wa7da.",
      "example": "User::where('active', true)->get(); // Eloquent model -> users table",
      "q": "Quel résultat produit `User::where('active', true)->get()`, et sur quelle table ?",
      "a": "Une collection de tous les utilisateurs actifs — Eloquent mappe le modèle `User` à la table `users` automatiquement."
    },
    {
      "text": "Les migrations (`php artisan migrate`) versionnent le schéma de votre base de données.",
      "explain_dr": "migrations = versioning dyal schema DB.",
      "example": "Schema::create('posts', function (Blueprint $table) {\n    $table->id(); $table->string('title'); $table->timestamps();\n}); // migrations version the schema",
      "q": "Après avoir écrit la migration `Schema::create('posts', ...)`, quelle commande l'applique à la base ?",
      "a": "`php artisan migrate` — les migrations versionnent le schéma et cette commande exécute celles en attente."
    },
    {
      "text": "Utilisez `$request->validate([...])` pour valider les données entrantes et retourner automatiquement des erreurs 422 en cas d'échec.",
      "explain_dr": "$request->validate katvalidi w katrje3 422 automatiquement.",
      "example": "$validated = $request->validate(['email' => 'required|email']); // auto-422 on failure",
      "q": "Une requête arrive sans champ `email`. Quel statut HTTP Laravel retourne-t-il automatiquement ?",
      "a": "422 Unprocessable Entity — `$request->validate()` retourne 422 automatiquement en cas d'échec."
    },
    {
      "text": "Blade est le moteur de templates de Laravel ; `{{ $var }}` échappe la sortie automatiquement, ce qui prévient le XSS.",
      "explain_dr": "Blade: {{ $var }} escape automatique — anti-XSS.",
      "example": "{{ $user->name }} // Blade: escaped output, XSS-safe",
      "q": "L'exemple affiche `{{ $user->name }}` où name contient `<script>`. Qu'atteint le navigateur ?",
      "a": "Le texte échappé `&lt;script&gt;` — `{{ }}` de Blade échappe la sortie automatiquement et bloque le XSS."
    },
    {
      "text": "Les middlewares (auth, CORS, throttling) filtrent les requêtes HTTP avant qu'elles atteignent le contrôleur.",
      "explain_dr": "middleware kayfiltri requests qbl controller.",
      "example": "Route::get('/dashboard', [DashController::class, 'index'])->middleware('auth'); // middleware filters first",
      "q": "Dans l'exemple, quand le middleware `auth` s'exécute-t-il — avant ou après `DashController@index` ?",
      "a": "Avant — le middleware filtre la requête avant qu'elle atteigne le contrôleur, et rejette les visiteurs non authentifiés."
    },
    {
      "text": "Artisan est le CLI : `php artisan make:model Post -mcr` génère modèle, migration et contrôleur.",
      "explain_dr": "artisan: make:model Post -mcr = model+migration+controller.",
      "example": "php artisan make:model Post -mcr // model + migration + controller in one command",
      "q": "Que génère `php artisan make:model Post -mcr` ?",
      "a": "Le modèle `Post`, sa migration et un contrôleur de ressource — le tout en une seule commande Artisan."
    },
    {
      "text": "Sanctum fournit une authentification par token légère pour les SPA et les applis mobiles.",
      "explain_dr": "Sanctum: tokens khfaf l SPA w mobile.",
      "example": "$token = $user->createToken('mobile')->plainTextToken; // Sanctum API token",
      "q": "Que donne `$user->createToken('mobile')->plainTextToken`, et à quoi sert-il ?",
      "a": "Un token API en clair (Sanctum) que l'appli mobile ou la SPA stocke et envoie en bearer à chaque requête."
    },
    {
      "text": "Gardez les secrets dans `.env` et lisez-les via `env()` ou les fichiers de config — ne commitez jamais `.env` dans Git.",
      "explain_dr": "secrets f .env — jamais commité.",
      "example": "'key' => env('STRIPE_KEY'), // secrets in .env, never committed to Git",
      "q": "Pourquoi ne jamais commiter `.env` dans Git, et comment l'exemple lit-il un secret en sécurité ?",
      "a": "Il contient des secrets comme les clés API — le commiter les expose. On les lit via `env()`/fichiers de config, chargés depuis le `.env` non suivi."
    },
    {
      "text": "Injectez les dépendances via le constructeur — le conteneur de services de Laravel résout automatiquement les classes typées.",
      "explain_dr": "injection f constructor — container kayresolve rasso.",
      "example": "public function __construct(private UserRepository $users) {} // container auto-resolves it",
      "q": "Comment Laravel sait-il construire le `UserRepository` du constructeur de l'exemple ?",
      "a": "Le conteneur de services résout automatiquement les dépendances typées du constructeur — pas de `new` manuel."
    },
    {
      "text": "Déplacez la validation complexe dans des Form Requests (`php artisan make:request StorePostRequest`) pour des contrôleurs légers.",
      "explain_dr": "validation complexe → Form Request.",
      "example": "public function store(StorePostRequest $request) { $request->validated(); } // Form Request keeps it thin",
      "q": "Où placer la validation complexe plutôt que dans le contrôleur, et que reste-t-il dans le contrôleur ?",
      "a": "Dans une classe Form Request ; le contrôleur appelle juste `$request->validated()` et reste léger."
    },
    {
      "text": "Définissez les relations sur les modèles (`hasMany`, `belongsTo`) et chargez-les avec `::with('comments')` pour tuer les requêtes N+1.",
      "explain_dr": "relations + with() = fini N+1.",
      "example": "Post::with('comments')->get(); // eager load: one extra query instead of N",
      "q": "L'exemple utilise `Post::with('comments')`. Combien de requêtes pour 10 posts et leurs commentaires ?",
      "a": "Deux — une pour les posts, une pour tous les commentaires. Le chargement eager remplace les N+1 requêtes paresseuses."
    },
    {
      "text": "Le problème N+1 : boucler sur `$posts` en appelant `$post->comments` lance une requête par post — le chargement eager le corrige.",
      "explain_dr": "N+1 = query l kol post; with() katjme3hom.",
      "example": "foreach (Post::all() as $p) $p->comments; // N+1: one query per post!",
      "q": "Dans la boucle de l'exemple, `Post::all()` retourne 50 posts. Environ combien de requêtes tournent, et pourquoi ?",
      "a": "Environ 51 — une pour les posts plus une par post quand `$p->comments` charge paresseusement. C'est le problème N+1."
    },
    {
      "text": "Les scopes locaux rendent les requêtes réutilisables : `scopeActive($query)` devient `Post::active()->get()`.",
      "explain_dr": "scopeActive → Post::active()->get() réutilisable.",
      "example": "public function scopeActive($query) { return $query->where('active', true); } // Post::active()->get()",
      "q": "Que faut-il sur le modèle pour appeler `Post::active()->get()` ?",
      "a": "Une méthode de scope local nommée `scopeActive($query)` — Laravel retire le préfixe `scope` et l'appelle de façon fluide."
    },
    {
      "text": "Utilisez `$casts` sur le modèle (`'price' => 'decimal:2'`) au lieu de conversions manuelles dans les accesseurs.",
      "explain_dr": "$casts kay7wwel types automatiquement.",
      "example": "protected $casts = ['price' => 'decimal:2', 'meta' => 'array']; // automatic type casting",
      "q": "L'exemple caste `price` en `decimal:2`. Que fait Eloquent quand on lit `$post->price` ?",
      "a": "Il convertit automatiquement la valeur brute en décimal à 2 chiffres — sans conversion manuelle dans les accesseurs."
    },
    {
      "text": "Les événements et observateurs de modèle (`Post::observe(PostObserver::class)`) centralisent la logique comme l'invalidation du cache.",
      "explain_dr": "observers: logic centralisée (cache...).",
      "example": "Post::observe(PostObserver::class); // register in AppServiceProvider::boot()",
      "q": "Où enregistre-t-on `Post::observe(PostObserver::class)`, et pourquoi utiliser un observer ?",
      "a": "Dans `AppServiceProvider::boot()`. Les observers centralisent la logique des événements du modèle (comme l'invalidation du cache) au lieu de l'éparpiller."
    },
    {
      "text": "Poussez le travail lent (emails, traitement d'images) dans des jobs : `SendReport::dispatch()` et lancez `php artisan queue:work`.",
      "explain_dr": "jobs l khdma t9ila + queue:work f background.",
      "example": "SendReport::dispatch($user); // job runs via: php artisan queue:work",
      "q": "Que se passe-t-il quand on appelle `SendReport::dispatch($user)` — l'email part-il aussitôt ?",
      "a": "Non — il est poussé dans la file ; un worker lancé avec `php artisan queue:work` le récupère et le traite en asynchrone."
    },
    {
      "text": "Autorisez avec les policies et gates — `$this->authorize('update', $post)` — plutôt que des `if` éparpillés dans les contrôleurs.",
      "explain_dr": "policies l authorization — machi if éparpillés.",
      "example": "$this->authorize('update', $post); // policies beat scattered if-checks",
      "q": "Pourquoi `$this->authorize('update', $post)` vaut-il mieux qu'un `if ($post->user_id !== auth()->id())` dans le contrôleur ?",
      "a": "Il centralise la règle dans une policy/gate, au lieu de dupliquer la logique d'autorisation en `if` éparpillés."
    },
    {
      "text": "Les API Resources (`PostResource`) transforment les modèles en structures JSON cohérentes pour votre frontend.",
      "explain_dr": "API Resources = JSON cohérent l frontend.",
      "example": "return PostResource::collection($posts); // consistent JSON shape for the frontend",
      "q": "Que retourne `PostResource::collection($posts)` au frontend ?",
      "a": "Un tableau JSON à la forme cohérente — les resources transforment les modèles pour une structure identique partout."
    },
    {
      "text": "Protégez-vous contre l'assignation de masse : définissez `$fillable` (ou `$guarded`) sinon `Post::create($request->all())` lève une exception.",
      "explain_dr": "$fillable obligatoire — sinon exception.",
      "example": "protected $fillable = ['title', 'body']; // mass-assignment guard",
      "q": "Que se passe-t-il si on appelle `Post::create($request->all())` sans définir `$fillable` ?",
      "a": "Une MassAssignmentException est levée — il faut autoriser les champs remplissables (ou définir `$guarded`) pour protéger l'assignation de masse."
    },
    {
      "text": "Les soft deletes (`use SoftDeletes`) gardent un timestamp `deleted_at` — `withTrashed()` et `restore()` ramènent les enregistrements.",
      "explain_dr": "SoftDeletes: deleted_at, restore kayrje3.",
      "example": "Post::withTrashed()->find(1)->restore(); // soft deletes keep deleted_at",
      "q": "Après avoir supprimé un post qui utilise `SoftDeletes`, comment le lister à nouveau et le restaurer ?",
      "a": "Avec `Post::withTrashed()`, puis `->restore()` — la ligne n'a jamais été effacée, juste horodatée `deleted_at`."
    },
    {
      "text": "En production, lancez `php artisan config:cache` et n'appelez jamais `env()` hors des fichiers de config — il retourne null après le cache.",
      "explain_dr": "prod: config:cache, w env() ghir f config.",
      "example": "config('services.stripe.key'); // never env() outside config files in production",
      "q": "En production avec config en cache, que retourne `env('STRIPE_KEY')` appelé depuis un contrôleur ?",
      "a": "`null` — après `config:cache`, `env()` ne marche que dans les fichiers de config ; les contrôleurs doivent utiliser `config('services.stripe.key')`."
    },
    {
      "text": "Limitez les endpoints publics avec le middleware `throttle:60,1` pour stopper l'abus des routes login et register.",
      "explain_dr": "throttle kay7mi login mn abus.",
      "example": "Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:60,1');",
      "q": "Qu'autorise `throttle:60,1` sur la route de login ?",
      "a": "60 requêtes par minute et par client — il limite la route publique de login contre les abus et le brute-force."
    },
    {
      "text": "Générez des données de dev réalistes avec factories et seeders (`php artisan db:seed`) plutôt que d'insérer les lignes à la main.",
      "explain_dr": "factories/seeders = data réaliste l dev.",
      "example": "Post::factory()->count(10)->create(); // seeders + factories for dev data",
      "q": "Que fait `Post::factory()->count(10)->create()`, et pourquoi le préférer à des insertions manuelles ?",
      "a": "Il crée 10 posts réalistes via les factories — plus rapide que les insertions à la main et reproductible pour chaque dev via `db:seed`."
    }
  ],
  "Php": [
    {
      "text": "PHP est un langage de script côté serveur ; chaque instruction se termine par un point-virgule.",
      "explain_dr": "PHP langage serveur — kol instruction b ;.",
      "example": "<?php echo 'Hello'; $x = 5; // every statement ends with ;",
      "q": "Que manque-t-il à la fin de `echo 'Hello'` que PHP exige ?",
      "a": "Le point-virgule — chaque instruction PHP doit se terminer par `;`."
    },
    {
      "text": "Les variables commencent par `$` : `$name = \"Aymane\";` — elles sont faiblement typées par défaut.",
      "explain_dr": "variables b $ — faiblement typées.",
      "example": "$name = \"Aymane\"; // variables start with $, loosely typed",
      "q": "Que révèle `$name = \"Aymane\";` sur la déclaration des variables en PHP ?",
      "a": "Les variables commencent par `$` et n'ont pas besoin de déclaration de type — le type est inféré de la valeur."
    },
    {
      "text": "`echo` affiche des chaînes ; utilisez `.` pour concaténer : `echo \"Hello \" . $name;`.",
      "explain_dr": "echo + . l concaténation.",
      "example": "echo \"Hello \" . $name; // . concatenates strings",
      "q": "Qu'affiche `echo \"Hello \" . $name;` si `$name` vaut `\"Aymane\"` ?",
      "a": "`Hello Aymane` — l'opérateur `.` concatène les chaînes."
    },
    {
      "text": "Tableaux : indexés `$arr = [1, 2, 3];` et associatifs `$user = [\"name\" => \"Aymane\"];`.",
      "explain_dr": "tableaux indexés w associatifs.",
      "example": "$arr = [1, 2, 3]; $user = [\"name\" => \"Aymane\"]; // indexed + associative arrays",
      "q": "Quelle est la différence entre `$arr = [1, 2, 3]` et `$user = [\"name\" => \"Aymane\"]` ?",
      "a": "Le premier est un tableau indexé (clés numériques) ; le second est un tableau associatif (clés chaînes liées à des valeurs)."
    },
    {
      "text": "La comparaison stricte utilise `===` ; le `==` souple convertit les types et peut surprendre.",
      "explain_dr": "=== stricte; == convertit — attention.",
      "example": "var_dump(\"1\" == 1);  // true (coerced)\nvar_dump(\"1\" === 1); // false (strict)",
      "q": "Qu'affichent respectivement `var_dump(\"1\" == 1)` et `var_dump(\"1\" === 1)` ?",
      "a": "`bool(true)` pour `==` (conversion de type) et `bool(false)` pour `===` (strict : chaîne et entier diffèrent)."
    },
    {
      "text": "Superglobales : `$_GET`, `$_POST`, `$_SERVER` et `$_SESSION` donnent accès aux données de requête et au serveur.",
      "explain_dr": "superglobales = données requête + serveur.",
      "example": "$page = $_GET['page']; $method = $_SERVER['REQUEST_METHOD']; // superglobals",
      "q": "Quelle superglobale contient la valeur de `?page=2`, et laquelle indique la méthode HTTP ?",
      "a": "`$_GET['page']` contient la valeur du query ; `$_SERVER['REQUEST_METHOD']` indique la méthode."
    },
    {
      "text": "Les fonctions déclarent les types des paramètres et du retour : `function add(int $a, int $b): int { return $a + $b; }`.",
      "explain_dr": "fonctions typées: params w retour.",
      "example": "function add(int $a, int $b): int { return $a + $b; } // typed params + return",
      "q": "Que se passe-t-il si on appelle `add(\"1\", \"2\")` sur `function add(int $a, int $b): int` sans types stricts ?",
      "a": "Elle retourne `3` — PHP convertit les chaînes numériques en entiers (sans `declare(strict_types=1)`, les types scalaires sont convertis)."
    },
    {
      "text": "Les namespaces (`namespace App\\Models;`) évitent les collisions de noms de classes ; l'autoloading suit PSR-4.",
      "explain_dr": "namespaces anti-collision; PSR-4.",
      "example": "namespace App\\Models; // avoid class-name collisions (PSR-4 autoloading)",
      "q": "Deux bibliothèques définissent chacune une classe `User`. Quelle fonctionnalité de l'exemple évite la collision ?",
      "a": "Les namespaces (`namespace App\\\\Models;`) — chaque classe vit dans son namespace, les noms identiques ne se télescopent plus."
    },
    {
      "text": "Composer (`composer install`) gère les dépendances, enregistrées dans `composer.json`.",
      "explain_dr": "composer gère dépendances.",
      "example": "composer require stripe/stripe-php // dependencies go in composer.json",
      "q": "Après `composer require stripe/stripe-php`, où la dépendance est-elle enregistrée ?",
      "a": "Dans `composer.json` — Composer gère les dépendances et les y enregistre."
    },
    {
      "text": "`htmlspecialchars()` échappe la sortie pour prévenir le XSS quand on affiche une entrée utilisateur.",
      "explain_dr": "htmlspecialchars = anti-XSS.",
      "example": "echo htmlspecialchars($input, ENT_QUOTES, 'UTF-8'); // escape output: XSS-safe",
      "q": "Pourquoi `echo $input` est-il dangereux alors que `echo htmlspecialchars($input, ENT_QUOTES, 'UTF-8')` est sûr ?",
      "a": "L'echo brut affiche l'entrée telle quelle et laisse un `<script>` injecté s'exécuter (XSS) ; `htmlspecialchars()` l'échappe pour un affichage inoffensif."
    },
    {
      "text": "Utilisez `??` pour des valeurs par défaut sûres (`$name = $_GET['name'] ?? 'guest';`) — il vérifie `isset()` sans notice.",
      "explain_dr": "?? = défaut sûr sans notice.",
      "example": "$name = $_GET['name'] ?? 'guest'; // null-safe default, no notice",
      "q": "Que vaut `$name` quand `$_GET['name']` n'est pas défini dans l'exemple ?",
      "a": "`'guest'` — `??` bascule sur la valeur par défaut sans déclencher de notice « index indéfini »."
    },
    {
      "text": "`match` est plus strict que `switch` : il compare avec `===` et retourne une valeur — pas besoin de `break`.",
      "explain_dr": "match: === w retourne valeur, sans break.",
      "example": "$type = match($day) { 'Sat', 'Sun' => 'weekend', default => 'workday' }; // strict ===, returns a value",
      "q": "Avec `$day = \"Sun\"`, qu'assigne l'exemple `match` à `$type` ?",
      "a": "`'weekend'` — `match` compare strictement (`===`) et retourne la valeur de la branche, sans `break`."
    },
    {
      "text": "Les fonctions fléchées `fn($x) => $x * 2` capturent automatiquement les variables environnantes par valeur — plus court que `function () use ($x)`.",
      "explain_dr": "fn() => capture auto — court.",
      "example": "$double = fn($x) => $x * 2; // arrow fn auto-captures by value",
      "q": "Si `$x = 10` à l'extérieur et qu'on exécute `$double = fn($x) => $x * 2;`, la fonction fléchée modifie-t-elle le `$x` extérieur ? Pourquoi ?",
      "a": "Non — les fonctions fléchées capturent les variables environnantes par valeur, et `$x` ici est le paramètre : le `$x` extérieur est intact."
    },
    {
      "text": "Pièges du transtypage : `\"0\" == false` vaut `true`, et `\"10abc\" + 5` vaut `15` — préférez `===`.",
      "explain_dr": "\"0\" == false true! — préfère ===.",
      "example": "var_dump(\"0\" == false); // true! type juggling — use ===",
      "q": "Qu'affiche `var_dump(\"0\" == false)`, et pourquoi est-ce un piège ?",
      "a": "`bool(true)` — le `==` souple convertit `\"0\"` en `false`. D'où la préférence pour le `===` strict."
    },
    {
      "text": "`declare(strict_types=1);` en haut d'un fichier rend les types scalaires stricts au lieu de les convertir.",
      "explain_dr": "strict_types=1 = types stricts.",
      "example": "declare(strict_types=1); // first line: type hints reject wrong types",
      "q": "Que change `declare(strict_types=1);` pour l'appel `add(\"1\", \"2\")` ?",
      "a": "Il lève une `TypeError` au lieu de convertir — les types scalaires rejettent les mauvais types en mode strict."
    },
    {
      "text": "Passez les arguments par référence avec `&$var` quand une fonction doit modifier la variable de l'appelant.",
      "explain_dr": "&$var modifie variable appelant.",
      "example": "function bump(&$n) { $n++; } bump($count); // by reference: $count changes",
      "q": "Après `function bump(&$n) { $n++; } bump($count);` avec `$count = 5`, que vaut `$count` ?",
      "a": "`6` — le `&` passe la variable par référence : la fonction modifie le `$count` de l'appelant."
    },
    {
      "text": "Attrapez `Throwable` (pas seulement `Exception`) pour piéger aussi les erreurs moteur comme `TypeError`.",
      "explain_dr": "Throwable attrape aussi TypeError.",
      "example": "try { risky(); } catch (Throwable $e) { log($e->getMessage()); } // catches TypeError too",
      "q": "Pourquoi attraper `Throwable` plutôt que `Exception` dans l'exemple ?",
      "a": "`Throwable` piège aussi les erreurs moteur comme `TypeError` ou `DivisionByZeroError`, qui n'étendent pas `Exception`."
    },
    {
      "text": "Appelez `session_start()` avant toute sortie — même un espace perdu — sinon les en-têtes échouent avec 'headers already sent'.",
      "explain_dr": "session_start avant tout output.",
      "example": "session_start(); // must run before ANY output",
      "q": "Que se passe-t-il si on fait un `echo` avant `session_start()` ?",
      "a": "PHP échoue avec « headers already sent » — les sessions envoient des en-têtes, impossibles après toute sortie."
    },
    {
      "text": "Utilisez toujours les requêtes préparées PDO (`$stmt->execute([$id])`) — le SQL interpolé invite l'injection.",
      "explain_dr": "PDO préparées = anti-injection.",
      "example": "$stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');\n$stmt->execute([$id]); // prepared = injection-safe",
      "q": "Comment l'exemple à requêtes préparées bloque-t-il l'injection SQL ?",
      "a": "La requête et les données voyagent séparément : `prepare()` fige la forme du SQL et `execute([$id])` lie la valeur, qui ne peut jamais être interprétée comme du SQL."
    },
    {
      "text": "`require` stoppe tout en cas d'échec (erreur fatale) ; `include` émet juste un avertissement et continue — utilisez `require` pour les fichiers essentiels.",
      "explain_dr": "require fatal, include warning.",
      "example": "require 'config.php'; // halts on failure; include only warns",
      "q": "Votre `config.php` est manquant. Comment `require 'config.php'` se comporte-t-il différemment de `include 'config.php'` ?",
      "a": "`require` stoppe tout avec une erreur fatale ; `include` émet juste un avertissement et continue."
    },
    {
      "text": "`self::` se lie à la classe de définition, `static::` à la classe appelée — la liaison statique tardive compte en héritage.",
      "explain_dr": "self:: vs static:: — liaison tardive.",
      "example": "public static function who() { return static::class; } // static:: = late static binding",
      "q": "Dans une classe enfant qui ne redéfinit rien, que retourne `static::class` dans la méthode `who()` héritée ?",
      "a": "Le nom de la classe enfant — `static::` utilise la liaison statique tardive (la classe appelée), là où `self::` retournerait le parent."
    },
    {
      "text": "Les interfaces déclarent un contrat sans implémentation ; les classes abstraites peuvent contenir de la logique partagée plus des méthodes abstraites.",
      "explain_dr": "interface contrat; abstract logique partagée.",
      "example": "interface Loggable { public function log(string $msg): void; } // contract, no implementation",
      "q": "Quand choisir une interface plutôt qu'une classe abstraite, selon l'exemple ?",
      "a": "Une interface quand on veut seulement un contrat sans implémentation ; une classe abstraite pour la logique partagée plus des méthodes abstraites."
    },
    {
      "text": "`$count ??= 0;` assigne seulement si la variable est nulle ou indéfinie — raccourci pour `$count = $count ?? 0;`.",
      "explain_dr": "??= assigne si null seulement.",
      "example": "$count ??= 0; // assign only when null or undefined",
      "q": "Après deux exécutions de `$count ??= 0;` — d'abord avec `$count = null`, puis avec `$count = 7` — que vaut `$count` ?",
      "a": "D'abord `0` (null → assigné), puis il reste `7` — `??=` n'assigne que si la valeur est nulle ou indéfinie."
    },
    {
      "text": "Heredoc (`<<<HTML`) interpole les variables ; nowdoc (`<<<'HTML'`) non — choisissez selon le besoin.",
      "explain_dr": "heredoc interpole, nowdoc non.",
      "example": "$html = <<<HTML\n<p>$name</p>\nHTML; // heredoc interpolates; <<<'HTML' (nowdoc) does not",
      "q": "Dans l'exemple heredoc, que rend `<p>$name</p>` quand `$name = \"Aymane\"` ? Et en nowdoc ?",
      "a": "Il rend `<p>Aymane</p>` — le heredoc interpole les variables. Le nowdoc (`<<<'HTML'`) afficherait le `$name` littéral."
    },
    {
      "text": "Validez les entrées avec `filter_var($email, FILTER_VALIDATE_EMAIL)` plutôt qu'une regex artisanale.",
      "explain_dr": "filter_var valide email — sans regex.",
      "example": "if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { /* invalid email */ }",
      "q": "Pourquoi préférer `filter_var($email, FILTER_VALIDATE_EMAIL)` à une regex artisanale ?",
      "a": "C'est un validateur maintenu et éprouvé — les regex d'email maison sont fragiles et faciles à rater."
    }
  ],"Sql": [
    {
      "text": "SQL est le langage pour interroger et gérer les bases de données relationnelles.",
      "explain_dr": "SQL hiya logha li biha katkteb les requêtes dyal les bases de données relationnelles b7al MySQL w PostgreSQL.",
      "example": "SELECT id, name FROM users WHERE age >= 18 ORDER BY created_at DESC;",
      "q": "Dans l'exemple, quels utilisateurs sont retournés et dans quel ordre ?",
      "a": "Seuls les utilisateurs de 18 ans et plus, en n'affichant que id et name, les plus récemment créés en premier."
    },
    {
      "text": "Commandes de base : `SELECT`, `INSERT`, `UPDATE`, `DELETE`, plus `CREATE TABLE` pour le schéma.",
      "explain_dr": "Commandes assasiya: SELECT bach tjbed data, INSERT tzid, UPDATE tbeddel, DELETE t7eyyed, CREATE TABLE bach tsna3 table jdida.",
      "example": "INSERT INTO products (name, price) VALUES ('Keyboard', 49.99);\nUPDATE products SET price = 39.99 WHERE name = 'Keyboard';\nDELETE FROM products WHERE stock = 0;\nCREATE TABLE products (id INT PRIMARY KEY, name VARCHAR(100), price DECIMAL(10,2), stock INT);",
      "q": "Dans l'exemple, que devient le produit nommé 'Keyboard' au fil des trois instructions, et quelles colonnes la table créée contient-elle ?",
      "a": "Il est inséré à 49,99 puis mis à jour à 39,99 ; la suppression ne touche que les produits avec stock = 0, donc Keyboard reste. La table a id, name, price, stock."
    },
    {
      "text": "Filtrez les lignes avec `WHERE` : `SELECT * FROM users WHERE age >= 18;`.",
      "explain_dr": "WHERE hiya li kat7edded ina lignes ghatjbed, b7al filter: WHERE age >= 18 katjbed ghir li 3andhom 18 w lfo9.",
      "example": "SELECT name, email FROM users WHERE age >= 18 AND city = 'Tangier';",
      "q": "Quelles lignes la requête d'exemple retourne-t-elle ?",
      "a": "Les utilisateurs de 18 ans ou plus ET habitant à Tanger — seules les colonnes name et email."
    },
    {
      "text": "`JOIN` combine les tables sur une relation : `SELECT * FROM orders JOIN users ON orders.user_id = users.id;`.",
      "explain_dr": "JOIN katjme3 joj tables 3la asas 3ala9a binathom, b7al orders.user_id = users.id.",
      "example": "SELECT orders.id, users.name, orders.total FROM orders JOIN users ON orders.user_id = users.id;",
      "q": "Que représente chaque ligne du résultat de l'exemple ?",
      "a": "Une commande, jointe à son acheteur : l'id de la commande, le nom de l'utilisateur et le total — uniquement les commandes dont user_id correspond à une ligne de users."
    },
    {
      "text": "Agrégez avec `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()` ; groupez les résultats avec `GROUP BY`.",
      "explain_dr": "COUNT/SUM/AVG fonctions d'agrégation, w GROUP BY katjm3ehom 7sab chi colonne, b7al total dyal les commandes lkol user.",
      "example": "SELECT city, COUNT(*) AS total FROM users GROUP BY city;",
      "q": "Que retourne la requête d'exemple ?",
      "a": "Une ligne par ville avec le nombre d'utilisateurs dans cette ville (alias 'total')."
    },
    {
      "text": "Filtrez les résultats groupés avec `HAVING` (s'exécute après `GROUP BY`), pas `WHERE`.",
      "explain_dr": "WHERE katfiltrer 9bel GROUP BY, w HAVING katfiltrer moraha 3la nataij l'agrégation.",
      "example": "SELECT city, COUNT(*) AS total FROM users GROUP BY city HAVING COUNT(*) > 10;",
      "q": "En quoi l'exemple diffère-t-il d'un simple WHERE, et que retourne-t-il ?",
      "a": "HAVING filtre après le regroupement : il ne garde que les villes de plus de 10 utilisateurs ; WHERE ne peut pas filtrer sur COUNT(*)."
    },
    {
      "text": "Les clés primaires identifient chaque ligne de façon unique ; les clés étrangères lient les lignes entre les tables.",
      "explain_dr": "Primary key: identifiant wa7id lkol ligne (mayt3awdch). Foreign key: katrbt table b table khra.",
      "example": "CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(100));\nCREATE TABLE orders (id INT PRIMARY KEY, user_id INT, FOREIGN KEY (user_id) REFERENCES users(id));",
      "q": "Dans l'exemple, que garantit la FOREIGN KEY sur orders.user_id ?",
      "a": "Chaque user_id de commande doit correspondre à un users.id existant — impossible de créer une commande pour un utilisateur inexistant."
    },
    {
      "text": "Les index accélèrent les lectures sur les colonnes filtrées/jointes mais ralentissent légèrement les écritures.",
      "explain_dr": "Index kayserre3 l9ira2a 3la les colonnes li kat7et f WHERE w JOIN, walakin katbette2 chwiya lkitaba (INSERT/UPDATE).",
      "example": "CREATE INDEX idx_users_city ON users (city); -- speeds up WHERE city = ...",
      "q": "Qu'est-ce que l'index de l'exemple accélère, et quel est le compromis ?",
      "a": "Il accélère les requêtes filtrant sur city (WHERE city = ...), au prix d'insertions et de mises à jour légèrement plus lentes sur cette colonne."
    },
    {
      "text": "SQL vs NoSQL : SQL impose un schéma fixe et des relations avec jointures ; NoSQL (ex. MongoDB) stocke des documents flexibles et passe plus facilement à l'échelle horizontale.",
      "explain_dr": "SQL: schema fixe + relations + joins; NoSQL b7al MongoDB: documents flexibles w kaytzad horizontalement bsahla.",
      "example": "-- SQL enforces a fixed schema, then joins tables on relations.\nSELECT * FROM orders JOIN users ON orders.user_id = users.id WHERE orders.status = 'paid';",
      "q": "Pourquoi la requête d'exemple serait-elle plus difficile à écrire dans une base documentaire comme MongoDB ?",
      "a": "Elle joint deux tables liées (orders + users) ; MongoDB stocke des documents dénormalisés, donc ce type de jointure relationnelle demande $lookup ou un autre schéma."
    },
    {
      "text": "Utilisez toujours des requêtes paramétrées ou un ORM pour prévenir l'injection SQL — ne concaténez jamais d'entrées utilisateur dans les requêtes SQL.",
      "explain_dr": "SQL injection: matkhletech input dyal l'utilisateur m3a string SQL — st3mel requêtes paramétrées wla ORM dima.",
      "example": "SELECT * FROM users WHERE email = ?; -- placeholder, driver fills it safely\n-- never: \"SELECT * FROM users WHERE email = '\" + email + \"'\"",
      "q": "Dans l'exemple, pourquoi la version avec le placeholder `?` est-elle sûre alors que la concaténation ne l'est pas ?",
      "a": "Le placeholder garde l'entrée utilisateur comme donnée — le driver l'échappe — tandis que la concaténation permet à un attaquant d'injecter du code SQL qui s'exécute dans la requête."
    },
    {
      "text": "`INNER JOIN` vs `LEFT JOIN` : INNER ne garde que les lignes correspondantes, LEFT garde toutes les lignes de la table de gauche avec des NULL là où il n'y a pas de correspondance — un piège classique en entretien.",
      "explain_dr": "INNER JOIN ghir li kaynin f joj tables; LEFT JOIN kayjbed kolchi mn left table w NULL fin makaynch match — f les entretiens kaysewlouha bzf.",
      "example": "SELECT o.id FROM orders o INNER JOIN payments p ON p.order_id = o.id; -- only orders with a payment\nSELECT u.name FROM users u LEFT JOIN payments p ON p.user_id = u.id; -- all users, NULL payment if none",
      "q": "Quelle est la différence entre les deux requêtes de l'exemple ?",
      "a": "L'INNER JOIN ne retourne que les commandes qui ont un paiement ; le LEFT JOIN retourne tous les utilisateurs, avec des colonnes de paiement NULL pour ceux qui n'en ont pas."
    },
    {
      "text": "`NULL` n'est jamais égal à `NULL` : utilisez `IS NULL` / `IS NOT NULL` dans les filtres, car les comparaisons avec `NULL` donnent un résultat indéterminé.",
      "explain_dr": "NULL makayssawich NULL! St3mel IS NULL machi = NULL, 7it la comparaison m3a NULL kat3ti \"unknown\".",
      "example": "SELECT * FROM users WHERE phone IS NULL; -- never: WHERE phone = NULL",
      "q": "Pourquoi l'exemple utilise-t-il `IS NULL` plutôt que `= NULL` ?",
      "a": "NULL n'est égal à rien, pas même à NULL — `= NULL` vaut 'unknown' et ne correspond à rien, il faut donc utiliser IS NULL."
    },
    {
      "text": "`GROUP BY` exige que chaque colonne non agrégée du `SELECT` y figure, sinon la requête échoue (le `only_full_group_by` de MySQL).",
      "explain_dr": "Ila st3melti GROUP BY, ay colonne f SELECT li machi agrégée khassha tkon f GROUP BY, wla l'query ghatfchel.",
      "example": "SELECT city, COUNT(*) AS total FROM users GROUP BY city; -- city is in GROUP BY, OK",
      "q": "Dans l'exemple, pourquoi `city` doit-elle figurer dans le GROUP BY ?",
      "a": "city n'est pas agrégée, donc avec only_full_group_by MySQL exige que chaque colonne non agrégée du SELECT soit dans le GROUP BY — sinon la requête échoue."
    },
    {
      "text": "Les fonctions de fenêtrage comme `ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC)` classent les lignes sans les regrouper comme `GROUP BY`.",
      "explain_dr": "Window functions b7al ROW_NUMBER() katretteb les lignes bla matjm3hom — 7asla 3la ranks w positions f nafs la requête.",
      "example": "SELECT name, ROW_NUMBER() OVER (PARTITION BY city ORDER BY created_at DESC) AS rn FROM users;",
      "q": "Que calcule l'exemple pour chaque utilisateur, et en quoi est-ce différent de GROUP BY ?",
      "a": "Un numéro de ligne classant les utilisateurs de chaque ville par date de création — contrairement à GROUP BY, il conserve chaque ligne au lieu de les fusionner par ville."
    },
    {
      "text": "`UNION` empile les résultats et supprime les doublons ; `UNION ALL` garde les doublons et est plus rapide — sachez lequel utiliser.",
      "explain_dr": "UNION katjm3 nataij w t7eyyed doublons, UNION ALL kat7fedhoum w hiya asra3 — khtar 3la 7sab li bghiti.",
      "example": "SELECT email FROM staff UNION SELECT email FROM customers; -- dedupes\nSELECT email FROM staff UNION ALL SELECT email FROM customers; -- keeps dupes, faster",
      "q": "Quelle est la différence entre les deux requêtes d'exemple ?",
      "a": "UNION supprime les emails en double entre les deux tables ; UNION ALL garde les doublons et est plus rapide car il saute l'étape de déduplication."
    },
    {
      "text": "Les transactions (`BEGIN; ... COMMIT;` / `ROLLBACK;`) rendent plusieurs requêtes atomiques : tout s'applique ou rien.",
      "explain_dr": "Transaction: ya kolchi kaytnfed (COMMIT) ya walo (ROLLBACK) — mohima f les opérations li khasshom ykounou kamlin b7al transfert flous.",
      "example": "BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT; -- or ROLLBACK; to cancel",
      "q": "Si le second UPDATE de l'exemple échoue après l'exécution du premier, que se passe-t-il et pourquoi ?",
      "a": "ROLLBACK annule aussi le premier UPDATE — toutes les instructions de la transaction s'appliquent ensemble ou pas du tout (atomicité)."
    },
    {
      "text": "`ON DELETE CASCADE` supprime automatiquement les lignes enfants quand une ligne parente est effacée — pratique, mais ça peut effacer des données en silence : utilisez-le en connaissance de cause.",
      "explain_dr": "ON DELETE CASCADE kat7eyyed les lignes dyal lwlidat automatiquement mlli kat7eyyed lparent — zwina walakin khatar 7it katm7i data b sehha.",
      "example": "CREATE TABLE comments (id INT PRIMARY KEY, post_id INT, FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE);",
      "q": "Que deviennent les commentaires si une ligne de post est supprimée dans l'exemple ?",
      "a": "Tous les commentaires avec ce post_id sont supprimés automatiquement — pratique mais dangereux, car les données disparaissent en silence."
    },
    {
      "text": "Le problème N+1 : récupérer une liste puis une requête par élément tue les performances — corrigez-le avec un seul `JOIN` ou le chargement eager dans votre ORM.",
      "explain_dr": "N+1: katjbed lista w moraha query lkol wa7ed — bottleneck kbir; l7al: JOIN wa7ed wla eager loading f ORM.",
      "example": "-- one query instead of N+1:\nSELECT p.title, c.body FROM posts p JOIN comments c ON c.post_id = p.id WHERE p.id = 7;",
      "q": "Comment la requête JOIN unique de l'exemple corrige-t-elle le problème N+1 ?",
      "a": "Au lieu d'une requête pour le post 7 plus une par commentaire, elle récupère titres et corps de commentaires en une seule requête avec JOIN."
    },
    {
      "text": "Un index composite `(last_name, first_name)` sert les requêtes filtrant sur `last_name` ou les deux, mais pas sur `first_name` seul — la règle du préfixe le plus à gauche.",
      "explain_dr": "Index composite (a, b): kaykhdm 3la a wla (a+b), walakin machi 3la b bo7dha — hadi hiya la règle dyal \"leftmost prefix\".",
      "example": "CREATE INDEX idx_name ON users (last_name, first_name); -- serves last_name, and both -- never first_name alone",
      "q": "Pour l'index de l'exemple, quelles clauses WHERE peuvent l'utiliser et lesquelles ne le peuvent pas ?",
      "a": "Les filtres sur last_name, ou sur last_name + first_name, peuvent l'utiliser ; un filtre sur first_name seul ne le peut pas (règle du préfixe le plus à gauche)."
    },
    {
      "text": "Sous-requêtes vs CTE : `WITH active AS (SELECT ...)` rend les requêtes complexes lisibles et réutilisables dans la même requête.",
      "explain_dr": "CTE b7al WITH active AS (...) katkhlli les requêtes lme3e99da wadh7a w kat3awd tst3melhom f nafs la requête.",
      "example": "WITH active AS (\n  SELECT id FROM users WHERE last_login > NOW() - INTERVAL '30 days'\n)\nSELECT * FROM orders WHERE user_id IN (SELECT id FROM active);",
      "q": "Que fait la clause WITH dans l'exemple ?",
      "a": "Elle définit un jeu de résultats temporaire nommé 'active' (utilisateurs connectés depuis moins de 30 jours) que la requête principale utilise ensuite dans une sous-requête IN — plus lisible qu'une sous-requête imbriquée."
    },
    {
      "text": "`LIKE '%text%'` ne peut pas utiliser un index B-tree normal (le joker en tête force un scan) — pour la vraie recherche textuelle utilisez `FULLTEXT` ou un moteur de recherche.",
      "explain_dr": "LIKE '%text%' mayst3melch index 3adi 7it % f lwel katjber 3la scan kaml — l full text search st3mel FULLTEXT wla moteur b7al Elasticsearch.",
      "example": "SELECT * FROM products WHERE name LIKE '%phon%'; -- leading wildcard = full scan; use FULLTEXT for real search",
      "q": "Pourquoi la requête d'exemple est-elle lente même avec un index sur name ?",
      "a": "Le % en tête force un full scan car un index B-tree ne peut pas être utilisé ; la vraie recherche textuelle demande un index FULLTEXT ou un moteur de recherche."
    },
    {
      "text": "`EXPLAIN` avant les requêtes lentes montre le plan d'exécution — cherchez les scans complets de table (`type: ALL`), le coupable habituel.",
      "explain_dr": "EXPLAIN kaywrik kifach l'base de données ghate9ra l'query — ila chefti ALL (full table scan), lmochkil tma.",
      "example": "EXPLAIN SELECT * FROM orders WHERE user_id = 7; -- check for full table scan (type: ALL)",
      "q": "Que dit la commande d'exemple, et quelle valeur confirmerait un problème de performance ?",
      "a": "Elle montre le plan d'exécution de la requête ; `type: ALL` signifie un full table scan — le suspect habituel d'une requête lente."
    },
    {
      "text": "Les contraintes (`NOT NULL`, `UNIQUE`, `CHECK`, `DEFAULT`) garantissent l'intégrité des données au niveau de la base, pas seulement dans le code de l'appli.",
      "explain_dr": "Contraintes (NOT NULL, UNIQUE, CHECK, DEFAULT): l'base hiya li kat7mi data machi ghir code dyalk.",
      "example": "CREATE TABLE users (\n  id INT PRIMARY KEY,\n  email VARCHAR(255) NOT NULL UNIQUE,\n  age INT CHECK (age >= 0),\n  role VARCHAR(20) DEFAULT 'user'\n);",
      "q": "Dans l'exemple, que garantit chaque contrainte de la table users ?",
      "a": "email doit toujours être présent et unique, age ne peut pas être négatif, role vaut 'user' par défaut — imposé par la base de données, pas seulement par le code."
    },
    {
      "text": "`SELECT ... FOR UPDATE` verrouille les lignes sélectionnées dans une transaction, évitant les conditions de course comme dépenser deux fois un solde.",
      "explain_dr": "SELECT ... FOR UPDATE kayverrouiller les lignes f transaction — kaymna3 doublon b7al matssrefch nafs sold joj marat f nafs lwa9t.",
      "example": "BEGIN;\nSELECT balance FROM accounts WHERE id = 1 FOR UPDATE; -- locks the row\nUPDATE accounts SET balance = balance - 50 WHERE id = 1;\nCOMMIT;",
      "q": "Qu'est-ce que la clause FOR UPDATE ajoute à la transaction d'exemple ?",
      "a": "Elle verrouille la ligne du compte 1 jusqu'au COMMIT, pour qu'aucune autre transaction ne puisse la modifier en parallèle — évitant les doubles dépenses."
    },
    {
      "text": "Attention à `UPDATE`/`DELETE` sans `WHERE` — ça touche toutes les lignes ; exécutez d'abord un `SELECT` avec le même `WHERE` par sécurité.",
      "explain_dr": "UPDATE/DELETE bla WHERE katbeddel/k7eyyed KOL les lignes! Dima jerreb b SELECT 9bel.",
      "example": "SELECT * FROM users WHERE email = 'admin@example.com'; -- verify the WHERE first\n-- then only:\nUPDATE users SET role = 'admin' WHERE email = 'admin@example.com';",
      "q": "Quelle habitude de sécurité l'exemple illustre-t-il ?",
      "a": "Exécuter d'abord un SELECT avec le même WHERE pour vérifier qu'il ne cible que admin@example.com, car un UPDATE sans (ou avec un mauvais) WHERE toucherait toutes les lignes."
    }
  ],
  "Mysql": [
    {
      "text": "Les procédures stockées regroupent la logique SQL réutilisable : CREATE PROCEDURE name() BEGIN ... END, exécutée avec CALL name();",
      "explain_dr": "Procedure hiya batch dyal SQL code kat-7efdo f database w kat-3yet liha b CALL. Mzyana l logic li kat-t3awed.",
      "example": "DELIMITER //\nCREATE PROCEDURE list_active()\nBEGIN\n  SELECT * FROM users WHERE active = 1;\nEND //\nDELIMITER ;\n\nCALL list_active();",
      "q": "Comment exécuter la procédure, et pourquoi les lignes DELIMITER ?",
      "a": "Avec CALL list_active();. Les lignes DELIMITER empêchent le client de terminer le CREATE au premier point-virgule du corps."
    },
    {
      "text": "Les fonctions stockées doivent RETURN une valeur : CREATE FUNCTION name() RETURNS type BEGIN ... RETURN x; END",
      "explain_dr": "Fonction khasha t-returni valeur b RETURN, w kat-st3ml wast SELECT b7al ay function.",
      "example": "CREATE FUNCTION double_it(x INT) RETURNS INT\nBEGIN\n  RETURN x * 2;\nEND;\n\nSELECT double_it(21); -- 42",
      "q": "Qu'est-ce qui est obligatoire dans toute fonction stockée ?",
      "a": "Une instruction RETURN produisant une valeur du type déclaré dans RETURNS."
    },
    {
      "text": "Les curseurs parcourent les résultats ligne par ligne : DECLARE → OPEN → FETCH → CLOSE, avec un handler NOT FOUND pour la fin.",
      "explain_dr": "Curseur kat-mchi 3la resultat ligne b ligne. L ordre: DECLARE, OPEN, FETCH, CLOSE — w handler bach t3ref imta salaw l lignes.",
      "example": "DECLARE done INT DEFAULT 0;\nDECLARE c CURSOR FOR SELECT id FROM users;\nDECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;\nOPEN c;\nread_loop: LOOP\n  FETCH c INTO uid;\n  IF done THEN LEAVE read_loop; END IF;\nEND LOOP;\nCLOSE c;",
      "q": "Comment savoir quand le curseur est terminé ?",
      "a": "Le CONTINUE HANDLER FOR NOT FOUND met done = 1 quand FETCH ne trouve plus de lignes, et la boucle fait LEAVE."
    },
    {
      "text": "Les triggers se déclenchent automatiquement : BEFORE/AFTER INSERT/UPDATE/DELETE, avec les lignes NEW (entrante) et OLD (précédente).",
      "explain_dr": "Trigger kay-tactiva bo7do mli kat-w93 INSERT/UPDATE/DELETE. NEW = jdid, OLD = 9dim.",
      "example": "CREATE TRIGGER check_qty BEFORE INSERT ON orders\nFOR EACH ROW\nBEGIN\n  IF NEW.qty < 0 THEN\n    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Negative quantity';\n  END IF;\nEND;",
      "q": "Pourquoi BEFORE INSERT ici et pas AFTER ?",
      "a": "BEFORE permet de valider et rejeter la ligne avec SIGNAL avant écriture ; AFTER serait trop tard."
    },
    {
      "text": "Les transactions regroupent des instructions atomiquement : START TRANSACTION ... COMMIT pour valider, ROLLBACK pour annuler.",
      "explain_dr": "Transaction = majmou3a dyal operations: ya kolhom y-nj7o ya walo. COMMIT kay-7fed, ROLLBACK kay-rje3.",
      "example": "START TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT; -- ou ROLLBACK en cas d'erreur",
      "q": "Le second UPDATE échoue — que doit-il se passer ?",
      "a": "ROLLBACK : annuler aussi le premier UPDATE, pour ne jamais perdre d'argent entre les deux comptes."
    },
    {
      "text": "Contrôle de flux dans les procédures : IF ... THEN ... END IF, CASE WHEN, et LOOP/WHILE/REPEAT avec LEAVE.",
      "explain_dr": "F wast procedures 3ndek IF, CASE, w loops (LOOP, WHILE, REPEAT) — w LEAVE bach t-khrej mn loop.",
      "example": "IF stock > 0 THEN\n  SET msg = 'en stock';\nELSE\n  SET msg = 'rupture';\nEND IF;",
      "q": "Comment sortir d'une boucle LOOP plus tôt ?",
      "a": "Avec LEAVE label; — ex. my_loop: LOOP ... LEAVE my_loop; ... END LOOP my_loop;"
    },
  ],
  "Postgresql": [
    {
      "text": "psql est le terminal interactif : connexion avec psql -U user -d db, \\l liste les bases, \\dt liste les tables, \\d décrit une table.",
      "explain_dr": "psql howa CLI: psql -U user -d db l connection. \\l = databases, \\dt = tables, \\d = describe table, \\q = quit.",
      "example": "psql -U shop -d shopdb\nshopdb=> \\dt\nshopdb=> \\d users",
      "q": "Comment lister les tables et en inspecter une ?",
      "a": "Avec \\dt pour lister les tables, puis \\d users pour voir colonnes, types et index."
    },
    {
      "text": "Types riches : SERIAL (auto-incrément via séquence), UUID avec gen_random_uuid(), JSONB pour documents, tableaux natifs comme TEXT[], et TIMESTAMPTZ pour instants avec fuseau.",
      "explain_dr": "SERIAL = auto-increment, UUID l ids uniques, JSONB l documents, TEXT[] arrays, TIMESTAMPTZ dima l wa9t (bla timezone = machakil).",
      "example": "CREATE TABLE events (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  tags TEXT[],\n  payload JSONB,\n  created_at TIMESTAMPTZ DEFAULT now()\n);",
      "q": "Pourquoi TIMESTAMPTZ plutôt que TIMESTAMP ?",
      "a": "TIMESTAMPTZ stocke un vrai instant ; TIMESTAMP naïf cause des bugs entre fuseaux."
    },
    {
      "text": "RETURNING renvoie les lignes affectées sans seconde requête ; UPSERT gère les conflits atomiquement avec INSERT ... ON CONFLICT.",
      "explain_dr": "RETURNING kat-rje3 rows li t-2athro (b7al id jdid) bla SELECT moraha. ON CONFLICT = insert wla update ila key kayn — atomic, bla race.",
      "example": "INSERT INTO users (email) VALUES ('a@mail.com')\nON CONFLICT (email) DO UPDATE SET last_seen = now()\nRETURNING id;",
      "q": "Que signifie EXCLUDED dans DO UPDATE ?",
      "a": "La ligne telle qu'elle aurait été insérée — les nouvelles valeurs proposées à copier dans l'update."
    },
    {
      "text": "Opérateurs JSONB : -> retourne du JSON, ->> du texte, @> teste la contenance. Indexer JSONB en GIN pour des requêtes @> rapides.",
      "explain_dr": "-> = JSON, ->> = text, @> = wach fiha. GIN index l JSONB bach @> tkhdem b sor3a — B-tree ma kaynfa3ch hna.",
      "example": "CREATE INDEX idx_specs ON products USING GIN (specs);\nSELECT * FROM products WHERE specs @> '{\"color\":\"red\"}';",
      "q": "Quand GIN est-il un mauvais choix ?",
      "a": "Pour égalité/plages/tri sur colonnes scalaires — B-tree est plus petit et plus rapide."
    },
    {
      "text": "Les CTE nomment une sous-requête avec WITH pour la lisibilité ; les fonctions de fenêtrage calculent OVER les lignes sans les réduire comme GROUP BY.",
      "explain_dr": "WITH kat3ti smiya l subquery — readable. Window functions (ROW_NUMBER() OVER...) kat-7esbo 3la rows bla ma tjme3hom b7al GROUP BY.",
      "example": "WITH ranked AS (\n  SELECT *, ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) AS rn\n  FROM staff\n)\nSELECT * FROM ranked WHERE rn = 1;",
      "q": "PARTITION BY vs GROUP BY ?",
      "a": "PARTITION BY découpe les lignes dans la fonction de fenêtrage mais garde toutes les lignes ; GROUP BY réduit chaque groupe à une ligne."
    },
    {
      "text": "Transactions : isolation par défaut READ COMMITTED ; MVCC = les écrivains ne bloquent pas les lecteurs mais laissent des tuples morts — VACUUM les récupère. Sauvegarder avec pg_dump + archivage WAL pour restauration point-in-time.",
      "explain_dr": "READ COMMITTED default. MVCC: writers ma kay-bloquiwch readers walakin kay-khliw dead tuples → VACUUM kay-nddf. Backup: pg_dump + WAL l PITR.",
      "example": "BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;\n-- backup : pg_dump mydb > backup.sql",
      "q": "Un UPDATE est lent sur une grosse table pleine de vieilles lignes — que vérifier ?",
      "a": "Si autovacuum suit : les tuples morts gonflent la table et ralentissent les scans ; vérifier pg_stat_user_tables et VACUUM si besoin."
    },
  ],
  "MongoDb": [
    {
      "text": "MongoDB est une base de données documentaire NoSQL qui stocke les données sous forme de documents BSON flexibles, proches du JSON.",
      "explain_dr": "MongoDB base NoSQL katstocker documents b7al JSON (BSON) — flexible, bla schema fixe.",
      "example": "db.users.insertOne({ name: \"Sara\", age: 24, city: \"Tangier\" }); -- one flexible BSON document",
      "q": "Que stocke l'exemple, et qu'est-ce que BSON ?",
      "a": "Un document avec name, age, city dans la collection users ; BSON est le format binaire de type JSON dans lequel MongoDB stocke les documents."
    },
    {
      "text": "Les données sont organisées en bases → collections → documents (à peu près tables → lignes, mais sans schéma).",
      "explain_dr": "Database > collection > document — b7al table > ligne, walakin bla schema.",
      "example": "db.users.find({ city: \"Tangier\" }); -- collection = like a table, document = like a row",
      "q": "Dans l'exemple, qu'est-ce que `users`, et comment cela correspond-il à SQL ?",
      "a": "users est une collection (comme une table SQL) ; chaque document correspondant est comme une ligne — mais sans schéma fixe."
    },
    {
      "text": "Un document peut imbriquer objets et tableaux : `{ name: \"Aymane\", skills: [\"React\", \"Laravel\"] }`.",
      "explain_dr": "Document y9der ykon fih objets w arrays mdakhlhin — b7al { name, skills: [...] }.",
      "example": "db.products.insertOne({\n  name: \"Keyboard\",\n  specs: { layout: \"AZERTY\", wireless: true },\n  tags: [\"gaming\", \"office\"]\n});",
      "q": "Quels deux types d'imbrication l'exemple montre-t-il ?",
      "a": "Un objet imbriqué (specs : layout, wireless) et un tableau (tags)."
    },
    {
      "text": "Chaque document reçoit automatiquement un `_id` unique (un `ObjectId`) sauf si vous en fournissez un.",
      "explain_dr": "Kol document 3ando _id unique (ObjectId) kaytzad automatiquement ila madertich wa7ed.",
      "example": "db.orders.insertOne({ total: 99 }); -- _id: ObjectId(\"...\") added automatically",
      "q": "Quel `_id` le document d'exemple reçoit-il ?",
      "a": "Un ObjectId généré automatiquement, puisqu'aucun n'a été fourni — chaque document reçoit un _id unique automatiquement."
    },
    {
      "text": "CRUD via le shell ou le driver : `db.users.find({ age: { $gte: 18 } })`, `insertOne()`, `updateOne()`, `deleteOne()`.",
      "explain_dr": "CRUD: find() l9ira2a, insertOne() tzid, updateOne() tbeddel, deleteOne() t7eyyed.",
      "example": "db.users.find({ age: { $gte: 18 } });\ndb.users.updateOne({ email: \"sara@ex.com\" }, { $set: { city: \"Rabat\" } });\ndb.users.deleteOne({ email: \"sara@ex.com\" });",
      "q": "Que font les trois instructions d'exemple ?",
      "a": "Trouver tous les utilisateurs de 18 ans et plus, mettre la ville de Sara à Rabat, puis supprimer le document de Sara — en cherchant par email."
    },
    {
      "text": "Le pipeline d'agrégation (`$match`, `$group`, `$sort`) traite les données par étapes, comme un GROUP BY SQL en version puissante.",
      "explain_dr": "Aggregation pipeline: $match, $group, $sort — étapes katmchi b tartib, b7al GROUP BY m9ewwa.",
      "example": "db.orders.aggregate([\n  { $match: { status: \"paid\" } },\n  { $group: { _id: \"$city\", total: { $sum: \"$amount\" } } },\n  { $sort: { total: -1 } }\n]);",
      "q": "Que font les trois étapes du pipeline dans l'exemple ?",
      "a": "$match ne garde que les commandes payées, $group somme les montants par ville, $sort trie les villes par total décroissant."
    },
    {
      "text": "Créez des index sur les champs souvent interrogés pour garder les lectures rapides : `db.users.createIndex({ email: 1 })`.",
      "explain_dr": "Index 3la les champs li kat9elleb 3lihom bzf kayserre3 l9ira2a — b7al index dyal email.",
      "example": "db.users.createIndex({ email: 1 });",
      "q": "Qu'est-ce que l'index d'exemple optimise ?",
      "a": "Les recherches par email (db.users.find({email: ...})), pour garder des lectures rapides."
    },
    {
      "text": "Embarquez les données liées pour un accès intensif en lecture ; référencez-les (liez) quand les données sont volumineuses ou partagées.",
      "explain_dr": "Embed (dekhel) data sghar li kat9rahom dima m3a b3d; reference (link) ila kbar wla mchtarkin.",
      "example": "db.users.insertOne({ name: \"Sara\", address: { city: \"Tangier\", zip: \"90000\" } }); -- embed\n-- or reference: { name: \"Sara\", cityId: ObjectId(\"...\") }",
      "q": "Quelle approche montre chaque moitié de l'exemple, et quand choisirait-on la seconde ?",
      "a": "La première imbrique l'adresse dans le document utilisateur (accès en lecture fréquent) ; la référence cityId sert pour les données volumineuses ou partagées entre documents."
    },
    {
      "text": "Mongoose est l'ODM Node.js populaire qui ajoute schémas, validation et modèles au-dessus de MongoDB.",
      "explain_dr": "Mongoose: ODM dyal Node.js kayzid schemas + validation fo9 MongoDB.",
      "example": "const userSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, unique: true }\n});",
      "q": "Qu'est-ce que le schéma d'exemple ajoute par rapport à MongoDB brut ?",
      "a": "Validation et structure : name est requis et de type String, email doit être unique — MongoDB lui-même est sans schéma."
    },
    {
      "text": "MongoDB vs SQL : MongoDB privilégie les schémas flexibles et la montée en charge horizontale ; SQL privilégie les schémas stricts, les jointures et les transactions complexes.",
      "explain_dr": "MongoDB: flexibilité + horizontal scaling; SQL: schema strict + joins + transactions me3e99da.",
      "example": "-- MongoDB: one collection, flexible docs --\ndb.products.find({ category: \"phone\", price: { $lt: 500 } });",
      "q": "Quel type de requête l'exemple montre-t-il, et que MongoDB évite-t-il ici par rapport à SQL ?",
      "a": "Une recherche filtrée sur une seule collection — pas de jointures, pas de schéma fixe, juste des documents flexibles filtrés par champs."
    },
    {
      "text": "`updateOne` ne touche que les champs dans `$set` : `db.users.updateOne({ _id }, { $set: { name: \"Ali\" } })` — oubliez `$set` et vous remplacez tout le document.",
      "explain_dr": "updateOne m3a $set katbeddel ghir les champs li 3titih — ila nsiti $set, kat3ewwed ldocument kamel! Attention kbira.",
      "example": "db.users.updateOne({ _id: id }, { $set: { name: \"New\" } }); -- only name changes",
      "q": "Que se passe-t-il si on exécute la mise à jour d'exemple SANS $set ?",
      "a": "Tout le document est remplacé par juste { name: 'New' } — tous les autres champs sont perdus. $set limite la mise à jour aux champs nommés."
    },
    {
      "text": "Un `ObjectId` contient un timestamp : `new ObjectId().getTimestamp()` révèle l'heure de création, et trier par `_id` est à peu près chronologique.",
      "explain_dr": "ObjectId fih timestamp mdakhel — t9der t3ref w9t lcréation, w tri par _id kay3ti tartib chronologique t9riban.",
      "example": "new ObjectId().getTimestamp(); -- creation time embedded in the id\ndb.posts.find().sort({ _id: -1 }); -- roughly newest first",
      "q": "Que démontrent les deux lignes d'exemple à propos des ObjectId ?",
      "a": "Un ObjectId contient sa date de création (getTimestamp), donc trier par _id décroissant retourne à peu près les posts les plus récents d'abord."
    },
    {
      "text": "`$lookup` est le JOIN de MongoDB : il récupère des documents d'une autre collection dans le pipeline d'agrégation.",
      "explain_dr": "$lookup howa JOIN dyal MongoDB — kayjbed documents mn collection khra f l'agrégation.",
      "example": "db.orders.aggregate([\n  { $lookup: { from: \"users\", localField: \"userId\", foreignField: \"_id\", as: \"user\" } }\n]);",
      "q": "Que fait l'étape d'agrégation de l'exemple ?",
      "a": "Elle joint chaque commande aux utilisateurs correspondants (userId = _id) et les imbrique dans un tableau 'user' — le JOIN de MongoDB."
    },
    {
      "text": "`db.orders.find({ $or: [{ age: { $lt: 18 } }, { verified: true }] })` combine des conditions sur des champs différents.",
      "explain_dr": "$or katjm3 chorout 3la champs mkhtalfin — ay condition t7e9e9, ldocument kaytjb.",
      "example": "db.users.find({ $or: [{ age: { $lt: 18 } }, { verified: true }] });",
      "q": "Quels documents l'exemple trouve-t-il ?",
      "a": "Les utilisateurs de moins de 18 ans OU vérifiés — les conditions portent sur des champs différents, et l'une ou l'autre suffit."
    },
    {
      "text": "Les transactions multi-documents existent (`session.startTransaction()`), mais elles sont plus lentes — concevez les schémas pour éviter d'en avoir besoin.",
      "explain_dr": "Transactions multi-documents kaynin walakin bta2 w ghalyin — sennm lschema dyalk bach ttfadhom.",
      "example": "const session = client.startSession();\nsession.startTransaction(); -- slower; prefer schema design that avoids it",
      "q": "Pourquoi l'exemple prévient-il que les transactions sont plus lentes ?",
      "a": "Les transactions multi-documents ajoutent un coût de coordination : mieux vaut concevoir les schémas (ex. imbrication) pour les éviter."
    },
    {
      "text": "Les replica sets offrent la haute disponibilité (bascule automatique) ; le sharding répartit les données sur plusieurs machines pour la montée en charge horizontale.",
      "explain_dr": "Replica set = haute disponibilité (ila ta7 wa7ed, wa7ed khor kaykml); sharding = t9sim data 3la machines l scale kbir.",
      "example": "-- replica set: automatic failover; sharding: split data across machines",
      "q": "Quel problème chacun résout-il : replica sets et sharding ?",
      "a": "Les replica sets assurent la haute disponibilité via le basculement automatique ; le sharding répartit les données sur plusieurs machines pour la montée en charge horizontale."
    },
    {
      "text": "La limite de 16 Mo par document interdit d'embarquer des tableaux illimités (comme des milliers de commentaires) — référencez-les plutôt.",
      "explain_dr": "Document mahdoud b 16MB — 3mr ma t-embeddi array bla limite b7al comments, st3mel reference.",
      "example": "db.posts.updateOne({ _id: id }, { $push: { commentIds: commentId } }); -- reference, not embed, unbounded comments",
      "q": "Que démontre le $push de commentIds dans l'exemple ?",
      "a": "Pour les tableaux illimités comme les commentaires, on stocke des références (ids) plutôt qu'on imbrique — imbriquer des milliers de commentaires risquerait la limite de 16 Mo par document."
    },
    {
      "text": "Les index TTL suppriment les documents automatiquement après un délai : `db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })` — parfait pour les sessions et les tokens.",
      "explain_dr": "TTL index kay7eyyed documents bo7dha mor wa9t mo3ayan — mitali l sessions w tokens b7al expireAfterSeconds: 3600.",
      "example": "db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });",
      "q": "Que fait l'index d'exemple ?",
      "a": "Il supprime automatiquement les documents de session 3600 secondes après leur createdAt — idéal pour sessions et tokens."
    },
    {
      "text": "`explain(\"executionStats\")` montre si une requête a utilisé un index (`IXSCAN`) ou tout scanné (`COLLSCAN`) — la version MongoDB du EXPLAIN de SQL.",
      "explain_dr": "explain(\"executionStats\"): ila chefti IXSCAN kayst3mel index (mezyan), ila COLLSCAN kayscanni kolchi (khayb).",
      "example": "db.users.find({ email: \"a@b.com\" }).explain(\"executionStats\"); -- check for COLLSCAN",
      "q": "Dans la sortie de l'exemple, que signifient COLLSCAN et IXSCAN ?",
      "a": "IXSCAN signifie que la requête a utilisé un index (bien) ; COLLSCAN qu'elle a scanné toute la collection (lent) — comme l'EXPLAIN de SQL."
    },
    {
      "text": "Les index composés suivent la règle ESR : champs d'Égalité d'abord, puis Tri, puis Intervalle — l'ordre compte pour les performances.",
      "explain_dr": "Index composite: ESR — Égalité lwel, moraha Tri (sort), w lintervalle (range) lkher; tartib mohim bzf.",
      "example": "db.orders.createIndex({ status: 1, createdAt: -1, total: 1 }); -- equality, sort, range",
      "q": "Comment l'index d'exemple suit-il la règle ESR ?",
      "a": "status est le champ d'égalité en premier, createdAt le champ de tri ensuite, total le champ de plage en dernier — l'ordre compte pour la performance."
    },
    {
      "text": "`upsert: true` insère quand aucun document ne correspond : `db.users.updateOne({ email }, { $set: {...} }, { upsert: true })`.",
      "explain_dr": "upsert: ila makaynch document kaywaf9 lfilter, kaycreeyeh — mitali l \"create or update\".",
      "example": "db.users.updateOne({ email: \"a@b.com\" }, { $set: { name: \"Sara\" } }, { upsert: true });",
      "q": "Que se passe-t-il si aucun document ne correspond à { email: 'a@b.com' } dans l'exemple ?",
      "a": "Avec upsert: true, MongoDB insère un nouveau document avec cet email et name 'Sara' au lieu de ne rien mettre à jour."
    },
    {
      "text": "`$inc` incrémente atomiquement : `db.counters.updateOne({}, { $inc: { visits: 1 } })` — sûr sous écritures concurrentes.",
      "explain_dr": "$inc kayzid wa7ed ra9m b tari9a atomique — amin m3a ktaba m3awda f nafs lwa9t (b7al compteur dyal visits).",
      "example": "db.counters.updateOne({ name: \"visits\" }, { $inc: { value: 1 } }); -- atomic",
      "q": "Pourquoi l'exemple est-il sûr en écritures concurrentes ?",
      "a": "$inc incrémente de façon atomique côté serveur — deux mises à jour simultanées ajoutent chacune 1, aucun compteur n'est perdu."
    },
    {
      "text": "La recherche textuelle exige d'abord un index text : `db.posts.createIndex({ title: \"text\" })`, puis `$text: { $search: \"laravel\" }`.",
      "explain_dr": "Recherche textuelle: khass index text lwel, moraha $text $search — b7al google sghir f lbase.",
      "example": "db.posts.createIndex({ title: \"text\" });\ndb.posts.find({ $text: { $search: \"keyboard\" } });",
      "q": "Pourquoi l'exemple doit-il créer l'index AVANT d'exécuter la requête $text ?",
      "a": "La recherche $text exige qu'un index textuel existe ; sans createIndex({title: 'text'}), la requête échoue."
    },
    {
      "text": "L'étape `$project` de l'agrégation remodèle la sortie — renomme les champs, en calcule de nouveaux, supprime le reste — avant d'envoyer les résultats au client.",
      "explain_dr": "$project katbeddel chakl natija: katbdel smiyat les champs, kat7seb jdod, w kat7eyyed li mabghitich.",
      "example": "db.users.aggregate([{ $project: { fullName: \"$name\", _id: 0, email: 1 } }]);",
      "q": "Que produit l'étape d'exemple ?",
      "a": "Des documents remodelés en { fullName, email } — name renommé en fullName, _id exclu, tout le reste supprimé."
    },
    {
      "text": "Dénormalisez pour les lectures : stocker `authorName` sur chaque post évite un `$lookup` à chaque liste, au prix d'une complexité de mise à jour.",
      "explain_dr": "Dénormalisation: tkhazn authorName m3a kol post bach ttfada $lookup f kol liste — tmnou: update as3eb.",
      "example": "db.posts.insertOne({ title: \"Hello\", authorName: \"Sara\" }); -- denormalize for reads",
      "q": "Quel compromis illustre l'authorName de l'exemple ?",
      "a": "Stocker authorName sur chaque post évite un $lookup à chaque listing (lectures rapides), mais renommer l'auteur exigera ensuite de mettre à jour beaucoup de posts."
    }
  ],
  "Git": [
    {
      "text": "Git est un système de contrôle de version distribué qui suit chaque changement de votre code.",
      "explain_dr": "Git: système kaytbe3 kol tbadilat code dyalk w kay7fdek mn dya3.",
      "example": "git init -- creates a repo\ngit clone <url> -- copies a remote repo",
      "q": "Quand utiliser `git init` plutôt que `git clone <url>` dans l'exemple ?",
      "a": "init démarre un nouveau dépôt local de zéro ; clone copie un dépôt distant existant sur votre machine."
    },
    {
      "text": "Workflow : `git add .` prépare les changements, `git commit -m \"message\"` enregistre un instantané, `git push` l'envoie.",
      "explain_dr": "add . = t7edd lchanges, commit = tsjjel snapshot, push = tsift l GitHub.",
      "example": "git add . -- stage all changes\ngit commit -m \"Add login form\" -- commit them",
      "q": "Que fait chacune des trois commandes d'exemple ?",
      "a": "add met les changements en staging, commit sauvegarde un instantané avec un message, push l'envoie vers le dépôt distant."
    },
    {
      "text": "Vérifiez l'état avec `git status` et consultez l'historique avec `git log --oneline`.",
      "explain_dr": "git status kaywrik chno tbdel; git log --oneline kaywrik lhistorique b ikhtisar.",
      "example": "git status -- what's changed\ngit log --oneline -- compact history",
      "q": "Quelle est la différence entre les deux commandes d'exemple ?",
      "a": "status montre les changements actuels de l'arbre de travail ; log --oneline montre l'historique compact des commits."
    },
    {
      "text": "`git pull` récupère et fusionne les changements distants ; `git fetch` les télécharge seulement.",
      "explain_dr": "pull = fetch + merge (katjbed w katdmj); fetch ghir katjbed bla madmj.",
      "example": "git pull -- fetch + merge remote changes\ngit fetch -- download only, no merge",
      "q": "Que fait `git fetch` que `git pull` fait aussi, et que saute-t-il ?",
      "a": "fetch télécharge les changements distants ; il saute la fusion que pull effectue — fetch seul ne change rien à votre arbre de travail."
    },
    {
      "text": "Les branches isolent le travail : `git checkout -b feature/login` crée une nouvelle branche et bascule dessus.",
      "explain_dr": "Branch: khdma m3zoula 3la main; checkout -b katsna3 branch jdida w katmchi liha.",
      "example": "git checkout -b feature/login -- create and switch to a branch",
      "q": "Que fait `git checkout -b feature/login` ?",
      "a": "Crée la branche feature/login et bascule dessus, isolant votre travail de main."
    },
    {
      "text": "Fusionnez avec `git merge feature/login` ; résolvez les conflits en éditant les sections marquées, puis commitez.",
      "explain_dr": "merge katdmj branch f l'akhar — conflicts: beddel les sections lmer9ma b yeddik w commit.",
      "example": "git checkout main && git merge feature/login -- merge the branch into main",
      "q": "Que fait la commande d'exemple ?",
      "a": "Bascule sur main, puis fusionne feature/login dedans."
    },
    {
      "text": "Un conflit de fusion survient quand deux branches modifient les mêmes lignes — corrigez-le manuellement et commitez.",
      "explain_dr": "Conflict: joj branches beddlo nafs les lignes — kat7ellou ydawiyan w katcommiti.",
      "example": "-- conflict markers:\n<<<<<<< HEAD\nmy change\n=======\ntheir change\n>>>>>>> feature/login\n-- edit the file, keep what you want, then git add + git commit",
      "q": "Dans l'exemple, que signifient les marqueurs `<<<<<<< HEAD` / `=======` / `>>>>>>>` ?",
      "a": "Ils marquent la section en conflit : la version de HEAD au-dessus de =======, celle de la branche en dessous — vous éditez pour garder ce que vous voulez, puis add et commit."
    },
    {
      "text": "Écrivez des messages de commit clairs à l'impératif : `\"Add login validation\"`, pas `\"added stuff\"`.",
      "explain_dr": "Messages dyal commit wad7in b l'impératif: \"Add login validation\" machi \"added stuff\".",
      "example": "git commit -m \"Fix login validation\" -- imperative, like a command",
      "q": "Pourquoi le message d'exemple est-il meilleur que 'added stuff' ?",
      "a": "Il est impératif et précis ('Fix login validation'), donc l'historique se lit comme une liste de commandes décrivant ce que fait chaque commit."
    },
    {
      "text": "Ne commitez jamais les secrets, les fichiers `.env` ni `node_modules` — utilisez un fichier `.gitignore`.",
      "explain_dr": "Secrets, .env, w node_modules 3mr ma tcommitihom — dirhom f .gitignore.",
      "example": "cat .gitignore -- add:\n.env\nnode_modules/\n*.log",
      "q": "Qu'est-ce que le .gitignore d'exemple empêche ?",
      "a": "Il empêche les fichiers .env, node_modules/ et *.log d'être commités — secrets et bruit restent hors du dépôt."
    },
    {
      "text": "`git stash` met temporairement de côté les changements non commités pour changer de branche proprement.",
      "explain_dr": "stash kaykhbbi changes li mazal matcommitatch bach tbeddel branch n9iya.",
      "example": "git stash -- shelve changes\ngit stash pop -- restore them",
      "q": "Dans l'exemple, quand ferait-on un stash, et que fait `git stash pop` ?",
      "a": "Le stash met de côté les changements non commités pour changer de branche proprement ; pop les restaure dans votre arbre de travail."
    },
    {
      "text": "`git rebase main` rejoue vos commits au-dessus de `main` pour un historique linéaire — mais ne rebasez jamais des commits déjà poussés sur une branche partagée.",
      "explain_dr": "rebase kayj3el lhistorique khatt wa7ed n9i — walakin 3mr ma trebase chi commit li deja tpushit l branch mchtarka.",
      "example": "git checkout feature/login && git rebase main -- linear history\n-- never rebase commits already pushed to a shared branch",
      "q": "Que fait le rebase d'exemple, et quel est l'avertissement ?",
      "a": "Il rejoue les commits de feature/login sur main pour un historique linéaire — mais jamais de rebase sur des commits déjà poussés sur une branche partagée, sinon on réécrit l'historique des collègues."
    },
    {
      "text": "`git reset --soft HEAD~1` annule le dernier commit mais garde vos changements staged ; `--hard` les supprime complètement — connaissez la différence avant de le taper.",
      "explain_dr": "reset --soft kayrjj3 commit bla maym7i khdmtk; --hard kaym7i kolchi — fhm lfar9 9bel matktebha.",
      "example": "git reset --soft HEAD~1 -- undo commit, keep changes staged\ngit reset --hard HEAD~1 -- undo commit, discard changes",
      "q": "Quelle est la différence entre les deux resets d'exemple ?",
      "a": "--soft annule le commit mais garde les changements en staging ; --hard les supprime complètement. --hard est destructif."
    },
    {
      "text": "`git cherry-pick <hash>` applique un seul commit d'une autre branche sur la branche actuelle.",
      "explain_dr": "cherry-pick: katjbed commit wa7ed mn branch khra l branch li nta fiha.",
      "example": "git cherry-pick a1b2c3d -- apply that one commit here",
      "q": "Que fait l'exemple ?",
      "a": "Il applique uniquement le commit a1b2c3d d'une autre branche sur votre branche actuelle, sans fusionner toute la branche."
    },
    {
      "text": "`git reflog` enregistre chaque mouvement de HEAD — votre outil de secours quand vous croyez un commit perdu à jamais.",
      "explain_dr": "reflog kayssjjel kol 7araka dyal HEAD — howa li kayn9dk ila d7enti chi commit dda3.",
      "example": "git reflog -- every HEAD movement; find the lost hash, then git checkout -b rescue <hash>",
      "q": "Comment l'exemple récupère-t-il un commit 'perdu' ?",
      "a": "reflog liste chaque mouvement de HEAD, on y retrouve le hash du commit perdu et on crée une branche dessus."
    },
    {
      "text": "Fast-forward vs merge commit : `git merge --no-ff` préserve un commit de fusion pour que la branche de fonctionnalité reste visible dans l'historique.",
      "explain_dr": "merge --no-ff kaykhlli commit dyal merge bayn — bach lbnach dyal lfeature tb9a bayna f lhistorique.",
      "example": "git merge --no-ff feature/login -- keeps a merge commit, branch stays visible",
      "q": "Que préserve l'exemple qu'une fusion fast-forward ne préserverait pas ?",
      "a": "Un commit de fusion, pour que la branche feature/login reste visible dans l'historique au lieu de disparaître en ligne droite."
    },
    {
      "text": "`git diff --staged` montre ce qui entrera dans le prochain commit ; `git diff` simple montre seulement les changements non staged.",
      "explain_dr": "git diff --staged kaywrik chno ghaydkhel f commit jay; diff bo7dha ghir li mazal mastageditch.",
      "example": "git diff --staged -- what the next commit will contain\ngit diff -- what's unstaged",
      "q": "Que montre l'exemple que `git diff` simple ne montre pas ?",
      "a": "Les changements déjà en staging pour le prochain commit ; diff simple ne montre que les changements non stagés."
    },
    {
      "text": "`git remote -v` liste où vos branches se poussent ; `git branch -vv` montre le suivi upstream de chaque branche.",
      "explain_dr": "remote -v kaywrik fin katpushi; branch -vv kaywrik l'upstream dyal kol branch.",
      "example": "git remote -v -- where pushes go\ngit branch -vv -- branches with upstream tracking",
      "q": "Que dit chaque commande d'exemple ?",
      "a": "remote -v liste les URLs de push/fetch ; branch -vv montre chaque branche locale et la branche distante qu'elle suit."
    },
    {
      "text": "Detached HEAD signifie que vous êtes sur un commit, pas une branche — créez une branche avec `git switch -c rescue` avant d'y commiter.",
      "explain_dr": "Detached HEAD: nta 3la commit machi branch — sna3 branch 9bel matcommiti tma.",
      "example": "git switch -c rescue -- create a branch from a detached HEAD before committing",
      "q": "Qu'est-ce qui cloche avec un commit dans la situation de l'exemple, et quelle est la solution ?",
      "a": "En detached HEAD on est sur un commit, pas une branche — les commits peuvent s'y perdre ; `git switch -c rescue` crée d'abord une branche."
    },
    {
      "text": "`git bisect` cherche par dichotomie dans l'historique le commit qui a introduit un bug : marquez les bons/mauvais commits et laissez Git diviser l'intervalle.",
      "explain_dr": "bisect: kay9smm lhistorique nss nss bach yl9a lcommit li dkhel lbug — katmarki good/bad w howa kaykml.",
      "example": "git bisect start\ngit bisect bad HEAD\ngit bisect good v1.2.0 -- then test each, mark good/bad",
      "q": "Que préparent les trois commandes d'exemple ?",
      "a": "Une recherche dichotomique : on marque HEAD comme bad, v1.2.0 comme good, puis Git divise l'intervalle de commits par deux à chaque tour jusqu'à trouver le commit fautif."
    },
    {
      "text": "Amend : `git commit --amend` fusionne des changements dans le dernier commit — seulement avant de pousser, jamais après que d'autres l'ont récupéré.",
      "explain_dr": "amend: katzid changes l akhir commit — ghir 9bel push, machi mor ma nass jbdouh.",
      "example": "git commit --amend -m \"Fix login validation\" -- folds changes into last commit, only before pushing",
      "q": "Que fait l'exemple, et quel est l'avertissement ?",
      "a": "Il replie de nouveaux changements (ou un nouveau message) dans le dernier commit — uniquement avant de pousser ; après que d'autres l'ont récupéré, on réécrit un historique partagé."
    },
    {
      "text": "Force-push avec précaution, pas en force brute : `git push --force-with-lease` refuse d'écraser le travail des collègues poussé après votre dernier fetch.",
      "explain_dr": "force-with-lease: force push l'amin — kayrfed ykhsser khdma dyal sahbek li pushaha morak.",
      "example": "git push --force-with-lease -- refuses to overwrite teammates' newer pushes",
      "q": "En quoi l'exemple est-il plus sûr qu'un --force brutal ?",
      "a": "Il refuse d'écraser si un collègue a poussé après votre dernier fetch — --force simple détruirait silencieusement son travail."
    },
    {
      "text": "Les motifs de `.gitignore` comme `*.log` ignorent des fichiers, mais `!important.log` en réinclut un — la négation `!` est une bonne réponse-piège.",
      "explain_dr": "f .gitignore, ! kay3ni \"lla had lfile\" — b7al !important.log katstetni wa7ed mn *.log.",
      "example": "-- .gitignore:\n*.log\n!important.log -- re-includes just this one",
      "q": "Que fait le .gitignore d'exemple ?",
      "a": "Il ignore tous les fichiers *.log mais réinclut important.log — le motif `!` est une exception à la règle précédente."
    },
    {
      "text": "Le squash-and-merge d'une PR compresse une branche de fonctionnalité en un seul commit propre sur `main` — historique net malgré des commits de travail bruyants.",
      "explain_dr": "Squash-and-merge: PR kamla katwli commit wa7ed n9i 3la main — historique zwin.",
      "example": "-- PR merge strategy: Squash and merge -- one clean commit on main",
      "q": "Que fait la stratégie de PR d'exemple à l'historique de main ?",
      "a": "Elle compresse toute la branche de fonctionnalité en un seul commit propre sur main — un historique net pour des commits de travail bruyants."
    },
    {
      "text": "`git worktree` permet de checker deux branches à la fois dans des dossiers séparés — fini le stash pour relire la PR d'un collègue.",
      "explain_dr": "worktree: joj branches mfto7in f joj dossiers f nafs lwa9t — bla stash.",
      "example": "git worktree add ../pr-review feature/login -- check out two branches at once",
      "q": "Quel problème l'exemple résout-il ?",
      "a": "Il extrait feature/login dans un second dossier, pour relire la PR d'un collègue sans faire de stash de son travail en cours."
    },
    {
      "text": "Les tags marquent les releases : `git tag v1.0.0 && git push --tags` ; c'est en général sur les tags que la CI construit une release.",
      "explain_dr": "Tags: kaymarkiw les versions (v1.0.0) — la CI katbni releases 3lihom.",
      "example": "git tag v1.0.0 && git push --tags -- mark a release; CI builds from the tag",
      "q": "Que font les deux commandes d'exemple ?",
      "a": "tag marque v1.0.0 comme point de release en local, et push --tags l'envoie au dépôt distant — la CI construit généralement les releases à partir des tags."
    }
  ],
  "Docker": [
    {
      "text": "Docker empaquette une appli et ses dépendances dans un conteneur portable qui tourne partout.",
      "explain_dr": "Docker kayjme3 l'app w ga3 dépendances dyalha f container kaykhdm finma mchiti.",
      "example": "docker build -t webstack-site . -- build image\ndocker run -p 8080:80 webstack-site -- run it anywhere",
      "q": "Que font les deux commandes d'exemple ?",
      "a": "build crée l'image webstack-site depuis le Dockerfile ; run démarre un conteneur depuis cette image, en mappant le port hôte 8080."
    },
    {
      "text": "Un conteneur est un runtime léger et isolé ; une image est le modèle immuable à partir duquel les conteneurs sont créés.",
      "explain_dr": "Container = runtime khfif m3zoul; image = template li menha kaytkhal9ou les containers.",
      "example": "docker images -- list images (templates)\ndocker ps -- list running containers",
      "q": "Quelle est la différence entre les sorties des deux commandes d'exemple ?",
      "a": "docker images liste les modèles d'images ; docker ps liste les conteneurs en cours d'exécution créés à partir d'elles."
    },
    {
      "text": "Le `Dockerfile` définit l'image : image de base, dépendances, étapes de copie et commande de démarrage.",
      "explain_dr": "Dockerfile: kaywsef limage — image assasiya, dépendances, copy, w commande dyal démarrage.",
      "example": "FROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nCMD [\"npm\", \"start\"]",
      "q": "Dans l'exemple, que fait chaque instruction ?",
      "a": "FROM définit l'image de base, WORKDIR le répertoire de travail, COPY apporte les fichiers, RUN npm ci installe les dépendances, et CMD est la commande de démarrage."
    },
    {
      "text": "Construisez avec `docker build -t myapp .` et exécutez avec `docker run -p 3000:3000 myapp`.",
      "explain_dr": "build -t katbni limage; run -p 3000:3000 kaykhdmha w kay7el lport.",
      "example": "docker build -t myapp .\ndocker run -p 3000:3000 myapp",
      "q": "Que fait `-p 3000:3000` dans l'exemple ?",
      "a": "Il mappe le port 3000 de l'hôte au port 3000 du conteneur pour que l'appli à l'intérieur soit joignable depuis l'extérieur."
    },
    {
      "text": "`docker-compose.yml` orchestre les configurations multi-conteneurs (appli + base de données + cache) avec un seul `docker compose up`.",
      "explain_dr": "docker-compose.yml: kaydir app + base de données + cache b commande wa7da.",
      "example": "version: \"3\"\nservices:\n  app:\n    build: .\n    ports: [\"3000:3000\"]\n  db:\n    image: postgres:16\n-- docker compose up -- everything starts together",
      "q": "Qu'est-ce que le fichier compose d'exemple orchestre ?",
      "a": "Un conteneur d'appli (construit localement, port 3000) plus un conteneur de base postgres:16 — un seul `docker compose up` démarre tout ensemble."
    },
    {
      "text": "Conteneurs vs machines virtuelles : les conteneurs partagent le noyau de l'hôte et démarrent en secondes ; les VM émulent tout le matériel et sont plus lourdes.",
      "explain_dr": "Container kaypartagi kernel dyal l'hôte w kaybda f secondes; VM kat-emuli hardware kaml w t9ila.",
      "example": "-- containers share the host kernel: seconds to start, MBs of overhead\n-- VMs emulate full hardware: minutes to boot, GBs each",
      "q": "Pourquoi les conteneurs sont-ils plus légers que les VM selon l'exemple ?",
      "a": "Les conteneurs partagent le noyau de l'hôte (démarrage en secondes, quelques Mo) ; les VM émulent tout le matériel (démarrage en minutes, des Go chacune)."
    },
    {
      "text": "Mappez les ports de l'hôte vers ceux du conteneur avec `-p 8080:80` pour rendre l'appli accessible de l'extérieur.",
      "explain_dr": "-p 8080:80: kayrbt port dyal l'hôte m3a port dyal container bach twsl lapp mn barra.",
      "example": "docker run -p 8080:80 nginx -- host :8080 -> container :80",
      "q": "Dans `docker run -p 8080:80 nginx`, quel port est celui de l'hôte et lequel est celui du conteneur ?",
      "a": "8080 est le port de l'hôte, 80 celui du conteneur — l'hôte:8080 redirige vers le conteneur:80."
    },
    {
      "text": "Persistez les données avec des volumes (`-v mydata:/data`) — les systèmes de fichiers des conteneurs sont éphémères par défaut.",
      "explain_dr": "Container filesystem mo2a99at — volumes (-v) howa li kay7fed data.",
      "example": "docker run -v mydata:/data postgres -- data survives container removal\n-- without a volume, files vanish when the container is deleted",
      "q": "Que démontre l'exemple sur les systèmes de fichiers des conteneurs ?",
      "a": "Ils sont éphémères : les données postgres survivent à la suppression du conteneur uniquement parce que -v mydata:/data les persiste dans un volume nommé."
    },
    {
      "text": "Un fichier `.dockerignore` garde `node_modules`, `.git` et les secrets hors de l'image.",
      "explain_dr": ".dockerignore kaymna3 node_modules, .git w secrets ydkhlo f limage.",
      "example": "-- .dockerignore:\nnode_modules\n.git\n.env",
      "q": "Qu'est-ce que le .dockerignore d'exemple garde hors de l'image ?",
      "a": "node_modules, .git et .env — dépendances, historique et secrets ne sont pas intégrés à l'image."
    },
    {
      "text": "Taguez les images avec des versions (`myapp:1.2.0`) plutôt que de ne compter que sur `latest` pour des déploiements reproductibles.",
      "explain_dr": "Taggi limages b versions (1.2.0) machi ghir latest — bach deploy ykoun stable.",
      "example": "docker build -t myapp:1.2.0 .\ndocker tag myapp:1.2.0 registry.example.com/myapp:1.2.0",
      "q": "Pourquoi le myapp:1.2.0 de l'exemple est-il meilleur que myapp:latest ?",
      "a": "Les tags de version rendent les déploiements reproductibles — latest est mutable et on ne sait plus quel code tourne réellement."
    },
    {
      "text": "Les builds multi-étapes (`FROM node AS build` puis `FROM nginx`) n'embarquent que le résultat compilé — les images finales passent d'environ 1 Go à quelques dizaines de Mo.",
      "explain_dr": "Multi-stage build: katbni b image kbira w f lkher katjbed ghir natija — image katwli sghar bzf.",
      "example": "FROM node:20 AS build\nWORKDIR /app\nCOPY . .\nRUN npm run build\nFROM nginx:alpine\nCOPY --from=build /app/dist /usr/share/nginx/html -- only compiled output ships",
      "q": "Qu'accomplissent les deux étapes FROM de l'exemple ?",
      "a": "L'étape de build compile l'appli avec node, puis seule la sortie dist compilée est copiée dans une petite image finale nginx:alpine — la taille passe d'environ 1 Go à quelques dizaines de Mo."
    },
    {
      "text": "Chaque instruction du Dockerfile crée une couche ; placez les étapes qui changent rarement (installation des dépendances) avant celles qui changent souvent (copie du code) pour maximiser le cache des couches.",
      "explain_dr": "Kol instruction = layer; dir dépendances (li matbeddlch) lwel w code lkher — bach lcache ykhdm mzyan.",
      "example": "-- good: COPY package*.json first, install, then COPY code last\n-- bad: COPY . . before npm ci -- code changes invalidate the install layer",
      "q": "Pourquoi l'ordre 'bon' de l'exemple est-il meilleur ?",
      "a": "COPY package*.json + npm ci s'exécutent avant COPY . ., donc les changements de code n'invalident pas la couche d'installation des dépendances en cache — les rebuilds sont rapides."
    },
    {
      "text": "`docker exec -it myapp sh` ouvre un shell dans un conteneur en cours d'exécution — votre premier réflexe pour déboguer un service en production.",
      "explain_dr": "docker exec -it: katdkhel l container li khddam — awal 7aja dirha ila bghiti tdebugi.",
      "example": "docker exec -it myapp sh -- open a shell inside the running container",
      "q": "Que fait la commande d'exemple ?",
      "a": "Elle ouvre un shell interactif (sh) dans le conteneur myapp en cours d'exécution — le premier réflexe pour déboguer un service en production."
    },
    {
      "text": "Les variables d'environnement via `--env-file .env` ou `environment:` dans compose valent mieux que des secrets codés en dur dans l'image.",
      "explain_dr": "Secrets: st3mel --env-file wla environment f compose — 3mr ma tktebhom f limage.",
      "example": "docker run --env-file .env myapp -- secrets from the file, not baked in\n-- or compose: environment: [PORT=3000]",
      "q": "Que recommande l'exemple plutôt que de coder les secrets en dur ?",
      "a": "Passer les secrets via --env-file .env ou environment: dans compose, pour ne jamais les intégrer à l'image."
    },
    {
      "text": "`docker compose up -d` lance en détaché ; `docker compose logs -f` suit les logs ; `docker compose down` arrête tout et supprime le réseau.",
      "explain_dr": "up -d khddam f background; logs -f katwrik logs; down kay7bess kolchi.",
      "example": "docker compose up -d -- detached\ndocker compose logs -f -- follow logs\ndocker compose down -- stop and remove",
      "q": "Que font les trois commandes compose d'exemple ?",
      "a": "up -d démarre tout en détaché, logs -f affiche les logs en continu, down arrête tout et supprime le réseau."
    },
    {
      "text": "Réseaux : les conteneurs sur le même réseau défini par l'utilisateur se joignent par nom de service (`db:5432`), sans exposer de ports entre eux.",
      "explain_dr": "Containers f nafs réseau: kayhdro b smiyat service (db:5432) bla may7tajou ports m7loula binathom.",
      "example": "services:\n  app:\n    networks: [mynet]\n  db:\n    networks: [mynet] -- app reaches db at db:5432",
      "q": "Comment l'appli atteint-elle la base de données dans l'exemple ?",
      "a": "Les deux sont sur le réseau mynet, donc l'appli se connecte au conteneur db simplement via db:5432 — par nom de service, sans ports exposés entre eux."
    },
    {
      "text": "Les healthchecks (`HEALTHCHECK CMD curl -f http://localhost/health`) permettent à compose/orchestrateurs de redémarrer les conteneurs qui ne répondent plus.",
      "explain_dr": "HEALTHCHECK: ila lcontainer mab9ach kayjawb, l'orchestrateur kayredémarrih bo7dha.",
      "example": "HEALTHCHECK CMD curl -f http://localhost/health || exit 1 -- orchestrator restarts unhealthy containers",
      "q": "Que fait le HEALTHCHECK d'exemple ?",
      "a": "Il interroge le endpoint /health du conteneur ; en cas d'échec, l'orchestrateur redémarre le conteneur malade."
    },
    {
      "text": "Le tag `latest` est mutable — épinglez les versions comme `node:20-alpine` pour que votre build d'aujourd'hui égale celui dans six mois.",
      "explain_dr": "latest kaytbddel — épingle version b7al node:20-alpine bach build dyal lyoum = build dyal ghdda.",
      "example": "FROM node:20-alpine -- pinned, reproducible\n-- avoid FROM node:latest -- the mutable tag breaks builds over time",
      "q": "Pourquoi le `FROM node:20-alpine` de l'exemple est-il meilleur que `FROM node:latest` ?",
      "a": "latest est mutable — un rebuild des mois plus tard pourrait tirer une autre version de Node et casser ; les tags épinglés sont reproductibles."
    },
    {
      "text": "Les images basées sur Alpine sont minuscules mais utilisent musl libc — certains modules Node natifs cassent ; testez avant de vous y engager.",
      "explain_dr": "Alpine sghir walakin musl libc — ba3d modules natifs dyal Node kaytksrou; jerreb 9bel.",
      "example": "FROM node:20-alpine -- tiny, but musl libc: native modules may fail\n-- test with npm ci && npm test before committing to alpine",
      "q": "Quel risque l'exemple signale-t-il avec node:20-alpine ?",
      "a": "Alpine utilise musl libc, donc certains modules Node natifs peuvent échouer — lancez npm ci && npm test avant d'adopter alpine."
    },
    {
      "text": "`docker system prune` récupère le disque des conteneurs arrêtés, images orphelines et réseaux inutilisés — lancez-le quand la VM se remplit.",
      "explain_dr": "system prune: kayn9i disk mn containers w images lmaytin — dirha ila t3emmer l'espace.",
      "example": "docker system prune -- reclaims space from stopped containers and dangling images",
      "q": "Qu'est-ce que la commande d'exemple récupère ?",
      "a": "De l'espace disque : conteneurs arrêtés, images pendantes et réseaux inutilisés — à lancer quand la VM se remplit."
    },
    {
      "text": "Les bind mounts (`-v ./src:/app/src`) synchronisent le code de l'hôte dans le conteneur — idéal pour le hot-reload en dev local.",
      "explain_dr": "Bind mount: code dyal l'hôte kaytsynkna m3a container — mitali l hot-reload f dev.",
      "example": "docker run -v ./src:/app/src myapp -- host edits appear instantly in the container",
      "q": "Qu'est-ce que l'exemple permet pour le développement local ?",
      "a": "Les modifications de ./src sur l'hôte apparaissent instantanément dans le conteneur — idéal pour le hot reload en dev."
    },
    {
      "text": "`COPY` vs `ADD` : préférez `COPY` ; `ADD` extrait aussi les tarballs et télécharge des URLs, ce qui rend les builds imprévisibles.",
      "explain_dr": "COPY ghir katnsakh; ADD katdir 7wayj zyada (tar, URLs) — COPY hiya l'aslam dima.",
      "example": "COPY app /app -- prefer this\n-- ADD fetches URLs and extracts tarballs: surprising, avoid it",
      "q": "Pourquoi l'exemple dit-il de préférer COPY ?",
      "a": "ADD extrait aussi les tarballs et télécharge les URLs, ce qui rend les builds surprenants ; COPY se contente de copier des fichiers."
    },
    {
      "text": "Exécutez en non-root : `USER node` dans le Dockerfile limite les dégâts si l'appli est compromise.",
      "explain_dr": "USER node: khddm lapp bla root — ila t-hackat lapp, d-darar kaykoun mahdoud.",
      "example": "USER node -- run as non-root, limits damage if the app is compromised",
      "q": "Contre quoi le `USER node` de l'exemple protège-t-il ?",
      "a": "L'exécution en root : si l'appli est compromise, un utilisateur non-root limite les dégâts."
    },
    {
      "text": "Un conteneur s'arrête quand son processus principal s'arrête — c'est pourquoi `CMD [\"nginx\", \"-g\", \"daemon off;\"]` lance nginx au premier plan.",
      "explain_dr": "Container kaymout ila mat lprocess r2issi — 3lach nginx khassou ykhdm f foreground (daemon off).",
      "example": "CMD [\"node\", \"server.js\"] -- container exits when node exits\n-- so run the real service as the main process, not a background daemon",
      "q": "Pourquoi l'exemple lance-t-il nginx au premier plan (`daemon off;`) ?",
      "a": "Un conteneur s'arrête quand son processus principal s'arrête — nginx doit être le processus principal au premier plan sinon le conteneur s'éteint aussitôt."
    },
    {
      "text": "Les limites de ressources (`--memory 512m --cpus 1` ou `deploy.resources` dans compose) empêchent un conteneur gourmand d'affamer l'hôte.",
      "explain_dr": "Limites (--memory, --cpus): kaymn3ou container wa7ed tmma3 yakol ga3 ressources dyal l'hôte.",
      "example": "docker run --memory 512m --cpus 1 myapp -- one greedy container can't starve the host",
      "q": "Que protège l'exemple ?",
      "a": "L'hôte : --memory 512m --cpus 1 plafonne le conteneur pour qu'un conteneur gourmand n'affame pas tout le reste."
    }
  ],
  "Supabase": [
  {
    "text": "Supabase est un backend-as-a-service open-source : base Postgres, authentification, stockage, realtime et edge functions derrière une seule bibliothèque cliente.",
    "explain_dr": "Supabase kat3tik backend kaml: database, auth, storage, realtime... bla ma tkteb server.",
    "example": "import { createClient } from '@supabase/supabase-js';\nconst supabase = createClient(URL, ANON_KEY);",
    "q": "À quels éléments backend le client supabase unique donne-t-il accès ?",
    "a": "La base de données Postgres, l'authentification, le stockage de fichiers, les abonnements realtime et les edge functions — le tout via une seule instance cliente."
  },
  {
    "text": "En interne, Supabase est du PostgreSQL géré — on dispose de vraies tables SQL, de clés étrangères et d'extensions Postgres.",
    "explain_dr": "Supabase machi database jdida — hiya Postgres m-gérée, b SQL 7a9i9i.",
    "example": "create table todos (\n  id bigint generated always as identity primary key,\n  title text not null\n);",
    "q": "Pourquoi est-ce important que Supabase soit « juste du Postgres » ?",
    "a": "Parce qu'on peut utiliser le SQL standard, les clés étrangères et les extensions Postgres — les données restent portables et pleinement relationnelles."
  },
  {
    "text": "Créez le client une fois avec createClient(projectUrl, anonKey) et réutilisez-le partout dans l'app.",
    "explain_dr": "createClient kat-tsayb b URL w anon key, w kat-3awed t-sta3mel nafs l instance f app kamla.",
    "example": "export const supabase = createClient(\n  import.meta.env.VITE_SUPABASE_URL,\n  import.meta.env.VITE_SUPABASE_ANON_KEY\n);",
    "q": "Quels deux arguments createClient() exige-t-il ?",
    "a": "L'URL du projet et la clé anon (publique) — généralement lues depuis les variables d'environnement."
  },
  {
    "text": "Ne jamais coder les clés en dur : avec Vite, seules les variables préfixées par VITE_ sont exposées au navigateur via import.meta.env.",
    "explain_dr": "Ma t-ktebch keys nichan f code — 7ethom f .env b prefix VITE_.",
    "example": "VITE_SUPABASE_URL=https://xyz.supabase.co\nVITE_SUPABASE_ANON_KEY=eyJ...",
    "q": "Pourquoi les variables doivent-elles commencer par VITE_ ?",
    "a": "Vite n'expose au code client via import.meta.env que les variables d'environnement préfixées par VITE_."
  },
  {
    "text": "Chaque requête résout { data, error } : data contient les lignes, error vaut null en cas de succès — toujours le vérifier.",
    "explain_dr": "Kol query kat-rja3 { data, error } — dayman verifi error 9bel ma t-sta3mel data.",
    "example": "const { data, error } = await supabase.from('todos').select();\nif (error) console.error(error.message);",
    "q": "Dans l'exemple, comment sait-on que la requête a échoué ?",
    "a": "L'objet error est non-null — en cas de succès error vaut null et data contient les lignes."
  },
  {
    "text": "Filtrez les lignes avec .eq('colonne', valeur) — et chaînez .neq(), .gt(), .lt(), .like(), .ilike(), .in() pour d'autres comparaisons.",
    "explain_dr": ".eq() kat-filtri rows; kaynin methods khrin b7al gt, lt, ilike l comparisons lokhrin.",
    "example": "await supabase.from('todos').select().eq('done', false);",
    "q": "Que retourne l'exemple ?",
    "a": "Uniquement les lignes dont la colonne done vaut false — .eq() garde les lignes où la colonne égale la valeur."
  },
  {
    "text": "Mettez en forme les résultats avec .order('created_at', { ascending: false }), .limit(n) et .range(de, à) — les bornes de range sont inclusives.",
    "explain_dr": "order/limit/range kat-nedmo natija; range inclusive mn joj jihat.",
    "example": "await supabase.from('todos').select()\n  .order('id').range(0, 9); // 10 premières lignes",
    "q": "Combien de lignes .range(0, 9) retourne-t-il, et pourquoi ?",
    "a": "10 lignes — les ranges PostgREST sont inclusives des deux côtés, donc les index 0 à 9."
  },
  {
    "text": ".insert() prend un objet ou un tableau d'objets et retourne la ou les lignes insérées.",
    "explain_dr": ".insert() kat-zid row wla bzaf, w kat-rja3 rows li tzado.",
    "example": "const { data } = await supabase\n  .from('todos').insert({ title: 'Buy milk' });\n// data: [ { id: 1, title: 'Buy milk', ... } ]",
    "q": "Que contient data après l'insert ?",
    "a": "Un tableau avec le ou les objets lignes nouvellement insérés, y compris les champs générés comme id."
  },
  {
    "text": ".update({...}) doit être associé à un filtre comme .eq() — sinon il touche toutes les lignes.",
    "explain_dr": ".update() khaso filter m3ah, bla filter ghadi y-bedel kolchi.",
    "example": "await supabase.from('todos')\n  .update({ done: true }).eq('id', 7);",
    "q": "Quelles lignes l'exemple met-il à jour ?",
    "a": "Uniquement la ligne avec id 7 — le filtre .eq('id', 7) limite la mise à jour à cette ligne."
  },
  {
    "text": ".delete() a aussi besoin d'un filtre : .delete().eq('id', 9) ne supprime que cette ligne.",
    "explain_dr": ".delete() b filter kat-msa7 ghir rows li kay-tab9o chart.",
    "example": "await supabase.from('todos').delete().eq('id', 9);",
    "q": "Que se passerait-il si vous appeliez .delete() sans filtre ?",
    "a": "Il tenterait de supprimer toutes les lignes de la table — toujours limiter les suppressions avec un filtre comme .eq()."
  },
  {
    "text": ".single() attend exactement une ligne et retourne un objet ; .maybeSingle() retourne null au lieu d'une erreur quand il y a zéro ligne.",
    "explain_dr": ".single() kat-tsenna row wa7da; .maybeSingle() kat-rja3 null melli ma kayn walo bla error.",
    "example": "const { data } = await supabase.from('profiles')\n  .select().eq('id', 1).single();\n// data est un objet, pas un tableau",
    "q": "La requête ne correspond à aucune ligne. En quoi .single() et .maybeSingle() diffèrent-ils ?",
    "a": ".single() retourne une erreur (0 ligne), tandis que .maybeSingle() retourne { data: null, error: null }."
  },
  {
    "text": ".upsert(données, { onConflict: 'id' }) insère la ligne, ou la met à jour quand la colonne de conflit existe déjà.",
    "explain_dr": "upsert = insert wla update ila row mojoud deja 3la 7sab onConflict.",
    "example": "await supabase.from('profiles')\n  .upsert({ id: 1, username: 'aymane' }, { onConflict: 'id' });",
    "q": "Un profil avec id 1 existe déjà. Que fait l'exemple ?",
    "a": "Il met à jour la ligne existante au lieu d'insérer un doublon, car l'id 1 est en conflit."
  },
  {
    "text": "Obtenez un nombre de lignes sans récupérer les lignes : .select('*', { count: 'exact' }) — le count revient avec data.",
    "explain_dr": "count: 'exact' kat-7seb ch7al mn row bla ma tjib data kamla.",
    "example": "const { count } = await supabase\n  .from('todos').select('*', { count: 'exact' });",
    "q": "Que contient count ?",
    "a": "Le nombre total de lignes correspondant à la requête — indépendamment de limit/range."
  },
  {
    "text": "Suivez les clés étrangères en une requête : .select('id, title, profiles ( username )') imbrique la ligne liée.",
    "explain_dr": "Kat-tb3 foreign key f nafs query w kat-jib data dyal table li mratbta.",
    "example": "const { data } = await supabase.from('todos')\n  .select('id, title, profiles ( username )');\n// todo.profiles.username",
    "q": "Qu'ajoute profiles ( username ) à chaque todo ?",
    "a": "Un objet profiles imbriqué avec le username du profil lié, joint via la clé étrangère."
  },
  {
    "text": "Essentiels d'auth : signUp() crée un utilisateur, signInWithPassword() le connecte, signOut() efface la session.",
    "explain_dr": "signUp kat-cree compte, signInWithPassword kat-dkhel, signOut kat-khrej.",
    "example": "await supabase.auth.signUp({ email, password });\nawait supabase.auth.signInWithPassword({ email, password });\nawait supabase.auth.signOut();",
    "q": "Laquelle des trois crée un tout nouveau compte ?",
    "a": "signUp() — les deux autres connectent ou déconnectent un utilisateur existant."
  },
  {
    "text": "getSession() lit la session stockée localement ; getUser() re-valide le JWT auprès du serveur Auth — préférez getUser() pour les contrôles de sécurité.",
    "explain_dr": "getUser() kat-verifi token m3a server, a7san l security mn 9raya mn localStorage.",
    "example": "const { data: { user } } = await supabase.auth.getUser();",
    "q": "Pourquoi getUser() est-il plus sûr que de faire confiance à la session stockée ?",
    "a": "Il demande au serveur Supabase Auth de valider le token : les tokens falsifiés ou révoqués sont donc rejetés."
  },
  {
    "text": "Réagissez aux changements d'auth avec onAuthStateChange() — il retourne un abonnement à désinscrire au démontage.",
    "explain_dr": "onAuthStateChange kat-sme3 l login/logout; ma tnsach unsubscribe melli component yt7eyed.",
    "example": "const { data: { subscription } } =\n  supabase.auth.onAuthStateChange((event, session) => {});\n// nettoyage : subscription.unsubscribe();",
    "q": "Que faut-il faire de subscription quand le composant se démonte ?",
    "a": "Appeler subscription.unsubscribe() pour retirer l'écouteur et éviter toute fuite."
  },
  {
    "text": "Row Level Security : quand il est activé sur une table sans politiques, TOUT accès est refusé — vous devez écrire des politiques pour l'ouvrir.",
    "explain_dr": "RLS bla policies = kolchi msdoud. Khassek t-kteb policies bach t-7ell.",
    "example": "alter table todos enable row level security;",
    "q": "Vous avez activé RLS sans écrire de politiques, et .select() ne retourne rien. Est-ce un bug ?",
    "a": "Non — c'est le défaut sécurisé : avec RLS activé et zéro politique, chaque ligne est cachée jusqu'à ce qu'une politique l'autorise."
  },
  {
    "text": "Les politiques utilisent USING pour filtrer les lignes existantes (SELECT/UPDATE/DELETE) et WITH CHECK pour valider les lignes nouvellement écrites (INSERT/UPDATE).",
    "explain_dr": "USING l rows li kaynin, WITH CHECK l rows jdad li ghadi yt-ktbo.",
    "example": "create policy \"insert_own\" on todos for insert\nwith check (auth.uid() = user_id);",
    "q": "Pourquoi une politique INSERT utilise-t-elle WITH CHECK plutôt que USING ?",
    "a": "Parce qu'il n'y a pas encore de ligne existante à filtrer — WITH CHECK valide la nouvelle ligne écrite."
  },
  {
    "text": "auth.uid() dans une politique retourne l'UUID de l'utilisateur actuellement connecté — la clé de l'isolation des données par utilisateur.",
    "explain_dr": "auth.uid() kat-rja3 id dyal user li dayer login — biha kat-freq data dyal kol wa7ed.",
    "example": "create policy \"own_rows\" on todos for select\nusing (auth.uid() = user_id);",
    "q": "Qu'autorise l'exemple de politique ?",
    "a": "La lecture uniquement des lignes dont user_id correspond à l'id de l'utilisateur connecté."
  },
  {
    "text": "Uploadez des fichiers avec storage.from('bucket').upload(chemin, fichier) — cela échoue si le fichier existe, sauf si vous passez { upsert: true }.",
    "explain_dr": "upload kat-fail ila file mojoud, 7ta t-golih upsert: true.",
    "example": "await supabase.storage.from('avatars')\n  .upload('me.png', file, { upsert: true });",
    "q": "Le fichier me.png existe déjà et vous omettez les options. Que se passe-t-il ?",
    "a": "L'upload échoue avec une erreur « déjà existant » — upsert vaut false par défaut."
  },
  {
    "text": "getPublicUrl() construit une URL publique localement (sans vérification d'existence) ; createSignedUrl(chemin, secondes) donne une URL temporaire pour les buckets privés.",
    "explain_dr": "getPublicUrl l public bla verification; createSignedUrl kat-3ti URL mo2a9at l private files.",
    "example": "supabase.storage.from('avatars').getPublicUrl('me.png');\nawait supabase.storage.from('docs').createSignedUrl('c.pdf', 120);",
    "q": "Quand utiliser createSignedUrl() plutôt que getPublicUrl() ?",
    "a": "Pour les fichiers d'un bucket privé — il génère une URL valable seulement 120 secondes au lieu d'exposer le fichier publiquement."
  },
  {
    "text": "Realtime : supabase.channel().on('postgres_changes', { event, schema, table }, cb).subscribe() — et la table doit être ajoutée à la publication supabase_realtime.",
    "explain_dr": "Realtime b channel + postgres_changes; table khasha t-tzad l publication.",
    "example": "supabase.channel('room')\n  .on('postgres_changes',\n    { event: 'INSERT', schema: 'public', table: 'todos' },\n    (p) => console.log(p.new))\n  .subscribe();\n-- alter publication supabase_realtime add table todos;",
    "q": "Votre abonnement ne reçoit rien. Quelle étape SQL manque peut-être ?",
    "a": "L'ajout de la table à la publication supabase_realtime — sans cela Postgres ne transmet jamais les changements."
  },
  {
    "text": "Appelez des fonctions Postgres avec rpc('nom_fonction', { arg: valeur }) — idéal pour la logique qui vit près des données.",
    "explain_dr": "rpc() kat-3yet l Postgres functions b arguments.",
    "example": "const { data } = await supabase\n  .rpc('get_top_products', { limit_count: 5 });",
    "q": "Que fait rpc() ?",
    "a": "Il exécute la fonction Postgres get_top_products avec les arguments donnés et retourne son résultat."
  },
  {
    "text": "Les Edge Functions (serverless Deno) s'invoquent avec functions.invoke('nom', { body }) ; la clé anon est publique, tandis que service_role contourne RLS et doit rester côté serveur.",
    "explain_dr": "Edge Functions b functions.invoke; anon key public, service_role ghir f server 7it kat-jawz RLS.",
    "example": "await supabase.functions.invoke('send-email', { body: { to } });\n// NEVER expose the service_role key in the browser",
    "q": "Pourquoi la clé service_role ne doit-elle jamais apparaître dans le code frontend ?",
    "a": "Elle contourne toutes les politiques RLS — quiconque la possède obtient un accès lecture/écriture illimité à toute la base."
  }
  ],
  "ExpressJs": [
    {
      "text": "Express est un framework web minimaliste pour Node.js permettant de construire des serveurs et des API REST avec routage et middlewares.",
      "explain_dr": "Express howa framework khfif dyal Node.js bach t-sna3 servers w APIs b routing w middleware.",
      "example": "const express = require('express');\nconst app = express();\napp.listen(3000);",
      "q": "Dans l'exemple, quelles sont les trois étapes pour lancer un serveur Express basique ?",
      "a": "Requérir express, créer l'app avec express(), puis la démarrer avec app.listen(3000) pour accepter les requêtes sur le port 3000."
    },
    {
      "text": "app.listen(PORT) démarre le serveur HTTP ; sans lui, l'application n'accepte jamais de requêtes.",
      "explain_dr": "app.listen() bih server kay-bda y-sta9bel requests — bla bih app katb9a ghir code.",
      "example": "const PORT = process.env.PORT || 3000;\napp.listen(PORT);",
      "q": "Pourquoi lire le port depuis process.env.PORT avec un repli ?",
      "a": "Les plateformes d'hébergement attribuent le port via une variable d'environnement, l'application doit donc le lire ; le repli garde le développement local sur 3000."
    },
    {
      "text": "Les routes associent une méthode HTTP à un chemin : app.get/post/put/delete('/chemin', gestionnaire).",
      "explain_dr": "Route kat-jma3 HTTP method m3a path — nafs path y9der y-kon 3ndo methods mokhtalfin.",
      "example": "app.get('/users', listUsers);\napp.post('/users', createUser);",
      "q": "Dans l'exemple, quel gestionnaire s'exécute pour POST /users ?",
      "a": "createUser — Express fait correspondre la méthode et le chemin, donc GET et POST vers /users sont des routes distinctes."
    },
    {
      "text": "Les gestionnaires de route reçoivent (req, res) : req décrit la requête entrante, res construit la réponse sortante.",
      "explain_dr": "req fih li ja mn client, res bih kat-sift jawab — jojhom dayman bjoj f handler.",
      "example": "app.get('/hi', (req, res) => {\n  res.send('hello');\n});",
      "q": "Quel objet inspecter pour lire l'URL de la requête, et lequel pour envoyer la réponse ?",
      "a": "Inspectez req pour les détails de la requête entrante (URL, en-têtes, params) ; utilisez res pour envoyer la réponse."
    },
    {
      "text": "res.send() envoie une chaîne (en text/html) ou un objet (en JSON) ; res.json() envoie toujours du JSON.",
      "explain_dr": "res.send kat-detecti type dyal data, res.json dayman kat-sift JSON.",
      "example": "res.send('Hello');        // text/html\nres.json({ ok: true });  // application/json",
      "q": "Quel Content-Type chaque ligne de l'exemple produit-elle ?",
      "a": "res.send('Hello') produit text/html ; res.json({ ok: true }) produit application/json."
    },
    {
      "text": "Enchaînez res.status(code) avant l'envoi pour définir le statut HTTP : 200 OK, 201 Created, 404 Not Found, 500 Error.",
      "explain_dr": "res.status() kat-khlik t-7dded status code 9bel ma t-sift response.",
      "example": "res.status(201).json(newUser); // created",
      "q": "Dans l'exemple, quel code de statut le client reçoit-il et que signifie-t-il ?",
      "a": "201, ce qui signifie qu'une nouvelle ressource a été créée avec succès."
    },
    {
      "text": "Les paramètres de route (:id) capturent des segments du chemin dans req.params — toujours sous forme de chaînes.",
      "explain_dr": "Params dyal path b7al :id kay-tjm3o f req.params, dayman strings.",
      "example": "app.get('/users/:id', (req, res) => {\n  res.json({ id: req.params.id }); // '42'\n});",
      "q": "Pour GET /users/42, que renvoie l'exemple ?",
      "a": "{ id: '42' } — la valeur du paramètre est la chaîne '42', pas le nombre 42."
    },
    {
      "text": "Les query strings (?clé=valeur) arrivent dans req.query ; les clés répétées deviennent des tableaux.",
      "explain_dr": "Li mn ba3d ? f URL kay-mchi l req.query, w key li t-3awed kat-wli array.",
      "example": "// GET /search?q=phone&page=2\nconst { q, page } = req.query; // 'phone', '2'",
      "q": "Dans l'exemple, quelles sont les valeurs et les types de q et page ?",
      "a": "q est la chaîne 'phone' et page la chaîne '2' — les valeurs de requête sont toujours des chaînes."
    },
    {
      "text": "Sans middleware d'analyse du corps, req.body est undefined ; ajoutez app.use(express.json()) pour les corps JSON.",
      "explain_dr": "Bla express.json(), req.body undefined — Express ma kay-parse-ich body bo7do.",
      "example": "app.use(express.json()); // before routes\napp.post('/users', (req, res) => {\n  console.log(req.body.name);\n});",
      "q": "Pourquoi app.use(express.json()) doit-il venir avant la route ?",
      "a": "Parce que les middlewares s'exécutent dans l'ordre d'enregistrement — le corps doit être analysé avant que le gestionnaire ne lise req.body."
    },
    {
      "text": "Utilisez express.urlencoded({ extended: true }) pour analyser les soumissions de formulaires HTML dans req.body.",
      "explain_dr": "Forms dyal HTML kay-sifto format akhor mn JSON — khashom middleware dyalhom.",
      "example": "app.use(express.urlencoded({ extended: true }));",
      "q": "Un formulaire envoie username=sara. Après ce middleware, où lire 'sara' ?",
      "a": "Dans req.body.username — le middleware analyse le corps encodé du formulaire dans req.body."
    },
    {
      "text": "Les middlewares sont des fonctions (req, res, next) exécutées dans l'ordre d'enregistrement ; appelez next() pour continuer la chaîne.",
      "explain_dr": "Middleware kat-khdem b tartib tssjil — next() hiya li kat-dfe3 request l 9ddam.",
      "example": "app.use((req, res, next) => {\n  console.log(req.method, req.path);\n  next(); // continue\n});",
      "q": "Qu'arrive-t-il à la requête si next() n'est jamais appelé et qu'aucune réponse n'est envoyée ?",
      "a": "Elle reste bloquée jusqu'au timeout — rien en aval ne s'exécute."
    },
    {
      "text": "app.use('/chemin', fn) limite un middleware à un préfixe de chemin : il s'exécute pour /chemin et tout ce qu'il contient.",
      "explain_dr": "app.use m3a path kat-chedd l path w ga3 li ta7to, l ga3 HTTP methods.",
      "example": "app.use('/admin', checkAuth); // /admin, /admin/users, ...",
      "q": "checkAuth s'exécute-t-il pour GET /admin/users ? Pour POST /admin ?",
      "a": "Oui aux deux — app.use avec un chemin correspond au préfixe et à tous les sous-chemins, pour chaque méthode HTTP."
    },
    {
      "text": "Une route peut prendre plusieurs gestionnaires ; chacun doit appeler next() (ou terminer la réponse) pour que le suivant s'exécute.",
      "explain_dr": "Route wa7da t9der y-kon 3ndha bzaf handlers — lwl khaso y-3ayet l next().",
      "example": "app.get('/dash', auth, (req, res) => {\n  res.send('welcome');\n});",
      "q": "Dans l'exemple, quand le gestionnaire final s'exécute-t-il ?",
      "a": "Seulement après que auth a appelé next() — sinon la requête s'arrête au middleware auth."
    },
    {
      "text": "express.Router() regroupe des routes liées ; montez-le avec app.use('/préfixe', router).",
      "explain_dr": "Router kat-jma3 routes li 3ndhom 3ala9a — app.use kat-zidhom prefix.",
      "example": "const r = express.Router();\nr.get('/users', list);\napp.use('/api', r); // GET /api/users",
      "q": "Dans l'exemple, quel chemin complet atteint le gestionnaire list ?",
      "a": "GET /api/users — le préfixe de montage /api est ajouté devant le /users du routeur."
    },
    {
      "text": "Servez des fichiers statiques avec app.use(express.static('public')) — /style.css correspond à public/style.css.",
      "explain_dr": "express.static kat-khali server y-sift files nichan bla routes.",
      "example": "app.use(express.static('public'));",
      "q": "Un client demande /logo.png et public/logo.png existe. Que se passe-t-il ?",
      "a": "Express sert le fichier directement avec le bon Content-Type ; aucun gestionnaire de route n'est nécessaire."
    },
    {
      "text": "Enregistrez un attrape-tout 404 APRÈS toutes les routes : app.use((req, res) => res.status(404).send(...)).",
      "explain_dr": "404 handler khaso y-kon f lkher — kay-chedd ghir li ma cheddo 7ta route.",
      "example": "app.use((req, res) => {\n  res.status(404).json({ error: 'Not found' });\n});",
      "q": "Que casse-t-on si on l'enregistre avant les routes API ?",
      "a": "Chaque requête atteint l'attrape-tout en premier, donc toutes les routes API renvoient 404 — l'ordre d'enregistrement décide."
    },
    {
      "text": "Un middleware de gestion d'erreur a QUATRE paramètres : (err, req, res, next) — Express le détecte par son arité.",
      "explain_dr": "Error handler kat-3rfo Express mn 4 parameters — lwl howa err.",
      "example": "app.use((err, req, res, next) => {\n  console.error(err);\n  res.status(500).json({ error: 'Server error' });\n});",
      "q": "Dans l'exemple, comment Express sait-il qu'il s'agit d'un gestionnaire d'erreur et non d'un middleware normal ?",
      "a": "Par ses quatre paramètres — Express traite tout middleware avec la signature (err, req, res, next) comme un gestionnaire d'erreur."
    },
    {
      "text": "Transmettez les erreurs avec next(err) ; le middleware d'erreur doit être enregistré APRÈS les routes qui peuvent échouer.",
      "explain_dr": "next(err) kat-sift error l error handlers — w khashom y-kono mn b3d routes.",
      "example": "app.get('/x', (req, res, next) => {\n  try { risky(); } catch (e) { next(e); }\n});",
      "q": "Pourquoi envelopper risky() dans try/catch et appeler next(e) ?",
      "a": "Pour qu'une erreur levée atteigne le gestionnaire d'erreurs centralisé au lieu de planter ou de bloquer la requête."
    },
    {
      "text": "En Express 4, les promesses rejetées dans les gestionnaires async ne sont PAS attrapées automatiquement — utilisez try/catch + next(err).",
      "explain_dr": "F Express 4, async errors ma kay-tchddoch bo7dhom — khask t-cheddhom b yeddek.",
      "example": "app.get('/d', async (req, res, next) => {\n  try {\n    res.json(await db.query('SELECT 1'));\n  } catch (e) { next(e); }\n});",
      "q": "Que se passe-t-il sans le try/catch si db.query est rejetée ?",
      "a": "La requête reste bloquée et Node émet un rejet de promesse non géré — le gestionnaire d'erreur ne le voit jamais."
    },
    {
      "text": "res.redirect('/new') envoie un 302 demandant au navigateur de demander la nouvelle URL.",
      "explain_dr": "res.redirect kat-gol l browser y-mchi l URL akhra — default 302.",
      "example": "app.get('/old', (req, res) => res.redirect('/new'));",
      "q": "Dans l'exemple, le serveur rend-il lui-même /new ?",
      "a": "Non — il répond 302 et le navigateur fait une toute nouvelle requête vers /new."
    },
    {
      "text": "app.route('/users') enchaîne les gestionnaires de méthodes pour un seul chemin : .get().post().put().delete().",
      "explain_dr": "app.route kat-jma3 ga3 methods dyal nafs path f blassa wa7da.",
      "example": "app.route('/users')\n  .get(listUsers)\n  .post(createUser);",
      "q": "Quel est l'avantage de l'exemple par rapport à deux lignes app.get/app.post séparées ?",
      "a": "Il regroupe tous les gestionnaires de /users dans une seule chaîne, donc le chemin partagé n'est déclaré qu'une fois et reste cohérent."
    },
    {
      "text": "Validez les entrées non fiables dans un middleware ou le gestionnaire AVANT de toucher la base de données — ne faites jamais confiance à req.body.",
      "explain_dr": "Data dyal client ma t-tiqch fiha — verifiha 9bel ma t-sta3melha.",
      "example": "app.post('/users', (req, res) => {\n  if (!req.body.email) return res.status(400).json({ error: 'email required' });\n  // ...save\n});",
      "q": "Dans l'exemple, pourquoi renvoyer immédiatement la réponse 400 ?",
      "a": "Pour rejeter l'entrée invalide avant tout travail en base de données, et return empêche le gestionnaire de continuer."
    },
    {
      "text": "helmet définit des en-têtes HTTP sécurisés sur chaque réponse, durcissant l'application contre des attaques connues.",
      "explain_dr": "helmet kat-zid headers dyal security l kol response.",
      "example": "const helmet = require('helmet');\napp.use(helmet());",
      "q": "Dans l'exemple, contre quoi helmet() protège-t-il en termes généraux ?",
      "a": "Les attaques web courantes qui exploitent des en-têtes de sécurité HTTP manquants ou faibles, comme le reniflage MIME et le clickjacking."
    },
    {
      "text": "cors permet aux navigateurs d'appeler votre API depuis une autre origine en envoyant des en-têtes Access-Control.",
      "explain_dr": "cors kat-sm7 l browsers y-3ayto l API mn origin akhra.",
      "example": "const cors = require('cors');\napp.use(cors()); // allow all origins (dev)",
      "q": "Sans cors, que se passe-t-il quand une page du site A appelle votre API du site B ?",
      "a": "Le navigateur bloque la réponse — la politique de même origine l'interdit sauf si l'API envoie des en-têtes CORS."
    },
    {
      "text": "Arrêtez proprement avec server.close() et gardez les secrets dans des variables d'environnement, jamais dans le code.",
      "explain_dr": "Sed server b chouia b server.close() — w secrets f env variables, machi f code.",
      "example": "const server = app.listen(PORT);\n// later: server.close(); // finish in-flight requests",
      "q": "Pourquoi server.close() est-il meilleur que process.exit() pour arrêter ?",
      "a": "server.close() cesse d'accepter de nouvelles connexions mais laisse finir les requêtes en cours ; process.exit() les tue en pleine réponse."
    }
  ],
  "Agile": [
{ "text": "L'agilité est une approche itérative : construire par petits incréments, recueillir du feedback, et adapter le plan.", "explain_dr": "Agile tari9a takhdem b dawrat 9sar: t-bni chwiya, t-jme3 feedback, w t-3del l plan.", "example": "Sprint 1: login page -> demo -> feedback -> Sprint 2: adjusted dashboard", "q": "Dans l'exemple, que se passe-t-il entre le Sprint 1 et le Sprint 2 ?", "a": "Une boucle de démo et de feedback — l'équipe inspecte l'incrément et adapte le plan du sprint suivant selon ce qu'elle a appris." },
{ "text": "Le Manifeste Agile a 4 valeurs : les individus et leurs interactions, le logiciel opérationnel, la collaboration client, l'adaptation au changement — chacune préférée À son pendant.", "explain_dr": "Manifesto 3ndo 4 dyal l9iyam, kol wa7da mfdala 3la mo9abil dyalha (over ma kat-3nich bala).", "example": "Working software OVER comprehensive documentation", "q": "« Un logiciel opérationnel plutôt qu'une documentation exhaustive » signifie-t-il zéro documentation ?", "a": "Non — « plutôt que » exprime une préférence, pas une élimination. On documente ce qui apporte de la valeur, mais le logiciel opérationnel passe d'abord." },
{ "text": "Scrum a 3 rôles : le Product Owner (QUOI et dans quel ordre), les développeurs (COMMENT), le Scrum Master (santé du processus, obstacles).", "explain_dr": "Scrum fih 3 dyal roles: PO kay-gol CHNO, Developers kay-golo KIFACH, SM kay-7mi l process.", "example": "PO: 'Checkout first, it earns money' / Devs: 'We'll use Stripe' / SM: unblocks API access", "q": "Dans l'exemple, qui décide de l'approche technique du paiement ?", "a": "Les développeurs — le Product Owner décide quoi construire et dans quel ordre de priorité, l'équipe décide comment le construire." },
{ "text": "Un sprint est une timebox fixe de 1 à 4 semaines qui ne se prolonge jamais ; il se termine par un incrément potentiellement livrable.", "explain_dr": "Sprint wa9t thabet 1-4 simanat ma kay-tmeddedch, w kay-sali b increment t9dar t-tlansa.", "example": "2-week sprint -> demo-able checkout flow on Friday, even if reports slipped", "q": "Le sprint se termine vendredi et les rapports ne sont pas finis. Que se passe-t-il ?", "a": "Le sprint se termine quand même vendredi — l'incrément est livré sans les rapports, et le travail inachevé retourne au backlog." },
{ "text": "La planification de sprint répond à : QUE pouvons-nous livrer (objectif + éléments choisis) et COMMENT allons-nous le faire.", "explain_dr": "Sprint Planning kat-jawb 3la joj: CHNO ghadi n-delivriw, w KIFACH ghadi n-diroha.", "example": "Goal: 'Shoppers can pay by card' / Plan: Stripe integration + checkout UI tasks", "q": "Pourquoi l'équipe fixe-t-elle un objectif de sprint au lieu de simplement choisir des stories ?", "a": "L'objectif donne un but commun et une base de décision quand les imprévus forcent des arbitrages en cours de sprint." },
{ "text": "Le Daily Standup est une synchro de 15 minutes entre pairs : ce que j'ai fait, ce que je vais faire, ce qui me bloque. Pas un reporting aux managers.", "explain_dr": "Daily 15 d9i9a bin l team: chno dert, chno ghadi n-dir, chno 7abesni — machi rapport l manager.", "example": "'Yesterday: cart API. Today: checkout UI. Blocker: waiting on Stripe keys.'", "q": "Un manager demande à chacun un rapport d'avancement détaillé pendant le Daily. Qu'est-ce qui cloche ?", "a": "Ce n'est plus une synchro entre pairs mais une réunion de reporting — le format dépasse sa timebox de 15 minutes et son objectif." },
{ "text": "La revue de sprint inspecte l'incrément terminé AVEC les parties prenantes et collecte du feedback qui alimente le backlog.", "explain_dr": "Sprint Review kat-werri l increment l stakeholders w kat-jme3 feedback li kay-dkhol l backlog.", "example": "Demo checkout -> stakeholder: 'add Apple Pay' -> new backlog item", "q": "Dans l'exemple, où va la demande d'Apple Pay ?", "a": "Dans le Product Backlog, où le Product Owner la priorise par rapport au reste pour un sprint ultérieur." },
{ "text": "La rétrospective de sprint examine COMMENT l'équipe a travaillé et doit produire au moins une amélioration actionnable pour le sprint suivant.", "explain_dr": "Retro kat-na9ech tari9a dyal l khadma w lazem t-khrej b ta7sin 3amali wa7ed 3la l a9al.", "example": "'PRs wait 2 days' -> experiment: 'review within 4h next sprint'", "q": "Une rétro se termine par une bonne discussion mais aucune action. Qu'est-ce qui a raté ?", "a": "Son objectif — l'amélioration continue exige au moins une expérience concrète à tenter au sprint suivant." },
{ "text": "Le Product Backlog est une liste unique et ordonnée de tout ce dont le produit pourrait avoir besoin ; le Product Owner en possède l'ordre.", "explain_dr": "Product Backlog lista wa7da mratba dyal kolchi li l produit y9dar y-7taj; PO howa l mas2ol 3la tartibha.", "example": "1. Card payments  2. Apple Pay  3. Dark mode  4. Gift cards", "q": "Pourquoi faut-il exactement un backlog ordonné par produit, même avec trois équipes ?", "a": "Pour garder des priorités unifiées — des backlogs séparés feraient tirer les équipes dans des directions contradictoires sans source unique de vérité." },
{ "text": "Le Sprint Backlog = les éléments tirés pour le sprint plus le plan des développeurs pour les livrer ; seuls les développeurs le modifient.", "explain_dr": "Sprint Backlog = stories dyal sprint + plan dyal Developers; ghir Developers li kay-bdloh.", "example": "Sprint Backlog: [card payments, receipt email] + task breakdown", "q": "Le Product Owner peut-il ajouter une story au Sprint Backlog en cours de sprint ?", "a": "Non — le périmètre du sprint est l'engagement des développeurs ; les nouvelles demandes passent par le Product Owner vers le Product Backlog." },
{ "text": "Une user story suit : En tant que [rôle], je veux [objectif], afin de [bénéfice] — plus des critères d'acceptation.", "explain_dr": "User story format: As a [role], I want [goal], so that [benefit] + choro6 l 9obol.", "example": "As a shopper, I want to pay by card, so that I can check out quickly.\nAC: Given a valid card, when I pay, then I see a confirmation.", "q": "Qu'apportent les critères d'acceptation que la phrase de la story n'a pas ?", "a": "Des conditions testables définissant exactement quand la story compte comme acceptée — le contrat Given/When/Then du « terminé » pour cette story." },
{ "text": "INVEST : une bonne story est Indépendante, Négociable, Valable, Estimable, Petite (Small), Testable.", "explain_dr": "INVEST = story mzyana: mosta9illa, 9abila l ni9ach, fiha 9ima, t9dar t-t9der, sghira, t9dar t-tester.", "example": "'As a user I want the whole app' -> NOT INVEST (not small, not testable)", "q": "Pourquoi la story de l'exemple échoue-t-elle à INVEST ?", "a": "Elle n'est ni petite ni testable — « toute l'app » ne tient pas dans un sprint et n'a pas de critères de vérification clairs, il faut donc la découper." },
{ "text": "Un epic est un gros ensemble de travail découpé en stories plus petites ; une story doit tenir dans un sprint.", "explain_dr": "Epic khadma kbira kat-t9ssem l stories sghar; story lazem t-dkhol f sprint wa7ed.", "example": "Epic: Payments -> stories: card pay, Apple Pay, refunds, receipts", "q": "Un epic est estimé à 40 points et votre vélocité est de 25. Que faire ?", "a": "Le découper — aucune story ne devrait dépasser ce qui tient dans un sprint ; chaque story découpée doit toujours apporter de la valeur." },
{ "text": "Les critères d'acceptation sont propres à une story ; la Definition of Done est une checklist qualité d'équipe pour chaque incrément.", "explain_dr": "AC khasin b story wa7da; DoD checklist dyal l jawda 3amma 3la kol increment.", "example": "DoD: code reviewed + tests pass + deployed to staging + docs updated", "q": "Tous les critères d'acceptation passent mais le code n'a pas été relu. La story est-elle terminée ?", "a": "Non — la Definition of Done s'applique à chaque story, donc sans relecture ce n'est pas un incrément terminé." },
{ "text": "Definition of Ready : un élément du backlog est clair, estimé, et contient tout le nécessaire avant que l'équipe ne le prenne.", "explain_dr": "Definition of Ready: story wad7a, m9ddra, w fiha kolchi 9bel ma l team t-bda biha.", "example": "Ready checklist: story written + AC defined + design attached + estimated", "q": "Une story n'a ni critères d'acceptation ni estimation. Peut-elle entrer en planification de sprint ?", "a": "Non — elle n'est pas Ready. L'équipe démarrerait avec des inconnues, ce que la checklist prévient exactement." },
{ "text": "Les story points sont des estimations de taille relative (Fibonacci : 1,2,3,5,8,13...) — jamais des heures, jamais comparables entre équipes.", "explain_dr": "Story points a7jam nisbya (1,2,3,5,8,13) — machi sa3at, w ma kay-t9arnoch bin teams.", "example": "Login form = 2 pts; card payments = 8 pts (about 4x bigger)", "q": "L'équipe A fait 45 pts/sprint et l'équipe B en fait 30. Quelle équipe est meilleure ?", "a": "Aucune conclusion n'est valable — les points sont relatifs à chaque équipe, donc comparer les vélocités n'a aucun sens." },
{ "text": "Planning Poker : chacun estime en privé, on révèle ensemble ; les gros écarts déclenchent une discussion, puis on réestime.", "explain_dr": "Planning Poker: kol wa7ed kay-9der b sirriya, kay-werriw m3a b3d; l far9 l kbir kay-jib ni9ach.", "example": "Cards: 3, 3, 13 -> the '13' explains hidden API work -> re-vote: 8, 8, 8", "q": "Pourquoi ne pas simplement faire la moyenne du 3 et du 13 ?", "a": "Parce que l'écart signale des compréhensions différentes — la discussion révèle du travail caché, ce qui est la vraie valeur de l'exercice." },
{ "text": "Vélocité = points terminés par sprint, en moyenne sur quelques sprints ; utilisée UNIQUEMENT pour prévoir, jamais pour juger.", "explain_dr": "Velocity = points li salaw f sprint, moyenne dyal chhar; ghir l tawa9o3, machi l mo7asaba.", "example": "Last 3 sprints: 22, 26, 24 -> forecast ~24 pts next sprint", "q": "Votre vélocité chute de 26 à 18 après le départ d'un collègue. L'équipe doit-elle travailler les week-ends pour la « rattraper » ?", "a": "Non — la vélocité reflète la capacité actuelle ; on planifie le prochain sprint autour de 18 et on laisse la moyenne se restabiliser honnêtement." },
{ "text": "Un burndown chart montre le travail restant du sprint jour par jour ; une ligne plate = aucun avancement, une falaise = tout fini au dernier moment.", "explain_dr": "Burndown kay-werri l khadma li b9at kol nhar; khatt ofo9i = ma kayn ta9addom.", "example": "40 pts Mon -> 32 Tue -> 32 Wed -> 30 Thu -> 0 Fri (cliff = risky)", "q": "Que dit à l'équipe la ligne plate entre mardi et jeudi ?", "a": "Que rien n'a brûlé pendant deux jours — un avertissement précoce pour inspecter les blocages au Daily avant vendredi." },
{ "text": "L'objectif de sprint protège le sprint : les nouvelles demandes vont au backlog ; seul le PO peut annuler un sprint, quand l'objectif est obsolète.", "explain_dr": "Sprint Goal kay-7mi sprint: talab jdid kay-mchi l backlog; ghir PO y9dar y-lghi sprint ila l hadaf mat.", "example": "Mid-sprint request: 'add gift cards now!' -> backlog item, PO prioritizes later", "q": "Le PDG exige que l'équipe abandonne le travail du sprint pour une demande urgente. Qui décide ?", "a": "Le Product Owner — il possède les décisions de priorité ; l'équipe garde son engagement sauf si le PO juge l'objectif du sprint obsolète." },
{ "text": "Le Scrum Master est un servant-leader : il lève les obstacles, coache l'équipe et le PO, protège le processus — il n'assigne jamais de tâches.", "explain_dr": "SM 9a2id khadim: kay-7yed l 3awa2i9, kay-coachi, kay-7mi l process — ma kay-wzza3ch tasks.", "example": "Dev blocked on API keys -> SM chases access; PO churns priorities -> SM coaches PO", "q": "L'équipe attend que le Scrum Master assigne les tâches quotidiennes. Qu'est-ce qui est cassé ?", "a": "L'auto-organisation — les développeurs tirent eux-mêmes leur travail ; le SM facilite, ne commande ni n'assigne jamais." },
{ "text": "Kanban visualise le flux sur un tableau avec des limites WIP : finir le travail avant d'en commencer un nouveau ; les limites révèlent les goulots.", "explain_dr": "Kanban tableau b WIP limits: sali l khadma 9bel ma t-bda jdida; l 7odod kat-kchef l ikhtina9at.", "example": "| To Do | In Progress (WIP 3) | Done |  — 4th card must wait", "q": "La colonne « En cours » est pleine à sa limite WIP et un dev est libre. Que doit-il faire ?", "a": "Aider à finir quelque chose en cours (relire, tester, débloquer) au lieu de démarrer une nouvelle carte — c'est tout l'intérêt de la limite." },
{ "text": "Un diagramme de flux cumulé montre les cartes traversant les étapes au fil du temps ; une bande qui s'élargit = accumulation = goulot.", "explain_dr": "CFD kay-werri l kartat kifach kat-doz m3a l wa9t; chari6 kay-tsa3 = ikhtina9.", "example": "'In Review' band doubles in width over 2 weeks -> reviews are the bottleneck", "q": "Dans l'exemple, où l'équipe doit-elle concentrer ses efforts d'amélioration ?", "a": "Sur l'étape de relecture — la bande qui s'élargit prouve que le travail s'y accumule, donc ajouter des relecteurs ou du pair programming débloque le flux." },
{ "text": "Principe agile : accueillir les changements d'exigences, même tard — des itérations courtes et des tests automatisés gardent le changement peu coûteux.", "explain_dr": "Mabda2: r7eb b taghyirat 7ta f lkher — iterations 9sar w tests kay-khaliw t-taghyir rkhis.", "example": "Waterfall: late change = rewrite specs. Agile: next sprint just reprioritizes.", "q": "Pourquoi un changement tardif coûte-t-il moins cher en agile qu'en cascade ?", "a": "Petits lots, logiciel opérationnel à chaque sprint et tests automatisés : il y a peu de travail spéculatif à jeter." },
{ "text": "L'agilité mesure le succès par les résultats, pas par la production : un logiciel opérationnel qui crée de la valeur, à un rythme soutenable qui s'améliore.", "explain_dr": "Naja7 f Agile = nata2ij (9ima 7a9i9iya), machi kamiya dyal l code wla sa3at.", "example": "Team shipped 200 story points but users churned -> not success", "q": "Dans l'exemple, pourquoi une vélocité élevée n'est-elle pas un succès ?", "a": "Parce que le succès, ce sont les résultats business — la valeur livrée aux utilisateurs — pas le volume de production." }
  ],
  "Postman": [
{ "text": "Postman est un client API pour envoyer des requêtes HTTP et inspecter les réponses.", "explain_dr": "Postman howa outil bach t-sift HTTP requests l API w t-chof responses li rj3o.", "example": "GET https://api.shop.test/users  →  200 OK", "q": "Dans l'exemple, que voit-on après l'envoi de la requête ?", "a": "Le statut de la réponse (200 OK) et le corps de la réponse — Postman affiche les deux pour vérifier le comportement de l'API." },
{ "text": "Chaque requête comprend une méthode, une URL, des en-têtes, des paramètres et un corps optionnel.", "explain_dr": "Kol request fiha method, URL, headers, params, w body ikhtiyari.", "example": "POST https://api.shop.test/users\nContent-Type: application/json\n{ \"name\": \"Sara\" }", "q": "Dans l'exemple, quelles parties indiquent au serveur quoi faire, et lesquelles transportent les données ?", "a": "La méthode (POST) et l'URL indiquent quoi faire ; l'en-tête Content-Type et le corps JSON transportent les données." },
{ "text": "Une collection est un groupe enregistré et organisé de requêtes que l'on peut exécuter et partager ensemble.", "explain_dr": "Collection hiya majmo3a mn requests m7fodin w mnadmin bach t-runi w t-partagihom.", "example": "// Collection: Shop API\n// ├─ POST /login\n// └─ GET /users", "q": "Pourquoi mettre les requêtes de connexion et de liste des utilisateurs dans une même collection ?", "a": "Parce qu'elles appartiennent à la même API — on peut les exécuter, les documenter et les partager comme une seule unité." },
{ "text": "Un environnement est un ensemble nommé de variables (dev, staging, prod) entre lesquels on bascule sans modifier les requêtes.", "explain_dr": "Environment hiya majmo3a dyal variables l context wa7ed (dev, prod...) kat-bdel binathom bla ma t-mess requests.", "example": "{{baseUrl}}/users  // dev → http://localhost:8000, prod → https://api.shop.test", "q": "Que se passe-t-il quand on bascule l'environnement actif de dev à prod ?", "a": "Seules les valeurs des variables (comme {{baseUrl}}) changent — les requêtes restent intactes." },
{ "text": "On référence une variable avec des doubles accolades : {{nomVariable}}.", "explain_dr": "Bach t-sta3mel variable, kteb smitha wast joj accolades: {{smiya}}.", "example": "GET {{baseUrl}}/users/{{userId}}", "q": "Dans l'exemple, combien de variables sont utilisées et quels sont leurs noms ?", "a": "Deux : baseUrl et userId — chacune entourée de {{ }}." },
{ "text": "Quand une variable existe dans plusieurs portées, la plus restreinte gagne : local > data > environment > collection > global.", "explain_dr": "Ila nafs variable kayna f scopes bzf, dima l scope l d9i9 howa li kayghlb.", "example": "// apiKey = \"AAA\" (global), \"BBB\" (environment)\n// {{apiKey}} → \"BBB\"", "q": "Dans l'exemple, quelle valeur {{apiKey}} retourne-t-il, et pourquoi ?", "a": "« BBB », car la portée d'environnement est plus restreinte que la portée globale et l'emporte donc." },
{ "text": "L'authentification se configure dans l'onglet Authorization ; Bearer Token envoie « Authorization: Bearer <token> ».", "explain_dr": "Auth kat-t7dded f Authorization tab; Bearer Token kay-sift token f header.", "example": "Authorization: Bearer eyJhbGciOi...", "q": "Dans l'exemple, où voyage le jeton ?", "a": "Dans l'en-tête Authorization, préfixé du mot Bearer." },
{ "text": "Basic Auth envoie username:password encodé en Base64 dans l'en-tête Authorization.", "explain_dr": "Basic Auth kat-sift username:password m-encodi b Base64 f Authorization header.", "example": "Authorization: Basic dXNlcjpwYXNz  // user:pass", "q": "Basic Auth est-il chiffré ? Que montre l'exemple ?", "a": "Non — Base64 n'est qu'un encodage, pas un chiffrement ; quiconque lit l'en-tête peut le décoder, d'où l'obligation d'utiliser HTTPS." },
{ "text": "Les paramètres de requête vont après ? dans l'URL ; les variables de chemin comme :id se modifient dans l'onglet Params.", "explain_dr": "Query params kayjiw mor ? f URL; path variables b7al :id kat-bdelhom f Params tab.", "example": "GET /users?page=2&limit=10\nGET /users/:id  →  /users/42", "q": "Dans l'exemple, quelle est la différence entre page et :id ?", "a": "page est un paramètre de requête qui filtre la liste ; :id est une variable de chemin qui identifie un utilisateur précis." },
{ "text": "Envoyez du JSON avec Body → raw → JSON, en incluant toujours l'en-tête Content-Type: application/json.", "explain_dr": "Bach t-sift JSON, khtar Body → raw → JSON w zid header Content-Type.", "example": "POST /users\nContent-Type: application/json\n{ \"name\": \"Sara\" }", "q": "Que se passerait-il si l'on oubliait l'en-tête Content-Type dans l'exemple ?", "a": "Le serveur pourrait ne pas interpréter le corps comme du JSON et rejeter la requête avec une erreur 415 ou 400." },
{ "text": "Les scripts de pré-requête s'exécutent avant l'envoi de la requête — on s'en sert pour définir des variables, horodatages ou signatures.", "explain_dr": "Pre-request script kay-khdem 9bel ma t-tsift request — l variables w signatures.", "example": "pm.environment.set(\"ts\", Date.now());", "q": "Dans l'exemple, quand la variable ts est-elle définie par rapport à la requête ?", "a": "Avant l'envoi de la requête, pour que celle-ci puisse utiliser {{ts}} dans son URL, ses en-têtes ou son corps." },
{ "text": "Les scripts de test s'exécutent après l'arrivée de la réponse ; pm.test() regroupe les assertions sur cette réponse.", "explain_dr": "Test scripts kay-khedmo mor ma t-wsal response; pm.test() kat-jma3 assertions.", "example": "pm.test(\"Status is 200\", function () {\n  pm.response.to.have.status(200);\n});", "q": "Quels sont les deux arguments de pm.test dans l'exemple ?", "a": "Une chaîne de description (« Status is 200 ») et une fonction contenant les assertions." },
{ "text": "On parse le corps avec pm.response.json(), puis on vérifie avec pm.expect() (syntaxe Chai).", "explain_dr": "7awel body l object b pm.response.json(), w verifi b pm.expect().", "example": "const json = pm.response.json();\npm.expect(json.name).to.eql(\"Sara\");", "q": "Que se passerait-il dans l'exemple si le corps n'était pas du JSON valide ?", "a": "pm.response.json() lèverait une exception, ce qui ferait échouer le test." },
{ "text": "Enchaînement des requêtes : on enregistre une valeur issue d'une réponse pour la réutiliser comme {{variable}} dans la requête suivante.", "explain_dr": "Chaining: savei 9ima mn response w 3awed sta3melha b {{variable}} f request li moraha.", "example": "// Tests of POST /login:\npm.environment.set(\"token\", pm.response.json().token);", "q": "Après l'exécution de l'exemple, comment la requête suivante utilise-t-elle le jeton ?", "a": "Elle référence {{token}} dans son en-tête Authorization — aucun copier-coller nécessaire." },
{ "text": "pm.sendRequest() envoie un appel HTTP depuis l'intérieur d'un script de pré-requête ou de test.", "explain_dr": "pm.sendRequest() kat-sift HTTP request mn wast script.", "example": "pm.sendRequest(\"https://auth.test/token\", function (err, res) {\n  pm.environment.set(\"token\", res.json().token);\n});", "q": "Pourquoi utiliser pm.sendRequest dans un script de pré-requête plutôt qu'une requête séparée ?", "a": "Pour récupérer automatiquement un jeton frais avant la requête principale, sans ajouter de requête au flux de la collection." },
{ "text": "Les variables dynamiques comme {{$guid}}, {{$timestamp}} et {{$randomInt}} génèrent des valeurs fraîches à chaque requête.", "explain_dr": "Dynamic variables b7al {{$guid}} kat-generiw 9ima jdida m3a kol request.", "example": "{ \"requestId\": \"{{$guid}}\" }", "q": "Qu'est-ce qui change pour {{$guid}} à chaque exécution de l'exemple ?", "a": "Un tout nouveau GUID aléatoire est généré à chaque exécution — on n'obtient jamais deux fois la même valeur." },
{ "text": "postman.setNextRequest(\"Nom\") contrôle quelle requête s'exécute ensuite ; setNextRequest(null) arrête l'exécution.", "explain_dr": "setNextRequest kat-7dded ina request ghadi moraha; null kat-7bes l run.", "example": "postman.setNextRequest(null); // stop after this request", "q": "Dans l'exemple, qu'advient-il des requêtes restantes du runner ?", "a": "Elles sont ignorées — l'exécution s'arrête après la requête courante." },
{ "text": "Le Collection Runner exécute toute une collection, en itérant éventuellement sur les lignes d'un fichier de données CSV/JSON.", "explain_dr": "Collection Runner kay-runi collection kamla, w y9der y3awed m3a kol row dyal CSV/JSON.", "example": "pm.iterationData.get(\"email\"); // current CSV row", "q": "Si le CSV contient 100 lignes, combien de fois chaque requête s'exécute-t-elle ?", "a": "100 fois — une fois par ligne, avec pm.iterationData qui donne les valeurs de la ligne courante." },
{ "text": "Un serveur mock retourne des exemples de réponses enregistrés, pour développer le frontend avant que le backend existe.", "explain_dr": "Mock server kay-rja3 examples m7fodin, bach frontend y-khdem 9bel ma backend y-wjed.", "example": "GET https://<mock-id>.mock.pstmn.io/users → saved example", "q": "Dans l'exemple, d'où vient réellement la réponse ?", "a": "De l'exemple enregistré sur le serveur mock, pas d'un vrai backend." },
{ "text": "Les monitors exécutent une collection selon un planning depuis le cloud Postman et alertent en cas d'échec.", "explain_dr": "Monitors kay-runniw collection b schedule mn cloud dyal Postman w kay-notifiwk melli kay-fchlo.", "example": "// Monitor: Shop API health — every hour", "q": "Quel problème le monitor de l'exemple résout-il ?", "a": "Il détecte automatiquement les régressions de l'API toutes les heures, sans que personne ne clique sur exécuter." },
{ "text": "Newman est l'exécuteur CLI de Postman : newman run collection.json -e env.json.", "explain_dr": "Newman howa runner dyal Postman f command line.", "example": "$ newman run api-tests.json -e prod.json", "q": "Pourquoi lancer la commande de l'exemple plutôt que de cliquer sur Run dans l'application ?", "a": "Parce qu'elle s'exécute sans interface dans les terminaux et les pipelines CI, et que son code de sortie fait échouer le build quand les tests échouent." },
{ "text": "En CI, Newman s'exécute à chaque push ; des reporters comme junit et htmlextra publient des résultats exploitables.", "explain_dr": "F CI, Newman kay-khdem m3a kol push; reporters kay-generiw rapports.", "example": "newman run api-tests.json -r cli,junit", "q": "Qu'apporte le reporter junit dans l'exemple ?", "a": "Un rapport de tests lisible par machine que les outils CI peuvent afficher et utiliser pour valider ou invalider le build." },
{ "text": "OAuth 2.0 dans Postman : cliquez sur « Get New Access Token » et Postman gère le flux d'autorisation.", "explain_dr": "L OAuth 2.0, cliqui 3la \"Get New Access Token\" w Postman kay-dir l flow kamel.", "example": "// Authorization tab → OAuth 2.0 → Get New Access Token", "q": "Que fait Postman pour vous après le clic sur le bouton dans l'exemple ?", "a": "Il ouvre la page de connexion du fournisseur, capture le code, l'échange contre des jetons et stocke le jeton d'accès pour la requête." },
{ "text": "« Inherit auth from parent » fait réutiliser à une requête l'autorisation définie sur sa collection ou son dossier.", "explain_dr": "\"Inherit auth from parent\" kat-khali request t-sta3mel auth dyal collection/folder.", "example": "// Collection auth: Bearer {{token}}\n// Request auth: Inherit auth from parent", "q": "Si le jeton change, à combien d'endroits faut-il le mettre à jour dans cette configuration ?", "a": "Un seul — au niveau de la collection ; chaque requête héritière le récupère automatiquement." },
{ "text": "Conservez les secrets dans la valeur COURANTE (current) d'une variable (locale uniquement), jamais dans la valeur initiale synchronisée avec l'équipe.", "explain_dr": "Secrets 7ethom f CURRENT value (local ghir 3ndek), machi f initial li kat-partaga m3a team.", "example": "{{apiKey}}  // current value: secret, initial value: empty", "q": "Dans l'exemple, que verrait un coéquipier pour apiKey ?", "a": "Une valeur initiale vide — le secret de votre valeur courante ne lui est jamais synchronisé." }
  ],
  "NextJs": [
  {
    "text": "Next.js est un framework React pour des apps web full-stack : routage basé sur les fichiers, rendu serveur (SSR/SSG/ISR), route handlers API, et optimisation images/polices intégrée.",
    "explain_dr": "Next.js kat-zid 3la React: routing, server rendering, API... tfekkar chno kat-rba7 bla ma t-configuri walo.",
    "example": "npx create-next-app@latest my-app\ncd my-app\nnpm run dev",
    "q": "Quelles briques full-stack Next.js vous donne-t-il en plus de React seul ?",
    "a": "Le routage basé sur les fichiers, les options de rendu serveur (SSR/SSG/ISR), les route handlers API, le middleware, et l'optimisation intégrée des images et des polices."
  },
  {
    "text": "L'App Router vit dans le dossier app/ : chaque dossier est un segment de route et des fichiers spéciaux (page.js, layout.js, loading.js) définissent l'UI de chaque segment.",
    "explain_dr": "F App Router, l dossier = route, w smiyat l files mo3ayana kat-7added chno kayt-renda. Fker chno smiyat had l files.",
    "example": "app/\n  page.js          // /\n  about/page.js    // /about\n  blog/[slug]/page.js",
    "q": "Comment un dossier dans app/ devient-il une URL ?",
    "a": "Chaque dossier est un segment de route ; un page.js à l'intérieur affiche cette URL, e.g. app/about/page.js affiche /about."
  },
  {
    "text": "Un fichier page.js exporte le composant React affiché pour son segment de route — c'est le seul nom de fichier qui crée une page publiquement accessible.",
    "explain_dr": "Ghir page.js kat-sayb page public. Files khrin b smiyat khrin ma kay-banouch. Fker chno smit l file l wa7id li kay-rendi route.",
    "example": "// app/about/page.js\nexport default function About() {\n  return <h1>About us</h1>;\n}",
    "q": "Quel nom de fichier rend une route publiquement accessible dans l'App Router ?",
    "a": "page.js — seul page.js crée une page publique ; les autres noms de fichiers (comme les helpers) ne sont jamais routés."
  },
  {
    "text": "Les composants de l'App Router sont des Server Components par défaut : ils s'affichent sur le serveur, peuvent être async, et gardent les secrets et les dépendances lourdes hors du bundle client.",
    "explain_dr": "Bla ma tzid walo, l component kayt-renda f server. Fker chno kat-rba7: async, secrets, bundle sghir.",
    "example": "export default async function Page() {\n  const posts = await db.query('SELECT * FROM posts');\n  return <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>;\n}",
    "q": "Que peut faire un composant App Router par défaut qu'un Client Component ne peut pas ?",
    "a": "Être async et exécuter du code réservé au serveur (comme des requêtes DB directes), car il est rendu sur le serveur et ce code n'est jamais envoyé au navigateur."
  },
  {
    "text": "La directive \"use client\" en haut d'un fichier marque un Client Component : il s'affiche dans le navigateur et débloque les hooks, les gestionnaires d'événements et les APIs du navigateur.",
    "explain_dr": "\"use client\" kat-gol: hadchi khaso browser. Fker imta kat-7tajha: useState, onClick...",
    "example": "\"use client\";\nimport { useState } from 'react';\nexport default function Counter() {\n  const [n, setN] = useState(0);\n  return <button onClick={() => setN(n + 1)}>{n}</button>;\n}",
    "q": "Quand devez-vous ajouter \"use client\" à un composant ?",
    "a": "Quand il a besoin d'interactivité : des hooks comme useState/useEffect, des gestionnaires d'événements, ou des APIs réservées au navigateur."
  },
  {
    "text": "Les Server Actions sont des fonctions async marquées avec \"use server\" qui s'exécutent sur le serveur mais peuvent être appelées directement depuis le code client ou branchées à l'action d'un <form>.",
    "explain_dr": "\"use server\" = function kat-khdem f server wakha t-3ayet liha mn client. Fker kifach kat-tsaybha w fin kat-sta3melha.",
    "example": "\"use server\";\nexport async function createPost(formData) {\n  const title = formData.get('title');\n  await db.insert({ title });\n}",
    "q": "Comment une Server Action atteint-elle le serveur sans route API ?",
    "a": "Next.js sérialise l'appel : la fonction \"use server\" s'exécute sur le serveur pendant que le client l'invoque comme une fonction async normale ou une action de formulaire."
  },
  {
    "text": "next/link permet la navigation côté client : cliquer sur un <Link> change de page sans rechargement complet et précharge la route cible pour des transitions instantanées.",
    "explain_dr": "Link kat-bedel l page bla reload w kat-prefetchi l route. Fker l far9 m3a <a> 3adiya.",
    "example": "import Link from 'next/link';\n<Link href=\"/blog\">Blog</Link>",
    "q": "Quels deux gains de performance <Link> apporte-t-il par rapport à un <a> classique ?",
    "a": "Pas de rechargement complet de la page (navigation côté client) et préchargement automatique de la route liée pour un chargement instantané."
  },
  {
    "text": "next/image optimise automatiquement les images : redimensionnement responsive, lazy loading, formats modernes (WebP/AVIF), et placeholders flous — vous devez définir width/height ou utiliser fill.",
    "explain_dr": "next/image kat-sghar w kat-optimiw tsawer bo7dha. Fker chno khaso tzid: width/height wla fill.",
    "example": "import Image from 'next/image';\n<Image src=\"/hero.jpg\" alt=\"Hero\" width={1200} height={600} />",
    "q": "Que devez-vous toujours fournir à next/image en plus de src et alt ?",
    "a": "Les dimensions : width et height, ou la prop fill — Next.js en a besoin pour réserver l'espace et éviter le décalage de mise en page."
  },
  {
    "text": "Exporter un objet metadata (ou generateMetadata pour des valeurs dynamiques) définit le <head> de la page : title, description, openGraph — sans balises <head> manuelles.",
    "explain_dr": "metadata kat-bedel <head>: title, description... bla ma tkteb <head>. Fker l far9 bin metadata w generateMetadata.",
    "example": "export const metadata = {\n  title: 'Pricing',\n  description: 'Our plans',\n};",
    "q": "Quand utilise-t-on generateMetadata plutôt qu'un objet metadata statique ?",
    "a": "Quand les valeurs du head dépendent de données — e.g. récupérer un article par slug pour définir un titre dynamique — car generateMetadata peut être async et recevoir params."
  },
  {
    "text": "Un dossier nommé [slug] crée une route dynamique : /blog/hello-world affiche app/blog/[slug]/page.js avec params.slug égal à \"hello-world\".",
    "explain_dr": "[slug] = placeholder f URL. Fker kifach kat-wsal l value l page: params.",
    "example": "// app/blog/[slug]/page.js\nexport default function Post({ params }) {\n  return <h1>{params.slug}</h1>;\n}",
    "q": "Comment le composant de page lit-il la partie dynamique de l'URL ?",
    "a": "Via la prop params : le segment [slug] arrive comme params.slug."
  },
  {
    "text": "layout.js définit l'UI partagée (navbar, footer) qui englobe toutes les pages de son segment ; il préserve l'état pendant la navigation et ne se ré-affiche pas quand seule la page enfant change.",
    "explain_dr": "layout.js UI mochtaraka ma kat-t3awdch t-renda melli kat-navigi. Fker 3lach: state kat-b9a.",
    "example": "// app/layout.js\nexport default function RootLayout({ children }) {\n  return (\n    <html><body>\n      <nav>...</nav>\n      {children}\n    </body></html>\n  );\n}",
    "q": "Pourquoi une navbar dans layout.js ne perd-elle pas son état quand vous naviguez ?",
    "a": "Les layouts sont préservés pendant la navigation — seul le segment de page se ré-affiche, donc l'état du layout (comme un menu ouvert) survit."
  },
  {
    "text": "Un fichier loading.js à côté de page.js s'affiche instantanément dans une limite Suspense pendant que la page arrive en streaming, donnant une UI de chargement automatique par route.",
    "explain_dr": "loading.js = UI li kat-ban melli l page mazal kat-ji. Fker chno kat-warri l user f had l wa9t.",
    "example": "// app/blog/loading.js\nexport default function Loading() {\n  return <p>Loading posts...</p>;\n}",
    "q": "Qu'est-ce qui déclenche l'apparition de l'UI loading.js ?",
    "a": "Next.js enveloppe la page dans une limite Suspense, donc loading.js s'affiche automatiquement pendant que les données async de la page arrivent en streaming."
  },
  {
    "text": "error.js est une limite d'erreur Client Component pour son segment : il reçoit { error, reset } pour que l'utilisateur puisse réessayer sans perdre toute l'app.",
    "explain_dr": "error.js kat-ched l errors dyal segment dyalha w kat-3ti reset(). Fker 3lach khaso \"use client\".",
    "example": "\"use client\";\nexport default function Error({ error, reset }) {\n  return (\n    <div>\n      <p>Something broke</p>\n      <button onClick={() => reset()}>Try again</button>\n    </div>\n  );\n}",
    "q": "Que fait la prop reset() de error.js ?",
    "a": "Elle ré-affiche le segment en échec, offrant un « réessayer » qui ne relance que cette partie de la page au lieu d'un rechargement complet."
  },
  {
    "text": "Un fichier route.js crée un Route Handler : un endpoint API où les fonctions de méthodes HTTP exportées (GET, POST...) retournent des objets Response pour cette URL.",
    "explain_dr": "route.js = API endpoint f App Router. Fker chno kat-exporti: GET, POST...",
    "example": "// app/api/users/route.js\nexport async function GET() {\n  const users = await db.getUsers();\n  return Response.json(users);\n}\nexport async function POST(req) {\n  const body = await req.json();\n  return Response.json({ created: true }, { status: 201 });\n}",
    "q": "Comment gérer deux méthodes HTTP dans un seul fichier Route Handler ?",
    "a": "Exportez une fonction async par méthode — GET(), POST(), etc. — chacune retournant une Response ; Next.js route la requête vers l'export correspondant."
  },
  {
    "text": "middleware.js s'exécute à la racine du projet avant que la requête ne se termine : il peut rediriger, réécrire ou ajouter des headers — e.g. protéger /dashboard quand il n'y a pas de cookie de session.",
    "explain_dr": "middleware.js kay-khdem 9bel l page: redirect, auth check... Fker fin kayn w chno y9dar ydir.",
    "example": "// middleware.js\nimport { NextResponse } from 'next/server';\nexport function middleware(req) {\n  if (!req.cookies.get('session')) {\n    return NextResponse.redirect(new URL('/login', req.url));\n  }\n}\nexport const config = { matcher: '/dashboard/:path*' };",
    "q": "Comment limiter le middleware pour qu'il ne s'exécute que sur certaines URLs ?",
    "a": "Avec le config.matcher exporté — un motif de chemin comme '/dashboard/:path*' — pour que le middleware ne s'exécute que pour les requêtes correspondantes."
  },
  {
    "text": "fetch() dans les Server Components est mis en cache par défaut (force-cache) ; passez { cache: 'no-store' } pour des données toujours fraîches ou { next: { revalidate: N } } pour une revalidation temporelle.",
    "explain_dr": "fetch f server kat-t-cacha by default. Fker kifach kat-t7akem f cache: no-store, revalidate.",
    "example": "const fresh = await fetch(url, { cache: 'no-store' });\nconst hourly = await fetch(url, { next: { revalidate: 3600 } });",
    "q": "Quelle est la différence entre cache: 'no-store' et next: { revalidate: 3600 } ?",
    "a": "no-store ne met jamais en cache (toujours dynamique et frais) ; revalidate: 3600 met le résultat en cache mais le rafraîchit au plus une fois par heure."
  },
  {
    "text": "ISR (Incremental Static Regeneration) : export const revalidate = N fait qu'une page générée statiquement se reconstruit en arrière-plan au plus toutes les N secondes après la première requête.",
    "explain_dr": "ISR = static + refresh kol N seconds. Fker l far9 binha w bin SSR.",
    "example": "// app/blog/page.js\nexport const revalidate = 60;\nexport default async function Blog() {\n  const posts = await getPosts();\n  return <List posts={posts} />;\n}",
    "q": "Quand l'ISR est-il un meilleur choix que le rendu à chaque requête (SSR) ?",
    "a": "Quand les données changent peu souvent : vous avez la vitesse du statique pour la plupart des visiteurs et une reconstruction en arrière-plan toutes les N secondes."
  },
  {
    "text": "generateStaticParams() retourne la liste des params de routes dynamiques à pré-rendre au build — e.g. tous les slugs du blog — pour que ces pages soient du HTML statique dès le départ.",
    "explain_dr": "generateStaticParams kat-gol l Next.js: pre-rendi had l slugs f build. Fker chno kat-rja3.",
    "example": "export async function generateStaticParams() {\n  const posts = await getPosts();\n  return posts.map(p => ({ slug: p.slug }));\n}",
    "q": "Quelle forme chaque élément retourné par generateStaticParams() doit-il avoir ?",
    "a": "Un objet dont les clés correspondent aux noms des segments dynamiques — e.g. { slug: 'hello' } pour une route [slug]."
  },
  {
    "text": "Après une mutation, appelez revalidatePath('/blog') ou revalidateTag('posts') dans une Server Action pour purger le cache à la demande afin que la prochaine visite ait des données fraîches.",
    "explain_dr": "Badelti data — l cache 9dim khaso ytm7a daba. Fker b chno: path wla tag.",
    "example": "\"use server\";\nimport { revalidatePath } from 'next/cache';\nexport async function createPost(formData) {\n  await db.insert({ title: formData.get('title') });\n  revalidatePath('/blog');\n}",
    "q": "Quand utiliseriez-vous revalidateTag plutôt que revalidatePath ?",
    "a": "Quand les mêmes données apparaissent sur plusieurs pages : taguez tous les fetch liés avec next: { tags: ['posts'] }, puis un seul revalidateTag('posts') les purge tous."
  },
  {
    "text": "Les variables d'environnement sans préfixe sont réservées au serveur ; seules les variables commençant par NEXT_PUBLIC_ sont injectées dans le JavaScript du navigateur.",
    "explain_dr": "Bla NEXT_PUBLIC_ l variable ghir f server — secret. Fker chno kat-dir l prefix.",
    "example": "DATABASE_URL=postgres://...        # server only\nNEXT_PUBLIC_API_URL=https://...  # visible in browser",
    "q": "Où mettre une clé API secrète pour que le navigateur ne la voie jamais ?",
    "a": "Dans une variable simple (sans NEXT_PUBLIC_) comme API_SECRET : elle reste réservée au serveur et n'est jamais incluse dans le JavaScript client."
  },
  {
    "text": "not-found.js affiche une UI 404 personnalisée pour son segment ; appelez notFound() de next/navigation dans une page quand les données n'existent pas (e.g. slug inconnu).",
    "explain_dr": "notFound() kat-warri not-found.js b 404. Fker imta kat-3ayet liha: slug ma kaynach.",
    "example": "import { notFound } from 'next/navigation';\nexport default async function Post({ params }) {\n  const post = await getPost(params.slug);\n  if (!post) notFound();\n  return <h1>{post.title}</h1>;\n}",
    "q": "Quel statut HTTP l'UI notFound() retourne-t-elle ?",
    "a": "404 — le not-found.js le plus proche s'affiche avec un vrai statut 404, ce que les moteurs de recherche attendent aussi pour les pages manquantes."
  },
  {
    "text": "Le streaming avec <Suspense> : enveloppez un Server Component lent dans Suspense avec un fallback pour que le reste de la page s'affiche instantanément et que la partie lente arrive en streaming quand elle est prête.",
    "explain_dr": "Suspense kat-khali l page t-ban w l slow part kat-ji mn ba3d. Fker chno kat-warri l fallback.",
    "example": "import { Suspense } from 'react';\n<Suspense fallback={<p>Loading comments...</p>}>\n  <Comments postId={id} />\n</Suspense>",
    "q": "Comment le streaming améliore-t-il la performance perçue par rapport à l'attente de toutes les données ?",
    "a": "La coquille de la page atteint le navigateur immédiatement ; chaque limite Suspense se remplit dès que ses données sont résolues au lieu de bloquer toute la page."
  },
  {
    "text": "next/font auto-héberge les polices Google (ou locales) au build : pas de requête externe, subsetting automatique, et zéro décalage de mise en page via des fallbacks size-adjust.",
    "explain_dr": "next/font kat-host l font m3a site dyalk f build. Fker chno kat-rba7: privacy, speed, CLS.",
    "example": "import { Inter } from 'next/font/google';\nconst inter = Inter({ subsets: ['latin'] });\nexport default function RootLayout({ children }) {\n  return <html className={inter.className}><body>{children}</body></html>;\n}",
    "q": "Comment appliquer une police next/font à toute l'app ?",
    "a": "Appelez le chargeur de police (e.g. Inter({ subsets: ['latin'] })) et mettez son className sur l'élément <html> ou <body> dans le layout racine."
  },
  {
    "text": "Dans un Server Component, lancez les fetch indépendants ensemble avec Promise.all plutôt que des await séquentiels — les await séquentiels créent une cascade de requêtes qui additionne les latences.",
    "explain_dr": "await mor await = waterfall bati2. Promise.all bjojhom m3a b3d. Fker l far9 f wa9t.",
    "example": "const [user, posts] = await Promise.all([getUser(id), getPosts(id)]);",
    "q": "Deux requêtes prennent 300ms chacune. Combien de temps prennent des await séquentiels versus Promise.all ?",
    "a": "Séquentiel : ~600ms (l'une attend l'autre) ; Promise.all : ~300ms (les deux tournent en même temps) — la cascade double la latence."
  },
  {
    "text": "Déployer sur Vercel est la voie zéro-config : pushez sur Git et chaque commit reçoit une URL de prévisualisation ; sinon next build + next start lance le serveur de production partout où Node.js tourne.",
    "explain_dr": "Vercel = push w deploy bo7do. Wla next build + next start f ay server. Fker chno kat-rba7 m3a Vercel.",
    "example": "npm run build   # next build\nnpm start       # next start (production server)",
    "q": "Que recevez-vous automatiquement sur Vercel pour chaque pull request ?",
    "a": "Une URL de déploiement de prévisualisation unique, pour que les reviewers testent les changements exacts avant le merge."
  },
  ],
  "Bootstrap": [
  {
    "text": "Bootstrap est un framework CSS mobile-first : il fournit une grille responsive de 12 colonnes, des composants pré-stylés et des classes utilitaires pour construire des mises en page sans écrire beaucoup de CSS personnalisé.",
    "explain_dr": "Bootstrap framework dyal CSS: grid responsive, components jahzin, w utilities — kat-bni dghya bla CSS bzaf.",
    "example": "<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet'>",
    "q": "Que vous apporte Bootstrap dès le départ ?",
    "a": "Une grille responsive de 12 colonnes, des composants pré-stylés (navbar, cartes, modales...) et des classes utilitaires pour l'espacement, la mise en page et la typographie."
  },
  {
    "text": "Le moyen le plus rapide d'essayer Bootstrap est le CDN : ajoutez le <link> du CSS compilé dans <head> et le bundle JS juste avant </body>.",
    "explain_dr": "Bach t-jareb Bootstrap dghya, zid link dyal CSS f head w script dyal JS 9bel ma ytssed body.",
    "example": "<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'></script>",
    "q": "Où placent-on le lien CSS et le script JS de Bootstrap dans une page HTML ?",
    "a": "Le <link> CSS va dans <head> ; le bundle JS va à la fin du <body>, juste avant </body>."
  },
  {
    "text": "bootstrap.bundle.min.js inclut déjà Popper.js, dont les dropdowns, infobulles et popovers ont besoin pour se positionner.",
    "explain_dr": "Bundle = Bootstrap + Popper mjmo3in; Popper howa li kay-positioni dropdowns w tooltips.",
    "example": "<!-- bundle = bootstrap + popper dans un seul fichier -->\n<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'></script>",
    "q": "Pourquoi préférer le fichier bundle à bootstrap.min.js ?",
    "a": "Parce que le bundle inclut Popper.js, nécessaire au positionnement des dropdowns, infobulles et popovers — avec bootstrap.min.js seul, il faudrait ajouter Popper séparément."
  },
  {
    "text": "La grille compte toujours 12 colonnes par ligne : les largeurs de colonnes sont des fractions de 12, par ex. col-4 vaut un tiers de la ligne.",
    "explain_dr": "Grid fih 12 columns — col-4 = 4/12 ya3ni 1/3 dyal row.",
    "example": "<div class='row'>\n  <div class='col-4'>A</div>\n  <div class='col-4'>B</div>\n  <div class='col-4'>C</div>\n</div>",
    "q": "Trois colonnes égales dans une ligne — quelle classe pour chacune ?",
    "a": "col-4 : 4 + 4 + 4 = 12, donc chacune occupe un tiers de la ligne."
  },
  {
    "text": ".container centre le contenu avec des largeurs max fixes responsives ; .container-fluid occupe toujours 100 % de la largeur du viewport.",
    "explain_dr": "container kay-markazi w 3ndo max-width, container-fluid dayman 100% width.",
    "example": "<div class='container'><!-- centré, largeur max --></div>\n<div class='container-fluid'><!-- toute la largeur --></div>",
    "q": "Vous voulez une bannière hero toute en largeur. Quel wrapper utiliser ?",
    "a": "container-fluid, car il occupe toujours toute la largeur du viewport, contrairement à container qui limite la largeur et centre le contenu."
  },
  {
    "text": "Les breakpoints sont des largeurs minimales mobile-first : sm 576px, md 768px, lg 992px, xl 1200px, xxl 1400px — une classe md s'applique à partir de md et au-delà.",
    "explain_dr": "Breakpoints mobile-first: sm 576, md 768, lg 992, xl 1200, xxl 1400 — class dyal md kat-khdem mn md lfo9.",
    "example": "<div class='col-12 col-lg-6'><!-- empilé jusqu'à lg --></div>",
    "q": "Que fait col-lg-6 sur un écran de 800px de large ?",
    "a": "Rien pour l'instant — 800px est sous lg (992px), donc col-12 s'applique et la colonne reste pleine largeur ; col-lg-6 s'active à partir de 992px."
  },
  {
    "text": "Combinez une classe de colonne de base avec une classe de breakpoint (col-12 col-md-6) pour empiler sur téléphone et diviser 50/50 sur tablette et plus.",
    "explain_dr": "col-12 col-md-6 = full-width f tele, nss-nss mn md lfo9.",
    "example": "<div class='row'>\n  <div class='col-12 col-md-6'>A</div>\n  <div class='col-12 col-md-6'>B</div>\n</div>",
    "q": "Comment empiler deux colonnes sur mobile mais les placer côte à côte sur desktop ?",
    "a": "Donnez à chacune col-12 col-md-6 : pleine largeur par défaut (mobile), moitié de largeur à partir du breakpoint md."
  },
  {
    "text": "Les gouttières sont les espaces entre les colonnes : définissez-les sur la ligne avec g-* (g-3), ou gx-* / gy-* pour l'horizontal/vertical uniquement.",
    "explain_dr": "Gutters = l-faragh bin columns, kat-tzad b g-* 3la row.",
    "example": "<div class='row g-4'>\n  <div class='col-6'>...</div>\n  <div class='col-6'>...</div>\n</div>",
    "q": "Pourquoi ajouter g-4 à la ligne plutôt que m-4 à chaque colonne ?",
    "a": "Parce que les marges sur les colonnes cassent le calcul des 12 colonnes et l'alignement ; g-* définit les gouttières proprement via la ligne."
  },
  {
    "text": "Les utilitaires d'espacement suivent {m|p}-{côté}-{taille} : m = marge, p = padding, côtés t/b/s/e/x/y, taille 0-5 (3 = 1rem), plus auto.",
    "explain_dr": "m w p, sides t/b/s/e/x/y, sizes 0-5 (3 = 1rem). Hfed had l pattern.",
    "example": "<div class='mt-3 px-4 mx-auto'>...</div>",
    "q": "Que fait px-4 ?",
    "a": "Il ajoute un padding horizontal (gauche + droite) de taille 4, soit 1.5rem de chaque côté."
  },
  {
    "text": "Les utilitaires d'affichage (d-none, d-block, d-flex...) peuvent être limités par breakpoint : d-none d-md-block masque sur téléphone, affiche à partir de md.",
    "explain_dr": "d-none d-md-block = mkhebbi f tele, bayen mn md lfo9.",
    "example": "<aside class='d-none d-lg-block'><!-- desktop uniquement --></aside>",
    "q": "Comment afficher une barre latérale uniquement sur grands écrans ?",
    "a": "Avec d-none d-lg-block : masqué partout par défaut, affiché en bloc à partir du breakpoint lg."
  },
  {
    "text": "Les utilitaires flex transforment tout élément en conteneur flex : d-flex avec justify-content-* (axe principal) et align-items-* (axe transversal).",
    "explain_dr": "d-flex + justify-content-* w align-items-* bach t-centreri w t-rteb l children.",
    "example": "<div class='d-flex justify-content-between align-items-center'>...</div>",
    "q": "Comment pousser deux enfants aux extrémités opposées d'une ligne flex en les centrant verticalement ?",
    "a": "d-flex justify-content-between align-items-center : between les répartit aux extrémités, align-items-center les centre sur l'axe transversal."
  },
  {
    "text": "Les utilitaires de texte gèrent l'alignement, la graisse et la taille : text-center, fw-bold, fst-italic, fs-4, text-muted, text-decoration-none.",
    "explain_dr": "text-* l alignment w colors, fw-bold l weight, fs-* l size.",
    "example": "<p class='text-center fw-bold fs-5 text-muted'>Hello</p>",
    "q": "Quelles classes rendent un paragraphe centré, gras et gris ?",
    "a": "text-center fw-bold text-muted (ajoutez fs-5 pour une taille plus grande)."
  },
  {
    "text": "Les couleurs du thème s'appliquent via bg-* et text-* (bg-primary, text-white, bg-danger...), et les bordures via border / border-primary.",
    "explain_dr": "Colors: bg-* l background, text-* l text, border-* l borders.",
    "example": "<div class='bg-primary text-white border border-light p-3'>...</div>",
    "q": "Comment faire une boîte bleue avec du texte blanc et une bordure claire ?",
    "a": "bg-primary text-white border border-light — bg-* définit le fond, text-* la couleur du texte, border ajoute la bordure."
  },
  {
    "text": "Les boutons ont besoin de la classe de base .btn plus un style : btn-primary, btn-outline-secondary, btn-lg / btn-sm pour les tailles.",
    "explain_dr": "Button khaso .btn + style bhal btn-primary wla btn-outline-danger.",
    "example": "<button class='btn btn-outline-danger btn-sm'>Delete</button>",
    "q": "Comment faire un petit bouton rouge en contour ?",
    "a": "btn btn-outline-danger btn-sm : btn est obligatoire, btn-outline-danger donne le style contour rouge, btn-sm le rétrécit."
  },
  {
    "text": "Une carte est .card contenant .card-body, avec en option .card-title, .card-text, .card-img-top et .card-footer.",
    "explain_dr": "Card = .card w ldakhel .card-body, w ymkn t-zid title, image, footer.",
    "example": "<div class='card' style='width: 18rem;'>\n  <img class='card-img-top' src='a.jpg'>\n  <div class='card-body'>\n    <h5 class='card-title'>Title</h5>\n  </div>\n</div>",
    "q": "Où va le titre à l'intérieur d'une carte ?",
    "a": "Dans .card-body (lui-même dans .card), en utilisant la classe .card-title sur un titre."
  },
  {
    "text": "Une barre de navigation responsive utilise navbar + navbar-expand-lg ; sous lg, les liens se cachent derrière le bouton navbar-toggler qui cible la div collapse.",
    "explain_dr": "Navbar: navbar-expand-lg bach t-t replia lte7t mn lg, w toggler kay-che3el l collapse.",
    "example": "<nav class='navbar navbar-expand-lg navbar-dark bg-dark'>\n  <button class='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#nav'>...</button>\n  <div class='collapse navbar-collapse' id='nav'>...</div>\n</nav>",
    "q": "Le hamburger s'affiche mais le clic ne fait rien — que vérifier en premier ?",
    "a": "Que le data-bs-target du toggler correspond exactement à l'id de la div collapse (avec le #), et que le bundle JS de Bootstrap est chargé."
  },
  {
    "text": "Les modales exigent l'imbrication .modal > .modal-dialog > .modal-content, et s'ouvrent via data-bs-toggle='modal' data-bs-target='#id' — sans JS personnalisé.",
    "explain_dr": "Modal = .modal > .modal-dialog > .modal-content, w kat-t7al b data-bs-toggle='modal'.",
    "example": "<div class='modal' id='demo' tabindex='-1'>\n  <div class='modal-dialog'>\n    <div class='modal-content'><!-- header / body / footer --></div>\n  </div>\n</div>",
    "q": "Votre modale s'ouvre mais semble cassée (pas de style de boîte de dialogue). Quelle est la cause probable ?",
    "a": "Les wrappers .modal-dialog et/ou .modal-content manquent — l'imbrication à trois niveaux doit être exacte."
  },
  {
    "text": "Bootstrap 5 a abandonné jQuery : tous les composants interactifs sont en JS natif, déclenchés par des attributs data-bs-* (et non data-*).",
    "explain_dr": "v5 bla jQuery — components b data-bs-* (data-bs-toggle...).",
    "example": "<button data-bs-toggle='collapse' data-bs-target='#more'>More</button>",
    "q": "Vous avez copié un extrait Bootstrap 4 avec data-toggle='modal' et il ne fonctionne pas en v5. Pourquoi ?",
    "a": "Bootstrap 5 a renommé tous les attributs data vers l'espace de noms data-bs-*, il faut donc data-bs-toggle='modal'."
  },
  {
    "text": "Un accordéon est une pile de blocs .accordion-item ; data-bs-parent sur chaque élément repliable ne garde qu'un seul élément ouvert à la fois.",
    "explain_dr": "Accordion: items, w data-bs-parent bach wa7ed bo7do yt7al.",
    "example": "<div class='accordion' id='faq'>\n  <div class='accordion-item'>\n    <div id='c1' class='accordion-collapse collapse' data-bs-parent='#faq'>...</div>\n  </div>\n</div>",
    "q": "Deux éléments d'accordéon restent ouverts en même temps — quel attribut manque ?",
    "a": "data-bs-parent='#faq' sur chaque .accordion-collapse : sans lui, les éléments s'ouvrent et se ferment indépendamment."
  },
  {
    "text": "Un carrousel a besoin de .carousel.slide sur le wrapper, d'enfants .carousel-inner > .carousel-item (le premier .active), et de data-bs-ride='carousel' pour défiler automatiquement.",
    "explain_dr": "Carousel: .carousel.slide + .carousel-item (lwel active) + data-bs-ride.",
    "example": "<div id='hero' class='carousel slide' data-bs-ride='carousel'>\n  <div class='carousel-inner'>\n    <div class='carousel-item active'>...</div>\n  </div>\n</div>",
    "q": "Votre carrousel n'affiche que la première diapositive, statique. Qu'est-ce qui le fait défiler ?",
    "a": "data-bs-ride='carousel' sur le wrapper lance le défilement automatique ; ajoutez des contrôles précédent/suivant ou des indicateurs pour la navigation manuelle."
  },
  {
    "text": "Un dropdown est .dropdown enveloppant un bouton avec data-bs-toggle='dropdown' et une liste .dropdown-menu sœur.",
    "explain_dr": "Dropdown: button b data-bs-toggle='dropdown' + .dropdown-menu.",
    "example": "<div class='dropdown'>\n  <button class='btn' data-bs-toggle='dropdown'>Menu</button>\n  <ul class='dropdown-menu'><li><a class='dropdown-item' href='#'>One</a></li></ul>\n</div>",
    "q": "Le bouton du dropdown ne fait rien au clic. Que vérifier en premier ?",
    "a": "Que le bouton a bien data-bs-toggle='dropdown' et que le bundle JS de Bootstrap (avec Popper) est chargé — les dropdowns ont besoin de JavaScript."
  },
  {
    "text": "Les infobulles et popovers nécessitent une initialisation JavaScript dans Bootstrap 5 — data-bs-toggle='tooltip' seul ne suffit pas.",
    "explain_dr": "Tooltip khaso JS init, data attribute bo7do ma kafich.",
    "example": "<button id='tip' data-bs-toggle='tooltip' title='Hi'>?</button>\n<script>new bootstrap.Tooltip(document.getElementById('tip'));</script>",
    "q": "Pourquoi votre infobulle n'apparaît-elle pas alors que l'attribut est correct ?",
    "a": "Parce que Bootstrap 5 exige une initialisation JS explicite — par ex. new bootstrap.Tooltip(element) — pour les infobulles et les popovers."
  },
  {
    "text": "Les contrôles de formulaire utilisent .form-control (champs), .form-label, .form-select (listes déroulantes) et .form-check pour les cases à cocher/radios.",
    "explain_dr": "Forms: form-control l inputs, form-select l selects, form-check l checkboxes.",
    "example": "<label class='form-label'>Email</label>\n<input type='email' class='form-control' placeholder='you@mail.com'>\n<select class='form-select'>...</select>",
    "q": "Votre <select> ressemble à une liste déroulante native du navigateur. Quelle classe le stylise ?",
    "a": "form-select — la classe Bootstrap qui stylise les éléments <select> natifs (form-control ne concerne que les champs texte)."
  },
  {
    "text": "Validation personnalisée : ajoutez novalidate + .needs-validation au formulaire, puis ajoutez .was-validated à la soumission via JS pour afficher les retours valide/invalide.",
    "explain_dr": "Validation: novalidate + needs-validation, w melli t-submiti zid was-validated b JS.",
    "example": "<form class='needs-validation' novalidate>\n  <input class='form-control' required>\n  <div class='invalid-feedback'>Required.</div>\n</form>",
    "q": "Quand les styles de validation verts/rouges apparaissent-ils réellement ?",
    "a": "Seulement après l'ajout de .was-validated au formulaire (généralement à la soumission via JavaScript) — .needs-validation seul prépare juste le formulaire."
  },
  {
    "text": "Le mode sombre est un mode de couleur : ajoutez data-bs-theme='dark' à <html> ; les composants s'adaptent automatiquement via les variables CSS.",
    "explain_dr": "Dark mode: data-bs-theme='dark' 3la <html> w kolchi kaytbedel.",
    "example": "<html data-bs-theme='dark'><!-- toute la page passe en sombre --></html>",
    "q": "Comment limiter le mode sombre à une seule carte au lieu de toute la page ?",
    "a": "Mettez data-bs-theme='dark' sur le div qui enveloppe la carte au lieu de <html> — les modes de couleur se propagent aux descendants."
  },
  ],
},
  },
];

export const getRevisionNotes = (topic, langTrans) => {
  const block = revisionNotesData.find((b) => b.lang === langTrans);
  return (block && block.notes[topic]) || [];
};
