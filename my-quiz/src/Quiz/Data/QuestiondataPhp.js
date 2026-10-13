export const phpQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "text": "What will this code output?",
        "code": "$name = \"Aymane\";\necho \"Hello $name!\";",
        "answers": [
          "Hello $name!",
          "Hello Aymane!",
          "$name",
          "Error"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "text": "What will this code output?",
        "code": "$name = \"Aymane\";\necho 'Hello $name!';",
        "answers": [
          "Hello $name!",
          "Hello Aymane!",
          "Error",
          "Hello !"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "text": "What will this code output?",
        "code": "$a = 5;\n$b = 10;\necho $a + $b;",
        "answers": [
          "510",
          "5",
          "15",
          "50"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "text": "What will this code output?",
        "code": "echo 10 % 3;",
        "answers": [
          "3",
          "3.33",
          "0",
          "1"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "text": "What will this code output?",
        "code": "echo \"Hello\" . \" \" . \"World\";",
        "answers": [
          "HelloWorld",
          "Hello World",
          "Hello+World",
          "Error"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "text": "What will this code output?",
        "code": "$arr = [1, 2, 3];\necho count($arr);",
        "answers": [
          "3",
          "2",
          "6",
          "Error"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "text": "What will this code output?",
        "code": "echo strlen(\"hello\");",
        "answers": [
          "4",
          "6",
          "5",
          "hello"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "text": "What will this code output?",
        "code": "$x = 5;\necho $x++;",
        "answers": [
          "6",
          "4",
          "Error",
          "5"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "text": "What will this code output?",
        "code": "echo 2 ** 3;",
        "answers": [
          "6",
          "8",
          "9",
          "23"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "text": "What will this code output?",
        "code": "$isAdmin = true;\necho $isAdmin ? \"yes\" : \"no\";",
        "answers": [
          "yes",
          "no",
          "1",
          "true"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "text": "What will this code output?",
        "code": "echo \"5\" + 3;",
        "answers": [
          "53",
          "5",
          "8",
          "Error"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "text": "What will this code output?",
        "code": "var_dump(\"5\" == 5);\nvar_dump(\"5\" === 5);",
        "answers": [
          "false false",
          "false true",
          "true true",
          "true false"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "text": "What will this code output?",
        "code": "echo 1 . 2 + 3;",
        "answers": [
          "15",
          "123",
          "6",
          "Error"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "text": "What will this code output?",
        "code": "$a = \"10\";\n$b = $a + 5;\necho gettype($b);",
        "answers": [
          "string",
          "integer",
          "double",
          "number"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "text": "What will this code output?",
        "code": "$fruits = [\"apple\", \"banana\"];\n$fruits[] = \"cherry\";\necho count($fruits);",
        "answers": [
          "2",
          "4",
          "3",
          "Error"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "text": "What will this code output?",
        "code": "$x = null;\necho $x ?? \"default\";",
        "answers": [
          "",
          "null",
          "Error",
          "default"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "text": "What will this code output?",
        "code": "echo isset($undefinedVar) ? \"yes\" : \"no\";",
        "answers": [
          "no",
          "yes",
          "Error",
          "null"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "text": "What will this code output?",
        "code": "echo strtoupper(\"hello\");",
        "answers": [
          "hello",
          "HELLO",
          "Hello",
          "Error"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "text": "What will this code output?",
        "code": "$arr = [\"a\", \"b\", \"c\"];\necho $arr[1];",
        "answers": [
          "a",
          "c",
          "b",
          "Error"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "text": "What will this code output?",
        "code": "echo empty(\"\") ? \"empty\" : \"not empty\";",
        "answers": [
          "not empty",
          "false",
          "Error",
          "empty"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "text": "A form submits name=Aymane with method POST. Which line correctly greets the user?",
        "code": "// $_POST[\"name\"] is \"Aymane\"",
        "answers": [
          "echo \"Hi \" . $_POST[\"name\"];",
          "echo \"Hi \" . $_GET[\"name\"];",
          "echo \"Hi \" . $POST[\"name\"];",
          "echo \"Hi \" . $_REQUEST;"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "text": "What will this code output?",
        "code": "$numbers = [3, 1, 2];\nsort($numbers);\necho implode(\",\", $numbers);",
        "answers": [
          "3,1,2",
          "1,2,3",
          "2,3,1",
          "Error"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "text": "What will this code output?",
        "code": "$user = [\"name\" => \"Aymane\", \"age\" => 25];\necho $user[\"name\"];",
        "answers": [
          "name",
          "25",
          "Error",
          "Aymane"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "text": "What will this code output?",
        "code": "echo in_array(\"b\", [\"a\", \"b\", \"c\"]) ? \"found\" : \"missing\";",
        "answers": [
          "missing",
          "1",
          "found",
          "Error"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "text": "What will this code output?",
        "code": "$text = \"a,b,c\";\n$parts = explode(\",\", $text);\necho count($parts);",
        "answers": [
          "3",
          "1",
          "5",
          "Error"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "text": "What will this code output?",
        "code": "echo array_sum([1, 2, 3, 4]);",
        "answers": [
          "24",
          "10",
          "1234",
          "Error"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "text": "Why does page2.php print nothing (and raise an undefined-index warning)?",
        "code": "// page1.php\nsession_start();\n$_SESSION[\"user\"] = \"Aymane\";\n// page2.php (no session_start() call)\necho $_SESSION[\"user\"];",
        "answers": [
          "$_SESSION was never set",
          "Sessions don't work across pages",
          "$_SESSION is read-only",
          "page2.php never called session_start()"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "text": "What will this code output?",
        "code": "foreach ([\"a\", \"b\"] as $letter) {\n    echo $letter . \" \";\n}",
        "answers": [
          "ab",
          "0 1",
          "a b",
          "Error"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "text": "What will this code output?",
        "code": "echo htmlspecialchars(\"<b>Hi</b>\");",
        "answers": [
          "&lt;b&gt;Hi&lt;/b&gt;",
          "<b>Hi</b>",
          "Hi",
          "Error"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "text": "What will this code output?",
        "code": "$data = [\"x\" => 1, \"y\" => 2];\necho array_key_exists(\"z\", $data) ? \"yes\" : \"no\";",
        "answers": [
          "yes",
          "no",
          "1",
          "Error"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "text": "What will this code output?",
        "code": "function add(&$n) { $n += 10; }\n$x = 5;\nadd($x);\necho $x;",
        "answers": [
          "5",
          "15",
          "10",
          "Error"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "text": "What will this code output?",
        "code": "$a = 1;\n$b = &$a;\n$b = 2;\necho $a;",
        "answers": [
          "1",
          "3",
          "2",
          "Error"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "text": "What will this code output?",
        "code": "echo \"Result: \" . 5 * 2;",
        "answers": [
          "Result: 52",
          "Result: 7",
          "Error",
          "Result: 10"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "text": "What will this code output?",
        "code": "$items = [1, 2, 3];\nforeach ($items as &$v) { $v *= 2; }\necho implode(\",\", $items);",
        "answers": [
          "2,4,6",
          "1,2,3",
          "2,2,2",
          "Error"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "text": "What will this code output?",
        "code": "var_dump(empty(\"0\"));",
        "answers": [
          "bool(false)",
          "bool(true)",
          "NULL",
          "Error"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "text": "What will this code output?",
        "code": "echo (int)\"12abc\";",
        "answers": [
          "0",
          "12abc",
          "12",
          "Error"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "text": "What will this code output?",
        "code": "function greet($name = \"Guest\") {\n    return \"Hi $name\";\n}\necho greet();",
        "answers": [
          "Hi ",
          "Hi $name",
          "Error",
          "Hi Guest"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "text": "What will this code output?",
        "code": "function counter() {\n    static $n = 0;\n    $n++;\n    return $n;\n}\necho counter() . counter() . counter();",
        "answers": [
          "123",
          "111",
          "333",
          "012"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "text": "What will this code output?",
        "code": "$a = [1, 2];\n$b = [3, 4];\n$c = $a + $b;\necho count($c);",
        "answers": [
          "4",
          "2",
          "0",
          "Error"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "text": "What will this code output?",
        "code": "$x = [1, 2, 3];\n$y = $x;\n$y[] = 4;\necho count($x);",
        "answers": [
          "4",
          "0",
          "3",
          "Error"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "text": "What will this code output?",
        "code": "echo 0.1 + 0.2;",
        "answers": [
          "0.3",
          "0.30",
          "0",
          "0.30000000000000004"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "text": "What will this code output?",
        "code": "echo (bool)\"false\";",
        "answers": [
          "1",
          "0",
          "false",
          ""
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "text": "What will this code output?",
        "code": "echo gettype(1.0);",
        "answers": [
          "float",
          "double",
          "decimal",
          "number"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "text": "What will this code output? (UTF-8 encoded)",
        "code": "echo strlen(\"héllo\");",
        "answers": [
          "5",
          "7",
          "6",
          "Error"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "text": "What will this code output?",
        "code": "echo date(\"Y\", 0);",
        "answers": [
          "1971",
          "1969",
          "Error",
          "1970"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "text": "What will this code output?",
        "code": "function test() { return; }\nvar_dump(test());",
        "answers": [
          "NULL",
          "bool(false)",
          "int(0)",
          "string(0) \"\""
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "text": "What will this code output?",
        "code": "echo \"5 apples\" + 2;",
        "answers": [
          "5 apples2",
          "7",
          "52",
          "Error"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "text": "What will this code output?",
        "code": "var_dump(is_numeric(\"42\"));",
        "answers": [
          "bool(false)",
          "int(1)",
          "bool(true)",
          "Error"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "text": "The developer meant to compare. What happens?",
        "code": "$loggedIn = false;\nif ($loggedIn = true) {\n    echo \"welcome\";\n}",
        "answers": [
          "Nothing prints",
          "Syntax error",
          "\"false\" prints",
          "\"welcome\" prints (assignment, not comparison)"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "text": "What will this code output?",
        "code": "echo (int)true + (int)false;",
        "answers": [
          "1",
          "0",
          "2",
          "Error"
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
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "$name = \"Aymane\";\necho \"Hello $name!\";",
        "answers": [
          "Hello $name!",
          "Hello Aymane!",
          "$name",
          "Erreur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "$name = \"Aymane\";\necho 'Hello $name!';",
        "answers": [
          "Hello $name!",
          "Hello Aymane!",
          "Erreur",
          "Hello !"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "$a = 5;\n$b = 10;\necho $a + $b;",
        "answers": [
          "510",
          "5",
          "15",
          "50"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "echo 10 % 3;",
        "answers": [
          "3",
          "3.33",
          "0",
          "1"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "echo \"Hello\" . \" \" . \"World\";",
        "answers": [
          "HelloWorld",
          "Hello World",
          "Hello+World",
          "Erreur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "$arr = [1, 2, 3];\necho count($arr);",
        "answers": [
          "3",
          "2",
          "6",
          "Erreur"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "echo strlen(\"hello\");",
        "answers": [
          "4",
          "6",
          "5",
          "hello"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "$x = 5;\necho $x++;",
        "answers": [
          "6",
          "4",
          "Erreur",
          "5"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "echo 2 ** 3;",
        "answers": [
          "6",
          "8",
          "9",
          "23"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "$isAdmin = true;\necho $isAdmin ? \"yes\" : \"no\";",
        "answers": [
          "yes",
          "no",
          "1",
          "true"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "echo \"5\" + 3;",
        "answers": [
          "53",
          "5",
          "8",
          "Erreur"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "var_dump(\"5\" == 5);\nvar_dump(\"5\" === 5);",
        "answers": [
          "false false",
          "false true",
          "true true",
          "true false"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "echo 1 . 2 + 3;",
        "answers": [
          "15",
          "123",
          "6",
          "Erreur"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "$a = \"10\";\n$b = $a + 5;\necho gettype($b);",
        "answers": [
          "string",
          "integer",
          "double",
          "number"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "$fruits = [\"apple\", \"banana\"];\n$fruits[] = \"cherry\";\necho count($fruits);",
        "answers": [
          "2",
          "4",
          "3",
          "Erreur"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "$x = null;\necho $x ?? \"default\";",
        "answers": [
          "",
          "null",
          "Erreur",
          "default"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "echo isset($undefinedVar) ? \"yes\" : \"no\";",
        "answers": [
          "no",
          "yes",
          "Erreur",
          "null"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "echo strtoupper(\"hello\");",
        "answers": [
          "hello",
          "HELLO",
          "Hello",
          "Erreur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "$arr = [\"a\", \"b\", \"c\"];\necho $arr[1];",
        "answers": [
          "a",
          "c",
          "b",
          "Erreur"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "echo empty(\"\") ? \"empty\" : \"not empty\";",
        "answers": [
          "not empty",
          "false",
          "Erreur",
          "empty"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "text": "Un formulaire envoie name=Aymane en méthode POST. Quelle ligne salue correctement l'utilisateur ?",
        "code": "// $_POST[\"name\"] vaut \"Aymane\"",
        "answers": [
          "echo \"Hi \" . $_POST[\"name\"];",
          "echo \"Hi \" . $_GET[\"name\"];",
          "echo \"Hi \" . $POST[\"name\"];",
          "echo \"Hi \" . $_REQUEST;"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "$numbers = [3, 1, 2];\nsort($numbers);\necho implode(\",\", $numbers);",
        "answers": [
          "3,1,2",
          "1,2,3",
          "2,3,1",
          "Erreur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "$user = [\"name\" => \"Aymane\", \"age\" => 25];\necho $user[\"name\"];",
        "answers": [
          "name",
          "25",
          "Erreur",
          "Aymane"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "echo in_array(\"b\", [\"a\", \"b\", \"c\"]) ? \"found\" : \"missing\";",
        "answers": [
          "missing",
          "1",
          "found",
          "Erreur"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "$text = \"a,b,c\";\n$parts = explode(\",\", $text);\necho count($parts);",
        "answers": [
          "3",
          "1",
          "5",
          "Erreur"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "echo array_sum([1, 2, 3, 4]);",
        "answers": [
          "24",
          "10",
          "1234",
          "Erreur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "text": "Pourquoi page2.php n'affiche rien (et lève un avertissement d'index indéfini) ?",
        "code": "// page1.php\nsession_start();\n$_SESSION[\"user\"] = \"Aymane\";\n// page2.php (aucun appel à session_start())\necho $_SESSION[\"user\"];",
        "answers": [
          "$_SESSION n'a jamais été défini",
          "Les sessions ne marchent pas entre les pages",
          "$_SESSION est en lecture seule",
          "page2.php n'a jamais appelé session_start()"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "foreach ([\"a\", \"b\"] as $letter) {\n    echo $letter . \" \";\n}",
        "answers": [
          "ab",
          "0 1",
          "a b",
          "Erreur"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "echo htmlspecialchars(\"<b>Hi</b>\");",
        "answers": [
          "&lt;b&gt;Hi&lt;/b&gt;",
          "<b>Hi</b>",
          "Hi",
          "Erreur"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "$data = [\"x\" => 1, \"y\" => 2];\necho array_key_exists(\"z\", $data) ? \"yes\" : \"no\";",
        "answers": [
          "yes",
          "no",
          "1",
          "Erreur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "function add(&$n) { $n += 10; }\n$x = 5;\nadd($x);\necho $x;",
        "answers": [
          "5",
          "15",
          "10",
          "Erreur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "$a = 1;\n$b = &$a;\n$b = 2;\necho $a;",
        "answers": [
          "1",
          "3",
          "2",
          "Erreur"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "echo \"Result: \" . 5 * 2;",
        "answers": [
          "Result: 52",
          "Result: 7",
          "Erreur",
          "Result: 10"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "$items = [1, 2, 3];\nforeach ($items as &$v) { $v *= 2; }\necho implode(\",\", $items);",
        "answers": [
          "2,4,6",
          "1,2,3",
          "2,2,2",
          "Erreur"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "var_dump(empty(\"0\"));",
        "answers": [
          "bool(false)",
          "bool(true)",
          "NULL",
          "Erreur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "echo (int)\"12abc\";",
        "answers": [
          "0",
          "12abc",
          "12",
          "Erreur"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "function greet($name = \"Guest\") {\n    return \"Hi $name\";\n}\necho greet();",
        "answers": [
          "Hi ",
          "Hi $name",
          "Erreur",
          "Hi Guest"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "function counter() {\n    static $n = 0;\n    $n++;\n    return $n;\n}\necho counter() . counter() . counter();",
        "answers": [
          "123",
          "111",
          "333",
          "012"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "$a = [1, 2];\n$b = [3, 4];\n$c = $a + $b;\necho count($c);",
        "answers": [
          "4",
          "2",
          "0",
          "Erreur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "$x = [1, 2, 3];\n$y = $x;\n$y[] = 4;\necho count($x);",
        "answers": [
          "4",
          "0",
          "3",
          "Erreur"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "echo 0.1 + 0.2;",
        "answers": [
          "0.3",
          "0.30",
          "0",
          "0.30000000000000004"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "echo (bool)\"false\";",
        "answers": [
          "1",
          "0",
          "false",
          ""
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "echo gettype(1.0);",
        "answers": [
          "float",
          "double",
          "decimal",
          "number"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "text": "Qu'est-ce que ce code va afficher ? (encodé en UTF-8)",
        "code": "echo strlen(\"héllo\");",
        "answers": [
          "5",
          "7",
          "6",
          "Erreur"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "echo date(\"Y\", 0);",
        "answers": [
          "1971",
          "1969",
          "Erreur",
          "1970"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "function test() { return; }\nvar_dump(test());",
        "answers": [
          "NULL",
          "bool(false)",
          "int(0)",
          "string(0) \"\""
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "echo \"5 apples\" + 2;",
        "answers": [
          "5 apples2",
          "7",
          "52",
          "Erreur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "var_dump(is_numeric(\"42\"));",
        "answers": [
          "bool(false)",
          "int(1)",
          "bool(true)",
          "Erreur"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "text": "Le développeur voulait comparer. Que se passe-t-il ?",
        "code": "$loggedIn = false;\nif ($loggedIn = true) {\n    echo \"welcome\";\n}",
        "answers": [
          "Rien ne s'affiche",
          "Erreur de syntaxe",
          "\"false\" s'affiche",
          "\"welcome\" s'affiche (assignation, pas comparaison)"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "echo (int)true + (int)false;",
        "answers": [
          "1",
          "0",
          "2",
          "Erreur"
        ],
        "correct": 0,
        "selection": null
      }
    ]
  }
];
