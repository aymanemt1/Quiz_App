export const convexQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "Convex howa l backend kamel dyal app — tfekkar chno kay3tiik: database, serverless functions, w sync m3a l client.",
        "text": "What is Convex primarily used for in a web app?",
        "answers": [
          "A bundler that compiles JavaScript to native code",
          "A testing library for frontend components",
"A backend platform with a database, serverless functions, and realtime sync",
          "A CSS framework for styling React components"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "Schema f Convex kat3eraf f file wa7ed khass — tfekkar fin kayn w achmn functions katsta3mel.",
        "text": "Where do you define the database schema in a Convex project?",
        "answers": [
          "Inside package.json under a \"convex\" key",
          "In a SQL migration folder under db/migrations",
          "convex/schema.ts using defineSchema and defineTable",
          "In the client code with createSchema()"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "Wa7ed mn anwa3 l functions read-only ghir l qira2a — tfekkar ina wa7ed may9derch ydir insert wla patch.",
        "text": "Which Convex function type is read-only and CANNOT write to the database?",
        "answers": [
          "action",
          "httpAction",
"mutation",
          "query"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "Operation katbedel data f database — tfekkar achmn type dyal function mkhass l writes.",
        "text": "A developer needs to add a new todo to the database from the client. Which function type should the backend expose?",
        "answers": [
          "A query, because it reads the current todos first",
          "An action, because inserts are async",
          "A cron job, because it runs on a schedule",
"A mutation, because it changes stored data"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "useQuery mn convex/react — tfekkar chno kaytra melli data f backend tbedel, wach component kat3awd t-renderi wla la.",
        "text": "What does this React code do?",
        "code": "const todos = useQuery(api.todos.list);",
        "answers": [
          "Calls the list query once and caches the result forever",
          "Deletes all todos when the component unmounts",
          "Sends a mutation to create a todo list",
          "Subscribes to the list query and re-renders automatically when data changes"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "useMutation katrja3 7aja katsta3melha bach t3ayet l function — tfekkar chno hiya: data wla function.",
        "text": "What does useMutation(api.todos.add) return in a React component?",
        "code": "const addTodo = useMutation(api.todos.add);",
        "answers": [
          "The list of todos",
          "A boolean showing if the user is authenticated",
          "A function you call to run the mutation",
          "A promise that resolves to the schema"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "insert katrja3 chi 7aja wa7da — tfekkar wach hiya l document kamel wla ghir l id dyalo.",
        "text": "What does this handler return?",
        "code": "await ctx.db.insert(\"tasks\", { text: \"Buy milk\" });",
        "answers": [
          "The number of documents in the table",
          "true on success",
"The full inserted document",
          "The inserted document's ID"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "get b id li makaynch — tfekkar wach kat-throw error wla katrja3 value khasa.",
        "text": "What does ctx.db.get(todoId) return if no document has that ID?",
        "answers": [
          "It throws a \"not found\" error",
          "An empty object {}",
          "null",
          "undefined"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "L bidaya dyal qira2a mn table — tfekkar achmn method katbda biha l query.",
        "text": "How do you start reading all documents from a table called \"notes\" inside a query?",
        "answers": [
          "ctx.db.find(\"notes\")",
          "ctx.db.select(\"notes\")",
"ctx.db.get(\"notes\")",
          "ctx.db.query(\"notes\")"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "v.string() w v.number() jayin mn blasa wa7da — tfekkar mnin kat-importi v.",
        "text": "Which import provides argument validators like v.string() and v.number()?",
        "answers": [
          "from \"convex/react\"",
          "from \"convex/schema\"",
"from \"convex/values\"",
          "from \"convex/server\""
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "Argument validation f Convex — tfekkar imta kat-tra l validation, 9bel ma l handler ykhdem wla mn ba3d.",
        "text": "A mutation is defined with args: { name: v.string() }. The client calls it with addUser({ name: 42 }). What happens?",
        "code": "args: { name: v.string() }\n// client: addUser({ name: 42 })",
        "answers": [
          "The mutation runs and stores 42 as a string",
          "The client silently converts 42 to \"42\"",
          "The mutation retries with a default value",
"Convex throws a validation error before the handler runs"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "collect() katjma3 results — tfekkar f chno format katrj3hom: array wla 7aja okhra.",
        "text": "What does this return?",
        "code": "await ctx.db.query(\"tasks\").collect()",
        "answers": [
          "Only the first matching document",
          "The number of matching documents",
          "All matching documents as an array",
          "A stream of document IDs"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "Wa7ed document wla walo — tfekkar achmn method katrja3 document wa7ed wla null.",
        "text": "You need exactly one document — the oldest task — or nothing. Which is correct?",
        "code": "// need: one document or nothing",
        "answers": [
          "await ctx.db.query(\"tasks\").take(1)",
          "await ctx.db.query(\"tasks\").collect()[0]",
          "await ctx.db.query(\"tasks\").order(\"asc\").first()",
          "await ctx.db.query(\"tasks\").single()"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "Filter b condition — tfekkar syntax dyal Convex: q.eq w q.field kifach kaytsta3mlo.",
        "text": "Which query returns only tasks where done is true?",
        "code": "// tasks where done === true",
        "answers": [
          "ctx.db.query(\"tasks\").where(\"done\", true)",
          "ctx.db.query(\"tasks\").filter(\"done\", true)",
          "ctx.db.query(\"tasks\").filter((q) => q.eq(q.field(\"done\"), true))",
          "ctx.db.query(\"tasks\").match({ done: true })"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "Update l ba3d l fields — tfekkar achmn method dyal ctx.db kat-patchi document b id.",
        "text": "Which line correctly marks the task with ID taskId as done?",
        "answers": [
          "await ctx.db.set(taskId, { done: true })",
          "await ctx.db.insert(taskId, { done: true })",
"await ctx.db.update(taskId, { done: true })",
          "await ctx.db.patch(taskId, { done: true })"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "Delete document b id — tfekkar smiya s7i7a dyal method f ctx.db.",
        "text": "Which line deletes the document with ID noteId?",
        "answers": [
          "await ctx.db.destroy(noteId)",
          "await ctx.db.query(\"notes\").delete(noteId)",
"await ctx.db.delete(noteId)",
          "await ctx.db.remove(noteId)"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "Index f schema — tfekkar syntax dyal defineTable bach tzid index 3la field.",
        "text": "Which schema definition creates a tasks table with an index on userId?",
        "code": "defineSchema({\n  tasks: defineTable({\n    text: v.string(),\n    userId: v.id(\"users\"),\n  })____\n})",
        "answers": [
          ".key(\"by_user\", [\"userId\"])",
          ".unique(\"userId\")",
".createIndex(\"by_user\", \"userId\")",
          ".index(\"by_user\", [\"userId\"])"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "Index vs filter f performance — tfekkar 3lach index asra3 mn scan kamel.",
        "text": "Why use .withIndex(\"by_user\", (q) => q.eq(\"userId\", id)) instead of .filter()?",
        "answers": [
          "filter() is deprecated in Convex",
          "withIndex works on the client, filter() does not",
          "There is no difference; they are identical",
"Indexes are faster because the database scans only matching entries"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "Identity dyal user l msajel — tfekkar mnin function katjibha: ctx.auth wla ctx.db.",
        "text": "How does a Convex function know who the current user is?",
        "answers": [
          "await ctx.db.currentUser()",
          "It is passed automatically as the first argument",
"ctx.user.id",
          "await ctx.auth.getUserIdentity()"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "File storage f Convex — tfekkar achmn method kat-storei blob w chno katrja3.",
        "text": "A mutation receives a Blob of an uploaded image. How is it saved to Convex file storage?",
        "code": "// handler receives: blob (a Blob)",
        "answers": [
          "await ctx.files.save(blob)",
          "It cannot be done; Convex has no file storage",
"await ctx.db.insert(\"_storage\", blob)",
          "await ctx.storage.store(blob) — returns a storage ID"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "Document ID validator — tfekkar achmn validator kay-checki id dyal table mo3ayana.",
        "text": "A query needs the user's document ID as an argument. Which args definition is correct?",
        "answers": [
          "args: { userId: v.object(\"users\") }",
          "args: { userId: v.doc(\"users\") }",
"args: { userId: v.id(\"users\") }",
          "args: { userId: v.string() }"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "Argument ikhtiyari — tfekkar kifach kat-gol l Convex: had l field momkin maykonch.",
        "text": "An argument may be a string or missing entirely. Which validator fits?",
        "answers": [
          "v.union(v.string(), v.missing())",
          "v.anyString()",
"v.string().optional()",
          "v.optional(v.string())"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "Pagination f Convex — tfekkar achmn validator kat-importi mn convex/server l had l gharad.",
        "text": "Which validator and method pair implements cursor pagination in a query?",
        "code": "args: { paginationOpts: ____ }\n// handler:\nreturn await ctx.db.query(\"posts\").order(\"desc\").paginate(args.paginationOpts);",
        "answers": [
          "v.pagination() from \"convex/values\"",
          "cursorValidator from \"convex/server\"",
          "paginationOptsValidator from \"convex/server\"",
          "v.object({ cursor: v.string() })"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "Result dyal paginate — tfekkar chno kayn ldakhel ghir l page: cursor w flag.",
        "text": "What does .paginate() return?",
        "answers": [
          "{ page, continueCursor, isDone }",
          "Just an array of documents",
          "The total count of documents",
          "A database cursor object"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "Scheduling mn mutation — tfekkar achmn service katsta3mel: ctx.scheduler, w b achmn unit l wa9t.",
        "text": "From inside a mutation, how do you run another function 5 minutes later?",
        "answers": [
          "await ctx.db.schedule(5 * 60 * 1000, \"remind\")",
          "await ctx.cron.runAfter(300, \"remind\")",
"setTimeout(() => runJob(), 5 * 60 * 1000)",
          "await ctx.scheduler.runAfter(5 * 60 * 1000, internal.jobs.remind, { userId })"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "Action w database — tfekkar l 9a3ida: action ma3ndhach ctx.db nichan, chno khasha dir.",
        "text": "An action needs to read the database. What must it do?",
        "answers": [
          "Actions can read but not write with ctx.db",
          "Import the database client from \"convex/db\"",
"Use ctx.runQuery to call a query — actions cannot touch ctx.db directly",
          "Use ctx.db.query directly like a mutation"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "Action vs mutation — tfekkar chno l far9 l kbir: external API calls w code li ma-deterministicch.",
        "text": "When should you use an action instead of a mutation?",
        "answers": [
          "When you need the fastest possible database write",
          "When calling a third-party API or running non-deterministic code",
          "When the function must run inside a database transaction",
          "Actions and mutations are interchangeable"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "internalMutation — tfekkar chkon li 9der y3ayet liha: client wla ghir backend.",
        "text": "What is the difference between mutation and internalMutation?",
        "answers": [
          "internalMutation can only be called from the scheduler, crons, or other backend functions — never directly from the client",
          "internalMutation is faster",
          "internalMutation skips argument validation",
          "There is no difference"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "URL dyal file mn storage ID — tfekkar achmn method kat-generi URL li t9der t7ettha f <img>.",
        "text": "A document stores an image as imageId (a storage ID). How does a query return a viewable URL?",
        "answers": [
          "doc.imageId.toURL()",
          "await ctx.storage.getUrl(doc.imageId)",
          "await ctx.storage.download(doc.imageId)",
          "The storage ID is already a public URL"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "Realtime f Convex — tfekkar chno kaydir useQuery melli data tbedel f backend.",
        "text": "Two users view the same todo list. User A adds a todo. What happens on User B's screen?",
        "answers": [
          "It updates automatically — useQuery re-runs when the underlying data changes",
          "User B must refresh the page manually",
          "User B sees it only after calling the query again",
          "The app must poll the server every second"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "Npm packages f actions — tfekkar chno khass tzid f l file bach action tkhdem f Node.js runtime.",
        "text": "An action needs to use an npm package like stripe. What must the action file declare?",
        "code": "// convex/payments.ts\n____\nexport const charge = action({ ... });",
        "answers": [
          "Nothing — actions always run in Node.js",
          "import \"node/runtime\" at the top",
"\"use node\"; at the top of the file",
          "\"use server\"; at the top of the file"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "Atomicity dyal mutations — tfekkar: ila mutation failat f nos, wach chi 7aja katb9a f database.",
        "text": "A mutation inserts an order, then throws an error before finishing. What is in the database?",
        "answers": [
          "The order remains, only later writes are lost",
          "Nothing — the mutation is atomic, all writes are rolled back",
          "Half the order fields are saved",
          "The database is locked until an admin intervenes"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "Cron jobs f Convex — tfekkar smiya dyal l file li fih cronJobs().",
        "text": "Which file and helper define a scheduled job that runs every hour?",
        "code": "// convex/____.ts\nimport { cronJobs } from \"convex/server\";\nconst crons = cronJobs();\ncrons.interval(\"cleanup\", { hours: 1 }, internal.jobs.cleanup);",
        "answers": [
          "crons.ts",
          "cron.ts",
          "scheduler.ts",
          "jobs.ts"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "Owner check — tfekkar achmn field dyal identity howa l identifier l stable dyal user.",
        "text": "Which pattern correctly restricts a mutation to the document's owner?",
        "code": "const identity = await ctx.auth.getUserIdentity();\nif (!identity) throw new Error(\"Unauthenticated\");\nconst doc = await ctx.db.get(args.id);\nif (doc.userId !== ____) throw new Error(\"Not your document\");",
        "answers": [
          "identity.id",
          "identity.subject",
          "identity.userId",
          "identity.email"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "Compound index — tfekkar: khass t-specefier ga3 l fields dyal index b tartibhom.",
        "text": "Schema: .index(\"by_user_done\", [\"userId\", \"done\"]). Which query uses it correctly?",
        "answers": [
          "ctx.db.query(\"tasks\").withIndex(\"by_user_done\", (q) => q.eq(\"userId\", id).eq(\"done\", false))",
          "ctx.db.query(\"tasks\").withIndex(\"by_user_done\", (q) => q.eq(\"userId\", id))",
          "ctx.db.query(\"tasks\").withIndex(\"by_user_done\", (q) => q.eq(\"done\", false))",
          "ctx.db.query(\"tasks\").filter((q) => q.eq(q.field(\"userId\"), id))"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "Webhook endpoint — tfekkar achmn type dyal function kat3eraf routes HTTP f Convex.",
        "text": "You need a public webhook endpoint (e.g. for Stripe) in Convex. What do you use?",
        "answers": [
          "A regular action — it is public by default",
          "An httpAction registered on an httpRouter in convex/http.ts",
          "A mutation with no auth check",
          "A query with method: \"POST\""
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "Delete file — tfekkar achmn method dyal ctx.storage kat-msa7 file.",
        "text": "How do you delete a file from Convex storage inside a mutation?",
        "answers": [
          "await ctx.db.delete(storageId)",
          "await ctx.storage.delete(storageId)",
          "await ctx.storage.remove(storageId)",
          "await ctx.files.delete(storageId)"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "Optimistic UI m3a Convex — tfekkar 3lach realtime kat-ghni 3lih f ghalib l 7alat.",
        "text": "A developer adds manual optimistic UI for a like button on Convex. Why is this usually unnecessary?",
        "answers": [
          "Mutations in Convex are synchronous on the client",
          "Convex pushes updates in realtime, so the query result refreshes almost instantly",
          "Optimistic UI is not supported by Convex",
          "The client caches mutations for 24 hours"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "Next page — tfekkar kifach client kay-gol l server: zid jib liya mnin w9efti.",
        "text": "A paginated query returned { page, continueCursor, isDone: false }. How does the client load the next page?",
        "answers": [
          "Call the query again passing continueCursor inside paginationOpts",
          "Call .paginate() a second time on the client",
          "Pass isDone: false back to the server",
          "Reload the whole query without options"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "Upload flow — tfekkar l khotowat: URL mn mutation, w mn ba3d POST l file l dik l URL.",
        "text": "What is the correct client upload flow for Convex file storage?",
        "answers": [
          "POST the file directly to ctx.storage from the browser",
          "Call a mutation returning ctx.storage.generateUploadUrl(), then POST the file to that URL",
          "Call ctx.storage.store(file) in the React component",
          "Upload via FTP to the Convex project"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "v.id(\"tasks\") — tfekkar wach kay-checki ghir format dyal id wla table li jay menha.",
        "text": "args: { taskId: v.id(\"tasks\") }. The client passes a valid ID of a users document. What happens?",
        "answers": [
          "Validation fails — the ID must belong to the tasks table",
          "It passes — any Convex ID is accepted",
          "The document is auto-converted to a task",
          "The query returns null instead of throwing"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "Full-text search — tfekkar smiya dyal method dyal search index f defineTable.",
        "text": "Which schema addition enables full-text search on a post's body field?",
        "answers": [
          ".index(\"search_body\", [\"body\"])",
          ".searchIndex(\"search_body\", { searchField: \"body\" })",
          ".fullText(\"body\")",
          ".search(\"body\")"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "Search query — tfekkar achmn method katsta3mel m3a search index w kifach kat3ti l term.",
        "text": "How do you run the search?",
        "answers": [
          "ctx.db.query(\"posts\").withSearchIndex(\"search_body\", (q) => q.search(\"body\", term))",
          "ctx.db.query(\"posts\").search(\"body\", term)",
          "ctx.db.query(\"posts\").withIndex(\"search_body\", (q) => q.search(\"body\", term))",
          "ctx.db.search(\"posts\", \"body\", term)"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "Scheduler f action — tfekkar wach action 3ndha ctx.scheduler b7al mutation.",
        "text": "Can an action schedule a future function run, and if so how?",
        "answers": [
          "No — only mutations can schedule",
          "Yes — actions also have ctx.scheduler.runAfter / runAt",
          "Yes — but only via setTimeout",
          "No — actions run once and cannot schedule"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "Bla login — tfekkar chno katrja3 getUserIdentity: error wla value khasa.",
        "text": "What does await ctx.auth.getUserIdentity() return when nobody is logged in?",
        "answers": [
          "null",
          "It throws an authentication error",
          "An anonymous identity object",
          "undefined"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "Concurrent writes — tfekkar kifach Convex kay7el conflict: retry b data jdida.",
        "text": "Two mutations update the same document at the same time. How does Convex handle it?",
        "answers": [
          "Both commits merge field by field",
          "One commits and the other automatically retries with fresh data",
          "The second mutation is silently dropped",
          "The database locks until a timeout"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "Determinism f queries — tfekkar 3lach Convex kay3awd y-runni queries w chno kaytra m3a random values.",
        "text": "Why must queries be deterministic (no Date.now(), no Math.random(), no fetch)?",
        "answers": [
          "Convex may re-run queries to keep subscriptions consistent; nondeterminism breaks caching and realtime updates",
          "Deterministic code runs faster in V8",
          "The TypeScript compiler rejects nondeterministic code",
          "Nondeterministic queries cost extra"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "Cron + external API — tfekkar: cron khaso function internal, w external API khasa action.",
        "text": "A cron job needs to call a third-party API. Which function type should the cron target?",
        "code": "crons.interval(\"sync\", { hours: 1 }, ______.stripe.sync);",
        "answers": [
          "internalAction",
          "action",
          "internalMutation",
          "mutation"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "Field automatic — tfekkar chno Convex kayzid l kol document bla ma t-golo.",
        "text": "Every Convex document automatically includes which field?",
        "answers": [
          "_createdAt",
          "_creationTime",
          "createdAt",
          "_timestamp"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "convex dev — tfekkar chno kaydir: sync + watch, wla deploy l production.",
        "text": "What does running npx convex dev do?",
        "answers": [
          "Syncs your functions/schema to the Convex backend and watches for changes",
          "Builds the React app for production",
          "Deploys to production immediately",
          "Installs the Convex npm package"
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
        "explain_dr": "Convex howa l backend kamel dyal app — tfekkar chno kay3tiik: database, serverless functions, w sync m3a l client.",
        "text": "À quoi sert principalement Convex dans une application web ?",
        "answers": [
          "Un bundler qui compile JavaScript en code natif",
          "Une bibliothèque de test pour les composants frontend",
"Une plateforme backend avec base de données, fonctions serverless et synchronisation temps réel",
          "Un framework CSS pour styliser les composants React"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "Schema f Convex kat3eraf f file wa7ed khass — tfekkar fin kayn w achmn functions katsta3mel.",
        "text": "Où définit-on le schéma de la base de données dans un projet Convex ?",
        "answers": [
          "Dans package.json sous une clé \"convex\"",
          "Dans un dossier de migrations SQL sous db/migrations",
          "convex/schema.ts avec defineSchema et defineTable",
          "Dans le code client avec createSchema()"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "Wa7ed mn anwa3 l functions read-only ghir l qira2a — tfekkar ina wa7ed may9derch ydir insert wla patch.",
        "text": "Quel type de fonction Convex est en lecture seule et NE PEUT PAS écrire dans la base ?",
        "answers": [
          "action",
          "httpAction",
"mutation",
          "query"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "Operation katbedel data f database — tfekkar achmn type dyal function mkhass l writes.",
        "text": "Un développeur doit ajouter une nouvelle tâche dans la base depuis le client. Quel type de fonction le backend doit-il exposer ?",
        "answers": [
          "Une query, car elle lit d'abord les tâches actuelles",
          "Une action, car les insertions sont asynchrones",
          "Un cron job, car il s'exécute selon un planning",
"Une mutation, car elle modifie les données stockées"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "useQuery mn convex/react — tfekkar chno kaytra melli data f backend tbedel, wach component kat3awd t-renderi wla la.",
        "text": "Que fait ce code React ?",
        "code": "const todos = useQuery(api.todos.list);",
        "answers": [
          "Appelle la query list une fois et met le résultat en cache pour toujours",
          "Supprime toutes les tâches quand le composant se démonte",
          "Envoie une mutation pour créer une liste de tâches",
          "S'abonne à la query list et re-rend automatiquement quand les données changent"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "useMutation katrja3 7aja katsta3melha bach t3ayet l function — tfekkar chno hiya: data wla function.",
        "text": "Que retourne useMutation(api.todos.add) dans un composant React ?",
        "code": "const addTodo = useMutation(api.todos.add);",
        "answers": [
          "La liste des tâches",
          "Un booléen indiquant si l'utilisateur est authentifié",
          "Une fonction à appeler pour exécuter la mutation",
          "Une promesse qui résout vers le schéma"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "insert katrja3 chi 7aja wa7da — tfekkar wach hiya l document kamel wla ghir l id dyalo.",
        "text": "Que retourne ce handler ?",
        "code": "await ctx.db.insert(\"tasks\", { text: \"Buy milk\" });",
        "answers": [
          "Le nombre de documents dans la table",
          "true en cas de succès",
"Le document inséré complet",
          "L'ID du document inséré"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "get b id li makaynch — tfekkar wach kat-throw error wla katrja3 value khasa.",
        "text": "Que retourne ctx.db.get(todoId) si aucun document n'a cet ID ?",
        "answers": [
          "Il lève une erreur \"not found\"",
          "Un objet vide {}",
          "null",
          "undefined"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "L bidaya dyal qira2a mn table — tfekkar achmn method katbda biha l query.",
        "text": "Comment commence-t-on à lire tous les documents d'une table \"notes\" dans une query ?",
        "answers": [
          "ctx.db.find(\"notes\")",
          "ctx.db.select(\"notes\")",
"ctx.db.get(\"notes\")",
          "ctx.db.query(\"notes\")"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "v.string() w v.number() jayin mn blasa wa7da — tfekkar mnin kat-importi v.",
        "text": "Quel import fournit les validateurs d'arguments comme v.string() et v.number() ?",
        "answers": [
          "from \"convex/react\"",
          "from \"convex/schema\"",
"from \"convex/values\"",
          "from \"convex/server\""
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "Argument validation f Convex — tfekkar imta kat-tra l validation, 9bel ma l handler ykhdem wla mn ba3d.",
        "text": "Une mutation est définie avec args: { name: v.string() }. Le client l'appelle avec addUser({ name: 42 }). Que se passe-t-il ?",
        "code": "args: { name: v.string() }\n// client: addUser({ name: 42 })",
        "answers": [
          "La mutation s'exécute et stocke 42 comme une chaîne",
          "Le client convertit silencieusement 42 en \"42\"",
          "La mutation réessaie avec une valeur par défaut",
"Convex lève une erreur de validation avant l'exécution du handler"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "collect() katjma3 results — tfekkar f chno format katrj3hom: array wla 7aja okhra.",
        "text": "Que retourne ceci ?",
        "code": "await ctx.db.query(\"tasks\").collect()",
        "answers": [
          "Seulement le premier document correspondant",
          "Le nombre de documents correspondants",
          "Tous les documents correspondants sous forme de tableau",
          "Un flux d'IDs de documents"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "Wa7ed document wla walo — tfekkar achmn method katrja3 document wa7ed wla null.",
        "text": "Il faut exactement un document — la tâche la plus ancienne — ou rien. Quelle option est correcte ?",
        "code": "// besoin : un document ou rien",
        "answers": [
          "await ctx.db.query(\"tasks\").take(1)",
          "await ctx.db.query(\"tasks\").collect()[0]",
          "await ctx.db.query(\"tasks\").order(\"asc\").first()",
          "await ctx.db.query(\"tasks\").single()"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "Filter b condition — tfekkar syntax dyal Convex: q.eq w q.field kifach kaytsta3mlo.",
        "text": "Quelle query retourne uniquement les tâches où done vaut true ?",
        "code": "// tâches où done === true",
        "answers": [
          "ctx.db.query(\"tasks\").where(\"done\", true)",
          "ctx.db.query(\"tasks\").filter(\"done\", true)",
          "ctx.db.query(\"tasks\").filter((q) => q.eq(q.field(\"done\"), true))",
          "ctx.db.query(\"tasks\").match({ done: true })"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "Update l ba3d l fields — tfekkar achmn method dyal ctx.db kat-patchi document b id.",
        "text": "Quelle ligne marque correctement la tâche d'ID taskId comme terminée ?",
        "answers": [
          "await ctx.db.set(taskId, { done: true })",
          "await ctx.db.insert(taskId, { done: true })",
"await ctx.db.update(taskId, { done: true })",
          "await ctx.db.patch(taskId, { done: true })"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "Delete document b id — tfekkar smiya s7i7a dyal method f ctx.db.",
        "text": "Quelle ligne supprime le document d'ID noteId ?",
        "answers": [
          "await ctx.db.destroy(noteId)",
          "await ctx.db.query(\"notes\").delete(noteId)",
"await ctx.db.delete(noteId)",
          "await ctx.db.remove(noteId)"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "Index f schema — tfekkar syntax dyal defineTable bach tzid index 3la field.",
        "text": "Quelle définition de schéma crée une table tasks avec un index sur userId ?",
        "code": "defineSchema({\n  tasks: defineTable({\n    text: v.string(),\n    userId: v.id(\"users\"),\n  })____\n})",
        "answers": [
          ".key(\"by_user\", [\"userId\"])",
          ".unique(\"userId\")",
".createIndex(\"by_user\", \"userId\")",
          ".index(\"by_user\", [\"userId\"])"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "Index vs filter f performance — tfekkar 3lach index asra3 mn scan kamel.",
        "text": "Pourquoi utiliser .withIndex(\"by_user\", (q) => q.eq(\"userId\", id)) plutôt que .filter() ?",
        "answers": [
          "filter() est déprécié dans Convex",
          "withIndex fonctionne sur le client, filter() non",
          "Il n'y a aucune différence ; c'est identique",
"Les index sont plus rapides car la base ne parcourt que les entrées correspondantes"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "Identity dyal user l msajel — tfekkar mnin function katjibha: ctx.auth wla ctx.db.",
        "text": "Comment une fonction Convex connaît-elle l'utilisateur actuel ?",
        "answers": [
          "await ctx.db.currentUser()",
          "Il est passé automatiquement comme premier argument",
"ctx.user.id",
          "await ctx.auth.getUserIdentity()"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "File storage f Convex — tfekkar achmn method kat-storei blob w chno katrja3.",
        "text": "Une mutation reçoit un Blob d'une image téléversée. Comment l'enregistrer dans le stockage de fichiers Convex ?",
        "code": "// le handler reçoit : blob (un Blob)",
        "answers": [
          "await ctx.files.save(blob)",
          "Impossible ; Convex n'a pas de stockage de fichiers",
"await ctx.db.insert(\"_storage\", blob)",
          "await ctx.storage.store(blob) — retourne un ID de stockage"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "Document ID validator — tfekkar achmn validator kay-checki id dyal table mo3ayana.",
        "text": "Une query a besoin de l'ID du document utilisateur en argument. Quelle définition d'args est correcte ?",
        "answers": [
          "args: { userId: v.object(\"users\") }",
          "args: { userId: v.doc(\"users\") }",
"args: { userId: v.id(\"users\") }",
          "args: { userId: v.string() }"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "Argument ikhtiyari — tfekkar kifach kat-gol l Convex: had l field momkin maykonch.",
        "text": "Un argument peut être une chaîne ou absent. Quel validateur convient ?",
        "answers": [
          "v.union(v.string(), v.missing())",
          "v.anyString()",
"v.string().optional()",
          "v.optional(v.string())"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "Pagination f Convex — tfekkar achmn validator kat-importi mn convex/server l had l gharad.",
        "text": "Quelle paire validateur/méthode implémente la pagination par curseur dans une query ?",
        "code": "args: { paginationOpts: ____ }\n// handler :\nreturn await ctx.db.query(\"posts\").order(\"desc\").paginate(args.paginationOpts);",
        "answers": [
          "v.pagination() depuis \"convex/values\"",
          "cursorValidator depuis \"convex/server\"",
          "paginationOptsValidator depuis \"convex/server\"",
          "v.object({ cursor: v.string() })"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "Result dyal paginate — tfekkar chno kayn ldakhel ghir l page: cursor w flag.",
        "text": "Que retourne .paginate() ?",
        "answers": [
          "{ page, continueCursor, isDone }",
          "Juste un tableau de documents",
          "Le nombre total de documents",
          "Un objet curseur de base de données"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "Scheduling mn mutation — tfekkar achmn service katsta3mel: ctx.scheduler, w b achmn unit l wa9t.",
        "text": "Depuis une mutation, comment exécuter une autre fonction 5 minutes plus tard ?",
        "answers": [
          "await ctx.db.schedule(5 * 60 * 1000, \"remind\")",
          "await ctx.cron.runAfter(300, \"remind\")",
"setTimeout(() => runJob(), 5 * 60 * 1000)",
          "await ctx.scheduler.runAfter(5 * 60 * 1000, internal.jobs.remind, { userId })"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "Action w database — tfekkar l 9a3ida: action ma3ndhach ctx.db nichan, chno khasha dir.",
        "text": "Une action doit lire la base de données. Que doit-elle faire ?",
        "answers": [
          "Les actions peuvent lire mais pas écrire avec ctx.db",
          "Importer le client de base de données depuis \"convex/db\"",
"Utiliser ctx.runQuery pour appeler une query — les actions ne peuvent pas toucher ctx.db directement",
          "Utiliser ctx.db.query directement comme une mutation"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "Action vs mutation — tfekkar chno l far9 l kbir: external API calls w code li ma-deterministicch.",
        "text": "Quand faut-il utiliser une action plutôt qu'une mutation ?",
        "answers": [
          "Quand on a besoin de l'écriture la plus rapide possible",
          "Quand on appelle une API tierce ou qu'on exécute du code non déterministe",
          "Quand la fonction doit s'exécuter dans une transaction de base de données",
          "Les actions et les mutations sont interchangeables"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "internalMutation — tfekkar chkon li 9der y3ayet liha: client wla ghir backend.",
        "text": "Quelle est la différence entre mutation et internalMutation ?",
        "answers": [
          "internalMutation ne peut être appelée que depuis le planificateur, les crons ou d'autres fonctions backend — jamais directement depuis le client",
          "internalMutation est plus rapide",
          "internalMutation saute la validation des arguments",
          "Il n'y a aucune différence"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "URL dyal file mn storage ID — tfekkar achmn method kat-generi URL li t9der t7ettha f <img>.",
        "text": "Un document stocke une image sous imageId (un ID de stockage). Comment une query retourne-t-elle une URL affichable ?",
        "answers": [
          "doc.imageId.toURL()",
          "await ctx.storage.getUrl(doc.imageId)",
          "await ctx.storage.download(doc.imageId)",
          "L'ID de stockage est déjà une URL publique"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "Realtime f Convex — tfekkar chno kaydir useQuery melli data tbedel f backend.",
        "text": "Deux utilisateurs voient la même liste de tâches. L'utilisateur A ajoute une tâche. Que se passe-t-il sur l'écran de l'utilisateur B ?",
        "answers": [
          "Il se met à jour automatiquement — useQuery se ré-exécute quand les données sous-jacentes changent",
          "L'utilisateur B doit actualiser la page manuellement",
          "L'utilisateur B ne la voit qu'après avoir rappelé la query",
          "L'application doit interroger le serveur chaque seconde"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "Npm packages f actions — tfekkar chno khass tzid f l file bach action tkhdem f Node.js runtime.",
        "text": "Une action doit utiliser un paquet npm comme stripe. Que doit déclarer le fichier de l'action ?",
        "code": "// convex/payments.ts\n____\nexport const charge = action({ ... });",
        "answers": [
          "Rien — les actions s'exécutent toujours en Node.js",
          "import \"node/runtime\" en haut",
"\"use node\"; en haut du fichier",
          "\"use server\"; en haut du fichier"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "Atomicity dyal mutations — tfekkar: ila mutation failat f nos, wach chi 7aja katb9a f database.",
        "text": "Une mutation insère une commande, puis lève une erreur avant de finir. Que contient la base ?",
        "answers": [
          "La commande reste, seules les écritures suivantes sont perdues",
          "Rien — la mutation est atomique, toutes les écritures sont annulées",
          "La moitié des champs de la commande est enregistrée",
          "La base est verrouillée jusqu'à l'intervention d'un admin"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "Cron jobs f Convex — tfekkar smiya dyal l file li fih cronJobs().",
        "text": "Quel fichier et quel helper définissent une tâche planifiée qui s'exécute chaque heure ?",
        "code": "// convex/____.ts\nimport { cronJobs } from \"convex/server\";\nconst crons = cronJobs();\ncrons.interval(\"cleanup\", { hours: 1 }, internal.jobs.cleanup);",
        "answers": [
          "crons.ts",
          "cron.ts",
          "scheduler.ts",
          "jobs.ts"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "Owner check — tfekkar achmn field dyal identity howa l identifier l stable dyal user.",
        "text": "Quel pattern restreint correctement une mutation au propriétaire du document ?",
        "code": "const identity = await ctx.auth.getUserIdentity();\nif (!identity) throw new Error(\"Unauthenticated\");\nconst doc = await ctx.db.get(args.id);\nif (doc.userId !== ____) throw new Error(\"Not your document\");",
        "answers": [
          "identity.id",
          "identity.subject",
          "identity.userId",
          "identity.email"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "Compound index — tfekkar: khass t-specefier ga3 l fields dyal index b tartibhom.",
        "text": "Schéma : .index(\"by_user_done\", [\"userId\", \"done\"]). Quelle query l'utilise correctement ?",
        "answers": [
          "ctx.db.query(\"tasks\").withIndex(\"by_user_done\", (q) => q.eq(\"userId\", id).eq(\"done\", false))",
          "ctx.db.query(\"tasks\").withIndex(\"by_user_done\", (q) => q.eq(\"userId\", id))",
          "ctx.db.query(\"tasks\").withIndex(\"by_user_done\", (q) => q.eq(\"done\", false))",
          "ctx.db.query(\"tasks\").filter((q) => q.eq(q.field(\"userId\"), id))"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "Webhook endpoint — tfekkar achmn type dyal function kat3eraf routes HTTP f Convex.",
        "text": "Il faut un endpoint webhook public (p. ex. pour Stripe) dans Convex. Que faut-il utiliser ?",
        "answers": [
          "Une action classique — elle est publique par défaut",
          "Une httpAction enregistrée sur un httpRouter dans convex/http.ts",
          "Une mutation sans vérification d'authentification",
          "Une query avec method: \"POST\""
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "Delete file — tfekkar achmn method dyal ctx.storage kat-msa7 file.",
        "text": "Comment supprimer un fichier du stockage Convex dans une mutation ?",
        "answers": [
          "await ctx.db.delete(storageId)",
          "await ctx.storage.delete(storageId)",
          "await ctx.storage.remove(storageId)",
          "await ctx.files.delete(storageId)"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "Optimistic UI m3a Convex — tfekkar 3lach realtime kat-ghni 3lih f ghalib l 7alat.",
        "text": "Un développeur ajoute une UI optimiste manuelle pour un bouton like sur Convex. Pourquoi est-ce généralement inutile ?",
        "answers": [
          "Les mutations Convex sont synchrones sur le client",
          "Convex pousse les mises à jour en temps réel, donc le résultat de la query se rafraîchit presque instantanément",
          "L'UI optimiste n'est pas supportée par Convex",
          "Le client met les mutations en cache pendant 24 heures"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "Next page — tfekkar kifach client kay-gol l server: zid jib liya mnin w9efti.",
        "text": "Une query paginée a retourné { page, continueCursor, isDone: false }. Comment le client charge-t-il la page suivante ?",
        "answers": [
          "En rappelant la query en passant continueCursor dans paginationOpts",
          "En appelant .paginate() une seconde fois sur le client",
          "En renvoyant isDone: false au serveur",
          "En rechargeant toute la query sans options"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "Upload flow — tfekkar l khotowat: URL mn mutation, w mn ba3d POST l file l dik l URL.",
        "text": "Quel est le flux de téléversement correct pour le stockage de fichiers Convex ?",
        "answers": [
          "POSTer le fichier directement vers ctx.storage depuis le navigateur",
          "Appeler une mutation qui retourne ctx.storage.generateUploadUrl(), puis POSTer le fichier vers cette URL",
          "Appeler ctx.storage.store(file) dans le composant React",
          "Téléverser via FTP vers le projet Convex"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "v.id(\"tasks\") — tfekkar wach kay-checki ghir format dyal id wla table li jay menha.",
        "text": "args: { taskId: v.id(\"tasks\") }. Le client passe un ID valide d'un document users. Que se passe-t-il ?",
        "answers": [
          "La validation échoue — l'ID doit appartenir à la table tasks",
          "Ça passe — tout ID Convex est accepté",
          "Le document est auto-converti en tâche",
          "La query retourne null au lieu de lever une erreur"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "Full-text search — tfekkar smiya dyal method dyal search index f defineTable.",
        "text": "Quel ajout au schéma active la recherche plein texte sur le champ body d'un post ?",
        "answers": [
          ".index(\"search_body\", [\"body\"])",
          ".searchIndex(\"search_body\", { searchField: \"body\" })",
          ".fullText(\"body\")",
          ".search(\"body\")"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "Search query — tfekkar achmn method katsta3mel m3a search index w kifach kat3ti l term.",
        "text": "Comment exécuter la recherche ?",
        "answers": [
          "ctx.db.query(\"posts\").withSearchIndex(\"search_body\", (q) => q.search(\"body\", term))",
          "ctx.db.query(\"posts\").search(\"body\", term)",
          "ctx.db.query(\"posts\").withIndex(\"search_body\", (q) => q.search(\"body\", term))",
          "ctx.db.search(\"posts\", \"body\", term)"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "Scheduler f action — tfekkar wach action 3ndha ctx.scheduler b7al mutation.",
        "text": "Une action peut-elle planifier une exécution future, et si oui comment ?",
        "answers": [
          "Non — seules les mutations peuvent planifier",
          "Oui — les actions ont aussi ctx.scheduler.runAfter / runAt",
          "Oui — mais uniquement via setTimeout",
          "Non — les actions s'exécutent une fois et ne peuvent pas planifier"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "Bla login — tfekkar chno katrja3 getUserIdentity: error wla value khasa.",
        "text": "Que retourne await ctx.auth.getUserIdentity() quand personne n'est connecté ?",
        "answers": [
          "null",
          "Il lève une erreur d'authentification",
          "Un objet identité anonyme",
          "undefined"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "Concurrent writes — tfekkar kifach Convex kay7el conflict: retry b data jdida.",
        "text": "Deux mutations modifient le même document en même temps. Comment Convex gère-t-il cela ?",
        "answers": [
          "Les deux commits fusionnent champ par champ",
          "L'une commit et l'autre réessaie automatiquement avec des données fraîches",
          "La seconde mutation est silencieusement abandonnée",
          "La base se verrouille jusqu'à un timeout"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "Determinism f queries — tfekkar 3lach Convex kay3awd y-runni queries w chno kaytra m3a random values.",
        "text": "Pourquoi les queries doivent-elles être déterministes (pas de Date.now(), pas de Math.random(), pas de fetch) ?",
        "answers": [
          "Convex peut ré-exécuter les queries pour garder les abonnements cohérents ; le non-déterminisme casse le cache et les mises à jour temps réel",
          "Le code déterministe s'exécute plus vite dans V8",
          "Le compilateur TypeScript rejette le code non déterministe",
          "Les queries non déterministes coûtent plus cher"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "Cron + external API — tfekkar: cron khaso function internal, w external API khasa action.",
        "text": "Un cron job doit appeler une API tierce. Quel type de fonction le cron doit-il cibler ?",
        "code": "crons.interval(\"sync\", { hours: 1 }, ______.stripe.sync);",
        "answers": [
          "internalAction",
          "action",
          "internalMutation",
          "mutation"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "Field automatic — tfekkar chno Convex kayzid l kol document bla ma t-golo.",
        "text": "Quel champ chaque document Convex inclut-il automatiquement ?",
        "answers": [
          "_createdAt",
          "_creationTime",
          "createdAt",
          "_timestamp"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "convex dev — tfekkar chno kaydir: sync + watch, wla deploy l production.",
        "text": "Que fait l'exécution de npx convex dev ?",
        "answers": [
          "Synchronise vos fonctions/schéma vers le backend Convex et surveille les changements",
          "Compile l'application React pour la production",
          "Déploie immédiatement en production",
          "Installe le paquet npm Convex"
        ],
        "correct": 0,
        "selection": null
      }
    ]
  }
];
