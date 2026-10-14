export const mysqlQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "So2al 3la MySQL: SHOW DATABASES katwrik ga3 l databases li kaynin f server. F MySQL, SHOW hiya l command dyal l3ard.",
        "text": "Which command lists all databases on the MySQL server?",
        "code": "mysql> ???",
        "answers": [
          "SHOW DATABASES;",
          "LIST DATABASES;",
          "SELECT DATABASES;",
          "DISPLAY DBS;"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al 3la AUTO_INCREMENT: mli katzid ligne jdida, MySQL katgeneri ra9m wa7ed b wa7ed bo7dha. Ghaliban katst3ml m3a PRIMARY KEY bach l id ytzed bo7do.",
        "text": "What does AUTO_INCREMENT do on a column?",
        "answers": [
          "It automatically generates a unique number for each new row",
          "It sorts the column values",
          "It encrypts the values",
          "It deletes duplicate values"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al 3la MySQL: SHOW TABLES katwrik l tables dyal l database li nta fiha daba.",
        "text": "Which command lists the tables in the current database?",
        "answers": [
          "SHOW TABLES;",
          "LIST TABLES;",
          "SELECT TABLES;",
          "DESCRIBE ALL;"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al 3la types: BOOLEAN (wla TINYINT(1)) howa li katst3ml l true/false. TEXT l nass, BLOB l files, DATETIME l wa9t.",
        "text": "Which data type is best for true/false values?",
        "answers": [
          "BOOLEAN",
          "TEXT",
          "BLOB",
          "DATETIME"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 4,
        "level": 2,
        "explain_dr": "So2al 3la engines: InnoDB howa l default f MySQL l7dita — kayda3m transactions w foreign keys. MyISAM 9dim w ma fihch transactions.",
        "text": "What is the default storage engine in modern MySQL?",
        "answers": [
          "InnoDB",
          "MyISAM",
          "MEMORY",
          "CSV"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 5,
        "level": 2,
        "explain_dr": "So2al 3la DESCRIBE: katwrik structure dyal table (columns, types, keys) — machi l data li ldakhel.",
        "text": "What does DESCRIBE users; show you?",
        "answers": [
          "The table structure: columns, types and keys",
          "The rows stored in users",
          "The server version",
          "The query execution plan"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 6,
        "level": 2,
        "explain_dr": "So2al 3la types: CHAR fixed-length (dayman 10), VARCHAR variable (ghir 9ed li ktebti). VARCHAR mzyan l nass li twalhom mkhtalf.",
        "text": "What is the difference between CHAR(10) and VARCHAR(10)?",
        "answers": [
          "CHAR always reserves 10 characters, VARCHAR uses only what is needed",
          "There is no difference",
          "VARCHAR is always faster",
          "CHAR cannot store text"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 3,
        "explain_dr": "So2al 3la mysqldump: tool dyal backup — kaykherej l database kamla f fichier SQL bach t-restoreha mn b3d.",
        "text": "What is mysqldump used for?",
        "code": "$ mysqldump mydb > backup.sql",
        "answers": [
          "Backing up databases into a file",
          "Deleting tables",
          "Creating users",
          "Optimizing slow queries"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 8,
        "level": 3,
        "explain_dr": "So2al 3la LIKE: % kat3ni ay 7orof (wla walo), w _ kat3ni 7arf wa7ed b dabt.",
        "text": "In LIKE 'A%', what does the % wildcard mean?",
        "code": "SELECT name FROM users WHERE name LIKE 'A%';",
        "answers": [
          "Any sequence of characters, including none",
          "Exactly one character",
          "A literal percent sign",
          "The end of the string"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 9,
        "level": 3,
        "explain_dr": "So2al 3la PRIMARY KEY: katfered blli l values unique w machi null, w MySQL kat-crei index bo7dha bach l recherche tkon sri3a.",
        "text": "What does defining a PRIMARY KEY guarantee?",
        "answers": [
          "Values are unique and never null, with an automatic index",
          "Values may repeat",
          "The column is hidden from SELECT *",
          "Nothing — it is only documentation"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 4,
        "explain_dr": "So2al 3la procedures: l procedure kat3yet liha b CALL, machi b SELECT wla RUN. Fker: chno l keyword li MySQL katst3mlo bach texecuti procedure?",
        "text": "How do you run a stored procedure called get_active_users?",
        "code": "CREATE PROCEDURE get_active_users()\nBEGIN\n  SELECT * FROM users WHERE active = 1;\nEND",
        "answers": [
          "CALL get_active_users();",
          "RUN get_active_users();",
          "EXECUTE get_active_users;",
          "SELECT get_active_users();"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 11,
        "level": 4,
        "explain_dr": "So2al 3la parametres: IN kaydkhel valeur, OUT kaykherej valeur l caller, INOUT bjoj. Fker: OUT = output, ya3ni l procedure kat3tik valeur.",
        "text": "In CREATE PROCEDURE calc(OUT total INT), what does OUT mean?",
        "answers": [
          "total is an input value",
          "total returns a value back to the caller",
          "total is a table name",
          "total is optional"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 12,
        "level": 4,
        "explain_dr": "So2al 3la fonctions: ay fonction khasha t-returni valeur b RETURN, w 3ndha RETURNS f l declaration. Bla RETURN l fonction ma khdamach.",
        "text": "What must every MySQL stored function contain?",
        "code": "CREATE FUNCTION double_it(x INT) RETURNS INT\nBEGIN\n  ???\nEND",
        "answers": [
          "A RETURN statement",
          "A CALL statement",
          "A TRIGGER",
          "An index"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 13,
        "level": 4,
        "explain_dr": "So2al 3la DELIMITER: l body dyal procedure fih bzaf dyal ';' — ila ma bdeltich l delimiter, MySQL ghadi y7seb blli l CREATE sala f awel ';'. L delimiter jdid kay7mi l body kamel.",
        "text": "Why change the DELIMITER before creating a stored procedure?",
        "code": "DELIMITER //\nCREATE PROCEDURE p()\nBEGIN\n  SELECT 1;\n  SELECT 2;\nEND //\nDELIMITER ;",
        "answers": [
          "To speed up the procedure",
          "So the semicolons inside the body don't end the CREATE statement early",
          "To encrypt the code",
          "It is required for all queries"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 4,
        "explain_dr": "So2al 3la IF: f MySQL katkteb IF condition THEN ... END IF; — machi bhal JavaScript b l accolades. 7fed l syntax mzyan.",
        "text": "Which IF syntax is correct inside a MySQL procedure?",
        "answers": [
          "IF x > 5 THEN SET y = 1; END IF;",
          "if (x > 5) { y = 1; }",
          "WHEN x > 5 DO y = 1;",
          "IF x > 5: y = 1"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 15,
        "level": 4,
        "explain_dr": "So2al 3la variables: f wast procedure kat-declari b DECLARE x INT; — machi VAR wla LET b7al JavaScript.",
        "text": "How do you declare a local variable inside a procedure?",
        "code": "CREATE PROCEDURE p()\nBEGIN\n  ???\n  SET x = 5;\nEND",
        "answers": [
          "DECLARE x INT;",
          "VAR x INT;",
          "LET x = 5;",
          "DIM x AS INT;"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 16,
        "level": 4,
        "explain_dr": "So2al 3la parametres: IN = dkhel valeur, OUT = kherej valeur, INOUT = bjoj (dkhel w kherej).",
        "text": "What is the difference between an IN and an INOUT parameter?",
        "answers": [
          "IN passes a value in, INOUT passes a value in and returns a new one",
          "No difference",
          "INOUT is faster",
          "IN can return values too"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 17,
        "level": 4,
        "explain_dr": "So2al 3la MySQL: SHOW PROCEDURE STATUS katwrik ga3 l procedures li kaynin.",
        "text": "How do you list all stored procedures in MySQL?",
        "answers": [
          "SHOW PROCEDURE STATUS;",
          "LIST PROCEDURES;",
          "SELECT PROCEDURES;",
          "DESCRIBE PROCEDURES;"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 18,
        "level": 4,
        "explain_dr": "So2al 3la loops: REPEAT kat-khdem lwl w kat-checki l condition f lkher (b7al do-while) — dayman kat-executa mra wa7da 3la l a9al.",
        "text": "Which loop always runs its body at least once?",
        "code": "???\n  SET x = x + 1;\nUNTIL x >= 10 END REPEAT;",
        "answers": [
          "REPEAT ... UNTIL",
          "WHILE ... DO",
          "LOOP with LEAVE at the start",
          "FOR EACH"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 19,
        "level": 4,
        "explain_dr": "So2al 3la LOOP: bach tkherej mn loop katst3ml LEAVE label; — BREAK dyal JavaScript ma khdamach hna.",
        "text": "Inside a procedure, how do you exit a LOOP early?",
        "code": "my_loop: LOOP\n  IF x > 10 THEN ???; END IF;\nEND LOOP my_loop;",
        "answers": [
          "LEAVE my_loop;",
          "BREAK;",
          "EXIT LOOP;",
          "STOP;"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 20,
        "level": 5,
        "explain_dr": "So2al 3la curseur: lwl kat-declarih (DECLARE), kat7elo (OPEN), katjbed ligne b ligne (FETCH), w f lkher katsedo (CLOSE). Had l ordre ma kaytbdlch.",
        "text": "What is the correct order of cursor operations?",
        "answers": [
          "DECLARE → OPEN → FETCH → CLOSE",
          "OPEN → DECLARE → FETCH → CLOSE",
          "DECLARE → FETCH → OPEN → CLOSE",
          "FETCH → OPEN → CLOSE → DECLARE"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 21,
        "level": 5,
        "explain_dr": "So2al 3la HANDLER: mli l curseur kaywsl l lkher (ma b9at ta ligne), MySQL katgeneri NOT FOUND — had l handler kay7et done = TRUE bach t3ref imta t7bes l loop.",
        "text": "What is this handler for?",
        "code": "DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;",
        "answers": [
          "To detect when the cursor has no more rows",
          "To stop the procedure on any error",
          "To create a new variable",
          "To commit the transaction"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 22,
        "level": 5,
        "explain_dr": "So2al 3la NEW/OLD: OLD = l valeur l9dima (9bel l update), NEW = l valeur jdida. F BEFORE UPDATE, OLD.price hiya l price li kanet 9bel.",
        "text": "In a BEFORE UPDATE trigger on products, what does OLD.price contain?",
        "answers": [
          "The price before the update",
          "The new price being set",
          "Always 0",
          "The average price"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 5,
        "explain_dr": "So2al 3la triggers: bach t-blocki insert khayb, khask BEFORE INSERT (9bel ma ydkhel) w t-generi erreur b SIGNAL. AFTER INSERT kayji m3etel — l ligne deja dkhlat.",
        "text": "You want to reject an INSERT when quantity is negative. Which trigger do you use?",
        "answers": [
          "BEFORE INSERT",
          "AFTER INSERT",
          "BEFORE DELETE",
          "AFTER UPDATE"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 24,
        "level": 5,
        "explain_dr": "So2al 3la CASE: l syntax hiya CASE WHEN condition THEN valeur ... ELSE ... END. Katst3ml wast SELECT bla ma t7taj procedure.",
        "text": "Which CASE expression is correct?",
        "code": "SELECT name, ??? AS availability FROM products;",
        "answers": [
          "CASE WHEN stock > 0 THEN 'in stock' ELSE 'out of stock' END",
          "CASE stock > 0 THEN 'in stock' END CASE",
          "IF stock > 0 THEN 'in stock' ELSE 'out of stock'",
          "SWITCH(stock) { case > 0: 'in stock' }"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 25,
        "level": 5,
        "explain_dr": "So2al 3la handlers: EXIT HANDLER kat-7bes l procedure mli kat-w93 erreur SQL — l far9 binha w bin CONTINUE li kat-kemel.",
        "text": "What does DECLARE EXIT HANDLER FOR SQLEXCEPTION do?",
        "answers": [
          "It stops the procedure immediately when an SQL error occurs",
          "It ignores all errors",
          "It retries the statement",
          "It commits the transaction"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 5,
        "explain_dr": "So2al 3la SIGNAL: bach t-generi erreur custom f trigger w t-blocki l operation, katst3ml SIGNAL SQLSTATE.",
        "text": "How do you raise a custom error inside a trigger?",
        "code": "IF NEW.qty < 0 THEN ???; END IF;",
        "answers": [
          "SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Bad quantity';",
          "THROW 'Bad quantity';",
          "RAISE ERROR;",
          "RETURN -1;"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 5,
        "explain_dr": "So2al 3la triggers: AFTER kat-ji mor ma t-ktbat l ligne — ma t9derch tbeddel NEW. Bach tbeddel l values, khask BEFORE.",
        "text": "In an AFTER UPDATE trigger, can you modify NEW.price?",
        "answers": [
          "No — the row is already written; use a BEFORE trigger to change values",
          "Yes, freely",
          "Only if you use SET",
          "Yes, but only once"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 28,
        "level": 5,
        "explain_dr": "So2al 3la transactions: ROLLBACK kat-rej3ek l l7ala li 9bel — kat-msa7 ga3 l modifications li mazal ma t-commitawch. COMMIT howa li kay-7fedhom.",
        "text": "What does ROLLBACK do?",
        "code": "START TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\n???;",
        "answers": [
          "It undoes all uncommitted changes in the transaction",
          "It saves the changes permanently",
          "It starts a new transaction",
          "It locks the tables"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 5,
        "explain_dr": "So2al 3la curseur: l curseur kay-mchi ligne b ligne (row-by-row) — SQL mzyan f set-based operations. Ilajab l curseur ghir mli ma 3ndekch 7el akhor.",
        "text": "Why can cursors be slow on large tables?",
        "answers": [
          "They process rows one by one instead of in sets",
          "They use too much disk space",
          "They lock the entire server",
          "They cannot use indexes at all"
        ],
        "correct": 0,
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
        "explain_dr": "So2al 3la MySQL: SHOW DATABASES katwrik ga3 l databases li kaynin f server. F MySQL, SHOW hiya l command dyal l3ard.",
        "text": "Quelle commande liste toutes les bases de données du serveur MySQL ?",
        "code": "mysql> ???",
        "answers": [
          "SHOW DATABASES;",
          "LIST DATABASES;",
          "SELECT DATABASES;",
          "DISPLAY DBS;"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al 3la AUTO_INCREMENT: mli katzid ligne jdida, MySQL katgeneri ra9m wa7ed b wa7ed bo7dha. Ghaliban katst3ml m3a PRIMARY KEY bach l id ytzed bo7do.",
        "text": "Que fait AUTO_INCREMENT sur une colonne ?",
        "answers": [
          "Il génère automatiquement un numéro unique pour chaque nouvelle ligne",
          "Il trie les valeurs de la colonne",
          "Il chiffre les valeurs",
          "Il supprime les doublons"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al 3la MySQL: SHOW TABLES katwrik l tables dyal l database li nta fiha daba.",
        "text": "Quelle commande liste les tables de la base courante ?",
        "answers": [
          "SHOW TABLES;",
          "LIST TABLES;",
          "SELECT TABLES;",
          "DESCRIBE ALL;"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al 3la types: BOOLEAN (wla TINYINT(1)) howa li katst3ml l true/false. TEXT l nass, BLOB l files, DATETIME l wa9t.",
        "text": "Quel type de données pour des valeurs vrai/faux ?",
        "answers": [
          "BOOLEAN",
          "TEXT",
          "BLOB",
          "DATETIME"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 4,
        "level": 2,
        "explain_dr": "So2al 3la engines: InnoDB howa l default f MySQL l7dita — kayda3m transactions w foreign keys. MyISAM 9dim w ma fihch transactions.",
        "text": "Quel est le moteur de stockage par défaut de MySQL moderne ?",
        "answers": [
          "InnoDB",
          "MyISAM",
          "MEMORY",
          "CSV"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 5,
        "level": 2,
        "explain_dr": "So2al 3la DESCRIBE: katwrik structure dyal table (columns, types, keys) — machi l data li ldakhel.",
        "text": "Que montre DESCRIBE users; ?",
        "answers": [
          "La structure de la table : colonnes, types et clés",
          "Les lignes stockées dans users",
          "La version du serveur",
          "Le plan d'exécution"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 6,
        "level": 2,
        "explain_dr": "So2al 3la types: CHAR fixed-length (dayman 10), VARCHAR variable (ghir 9ed li ktebti). VARCHAR mzyan l nass li twalhom mkhtalf.",
        "text": "Quelle est la différence entre CHAR(10) et VARCHAR(10) ?",
        "answers": [
          "CHAR réserve toujours 10 caractères, VARCHAR n'utilise que le nécessaire",
          "Aucune différence",
          "VARCHAR est toujours plus rapide",
          "CHAR ne peut pas stocker de texte"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 3,
        "explain_dr": "So2al 3la mysqldump: tool dyal backup — kaykherej l database kamla f fichier SQL bach t-restoreha mn b3d.",
        "text": "À quoi sert mysqldump ?",
        "code": "$ mysqldump mydb > backup.sql",
        "answers": [
          "À sauvegarder des bases dans un fichier",
          "À supprimer des tables",
          "À créer des utilisateurs",
          "À optimiser les requêtes lentes"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 8,
        "level": 3,
        "explain_dr": "So2al 3la LIKE: % kat3ni ay 7orof (wla walo), w _ kat3ni 7arf wa7ed b dabt.",
        "text": "Dans LIKE 'A%', que signifie le joker % ?",
        "code": "SELECT name FROM users WHERE name LIKE 'A%';",
        "answers": [
          "N'importe quelle suite de caractères, y compris vide",
          "Exactement un caractère",
          "Un signe pour cent littéral",
          "La fin de la chaîne"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 9,
        "level": 3,
        "explain_dr": "So2al 3la PRIMARY KEY: katfered blli l values unique w machi null, w MySQL kat-crei index bo7dha bach l recherche tkon sri3a.",
        "text": "Que garantit la définition d'une PRIMARY KEY ?",
        "answers": [
          "Valeurs uniques et jamais nulles, avec un index automatique",
          "Les valeurs peuvent se répéter",
          "La colonne est cachée de SELECT *",
          "Rien — c'est de la documentation"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 4,
        "explain_dr": "So2al 3la procedures: l procedure kat3yet liha b CALL, machi b SELECT wla RUN. Fker: chno l keyword li MySQL katst3mlo bach texecuti procedure?",
        "text": "Comment exécuter une procédure stockée nommée get_active_users ?",
        "code": "CREATE PROCEDURE get_active_users()\nBEGIN\n  SELECT * FROM users WHERE active = 1;\nEND",
        "answers": [
          "CALL get_active_users();",
          "RUN get_active_users();",
          "EXECUTE get_active_users;",
          "SELECT get_active_users();"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 11,
        "level": 4,
        "explain_dr": "So2al 3la parametres: IN kaydkhel valeur, OUT kaykherej valeur l caller, INOUT bjoj. Fker: OUT = output, ya3ni l procedure kat3tik valeur.",
        "text": "Dans CREATE PROCEDURE calc(OUT total INT), que signifie OUT ?",
        "answers": [
          "total est une valeur d'entrée",
          "total renvoie une valeur à l'appelant",
          "total est un nom de table",
          "total est optionnel"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 12,
        "level": 4,
        "explain_dr": "So2al 3la fonctions: ay fonction khasha t-returni valeur b RETURN, w 3ndha RETURNS f l declaration. Bla RETURN l fonction ma khdamach.",
        "text": "Que doit contenir toute fonction stockée MySQL ?",
        "code": "CREATE FUNCTION double_it(x INT) RETURNS INT\nBEGIN\n  ???\nEND",
        "answers": [
          "Une instruction RETURN",
          "Une instruction CALL",
          "Un TRIGGER",
          "Un index"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 13,
        "level": 4,
        "explain_dr": "So2al 3la DELIMITER: l body dyal procedure fih bzaf dyal ';' — ila ma bdeltich l delimiter, MySQL ghadi y7seb blli l CREATE sala f awel ';'. L delimiter jdid kay7mi l body kamel.",
        "text": "Pourquoi changer le DELIMITER avant de créer une procédure stockée ?",
        "code": "DELIMITER //\nCREATE PROCEDURE p()\nBEGIN\n  SELECT 1;\n  SELECT 2;\nEND //\nDELIMITER ;",
        "answers": [
          "Pour accélérer la procédure",
          "Pour que les points-virgules du corps ne terminent pas le CREATE prématurément",
          "Pour chiffrer le code",
          "C'est obligatoire pour toutes les requêtes"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 4,
        "explain_dr": "So2al 3la IF: f MySQL katkteb IF condition THEN ... END IF; — machi bhal JavaScript b l accolades. 7fed l syntax mzyan.",
        "text": "Quelle syntaxe IF est correcte dans une procédure MySQL ?",
        "answers": [
          "IF x > 5 THEN SET y = 1; END IF;",
          "if (x > 5) { y = 1; }",
          "WHEN x > 5 DO y = 1;",
          "IF x > 5: y = 1"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 15,
        "level": 4,
        "explain_dr": "So2al 3la variables: f wast procedure kat-declari b DECLARE x INT; — machi VAR wla LET b7al JavaScript.",
        "text": "Comment déclarer une variable locale dans une procédure ?",
        "code": "CREATE PROCEDURE p()\nBEGIN\n  ???\n  SET x = 5;\nEND",
        "answers": [
          "DECLARE x INT;",
          "VAR x INT;",
          "LET x = 5;",
          "DIM x AS INT;"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 16,
        "level": 4,
        "explain_dr": "So2al 3la parametres: IN = dkhel valeur, OUT = kherej valeur, INOUT = bjoj (dkhel w kherej).",
        "text": "Quelle est la différence entre un paramètre IN et INOUT ?",
        "answers": [
          "IN fait entrer une valeur, INOUT fait entrer une valeur et en renvoie une nouvelle",
          "Aucune différence",
          "INOUT est plus rapide",
          "IN peut aussi renvoyer des valeurs"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 17,
        "level": 4,
        "explain_dr": "So2al 3la MySQL: SHOW PROCEDURE STATUS katwrik ga3 l procedures li kaynin.",
        "text": "Comment lister toutes les procédures stockées ?",
        "answers": [
          "SHOW PROCEDURE STATUS;",
          "LIST PROCEDURES;",
          "SELECT PROCEDURES;",
          "DESCRIBE PROCEDURES;"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 18,
        "level": 4,
        "explain_dr": "So2al 3la loops: REPEAT kat-khdem lwl w kat-checki l condition f lkher (b7al do-while) — dayman kat-executa mra wa7da 3la l a9al.",
        "text": "Quelle boucle exécute toujours son corps au moins une fois ?",
        "code": "???\n  SET x = x + 1;\nUNTIL x >= 10 END REPEAT;",
        "answers": [
          "REPEAT ... UNTIL",
          "WHILE ... DO",
          "LOOP avec LEAVE au début",
          "FOR EACH"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 19,
        "level": 4,
        "explain_dr": "So2al 3la LOOP: bach tkherej mn loop katst3ml LEAVE label; — BREAK dyal JavaScript ma khdamach hna.",
        "text": "Dans une procédure, comment sortir d'une boucle LOOP plus tôt ?",
        "code": "my_loop: LOOP\n  IF x > 10 THEN ???; END IF;\nEND LOOP my_loop;",
        "answers": [
          "LEAVE my_loop;",
          "BREAK;",
          "EXIT LOOP;",
          "STOP;"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 20,
        "level": 5,
        "explain_dr": "So2al 3la curseur: lwl kat-declarih (DECLARE), kat7elo (OPEN), katjbed ligne b ligne (FETCH), w f lkher katsedo (CLOSE). Had l ordre ma kaytbdlch.",
        "text": "Quel est l'ordre correct des opérations d'un curseur ?",
        "answers": [
          "DECLARE → OPEN → FETCH → CLOSE",
          "OPEN → DECLARE → FETCH → CLOSE",
          "DECLARE → FETCH → OPEN → CLOSE",
          "FETCH → OPEN → CLOSE → DECLARE"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 21,
        "level": 5,
        "explain_dr": "So2al 3la HANDLER: mli l curseur kaywsl l lkher (ma b9at ta ligne), MySQL katgeneri NOT FOUND — had l handler kay7et done = TRUE bach t3ref imta t7bes l loop.",
        "text": "À quoi sert ce handler ?",
        "code": "DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;",
        "answers": [
          "À détecter quand le curseur n'a plus de lignes",
          "À arrêter la procédure sur n'importe quelle erreur",
          "À créer une nouvelle variable",
          "À valider la transaction"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 22,
        "level": 5,
        "explain_dr": "So2al 3la NEW/OLD: OLD = l valeur l9dima (9bel l update), NEW = l valeur jdida. F BEFORE UPDATE, OLD.price hiya l price li kanet 9bel.",
        "text": "Dans un trigger BEFORE UPDATE sur products, que contient OLD.price ?",
        "answers": [
          "Le prix avant la mise à jour",
          "Le nouveau prix en cours d'affectation",
          "Toujours 0",
          "Le prix moyen"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 5,
        "explain_dr": "So2al 3la triggers: bach t-blocki insert khayb, khask BEFORE INSERT (9bel ma ydkhel) w t-generi erreur b SIGNAL. AFTER INSERT kayji m3etel — l ligne deja dkhlat.",
        "text": "Vous voulez rejeter un INSERT quand la quantité est négative. Quel trigger utiliser ?",
        "answers": [
          "BEFORE INSERT",
          "AFTER INSERT",
          "BEFORE DELETE",
          "AFTER UPDATE"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 24,
        "level": 5,
        "explain_dr": "So2al 3la CASE: l syntax hiya CASE WHEN condition THEN valeur ... ELSE ... END. Katst3ml wast SELECT bla ma t7taj procedure.",
        "text": "Quelle expression CASE est correcte ?",
        "code": "SELECT name, ??? AS availability FROM products;",
        "answers": [
          "CASE WHEN stock > 0 THEN 'en stock' ELSE 'rupture' END",
          "CASE stock > 0 THEN 'en stock' END CASE",
          "IF stock > 0 THEN 'en stock' ELSE 'rupture'",
          "SWITCH(stock) { case > 0: 'en stock' }"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 25,
        "level": 5,
        "explain_dr": "So2al 3la handlers: EXIT HANDLER kat-7bes l procedure mli kat-w93 erreur SQL — l far9 binha w bin CONTINUE li kat-kemel.",
        "text": "Que fait DECLARE EXIT HANDLER FOR SQLEXCEPTION ?",
        "answers": [
          "Il arrête la procédure dès qu'une erreur SQL survient",
          "Il ignore toutes les erreurs",
          "Il réessaie l'instruction",
          "Il valide la transaction"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 5,
        "explain_dr": "So2al 3la SIGNAL: bach t-generi erreur custom f trigger w t-blocki l operation, katst3ml SIGNAL SQLSTATE.",
        "text": "Comment lever une erreur personnalisée dans un trigger ?",
        "code": "IF NEW.qty < 0 THEN ???; END IF;",
        "answers": [
          "SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Bad quantity';",
          "THROW 'Bad quantity';",
          "RAISE ERROR;",
          "RETURN -1;"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 5,
        "explain_dr": "So2al 3la triggers: AFTER kat-ji mor ma t-ktbat l ligne — ma t9derch tbeddel NEW. Bach tbeddel l values, khask BEFORE.",
        "text": "Dans un trigger AFTER UPDATE, peut-on modifier NEW.price ?",
        "answers": [
          "Non — la ligne est déjà écrite ; utilisez BEFORE pour modifier les valeurs",
          "Oui, librement",
          "Seulement avec SET",
          "Oui, mais une seule fois"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 28,
        "level": 5,
        "explain_dr": "So2al 3la transactions: ROLLBACK kat-rej3ek l l7ala li 9bel — kat-msa7 ga3 l modifications li mazal ma t-commitawch. COMMIT howa li kay-7fedhom.",
        "text": "Que fait ROLLBACK ?",
        "code": "START TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\n???;",
        "answers": [
          "Il annule toutes les modifications non validées de la transaction",
          "Il enregistre définitivement les modifications",
          "Il démarre une nouvelle transaction",
          "Il verrouille les tables"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 5,
        "explain_dr": "So2al 3la curseur: l curseur kay-mchi ligne b ligne (row-by-row) — SQL mzyan f set-based operations. Ilajab l curseur ghir mli ma 3ndekch 7el akhor.",
        "text": "Pourquoi les curseurs peuvent-ils être lents sur de grandes tables ?",
        "answers": [
          "Ils traitent les lignes une par une au lieu de travailler par ensembles",
          "Ils utilisent trop d'espace disque",
          "Ils verrouillent tout le serveur",
          "Ils ne peuvent pas du tout utiliser d'index"
        ],
        "correct": 0,
        "selection": null
      },
    ]
  }
];
