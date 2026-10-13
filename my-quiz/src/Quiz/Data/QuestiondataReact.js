export const reactQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "So2al 3la component basita b JSX: la fonction kat-return JSX, w React kay-affichi dakchi li kayn bin les balises. Chof chno kayn wast <h1>.",
        "text": "What does the Hello component render?",
        "code": "function Hello() {\n  return <h1>Hello, Aymane!</h1>;\n}",
        "answers": ["Nothing", "<h1> as plain text", "Hello, Aymane! as a heading", "An error"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "Props hiya l-wasila bach parent kay-3ti data l child: Greet kat-9bel props.name w kat-sta3mlo bin {}. Chno t-3tat f name wa9t l-sti3mal?",
        "text": "What renders?",
        "code": "function Greet(props) {\n  return <p>Hi, {props.name}!</p>;\n}\n// used as <Greet name=\"Sara\" />",
        "answers": ["Hi, Sara!", "Hi, {props.name}!", "Hi, !", "Error: props is undefined"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "useState(5) kay-initializi l-state b 5. L-paragraphe kay-affichi ghir dik l-valeur l-lowla, bla ay hesaba.",
        "text": "What does the paragraph show?",
        "code": "function Counter() {\n  const [count] = useState(5);\n  return <p>{count}</p>;\n}",
        "answers": ["0", "undefined", "count", "5"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "onClick={sayHi}: hna 3tina reference dyal la fonction, ma 3ayetna-ch liha. L-click howa li ghadi y-triggeriha.",
        "text": "When is sayHi called?",
        "code": "function App() {\n  const sayHi = () => alert(\"hi\");\n  return <button onClick={sayHi}>Click</button>;\n}",
        "answers": ["When the component renders", "When the button is clicked", "When the page loads", "Never"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "Ternary operator: show=true, donc l-condition l-lowla li ghadi t-return. Chof chno kat-return: element wla null?",
        "text": "What renders?",
        "code": "function Badge({ show }) {\n  return show ? <span>NEW</span> : null;\n}\n// used as <Badge show={true} />",
        "answers": ["NEW", "Nothing", "true", "null"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "items.map kat-creyi <li> l-kol item. L-ul ghadi y-affichi les trois items b tartibhom.",
        "text": "What renders?",
        "code": "const items = [\"a\", \"b\", \"c\"];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
        "answers": ["An empty list", "[a, b, c] as text", "Three list items: a, b, c", "An error"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "children howa l-contenu li kayn bin balises dyal component: <Card><p>Hello</p></Card> kay-7et <p>Hello</p> wast div.",
        "text": "What renders inside the div?",
        "code": "function Card({ children }) {\n  return <div className=\"card\">{children}</div>;\n}\n// used as <Card><p>Hello</p></Card>",
        "answers": ["Nothing", "The paragraph Hello", "The text children", "An error"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "F JSX, l-attribut dyal class smito className machi class. React ghadi y-warningi 3la had l-ghalta.",
        "text": "What is wrong with this component?",
        "code": "function Title() {\n  return <h1 class=\"big\">Hi</h1>;\n}",
        "answers": ["Must use className instead of class", "Nothing is wrong", "h1 needs a key", "Must be an arrow function"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "<>...</> howa Fragment: kay-jem3 les elements bla ma yzid element zyada f DOM. Les deux <p> ghadi y-bano.",
        "text": "What renders?",
        "code": "function Pair() {\n  return (\n    <>\n      <p>One</p>\n      <p>Two</p>\n    </>\n  );\n}",
        "answers": ["Only One", "A wrapper div", "Adjacent-elements error", "Both paragraphs, no extra wrapper"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "{a * b} f JSX kat-t-evalua k expression JavaScript 3adiya. Dir l-hesab b rasek.",
        "text": "What does the paragraph show?",
        "code": "function Total() {\n  const a = 6, b = 7;\n  return <p>{a * b}</p>;\n}",
        "answers": ["a * b", "67", "42", "NaN"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "setCount(count + 1) juj merrat: count hiya nafs l-valeur (0) f had l-render, donc les deux updates kay-sta3mlo nafs 0. Fker 3la batching.",
        "text": "After one click, what does the button show?",
        "code": "function Counter() {\n  const [count, setCount] = useState(0);\n  const add = () => {\n    setCount(count + 1);\n    setCount(count + 1);\n  };\n  return <button onClick={add}>{count}</button>;\n}",
        "answers": ["0", "2", "1", "NaN"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "L-form dyal function c => c + 1: kol update kat-sta3mel resultat dyal li 9belha f la queue. Chhal ghadi y-wsal f l-kher?",
        "text": "After one call, what is the state? (count starts at 0)",
        "code": "const add = () => {\n  setCount(c => c + 1);\n  setCount(c => c + 1);\n};",
        "answers": ["2", "1", "0", "3"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "items faragh: length = 0, w 0 && ... kay-return 0. React kay-renderi 0 k text. Had l-pattern ma-aman-ch.",
        "text": "What renders? (used with items={[]})",
        "code": "function Items({ items }) {\n  return <div>{items.length && <p>Has items</p>}</div>;\n}",
        "answers": ["Nothing", "Has items", "An error", "0"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "onClick kay-bghi function reference. Hna console.log(...) kat-texecuta wa9t l-render, machi wa9t l-click.",
        "text": "What happens when this component renders?",
        "code": "function App() {\n  return <button onClick={console.log(\"clicked\")}>Go</button>;\n}",
        "answers": ["Nothing until click", "clicked is logged during render; clicking does nothing", "clicked is logged on every click", "An error"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "Bla key, React ma kay-3refch anaho item li t-badel f la liste, donc l-reconciliation ma-mzyanach w ghadi y-warningi.",
        "text": "The key prop is missing. What will React do?",
        "code": "function List({ items }) {\n  return <ul>{items.map(item => <li>{item}</li>)}</ul>;\n}",
        "answers": ["Log a warning; it still renders", "It crashes", "It skips the list", "It ignores it silently"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "setUser({ name: 'Sara' }) kat-remplaci l-object kamel: age ma kay-t-mergeach, useState ma kay-dirch merge.",
        "text": "After clicking, what does the button show?",
        "code": "function Form() {\n  const [user, setUser] = useState({ name: \"Ali\", age: 20 });\n  const rename = () => setUser({ name: \"Sara\" });\n  return <button onClick={rename}>{user.name} is {user.age}</button>;\n}",
        "answers": ["Sara is 20", "Ali is 20", "Sara is undefined", "Sara is Sara"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "Input b value bla onChange kay-walli read-only: React kay-blocki l-typing 7it l-state ma kay-t-badelch.",
        "text": "The user types hello. What appears in the input?",
        "code": "function Input() {\n  const [v, setV] = useState(\"\");\n  return <input value={v} />;\n}",
        "answers": ["hello", "undefined", "An error", "Nothing appears"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "Deps []: l-effect kay-run ghir merra l-lowla b id=1. Mli id twalli 2, l-effect ma kay-t3awedch w l-data l-9dima kat-b9a.",
        "text": "The parent changes id from 1 to 2. What data shows?",
        "code": "function App({ id }) {\n  const [data, setData] = useState(null);\n  useEffect(() => {\n    fetch(\"/api/item/\" + id).then(r => r.json()).then(setData);\n  }, []);\n  return <p>{data?.name}</p>;\n}",
        "answers": ["Item 2", "Item 1", "null", "An error"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "key prop khasa: React kay-sta3melha ghir l-reconciliation w ma kay-dozhach l-component k prop. Chno ghadi y-wsal l {key} ldakhel?",
        "text": "What renders? (used as <Item key=\"a\" name=\"x\" />)",
        "code": "function Item({ key, name }) {\n  return <li>{key}: {name}</li>;\n}",
        "answers": [": x", "a: x", "undefined: x", "An error"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "F JSX, bin {} ghir les expressions li mkhadamin: if statement ma-kaynch, l-ternary hiya l-wasila. Chof anaho pattern howa l-expression s7i7a.",
        "text": "Which snippet correctly shows Loading... while loading is true, otherwise the data?",
        "answers": ["{loading && <p>Loading...</p>}{!loading && <p>{data}</p>}", "<p>{if (loading) Loading...}</p>", "{loading ? <p>Loading...</p> : <p>{data}</p>}", "<p>loading ? Loading... : {data}</p>"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "L-effect b [] kay-ched l-closure dyal l-render l-lowla: count = 0 dima. SetInterval ghadi y-3awed y-set nafs l-valeur kol merra.",
        "text": "What does the counter show after 5 seconds?",
        "code": "function Timer() {\n  const [count, setCount] = useState(0);\n  useEffect(() => {\n    const t = setInterval(() => setCount(count + 1), 1000);\n    return () => clearInterval(t);\n  }, []);\n  return <p>{count}</p>;\n}",
        "answers": ["5", "1", "0", "It keeps growing"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "useState(expensiveComputation()): l-argument kay-t-evalua kol render, wakha ghir l-valeur l-lowla li kay-t-sta3mel. Lazy form hiya () => ...",
        "text": "How often does expensiveComputation() run?",
        "code": "function App() {\n  const [value] = useState(expensiveComputation());\n  return <p>{value}</p>;\n}",
        "answers": ["On every render", "Once", "Never", "Only in production"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "useEffect bla deps array kay-run ba3d kol render, machi ghir merra wa7da.",
        "text": "How often does this log?",
        "code": "useEffect(() => {\n  console.log(\"effect\");\n});",
        "answers": ["Once", "Never", "After every render", "Only on unmount"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "Hooks rules: ma t-3ayet-ch l-hooks f conditions. L-order dyal hooks khaso y-b9a sabit bin renders.",
        "text": "What is wrong here?",
        "code": "function App({ flag }) {\n  if (flag) {\n    const [x] = useState(1);\n  }\n  const [y] = useState(2);\n  return <p>{y}</p>;\n}",
        "answers": ["Nothing", "useState needs an object", "flag must be state", "Hooks must run in the same order every render"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "React 18 kay-batch les updates li kayn f nafs l-event handler: re-render wa7da l-kolchi.",
        "text": "In React 18, how many re-renders does one click cause?",
        "code": "const handleClick = () => {\n  setName(\"Sara\");\n  setAge(25);\n};",
        "answers": ["Two", "One", "Zero", "It depends on the browser"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "useRef ma kay-triggerich re-render. L-valeur kat-t-badel f silence, w l-affichage kay-b9a b l-valeur dyal l-render li fat.",
        "text": "Does updating renders.current trigger a re-render?",
        "code": "function App() {\n  const renders = useRef(0);\n  renders.current++;\n  return <p>{renders.current}</p>;\n}",
        "answers": ["No", "Yes", "Only in StrictMode", "Only on first render"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "key jdid = component jdid: SearchBox b key 'a' kay-t-unmount w b key 'b' kay-t-mount b state jdid khawi.",
        "text": "When show toggles, what happens to SearchBox's internal state?",
        "code": "{show ? <SearchBox key=\"a\" /> : <SearchBox key=\"b\" />}",
        "answers": ["It is kept", "It merges", "It resets", "An error"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "L-cleanup function kay-run 9bel ma l-effect y-t3awed, w wa9t l-unmount dyal component.",
        "text": "When does the cleanup function run?",
        "code": "useEffect(() => {\n  const sub = api.subscribe(setData);\n  return () => sub.unsubscribe();\n}, []);",
        "answers": ["Never", "On unmount", "After every render", "Before the first render"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "F React, l-data kat-nzel ghir l-te7t (parent l child). Bach l-child y-3lem parent, l-parent khaso y-3tih callback k prop.",
        "text": "A child must tell its parent which item was picked. Which is the correct pattern?",
        "answers": ["The parent passes a callback prop like onSelect; the child calls it", "The child mutates a prop", "The child calls the parent's setState directly", "Children cannot communicate upward"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "total hiya valeur derivee men items: l-mezyan t-t-heseb f l-render, bla ma t-7ettha f useState jdid.",
        "text": "Should total be stored in its own useState?",
        "code": "const [items] = useState([10, 20, 30]);\nconst total = items.reduce((a, b) => a + b, 0);",
        "answers": ["Yes, always", "Only if items change", "For performance, yes", "No: compute it during render"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "options howa object jdid kol render: l-comparison f deps b reference, donc l-effect ghadi y-t3awed kol merra.",
        "text": "How often does the effect run?",
        "code": "function App() {\n  const options = { limit: 10 };\n  useEffect(() => {\n    fetchData(options);\n  }, [options]);\n  return <p>done</p>;\n}",
        "answers": ["After every render", "Once", "Never", "Only when limit changes"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "setTimeout kay-ched l-closure: alert(count) kay-shof count dyal wa9t l-click. Juj clicks = nafs l-closure m3awda.",
        "text": "What value is alerted, twice? (count is 0; user clicks twice quickly)",
        "code": "function App() {\n  const [count, setCount] = useState(0);\n  const delayed = () => {\n    setTimeout(() => alert(count), 2000);\n  };\n  return <button onClick={delayed}>Show</button>;\n}",
        "answers": ["0 then 1", "1 then 2", "0 then 0", "2 then 2"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "useCallback b []: save kay-ched draft l-lowla ghir. Les changements li men be3d ma kay-banouch ldakhel.",
        "text": "When save() is called later, what does it send? (draft changes afterwards)",
        "code": "const save = useCallback(() => api.save(draft), []);",
        "answers": ["The latest draft", "The draft from the first render", "undefined", "An error"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "useState(user.name): l-argument ghir initial value. Mli l-parent y-badel user, l-state dyalek ma kay-t-updateach.",
        "text": "What does the paragraph show? (parent later passes a different user)",
        "code": "function UserCard({ user }) {\n  const [name] = useState(user.name);\n  return <p>{name}</p>;\n}",
        "answers": ["The new name", "Both names", "Nothing", "The old name"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "StrictMode f development kay-mounti, y-unmounti, w y-3awed y-mounti bach y-ktechef les bugs: l-effect kay-run juj merrat.",
        "text": "In development with StrictMode, how many times does this log on first mount?",
        "code": "useEffect(() => {\n  console.log(\"mounted\");\n}, []);",
        "answers": ["Twice", "Once", "Never", "Three times"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "Les updaters kay-texecutaw b tartib f la queue: kol wa7ed kay-shof l-resultat dyal li 9eblo. Chof chno ghadi y-loggi kol wa7ed.",
        "text": "What is logged after one click? (count is 0)",
        "code": "const handle = () => {\n  setCount(c => { console.log(c); return c + 1; });\n  setCount(c => { console.log(c); return c + 1; });\n};",
        "answers": ["0 then 0", "0 then 1", "1 then 2", "Nothing"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "useMemo b [items]: l-reduce kay-t3awed ghir mli l-reference dyal items t-t-badel.",
        "text": "When does the reduce re-run?",
        "code": "const total = useMemo(() => items.reduce((a, b) => a + b.price, 0), [items]);",
        "answers": ["On every render", "Never", "Only when items changes", "Only on mount"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "useContext kay-3ti l-valeur dyal a9rab provider. Mli l-provider y-badel l-valeur, l-child kay-t-re-render b l-jdida.",
        "text": "What happens to Child? (provider value changes to \"dark\")",
        "code": "const ThemeContext = createContext(\"light\");\nfunction Child() {\n  const theme = useContext(ThemeContext);\n  return <p>{theme}</p>;\n}",
        "answers": ["Nothing", "It unmounts", "An error", "It re-renders showing dark"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "value={v} b v undefined l-wwel: l-input y-bda uncontrolled w men be3d y-walli controlled. React kay-warningi 3la had l-switch.",
        "text": "What warning does React show?",
        "code": "function Input() {\n  const [v, setV] = useState();\n  return <input value={v} onChange={e => setV(e.target.value)} />;\n}",
        "answers": ["Missing key", "Changing an uncontrolled input to controlled", "Invalid hook call", "No warning"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "Les keys khashom y-kono unique bin siblings. Duplicates kay-3tiw warning w l-reconciliation kay-ghlat.",
        "text": "Two siblings share the same key. What happens?",
        "code": "<ul>\n  <li key=\"a\">One</li>\n  <li key=\"a\">Two</li>\n</ul>",
        "answers": ["React warns; updates may hit the wrong element", "It renders fine", "It crashes", "The second li is skipped"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "Effect bla deps kay-run ba3d kol render, w setCount kay-triggeri render jdid: loop ma kay-7besch.",
        "text": "What happens?",
        "code": "function App() {\n  const [count, setCount] = useState(0);\n  useEffect(() => {\n    setCount(count + 1);\n  });\n  return <p>{count}</p>;\n}",
        "answers": ["Infinite re-render loop", "It counts to 1 and stops", "Nothing", "Error: setState in effect"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "Lazy initializer () => Math.random() kay-run ghir merra l-lowla. L-state kay-b9a sabit bin les renders.",
        "text": "Does id change across re-renders?",
        "code": "const [id] = useState(() => Math.random());",
        "answers": ["Yes", "Only in StrictMode", "No", "Only when state changes"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "ref kay-persista bin renders, ama variable 3adiya kat-t-reset l 0 kol render. Ba3d re-render, chkon li 7afed l-valeur dyalo?",
        "text": "After a re-render, which one kept its value?",
        "code": "function App() {\n  const ref = useRef(0);\n  let plain = 0;\n  ref.current++;\n  plain++;\n  return <p>{ref.current}-{plain}</p>;\n}",
        "answers": ["plain", "ref.current", "Both", "Neither"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "key={index}: l-state marbot b la position machi b l-item. Mli t-zid item f l-wwel, kolchi kay-t-shift w l-state kay-t-khellet.",
        "text": "After prepending, which row keeps the first row's old input state?",
        "code": "const [items, setItems] = useState([\"a\", \"b\"]);\n// each row: <Row key={index} /> with its own input state\n// then setItems([\"new\", \"a\", \"b\"])",
        "answers": ["The row showing new", "The row showing a", "No row keeps it", "All rows reset"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "L-effect function ma khashach t-return promise: l-cleanup ma kay-t-fhemch promise. Dir async function ldakhel w 3ayet liha.",
        "text": "What is wrong here?",
        "code": "useEffect(async () => {\n  const data = await fetchData();\n  setData(data);\n}, []);",
        "answers": ["Nothing", "async is required", "fetchData must be outside", "Effect callbacks must not return a promise"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "setCount stable bin renders: l-identity ma kay-t-badelch, donc l-effect ma ghadi-ch y-t3awed.",
        "text": "The component re-renders. Does the effect re-run?",
        "code": "const [count, setCount] = useState(0);\nuseEffect(() => {\n  console.log(\"setup\");\n}, [setCount]);",
        "answers": ["Yes", "No", "Only if count changed", "Only in dev"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "setCount(0) w count deja 0: React kay-compari b Object.is w kay-bail-out. Ma kaynch re-render.",
        "text": "Does the component re-render? (count is already 0; user clicks reset)",
        "code": "const [count, setCount] = useState(0);\nconst reset = () => setCount(0);",
        "answers": ["Yes", "Only in StrictMode", "No", "Yes, twice"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "useLayoutEffect kay-run 9bel ma l-browser y-paint; useEffect kay-run men be3d l-paint.",
        "text": "Which hook runs before the browser paints?",
        "answers": ["useEffect", "useLayoutEffect", "useMemo", "useRef"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "key t-badel = component jdid: l-9dim kay-t-unmount w jdid kay-t-mount, w l-state l-dakhli kay-t-reset.",
        "text": "What happens to UserForm's internal state? (userId changes from 1 to 2)",
        "code": "<UserForm key={userId} />",
        "answers": ["Reset: a fresh mount", "Kept", "Merged", "An error"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "F React 18, hta les updates li wast setTimeout kay-t-batchaw. Les updaters b function form kay-texecutaw b tartibhom.",
        "text": "What is count after the timeout fires? (count starts at 0; React 18)",
        "code": "const handle = () => {\n  setTimeout(() => {\n    setCount(c => c + 1);\n    setCount(c => c + 1);\n  }, 1000);\n};",
        "answers": ["1", "0", "3", "2"],
        "correct": 3,
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
        "explain_dr": "So2al 3la component basita b JSX: la fonction kat-return JSX, w React kay-affichi dakchi li kayn bin les balises. Chof chno kayn wast <h1>.",
        "text": "Qu'est-ce que le composant Hello affiche ?",
        "code": "function Hello() {\n  return <h1>Hello, Aymane!</h1>;\n}",
        "answers": ["Rien", "<h1> en texte brut", "Hello, Aymane! comme titre", "Une erreur"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "Props hiya l-wasila bach parent kay-3ti data l child: Greet kat-9bel props.name w kat-sta3mlo bin {}. Chno t-3tat f name wa9t l-sti3mal?",
        "text": "Qu'est-ce qui s'affiche ?",
        "code": "function Greet(props) {\n  return <p>Hi, {props.name}!</p>;\n}\n// utilisé comme <Greet name=\"Sara\" />",
        "answers": ["Hi, Sara!", "Hi, {props.name}!", "Hi, !", "Erreur : props est undefined"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "useState(5) kay-initializi l-state b 5. L-paragraphe kay-affichi ghir dik l-valeur l-lowla, bla ay hesaba.",
        "text": "Qu'affiche le paragraphe ?",
        "code": "function Counter() {\n  const [count] = useState(5);\n  return <p>{count}</p>;\n}",
        "answers": ["0", "undefined", "count", "5"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "onClick={sayHi}: hna 3tina reference dyal la fonction, ma 3ayetna-ch liha. L-click howa li ghadi y-triggeriha.",
        "text": "Quand sayHi est-elle appelée ?",
        "code": "function App() {\n  const sayHi = () => alert(\"hi\");\n  return <button onClick={sayHi}>Click</button>;\n}",
        "answers": ["Quand le composant s'affiche", "Quand on clique sur le bouton", "Quand la page charge", "Jamais"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "Ternary operator: show=true, donc l-condition l-lowla li ghadi t-return. Chof chno kat-return: element wla null?",
        "text": "Qu'est-ce qui s'affiche ?",
        "code": "function Badge({ show }) {\n  return show ? <span>NEW</span> : null;\n}\n// utilisé comme <Badge show={true} />",
        "answers": ["NEW", "Rien", "true", "null"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "items.map kat-creyi <li> l-kol item. L-ul ghadi y-affichi les trois items b tartibhom.",
        "text": "Qu'est-ce qui s'affiche ?",
        "code": "const items = [\"a\", \"b\", \"c\"];\nfunction List() {\n  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;\n}",
        "answers": ["Une liste vide", "[a, b, c] en texte", "Trois éléments : a, b, c", "Une erreur"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "children howa l-contenu li kayn bin balises dyal component: <Card><p>Hello</p></Card> kay-7et <p>Hello</p> wast div.",
        "text": "Qu'est-ce qui s'affiche à l'intérieur de la div ?",
        "code": "function Card({ children }) {\n  return <div className=\"card\">{children}</div>;\n}\n// utilisé comme <Card><p>Hello</p></Card>",
        "answers": ["Rien", "Le paragraphe Hello", "Le texte children", "Une erreur"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "F JSX, l-attribut dyal class smito className machi class. React ghadi y-warningi 3la had l-ghalta.",
        "text": "Quel est le problème avec ce composant ?",
        "code": "function Title() {\n  return <h1 class=\"big\">Hi</h1>;\n}",
        "answers": ["Il faut utiliser className au lieu de class", "Rien ne cloche", "h1 a besoin d'une key", "Ça doit être une fonction fléchée"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "<>...</> howa Fragment: kay-jem3 les elements bla ma yzid element zyada f DOM. Les deux <p> ghadi y-bano.",
        "text": "Qu'est-ce qui s'affiche ?",
        "code": "function Pair() {\n  return (\n    <>\n      <p>One</p>\n      <p>Two</p>\n    </>\n  );\n}",
        "answers": ["Seulement One", "Une div enveloppante", "Erreur d'éléments adjacents", "Les deux paragraphes, sans div en plus"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "{a * b} f JSX kat-t-evalua k expression JavaScript 3adiya. Dir l-hesab b rasek.",
        "text": "Qu'affiche le paragraphe ?",
        "code": "function Total() {\n  const a = 6, b = 7;\n  return <p>{a * b}</p>;\n}",
        "answers": ["a * b", "67", "42", "NaN"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "setCount(count + 1) juj merrat: count hiya nafs l-valeur (0) f had l-render, donc les deux updates kay-sta3mlo nafs 0. Fker 3la batching.",
        "text": "Après un clic, qu'affiche le bouton ?",
        "code": "function Counter() {\n  const [count, setCount] = useState(0);\n  const add = () => {\n    setCount(count + 1);\n    setCount(count + 1);\n  };\n  return <button onClick={add}>{count}</button>;\n}",
        "answers": ["0", "2", "1", "NaN"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "L-form dyal function c => c + 1: kol update kat-sta3mel resultat dyal li 9belha f la queue. Chhal ghadi y-wsal f l-kher?",
        "text": "Après un appel, quel est l'état ? (count part de 0)",
        "code": "const add = () => {\n  setCount(c => c + 1);\n  setCount(c => c + 1);\n};",
        "answers": ["2", "1", "0", "3"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "items faragh: length = 0, w 0 && ... kay-return 0. React kay-renderi 0 k text. Had l-pattern ma-aman-ch.",
        "text": "Qu'est-ce qui s'affiche ? (utilisé avec items={[]})",
        "code": "function Items({ items }) {\n  return <div>{items.length && <p>Has items</p>}</div>;\n}",
        "answers": ["Rien", "Has items", "Une erreur", "0"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "onClick kay-bghi function reference. Hna console.log(...) kat-texecuta wa9t l-render, machi wa9t l-click.",
        "text": "Que se passe-t-il quand ce composant s'affiche ?",
        "code": "function App() {\n  return <button onClick={console.log(\"clicked\")}>Go</button>;\n}",
        "answers": ["Rien jusqu'au clic", "clicked est loggé pendant le rendu ; le clic ne fait rien", "clicked est loggé à chaque clic", "Une erreur"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "Bla key, React ma kay-3refch anaho item li t-badel f la liste, donc l-reconciliation ma-mzyanach w ghadi y-warningi.",
        "text": "Il manque la prop key. Que va faire React ?",
        "code": "function List({ items }) {\n  return <ul>{items.map(item => <li>{item}</li>)}</ul>;\n}",
        "answers": ["Il logge un avertissement ; ça s'affiche quand même", "Il plante", "Il saute la liste", "Il l'ignore silencieusement"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "setUser({ name: 'Sara' }) kat-remplaci l-object kamel: age ma kay-t-mergeach, useState ma kay-dirch merge.",
        "text": "Après le clic, qu'affiche le bouton ?",
        "code": "function Form() {\n  const [user, setUser] = useState({ name: \"Ali\", age: 20 });\n  const rename = () => setUser({ name: \"Sara\" });\n  return <button onClick={rename}>{user.name} is {user.age}</button>;\n}",
        "answers": ["Sara is 20", "Ali is 20", "Sara is undefined", "Sara is Sara"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "Input b value bla onChange kay-walli read-only: React kay-blocki l-typing 7it l-state ma kay-t-badelch.",
        "text": "L'utilisateur tape hello. Qu'apparaît dans le champ ?",
        "code": "function Input() {\n  const [v, setV] = useState(\"\");\n  return <input value={v} />;\n}",
        "answers": ["hello", "undefined", "Une erreur", "Rien n'apparaît"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "Deps []: l-effect kay-run ghir merra l-lowla b id=1. Mli id twalli 2, l-effect ma kay-t3awedch w l-data l-9dima kat-b9a.",
        "text": "Le parent change id de 1 à 2. Quelles données s'affichent ?",
        "code": "function App({ id }) {\n  const [data, setData] = useState(null);\n  useEffect(() => {\n    fetch(\"/api/item/\" + id).then(r => r.json()).then(setData);\n  }, []);\n  return <p>{data?.name}</p>;\n}",
        "answers": ["Item 2", "Item 1", "null", "Une erreur"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "key prop khasa: React kay-sta3melha ghir l-reconciliation w ma kay-dozhach l-component k prop. Chno ghadi y-wsal l {key} ldakhel?",
        "text": "Qu'est-ce qui s'affiche ? (utilisé comme <Item key=\"a\" name=\"x\" />)",
        "code": "function Item({ key, name }) {\n  return <li>{key}: {name}</li>;\n}",
        "answers": [": x", "a: x", "undefined: x", "Une erreur"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "F JSX, bin {} ghir les expressions li mkhadamin: if statement ma-kaynch, l-ternary hiya l-wasila. Chof anaho pattern howa l-expression s7i7a.",
        "text": "Quel extrait affiche correctement Loading... quand loading vaut true, sinon les données ?",
        "answers": ["{loading && <p>Loading...</p>}{!loading && <p>{data}</p>}", "<p>{if (loading) Loading...}</p>", "{loading ? <p>Loading...</p> : <p>{data}</p>}", "<p>loading ? Loading... : {data}</p>"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "L-effect b [] kay-ched l-closure dyal l-render l-lowla: count = 0 dima. SetInterval ghadi y-3awed y-set nafs l-valeur kol merra.",
        "text": "Qu'affiche le compteur après 5 secondes ?",
        "code": "function Timer() {\n  const [count, setCount] = useState(0);\n  useEffect(() => {\n    const t = setInterval(() => setCount(count + 1), 1000);\n    return () => clearInterval(t);\n  }, []);\n  return <p>{count}</p>;\n}",
        "answers": ["5", "1", "0", "Il grandit sans fin"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "useState(expensiveComputation()): l-argument kay-t-evalua kol render, wakha ghir l-valeur l-lowla li kay-t-sta3mel. Lazy form hiya () => ...",
        "text": "À quelle fréquence expensiveComputation() s'exécute-t-elle ?",
        "code": "function App() {\n  const [value] = useState(expensiveComputation());\n  return <p>{value}</p>;\n}",
        "answers": ["À chaque rendu", "Une fois", "Jamais", "Seulement en production"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "useEffect bla deps array kay-run ba3d kol render, machi ghir merra wa7da.",
        "text": "À quelle fréquence ce log s'affiche-t-il ?",
        "code": "useEffect(() => {\n  console.log(\"effect\");\n});",
        "answers": ["Une fois", "Jamais", "Après chaque rendu", "Seulement au démontage"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "Hooks rules: ma t-3ayet-ch l-hooks f conditions. L-order dyal hooks khaso y-b9a sabit bin renders.",
        "text": "Quel est le problème ici ?",
        "code": "function App({ flag }) {\n  if (flag) {\n    const [x] = useState(1);\n  }\n  const [y] = useState(2);\n  return <p>{y}</p>;\n}",
        "answers": ["Rien", "useState a besoin d'un objet", "flag doit être un state", "Les hooks doivent s'exécuter dans le même ordre à chaque rendu"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "React 18 kay-batch les updates li kayn f nafs l-event handler: re-render wa7da l-kolchi.",
        "text": "Avec React 18, combien de re-rendus un clic provoque-t-il ?",
        "code": "const handleClick = () => {\n  setName(\"Sara\");\n  setAge(25);\n};",
        "answers": ["Deux", "Un", "Zéro", "Ça dépend du navigateur"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "useRef ma kay-triggerich re-render. L-valeur kat-t-badel f silence, w l-affichage kay-b9a b l-valeur dyal l-render li fat.",
        "text": "Est-ce que modifier renders.current déclenche un re-rendu ?",
        "code": "function App() {\n  const renders = useRef(0);\n  renders.current++;\n  return <p>{renders.current}</p>;\n}",
        "answers": ["Non", "Oui", "Seulement en StrictMode", "Seulement au premier rendu"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "key jdid = component jdid: SearchBox b key 'a' kay-t-unmount w b key 'b' kay-t-mount b state jdid khawi.",
        "text": "Quand show change, qu'arrive-t-il à l'état interne de SearchBox ?",
        "code": "{show ? <SearchBox key=\"a\" /> : <SearchBox key=\"b\" />}",
        "answers": ["Il est gardé", "Il fusionne", "Il se réinitialise", "Une erreur"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "L-cleanup function kay-run 9bel ma l-effect y-t3awed, w wa9t l-unmount dyal component.",
        "text": "Quand la fonction de nettoyage s'exécute-t-elle ?",
        "code": "useEffect(() => {\n  const sub = api.subscribe(setData);\n  return () => sub.unsubscribe();\n}, []);",
        "answers": ["Jamais", "Au démontage", "Après chaque rendu", "Avant le premier rendu"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "F React, l-data kat-nzel ghir l-te7t (parent l child). Bach l-child y-3lem parent, l-parent khaso y-3tih callback k prop.",
        "text": "Un enfant doit dire à son parent quel élément a été choisi. Quel est le bon pattern ?",
        "answers": ["Le parent passe une prop callback comme onSelect ; l'enfant l'appelle", "L'enfant modifie une prop", "L'enfant appelle directement le setState du parent", "Les enfants ne peuvent pas communiquer vers le haut"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "total hiya valeur derivee men items: l-mezyan t-t-heseb f l-render, bla ma t-7ettha f useState jdid.",
        "text": "Faut-il stocker total dans son propre useState ?",
        "code": "const [items] = useState([10, 20, 30]);\nconst total = items.reduce((a, b) => a + b, 0);",
        "answers": ["Oui, toujours", "Seulement si items change", "Oui, pour la performance", "Non : le calculer pendant le rendu"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "options howa object jdid kol render: l-comparison f deps b reference, donc l-effect ghadi y-t3awed kol merra.",
        "text": "À quelle fréquence l'effet s'exécute-t-il ?",
        "code": "function App() {\n  const options = { limit: 10 };\n  useEffect(() => {\n    fetchData(options);\n  }, [options]);\n  return <p>done</p>;\n}",
        "answers": ["Après chaque rendu", "Une fois", "Jamais", "Seulement quand limit change"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "setTimeout kay-ched l-closure: alert(count) kay-shof count dyal wa9t l-click. Juj clicks = nafs l-closure m3awda.",
        "text": "Quelle valeur est alertée, deux fois ? (count vaut 0 ; l'utilisateur clique deux fois vite)",
        "code": "function App() {\n  const [count, setCount] = useState(0);\n  const delayed = () => {\n    setTimeout(() => alert(count), 2000);\n  };\n  return <button onClick={delayed}>Show</button>;\n}",
        "answers": ["0 puis 1", "1 puis 2", "0 puis 0", "2 puis 2"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "useCallback b []: save kay-ched draft l-lowla ghir. Les changements li men be3d ma kay-banouch ldakhel.",
        "text": "Quand save() est appelée plus tard, qu'envoie-t-elle ? (draft change après)",
        "code": "const save = useCallback(() => api.save(draft), []);",
        "answers": ["Le dernier draft", "Le draft du premier rendu", "undefined", "Une erreur"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "useState(user.name): l-argument ghir initial value. Mli l-parent y-badel user, l-state dyalek ma kay-t-updateach.",
        "text": "Qu'affiche le paragraphe ? (le parent passe ensuite un autre utilisateur)",
        "code": "function UserCard({ user }) {\n  const [name] = useState(user.name);\n  return <p>{name}</p>;\n}",
        "answers": ["Le nouveau nom", "Les deux noms", "Rien", "L'ancien nom"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "StrictMode f development kay-mounti, y-unmounti, w y-3awed y-mounti bach y-ktechef les bugs: l-effect kay-run juj merrat.",
        "text": "En développement avec StrictMode, combien de fois ce log s'affiche-t-il au premier montage ?",
        "code": "useEffect(() => {\n  console.log(\"mounted\");\n}, []);",
        "answers": ["Deux fois", "Une fois", "Jamais", "Trois fois"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "Les updaters kay-texecutaw b tartib f la queue: kol wa7ed kay-shof l-resultat dyal li 9eblo. Chof chno ghadi y-loggi kol wa7ed.",
        "text": "Qu'est-ce qui est loggé après un clic ? (count vaut 0)",
        "code": "const handle = () => {\n  setCount(c => { console.log(c); return c + 1; });\n  setCount(c => { console.log(c); return c + 1; });\n};",
        "answers": ["0 puis 0", "0 puis 1", "1 puis 2", "Rien"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "useMemo b [items]: l-reduce kay-t3awed ghir mli l-reference dyal items t-t-badel.",
        "text": "Quand le reduce se réexécute-t-il ?",
        "code": "const total = useMemo(() => items.reduce((a, b) => a + b.price, 0), [items]);",
        "answers": ["À chaque rendu", "Jamais", "Seulement quand items change", "Seulement au montage"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "useContext kay-3ti l-valeur dyal a9rab provider. Mli l-provider y-badel l-valeur, l-child kay-t-re-render b l-jdida.",
        "text": "Qu'arrive-t-il à Child ? (la valeur du provider passe à \"dark\")",
        "code": "const ThemeContext = createContext(\"light\");\nfunction Child() {\n  const theme = useContext(ThemeContext);\n  return <p>{theme}</p>;\n}",
        "answers": ["Rien", "Il se démonte", "Une erreur", "Il se re-rend avec dark"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "value={v} b v undefined l-wwel: l-input y-bda uncontrolled w men be3d y-walli controlled. React kay-warningi 3la had l-switch.",
        "text": "Quel avertissement React affiche-t-il ?",
        "code": "function Input() {\n  const [v, setV] = useState();\n  return <input value={v} onChange={e => setV(e.target.value)} />;\n}",
        "answers": ["Key manquante", "Passage d'un input non contrôlé à contrôlé", "Appel de hook invalide", "Aucun avertissement"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "Les keys khashom y-kono unique bin siblings. Duplicates kay-3tiw warning w l-reconciliation kay-ghlat.",
        "text": "Deux frères partagent la même key. Que se passe-t-il ?",
        "code": "<ul>\n  <li key=\"a\">One</li>\n  <li key=\"a\">Two</li>\n</ul>",
        "answers": ["React avertit ; les mises à jour peuvent toucher le mauvais élément", "Ça s'affiche bien", "Ça plante", "Le deuxième li est sauté"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "Effect bla deps kay-run ba3d kol render, w setCount kay-triggeri render jdid: loop ma kay-7besch.",
        "text": "Que se passe-t-il ?",
        "code": "function App() {\n  const [count, setCount] = useState(0);\n  useEffect(() => {\n    setCount(count + 1);\n  });\n  return <p>{count}</p>;\n}",
        "answers": ["Boucle infinie de re-rendus", "Ça compte jusqu'à 1 et s'arrête", "Rien", "Erreur : setState dans un effet"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "Lazy initializer () => Math.random() kay-run ghir merra l-lowla. L-state kay-b9a sabit bin les renders.",
        "text": "Est-ce que id change entre les re-rendus ?",
        "code": "const [id] = useState(() => Math.random());",
        "answers": ["Oui", "Seulement en StrictMode", "Non", "Seulement quand le state change"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "ref kay-persista bin renders, ama variable 3adiya kat-t-reset l 0 kol render. Ba3d re-render, chkon li 7afed l-valeur dyalo?",
        "text": "Après un re-rendu, lequel a gardé sa valeur ?",
        "code": "function App() {\n  const ref = useRef(0);\n  let plain = 0;\n  ref.current++;\n  plain++;\n  return <p>{ref.current}-{plain}</p>;\n}",
        "answers": ["plain", "ref.current", "Les deux", "Aucun"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "key={index}: l-state marbot b la position machi b l-item. Mli t-zid item f l-wwel, kolchi kay-t-shift w l-state kay-t-khellet.",
        "text": "Après l'ajout au début, quelle ligne garde l'ancien état de saisie de la première ligne ?",
        "code": "const [items, setItems] = useState([\"a\", \"b\"]);\n// chaque ligne : <Row key={index} /> avec son propre état de saisie\n// puis setItems([\"new\", \"a\", \"b\"])",
        "answers": ["La ligne qui affiche new", "La ligne qui affiche a", "Aucune ligne ne le garde", "Toutes les lignes se réinitialisent"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "L-effect function ma khashach t-return promise: l-cleanup ma kay-t-fhemch promise. Dir async function ldakhel w 3ayet liha.",
        "text": "Quel est le problème ici ?",
        "code": "useEffect(async () => {\n  const data = await fetchData();\n  setData(data);\n}, []);",
        "answers": ["Rien", "async est requis", "fetchData doit être dehors", "Les callbacks d'effet ne doivent pas retourner une promesse"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "setCount stable bin renders: l-identity ma kay-t-badelch, donc l-effect ma ghadi-ch y-t3awed.",
        "text": "Le composant se re-rend. L'effet se réexécute-t-il ?",
        "code": "const [count, setCount] = useState(0);\nuseEffect(() => {\n  console.log(\"setup\");\n}, [setCount]);",
        "answers": ["Oui", "Non", "Seulement si count a changé", "Seulement en dev"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "setCount(0) w count deja 0: React kay-compari b Object.is w kay-bail-out. Ma kaynch re-render.",
        "text": "Est-ce que le composant se re-rend ? (count vaut déjà 0 ; l'utilisateur clique reset)",
        "code": "const [count, setCount] = useState(0);\nconst reset = () => setCount(0);",
        "answers": ["Oui", "Seulement en StrictMode", "Non", "Oui, deux fois"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "useLayoutEffect kay-run 9bel ma l-browser y-paint; useEffect kay-run men be3d l-paint.",
        "text": "Quel hook s'exécute avant que le navigateur ne peigne l'écran ?",
        "answers": ["useEffect", "useLayoutEffect", "useMemo", "useRef"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "key t-badel = component jdid: l-9dim kay-t-unmount w jdid kay-t-mount, w l-state l-dakhli kay-t-reset.",
        "text": "Qu'arrive-t-il à l'état interne de UserForm ? (userId passe de 1 à 2)",
        "code": "<UserForm key={userId} />",
        "answers": ["Réinitialisé : nouveau montage", "Gardé", "Fusionné", "Une erreur"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "F React 18, hta les updates li wast setTimeout kay-t-batchaw. Les updaters b function form kay-texecutaw b tartibhom.",
        "text": "Combien vaut count après le timeout ? (count part de 0 ; React 18)",
        "code": "const handle = () => {\n  setTimeout(() => {\n    setCount(c => c + 1);\n    setCount(c => c + 1);\n  }, 1000);\n};",
        "answers": ["1", "0", "3", "2"],
        "correct": 3,
        "selection": null
      }
    ]
  }
];
