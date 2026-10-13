export const mongodbQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "So2al 3la find m3a $gt: had l operator kay3ni greater than (>). Ch7al user 3andu age kbir mn 30? 9ra l documents w filter.",
        "text": "Which documents are returned?",
        "code": "users\n{ name: \"Sara\", age: 28 }\n{ name: \"Omar\", age: 35 }\n{ name: \"Lina\", age: 42 }\n\ndb.users.find({ age: { $gt: 30 } })",
        "answers": [
          "Sara and Omar",
          "Sara and Lina",
          "Omar and Lina",
          "All three"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al 3la $lte: had l operator kay3ni less than or equal (<=). Fker ch7al product l price dyalo <= 10.",
        "text": "Which documents are returned?",
        "code": "products\n{ name: \"Pen\", price: 2 }\n{ name: \"Notebook\", price: 5 }\n{ name: \"Bag\", price: 20 }\n\ndb.products.find({ price: { $lte: 10 } })",
        "answers": [
          "Pen and Notebook",
          "Pen only",
          "Bag only",
          "All three"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al 3la findOne: had l method katrjja3 ghir document wa7ed — lwl wa7ed li kaymatchi. Machi array w machi ga3 l matches.",
        "text": "Two documents are named \"Sara\". What is returned?",
        "code": "db.users.findOne({ name: \"Sara\" })",
        "answers": [
          "All matching documents",
          "An array of matches",
          "An error",
          "The first matching document"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al 3la insertOne: ila l collection ma kaynach, MongoDB kat-creeha automatiquement w kat-generi _id l l document. Fker chnu ghadi yw9a3.",
        "text": "What happens?",
        "code": "db.users.insertOne({ name: \"Ali\", age: 25 })",
        "answers": [
          "The collection is created but stays empty",
          "One document is added and an _id is generated",
          "All existing documents are replaced",
          "An error — _id is required"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "So2al 3la types: l query kat9arn l number field age m3a string. MongoDB ma kaydirch l conversion automatic — l types khasshom ytwa9o bach y-matchiw.",
        "text": "Why does this return no documents even though users older than 30 exist?",
        "code": "db.users.find({ age: \">30\" })",
        "answers": [
          "It compares the number field age to the string \">30\"",
          "The $gt operator is missing",
          "find cannot filter on numbers",
          "Quotes are required around field names"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "So2al 3la nested fields: l dot notation ('address.city') kat-wsal l l field l dakhili. Fker chkon li l city dyalo Paris.",
        "text": "Which documents are returned?",
        "code": "users\n{ name: \"Sara\", address: { city: \"Paris\" } }\n{ name: \"Omar\", address: { city: \"Lyon\" } }\n\ndb.users.find({ \"address.city\": \"Paris\" })",
        "answers": [
          "Omar",
          "Both",
          "Sara",
          "None"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al 3la projection: l argument tani dyal find kay7dd l fields li ghadi ybanu. Fker: wach _id kayt-7iyed automatically wla khass t-7iydo sari7an?",
        "text": "Each document has name, age and city. Which fields does each returned document contain?",
        "code": "db.users.find({ city: \"Paris\" }, { name: 1 })",
        "answers": [
          "name only",
          "_id and name",
          "All fields",
          "_id only"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "So2al 3la countDocuments: kat7sab ghir l documents li kay7a9a9o l filter. Ch7al user 3andu active: true?",
        "text": "4 users exist, 3 of them have active: true. What is returned?",
        "code": "db.users.countDocuments({ active: true })",
        "answers": [
          "4",
          "1",
          "An error",
          "3"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "So2al 3la deleteOne: b7al findOne — kat-m7i ghir lwl document li kaymatchi, machi ga3hom.",
        "text": "Two documents are named \"Ali\". What happens?",
        "code": "db.users.deleteOne({ name: \"Ali\" })",
        "answers": [
          "Both are deleted",
          "None — deleteOne needs _id",
          "Only the first matching document is deleted",
          "The collection is dropped"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "So2al 3la sort + limit: sort({ age: -1 }) kay3ni mn l kbir l sghir, w limit(2) kaykhud ghir joj lwl. Rtab l ages b rask.",
        "text": "Users have ages 28, 35, 42, 19. Which ages are returned, in order?",
        "code": "db.users.find().sort({ age: -1 }).limit(2)",
        "answers": [
          "42, 35",
          "35, 42",
          "19, 28",
          "42 only"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "So2al 3la updateOne bla $set: l document l tani kay-replace l document kamal (mn ghir _id). Fker chnu ghadi yb9a f l document mn ba3d.",
        "text": "The document was { name: \"Ali\", age: 25, city: \"Paris\" }. What does it look like after?",
        "code": "db.users.updateOne({ name: \"Ali\" }, { age: 26 })",
        "answers": [
          "{ name, age: 26, city } — only age changed",
          "{ _id, age: 26 } — the document was replaced",
          "Unchanged — the update is invalid",
          "{ name: \"Ali\" } only"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "So2al 3la $set: had l operator hwa li kay-modifi ghir l fields li 7dditi bla ma y-m7i l b9iya. Fker chkon mn l options kayst3ml $set.",
        "text": "Which update changes only the email of Ali?",
        "answers": [
          "db.users.updateOne({ name: \"Ali\" }, { email: \"a@x.com\" })",
          "db.users.update({ name: \"Ali\" }, { email: \"a@x.com\" })",
          "db.users.setEmail(\"Ali\", \"a@x.com\")",
          "db.users.updateOne({ name: \"Ali\" }, { $set: { email: \"a@x.com\" } })"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "So2al 3la updateMany: l filter {} l khawi kaymatchi ga3 l documents. Ch7al document ghadi y-tmodifia?",
        "text": "The collection has 4 documents. How many are modified?",
        "code": "db.users.updateMany({}, { $set: { active: true } })",
        "answers": [
          "4",
          "1",
          "0",
          "An error — the filter cannot be empty"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "So2al 3la arrays: f MongoDB, ila 9aranti array field m3a value wa7da, kaymatchi ila kan wa7ed mn l elements kay-sawiha. Fker l tags dyal Sara.",
        "text": "Is the document matched?",
        "code": "{ name: \"Sara\", tags: [\"red\", \"blue\"] }\n\ndb.products.find({ tags: \"red\" })",
        "answers": [
          "No — you must use $in for arrays",
          "No — you must use $elemMatch",
          "Yes — matching an array field matches if any element equals the value",
          "An error"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "So2al 3la $in: had l operator kay9bl list dyal values — l document kaymatchi ila l field dyalo kayn f l list. Ch7al city kayna f l list?",
        "text": "Which documents are returned?",
        "code": "users\n{ name: \"Sara\", city: \"Paris\" }\n{ name: \"Omar\", city: \"Lyon\" }\n{ name: \"Lina\", city: \"Madrid\" }\n\ndb.users.find({ city: { $in: [\"Paris\", \"Lyon\"] } })",
        "answers": [
          "Sara only",
          "All three",
          "None",
          "Sara and Omar"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al 3la $push: had l operator khdam 3la l arrays — fker wach kay-bdl l array kamla wla kay-zid 3liha element f l akhir.",
        "text": "What is tags after the update?",
        "code": "{ _id: 1, tags: [\"a\", \"b\"] }\n\ndb.posts.updateOne({ _id: 1 }, { $push: { tags: \"c\" } })",
        "answers": [
          "[\"c\"]",
          "[\"a\", \"b\", \"c\"]",
          "[\"a\", \"b\"]",
          "\"c\""
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al 3la _id type: l _id f MongoDB hwa ObjectId, machi string. L query b string ma ghadi t-matchich l ObjectId — l types khasshom ytwa9o.",
        "text": "The document exists but nothing is returned. Why?",
        "code": "db.users.find({ _id: \"64f1a2b3c4d5e6f7890ab123\" })",
        "answers": [
          "_id is an ObjectId, not a string — use ObjectId(\"...\")",
          "find cannot query _id",
          "The hex string is too long",
          "You must use findOne for _id"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al 3la $inc: had l operator kay-zid (wla kay-n9s ila l value negative) 3la l number. Fker chnu ghadi ywli stock.",
        "text": "What is stock after the update?",
        "code": "{ sku: \"A1\", stock: 10 }\n\ndb.products.updateOne({ sku: \"A1\" }, { $inc: { stock: -2 } })",
        "answers": [
          "12",
          "10",
          "8",
          "-2"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "So2al 3la regex: /^A/ kay3ni l names li kaybdaw b A. Fker l case sensitivity — wach l regex kayfar9 bin l 7orof l kbar w sghar?",
        "text": "Users are named Amine, Sara and Ali. Which documents are returned?",
        "code": "db.users.find({ name: /^A/ })",
        "answers": [
          "Amine only",
          "Amine and Ali",
          "All three",
          "None"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al 3la deleteMany: kat-m7i ga3 l documents li kay7a9a9o l filter. Ch7al wa7ed 3andu active: false? Ch7al ghadi yb9a mn ba3d?",
        "text": "3 users have active: false, 2 have active: true. How many documents remain?",
        "code": "db.users.deleteMany({ active: false })",
        "answers": [
          "3",
          "0",
          "5",
          "2"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al 3la aggregate: l stages kat-khdmo b l tartib — $match lwl (ghir Paris), w mn ba3d $group kay7sab. Fker ch7al user f Paris.",
        "text": "What is returned?",
        "code": "users\n{ name: \"Sara\", city: \"Paris\", age: 28 }\n{ name: \"Omar\", city: \"Paris\", age: 34 }\n{ name: \"Lina\", city: \"Lyon\", age: 40 }\n\ndb.users.aggregate([\n  { $match: { city: \"Paris\" } },\n  { $group: { _id: \"$city\", n: { $sum: 1 } } }\n])",
        "answers": [
          "{ _id: \"Paris\", n: 3 }",
          "{ _id: \"Lyon\", n: 1 }",
          "{ _id: \"Paris\", n: 2 }",
          "[]"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "So2al 3la $avg f $group: l average kayt7sab l kol group b7alo. 7sab l average dyal l ages dyal Paris b rask.",
        "text": "Same documents as above. What is the average age for Paris?",
        "code": "db.users.aggregate([\n  { $group: { _id: \"$city\", avgAge: { $avg: \"$age\" } } }\n])",
        "answers": [
          "34",
          "31",
          "28",
          "40"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al 3la pipeline order: $sort lwl (age -1 = kbir l sghir), $limit 2 (joj lwl), w $project kay7dd l fields. Ttba3 l stages b l tartib.",
        "text": "Users have ages 28 (Sara), 34 (Omar), 40 (Lina). What is returned?",
        "code": "db.users.aggregate([\n  { $sort: { age: -1 } },\n  { $limit: 2 },\n  { $project: { name: 1, _id: 0 } }\n])",
        "answers": [
          "[{ name: \"Lina\" }, { name: \"Omar\" }]",
          "[{ name: \"Omar\" }, { name: \"Lina\" }]",
          "All three names",
          "An error"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al 3la stage order: f l aggregation, l stages kat-khdmo b l tartib li ktbtihom. Ila 7ttiti $limit 9bl $sort, chnu ghadi y-sorti bdabt?",
        "text": "A developer wants the 2 oldest users. What is wrong with this pipeline?",
        "code": "db.users.aggregate([\n  { $limit: 2 },\n  { $sort: { age: -1 } }\n])",
        "answers": [
          "Nothing is wrong",
          "$sort cannot follow $limit",
          "$limit must be 0",
          "$limit runs first, so it sorts only 2 arbitrary documents"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "So2al 3la $unwind: had l stage kat-fkk l array — kol element kaywli document b7alo. Fker ch7al element f l array w chnu ghadi ykhrj.",
        "text": "How many documents come out of the $unwind stage?",
        "code": "{ _id: 1, tags: [\"a\", \"b\", \"c\"] }\n\ndb.posts.aggregate([{ $unwind: \"$tags\" }])",
        "answers": [
          "1",
          "0",
          "3",
          "An error"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "So2al 3la $group + $sum: l grouping kayn 7asb status, w $sum kayjm3 l amounts dyal kol group. 7sab l paid b7alha w shipped b7alha.",
        "text": "What totals are returned?",
        "code": "orders\n{ status: \"paid\", amount: 100 }\n{ status: \"paid\", amount: 50 }\n{ status: \"shipped\", amount: 80 }\n\ndb.orders.aggregate([\n  { $group: { _id: \"$status\", total: { $sum: \"$amount\" } } }\n])",
        "answers": [
          "paid: 150, shipped: 80",
          "paid: 100, shipped: 80",
          "paid: 150, shipped: 130",
          "A single total: 230"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al 3la $addToSet: had l operator kay-zid l element ghir ila makaynch deja f l array (b7al set). Fker wach 'a' kayna deja f tags.",
        "text": "What is tags after the update?",
        "code": "{ _id: 1, tags: [\"a\", \"b\"] }\n\ndb.posts.updateOne({ _id: 1 }, { $addToSet: { tags: \"a\" } })",
        "answers": [
          "[\"a\", \"b\", \"a\"]",
          "[\"a\", \"b\"] — unchanged, \"a\" is already present",
          "[\"a\"]",
          "An error"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al 3la $or: l document kaymatchi ila wa7ed mn l conditions kayt7a9a9. Fker kol user: wach age < 18 wla vip true?",
        "text": "Which documents are returned?",
        "code": "users\n{ name: \"Sara\", age: 15, vip: false }\n{ name: \"Omar\", age: 30, vip: true }\n{ name: \"Lina\", age: 40, vip: false }\n\ndb.users.find({ $or: [{ age: { $lt: 18 } }, { vip: true }] })",
        "answers": [
          "Sara only",
          "Omar only",
          "All three",
          "Sara and Omar"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al 3la projection: fker chnu kay3ni 1 w 0 f l projection, w chnu l default dyal _id — wach kayban wla khass t-7iydo?",
        "text": "Which fields does each returned document contain?",
        "code": "db.users.find({}, { name: 1, age: 1, _id: 0 })",
        "answers": [
          "name and age only",
          "name, age and _id",
          "All fields",
          "_id only"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al 3la counting f aggregation: l pattern l mchhour hwa $group b _id 7asb l field li bghiti t-7sab 3lih, w $sum: 1 l kol document. Fker chkon li kay-groupi 7asb status.",
        "text": "Which pipeline counts orders per status?",
        "answers": [
          "[{ $count: \"$status\" }]",
          "[{ $group: { _id: \"$status\", n: { $sum: 1 } } }]",
          "[{ $group: { _id: null, n: { $sum: \"$status\" } } }]",
          "[{ $match: { $count: 1 } }]"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al 3la $lookup: l result dyal l join kayt7at f array f l field 'as'. Fker: ila makaynch match, chnu ghadi ykoun f dik l array?",
        "text": "What does Omar's document contain after the $lookup?",
        "code": "users\n{ _id: 1, name: \"Sara\" }\n{ _id: 2, name: \"Omar\" }\n\norders\n{ userId: 1, total: 50 }\n\ndb.users.aggregate([\n  { $lookup: { from: \"orders\", localField: \"_id\", foreignField: \"userId\", as: \"orders\" } }\n])",
        "answers": [
          "No orders field at all",
          "orders: null",
          "Omar is excluded from the results",
          "orders: [] — an empty array"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "So2al 3la update m3a modifiedCount 0: l update ma l9a ta document y-matchi l filter. Fker chnu ymkn ykoun l sabab — typo? type mismatch f l email?",
        "text": "The command succeeds but modifiedCount is 0. What is the most likely cause?",
        "code": "db.users.updateOne({ email: \"ali@x.com\" }, { $set: { active: true } })",
        "answers": [
          "No document matches the filter — e.g. a typo or type mismatch in email",
          "updateOne cannot use $set",
          "The collection is locked",
          "active is a reserved field"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "So2al 3la $group b _id: null: hadchi kay-jm3 ga3 l documents f group wa7ed. Fker ch7al group ghadi ykhrj w chnu l average dyal l ages.",
        "text": "Users have ages 20, 30, 40. What is returned?",
        "code": "db.users.aggregate([\n  { $group: { _id: null, avgAge: { $avg: \"$age\" } } }\n])",
        "answers": [
          "Three documents",
          "An error — _id cannot be null",
          "One document: { _id: null, avgAge: 30 }",
          "{ avgAge: 90 }"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al 3la $avg m3a missing field: l documents li ma 3andhomch l field kayt-ignoreaw f l 7sab dyal l average. 7sab l average ghir dyal li 3andhom age.",
        "text": "One document has no age field. What is a?",
        "code": "users\n{ name: \"Sara\", age: 20 }\n{ name: \"Omar\", age: 30 }\n{ name: \"Lina\" }\n\ndb.users.aggregate([\n  { $group: { _id: null, a: { $avg: \"$age\" } } }\n])",
        "answers": [
          "20 — the aggregation fails on missing fields",
          "25 — documents missing age are ignored",
          "16.7",
          "An error"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al 3la $all: had l operator kaytlb blli l array t-7tawi 3la GA3 l values li f l list. Fker chkon li 3andu 'red' w 'blue' bjoj.",
        "text": "Which documents match?",
        "code": "products\n{ name: \"A\", tags: [\"red\", \"blue\"] }\n{ name: \"B\", tags: [\"red\"] }\n{ name: \"C\", tags: [\"blue\", \"green\"] }\n\ndb.products.find({ tags: { $all: [\"red\", \"blue\"] } })",
        "answers": [
          "Only the first",
          "The first and second",
          "All three",
          "None"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al 3la embedded documents: l match 3la sub-document kamal kaytlb nafs l fields w nafs l order. 9arn l address dyal Sara m3a l query.",
        "text": "Is Sara matched?",
        "code": "{ name: \"Sara\", address: { city: \"Paris\", zip: \"75001\", country: \"FR\" } }\n\ndb.users.find({ address: { city: \"Paris\", zip: \"75001\" } })",
        "answers": [
          "Yes",
          "Only if you add $elemMatch",
          "An error",
          "No — embedded document equality requires all fields in the same order"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "So2al 3la distinct: had l method katrjja3 l values l mkhtalfa b7al array. Fker ch7al city mkhtalfa kayna.",
        "text": "Users have cities Paris, Lyon, Paris. What is returned?",
        "code": "db.users.distinct(\"city\")",
        "answers": [
          "[\"Paris\", \"Lyon\", \"Paris\"]",
          "2",
          "[\"Paris\", \"Lyon\"]",
          "An error"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "So2al 3la unique index: l index unique kay-rfd ay duplicate value. Fker chnu ghadi yw9a3 ila 7awlti t-insert email li deja kayn.",
        "text": "Why did the insert fail?",
        "code": "db.users.createIndex({ email: 1 }, { unique: true })\n\n// then inserting a second document with an already-used email:\n// E11000 duplicate key error",
        "answers": [
          "createIndex failed silently",
          "MongoDB does not allow two inserts in a row",
          "The email already exists and the unique index rejects duplicates",
          "The email field is too long"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "So2al 3la $size: had l operator kay-matchi l arrays li l length dyalhom hia dik l number bdabt. Fker l length dyal kol tags.",
        "text": "Which documents match?",
        "code": "products\n{ name: \"A\", tags: [\"a\", \"b\"] }\n{ name: \"B\", tags: [\"a\"] }\n{ name: \"C\", tags: [\"a\", \"b\", \"c\"] }\n\ndb.products.find({ tags: { $size: 2 } })",
        "answers": [
          "The first and second",
          "All three",
          "None",
          "Only the first"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al 3la indexes: l equality query 3la status kat-stafd mn index 3la status. Fker chkon l index li kay-ghetti l field li kat-filter 3lih.",
        "text": "A find on { status: \"shipped\" } scans 1M documents. Which index helps?",
        "answers": [
          "{ status: 1 }",
          "{ _id: 1 }",
          "No index can help equality queries",
          "{ status: \"text\" }"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al 3la pipeline: $group kay7sab l average l kol dept, $match kay-filter l groups (avg > 5000), w $sort kay-rtb f l akhir. 7sab l averages w chof l tartib.",
        "text": "What is returned, in order?",
        "code": "emp\n{ dept: \"IT\", salary: 4000 }\n{ dept: \"IT\", salary: 8000 }\n{ dept: \"HR\", salary: 7000 }\n\ndb.emp.aggregate([\n  { $group: { _id: \"$dept\", avg: { $avg: \"$salary\" } } },\n  { $match: { avg: { $gt: 5000 } } },\n  { $sort: { avg: -1 } }\n])",
        "answers": [
          "[{ _id: \"IT\", avg: 6000 }, { _id: \"HR\", avg: 7000 }]",
          "[{ _id: \"HR\", avg: 7000 }, { _id: \"IT\", avg: 6000 }]",
          "[{ _id: \"IT\", avg: 6000 }]",
          "[]"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al 3la $unwind mn ba3d $lookup: l user li 3andu orders khawyin (array khawi), l $unwind ma kay-khrj walo lih. Fker chkon li ghadi yb9a f l resultat.",
        "text": "Sara has 1 order, Omar has 0. After the $unwind stage, which users remain?",
        "code": "db.users.aggregate([\n  { $lookup: { from: \"orders\", localField: \"_id\", foreignField: \"userId\", as: \"orders\" } },\n  { $unwind: \"$orders\" }\n])",
        "answers": [
          "Both Sara and Omar",
          "Neither",
          "An error",
          "Only Sara — Omar's empty array unwinds to nothing"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "So2al 3la pipeline update: l update b array dyal stages kay-khdm b aggregation operators. Fker chnu kaydir $multiply m3a price w qty.",
        "text": "What is total after the update?",
        "code": "{ _id: 1, price: 20, qty: 3 }\n\ndb.products.updateOne({ _id: 1 }, [{ $set: { total: { $multiply: [\"$price\", \"$qty\"] } } }])",
        "answers": [
          "23",
          "0",
          "60",
          "An error — updates cannot use an aggregation pipeline"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al 3la $cond: had l operator hwa l if/else dyal l aggregation — ila l if t7a9a9 kayrjja3 'then', sinon 'else'. Fker l age dyal kol wa7ed.",
        "text": "Sara is 15, Omar is 30. What is returned?",
        "code": "db.users.aggregate([\n  { $project: {\n      name: 1,\n      cat: { $cond: { if: { $lt: [\"$age\", 18] }, then: \"minor\", else: \"adult\" } },\n      _id: 0\n  } }\n])",
        "answers": [
          "[{ name: \"Sara\", cat: \"minor\" }, { name: \"Omar\", cat: \"adult\" }]",
          "Both minor",
          "Both adult",
          "An error"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "So2al 3la transactions: abortTransaction kay7iyed ga3 l operations li w9a3o f l session. Fker chnu ghadi yb9a f a w b mn ba3d.",
        "text": "What do collections a and b contain afterwards?",
        "code": "session.startTransaction();\ndb.a.insertOne({ x: 1 }, { session });\ndb.b.insertOne({ y: 2 }, { session });\nsession.abortTransaction();",
        "answers": [
          "a has { x: 1 } but b is empty",
          "Both inserts are kept",
          "Nothing new — the abort discards both inserts",
          "Only the first insert is kept"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al 3la $group m3a missing field: l document li ma 3andush l field kay-tgroupa ta7t _id: null. Fker ch7al group ghadi ykhrj.",
        "text": "One document has no city field. What groups are returned?",
        "code": "users\n{ city: \"Paris\" }\n{ city: \"Paris\" }\n{ }\n\ndb.users.aggregate([\n  { $group: { _id: \"$city\", n: { $sum: 1 } } }\n])",
        "answers": [
          "{ _id: \"Paris\", n: 2 } and { _id: null, n: 1 }",
          "{ _id: \"Paris\", n: 3 }",
          "An error",
          "{ _id: \"Paris\", n: 2 } only"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "So2al 3la insertMany ordered: b ordered: true, l insert kay-w9f f lwl error w ma kay-kmmlch. Fker ch7al document dkhlo 9bl ma yw9a3 l duplicate.",
        "text": "The third document violates the unique _id index. How many documents are inserted?",
        "code": "db.users.insertMany([{ _id: 1 }, { _id: 2 }, { _id: 1 }, { _id: 3 }], { ordered: true })",
        "answers": [
          "3",
          "4",
          "0",
          "2 — ordered inserts stop at the first error"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al 3la $pull: had l operator kay-7iyed l value mn l array. Fker: wach kay-7iyed ghir lwl occurrence wla ga3 l occurrences?",
        "text": "What is tags after the update?",
        "code": "{ _id: 1, tags: [\"red\", \"blue\", \"red\"] }\n\ndb.posts.updateOne({ _id: 1 }, { $pull: { tags: \"red\" } })",
        "answers": [
          "[\"blue\", \"red\"]",
          "[\"red\", \"blue\"]",
          "[\"blue\"]",
          "[]"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al 3la regex m3a $options 'i': l 'i' kay3ni case-insensitive. Fker chkon li l name dyalo kaybda b 'sa' bla ma t7s b l case.",
        "text": "Users are named \"Sara\", \"samy\" and \"Omar\". Which documents match?",
        "code": "db.users.find({ name: { $regex: \"^sa\", $options: \"i\" } })",
        "answers": [
          "Sara only",
          "samy only",
          "Sara and samy",
          "None"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "So2al 3la compound index: l query kat-filter 3la status w kat-sort 3la createdAt — l index l mzyan khass y-bda b l equality field w y-kmml b l sort field b nafs l direction.",
        "text": "A query does find({ status: \"shipped\" }).sort({ createdAt: -1 }) on 1M documents. Which index serves both the filter and the sort?",
        "answers": [
          "{ status: 1, createdAt: -1 }",
          "{ createdAt: -1, status: 1 }",
          "{ status: 1 }",
          "{ createdAt: -1 }"
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
        "explain_dr": "So2al 3la find m3a $gt: had l operator kay3ni greater than (>). Ch7al user 3andu age kbir mn 30? 9ra l documents w filter.",
        "text": "Quels documents sont retournés ?",
        "code": "users\n{ name: \"Sara\", age: 28 }\n{ name: \"Omar\", age: 35 }\n{ name: \"Lina\", age: 42 }\n\ndb.users.find({ age: { $gt: 30 } })",
        "answers": [
          "Sara et Omar",
          "Sara et Lina",
          "Omar et Lina",
          "Les trois"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al 3la $lte: had l operator kay3ni less than or equal (<=). Fker ch7al product l price dyalo <= 10.",
        "text": "Quels documents sont retournés ?",
        "code": "products\n{ name: \"Pen\", price: 2 }\n{ name: \"Notebook\", price: 5 }\n{ name: \"Bag\", price: 20 }\n\ndb.products.find({ price: { $lte: 10 } })",
        "answers": [
          "Pen et Notebook",
          "Pen uniquement",
          "Bag uniquement",
          "Les trois"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al 3la findOne: had l method katrjja3 ghir document wa7ed — lwl wa7ed li kaymatchi. Machi array w machi ga3 l matches.",
        "text": "Deux documents s'appellent « Sara ». Que retourne la requête ?",
        "code": "db.users.findOne({ name: \"Sara\" })",
        "answers": [
          "Tous les documents correspondants",
          "Un tableau de correspondances",
          "Une erreur",
          "Le premier document correspondant"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al 3la insertOne: ila l collection ma kaynach, MongoDB kat-creeha automatiquement w kat-generi _id l l document. Fker chnu ghadi yw9a3.",
        "text": "Que se passe-t-il ?",
        "code": "db.users.insertOne({ name: \"Ali\", age: 25 })",
        "answers": [
          "La collection est créée mais reste vide",
          "Un document est ajouté et un _id est généré",
          "Tous les documents existants sont remplacés",
          "Une erreur — _id est obligatoire"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "So2al 3la types: l query kat9arn l number field age m3a string. MongoDB ma kaydirch l conversion automatic — l types khasshom ytwa9o bach y-matchiw.",
        "text": "Pourquoi cela ne retourne aucun document alors qu'il existe des utilisateurs de plus de 30 ans ?",
        "code": "db.users.find({ age: \">30\" })",
        "answers": [
          "On compare le champ numérique age à la chaîne « >30 »",
          "L'opérateur $gt est manquant",
          "find ne peut pas filtrer sur des nombres",
          "Les noms de champs doivent être entre guillemets"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "So2al 3la nested fields: l dot notation ('address.city') kat-wsal l l field l dakhili. Fker chkon li l city dyalo Paris.",
        "text": "Quels documents sont retournés ?",
        "code": "users\n{ name: \"Sara\", address: { city: \"Paris\" } }\n{ name: \"Omar\", address: { city: \"Lyon\" } }\n\ndb.users.find({ \"address.city\": \"Paris\" })",
        "answers": [
          "Omar",
          "Les deux",
          "Sara",
          "Aucun"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al 3la projection: l argument tani dyal find kay7dd l fields li ghadi ybanu. Fker: wach _id kayt-7iyed automatically wla khass t-7iydo sari7an?",
        "text": "Chaque document contient name, age et city. Quels champs contient chaque document retourné ?",
        "code": "db.users.find({ city: \"Paris\" }, { name: 1 })",
        "answers": [
          "name uniquement",
          "_id et name",
          "Tous les champs",
          "_id uniquement"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "So2al 3la countDocuments: kat7sab ghir l documents li kay7a9a9o l filter. Ch7al user 3andu active: true?",
        "text": "4 utilisateurs existent, dont 3 avec active : true. Que retourne la requête ?",
        "code": "db.users.countDocuments({ active: true })",
        "answers": [
          "4",
          "1",
          "Une erreur",
          "3"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "So2al 3la deleteOne: b7al findOne — kat-m7i ghir lwl document li kaymatchi, machi ga3hom.",
        "text": "Deux documents s'appellent « Ali ». Que se passe-t-il ?",
        "code": "db.users.deleteOne({ name: \"Ali\" })",
        "answers": [
          "Les deux sont supprimés",
          "Aucun — deleteOne exige _id",
          "Seul le premier document correspondant est supprimé",
          "La collection est supprimée"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "So2al 3la sort + limit: sort({ age: -1 }) kay3ni mn l kbir l sghir, w limit(2) kaykhud ghir joj lwl. Rtab l ages b rask.",
        "text": "Les utilisateurs ont 28, 35, 42 et 19 ans. Quels âges sont retournés, dans l'ordre ?",
        "code": "db.users.find().sort({ age: -1 }).limit(2)",
        "answers": [
          "42, 35",
          "35, 42",
          "19, 28",
          "42 uniquement"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "So2al 3la updateOne bla $set: l document l tani kay-replace l document kamal (mn ghir _id). Fker chnu ghadi yb9a f l document mn ba3d.",
        "text": "Le document était { name: « Ali », age: 25, city: « Paris » }. À quoi ressemble-t-il après ?",
        "code": "db.users.updateOne({ name: \"Ali\" }, { age: 26 })",
        "answers": [
          "{ name, age: 26, city } — seul age a changé",
          "{ _id, age: 26 } — le document a été remplacé",
          "Inchangé — la mise à jour est invalide",
          "{ name: « Ali » } uniquement"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "So2al 3la $set: had l operator hwa li kay-modifi ghir l fields li 7dditi bla ma y-m7i l b9iya. Fker chkon mn l options kayst3ml $set.",
        "text": "Quelle mise à jour change uniquement l'email d'Ali ?",
        "answers": [
          "db.users.updateOne({ name: \"Ali\" }, { email: \"a@x.com\" })",
          "db.users.update({ name: \"Ali\" }, { email: \"a@x.com\" })",
          "db.users.setEmail(\"Ali\", \"a@x.com\")",
          "db.users.updateOne({ name: \"Ali\" }, { $set: { email: \"a@x.com\" } })"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "So2al 3la updateMany: l filter {} l khawi kaymatchi ga3 l documents. Ch7al document ghadi y-tmodifia?",
        "text": "La collection contient 4 documents. Combien sont modifiés ?",
        "code": "db.users.updateMany({}, { $set: { active: true } })",
        "answers": [
          "4",
          "1",
          "0",
          "Une erreur — le filtre ne peut pas être vide"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "So2al 3la arrays: f MongoDB, ila 9aranti array field m3a value wa7da, kaymatchi ila kan wa7ed mn l elements kay-sawiha. Fker l tags dyal Sara.",
        "text": "Le document correspond-il ?",
        "code": "{ name: \"Sara\", tags: [\"red\", \"blue\"] }\n\ndb.products.find({ tags: \"red\" })",
        "answers": [
          "Non — il faut utiliser $in pour les tableaux",
          "Non — il faut utiliser $elemMatch",
          "Oui — filtrer un champ tableau correspond si un élément égale la valeur",
          "Une erreur"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "So2al 3la $in: had l operator kay9bl list dyal values — l document kaymatchi ila l field dyalo kayn f l list. Ch7al city kayna f l list?",
        "text": "Quels documents sont retournés ?",
        "code": "users\n{ name: \"Sara\", city: \"Paris\" }\n{ name: \"Omar\", city: \"Lyon\" }\n{ name: \"Lina\", city: \"Madrid\" }\n\ndb.users.find({ city: { $in: [\"Paris\", \"Lyon\"] } })",
        "answers": [
          "Sara uniquement",
          "Les trois",
          "Aucun",
          "Sara et Omar"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al 3la $push: had l operator khdam 3la l arrays — fker wach kay-bdl l array kamla wla kay-zid 3liha element f l akhir.",
        "text": "Que vaut tags après la mise à jour ?",
        "code": "{ _id: 1, tags: [\"a\", \"b\"] }\n\ndb.posts.updateOne({ _id: 1 }, { $push: { tags: \"c\" } })",
        "answers": [
          "[\"c\"]",
          "[\"a\", \"b\", \"c\"]",
          "[\"a\", \"b\"]",
          "\"c\""
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al 3la _id type: l _id f MongoDB hwa ObjectId, machi string. L query b string ma ghadi t-matchich l ObjectId — l types khasshom ytwa9o.",
        "text": "Le document existe mais rien n'est retourné. Pourquoi ?",
        "code": "db.users.find({ _id: \"64f1a2b3c4d5e6f7890ab123\" })",
        "answers": [
          "_id est un ObjectId, pas une chaîne — utilisez ObjectId(\"...\")",
          "find ne peut pas interroger _id",
          "La chaîne hexadécimale est trop longue",
          "Il faut utiliser findOne pour _id"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al 3la $inc: had l operator kay-zid (wla kay-n9s ila l value negative) 3la l number. Fker chnu ghadi ywli stock.",
        "text": "Que vaut stock après la mise à jour ?",
        "code": "{ sku: \"A1\", stock: 10 }\n\ndb.products.updateOne({ sku: \"A1\" }, { $inc: { stock: -2 } })",
        "answers": [
          "12",
          "10",
          "8",
          "-2"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "So2al 3la regex: /^A/ kay3ni l names li kaybdaw b A. Fker l case sensitivity — wach l regex kayfar9 bin l 7orof l kbar w sghar?",
        "text": "Les utilisateurs s'appellent Amine, Sara et Ali. Quels documents sont retournés ?",
        "code": "db.users.find({ name: /^A/ })",
        "answers": [
          "Amine uniquement",
          "Amine et Ali",
          "Les trois",
          "Aucun"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al 3la deleteMany: kat-m7i ga3 l documents li kay7a9a9o l filter. Ch7al wa7ed 3andu active: false? Ch7al ghadi yb9a mn ba3d?",
        "text": "3 utilisateurs ont active : false, 2 ont active : true. Combien de documents restent ?",
        "code": "db.users.deleteMany({ active: false })",
        "answers": [
          "3",
          "0",
          "5",
          "2"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al 3la aggregate: l stages kat-khdmo b l tartib — $match lwl (ghir Paris), w mn ba3d $group kay7sab. Fker ch7al user f Paris.",
        "text": "Que retourne le pipeline ?",
        "code": "users\n{ name: \"Sara\", city: \"Paris\", age: 28 }\n{ name: \"Omar\", city: \"Paris\", age: 34 }\n{ name: \"Lina\", city: \"Lyon\", age: 40 }\n\ndb.users.aggregate([\n  { $match: { city: \"Paris\" } },\n  { $group: { _id: \"$city\", n: { $sum: 1 } } }\n])",
        "answers": [
          "{ _id: \"Paris\", n: 3 }",
          "{ _id: \"Lyon\", n: 1 }",
          "{ _id: \"Paris\", n: 2 }",
          "[]"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "So2al 3la $avg f $group: l average kayt7sab l kol group b7alo. 7sab l average dyal l ages dyal Paris b rask.",
        "text": "Mêmes documents que ci-dessus. Quel est l'âge moyen pour Paris ?",
        "code": "db.users.aggregate([\n  { $group: { _id: \"$city\", avgAge: { $avg: \"$age\" } } }\n])",
        "answers": [
          "34",
          "31",
          "28",
          "40"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al 3la pipeline order: $sort lwl (age -1 = kbir l sghir), $limit 2 (joj lwl), w $project kay7dd l fields. Ttba3 l stages b l tartib.",
        "text": "Les utilisateurs ont 28 ans (Sara), 34 (Omar), 40 (Lina). Que retourne le pipeline ?",
        "code": "db.users.aggregate([\n  { $sort: { age: -1 } },\n  { $limit: 2 },\n  { $project: { name: 1, _id: 0 } }\n])",
        "answers": [
          "[{ name: \"Lina\" }, { name: \"Omar\" }]",
          "[{ name: \"Omar\" }, { name: \"Lina\" }]",
          "Les trois noms",
          "Une erreur"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al 3la stage order: f l aggregation, l stages kat-khdmo b l tartib li ktbtihom. Ila 7ttiti $limit 9bl $sort, chnu ghadi y-sorti bdabt?",
        "text": "Un développeur veut les 2 utilisateurs les plus âgés. Quel est le problème dans ce pipeline ?",
        "code": "db.users.aggregate([\n  { $limit: 2 },\n  { $sort: { age: -1 } }\n])",
        "answers": [
          "Rien n'est faux",
          "$sort ne peut pas suivre $limit",
          "$limit doit valoir 0",
          "$limit s'exécute en premier : on trie seulement 2 documents arbitraires"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "So2al 3la $unwind: had l stage kat-fkk l array — kol element kaywli document b7alo. Fker ch7al element f l array w chnu ghadi ykhrj.",
        "text": "Combien de documents sortent de l'étape $unwind ?",
        "code": "{ _id: 1, tags: [\"a\", \"b\", \"c\"] }\n\ndb.posts.aggregate([{ $unwind: \"$tags\" }])",
        "answers": [
          "1",
          "0",
          "3",
          "Une erreur"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "So2al 3la $group + $sum: l grouping kayn 7asb status, w $sum kayjm3 l amounts dyal kol group. 7sab l paid b7alha w shipped b7alha.",
        "text": "Quels totaux sont retournés ?",
        "code": "orders\n{ status: \"paid\", amount: 100 }\n{ status: \"paid\", amount: 50 }\n{ status: \"shipped\", amount: 80 }\n\ndb.orders.aggregate([\n  { $group: { _id: \"$status\", total: { $sum: \"$amount\" } } }\n])",
        "answers": [
          "paid : 150, shipped : 80",
          "paid : 100, shipped : 80",
          "paid : 150, shipped : 130",
          "Un seul total : 230"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al 3la $addToSet: had l operator kay-zid l element ghir ila makaynch deja f l array (b7al set). Fker wach 'a' kayna deja f tags.",
        "text": "Que vaut tags après la mise à jour ?",
        "code": "{ _id: 1, tags: [\"a\", \"b\"] }\n\ndb.posts.updateOne({ _id: 1 }, { $addToSet: { tags: \"a\" } })",
        "answers": [
          "[\"a\", \"b\", \"a\"]",
          "[\"a\", \"b\"] — inchangé, « a » est déjà présent",
          "[\"a\"]",
          "Une erreur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al 3la $or: l document kaymatchi ila wa7ed mn l conditions kayt7a9a9. Fker kol user: wach age < 18 wla vip true?",
        "text": "Quels documents sont retournés ?",
        "code": "users\n{ name: \"Sara\", age: 15, vip: false }\n{ name: \"Omar\", age: 30, vip: true }\n{ name: \"Lina\", age: 40, vip: false }\n\ndb.users.find({ $or: [{ age: { $lt: 18 } }, { vip: true }] })",
        "answers": [
          "Sara uniquement",
          "Omar uniquement",
          "Les trois",
          "Sara et Omar"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al 3la projection: fker chnu kay3ni 1 w 0 f l projection, w chnu l default dyal _id — wach kayban wla khass t-7iydo?",
        "text": "Quels champs contient chaque document retourné ?",
        "code": "db.users.find({}, { name: 1, age: 1, _id: 0 })",
        "answers": [
          "name et age uniquement",
          "name, age et _id",
          "Tous les champs",
          "_id uniquement"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al 3la counting f aggregation: l pattern l mchhour hwa $group b _id 7asb l field li bghiti t-7sab 3lih, w $sum: 1 l kol document. Fker chkon li kay-groupi 7asb status.",
        "text": "Quel pipeline compte les commandes par statut ?",
        "answers": [
          "[{ $count: \"$status\" }]",
          "[{ $group: { _id: \"$status\", n: { $sum: 1 } } }]",
          "[{ $group: { _id: null, n: { $sum: \"$status\" } } }]",
          "[{ $match: { $count: 1 } }]"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al 3la $lookup: l result dyal l join kayt7at f array f l field 'as'. Fker: ila makaynch match, chnu ghadi ykoun f dik l array?",
        "text": "Que contient le document d'Omar après le $lookup ?",
        "code": "users\n{ _id: 1, name: \"Sara\" }\n{ _id: 2, name: \"Omar\" }\n\norders\n{ userId: 1, total: 50 }\n\ndb.users.aggregate([\n  { $lookup: { from: \"orders\", localField: \"_id\", foreignField: \"userId\", as: \"orders\" } }\n])",
        "answers": [
          "Aucun champ orders",
          "orders : null",
          "Omar est exclu des résultats",
          "orders : [] — un tableau vide"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "So2al 3la update m3a modifiedCount 0: l update ma l9a ta document y-matchi l filter. Fker chnu ymkn ykoun l sabab — typo? type mismatch f l email?",
        "text": "La commande réussit mais modifiedCount vaut 0. Quelle est la cause la plus probable ?",
        "code": "db.users.updateOne({ email: \"ali@x.com\" }, { $set: { active: true } })",
        "answers": [
          "Aucun document ne correspond au filtre — ex. faute de frappe ou type incohérent dans email",
          "updateOne ne peut pas utiliser $set",
          "La collection est verrouillée",
          "active est un champ réservé"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "So2al 3la $group b _id: null: hadchi kay-jm3 ga3 l documents f group wa7ed. Fker ch7al group ghadi ykhrj w chnu l average dyal l ages.",
        "text": "Les utilisateurs ont 20, 30 et 40 ans. Que retourne le pipeline ?",
        "code": "db.users.aggregate([\n  { $group: { _id: null, avgAge: { $avg: \"$age\" } } }\n])",
        "answers": [
          "Trois documents",
          "Une erreur — _id ne peut pas être null",
          "Un document : { _id: null, avgAge: 30 }",
          "{ avgAge: 90 }"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al 3la $avg m3a missing field: l documents li ma 3andhomch l field kayt-ignoreaw f l 7sab dyal l average. 7sab l average ghir dyal li 3andhom age.",
        "text": "Un document n'a pas de champ age. Que vaut a ?",
        "code": "users\n{ name: \"Sara\", age: 20 }\n{ name: \"Omar\", age: 30 }\n{ name: \"Lina\" }\n\ndb.users.aggregate([\n  { $group: { _id: null, a: { $avg: \"$age\" } } }\n])",
        "answers": [
          "20 — l'agrégation échoue sur les champs manquants",
          "25 — les documents sans age sont ignorés",
          "16.7",
          "Une erreur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al 3la $all: had l operator kaytlb blli l array t-7tawi 3la GA3 l values li f l list. Fker chkon li 3andu 'red' w 'blue' bjoj.",
        "text": "Quels documents correspondent ?",
        "code": "products\n{ name: \"A\", tags: [\"red\", \"blue\"] }\n{ name: \"B\", tags: [\"red\"] }\n{ name: \"C\", tags: [\"blue\", \"green\"] }\n\ndb.products.find({ tags: { $all: [\"red\", \"blue\"] } })",
        "answers": [
          "Seulement le premier",
          "Le premier et le deuxième",
          "Les trois",
          "Aucun"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al 3la embedded documents: l match 3la sub-document kamal kaytlb nafs l fields w nafs l order. 9arn l address dyal Sara m3a l query.",
        "text": "Sara correspond-elle ?",
        "code": "{ name: \"Sara\", address: { city: \"Paris\", zip: \"75001\", country: \"FR\" } }\n\ndb.users.find({ address: { city: \"Paris\", zip: \"75001\" } })",
        "answers": [
          "Oui",
          "Seulement avec $elemMatch",
          "Une erreur",
          "Non — l'égalité de documents imbriqués exige tous les champs dans le même ordre"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "So2al 3la distinct: had l method katrjja3 l values l mkhtalfa b7al array. Fker ch7al city mkhtalfa kayna.",
        "text": "Les utilisateurs ont pour villes Paris, Lyon, Paris. Que retourne la requête ?",
        "code": "db.users.distinct(\"city\")",
        "answers": [
          "[\"Paris\", \"Lyon\", \"Paris\"]",
          "2",
          "[\"Paris\", \"Lyon\"]",
          "Une erreur"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "So2al 3la unique index: l index unique kay-rfd ay duplicate value. Fker chnu ghadi yw9a3 ila 7awlti t-insert email li deja kayn.",
        "text": "Pourquoi l'insertion a-t-elle échoué ?",
        "code": "db.users.createIndex({ email: 1 }, { unique: true })\n\n// puis insertion d'un deuxième document avec un email déjà utilisé :\n// E11000 duplicate key error",
        "answers": [
          "createIndex a échoué silencieusement",
          "MongoDB n'autorise pas deux insertions d'affilée",
          "L'email existe déjà et l'index unique rejette les doublons",
          "Le champ email est trop long"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "So2al 3la $size: had l operator kay-matchi l arrays li l length dyalhom hia dik l number bdabt. Fker l length dyal kol tags.",
        "text": "Quels documents correspondent ?",
        "code": "products\n{ name: \"A\", tags: [\"a\", \"b\"] }\n{ name: \"B\", tags: [\"a\"] }\n{ name: \"C\", tags: [\"a\", \"b\", \"c\"] }\n\ndb.products.find({ tags: { $size: 2 } })",
        "answers": [
          "Le premier et le deuxième",
          "Les trois",
          "Aucun",
          "Seulement le premier"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al 3la indexes: l equality query 3la status kat-stafd mn index 3la status. Fker chkon l index li kay-ghetti l field li kat-filter 3lih.",
        "text": "Un find sur { status: « shipped » } parcourt 1M de documents. Quel index aide ?",
        "answers": [
          "{ status: 1 }",
          "{ _id: 1 }",
          "Aucun index ne peut aider les requêtes d'égalité",
          "{ status: \"text\" }"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al 3la pipeline: $group kay7sab l average l kol dept, $match kay-filter l groups (avg > 5000), w $sort kay-rtb f l akhir. 7sab l averages w chof l tartib.",
        "text": "Que retourne le pipeline, dans l'ordre ?",
        "code": "emp\n{ dept: \"IT\", salary: 4000 }\n{ dept: \"IT\", salary: 8000 }\n{ dept: \"HR\", salary: 7000 }\n\ndb.emp.aggregate([\n  { $group: { _id: \"$dept\", avg: { $avg: \"$salary\" } } },\n  { $match: { avg: { $gt: 5000 } } },\n  { $sort: { avg: -1 } }\n])",
        "answers": [
          "[{ _id: \"IT\", avg: 6000 }, { _id: \"HR\", avg: 7000 }]",
          "[{ _id: \"HR\", avg: 7000 }, { _id: \"IT\", avg: 6000 }]",
          "[{ _id: \"IT\", avg: 6000 }]",
          "[]"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al 3la $unwind mn ba3d $lookup: l user li 3andu orders khawyin (array khawi), l $unwind ma kay-khrj walo lih. Fker chkon li ghadi yb9a f l resultat.",
        "text": "Sara a 1 commande, Omar 0. Après l'étape $unwind, quels utilisateurs restent ?",
        "code": "db.users.aggregate([\n  { $lookup: { from: \"orders\", localField: \"_id\", foreignField: \"userId\", as: \"orders\" } },\n  { $unwind: \"$orders\" }\n])",
        "answers": [
          "Sara et Omar",
          "Aucun",
          "Une erreur",
          "Seulement Sara — le tableau vide d'Omar ne produit rien"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "So2al 3la pipeline update: l update b array dyal stages kay-khdm b aggregation operators. Fker chnu kaydir $multiply m3a price w qty.",
        "text": "Que vaut total après la mise à jour ?",
        "code": "{ _id: 1, price: 20, qty: 3 }\n\ndb.products.updateOne({ _id: 1 }, [{ $set: { total: { $multiply: [\"$price\", \"$qty\"] } } }])",
        "answers": [
          "23",
          "0",
          "60",
          "Une erreur — les mises à jour ne peuvent pas utiliser de pipeline d'agrégation"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al 3la $cond: had l operator hwa l if/else dyal l aggregation — ila l if t7a9a9 kayrjja3 'then', sinon 'else'. Fker l age dyal kol wa7ed.",
        "text": "Sara a 15 ans, Omar 30. Que retourne le pipeline ?",
        "code": "db.users.aggregate([\n  { $project: {\n      name: 1,\n      cat: { $cond: { if: { $lt: [\"$age\", 18] }, then: \"minor\", else: \"adult\" } },\n      _id: 0\n  } }\n])",
        "answers": [
          "[{ name: \"Sara\", cat: \"minor\" }, { name: \"Omar\", cat: \"adult\" }]",
          "Les deux minor",
          "Les deux adult",
          "Une erreur"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "So2al 3la transactions: abortTransaction kay7iyed ga3 l operations li w9a3o f l session. Fker chnu ghadi yb9a f a w b mn ba3d.",
        "text": "Que contiennent les collections a et b après ?",
        "code": "session.startTransaction();\ndb.a.insertOne({ x: 1 }, { session });\ndb.b.insertOne({ y: 2 }, { session });\nsession.abortTransaction();",
        "answers": [
          "a contient { x: 1 } mais b est vide",
          "Les deux insertions sont conservées",
          "Rien de nouveau — l'abandon annule les deux insertions",
          "Seule la première insertion est conservée"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al 3la $group m3a missing field: l document li ma 3andush l field kay-tgroupa ta7t _id: null. Fker ch7al group ghadi ykhrj.",
        "text": "Un document n'a pas de champ city. Quels groupes sont retournés ?",
        "code": "users\n{ city: \"Paris\" }\n{ city: \"Paris\" }\n{ }\n\ndb.users.aggregate([\n  { $group: { _id: \"$city\", n: { $sum: 1 } } }\n])",
        "answers": [
          "{ _id: \"Paris\", n: 2 } et { _id: null, n: 1 }",
          "{ _id: \"Paris\", n: 3 }",
          "Une erreur",
          "{ _id: \"Paris\", n: 2 } uniquement"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "So2al 3la insertMany ordered: b ordered: true, l insert kay-w9f f lwl error w ma kay-kmmlch. Fker ch7al document dkhlo 9bl ma yw9a3 l duplicate.",
        "text": "Le troisième document viole l'index unique _id. Combien de documents sont insérés ?",
        "code": "db.users.insertMany([{ _id: 1 }, { _id: 2 }, { _id: 1 }, { _id: 3 }], { ordered: true })",
        "answers": [
          "3",
          "4",
          "0",
          "2 — les insertions ordonnées s'arrêtent à la première erreur"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al 3la $pull: had l operator kay-7iyed l value mn l array. Fker: wach kay-7iyed ghir lwl occurrence wla ga3 l occurrences?",
        "text": "Que vaut tags après la mise à jour ?",
        "code": "{ _id: 1, tags: [\"red\", \"blue\", \"red\"] }\n\ndb.posts.updateOne({ _id: 1 }, { $pull: { tags: \"red\" } })",
        "answers": [
          "[\"blue\", \"red\"]",
          "[\"red\", \"blue\"]",
          "[\"blue\"]",
          "[]"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al 3la regex m3a $options 'i': l 'i' kay3ni case-insensitive. Fker chkon li l name dyalo kaybda b 'sa' bla ma t7s b l case.",
        "text": "Les utilisateurs s'appellent « Sara », « samy » et « Omar ». Quels documents correspondent ?",
        "code": "db.users.find({ name: { $regex: \"^sa\", $options: \"i\" } })",
        "answers": [
          "Sara uniquement",
          "samy uniquement",
          "Sara et samy",
          "Aucun"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "So2al 3la compound index: l query kat-filter 3la status w kat-sort 3la createdAt — l index l mzyan khass y-bda b l equality field w y-kmml b l sort field b nafs l direction.",
        "text": "Une requête fait find({ status: « shipped » }).sort({ createdAt: -1 }) sur 1M de documents. Quel index sert à la fois le filtre et le tri ?",
        "answers": [
          "{ status: 1, createdAt: -1 }",
          "{ createdAt: -1, status: 1 }",
          "{ status: 1 }",
          "{ createdAt: -1 }"
        ],
        "correct": 0,
        "selection": null
      }
    ]
  }
];
