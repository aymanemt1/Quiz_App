export const nodejsQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la typeof f JavaScript: chnu kayrje3 mli katsewlo 3la array? Fker f l type l 9dim li kayt7seb bih.",
        "text": "What will this code print?",
        "code": "console.log(typeof []);",
        "answers": [
          "array",
          "object",
          "undefined",
          "list"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la l + f JS m3a numbers w strings: wach kayjme3 wla kaylse9? Fker f l ordre mn liser l limen.",
        "text": "What will this code print?",
        "code": "console.log(1 + \"2\" + 3);",
        "answers": [
          "6",
          "15",
          "123",
          "NaN"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la typeof null: kayn bug 9dim f JavaScript khalla l jawab ghareb. Fker chnu howa.",
        "text": "What will this code print?",
        "code": "console.log(typeof null);",
        "answers": [
          "object",
          "null",
          "undefined",
          "number"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la JSON.parse: chnu katwli l string dyal JSON mli katparseiha? Fker f object 7a9i9i.",
        "text": "What will this code print?",
        "code": "const data = JSON.parse('{\"name\":\"Aymane\"}');\nconsole.log(data.name);",
        "answers": [
          "Aymane",
          "undefined",
          "{\"name\":\"Aymane\"}",
          "SyntaxError"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la path.extname: chnu katrje3 b dabt? Fker wach m3aha n9ta wla la.",
        "text": "What will this code print?",
        "code": "const path = require('path');\nconsole.log(path.extname('photo.png'));",
        "answers": [
          "png",
          ".png",
          "photo.png",
          "undefined"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la URL f Node: kifach katjbed 9ima dyal parametre mn query string? Fker f searchParams.",
        "text": "What will this code print?",
        "code": "const { URL } = require('url');\nconst u = new URL('https://shop.com/search?q=node&page=2');\nconsole.log(u.searchParams.get('page'));",
        "answers": [
          "page=2",
          "?page=2",
          "2",
          "null"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la Buffer: .length hna kat7seb chnu - 7rouf wla bytes? Fker f ABC.",
        "text": "What will this code print?",
        "code": "console.log(Buffer.from('ABC').length);",
        "answers": [
          "3",
          "6",
          "24",
          "undefined"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la require: mli file ma exporta walo, chnu kayrje3 require? Fker chnu ghatkoun add.",
        "text": "The math.js file forgot module.exports. What happens when app.js runs?",
        "code": "// math.js:  const add = (a, b) => a + b;\n// app.js:\nconst add = require('./math');\nconsole.log(add(2, 3));",
        "answers": [
          "It prints 5",
          "It prints undefined",
          "ReferenceError: add is not defined",
          "TypeError: add is not a function"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la * m3a strings: wach kaylse9 b7al + wla kay7wel l numbers? Fker f l far9 binathom.",
        "text": "What will this code print?",
        "code": "console.log('2' * '3');",
        "answers": [
          "\"23\"",
          "6",
          "NaN",
          "TypeError"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la property ma kaynach: chnu kayrje3 JS bla ma yt2erreur? Fker f undefined.",
        "text": "What will this code print?",
        "code": "const user = { name: 'Aymane' };\nconsole.log(user.age);",
        "answers": [
          "undefined",
          "null",
          "0",
          "ReferenceError"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la floats: 3lach 0.1 + 0.2 ma kat3tich 0.3 nichan? Fker f kifach l PC kaykhzen l a3dad.",
        "text": "What will this code print?",
        "code": "console.log(0.1 + 0.2);",
        "answers": [
          "0.3",
          "0.30",
          "0.30000000000000004",
          "NaN"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la var f loop m3a setTimeout: 3lach kolchi kaytbe3 nafs l 9ima? Fker f scope dyal var.",
        "text": "What gets printed?",
        "code": "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}",
        "answers": [
          "3 3 3",
          "0 1 2",
          "0 0 0",
          "1 2 3"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la + bin arrays: wach kayjme3hom wla kay7welhom l strings lwel? Fker f toString.",
        "text": "What will this code print?",
        "code": "console.log([1, 2, 3] + [4, 5]);",
        "answers": [
          "[1,2,3,4,5]",
          "[5,7]",
          "NaN",
          "\"1,2,34,5\""
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la === m3a objects: wach kay9aren l mo7tawa wla wach homa nafs l object? Fker f reference.",
        "text": "What will this code print?",
        "code": "const a = {};\nconst b = {};\nconsole.log(a === b);",
        "answers": [
          "true",
          "false",
          "TypeError",
          "undefined"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la EventEmitter: chnu kayw9e3 mli kat emit 9bel ma tssjel l listener? Fker f l ordre.",
        "text": "Why is nothing printed?",
        "code": "const { EventEmitter } = require('events');\nconst e = new EventEmitter();\ne.emit('ping');\ne.on('ping', () => console.log('pong'));",
        "answers": [
          "EventEmitter is not imported correctly",
          "console.log is async",
          "The listener was registered after emit, so it missed the event",
          "'ping' is a reserved event name"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la typeof NaN: l isem kaybda b N dyal Number, walakin chnu howa l type b dabt? Fker fih.",
        "text": "What will this code print?",
        "code": "console.log(typeof NaN);",
        "answers": [
          "number",
          "NaN",
          "undefined",
          "float"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la parseInt: chnu kaydir mli kayl9a 7rouf mor l a9am? Fker wach kaykemel wla kay7bes.",
        "text": "What will this code print?",
        "code": "console.log(parseInt('10px'));",
        "answers": [
          "10px",
          "NaN",
          "TypeError",
          "10"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la sort() bla compare function: kifach kaytri l a9am? Fker wach b7al numbers wla b7al strings.",
        "text": "What will this code print?",
        "code": "console.log([10, 2, 30].sort());",
        "answers": [
          "[2, 10, 30]",
          "[10, 2, 30]",
          "[30, 10, 2]",
          "TypeError"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la == : chnu kayw9e3 l false w '0' 9bel l mo9arana? Fker f type coercion.",
        "text": "What will this code print?",
        "code": "console.log(false == '0');",
        "answers": [
          "false",
          "TypeError",
          "true",
          "NaN"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la try/catch: mli kaytchedd l error, wach l code li mor catch kaytexecuta? Fker f l ordre.",
        "text": "What will this code print?",
        "code": "try {\n  JSON.parse('{bad json}');\n} catch (err) {\n  console.log('caught');\n}\nconsole.log('done');",
        "answers": [
          "'caught' then 'done'",
          "'done' only",
          "SyntaxError crashes the script",
          "'caught' only"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la event loop: chnu kaytexecuta lwel, sync code wla setTimeout wla promise? Fker f l ordre.",
        "text": "In what order are the letters printed?",
        "code": "console.log('A');\nsetTimeout(() => console.log('B'), 0);\nconsole.log('C');",
        "answers": [
          "A B C",
          "B A C",
          "C A B",
          "A C B"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la promises: fin kaytexecuta .then() mo9aranatan m3a l code l 3adi? Fker f microtask queue.",
        "text": "In what order are the letters printed?",
        "code": "console.log('A');\nPromise.resolve().then(() => console.log('B'));\nconsole.log('C');",
        "answers": [
          "A B C",
          "A C B",
          "B A C",
          "C B A"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la setTimeout vs promise: chkun kaytexecuta lwel mor l sync? Fker f microtask vs macrotask.",
        "text": "In what order are the words printed?",
        "code": "setTimeout(() => console.log('timeout'), 0);\nPromise.resolve().then(() => console.log('promise'));\nconsole.log('sync');",
        "answers": [
          "sync promise timeout",
          "timeout promise sync",
          "sync timeout promise",
          "promise sync timeout"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la await: l code li mor await fin kaymchi? Fker f b7ala .then() w chnu kayw9e3 l code l kharej.",
        "text": "In what order are the numbers printed?",
        "code": "async function f() {\n  console.log('1');\n  await null;\n  console.log('2');\n}\nf();\nconsole.log('3');",
        "answers": [
          "1 2 3",
          "3 1 2",
          "1 3 2",
          "2 1 3"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la process.nextTick vs promise f Node: chkun 3ndo priority? Fker f l ordre.",
        "text": "In what order are the words printed?",
        "code": "Promise.resolve().then(() => console.log('promise'));\nprocess.nextTick(() => console.log('tick'));\nconsole.log('sync');",
        "answers": [
          "sync promise tick",
          "tick sync promise",
          "promise tick sync",
          "sync tick promise"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la async functions: chnu katrje3 async function dima, wakha katkteb return 42? Fker f l wrapping.",
        "text": "The developer expected 42. What is actually printed?",
        "code": "async function getData() {\n  return 42;\n}\nconst result = getData();\nconsole.log(result);",
        "answers": [
          "42",
          "Promise { 42 }",
          "undefined",
          "TypeError"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la fs.readFile: mli l file ma kaynch, wach kaysift error l callback wla kaycrashi? Fker f error-first.",
        "text": "missing.txt does not exist. What is printed?",
        "code": "const fs = require('fs');\nfs.readFile('missing.txt', 'utf8', (err, data) => {\n  if (err) { console.log('error!'); return; }\n  console.log(data);\n});",
        "answers": [
          "'error!'",
          "The script crashes",
          "'undefined'",
          "Nothing"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la Express: chnu kayw9e3 mli katsift juj responses? Fker f headers li tsifto.",
        "text": "A request hits /users. What goes wrong?",
        "code": "app.get('/users', (req, res) => {\n  db.getUsers((err, users) => {\n    res.json(users);\n  });\n  res.send('done');\n});",
        "answers": [
          "Nothing, it works",
          "users is always empty",
          "Error: Cannot set headers after they are sent",
          "The route never matches"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la 9rayt l files: chnu howa l pattern s7i7 - sync wla async m3a callback? Fker f toString dyal data.",
        "text": "Which snippet correctly reads a file and prints its content?",
        "answers": [
          "console.log(fs.readFile('a.txt'))",
          "const data = fs.readFile('a.txt'); console.log(data)",
          "fs.readFileSync('a.txt', cb)",
          "fs.readFile('a.txt', (err, data) => console.log(data.toString()))"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la chaining: fin kayji 'end' f l ordre? Fker f l sync code vs l thens.",
        "text": "In what order are the words printed?",
        "code": "console.log('start');\nPromise.resolve().then(() => {\n  console.log('p1');\n  return Promise.resolve();\n}).then(() => console.log('p2'));\nconsole.log('end');",
        "answers": [
          "start p1 p2 end",
          "start end p1 p2",
          "p1 p2 start end",
          "start p1 end p2"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la closures: wach n katb9a 7afdha 9imtha bin l calls? Fker f l variable l m7bossa.",
        "text": "What will this code print?",
        "code": "function makeCounter() {\n  let n = 0;\n  return () => ++n;\n}\nconst c = makeCounter();\nconsole.log(c(), c(), c());",
        "answers": [
          "1 2 3",
          "0 1 2",
          "1 1 1",
          "0 0 0"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la let vs var: chnu l far9 f loop m3a setTimeout? Fker f block scope.",
        "text": "What gets printed?",
        "code": "for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}",
        "answers": [
          "0 0 0",
          "3 3 3",
          "0 1 2",
          "1 2 3"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la this f arrow function: wach kaychd l object li fih? Fker f lexical this.",
        "text": "What will this code print?",
        "code": "const obj = {\n  name: 'Node',\n  greet: () => console.log('Hi ' + this.name)\n};\nobj.greet();",
        "answers": [
          "Hi Node",
          "Hi undefined",
          "TypeError",
          "Hi null"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la middleware f Express: wach C kaytexecuta mor ma tsiftat l response? Fker f next() w res.send.",
        "text": "A GET request hits /. What is logged?",
        "code": "app.use((req, res, next) => { console.log('A'); next(); });\napp.get('/', (req, res) => { console.log('B'); res.send('ok'); });\napp.use((req, res, next) => { console.log('C'); next(); });",
        "answers": [
          "A B C",
          "B A",
          "C A B",
          "A B"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la .then() chaining: chnu katwessel l then li moraha? Fker f l 9ima li katrje3.",
        "text": "What will this code print?",
        "code": "Promise.resolve(1)\n  .then(x => x + 1)\n  .then(x => console.log(x));",
        "answers": [
          "2",
          "1",
          "undefined",
          "Promise { 2 }"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la Promise.all: mli wa7ed kayrejecti, wach l then kaytexecuta wla l catch? Fker fih.",
        "text": "What will this code print?",
        "code": "Promise.all([Promise.resolve(1), Promise.reject('boom'), Promise.resolve(3)])\n  .then(r => console.log(r))\n  .catch(e => console.log('caught: ' + e));",
        "answers": [
          "[1, 3]",
          "[1, 'boom', 3]",
          "caught: boom",
          "Unhandled rejection crash"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la spread {...a}: wach b copy mst9la wla nafs l object? Fker f shallow copy.",
        "text": "What will this code print?",
        "code": "const a = { x: 1 };\nconst b = { ...a };\nb.x = 2;\nconsole.log(a.x);",
        "answers": [
          "2",
          "1",
          "undefined",
          "TypeError"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la destructuring: mli kat3yet l function bla arguments, chnu kaytsta3mel? Fker f = {} w = 3000.",
        "text": "What will this code print?",
        "code": "function f({ port = 3000 } = {}) { console.log(port); }\nf();",
        "answers": [
          "undefined",
          "TypeError",
          "null",
          "3000"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la setTimeout: wach 0 kay3ni daba nichan? Fker f l ordre dyal sync code lwel.",
        "text": "In what order are the numbers printed?",
        "code": "console.log('1');\nsetTimeout(() => console.log('2'), 100);\nsetTimeout(() => console.log('3'), 0);\nconsole.log('4');",
        "answers": [
          "1 4 3 2",
          "1 2 3 4",
          "1 4 2 3",
          "4 1 3 2"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la server errors: chnu kaydir l 'error' listener mli l port m7joz? Fker wach kaycrashi wla kaykemel.",
        "text": "Port 3000 is already taken. What happens?",
        "code": "const server = app.listen(3000);\nserver.on('error', () => console.log('port busy'));\n// port 3000 is already in use",
        "answers": [
          "The script crashes with EADDRINUSE",
          "It silently picks another port",
          "'port busy' is printed and the app keeps running",
          "The error event is ignored"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la l ordre f Node: nextTick, promise, setImmediate - chkun lwel? Fker f priority.",
        "text": "In what order are the words printed?",
        "code": "process.nextTick(() => console.log('nextTick'));\nsetImmediate(() => console.log('immediate'));\nPromise.resolve().then(() => console.log('promise'));",
        "answers": [
          "promise nextTick immediate",
          "nextTick promise immediate",
          "immediate nextTick promise",
          "nextTick immediate promise"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la == m3a array khawya: l [] chnu katwli 9bel l mo9arana? Fker f coercion.",
        "text": "What will this code print?",
        "code": "console.log([] == false);",
        "answers": [
          "false",
          "TypeError",
          "NaN",
          "true"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la - vs + : wach - kay7wel l string l number b7al +? Fker f l far9 binathom.",
        "text": "What will this code print?",
        "code": "console.log('5' - 3);\nconsole.log('5' + 3);",
        "answers": [
          "2 and \"53\"",
          "2 and 8",
          "\"2\" and \"53\"",
          "NaN and \"53\""
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la 10n: chnu howa had l type l jdid? Fker f l isem dyalo.",
        "text": "What will this code print?",
        "code": "console.log(typeof 10n);",
        "answers": [
          "number",
          "biginteger",
          "bigint",
          "object"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la Math.max() bla arguments: chnu l 9ima li kayrje3 mli ma kayn walo? Fker f l btida2i.",
        "text": "What will this code print?",
        "code": "console.log(Math.max());",
        "answers": [
          "0",
          "-Infinity",
          "Infinity",
          "NaN"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la async errors: mli kayn .catch, wach l error kaycrashi l script? Fker f l ordre 'caught' w 'after'.",
        "text": "In what order are the words printed?",
        "code": "async function f() { throw new Error('x'); }\nf().catch(() => console.log('caught'));\nconsole.log('after');",
        "answers": [
          "caught after",
          "Uncaught Error, crash",
          "caught only",
          "after caught"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la EventEmitter: l event 'error' 3ndo 7okm khass bla listener. Fker chnu kayw9e3 l process.",
        "text": "No 'error' listener is registered. What happens?",
        "code": "const { EventEmitter } = require('events');\nconst e = new EventEmitter();\ne.emit('error', new Error('boom'));",
        "answers": [
          "The process throws and crashes",
          "Nothing happens",
          "'boom' is logged",
          "It emits to all listeners"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la parseInt: chnu kat3ni 0x f lbdya dyal string? Fker f hexadecimal.",
        "text": "What will this code print?",
        "code": "console.log(parseInt('0x10'));",
        "answers": [
          "0",
          "NaN",
          "16",
          "10"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la .length: wach t9der tsagher array b had t-tri9a? Fker f truncation.",
        "text": "What will this code print?",
        "code": "const arr = [1, 2, 3];\narr.length = 0;\nconsole.log(arr);",
        "answers": [
          "[1, 2, 3]",
          "[]",
          "TypeError",
          "[undefined, undefined, undefined]"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la chained comparisons: wach JS kay7sebha b7al l maths? Fker f l ordre mn liser w coercion.",
        "text": "What will this code print?",
        "code": "console.log(1 < 2 < 3);\nconsole.log(3 > 2 > 1);",
        "answers": [
          "false false",
          "false true",
          "true true",
          "true false"
        ],
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
        "explain_dr": "So2al kaysewlk 3la typeof f JavaScript: chnu kayrje3 mli katsewlo 3la array? Fker f l type l 9dim li kayt7seb bih.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "console.log(typeof []);",
        "answers": [
          "array",
          "object",
          "undefined",
          "list"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la l + f JS m3a numbers w strings: wach kayjme3 wla kaylse9? Fker f l ordre mn liser l limen.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "console.log(1 + \"2\" + 3);",
        "answers": [
          "6",
          "15",
          "123",
          "NaN"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la typeof null: kayn bug 9dim f JavaScript khalla l jawab ghareb. Fker chnu howa.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "console.log(typeof null);",
        "answers": [
          "object",
          "null",
          "undefined",
          "number"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la JSON.parse: chnu katwli l string dyal JSON mli katparseiha? Fker f object 7a9i9i.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "const data = JSON.parse('{\"name\":\"Aymane\"}');\nconsole.log(data.name);",
        "answers": [
          "Aymane",
          "undefined",
          "{\"name\":\"Aymane\"}",
          "SyntaxError"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la path.extname: chnu katrje3 b dabt? Fker wach m3aha n9ta wla la.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "const path = require('path');\nconsole.log(path.extname('photo.png'));",
        "answers": [
          "png",
          ".png",
          "photo.png",
          "undefined"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la URL f Node: kifach katjbed 9ima dyal parametre mn query string? Fker f searchParams.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "const { URL } = require('url');\nconst u = new URL('https://shop.com/search?q=node&page=2');\nconsole.log(u.searchParams.get('page'));",
        "answers": [
          "page=2",
          "?page=2",
          "2",
          "null"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la Buffer: .length hna kat7seb chnu - 7rouf wla bytes? Fker f ABC.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "console.log(Buffer.from('ABC').length);",
        "answers": [
          "3",
          "6",
          "24",
          "undefined"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la require: mli file ma exporta walo, chnu kayrje3 require? Fker chnu ghatkoun add.",
        "text": "Le fichier math.js a oublié module.exports. Que se passe-t-il quand app.js s'exécute ?",
        "code": "// math.js:  const add = (a, b) => a + b;\n// app.js:\nconst add = require('./math');\nconsole.log(add(2, 3));",
        "answers": [
          "Il affiche 5",
          "Il affiche undefined",
          "ReferenceError : add is not defined",
          "TypeError : add is not a function"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la * m3a strings: wach kaylse9 b7al + wla kay7wel l numbers? Fker f l far9 binathom.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "console.log('2' * '3');",
        "answers": [
          "\"23\"",
          "6",
          "NaN",
          "TypeError"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la property ma kaynach: chnu kayrje3 JS bla ma yt2erreur? Fker f undefined.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "const user = { name: 'Aymane' };\nconsole.log(user.age);",
        "answers": [
          "undefined",
          "null",
          "0",
          "ReferenceError"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la floats: 3lach 0.1 + 0.2 ma kat3tich 0.3 nichan? Fker f kifach l PC kaykhzen l a3dad.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "console.log(0.1 + 0.2);",
        "answers": [
          "0.3",
          "0.30",
          "0.30000000000000004",
          "NaN"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la var f loop m3a setTimeout: 3lach kolchi kaytbe3 nafs l 9ima? Fker f scope dyal var.",
        "text": "Qu'est-ce qui va s'afficher ?",
        "code": "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}",
        "answers": [
          "3 3 3",
          "0 1 2",
          "0 0 0",
          "1 2 3"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la + bin arrays: wach kayjme3hom wla kay7welhom l strings lwel? Fker f toString.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "console.log([1, 2, 3] + [4, 5]);",
        "answers": [
          "[1,2,3,4,5]",
          "[5,7]",
          "NaN",
          "\"1,2,34,5\""
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la === m3a objects: wach kay9aren l mo7tawa wla wach homa nafs l object? Fker f reference.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "const a = {};\nconst b = {};\nconsole.log(a === b);",
        "answers": [
          "true",
          "false",
          "TypeError",
          "undefined"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la EventEmitter: chnu kayw9e3 mli kat emit 9bel ma tssjel l listener? Fker f l ordre.",
        "text": "Pourquoi rien ne s'affiche ?",
        "code": "const { EventEmitter } = require('events');\nconst e = new EventEmitter();\ne.emit('ping');\ne.on('ping', () => console.log('pong'));",
        "answers": [
          "EventEmitter n'est pas bien importé",
          "console.log est asynchrone",
          "L'écouteur a été enregistré après emit, il a raté l'événement",
          "'ping' est un nom d'événement réservé"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la typeof NaN: l isem kaybda b N dyal Number, walakin chnu howa l type b dabt? Fker fih.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "console.log(typeof NaN);",
        "answers": [
          "number",
          "NaN",
          "undefined",
          "float"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la parseInt: chnu kaydir mli kayl9a 7rouf mor l a9am? Fker wach kaykemel wla kay7bes.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "console.log(parseInt('10px'));",
        "answers": [
          "10px",
          "NaN",
          "TypeError",
          "10"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la sort() bla compare function: kifach kaytri l a9am? Fker wach b7al numbers wla b7al strings.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "console.log([10, 2, 30].sort());",
        "answers": [
          "[2, 10, 30]",
          "[10, 2, 30]",
          "[30, 10, 2]",
          "TypeError"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la == : chnu kayw9e3 l false w '0' 9bel l mo9arana? Fker f type coercion.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "console.log(false == '0');",
        "answers": [
          "false",
          "TypeError",
          "true",
          "NaN"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la try/catch: mli kaytchedd l error, wach l code li mor catch kaytexecuta? Fker f l ordre.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "try {\n  JSON.parse('{bad json}');\n} catch (err) {\n  console.log('caught');\n}\nconsole.log('done');",
        "answers": [
          "'caught' puis 'done'",
          "'done' seulement",
          "SyntaxError fait planter le script",
          "'caught' seulement"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la event loop: chnu kaytexecuta lwel, sync code wla setTimeout wla promise? Fker f l ordre.",
        "text": "Dans quel ordre les lettres s'affichent-elles ?",
        "code": "console.log('A');\nsetTimeout(() => console.log('B'), 0);\nconsole.log('C');",
        "answers": [
          "A B C",
          "B A C",
          "C A B",
          "A C B"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la promises: fin kaytexecuta .then() mo9aranatan m3a l code l 3adi? Fker f microtask queue.",
        "text": "Dans quel ordre les lettres s'affichent-elles ?",
        "code": "console.log('A');\nPromise.resolve().then(() => console.log('B'));\nconsole.log('C');",
        "answers": [
          "A B C",
          "A C B",
          "B A C",
          "C B A"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la setTimeout vs promise: chkun kaytexecuta lwel mor l sync? Fker f microtask vs macrotask.",
        "text": "Dans quel ordre les mots s'affichent-ils ?",
        "code": "setTimeout(() => console.log('timeout'), 0);\nPromise.resolve().then(() => console.log('promise'));\nconsole.log('sync');",
        "answers": [
          "sync promise timeout",
          "timeout promise sync",
          "sync timeout promise",
          "promise sync timeout"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la await: l code li mor await fin kaymchi? Fker f b7ala .then() w chnu kayw9e3 l code l kharej.",
        "text": "Dans quel ordre les chiffres s'affichent-ils ?",
        "code": "async function f() {\n  console.log('1');\n  await null;\n  console.log('2');\n}\nf();\nconsole.log('3');",
        "answers": [
          "1 2 3",
          "3 1 2",
          "1 3 2",
          "2 1 3"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la process.nextTick vs promise f Node: chkun 3ndo priority? Fker f l ordre.",
        "text": "Dans quel ordre les mots s'affichent-ils ?",
        "code": "Promise.resolve().then(() => console.log('promise'));\nprocess.nextTick(() => console.log('tick'));\nconsole.log('sync');",
        "answers": [
          "sync promise tick",
          "tick sync promise",
          "promise tick sync",
          "sync tick promise"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la async functions: chnu katrje3 async function dima, wakha katkteb return 42? Fker f l wrapping.",
        "text": "Le développeur s'attendait à 42. Qu'est-ce qui s'affiche vraiment ?",
        "code": "async function getData() {\n  return 42;\n}\nconst result = getData();\nconsole.log(result);",
        "answers": [
          "42",
          "Promise { 42 }",
          "undefined",
          "TypeError"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la fs.readFile: mli l file ma kaynch, wach kaysift error l callback wla kaycrashi? Fker f error-first.",
        "text": "missing.txt n'existe pas. Qu'est-ce qui s'affiche ?",
        "code": "const fs = require('fs');\nfs.readFile('missing.txt', 'utf8', (err, data) => {\n  if (err) { console.log('error!'); return; }\n  console.log(data);\n});",
        "answers": [
          "'error!'",
          "Le script plante",
          "'undefined'",
          "Rien"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la Express: chnu kayw9e3 mli katsift juj responses? Fker f headers li tsifto.",
        "text": "Une requête arrive sur /users. Qu'est-ce qui ne va pas ?",
        "code": "app.get('/users', (req, res) => {\n  db.getUsers((err, users) => {\n    res.json(users);\n  });\n  res.send('done');\n});",
        "answers": [
          "Rien, ça marche",
          "users est toujours vide",
          "Error: Cannot set headers after they are sent",
          "La route ne correspond jamais"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la 9rayt l files: chnu howa l pattern s7i7 - sync wla async m3a callback? Fker f toString dyal data.",
        "text": "Quel extrait lit correctement un fichier et affiche son contenu ?",
        "answers": [
          "console.log(fs.readFile('a.txt'))",
          "const data = fs.readFile('a.txt'); console.log(data)",
          "fs.readFileSync('a.txt', cb)",
          "fs.readFile('a.txt', (err, data) => console.log(data.toString()))"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la chaining: fin kayji 'end' f l ordre? Fker f l sync code vs l thens.",
        "text": "Dans quel ordre les mots s'affichent-ils ?",
        "code": "console.log('start');\nPromise.resolve().then(() => {\n  console.log('p1');\n  return Promise.resolve();\n}).then(() => console.log('p2'));\nconsole.log('end');",
        "answers": [
          "start p1 p2 end",
          "start end p1 p2",
          "p1 p2 start end",
          "start p1 end p2"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la closures: wach n katb9a 7afdha 9imtha bin l calls? Fker f l variable l m7bossa.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "function makeCounter() {\n  let n = 0;\n  return () => ++n;\n}\nconst c = makeCounter();\nconsole.log(c(), c(), c());",
        "answers": [
          "1 2 3",
          "0 1 2",
          "1 1 1",
          "0 0 0"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la let vs var: chnu l far9 f loop m3a setTimeout? Fker f block scope.",
        "text": "Qu'est-ce qui va s'afficher ?",
        "code": "for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}",
        "answers": [
          "0 0 0",
          "3 3 3",
          "0 1 2",
          "1 2 3"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la this f arrow function: wach kaychd l object li fih? Fker f lexical this.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "const obj = {\n  name: 'Node',\n  greet: () => console.log('Hi ' + this.name)\n};\nobj.greet();",
        "answers": [
          "Hi Node",
          "Hi undefined",
          "TypeError",
          "Hi null"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la middleware f Express: wach C kaytexecuta mor ma tsiftat l response? Fker f next() w res.send.",
        "text": "Une requête GET arrive sur /. Qu'est-ce qui est affiché dans les logs ?",
        "code": "app.use((req, res, next) => { console.log('A'); next(); });\napp.get('/', (req, res) => { console.log('B'); res.send('ok'); });\napp.use((req, res, next) => { console.log('C'); next(); });",
        "answers": [
          "A B C",
          "B A",
          "C A B",
          "A B"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la .then() chaining: chnu katwessel l then li moraha? Fker f l 9ima li katrje3.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "Promise.resolve(1)\n  .then(x => x + 1)\n  .then(x => console.log(x));",
        "answers": [
          "2",
          "1",
          "undefined",
          "Promise { 2 }"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la Promise.all: mli wa7ed kayrejecti, wach l then kaytexecuta wla l catch? Fker fih.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "Promise.all([Promise.resolve(1), Promise.reject('boom'), Promise.resolve(3)])\n  .then(r => console.log(r))\n  .catch(e => console.log('caught: ' + e));",
        "answers": [
          "[1, 3]",
          "[1, 'boom', 3]",
          "caught: boom",
          "Rejet non géré, plantage"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la spread {...a}: wach b copy mst9la wla nafs l object? Fker f shallow copy.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "const a = { x: 1 };\nconst b = { ...a };\nb.x = 2;\nconsole.log(a.x);",
        "answers": [
          "2",
          "1",
          "undefined",
          "TypeError"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la destructuring: mli kat3yet l function bla arguments, chnu kaytsta3mel? Fker f = {} w = 3000.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "function f({ port = 3000 } = {}) { console.log(port); }\nf();",
        "answers": [
          "undefined",
          "TypeError",
          "null",
          "3000"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la setTimeout: wach 0 kay3ni daba nichan? Fker f l ordre dyal sync code lwel.",
        "text": "Dans quel ordre les chiffres s'affichent-ils ?",
        "code": "console.log('1');\nsetTimeout(() => console.log('2'), 100);\nsetTimeout(() => console.log('3'), 0);\nconsole.log('4');",
        "answers": [
          "1 4 3 2",
          "1 2 3 4",
          "1 4 2 3",
          "4 1 3 2"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la server errors: chnu kaydir l 'error' listener mli l port m7joz? Fker wach kaycrashi wla kaykemel.",
        "text": "Le port 3000 est déjà occupé. Que se passe-t-il ?",
        "code": "const server = app.listen(3000);\nserver.on('error', () => console.log('port busy'));\n// le port 3000 est déjà utilisé",
        "answers": [
          "Le script plante avec EADDRINUSE",
          "Il choisit silencieusement un autre port",
          "'port busy' s'affiche et l'app continue de tourner",
          "L'événement error est ignoré"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la l ordre f Node: nextTick, promise, setImmediate - chkun lwel? Fker f priority.",
        "text": "Dans quel ordre les mots s'affichent-ils ?",
        "code": "process.nextTick(() => console.log('nextTick'));\nsetImmediate(() => console.log('immediate'));\nPromise.resolve().then(() => console.log('promise'));",
        "answers": [
          "promise nextTick immediate",
          "nextTick promise immediate",
          "immediate nextTick promise",
          "nextTick immediate promise"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la == m3a array khawya: l [] chnu katwli 9bel l mo9arana? Fker f coercion.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "console.log([] == false);",
        "answers": [
          "false",
          "TypeError",
          "NaN",
          "true"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la - vs + : wach - kay7wel l string l number b7al +? Fker f l far9 binathom.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "console.log('5' - 3);\nconsole.log('5' + 3);",
        "answers": [
          "2 et \"53\"",
          "2 et 8",
          "\"2\" et \"53\"",
          "NaN et \"53\""
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la 10n: chnu howa had l type l jdid? Fker f l isem dyalo.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "console.log(typeof 10n);",
        "answers": [
          "number",
          "biginteger",
          "bigint",
          "object"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la Math.max() bla arguments: chnu l 9ima li kayrje3 mli ma kayn walo? Fker f l btida2i.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "console.log(Math.max());",
        "answers": [
          "0",
          "-Infinity",
          "Infinity",
          "NaN"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la async errors: mli kayn .catch, wach l error kaycrashi l script? Fker f l ordre 'caught' w 'after'.",
        "text": "Dans quel ordre les mots s'affichent-ils ?",
        "code": "async function f() { throw new Error('x'); }\nf().catch(() => console.log('caught'));\nconsole.log('after');",
        "answers": [
          "caught after",
          "Uncaught Error, plantage",
          "caught seulement",
          "after caught"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la EventEmitter: l event 'error' 3ndo 7okm khass bla listener. Fker chnu kayw9e3 l process.",
        "text": "Aucun écouteur 'error' n'est enregistré. Que se passe-t-il ?",
        "code": "const { EventEmitter } = require('events');\nconst e = new EventEmitter();\ne.emit('error', new Error('boom'));",
        "answers": [
          "Le processus lève une exception et plante",
          "Rien ne se passe",
          "'boom' est affiché",
          "L'événement est émis à tous les écouteurs"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la parseInt: chnu kat3ni 0x f lbdya dyal string? Fker f hexadecimal.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "console.log(parseInt('0x10'));",
        "answers": [
          "0",
          "NaN",
          "16",
          "10"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la .length: wach t9der tsagher array b had t-tri9a? Fker f truncation.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "const arr = [1, 2, 3];\narr.length = 0;\nconsole.log(arr);",
        "answers": [
          "[1, 2, 3]",
          "[]",
          "TypeError",
          "[undefined, undefined, undefined]"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la chained comparisons: wach JS kay7sebha b7al l maths? Fker f l ordre mn liser w coercion.",
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "console.log(1 < 2 < 3);\nconsole.log(3 > 2 > 1);",
        "answers": [
          "false false",
          "false true",
          "true true",
          "true false"
        ],
        "correct": 3,
        "selection": null
      }
    ]
  }
];
