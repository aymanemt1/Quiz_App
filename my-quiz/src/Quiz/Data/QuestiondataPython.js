export const pythonQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la ** f Python: chnu kat3ni? Fker f l 9owa, machi l darb.",
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
        "explain_dr": "So2al kaysewlk 3la * m3a string: wach kay3awed l string? Fker f repetition.",
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
        "explain_dr": "So2al kaysewlk 3la len(): chnu kat7seb? Fker f 3adad l 7rouf dyal 'hello'.",
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
        "explain_dr": "So2al kaysewlk 3la // : chnu l far9 binha w bin /? Fker f l9isma bla fa9ila.",
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
        "explain_dr": "So2al kaysewlk 3la % : chnu howa l ba9i dyal 7 / 3? Fker fih.",
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
        "explain_dr": "So2al kaysewlk 3la x[-1]: chnu kat3ni l index salb? Fker f l element l lakher.",
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
        "explain_dr": "So2al kaysewlk 3la .upper(): chnu katdir l string? Fker f l7rouf l kbar.",
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
        "explain_dr": "So2al kaysewlk 3la assignment: mli katkteb b = a w men be3d b = 10, wach a katbedel? Fker f rebinding.",
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
        "explain_dr": "So2al kaysewlk 3la type(3.14): chnu howa l type dyal l a3dad l 3ochriya? Fker fih.",
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
        "explain_dr": "So2al kaysewlk 3la f-strings: chnu katdir l f 9bel l quotes? Fker f {name}.",
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
        "explain_dr": "So2al kaysewlk 3la floats: 3lach l natija ma hiyach 0.3 b dabt? Fker f l binary.",
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
        "explain_dr": "So2al kaysewlk 3la default mutable: l list l khawya wach kat3awed ttsna3 f kol call? Kayn piege mchhour, fker fih.",
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
        "explain_dr": "So2al kaysewlk 3la == vs is: chkun kay9aren l 9iyam w chkun kay9aren wach nafs l object? Fker f juj lists.",
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
        "explain_dr": "So2al kaysewlk 3la y = x: wach y copy wla nafs l list? Fker f aliasing.",
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
        "explain_dr": "So2al kaysewlk 3la range(3): mnin kaybda w fin kaysali? Fker f 0.",
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
        "explain_dr": "So2al kaysewlk 3la bool(): chnu kayt7seb falsy? Fker f list khawya vs string 3amra.",
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
        "explain_dr": "So2al kaysewlk 3la / f Python 3: wach katrje3 int wla float? Fker f true division.",
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
        "explain_dr": "So2al kaysewlk 3la slicing: s[0:5] ch7al 7arf katakhud? Fker wach l index 5 dakhel wla la.",
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
        "explain_dr": "So2al kaysewlk 3la .get(): mli l key ma kaynach, wach kayt2erreur? Fker f chnu kayrje3.",
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
        "explain_dr": "So2al kaysewlk 3la '3' + 4: wach Python kay7welhom wahdo? Fker f TypeError.",
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
        "explain_dr": "So2al kaysewlk 3la comprehension: chnu kayw9e3 lwel - l filter wla l *2? Fker f l ordre.",
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
        "explain_dr": "So2al kaysewlk 3la .keys(): chnu katrje3 - keys wla values? Fker fih.",
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
        "explain_dr": "So2al kaysewlk 3la [::-1]: chnu katdir had l slice? Fker f l9leb.",
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
        "explain_dr": "So2al kaysewlk 3la sorted m3a reverse=True: chnu howa l ordre? Fker f descending.",
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
        "explain_dr": "So2al kaysewlk 3la zip: kifach kaytzawjo names w ages? Fker f pairs.",
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
        "explain_dr": "So2al kaysewlk 3la sets: wach kay9bel l mokarrarat? Fker f ch7al b9a mn element.",
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
        "explain_dr": "So2al kaysewlk 3la enumerate: chnu kayji lwel - l index wla l value? Fker fih.",
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
        "explain_dr": "So2al kaysewlk 3la comprehension dyal matrix: wach kol row list bo7dha? Fker f l far9 m3a *.",
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
        "explain_dr": "So2al kaysewlk 3la * m3a lists: wach l rows homa nafs l object? Fker f aliasing.",
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
        "explain_dr": "So2al kaysewlk 3la .get m3a default: mli 'a' ma kaynach, chnu kayrje3 get? Fker f 0 + 1.",
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
        "explain_dr": "So2al kaysewlk 3la lambdas f loop: i chnu 9imtha mli kat3yet l functions? Fker f late binding.",
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
        "explain_dr": "So2al kaysewlk 3la yield: chnu kaydir next() f kol merra? Fker f 1 w men be3d 2.",
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
        "explain_dr": "So2al kaysewlk 3la map: chnu kaydir l lambda l kol element? Fker f *2.",
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
        "explain_dr": "So2al kaysewlk 3la filter: wach katkhli ghir li kay7e9e9 l condition? Fker f > 2.",
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
        "explain_dr": "So2al kaysewlk 3la *b f l west: chnu kaychd l star? Fker f li b9a mn l list.",
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
        "explain_dr": "So2al kaysewlk 3la *args: fin kaymchiw 4 w 5? Fker f sum dyalhom m3a a w b.",
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
        "explain_dr": "So2al kaysewlk 3la decorators: chnu kaytbe3 9bel ma texecuta add? Fker f 'before'.",
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
        "explain_dr": "So2al kaysewlk 3la x[:]: wach hadi copy 7a9i9iya? Fker f append 3la y wach kay2eter 3la x.",
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
        "explain_dr": "So2al kaysewlk 3la any w all: chnu l far9? Fker f wa7ed true vs kolchi true.",
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
        "explain_dr": "So2al kaysewlk 3la class attributes: mli katbedel a.x, wach b.x katbedel m3ah? Fker f instance vs class.",
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
        "explain_dr": "So2al kaysewlk 3la inf: wach l infinity kber mn ay ra9m? Fker f l mo9arana.",
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
        "explain_dr": "So2al kaysewlk 3la round(2.5): kifach Python kay3amel .5? Kayn rounding khass, fker fih.",
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
        "explain_dr": "So2al kaysewlk 3la mo9aranat strings: b ach kayt9arno l 7rouf? Fker f l codes dyalhom.",
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
        "explain_dr": "So2al kaysewlk 3la chained comparison: wach Python kay7sebha b7al l maths? Fker f 2<3 w 3<2.",
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
        "explain_dr": "So2al kaysewlk 3la finally: wach l return dyal finally kaygheleb 3la dyal try? Fker f l priority.",
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
        "explain_dr": "So2al kaysewlk 3la .find(): mli ma kayl9a walo, chnu kayrje3 - 9ima wla error? Fker f l far9 bin find w index.",
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
        "explain_dr": "So2al kaysewlk 3la is m3a small ints: 3lach 256 kaykoun cached? Fker f l range dyal caching.",
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
        "explain_dr": "So2al kaysewlk 3la == m3a floats: wach dayman s7i7a? Fker f precision.",
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
        "explain_dr": "So2al kaysewlk 3la .pop m3a default: mli l key ma kaynach, chnu kayrje3? Fker f l 9ima l badiila.",
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
        "explain_dr": "So2al kaysewlk 3la .sort(): wach katrje3 list mrteba wla katbedel f blassa? Fker f None.",
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
        "explain_dr": "So2al kaysewlk 3la ** f Python: chnu kat3ni? Fker f l 9owa, machi l darb.",
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
        "explain_dr": "So2al kaysewlk 3la * m3a string: wach kay3awed l string? Fker f repetition.",
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
        "explain_dr": "So2al kaysewlk 3la len(): chnu kat7seb? Fker f 3adad l 7rouf dyal 'hello'.",
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
        "explain_dr": "So2al kaysewlk 3la // : chnu l far9 binha w bin /? Fker f l9isma bla fa9ila.",
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
        "explain_dr": "So2al kaysewlk 3la % : chnu howa l ba9i dyal 7 / 3? Fker fih.",
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
        "explain_dr": "So2al kaysewlk 3la x[-1]: chnu kat3ni l index salb? Fker f l element l lakher.",
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
        "explain_dr": "So2al kaysewlk 3la .upper(): chnu katdir l string? Fker f l7rouf l kbar.",
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
        "explain_dr": "So2al kaysewlk 3la assignment: mli katkteb b = a w men be3d b = 10, wach a katbedel? Fker f rebinding.",
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
        "explain_dr": "So2al kaysewlk 3la type(3.14): chnu howa l type dyal l a3dad l 3ochriya? Fker fih.",
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
        "explain_dr": "So2al kaysewlk 3la f-strings: chnu katdir l f 9bel l quotes? Fker f {name}.",
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
        "explain_dr": "So2al kaysewlk 3la floats: 3lach l natija ma hiyach 0.3 b dabt? Fker f l binary.",
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
        "explain_dr": "So2al kaysewlk 3la default mutable: l list l khawya wach kat3awed ttsna3 f kol call? Kayn piege mchhour, fker fih.",
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
        "explain_dr": "So2al kaysewlk 3la == vs is: chkun kay9aren l 9iyam w chkun kay9aren wach nafs l object? Fker f juj lists.",
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
        "explain_dr": "So2al kaysewlk 3la y = x: wach y copy wla nafs l list? Fker f aliasing.",
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
        "explain_dr": "So2al kaysewlk 3la range(3): mnin kaybda w fin kaysali? Fker f 0.",
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
        "explain_dr": "So2al kaysewlk 3la bool(): chnu kayt7seb falsy? Fker f list khawya vs string 3amra.",
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
        "explain_dr": "So2al kaysewlk 3la / f Python 3: wach katrje3 int wla float? Fker f true division.",
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
        "explain_dr": "So2al kaysewlk 3la slicing: s[0:5] ch7al 7arf katakhud? Fker wach l index 5 dakhel wla la.",
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
        "explain_dr": "So2al kaysewlk 3la .get(): mli l key ma kaynach, wach kayt2erreur? Fker f chnu kayrje3.",
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
        "explain_dr": "So2al kaysewlk 3la '3' + 4: wach Python kay7welhom wahdo? Fker f TypeError.",
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
        "explain_dr": "So2al kaysewlk 3la comprehension: chnu kayw9e3 lwel - l filter wla l *2? Fker f l ordre.",
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
        "explain_dr": "So2al kaysewlk 3la .keys(): chnu katrje3 - keys wla values? Fker fih.",
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
        "explain_dr": "So2al kaysewlk 3la [::-1]: chnu katdir had l slice? Fker f l9leb.",
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
        "explain_dr": "So2al kaysewlk 3la sorted m3a reverse=True: chnu howa l ordre? Fker f descending.",
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
        "explain_dr": "So2al kaysewlk 3la zip: kifach kaytzawjo names w ages? Fker f pairs.",
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
        "explain_dr": "So2al kaysewlk 3la sets: wach kay9bel l mokarrarat? Fker f ch7al b9a mn element.",
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
        "explain_dr": "So2al kaysewlk 3la enumerate: chnu kayji lwel - l index wla l value? Fker fih.",
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
        "explain_dr": "So2al kaysewlk 3la comprehension dyal matrix: wach kol row list bo7dha? Fker f l far9 m3a *.",
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
        "explain_dr": "So2al kaysewlk 3la * m3a lists: wach l rows homa nafs l object? Fker f aliasing.",
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
        "explain_dr": "So2al kaysewlk 3la .get m3a default: mli 'a' ma kaynach, chnu kayrje3 get? Fker f 0 + 1.",
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
        "explain_dr": "So2al kaysewlk 3la lambdas f loop: i chnu 9imtha mli kat3yet l functions? Fker f late binding.",
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
        "explain_dr": "So2al kaysewlk 3la yield: chnu kaydir next() f kol merra? Fker f 1 w men be3d 2.",
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
        "explain_dr": "So2al kaysewlk 3la map: chnu kaydir l lambda l kol element? Fker f *2.",
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
        "explain_dr": "So2al kaysewlk 3la filter: wach katkhli ghir li kay7e9e9 l condition? Fker f > 2.",
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
        "explain_dr": "So2al kaysewlk 3la *b f l west: chnu kaychd l star? Fker f li b9a mn l list.",
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
        "explain_dr": "So2al kaysewlk 3la *args: fin kaymchiw 4 w 5? Fker f sum dyalhom m3a a w b.",
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
        "explain_dr": "So2al kaysewlk 3la decorators: chnu kaytbe3 9bel ma texecuta add? Fker f 'before'.",
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
        "explain_dr": "So2al kaysewlk 3la x[:]: wach hadi copy 7a9i9iya? Fker f append 3la y wach kay2eter 3la x.",
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
        "explain_dr": "So2al kaysewlk 3la any w all: chnu l far9? Fker f wa7ed true vs kolchi true.",
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
        "explain_dr": "So2al kaysewlk 3la class attributes: mli katbedel a.x, wach b.x katbedel m3ah? Fker f instance vs class.",
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
        "explain_dr": "So2al kaysewlk 3la inf: wach l infinity kber mn ay ra9m? Fker f l mo9arana.",
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
        "explain_dr": "So2al kaysewlk 3la round(2.5): kifach Python kay3amel .5? Kayn rounding khass, fker fih.",
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
        "explain_dr": "So2al kaysewlk 3la mo9aranat strings: b ach kayt9arno l 7rouf? Fker f l codes dyalhom.",
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
        "explain_dr": "So2al kaysewlk 3la chained comparison: wach Python kay7sebha b7al l maths? Fker f 2<3 w 3<2.",
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
        "explain_dr": "So2al kaysewlk 3la finally: wach l return dyal finally kaygheleb 3la dyal try? Fker f l priority.",
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
        "explain_dr": "So2al kaysewlk 3la .find(): mli ma kayl9a walo, chnu kayrje3 - 9ima wla error? Fker f l far9 bin find w index.",
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
        "explain_dr": "So2al kaysewlk 3la is m3a small ints: 3lach 256 kaykoun cached? Fker f l range dyal caching.",
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
        "explain_dr": "So2al kaysewlk 3la == m3a floats: wach dayman s7i7a? Fker f precision.",
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
        "explain_dr": "So2al kaysewlk 3la .pop m3a default: mli l key ma kaynach, chnu kayrje3? Fker f l 9ima l badiila.",
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
        "explain_dr": "So2al kaysewlk 3la .sort(): wach katrje3 list mrteba wla katbedel f blassa? Fker f None.",
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
