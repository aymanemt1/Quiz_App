export const pythonQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "text": "What will this code print?",
        "code": "print(2 ** 3)",
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
        "id": 1,
        "level": 1,
        "text": "What will this code print?",
        "code": "print('Py' * 3)",
        "answers": [
          "PyPyPy",
          "Py3",
          "9",
          "TypeError"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "text": "What will this code print?",
        "code": "print(len('hello'))",
        "answers": [
          "4",
          "5",
          "6",
          "TypeError"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "text": "What will this code print?",
        "code": "print(7 // 2)",
        "answers": [
          "3.5",
          "4",
          "3",
          "3.0"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "text": "What will this code print?",
        "code": "print(7 % 3)",
        "answers": [
          "2",
          "3",
          "2.33",
          "1"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "text": "What will this code print?",
        "code": "x = [1, 2, 3]\nprint(x[-1])",
        "answers": [
          "3",
          "1",
          "IndexError",
          "-1"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "text": "What will this code print?",
        "code": "print('hello'.upper())",
        "answers": [
          "hello",
          "HELLO",
          "Hello",
          "AttributeError"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "text": "What will this code print?",
        "code": "a = 5\nb = a\nb = 10\nprint(a)",
        "answers": [
          "10",
          "15",
          "5",
          "None"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "text": "What will this code print?",
        "code": "print(type(3.14))",
        "answers": [
          "<class 'int'>",
          "<class 'double'>",
          "float",
          "<class 'float'>"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "text": "What will this code print?",
        "code": "name = 'Aymane'\nprint(f'Hello {name}!')",
        "answers": [
          "Hello Aymane!",
          "Hello {name}!",
          "Hello name!",
          "SyntaxError"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "text": "What will this code print?",
        "code": "print(0.1 + 0.2)",
        "answers": [
          "0.3",
          "0.30000000000000004",
          "0.30",
          "0.30000000000000003"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "text": "What will this code print?",
        "code": "def f(x=[]):\n    x.append(1)\n    return x\nprint(f())\nprint(f())",
        "answers": [
          "[1] then [1]",
          "[1, 1] then [1, 1]",
          "[1] then [1, 1]",
          "TypeError"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "text": "What will this code print?",
        "code": "print([1, 2, 3] == [1, 2, 3])\nprint([1, 2, 3] is [1, 2, 3])",
        "answers": [
          "True False",
          "True True",
          "False True",
          "False False"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "text": "What will this code print?",
        "code": "x = [1, 2]\ny = x\ny.append(3)\nprint(x)",
        "answers": [
          "[1, 2]",
          "[3]",
          "[1, 2, 3]",
          "None"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "text": "What will this code print?",
        "code": "for i in range(3):\n    print(i, end=' ')",
        "answers": [
          "1 2 3",
          "0 1 2",
          "0 1 2 3",
          "3 2 1"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "text": "What will this code print?",
        "code": "print(bool([]))\nprint(bool('x'))",
        "answers": [
          "True True",
          "True False",
          "False True",
          "False False"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "text": "What will this code print?",
        "code": "print(10 / 4)",
        "answers": [
          "2.5",
          "2",
          "2.0",
          "3"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "text": "What will this code print?",
        "code": "s = 'hello world'\nprint(s[0:5])",
        "answers": [
          "hello ",
          "ello",
          "h",
          "hello"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "text": "What will this code print?",
        "code": "d = {'a': 1}\nprint(d.get('b'))",
        "answers": [
          "KeyError",
          "None",
          "0",
          "'b'"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "text": "What happens when this runs?",
        "code": "print('3' + 4)",
        "answers": [
          "'34'",
          "7",
          "TypeError",
          "'7'"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "text": "What will this code print?",
        "code": "nums = [1, 2, 3, 4]\nprint([n * 2 for n in nums if n % 2 == 0])",
        "answers": [
          "[2, 4, 6, 8]",
          "[2, 4]",
          "[1, 2, 3, 4]",
          "[4, 8]"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "text": "What will this code print?",
        "code": "d = {'a': 1, 'b': 2}\nprint(list(d.keys()))",
        "answers": [
          "['a', 'b']",
          "[1, 2]",
          "[('a', 1), ('b', 2)]",
          "dict_keys error"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "text": "What will this code print?",
        "code": "a = [1, 2, 3]\nprint(a[::-1])",
        "answers": [
          "[1, 2, 3]",
          "[3, 2, 1]",
          "[3, 1]",
          "SyntaxError"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "text": "What will this code print?",
        "code": "print(sorted([3, 1, 2], reverse=True))",
        "answers": [
          "[1, 2, 3]",
          "[3, 1, 2]",
          "[3, 2, 1]",
          "None"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "text": "What will this code print?",
        "code": "names = ['a', 'b']\nages = [20, 30]\nprint(dict(zip(names, ages)))",
        "answers": [
          "[('a', 20), ('b', 30)]",
          "{'a': 'b', 20: 30}",
          "TypeError",
          "{'a': 20, 'b': 30}"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "text": "What will this code print?",
        "code": "s = {1, 2, 2, 3}\nprint(len(s))",
        "answers": [
          "3",
          "4",
          "2",
          "TypeError"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "text": "What will this code print?",
        "code": "for i, v in enumerate(['x', 'y']):\n    print(i, v)",
        "answers": [
          "'1 x' then '2 y'",
          "'0 x' then '1 y'",
          "'x 0' then 'y 1'",
          "TypeError"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "text": "What will this code print?",
        "code": "matrix = [[0] * 3 for _ in range(2)]\nmatrix[0][0] = 9\nprint(matrix)",
        "answers": [
          "[[9, 0, 0], [9, 0, 0]]",
          "[[0, 0, 0], [0, 0, 0]]",
          "[[9, 0, 0], [0, 0, 0]]",
          "IndexError"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "text": "What will this code print?",
        "code": "m = [[0] * 2] * 2\nm[0][0] = 9\nprint(m)",
        "answers": [
          "[[9, 0], [0, 0]]",
          "[[9, 9], [9, 9]]",
          "IndexError",
          "[[9, 0], [9, 0]]"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "text": "What will this code print?",
        "code": "d = {}\nd['a'] = d.get('a', 0) + 1\nprint(d)",
        "answers": [
          "{'a': 1}",
          "{'a': 0}",
          "KeyError",
          "{'a': None}"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "text": "What will this code print?",
        "code": "funcs = [lambda: i for i in range(3)]\nprint([f() for f in funcs])",
        "answers": [
          "[2, 2, 2]",
          "[0, 1, 2]",
          "[0, 0, 0]",
          "NameError"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "text": "What will this code print?",
        "code": "def gen():\n    yield 1\n    yield 2\ng = gen()\nprint(next(g))\nprint(next(g))",
        "answers": [
          "2 then 1",
          "1 then 2",
          "<generator object>",
          "TypeError"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "text": "What will this code print?",
        "code": "print(list(map(lambda x: x * 2, [1, 2, 3])))",
        "answers": [
          "[1, 2, 3, 1, 2, 3]",
          "[2, 3, 4]",
          "[2, 4, 6]",
          "<map object>"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "text": "What will this code print?",
        "code": "print(list(filter(lambda x: x > 2, [1, 2, 3, 4])))",
        "answers": [
          "[1, 2]",
          "[2, 3, 4]",
          "<filter object>",
          "[3, 4]"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "text": "What will this code print?",
        "code": "a, *b, c = [1, 2, 3, 4]\nprint(b)",
        "answers": [
          "[2, 3]",
          "[2]",
          "[1, 2, 3]",
          "ValueError"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "text": "What will this code print?",
        "code": "def f(a, b=2, *args):\n    return a + b + sum(args)\nprint(f(1, 3, 4, 5))",
        "answers": [
          "10",
          "13",
          "15",
          "TypeError"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "text": "What will this code print?",
        "code": "def deco(fn):\n    def wrapper(*args):\n        print('before')\n        return fn(*args)\n    return wrapper\n\n@deco\ndef add(a, b):\n    return a + b\n\nprint(add(2, 3))",
        "answers": [
          "5 only",
          "'before' only",
          "'before' then 5",
          "TypeError"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "text": "What will this code print?",
        "code": "x = [1, 2, 3]\ny = x[:]\ny.append(4)\nprint(x)",
        "answers": [
          "[1, 2, 3, 4]",
          "[4]",
          "None",
          "[1, 2, 3]"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "text": "What will this code print?",
        "code": "print(any([False, True, False]))\nprint(all([True, True, False]))",
        "answers": [
          "True False",
          "True True",
          "False True",
          "False False"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "text": "What will this code print?",
        "code": "class A:\n    x = 1\na = A()\na.x = 5\nb = A()\nprint(b.x)",
        "answers": [
          "5",
          "1",
          "AttributeError",
          "None"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "text": "What will this code print?",
        "code": "print(float('inf') > 10**100)",
        "answers": [
          "False",
          "OverflowError",
          "True",
          "TypeError"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "text": "What will this code print?",
        "code": "print(round(2.5))",
        "answers": [
          "3",
          "2.5",
          "2.0",
          "2"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "text": "What will this code print?",
        "code": "print('a' > 'B')",
        "answers": [
          "True",
          "False",
          "TypeError",
          "None"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "text": "What will this code print?",
        "code": "print(2 < 3 < 2)",
        "answers": [
          "True",
          "False",
          "SyntaxError",
          "TypeError"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "text": "What will this code print?",
        "code": "def f():\n    try:\n        return 1\n    finally:\n        return 2\nprint(f())",
        "answers": [
          "1",
          "None",
          "2",
          "RuntimeError"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "text": "What will this code print?",
        "code": "s = 'hello'\nprint(s.find('z'))",
        "answers": [
          "None",
          "0",
          "ValueError",
          "-1"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "text": "What will this code print?",
        "code": "a = 256\nb = 256\nprint(a is b)",
        "answers": [
          "True",
          "False",
          "SyntaxWarning only",
          "TypeError"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "text": "What will this code print?",
        "code": "print(0.1 + 0.2 == 0.3)",
        "answers": [
          "True",
          "False",
          "TypeError",
          "None"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "text": "What will this code print?",
        "code": "d = {'x': 1}\nprint(d.pop('y', 'missing'))",
        "answers": [
          "KeyError",
          "None",
          "'missing'",
          "'y'"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "text": "What will this code print?",
        "code": "nums = [5, 1, 4]\nprint(nums.sort())",
        "answers": [
          "[1, 4, 5]",
          "[5, 1, 4]",
          "TypeError",
          "None"
        ],
        "correct": 3,
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
        "code": "print(2 ** 3)",
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
        "id": 1,
        "level": 1,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "print('Py' * 3)",
        "answers": [
          "PyPyPy",
          "Py3",
          "9",
          "TypeError"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "print(len('hello'))",
        "answers": [
          "4",
          "5",
          "6",
          "TypeError"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "print(7 // 2)",
        "answers": [
          "3.5",
          "4",
          "3",
          "3.0"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "print(7 % 3)",
        "answers": [
          "2",
          "3",
          "2.33",
          "1"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "x = [1, 2, 3]\nprint(x[-1])",
        "answers": [
          "3",
          "1",
          "IndexError",
          "-1"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "print('hello'.upper())",
        "answers": [
          "hello",
          "HELLO",
          "Hello",
          "AttributeError"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "a = 5\nb = a\nb = 10\nprint(a)",
        "answers": [
          "10",
          "15",
          "5",
          "None"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "print(type(3.14))",
        "answers": [
          "<class 'int'>",
          "<class 'double'>",
          "float",
          "<class 'float'>"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "name = 'Aymane'\nprint(f'Hello {name}!')",
        "answers": [
          "Hello Aymane!",
          "Hello {name}!",
          "Hello name!",
          "SyntaxError"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "print(0.1 + 0.2)",
        "answers": [
          "0.3",
          "0.30000000000000004",
          "0.30",
          "0.30000000000000003"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "def f(x=[]):\n    x.append(1)\n    return x\nprint(f())\nprint(f())",
        "answers": [
          "[1] puis [1]",
          "[1, 1] puis [1, 1]",
          "[1] puis [1, 1]",
          "TypeError"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "print([1, 2, 3] == [1, 2, 3])\nprint([1, 2, 3] is [1, 2, 3])",
        "answers": [
          "True False",
          "True True",
          "False True",
          "False False"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "x = [1, 2]\ny = x\ny.append(3)\nprint(x)",
        "answers": [
          "[1, 2]",
          "[3]",
          "[1, 2, 3]",
          "None"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "for i in range(3):\n    print(i, end=' ')",
        "answers": [
          "1 2 3",
          "0 1 2",
          "0 1 2 3",
          "3 2 1"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "print(bool([]))\nprint(bool('x'))",
        "answers": [
          "True True",
          "True False",
          "False True",
          "False False"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "print(10 / 4)",
        "answers": [
          "2.5",
          "2",
          "2.0",
          "3"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "s = 'hello world'\nprint(s[0:5])",
        "answers": [
          "hello ",
          "ello",
          "h",
          "hello"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "d = {'a': 1}\nprint(d.get('b'))",
        "answers": [
          "KeyError",
          "None",
          "0",
          "'b'"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "text": "Que se passe-t-il à l'exécution ?",
        "code": "print('3' + 4)",
        "answers": [
          "'34'",
          "7",
          "TypeError",
          "'7'"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "nums = [1, 2, 3, 4]\nprint([n * 2 for n in nums if n % 2 == 0])",
        "answers": [
          "[2, 4, 6, 8]",
          "[2, 4]",
          "[1, 2, 3, 4]",
          "[4, 8]"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "d = {'a': 1, 'b': 2}\nprint(list(d.keys()))",
        "answers": [
          "['a', 'b']",
          "[1, 2]",
          "[('a', 1), ('b', 2)]",
          "erreur dict_keys"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "a = [1, 2, 3]\nprint(a[::-1])",
        "answers": [
          "[1, 2, 3]",
          "[3, 2, 1]",
          "[3, 1]",
          "SyntaxError"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "print(sorted([3, 1, 2], reverse=True))",
        "answers": [
          "[1, 2, 3]",
          "[3, 1, 2]",
          "[3, 2, 1]",
          "None"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "names = ['a', 'b']\nages = [20, 30]\nprint(dict(zip(names, ages)))",
        "answers": [
          "[('a', 20), ('b', 30)]",
          "{'a': 'b', 20: 30}",
          "TypeError",
          "{'a': 20, 'b': 30}"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "s = {1, 2, 2, 3}\nprint(len(s))",
        "answers": [
          "3",
          "4",
          "2",
          "TypeError"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "for i, v in enumerate(['x', 'y']):\n    print(i, v)",
        "answers": [
          "'1 x' puis '2 y'",
          "'0 x' puis '1 y'",
          "'x 0' puis 'y 1'",
          "TypeError"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "matrix = [[0] * 3 for _ in range(2)]\nmatrix[0][0] = 9\nprint(matrix)",
        "answers": [
          "[[9, 0, 0], [9, 0, 0]]",
          "[[0, 0, 0], [0, 0, 0]]",
          "[[9, 0, 0], [0, 0, 0]]",
          "IndexError"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "m = [[0] * 2] * 2\nm[0][0] = 9\nprint(m)",
        "answers": [
          "[[9, 0], [0, 0]]",
          "[[9, 9], [9, 9]]",
          "IndexError",
          "[[9, 0], [9, 0]]"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "d = {}\nd['a'] = d.get('a', 0) + 1\nprint(d)",
        "answers": [
          "{'a': 1}",
          "{'a': 0}",
          "KeyError",
          "{'a': None}"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "funcs = [lambda: i for i in range(3)]\nprint([f() for f in funcs])",
        "answers": [
          "[2, 2, 2]",
          "[0, 1, 2]",
          "[0, 0, 0]",
          "NameError"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "def gen():\n    yield 1\n    yield 2\ng = gen()\nprint(next(g))\nprint(next(g))",
        "answers": [
          "2 puis 1",
          "1 puis 2",
          "<generator object>",
          "TypeError"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "print(list(map(lambda x: x * 2, [1, 2, 3])))",
        "answers": [
          "[1, 2, 3, 1, 2, 3]",
          "[2, 3, 4]",
          "[2, 4, 6]",
          "<map object>"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "print(list(filter(lambda x: x > 2, [1, 2, 3, 4])))",
        "answers": [
          "[1, 2]",
          "[2, 3, 4]",
          "<filter object>",
          "[3, 4]"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "a, *b, c = [1, 2, 3, 4]\nprint(b)",
        "answers": [
          "[2, 3]",
          "[2]",
          "[1, 2, 3]",
          "ValueError"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "def f(a, b=2, *args):\n    return a + b + sum(args)\nprint(f(1, 3, 4, 5))",
        "answers": [
          "10",
          "13",
          "15",
          "TypeError"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "def deco(fn):\n    def wrapper(*args):\n        print('before')\n        return fn(*args)\n    return wrapper\n\n@deco\ndef add(a, b):\n    return a + b\n\nprint(add(2, 3))",
        "answers": [
          "5 seulement",
          "'before' seulement",
          "'before' puis 5",
          "TypeError"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "x = [1, 2, 3]\ny = x[:]\ny.append(4)\nprint(x)",
        "answers": [
          "[1, 2, 3, 4]",
          "[4]",
          "None",
          "[1, 2, 3]"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "print(any([False, True, False]))\nprint(all([True, True, False]))",
        "answers": [
          "True False",
          "True True",
          "False True",
          "False False"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "class A:\n    x = 1\na = A()\na.x = 5\nb = A()\nprint(b.x)",
        "answers": [
          "5",
          "1",
          "AttributeError",
          "None"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "print(float('inf') > 10**100)",
        "answers": [
          "False",
          "OverflowError",
          "True",
          "TypeError"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "print(round(2.5))",
        "answers": [
          "3",
          "2.5",
          "2.0",
          "2"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "print('a' > 'B')",
        "answers": [
          "True",
          "False",
          "TypeError",
          "None"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "print(2 < 3 < 2)",
        "answers": [
          "True",
          "False",
          "SyntaxError",
          "TypeError"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "def f():\n    try:\n        return 1\n    finally:\n        return 2\nprint(f())",
        "answers": [
          "1",
          "None",
          "2",
          "RuntimeError"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "s = 'hello'\nprint(s.find('z'))",
        "answers": [
          "None",
          "0",
          "ValueError",
          "-1"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "a = 256\nb = 256\nprint(a is b)",
        "answers": [
          "True",
          "False",
          "SyntaxWarning seulement",
          "TypeError"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "print(0.1 + 0.2 == 0.3)",
        "answers": [
          "True",
          "False",
          "TypeError",
          "None"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "d = {'x': 1}\nprint(d.pop('y', 'missing'))",
        "answers": [
          "KeyError",
          "None",
          "'missing'",
          "'y'"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "text": "Qu'est-ce que ce code va afficher ?",
        "code": "nums = [5, 1, 4]\nprint(nums.sort())",
        "answers": [
          "[1, 4, 5]",
          "[5, 1, 4]",
          "TypeError",
          "None"
        ],
        "correct": 3,
        "selection": null
      }
    ]
  }
];
