export const restApiQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "Fetch bla method kat-st3mel GET by default. Chno l method dyal had request?",
        "text": "Which HTTP method does this request use?",
        "code": "fetch('/api/users')",
        "answers": [
          "POST",
          "FETCH",
          "GET — the default method",
          "PUT"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "Method mktoba explicitement. Chno l method hna?",
        "text": "Which HTTP method does this request use?",
        "code": "fetch('/api/users', { method: 'POST' })",
        "answers": [
          "GET",
          "POST",
          "SEND",
          "FETCH"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "Status codes: 2xx kay3niw success. Chno kay3ni 200?",
        "text": "The API responds with status 200. What does it mean?",
        "answers": [
          "The request succeeded",
          "The resource was not found",
          "The server crashed",
          "You are not logged in"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "4xx kay3niw client errors. Chno kay3ni 404?",
        "text": "The API responds with status 404. What does it mean?",
        "answers": [
          "Success",
          "Server error",
          "Redirect",
          "Not found"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "Route kat-matchi method + path. Chno l requests li kay-handli had l route?",
        "text": "Which requests does this route handle?",
        "code": "app.get('/users', handler)",
        "answers": [
          "POST /users",
          "All methods on /users",
          "GET /users",
          "GET on any path"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "Res.json kat-sift JSON. Chno ghay-wsel l client?",
        "text": "What does the client receive?",
        "code": "app.get('/me', (req, res) => {\n  res.json({ name: 'Aya' });\n});",
        "answers": [
          "The text \"[object Object]\"",
          "A JSON response: { \"name\": \"Aya\" }",
          "An HTML page",
          "Nothing"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la req.params.id: chno l type dyalo? Fker kifach Express kay-parse l URL.",
        "text": "For GET /users/7, what is req.params.id?",
        "code": "app.get('/users/:id', (req, res) => {\n  res.json({ id: req.params.id });\n});",
        "answers": [
          "\"7\"",
          "7 as a number",
          "undefined",
          ":id"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "Mlli resource t-creata, chno l status l munasib? Fker f 2xx codes.",
        "text": "A new user was created. Which status should the API return?",
        "answers": [
          "200",
          "404",
          "500",
          "201"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "DELETE method kay3ni delete. Chno kaydir had request?",
        "text": "What does this request do?",
        "code": "fetch('/api/users/5', { method: 'DELETE' })",
        "answers": [
          "Fetches user 5",
          "Updates user 5",
          "Asks the API to delete user 5",
          "Deletes the whole database"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "5xx kay3niw server errors. Chno kay3ni 500?",
        "text": "The API responds with status 500. What does it mean?",
        "answers": [
          "The client sent a bad request",
          "An unexpected error happened on the server",
          "The resource was deleted",
          "The user is unauthorized"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "Fetch body khassha tkoun string wla FormData. Chno lmochkil hna?",
        "text": "Why does the server receive an empty body?",
        "code": "fetch('/api/users', {\n  method: 'POST',\n  body: { name: 'Aya' }\n})",
        "answers": [
          "The body must be a string — use JSON.stringify({ name: 'Aya' })",
          "POST can't have a body",
          "The object needs a type field",
          "The server is down"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "Server khass y3ref chno l type dyal body. Chno l header li na9es?",
        "text": "The JSON body arrives as a string the server can't parse. What header is missing?",
        "code": "fetch('/api/users', {\n  method: 'POST',\n  body: JSON.stringify({ name: 'Aya' })\n})",
        "answers": [
          "Authorization",
          "Accept-Language",
          "X-Requested-With",
          "Content-Type: application/json"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "Route kat-matchi l method kaman. 3lach GET kay-rja3 404?",
        "text": "The client sends GET /users but gets 404. The server has this route. Why?",
        "code": "app.post('/users', handler)",
        "answers": [
          "Express is broken",
          "The path needs a trailing slash",
          "The route only handles POST — the method doesn't match",
          "GET is disabled"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "Express ma kay-parsich JSON bo7do. Chno khass t-zid bach req.body ykhdem?",
        "text": "Why is req.body undefined?",
        "code": "const app = express();\napp.post('/users', (req, res) => {\n  console.log(req.body); // undefined\n  res.json({});\n});",
        "answers": [
          "POST requests have no body",
          "The express.json() middleware was never added, so the JSON body isn't parsed",
          "req.body is always undefined",
          "The route must be GET"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "Fetch kay-rejecti ghir 3la network failures. Wach .catch ghaykhdem m3a 500?",
        "text": "The API returns 500. Does the .catch() below run?",
        "code": "fetch('/api/users')\n  .then(r => r.json())\n  .catch(() => console.log('caught'));",
        "answers": [
          "No — fetch only rejects on network failures, not on HTTP error statuses",
          "Yes, always",
          "Only for 404",
          "Yes, but only in Chrome"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "Response wa7da l request wa7ed. Chno kaytra mlli kat-sift joj responses?",
        "text": "What happens when this handler runs?",
        "code": "app.get('/x', (req, res) => {\n  res.send('ok');\n  res.json({ done: true });\n});",
        "answers": [
          "Both responses are sent",
          "The JSON wins",
          "The client gets 'ok' twice",
          "Crash: \"Cannot set headers after they are sent\""
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "Fetch asynchronous: chno kay-rja3 direct? Fker f l async nature.",
        "text": "What does this log?",
        "code": "const res = fetch('/api/users');\nconsole.log(res);",
        "answers": [
          "The user list",
          "undefined",
          "A Promise — fetch is asynchronous",
          "An error"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la fin kayt7at l query string: params wla query wla body? Fker f l far9 binathom.",
        "text": "For GET /search?q=shoes, where is \"shoes\"?",
        "code": "app.get('/search', (req, res) => {\n  // ???\n});",
        "answers": [
          "req.params.q",
          "req.query.q",
          "req.body.q",
          "req.headers.q"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "Browsers kay-blokiw requests bin origins mokhtalfin. 3lach khdam f Postman w la f browser?",
        "text": "The request works in Postman but the browser blocks it. The frontend is on localhost:3000 and the API on localhost:5000. Why?",
        "answers": [
          "Browsers enforce CORS for cross-origin requests — the API must allow the frontend origin",
          "Postman is faster",
          "fetch doesn't work on localhost",
          "The API only accepts Postman"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "Express kay-matchi routes b l ordre. 3lach /users/new ma wselch l showForm?",
        "text": "GET /users/new returns the profile of user \"new\" instead of the signup form. Why?",
        "code": "app.get('/users/:id', showUser);\napp.get('/users/new', showForm);",
        "answers": [
          "Express is case-sensitive",
          "The form route is invalid",
          ":id doesn't match strings",
          "Routes match in order — /users/:id catches \"/new\" first"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la l far9 bin PUT w PATCH: chkun kay-remplacer l resource kamla w chkun ghir partial update?",
        "text": "Which request fully REPLACES user 5?",
        "code": "// A\nfetch('/api/users/5', { method: 'PUT', body: JSON.stringify({ name: 'Aya' }) })\n// B\nfetch('/api/users/5', { method: 'PATCH', body: JSON.stringify({ name: 'Aya' }) })",
        "answers": [
          "B — PATCH replaces everything",
          "Both do the same",
          "A — PUT replaces the whole resource; PATCH applies a partial update",
          "Neither — use POST"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "204 kay3ni success bla body. Chno khass l client ydir?",
        "text": "The user was deleted. The API responds 204 with an empty body. What should the client do?",
        "code": "await fetch('/api/users/5', { method: 'DELETE' });\n// status: 204",
        "answers": [
          "Retry the request",
          "Treat it as success — 204 means done, no content to parse",
          "Show an error",
          "Parse the JSON body"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "Validation error: chno l status l munasib mlli field required na9es?",
        "text": "POST /users is missing the required \"email\" field. Which status should the API return?",
        "answers": [
          "400 Bad Request",
          "404 Not Found",
          "200 OK",
          "500 Internal Error"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "Middleware kay-khdem b l ordre. Fin khass t-7at express.json()?",
        "text": "Where must express.json() be placed to work?",
        "code": "const app = express();\napp.use(express.json());\napp.post('/users', handler);",
        "answers": [
          "After the routes",
          "Inside the handler",
          "It doesn't matter",
          "Before the routes that need req.body"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "Middleware kayt-applya ghir l routes li morah. 3lach /admin ma 7matoch?",
        "text": "Why is /admin reachable without a token?",
        "code": "app.get('/admin', adminHandler);\napp.use(authMiddleware);",
        "answers": [
          "authMiddleware is broken",
          "GET routes skip middleware",
          "Middleware runs in order — authMiddleware was added after the route",
          "Admin routes are public by default"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "Middleware li ma kay-callish next() kay-7bes l request. 3lach l request kat-hang?",
        "text": "Why does the request hang forever?",
        "code": "app.use((req, res, next) => {\n  console.log(req.method, req.path);\n});\napp.get('/users', handler);",
        "answers": [
          "The log is too slow",
          "The middleware never calls next(), so the request never reaches the route",
          "console.log blocks Express",
          "GET is not supported"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "REST convention: nested resources b path. Chno l endpoint s7i7?",
        "text": "Which is the correct REST endpoint for \"all orders of user 5\"?",
        "answers": [
          "/users/5/orders",
          "/getUserOrders?user=5",
          "/orders/get/5",
          "/users/orders/5/all"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "Credentials ma khasshomch ybano f URL. Chno l design s7i7?",
        "text": "Which is the right design for a login endpoint?",
        "answers": [
          "GET /login?email=a@b.c&password=123",
          "GET /login with credentials in headers",
          "POST /login with credentials in the URL",
          "POST /login with credentials in the request body"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "Status + json: chno ghay-wsel l client?",
        "text": "What does the client receive?",
        "code": "app.get('/users/99', (req, res) => {\n  res.status(404).json({ error: 'Not found' });\n});",
        "answers": [
          "Status 200 with an error message",
          "An empty response",
          "Status 404 with JSON { error: 'Not found' }",
          "Status 500"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "Idempotent kay3ni t9dar t-3awdo bla effect zyada. Chno l method li safe t-retryiha?",
        "text": "The network drops mid-request. Which method is safe to retry?",
        "answers": [
          "POST",
          "PUT — it is idempotent: repeating it has the same effect",
          "POST with a new id",
          "None"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "Express kay-3ref error middleware b 4 args. Chno l signature?",
        "text": "What is the signature of an Express error-handling middleware?",
        "answers": [
          "(err, req, res, next) — four arguments",
          "(req, res, next)",
          "(err, req, res)",
          "(error)"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "Async handler m3a try/catch: chno ghay-wsel l client mlli DB t-faili?",
        "text": "The database fails. What does the client receive?",
        "code": "app.get('/users', async (req, res) => {\n  try {\n    const users = await db.getUsers();\n    res.json(users);\n  } catch (e) {\n    res.status(500).json({ error: 'DB failed' });\n  }\n});",
        "answers": [
          "A hanging request",
          "Status 200",
          "An HTML page",
          "Status 500 with JSON { error: 'DB failed' }"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "Ma kaynach token ga3: authentication wla authorization? Chno l status?",
        "text": "No token is sent at all. Which status fits?",
        "code": "fetch('/api/profile')",
        "answers": [
          "403",
          "200",
          "401 Unauthorized",
          "404"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "Token valid walakin ma 3andoch l 7a9: chno l status l munasib?",
        "text": "The token is valid, but the user is not an admin. Which status fits?",
        "code": "fetch('/api/admin', { headers: { Authorization: 'Bearer user-token' } })",
        "answers": [
          "401",
          "403 Forbidden",
          "404",
          "200"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "Rate limiting: chno l status li kaygolik 'bzzaf dyal requests'?",
        "text": "The client made too many requests. Which status should the API return?",
        "answers": [
          "429 Too Many Requests",
          "500",
          "404",
          "200"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la 201 m3a Location header: chno kay3niw bjoj? Fker f chno kayt-zad mlli resource t-creata.",
        "text": "What does this response tell the client?",
        "code": "res.status(201)\n   .location('/users/12')\n   .json({ id: 12 });",
        "answers": [
          "The user was deleted",
          "An error occurred",
          "The request is pending",
          "A user was created; it lives at /users/12"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "?a=1&a=2: chno ghaykoun req.query.a? Fker f kifach Express kay-parse.",
        "text": "For GET /tags?a=1&a=2, what is req.query.a?",
        "answers": [
          "\"1\"",
          "\"2\"",
          "['1', '2'] — repeated params become an array",
          "undefined"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "Middleware 3la path prefix kat-applya l ga3 l routes ta7to. Chno l setup s7i7?",
        "text": "All /api routes share the same auth check. Which setup does that?",
        "code": "// A\napp.get('/api/users', auth, h1);\napp.get('/api/orders', auth, h1);\n// B\napp.use('/api', auth);\napp.get('/api/users', h1);",
        "answers": [
          "Only A",
          "B — app.use('/api', auth) runs auth for every /api route",
          "Both are wrong",
          "Neither works"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "Res.json kat-setti header automatiquement. Chno l header?",
        "text": "What does res.json() set automatically?",
        "answers": [
          "The Content-Type: application/json header",
          "The status to 201",
          "A CORS header",
          "The charset to ASCII"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "SendStatus kat-sift status + text default. Chno ghay-wsel?",
        "text": "What does the client receive?",
        "code": "app.delete('/users/5', (req, res) => {\n  res.sendStatus(404);\n});",
        "answers": [
          "Status 200",
          "An empty 404",
          "JSON null",
          "Status 404 with the text \"Not Found\""
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la comparison bin param w number: chno l type dyal param? Fker chno ghaykoun natijat === .",
        "text": "For GET /users/5, what does this log?",
        "code": "app.get('/users/:id', (req, res) => {\n  console.log(req.params.id === 5);\n});",
        "answers": [
          "true",
          "An error",
          "false — route params are always strings",
          "undefined"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "Undefined values ma kayt-siftouch f JSON. Chno ghay-wsel l server?",
        "text": "What does the server actually receive?",
        "code": "fetch('/api/data', {\n  method: 'POST',\n  body: JSON.stringify({ a: 1, b: undefined })\n})",
        "answers": [
          "{ \"a\": 1, \"b\": null }",
          "{ \"a\": 1 } — JSON.stringify drops undefined values",
          "An error",
          "{ \"a\": 1, \"b\": \"undefined\" }"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "Fetch ma kay-siftch cookies cross-origin by default. Chno na9es?",
        "text": "The API uses cookie sessions, but logged-in users appear logged out when calling from the frontend. What is missing?",
        "code": "fetch('/api/me')",
        "answers": [
          "credentials: 'include' — fetch doesn't send cookies cross-origin by default",
          "The method must be POST",
          "Cookies can't be used with fetch",
          "The URL must be absolute"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "Body khawi: chno kaytra mlli kat-7awl t-parsih k JSON?",
        "text": "What happens here?",
        "code": "const r = await fetch('/api/users/5', { method: 'DELETE' });\n// status: 204, empty body\nconst data = await r.json();",
        "answers": [
          "data is null",
          "data is {}",
          "It waits for a body",
          "It throws — there is no body to parse as JSON"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "304 kay3ni 'ma t-bdel walo'. Chno khass l client ydir?",
        "text": "The second identical GET returns 304. What should the client do?",
        "answers": [
          "Show an error",
          "Retry with POST",
          "Use its cached copy of the response",
          "Clear the cache"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "L route kat-matchi, walakin l id machi valid. Chno l status l munasib?",
        "text": "For GET /users/abc, what should the API return?",
        "code": "app.get('/users/:id', (req, res) => {\n  // ids are numbers in the database\n});",
        "answers": [
          "200 with an empty user",
          "400 — \"abc\" matches :id, but it isn't a valid numeric id",
          "500",
          "The route doesn't match"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "HEAD b7al GET bla body. Chno ghay-wsel l client?",
        "text": "What does the client receive?",
        "code": "const r = await fetch('/api/users', { method: 'HEAD' });",
        "answers": [
          "Headers only, no body — HEAD works like GET without the body",
          "The full user list",
          "An error — HEAD is not a real method",
          "An empty 404"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "Browser kay-sift OPTIONS 9bel requests li fihom custom headers. 3lach?",
        "text": "Before the POST with an Authorization header, the browser sends an OPTIONS request. Why?",
        "code": "fetch('/api/users', {\n  method: 'POST',\n  headers: { Authorization: 'Bearer x' }\n})",
        "answers": [
          "It's a bug in fetch",
          "The server requested it",
          "To retry the request",
          "It's a CORS preflight — the browser checks the server allows this request first"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "Sequential vs parallel: chno li asra3? Fker f kifach kay-khdmo l requests.",
        "text": "Which loads the dashboard data faster?",
        "code": "// A\nconst users = await fetch('/api/users').then(r => r.json());\nconst orders = await fetch('/api/orders').then(r => r.json());\n// B\nconst [users, orders] = await Promise.all([\n  fetch('/api/users').then(r => r.json()),\n  fetch('/api/orders').then(r => r.json())\n]);",
        "answers": [
          "A — sequential is faster",
          "They are identical",
          "B — both requests run in parallel",
          "A — Promise.all is slower"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "ETag kay-khlli client y-cache. Chno khass y-sift l client l mara jaya?",
        "text": "The API returns the same JSON for every GET /config. What can the client add to avoid re-downloading it?",
        "code": "// first response headers include:\n// ETag: \"abc123\"",
        "answers": [
          "Nothing — caching is impossible",
          "Send If-None-Match: \"abc123\" next time; a 304 means \"use your cache\"",
          "Use POST instead",
          "Add a random query param"
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
        "explain_dr": "Fetch bla method kat-st3mel GET by default. Chno l method dyal had request?",
        "text": "Quelle méthode HTTP cette requête utilise-t-elle ?",
        "code": "fetch('/api/users')",
        "answers": [
          "POST",
          "FETCH",
          "GET — la méthode par défaut",
          "PUT"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "Method mktoba explicitement. Chno l method hna?",
        "text": "Quelle méthode HTTP cette requête utilise-t-elle ?",
        "code": "fetch('/api/users', { method: 'POST' })",
        "answers": [
          "GET",
          "POST",
          "SEND",
          "FETCH"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "Status codes: 2xx kay3niw success. Chno kay3ni 200?",
        "text": "L'API répond avec le statut 200. Qu'est-ce que cela signifie ?",
        "answers": [
          "La requête a réussi",
          "La ressource n'a pas été trouvée",
          "Le serveur a planté",
          "Vous n'êtes pas connecté"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "4xx kay3niw client errors. Chno kay3ni 404?",
        "text": "L'API répond avec le statut 404. Qu'est-ce que cela signifie ?",
        "answers": [
          "Succès",
          "Erreur serveur",
          "Redirection",
          "Non trouvé"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "Route kat-matchi method + path. Chno l requests li kay-handli had l route?",
        "text": "Quelles requêtes cette route gère-t-elle ?",
        "code": "app.get('/users', handler)",
        "answers": [
          "POST /users",
          "Toutes les méthodes sur /users",
          "GET /users",
          "GET sur n'importe quel chemin"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "Res.json kat-sift JSON. Chno ghay-wsel l client?",
        "text": "Que reçoit le client ?",
        "code": "app.get('/me', (req, res) => {\n  res.json({ name: 'Aya' });\n});",
        "answers": [
          "Le texte « [object Object] »",
          "Une réponse JSON : { « name »: « Aya » }",
          "Une page HTML",
          "Rien"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la req.params.id: chno l type dyalo? Fker kifach Express kay-parse l URL.",
        "text": "Pour GET /users/7, que vaut req.params.id ?",
        "code": "app.get('/users/:id', (req, res) => {\n  res.json({ id: req.params.id });\n});",
        "answers": [
          "« 7 »",
          "7 en nombre",
          "undefined",
          ":id"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "Mlli resource t-creata, chno l status l munasib? Fker f 2xx codes.",
        "text": "Un nouvel utilisateur a été créé. Quel statut l'API doit-elle retourner ?",
        "answers": [
          "200",
          "404",
          "500",
          "201"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "DELETE method kay3ni delete. Chno kaydir had request?",
        "text": "Que fait cette requête ?",
        "code": "fetch('/api/users/5', { method: 'DELETE' })",
        "answers": [
          "Récupère l'utilisateur 5",
          "Met à jour l'utilisateur 5",
          "Demande à l'API de supprimer l'utilisateur 5",
          "Supprime toute la base de données"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "5xx kay3niw server errors. Chno kay3ni 500?",
        "text": "L'API répond avec le statut 500. Qu'est-ce que cela signifie ?",
        "answers": [
          "Le client a envoyé une mauvaise requête",
          "Une erreur inattendue s'est produite sur le serveur",
          "La ressource a été supprimée",
          "L'utilisateur n'est pas autorisé"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "Fetch body khassha tkoun string wla FormData. Chno lmochkil hna?",
        "text": "Pourquoi le serveur reçoit-il un corps vide ?",
        "code": "fetch('/api/users', {\n  method: 'POST',\n  body: { name: 'Aya' }\n})",
        "answers": [
          "Le body doit être une chaîne — utilisez JSON.stringify({ name: 'Aya' })",
          "POST ne peut pas avoir de body",
          "L'objet a besoin d'un champ type",
          "Le serveur est en panne"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "Server khass y3ref chno l type dyal body. Chno l header li na9es?",
        "text": "Le corps JSON arrive sous forme de chaîne que le serveur ne peut pas analyser. Quel header manque ?",
        "code": "fetch('/api/users', {\n  method: 'POST',\n  body: JSON.stringify({ name: 'Aya' })\n})",
        "answers": [
          "Authorization",
          "Accept-Language",
          "X-Requested-With",
          "Content-Type: application/json"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "Route kat-matchi l method kaman. 3lach GET kay-rja3 404?",
        "text": "Le client envoie GET /users mais reçoit 404. Le serveur a cette route. Pourquoi ?",
        "code": "app.post('/users', handler)",
        "answers": [
          "Express est cassé",
          "Le chemin nécessite un slash final",
          "La route ne gère que POST — la méthode ne correspond pas",
          "GET est désactivé"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "Express ma kay-parsich JSON bo7do. Chno khass t-zid bach req.body ykhdem?",
        "text": "Pourquoi req.body est-il undefined ?",
        "code": "const app = express();\napp.post('/users', (req, res) => {\n  console.log(req.body); // undefined\n  res.json({});\n});",
        "answers": [
          "Les requêtes POST n'ont pas de body",
          "Le middleware express.json() n'a jamais été ajouté, donc le corps JSON n'est pas analysé",
          "req.body est toujours undefined",
          "La route doit être GET"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "Fetch kay-rejecti ghir 3la network failures. Wach .catch ghaykhdem m3a 500?",
        "text": "L'API retourne 500. Le .catch() ci-dessous s'exécute-t-il ?",
        "code": "fetch('/api/users')\n  .then(r => r.json())\n  .catch(() => console.log('caught'));",
        "answers": [
          "Non — fetch ne rejette qu'en cas d'échec réseau, pas pour les statuts d'erreur HTTP",
          "Oui, toujours",
          "Seulement pour 404",
          "Oui, mais seulement dans Chrome"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "Response wa7da l request wa7ed. Chno kaytra mlli kat-sift joj responses?",
        "text": "Que se passe-t-il quand ce handler s'exécute ?",
        "code": "app.get('/x', (req, res) => {\n  res.send('ok');\n  res.json({ done: true });\n});",
        "answers": [
          "Les deux réponses sont envoyées",
          "Le JSON gagne",
          "Le client reçoit « ok » deux fois",
          "Erreur : « Cannot set headers after they are sent »"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "Fetch asynchronous: chno kay-rja3 direct? Fker f l async nature.",
        "text": "Qu'affiche ce code ?",
        "code": "const res = fetch('/api/users');\nconsole.log(res);",
        "answers": [
          "La liste des utilisateurs",
          "undefined",
          "Une Promise — fetch est asynchrone",
          "Une erreur"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la fin kayt7at l query string: params wla query wla body? Fker f l far9 binathom.",
        "text": "Pour GET /search?q=shoes, où se trouve « shoes » ?",
        "code": "app.get('/search', (req, res) => {\n  // ???\n});",
        "answers": [
          "req.params.q",
          "req.query.q",
          "req.body.q",
          "req.headers.q"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "Browsers kay-blokiw requests bin origins mokhtalfin. 3lach khdam f Postman w la f browser?",
        "text": "La requête fonctionne dans Postman mais le navigateur la bloque. Le frontend est sur localhost:3000 et l'API sur localhost:5000. Pourquoi ?",
        "answers": [
          "Les navigateurs appliquent CORS pour les requêtes cross-origin — l'API doit autoriser l'origine du frontend",
          "Postman est plus rapide",
          "fetch ne fonctionne pas sur localhost",
          "L'API n'accepte que Postman"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "Express kay-matchi routes b l ordre. 3lach /users/new ma wselch l showForm?",
        "text": "GET /users/new retourne le profil de l'utilisateur « new » au lieu du formulaire d'inscription. Pourquoi ?",
        "code": "app.get('/users/:id', showUser);\napp.get('/users/new', showForm);",
        "answers": [
          "Express est sensible à la casse",
          "La route du formulaire est invalide",
          ":id ne correspond pas aux chaînes",
          "Les routes correspondent dans l'ordre — /users/:id capture « /new » en premier"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la l far9 bin PUT w PATCH: chkun kay-remplacer l resource kamla w chkun ghir partial update?",
        "text": "Quelle requête REMPLACE entièrement l'utilisateur 5 ?",
        "code": "// A\nfetch('/api/users/5', { method: 'PUT', body: JSON.stringify({ name: 'Aya' }) })\n// B\nfetch('/api/users/5', { method: 'PATCH', body: JSON.stringify({ name: 'Aya' }) })",
        "answers": [
          "B — PATCH remplace tout",
          "Les deux font la même chose",
          "A — PUT remplace toute la ressource ; PATCH applique une mise à jour partielle",
          "Aucune — utilisez POST"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "204 kay3ni success bla body. Chno khass l client ydir?",
        "text": "L'utilisateur a été supprimé. L'API répond 204 avec un corps vide. Que doit faire le client ?",
        "code": "await fetch('/api/users/5', { method: 'DELETE' });\n// status: 204",
        "answers": [
          "Réessayer la requête",
          "Le considérer comme un succès — 204 signifie terminé, aucun contenu à analyser",
          "Afficher une erreur",
          "Analyser le corps JSON"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "Validation error: chno l status l munasib mlli field required na9es?",
        "text": "POST /users manque le champ obligatoire « email ». Quel statut l'API doit-elle retourner ?",
        "answers": [
          "400 Bad Request",
          "404 Not Found",
          "200 OK",
          "500 Internal Error"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "Middleware kay-khdem b l ordre. Fin khass t-7at express.json()?",
        "text": "Où express.json() doit-il être placé pour fonctionner ?",
        "code": "const app = express();\napp.use(express.json());\napp.post('/users', handler);",
        "answers": [
          "Après les routes",
          "À l'intérieur du handler",
          "Peu importe",
          "Avant les routes qui ont besoin de req.body"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "Middleware kayt-applya ghir l routes li morah. 3lach /admin ma 7matoch?",
        "text": "Pourquoi /admin est-il accessible sans token ?",
        "code": "app.get('/admin', adminHandler);\napp.use(authMiddleware);",
        "answers": [
          "authMiddleware est cassé",
          "Les routes GET ignorent les middlewares",
          "Les middlewares s'exécutent dans l'ordre — authMiddleware a été ajouté après la route",
          "Les routes admin sont publiques par défaut"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "Middleware li ma kay-callish next() kay-7bes l request. 3lach l request kat-hang?",
        "text": "Pourquoi la requête reste-t-elle bloquée indéfiniment ?",
        "code": "app.use((req, res, next) => {\n  console.log(req.method, req.path);\n});\napp.get('/users', handler);",
        "answers": [
          "Le log est trop lent",
          "Le middleware n'appelle jamais next(), donc la requête n'atteint jamais la route",
          "console.log bloque Express",
          "GET n'est pas supporté"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "REST convention: nested resources b path. Chno l endpoint s7i7?",
        "text": "Quel est le bon endpoint REST pour « toutes les commandes de l'utilisateur 5 » ?",
        "answers": [
          "/users/5/orders",
          "/getUserOrders?user=5",
          "/orders/get/5",
          "/users/orders/5/all"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "Credentials ma khasshomch ybano f URL. Chno l design s7i7?",
        "text": "Quelle est la bonne conception pour un endpoint de connexion ?",
        "answers": [
          "GET /login?email=a@b.c&password=123",
          "GET /login avec identifiants dans les headers",
          "POST /login avec identifiants dans l'URL",
          "POST /login avec identifiants dans le corps de la requête"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "Status + json: chno ghay-wsel l client?",
        "text": "Que reçoit le client ?",
        "code": "app.get('/users/99', (req, res) => {\n  res.status(404).json({ error: 'Not found' });\n});",
        "answers": [
          "Statut 200 avec un message d'erreur",
          "Une réponse vide",
          "Statut 404 avec JSON { error: 'Not found' }",
          "Statut 500"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "Idempotent kay3ni t9dar t-3awdo bla effect zyada. Chno l method li safe t-retryiha?",
        "text": "Le réseau tombe en pleine requête. Quelle méthode peut être réessayée sans risque ?",
        "answers": [
          "POST",
          "PUT — elle est idempotente : la répéter a le même effet",
          "POST avec un nouvel id",
          "Aucune"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "Express kay-3ref error middleware b 4 args. Chno l signature?",
        "text": "Quelle est la signature d'un middleware de gestion d'erreur Express ?",
        "answers": [
          "(err, req, res, next) — quatre arguments",
          "(req, res, next)",
          "(err, req, res)",
          "(error)"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "Async handler m3a try/catch: chno ghay-wsel l client mlli DB t-faili?",
        "text": "La base de données échoue. Que reçoit le client ?",
        "code": "app.get('/users', async (req, res) => {\n  try {\n    const users = await db.getUsers();\n    res.json(users);\n  } catch (e) {\n    res.status(500).json({ error: 'DB failed' });\n  }\n});",
        "answers": [
          "Une requête bloquée",
          "Statut 200",
          "Une page HTML",
          "Statut 500 avec JSON { error: 'DB failed' }"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "Ma kaynach token ga3: authentication wla authorization? Chno l status?",
        "text": "Aucun token n'est envoyé. Quel statut convient ?",
        "code": "fetch('/api/profile')",
        "answers": [
          "403",
          "200",
          "401 Unauthorized",
          "404"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "Token valid walakin ma 3andoch l 7a9: chno l status l munasib?",
        "text": "Le token est valide, mais l'utilisateur n'est pas admin. Quel statut convient ?",
        "code": "fetch('/api/admin', { headers: { Authorization: 'Bearer user-token' } })",
        "answers": [
          "401",
          "403 Forbidden",
          "404",
          "200"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "Rate limiting: chno l status li kaygolik 'bzzaf dyal requests'?",
        "text": "Le client a fait trop de requêtes. Quel statut l'API doit-elle retourner ?",
        "answers": [
          "429 Too Many Requests",
          "500",
          "404",
          "200"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la 201 m3a Location header: chno kay3niw bjoj? Fker f chno kayt-zad mlli resource t-creata.",
        "text": "Qu'indique cette réponse au client ?",
        "code": "res.status(201)\n   .location('/users/12')\n   .json({ id: 12 });",
        "answers": [
          "L'utilisateur a été supprimé",
          "Une erreur s'est produite",
          "La requête est en attente",
          "Un utilisateur a été créé ; il se trouve à /users/12"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "?a=1&a=2: chno ghaykoun req.query.a? Fker f kifach Express kay-parse.",
        "text": "Pour GET /tags?a=1&a=2, que vaut req.query.a ?",
        "answers": [
          "« 1 »",
          "« 2 »",
          "['1', '2'] — les paramètres répétés deviennent un tableau",
          "undefined"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "Middleware 3la path prefix kat-applya l ga3 l routes ta7to. Chno l setup s7i7?",
        "text": "Toutes les routes /api partagent la même vérification d'auth. Quelle configuration fait cela ?",
        "code": "// A\napp.get('/api/users', auth, h1);\napp.get('/api/orders', auth, h1);\n// B\napp.use('/api', auth);\napp.get('/api/users', h1);",
        "answers": [
          "Seulement A",
          "B — app.use('/api', auth) exécute auth pour chaque route /api",
          "Les deux sont fausses",
          "Aucune ne fonctionne"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "Res.json kat-setti header automatiquement. Chno l header?",
        "text": "Que définit res.json() automatiquement ?",
        "answers": [
          "Le header Content-Type: application/json",
          "Le statut à 201",
          "Un header CORS",
          "Le charset en ASCII"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "SendStatus kat-sift status + text default. Chno ghay-wsel?",
        "text": "Que reçoit le client ?",
        "code": "app.delete('/users/5', (req, res) => {\n  res.sendStatus(404);\n});",
        "answers": [
          "Statut 200",
          "Un 404 vide",
          "JSON null",
          "Statut 404 avec le texte « Not Found »"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la comparison bin param w number: chno l type dyal param? Fker chno ghaykoun natijat === .",
        "text": "Pour GET /users/5, qu'affiche ce code ?",
        "code": "app.get('/users/:id', (req, res) => {\n  console.log(req.params.id === 5);\n});",
        "answers": [
          "true",
          "Une erreur",
          "false — les paramètres de route sont toujours des chaînes",
          "undefined"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "Undefined values ma kayt-siftouch f JSON. Chno ghay-wsel l server?",
        "text": "Que reçoit réellement le serveur ?",
        "code": "fetch('/api/data', {\n  method: 'POST',\n  body: JSON.stringify({ a: 1, b: undefined })\n})",
        "answers": [
          "{ « a »: 1, « b »: null }",
          "{ « a »: 1 } — JSON.stringify supprime les valeurs undefined",
          "Une erreur",
          "{ « a »: 1, « b »: « undefined » }"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "Fetch ma kay-siftch cookies cross-origin by default. Chno na9es?",
        "text": "L'API utilise des sessions par cookie, mais les utilisateurs connectés apparaissent déconnectés lors des appels depuis le frontend. Que manque-t-il ?",
        "code": "fetch('/api/me')",
        "answers": [
          "credentials: 'include' — fetch n'envoie pas les cookies cross-origin par défaut",
          "La méthode doit être POST",
          "Les cookies ne peuvent pas être utilisés avec fetch",
          "L'URL doit être absolue"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "Body khawi: chno kaytra mlli kat-7awl t-parsih k JSON?",
        "text": "Que se passe-t-il ici ?",
        "code": "const r = await fetch('/api/users/5', { method: 'DELETE' });\n// status: 204, empty body\nconst data = await r.json();",
        "answers": [
          "data vaut null",
          "data vaut {}",
          "Il attend un corps",
          "Cela lève une erreur — il n'y a pas de corps à analyser en JSON"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "304 kay3ni 'ma t-bdel walo'. Chno khass l client ydir?",
        "text": "Le deuxième GET identique retourne 304. Que doit faire le client ?",
        "answers": [
          "Afficher une erreur",
          "Réessayer avec POST",
          "Utiliser sa copie en cache de la réponse",
          "Vider le cache"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "L route kat-matchi, walakin l id machi valid. Chno l status l munasib?",
        "text": "Pour GET /users/abc, que doit retourner l'API ?",
        "code": "app.get('/users/:id', (req, res) => {\n  // ids are numbers in the database\n});",
        "answers": [
          "200 avec un utilisateur vide",
          "400 — « abc » correspond à :id, mais ce n'est pas un id numérique valide",
          "500",
          "La route ne correspond pas"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "HEAD b7al GET bla body. Chno ghay-wsel l client?",
        "text": "Que reçoit le client ?",
        "code": "const r = await fetch('/api/users', { method: 'HEAD' });",
        "answers": [
          "Seulement les headers, pas de corps — HEAD fonctionne comme GET sans le corps",
          "La liste complète des utilisateurs",
          "Une erreur — HEAD n'est pas une vraie méthode",
          "Un 404 vide"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "Browser kay-sift OPTIONS 9bel requests li fihom custom headers. 3lach?",
        "text": "Avant le POST avec un header Authorization, le navigateur envoie une requête OPTIONS. Pourquoi ?",
        "code": "fetch('/api/users', {\n  method: 'POST',\n  headers: { Authorization: 'Bearer x' }\n})",
        "answers": [
          "C'est un bug de fetch",
          "Le serveur l'a demandé",
          "Pour réessayer la requête",
          "C'est un preflight CORS — le navigateur vérifie d'abord que le serveur autorise cette requête"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "Sequential vs parallel: chno li asra3? Fker f kifach kay-khdmo l requests.",
        "text": "Lequel charge les données du tableau de bord plus vite ?",
        "code": "// A\nconst users = await fetch('/api/users').then(r => r.json());\nconst orders = await fetch('/api/orders').then(r => r.json());\n// B\nconst [users, orders] = await Promise.all([\n  fetch('/api/users').then(r => r.json()),\n  fetch('/api/orders').then(r => r.json())\n]);",
        "answers": [
          "A — séquentiel est plus rapide",
          "Ils sont identiques",
          "B — les deux requêtes s'exécutent en parallèle",
          "A — Promise.all est plus lent"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "ETag kay-khlli client y-cache. Chno khass y-sift l client l mara jaya?",
        "text": "L'API retourne le même JSON pour chaque GET /config. Qu'est-ce que le client peut ajouter pour éviter de le retélécharger ?",
        "code": "// first response headers include:\n// ETag: \"abc123\"",
        "answers": [
          "Rien — la mise en cache est impossible",
          "Envoyer If-None-Match: « abc123 » la prochaine fois ; un 304 signifie « utilisez votre cache »",
          "Utiliser POST à la place",
          "Ajouter un paramètre aléatoire"
        ],
        "correct": 1,
        "selection": null
      }
    ]
  }
];
