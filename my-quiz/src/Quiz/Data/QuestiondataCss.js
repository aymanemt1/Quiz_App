export const questionsCss = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la color: chno kaydir had l rule l text dyal p? Tfakkar chno kay3ni property color.",
        "text": "What color is the text?",
        "code": "p { color: red; }\n<p>Hi</p>",
        "answers": [
          "Black",
          "Blue",
          "Red",
          "It is hidden"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "Selector .box kay-targeti ghir l elements li 3andhom class box. Chkun ghayakhod l background?",
        "text": "Which element gets a blue background?",
        "code": ".box { background-color: blue; }\n<div class=\"box\">A</div>\n<div>B</div>",
        "answers": [
          "Both divs",
          "Only the div containing \"A\"",
          "Only the div containing \"B\"",
          "Neither"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "L # kay3ni id, machi class. Chno kay-targeti #main?",
        "text": "Which element does this selector target?",
        "code": "#main { font-size: 20px; }",
        "answers": [
          "The element with id=\"main\"",
          "The element with class=\"main\"",
          "All <main> tags",
          "The first element on the page"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "L virgule kat-jme3 selectors. Chkun ghay-t2athar b had l rule?",
        "text": "What does this rule do?",
        "code": "h1, h2 { margin: 0; }",
        "answers": [
          "Removes margin from h1 only",
          "Removes margin from h2 only",
          "Removes margin from elements with class h1",
          "Removes margin from both h1 and h2"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "Comments f CSS kayt-tjahalo. Wach l rule li morahom ghaykhdem?",
        "text": "What happens to the comment?",
        "code": "/* sale styles */\n.price { color: red; }",
        "answers": [
          "It turns the text gray",
          "It causes an error",
          "It is ignored; the rule still applies",
          "It disables the rule below it"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "Padding b wa7ed l value kat-tapply 3la ga3 l jihat. Fin ghaytzad l padding?",
        "text": "Where is the padding applied?",
        "code": ".box { padding: 10px; }",
        "answers": [
          "Top only",
          "All four sides",
          "Left and right only",
          "Nowhere — the unit is missing"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "Links 3andhom underline by default. Chno kaydir text-decoration: none?",
        "text": "What is the visual result?",
        "code": "a { text-decoration: none; }",
        "answers": [
          "Links lose their underline",
          "Links become bold",
          "Links disappear",
          "Links turn blue"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "Mlli kat-7ded ghir l width, chno kaytra l height? Fker f aspect ratio.",
        "text": "What happens to the image height?",
        "code": "img { width: 100px; }\n<img src=\"cat.jpg\">",
        "answers": [
          "It becomes 100px too",
          "It becomes 0",
          "The image disappears",
          "It scales automatically to keep proportions"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "Text-align kay-controli l alignment dyal text. Chno ghaydir center?",
        "text": "How is the paragraph text aligned?",
        "code": "p { text-align: center; }",
        "answers": [
          "Left",
          "Right",
          "Centered",
          "Justified"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "Border shorthand: width, style, color. Chno ghayban?",
        "text": "What does the box look like?",
        "code": ".x { border: 2px solid black; }",
        "answers": [
          "No visible border",
          "A 2px solid black border around it",
          "A black background",
          "A dashed border"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "CSS kayst3mel l spelling l amrikiya. Chno lmochkil m3a \"colour\"?",
        "text": "Why is the text not red?",
        "code": ".box { colour: red; }",
        "answers": [
          "\"colour\" is not a valid property — the British spelling doesn't exist in CSS",
          "Red is not a valid color",
          "The class selector is wrong",
          "CSS files must be linked twice"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "CSS values khasshom unit (px, em...). Chno kaytra l declaration bla unit?",
        "text": "Why is the font size unchanged?",
        "code": "p { font-size: 16; }",
        "answers": [
          "16 is too small to notice",
          "p is not a valid selector",
          "The browser default wins",
          "The unit is missing — the declaration is ignored"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "Had selector kay-targeti id, walakin l div 3ando class. Chno l far9 bin # w .?",
        "text": "Why doesn't this rule apply to the div?",
        "code": "#box { color: red; }\n<div class=\"box\">Hi</div>",
        "answers": [
          "The color red is invalid",
          "Divs can't be red",
          "The selector targets an id, but the div has a class",
          "CSS can't style divs"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "Descendant selector kay-matchi f ay profondeur. Chkun men l paragraphs ghay7mar?",
        "text": "Which paragraphs turn red?",
        "code": "div p { color: red; }\n<div><section><p>Hi</p></section></div>\n<p>Bye</p>",
        "answers": [
          "Only \"Bye\"",
          "Only \"Hi\" — the descendant selector matches at any depth",
          "Both",
          "Neither"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "Auto margins kay-centriw ghir ila kayn space khawi. 3lach had l div ma t-centrach?",
        "text": "Why isn't this box horizontally centered?",
        "code": ".box { margin: 0 auto; }\n<div class=\"box\">Hi</div>",
        "answers": [
          "A full-width block has no free space to center in — it needs a set width",
          "margin: auto only works vertically",
          "auto is not a valid value",
          "The div needs text-align: center"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la padding b joj values: chno kay3ni kola wa7da? Fker f l ordre dyalhom.",
        "text": "How much padding does the button get?",
        "code": ".btn { padding: 10px 20px; }",
        "answers": [
          "10px everywhere",
          "20px everywhere",
          "10px left/right, 20px top/bottom",
          "10px top/bottom, 20px left/right"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la l conflit bin inline style w stylesheet rule. Chkun kayghlb f CSS? Fker f l priority.",
        "text": "What color is the text?",
        "code": "p { color: blue; }\n<p style=\"color: red;\">Hi</p>",
        "answers": [
          "Blue",
          "Purple",
          "Red — inline styles beat stylesheet rules",
          "Black"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la percentages: menin kayt-7seb l width? Fker f l parent.",
        "text": "The parent is 800px wide. How wide is the child?",
        "code": ".child { width: 50%; }",
        "answers": [
          "50px",
          "400px",
          "800px",
          "It depends on the screen"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "Justify-content ma kaykhdemch bla display flex wla grid. Chno na9es hna?",
        "text": "Why doesn't justify-content center the items?",
        "code": ".row { justify-content: center; }",
        "answers": [
          "justify-content only works on flex or grid containers — display: flex is missing",
          "center is not a valid value",
          "It only works vertically",
          "The items need a width"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la l semicolon li na9es: chno kaytra l declarations mlli syntax ma kamelch?",
        "text": "What is the result of this rule?",
        "code": ".a { color: red background: blue; }",
        "answers": [
          "Red text on blue background",
          "Red text only",
          "Blue background only",
          "Neither — the missing semicolon breaks the whole declaration"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al 3la specificity: chkun kayghlb, id wla class? Fker f l 7sab dyalhom.",
        "text": "What color is the link?",
        "code": "#nav { color: red; }\n.link { color: blue; }\n<a id=\"nav\" class=\"link\">Home</a>",
        "answers": [
          "Blue",
          "Purple",
          "Red — the id selector has higher specificity",
          "Black"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "Selector li fih element + class kayghlb class bo7dha. Chkun ghayghlb hna?",
        "text": "What color is the text?",
        "code": "div p.note { color: red; }\n.note { color: blue; }\n<div><p class=\"note\">Hi</p></div>",
        "answers": [
          "Blue",
          "Red — div p.note is more specific than .note",
          "The last rule in the HTML",
          "Black"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la box-sizing default: wach l width li kat-7ded kay-dkhel fih padding w border wla la? Fker chno kay3ni content-box.",
        "text": "What is the total rendered width of this box?",
        "code": ".box {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid black;\n}",
        "answers": [
          "250px — width + padding + border (default content-box)",
          "200px",
          "225px",
          "270px"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la box-sizing: border-box: chno l far9 m3a default? Fker chno kaydkhel wast l width.",
        "text": "Same box, but with box-sizing: border-box. What is the total width now?",
        "code": ".box {\n  box-sizing: border-box;\n  width: 200px;\n  padding: 20px;\n  border: 5px solid black;\n}",
        "answers": [
          "250px",
          "160px",
          "230px",
          "200px — padding and border are included in the width"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "Flex container by default kay-rteb l children f row. Kifach ghaybano?",
        "text": "How are the three children laid out?",
        "code": ".row { display: flex; }\n<div class=\"row\"><span>A</span><span>B</span><span>C</span></div>",
        "answers": [
          "Stacked vertically",
          "Overlapping",
          "Side by side in a row",
          "Only the first is shown"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "Column kat-bdel l main axis l vertical. Kifach ghaytrtbo l children?",
        "text": "How are the children laid out now?",
        "code": ".row { display: flex; flex-direction: column; }",
        "answers": [
          "Side by side",
          "Stacked vertically",
          "In reverse order",
          "Overlapping"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la centering vertical f row flex: chno l far9 bin main axis w cross axis? Fker chno kola property kat-controli.",
        "text": "In a row-direction flex container, which property centers items vertically?",
        "code": ".row { display: flex; }",
        "answers": [
          "align-items: center",
          "justify-content: center",
          "text-align: center",
          "vertical-align: middle"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la flex: 1: chno kaydir l grow factor mlli ga3 l children 3andhom nafs l value?",
        "text": "Three children each have flex: 1. What happens?",
        "code": ".row { display: flex; }\n.row > div { flex: 1; }",
        "answers": [
          "They overlap",
          "Only the first grows",
          "They keep their natural widths",
          "They share the row in three equal widths"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la !important: chno l priority dyalo 7ta 9oddam inline styles? Fker f l cascade.",
        "text": "What color is the text?",
        "code": "p { color: blue !important; }\n<p style=\"color: red;\">Hi</p>",
        "answers": [
          "Red",
          "Purple",
          "Blue — !important beats even an inline style",
          "Black"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la joj rules b nafs specificity: chno kay7dd chkun kayghlb? Fker f l source order.",
        "text": "What color is the text?",
        "code": ".a { color: red; }\n.a { color: blue; }",
        "answers": [
          "Red",
          "Blue — same specificity, the later rule wins",
          "Purple",
          "Black"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la vertical margins bin joj boxes: wach kayt-jm3o wla kayt-ghlbo? Fker f margin collapse.",
        "text": "What is the gap between the two boxes?",
        "code": ".one { margin-bottom: 20px; }\n.two { margin-top: 30px; }\n<div class=\"one\">A</div>\n<div class=\"two\">B</div>",
        "answers": [
          "30px — vertical margins collapse to the larger one",
          "50px",
          "20px",
          "0px"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "Absolute child kayt-positiona 3la a9rab ancestor positioned. Fin ghayban l badge?",
        "text": "Where does the badge appear?",
        "code": ".card { position: relative; }\n.badge { position: absolute; top: 0; right: 0; }\n<div class=\"card\"><span class=\"badge\">New</span></div>",
        "answers": [
          "At the top-right of the page",
          "At the top-right of the viewport",
          "It disappears",
          "At the top-right corner of the card"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "Fixed kay-lsa9 l element b l viewport. Chno kaytra mlli kat-scrolli?",
        "text": "What happens to this banner when the user scrolls?",
        "code": ".banner { position: fixed; top: 0; }",
        "answers": [
          "It scrolls away with the page",
          "It disappears",
          "It stays glued to the top of the viewport",
          "It moves to the bottom"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la z-index: chno l condition bach ykhdem? Fker f position dyal element.",
        "text": "Why is the popup still behind the header despite z-index: 999?",
        "code": ".popup { z-index: 999; }",
        "answers": [
          "999 is too small",
          "z-index has no effect on non-positioned (static) elements",
          "z-index only works with flexbox",
          "The header is transparent"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la joj selectors b nafs specificity: chno kay7dd l color? Fker f l ordre f l source.",
        "text": "Both rules have the same specificity. What color is the link?",
        "code": ".menu .link { color: red; }\n.nav .link { color: blue; }\n<div class=\"menu\"><div class=\"nav\"><a class=\"link\">Hi</a></div></div>",
        "answers": [
          "Blue — equal specificity, the later rule in source order wins",
          "Red",
          "Purple",
          "Black"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la sibling selectors: chno l far9 bin + w ~? Fker ch7al men sibling kay-matchi kola wa7ed.",
        "text": "Which selector matches BOTH paragraphs?",
        "code": "<div></div>\n<p>One</p>\n<p>Two</p>",
        "answers": [
          "div + p",
          "div > p",
          "p:first-child",
          "div ~ p"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "Overflow hidden kay-9ta3 ay 7aja kharja men l card. 3lach l tooltip t9at3at?",
        "text": "Why is the tooltip cut off?",
        "code": ".card { overflow: hidden; }\n.tip { position: absolute; top: -20px; }",
        "answers": [
          "Absolute elements can't go negative",
          "The tooltip needs z-index",
          "overflow: hidden clips anything sticking out of the card",
          "Tooltips must be fixed"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "Sticky khassha offset bach t3ref fin t-lsa9. Chno na9es hna?",
        "text": "Why doesn't the header stick on scroll?",
        "code": ".header { position: sticky; }",
        "answers": [
          "sticky is not a real value",
          "A sticky element needs an offset like top: 0 to know where to stick",
          "It needs position: fixed instead",
          "Sticky only works horizontally"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "Chkun kay-khlli l space dyalo f l layout? Fker f l far9 bin display w visibility.",
        "text": "Which one keeps its space in the layout?",
        "code": ".a { display: none; }\n.b { visibility: hidden; }",
        "answers": [
          ".b — visibility: hidden hides it but keeps its space",
          ".a",
          "Both",
          "Neither"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "Padding ma kay9blch values salba. Chno ghaytra b padding -10px?",
        "text": "What happens with this padding?",
        "code": ".box { padding: -10px; }",
        "answers": [
          "The box shrinks by 10px",
          "Content overflows",
          "It becomes margin",
          "Nothing — negative padding is invalid and ignored"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "Universal selector 3ando specificity 0. Chkun ghayghlb, * wla p?",
        "text": "What color is the paragraph?",
        "code": "* { color: red; }\np { color: blue; }\n<p>Hi</p>",
        "answers": [
          "Red",
          "Purple",
          "Blue — the * selector has zero specificity",
          "Black"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la :where(): chno kay-zid l specificity? Fker chno kay3ni 'adds zero specificity'.",
        "text": "What color is the text? (:where() adds zero specificity)",
        "code": "div:where(.big) { color: red; }\n.small { color: blue; }\n<div class=\"big small\">Hi</div>",
        "answers": [
          "Red",
          "Blue — :where() contributes no specificity, so .small wins",
          "Purple",
          "Black"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "Ba3d l properties kay-wrtho (b7al color), w ba3din la. Chkun li kay-wrth l paragraph?",
        "text": "Which properties inherit to the paragraph automatically?",
        "code": "body { color: red; margin: 40px; }\n<p>Hi</p>",
        "answers": [
          "color inherits; margin does not",
          "Both inherit",
          "Neither inherits",
          "margin inherits; color does not"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la em: menin kayt-7seb? Wach kayt-rakeb mlli kayt3awed? Fker f l parent.",
        "text": "The root font size is 16px. How big is the paragraph text?",
        "code": "div { font-size: 1.5em; }\ndiv p { font-size: 1.5em; }\n<div><p>Hi</p></div>",
        "answers": [
          "16px",
          "24px",
          "32px",
          "36px — em compounds: 16 x 1.5 x 1.5"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "Rem dayman kayt-7sab men root. Chno l far9 bin em w rem hna?",
        "text": "Same structure, but with rem. How big is the paragraph text?",
        "code": "div { font-size: 1.5rem; }\ndiv p { font-size: 1.5rem; }",
        "answers": [
          "16px",
          "36px",
          "24px — rem is always relative to the root",
          "48px"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la var(): chno kaytra mlli l variable ma m-definedach? Fker f l 2eme argument.",
        "text": "What color is the text?",
        "code": ".a { color: var(--brand, red); }",
        "answers": [
          "It stays black — the rule is invalid",
          "Red — the fallback is used because --brand is not defined",
          "Transparent",
          "Blue"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "Calc khassha spaces 7da l operators. Chno lmochkil f had l syntax?",
        "text": "Why is the width unchanged?",
        "code": ".box { width: calc(100%-20px); }",
        "answers": [
          "calc() requires spaces around - and + : calc(100% - 20px)",
          "calc is not supported",
          "Percentages can't be used in calc",
          "The box needs a parent width"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "Attribute selector kay-matchi ghir l input li 3ando had l attribut. Chkun ghay-sfar?",
        "text": "Which input gets the yellow background?",
        "code": "input[type=\"text\"] { background: yellow; }\n<input type=\"text\">\n<input type=\"password\">",
        "answers": [
          "Both",
          "The password input",
          "Neither",
          "Only the text input"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la :nth-child(): chno kay-7seb, ghir l elements li b7al selector wla ga3 l children? Fker f l h2.",
        "text": "Which paragraph becomes red?",
        "code": "p:nth-child(2) { color: red; }\n<div><h2>Title</h2><p>One</p><p>Two</p></div>",
        "answers": [
          "\"Two\"",
          "Both paragraphs",
          "\"One\" — it is the 2nd child of the div",
          "The h2"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "Pseudo-element ::before ma kaybanch bla content. Chno na9es?",
        "text": "Why does nothing appear before the button?",
        "code": ".btn::before { color: red; }\n<button class=\"btn\">Buy</button>",
        "answers": [
          "::before doesn't work on buttons",
          "A ::before pseudo-element renders nothing without a content property",
          "The color is invalid",
          "Pseudo-elements need JavaScript"
        ],
        "correct": 1,
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
        "explain_dr": "So2al kaysewlk 3la color: chno kaydir had l rule l text dyal p? Tfakkar chno kay3ni property color.",
        "text": "De quelle couleur est le texte ?",
        "code": "p { color: red; }\n<p>Hi</p>",
        "answers": [
          "Noir",
          "Bleu",
          "Rouge",
          "Il est caché"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "Selector .box kay-targeti ghir l elements li 3andhom class box. Chkun ghayakhod l background?",
        "text": "Quel élément reçoit un fond bleu ?",
        "code": ".box { background-color: blue; }\n<div class=\"box\">A</div>\n<div>B</div>",
        "answers": [
          "Les deux div",
          "Seule la div contenant « A »",
          "Seule la div contenant « B »",
          "Aucune"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "L # kay3ni id, machi class. Chno kay-targeti #main?",
        "text": "Quel élément ce sélecteur cible-t-il ?",
        "code": "#main { font-size: 20px; }",
        "answers": [
          "L'élément avec id=\"main\"",
          "L'élément avec class=\"main\"",
          "Toutes les balises <main>",
          "Le premier élément de la page"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "L virgule kat-jme3 selectors. Chkun ghay-t2athar b had l rule?",
        "text": "Que fait cette règle ?",
        "code": "h1, h2 { margin: 0; }",
        "answers": [
          "Supprime la marge de h1 uniquement",
          "Supprime la marge de h2 uniquement",
          "Supprime la marge des éléments de classe h1",
          "Supprime la marge de h1 et h2"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "Comments f CSS kayt-tjahalo. Wach l rule li morahom ghaykhdem?",
        "text": "Qu'arrive-t-il au commentaire ?",
        "code": "/* sale styles */\n.price { color: red; }",
        "answers": [
          "Il rend le texte gris",
          "Il provoque une erreur",
          "Il est ignoré ; la règle s'applique toujours",
          "Il désactive la règle en dessous"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "Padding b wa7ed l value kat-tapply 3la ga3 l jihat. Fin ghaytzad l padding?",
        "text": "Où le padding est-il appliqué ?",
        "code": ".box { padding: 10px; }",
        "answers": [
          "En haut uniquement",
          "Sur les quatre côtés",
          "À gauche et à droite uniquement",
          "Nulle part — l'unité manque"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "Links 3andhom underline by default. Chno kaydir text-decoration: none?",
        "text": "Quel est le résultat visuel ?",
        "code": "a { text-decoration: none; }",
        "answers": [
          "Les liens perdent leur soulignement",
          "Les liens deviennent gras",
          "Les liens disparaissent",
          "Les liens deviennent bleus"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "Mlli kat-7ded ghir l width, chno kaytra l height? Fker f aspect ratio.",
        "text": "Qu'arrive-t-il à la hauteur de l'image ?",
        "code": "img { width: 100px; }\n<img src=\"cat.jpg\">",
        "answers": [
          "Elle devient 100px aussi",
          "Elle devient 0",
          "L'image disparaît",
          "Elle s'ajuste automatiquement pour garder les proportions"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "Text-align kay-controli l alignment dyal text. Chno ghaydir center?",
        "text": "Comment le texte du paragraphe est-il aligné ?",
        "code": "p { text-align: center; }",
        "answers": [
          "À gauche",
          "À droite",
          "Centré",
          "Justifié"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "Border shorthand: width, style, color. Chno ghayban?",
        "text": "À quoi ressemble la boîte ?",
        "code": ".x { border: 2px solid black; }",
        "answers": [
          "Aucune bordure visible",
          "Une bordure noire continue de 2px autour",
          "Un fond noir",
          "Une bordure en pointillés"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "CSS kayst3mel l spelling l amrikiya. Chno lmochkil m3a \"colour\"?",
        "text": "Pourquoi le texte n'est-il pas rouge ?",
        "code": ".box { colour: red; }",
        "answers": [
          "« colour » n'est pas une propriété valide — l'orthographe britannique n'existe pas en CSS",
          "Red n'est pas une couleur valide",
          "Le sélecteur de classe est faux",
          "Les fichiers CSS doivent être liés deux fois"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "CSS values khasshom unit (px, em...). Chno kaytra l declaration bla unit?",
        "text": "Pourquoi la taille de police ne change-t-elle pas ?",
        "code": "p { font-size: 16; }",
        "answers": [
          "16 est trop petit pour être remarqué",
          "p n'est pas un sélecteur valide",
          "Le style par défaut du navigateur gagne",
          "L'unité manque — la déclaration est ignorée"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "Had selector kay-targeti id, walakin l div 3ando class. Chno l far9 bin # w .?",
        "text": "Pourquoi cette règle ne s'applique-t-elle pas à la div ?",
        "code": "#box { color: red; }\n<div class=\"box\">Hi</div>",
        "answers": [
          "La couleur red est invalide",
          "Les div ne peuvent pas être rouges",
          "Le sélecteur cible un id, mais la div a une classe",
          "Le CSS ne peut pas styliser les div"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "Descendant selector kay-matchi f ay profondeur. Chkun men l paragraphs ghay7mar?",
        "text": "Quels paragraphes deviennent rouges ?",
        "code": "div p { color: red; }\n<div><section><p>Hi</p></section></div>\n<p>Bye</p>",
        "answers": [
          "Seulement « Bye »",
          "Seulement « Hi » — le sélecteur descendant correspond à n'importe quelle profondeur",
          "Les deux",
          "Aucun"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "Auto margins kay-centriw ghir ila kayn space khawi. 3lach had l div ma t-centrach?",
        "text": "Pourquoi cette boîte n'est-elle pas centrée horizontalement ?",
        "code": ".box { margin: 0 auto; }\n<div class=\"box\">Hi</div>",
        "answers": [
          "Un bloc pleine largeur n'a pas d'espace libre pour se centrer — il faut une largeur définie",
          "margin: auto ne fonctionne que verticalement",
          "auto n'est pas une valeur valide",
          "La div a besoin de text-align: center"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la padding b joj values: chno kay3ni kola wa7da? Fker f l ordre dyalhom.",
        "text": "Quel padding le bouton reçoit-il ?",
        "code": ".btn { padding: 10px 20px; }",
        "answers": [
          "10px partout",
          "20px partout",
          "10px gauche/droite, 20px haut/bas",
          "10px haut/bas, 20px gauche/droite"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la l conflit bin inline style w stylesheet rule. Chkun kayghlb f CSS? Fker f l priority.",
        "text": "De quelle couleur est le texte ?",
        "code": "p { color: blue; }\n<p style=\"color: red;\">Hi</p>",
        "answers": [
          "Bleu",
          "Violet",
          "Rouge — les styles inline battent les règles de la feuille de style",
          "Noir"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la percentages: menin kayt-7seb l width? Fker f l parent.",
        "text": "Le parent fait 800px de large. Quelle est la largeur de l'enfant ?",
        "code": ".child { width: 50%; }",
        "answers": [
          "50px",
          "400px",
          "800px",
          "Ça dépend de l'écran"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "Justify-content ma kaykhdemch bla display flex wla grid. Chno na9es hna?",
        "text": "Pourquoi justify-content ne centre-t-il pas les éléments ?",
        "code": ".row { justify-content: center; }",
        "answers": [
          "justify-content ne fonctionne que sur les conteneurs flex ou grid — display: flex manque",
          "center n'est pas une valeur valide",
          "Ça ne fonctionne que verticalement",
          "Les éléments ont besoin d'une largeur"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la l semicolon li na9es: chno kaytra l declarations mlli syntax ma kamelch?",
        "text": "Quel est le résultat de cette règle ?",
        "code": ".a { color: red background: blue; }",
        "answers": [
          "Texte rouge sur fond bleu",
          "Texte rouge uniquement",
          "Fond bleu uniquement",
          "Aucun — le point-virgule manquant casse toute la déclaration"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al 3la specificity: chkun kayghlb, id wla class? Fker f l 7sab dyalhom.",
        "text": "De quelle couleur est le lien ?",
        "code": "#nav { color: red; }\n.link { color: blue; }\n<a id=\"nav\" class=\"link\">Home</a>",
        "answers": [
          "Bleu",
          "Violet",
          "Rouge — le sélecteur d'id a une spécificité plus élevée",
          "Noir"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "Selector li fih element + class kayghlb class bo7dha. Chkun ghayghlb hna?",
        "text": "De quelle couleur est le texte ?",
        "code": "div p.note { color: red; }\n.note { color: blue; }\n<div><p class=\"note\">Hi</p></div>",
        "answers": [
          "Bleu",
          "Rouge — div p.note est plus spécifique que .note",
          "La dernière règle du HTML",
          "Noir"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la box-sizing default: wach l width li kat-7ded kay-dkhel fih padding w border wla la? Fker chno kay3ni content-box.",
        "text": "Quelle est la largeur totale affichée de cette boîte ?",
        "code": ".box {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid black;\n}",
        "answers": [
          "250px — largeur + padding + bordure (content-box par défaut)",
          "200px",
          "225px",
          "270px"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la box-sizing: border-box: chno l far9 m3a default? Fker chno kaydkhel wast l width.",
        "text": "Même boîte, mais avec box-sizing: border-box. Quelle est la largeur totale maintenant ?",
        "code": ".box {\n  box-sizing: border-box;\n  width: 200px;\n  padding: 20px;\n  border: 5px solid black;\n}",
        "answers": [
          "250px",
          "160px",
          "230px",
          "200px — le padding et la bordure sont inclus dans la largeur"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "Flex container by default kay-rteb l children f row. Kifach ghaybano?",
        "text": "Comment les trois enfants sont-ils disposés ?",
        "code": ".row { display: flex; }\n<div class=\"row\"><span>A</span><span>B</span><span>C</span></div>",
        "answers": [
          "Empilés verticalement",
          "Superposés",
          "Côte à côte sur une ligne",
          "Seul le premier s'affiche"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "Column kat-bdel l main axis l vertical. Kifach ghaytrtbo l children?",
        "text": "Comment les enfants sont-ils disposés maintenant ?",
        "code": ".row { display: flex; flex-direction: column; }",
        "answers": [
          "Côte à côte",
          "Empilés verticalement",
          "En ordre inversé",
          "Superposés"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la centering vertical f row flex: chno l far9 bin main axis w cross axis? Fker chno kola property kat-controli.",
        "text": "Dans un conteneur flex en ligne, quelle propriété centre les éléments verticalement ?",
        "code": ".row { display: flex; }",
        "answers": [
          "align-items: center",
          "justify-content: center",
          "text-align: center",
          "vertical-align: middle"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la flex: 1: chno kaydir l grow factor mlli ga3 l children 3andhom nafs l value?",
        "text": "Trois enfants ont chacun flex: 1. Que se passe-t-il ?",
        "code": ".row { display: flex; }\n.row > div { flex: 1; }",
        "answers": [
          "Ils se superposent",
          "Seul le premier grandit",
          "Ils gardent leurs largeurs naturelles",
          "Ils se partagent la ligne en trois largeurs égales"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la !important: chno l priority dyalo 7ta 9oddam inline styles? Fker f l cascade.",
        "text": "De quelle couleur est le texte ?",
        "code": "p { color: blue !important; }\n<p style=\"color: red;\">Hi</p>",
        "answers": [
          "Rouge",
          "Violet",
          "Bleu — !important bat même un style inline",
          "Noir"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la joj rules b nafs specificity: chno kay7dd chkun kayghlb? Fker f l source order.",
        "text": "De quelle couleur est le texte ?",
        "code": ".a { color: red; }\n.a { color: blue; }",
        "answers": [
          "Rouge",
          "Bleu — même spécificité, la dernière règle gagne",
          "Violet",
          "Noir"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la vertical margins bin joj boxes: wach kayt-jm3o wla kayt-ghlbo? Fker f margin collapse.",
        "text": "Quel est l'espace entre les deux boîtes ?",
        "code": ".one { margin-bottom: 20px; }\n.two { margin-top: 30px; }\n<div class=\"one\">A</div>\n<div class=\"two\">B</div>",
        "answers": [
          "30px — les marges verticales fusionnent vers la plus grande",
          "50px",
          "20px",
          "0px"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "Absolute child kayt-positiona 3la a9rab ancestor positioned. Fin ghayban l badge?",
        "text": "Où le badge apparaît-il ?",
        "code": ".card { position: relative; }\n.badge { position: absolute; top: 0; right: 0; }\n<div class=\"card\"><span class=\"badge\">New</span></div>",
        "answers": [
          "En haut à droite de la page",
          "En haut à droite du viewport",
          "Il disparaît",
          "Dans le coin supérieur droit de la carte"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "Fixed kay-lsa9 l element b l viewport. Chno kaytra mlli kat-scrolli?",
        "text": "Qu'arrive-t-il à cette bannière quand l'utilisateur fait défiler ?",
        "code": ".banner { position: fixed; top: 0; }",
        "answers": [
          "Elle défile avec la page",
          "Elle disparaît",
          "Elle reste collée en haut du viewport",
          "Elle va en bas"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la z-index: chno l condition bach ykhdem? Fker f position dyal element.",
        "text": "Pourquoi le popup reste-t-il derrière le header malgré z-index: 999 ?",
        "code": ".popup { z-index: 999; }",
        "answers": [
          "999 est trop petit",
          "z-index n'a aucun effet sur les éléments non positionnés (static)",
          "z-index ne fonctionne qu'avec flexbox",
          "Le header est transparent"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la joj selectors b nafs specificity: chno kay7dd l color? Fker f l ordre f l source.",
        "text": "Les deux règles ont la même spécificité. De quelle couleur est le lien ?",
        "code": ".menu .link { color: red; }\n.nav .link { color: blue; }\n<div class=\"menu\"><div class=\"nav\"><a class=\"link\">Hi</a></div></div>",
        "answers": [
          "Bleu — spécificité égale, la dernière règle dans l'ordre du code gagne",
          "Rouge",
          "Violet",
          "Noir"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la sibling selectors: chno l far9 bin + w ~? Fker ch7al men sibling kay-matchi kola wa7ed.",
        "text": "Quel sélecteur correspond aux DEUX paragraphes ?",
        "code": "<div></div>\n<p>One</p>\n<p>Two</p>",
        "answers": [
          "div + p",
          "div > p",
          "p:first-child",
          "div ~ p"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "Overflow hidden kay-9ta3 ay 7aja kharja men l card. 3lach l tooltip t9at3at?",
        "text": "Pourquoi l'infobulle est-elle coupée ?",
        "code": ".card { overflow: hidden; }\n.tip { position: absolute; top: -20px; }",
        "answers": [
          "Les éléments absolus ne peuvent pas dépasser",
          "L'infobulle a besoin d'un z-index",
          "overflow: hidden rogne tout ce qui dépasse de la carte",
          "Les infobulles doivent être en fixed"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "Sticky khassha offset bach t3ref fin t-lsa9. Chno na9es hna?",
        "text": "Pourquoi le header ne reste-t-il pas collé au défilement ?",
        "code": ".header { position: sticky; }",
        "answers": [
          "sticky n'est pas une vraie valeur",
          "Un élément sticky a besoin d'un décalage comme top: 0 pour savoir où se coller",
          "Il faut position: fixed à la place",
          "Sticky ne fonctionne qu'horizontalement"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "Chkun kay-khlli l space dyalo f l layout? Fker f l far9 bin display w visibility.",
        "text": "Lequel garde sa place dans la mise en page ?",
        "code": ".a { display: none; }\n.b { visibility: hidden; }",
        "answers": [
          ".b — visibility: hidden le cache mais garde sa place",
          ".a",
          "Les deux",
          "Aucun"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "Padding ma kay9blch values salba. Chno ghaytra b padding -10px?",
        "text": "Que se passe-t-il avec ce padding ?",
        "code": ".box { padding: -10px; }",
        "answers": [
          "La boîte rétrécit de 10px",
          "Le contenu déborde",
          "Il devient une marge",
          "Rien — le padding négatif est invalide et ignoré"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "Universal selector 3ando specificity 0. Chkun ghayghlb, * wla p?",
        "text": "De quelle couleur est le paragraphe ?",
        "code": "* { color: red; }\np { color: blue; }\n<p>Hi</p>",
        "answers": [
          "Rouge",
          "Violet",
          "Bleu — le sélecteur * a une spécificité nulle",
          "Noir"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la :where(): chno kay-zid l specificity? Fker chno kay3ni 'adds zero specificity'.",
        "text": "De quelle couleur est le texte ? (:where() ajoute une spécificité nulle)",
        "code": "div:where(.big) { color: red; }\n.small { color: blue; }\n<div class=\"big small\">Hi</div>",
        "answers": [
          "Rouge",
          "Bleu — :where() n'apporte aucune spécificité, donc .small gagne",
          "Violet",
          "Noir"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "Ba3d l properties kay-wrtho (b7al color), w ba3din la. Chkun li kay-wrth l paragraph?",
        "text": "Quelles propriétés sont héritées automatiquement par le paragraphe ?",
        "code": "body { color: red; margin: 40px; }\n<p>Hi</p>",
        "answers": [
          "color est héritée ; margin ne l'est pas",
          "Les deux sont héritées",
          "Aucune n'est héritée",
          "margin est héritée ; color ne l'est pas"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la em: menin kayt-7seb? Wach kayt-rakeb mlli kayt3awed? Fker f l parent.",
        "text": "La taille de police racine est 16px. Quelle est la taille du texte du paragraphe ?",
        "code": "div { font-size: 1.5em; }\ndiv p { font-size: 1.5em; }\n<div><p>Hi</p></div>",
        "answers": [
          "16px",
          "24px",
          "32px",
          "36px — les em se multiplient : 16 x 1,5 x 1,5"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "Rem dayman kayt-7sab men root. Chno l far9 bin em w rem hna?",
        "text": "Même structure, mais avec rem. Quelle est la taille du texte du paragraphe ?",
        "code": "div { font-size: 1.5rem; }\ndiv p { font-size: 1.5rem; }",
        "answers": [
          "16px",
          "36px",
          "24px — rem est toujours relatif à la racine",
          "48px"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la var(): chno kaytra mlli l variable ma m-definedach? Fker f l 2eme argument.",
        "text": "De quelle couleur est le texte ?",
        "code": ".a { color: var(--brand, red); }",
        "answers": [
          "Il reste noir — la règle est invalide",
          "Rouge — la valeur de secours est utilisée car --brand n'est pas définie",
          "Transparent",
          "Bleu"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "Calc khassha spaces 7da l operators. Chno lmochkil f had l syntax?",
        "text": "Pourquoi la largeur ne change-t-elle pas ?",
        "code": ".box { width: calc(100%-20px); }",
        "answers": [
          "calc() exige des espaces autour de - et + : calc(100% - 20px)",
          "calc n'est pas supporté",
          "Les pourcentages sont interdits dans calc",
          "La boîte a besoin d'une largeur parente"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "Attribute selector kay-matchi ghir l input li 3ando had l attribut. Chkun ghay-sfar?",
        "text": "Quel champ reçoit le fond jaune ?",
        "code": "input[type=\"text\"] { background: yellow; }\n<input type=\"text\">\n<input type=\"password\">",
        "answers": [
          "Les deux",
          "Le champ mot de passe",
          "Aucun",
          "Seulement le champ texte"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la :nth-child(): chno kay-7seb, ghir l elements li b7al selector wla ga3 l children? Fker f l h2.",
        "text": "Quel paragraphe devient rouge ?",
        "code": "p:nth-child(2) { color: red; }\n<div><h2>Title</h2><p>One</p><p>Two</p></div>",
        "answers": [
          "« Two »",
          "Les deux paragraphes",
          "« One » — c'est le 2e enfant de la div",
          "Le h2"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "Pseudo-element ::before ma kaybanch bla content. Chno na9es?",
        "text": "Pourquoi rien ne s'affiche avant le bouton ?",
        "code": ".btn::before { color: red; }\n<button class=\"btn\">Buy</button>",
        "answers": [
          "::before ne fonctionne pas sur les boutons",
          "Un pseudo-élément ::before ne s'affiche pas sans propriété content",
          "La couleur est invalide",
          "Les pseudo-éléments ont besoin de JavaScript"
        ],
        "correct": 1,
        "selection": null
      }
    ]
  }
];
