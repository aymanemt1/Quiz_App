export const sqlQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la WHERE: ch7al user ghadi y7a9a9 l condition dyal age > 30? 9ra l tableau mzyan w filter ghir l rows li kat7a9a9 l condition.",
        "text": "What does this query return?",
        "code": "users\nid | name | age\n1  | Sara | 28\n2  | Omar | 35\n3  | Lina | 42\n\nSELECT name FROM users WHERE age > 30;",
        "answers": [
          "Sara, Omar",
          "Sara, Lina",
          "Omar, Lina",
          "All three names"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al 3la ORDER BY: DESC kay3ni mn l kbir l sghir, w WHERE price <= 10 kat-filter lwl. Rtab l prices li b9aw mn l kbir l sghir.",
        "text": "In which order are the names returned?",
        "code": "products\nid | name     | price\n1  | Pen      | 2\n2  | Notebook | 5\n3  | Bag      | 20\n\nSELECT name FROM products WHERE price <= 10 ORDER BY price DESC;",
        "answers": [
          "Notebook, Pen",
          "Pen, Notebook",
          "Bag, Notebook",
          "Notebook, Bag"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al 3la COUNT(*): l star (*) kay3ni ga3 rows bla ma y7s b l content dyalhom. Fker: ch7al row kayna f total f l table?",
        "text": "What does the query return?",
        "code": "orders contains 5 rows.\n\nSELECT COUNT(*) AS total FROM orders;",
        "answers": [
          "The 5 rows",
          "0",
          "An error",
          "5"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al 3la DISTINCT: had l keyword kat7iyed l duplicates mn l resultat. 7sab ch7al city mkhtalfa kayna, machi ch7al row.",
        "text": "How many rows are returned?",
        "code": "customers\nname  | city\nSara  | Paris\nOmar  | Lyon\nLina  | Paris\nKarim | Madrid\n\nSELECT DISTINCT city FROM customers;",
        "answers": [
          "4",
          "3",
          "1",
          "2"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "So2al 3la BETWEEN: had l operator kaydkhol l limits b7alhum (inclusive) — 3000 w 5000 dakhlin. Fker chkon l query li kat-ghetti had l range.",
        "text": "Which query returns employees earning between 3000 and 5000 (inclusive)?",
        "answers": [
          "SELECT * FROM employees WHERE salary BETWEEN 3000 AND 5000;",
          "SELECT * FROM employees WHERE salary > 3000 AND salary > 5000;",
          "SELECT * FROM employees WHERE salary IN (3000, 5000);",
          "SELECT * FROM employees WHERE salary = 3000-5000;"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "So2al 3la LIKE: l '%' f pattern 'A%' kay3ni 'kaybda b A w morah ay 7aja'. Fker l far9 bin 'kaybda b' w 'kay7tawi 3la'.",
        "text": "Which names are returned?",
        "code": "users\nname\nAmine\nSara\nAli\nKarim\n\nSELECT name FROM users WHERE name LIKE 'A%';",
        "answers": [
          "Amine only",
          "Sara, Ali",
          "Amine, Ali",
          "All four"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al 3la syntax error: 9ra l SELECT list mzyan — chnu na9s bin name w price? SQL kaytlb separator bin l columns.",
        "text": "Why does this query fail?",
        "code": "SELECT name price FROM products;",
        "answers": [
          "price is a reserved word",
          "Missing comma between name and price",
          "SELECT needs a WHERE clause",
          "Table name must be quoted"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "So2al 3la LIMIT: had l clause kat7ded l 7ad l a9sa dyal rows li ghadi ybanu f l resultat. Fker chnu kay3ni LIMIT 3.",
        "text": "How many rows are returned?",
        "code": "users contains 10 rows.\n\nSELECT * FROM users LIMIT 3;",
        "answers": [
          "10",
          "0",
          "1",
          "3"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "So2al 3la NULL: tdkker blli NULL machi value 3adiya — kayt-test ghir b IS NULL, machi b '='. Chkon li email dyalo NULL f l tableau?",
        "text": "Which name is returned?",
        "code": "users\nname | email\nSara | sara@x.com\nOmar | NULL\nLina | lina@x.com\n\nSELECT name FROM users WHERE email IS NULL;",
        "answers": [
          "Sara",
          "Lina",
          "Omar",
          "Nobody"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "So2al 3la DELETE bla WHERE: had l command khatira bzaf. Fker chnu ghadi yw9a3 l l table kamla ila ma 7dditich chkon li ghadi ytm7a.",
        "text": "A developer runs this to remove one inactive user. What actually happens?",
        "code": "DELETE FROM users;",
        "answers": [
          "All rows in users are deleted",
          "Only inactive users are deleted",
          "Nothing happens without a WHERE confirmation",
          "The table itself is dropped"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "So2al 3la aggregates f WHERE: COUNT(*) kayt7sab mn ba3d l grouping, w WHERE kaykhdm 9bl l grouping. Fker fin khass t7at l condition dyal aggregate.",
        "text": "Why does this query fail?",
        "code": "SELECT department, COUNT(*) FROM employees WHERE COUNT(*) > 5 GROUP BY department;",
        "answers": [
          "COUNT(*) needs a column name",
          "Aggregate functions cannot be used in WHERE; use HAVING instead",
          "GROUP BY must come before WHERE",
          "department must be in the WHERE clause"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "So2al 3la NULL m3a '=': wach l comparison m3a NULL katrjja3 TRUE wla 7aja khra? Fker l 3-value logic dyal SQL.",
        "text": "What does this query return?",
        "code": "users\nname | email\nSara | sara@x.com\nOmar | NULL\n\nSELECT name FROM users WHERE email = NULL;",
        "answers": [
          "Omar",
          "All users",
          "An error",
          "No rows — NULL must be tested with IS NULL"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "So2al 3la COUNT: l far9 bin COUNT(*) li kat7sab ga3 rows, w COUNT(column) li kat7sab ghir l values li machi NULL. Ch7al email NULL kayna?",
        "text": "What do the two queries return?",
        "code": "users: 4 rows, one of them has email = NULL.\n\nSELECT COUNT(*) FROM users;\nSELECT COUNT(email) FROM users;",
        "answers": [
          "4 and 3",
          "4 and 4",
          "3 and 3",
          "3 and 4"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "So2al 3la ORDER BY b joj columns: lwl kay7km total DESC, w ila tswaw l totals ghadi y7km tani column (created_at ASC). Fker chnu ghadi yw9a3 m3a l totals l mtsawyin.",
        "text": "In which order are the ids returned?",
        "code": "orders\nid | total | created_at\n1  | 50    | 2024-01-02\n2  | 50    | 2024-01-01\n3  | 20    | 2024-01-03\n\nSELECT id FROM orders ORDER BY total DESC, created_at ASC;",
        "answers": [
          "1, 2, 3",
          "3, 1, 2",
          "2, 1, 3",
          "3, 2, 1"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "So2al 3la AND w OR: chkon li kaytrbat lwl f SQL? AND kayrb7 3la OR f precedence. Fker l query b l parentheses li kayftrdhoum SQL.",
        "text": "A developer wants adults living in Paris or Lyon. What is wrong with this query?",
        "code": "SELECT name FROM users WHERE age > 18 AND city = 'Paris' OR city = 'Lyon';",
        "answers": [
          "OR cannot be combined with AND",
          "The query is correct",
          "String values must use double quotes",
          "AND binds tighter than OR, so all Lyon residents are returned regardless of age"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al 3la INSERT: kol pair dyal parentheses f VALUES kat3ni row jdida ghadi tzad. 7sab ch7al pair kayna f l statement.",
        "text": "How many rows are added?",
        "code": "INSERT INTO users (name) VALUES ('Sara'), ('Ali');",
        "answers": [
          "1",
          "2",
          "0 — the syntax is invalid",
          "3"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al 3la expressions f SELECT: SQL kat7sab l 3amaliyat l 7isabiya 3la kol row b7al calculator. Fker price * quantity l kol item.",
        "text": "What totals are returned?",
        "code": "items\nname | price | quantity\nPen  | 2     | 5\nBag  | 20    | 1\n\nSELECT name, price * quantity AS total FROM items;",
        "answers": [
          "Pen: 10, Bag: 20",
          "Pen: 7, Bag: 21",
          "Pen: 2, Bag: 20",
          "An error — * cannot be used in SELECT"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al 3la quoting: 'price' b single quotes hia ghir text (string literal), machi smit l column. Fker chnu ghadi y9arn SQL m3a 100.",
        "text": "Why does this query return no rows even though expensive products exist?",
        "code": "SELECT name FROM products WHERE 'price' > 100;",
        "answers": [
          "Prices are stored as text",
          "WHERE cannot compare numbers",
          "'price' is a string literal, not the column — it compares the text 'price' to 100",
          "Single quotes are required"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "So2al 3la IN: had l operator kay9bl list dyal values. Chof l age dyal kol user wach kayn f l list (20, 25, 30).",
        "text": "Which names are returned?",
        "code": "users\nname  | age\nSara  | 20\nOmar  | 25\nLina  | 30\nKarim | 40\n\nSELECT name FROM users WHERE age IN (20, 25, 30);",
        "answers": [
          "Sara, Omar",
          "Sara, Omar, Lina",
          "Karim",
          "All four"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al 3la DELETE m3a NOW(): expires_at < NOW() kay3ni l sessions li salaw 9bl daba. Chkon li l wa9t dyalo 9dam mn daba?",
        "text": "Which rows are deleted?",
        "code": "sessions\nid | expires_at\n1  | yesterday\n2  | tomorrow\n\nDELETE FROM sessions WHERE expires_at < NOW();",
        "answers": [
          "Both sessions",
          "Only session 2",
          "None — NOW() cannot be used in DELETE",
          "Only session 1"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al 3la INNER JOIN: ghir l rows li 3andhom match f bjoj tables kaybanu f l resultat. Fker: chkon mn users 3andu order, w chkon mn orders ma 3andush user.",
        "text": "Which rows are returned?",
        "code": "users\nid | name\n1  | Sara\n2  | Omar\n\norders\nid  | user_id\n101 | 1\n102 | 1\n103 | 99\n\nSELECT u.name, o.id FROM users u INNER JOIN orders o ON o.user_id = u.id;",
        "answers": [
          "Sara-101, Sara-102, Omar-NULL",
          "All users and all orders",
          "Sara-101, Sara-102",
          "Omar with order 103"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "So2al 3la LEFT JOIN: l table l islamia (users) kaybanu ga3 rows dyalha dima. Fker chnu ghadi yw9a3 l l user li ma 3andu ta order — wach ghadi yban?",
        "text": "Which rows are returned?",
        "code": "users\nid | name\n1  | Sara\n2  | Omar\n\norders\nid  | user_id\n101 | 1\n102 | 1\n103 | 99\n\nSELECT u.name, o.id FROM users u LEFT JOIN orders o ON o.user_id = u.id;",
        "answers": [
          "Sara-101, Sara-102",
          "Sara-101, Sara-102, Omar-NULL",
          "Only Omar-NULL",
          "An error — o.id can be NULL"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al 3la GROUP BY: l rows kat-tjm3o 7asb city, w COUNT(*) kat7sab ch7al row f kol group. 7sab l users dyal kol city b rask.",
        "text": "What does the query return?",
        "code": "users\nname  | city\nSara  | Paris\nOmar  | Lyon\nLina  | Paris\nKarim | Madrid\nAli   | Lyon\nNadia | Paris\n\nSELECT city, COUNT(*) AS n FROM users GROUP BY city;",
        "answers": [
          "Paris: 3, Lyon: 2, Madrid: 1",
          "Paris: 2, Lyon: 2, Madrid: 2",
          "6 rows, one per user",
          "Paris: 3 only"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al 3la HAVING: had l clause hia li kat-filter l groups mn ba3d l grouping, 7it WHERE ma kaykhdmch m3a aggregates. Ch7al group kay7a9a9 COUNT(*) > 3?",
        "text": "Which departments are returned?",
        "code": "employees: IT has 5 people, HR has 2, Sales has 4.\n\nSELECT department FROM employees GROUP BY department HAVING COUNT(*) > 3;",
        "answers": [
          "IT only",
          "IT, HR, Sales",
          "HR, Sales",
          "IT, Sales"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "So2al 3la subquery: l query l dakhilia kat7sab l average lwl, w l query l kharijia kat9arn kol price m3a dik l average. 7sab l average b rask.",
        "text": "Which products are returned?",
        "code": "products\nname | price\nA    | 10\nB    | 20\nC    | 30\nD    | 40\n\nSELECT name FROM products WHERE price > (SELECT AVG(price) FROM products);",
        "answers": [
          "D only",
          "B, C, D",
          "C, D",
          "A, B"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "So2al 3la LEFT JOIN + WHERE: ila drti condition 3la l table l yaminia (orders) f l WHERE, l rows li 3andhom NULL ghadi yt7iyedo. Fker chnu ghadi yw9a3 l l LEFT JOIN.",
        "text": "A developer wants every user with their count of paid orders, including users with zero. What is wrong?",
        "code": "SELECT u.name, COUNT(o.id) AS n\nFROM users u LEFT JOIN orders o ON u.id = o.user_id\nWHERE o.status = 'paid'\nGROUP BY u.name;",
        "answers": [
          "The WHERE clause on the right table turns the LEFT JOIN into an INNER JOIN, dropping users with no paid orders",
          "COUNT(o.id) cannot be used with LEFT JOIN",
          "GROUP BY must include o.status",
          "LEFT JOIN is the wrong join type"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al 3la UNION vs UNION ALL: wa7ed fihom kay7iyed l duplicates w l akhor kaykhlihom kima homa. Fker chkon li kaydir l extra step dyal duplicate elimination.",
        "text": "What is the difference between UNION and UNION ALL in the results?",
        "answers": [
          "UNION ALL removes duplicates; UNION keeps them",
          "UNION removes duplicates; UNION ALL keeps them",
          "There is no difference",
          "UNION sorts, UNION ALL fails"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al 3la AVG m3a GROUP BY: l average kayt7sab l kol group b7alo, machi l kolchi mjmo3. 7sab average dyal IT b7alha w HR b7alha.",
        "text": "What averages are returned?",
        "code": "employees\nname | department | salary\nSara | IT         | 4000\nOmar | IT         | 6000\nLina | HR         | 3000\n\nSELECT department, AVG(salary) AS avg_sal FROM employees GROUP BY department;",
        "answers": [
          "IT: 10000, HR: 3000",
          "IT: 5000 only",
          "A single row: 4333",
          "IT: 5000, HR: 3000"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al 3la rows li ma 3andhomch match: l trick l mchhoura hia LEFT JOIN w t-testi wach l column dyal l table l yaminia NULL. Fker chnu kay3ni o.id IS NULL.",
        "text": "Which query lists customers who have never placed an order?",
        "answers": [
          "SELECT c.name FROM customers c LEFT JOIN orders o ON o.customer_id = c.id WHERE o.id IS NULL;",
          "SELECT c.name FROM customers c INNER JOIN orders o ON o.customer_id = c.id WHERE o.id IS NULL;",
          "SELECT c.name FROM customers c LEFT JOIN orders o ON o.customer_id = c.id WHERE o.id IS NOT NULL;",
          "SELECT c.name FROM customers c, orders o WHERE c.id = o.customer_id;"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al 3la self JOIN: l table kat-join m3a rasha b joj aliases (e w m). Fker manager_id chnu kay3ni — chkon li l manager dyalo hia Sara?",
        "text": "Which names are returned?",
        "code": "employees\nid | name | manager_id\n1  | Sara | NULL\n2  | Omar | 1\n3  | Lina | 1\n\nSELECT e.name FROM employees e JOIN employees m ON e.manager_id = m.id WHERE m.name = 'Sara';",
        "answers": [
          "Sara",
          "Omar only",
          "Omar, Lina",
          "All three"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al 3la NOT IN m3a NULL: ila l subquery rjja3 NULL, chnu ghadi yw9a3 l l logic dyal NOT IN? Fker l 3-value logic — l comparison m3a NULL kaywli UNKNOWN.",
        "text": "What does this query return?",
        "code": "orders\nuser_id\n1\n2\nNULL\n\nSELECT name FROM users WHERE id NOT IN (SELECT user_id FROM orders);",
        "answers": [
          "All users except 1 and 2",
          "Only users 1 and 2",
          "An error",
          "No rows — the NULL in the subquery makes NOT IN evaluate to unknown for every row"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "So2al 3la NOT m3a NULL: ila age NULL, l expression (age > 30) katrjja3 UNKNOWN, w NOT UNKNOWN machi TRUE. Fker chkon li ghadi yban f l resultat.",
        "text": "Which names are returned?",
        "code": "users\nname | age\nSara | 25\nOmar | NULL\nLina | 40\n\nSELECT name FROM users WHERE NOT (age > 30);",
        "answers": [
          "Sara",
          "Sara, Omar",
          "Omar, Lina",
          "Sara, Lina"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "So2al 3la COUNT(column): kat7sab ghir l values li machi NULL. Ch7al email NULL kayna f l 4 users?",
        "text": "What is returned?",
        "code": "users: 4 rows, one has email = NULL.\n\nSELECT COUNT(email) FROM users;",
        "answers": [
          "4",
          "1",
          "3",
          "An error"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al 3la subquery m3a '=': l '=' kaytsana value wa7da. Ila l subquery rjja3 bzaf dyal rows, khass operator li kay9bl list dyal values.",
        "text": "The subquery returns 3 prices. Why does the query fail?",
        "code": "SELECT name FROM products WHERE price = (SELECT price FROM products WHERE category = 'books');",
        "answers": [
          "Subqueries cannot be used with =",
          "= expects a single value; use IN for multiple rows",
          "price must be aliased",
          "The query does not fail"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al 3la correlated subquery: l subquery kat7sab l average dyal l department dyal kol employee b7alo. Fker chkon li l salary dyalo fo9 l average dyal department dyalo.",
        "text": "Which names are returned?",
        "code": "employees\nname  | department | salary\nSara  | IT         | 4000\nOmar  | IT         | 6000\nLina  | HR         | 3000\nKarim | HR         | 3000\n\nSELECT name FROM employees e WHERE salary > (SELECT AVG(salary) FROM employees WHERE department = e.department);",
        "answers": [
          "Omar",
          "Sara, Omar",
          "Omar, Lina",
          "Nobody"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al 3la COUNT m3a LEFT JOIN: COUNT(o.id) kat7sab ghir l values li machi NULL. Fker chnu ghadi yw9a3 l l user li ma 3andu ta order.",
        "text": "What does the query return?",
        "code": "users: Sara (id 1), Omar (id 2)\norders: 2 orders with user_id = 1, none with user_id = 2\n\nSELECT u.name, COUNT(o.id) AS n FROM users u LEFT JOIN orders o ON o.user_id = u.id GROUP BY u.name;",
        "answers": [
          "Sara: 2, Omar: 1",
          "Sara: 2 only",
          "Sara: 2, Omar: NULL",
          "Sara: 2, Omar: 0"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "So2al 3la transactions: ROLLBACK kay7iyed ga3 l changes li w9a3o mn l BEGIN, b7al ma w9a3 walo. Fker chnu ghadi ywli l balance.",
        "text": "The balance was 1000 before. What does the final SELECT show?",
        "code": "BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nROLLBACK;\nSELECT balance FROM accounts WHERE id = 1;",
        "answers": [
          "900",
          "0",
          "1000",
          "An error"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "So2al 3la join bla condition: kol row dyal table a kat-ttzawa7 m3a kol row dyal table b (cross join). Fker: ch7al ghadi ykoun l total dyal l combinations?",
        "text": "The developer forgot the join condition. How many rows are returned?",
        "code": "SELECT * FROM a, b;\n\n-- table a has 3 rows, table b has 4 rows",
        "answers": [
          "7",
          "12",
          "4",
          "0"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "So2al 3la UNION: l SELECTs khasshom ykono compatible. 7sab ch7al column kayrjja3 l query lwl w ch7al kayrjja3 tani query.",
        "text": "Why does this query fail?",
        "code": "SELECT id, name FROM users UNION SELECT id FROM orders;",
        "answers": [
          "UNION cannot combine different tables",
          "id must be aliased",
          "UNION requires ORDER BY",
          "Both SELECTs must return the same number of columns"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al 3la UPDATE: l SET kat-tapply ghir 3la l rows li 7a9a9o l WHERE. Fker chkon li l category dyalo 'books' w chnu ghadi yw9a3 l l prices dyalhom.",
        "text": "What are the prices after the update?",
        "code": "products\nname | price | category\nA    | 10    | books\nB    | 20    | books\nC    | 30    | toys\n\nUPDATE products SET price = price * 1.1 WHERE category = 'books';",
        "answers": [
          "A: 11, B: 22, C: 30",
          "A: 11, B: 22, C: 33",
          "A: 10, B: 20, C: 30",
          "All prices: 11"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al 3la ROW_NUMBER: PARTITION BY kat9sem l data l groups (departments), w ORDER BY salary DESC kat-rank kol group b7alo. Fker chkon l a3la salary f kol department.",
        "text": "Which row gets rn = 1 in each department?",
        "code": "employees\nname | department | salary\nSara | IT         | 4000\nOmar | IT         | 6000\nLina | HR         | 5000\n\nSELECT name, ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rn FROM employees;",
        "answers": [
          "Sara (IT), Lina (HR)",
          "Omar (IT), Lina (HR)",
          "Omar for both",
          "Sara for both"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al 3la CTE (WITH): 'big' hia table mo2a9ata ghir dyal l orders li total > 100. 7sab ch7al order kay7a9a9 l condition.",
        "text": "What is returned?",
        "code": "orders totals: 50, 150, 200, 80\n\nWITH big AS (SELECT * FROM orders WHERE total > 100)\nSELECT COUNT(*) FROM big;",
        "answers": [
          "4",
          "3",
          "2",
          "0"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "So2al 3la CASE: l WHENs kat-tchecko mn lwl l l akhir, w lwl wa7ed li kayt7a9a9 kayrba7. Fker l salary dyal kol wa7ed chkon li kaymatchi lwl.",
        "text": "What grades are returned?",
        "code": "employees\nname | salary\nSara | 3000\nOmar | 7000\nLina | 12000\n\nSELECT name, CASE WHEN salary < 5000 THEN 'junior' WHEN salary < 10000 THEN 'senior' ELSE 'lead' END AS grade FROM employees;",
        "answers": [
          "Sara: junior, Omar: senior, Lina: lead",
          "Sara: junior, Omar: junior, Lina: senior",
          "All: junior",
          "Sara: senior, Omar: lead, Lina: lead"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al 3la pagination b OFFSET: ila tzado rows jdida f l order 9bl ma t-loadi page 2, l OFFSET ghadi y-deplaca 3la l data l jdida. Fker chnu ghadi yban m3awd f page 2.",
        "text": "Page 1 shows 10 rows (LIMIT 10 OFFSET 0). Before page 2 loads (LIMIT 10 OFFSET 10), 3 new rows are inserted at the top of the ordering. What can the user see on page 2?",
        "answers": [
          "Exactly rows 11-20 of the original data",
          "An error",
          "An empty page",
          "3 rows already seen on page 1 (duplicates)"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "So2al 3la foreign keys: ila makaynch FOREIGN KEY constraint, l database ma kay7mi walo — l DELETE ghadi ymchi 3adi. Fker chnu ghadi yw9a3 l l orders dyal user 5.",
        "text": "There is no foreign key between orders.user_id and users.id. After DELETE FROM users WHERE id = 5, what happens to user 5's orders?",
        "answers": [
          "They are deleted automatically",
          "They are set to NULL automatically",
          "They remain in orders, now pointing to a non-existent user",
          "The DELETE fails"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al 3la HAVING m3a joj conditions: l group khass y7a9a9hom bjoj (AND). 7sab l AVG w l COUNT dyal kol department w chof chkon li kay7a9a9 bjoj.",
        "text": "Which departments are returned?",
        "code": "employees: IT has 5 people (avg salary 6000), HR has 2 (avg 7000), Sales has 4 (avg 4000).\n\nSELECT department FROM employees GROUP BY department HAVING AVG(salary) > 5000 AND COUNT(*) >= 3;",
        "answers": [
          "IT",
          "IT, HR",
          "HR",
          "IT, Sales"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "So2al 3la indexes: l query kat-filter 3la status w kat-sort 3la created_at — l index l mzyan khass y-ghetti bjoj f wa7ed. Fker chkon l composite index li kaykhdm l filter w l sort bjoj.",
        "text": "A query filters 10M rows with status = 'shipped' and sorts by created_at DESC. Which index helps most?",
        "answers": [
          "(created_at)",
          "(status) only",
          "No index can help with sorting",
          "(status, created_at DESC)"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al 3la EXISTS: l subquery khassha tkoun correlated — t-rbt l orders b l customer l khariji. Fker chkon li kaydir l link bin l joj queries.",
        "text": "Which query correctly lists customers who have at least one order?",
        "answers": [
          "SELECT name FROM customers c WHERE EXISTS (SELECT 1 FROM orders);",
          "SELECT name FROM customers c WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id);",
          "SELECT name FROM customers WHERE id = (SELECT customer_id FROM orders);",
          "SELECT name FROM customers c WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id);"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al 3la GROUP BY + MAX: l max kayt7sab l kol group b7alo. Fker l totals dyal c1 b7alha w dyal c2 b7alha.",
        "text": "What is returned?",
        "code": "orders\ncustomer_id | total\nc1          | 50\nc1          | 200\nc2          | 80\n\nSELECT customer_id, MAX(total) AS biggest FROM orders GROUP BY customer_id;",
        "answers": [
          "c1: 200, c2: 80",
          "c1: 50, c2: 80",
          "A single row: 200",
          "c1: 200 only"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "So2al 3la verification dyal DELETE: count = 0 kaythbet ghir blli makaynch rows dyal user 5 daba. Fker: wach hadchi kaythbet blli l rows l khrin ma tms7och?",
        "text": "The second query returns 0. What does that prove?",
        "code": "DELETE FROM orders WHERE user_id = 5;\nSELECT COUNT(*) FROM orders WHERE user_id = 5;",
        "answers": [
          "That exactly the right rows were deleted",
          "That the table is empty",
          "Only that no rows for user 5 remain — not that the right rows were deleted",
          "That the DELETE failed"
        ],
        "correct": 2,
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
        "explain_dr": "So2al kaysewlk 3la WHERE: ch7al user ghadi y7a9a9 l condition dyal age > 30? 9ra l tableau mzyan w filter ghir l rows li kat7a9a9 l condition.",
        "text": "Que retourne cette requête ?",
        "code": "users\nid | name | age\n1  | Sara | 28\n2  | Omar | 35\n3  | Lina | 42\n\nSELECT name FROM users WHERE age > 30;",
        "answers": [
          "Sara, Omar",
          "Sara, Lina",
          "Omar, Lina",
          "Les trois noms"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al 3la ORDER BY: DESC kay3ni mn l kbir l sghir, w WHERE price <= 10 kat-filter lwl. Rtab l prices li b9aw mn l kbir l sghir.",
        "text": "Dans quel ordre les noms sont-ils retournés ?",
        "code": "products\nid | name     | price\n1  | Pen      | 2\n2  | Notebook | 5\n3  | Bag      | 20\n\nSELECT name FROM products WHERE price <= 10 ORDER BY price DESC;",
        "answers": [
          "Notebook, Pen",
          "Pen, Notebook",
          "Bag, Notebook",
          "Notebook, Bag"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al 3la COUNT(*): l star (*) kay3ni ga3 rows bla ma y7s b l content dyalhom. Fker: ch7al row kayna f total f l table?",
        "text": "Que retourne la requête ?",
        "code": "orders contient 5 lignes.\n\nSELECT COUNT(*) AS total FROM orders;",
        "answers": [
          "Les 5 lignes",
          "0",
          "Une erreur",
          "5"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al 3la DISTINCT: had l keyword kat7iyed l duplicates mn l resultat. 7sab ch7al city mkhtalfa kayna, machi ch7al row.",
        "text": "Combien de lignes sont retournées ?",
        "code": "customers\nname  | city\nSara  | Paris\nOmar  | Lyon\nLina  | Paris\nKarim | Madrid\n\nSELECT DISTINCT city FROM customers;",
        "answers": [
          "4",
          "3",
          "1",
          "2"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "So2al 3la BETWEEN: had l operator kaydkhol l limits b7alhum (inclusive) — 3000 w 5000 dakhlin. Fker chkon l query li kat-ghetti had l range.",
        "text": "Quelle requête retourne les employés gagnant entre 3000 et 5000 (inclus) ?",
        "answers": [
          "SELECT * FROM employees WHERE salary BETWEEN 3000 AND 5000;",
          "SELECT * FROM employees WHERE salary > 3000 AND salary > 5000;",
          "SELECT * FROM employees WHERE salary IN (3000, 5000);",
          "SELECT * FROM employees WHERE salary = 3000-5000;"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "So2al 3la LIKE: l '%' f pattern 'A%' kay3ni 'kaybda b A w morah ay 7aja'. Fker l far9 bin 'kaybda b' w 'kay7tawi 3la'.",
        "text": "Quels noms sont retournés ?",
        "code": "users\nname\nAmine\nSara\nAli\nKarim\n\nSELECT name FROM users WHERE name LIKE 'A%';",
        "answers": [
          "Amine uniquement",
          "Sara, Ali",
          "Amine, Ali",
          "Les quatre"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al 3la syntax error: 9ra l SELECT list mzyan — chnu na9s bin name w price? SQL kaytlb separator bin l columns.",
        "text": "Pourquoi cette requête échoue-t-elle ?",
        "code": "SELECT name price FROM products;",
        "answers": [
          "price est un mot réservé",
          "Virgule manquante entre name et price",
          "SELECT exige une clause WHERE",
          "Le nom de la table doit être entre guillemets"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "So2al 3la LIMIT: had l clause kat7ded l 7ad l a9sa dyal rows li ghadi ybanu f l resultat. Fker chnu kay3ni LIMIT 3.",
        "text": "Combien de lignes sont retournées ?",
        "code": "users contient 10 lignes.\n\nSELECT * FROM users LIMIT 3;",
        "answers": [
          "10",
          "0",
          "1",
          "3"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "So2al 3la NULL: tdkker blli NULL machi value 3adiya — kayt-test ghir b IS NULL, machi b '='. Chkon li email dyalo NULL f l tableau?",
        "text": "Quel nom est retourné ?",
        "code": "users\nname | email\nSara | sara@x.com\nOmar | NULL\nLina | lina@x.com\n\nSELECT name FROM users WHERE email IS NULL;",
        "answers": [
          "Sara",
          "Lina",
          "Omar",
          "Personne"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "So2al 3la DELETE bla WHERE: had l command khatira bzaf. Fker chnu ghadi yw9a3 l l table kamla ila ma 7dditich chkon li ghadi ytm7a.",
        "text": "Un développeur exécute ceci pour supprimer un seul utilisateur inactif. Que se passe-t-il vraiment ?",
        "code": "DELETE FROM users;",
        "answers": [
          "Toutes les lignes de users sont supprimées",
          "Seuls les utilisateurs inactifs sont supprimés",
          "Rien ne se passe sans confirmation du WHERE",
          "La table elle-même est supprimée"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "So2al 3la aggregates f WHERE: COUNT(*) kayt7sab mn ba3d l grouping, w WHERE kaykhdm 9bl l grouping. Fker fin khass t7at l condition dyal aggregate.",
        "text": "Pourquoi cette requête échoue-t-elle ?",
        "code": "SELECT department, COUNT(*) FROM employees WHERE COUNT(*) > 5 GROUP BY department;",
        "answers": [
          "COUNT(*) a besoin d'un nom de colonne",
          "On ne peut pas utiliser d'agrégat dans WHERE ; utilisez HAVING",
          "GROUP BY doit venir avant WHERE",
          "department doit être dans la clause WHERE"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "So2al 3la NULL m3a '=': wach l comparison m3a NULL katrjja3 TRUE wla 7aja khra? Fker l 3-value logic dyal SQL.",
        "text": "Que retourne cette requête ?",
        "code": "users\nname | email\nSara | sara@x.com\nOmar | NULL\n\nSELECT name FROM users WHERE email = NULL;",
        "answers": [
          "Omar",
          "Tous les utilisateurs",
          "Une erreur",
          "Aucune ligne — NULL se teste avec IS NULL"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "So2al 3la COUNT: l far9 bin COUNT(*) li kat7sab ga3 rows, w COUNT(column) li kat7sab ghir l values li machi NULL. Ch7al email NULL kayna?",
        "text": "Que retournent les deux requêtes ?",
        "code": "users : 4 lignes, dont une avec email = NULL.\n\nSELECT COUNT(*) FROM users;\nSELECT COUNT(email) FROM users;",
        "answers": [
          "4 et 3",
          "4 et 4",
          "3 et 3",
          "3 et 4"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "So2al 3la ORDER BY b joj columns: lwl kay7km total DESC, w ila tswaw l totals ghadi y7km tani column (created_at ASC). Fker chnu ghadi yw9a3 m3a l totals l mtsawyin.",
        "text": "Dans quel ordre les ids sont-ils retournés ?",
        "code": "orders\nid | total | created_at\n1  | 50    | 2024-01-02\n2  | 50    | 2024-01-01\n3  | 20    | 2024-01-03\n\nSELECT id FROM orders ORDER BY total DESC, created_at ASC;",
        "answers": [
          "1, 2, 3",
          "3, 1, 2",
          "2, 1, 3",
          "3, 2, 1"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "So2al 3la AND w OR: chkon li kaytrbat lwl f SQL? AND kayrb7 3la OR f precedence. Fker l query b l parentheses li kayftrdhoum SQL.",
        "text": "Un développeur veut les adultes habitant à Paris ou Lyon. Quel est le problème ?",
        "code": "SELECT name FROM users WHERE age > 18 AND city = 'Paris' OR city = 'Lyon';",
        "answers": [
          "On ne peut pas combiner OR et AND",
          "La requête est correcte",
          "Les chaînes doivent utiliser des guillemets doubles",
          "AND est prioritaire sur OR : tous les habitants de Lyon sont retournés quel que soit leur âge"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al 3la INSERT: kol pair dyal parentheses f VALUES kat3ni row jdida ghadi tzad. 7sab ch7al pair kayna f l statement.",
        "text": "Combien de lignes sont ajoutées ?",
        "code": "INSERT INTO users (name) VALUES ('Sara'), ('Ali');",
        "answers": [
          "1",
          "2",
          "0 — la syntaxe est invalide",
          "3"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al 3la expressions f SELECT: SQL kat7sab l 3amaliyat l 7isabiya 3la kol row b7al calculator. Fker price * quantity l kol item.",
        "text": "Quels totaux sont retournés ?",
        "code": "items\nname | price | quantity\nPen  | 2     | 5\nBag  | 20    | 1\n\nSELECT name, price * quantity AS total FROM items;",
        "answers": [
          "Pen : 10, Bag : 20",
          "Pen : 7, Bag : 21",
          "Pen : 2, Bag : 20",
          "Une erreur — * ne peut pas être utilisé dans SELECT"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al 3la quoting: 'price' b single quotes hia ghir text (string literal), machi smit l column. Fker chnu ghadi y9arn SQL m3a 100.",
        "text": "Pourquoi cette requête ne retourne aucune ligne alors qu'il existe des produits chers ?",
        "code": "SELECT name FROM products WHERE 'price' > 100;",
        "answers": [
          "Les prix sont stockés en texte",
          "WHERE ne peut pas comparer des nombres",
          "'price' est une chaîne littérale, pas la colonne — on compare le texte 'price' à 100",
          "Les guillemets simples sont obligatoires"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "So2al 3la IN: had l operator kay9bl list dyal values. Chof l age dyal kol user wach kayn f l list (20, 25, 30).",
        "text": "Quels noms sont retournés ?",
        "code": "users\nname  | age\nSara  | 20\nOmar  | 25\nLina  | 30\nKarim | 40\n\nSELECT name FROM users WHERE age IN (20, 25, 30);",
        "answers": [
          "Sara, Omar",
          "Sara, Omar, Lina",
          "Karim",
          "Les quatre"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al 3la DELETE m3a NOW(): expires_at < NOW() kay3ni l sessions li salaw 9bl daba. Chkon li l wa9t dyalo 9dam mn daba?",
        "text": "Quelles lignes sont supprimées ?",
        "code": "sessions\nid | expires_at\n1  | hier\n2  | demain\n\nDELETE FROM sessions WHERE expires_at < NOW();",
        "answers": [
          "Les deux sessions",
          "Seule la session 2",
          "Aucune — NOW() ne peut pas être utilisé dans DELETE",
          "Seule la session 1"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al 3la INNER JOIN: ghir l rows li 3andhom match f bjoj tables kaybanu f l resultat. Fker: chkon mn users 3andu order, w chkon mn orders ma 3andush user.",
        "text": "Quelles lignes sont retournées ?",
        "code": "users\nid | name\n1  | Sara\n2  | Omar\n\norders\nid  | user_id\n101 | 1\n102 | 1\n103 | 99\n\nSELECT u.name, o.id FROM users u INNER JOIN orders o ON o.user_id = u.id;",
        "answers": [
          "Sara-101, Sara-102, Omar-NULL",
          "Tous les utilisateurs et toutes les commandes",
          "Sara-101, Sara-102",
          "Omar avec la commande 103"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "So2al 3la LEFT JOIN: l table l islamia (users) kaybanu ga3 rows dyalha dima. Fker chnu ghadi yw9a3 l l user li ma 3andu ta order — wach ghadi yban?",
        "text": "Quelles lignes sont retournées ?",
        "code": "users\nid | name\n1  | Sara\n2  | Omar\n\norders\nid  | user_id\n101 | 1\n102 | 1\n103 | 99\n\nSELECT u.name, o.id FROM users u LEFT JOIN orders o ON o.user_id = u.id;",
        "answers": [
          "Sara-101, Sara-102",
          "Sara-101, Sara-102, Omar-NULL",
          "Seulement Omar-NULL",
          "Une erreur — o.id peut être NULL"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al 3la GROUP BY: l rows kat-tjm3o 7asb city, w COUNT(*) kat7sab ch7al row f kol group. 7sab l users dyal kol city b rask.",
        "text": "Que retourne la requête ?",
        "code": "users\nname  | city\nSara  | Paris\nOmar  | Lyon\nLina  | Paris\nKarim | Madrid\nAli   | Lyon\nNadia | Paris\n\nSELECT city, COUNT(*) AS n FROM users GROUP BY city;",
        "answers": [
          "Paris : 3, Lyon : 2, Madrid : 1",
          "Paris : 2, Lyon : 2, Madrid : 2",
          "6 lignes, une par utilisateur",
          "Paris : 3 uniquement"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al 3la HAVING: had l clause hia li kat-filter l groups mn ba3d l grouping, 7it WHERE ma kaykhdmch m3a aggregates. Ch7al group kay7a9a9 COUNT(*) > 3?",
        "text": "Quels départements sont retournés ?",
        "code": "employees : IT compte 5 personnes, HR 2, Sales 4.\n\nSELECT department FROM employees GROUP BY department HAVING COUNT(*) > 3;",
        "answers": [
          "IT uniquement",
          "IT, HR, Sales",
          "HR, Sales",
          "IT, Sales"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "So2al 3la subquery: l query l dakhilia kat7sab l average lwl, w l query l kharijia kat9arn kol price m3a dik l average. 7sab l average b rask.",
        "text": "Quels produits sont retournés ?",
        "code": "products\nname | price\nA    | 10\nB    | 20\nC    | 30\nD    | 40\n\nSELECT name FROM products WHERE price > (SELECT AVG(price) FROM products);",
        "answers": [
          "D uniquement",
          "B, C, D",
          "C, D",
          "A, B"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "So2al 3la LEFT JOIN + WHERE: ila drti condition 3la l table l yaminia (orders) f l WHERE, l rows li 3andhom NULL ghadi yt7iyedo. Fker chnu ghadi yw9a3 l l LEFT JOIN.",
        "text": "Un développeur veut chaque utilisateur avec son nombre de commandes payées, y compris ceux à zéro. Quel est le problème ?",
        "code": "SELECT u.name, COUNT(o.id) AS n\nFROM users u LEFT JOIN orders o ON u.id = o.user_id\nWHERE o.status = 'paid'\nGROUP BY u.name;",
        "answers": [
          "La clause WHERE sur la table de droite transforme le LEFT JOIN en INNER JOIN, excluant les utilisateurs sans commande payée",
          "COUNT(o.id) ne peut pas être utilisé avec LEFT JOIN",
          "GROUP BY doit inclure o.status",
          "LEFT JOIN n'est pas la bonne jointure"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al 3la UNION vs UNION ALL: wa7ed fihom kay7iyed l duplicates w l akhor kaykhlihom kima homa. Fker chkon li kaydir l extra step dyal duplicate elimination.",
        "text": "Quelle est la différence entre UNION et UNION ALL dans les résultats ?",
        "answers": [
          "UNION ALL supprime les doublons ; UNION les garde",
          "UNION supprime les doublons ; UNION ALL les garde",
          "Il n'y a aucune différence",
          "UNION trie, UNION ALL échoue"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al 3la AVG m3a GROUP BY: l average kayt7sab l kol group b7alo, machi l kolchi mjmo3. 7sab average dyal IT b7alha w HR b7alha.",
        "text": "Quelles moyennes sont retournées ?",
        "code": "employees\nname | department | salary\nSara | IT         | 4000\nOmar | IT         | 6000\nLina | HR         | 3000\n\nSELECT department, AVG(salary) AS avg_sal FROM employees GROUP BY department;",
        "answers": [
          "IT : 10000, HR : 3000",
          "IT : 5000 uniquement",
          "Une seule ligne : 4333",
          "IT : 5000, HR : 3000"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al 3la rows li ma 3andhomch match: l trick l mchhoura hia LEFT JOIN w t-testi wach l column dyal l table l yaminia NULL. Fker chnu kay3ni o.id IS NULL.",
        "text": "Quelle requête liste les clients qui n'ont jamais commandé ?",
        "answers": [
          "SELECT c.name FROM customers c LEFT JOIN orders o ON o.customer_id = c.id WHERE o.id IS NULL;",
          "SELECT c.name FROM customers c INNER JOIN orders o ON o.customer_id = c.id WHERE o.id IS NULL;",
          "SELECT c.name FROM customers c LEFT JOIN orders o ON o.customer_id = c.id WHERE o.id IS NOT NULL;",
          "SELECT c.name FROM customers c, orders o WHERE c.id = o.customer_id;"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al 3la self JOIN: l table kat-join m3a rasha b joj aliases (e w m). Fker manager_id chnu kay3ni — chkon li l manager dyalo hia Sara?",
        "text": "Quels noms sont retournés ?",
        "code": "employees\nid | name | manager_id\n1  | Sara | NULL\n2  | Omar | 1\n3  | Lina | 1\n\nSELECT e.name FROM employees e JOIN employees m ON e.manager_id = m.id WHERE m.name = 'Sara';",
        "answers": [
          "Sara",
          "Omar uniquement",
          "Omar, Lina",
          "Les trois"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al 3la NOT IN m3a NULL: ila l subquery rjja3 NULL, chnu ghadi yw9a3 l l logic dyal NOT IN? Fker l 3-value logic — l comparison m3a NULL kaywli UNKNOWN.",
        "text": "Que retourne cette requête ?",
        "code": "orders\nuser_id\n1\n2\nNULL\n\nSELECT name FROM users WHERE id NOT IN (SELECT user_id FROM orders);",
        "answers": [
          "Tous les utilisateurs sauf 1 et 2",
          "Uniquement les utilisateurs 1 et 2",
          "Une erreur",
          "Aucune ligne — le NULL dans la sous-requête rend NOT IN indéterminé pour chaque ligne"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "So2al 3la NOT m3a NULL: ila age NULL, l expression (age > 30) katrjja3 UNKNOWN, w NOT UNKNOWN machi TRUE. Fker chkon li ghadi yban f l resultat.",
        "text": "Quels noms sont retournés ?",
        "code": "users\nname | age\nSara | 25\nOmar | NULL\nLina | 40\n\nSELECT name FROM users WHERE NOT (age > 30);",
        "answers": [
          "Sara",
          "Sara, Omar",
          "Omar, Lina",
          "Sara, Lina"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "So2al 3la COUNT(column): kat7sab ghir l values li machi NULL. Ch7al email NULL kayna f l 4 users?",
        "text": "Que retourne la requête ?",
        "code": "users : 4 lignes, dont une avec email = NULL.\n\nSELECT COUNT(email) FROM users;",
        "answers": [
          "4",
          "1",
          "3",
          "Une erreur"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al 3la subquery m3a '=': l '=' kaytsana value wa7da. Ila l subquery rjja3 bzaf dyal rows, khass operator li kay9bl list dyal values.",
        "text": "La sous-requête retourne 3 prix. Pourquoi la requête échoue-t-elle ?",
        "code": "SELECT name FROM products WHERE price = (SELECT price FROM products WHERE category = 'books');",
        "answers": [
          "Les sous-requêtes ne peuvent pas être utilisées avec =",
          "= attend une seule valeur ; utilisez IN pour plusieurs lignes",
          "price doit avoir un alias",
          "La requête n'échoue pas"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al 3la correlated subquery: l subquery kat7sab l average dyal l department dyal kol employee b7alo. Fker chkon li l salary dyalo fo9 l average dyal department dyalo.",
        "text": "Quels noms sont retournés ?",
        "code": "employees\nname  | department | salary\nSara  | IT         | 4000\nOmar  | IT         | 6000\nLina  | HR         | 3000\nKarim | HR         | 3000\n\nSELECT name FROM employees e WHERE salary > (SELECT AVG(salary) FROM employees WHERE department = e.department);",
        "answers": [
          "Omar",
          "Sara, Omar",
          "Omar, Lina",
          "Personne"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al 3la COUNT m3a LEFT JOIN: COUNT(o.id) kat7sab ghir l values li machi NULL. Fker chnu ghadi yw9a3 l l user li ma 3andu ta order.",
        "text": "Que retourne la requête ?",
        "code": "users : Sara (id 1), Omar (id 2)\norders : 2 commandes avec user_id = 1, aucune avec user_id = 2\n\nSELECT u.name, COUNT(o.id) AS n FROM users u LEFT JOIN orders o ON o.user_id = u.id GROUP BY u.name;",
        "answers": [
          "Sara : 2, Omar : 1",
          "Sara : 2 uniquement",
          "Sara : 2, Omar : NULL",
          "Sara : 2, Omar : 0"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "So2al 3la transactions: ROLLBACK kay7iyed ga3 l changes li w9a3o mn l BEGIN, b7al ma w9a3 walo. Fker chnu ghadi ywli l balance.",
        "text": "Le solde était de 1000 avant. Que montre le SELECT final ?",
        "code": "BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nROLLBACK;\nSELECT balance FROM accounts WHERE id = 1;",
        "answers": [
          "900",
          "0",
          "1000",
          "Une erreur"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "So2al 3la join bla condition: kol row dyal table a kat-ttzawa7 m3a kol row dyal table b (cross join). Fker: ch7al ghadi ykoun l total dyal l combinations?",
        "text": "Le développeur a oublié la condition de jointure. Combien de lignes sont retournées ?",
        "code": "SELECT * FROM a, b;\n\n-- la table a a 3 lignes, la table b en a 4",
        "answers": [
          "7",
          "12",
          "4",
          "0"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "So2al 3la UNION: l SELECTs khasshom ykono compatible. 7sab ch7al column kayrjja3 l query lwl w ch7al kayrjja3 tani query.",
        "text": "Pourquoi cette requête échoue-t-elle ?",
        "code": "SELECT id, name FROM users UNION SELECT id FROM orders;",
        "answers": [
          "UNION ne peut pas combiner des tables différentes",
          "id doit avoir un alias",
          "UNION exige ORDER BY",
          "Les deux SELECT doivent retourner le même nombre de colonnes"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al 3la UPDATE: l SET kat-tapply ghir 3la l rows li 7a9a9o l WHERE. Fker chkon li l category dyalo 'books' w chnu ghadi yw9a3 l l prices dyalhom.",
        "text": "Quels sont les prix après la mise à jour ?",
        "code": "products\nname | price | category\nA    | 10    | books\nB    | 20    | books\nC    | 30    | toys\n\nUPDATE products SET price = price * 1.1 WHERE category = 'books';",
        "answers": [
          "A : 11, B : 22, C : 30",
          "A : 11, B : 22, C : 33",
          "A : 10, B : 20, C : 30",
          "Tous les prix : 11"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al 3la ROW_NUMBER: PARTITION BY kat9sem l data l groups (departments), w ORDER BY salary DESC kat-rank kol group b7alo. Fker chkon l a3la salary f kol department.",
        "text": "Quelle ligne obtient rn = 1 dans chaque département ?",
        "code": "employees\nname | department | salary\nSara | IT         | 4000\nOmar | IT         | 6000\nLina | HR         | 5000\n\nSELECT name, ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rn FROM employees;",
        "answers": [
          "Sara (IT), Lina (HR)",
          "Omar (IT), Lina (HR)",
          "Omar pour les deux",
          "Sara pour les deux"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al 3la CTE (WITH): 'big' hia table mo2a9ata ghir dyal l orders li total > 100. 7sab ch7al order kay7a9a9 l condition.",
        "text": "Que retourne la requête ?",
        "code": "orders totaux : 50, 150, 200, 80\n\nWITH big AS (SELECT * FROM orders WHERE total > 100)\nSELECT COUNT(*) FROM big;",
        "answers": [
          "4",
          "3",
          "2",
          "0"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "So2al 3la CASE: l WHENs kat-tchecko mn lwl l l akhir, w lwl wa7ed li kayt7a9a9 kayrba7. Fker l salary dyal kol wa7ed chkon li kaymatchi lwl.",
        "text": "Quels grades sont retournés ?",
        "code": "employees\nname | salary\nSara | 3000\nOmar | 7000\nLina | 12000\n\nSELECT name, CASE WHEN salary < 5000 THEN 'junior' WHEN salary < 10000 THEN 'senior' ELSE 'lead' END AS grade FROM employees;",
        "answers": [
          "Sara : junior, Omar : senior, Lina : lead",
          "Sara : junior, Omar : junior, Lina : senior",
          "Tous : junior",
          "Sara : senior, Omar : lead, Lina : lead"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al 3la pagination b OFFSET: ila tzado rows jdida f l order 9bl ma t-loadi page 2, l OFFSET ghadi y-deplaca 3la l data l jdida. Fker chnu ghadi yban m3awd f page 2.",
        "text": "La page 1 affiche 10 lignes (LIMIT 10 OFFSET 0). Avant le chargement de la page 2 (LIMIT 10 OFFSET 10), 3 nouvelles lignes sont insérées en haut du tri. Que peut voir l'utilisateur sur la page 2 ?",
        "answers": [
          "Exactement les lignes 11 à 20 des données d'origine",
          "Une erreur",
          "Une page vide",
          "3 lignes déjà vues sur la page 1 (doublons)"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "So2al 3la foreign keys: ila makaynch FOREIGN KEY constraint, l database ma kay7mi walo — l DELETE ghadi ymchi 3adi. Fker chnu ghadi yw9a3 l l orders dyal user 5.",
        "text": "Il n'y a pas de clé étrangère entre orders.user_id et users.id. Après DELETE FROM users WHERE id = 5, qu'advient-il des commandes de l'utilisateur 5 ?",
        "answers": [
          "Elles sont supprimées automatiquement",
          "Elles sont mises à NULL automatiquement",
          "Elles restent dans orders, pointant vers un utilisateur inexistant",
          "Le DELETE échoue"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al 3la HAVING m3a joj conditions: l group khass y7a9a9hom bjoj (AND). 7sab l AVG w l COUNT dyal kol department w chof chkon li kay7a9a9 bjoj.",
        "text": "Quels départements sont retournés ?",
        "code": "employees : IT compte 5 personnes (salaire moyen 6000), HR 2 (moyenne 7000), Sales 4 (moyenne 4000).\n\nSELECT department FROM employees GROUP BY department HAVING AVG(salary) > 5000 AND COUNT(*) >= 3;",
        "answers": [
          "IT",
          "IT, HR",
          "HR",
          "IT, Sales"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "So2al 3la indexes: l query kat-filter 3la status w kat-sort 3la created_at — l index l mzyan khass y-ghetti bjoj f wa7ed. Fker chkon l composite index li kaykhdm l filter w l sort bjoj.",
        "text": "Une requête filtre 10M de lignes avec status = 'shipped' et trie par created_at DESC. Quel index aide le plus ?",
        "answers": [
          "(created_at)",
          "(status) uniquement",
          "Aucun index ne peut aider avec le tri",
          "(status, created_at DESC)"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al 3la EXISTS: l subquery khassha tkoun correlated — t-rbt l orders b l customer l khariji. Fker chkon li kaydir l link bin l joj queries.",
        "text": "Quelle requête liste correctement les clients ayant au moins une commande ?",
        "answers": [
          "SELECT name FROM customers c WHERE EXISTS (SELECT 1 FROM orders);",
          "SELECT name FROM customers c WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id);",
          "SELECT name FROM customers WHERE id = (SELECT customer_id FROM orders);",
          "SELECT name FROM customers c WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id);"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al 3la GROUP BY + MAX: l max kayt7sab l kol group b7alo. Fker l totals dyal c1 b7alha w dyal c2 b7alha.",
        "text": "Que retourne la requête ?",
        "code": "orders\ncustomer_id | total\nc1          | 50\nc1          | 200\nc2          | 80\n\nSELECT customer_id, MAX(total) AS biggest FROM orders GROUP BY customer_id;",
        "answers": [
          "c1 : 200, c2 : 80",
          "c1 : 50, c2 : 80",
          "Une seule ligne : 200",
          "c1 : 200 uniquement"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "So2al 3la verification dyal DELETE: count = 0 kaythbet ghir blli makaynch rows dyal user 5 daba. Fker: wach hadchi kaythbet blli l rows l khrin ma tms7och?",
        "text": "La deuxième requête retourne 0. Que cela prouve-t-il ?",
        "code": "DELETE FROM orders WHERE user_id = 5;\nSELECT COUNT(*) FROM orders WHERE user_id = 5;",
        "answers": [
          "Que exactement les bonnes lignes ont été supprimées",
          "Que la table est vide",
          "Seulement qu'il ne reste aucune ligne pour l'utilisateur 5 — pas que les bonnes lignes ont été supprimées",
          "Que le DELETE a échoué"
        ],
        "correct": 2,
        "selection": null
      }
    ]
  }
];
