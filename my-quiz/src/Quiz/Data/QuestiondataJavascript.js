export const javascriptQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "text": "What does this code print?",
        "code": "let price = 20;\nprice = price + 5;\nconsole.log(price);",
        "answers": ["20", "25", "205", "15"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "text": "What does this code print?",
        "code": "const firstName = \"Aymane\";\nconsole.log(\"Hello, \" + firstName + \"!\");",
        "answers": ["Hello!", "Hello, firstName!", "Hello, Aymane!", "Aymane, Hello!"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "text": "What does this code print?",
        "code": "let count = 3;\ncount++;\ncount++;\nconsole.log(count);",
        "answers": ["3", "4", "5", "6"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "text": "What does this code print?",
        "code": "console.log(10 % 4);",
        "answers": ["2", "2.5", "0", "4"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "text": "What does this code print?",
        "code": "const fruits = [\"apple\", \"banana\", \"cherry\"];\nconsole.log(fruits.length);",
        "answers": ["apple", "2", "3", "undefined"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "text": "What does this code print?",
        "code": "const word = \"javascript\";\nconsole.log(word.toUpperCase());",
        "answers": ["JAVASCRIPT", "javascript", "Javascript", "JavaScript"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "text": "What does this code print?",
        "code": "let total = 100;\ntotal -= 30;\nconsole.log(total);",
        "answers": ["70", "130", "30", "-30"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "text": "What does this code print?",
        "code": "const user = { name: \"Sara\", age: 25 };\nconsole.log(user.age);",
        "answers": ["name", "Sara", "age", "25"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "text": "What does this code print?",
        "code": "console.log(2 * 3 + 4);",
        "answers": ["10", "14", "24", "9"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "text": "What does this code print?",
        "code": "let isReady = false;\nconsole.log(!isReady);",
        "answers": ["true", "false", "0", "undefined"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "text": "What does this code print?",
        "code": "console.log(0 == false);",
        "answers": ["false", "true", "0", "undefined"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "text": "What does this code print?",
        "code": "console.log(0 === false);",
        "answers": ["false", "true", "0", "TypeError"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "text": "What does this code print?",
        "code": "console.log(typeof null);",
        "answers": ["object", "null", "undefined", "boolean"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "text": "What does this code print?",
        "code": "let city;\nconsole.log(typeof city);",
        "answers": ["null", "undefined", "object", "\"\""],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "text": "What does this code print?",
        "code": "var x = 1;\nif (true) {\n  var x = 2;\n}\nconsole.log(x);",
        "answers": ["1", "undefined", "ReferenceError", "2"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "text": "What does this code print?",
        "code": "let y = 1;\nif (true) {\n  let y = 2;\n}\nconsole.log(y);",
        "answers": ["2", "1", "3", "undefined"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "text": "Does this code throw an error? What does it print?",
        "code": "const scores = [10, 20];\nscores.push(30);\nconsole.log(scores.length);",
        "answers": ["TypeError is thrown", "2", "3", "undefined"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "text": "What does this code print?",
        "code": "console.log(\"7\" - 3);",
        "answers": ["73", "10", "4", "NaN"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "text": "What does this code print?",
        "code": "console.log(\"7\" + 3);",
        "answers": ["10", "4", "NaN", "73"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "text": "What does this code print?",
        "code": "const nums = [1, 2, 3, 4];\nconst evens = nums.filter(n => n % 2 === 0);\nconsole.log(evens.length);",
        "answers": ["2", "4", "0", "[2, 4]"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "text": "What does this code print?",
        "code": "function makeCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nconst next = makeCounter();\nnext();\nnext();\nconsole.log(next());",
        "answers": ["1", "0", "3", "undefined"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "text": "In what order do the letters print?",
        "code": "console.log(\"A\");\nPromise.resolve().then(() => console.log(\"B\"));\nconsole.log(\"C\");",
        "answers": ["A B C", "A C B", "C A B", "B A C"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "text": "What gets logged?",
        "code": "for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",
        "answers": ["3 3 3", "0 1 2", "1 2 3", "0 0 0"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "text": "What does this code print?",
        "code": "const items = [\"a\", \"b\", \"c\", \"d\"];\nitems.splice(1, 2);\nconsole.log(items.join(\"-\"));",
        "answers": ["a-b", "a-d", "b-c-d", "a-c"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "text": "What does this code print?",
        "code": "const total = [5, 10, 15].reduce((sum, n) => sum + n, 0);\nconsole.log(total);",
        "answers": ["15", "30", "0", "45"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "text": "What does this code print?",
        "code": "console.log(greet());\nfunction greet() {\n  return \"hello\";\n}",
        "answers": ["ReferenceError", "undefined", "TypeError", "hello"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "text": "What does this code print?",
        "code": "console.log(value);\nvar value = 42;",
        "answers": ["42", "undefined", "NaN", "ReferenceError"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "text": "What does this code print?",
        "code": "const a = [1, 2];\nconst b = [...a, 3, 4];\nconsole.log(b.length);",
        "answers": ["2", "4", "3", "6"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "text": "What does this code print?",
        "code": "const user = { profile: null };\nconsole.log(user.profile?.name ?? \"no name\");",
        "answers": ["null", "TypeError", "undefined", "no name"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "text": "What does this code print?",
        "code": "function Person(name) {\n  this.name = name;\n}\nconst p = new Person(\"Yasmine\");\nconsole.log(p.name);",
        "answers": ["undefined", "name", "Yasmine", "TypeError"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "text": "In what order do the numbers print?",
        "code": "console.log(\"1\");\nsetTimeout(() => console.log(\"2\"), 0);\nPromise.resolve().then(() => console.log(\"3\"));\nconsole.log(\"4\");",
        "answers": ["1 2 3 4", "1 3 2 4", "4 3 2 1", "1 4 3 2"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "text": "What gets logged?",
        "code": "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",
        "answers": ["0 1 2", "2 2 2", "undefined", "3 3 3"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "text": "In what order do the words print?",
        "code": "async function run() {\n  console.log(\"start\");\n  await Promise.resolve();\n  console.log(\"end\");\n}\nrun();\nconsole.log(\"after\");",
        "answers": ["start after end", "start end after", "after start end", "end after start"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "text": "What does this code print?",
        "code": "function Animal(name) {\n  this.name = name;\n}\nAnimal.prototype.speak = function() {\n  return this.name + \" makes a sound\";\n};\nconst a = new Animal(\"Rex\");\nconsole.log(a.speak());",
        "answers": ["Rex makes a sound", "TypeError", "undefined makes a sound", "Animal makes a sound"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "text": "What does this code print?",
        "code": "const original = { score: 10 };\nconst copy = original;\ncopy.score = 99;\nconsole.log(original.score);",
        "answers": ["10", "undefined", "{score: 99}", "99"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "text": "What does this comparison print?",
        "code": "console.log([] == false);",
        "answers": ["false", "true", "TypeError", "[]"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "text": "What does this code print?",
        "code": "console.log(parseInt(\"42px\") + parseInt(\"3.9\"));",
        "answers": ["42", "45", "45.9", "NaN"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "text": "What does this code print?",
        "code": "const data = \"{\\\"name\\\":\\\"Omar\\\",\\\"tags\\\":[\\\"a\\\",\\\"b\\\"]}\";\nconsole.log(JSON.parse(data).tags.length);",
        "answers": ["undefined", "2", "1", "SyntaxError"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "text": "What does this code print?",
        "code": "const counter = {\n  value: 5,\n  increment() {\n    const add = () => this.value + 1;\n    return add();\n  }\n};\nconsole.log(counter.increment());",
        "answers": ["NaN", "6", "undefined", "TypeError"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "text": "What does this code print?",
        "code": "const { x = 10, y = 20 } = { x: 1 };\nconsole.log(x + y);",
        "answers": ["11", "30", "undefined", "21"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "text": "What does this code print?",
        "code": "console.log(0.1 + 0.2 === 0.3);",
        "answers": ["false", "true", "0.30000000000000004", "TypeError"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "text": "What does this code print?",
        "code": "console.log(typeof typeof 42);",
        "answers": ["number", "string", "object", "undefined"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "text": "What does this print? (map passes value, index and array to parseInt)",
        "code": "console.log([1, 2, 3].map(parseInt).join(\",\"));",
        "answers": ["1,2,3", "NaN,NaN,NaN", "1,NaN,NaN", "1,1,1"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "text": "What does this code print?",
        "code": "console.log([1, 2] + [3, 4]);",
        "answers": ["[1,2,3,4]", "1,2,3,4", "10", "1,23,4"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "text": "What does this code print?",
        "code": "console.log(\"b\" + \"a\" + +\"a\" + \"a\");",
        "answers": ["banana", "baNaNa", "baaa", "baNaN"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "text": "What does this code print?",
        "code": "let x = 5;\nconsole.log(x++ + ++x);",
        "answers": ["12", "11", "13", "10"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "text": "What does this code print?",
        "code": "console.log(3 > 2 > 1);",
        "answers": ["true", "TypeError", "false", "undefined"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "text": "What does this code print?",
        "code": "console.log(1 < 2 < 3);",
        "answers": ["false", "TypeError", "1", "true"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "text": "What does this code print?",
        "code": "const unique = [...new Set([2, 1, 2, 3, 1])];\nconsole.log(unique.join(\"-\"));",
        "answers": ["1-2-3", "2-1-3", "2-1-2-3-1", "3-2-1"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "text": "What does this code print?",
        "code": "function* gen() {\n  yield 10;\n  yield 20;\n  yield 30;\n}\nconst it = gen();\nit.next();\nconsole.log(it.next().value);",
        "answers": ["10", "30", "20", "undefined"],
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
        "text": "Qu'affiche ce code ?",
        "code": "let price = 20;\nprice = price + 5;\nconsole.log(price);",
        "answers": ["20", "25", "205", "15"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "text": "Qu'affiche ce code ?",
        "code": "const firstName = \"Aymane\";\nconsole.log(\"Hello, \" + firstName + \"!\");",
        "answers": ["Hello!", "Hello, firstName!", "Hello, Aymane!", "Aymane, Hello!"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "text": "Qu'affiche ce code ?",
        "code": "let count = 3;\ncount++;\ncount++;\nconsole.log(count);",
        "answers": ["3", "4", "5", "6"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "text": "Qu'affiche ce code ?",
        "code": "console.log(10 % 4);",
        "answers": ["2", "2.5", "0", "4"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "text": "Qu'affiche ce code ?",
        "code": "const fruits = [\"apple\", \"banana\", \"cherry\"];\nconsole.log(fruits.length);",
        "answers": ["apple", "2", "3", "undefined"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "text": "Qu'affiche ce code ?",
        "code": "const word = \"javascript\";\nconsole.log(word.toUpperCase());",
        "answers": ["JAVASCRIPT", "javascript", "Javascript", "JavaScript"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "text": "Qu'affiche ce code ?",
        "code": "let total = 100;\ntotal -= 30;\nconsole.log(total);",
        "answers": ["70", "130", "30", "-30"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "text": "Qu'affiche ce code ?",
        "code": "const user = { name: \"Sara\", age: 25 };\nconsole.log(user.age);",
        "answers": ["name", "Sara", "age", "25"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "text": "Qu'affiche ce code ?",
        "code": "console.log(2 * 3 + 4);",
        "answers": ["10", "14", "24", "9"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "text": "Qu'affiche ce code ?",
        "code": "let isReady = false;\nconsole.log(!isReady);",
        "answers": ["true", "false", "0", "undefined"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "text": "Qu'affiche ce code ?",
        "code": "console.log(0 == false);",
        "answers": ["false", "true", "0", "undefined"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "text": "Qu'affiche ce code ?",
        "code": "console.log(0 === false);",
        "answers": ["false", "true", "0", "TypeError"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "text": "Qu'affiche ce code ?",
        "code": "console.log(typeof null);",
        "answers": ["object", "null", "undefined", "boolean"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "text": "Qu'affiche ce code ?",
        "code": "let city;\nconsole.log(typeof city);",
        "answers": ["null", "undefined", "object", "\"\""],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "text": "Qu'affiche ce code ?",
        "code": "var x = 1;\nif (true) {\n  var x = 2;\n}\nconsole.log(x);",
        "answers": ["1", "undefined", "ReferenceError", "2"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "text": "Qu'affiche ce code ?",
        "code": "let y = 1;\nif (true) {\n  let y = 2;\n}\nconsole.log(y);",
        "answers": ["2", "1", "3", "undefined"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "text": "Ce code lève-t-il une erreur ? Qu'affiche-t-il ?",
        "code": "const scores = [10, 20];\nscores.push(30);\nconsole.log(scores.length);",
        "answers": ["TypeError est levée", "2", "3", "undefined"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "text": "Qu'affiche ce code ?",
        "code": "console.log(\"7\" - 3);",
        "answers": ["73", "10", "4", "NaN"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "text": "Qu'affiche ce code ?",
        "code": "console.log(\"7\" + 3);",
        "answers": ["10", "4", "NaN", "73"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "text": "Qu'affiche ce code ?",
        "code": "const nums = [1, 2, 3, 4];\nconst evens = nums.filter(n => n % 2 === 0);\nconsole.log(evens.length);",
        "answers": ["2", "4", "0", "[2, 4]"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "text": "Qu'affiche ce code ?",
        "code": "function makeCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nconst next = makeCounter();\nnext();\nnext();\nconsole.log(next());",
        "answers": ["1", "0", "3", "undefined"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "text": "Dans quel ordre les lettres s'affichent-elles ?",
        "code": "console.log(\"A\");\nPromise.resolve().then(() => console.log(\"B\"));\nconsole.log(\"C\");",
        "answers": ["A B C", "A C B", "C A B", "B A C"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "text": "Qu'est-ce qui s'affiche dans la console ?",
        "code": "for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",
        "answers": ["3 3 3", "0 1 2", "1 2 3", "0 0 0"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "text": "Qu'affiche ce code ?",
        "code": "const items = [\"a\", \"b\", \"c\", \"d\"];\nitems.splice(1, 2);\nconsole.log(items.join(\"-\"));",
        "answers": ["a-b", "a-d", "b-c-d", "a-c"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "text": "Qu'affiche ce code ?",
        "code": "const total = [5, 10, 15].reduce((sum, n) => sum + n, 0);\nconsole.log(total);",
        "answers": ["15", "30", "0", "45"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "text": "Qu'affiche ce code ?",
        "code": "console.log(greet());\nfunction greet() {\n  return \"hello\";\n}",
        "answers": ["ReferenceError", "undefined", "TypeError", "hello"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "text": "Qu'affiche ce code ?",
        "code": "console.log(value);\nvar value = 42;",
        "answers": ["42", "undefined", "NaN", "ReferenceError"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "text": "Qu'affiche ce code ?",
        "code": "const a = [1, 2];\nconst b = [...a, 3, 4];\nconsole.log(b.length);",
        "answers": ["2", "4", "3", "6"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "text": "Qu'affiche ce code ?",
        "code": "const user = { profile: null };\nconsole.log(user.profile?.name ?? \"no name\");",
        "answers": ["null", "TypeError", "undefined", "no name"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "text": "Qu'affiche ce code ?",
        "code": "function Person(name) {\n  this.name = name;\n}\nconst p = new Person(\"Yasmine\");\nconsole.log(p.name);",
        "answers": ["undefined", "name", "Yasmine", "TypeError"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "text": "Dans quel ordre les nombres s'affichent-ils ?",
        "code": "console.log(\"1\");\nsetTimeout(() => console.log(\"2\"), 0);\nPromise.resolve().then(() => console.log(\"3\"));\nconsole.log(\"4\");",
        "answers": ["1 2 3 4", "1 3 2 4", "4 3 2 1", "1 4 3 2"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "text": "Qu'est-ce qui s'affiche dans la console ?",
        "code": "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",
        "answers": ["0 1 2", "2 2 2", "undefined", "3 3 3"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "text": "Dans quel ordre les mots s'affichent-ils ?",
        "code": "async function run() {\n  console.log(\"start\");\n  await Promise.resolve();\n  console.log(\"end\");\n}\nrun();\nconsole.log(\"after\");",
        "answers": ["start after end", "start end after", "after start end", "end after start"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "text": "Qu'affiche ce code ?",
        "code": "function Animal(name) {\n  this.name = name;\n}\nAnimal.prototype.speak = function() {\n  return this.name + \" makes a sound\";\n};\nconst a = new Animal(\"Rex\");\nconsole.log(a.speak());",
        "answers": ["Rex makes a sound", "TypeError", "undefined makes a sound", "Animal makes a sound"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "text": "Qu'affiche ce code ?",
        "code": "const original = { score: 10 };\nconst copy = original;\ncopy.score = 99;\nconsole.log(original.score);",
        "answers": ["10", "undefined", "{score: 99}", "99"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "text": "Qu'affiche cette comparaison ?",
        "code": "console.log([] == false);",
        "answers": ["false", "true", "TypeError", "[]"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "text": "Qu'affiche ce code ?",
        "code": "console.log(parseInt(\"42px\") + parseInt(\"3.9\"));",
        "answers": ["42", "45", "45.9", "NaN"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "text": "Qu'affiche ce code ?",
        "code": "const data = \"{\\\"name\\\":\\\"Omar\\\",\\\"tags\\\":[\\\"a\\\",\\\"b\\\"]}\";\nconsole.log(JSON.parse(data).tags.length);",
        "answers": ["undefined", "2", "1", "SyntaxError"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "text": "Qu'affiche ce code ?",
        "code": "const counter = {\n  value: 5,\n  increment() {\n    const add = () => this.value + 1;\n    return add();\n  }\n};\nconsole.log(counter.increment());",
        "answers": ["NaN", "6", "undefined", "TypeError"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "text": "Qu'affiche ce code ?",
        "code": "const { x = 10, y = 20 } = { x: 1 };\nconsole.log(x + y);",
        "answers": ["11", "30", "undefined", "21"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "text": "Qu'affiche ce code ?",
        "code": "console.log(0.1 + 0.2 === 0.3);",
        "answers": ["false", "true", "0.30000000000000004", "TypeError"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "text": "Qu'affiche ce code ?",
        "code": "console.log(typeof typeof 42);",
        "answers": ["number", "string", "object", "undefined"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "text": "Qu'est-ce que ça affiche ? (map passe valeur, index et tableau à parseInt)",
        "code": "console.log([1, 2, 3].map(parseInt).join(\",\"));",
        "answers": ["1,2,3", "NaN,NaN,NaN", "1,NaN,NaN", "1,1,1"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "text": "Qu'affiche ce code ?",
        "code": "console.log([1, 2] + [3, 4]);",
        "answers": ["[1,2,3,4]", "1,2,3,4", "10", "1,23,4"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "text": "Qu'affiche ce code ?",
        "code": "console.log(\"b\" + \"a\" + +\"a\" + \"a\");",
        "answers": ["banana", "baNaNa", "baaa", "baNaN"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "text": "Qu'affiche ce code ?",
        "code": "let x = 5;\nconsole.log(x++ + ++x);",
        "answers": ["12", "11", "13", "10"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "text": "Qu'affiche ce code ?",
        "code": "console.log(3 > 2 > 1);",
        "answers": ["true", "TypeError", "false", "undefined"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "text": "Qu'affiche ce code ?",
        "code": "console.log(1 < 2 < 3);",
        "answers": ["false", "TypeError", "1", "true"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "text": "Qu'affiche ce code ?",
        "code": "const unique = [...new Set([2, 1, 2, 3, 1])];\nconsole.log(unique.join(\"-\"));",
        "answers": ["1-2-3", "2-1-3", "2-1-2-3-1", "3-2-1"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "text": "Qu'affiche ce code ?",
        "code": "function* gen() {\n  yield 10;\n  yield 20;\n  yield 30;\n}\nconst it = gen();\nit.next();\nconsole.log(it.next().value);",
        "answers": ["10", "30", "20", "undefined"],
        "correct": 2,
        "selection": null
      }
    ]
  }
];
