export const phpQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la double quotes f PHP: wach l variable kattexpanda ldakhel? Fker f l far9 bin \" w '.",
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
        "explain_dr": "So2al kaysewlk 3la single quotes: wach $name katbdel b 9imtha wla katb9a kima hiya? Fker f interpolation.",
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
        "explain_dr": "So2al kaysewlk 3la + m3a numbers: ghir jme3 3adi bin 5 w 10. Fker fih.",
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
        "explain_dr": "So2al kaysewlk 3la % : chnu howa l ba9i dyal 10 / 3? Fker f l9isma.",
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
        "explain_dr": "So2al kaysewlk 3la l no9ta . : chnu katdir bin strings? Fker f concatenation.",
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
        "explain_dr": "So2al kaysewlk 3la count(): chnu kat7seb b dabt? Fker f 3adad l 3anaser.",
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
        "explain_dr": "So2al kaysewlk 3la strlen(): chnu kat7seb - 7rouf wla 7aja khra? Fker f 'hello'.",
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
        "explain_dr": "So2al kaysewlk 3la $x++: wach kayrje3 l 9ima 9bel ma tzad wla mor ma tzad? Fker f post-increment.",
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
        "explain_dr": "So2al kaysewlk 3la ** : chnu kat3ni juj njoum? Fker f l 9owa.",
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
        "explain_dr": "So2al kaysewlk 3la ternary: mli l condition true, chnu kaytrje3? Fker f yes w no.",
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
        "explain_dr": "So2al kaysewlk 3la + m3a \"5\": wach PHP kaylse9 wla kay7wel l number? Fker f type juggling.",
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
        "explain_dr": "So2al kaysewlk 3la == vs ===: chkun kay9aren ghir l 9ima w chkun kay9aren l type m3aha? Fker f l far9.",
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
        "explain_dr": "So2al kaysewlk 3la l priority: . w + chkun kayt7seb lwel? Fker f l ordre.",
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
        "explain_dr": "So2al kaysewlk 3la gettype: \"10\" + 5 kaywli chnu b dabt? Fker f l type jjdid.",
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
        "explain_dr": "So2al kaysewlk 3la $fruits[] = : chnu katdir had syntax? Fker f ch7al wlaw l 3anaser.",
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
        "explain_dr": "So2al kaysewlk 3la ??: mli l variable null, chnu kayrje3? Fker f l 9ima l badiila.",
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
        "explain_dr": "So2al kaysewlk 3la isset m3a variable ma m3rfa: wach kayrje3 false bla error? Fker fih.",
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
        "explain_dr": "So2al kaysewlk 3la strtoupper: chnu katdir l \"hello\"? Fker f l7rouf l kbar.",
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
        "explain_dr": "So2al kaysewlk 3la l index: arrays f PHP kaybdaw mn ch7al? Fker f 0.",
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
        "explain_dr": "So2al kaysewlk 3la empty(): wach string khawya kat7seb empty? Fker f l ma3na dyalha.",
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
        "explain_dr": "So2al kaysewlk 3la forms: form b method POST, data fin katmchi? Fker f $_POST vs $_GET.",
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
        "explain_dr": "So2al kaysewlk 3la sort(): wach katbedel l array l asliya wla katrje3 wa7da mrteba? Fker f l ordre.",
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
        "explain_dr": "So2al kaysewlk 3la associative arrays: kifach katwsel l 9ima b l key? Fker f [\"name\"].",
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
        "explain_dr": "So2al kaysewlk 3la in_array(): chnu kat9leb - wach l 9ima kayna? Fker f found wla missing.",
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
        "explain_dr": "So2al kaysewlk 3la explode(): chnu katdir b \"a,b,c\"? Fker f ch7al dyal l 9ita3.",
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
        "explain_dr": "So2al kaysewlk 3la array_sum(): wach katjme3 wla katlse9? Fker f l majmou3.",
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
        "explain_dr": "So2al kaysewlk 3la sessions: 3lach page2 ma l9at walo? Fker f chnu khass t3yet lih 9bel ma t9ra session.",
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
        "explain_dr": "So2al kaysewlk 3la foreach: chnu kaytbe3 f kol dawra? Fker f l 7rouf w l space.",
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
        "explain_dr": "So2al kaysewlk 3la htmlspecialchars(): chnu katdir l < w >? Fker f l7imaya mn XSS.",
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
        "explain_dr": "So2al kaysewlk 3la array_key_exists(): kat9leb 3la key wla 3la value? Fker f \"z\".",
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
        "explain_dr": "So2al kaysewlk 3la & f parameters: wach l function katbedel l variable l asliya? Fker f reference.",
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
        "explain_dr": "So2al kaysewlk 3la $b = &$a: mli katbedel $b, wach $a katbedel m3aha? Fker f nafs l blassa.",
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
        "explain_dr": "So2al kaysewlk 3la l priority: . w * chkun lwel? Fker f l ordre dyal l 7seb.",
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
        "explain_dr": "So2al kaysewlk 3la foreach b &: wach l modifications katb9a f l array? Fker f reference.",
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
        "explain_dr": "So2al kaysewlk 3la empty(): wach \"0\" kat7seb empty f PHP? Kayna 7ala khassa, fker fiha.",
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
        "explain_dr": "So2al kaysewlk 3la (int) cast: string li katbda b a9am w moraha 7rouf, chnu kayw9e3? Fker f l a9am l wlin.",
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
        "explain_dr": "So2al kaysewlk 3la default parameters: mli ma kat3ti walo, chnu kaytsta3mel? Fker f \"Guest\".",
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
        "explain_dr": "So2al kaysewlk 3la static: wach $n katnsa 9imtha bin l calls wla kat7fedha? Fker f l calls l mtab3a.",
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
        "explain_dr": "So2al kaysewlk 3la + m3a arrays: wach kayjme3hom kamlin? Fker f union w l keys.",
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
        "explain_dr": "So2al kaysewlk 3la copy: $y = $x wach copy 7a9i9iya? Fker f value vs reference.",
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
        "explain_dr": "So2al kaysewlk 3la floats: 3lach 0.1 + 0.2 ma kat3tich 0.3 nichan? Fker f l binary.",
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
        "explain_dr": "So2al kaysewlk 3la (bool) cast: wach ay string ma khawyach katwli true, 7ta \"false\"? Fker fih.",
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
        "explain_dr": "So2al kaysewlk 3la gettype(1.0): chnu smit l type dyal l a3dad l 3ochriya f PHP? Fker fih.",
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
        "explain_dr": "So2al kaysewlk 3la strlen m3a UTF-8: wach kat7seb l 7rouf wla l bytes? Fker f e ch7al mn byte.",
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
        "explain_dr": "So2al kaysewlk 3la timestamps: chnu kat3ni timestamp 0? Fker f lbdya dyal l wa9t f Unix.",
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
        "explain_dr": "So2al kaysewlk 3la return bla 9ima: chnu katrje3 l function? Fker f NULL.",
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
        "explain_dr": "So2al kaysewlk 3la type juggling: string li katbda b ra9m, chnu kayw9e3 mli katjme3ha? Fker f l ra9m l wli.",
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
        "explain_dr": "So2al kaysewlk 3la is_numeric(): wach \"42\" kat7seb numeric? Fker f string dyal a9am.",
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
        "explain_dr": "So2al kaysewlk 3la = vs == f if: chnu kayw9e3 mli katkteb = wa7da? Fker f assignment.",
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
        "explain_dr": "So2al kaysewlk 3la (int) cast dyal booleans: true w false ch7al kaywliw? Fker f l 9iyam dyalhom.",
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
        "explain_dr": "So2al kaysewlk 3la double quotes f PHP: wach l variable kattexpanda ldakhel? Fker f l far9 bin \" w '.",
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
        "explain_dr": "So2al kaysewlk 3la single quotes: wach $name katbdel b 9imtha wla katb9a kima hiya? Fker f interpolation.",
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
        "explain_dr": "So2al kaysewlk 3la + m3a numbers: ghir jme3 3adi bin 5 w 10. Fker fih.",
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
        "explain_dr": "So2al kaysewlk 3la % : chnu howa l ba9i dyal 10 / 3? Fker f l9isma.",
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
        "explain_dr": "So2al kaysewlk 3la l no9ta . : chnu katdir bin strings? Fker f concatenation.",
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
        "explain_dr": "So2al kaysewlk 3la count(): chnu kat7seb b dabt? Fker f 3adad l 3anaser.",
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
        "explain_dr": "So2al kaysewlk 3la strlen(): chnu kat7seb - 7rouf wla 7aja khra? Fker f 'hello'.",
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
        "explain_dr": "So2al kaysewlk 3la $x++: wach kayrje3 l 9ima 9bel ma tzad wla mor ma tzad? Fker f post-increment.",
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
        "explain_dr": "So2al kaysewlk 3la ** : chnu kat3ni juj njoum? Fker f l 9owa.",
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
        "explain_dr": "So2al kaysewlk 3la ternary: mli l condition true, chnu kaytrje3? Fker f yes w no.",
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
        "explain_dr": "So2al kaysewlk 3la + m3a \"5\": wach PHP kaylse9 wla kay7wel l number? Fker f type juggling.",
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
        "explain_dr": "So2al kaysewlk 3la == vs ===: chkun kay9aren ghir l 9ima w chkun kay9aren l type m3aha? Fker f l far9.",
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
        "explain_dr": "So2al kaysewlk 3la l priority: . w + chkun kayt7seb lwel? Fker f l ordre.",
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
        "explain_dr": "So2al kaysewlk 3la gettype: \"10\" + 5 kaywli chnu b dabt? Fker f l type jjdid.",
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
        "explain_dr": "So2al kaysewlk 3la $fruits[] = : chnu katdir had syntax? Fker f ch7al wlaw l 3anaser.",
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
        "explain_dr": "So2al kaysewlk 3la ??: mli l variable null, chnu kayrje3? Fker f l 9ima l badiila.",
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
        "explain_dr": "So2al kaysewlk 3la isset m3a variable ma m3rfa: wach kayrje3 false bla error? Fker fih.",
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
        "explain_dr": "So2al kaysewlk 3la strtoupper: chnu katdir l \"hello\"? Fker f l7rouf l kbar.",
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
        "explain_dr": "So2al kaysewlk 3la l index: arrays f PHP kaybdaw mn ch7al? Fker f 0.",
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
        "explain_dr": "So2al kaysewlk 3la empty(): wach string khawya kat7seb empty? Fker f l ma3na dyalha.",
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
        "explain_dr": "So2al kaysewlk 3la forms: form b method POST, data fin katmchi? Fker f $_POST vs $_GET.",
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
        "explain_dr": "So2al kaysewlk 3la sort(): wach katbedel l array l asliya wla katrje3 wa7da mrteba? Fker f l ordre.",
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
        "explain_dr": "So2al kaysewlk 3la associative arrays: kifach katwsel l 9ima b l key? Fker f [\"name\"].",
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
        "explain_dr": "So2al kaysewlk 3la in_array(): chnu kat9leb - wach l 9ima kayna? Fker f found wla missing.",
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
        "explain_dr": "So2al kaysewlk 3la explode(): chnu katdir b \"a,b,c\"? Fker f ch7al dyal l 9ita3.",
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
        "explain_dr": "So2al kaysewlk 3la array_sum(): wach katjme3 wla katlse9? Fker f l majmou3.",
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
        "explain_dr": "So2al kaysewlk 3la sessions: 3lach page2 ma l9at walo? Fker f chnu khass t3yet lih 9bel ma t9ra session.",
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
        "explain_dr": "So2al kaysewlk 3la foreach: chnu kaytbe3 f kol dawra? Fker f l 7rouf w l space.",
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
        "explain_dr": "So2al kaysewlk 3la htmlspecialchars(): chnu katdir l < w >? Fker f l7imaya mn XSS.",
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
        "explain_dr": "So2al kaysewlk 3la array_key_exists(): kat9leb 3la key wla 3la value? Fker f \"z\".",
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
        "explain_dr": "So2al kaysewlk 3la & f parameters: wach l function katbedel l variable l asliya? Fker f reference.",
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
        "explain_dr": "So2al kaysewlk 3la $b = &$a: mli katbedel $b, wach $a katbedel m3aha? Fker f nafs l blassa.",
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
        "explain_dr": "So2al kaysewlk 3la l priority: . w * chkun lwel? Fker f l ordre dyal l 7seb.",
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
        "explain_dr": "So2al kaysewlk 3la foreach b &: wach l modifications katb9a f l array? Fker f reference.",
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
        "explain_dr": "So2al kaysewlk 3la empty(): wach \"0\" kat7seb empty f PHP? Kayna 7ala khassa, fker fiha.",
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
        "explain_dr": "So2al kaysewlk 3la (int) cast: string li katbda b a9am w moraha 7rouf, chnu kayw9e3? Fker f l a9am l wlin.",
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
        "explain_dr": "So2al kaysewlk 3la default parameters: mli ma kat3ti walo, chnu kaytsta3mel? Fker f \"Guest\".",
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
        "explain_dr": "So2al kaysewlk 3la static: wach $n katnsa 9imtha bin l calls wla kat7fedha? Fker f l calls l mtab3a.",
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
        "explain_dr": "So2al kaysewlk 3la + m3a arrays: wach kayjme3hom kamlin? Fker f union w l keys.",
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
        "explain_dr": "So2al kaysewlk 3la copy: $y = $x wach copy 7a9i9iya? Fker f value vs reference.",
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
        "explain_dr": "So2al kaysewlk 3la floats: 3lach 0.1 + 0.2 ma kat3tich 0.3 nichan? Fker f l binary.",
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
        "explain_dr": "So2al kaysewlk 3la (bool) cast: wach ay string ma khawyach katwli true, 7ta \"false\"? Fker fih.",
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
        "explain_dr": "So2al kaysewlk 3la gettype(1.0): chnu smit l type dyal l a3dad l 3ochriya f PHP? Fker fih.",
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
        "explain_dr": "So2al kaysewlk 3la strlen m3a UTF-8: wach kat7seb l 7rouf wla l bytes? Fker f e ch7al mn byte.",
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
        "explain_dr": "So2al kaysewlk 3la timestamps: chnu kat3ni timestamp 0? Fker f lbdya dyal l wa9t f Unix.",
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
        "explain_dr": "So2al kaysewlk 3la return bla 9ima: chnu katrje3 l function? Fker f NULL.",
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
        "explain_dr": "So2al kaysewlk 3la type juggling: string li katbda b ra9m, chnu kayw9e3 mli katjme3ha? Fker f l ra9m l wli.",
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
        "explain_dr": "So2al kaysewlk 3la is_numeric(): wach \"42\" kat7seb numeric? Fker f string dyal a9am.",
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
        "explain_dr": "So2al kaysewlk 3la = vs == f if: chnu kayw9e3 mli katkteb = wa7da? Fker f assignment.",
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
        "explain_dr": "So2al kaysewlk 3la (int) cast dyal booleans: true w false ch7al kaywliw? Fker f l 9iyam dyalhom.",
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
