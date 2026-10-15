export const postgresqlQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "So2al 3la PostgreSQL: ORDBMS open-source, 9wi bzf — JSONB, CTEs, window functions. L monafis dyal MySQL l 7orr.",
        "text": "What is PostgreSQL?",
        "answers": [
          "A JavaScript runtime",
          "A NoSQL document database",
          "A cloud hosting platform",
          "An open-source object-relational database management system",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al 3la port: PostgreSQL = 5432. MySQL = 3306, MongoDB = 27017. 7fed had l ar9am.",
        "text": "What is the default port PostgreSQL listens on?",
        "answers": [
          "8080",
          "27017",
          "5432",
          "3306",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al 3la psql: psql -U user -d db. -U = user, -d = database. psql howa CLI dyal Postgres.",
        "text": "Which command connects to a database with psql?",
        "code": "psql ???",
        "answers": [
          "psql --connect myuser:mydb",
          "postgres open mydb",
          "pg-connect -u myuser mydb",
          "psql -U myuser -d mydb",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al 3la psql meta-commands: \\l = list databases, \\dt = tables, \\c = connect db, \\q = quit. Kolhom kaybdaw b backslash.",
        "text": "In psql, which meta-command lists all databases?",
        "code": "mydb=> ???",
        "answers": [
          "\\dt",
          "\\c",
          "\\l",
          "\\q",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "So2al 3la \\dt: katwrik tables. \\d table = description dyal table wa7da, \\du = users/roles.",
        "text": "In psql, which meta-command lists all tables?",
        "code": "mydb=> ???",
        "answers": [
          "\\l",
          "\\d",
          "\\du",
          "\\dt",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "So2al 3la SERIAL: integer kaytzad bo7do (sequence ldakhel). B7al AUTO_INCREMENT dyal MySQL. Kayn SMALLSERIAL w BIGSERIAL.",
        "text": "What does the SERIAL pseudo-type do?",
        "code": "id SERIAL PRIMARY KEY",
        "answers": [
          "Stores serialized JSON data",
          "Encrypts the column values",
          "Creates a string column with fixed length",
          "Creates an auto-incrementing integer column backed by a sequence",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al 3la CREATE TABLE: syntax asasiya. Rdd balk l types w PRIMARY KEY.",
        "text": "Which statement creates a new table?",
        "code": "??? TABLE users (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(100)\n);",
        "answers": [
          "NEW TABLE",
          "MAKE TABLE",
          "CREATE TABLE",
          "BUILD TABLE",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "So2al 3la PRIMARY KEY: unique + NOT NULL, kat3ref kol ligne. Table wa7da = PK wa7da.",
        "text": "What is a primary key?",
        "answers": [
          "A password protecting the table",
          "An index used only for sorting",
          "A column (or set of columns) that uniquely identifies each row and cannot be NULL",
          "The first column of every table",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "So2al 3la types: VARCHAR(n) 3ndo limit, TEXT bla limit. F Postgres bjojhom efficient — TEXT mrnah bzf.",
        "text": "What is the difference between VARCHAR(50) and TEXT?",
        "answers": [
          "VARCHAR(50) enforces a 50-character limit, TEXT has no limit",
          "VARCHAR stores numbers, TEXT stores text",
          "TEXT is limited to 50 characters, VARCHAR is unlimited",
          "There is no difference",
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "So2al 3la INSERT INTO ... VALUES. Asasiya — 7fed l ordre: table, columns, VALUES.",
        "text": "Which statement inserts a new row?",
        "code": "??? INTO users (name, email)\nVALUES ('Sara', 'sara@mail.com');",
        "answers": [
          "PUT INTO",
          "CREATE ROW",
          "INSERT INTO",
          "ADD ROW",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "So2al 3la RETURNING: katrje3 values dyal ligne li t-insertat (b7al id jdid) bla ma tdir SELECT moraha. Feature zwina dyal Postgres.",
        "text": "What does the RETURNING clause do?",
        "code": "INSERT INTO users (name)\nVALUES ('Sara')\n??? id;",
        "answers": [
          "Returns only the number of affected rows",
          "Rolls back the statement",
          "Sends results to a file",
          "Returns the specified columns of the rows affected by INSERT/UPDATE/DELETE",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "So2al 3la wa9t: TIMESTAMPTZ (timestamptz) kay7fed instant 7qiqi m3a timezone — dima sta3mlo. TIMESTAMP bla timezone = mochkil f prod.",
        "text": "What is the difference between TIMESTAMP and TIMESTAMPTZ?",
        "answers": [
          "They are identical aliases",
          "TIMESTAMPTZ is for dates only",
          "TIMESTAMP includes milliseconds, TIMESTAMPTZ does not",
          "TIMESTAMPTZ stores a time zone-aware instant; TIMESTAMP stores a naive date-time",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "So2al 3la NOT NULL: l column ma 3ndhach l7e9 tkon NULL — khasha dima valeur.",
        "text": "What does a NOT NULL constraint guarantee?",
        "code": "email VARCHAR(255) ???",
        "answers": [
          "The column cannot be updated",
          "The column must be unique",
          "The column can never contain NULL values",
          "The column gets a default value",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "So2al 3la UNIQUE: ma kaynach duplicate values. Email b7al mithal mzyan l UNIQUE.",
        "text": "What does a UNIQUE constraint enforce?",
        "answers": [
          "Values are stored encrypted",
          "The column cannot contain NULL",
          "The column is the primary key",
          "No two rows can have the same value in that column",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "So2al 3la FOREIGN KEY: katrbet table b table (orders.user_id → users.id). Kat7mi referential integrity.",
        "text": "What is a foreign key?",
        "code": "user_id INT REFERENCES users(id)",
        "answers": [
          "A column that references the primary key of another table, enforcing the relationship",
          "A backup copy of the primary key",
          "A column that must always be NULL",
          "A key used to encrypt foreign data",
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al 3la CASCADE: mli tmes7 parent, children kaytms7o bo7dhom. Rdd balk — 9owiya walakin khatira.",
        "text": "What does ON DELETE CASCADE do on a foreign key?",
        "code": "user_id INT REFERENCES users(id) ???",
        "answers": [
          "Archives the parent row",
          "Automatically deletes child rows when the parent row is deleted",
          "Sets child values to zero",
          "Prevents deleting the parent row",
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al 3la ORDER BY + LIMIT: tartib b ORDER BY created_at DESC, w LIMIT 10 bach takhod ghir 10. OFFSET l pagination.",
        "text": "How do you get the 10 most recent orders?",
        "code": "SELECT * FROM orders\n??? created_at DESC\n??? 10;",
        "answers": [
          "SORT BY ... TOP",
          "FILTER ... TAKE",
          "GROUP BY ... FIRST",
          "ORDER BY ... LIMIT",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al 3la ALTER TABLE ADD COLUMN: katbdl schema dyal table li kayna. Kayn DROP COLUMN w RENAME TO 7ta homa.",
        "text": "How do you add a new column to an existing table?",
        "code": "??? TABLE users\n??? COLUMN phone VARCHAR(20);",
        "answers": [
          "UPDATE TABLE ... NEW COLUMN",
          "EDIT TABLE ... ADD FIELD",
          "ALTER TABLE ... ADD COLUMN",
          "MODIFY TABLE ... INSERT COLUMN",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "So2al 3la COUNT: COUNT(*) = ga3 l rows, COUNT(col) = ghir li machi NULL. Far9 mohim m3a NULLs.",
        "text": "What is the difference between COUNT(*) and COUNT(email)?",
        "answers": [
          "COUNT(*) is slower",
          "COUNT(email) counts all rows including NULLs",
          "They always return the same result",
          "COUNT(*) counts all rows; COUNT(email) skips rows where email is NULL",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al 3la sequences: nextval('seq') kat3ti l9ima jaya w katzidha. currval kat3ti l7aliya (khas nextval tkon t3aytat f session).",
        "text": "How do you get the next value from a sequence?",
        "code": "SELECT ???('user_id_seq');",
        "answers": [
          "nextval",
          "getval",
          "seq_next",
          "currval",
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al 3la JSONB: binary format, kat-tindexa w kat-t9leb fiha b sor3a. JSON 3adi ghir text. Dima JSONB f Postgres.",
        "text": "What is the difference between JSON and JSONB?",
        "answers": [
          "JSONB stores data in a decomposed binary format that supports indexing; JSON stores raw text",
          "JSONB cannot be queried",
          "They are identical",
          "JSON is binary and JSONB is text",
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "So2al 3la operators: -> katrje3 JSON, ->> katrje3 text (string). Mli bghiti t9arn b string sta3ml ->>.",
        "text": "What is the difference between the -> and ->> operators?",
        "code": "SELECT data->'name', data->>'name' FROM users;",
        "answers": [
          "-> returns a JSON value, ->> returns text",
          "No difference",
          "-> deletes the key, ->> renames it",
          "->> returns JSON, -> returns text",
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al 3la @>: containment — wach JSONB lkbira fiha had l joza2. Mzyana bzf m3a GIN index.",
        "text": "What does the @> operator test on a JSONB column?",
        "code": "SELECT * FROM products\nWHERE specs @> '{\"color\": \"red\"}';",
        "answers": [
          "Whether the two values are equal",
          "String pattern matching",
          "Whether the key exists",
          "Whether the left JSONB value contains the right one",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al 3la arrays: Postgres 3ndo native array types — TEXT[], INT[]. Feature nadir f databases lokhrin.",
        "text": "How do you declare a column that holds an array of text?",
        "code": "CREATE TABLE posts (\n  id SERIAL PRIMARY KEY,\n  tags ???\n);",
        "answers": [
          "TEXT_LIST",
          "[TEXT]",
          "TEXT[]",
          "ARRAY<TEXT>",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "So2al 3la unnest: array → rows. L3eks dyal array_agg li katjme3 rows → array.",
        "text": "What does unnest() do?",
        "code": "SELECT unnest(ARRAY['a','b','c']);",
        "answers": [
          "Sorts the array",
          "Expands an array into one row per element",
          "Removes NULLs from an array",
          "Joins array elements into a string",
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "So2al 3la UPSERT: ON CONFLICT (key) DO UPDATE/DO NOTHING. EXCLUDED kat3ni l row li kant ghadi t-insert. 7el zwin l race conditions.",
        "text": "How do you insert a row or update it if the key already exists?",
        "code": "INSERT INTO users (id, email)\nVALUES (1, 'a@mail.com')\n??? (id) DO UPDATE SET email = EXCLUDED.email;",
        "answers": [
          "ON DUPLICATE",
          "MERGE OR INSERT",
          "ON CONFLICT",
          "IF EXISTS UPDATE",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al 3la WITH: CTE = subquery b smiya, katkhli query readable. Kat-t3awed? sta3mlha wast nafs query.",
        "text": "What is a CTE (Common Table Expression)?",
        "code": "WITH active AS (\n  SELECT * FROM users WHERE active = true\n)\nSELECT * FROM active;",
        "answers": [
          "A type of index",
          "A stored procedure",
          "A permanent table",
          "A named temporary result set defined with WITH, usable once in the query",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al 3la window functions: OVER kat7seb 3la rows bla ma tjme3hom (bla GROUP BY). PARTITION BY = group wast window.",
        "text": "What does ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) compute?",
        "answers": [
          "The total number of departments",
          "The average salary per department",
          "A rank number restarting at 1 for each department, ordered by salary",
          "A random number per row",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al 3la indexes: default = B-tree, mzyan l =, <, >, BETWEEN, ORDER BY. Index kat-serre3 l9raya walakin katbtte2 lktaba.",
        "text": "Which index type does CREATE INDEX use by default?",
        "code": "CREATE INDEX idx_email ON users (email);",
        "answers": [
          "BRIN",
          "Hash",
          "B-tree",
          "GIN",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al 3la EXPLAIN: kaywrik plan (Seq Scan wla Index Scan...). L bidaya dyal optimization — chof fin kaydi3 lwa9t.",
        "text": "What does EXPLAIN show you?",
        "code": "EXPLAIN SELECT * FROM users WHERE email = 'a@mail.com';",
        "answers": [
          "The query execution plan without running the query",
          "The table data",
          "The server logs",
          "The query results with timing",
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al 3la GIN: index l composite values (JSONB, arrays, full-text). B-tree ma kaynfa3ch m3a @>.",
        "text": "Which index type should you use for a JSONB column you query with @>?",
        "code": "CREATE INDEX idx_specs ON products USING ??? (specs);",
        "answers": [
          "Hash",
          "GIN",
          "BRIN",
          "B-tree",
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "So2al 3la full-text: to_tsvector kay7wel text l tokens, @@ kat9arn. A7sen bzf mn LIKE l text kbir.",
        "text": "How do you do full-text search in PostgreSQL?",
        "code": "SELECT * FROM articles\nWHERE to_tsvector('english', body) @@ to_tsquery('postgres & tutorial');",
        "answers": [
          "With to_tsvector/to_tsquery and the @@ match operator",
          "With a separate search engine only",
          "Full-text search is not supported",
          "With LIKE '%...%' only",
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "So2al 3la pg_trgm: kat9sem text l trigrams bach t9leb fuzzy (typos). similarity() kat3ti score.",
        "text": "What is the pg_trgm extension used for?",
        "code": "SELECT similarity('hello', 'hallo');",
        "answers": [
          "Trigram-based fuzzy text similarity and fast LIKE/ILIKE searches",
          "Geographic coordinates",
          "Transaction management",
          "Trigger management",
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al 3la EXPLAIN ANALYZE: kay-executa b se7 w kaywrik actual time w rows. Rdd balk: kay-executa INSERT/UPDATE/DELETE b se7!",
        "text": "What is the difference between EXPLAIN and EXPLAIN ANALYZE?",
        "answers": [
          "They are identical",
          "EXPLAIN runs the query, ANALYZE does not",
          "EXPLAIN shows the estimated plan; EXPLAIN ANALYZE actually runs the query and shows real timings",
          "EXPLAIN ANALYZE is faster",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al 3la VACUUM: UPDATE/DELETE ma kayms7och nichan (MVCC) — kaykhliw dead tuples. VACUUM kaynddf. Autovacuum khdam bo7do ghaliban.",
        "text": "Why does PostgreSQL need VACUUM?",
        "answers": [
          "It compresses the database files",
          "It rebuilds all indexes from scratch",
          "MVCC leaves dead row versions behind; VACUUM reclaims their space",
          "It encrypts old data",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al 3la data-modifying CTE: WITH kat9der fiha DELETE/INSERT — mzyana l move data bin tables f query we7da.",
        "text": "Can a CTE modify data?",
        "code": "WITH moved AS (\n  DELETE FROM inbox WHERE old = true\n  RETURNING *\n)\nINSERT INTO archive SELECT * FROM moved;",
        "answers": [
          "No, CTEs are read-only",
          "Only with superuser rights",
          "Only on temporary tables",
          "Yes — data-modifying CTEs can contain INSERT/UPDATE/DELETE with RETURNING",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "So2al 3la FILTER: COUNT(*) FILTER (WHERE ...) — aggregation b chart. N9iya w readable 3la CASE.",
        "text": "How do you aggregate conditionally, e.g. count only active users?",
        "code": "SELECT COUNT(*) ??? (WHERE active = true) FROM users;",
        "answers": [
          "IF",
          "FILTER",
          "CASE WHEN inside COUNT only",
          "HAVING",
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "So2al 3la permissions: GRANT SELECT/INSERT/UPDATE... TO role. REVOKE l l3eks. Roles = users/groups f Postgres.",
        "text": "How do you give a role read access to a table?",
        "code": "??? SELECT ON users TO analyst;",
        "answers": [
          "GRANT",
          "PERMIT",
          "ALLOW",
          "SHARE",
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "So2al 3la backup: pg_dump mydb > backup.sql. Restore b psql mydb < backup.sql. Kayn pg_dumpall l kolchi.",
        "text": "Which tool creates a logical backup of a database?",
        "code": "??? mydb > backup.sql",
        "answers": [
          "pg_backup",
          "pg_dump",
          "psql --backup",
          "pg_copy",
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al 3la LATERAL: subquery f FROM kat9der tsta3ml columns dyal table li 9belha — b7al loop 3la kol row.",
        "text": "What is a LATERAL join?",
        "code": "SELECT u.name, o.total\nFROM users u,\nLATERAL (SELECT SUM(amount) AS total FROM orders WHERE user_id = u.id) o;",
        "answers": [
          "A synonym for LEFT JOIN",
          "A faster type of index",
          "A join that runs in parallel",
          "A subquery in FROM that can reference columns of preceding tables",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al 3la isolation: default = READ COMMITTED (katshof ghir committed data). SERIALIZABLE l strict — walakin ghali.",
        "text": "Which is the default transaction isolation level in PostgreSQL?",
        "answers": [
          "SERIALIZABLE",
          "READ UNCOMMITTED",
          "READ COMMITTED",
          "REPEATABLE READ",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al 3la advisory locks: locks b numbers (machi tables) — l app kat-tfa9 bihom (b7al 'job X khdam'). pg_advisory_unlock l t7al.",
        "text": "What are advisory locks used for?",
        "code": "SELECT pg_advisory_lock(123);",
        "answers": [
          "Locking the whole database",
          "Encrypting connections",
          "Application-level locking coordinated through the database without locking rows",
          "Backing up a single table",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "So2al 3la partitioning: PARTITION BY RANGE/LIST/HASH — table kbira kat-t9sem. Queries kat-mchi ghir l partitions li khasha (pruning).",
        "text": "How do you partition a large table by date range?",
        "code": "CREATE TABLE events (\n  id SERIAL, created_at DATE\n) PARTITION BY ??? (created_at);",
        "answers": [
          "SPLIT",
          "DATES",
          "TIME",
          "RANGE",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al 3la BRIN: index sghir bzf l tables kbar mratbin (time-series). Ma kaynfa3ch m3a data mkhallta.",
        "text": "When is a BRIN index a good choice?",
        "answers": [
          "For exact-match on UUIDs",
          "For very large tables where rows are naturally ordered (e.g. by time)",
          "For JSONB columns",
          "For small lookup tables",
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "So2al 3la recursive CTE: kat3ayet l rasha — l trees w hierarchies (manager → employees). Base case + recursive step.",
        "text": "What does WITH RECURSIVE allow?",
        "answers": [
          "Faster sorting",
          "Hierarchical/graph traversal queries, like org charts or category trees",
          "Replication",
          "Automatic backups",
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al 3la materialized view: resultat m7fod — sri3a l queries t9al, walakin data 9dima 7ta REFRESH MATERIALIZED VIEW.",
        "text": "What is a materialized view?",
        "code": "CREATE MATERIALIZED VIEW sales_by_day AS\nSELECT day, SUM(amount) FROM sales GROUP BY day;",
        "answers": [
          "A backup of a table",
          "A cached query result stored as a table, refreshed explicitly with REFRESH",
          "A temporary table",
          "A view that updates in real time",
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "So2al 3la EXCLUDED: hiya l row jdida li t-blokat b conflict. Katsta3mlha f DO UPDATE bach takhod values jdad.",
        "text": "In ON CONFLICT DO UPDATE, what does EXCLUDED refer to?",
        "code": "INSERT INTO users (id, email) VALUES (1, 'b@mail.com')\nON CONFLICT (id) DO UPDATE SET email = EXCLUDED.email;",
        "answers": [
          "The deleted rows",
          "The existing conflicting row",
          "All rows in the table",
          "The row as it would have been inserted (the proposed new values)",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al 3la LISTEN/NOTIFY: Postgres fih messaging dakhel! Session kat-sift NOTIFY, lokhrin li dayrin LISTEN kay-wslhom. Mzyan l realtime.",
        "text": "What are LISTEN and NOTIFY used for?",
        "code": "LISTEN orders_channel;\n-- another session:\nNOTIFY orders_channel, 'new order 42';",
        "answers": [
          "Full-text search",
          "Backup notifications",
          "Asynchronous pub/sub messaging between database sessions",
          "Email sending",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al 3la WAL: kol change kay-tktb f log 9bel data — ila crash, kay-rje3 bih. Howa li kay-khdem replication w point-in-time recovery.",
        "text": "What is the WAL (Write-Ahead Log)?",
        "answers": [
          "A user activity audit file",
          "An append-only log of changes written before data pages, enabling crash recovery and replication",
          "A slow query log",
          "The transaction isolation log",
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "So2al 3la GiST: l geometric (PostGIS), ranges, w full-text. GIN l JSONB/arrays b dabt. L far9: GiST lossy, GIN precise.",
        "text": "GiST vs GIN — when would you pick GiST?",
        "answers": [
          "For exact JSONB containment queries",
          "GiST is never useful",
          "For primary keys",
          "For geometric, range, and full-text data where lossy compression of the indexed value is fine",
        ],
        "correct": 3,
        "selection": null
      },
    ]
  },
  {
    "lang": "FR",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "So2al 3la PostgreSQL: ORDBMS open-source, 9wi bzf — JSONB, CTEs, window functions. L monafis dyal MySQL l 7orr.",
        "text": "Qu'est-ce que PostgreSQL ?",
        "answers": [
          "Une plateforme d'hébergement cloud",
          "Une base de données NoSQL orientée documents",
          "Un runtime JavaScript",
          "Un système de gestion de base de données objet-relationnel open-source",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al 3la port: PostgreSQL = 5432. MySQL = 3306, MongoDB = 27017. 7fed had l ar9am.",
        "text": "Quel est le port par défaut de PostgreSQL ?",
        "answers": [
          "3306",
          "8080",
          "27017",
          "5432",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al 3la psql: psql -U user -d db. -U = user, -d = database. psql howa CLI dyal Postgres.",
        "text": "Quelle commande permet de se connecter à une base avec psql ?",
        "code": "psql ???",
        "answers": [
          "psql -U myuser -d mydb",
          "postgres open mydb",
          "pg-connect -u myuser mydb",
          "psql --connect myuser:mydb",
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al 3la psql meta-commands: \\l = list databases, \\dt = tables, \\c = connect db, \\q = quit. Kolhom kaybdaw b backslash.",
        "text": "Dans psql, quelle méta-commande liste toutes les bases de données ?",
        "code": "mydb=> ???",
        "answers": [
          "\\l",
          "\\c",
          "\\q",
          "\\dt",
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "So2al 3la \\dt: katwrik tables. \\d table = description dyal table wa7da, \\du = users/roles.",
        "text": "Dans psql, quelle méta-commande liste toutes les tables ?",
        "code": "mydb=> ???",
        "answers": [
          "\\du",
          "\\dt",
          "\\d",
          "\\dt",
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "So2al 3la SERIAL: integer kaytzad bo7do (sequence ldakhel). B7al AUTO_INCREMENT dyal MySQL. Kayn SMALLSERIAL w BIGSERIAL.",
        "text": "Que fait le pseudo-type SERIAL ?",
        "code": "id SERIAL PRIMARY KEY",
        "answers": [
          "Crée une colonne entière auto-incrémentée adossée à une séquence",
          "Chiffre les valeurs de la colonne",
          "Stocke des données JSON sérialisées",
          "Crée une colonne texte de longueur fixe",
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al 3la CREATE TABLE: syntax asasiya. Rdd balk l types w PRIMARY KEY.",
        "text": "Quelle instruction crée une nouvelle table ?",
        "code": "??? TABLE users (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(100)\n);",
        "answers": [
          "CREATE TABLE",
          "MAKE TABLE",
          "NEW TABLE",
          "BUILD TABLE",
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "So2al 3la PRIMARY KEY: unique + NOT NULL, kat3ref kol ligne. Table wa7da = PK wa7da.",
        "text": "Qu'est-ce qu'une clé primaire ?",
        "answers": [
          "Un mot de passe protégeant la table",
          "La première colonne de chaque table",
          "Un index utilisé uniquement pour le tri",
          "Une colonne (ou ensemble de colonnes) qui identifie chaque ligne de façon unique et ne peut pas être NULL",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "So2al 3la types: VARCHAR(n) 3ndo limit, TEXT bla limit. F Postgres bjojhom efficient — TEXT mrnah bzf.",
        "text": "Quelle est la différence entre VARCHAR(50) et TEXT ?",
        "answers": [
          "VARCHAR stocke des nombres, TEXT stocke du texte",
          "Il n'y a aucune différence",
          "TEXT est limité à 50 caractères, VARCHAR est illimité",
          "VARCHAR(50) impose une limite de 50 caractères, TEXT n'a pas de limite",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "So2al 3la INSERT INTO ... VALUES. Asasiya — 7fed l ordre: table, columns, VALUES.",
        "text": "Quelle instruction insère une nouvelle ligne ?",
        "code": "??? INTO users (name, email)\nVALUES ('Sara', 'sara@mail.com');",
        "answers": [
          "CREATE ROW",
          "INSERT INTO",
          "PUT INTO",
          "ADD ROW",
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "So2al 3la RETURNING: katrje3 values dyal ligne li t-insertat (b7al id jdid) bla ma tdir SELECT moraha. Feature zwina dyal Postgres.",
        "text": "Que fait la clause RETURNING ?",
        "code": "INSERT INTO users (name)\nVALUES ('Sara')\n??? id;",
        "answers": [
          "Annule l'instruction",
          "Retourne uniquement le nombre de lignes affectées",
          "Envoie les résultats dans un fichier",
          "Retourne les colonnes indiquées des lignes affectées par INSERT/UPDATE/DELETE",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "So2al 3la wa9t: TIMESTAMPTZ (timestamptz) kay7fed instant 7qiqi m3a timezone — dima sta3mlo. TIMESTAMP bla timezone = mochkil f prod.",
        "text": "Quelle est la différence entre TIMESTAMP et TIMESTAMPTZ ?",
        "answers": [
          "Ce sont des alias identiques",
          "TIMESTAMPTZ est pour les dates uniquement",
          "TIMESTAMPTZ stocke un instant avec fuseau horaire ; TIMESTAMP stocke une date-heure naïve",
          "TIMESTAMP inclut les millisecondes, pas TIMESTAMPTZ",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "So2al 3la NOT NULL: l column ma 3ndhach l7e9 tkon NULL — khasha dima valeur.",
        "text": "Que garantit une contrainte NOT NULL ?",
        "code": "email VARCHAR(255) ???",
        "answers": [
          "La colonne doit être unique",
          "La colonne ne peut pas être mise à jour",
          "La colonne ne peut jamais contenir de valeurs NULL",
          "La colonne reçoit une valeur par défaut",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "So2al 3la UNIQUE: ma kaynach duplicate values. Email b7al mithal mzyan l UNIQUE.",
        "text": "Qu'impose une contrainte UNIQUE ?",
        "answers": [
          "Deux lignes ne peuvent pas avoir la même valeur dans cette colonne",
          "La colonne est la clé primaire",
          "La colonne ne peut pas contenir NULL",
          "Les valeurs sont stockées chiffrées",
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "So2al 3la FOREIGN KEY: katrbet table b table (orders.user_id → users.id). Kat7mi referential integrity.",
        "text": "Qu'est-ce qu'une clé étrangère ?",
        "code": "user_id INT REFERENCES users(id)",
        "answers": [
          "Une colonne qui doit toujours être NULL",
          "Une colonne qui référence la clé primaire d'une autre table, imposant la relation",
          "Une clé pour chiffrer des données étrangères",
          "Une copie de sauvegarde de la clé primaire",
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al 3la CASCADE: mli tmes7 parent, children kaytms7o bo7dhom. Rdd balk — 9owiya walakin khatira.",
        "text": "Que fait ON DELETE CASCADE sur une clé étrangère ?",
        "code": "user_id INT REFERENCES users(id) ???",
        "answers": [
          "Met les valeurs enfants à zéro",
          "Empêche la suppression de la ligne parente",
          "Supprime automatiquement les lignes enfants quand la ligne parente est supprimée",
          "Archive la ligne parente",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al 3la ORDER BY + LIMIT: tartib b ORDER BY created_at DESC, w LIMIT 10 bach takhod ghir 10. OFFSET l pagination.",
        "text": "Comment obtenir les 10 commandes les plus récentes ?",
        "code": "SELECT * FROM orders\n??? created_at DESC\n??? 10;",
        "answers": [
          "SORT BY ... TOP",
          "GROUP BY ... FIRST",
          "ORDER BY ... LIMIT",
          "FILTER ... TAKE",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al 3la ALTER TABLE ADD COLUMN: katbdl schema dyal table li kayna. Kayn DROP COLUMN w RENAME TO 7ta homa.",
        "text": "Comment ajouter une colonne à une table existante ?",
        "code": "??? TABLE users\n??? COLUMN phone VARCHAR(20);",
        "answers": [
          "EDIT TABLE ... ADD FIELD",
          "UPDATE TABLE ... NEW COLUMN",
          "MODIFY TABLE ... INSERT COLUMN",
          "ALTER TABLE ... ADD COLUMN",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "So2al 3la COUNT: COUNT(*) = ga3 l rows, COUNT(col) = ghir li machi NULL. Far9 mohim m3a NULLs.",
        "text": "Quelle est la différence entre COUNT(*) et COUNT(email) ?",
        "answers": [
          "COUNT(*) compte toutes les lignes ; COUNT(email) ignore les lignes où email est NULL",
          "COUNT(*) est plus lent",
          "Ils retournent toujours le même résultat",
          "COUNT(email) compte toutes les lignes y compris les NULL",
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al 3la sequences: nextval('seq') kat3ti l9ima jaya w katzidha. currval kat3ti l7aliya (khas nextval tkon t3aytat f session).",
        "text": "Comment obtenir la prochaine valeur d'une séquence ?",
        "code": "SELECT ???('user_id_seq');",
        "answers": [
          "getval",
          "nextval",
          "seq_next",
          "currval",
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al 3la JSONB: binary format, kat-tindexa w kat-t9leb fiha b sor3a. JSON 3adi ghir text. Dima JSONB f Postgres.",
        "text": "Quelle est la différence entre JSON et JSONB ?",
        "answers": [
          "JSONB ne peut pas être interrogé",
          "JSON est binaire et JSONB est texte",
          "Ils sont identiques",
          "JSONB stocke les données en binaire décomposé et supporte les index ; JSON stocke du texte brut",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "So2al 3la operators: -> katrje3 JSON, ->> katrje3 text (string). Mli bghiti t9arn b string sta3ml ->>.",
        "text": "Quelle est la différence entre les opérateurs -> et ->> ?",
        "code": "SELECT data->'name', data->>'name' FROM users;",
        "answers": [
          "->> retourne du JSON, -> retourne du texte",
          "Aucune différence",
          "-> retourne une valeur JSON, ->> retourne du texte",
          "-> supprime la clé, ->> la renomme",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al 3la @>: containment — wach JSONB lkbira fiha had l joza2. Mzyana bzf m3a GIN index.",
        "text": "Que teste l'opérateur @> sur une colonne JSONB ?",
        "code": "SELECT * FROM products\nWHERE specs @> '{\"color\": \"red\"}';",
        "answers": [
          "Si la clé existe",
          "Correspondance de motif texte",
          "Si la valeur JSONB de gauche contient celle de droite",
          "Si les deux valeurs sont égales",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al 3la arrays: Postgres 3ndo native array types — TEXT[], INT[]. Feature nadir f databases lokhrin.",
        "text": "Comment déclarer une colonne contenant un tableau de texte ?",
        "code": "CREATE TABLE posts (\n  id SERIAL PRIMARY KEY,\n  tags ???\n);",
        "answers": [
          "TEXT_LIST",
          "TEXT[]",
          "[TEXT]",
          "ARRAY<TEXT>",
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "So2al 3la unnest: array → rows. L3eks dyal array_agg li katjme3 rows → array.",
        "text": "Que fait unnest() ?",
        "code": "SELECT unnest(ARRAY['a','b','c']);",
        "answers": [
          "Joint les éléments en une chaîne",
          "Déplie un tableau en une ligne par élément",
          "Supprime les NULL du tableau",
          "Trie le tableau",
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "So2al 3la UPSERT: ON CONFLICT (key) DO UPDATE/DO NOTHING. EXCLUDED kat3ni l row li kant ghadi t-insert. 7el zwin l race conditions.",
        "text": "Comment insérer une ligne ou la mettre à jour si la clé existe déjà ?",
        "code": "INSERT INTO users (id, email)\nVALUES (1, 'a@mail.com')\n??? (id) DO UPDATE SET email = EXCLUDED.email;",
        "answers": [
          "IF EXISTS UPDATE",
          "MERGE OR INSERT",
          "ON DUPLICATE",
          "ON CONFLICT",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al 3la WITH: CTE = subquery b smiya, katkhli query readable. Kat-t3awed? sta3mlha wast nafs query.",
        "text": "Qu'est-ce qu'une CTE (Common Table Expression) ?",
        "code": "WITH active AS (\n  SELECT * FROM users WHERE active = true\n)\nSELECT * FROM active;",
        "answers": [
          "Une table permanente",
          "Un type d'index",
          "Une procédure stockée",
          "Un jeu de résultats temporaire nommé, défini avec WITH, utilisable une fois dans la requête",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al 3la window functions: OVER kat7seb 3la rows bla ma tjme3hom (bla GROUP BY). PARTITION BY = group wast window.",
        "text": "Que calcule ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) ?",
        "answers": [
          "Le nombre total de départements",
          "Un nombre aléatoire par ligne",
          "Le salaire moyen par département",
          "Un numéro de rang qui recommence à 1 pour chaque département, ordonné par salaire",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al 3la indexes: default = B-tree, mzyan l =, <, >, BETWEEN, ORDER BY. Index kat-serre3 l9raya walakin katbtte2 lktaba.",
        "text": "Quel type d'index CREATE INDEX utilise-t-il par défaut ?",
        "code": "CREATE INDEX idx_email ON users (email);",
        "answers": [
          "B-tree",
          "GIN",
          "Hash",
          "BRIN",
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al 3la EXPLAIN: kaywrik plan (Seq Scan wla Index Scan...). L bidaya dyal optimization — chof fin kaydi3 lwa9t.",
        "text": "Que montre EXPLAIN ?",
        "code": "EXPLAIN SELECT * FROM users WHERE email = 'a@mail.com';",
        "answers": [
          "Les logs du serveur",
          "Le plan d'exécution de la requête sans l'exécuter",
          "Les résultats avec timing",
          "Les données de la table",
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al 3la GIN: index l composite values (JSONB, arrays, full-text). B-tree ma kaynfa3ch m3a @>.",
        "text": "Quel type d'index pour une colonne JSONB interrogée avec @> ?",
        "code": "CREATE INDEX idx_specs ON products USING ??? (specs);",
        "answers": [
          "Hash",
          "GIN",
          "BRIN",
          "B-tree",
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "So2al 3la full-text: to_tsvector kay7wel text l tokens, @@ kat9arn. A7sen bzf mn LIKE l text kbir.",
        "text": "Comment faire de la recherche plein texte dans PostgreSQL ?",
        "code": "SELECT * FROM articles\nWHERE to_tsvector('english', body) @@ to_tsquery('postgres & tutorial');",
        "answers": [
          "Avec to_tsvector/to_tsquery et l'opérateur @@",
          "La recherche plein texte n'est pas supportée",
          "Uniquement avec LIKE '%...%'",
          "Uniquement avec un moteur externe",
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "So2al 3la pg_trgm: kat9sem text l trigrams bach t9leb fuzzy (typos). similarity() kat3ti score.",
        "text": "À quoi sert l'extension pg_trgm ?",
        "code": "SELECT similarity('hello', 'hallo');",
        "answers": [
          "Similarité floue par trigrammes et recherches LIKE/ILIKE rapides",
          "Gestion des triggers",
          "Coordonnées géographiques",
          "Gestion des transactions",
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al 3la EXPLAIN ANALYZE: kay-executa b se7 w kaywrik actual time w rows. Rdd balk: kay-executa INSERT/UPDATE/DELETE b se7!",
        "text": "Quelle est la différence entre EXPLAIN et EXPLAIN ANALYZE ?",
        "answers": [
          "EXPLAIN ANALYZE est plus rapide",
          "EXPLAIN exécute, ANALYZE non",
          "EXPLAIN montre le plan estimé ; EXPLAIN ANALYZE exécute vraiment la requête avec les temps réels",
          "Ils sont identiques",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al 3la VACUUM: UPDATE/DELETE ma kayms7och nichan (MVCC) — kaykhliw dead tuples. VACUUM kaynddf. Autovacuum khdam bo7do ghaliban.",
        "text": "Pourquoi PostgreSQL a besoin de VACUUM ?",
        "answers": [
          "Il chiffre les anciennes données",
          "Il reconstruit tous les index",
          "MVCC laisse des versions mortes de lignes ; VACUUM récupère leur espace",
          "Il compresse les fichiers",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al 3la data-modifying CTE: WITH kat9der fiha DELETE/INSERT — mzyana l move data bin tables f query we7da.",
        "text": "Une CTE peut-elle modifier des données ?",
        "code": "WITH moved AS (\n  DELETE FROM inbox WHERE old = true\n  RETURNING *\n)\nINSERT INTO archive SELECT * FROM moved;",
        "answers": [
          "Non, les CTE sont en lecture seule",
          "Uniquement sur tables temporaires",
          "Oui — les CTE modifiantes peuvent contenir INSERT/UPDATE/DELETE avec RETURNING",
          "Uniquement en superuser",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "So2al 3la FILTER: COUNT(*) FILTER (WHERE ...) — aggregation b chart. N9iya w readable 3la CASE.",
        "text": "Comment agréger conditionnellement, ex. compter que les actifs ?",
        "code": "SELECT COUNT(*) ??? (WHERE active = true) FROM users;",
        "answers": [
          "IF",
          "FILTER",
          "CASE WHEN dans COUNT uniquement",
          "HAVING",
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "So2al 3la permissions: GRANT SELECT/INSERT/UPDATE... TO role. REVOKE l l3eks. Roles = users/groups f Postgres.",
        "text": "Comment donner un accès lecture à un rôle sur une table ?",
        "code": "??? SELECT ON users TO analyst;",
        "answers": [
          "ALLOW",
          "SHARE",
          "PERMIT",
          "GRANT",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "So2al 3la backup: pg_dump mydb > backup.sql. Restore b psql mydb < backup.sql. Kayn pg_dumpall l kolchi.",
        "text": "Quel outil crée une sauvegarde logique d'une base ?",
        "code": "??? mydb > backup.sql",
        "answers": [
          "psql --backup",
          "pg_copy",
          "pg_dump",
          "pg_backup",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al 3la LATERAL: subquery f FROM kat9der tsta3ml columns dyal table li 9belha — b7al loop 3la kol row.",
        "text": "Qu'est-ce qu'une jointure LATERAL ?",
        "code": "SELECT u.name, o.total\nFROM users u,\nLATERAL (SELECT SUM(amount) AS total FROM orders WHERE user_id = u.id) o;",
        "answers": [
          "Une jointure parallèle",
          "Une sous-requête dans FROM qui peut référencer les colonnes des tables précédentes",
          "Un synonyme de LEFT JOIN",
          "Un type d'index plus rapide",
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al 3la isolation: default = READ COMMITTED (katshof ghir committed data). SERIALIZABLE l strict — walakin ghali.",
        "text": "Quel est le niveau d'isolation par défaut dans PostgreSQL ?",
        "answers": [
          "SERIALIZABLE",
          "READ COMMITTED",
          "REPEATABLE READ",
          "READ UNCOMMITTED",
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al 3la advisory locks: locks b numbers (machi tables) — l app kat-tfa9 bihom (b7al 'job X khdam'). pg_advisory_unlock l t7al.",
        "text": "À quoi servent les verrous consultatifs (advisory locks) ?",
        "code": "SELECT pg_advisory_lock(123);",
        "answers": [
          "Sauvegarder une table",
          "Verrouiller toute la base",
          "Chiffrer les connexions",
          "Verrouillage au niveau applicatif coordonné via la base, sans verrouiller de lignes",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "So2al 3la partitioning: PARTITION BY RANGE/LIST/HASH — table kbira kat-t9sem. Queries kat-mchi ghir l partitions li khasha (pruning).",
        "text": "Comment partitionner une grande table par plage de dates ?",
        "code": "CREATE TABLE events (\n  id SERIAL, created_at DATE\n) PARTITION BY ??? (created_at);",
        "answers": [
          "SPLIT",
          "DATES",
          "RANGE",
          "TIME",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al 3la BRIN: index sghir bzf l tables kbar mratbin (time-series). Ma kaynfa3ch m3a data mkhallta.",
        "text": "Quand un index BRIN est-il un bon choix ?",
        "answers": [
          "Pour de très grandes tables aux lignes naturellement ordonnées (ex. par date)",
          "Pour colonnes JSONB",
          "Pour recherche exacte sur UUID",
          "Pour petites tables",
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "So2al 3la recursive CTE: kat3ayet l rasha — l trees w hierarchies (manager → employees). Base case + recursive step.",
        "text": "Que permet WITH RECURSIVE ?",
        "answers": [
          "Requêtes hiérarchiques/graphe, comme organigrammes ou arbres de catégories",
          "Réplication",
          "Sauvegardes auto",
          "Tri plus rapide",
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al 3la materialized view: resultat m7fod — sri3a l queries t9al, walakin data 9dima 7ta REFRESH MATERIALIZED VIEW.",
        "text": "Qu'est-ce qu'une vue matérialisée ?",
        "code": "CREATE MATERIALIZED VIEW sales_by_day AS\nSELECT day, SUM(amount) FROM sales GROUP BY day;",
        "answers": [
          "Une sauvegarde de table",
          "Un résultat de requête mis en cache comme une table, rafraîchi via REFRESH",
          "Une vue temps réel",
          "Une table temporaire",
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "So2al 3la EXCLUDED: hiya l row jdida li t-blokat b conflict. Katsta3mlha f DO UPDATE bach takhod values jdad.",
        "text": "Dans ON CONFLICT DO UPDATE, que désigne EXCLUDED ?",
        "code": "INSERT INTO users (id, email) VALUES (1, 'b@mail.com')\nON CONFLICT (id) DO UPDATE SET email = EXCLUDED.email;",
        "answers": [
          "Toutes les lignes",
          "Les lignes supprimées",
          "La ligne existante en conflit",
          "La ligne telle qu'elle aurait été insérée (les nouvelles valeurs proposées)",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al 3la LISTEN/NOTIFY: Postgres fih messaging dakhel! Session kat-sift NOTIFY, lokhrin li dayrin LISTEN kay-wslhom. Mzyan l realtime.",
        "text": "À quoi servent LISTEN et NOTIFY ?",
        "code": "LISTEN orders_channel;\n-- another session:\nNOTIFY orders_channel, 'new order 42';",
        "answers": [
          "Recherche plein texte",
          "Envoi d'emails",
          "Notifications de backup",
          "Messagerie pub/sub asynchrone entre sessions",
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al 3la WAL: kol change kay-tktb f log 9bel data — ila crash, kay-rje3 bih. Howa li kay-khdem replication w point-in-time recovery.",
        "text": "Qu'est-ce que le WAL (Write-Ahead Log) ?",
        "answers": [
          "Un fichier d'audit",
          "Un log de requêtes lentes",
          "Un journal des modifications écrit avant les pages de données, pour reprise sur panne et réplication",
          "Le log d'isolation",
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "So2al 3la GiST: l geometric (PostGIS), ranges, w full-text. GIN l JSONB/arrays b dabt. L far9: GiST lossy, GIN precise.",
        "text": "GiST vs GIN — quand choisir GiST ?",
        "answers": [
          "GiST n'est jamais utile",
          "Pour containment JSONB exact",
          "Pour clés primaires",
          "Pour données géométriques, plages et plein texte quand une compression avec perte convient",
        ],
        "correct": 3,
        "selection": null
      },
    ]
  }
];
