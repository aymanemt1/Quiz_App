export const sqlQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
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
