export const typescriptQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "Type annotation : number ma kat-badelch l-hesab: 30 + 5 = ?",
        "text": "What does this code print?",
        "code": "let age: number = 30;\nage = age + 5;\nconsole.log(age);",
        "answers": ["30", "35", "305", "TypeError"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "String concatenation b +: 'Hello' + ' World' kay-jem3hom.",
        "text": "What does this code print?",
        "code": "const greeting: string = \"Hello\";\nconsole.log(greeting + \" World\");",
        "answers": ["Hello World", "HelloWorld", "Hello, World", "undefined World"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "!true kay-3kes l-boolean.",
        "text": "What does this code print?",
        "code": "let isActive: boolean = true;\nconsole.log(!isActive);",
        "answers": ["true", "false", "0", "undefined"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "number[]: array dyal numbers, .length = chhal men element fih.",
        "text": "What does this code print?",
        "code": "const scores: number[] = [10, 20, 30];\nconsole.log(scores.length);",
        "answers": ["3", "30", "10", "undefined"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "add(4, 6): l-function kat-jem3 a + b.",
        "text": "What does this code print?",
        "code": "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(4, 6));",
        "answers": ["46", "10", "4", "NaN"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "let (machi const): name momkin t-t-badel. L-valeur l-khra hiya li ghadi t-t-printa.",
        "text": "What does this code print?",
        "code": "let name: string = \"Sara\";\nname = \"Lina\";\nconsole.log(name);",
        "answers": ["Sara", "Lina", "SaraLina", "TypeError"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "Object type b name w age: user.name kat-wsal l-property name.",
        "text": "What does this code print?",
        "code": "const user: { name: string; age: number } = { name: \"Omar\", age: 28 };\nconsole.log(user.name);",
        "answers": ["Omar", "28", "Omar, 28", "undefined"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "any: kay-9bel ay type bla mochkil. L-valeur l-khra li t-7etat hiya li ghadi t-t-printa.",
        "text": "What does this code print?",
        "code": "let value: any = \"hello\";\nvalue = 42;\nconsole.log(value);",
        "answers": ["hello", "42", "TypeError", "any"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "PI * 2: 3.14 * 2 = ?",
        "text": "What does this code print?",
        "code": "const PI: number = 3.14;\nconsole.log(PI * 2);",
        "answers": ["6.28", "3.142", "6", "3.14"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "Default parameter: greet() bla argument kay-sta3mel 'guest'.",
        "text": "What does this code print?",
        "code": "function greet(name: string = \"guest\"): string {\n  return \"Hi \" + name;\n}\nconsole.log(greet());",
        "answers": ["Hi guest", "Hi undefined", "Hi ", "TypeError"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "strict TypeScript: ma momkinch t-7et string f variable dyal type number. Fina satr ghadi y-faili l-compilation?",
        "text": "Which line fails to compile under strict TypeScript?",
        "code": "let count: number = 5;\ncount = \"five\";\nconsole.log(count);",
        "answers": ["Line 1", "Line 2", "Line 3", "It compiles fine"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "Type inference: city t-inferat k string men 'Tanger'. T-7et 100 (number) = erreur f had satr.",
        "text": "Which line fails to compile under strict TypeScript?",
        "code": "let city = \"Tanger\";\ncity = 100;",
        "answers": ["Line 1", "It compiles fine", "Line 2", "Lines 1 and 2"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "number[]: push('four') - string f array dyal numbers ma-mkhadamch.",
        "text": "Which line fails to compile?",
        "code": "const nums: number[] = [1, 2, 3];\nnums.push(\"four\");",
        "answers": ["Line 2", "Line 1", "Line 3", "It compiles fine"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "age? optional: ma t-7etatch, donc u.age = undefined w ?? kay-3ti 'unknown'.",
        "text": "What does this code print?",
        "code": "interface User {\n  name: string;\n  age?: number;\n}\nconst u: User = { name: \"Ali\" };\nconsole.log(u.age ?? \"unknown\");",
        "answers": ["undefined", "null", "TypeError", "unknown"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "Union type string | number: id t-badel l 123, donc typeof id = 'number'.",
        "text": "What does this code print?",
        "code": "let id: string | number = \"abc\";\nid = 123;\nconsole.log(typeof id);",
        "answers": ["string", "number", "object", "string|number"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "L-function kat-declari return string ama kat-rje3 42 (number): l-return type ma kay-t-tab9ch m3a l-body.",
        "text": "Where does compilation fail?",
        "code": "function getName(): string {\n  return 42;\n}",
        "answers": ["The return statement", "The signature", "It compiles", "The function name"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "const kat-men3 l-reassignment dyal l-variable, ama les properties dyal l-object momkin y-t-badlo. Compile w print true.",
        "text": "Does this compile? What does it print?",
        "code": "const config: { debug: boolean } = { debug: false };\nconfig.debug = true;\nconsole.log(config.debug);",
        "answers": ["Compile error: const cannot change", "false", "true", "undefined"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "Enums bla valeur kat-bda men 0: Admin=0, User=1, Guest=2.",
        "text": "What does this code print?",
        "code": "enum Role { Admin, User, Guest }\nconsole.log(Role.User);",
        "answers": ["0", "1", "User", "Guest"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "Tuple [number, number]: point[0] + point[1] = 3 + 4.",
        "text": "What does this code print?",
        "code": "const point: [number, number] = [3, 4];\nconsole.log(point[0] + point[1]);",
        "answers": ["7", "34", "[3,4]", "undefined"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "strictNullChecks: null ma-mkhadamch f string. Had satr ghadi y-faili.",
        "text": "Under strict mode, which line fails?",
        "code": "let title: string = \"hello\";\ntitle = null;",
        "answers": ["Line 1", "Both lines", "It compiles", "Line 2"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "Type narrowing b typeof: x = 'hi' string, donc l-branch l-lowla li ghadi t-khdem: 'text:' + x.length.",
        "text": "What does this code print?",
        "code": "function describe(x: string | number): string {\n  if (typeof x === \"string\") {\n    return \"text:\" + x.length;\n  }\n  return \"num:\" + x.toFixed(1);\n}\nconsole.log(describe(\"hi\"));",
        "answers": ["num:2", "text:hi", "text:2", "TypeError"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "strict mode: user momkin y-kon null, w .name 3la null = erreur f had satr.",
        "text": "Under strict mode, which line fails?",
        "code": "let user: { name: string } | null = null;\nconsole.log(user.name);",
        "answers": ["Line 2", "Line 1", "Both", "Neither"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "unknown khaso narrowing 9bel l-sti3mal: ma t9derch t-3ayet l method bla ma t-verifi l-type l-wwel.",
        "text": "Does this compile under strict mode?",
        "code": "let data: unknown = \"hello\";\nconsole.log(data.toUpperCase());",
        "answers": ["Yes", "No: data is null", "No: not a function", "No: data is unknown"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "Generic identity<string>: T = string, l-function kat-rje3 nafs l-valeur li dkhlet.",
        "text": "What does this code print?",
        "code": "function identity<T>(value: T): T {\n  return value;\n}\nconsole.log(identity<string>(\"ts\"));",
        "answers": ["string", "ts", "undefined", "T"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "T generic bla constraint: TypeScript ma kay-3refch wach T 3ndo .length. Fina ghadi y-faili l-compilation?",
        "text": "Does this compile? If not, where?",
        "code": "function getLength<T>(x: T): number {\n  return x.length;\n}",
        "answers": ["No: x.length", "Yes", "No: return type", "No: generic syntax"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "bio? optional w p faragh: p.bio = undefined, ?? kay-3ti 'no bio'.",
        "text": "What does this code print?",
        "code": "interface Profile {\n  bio?: string;\n}\nconst p: Profile = {};\nconsole.log(p.bio ?? \"no bio\");",
        "answers": ["undefined", "null", "no bio", "Compile error"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "readonly array: push ma-mkhadamch 3lih. Had satr ghadi y-faili.",
        "text": "Which line fails to compile?",
        "code": "const tags: readonly string[] = [\"a\", \"b\"];\ntags.push(\"c\");",
        "answers": ["Line 1", "Line 2", "Line 3", "It compiles"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "as string: type assertion kat-gol l-compiler belli input howa string. .length dyal '123' = ?",
        "text": "What does this code print?",
        "code": "const input: unknown = \"123\";\nconst len = (input as string).length;\nconsole.log(len);",
        "answers": ["3", "123", "undefined", "Compile error"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "Excess property check: object literal b property ziyada 3la Point ghadi y-faili.",
        "text": "Does this compile?",
        "code": "interface Point { x: number; y: number; }\nconst p: Point = { x: 1, y: 2, z: 3 };",
        "answers": ["Yes", "No: missing property", "No: syntax", "No: excess property z"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "void function kat-rje3 undefined: l-wwel print 'hi', tani print l-valeur li rj3at l-function.",
        "text": "What is the full output?",
        "code": "function log(msg: string): void {\n  console.log(msg);\n}\nconst r = log(\"hi\");\nconsole.log(r);",
        "answers": ["hi", "hi then undefined", "undefined then hi", "nothing"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "Discriminated union: kind = 'square', donc l-branch tanya li ghadi t-khdem: size * size.",
        "text": "What does this code print?",
        "code": "type Shape = { kind: \"circle\"; radius: number } | { kind: \"square\"; size: number };\nfunction area(s: Shape): number {\n  if (s.kind === \"circle\") return 3.14 * s.radius * s.radius;\n  return s.size * s.size;\n}\nconsole.log(area({ kind: \"square\", size: 3 }));",
        "answers": ["28.26", "Compile error", "9", "0"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "'a' in x: narrowing b in operator. x fih type 'b', donc return x.b.",
        "text": "What does this code print?",
        "code": "type A = { type: \"a\"; a: number };\ntype B = { type: \"b\"; b: number };\nfunction f(x: A | B): number {\n  if (\"a\" in x) return x.a;\n  return x.b;\n}\nconsole.log(f({ type: \"b\", b: 7 }));",
        "answers": ["undefined", "0", "Compile error", "7"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "async function kat-rje3 Promise: fetchNum().then(n => ...) b n = 42. Dir l-hesab.",
        "text": "What does this code print?",
        "code": "async function fetchNum(): Promise<number> {\n  return 42;\n}\nfetchNum().then(n => console.log(n * 2));",
        "answers": ["84", "42", "Promise {84}", "undefined"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "get() kat-rje3 Promise<string> machi string: ma t9derch t-assigniha l variable dyal type string.",
        "text": "Which line fails to compile?",
        "code": "async function get(): Promise<string> {\n  return \"ok\";\n}\nconst s: string = get();",
        "answers": ["Line 2", "Line 4", "Line 1", "It compiles"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "port? optional w ma t-7etatch: c.port = undefined, ?? kay-3ti 80.",
        "text": "What does this code print?",
        "code": "interface Config { host: string; port?: number; }\nfunction connect(c: Config): string {\n  return c.host + \":\" + (c.port ?? 80);\n}\nconsole.log(connect({ host: \"localhost\" }));",
        "answers": ["localhost", "localhost:undefined", "localhost:80", "Compile error"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "Reverse mapping dyal enum: Color[2] kay-3ti smiyat l-member li 3ndo valeur 2.",
        "text": "What does this code print?",
        "code": "enum Color { Red, Green, Blue }\nconsole.log(Color[2]);",
        "answers": ["Blue", "2", "Green", "undefined"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "Type predicate x is string: isString(v) = true, donc v t-narrowat l string w .length dyalha = ?",
        "text": "What does this code print?",
        "code": "function isString(x: unknown): x is string {\n  return typeof x === \"string\";\n}\nconst v: unknown = \"abc\";\nconsole.log(isString(v) ? v.length : 0);",
        "answers": ["0", "true", "Compile error", "3"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "L-function kat-rje3 n * 2 (number) ama l-type l-mdeclari kat-gol string: l-return ma kay-t-tab9ch.",
        "text": "Does this compile?",
        "code": "let fn: (n: number) => string;\nfn = (n: number) => n * 2;",
        "answers": ["Yes", "No: return type mismatch", "No: params", "No: not initialized"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "Default parameter exp = 2: pow(3) = 3 ** 2.",
        "text": "What does this code print?",
        "code": "function pow(base: number, exp: number = 2): number {\n  return base ** exp;\n}\nconsole.log(pow(3));",
        "answers": ["6", "27", "9", "NaN"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "as const: tuple readonly b les valeurs literals. langs[0] = 'js'.",
        "text": "What does this code print?",
        "code": "const langs = [\"js\", \"ts\"] as const;\nconsole.log(langs[0]);",
        "answers": ["js", "ts", "undefined", "Compile error"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "Literal union type: 'paused' ma-kaynach f 'on' | 'off'. Had satr ghadi y-faili.",
        "text": "Which line fails to compile?",
        "code": "type Status = \"on\" | \"off\";\nlet s: Status = \"on\";\ns = \"paused\";\nconsole.log(s);",
        "answers": ["Line 2", "Line 4", "It compiles", "Line 3"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "|| kay-rje3 l-wwel truthy (0 falsy donc kay-doz); ?? kay-rje3 l-wwel li machi null/undefined (0 kay-b9a).",
        "text": "What are the two lines printed?",
        "code": "const count: number = 0;\nconsole.log(count || 10);\nconsole.log(count ?? 10);",
        "answers": ["10 then 0", "10 then 10", "0 then 0", "0 then 10"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "pair('a', 1): T = string, U = number. Chno typeof x w typeof y?",
        "text": "What does this code print?",
        "code": "function pair<T, U>(a: T, b: U): [T, U] {\n  return [a, b];\n}\nconst [x, y] = pair(\"a\", 1);\nconsole.log(typeof x + \",\" + typeof y);",
        "answers": ["number,string", "string,string", "string,number", "unknown,unknown"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "keyof Car: key = 'year' valid, getProp kat-rje3 car['year'].",
        "text": "What does this code print?",
        "code": "interface Car { brand: string; year: number; }\nfunction getProp(car: Car, key: keyof Car) {\n  return car[key];\n}\nconsole.log(getProp({ brand: \"Dacia\", year: 2020 }, \"year\"));",
        "answers": ["Dacia", "2020", "undefined", "Compile error"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "as assertion ma kat-badel walou f runtime: m ba9i number. typeof m = ?",
        "text": "Does the assertion convert n to a string at runtime? What prints?",
        "code": "let n: number = 5;\nlet m: string = n as unknown as string;\nconsole.log(typeof m);",
        "answers": ["No: number", "Yes: string", "Compile error", "undefined"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "Function overloads: l-implementation l-khra hiya li kay-t-executa. format(5) = 'formatted:' + String(5).",
        "text": "What does this code print?",
        "code": "function format(x: number): string;\nfunction format(x: string): string;\nfunction format(x: unknown): string {\n  return \"formatted:\" + String(x);\n}\nconsole.log(format(5));",
        "answers": ["5", "formatted:number", "Compile error", "formatted:5"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "readonly tuple: l-9raya mkhadma 3adi. t[1] = 'a', toUpperCase kat-redha majuscule.",
        "text": "What does this code print?",
        "code": "const t: readonly [number, string] = [1, \"a\"];\nconsole.log(t[1].toUpperCase());",
        "answers": ["a", "A", "[1,A]", "Compile error"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "strict mode: catch variable type unknown. e.toUpperCase() bla narrowing = erreur f had satr.",
        "text": "Under strict mode, does this compile?",
        "code": "try {\n  throw \"boom\";\n} catch (e) {\n  console.log(e.toUpperCase());\n}",
        "answers": ["Yes", "No: throw needs Error", "No: e is unknown", "No: syntax"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "getX() bla this: this = undefined f strict mode. L-compiler kay-tleb this mn type { x: number }.",
        "text": "Does this compile?",
        "code": "function getX(this: { x: number }): number {\n  return this.x;\n}\nconsole.log(getX());",
        "answers": ["No: this context", "Yes", "No: return", "No: syntax"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "Interface merging: les deux declarations dyal Box kay-t-jem3o f wa7da. b fih width w height.",
        "text": "What does this code print?",
        "code": "interface Box { width: number; }\ninterface Box { height: number; }\nconst b: Box = { width: 2, height: 3 };\nconsole.log(b.width * b.height);",
        "answers": ["5", "NaN", "6", "Compile error"],
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
        "explain_dr": "Type annotation : number ma kat-badelch l-hesab: 30 + 5 = ?",
        "text": "Qu'affiche ce code ?",
        "code": "let age: number = 30;\nage = age + 5;\nconsole.log(age);",
        "answers": ["30", "35", "305", "TypeError"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "String concatenation b +: 'Hello' + ' World' kay-jem3hom.",
        "text": "Qu'affiche ce code ?",
        "code": "const greeting: string = \"Hello\";\nconsole.log(greeting + \" World\");",
        "answers": ["Hello World", "HelloWorld", "Hello, World", "undefined World"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "!true kay-3kes l-boolean.",
        "text": "Qu'affiche ce code ?",
        "code": "let isActive: boolean = true;\nconsole.log(!isActive);",
        "answers": ["true", "false", "0", "undefined"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "number[]: array dyal numbers, .length = chhal men element fih.",
        "text": "Qu'affiche ce code ?",
        "code": "const scores: number[] = [10, 20, 30];\nconsole.log(scores.length);",
        "answers": ["3", "30", "10", "undefined"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "add(4, 6): l-function kat-jem3 a + b.",
        "text": "Qu'affiche ce code ?",
        "code": "function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(4, 6));",
        "answers": ["46", "10", "4", "NaN"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "let (machi const): name momkin t-t-badel. L-valeur l-khra hiya li ghadi t-t-printa.",
        "text": "Qu'affiche ce code ?",
        "code": "let name: string = \"Sara\";\nname = \"Lina\";\nconsole.log(name);",
        "answers": ["Sara", "Lina", "SaraLina", "TypeError"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "Object type b name w age: user.name kat-wsal l-property name.",
        "text": "Qu'affiche ce code ?",
        "code": "const user: { name: string; age: number } = { name: \"Omar\", age: 28 };\nconsole.log(user.name);",
        "answers": ["Omar", "28", "Omar, 28", "undefined"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "any: kay-9bel ay type bla mochkil. L-valeur l-khra li t-7etat hiya li ghadi t-t-printa.",
        "text": "Qu'affiche ce code ?",
        "code": "let value: any = \"hello\";\nvalue = 42;\nconsole.log(value);",
        "answers": ["hello", "42", "TypeError", "any"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "PI * 2: 3.14 * 2 = ?",
        "text": "Qu'affiche ce code ?",
        "code": "const PI: number = 3.14;\nconsole.log(PI * 2);",
        "answers": ["6.28", "3.142", "6", "3.14"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "Default parameter: greet() bla argument kay-sta3mel 'guest'.",
        "text": "Qu'affiche ce code ?",
        "code": "function greet(name: string = \"guest\"): string {\n  return \"Hi \" + name;\n}\nconsole.log(greet());",
        "answers": ["Hi guest", "Hi undefined", "Hi ", "TypeError"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "strict TypeScript: ma momkinch t-7et string f variable dyal type number. Fina satr ghadi y-faili l-compilation?",
        "text": "Quelle ligne ne compile pas en TypeScript strict ?",
        "code": "let count: number = 5;\ncount = \"five\";\nconsole.log(count);",
        "answers": ["Ligne 1", "Ligne 2", "Ligne 3", "Ça compile sans problème"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "Type inference: city t-inferat k string men 'Tanger'. T-7et 100 (number) = erreur f had satr.",
        "text": "Quelle ligne ne compile pas en TypeScript strict ?",
        "code": "let city = \"Tanger\";\ncity = 100;",
        "answers": ["Ligne 1", "Ça compile sans problème", "Ligne 2", "Lignes 1 et 2"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "number[]: push('four') - string f array dyal numbers ma-mkhadamch.",
        "text": "Quelle ligne ne compile pas ?",
        "code": "const nums: number[] = [1, 2, 3];\nnums.push(\"four\");",
        "answers": ["Ligne 2", "Ligne 1", "Ligne 3", "Ça compile sans problème"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "age? optional: ma t-7etatch, donc u.age = undefined w ?? kay-3ti 'unknown'.",
        "text": "Qu'affiche ce code ?",
        "code": "interface User {\n  name: string;\n  age?: number;\n}\nconst u: User = { name: \"Ali\" };\nconsole.log(u.age ?? \"unknown\");",
        "answers": ["undefined", "null", "TypeError", "unknown"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "Union type string | number: id t-badel l 123, donc typeof id = 'number'.",
        "text": "Qu'affiche ce code ?",
        "code": "let id: string | number = \"abc\";\nid = 123;\nconsole.log(typeof id);",
        "answers": ["string", "number", "object", "string|number"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "L-function kat-declari return string ama kat-rje3 42 (number): l-return type ma kay-t-tab9ch m3a l-body.",
        "text": "Où la compilation échoue-t-elle ?",
        "code": "function getName(): string {\n  return 42;\n}",
        "answers": ["L'instruction return", "La signature", "Ça compile", "Le nom de la fonction"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "const kat-men3 l-reassignment dyal l-variable, ama les properties dyal l-object momkin y-t-badlo. Compile w print true.",
        "text": "Est-ce que ça compile ? Qu'est-ce que ça affiche ?",
        "code": "const config: { debug: boolean } = { debug: false };\nconfig.debug = true;\nconsole.log(config.debug);",
        "answers": ["Erreur de compilation : const ne change pas", "false", "true", "undefined"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "Enums bla valeur kat-bda men 0: Admin=0, User=1, Guest=2.",
        "text": "Qu'affiche ce code ?",
        "code": "enum Role { Admin, User, Guest }\nconsole.log(Role.User);",
        "answers": ["0", "1", "User", "Guest"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "Tuple [number, number]: point[0] + point[1] = 3 + 4.",
        "text": "Qu'affiche ce code ?",
        "code": "const point: [number, number] = [3, 4];\nconsole.log(point[0] + point[1]);",
        "answers": ["7", "34", "[3,4]", "undefined"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "strictNullChecks: null ma-mkhadamch f string. Had satr ghadi y-faili.",
        "text": "En mode strict, quelle ligne échoue ?",
        "code": "let title: string = \"hello\";\ntitle = null;",
        "answers": ["Ligne 1", "Les deux lignes", "Ça compile", "Ligne 2"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "Type narrowing b typeof: x = 'hi' string, donc l-branch l-lowla li ghadi t-khdem: 'text:' + x.length.",
        "text": "Qu'affiche ce code ?",
        "code": "function describe(x: string | number): string {\n  if (typeof x === \"string\") {\n    return \"text:\" + x.length;\n  }\n  return \"num:\" + x.toFixed(1);\n}\nconsole.log(describe(\"hi\"));",
        "answers": ["num:2", "text:hi", "text:2", "TypeError"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "strict mode: user momkin y-kon null, w .name 3la null = erreur f had satr.",
        "text": "En mode strict, quelle ligne échoue ?",
        "code": "let user: { name: string } | null = null;\nconsole.log(user.name);",
        "answers": ["Ligne 2", "Ligne 1", "Les deux", "Aucune"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "unknown khaso narrowing 9bel l-sti3mal: ma t9derch t-3ayet l method bla ma t-verifi l-type l-wwel.",
        "text": "Est-ce que ça compile en mode strict ?",
        "code": "let data: unknown = \"hello\";\nconsole.log(data.toUpperCase());",
        "answers": ["Oui", "Non : data est null", "Non : pas une fonction", "Non : data est unknown"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "Generic identity<string>: T = string, l-function kat-rje3 nafs l-valeur li dkhlet.",
        "text": "Qu'affiche ce code ?",
        "code": "function identity<T>(value: T): T {\n  return value;\n}\nconsole.log(identity<string>(\"ts\"));",
        "answers": ["string", "ts", "undefined", "T"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "T generic bla constraint: TypeScript ma kay-3refch wach T 3ndo .length. Fina ghadi y-faili l-compilation?",
        "text": "Est-ce que ça compile ? Sinon, où ?",
        "code": "function getLength<T>(x: T): number {\n  return x.length;\n}",
        "answers": ["Non : x.length", "Oui", "Non : type de retour", "Non : syntaxe générique"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "bio? optional w p faragh: p.bio = undefined, ?? kay-3ti 'no bio'.",
        "text": "Qu'affiche ce code ?",
        "code": "interface Profile {\n  bio?: string;\n}\nconst p: Profile = {};\nconsole.log(p.bio ?? \"no bio\");",
        "answers": ["undefined", "null", "no bio", "Erreur de compilation"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "readonly array: push ma-mkhadamch 3lih. Had satr ghadi y-faili.",
        "text": "Quelle ligne ne compile pas ?",
        "code": "const tags: readonly string[] = [\"a\", \"b\"];\ntags.push(\"c\");",
        "answers": ["Ligne 1", "Ligne 2", "Ligne 3", "Ça compile"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "as string: type assertion kat-gol l-compiler belli input howa string. .length dyal '123' = ?",
        "text": "Qu'affiche ce code ?",
        "code": "const input: unknown = \"123\";\nconst len = (input as string).length;\nconsole.log(len);",
        "answers": ["3", "123", "undefined", "Erreur de compilation"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "Excess property check: object literal b property ziyada 3la Point ghadi y-faili.",
        "text": "Est-ce que ça compile ?",
        "code": "interface Point { x: number; y: number; }\nconst p: Point = { x: 1, y: 2, z: 3 };",
        "answers": ["Oui", "Non : propriété manquante", "Non : syntaxe", "Non : propriété z en trop"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "void function kat-rje3 undefined: l-wwel print 'hi', tani print l-valeur li rj3at l-function.",
        "text": "Quelle est la sortie complète ?",
        "code": "function log(msg: string): void {\n  console.log(msg);\n}\nconst r = log(\"hi\");\nconsole.log(r);",
        "answers": ["hi", "hi puis undefined", "undefined puis hi", "rien"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "Discriminated union: kind = 'square', donc l-branch tanya li ghadi t-khdem: size * size.",
        "text": "Qu'affiche ce code ?",
        "code": "type Shape = { kind: \"circle\"; radius: number } | { kind: \"square\"; size: number };\nfunction area(s: Shape): number {\n  if (s.kind === \"circle\") return 3.14 * s.radius * s.radius;\n  return s.size * s.size;\n}\nconsole.log(area({ kind: \"square\", size: 3 }));",
        "answers": ["28.26", "Erreur de compilation", "9", "0"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "'a' in x: narrowing b in operator. x fih type 'b', donc return x.b.",
        "text": "Qu'affiche ce code ?",
        "code": "type A = { type: \"a\"; a: number };\ntype B = { type: \"b\"; b: number };\nfunction f(x: A | B): number {\n  if (\"a\" in x) return x.a;\n  return x.b;\n}\nconsole.log(f({ type: \"b\", b: 7 }));",
        "answers": ["undefined", "0", "Erreur de compilation", "7"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "async function kat-rje3 Promise: fetchNum().then(n => ...) b n = 42. Dir l-hesab.",
        "text": "Qu'affiche ce code ?",
        "code": "async function fetchNum(): Promise<number> {\n  return 42;\n}\nfetchNum().then(n => console.log(n * 2));",
        "answers": ["84", "42", "Promise {84}", "undefined"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "get() kat-rje3 Promise<string> machi string: ma t9derch t-assigniha l variable dyal type string.",
        "text": "Quelle ligne ne compile pas ?",
        "code": "async function get(): Promise<string> {\n  return \"ok\";\n}\nconst s: string = get();",
        "answers": ["Ligne 2", "Ligne 4", "Ligne 1", "Ça compile"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "port? optional w ma t-7etatch: c.port = undefined, ?? kay-3ti 80.",
        "text": "Qu'affiche ce code ?",
        "code": "interface Config { host: string; port?: number; }\nfunction connect(c: Config): string {\n  return c.host + \":\" + (c.port ?? 80);\n}\nconsole.log(connect({ host: \"localhost\" }));",
        "answers": ["localhost", "localhost:undefined", "localhost:80", "Erreur de compilation"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "Reverse mapping dyal enum: Color[2] kay-3ti smiyat l-member li 3ndo valeur 2.",
        "text": "Qu'affiche ce code ?",
        "code": "enum Color { Red, Green, Blue }\nconsole.log(Color[2]);",
        "answers": ["Blue", "2", "Green", "undefined"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "Type predicate x is string: isString(v) = true, donc v t-narrowat l string w .length dyalha = ?",
        "text": "Qu'affiche ce code ?",
        "code": "function isString(x: unknown): x is string {\n  return typeof x === \"string\";\n}\nconst v: unknown = \"abc\";\nconsole.log(isString(v) ? v.length : 0);",
        "answers": ["0", "true", "Erreur de compilation", "3"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "L-function kat-rje3 n * 2 (number) ama l-type l-mdeclari kat-gol string: l-return ma kay-t-tab9ch.",
        "text": "Est-ce que ça compile ?",
        "code": "let fn: (n: number) => string;\nfn = (n: number) => n * 2;",
        "answers": ["Oui", "Non : type de retour incompatible", "Non : paramètres", "Non : non initialisée"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "Default parameter exp = 2: pow(3) = 3 ** 2.",
        "text": "Qu'affiche ce code ?",
        "code": "function pow(base: number, exp: number = 2): number {\n  return base ** exp;\n}\nconsole.log(pow(3));",
        "answers": ["6", "27", "9", "NaN"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "as const: tuple readonly b les valeurs literals. langs[0] = 'js'.",
        "text": "Qu'affiche ce code ?",
        "code": "const langs = [\"js\", \"ts\"] as const;\nconsole.log(langs[0]);",
        "answers": ["js", "ts", "undefined", "Erreur de compilation"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "Literal union type: 'paused' ma-kaynach f 'on' | 'off'. Had satr ghadi y-faili.",
        "text": "Quelle ligne ne compile pas ?",
        "code": "type Status = \"on\" | \"off\";\nlet s: Status = \"on\";\ns = \"paused\";\nconsole.log(s);",
        "answers": ["Ligne 2", "Ligne 4", "Ça compile", "Ligne 3"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "|| kay-rje3 l-wwel truthy (0 falsy donc kay-doz); ?? kay-rje3 l-wwel li machi null/undefined (0 kay-b9a).",
        "text": "Quelles sont les deux lignes affichées ?",
        "code": "const count: number = 0;\nconsole.log(count || 10);\nconsole.log(count ?? 10);",
        "answers": ["10 puis 0", "10 puis 10", "0 puis 0", "0 puis 10"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "pair('a', 1): T = string, U = number. Chno typeof x w typeof y?",
        "text": "Qu'affiche ce code ?",
        "code": "function pair<T, U>(a: T, b: U): [T, U] {\n  return [a, b];\n}\nconst [x, y] = pair(\"a\", 1);\nconsole.log(typeof x + \",\" + typeof y);",
        "answers": ["number,string", "string,string", "string,number", "unknown,unknown"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "keyof Car: key = 'year' valid, getProp kat-rje3 car['year'].",
        "text": "Qu'affiche ce code ?",
        "code": "interface Car { brand: string; year: number; }\nfunction getProp(car: Car, key: keyof Car) {\n  return car[key];\n}\nconsole.log(getProp({ brand: \"Dacia\", year: 2020 }, \"year\"));",
        "answers": ["Dacia", "2020", "undefined", "Erreur de compilation"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "as assertion ma kat-badel walou f runtime: m ba9i number. typeof m = ?",
        "text": "L'assertion convertit-elle n en string à l'exécution ? Qu'est-ce qui s'affiche ?",
        "code": "let n: number = 5;\nlet m: string = n as unknown as string;\nconsole.log(typeof m);",
        "answers": ["Non : number", "Oui : string", "Erreur de compilation", "undefined"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "Function overloads: l-implementation l-khra hiya li kay-t-executa. format(5) = 'formatted:' + String(5).",
        "text": "Qu'affiche ce code ?",
        "code": "function format(x: number): string;\nfunction format(x: string): string;\nfunction format(x: unknown): string {\n  return \"formatted:\" + String(x);\n}\nconsole.log(format(5));",
        "answers": ["5", "formatted:number", "Erreur de compilation", "formatted:5"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "readonly tuple: l-9raya mkhadma 3adi. t[1] = 'a', toUpperCase kat-redha majuscule.",
        "text": "Qu'affiche ce code ?",
        "code": "const t: readonly [number, string] = [1, \"a\"];\nconsole.log(t[1].toUpperCase());",
        "answers": ["a", "A", "[1,A]", "Erreur de compilation"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "strict mode: catch variable type unknown. e.toUpperCase() bla narrowing = erreur f had satr.",
        "text": "En mode strict, est-ce que ça compile ?",
        "code": "try {\n  throw \"boom\";\n} catch (e) {\n  console.log(e.toUpperCase());\n}",
        "answers": ["Oui", "Non : throw exige Error", "Non : e est unknown", "Non : syntaxe"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "getX() bla this: this = undefined f strict mode. L-compiler kay-tleb this mn type { x: number }.",
        "text": "Est-ce que ça compile ?",
        "code": "function getX(this: { x: number }): number {\n  return this.x;\n}\nconsole.log(getX());",
        "answers": ["Non : contexte this", "Oui", "Non : retour", "Non : syntaxe"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "Interface merging: les deux declarations dyal Box kay-t-jem3o f wa7da. b fih width w height.",
        "text": "Qu'affiche ce code ?",
        "code": "interface Box { width: number; }\ninterface Box { height: number; }\nconst b: Box = { width: 2, height: 3 };\nconsole.log(b.width * b.height);",
        "answers": ["5", "NaN", "6", "Erreur de compilation"],
        "correct": 2,
        "selection": null
      }
    ]
  }
];
