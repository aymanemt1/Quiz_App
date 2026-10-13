export const postmanQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "So2al 3la Postman: chnu l gharad l asasi dyalo? Fker chnu katdir bih m3a API — wach katb3at requests w katchof responses, wla 7aja khra?",
        "text": "What is Postman mainly used for?",
        "answers": [
          "Building and testing APIs by sending HTTP requests and inspecting responses",
          "Hosting websites on the internet",
          "Writing SQL queries",
          "Designing database schemas"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al 3la HTTP methods: GET l 9raya, POST l khal9. Fker ina method katjib data bla ma tbedel 7aja f server.",
        "text": "Which HTTP method should you use to fetch a list of users without changing anything on the server?",
        "code": "GET https://api.shop.test/users",
        "answers": [
          "POST",
          "GET",
          "DELETE",
          "PUT"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al 3la POST: had l method l khal9 dyal resources jdad. Fker chnu kaydir request li kayb3at data jdida l server.",
        "text": "Which method creates a new user on the server?",
        "code": "POST https://api.shop.test/users\n{\n  \"name\": \"Sara\"\n}",
        "answers": [
          "GET",
          "PUT",
          "POST",
          "HEAD"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al 3la tabs dyal Postman: headers b7al Content-Type fin kaytzado? Fker smit l tab li khasa b headers.",
        "text": "Where do you add custom headers like Content-Type in a Postman request?",
        "code": "Content-Type: application/json",
        "answers": [
          "Body tab",
          "Headers tab",
          "Authorization tab",
          "Tests tab"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "So2al 3la status codes: 200 hiya l code l mchhora bzf. Fker chnu kat3ni melli kolchi daz mzyan.",
        "text": "A response comes back with status 200. What does it mean?",
        "answers": [
          "The request succeeded",
          "The resource was not found",
          "The server crashed",
          "You are not authenticated"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "So2al 3la 404: had l code katshfo bzf melli link ma kaynach. Fker chnu kat3ni.",
        "text": "What does status code 404 mean?",
        "answers": [
          "Server error",
          "The requested resource was not found",
          "The request timed out",
          "Bad request syntax"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al 3la collections: Postman kaykhalik tjem3 requests. Fker chnu hiya collection w 3lach katnfa3.",
        "text": "What is a Postman collection?",
        "answers": [
          "A saved group of requests you can organize, share, and run together",
          "A database of users",
          "A type of HTTP header",
          "A server log file"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "So2al 3la query params: kaybanu f URL b 3alama mo3ayana. Fker chnu had l 3alama li katji 9belhom.",
        "text": "Where do query parameters appear in a request URL?",
        "code": "GET https://api.shop.test/users?page=2&limit=10",
        "answers": [
          "After the ? character",
          "Inside the request body",
          "In the Authorization header",
          "After the # character"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "So2al 3la body: melli katb3at JSON m3a POST, fin katkteb had l data? Fker l tab li khasa b mo7tawa l request.",
        "text": "Which tab do you use to send JSON data with a POST request?",
        "answers": [
          "Params",
          "Authorization",
          "Body → raw → JSON",
          "Headers"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "So2al 3la Authorization tab: had l tab khasa b l identity. Fker chnu katconfiguri fiha — tokens, keys, credentials.",
        "text": "What does the Authorization tab configure?",
        "answers": [
          "The request timeout",
          "How the request proves your identity (tokens, keys, credentials)",
          "The response format",
          "The proxy settings"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "So2al 3la variables: Postman 3ndo syntax khasa bach tsta3mel variable. Fker b chnu kayt7essro smit l variable.",
        "text": "You stored the base URL in a variable named baseUrl. How do you use it in the request URL?",
        "code": "{{baseUrl}}/users",
        "answers": [
          "$baseUrl/users",
          "{{baseUrl}}/users",
          "{baseUrl}/users",
          "[baseUrl]/users"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "So2al 3la environments: 3ndek dev w staging w prod b URLs mokhtalfin. Fker kifach environment kat7el had l mochkil.",
        "text": "What is an environment in Postman?",
        "answers": [
          "A set of variables for one context (dev, staging, prod) that you can switch between",
          "A type of HTTP request",
          "A test assertion library",
          "A server deployment"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "So2al 3la scopes: nafs smit variable kayn f scopes mokhtalfin. Fker l 9a3ida — dima l scope l d9i9 (narrowest) howa li kayghlb.",
        "text": "The variable apiKey exists in global, collection, and environment scopes. Which value wins?",
        "code": "// scope precedence (narrowest wins):\n// local > data > environment > collection > global",
        "answers": [
          "Global",
          "Collection",
          "Environment",
          "Local"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "So2al 3la Bearer token: had no3 dyal auth kayb3at token f blasa mo3ayana. Fker fin kaymchi token — header wla URL?",
        "text": "With Bearer Token auth, how is the token sent to the server?",
        "code": "Authorization: Bearer eyJhbGciOi...",
        "answers": [
          "In the URL query string",
          "In the Authorization header as \"Bearer <token>\"",
          "In the request body",
          "As a cookie only"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "So2al 3la pm API: bach t9ra variable mn script, kayn object w method mo3ayanin. Fker chnu katsta3mel l 9raya.",
        "text": "In a test script, how do you read an environment variable named token?",
        "answers": [
          "pm.environment.get(\"token\")",
          "getEnv(\"token\")",
          "pm.vars.token",
          "environment.token"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al 3la pm API: bach tsavei variable mn script, kayn method mo3ayan. Fker l far9 bin get w set.",
        "text": "How do you save the returned user id into an environment variable from a test script?",
        "code": "const json = pm.response.json();\npm.environment.set(\"userId\", json.id);",
        "answers": [
          "pm.environment.set(\"userId\", json.id)",
          "pm.environment = { userId: json.id }",
          "setEnv(\"userId\", json.id)",
          "pm.save(\"userId\", json.id)"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al 3la Basic Auth: username w password kaytb3to b encoding mo3ayan. Fker chnu had l encoding.",
        "text": "How does Basic Auth send the username and password?",
        "code": "Authorization: Basic dXNlcjpwYXNz",
        "answers": [
          "Base64-encoded as username:password in the Authorization header",
          "As an MD5 hash in the URL",
          "As plain text in the body",
          "As a SHA-256 hash in a cookie"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al 3la path variables: :id f URL ma khashach tb9a hardcoded. Fker kifach Postman kayt3amel m3aha.",
        "text": "Your URL is https://api.shop.test/users/:id. How does Postman handle :id?",
        "answers": [
          "It becomes an editable path variable in the Params tab",
          "It is ignored and removed",
          "It always causes a 404",
          "It must stay hardcoded"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "So2al 3la pre-request script: smito katgol kolchi. Fker imta kaykhdem — 9bel ma ttsifat request wla mor ma twsal response?",
        "text": "When does a pre-request script run?",
        "answers": [
          "After the response arrives",
          "Before the request is sent",
          "Only when tests fail",
          "When the collection is saved"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al 3la 201: had l code khass b khal9 resources. Fker chnu kat3ni melli POST ynja7 w resource tkhla9.",
        "text": "What does status code 201 mean?",
        "answers": [
          "OK",
          "Created — a new resource was successfully created",
          "No content",
          "Moved permanently"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al 3la pm.test: khask tkemel l assertion. Fker chnu l code dyal status li katbghi tverifi.",
        "text": "Complete the test so it checks that the status code is 200:",
        "code": "pm.test(\"Status code is 200\", function () {\n  pm.response.to.have.status(____);\n});",
        "answers": [
          "200",
          "\"200\"",
          "true",
          "OK"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "So2al 3la parsing: response body khaso yt7awel l object bach t9der t9ra fields. Fker smit l method li katdir hadchi.",
        "text": "Complete the line so the JSON response body becomes a usable object:",
        "code": "const json = pm.response.____();",
        "answers": [
          "json",
          "body",
          "parse",
          "text"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al 3la Chai assertions: pm.expect katsta3mel matchers mo3ayanin. Fker l matcher li kat9aren bih l values (deep equality).",
        "text": "Complete the assertion so it checks that the name field equals \"Sara\":",
        "code": "pm.expect(jsonData.name).to.____(\"Sara\");",
        "answers": [
          "eql",
          "equals",
          "is",
          "has"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al 3la chaining: login kayrja3 token w request li morah khaso had token. Fker kifach katdewz l token mn request l request.",
        "text": "The login request returns a token, and the next request needs it in its header. What is the standard way to chain them?",
        "code": "// Tests tab of the login request:\npm.environment.set(\"token\", pm.response.json().token);\n// Next request header: Authorization: Bearer {{token}}",
        "answers": [
          "Save the token to a variable in the login request's Tests tab, then use {{token}} in the next request",
          "Copy-paste the token manually before every run",
          "Hardcode the token in the collection",
          "Put the token in the URL"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "So2al 3la mock servers: backend mazal ma wajed walakin frontend khaso ykhdem. Fker chnu l 7al li kay3tih Postman.",
        "text": "What do Postman mock servers let you do?",
        "answers": [
          "Simulate API responses before the real backend exists",
          "Deploy your API to production",
          "Monitor server uptime",
          "Generate API documentation from source code"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "So2al 3la Collection Runner: data file fih rows, w kol iteration kat9ra row. Fker l API li kat3tik l9ima dyal l row l 7aliya.",
        "text": "You run a collection with a CSV data file that has an \"email\" column. How do you read the current row's email inside a script?",
        "code": "pm.iterationData.get(\"email\")",
        "answers": [
          "pm.iterationData.get(\"email\")",
          "pm.data.email",
          "pm.environment.get(\"email\")",
          "data[\"email\"]"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al 3la pm.sendRequest: bghiti tjib token 9bel ma ttsifat request. Fker l method li katb3at request mn wast script.",
        "text": "Complete the pre-request script so it fetches a fresh token before the main request runs:",
        "code": "pm.________(\"https://auth.test/token\", function (err, res) {\n  pm.environment.set(\"token\", res.json().token);\n});",
        "answers": [
          "sendRequest",
          "fetch",
          "http.get",
          "request"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al 3la pm API: pm.variables w pm.environment ma-homch b7al b7al. Fker l far9 f scope li kay9raw meno.",
        "text": "What is the difference between pm.variables.get(\"x\") and pm.environment.get(\"x\")?",
        "answers": [
          "pm.variables reads the narrowest in-scope variable; pm.environment reads the environment scope only",
          "They are identical",
          "pm.variables is for globals only",
          "pm.environment works only in pre-request scripts"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al 3la collection variables: kaynin variables khasin b collection. Fker 3lach mofidin — wach kaytbedlo m3a environment?",
        "text": "Why are collection variables useful?",
        "answers": [
          "They are shared by every request in the collection regardless of the active environment",
          "They expire after one request",
          "They cannot be changed by scripts",
          "They are always synced publicly"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al 3la headers: bach server yfhem bli katb3at JSON, khaso header mo3ayan. Fker smito.",
        "text": "You send a raw JSON body with a POST request. Which header must accompany it?",
        "code": "POST /users\nContent-Type: application/json\n\n{ \"name\": \"Sara\" }",
        "answers": [
          "Content-Type: application/json",
          "Accept: text/html",
          "Content-Length: 0",
          "Authorization: None"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al 3la responseTime: bghiti tverifi bli response sri3a. Fker l Chai matcher li kat9aren bih \"9el mn\".",
        "text": "Complete the test so it asserts the response arrived in under 500 ms:",
        "code": "pm.test(\"Fast response\", function () {\n  pm.expect(pm.response.responseTime).to.be.____(500);\n});",
        "answers": [
          "below",
          "under",
          "less",
          "faster"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "So2al 3la OAuth 2.0: Postman kaydir l flow kamel. Fker l button li katcliqui 3lih f Authorization tab.",
        "text": "Your API uses OAuth 2.0. How do you obtain an access token inside Postman?",
        "answers": [
          "Click \"Get New Access Token\" in the Authorization tab and let Postman run the flow",
          "Type the token manually into the URL",
          "Run newman",
          "Enable the mock server"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "So2al 3la Newman: smiya katban bzf f CI. Fker chnu howa — wach tool dyal command line l collections?",
        "text": "What is Newman?",
        "code": "newman run collection.json -e env.json",
        "answers": [
          "Postman's command-line runner for executing collections in terminals and CI pipelines",
          "A Postman color theme",
          "A database plugin",
          "A type of mock server"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al 3la monitors: bghiti tests ykhedmo bo7dhom b schedule. Fker chnu kaydir monitor.",
        "text": "What do Postman Monitors do?",
        "answers": [
          "Run a collection on a schedule from the Postman cloud and report results",
          "Watch your screen for changes",
          "Block failed requests automatically",
          "Generate mock data"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al 3la dynamic variables: Postman 3ndo variables jahzin b $ f lwel. Fker ina wa7da katgeneri GUID.",
        "text": "Which dynamic variable generates a fresh random GUID on every request?",
        "code": "{ \"requestId\": \"{{$guid}}\" }",
        "answers": [
          "{{$guid}}",
          "{{guid}}",
          "$random.guid",
          "{{randomGuid}}"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al 3la headers assertion: bghiti tverifi header mo3ayan. Fker chnu l argument li khaso ytzad.",
        "text": "Complete the test so it checks the response includes a Content-Type header:",
        "code": "pm.test(\"Has JSON content type\", function () {\n  pm.response.to.have.header(________);\n});",
        "answers": [
          "\"Content-Type\"",
          "\"content\"",
          "\"header\"",
          "\"type\""
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "So2al 3la nested JSON: l9ima li bghiti kayna ldakhel bzf. Fker chnu ghadi t7et f blassa l khawya.",
        "text": "Complete the assertion so it checks the nested user name:",
        "code": "// response: { \"data\": { \"user\": { \"name\": \"Sara\" } } }\npm.expect(pm.response.json().data.user.name).to.eql(____);",
        "answers": [
          "\"Sara\"",
          "\"user\"",
          "\"data\"",
          "\"name\""
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "So2al 3la inherit auth: requests bzf khashom nafs auth. Fker chnu kat3ni \"inherit from parent\".",
        "text": "A request's auth type is set to \"Inherit auth from parent\". What does that mean?",
        "answers": [
          "The request uses the authorization configured on its collection or folder",
          "It copies auth from another workspace",
          "It disables authentication",
          "It asks the server for credentials at runtime"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "So2al 3la workflow: bghiti t7ekem ina request tji mor lokhra. Fker l function li katgolo l runner fin ymchi.",
        "text": "In the Collection Runner, how do you jump to a specific request named \"Get user\" after the current one?",
        "code": "postman.setNextRequest(\"Get user\");",
        "answers": [
          "postman.setNextRequest(\"Get user\")",
          "pm.next(\"Get user\")",
          "pm.goto(\"Get user\")",
          "runner.next(\"Get user\")"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al 3la setNextRequest: bghiti l run y7bes mor l request l 7aliya. Fker chnu l9ima li katgolo \"ma kayn walo moraha\".",
        "text": "How do you stop the Collection Runner after the current request finishes?",
        "code": "postman.setNextRequest(null); // stop the run",
        "answers": [
          "postman.setNextRequest(null)",
          "pm.stop()",
          "return false",
          "pm.exit()"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al 3la CI: bghiti tests ykhedmo f pipeline w yfailiw l build. Fker l command s7i7a dyal newman m3a environment w reporters.",
        "text": "Which Newman command runs the API tests in CI with an environment file and machine-readable reports?",
        "code": "newman run api-tests.json -e prod-env.json --reporters cli,junit",
        "answers": [
          "newman run api-tests.json -e prod-env.json --reporters cli,junit",
          "postman deploy api-tests.json",
          "npm run postman",
          "newman serve api-tests.json"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al 3la collection-level scripts: script f niveau dyal collection. Fker ch7al mn mra kaykhdem.",
        "text": "A pre-request script is defined at the collection level. When does it run?",
        "answers": [
          "Before every request in the collection",
          "Only once for the whole collection",
          "After every response",
          "Only for requests in the first folder"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "So2al 3la CryptoJS: bghiti tsigni request b HMAC. Fker wach Postman sandbox fih library dyal crypto jahza.",
        "text": "You must sign requests with HMAC-SHA256 in a pre-request script. What is true?",
        "code": "const sig = CryptoJS.HmacSHA256(payload, secret).toString();\npm.environment.set(\"signature\", sig);",
        "answers": [
          "CryptoJS is available in the Postman sandbox for hashing and signing",
          "Postman cannot do any cryptography",
          "You must install the crypto package with npm first",
          "HMAC signing is only possible in Newman"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al 3la mock matching: mock 3ndo examples bzf. Fker kifach kaykhtar ina response yrja3.",
        "text": "How does a Postman mock server choose which saved example response to return?",
        "answers": [
          "By matching the incoming request's method and URL path to the saved examples",
          "Randomly",
          "It always returns the first example",
          "By picking the fastest example"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "So2al 3la initial vs current: joj 9iyam l nafs variable. Fker ina wa7da katpartaga m3a team w fin khask t7et secrets.",
        "text": "What is the difference between an environment variable's initial value and its current value?",
        "answers": [
          "Initial values sync and are shared with the team; current values stay local to your session — put secrets in current",
          "They are the same thing",
          "Current values sync to the team",
          "Initial values are read-only"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al 3la error handling: body ma-shich JSON s7i7. Fker chnu kaytra melli kat3ayet l pm.response.json().",
        "text": "What happens if the response body is NOT valid JSON?",
        "code": "pm.test(\"Valid JSON\", function () {\n  const json = pm.response.json();\n  pm.expect(json).to.be.an(\"object\");\n});",
        "answers": [
          "pm.response.json() throws, so the test fails",
          "It silently returns null",
          "The test passes",
          "Postman retries the request"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "So2al 3la reporters: bghiti rapport HTML zwin mn newman. Fker smit l reporter l mchhor w kifach katinstallih.",
        "text": "Which reporter flag produces a rich HTML report from a Newman run?",
        "code": "newman run c.json -r htmlextra --reporter-htmlextra-export report.html",
        "answers": [
          "-r htmlextra (with the newman-reporter-htmlextra package installed)",
          "-r html (built in)",
          "--export-html",
          "-r pretty"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al 3la automation: bghiti tdeclenchi monitors w tjib results b code. Fker chnu kayt7 l Postman l had l gharad.",
        "text": "How can you trigger monitors and fetch run results programmatically?",
        "answers": [
          "The Postman API and webhooks can trigger monitors and fetch run results",
          "Monitors can only be started by clicking in the app",
          "Newman cannot output results",
          "Run results cannot be shared"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al 3la conditional flow: bghiti tskipi requests 7asab condition. Fker l function li katbdel l request li jaya.",
        "text": "How do you conditionally skip requests during a collection run?",
        "code": "if (!pm.environment.get(\"userId\")) {\n  postman.setNextRequest(\"Create user\");\n}",
        "answers": [
          "Use postman.setNextRequest() to jump over requests based on a condition",
          "Delete the request from the collection",
          "Comment out the test script",
          "Disable the whole collection"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "So2al 3la secrets: API keys ma khashomch ytsrbo. Fker fin l blassa l amna l secrets f Postman.",
        "text": "Where should API secrets live in Postman?",
        "answers": [
          "In the CURRENT value of an environment variable (never committed or synced), referenced as {{secret}}",
          "Hardcoded in the request URL",
          "In the initial value so the whole team sees it",
          "As a string literal inside the test script"
        ],
        "correct": 0,
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
        "explain_dr": "So2al 3la Postman: chnu l gharad l asasi dyalo? Fker chnu katdir bih m3a API — wach katb3at requests w katchof responses, wla 7aja khra?",
        "text": "À quoi sert principalement Postman ?",
        "answers": [
          "À construire et tester des API en envoyant des requêtes HTTP et en inspectant les réponses",
          "À héberger des sites web sur internet",
          "À écrire des requêtes SQL",
          "À concevoir des schémas de base de données"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al 3la HTTP methods: GET l 9raya, POST l khal9. Fker ina method katjib data bla ma tbedel 7aja f server.",
        "text": "Quelle méthode HTTP utiliser pour récupérer la liste des utilisateurs sans rien modifier sur le serveur ?",
        "code": "GET https://api.shop.test/users",
        "answers": [
          "POST",
          "GET",
          "DELETE",
          "PUT"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al 3la POST: had l method l khal9 dyal resources jdad. Fker chnu kaydir request li kayb3at data jdida l server.",
        "text": "Quelle méthode crée un nouvel utilisateur sur le serveur ?",
        "code": "POST https://api.shop.test/users\n{\n  \"name\": \"Sara\"\n}",
        "answers": [
          "GET",
          "PUT",
          "POST",
          "HEAD"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al 3la tabs dyal Postman: headers b7al Content-Type fin kaytzado? Fker smit l tab li khasa b headers.",
        "text": "Où ajoute-t-on des en-têtes personnalisés comme Content-Type dans une requête Postman ?",
        "code": "Content-Type: application/json",
        "answers": [
          "Onglet Body",
          "Onglet Headers",
          "Onglet Authorization",
          "Onglet Tests"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "So2al 3la status codes: 200 hiya l code l mchhora bzf. Fker chnu kat3ni melli kolchi daz mzyan.",
        "text": "Une réponse revient avec le statut 200. Qu'est-ce que cela signifie ?",
        "answers": [
          "La requête a réussi",
          "La ressource est introuvable",
          "Le serveur a planté",
          "Vous n'êtes pas authentifié"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "So2al 3la 404: had l code katshfo bzf melli link ma kaynach. Fker chnu kat3ni.",
        "text": "Que signifie le code de statut 404 ?",
        "answers": [
          "Erreur serveur",
          "La ressource demandée est introuvable",
          "La requête a expiré",
          "Syntaxe de requête invalide"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al 3la collections: Postman kaykhalik tjem3 requests. Fker chnu hiya collection w 3lach katnfa3.",
        "text": "Qu'est-ce qu'une collection Postman ?",
        "answers": [
          "Un groupe enregistré de requêtes que l'on peut organiser, partager et exécuter ensemble",
          "Une base de données d'utilisateurs",
          "Un type d'en-tête HTTP",
          "Un fichier journal du serveur"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "So2al 3la query params: kaybanu f URL b 3alama mo3ayana. Fker chnu had l 3alama li katji 9belhom.",
        "text": "Où apparaissent les paramètres de requête (query params) dans une URL ?",
        "code": "GET https://api.shop.test/users?page=2&limit=10",
        "answers": [
          "Après le caractère ?",
          "Dans le corps de la requête",
          "Dans l'en-tête Authorization",
          "Après le caractère #"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "So2al 3la body: melli katb3at JSON m3a POST, fin katkteb had l data? Fker l tab li khasa b mo7tawa l request.",
        "text": "Quel onglet utilise-t-on pour envoyer des données JSON avec une requête POST ?",
        "answers": [
          "Params",
          "Authorization",
          "Body → raw → JSON",
          "Headers"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "So2al 3la Authorization tab: had l tab khasa b l identity. Fker chnu katconfiguri fiha — tokens, keys, credentials.",
        "text": "Que configure l'onglet Authorization ?",
        "answers": [
          "Le délai d'expiration de la requête",
          "La manière dont la requête prouve votre identité (jetons, clés, identifiants)",
          "Le format de la réponse",
          "Les paramètres du proxy"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "So2al 3la variables: Postman 3ndo syntax khasa bach tsta3mel variable. Fker b chnu kayt7essro smit l variable.",
        "text": "Vous avez stocké l'URL de base dans une variable nommée baseUrl. Comment l'utiliser dans l'URL de la requête ?",
        "code": "{{baseUrl}}/users",
        "answers": [
          "$baseUrl/users",
          "{{baseUrl}}/users",
          "{baseUrl}/users",
          "[baseUrl]/users"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "So2al 3la environments: 3ndek dev w staging w prod b URLs mokhtalfin. Fker kifach environment kat7el had l mochkil.",
        "text": "Qu'est-ce qu'un environnement dans Postman ?",
        "answers": [
          "Un ensemble de variables pour un contexte (dev, staging, prod) entre lesquels on peut basculer",
          "Un type de requête HTTP",
          "Une bibliothèque d'assertions de test",
          "Un déploiement de serveur"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "So2al 3la scopes: nafs smit variable kayn f scopes mokhtalfin. Fker l 9a3ida — dima l scope l d9i9 (narrowest) howa li kayghlb.",
        "text": "La variable apiKey existe dans les portées global, collection et environment. Quelle valeur l'emporte ?",
        "code": "// précédence des portées (la plus restreinte gagne) :\n// local > data > environment > collection > global",
        "answers": [
          "Global",
          "Collection",
          "Environment",
          "Local"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "So2al 3la Bearer token: had no3 dyal auth kayb3at token f blasa mo3ayana. Fker fin kaymchi token — header wla URL?",
        "text": "Avec l'authentification Bearer Token, comment le jeton est-il envoyé au serveur ?",
        "code": "Authorization: Bearer eyJhbGciOi...",
        "answers": [
          "Dans la chaîne de requête de l'URL",
          "Dans l'en-tête Authorization sous la forme « Bearer <token> »",
          "Dans le corps de la requête",
          "Uniquement comme cookie"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "So2al 3la pm API: bach t9ra variable mn script, kayn object w method mo3ayanin. Fker chnu katsta3mel l 9raya.",
        "text": "Dans un script de test, comment lire une variable d'environnement nommée token ?",
        "answers": [
          "pm.environment.get(\"token\")",
          "getEnv(\"token\")",
          "pm.vars.token",
          "environment.token"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al 3la pm API: bach tsavei variable mn script, kayn method mo3ayan. Fker l far9 bin get w set.",
        "text": "Comment enregistrer l'identifiant utilisateur retourné dans une variable d'environnement depuis un script de test ?",
        "code": "const json = pm.response.json();\npm.environment.set(\"userId\", json.id);",
        "answers": [
          "pm.environment.set(\"userId\", json.id)",
          "pm.environment = { userId: json.id }",
          "setEnv(\"userId\", json.id)",
          "pm.save(\"userId\", json.id)"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al 3la Basic Auth: username w password kaytb3to b encoding mo3ayan. Fker chnu had l encoding.",
        "text": "Comment l'authentification Basic envoie-t-elle le nom d'utilisateur et le mot de passe ?",
        "code": "Authorization: Basic dXNlcjpwYXNz",
        "answers": [
          "Encodés en Base64 sous la forme username:password dans l'en-tête Authorization",
          "Sous forme de hash MD5 dans l'URL",
          "En texte clair dans le corps",
          "Sous forme de hash SHA-256 dans un cookie"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al 3la path variables: :id f URL ma khashach tb9a hardcoded. Fker kifach Postman kayt3amel m3aha.",
        "text": "Votre URL est https://api.shop.test/users/:id. Comment Postman gère-t-il :id ?",
        "answers": [
          "Il devient une variable de chemin modifiable dans l'onglet Params",
          "Il est ignoré et supprimé",
          "Il provoque toujours une 404",
          "Il doit rester codé en dur"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "So2al 3la pre-request script: smito katgol kolchi. Fker imta kaykhdem — 9bel ma ttsifat request wla mor ma twsal response?",
        "text": "Quand un script de pré-requête s'exécute-t-il ?",
        "answers": [
          "Après l'arrivée de la réponse",
          "Avant l'envoi de la requête",
          "Uniquement quand les tests échouent",
          "Quand la collection est enregistrée"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al 3la 201: had l code khass b khal9 resources. Fker chnu kat3ni melli POST ynja7 w resource tkhla9.",
        "text": "Que signifie le code de statut 201 ?",
        "answers": [
          "OK",
          "Created — une nouvelle ressource a été créée avec succès",
          "No content",
          "Moved permanently"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al 3la pm.test: khask tkemel l assertion. Fker chnu l code dyal status li katbghi tverifi.",
        "text": "Complétez le test pour vérifier que le code de statut est 200 :",
        "code": "pm.test(\"Status code is 200\", function () {\n  pm.response.to.have.status(____);\n});",
        "answers": [
          "200",
          "\"200\"",
          "true",
          "OK"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "So2al 3la parsing: response body khaso yt7awel l object bach t9der t9ra fields. Fker smit l method li katdir hadchi.",
        "text": "Complétez la ligne pour transformer le corps JSON de la réponse en objet utilisable :",
        "code": "const json = pm.response.____();",
        "answers": [
          "json",
          "body",
          "parse",
          "text"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al 3la Chai assertions: pm.expect katsta3mel matchers mo3ayanin. Fker l matcher li kat9aren bih l values (deep equality).",
        "text": "Complétez l'assertion pour vérifier que le champ name vaut « Sara » :",
        "code": "pm.expect(jsonData.name).to.____(\"Sara\");",
        "answers": [
          "eql",
          "equals",
          "is",
          "has"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al 3la chaining: login kayrja3 token w request li morah khaso had token. Fker kifach katdewz l token mn request l request.",
        "text": "La requête de connexion retourne un jeton, et la requête suivante en a besoin dans son en-tête. Quelle est la méthode standard pour les enchaîner ?",
        "code": "// Onglet Tests de la requête de connexion :\npm.environment.set(\"token\", pm.response.json().token);\n// En-tête de la requête suivante : Authorization: Bearer {{token}}",
        "answers": [
          "Enregistrer le jeton dans une variable depuis l'onglet Tests de la requête de connexion, puis utiliser {{token}} dans la requête suivante",
          "Copier-coller le jeton manuellement avant chaque exécution",
          "Coder le jeton en dur dans la collection",
          "Mettre le jeton dans l'URL"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "So2al 3la mock servers: backend mazal ma wajed walakin frontend khaso ykhdem. Fker chnu l 7al li kay3tih Postman.",
        "text": "Que permettent de faire les serveurs mock de Postman ?",
        "answers": [
          "Simuler des réponses d'API avant que le vrai backend existe",
          "Déployer votre API en production",
          "Surveiller la disponibilité du serveur",
          "Générer la documentation API depuis le code source"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "So2al 3la Collection Runner: data file fih rows, w kol iteration kat9ra row. Fker l API li kat3tik l9ima dyal l row l 7aliya.",
        "text": "Vous exécutez une collection avec un fichier CSV contenant une colonne « email ». Comment lire l'email de la ligne courante dans un script ?",
        "code": "pm.iterationData.get(\"email\")",
        "answers": [
          "pm.iterationData.get(\"email\")",
          "pm.data.email",
          "pm.environment.get(\"email\")",
          "data[\"email\"]"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al 3la pm.sendRequest: bghiti tjib token 9bel ma ttsifat request. Fker l method li katb3at request mn wast script.",
        "text": "Complétez le script de pré-requête pour récupérer un jeton frais avant l'exécution de la requête principale :",
        "code": "pm.________(\"https://auth.test/token\", function (err, res) {\n  pm.environment.set(\"token\", res.json().token);\n});",
        "answers": [
          "sendRequest",
          "fetch",
          "http.get",
          "request"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al 3la pm API: pm.variables w pm.environment ma-homch b7al b7al. Fker l far9 f scope li kay9raw meno.",
        "text": "Quelle est la différence entre pm.variables.get(\"x\") et pm.environment.get(\"x\") ?",
        "answers": [
          "pm.variables lit la variable de la portée la plus restreinte ; pm.environment lit uniquement la portée d'environnement",
          "Ils sont identiques",
          "pm.variables est réservé aux variables globales",
          "pm.environment ne fonctionne que dans les scripts de pré-requête"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al 3la collection variables: kaynin variables khasin b collection. Fker 3lach mofidin — wach kaytbedlo m3a environment?",
        "text": "Pourquoi les variables de collection sont-elles utiles ?",
        "answers": [
          "Elles sont partagées par toutes les requêtes de la collection quel que soit l'environnement actif",
          "Elles expirent après une requête",
          "Elles ne peuvent pas être modifiées par des scripts",
          "Elles sont toujours synchronisées publiquement"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al 3la headers: bach server yfhem bli katb3at JSON, khaso header mo3ayan. Fker smito.",
        "text": "Vous envoyez un corps JSON brut avec une requête POST. Quel en-tête doit l'accompagner ?",
        "code": "POST /users\nContent-Type: application/json\n\n{ \"name\": \"Sara\" }",
        "answers": [
          "Content-Type: application/json",
          "Accept: text/html",
          "Content-Length: 0",
          "Authorization: None"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al 3la responseTime: bghiti tverifi bli response sri3a. Fker l Chai matcher li kat9aren bih \"9el mn\".",
        "text": "Complétez le test pour vérifier que la réponse est arrivée en moins de 500 ms :",
        "code": "pm.test(\"Fast response\", function () {\n  pm.expect(pm.response.responseTime).to.be.____(500);\n});",
        "answers": [
          "below",
          "under",
          "less",
          "faster"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "So2al 3la OAuth 2.0: Postman kaydir l flow kamel. Fker l button li katcliqui 3lih f Authorization tab.",
        "text": "Votre API utilise OAuth 2.0. Comment obtenir un jeton d'accès dans Postman ?",
        "answers": [
          "Cliquer sur « Get New Access Token » dans l'onglet Authorization et laisser Postman exécuter le flux",
          "Taper le jeton manuellement dans l'URL",
          "Exécuter newman",
          "Activer le serveur mock"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "So2al 3la Newman: smiya katban bzf f CI. Fker chnu howa — wach tool dyal command line l collections?",
        "text": "Qu'est-ce que Newman ?",
        "code": "newman run collection.json -e env.json",
        "answers": [
          "L'exécuteur en ligne de commande de Postman pour lancer des collections dans les terminaux et les pipelines CI",
          "Un thème de couleurs Postman",
          "Un plugin de base de données",
          "Un type de serveur mock"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al 3la monitors: bghiti tests ykhedmo bo7dhom b schedule. Fker chnu kaydir monitor.",
        "text": "Que font les Monitors Postman ?",
        "answers": [
          "Ils exécutent une collection selon un planning depuis le cloud Postman et rapportent les résultats",
          "Ils surveillent votre écran",
          "Ils bloquent automatiquement les requêtes échouées",
          "Ils génèrent des données mock"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al 3la dynamic variables: Postman 3ndo variables jahzin b $ f lwel. Fker ina wa7da katgeneri GUID.",
        "text": "Quelle variable dynamique génère un nouveau GUID aléatoire à chaque requête ?",
        "code": "{ \"requestId\": \"{{$guid}}\" }",
        "answers": [
          "{{$guid}}",
          "{{guid}}",
          "$random.guid",
          "{{randomGuid}}"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al 3la headers assertion: bghiti tverifi header mo3ayan. Fker chnu l argument li khaso ytzad.",
        "text": "Complétez le test pour vérifier que la réponse contient un en-tête Content-Type :",
        "code": "pm.test(\"Has JSON content type\", function () {\n  pm.response.to.have.header(________);\n});",
        "answers": [
          "\"Content-Type\"",
          "\"content\"",
          "\"header\"",
          "\"type\""
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "So2al 3la nested JSON: l9ima li bghiti kayna ldakhel bzf. Fker chnu ghadi t7et f blassa l khawya.",
        "text": "Complétez l'assertion pour vérifier le nom d'utilisateur imbriqué :",
        "code": "// réponse : { \"data\": { \"user\": { \"name\": \"Sara\" } } }\npm.expect(pm.response.json().data.user.name).to.eql(____);",
        "answers": [
          "\"Sara\"",
          "\"user\"",
          "\"data\"",
          "\"name\""
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "So2al 3la inherit auth: requests bzf khashom nafs auth. Fker chnu kat3ni \"inherit from parent\".",
        "text": "Le type d'authentification d'une requête est réglé sur « Inherit auth from parent ». Qu'est-ce que cela signifie ?",
        "answers": [
          "La requête utilise l'autorisation configurée sur sa collection ou son dossier",
          "Elle copie l'auth depuis un autre espace de travail",
          "Elle désactive l'authentification",
          "Elle demande les identifiants au serveur à l'exécution"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "So2al 3la workflow: bghiti t7ekem ina request tji mor lokhra. Fker l function li katgolo l runner fin ymchi.",
        "text": "Dans le Collection Runner, comment passer à une requête précise nommée « Get user » après la requête courante ?",
        "code": "postman.setNextRequest(\"Get user\");",
        "answers": [
          "postman.setNextRequest(\"Get user\")",
          "pm.next(\"Get user\")",
          "pm.goto(\"Get user\")",
          "runner.next(\"Get user\")"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al 3la setNextRequest: bghiti l run y7bes mor l request l 7aliya. Fker chnu l9ima li katgolo \"ma kayn walo moraha\".",
        "text": "Comment arrêter le Collection Runner après la fin de la requête courante ?",
        "code": "postman.setNextRequest(null); // stop the run",
        "answers": [
          "postman.setNextRequest(null)",
          "pm.stop()",
          "return false",
          "pm.exit()"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al 3la CI: bghiti tests ykhedmo f pipeline w yfailiw l build. Fker l command s7i7a dyal newman m3a environment w reporters.",
        "text": "Quelle commande Newman exécute les tests API en CI avec un fichier d'environnement et des rapports exploitables ?",
        "code": "newman run api-tests.json -e prod-env.json --reporters cli,junit",
        "answers": [
          "newman run api-tests.json -e prod-env.json --reporters cli,junit",
          "postman deploy api-tests.json",
          "npm run postman",
          "newman serve api-tests.json"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al 3la collection-level scripts: script f niveau dyal collection. Fker ch7al mn mra kaykhdem.",
        "text": "Un script de pré-requête est défini au niveau de la collection. Quand s'exécute-t-il ?",
        "answers": [
          "Avant chaque requête de la collection",
          "Une seule fois pour toute la collection",
          "Après chaque réponse",
          "Uniquement pour les requêtes du premier dossier"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "So2al 3la CryptoJS: bghiti tsigni request b HMAC. Fker wach Postman sandbox fih library dyal crypto jahza.",
        "text": "Vous devez signer les requêtes avec HMAC-SHA256 dans un script de pré-requête. Qu'est-ce qui est vrai ?",
        "code": "const sig = CryptoJS.HmacSHA256(payload, secret).toString();\npm.environment.set(\"signature\", sig);",
        "answers": [
          "CryptoJS est disponible dans le bac à sable Postman pour le hachage et la signature",
          "Postman ne peut faire aucune cryptographie",
          "Il faut d'abord installer le paquet crypto avec npm",
          "La signature HMAC n'est possible que dans Newman"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al 3la mock matching: mock 3ndo examples bzf. Fker kifach kaykhtar ina response yrja3.",
        "text": "Comment un serveur mock Postman choisit-il l'exemple de réponse à retourner ?",
        "answers": [
          "En faisant correspondre la méthode et le chemin d'URL de la requête entrante avec les exemples enregistrés",
          "Aléatoirement",
          "Il retourne toujours le premier exemple",
          "En choisissant l'exemple le plus rapide"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "So2al 3la initial vs current: joj 9iyam l nafs variable. Fker ina wa7da katpartaga m3a team w fin khask t7et secrets.",
        "text": "Quelle est la différence entre la valeur initiale (initial) et la valeur courante (current) d'une variable d'environnement ?",
        "answers": [
          "Les valeurs initiales sont synchronisées et partagées avec l'équipe ; les valeurs courantes restent locales à votre session — mettez les secrets dans current",
          "Ce sont la même chose",
          "Les valeurs courantes sont synchronisées avec l'équipe",
          "Les valeurs initiales sont en lecture seule"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al 3la error handling: body ma-shich JSON s7i7. Fker chnu kaytra melli kat3ayet l pm.response.json().",
        "text": "Que se passe-t-il si le corps de la réponse n'est PAS du JSON valide ?",
        "code": "pm.test(\"Valid JSON\", function () {\n  const json = pm.response.json();\n  pm.expect(json).to.be.an(\"object\");\n});",
        "answers": [
          "pm.response.json() lève une exception, donc le test échoue",
          "Il retourne silencieusement null",
          "Le test réussit",
          "Postman réessaie la requête"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "So2al 3la reporters: bghiti rapport HTML zwin mn newman. Fker smit l reporter l mchhor w kifach katinstallih.",
        "text": "Quel drapeau de reporter produit un rapport HTML riche depuis une exécution Newman ?",
        "code": "newman run c.json -r htmlextra --reporter-htmlextra-export report.html",
        "answers": [
          "-r htmlextra (avec le paquet newman-reporter-htmlextra installé)",
          "-r html (intégré)",
          "--export-html",
          "-r pretty"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al 3la automation: bghiti tdeclenchi monitors w tjib results b code. Fker chnu kayt7 l Postman l had l gharad.",
        "text": "Comment déclencher des monitors et récupérer les résultats d'exécution par programme ?",
        "answers": [
          "L'API Postman et les webhooks peuvent déclencher des monitors et récupérer les résultats",
          "Les monitors ne peuvent être démarrés qu'en cliquant dans l'application",
          "Newman ne peut pas produire de résultats",
          "Les résultats d'exécution ne peuvent pas être partagés"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al 3la conditional flow: bghiti tskipi requests 7asab condition. Fker l function li katbdel l request li jaya.",
        "text": "Comment ignorer des requêtes sous condition pendant une exécution de collection ?",
        "code": "if (!pm.environment.get(\"userId\")) {\n  postman.setNextRequest(\"Create user\");\n}",
        "answers": [
          "Utiliser postman.setNextRequest() pour sauter des requêtes selon une condition",
          "Supprimer la requête de la collection",
          "Commenter le script de test",
          "Désactiver toute la collection"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "So2al 3la secrets: API keys ma khashomch ytsrbo. Fker fin l blassa l amna l secrets f Postman.",
        "text": "Où les secrets d'API doivent-ils se trouver dans Postman ?",
        "answers": [
          "Dans la valeur COURANTE (current) d'une variable d'environnement (jamais commitée ni synchronisée), référencée comme {{secret}}",
          "Codés en dur dans l'URL de la requête",
          "Dans la valeur initiale pour que toute l'équipe les voie",
          "Comme littéral de chaîne dans le script de test"
        ],
        "correct": 0,
        "selection": null
      }
    ]
  }
];
