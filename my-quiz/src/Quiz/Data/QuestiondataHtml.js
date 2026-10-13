export const questionsHtml = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "text": "How will this render in the browser?",
        "code": "<p>Hello</p>\n<p>World</p>",
        "answers": [
          "Hello and World on the same line",
          "Only Hello is shown",
          "Hello and World on two separate lines",
          "Nothing is rendered"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "text": "What does the browser display for this markup?",
        "code": "<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n</ul>",
        "answers": [
          "Two numbered items",
          "A bulleted list with two items",
          "Plain text without bullets",
          "An error message"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "text": "What happens when the user clicks this link?",
        "code": "<a href=\"https://example.com\">Visit</a>",
        "answers": [
          "The browser opens https://example.com",
          "Nothing happens",
          "The link text is copied",
          "A download starts"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "text": "Which text appears largest on the page?",
        "code": "<h1>Title</h1>\n<p>Text</p>",
        "answers": [
          "Text",
          "Both are the same size",
          "Neither is displayed",
          "Title"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "text": "If \"cat.jpg\" fails to load, what does the user see?",
        "code": "<img src=\"cat.jpg\" alt=\"A cat\">",
        "answers": [
          "A blank page",
          "An error popup",
          "The text \"A cat\"",
          "The filename cat.jpg"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "text": "What is the state of this checkbox when the page loads?",
        "code": "<input type=\"checkbox\" checked>",
        "answers": [
          "Disabled",
          "Checked",
          "Hidden",
          "Unchecked"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "text": "How is this text displayed?",
        "code": "<pre>line1\nline2</pre>",
        "answers": [
          "On two lines, spacing preserved",
          "On one line",
          "In bold",
          "It is not displayed"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "text": "What does the user see?",
        "code": "<button>Click me</button>",
        "answers": [
          "Plain text",
          "A text input",
          "A link",
          "A clickable button"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "text": "How do these two divs render?",
        "code": "<div>Hello</div>\n<div>World</div>",
        "answers": [
          "On the same line",
          "Overlapping",
          "On two separate lines",
          "Only the first is shown"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "text": "How do these two spans render?",
        "code": "<span>one</span><span>two</span>",
        "answers": [
          "On two lines",
          "On the same line",
          "Only one is shown",
          "With a line break between them"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "text": "What is wrong with this link?",
        "code": "<a>Click here</a>",
        "answers": [
          "It has no href, so it is not a real link",
          "The text is too short",
          "Links must use https",
          "Nothing is wrong"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "text": "What will the user see inside this textarea?",
        "code": "<textarea value=\"Hello\"></textarea>",
        "answers": [
          "Hello",
          "An error",
          "The word \"value\"",
          "Nothing — the value attribute is ignored on textarea"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "text": "What is the accessibility problem here?",
        "code": "<img src=\"team.jpg\">",
        "answers": [
          "The src is too short",
          "Images must be in figure tags",
          "There is no alt text for screen readers",
          "There is no problem"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "text": "The form submits, but the server never receives the username. Why?",
        "code": "<form action=\"/save\">\n  <input type=\"text\" id=\"username\">\n  <button>Save</button>\n</form>",
        "answers": [
          "The form needs method=\"post\"",
          "The input has no name attribute",
          "The id must be \"name\"",
          "Buttons cannot submit forms"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "text": "What does the browser do with this markup?",
        "code": "<p>Price: <div>$10</div></p>",
        "answers": [
          "It closes the p before the div; the div becomes its sibling",
          "It renders the div inside the paragraph",
          "It shows an error",
          "It ignores the div"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "text": "This button sits inside a form and should only clear a preview, but clicking it submits the form. Why?",
        "code": "<form>\n  <input name=\"q\">\n  <button>Clear preview</button>\n</form>",
        "answers": [
          "Buttons never work inside forms",
          "The form has no action",
          "The input steals the click",
          "A button inside a form defaults to type=\"submit\""
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "text": "Which snippet displays the literal text \"<div>\" on the page?",
        "answers": [
          "<div>",
          "<div></div>",
          "&lt;div&gt;",
          "&amp;lt;div&amp;gt;"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "text": "What happens when the user submits this form?",
        "code": "<form>\n  <input type=\"email\" value=\"not-an-email\">\n  <button>Send</button>\n</form>",
        "answers": [
          "The form submits normally",
          "The browser blocks submission and asks for a valid email",
          "The input is cleared",
          "The page reloads"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "text": "What is wrong with these radio buttons?",
        "code": "<input type=\"radio\" name=\"size-a\" value=\"S\"> S\n<input type=\"radio\" name=\"size-b\" value=\"M\"> M",
        "answers": [
          "Both can be selected at once; they should share the same name",
          "Radio buttons need a form",
          "The values are wrong",
          "Nothing is wrong"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "text": "How does this render?",
        "code": "<p>Hello     world</p>",
        "answers": [
          "With all five spaces",
          "With no space",
          "With a line break",
          "With a single space: \"Hello world\""
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "text": "Where does the value \"shoes\" go when this form submits?",
        "code": "<form method=\"get\" action=\"/search\">\n  <input name=\"q\" value=\"shoes\">\n  <button>Go</button>\n</form>",
        "answers": [
          "Into the request body",
          "Into a cookie",
          "Appended to the URL as ?q=shoes",
          "It is discarded"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "text": "Which values reach the server when this form submits?",
        "code": "<form>\n  <input name=\"a\" value=\"1\" disabled>\n  <input name=\"b\" value=\"2\" readonly>\n  <button>Send</button>\n</form>",
        "answers": [
          "a=1 and b=2",
          "Only b=2",
          "Only a=1",
          "Neither"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "text": "The user selects \"Yearly\" and submits. What value is sent?",
        "code": "<form>\n  <select name=\"plan\">\n    <option value=\"m\">Monthly</option>\n    <option>Yearly</option>\n  </select>\n  <button>Send</button>\n</form>",
        "answers": [
          "Yearly — the option text is used when there is no value",
          "m",
          "Nothing",
          "Yearly=on"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "text": "The checkbox is left unchecked. What data does the server receive?",
        "code": "<form>\n  <input type=\"checkbox\" name=\"news\" value=\"yes\">\n  <input type=\"text\" name=\"city\" value=\"Tanger\">\n  <button>Send</button>\n</form>",
        "answers": [
          "news=no and city=Tanger",
          "news=yes and city=Tanger",
          "Nothing",
          "Only city=Tanger — unchecked checkboxes are not sent"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "text": "Which is the secure way to open an external link in a new tab?",
        "answers": [
          "<a href=\"https://x.com\" target=\"_blank\">",
          "<a href=\"https://x.com\" target=\"_new\">",
          "<a href=\"https://x.com\" target=\"_blank\" rel=\"noopener\">",
          "<a href=\"https://x.com\" open-new>"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "text": "The video area is black with no controls. What is missing?",
        "code": "<video src=\"demo.mp4\"></video>",
        "answers": [
          "The autoplay attribute",
          "The controls attribute",
          "A poster image is required",
          "Nothing — videos play automatically"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "text": "What happens when the user clicks \"More\"?",
        "code": "<details>\n  <summary>More</summary>\n  <p>Hidden text</p>\n</details>",
        "answers": [
          "The hidden text toggles open/closed",
          "The page reloads",
          "Nothing happens",
          "The text is deleted"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "text": "What does this JavaScript log?",
        "code": "<div id=\"u\" data-user-id=\"42\"></div>\n<script>\n  console.log(document.getElementById(\"u\").dataset.userId);\n</script>",
        "answers": [
          "undefined",
          "user-id",
          "42 as a number",
          "The string \"42\""
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "text": "Which value is valid for this date input?",
        "code": "<input type=\"date\" id=\"d\">",
        "answers": [
          "13/10/2026",
          "Oct 13, 2026",
          "2026-10-13",
          "13-10-2026"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "text": "What happens when the user clicks the text \"Remember me\"?",
        "code": "<label><input type=\"checkbox\"> Remember me</label>",
        "answers": [
          "Nothing — only the box itself is clickable",
          "The checkbox toggles",
          "The form submits",
          "The text is selected"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "text": "Both scripts use async. Which one runs first?",
        "code": "<script async src=\"a.js\"></script>\n<script async src=\"b.js\"></script>",
        "answers": [
          "Not guaranteed — whichever downloads first",
          "a.js always",
          "b.js always",
          "Neither runs"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "text": "Is this div visible?",
        "code": "<div hidden style=\"display: flex;\">Hi</div>",
        "answers": [
          "No — hidden always wins",
          "Only in old browsers",
          "Only the text is hidden",
          "Yes — the author CSS display overrides the hidden attribute"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "text": "Where does the TOTAL row appear on the page?",
        "code": "<table>\n  <tfoot><tr><td>TOTAL</td></tr></tfoot>\n  <tbody><tr><td>Item</td></tr></tbody>\n</table>",
        "answers": [
          "Before the Item row",
          "It is not displayed",
          "After the Item row, at the bottom of the table",
          "Inside the tbody"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "text": "What links does the browser create here?",
        "code": "<a href=\"/1\">one <a href=\"/2\">two</a></a>",
        "answers": [
          "One link to /1 containing everything",
          "Two separate links: \"one\" to /1 and \"two\" to /2",
          "One link to /2",
          "No links — nested anchors are removed"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "text": "How many paragraphs does the browser create?",
        "code": "<p>First<p>Second",
        "answers": [
          "Two paragraphs",
          "One paragraph containing both",
          "Zero — this is invalid",
          "Three paragraphs"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "text": "What does tabindex=\"-1\" do?",
        "code": "<button tabindex=\"-1\">Skip</button>",
        "answers": [
          "Makes it the first tab stop",
          "Disables the button",
          "Hides it",
          "Removes it from tab order, but it can still receive focus via JavaScript"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "text": "The file never arrives on the server. What is missing?",
        "code": "<form method=\"post\" action=\"/upload\">\n  <input type=\"file\" name=\"avatar\">\n  <button>Upload</button>\n</form>",
        "answers": [
          "The input needs type=\"image\"",
          "The form needs target=\"_blank\"",
          "The form needs enctype=\"multipart/form-data\"",
          "Nothing — files upload by default"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "text": "What is the effect of inputmode=\"numeric\"?",
        "code": "<input type=\"text\" inputmode=\"numeric\">",
        "answers": [
          "It validates that the value is numeric",
          "It shows a numeric keyboard on mobile devices",
          "It converts the value to a number",
          "It only allows digits on desktop"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "text": "Where does the browser load \"logo.png\" from?",
        "code": "<head><base href=\"https://cdn.example.com/\"></head>\n<body><img src=\"logo.png\"></body>",
        "answers": [
          "https://cdn.example.com/logo.png",
          "From the page's own folder",
          "It fails — base only affects links",
          "From the root of the page's domain"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "text": "Which video will actually autoplay?",
        "answers": [
          "<video autoplay src=\"v.mp4\">",
          "<video autoplay controls src=\"v.mp4\">",
          "<video src=\"v.mp4\" play>",
          "<video autoplay muted src=\"v.mp4\">"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "text": "Why doesn't this CSS rule apply?",
        "code": "<table><tr><td>x</td></tr></table>\n<style>table > tr { color: red; }</style>",
        "answers": [
          "Tables ignore color",
          "The selector needs a class",
          "The browser inserts a tbody between table and tr, so tr is not a direct child",
          "td blocks inheritance"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "text": "Which tag name can become a valid custom element?",
        "answers": [
          "<usercard>",
          "<user-card>",
          "<UserCard>",
          "<user_card>"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "text": "What happens when the button is clicked?",
        "code": "<form id=\"a\" action=\"/a\">\n  <form id=\"b\" action=\"/b\">\n    <button>Go</button>\n  </form>\n</form>",
        "answers": [
          "The inner form tag is ignored; the button submits form \"a\"",
          "Form \"b\" is submitted",
          "Both forms submit",
          "Nothing happens"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "text": "What data is sent when this image-button is clicked?",
        "code": "<form action=\"/vote\">\n  <input type=\"image\" src=\"btn.png\" name=\"go\" alt=\"Vote\">\n</form>",
        "answers": [
          "go=clicked",
          "Only the click coordinates",
          "Nothing — image inputs don't submit",
          "go.x and go.y with the click coordinates"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "text": "Where does the word \"oops\" appear on the page?",
        "code": "<table>oops<tr><td>x</td></tr></table>",
        "answers": [
          "Inside the first cell",
          "It is dropped",
          "Before the table",
          "After the table"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "text": "What does this log?",
        "code": "<p id=\"x\">first</p><p id=\"x\">second</p>\n<script>\n  console.log(document.getElementById(\"x\").textContent);\n</script>",
        "answers": [
          "second",
          "first — getElementById returns the first match",
          "An error about duplicate ids",
          "firstsecond"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "text": "Where does \"Hi\" end up?",
        "code": "<head><title>T</title><div>Hi</div></head>\n<body></body>",
        "answers": [
          "Rendered in the body — the parser moves it out of the head",
          "In the head, invisible",
          "It is discarded",
          "Inside the title"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "text": "Is the \"q\" value submitted with form \"f\"?",
        "code": "<form id=\"f\" action=\"/s\"><button>Go</button></form>\n<input form=\"f\" name=\"q\" value=\"hi\">",
        "answers": [
          "No — inputs must be inside the form",
          "Only if JavaScript moves it",
          "No — the form attribute is invalid",
          "Yes — the form attribute associates it with form \"f\""
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "text": "Where is the form submitted when \"Preview\" is clicked?",
        "code": "<form action=\"/save\">\n  <input name=\"t\" value=\"hi\">\n  <button>Save</button>\n  <button formaction=\"/preview\">Preview</button>\n</form>",
        "answers": [
          "/save",
          "/save?t=hi",
          "/preview",
          "Nowhere — formaction is invalid"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "text": "Why does the page stay blank until analytics.js finishes loading?",
        "code": "<head>\n  <script src=\"analytics.js\"></script>\n</head>\n<body><p>Hello</p></body>",
        "answers": [
          "The script deletes the body",
          "A classic script in the head blocks HTML parsing until it loads",
          "The p tag is invalid",
          "Browsers wait for all scripts by design flaw"
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
        "text": "Comment ce code va-t-il s'afficher dans le navigateur ?",
        "code": "<p>Hello</p>\n<p>World</p>",
        "answers": [
          "Hello et World sur la même ligne",
          "Seul Hello s'affiche",
          "Hello et World sur deux lignes séparées",
          "Rien ne s'affiche"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "text": "Qu'affiche le navigateur pour ce balisage ?",
        "code": "<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n</ul>",
        "answers": [
          "Deux éléments numérotés",
          "Une liste à puces avec deux éléments",
          "Du texte brut sans puces",
          "Un message d'erreur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "text": "Que se passe-t-il quand l'utilisateur clique sur ce lien ?",
        "code": "<a href=\"https://example.com\">Visit</a>",
        "answers": [
          "Le navigateur ouvre https://example.com",
          "Rien ne se passe",
          "Le texte du lien est copié",
          "Un téléchargement démarre"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "text": "Quel texte apparaît le plus grand sur la page ?",
        "code": "<h1>Title</h1>\n<p>Text</p>",
        "answers": [
          "Text",
          "Les deux ont la même taille",
          "Aucun ne s'affiche",
          "Title"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "text": "Si « cat.jpg » ne charge pas, que voit l'utilisateur ?",
        "code": "<img src=\"cat.jpg\" alt=\"A cat\">",
        "answers": [
          "Une page blanche",
          "Une fenêtre d'erreur",
          "Le texte « A cat »",
          "Le nom du fichier cat.jpg"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "text": "Quel est l'état de cette case à cocher au chargement de la page ?",
        "code": "<input type=\"checkbox\" checked>",
        "answers": [
          "Désactivée",
          "Cochée",
          "Cachée",
          "Décochée"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "text": "Comment ce texte s'affiche-t-il ?",
        "code": "<pre>line1\nline2</pre>",
        "answers": [
          "Sur deux lignes, espaces conservés",
          "Sur une seule ligne",
          "En gras",
          "Il ne s'affiche pas"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "text": "Que voit l'utilisateur ?",
        "code": "<button>Click me</button>",
        "answers": [
          "Du texte brut",
          "Un champ de saisie",
          "Un lien",
          "Un bouton cliquable"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "text": "Comment ces deux div s'affichent-elles ?",
        "code": "<div>Hello</div>\n<div>World</div>",
        "answers": [
          "Sur la même ligne",
          "Superposées",
          "Sur deux lignes séparées",
          "Seule la première s'affiche"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "text": "Comment ces deux span s'affichent-ils ?",
        "code": "<span>one</span><span>two</span>",
        "answers": [
          "Sur deux lignes",
          "Sur la même ligne",
          "Un seul s'affiche",
          "Avec un saut de ligne entre eux"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "text": "Quel est le problème avec ce lien ?",
        "code": "<a>Click here</a>",
        "answers": [
          "Il n'a pas de href, ce n'est donc pas un vrai lien",
          "Le texte est trop court",
          "Les liens doivent utiliser https",
          "Il n'y a aucun problème"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "text": "Que verra l'utilisateur dans ce textarea ?",
        "code": "<textarea value=\"Hello\"></textarea>",
        "answers": [
          "Hello",
          "Une erreur",
          "Le mot « value »",
          "Rien — l'attribut value est ignoré sur textarea"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "text": "Quel est le problème d'accessibilité ici ?",
        "code": "<img src=\"team.jpg\">",
        "answers": [
          "Le src est trop court",
          "Les images doivent être dans des balises figure",
          "Il n'y a pas de texte alt pour les lecteurs d'écran",
          "Il n'y a aucun problème"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "text": "Le formulaire s'envoie, mais le serveur ne reçoit jamais le nom d'utilisateur. Pourquoi ?",
        "code": "<form action=\"/save\">\n  <input type=\"text\" id=\"username\">\n  <button>Save</button>\n</form>",
        "answers": [
          "Le formulaire doit avoir method=\"post\"",
          "L'input n'a pas d'attribut name",
          "L'id doit être « name »",
          "Les boutons ne peuvent pas envoyer de formulaires"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "text": "Que fait le navigateur avec ce balisage ?",
        "code": "<p>Price: <div>$10</div></p>",
        "answers": [
          "Il ferme le p avant la div ; la div devient sa sœur",
          "Il affiche la div à l'intérieur du paragraphe",
          "Il affiche une erreur",
          "Il ignore la div"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "text": "Ce bouton est dans un formulaire et devrait seulement effacer un aperçu, mais le clic envoie le formulaire. Pourquoi ?",
        "code": "<form>\n  <input name=\"q\">\n  <button>Clear preview</button>\n</form>",
        "answers": [
          "Les boutons ne fonctionnent jamais dans les formulaires",
          "Le formulaire n'a pas d'action",
          "L'input intercepte le clic",
          "Un bouton dans un formulaire est type=\"submit\" par défaut"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "text": "Quel extrait affiche le texte littéral « <div> » sur la page ?",
        "answers": [
          "<div>",
          "<div></div>",
          "&lt;div&gt;",
          "&amp;lt;div&amp;gt;"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "text": "Que se passe-t-il quand l'utilisateur envoie ce formulaire ?",
        "code": "<form>\n  <input type=\"email\" value=\"not-an-email\">\n  <button>Send</button>\n</form>",
        "answers": [
          "Le formulaire s'envoie normalement",
          "Le navigateur bloque l'envoi et demande un email valide",
          "Le champ est effacé",
          "La page se recharge"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "text": "Quel est le problème avec ces boutons radio ?",
        "code": "<input type=\"radio\" name=\"size-a\" value=\"S\"> S\n<input type=\"radio\" name=\"size-b\" value=\"M\"> M",
        "answers": [
          "Les deux peuvent être sélectionnés en même temps ; ils devraient partager le même name",
          "Les boutons radio ont besoin d'un formulaire",
          "Les valeurs sont fausses",
          "Il n'y a aucun problème"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "text": "Comment ceci s'affiche-t-il ?",
        "code": "<p>Hello     world</p>",
        "answers": [
          "Avec les cinq espaces",
          "Sans espace",
          "Avec un saut de ligne",
          "Avec un seul espace : « Hello world »"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "text": "Où va la valeur « shoes » quand ce formulaire s'envoie ?",
        "code": "<form method=\"get\" action=\"/search\">\n  <input name=\"q\" value=\"shoes\">\n  <button>Go</button>\n</form>",
        "answers": [
          "Dans le corps de la requête",
          "Dans un cookie",
          "Ajoutée à l'URL sous la forme ?q=shoes",
          "Elle est perdue"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "text": "Quelles valeurs atteignent le serveur quand ce formulaire s'envoie ?",
        "code": "<form>\n  <input name=\"a\" value=\"1\" disabled>\n  <input name=\"b\" value=\"2\" readonly>\n  <button>Send</button>\n</form>",
        "answers": [
          "a=1 et b=2",
          "Seulement b=2",
          "Seulement a=1",
          "Aucune"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "text": "L'utilisateur choisit « Yearly » et envoie. Quelle valeur est transmise ?",
        "code": "<form>\n  <select name=\"plan\">\n    <option value=\"m\">Monthly</option>\n    <option>Yearly</option>\n  </select>\n  <button>Send</button>\n</form>",
        "answers": [
          "Yearly — le texte de l'option est utilisé quand il n'y a pas de value",
          "m",
          "Rien",
          "Yearly=on"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "text": "La case reste décochée. Quelles données le serveur reçoit-il ?",
        "code": "<form>\n  <input type=\"checkbox\" name=\"news\" value=\"yes\">\n  <input type=\"text\" name=\"city\" value=\"Tanger\">\n  <button>Send</button>\n</form>",
        "answers": [
          "news=no et city=Tanger",
          "news=yes et city=Tanger",
          "Rien",
          "Seulement city=Tanger — les cases décochées ne sont pas envoyées"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "text": "Quelle est la façon sécurisée d'ouvrir un lien externe dans un nouvel onglet ?",
        "answers": [
          "<a href=\"https://x.com\" target=\"_blank\">",
          "<a href=\"https://x.com\" target=\"_new\">",
          "<a href=\"https://x.com\" target=\"_blank\" rel=\"noopener\">",
          "<a href=\"https://x.com\" open-new>"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "text": "La zone vidéo est noire, sans contrôles. Que manque-t-il ?",
        "code": "<video src=\"demo.mp4\"></video>",
        "answers": [
          "L'attribut autoplay",
          "L'attribut controls",
          "Une image poster est obligatoire",
          "Rien — les vidéos démarrent automatiquement"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "text": "Que se passe-t-il quand l'utilisateur clique sur « More » ?",
        "code": "<details>\n  <summary>More</summary>\n  <p>Hidden text</p>\n</details>",
        "answers": [
          "Le texte caché s'ouvre / se ferme",
          "La page se recharge",
          "Rien ne se passe",
          "Le texte est supprimé"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "text": "Qu'affiche ce JavaScript dans la console ?",
        "code": "<div id=\"u\" data-user-id=\"42\"></div>\n<script>\n  console.log(document.getElementById(\"u\").dataset.userId);\n</script>",
        "answers": [
          "undefined",
          "user-id",
          "42 en nombre",
          "La chaîne « 42 »"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "text": "Quelle valeur est valide pour ce champ de date ?",
        "code": "<input type=\"date\" id=\"d\">",
        "answers": [
          "13/10/2026",
          "13 oct. 2026",
          "2026-10-13",
          "13-10-2026"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "text": "Que se passe-t-il quand l'utilisateur clique sur le texte « Remember me » ?",
        "code": "<label><input type=\"checkbox\"> Remember me</label>",
        "answers": [
          "Rien — seule la case est cliquable",
          "La case à cocher bascule",
          "Le formulaire s'envoie",
          "Le texte est sélectionné"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "text": "Les deux scripts utilisent async. Lequel s'exécute en premier ?",
        "code": "<script async src=\"a.js\"></script>\n<script async src=\"b.js\"></script>",
        "answers": [
          "Pas garanti — celui qui se télécharge en premier",
          "Toujours a.js",
          "Toujours b.js",
          "Aucun ne s'exécute"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "text": "Cette div est-elle visible ?",
        "code": "<div hidden style=\"display: flex;\">Hi</div>",
        "answers": [
          "Non — hidden gagne toujours",
          "Seulement dans les vieux navigateurs",
          "Seul le texte est caché",
          "Oui — le CSS display de l'auteur écrase l'attribut hidden"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "text": "Où apparaît la ligne TOTAL sur la page ?",
        "code": "<table>\n  <tfoot><tr><td>TOTAL</td></tr></tfoot>\n  <tbody><tr><td>Item</td></tr></tbody>\n</table>",
        "answers": [
          "Avant la ligne Item",
          "Elle ne s'affiche pas",
          "Après la ligne Item, en bas du tableau",
          "À l'intérieur du tbody"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "text": "Quels liens le navigateur crée-t-il ici ?",
        "code": "<a href=\"/1\">one <a href=\"/2\">two</a></a>",
        "answers": [
          "Un seul lien vers /1 contenant tout",
          "Deux liens séparés : « one » vers /1 et « two » vers /2",
          "Un seul lien vers /2",
          "Aucun lien — les ancres imbriquées sont supprimées"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "text": "Combien de paragraphes le navigateur crée-t-il ?",
        "code": "<p>First<p>Second",
        "answers": [
          "Deux paragraphes",
          "Un paragraphe contenant les deux",
          "Zéro — c'est invalide",
          "Trois paragraphes"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "text": "Que fait tabindex=\"-1\" ?",
        "code": "<button tabindex=\"-1\">Skip</button>",
        "answers": [
          "En fait le premier arrêt de tabulation",
          "Désactive le bouton",
          "Le cache",
          "Le retire de l'ordre de tabulation, mais il peut toujours recevoir le focus via JavaScript"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "text": "Le fichier n'arrive jamais sur le serveur. Que manque-t-il ?",
        "code": "<form method=\"post\" action=\"/upload\">\n  <input type=\"file\" name=\"avatar\">\n  <button>Upload</button>\n</form>",
        "answers": [
          "L'input doit être type=\"image\"",
          "Le formulaire doit avoir target=\"_blank\"",
          "Le formulaire doit avoir enctype=\"multipart/form-data\"",
          "Rien — les fichiers s'envoient par défaut"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "text": "Quel est l'effet de inputmode=\"numeric\" ?",
        "code": "<input type=\"text\" inputmode=\"numeric\">",
        "answers": [
          "Il valide que la valeur est numérique",
          "Il affiche un clavier numérique sur mobile",
          "Il convertit la valeur en nombre",
          "Il n'autorise que des chiffres sur desktop"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "text": "D'où le navigateur charge-t-il « logo.png » ?",
        "code": "<head><base href=\"https://cdn.example.com/\"></head>\n<body><img src=\"logo.png\"></body>",
        "answers": [
          "Depuis https://cdn.example.com/logo.png",
          "Depuis le dossier de la page",
          "Échec — base n'affecte que les liens",
          "Depuis la racine du domaine de la page"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "text": "Quelle vidéo démarrera vraiment automatiquement ?",
        "answers": [
          "<video autoplay src=\"v.mp4\">",
          "<video autoplay controls src=\"v.mp4\">",
          "<video src=\"v.mp4\" play>",
          "<video autoplay muted src=\"v.mp4\">"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "text": "Pourquoi cette règle CSS ne s'applique-t-elle pas ?",
        "code": "<table><tr><td>x</td></tr></table>\n<style>table > tr { color: red; }</style>",
        "answers": [
          "Les tableaux ignorent color",
          "Le sélecteur a besoin d'une classe",
          "Le navigateur insère un tbody entre table et tr, donc tr n'est pas un enfant direct",
          "td bloque l'héritage"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "text": "Quel nom de balise peut devenir un custom element valide ?",
        "answers": [
          "<usercard>",
          "<user-card>",
          "<UserCard>",
          "<user_card>"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "text": "Que se passe-t-il quand on clique sur le bouton ?",
        "code": "<form id=\"a\" action=\"/a\">\n  <form id=\"b\" action=\"/b\">\n    <button>Go</button>\n  </form>\n</form>",
        "answers": [
          "La balise form interne est ignorée ; le bouton envoie le formulaire « a »",
          "Le formulaire « b » est envoyé",
          "Les deux formulaires s'envoient",
          "Rien ne se passe"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "text": "Quelles données sont envoyées quand on clique sur ce bouton-image ?",
        "code": "<form action=\"/vote\">\n  <input type=\"image\" src=\"btn.png\" name=\"go\" alt=\"Vote\">\n</form>",
        "answers": [
          "go=clicked",
          "Seulement les coordonnées du clic",
          "Rien — les inputs image n'envoient pas",
          "go.x et go.y avec les coordonnées du clic"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "text": "Où le mot « oops » apparaît-il sur la page ?",
        "code": "<table>oops<tr><td>x</td></tr></table>",
        "answers": [
          "Dans la première cellule",
          "Il est supprimé",
          "Avant le tableau",
          "Après le tableau"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "text": "Qu'affiche ce code ?",
        "code": "<p id=\"x\">first</p><p id=\"x\">second</p>\n<script>\n  console.log(document.getElementById(\"x\").textContent);\n</script>",
        "answers": [
          "second",
          "first — getElementById retourne la première correspondance",
          "Une erreur d'id dupliqué",
          "firstsecond"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "text": "Où finit « Hi » ?",
        "code": "<head><title>T</title><div>Hi</div></head>\n<body></body>",
        "answers": [
          "Affiché dans le body — le parseur le sort du head",
          "Dans le head, invisible",
          "Il est supprimé",
          "À l'intérieur du title"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "text": "La valeur « q » est-elle envoyée avec le formulaire « f » ?",
        "code": "<form id=\"f\" action=\"/s\"><button>Go</button></form>\n<input form=\"f\" name=\"q\" value=\"hi\">",
        "answers": [
          "Non — les inputs doivent être dans le formulaire",
          "Seulement si JavaScript le déplace",
          "Non — l'attribut form est invalide",
          "Oui — l'attribut form l'associe au formulaire « f »"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "text": "Où le formulaire est-il envoyé quand on clique sur « Preview » ?",
        "code": "<form action=\"/save\">\n  <input name=\"t\" value=\"hi\">\n  <button>Save</button>\n  <button formaction=\"/preview\">Preview</button>\n</form>",
        "answers": [
          "/save",
          "/save?t=hi",
          "/preview",
          "Nulle part — formaction est invalide"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "text": "Pourquoi la page reste-t-elle blanche jusqu'à la fin du chargement d'analytics.js ?",
        "code": "<head>\n  <script src=\"analytics.js\"></script>\n</head>\n<body><p>Hello</p></body>",
        "answers": [
          "Le script supprime le body",
          "Un script classique dans le head bloque l'analyse HTML jusqu'à son chargement",
          "La balise p est invalide",
          "Les navigateurs attendent tous les scripts par défaut"
        ],
        "correct": 1,
        "selection": null
      }
    ]
  }
];
