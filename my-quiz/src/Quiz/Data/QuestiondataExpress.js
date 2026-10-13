export const expressQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "So2al 3la app.get: hadi kat-sajel route kat-jawb ghir 3la GET requests l path mo3ayan. Fker chnu kaydir res.send melli request kat-wsal.",
        "text": "What does this code do when the server receives a GET request to /users?",
        "code": "const express = require('express');\nconst app = express();\napp.get('/users', (req, res) => {\n  res.send('user list');\n});\napp.listen(3000);",
        "answers": [
          "It crashes — app.get needs three arguments",
          "It responds with the text 'user list'",
          "It responds with a JSON array of users",
          "It prints 'user list' in the terminal"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al 3la listen: bla had l satr, l app katb9a ghir code ma khdamch. Fker chnu khaso y-tra bach server y-bda y-sta9bel requests.",
        "text": "What is the purpose of app.listen(3000)?",
        "answers": [
          "It creates a route for port 3000",
          "It starts the server so it accepts requests on port 3000",
          "It limits the app to 3000 requests",
          "It connects to a database on port 3000"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al 3la route params: :id f path kat-tsama dynamic segment. Fker chnu type kat-rja3 Express l values dyal params, number wla string?",
        "text": "A client requests GET /users/42. What does res.json(req.params) send back?",
        "code": "app.get('/users/:id', (req, res) => {\n  res.json(req.params);\n});",
        "answers": [
          "{ \"id\": 42 }",
          "{ \"id\": \"42\" }",
          "{ \"params\": 42 }",
          "{}"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al 3la query strings: li kayji mn ba3d ? f URL 3ndo smiya khasa f Express. Fker l far9 bin params (f path) w li kayji mn ba3d ?.",
        "text": "A client requests GET /search?q=phone&page=2. Which expression reads the value 'phone'?",
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
        "id": 4,
        "level": 1,
        "explain_dr": "So2al 3la res.json: had l method kat-stringify l object w kat-zid header mo3ayan. Fker chnu kay-dir res.json zyada 3la res.send.",
        "text": "What Content-Type header does this response carry?",
        "code": "app.get('/data', (req, res) => {\n  res.json({ ok: true });\n});",
        "answers": [
          "text/html",
          "application/json",
          "text/plain",
          "application/xml"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "So2al 3la res.status: chaining kat-khlik t-7dded status code 9bel ma t-sift response. Fker chnu status code mnasb l creation dyal resource jdida.",
        "text": "What does the client receive?",
        "code": "app.post('/users', (req, res) => {\n  res.status(201).json({ id: 7 });\n});",
        "answers": [
          "Status 200 with { \"id\": 7 }",
          "Status 201 with { \"id\": 7 }",
          "Status 201 with an empty body",
          "Status 500 with an error"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al 3la body parsing: Express bo7do ma kay-parse-ich body dyal request. Fker chnu middleware khaso y-tzad bach req.body y-3mer b JSON.",
        "text": "A POST /users request sends JSON { \"name\": \"Sara\" }, but req.body is undefined. What is missing?",
        "code": "const app = express();\napp.post('/users', (req, res) => {\n  console.log(req.body); // undefined\n  res.send('ok');\n});",
        "answers": [
          "app.use(express.json()) before the route",
          "app.use(express.static('public'))",
          "A route parameter :name",
          "Nothing — Express parses JSON bodies by default"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "So2al 3la HTTP methods: Express kay-far9 bin routes 7asab method + path bjoj. Fker wach nafs l path y9der y-kon 3ndo handlers mokhtalfin.",
        "text": "What happens with these two definitions?",
        "code": "app.get('/items', listItems);\napp.post('/items', createItem);",
        "answers": [
          "Both handle GET /items",
          "GET /items runs listItems and POST /items runs createItem",
          "Both handle every method on /items",
          "The second definition overwrites the first"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "So2al 3la res.send m3a string: Express kay-detecti type dyal data li siftiti. Fker chnu content-type kay-3ti l string 3adiya.",
        "text": "What Content-Type does res.send('Hello') set?",
        "answers": [
          "application/json",
          "text/html",
          "text/plain",
          "It sends no Content-Type"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "So2al 3la req object: howa lwl f signature dyal handler. Fker chnu kay-mathel: li ja mn client wla li ghadi l client?",
        "text": "In (req, res) => { ... }, what is req?",
        "answers": [
          "The server configuration object",
          "An object describing the incoming HTTP request: URL, headers, params, body",
          "The database connection",
          "The HTML template for the response"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "So2al 3la tartib dyal middleware: app.use kay-tssjel middleware li kay-khdem 9bel routes. Fker chnu kay-tra melli middleware kay-3ayet l next().",
        "text": "In what order is output printed when GET /ping is requested?",
        "code": "app.use((req, res, next) => {\n  console.log('A');\n  next();\n});\napp.get('/ping', (req, res) => {\n  console.log('B');\n  res.send('pong');\n});",
        "answers": [
          "B then A",
          "A then B",
          "Only A",
          "Only B"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "So2al 3la next(): middleware khaso y-7dded wach y-kmel l chain wla y-7bessha. Fker chnu kay-tra l request ila 7ta wa7ed ma jawb 3lih.",
        "text": "What happens if a middleware never calls next() and never sends a response?",
        "code": "app.use((req, res, next) => {\n  console.log('stuck here');\n});\napp.get('/x', (req, res) => res.send('never'));",
        "answers": [
          "Express skips it automatically",
          "The request hangs until it times out",
          "The route handler still runs",
          "Express throws an error immediately"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "So2al 3la Router mounting: app.use('/api', router) kat-zid prefix l ga3 routes dyal router. Fker kifach kay-tjma3o prefix m3a path dyal router.",
        "text": "Which full path triggers the router handler?",
        "code": "const router = express.Router();\nrouter.get('/users', (req, res) => res.send('hi'));\napp.use('/api', router);",
        "answers": [
          "/users",
          "/api/users",
          "/api/router/users",
          "/api"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "So2al 3la static files: had l middleware built-in kat-khali server y-sift files nichan. Fker chnu ghadi y-tra melli client y-tlob /style.css.",
        "text": "What does this line make the server do?",
        "code": "app.use(express.static('public'));",
        "answers": [
          "Parse JSON request bodies",
          "Serve files (HTML, CSS, images) from the public folder automatically",
          "Block all static content",
          "Compress every response"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "So2al 3la app.use m3a path: hadi kat-tssjel middleware l path mo3ayan. Fker wach kay-khdem ghir 3la nafs l path b dabt, wla 3la li ta7to ta howa.",
        "text": "Which requests will this middleware run for?",
        "code": "app.use('/admin', (req, res, next) => {\n  console.log('admin area');\n  next();\n});",
        "answers": [
          "Every request to the app",
          "Only GET /admin",
          "Requests to /admin and anything under it, like /admin/users",
          "Only POST /admin"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al 3la 404 handling: melli 7ta route ma tataba9, khask handler li kay-chedd ga3 li b9a. Fker fin khaso y-kon w chnu signature dyalo.",
        "text": "A request for GET /missing matches no route. Which handler correctly returns a 404?",
        "answers": [
          "app.get('/404', (req, res) => res.send('not found'));",
          "app.use((req, res) => res.status(404).send('not found'));",
          "app.use((err, req, res, next) => res.status(404).send('not found'));",
          "app.listen(404);"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al 3la multiple handlers: route wa7da t9der y-kon 3ndha bzaf dyal handlers. Fker chnu khaso y-dir l handler lwl bach tani y-khdem.",
        "text": "What is logged when GET /a is requested?",
        "code": "app.get('/a', (req, res, next) => {\n  console.log('first');\n  next();\n}, (req, res) => {\n  console.log('second');\n  res.send('done');\n});",
        "answers": [
          "first",
          "second",
          "first then second",
          "nothing"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al 3la tartib tssjil: Express kay-khdem b tartib li tssjelti bih. Fker chnu kay-tra melli route kat-jawb 9bel ma y-wsal l middleware.",
        "text": "The logger never prints when GET /hello is requested. Why?",
        "code": "app.get('/hello', (req, res) => res.send('hi'));\napp.use((req, res, next) => {\n  console.log('logger');\n  next();\n});",
        "answers": [
          "Middleware only runs for POST requests",
          "Middleware registered after a route never runs for requests that the route already answered",
          "console.log is disabled in Express",
          "app.use must come before require('express')"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "So2al 3la req.method: had l property kat-golik ina HTTP method t-sta3mel. Fker chnu format: lowercase wla uppercase?",
        "text": "What does req.method contain for a POST /users request?",
        "answers": [
          "'post'",
          "'POST'",
          "'/users'",
          "The request body"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al 3la get vs use: wa7da route w wa7da middleware. Fker l far9 f HTTP methods li kay-cheddo w f subpaths.",
        "text": "What is the difference between app.get('/users') and app.use('/users')?",
        "answers": [
          "There is no difference",
          "app.get handles only GET requests to /users; app.use runs for every HTTP method on /users and its subpaths",
          "app.use is faster",
          "app.get handles every HTTP method"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al 3la multiple params: t9der t-dir bzaf dyal :segments f path wa7ed. Fker kifach Express kay-semi kol wa7ed w chnu type dyal values.",
        "text": "GET /users/12/posts/99 is requested. What does req.params contain?",
        "code": "app.get('/users/:userId/posts/:postId', (req, res) => {\n  res.json(req.params);\n});",
        "answers": [
          "{ \"userId\": \"12\", \"postId\": \"99\" }",
          "{ \"id\": \"12\" }",
          "{ \"userId\": 12, \"postId\": 99 }",
          "{ \"params\": [\"12\", \"99\"] }"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "So2al 3la query arrays: melli nafs l key t-3awed f query string, Express kay-jma3 values. Fker f ina structure kay-rja3hom.",
        "text": "GET /tags?tag=js&tag=node is requested. What is req.query.tag?",
        "answers": [
          "'js'",
          "'node'",
          "['js', 'node']",
          "'js,node'"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al 3la middleware khasa b route: t9der t-zid middleware ghir l route wa7da. Fker fin kay-t7at f arguments dyal app.get.",
        "text": "Which line registers a middleware that runs only before the dashboard handler?",
        "answers": [
          "app.use(auth); app.get('/dashboard', showDashboard);",
          "app.get('/dashboard', auth, showDashboard);",
          "app.get(auth, '/dashboard', showDashboard);",
          "auth(app.get('/dashboard', showDashboard));"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al 3la res.redirect: hadi kat-gol l browser y-mchi l URL akhra. Fker chnu status code dyal redirect li kay-tsta3mel by default.",
        "text": "What does this route do?",
        "code": "app.get('/old', (req, res) => {\n  res.redirect('/new');\n});",
        "answers": [
          "Responds 200 with the text '/new'",
          "Responds 302 and makes the browser request /new",
          "Renders the /new page on the server",
          "Responds 404"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "So2al 3la duplicate routes: melli joj routes kay-tatab9o, Express kay-khdem b tartib. Fker chnu kay-tra melli lwl kay-sift response.",
        "text": "What is the result of defining the same route twice?",
        "code": "app.get('/x', (req, res) => res.send('one'));\napp.get('/x', (req, res) => res.send('two'));",
        "answers": [
          "Both run and the client receives 'onetwo'",
          "The first handler wins; the client receives 'one'",
          "The second overwrites the first; the client receives 'two'",
          "Express throws a duplicate-route error"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "So2al 3la app.route: hadi tari9a bach t-jma3 routes li 3ndhom nafs l path. Fker kifach kat-khlik t-chaini .get() w .post().",
        "text": "What does app.route('/users') let you do?",
        "answers": [
          "Create a sub-application",
          "Chain handlers for several HTTP methods on the same path",
          "Redirect /users to another domain",
          "Serve static files from /users"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al 3la form data: forms dyal HTML ma kay-siftoch JSON. Fker chnu middleware built-in li kay-parse l format dyal forms.",
        "text": "A form posts with Content-Type application/x-www-form-urlencoded. Which middleware parses it into req.body?",
        "answers": [
          "express.json()",
          "express.urlencoded({ extended: true })",
          "express.static('public')",
          "express.text()"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al 3la guard middleware: melli condition t-7a9a9, khaso y-khali request y-doz l li mn wrah. Fker chnu l call li kat-kmel l chain.",
        "text": "The auth middleware rejects unauthenticated users. What must it do so valid users continue?",
        "code": "function auth(req, res, next) {\n  if (!req.headers.token) {\n    return res.status(401).send('nope');\n  }\n  // ???\n}",
        "answers": [
          "return res.send('ok');",
          "next();",
          "next('/login');",
          "Nothing — it continues automatically"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al 3la next(err): melli kat-3ti error l next, Express kay-bdel l massar. Fker fin kay-mchi: l handlers 3adiyin wla l error handlers.",
        "text": "What does next(err) do inside a route handler?",
        "answers": [
          "It restarts the server",
          "It skips normal middleware and jumps to the first error-handling middleware",
          "It sends a 200 response",
          "It retries the same handler"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al 3la blassa dyal 404: had l handler khaso y-chedd ghir li ma cheddo 7ta route. Fker 3lach tartib mohim hna.",
        "text": "Where must the 404 catch-all handler be registered?",
        "answers": [
          "Before all routes",
          "After all routes and routers",
          "Inside express.json()",
          "It is built in — no registration needed"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al 3la signature dyal error handler: Express kay-3ref type dyal middleware mn 3adad arguments. Fker ch7al mn argument khaso y-kon w chnu howa lwl.",
        "text": "Which function signature makes Express treat a middleware as an ERROR handler?",
        "answers": [
          "(req, res, next)",
          "(err, req, res, next)",
          "(req, res)",
          "(error)"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "So2al 3la tartib dyal error handlers: Express kay-9leb 3la error handler mn b3d l blassa li w9e3 fiha error. Fker 3lach li 9bel ma kay-tchafch.",
        "text": "This error handler never runs when the route calls next(new Error('boom')). Why?",
        "code": "app.use((err, req, res, next) => {\n  res.status(500).send('oops');\n});\napp.get('/x', (req, res, next) => {\n  next(new Error('boom'));\n});",
        "answers": [
          "next() was called without arguments",
          "The error handler is registered before the route that triggers the error",
          "Error handlers need only three parameters",
          "Errors must be thrown, not passed to next"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "So2al 3la async errors f Express 4: promises li kay-fchlo ma kay-tchddoch bo7dhom. Fker chnu khask t-dir bach error y-wsal l error handler.",
        "text": "In Express 4, what happens when an async route handler's promise rejects and nothing catches it?",
        "code": "app.get('/data', async (req, res) => {\n  const rows = await db.query('SELECT 1'); // rejects!\n  res.json(rows);\n});",
        "answers": [
          "Express catches it and sends a 500",
          "The request hangs and Node emits an unhandled rejection — you must try/catch and call next(err)",
          "Express retries the query",
          "The server crashes immediately"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al 3la next('route'): hadi version khasa dyal next. Fker l far9 binha w bin next() 3adiya: chnu kay-tkheta.",
        "text": "What does next('route') do inside the first handler?",
        "code": "app.get('/x', h1, h2, h3);\n// inside h1: next('route')",
        "answers": [
          "It skips h2 and h3 and moves to the next matching route",
          "It skips the whole app and sends a 404",
          "It restarts h1",
          "It exits the process"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al 3la router middleware: middleware li tssjel f router kay-khdem ghir ldakhel dyalo. Fker chnu scope dyalo melli router mounted ta7t /r.",
        "text": "Which requests trigger the router logger?",
        "code": "const r = express.Router();\nr.use((req, res, next) => { console.log('log'); next(); });\nr.get('/a', h1);\nr.get('/b', h2);\napp.use('/r', r);",
        "answers": [
          "Only /r/a",
          "Requests to /r/a and /r/b, but not other app routes",
          "Every request in the whole app",
          "None — router middleware never runs"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al 3la double next(): kol next() kat-dfe3 request l 9ddam. Fker chnu kay-tra melli t-3ayetlo joj merrat w handler li mn wrah kay-jawb.",
        "text": "What is wrong with calling next() twice in the same handler?",
        "code": "app.get('/x', (req, res, next) => {\n  next();\n  next();\n  res.send('done');\n});",
        "answers": [
          "Nothing — the second call is ignored",
          "The downstream handler runs again and you risk 'Cannot set headers after they are sent'",
          "Express throws at startup",
          "The response is sent twice successfully"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "So2al 3la router.param: hadi kat-khlik t-pre-processi param mo3ayan. Fker imta kat-khdem w chnu kay-wsal f argument rabe3.",
        "text": "How does router.param('id', ...) behave?",
        "code": "router.param('id', (req, res, next, id) => {\n  req.user = findUser(id);\n  next();\n});",
        "answers": [
          "router.param only works on the app object",
          "It runs automatically for any router route containing :id, and id holds the parameter value",
          "It runs for every request",
          "The fourth argument is always undefined"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "So2al debugging: tartib tssjil ghalet kay-khali catch-all y-sbe9 routes. Fker kifach Express kay-khtar ina handler y-khdem lwl.",
        "text": "GET /api/users returns 'nf' with status 404 instead of []. Why?",
        "code": "app.use((req, res) => res.status(404).send('nf'));\napp.get('/api/users', (req, res) => res.json([]));",
        "answers": [
          "res.json is broken",
          "The catch-all 404 middleware is registered before the API route, so it answers first",
          "GET requests cannot return JSON",
          "404 handlers must use res.json"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "So2al 3la headersSent: f error handler, ma 3rftich wach response tsiftat wla la. Fker chnu property kat-golik had l me3loma.",
        "text": "What does res.headersSent tell you?",
        "answers": [
          "Whether the request had headers",
          "Whether the response was already sent — useful to avoid sending twice in error handlers",
          "The number of headers",
          "Whether helmet is enabled"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al 3la tartib kamel: kol no3 dyal middleware 3ndo blassa. Fker: body parsing 9bel routes, 404 mn b3d ga3 routes, w error handlers f lkher.",
        "text": "Which order is correct for a typical Express app?",
        "answers": [
          "Error handlers → routes → body parsing → 404",
          "Body parsing → routes → 404 handler → error handlers",
          "404 handler → body parsing → routes → error handlers",
          "Routes → error handlers → body parsing → 404"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al 3la trust proxy: melli app khdama wra proxy, IP l 7a9i9iya kat-ji f header. Fker chnu setting kat-gol l Express y-tiq f had l header.",
        "text": "Behind a reverse proxy, req.ip shows the proxy's IP. What fixes it?",
        "answers": [
          "app.set('trust proxy', true)",
          "app.disable('ip')",
          "req.ip = req.headers.host",
          "express.static('public')"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al 3la helmet: hadi library dyal security. Fker chnu kat-zid l kol response bach t-7mi mn attacks m3rofine.",
        "text": "What does the helmet middleware primarily do?",
        "answers": [
          "Hash passwords",
          "Set secure HTTP headers to harden every response",
          "Encrypt the database",
          "Block all cross-origin requests"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "So2al 3la CORS: browsers kay-men3o requests l origin akhra by default. Fker chnu headers khaso y-sift server bach y-sm7 l had requests.",
        "text": "Why would you add the cors middleware to an Express API?",
        "answers": [
          "To make JSON responses smaller",
          "To let browsers call the API from a different origin by sending the right Access-Control headers",
          "To cache responses",
          "To compress images"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al 3la PORT: hosting platforms kat-3ti port f environment variable. Fker kifach t-9rah m3a fallback l development.",
        "text": "What is the safest way to choose the port in production?",
        "code": "const PORT = ???;\napp.listen(PORT);",
        "answers": [
          "const PORT = 3000;",
          "const PORT = process.env.PORT || 3000;",
          "const PORT = req.query.port;",
          "const PORT = Math.round(Math.random() * 9000);"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "So2al 3la next('router'): b7al next('route') walakin l router kamel. Fker fin kay-mchi request melli kat-khroj mn router.",
        "text": "What does next('router') do inside a router middleware?",
        "answers": [
          "It skips to the next route in the app",
          "It exits the current router and continues with middleware registered after the router",
          "It restarts the router",
          "It sends a 500 error"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al 3la baseUrl: melli router mounted, Express kay-7fed l prefix. Fker chnu kay-b9a m7fod f req.baseUrl.",
        "text": "Inside a router mounted at /api, what does req.baseUrl contain for GET /api/users?",
        "answers": [
          "'/users'",
          "'/api'",
          "'/api/users'",
          "''"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "So2al 3la security: error details mofida l developer walakin khatar. Fker chnu kayn f stack trace li ma khasch y-khroj l barra.",
        "text": "Why should production error handlers NOT send err.stack to the client?",
        "answers": [
          "Stacks are too short to be useful",
          "Stack traces can leak file paths and internals to attackers — log them server-side instead",
          "Clients cannot parse text",
          "Express forbids it"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al 3la rate limiting: hadi 7imaya ded requests li kay-t3awdo bzaf. Fker chnu attack kat-men3 melli kat-7dded requests per IP.",
        "text": "What is express-rate-limit used for?",
        "answers": [
          "Limiting the number of routes",
          "Limiting repeated requests from the same IP to mitigate brute-force and DoS attacks",
          "Limiting JSON body size",
          "Limiting concurrent database connections"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al 3la graceful shutdown: melli kat-7bess server, bghiti requests li khdamin y-kmlo. Fker chnu method kat-sedd b chouia b chouia.",
        "text": "For a graceful shutdown, what should you call on the object returned by app.listen()?",
        "answers": [
          "server.close() — stop accepting new connections, then exit when existing ones finish",
          "process.exit() immediately",
          "app.destroy()",
          "server.listen(0)"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "So2al 3la validation: data li jaya mn client ma khasch t-ti9 fiha. Fker fin khask t-verifiha 9bel ma t-sta3melha.",
        "text": "You must validate req.body before saving a user. Where is the BEST place?",
        "answers": [
          "In the 404 handler",
          "In a validation middleware (or the route handler) before touching the database",
          "In express.static",
          "In app.listen's callback"
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
        "explain_dr": "So2al 3la app.get: hadi kat-sajel route kat-jawb ghir 3la GET requests l path mo3ayan. Fker chnu kaydir res.send melli request kat-wsal.",
        "text": "Que fait ce code quand le serveur reçoit une requête GET vers /users ?",
        "code": "const express = require('express');\nconst app = express();\napp.get('/users', (req, res) => {\n  res.send('user list');\n});\napp.listen(3000);",
        "answers": [
          "Il plante — app.get a besoin de trois arguments",
          "Il répond avec le texte 'user list'",
          "Il répond avec un tableau JSON d'utilisateurs",
          "Il affiche 'user list' dans le terminal"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al 3la listen: bla had l satr, l app katb9a ghir code ma khdamch. Fker chnu khaso y-tra bach server y-bda y-sta9bel requests.",
        "text": "Quel est le rôle de app.listen(3000) ?",
        "answers": [
          "Il crée une route pour le port 3000",
          "Il démarre le serveur pour accepter les requêtes sur le port 3000",
          "Il limite l'application à 3000 requêtes",
          "Il se connecte à une base de données sur le port 3000"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al 3la route params: :id f path kat-tsama dynamic segment. Fker chnu type kat-rja3 Express l values dyal params, number wla string?",
        "text": "Un client demande GET /users/42. Que renvoie res.json(req.params) ?",
        "code": "app.get('/users/:id', (req, res) => {\n  res.json(req.params);\n});",
        "answers": [
          "{ \"id\": 42 }",
          "{ \"id\": \"42\" }",
          "{ \"params\": 42 }",
          "{}"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al 3la query strings: li kayji mn ba3d ? f URL 3ndo smiya khasa f Express. Fker l far9 bin params (f path) w li kayji mn ba3d ?.",
        "text": "Un client demande GET /search?q=phone&page=2. Quelle expression lit la valeur 'phone' ?",
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
        "id": 4,
        "level": 1,
        "explain_dr": "So2al 3la res.json: had l method kat-stringify l object w kat-zid header mo3ayan. Fker chnu kay-dir res.json zyada 3la res.send.",
        "text": "Quel en-tête Content-Type cette réponse transporte-t-elle ?",
        "code": "app.get('/data', (req, res) => {\n  res.json({ ok: true });\n});",
        "answers": [
          "text/html",
          "application/json",
          "text/plain",
          "application/xml"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "So2al 3la res.status: chaining kat-khlik t-7dded status code 9bel ma t-sift response. Fker chnu status code mnasb l creation dyal resource jdida.",
        "text": "Que reçoit le client ?",
        "code": "app.post('/users', (req, res) => {\n  res.status(201).json({ id: 7 });\n});",
        "answers": [
          "Statut 200 avec { \"id\": 7 }",
          "Statut 201 avec { \"id\": 7 }",
          "Statut 201 avec un corps vide",
          "Statut 500 avec une erreur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al 3la body parsing: Express bo7do ma kay-parse-ich body dyal request. Fker chnu middleware khaso y-tzad bach req.body y-3mer b JSON.",
        "text": "Une requête POST /users envoie le JSON { \"name\": \"Sara\" }, mais req.body est undefined. Que manque-t-il ?",
        "code": "const app = express();\napp.post('/users', (req, res) => {\n  console.log(req.body); // undefined\n  res.send('ok');\n});",
        "answers": [
          "app.use(express.json()) avant la route",
          "app.use(express.static('public'))",
          "Un paramètre de route :name",
          "Rien — Express analyse les corps JSON par défaut"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "So2al 3la HTTP methods: Express kay-far9 bin routes 7asab method + path bjoj. Fker wach nafs l path y9der y-kon 3ndo handlers mokhtalfin.",
        "text": "Que se passe-t-il avec ces deux définitions ?",
        "code": "app.get('/items', listItems);\napp.post('/items', createItem);",
        "answers": [
          "Les deux gèrent GET /items",
          "GET /items exécute listItems et POST /items exécute createItem",
          "Les deux gèrent toutes les méthodes sur /items",
          "La seconde définition écrase la première"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "So2al 3la res.send m3a string: Express kay-detecti type dyal data li siftiti. Fker chnu content-type kay-3ti l string 3adiya.",
        "text": "Quel Content-Type res.send('Hello') définit-il ?",
        "answers": [
          "application/json",
          "text/html",
          "text/plain",
          "Il n'envoie aucun Content-Type"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "So2al 3la req object: howa lwl f signature dyal handler. Fker chnu kay-mathel: li ja mn client wla li ghadi l client?",
        "text": "Dans (req, res) => { ... }, qu'est-ce que req ?",
        "answers": [
          "L'objet de configuration du serveur",
          "Un objet décrivant la requête HTTP entrante : URL, en-têtes, params, body",
          "La connexion à la base de données",
          "Le modèle HTML de la réponse"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "So2al 3la tartib dyal middleware: app.use kay-tssjel middleware li kay-khdem 9bel routes. Fker chnu kay-tra melli middleware kay-3ayet l next().",
        "text": "Dans quel ordre la sortie s'affiche-t-elle quand GET /ping est demandé ?",
        "code": "app.use((req, res, next) => {\n  console.log('A');\n  next();\n});\napp.get('/ping', (req, res) => {\n  console.log('B');\n  res.send('pong');\n});",
        "answers": [
          "B puis A",
          "A puis B",
          "Seulement A",
          "Seulement B"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "So2al 3la next(): middleware khaso y-7dded wach y-kmel l chain wla y-7bessha. Fker chnu kay-tra l request ila 7ta wa7ed ma jawb 3lih.",
        "text": "Que se passe-t-il si un middleware n'appelle jamais next() et n'envoie jamais de réponse ?",
        "code": "app.use((req, res, next) => {\n  console.log('stuck here');\n});\napp.get('/x', (req, res) => res.send('never'));",
        "answers": [
          "Express l'ignore automatiquement",
          "La requête reste bloquée jusqu'au timeout",
          "Le gestionnaire de route s'exécute quand même",
          "Express lève une erreur immédiatement"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "So2al 3la Router mounting: app.use('/api', router) kat-zid prefix l ga3 routes dyal router. Fker kifach kay-tjma3o prefix m3a path dyal router.",
        "text": "Quel chemin complet déclenche le gestionnaire du routeur ?",
        "code": "const router = express.Router();\nrouter.get('/users', (req, res) => res.send('hi'));\napp.use('/api', router);",
        "answers": [
          "/users",
          "/api/users",
          "/api/router/users",
          "/api"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "So2al 3la static files: had l middleware built-in kat-khali server y-sift files nichan. Fker chnu ghadi y-tra melli client y-tlob /style.css.",
        "text": "Que fait faire cette ligne au serveur ?",
        "code": "app.use(express.static('public'));",
        "answers": [
          "Analyser les corps de requête JSON",
          "Servir automatiquement les fichiers (HTML, CSS, images) du dossier public",
          "Bloquer tout contenu statique",
          "Compresser chaque réponse"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "So2al 3la app.use m3a path: hadi kat-tssjel middleware l path mo3ayan. Fker wach kay-khdem ghir 3la nafs l path b dabt, wla 3la li ta7to ta howa.",
        "text": "Pour quelles requêtes ce middleware s'exécute-t-il ?",
        "code": "app.use('/admin', (req, res, next) => {\n  console.log('admin area');\n  next();\n});",
        "answers": [
          "Pour chaque requête de l'application",
          "Seulement GET /admin",
          "Pour les requêtes vers /admin et tout ce qu'il contient, comme /admin/users",
          "Seulement POST /admin"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al 3la 404 handling: melli 7ta route ma tataba9, khask handler li kay-chedd ga3 li b9a. Fker fin khaso y-kon w chnu signature dyalo.",
        "text": "Une requête GET /missing ne correspond à aucune route. Quel gestionnaire renvoie correctement une 404 ?",
        "answers": [
          "app.get('/404', (req, res) => res.send('not found'));",
          "app.use((req, res) => res.status(404).send('not found'));",
          "app.use((err, req, res, next) => res.status(404).send('not found'));",
          "app.listen(404);"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al 3la multiple handlers: route wa7da t9der y-kon 3ndha bzaf dyal handlers. Fker chnu khaso y-dir l handler lwl bach tani y-khdem.",
        "text": "Qu'est-ce qui est journalisé quand GET /a est demandé ?",
        "code": "app.get('/a', (req, res, next) => {\n  console.log('first');\n  next();\n}, (req, res) => {\n  console.log('second');\n  res.send('done');\n});",
        "answers": [
          "first",
          "second",
          "first puis second",
          "rien"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al 3la tartib tssjil: Express kay-khdem b tartib li tssjelti bih. Fker chnu kay-tra melli route kat-jawb 9bel ma y-wsal l middleware.",
        "text": "Le logger ne s'affiche jamais quand GET /hello est demandé. Pourquoi ?",
        "code": "app.get('/hello', (req, res) => res.send('hi'));\napp.use((req, res, next) => {\n  console.log('logger');\n  next();\n});",
        "answers": [
          "Le middleware ne s'exécute que pour les requêtes POST",
          "Un middleware enregistré après une route ne s'exécute jamais pour les requêtes auxquelles la route a déjà répondu",
          "console.log est désactivé dans Express",
          "app.use doit venir avant require('express')"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "So2al 3la req.method: had l property kat-golik ina HTTP method t-sta3mel. Fker chnu format: lowercase wla uppercase?",
        "text": "Que contient req.method pour une requête POST /users ?",
        "answers": [
          "'post'",
          "'POST'",
          "'/users'",
          "Le corps de la requête"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al 3la get vs use: wa7da route w wa7da middleware. Fker l far9 f HTTP methods li kay-cheddo w f subpaths.",
        "text": "Quelle est la différence entre app.get('/users') et app.use('/users') ?",
        "answers": [
          "Il n'y a aucune différence",
          "app.get ne gère que les requêtes GET vers /users ; app.use s'exécute pour toutes les méthodes HTTP sur /users et ses sous-chemins",
          "app.use est plus rapide",
          "app.get gère toutes les méthodes HTTP"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al 3la multiple params: t9der t-dir bzaf dyal :segments f path wa7ed. Fker kifach Express kay-semi kol wa7ed w chnu type dyal values.",
        "text": "GET /users/12/posts/99 est demandé. Que contient req.params ?",
        "code": "app.get('/users/:userId/posts/:postId', (req, res) => {\n  res.json(req.params);\n});",
        "answers": [
          "{ \"userId\": \"12\", \"postId\": \"99\" }",
          "{ \"id\": \"12\" }",
          "{ \"userId\": 12, \"postId\": 99 }",
          "{ \"params\": [\"12\", \"99\"] }"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "So2al 3la query arrays: melli nafs l key t-3awed f query string, Express kay-jma3 values. Fker f ina structure kay-rja3hom.",
        "text": "GET /tags?tag=js&tag=node est demandé. Que vaut req.query.tag ?",
        "answers": [
          "'js'",
          "'node'",
          "['js', 'node']",
          "'js,node'"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al 3la middleware khasa b route: t9der t-zid middleware ghir l route wa7da. Fker fin kay-t7at f arguments dyal app.get.",
        "text": "Quelle ligne enregistre un middleware qui s'exécute uniquement avant le gestionnaire du tableau de bord ?",
        "answers": [
          "app.use(auth); app.get('/dashboard', showDashboard);",
          "app.get('/dashboard', auth, showDashboard);",
          "app.get(auth, '/dashboard', showDashboard);",
          "auth(app.get('/dashboard', showDashboard));"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al 3la res.redirect: hadi kat-gol l browser y-mchi l URL akhra. Fker chnu status code dyal redirect li kay-tsta3mel by default.",
        "text": "Que fait cette route ?",
        "code": "app.get('/old', (req, res) => {\n  res.redirect('/new');\n});",
        "answers": [
          "Répond 200 avec le texte '/new'",
          "Répond 302 et fait demander /new au navigateur",
          "Rend la page /new sur le serveur",
          "Répond 404"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "So2al 3la duplicate routes: melli joj routes kay-tatab9o, Express kay-khdem b tartib. Fker chnu kay-tra melli lwl kay-sift response.",
        "text": "Quel est le résultat de définir deux fois la même route ?",
        "code": "app.get('/x', (req, res) => res.send('one'));\napp.get('/x', (req, res) => res.send('two'));",
        "answers": [
          "Les deux s'exécutent et le client reçoit 'onetwo'",
          "Le premier gestionnaire gagne ; le client reçoit 'one'",
          "Le second écrase le premier ; le client reçoit 'two'",
          "Express lève une erreur de route dupliquée"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "So2al 3la app.route: hadi tari9a bach t-jma3 routes li 3ndhom nafs l path. Fker kifach kat-khlik t-chaini .get() w .post().",
        "text": "Que permet de faire app.route('/users') ?",
        "answers": [
          "Créer une sous-application",
          "Enchaîner des gestionnaires pour plusieurs méthodes HTTP sur le même chemin",
          "Rediriger /users vers un autre domaine",
          "Servir des fichiers statiques depuis /users"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al 3la form data: forms dyal HTML ma kay-siftoch JSON. Fker chnu middleware built-in li kay-parse l format dyal forms.",
        "text": "Un formulaire envoie avec Content-Type application/x-www-form-urlencoded. Quel middleware l'analyse dans req.body ?",
        "answers": [
          "express.json()",
          "express.urlencoded({ extended: true })",
          "express.static('public')",
          "express.text()"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al 3la guard middleware: melli condition t-7a9a9, khaso y-khali request y-doz l li mn wrah. Fker chnu l call li kat-kmel l chain.",
        "text": "Le middleware auth rejette les utilisateurs non authentifiés. Que doit-il faire pour laisser passer les utilisateurs valides ?",
        "code": "function auth(req, res, next) {\n  if (!req.headers.token) {\n    return res.status(401).send('nope');\n  }\n  // ???\n}",
        "answers": [
          "return res.send('ok');",
          "next();",
          "next('/login');",
          "Rien — il continue automatiquement"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al 3la next(err): melli kat-3ti error l next, Express kay-bdel l massar. Fker fin kay-mchi: l handlers 3adiyin wla l error handlers.",
        "text": "Que fait next(err) dans un gestionnaire de route ?",
        "answers": [
          "Il redémarre le serveur",
          "Il saute les middlewares normaux et passe au premier middleware de gestion d'erreur",
          "Il envoie une réponse 200",
          "Il réessaie le même gestionnaire"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al 3la blassa dyal 404: had l handler khaso y-chedd ghir li ma cheddo 7ta route. Fker 3lach tartib mohim hna.",
        "text": "Où le gestionnaire 404 attrape-tout doit-il être enregistré ?",
        "answers": [
          "Avant toutes les routes",
          "Après toutes les routes et tous les routeurs",
          "Dans express.json()",
          "Il est intégré — aucune inscription nécessaire"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al 3la signature dyal error handler: Express kay-3ref type dyal middleware mn 3adad arguments. Fker ch7al mn argument khaso y-kon w chnu howa lwl.",
        "text": "Quelle signature de fonction fait qu'Express traite un middleware comme gestionnaire d'ERREUR ?",
        "answers": [
          "(req, res, next)",
          "(err, req, res, next)",
          "(req, res)",
          "(error)"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "So2al 3la tartib dyal error handlers: Express kay-9leb 3la error handler mn b3d l blassa li w9e3 fiha error. Fker 3lach li 9bel ma kay-tchafch.",
        "text": "Ce gestionnaire d'erreur ne s'exécute jamais quand la route appelle next(new Error('boom')). Pourquoi ?",
        "code": "app.use((err, req, res, next) => {\n  res.status(500).send('oops');\n});\napp.get('/x', (req, res, next) => {\n  next(new Error('boom'));\n});",
        "answers": [
          "next() a été appelé sans arguments",
          "Le gestionnaire d'erreur est enregistré avant la route qui déclenche l'erreur",
          "Les gestionnaires d'erreur n'ont besoin que de trois paramètres",
          "Les erreurs doivent être levées, pas passées à next"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "So2al 3la async errors f Express 4: promises li kay-fchlo ma kay-tchddoch bo7dhom. Fker chnu khask t-dir bach error y-wsal l error handler.",
        "text": "Dans Express 4, que se passe-t-il quand la promesse d'un gestionnaire async est rejetée sans être attrapée ?",
        "code": "app.get('/data', async (req, res) => {\n  const rows = await db.query('SELECT 1'); // rejetée !\n  res.json(rows);\n});",
        "answers": [
          "Express l'attrape et envoie une 500",
          "La requête reste bloquée et Node émet un rejet non géré — il faut try/catch et appeler next(err)",
          "Express réessaie la requête",
          "Le serveur plante immédiatement"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al 3la next('route'): hadi version khasa dyal next. Fker l far9 binha w bin next() 3adiya: chnu kay-tkheta.",
        "text": "Que fait next('route') dans le premier gestionnaire ?",
        "code": "app.get('/x', h1, h2, h3);\n// dans h1 : next('route')",
        "answers": [
          "Il saute h2 et h3 et passe à la prochaine route correspondante",
          "Il saute toute l'application et envoie une 404",
          "Il redémarre h1",
          "Il quitte le processus"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al 3la router middleware: middleware li tssjel f router kay-khdem ghir ldakhel dyalo. Fker chnu scope dyalo melli router mounted ta7t /r.",
        "text": "Quelles requêtes déclenchent le logger du routeur ?",
        "code": "const r = express.Router();\nr.use((req, res, next) => { console.log('log'); next(); });\nr.get('/a', h1);\nr.get('/b', h2);\napp.use('/r', r);",
        "answers": [
          "Seulement /r/a",
          "Les requêtes vers /r/a et /r/b, mais pas les autres routes de l'application",
          "Chaque requête de toute l'application",
          "Aucune — le middleware de routeur ne s'exécute jamais"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al 3la double next(): kol next() kat-dfe3 request l 9ddam. Fker chnu kay-tra melli t-3ayetlo joj merrat w handler li mn wrah kay-jawb.",
        "text": "Quel est le problème d'appeler next() deux fois dans le même gestionnaire ?",
        "code": "app.get('/x', (req, res, next) => {\n  next();\n  next();\n  res.send('done');\n});",
        "answers": [
          "Rien — le second appel est ignoré",
          "Le gestionnaire suivant s'exécute à nouveau et on risque 'Cannot set headers after they are sent'",
          "Express lève une erreur au démarrage",
          "La réponse est envoyée deux fois avec succès"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "So2al 3la router.param: hadi kat-khlik t-pre-processi param mo3ayan. Fker imta kat-khdem w chnu kay-wsal f argument rabe3.",
        "text": "Comment se comporte router.param('id', ...) ?",
        "code": "router.param('id', (req, res, next, id) => {\n  req.user = findUser(id);\n  next();\n});",
        "answers": [
          "router.param ne fonctionne que sur l'objet app",
          "Il s'exécute automatiquement pour toute route du routeur contenant :id, et id contient la valeur du paramètre",
          "Il s'exécute pour chaque requête",
          "Le quatrième argument est toujours undefined"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "So2al debugging: tartib tssjil ghalet kay-khali catch-all y-sbe9 routes. Fker kifach Express kay-khtar ina handler y-khdem lwl.",
        "text": "GET /api/users renvoie 'nf' avec le statut 404 au lieu de []. Pourquoi ?",
        "code": "app.use((req, res) => res.status(404).send('nf'));\napp.get('/api/users', (req, res) => res.json([]));",
        "answers": [
          "res.json est cassé",
          "Le middleware 404 attrape-tout est enregistré avant la route API, donc il répond en premier",
          "Les requêtes GET ne peuvent pas renvoyer du JSON",
          "Les gestionnaires 404 doivent utiliser res.json"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "So2al 3la headersSent: f error handler, ma 3rftich wach response tsiftat wla la. Fker chnu property kat-golik had l me3loma.",
        "text": "Qu'indique res.headersSent ?",
        "answers": [
          "Si la requête avait des en-têtes",
          "Si la réponse a déjà été envoyée — utile pour éviter un double envoi dans les gestionnaires d'erreur",
          "Le nombre d'en-têtes",
          "Si helmet est activé"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al 3la tartib kamel: kol no3 dyal middleware 3ndo blassa. Fker: body parsing 9bel routes, 404 mn b3d ga3 routes, w error handlers f lkher.",
        "text": "Quel ordre est correct pour une application Express typique ?",
        "answers": [
          "Gestionnaires d'erreur → routes → analyse du corps → 404",
          "Analyse du corps → routes → gestionnaire 404 → gestionnaires d'erreur",
          "Gestionnaire 404 → analyse du corps → routes → gestionnaires d'erreur",
          "Routes → gestionnaires d'erreur → analyse du corps → 404"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al 3la trust proxy: melli app khdama wra proxy, IP l 7a9i9iya kat-ji f header. Fker chnu setting kat-gol l Express y-tiq f had l header.",
        "text": "Derrière un reverse proxy, req.ip affiche l'IP du proxy. Que faire ?",
        "answers": [
          "app.set('trust proxy', true)",
          "app.disable('ip')",
          "req.ip = req.headers.host",
          "express.static('public')"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al 3la helmet: hadi library dyal security. Fker chnu kat-zid l kol response bach t-7mi mn attacks m3rofine.",
        "text": "Que fait principalement le middleware helmet ?",
        "answers": [
          "Hacher les mots de passe",
          "Définir des en-têtes HTTP sécurisés pour durcir chaque réponse",
          "Chiffrer la base de données",
          "Bloquer toutes les requêtes cross-origin"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "So2al 3la CORS: browsers kay-men3o requests l origin akhra by default. Fker chnu headers khaso y-sift server bach y-sm7 l had requests.",
        "text": "Pourquoi ajouter le middleware cors à une API Express ?",
        "answers": [
          "Pour rendre les réponses JSON plus petites",
          "Pour permettre aux navigateurs d'appeler l'API depuis une autre origine en envoyant les bons en-têtes Access-Control",
          "Pour mettre en cache les réponses",
          "Pour compresser les images"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al 3la PORT: hosting platforms kat-3ti port f environment variable. Fker kifach t-9rah m3a fallback l development.",
        "text": "Quelle est la façon la plus sûre de choisir le port en production ?",
        "code": "const PORT = ???;\napp.listen(PORT);",
        "answers": [
          "const PORT = 3000;",
          "const PORT = process.env.PORT || 3000;",
          "const PORT = req.query.port;",
          "const PORT = Math.round(Math.random() * 9000);"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "So2al 3la next('router'): b7al next('route') walakin l router kamel. Fker fin kay-mchi request melli kat-khroj mn router.",
        "text": "Que fait next('router') dans un middleware de routeur ?",
        "answers": [
          "Il saute à la prochaine route de l'application",
          "Il quitte le routeur courant et continue avec les middlewares enregistrés après le routeur",
          "Il redémarre le routeur",
          "Il envoie une erreur 500"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al 3la baseUrl: melli router mounted, Express kay-7fed l prefix. Fker chnu kay-b9a m7fod f req.baseUrl.",
        "text": "Dans un routeur monté sur /api, que contient req.baseUrl pour GET /api/users ?",
        "answers": [
          "'/users'",
          "'/api'",
          "'/api/users'",
          "''"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "So2al 3la security: error details mofida l developer walakin khatar. Fker chnu kayn f stack trace li ma khasch y-khroj l barra.",
        "text": "Pourquoi les gestionnaires d'erreur en production ne doivent-ils PAS envoyer err.stack au client ?",
        "answers": [
          "Les stacks sont trop courtes pour être utiles",
          "Les stack traces peuvent révéler chemins de fichiers et détails internes aux attaquants — journalisez-les côté serveur",
          "Les clients ne peuvent pas analyser du texte",
          "Express l'interdit"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al 3la rate limiting: hadi 7imaya ded requests li kay-t3awdo bzaf. Fker chnu attack kat-men3 melli kat-7dded requests per IP.",
        "text": "À quoi sert express-rate-limit ?",
        "answers": [
          "Limiter le nombre de routes",
          "Limiter les requêtes répétées d'une même IP pour contrer le brute-force et les DoS",
          "Limiter la taille du corps JSON",
          "Limiter les connexions simultanées à la base de données"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al 3la graceful shutdown: melli kat-7bess server, bghiti requests li khdamin y-kmlo. Fker chnu method kat-sedd b chouia b chouia.",
        "text": "Pour un arrêt gracieux, qu'appeler sur l'objet retourné par app.listen() ?",
        "answers": [
          "server.close() — cesser d'accepter de nouvelles connexions, puis quitter quand les existantes se terminent",
          "process.exit() immédiatement",
          "app.destroy()",
          "server.listen(0)"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "So2al 3la validation: data li jaya mn client ma khasch t-ti9 fiha. Fker fin khask t-verifiha 9bel ma t-sta3melha.",
        "text": "Vous devez valider req.body avant d'enregistrer un utilisateur. Où est le MEILLEUR endroit ?",
        "answers": [
          "Dans le gestionnaire 404",
          "Dans un middleware de validation (ou le gestionnaire de route) avant de toucher la base de données",
          "Dans express.static",
          "Dans le callback de app.listen"
        ],
        "correct": 1,
        "selection": null
      }
    ]
  }
];
