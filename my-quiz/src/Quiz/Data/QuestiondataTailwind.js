export const tailwindQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "P f Tailwind kay3ni padding. Chno kaydir p-4?",
        "text": "What does this div get?",
        "code": "<div class=\"p-4\">Hi</div>",
        "answers": [
          "Margin on all sides",
          "Padding on the left only",
          "Padding on all four sides",
          "A 4px border"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "Font-bold kat-ghleD l text. Kifach ghayban?",
        "text": "How does the text look?",
        "code": "<p class=\"font-bold\">Hi</p>",
        "answers": [
          "Italic",
          "Bold",
          "Underlined",
          "Normal"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "Bg kay3ni background, text kay3ni color dyal text. Chno ghayban?",
        "text": "What does this div look like?",
        "code": "<div class=\"bg-blue-500 text-white\">Hi</div>",
        "answers": [
          "Blue background with white text",
          "White background with blue text",
          "Blue text on transparent background",
          "It is invisible"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "M kay3ni margin. Chno l far9 bin m-4 w p-4?",
        "text": "What does m-4 do?",
        "code": "<div class=\"m-4\">Hi</div>",
        "answers": [
          "Adds padding inside",
          "Adds a 4px margin",
          "Centers the div",
          "Adds margin on all four sides"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "Text-center kat-centri l text. Kifach ghayban?",
        "text": "How is the text aligned?",
        "code": "<p class=\"text-center\">Hi</p>",
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
        "id": 5,
        "level": 1,
        "explain_dr": "Flex f Tailwind kay-rteb l children f row. Kifach ghaybano A w B?",
        "text": "What happens to the children?",
        "code": "<div class=\"flex\"><span>A</span><span>B</span></div>",
        "answers": [
          "They stack vertically",
          "They sit side by side in a row",
          "They overlap",
          "They disappear"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "W-full kay3ni l width kamel dyal parent. Ch7al ghaykoun l width dyal image?",
        "text": "How wide is the image?",
        "code": "<img src=\"a.jpg\" class=\"w-full\">",
        "answers": [
          "100% of its parent's width",
          "100px",
          "Its natural width",
          "Full screen width"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "Rounded-lg kaydir corners mdawrin. Chno ghayban l div?",
        "text": "What does rounded-lg do?",
        "code": "<div class=\"rounded-lg\">Hi</div>",
        "answers": [
          "Makes it a circle",
          "Adds a border",
          "Removes corners",
          "Gives it large rounded corners"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "Text-sm wa7ed men l sizes sghar. Kifach ghayban l text?",
        "text": "How big is the text?",
        "code": "<p class=\"text-sm\">Hi</p>",
        "answers": [
          "Huge",
          "Default size",
          "Small",
          "Tiny and hidden"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "Class border kat-zid border b default width. Chno ghaytzad?",
        "text": "What does class=\"border\" add?",
        "code": "<div class=\"border\">Hi</div>",
        "answers": [
          "A red background",
          "A 1px border on all sides",
          "A shadow",
          "Rounded corners"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "Tailwind kayst3mel abbreviations. Chno l ism s7i7 dyal padding?",
        "text": "Why is there no padding?",
        "code": "<div class=\"padding-4\">Hi</div>",
        "answers": [
          "\"padding-4\" is not a Tailwind class — it should be p-4",
          "Padding needs a parent flex",
          "The div needs a width",
          "Tailwind isn't loaded"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "Centering f flex khassha joj classes. Chno na9es hna?",
        "text": "Why isn't the content centered?",
        "code": "<div class=\"flex center\">Hi</div>",
        "answers": [
          "flex is misspelled",
          "Divs can't be centered",
          "It needs mx-auto",
          "\"center\" is not a utility — use items-center justify-center"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "Bold f Tailwind kayt-ktb b font, machi text. Chno l class s7i7a?",
        "text": "Why isn't the text bold?",
        "code": "<p class=\"text-bold\">Hi</p>",
        "answers": [
          "Bold needs !important",
          "p tags can't be bold",
          "The correct class is font-bold, not text-bold",
          "Tailwind doesn't support bold"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "Margin l barra, padding l dakhel. Chno l khata2 li dar l developer?",
        "text": "The red box has empty space OUTSIDE it, but the developer wanted space INSIDE. What went wrong?",
        "code": "<div class=\"m-4 bg-red-500\">Hi</div>",
        "answers": [
          "bg-red-500 pushes content out",
          "m-4 is margin (outside) — p-4 (padding) was needed for inside space",
          "Red boxes can't have padding",
          "The div needs flex"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "Kola unit f Tailwind = 0.25rem. Ch7al ghaykoun 16 units b pixels?",
        "text": "How big is this box in pixels?",
        "code": "<div class=\"w-16 h-16\"></div>",
        "answers": [
          "64px x 64px — each spacing unit is 0.25rem",
          "16px x 16px",
          "16rem x 16rem",
          "It has no size"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la responsive prefixes: chno kay3ni md:? Fker f l breakpoint w kifach kayt-jm3o hidden m3a md:block.",
        "text": "When is this div visible?",
        "code": "<div class=\"hidden md:block\">Hi</div>",
        "answers": [
          "Always",
          "Never",
          "Only on mobile",
          "Hidden on mobile, visible on medium screens and up"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "Responsive prefixes ma kay-khdmoch ta7t l breakpoint. 3lach f telephone ma kaynach row?",
        "text": "On a phone, the items are NOT in a row. Why?",
        "code": "<div class=\"md:flex\"><span>A</span><span>B</span></div>",
        "answers": [
          "Flex doesn't work on phones",
          "The spans need widths",
          "md: only applies at 768px and up — on mobile there is no flex",
          "Tailwind is broken"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "Hover: kat-bdel style mlli l mouse fo9. Chno ghaytra mlli kat-hoveri?",
        "text": "What happens when the user hovers the button?",
        "code": "<button class=\"bg-blue-500 hover:bg-blue-700\">Hi</button>",
        "answers": [
          "Nothing",
          "The background becomes a darker blue",
          "The button grows",
          "The button disappears"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "Bg khassa b background. Chno l class dyal red text?",
        "text": "The developer expected red TEXT, but got a red BACKGROUND. Why?",
        "code": "<p class=\"bg-red-500\">Hi</p>",
        "answers": [
          "bg-* sets the background color — text-red-500 was needed for red text",
          "Red text is impossible",
          "The p tag overrides it",
          "Tailwind has no red"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "Tailwind kay-generi ghir l classes li kay-l9ahom mktobin. 3lach had l padding ma khdamch?",
        "text": "Why does this padding never apply?",
        "code": "const s = 4;\nreturn <div className={'p-' + s}>Hi</div>;",
        "answers": [
          "React forbids dynamic classes",
          "p-4 doesn't exist",
          "The syntax needs backticks",
          "Tailwind only generates classes it finds literally in your source files"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "Joj axes: main w cross. Chno kaydir had l combo?",
        "text": "How is the content positioned?",
        "code": "<div class=\"flex items-center justify-center h-screen\">Hi</div>",
        "answers": [
          "Top-left",
          "Bottom-right",
          "Perfectly centered both ways",
          "Centered horizontally only"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "Grid-cols-3 kat-qsem l grid l 3 colonnes. Kifach ghaytrtbo l cards?",
        "text": "How are the cards laid out?",
        "code": "<div class=\"grid grid-cols-3 gap-4\"><div>A</div><div>B</div><div>C</div></div>",
        "answers": [
          "In one row with no gaps",
          "In a 3-column grid with gaps between cards",
          "Stacked with no gaps",
          "Overlapping"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "Space-x kat-zid margin bin children, gap kat-setti l flex gap. Chno l far9?",
        "text": "What is the difference between these two?",
        "code": "<div class=\"flex space-x-4\">...</div>\n<div class=\"flex gap-4\">...</div>",
        "answers": [
          "space-x-4 adds margin between children; gap-4 sets the flex gap — visually similar here",
          "They are identical in every way",
          "gap-4 only works vertically",
          "space-x-4 only works with grid"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la breakpoint md: menin kay-bda? Fker f l default breakpoints dyal Tailwind.",
        "text": "At which screen width does md:text-lg kick in?",
        "code": "<p class=\"text-sm md:text-lg\">Hi</p>",
        "answers": [
          "480px",
          "1024px",
          "It applies at all sizes",
          "768px and up"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "Container + mx-auto: chno l effect dyalhom 3la l div?",
        "text": "What does this classic wrapper do?",
        "code": "<div class=\"container mx-auto\">Hi</div>",
        "answers": [
          "Makes the text huge",
          "Adds a border",
          "Centers a max-width container horizontally",
          "Hides it on mobile"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "Flex-col kat-bdel direction l vertical. Kifach ghaytrtbo l children?",
        "text": "How do the children stack?",
        "code": "<div class=\"flex flex-col\"><span>A</span><span>B</span></div>",
        "answers": [
          "Side by side",
          "Vertically",
          "In reverse",
          "They overlap"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la justify-between: kifach kay-wzze3 l space bin items? Fker f l far9 binha w justify-center.",
        "text": "How are the two buttons spaced?",
        "code": "<div class=\"flex justify-between\"><button>A</button><button>B</button></div>",
        "answers": [
          "A at the left edge, B at the right edge, space between",
          "Both centered",
          "Both on the left",
          "Overlapping in the middle"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la w-1/2: chno kay3ni l fraction? W menin kayt-7seb, screen wla parent?",
        "text": "How wide is the sidebar?",
        "code": "<div class=\"flex\"><aside class=\"w-1/2\">...</aside><main>...</main></div>",
        "answers": [
          "50px",
          "Half the screen",
          "It has no width",
          "50% of the flex container"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "Max-w kay-7ded l width l max, mx-auto kat-centri. Chno ghayban?",
        "text": "What does this card pattern do?",
        "code": "<div class=\"max-w-md mx-auto\">Hi</div>",
        "answers": [
          "Full-width card",
          "Hidden card",
          "A card limited to medium max-width, centered",
          "A card with medium text"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "Mobile-first: base l mobile, md: l desktop. Chno l classes li kat-dir had l effect?",
        "text": "On mobile the text is small; on desktop it is large. Which classes do that?",
        "code": "<p class=\"???\">Hi</p>",
        "answers": [
          "text-lg sm:text-sm",
          "text-sm md:text-lg",
          "text-small text-large",
          "responsive-text"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "@apply kat-dkhel l utilities f custom CSS. Chno kaydir hna?",
        "text": "What does @apply do here?",
        "code": ".btn {\n  @apply px-4 py-2 bg-blue-500 text-white;\n}",
        "answers": [
          "It inlines those utility styles into the custom .btn class",
          "It applies dark mode",
          "It imports the utilities",
          "It deletes the utilities from the CSS"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "Arbitrary values kat-tktb b square brackets. Chno l class s7i7a l color custom?",
        "text": "Which class gives the div a custom brand-blue background (#1da1f2)?",
        "code": "<div class=\"???\">Hi</div>",
        "answers": [
          "bg-twitter-blue",
          "bg-#1da1f2",
          "bg-brand",
          "bg-[#1da1f2] — arbitrary value syntax"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "Dark: kat-applya ghir mlli dark mode khdam. Imta ghayban l background l dark?",
        "text": "When does the dark background apply?",
        "code": "<div class=\"bg-white dark:bg-gray-900\">Hi</div>",
        "answers": [
          "Always",
          "Never",
          "When dark mode is active",
          "Only on mobile"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "Mlli joj classes kay-tnafsou, l ordre f l CSS li kay-7kem. Chkun ghayghlb?",
        "text": "A developer writes class=\"p-4 p-8\". Which padding wins?",
        "answers": [
          "p-4 — the first class wins",
          "p-8 — the generated CSS order decides, not the class attribute order",
          "They cancel out",
          "It is random"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la flex-1: chno kaydir l basis? Wach l text twil ghay2athar 3la l width?",
        "text": "Two cards should share the row equally even though one has longer text. Does this work?",
        "code": "<div class=\"flex\"><div class=\"flex-1\">short</div><div class=\"flex-1\">much longer text here</div></div>",
        "answers": [
          "Yes — flex-1 sets the basis to 0%, so both get equal widths",
          "No — the longer text makes its card wider",
          "Only with grid",
          "Only with fixed widths"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "Absolute child kayt-positiona 3la a9rab ancestor positioned. Chno na9es 3la l card?",
        "text": "The badge should stay glued to the card's corner, but it positions relative to the page. What is missing on the card?",
        "code": "<div class=\"card\">\n  <span class=\"absolute top-0 right-0\">New</span>\n</div>",
        "answers": [
          "z-index on the span",
          "The span should be fixed",
          "Nothing — it works",
          "relative on the card — an absolute child positions against the nearest positioned ancestor"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "Flex items kayt-sghro mlli space daye9. Chno kaymna3 shrink-0?",
        "text": "What does shrink-0 prevent?",
        "code": "<div class=\"flex\"><div class=\"shrink-0 w-32\">A</div><div>B</div></div>",
        "answers": [
          "Growing",
          "Wrapping",
          "The fixed-width box from shrinking when space is tight",
          "Scrolling"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "Stacking f Tailwind b z-index utilities. Chno l class s7i7a?",
        "text": "How do you give an element a higher stacking order in Tailwind?",
        "code": "<div class=\"???\">popup</div>",
        "answers": [
          "stack-high",
          "z-10",
          "above-all",
          "order-10"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "Purge kay7taj content paths kamlin. 3lach l CSS ba9i kbir f production?",
        "text": "Why is the production CSS still huge?",
        "code": "// tailwind.config.js\nmodule.exports = {\n  content: [\"./src/**/*.{js,jsx}\"],\n}",
        "answers": [
          "The content paths don't cover all template files, so unused utilities can't be detected and removed",
          "Tailwind is always huge",
          "The config needs more plugins",
          "JIT is disabled by default"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la khfi element bla ma t-7yyed l space dyalo: chno l far9 bin hidden w invisible f Tailwind?",
        "text": "Which class hides the element while keeping its layout space?",
        "code": "<div class=\"???\">Hi</div>",
        "answers": [
          "hidden",
          "display-none",
          "opacity-0",
          "invisible — visibility: hidden keeps its space"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "Group-hover kat-bdel style dyal child mlli kat-hoveri l parent. Chno ghaytra?",
        "text": "What happens when the user hovers the card?",
        "code": "<div class=\"group\">\n  <p class=\"group-hover:text-red-500\">Hi</p>\n</div>",
        "answers": [
          "Nothing",
          "The card turns red",
          "The paragraph text turns red when the card is hovered",
          "The text is always red"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "Peer kat-khlli sibling yt2athar b state dyal input. Chno ghaytra mlli t-checki?",
        "text": "What happens when the checkbox is ticked?",
        "code": "<input type=\"checkbox\" class=\"peer\">\n<p class=\"peer-checked:font-bold\">Hi</p>",
        "answers": [
          "Nothing",
          "The paragraph becomes bold — peer-checked styles a sibling based on the input state",
          "The checkbox disappears",
          "The text is always bold"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "Divide kat-zid borders bin children. Chno l far9 bin divide-x w space-x?",
        "text": "What is the difference between divide-x and space-x?",
        "code": "<div class=\"flex divide-x divide-gray-300\">...</div>",
        "answers": [
          "divide-x adds borders between children; space-x adds margins",
          "They are identical",
          "divide-x only works vertically",
          "space-x adds borders"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la content khfi visually walakin accessible l screen readers: chno l class li kat-dir hadchi?",
        "text": "Which class hides content visually but keeps it available to screen readers?",
        "code": "<span class=\"???\">Menu</span>",
        "answers": [
          "hidden",
          "invisible",
          "opacity-0",
          "sr-only"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "Truncate kat-9ta3 l text b ... Chno ghayban l filename?",
        "text": "What does the long filename look like in this fixed-width box?",
        "code": "<div class=\"w-32 truncate\">very-long-file-name.txt</div>",
        "answers": [
          "It wraps to two lines",
          "It overflows visibly",
          "It is cut with an ellipsis",
          "The div grows wider"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "Focus ring kay-beyen l element mlli kaykoun focused. Chno l classes li kat-dirha?",
        "text": "Which classes add an accessible focus ring to the button?",
        "code": "<button class=\"???\">Save</button>",
        "answers": [
          "focus-border",
          "focus:outline-none focus:ring-2 focus:ring-blue-500",
          "hover:ring",
          "focus-bold"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "Transition kat-dir animation smooth. Chno ghaytra mlli kat-hoveri l button?",
        "text": "What do these classes do together?",
        "code": "<button class=\"transition duration-300 hover:bg-blue-700\">Hi</button>",
        "answers": [
          "The background color fades smoothly over 300ms on hover",
          "The button waits 300ms then jumps",
          "Nothing — transition needs JavaScript",
          "The button animates forever"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la aspect-video: chno kay7fed? Fker f l ratio dyal video.",
        "text": "What shape does this div keep?",
        "code": "<div class=\"aspect-video w-full\"></div>",
        "answers": [
          "A square",
          "A circle",
          "Whatever its content needs",
          "A 16:9 rectangle at any width"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "Object-cover kay-ghetti l frame bla ma y-tshwah. Kifach ghayban l photo?",
        "text": "How does the photo fill its square frame?",
        "code": "<img src=\"photo.jpg\" class=\"w-40 h-40 object-cover\">",
        "answers": [
          "Stretched and distorted",
          "With empty bars",
          "Cropped to cover the square without distortion",
          "It keeps its natural size"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "@apply khassha PostCSS dyal Tailwind. 3lach ma khdamch f had l file?",
        "text": "Why did the custom utility stop working after moving it to a plain CSS file?",
        "code": "/* styles.css — not processed by Tailwind */\n.card {\n  @apply bg-[#1da1f2];\n}",
        "answers": [
          "Arbitrary values are forbidden",
          "@apply only works in files processed by Tailwind",
          "Hex colors are forbidden",
          "The class name is wrong"
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
        "explain_dr": "P f Tailwind kay3ni padding. Chno kaydir p-4?",
        "text": "Que reçoit cette div ?",
        "code": "<div class=\"p-4\">Hi</div>",
        "answers": [
          "Une marge sur tous les côtés",
          "Du padding à gauche uniquement",
          "Du padding sur les quatre côtés",
          "Une bordure de 4px"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "Font-bold kat-ghleD l text. Kifach ghayban?",
        "text": "À quoi ressemble le texte ?",
        "code": "<p class=\"font-bold\">Hi</p>",
        "answers": [
          "Italique",
          "Gras",
          "Souligné",
          "Normal"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "Bg kay3ni background, text kay3ni color dyal text. Chno ghayban?",
        "text": "À quoi ressemble cette div ?",
        "code": "<div class=\"bg-blue-500 text-white\">Hi</div>",
        "answers": [
          "Fond bleu avec texte blanc",
          "Fond blanc avec texte bleu",
          "Texte bleu sur fond transparent",
          "Elle est invisible"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "M kay3ni margin. Chno l far9 bin m-4 w p-4?",
        "text": "Que fait m-4 ?",
        "code": "<div class=\"m-4\">Hi</div>",
        "answers": [
          "Ajoute du padding à l'intérieur",
          "Ajoute une marge de 4px",
          "Centre la div",
          "Ajoute une marge sur les quatre côtés"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "Text-center kat-centri l text. Kifach ghayban?",
        "text": "Comment le texte est-il aligné ?",
        "code": "<p class=\"text-center\">Hi</p>",
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
        "id": 5,
        "level": 1,
        "explain_dr": "Flex f Tailwind kay-rteb l children f row. Kifach ghaybano A w B?",
        "text": "Qu'arrive-t-il aux enfants ?",
        "code": "<div class=\"flex\"><span>A</span><span>B</span></div>",
        "answers": [
          "Ils s'empilent verticalement",
          "Ils se placent côte à côte sur une ligne",
          "Ils se superposent",
          "Ils disparaissent"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "W-full kay3ni l width kamel dyal parent. Ch7al ghaykoun l width dyal image?",
        "text": "Quelle est la largeur de l'image ?",
        "code": "<img src=\"a.jpg\" class=\"w-full\">",
        "answers": [
          "100 % de la largeur de son parent",
          "100px",
          "Sa largeur naturelle",
          "Toute la largeur de l'écran"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "Rounded-lg kaydir corners mdawrin. Chno ghayban l div?",
        "text": "Que fait rounded-lg ?",
        "code": "<div class=\"rounded-lg\">Hi</div>",
        "answers": [
          "En fait un cercle",
          "Ajoute une bordure",
          "Supprime les coins",
          "Lui donne de grands coins arrondis"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "Text-sm wa7ed men l sizes sghar. Kifach ghayban l text?",
        "text": "Quelle est la taille du texte ?",
        "code": "<p class=\"text-sm\">Hi</p>",
        "answers": [
          "Énorme",
          "Taille par défaut",
          "Petite",
          "Minuscule et caché"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "Class border kat-zid border b default width. Chno ghaytzad?",
        "text": "Qu'ajoute class=\"border\" ?",
        "code": "<div class=\"border\">Hi</div>",
        "answers": [
          "Un fond rouge",
          "Une bordure de 1px sur tous les côtés",
          "Une ombre",
          "Des coins arrondis"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "Tailwind kayst3mel abbreviations. Chno l ism s7i7 dyal padding?",
        "text": "Pourquoi n'y a-t-il pas de padding ?",
        "code": "<div class=\"padding-4\">Hi</div>",
        "answers": [
          "« padding-4 » n'est pas une classe Tailwind — ce devrait être p-4",
          "Le padding a besoin d'un parent flex",
          "La div a besoin d'une largeur",
          "Tailwind n'est pas chargé"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "Centering f flex khassha joj classes. Chno na9es hna?",
        "text": "Pourquoi le contenu n'est-il pas centré ?",
        "code": "<div class=\"flex center\">Hi</div>",
        "answers": [
          "flex est mal orthographié",
          "Les div ne peuvent pas être centrées",
          "Il faut mx-auto",
          "« center » n'est pas un utilitaire — utilisez items-center justify-center"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "Bold f Tailwind kayt-ktb b font, machi text. Chno l class s7i7a?",
        "text": "Pourquoi le texte n'est-il pas en gras ?",
        "code": "<p class=\"text-bold\">Hi</p>",
        "answers": [
          "Le gras a besoin de !important",
          "Les balises p ne peuvent pas être en gras",
          "La bonne classe est font-bold, pas text-bold",
          "Tailwind ne supporte pas le gras"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "Margin l barra, padding l dakhel. Chno l khata2 li dar l developer?",
        "text": "La boîte rouge a un espace vide À L'EXTÉRIEUR, mais le développeur voulait un espace À L'INTÉRIEUR. Que s'est-il passé ?",
        "code": "<div class=\"m-4 bg-red-500\">Hi</div>",
        "answers": [
          "bg-red-500 pousse le contenu vers l'extérieur",
          "m-4 est une marge (extérieur) — il fallait p-4 (padding) pour l'espace intérieur",
          "Les boîtes rouges ne peuvent pas avoir de padding",
          "La div a besoin de flex"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "Kola unit f Tailwind = 0.25rem. Ch7al ghaykoun 16 units b pixels?",
        "text": "Quelle est la taille de cette boîte en pixels ?",
        "code": "<div class=\"w-16 h-16\"></div>",
        "answers": [
          "64px x 64px — chaque unité d'espacement vaut 0,25rem",
          "16px x 16px",
          "16rem x 16rem",
          "Elle n'a aucune taille"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la responsive prefixes: chno kay3ni md:? Fker f l breakpoint w kifach kayt-jm3o hidden m3a md:block.",
        "text": "Quand cette div est-elle visible ?",
        "code": "<div class=\"hidden md:block\">Hi</div>",
        "answers": [
          "Toujours",
          "Jamais",
          "Seulement sur mobile",
          "Cachée sur mobile, visible à partir des écrans moyens"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "Responsive prefixes ma kay-khdmoch ta7t l breakpoint. 3lach f telephone ma kaynach row?",
        "text": "Sur un téléphone, les éléments ne sont PAS en ligne. Pourquoi ?",
        "code": "<div class=\"md:flex\"><span>A</span><span>B</span></div>",
        "answers": [
          "Flex ne fonctionne pas sur les téléphones",
          "Les span ont besoin de largeurs",
          "md: ne s'applique qu'à partir de 768px — sur mobile il n'y a pas de flex",
          "Tailwind est cassé"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "Hover: kat-bdel style mlli l mouse fo9. Chno ghaytra mlli kat-hoveri?",
        "text": "Que se passe-t-il quand l'utilisateur survole le bouton ?",
        "code": "<button class=\"bg-blue-500 hover:bg-blue-700\">Hi</button>",
        "answers": [
          "Rien",
          "Le fond devient un bleu plus foncé",
          "Le bouton grandit",
          "Le bouton disparaît"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "Bg khassa b background. Chno l class dyal red text?",
        "text": "Le développeur attendait du texte ROUGE, mais a obtenu un FOND rouge. Pourquoi ?",
        "code": "<p class=\"bg-red-500\">Hi</p>",
        "answers": [
          "bg-* définit la couleur de fond — il fallait text-red-500 pour du texte rouge",
          "Le texte rouge est impossible",
          "La balise p l'écrase",
          "Tailwind n'a pas de rouge"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "Tailwind kay-generi ghir l classes li kay-l9ahom mktobin. 3lach had l padding ma khdamch?",
        "text": "Pourquoi ce padding ne s'applique-t-il jamais ?",
        "code": "const s = 4;\nreturn <div className={'p-' + s}>Hi</div>;",
        "answers": [
          "React interdit les classes dynamiques",
          "p-4 n'existe pas",
          "La syntaxe nécessite des backticks",
          "Tailwind ne génère que les classes trouvées littéralement dans vos fichiers source"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "Joj axes: main w cross. Chno kaydir had l combo?",
        "text": "Comment le contenu est-il positionné ?",
        "code": "<div class=\"flex items-center justify-center h-screen\">Hi</div>",
        "answers": [
          "En haut à gauche",
          "En bas à droite",
          "Parfaitement centré dans les deux sens",
          "Centré horizontalement uniquement"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "Grid-cols-3 kat-qsem l grid l 3 colonnes. Kifach ghaytrtbo l cards?",
        "text": "Comment les cartes sont-elles disposées ?",
        "code": "<div class=\"grid grid-cols-3 gap-4\"><div>A</div><div>B</div><div>C</div></div>",
        "answers": [
          "Sur une ligne sans espaces",
          "Dans une grille de 3 colonnes avec des espaces entre les cartes",
          "Empilées sans espaces",
          "Superposées"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "Space-x kat-zid margin bin children, gap kat-setti l flex gap. Chno l far9?",
        "text": "Quelle est la différence entre les deux ?",
        "code": "<div class=\"flex space-x-4\">...</div>\n<div class=\"flex gap-4\">...</div>",
        "answers": [
          "space-x-4 ajoute des marges entre les enfants ; gap-4 définit l'espacement flex — visuellement similaires ici",
          "Ils sont identiques en tout point",
          "gap-4 ne fonctionne que verticalement",
          "space-x-4 ne fonctionne qu'avec grid"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la breakpoint md: menin kay-bda? Fker f l default breakpoints dyal Tailwind.",
        "text": "À partir de quelle largeur d'écran md:text-lg s'applique-t-il ?",
        "code": "<p class=\"text-sm md:text-lg\">Hi</p>",
        "answers": [
          "480px",
          "1024px",
          "Il s'applique à toutes les tailles",
          "768px et plus"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "Container + mx-auto: chno l effect dyalhom 3la l div?",
        "text": "Que fait ce wrapper classique ?",
        "code": "<div class=\"container mx-auto\">Hi</div>",
        "answers": [
          "Rend le texte énorme",
          "Ajoute une bordure",
          "Centre horizontalement un conteneur à largeur max",
          "Le cache sur mobile"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "Flex-col kat-bdel direction l vertical. Kifach ghaytrtbo l children?",
        "text": "Comment les enfants s'empilent-ils ?",
        "code": "<div class=\"flex flex-col\"><span>A</span><span>B</span></div>",
        "answers": [
          "Côte à côte",
          "Verticalement",
          "En ordre inversé",
          "Ils se superposent"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la justify-between: kifach kay-wzze3 l space bin items? Fker f l far9 binha w justify-center.",
        "text": "Comment les deux boutons sont-ils espacés ?",
        "code": "<div class=\"flex justify-between\"><button>A</button><button>B</button></div>",
        "answers": [
          "A au bord gauche, B au bord droit, espace entre eux",
          "Les deux centrés",
          "Les deux à gauche",
          "Superposés au milieu"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la w-1/2: chno kay3ni l fraction? W menin kayt-7seb, screen wla parent?",
        "text": "Quelle est la largeur de la barre latérale ?",
        "code": "<div class=\"flex\"><aside class=\"w-1/2\">...</aside><main>...</main></div>",
        "answers": [
          "50px",
          "La moitié de l'écran",
          "Elle n'a aucune largeur",
          "50 % du conteneur flex"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "Max-w kay-7ded l width l max, mx-auto kat-centri. Chno ghayban?",
        "text": "Que fait ce motif de carte ?",
        "code": "<div class=\"max-w-md mx-auto\">Hi</div>",
        "answers": [
          "Carte pleine largeur",
          "Carte cachée",
          "Une carte limitée à une largeur max moyenne, centrée",
          "Une carte avec texte moyen"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "Mobile-first: base l mobile, md: l desktop. Chno l classes li kat-dir had l effect?",
        "text": "Sur mobile le texte est petit ; sur desktop il est grand. Quelles classes font cela ?",
        "code": "<p class=\"???\">Hi</p>",
        "answers": [
          "text-lg sm:text-sm",
          "text-sm md:text-lg",
          "text-small text-large",
          "responsive-text"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "@apply kat-dkhel l utilities f custom CSS. Chno kaydir hna?",
        "text": "Que fait @apply ici ?",
        "code": ".btn {\n  @apply px-4 py-2 bg-blue-500 text-white;\n}",
        "answers": [
          "Il injecte ces styles utilitaires dans la classe personnalisée .btn",
          "Il applique le mode sombre",
          "Il importe les utilitaires",
          "Il supprime les utilitaires du CSS"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "Arbitrary values kat-tktb b square brackets. Chno l class s7i7a l color custom?",
        "text": "Quelle classe donne à la div un fond bleu de marque personnalisé (#1da1f2) ?",
        "code": "<div class=\"???\">Hi</div>",
        "answers": [
          "bg-twitter-blue",
          "bg-#1da1f2",
          "bg-brand",
          "bg-[#1da1f2] — syntaxe de valeur arbitraire"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "Dark: kat-applya ghir mlli dark mode khdam. Imta ghayban l background l dark?",
        "text": "Quand le fond sombre s'applique-t-il ?",
        "code": "<div class=\"bg-white dark:bg-gray-900\">Hi</div>",
        "answers": [
          "Toujours",
          "Jamais",
          "Quand le mode sombre est actif",
          "Seulement sur mobile"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "Mlli joj classes kay-tnafsou, l ordre f l CSS li kay-7kem. Chkun ghayghlb?",
        "text": "Un développeur écrit class=\"p-4 p-8\". Quel padding gagne ?",
        "answers": [
          "p-4 — la première classe gagne",
          "p-8 — l'ordre du CSS généré décide, pas l'ordre des classes",
          "Ils s'annulent",
          "C'est aléatoire"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la flex-1: chno kaydir l basis? Wach l text twil ghay2athar 3la l width?",
        "text": "Deux cartes devraient se partager la ligne équitablement même si l'une a un texte plus long. Est-ce que ça marche ?",
        "code": "<div class=\"flex\"><div class=\"flex-1\">short</div><div class=\"flex-1\">much longer text here</div></div>",
        "answers": [
          "Oui — flex-1 met la base à 0 %, donc les deux ont des largeurs égales",
          "Non — le texte plus long élargit sa carte",
          "Seulement avec grid",
          "Seulement avec des largeurs fixes"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "Absolute child kayt-positiona 3la a9rab ancestor positioned. Chno na9es 3la l card?",
        "text": "Le badge devrait rester collé au coin de la carte, mais il se positionne par rapport à la page. Que manque-t-il sur la carte ?",
        "code": "<div class=\"card\">\n  <span class=\"absolute top-0 right-0\">New</span>\n</div>",
        "answers": [
          "z-index sur le span",
          "Le span devrait être en fixed",
          "Rien — ça fonctionne",
          "relative sur la carte — un enfant absolute se positionne par rapport à l'ancêtre positionné le plus proche"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "Flex items kayt-sghro mlli space daye9. Chno kaymna3 shrink-0?",
        "text": "Qu'est-ce que shrink-0 empêche ?",
        "code": "<div class=\"flex\"><div class=\"shrink-0 w-32\">A</div><div>B</div></div>",
        "answers": [
          "De grandir",
          "Le retour à la ligne",
          "La boîte à largeur fixe de rétrécir quand l'espace manque",
          "Le défilement"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "Stacking f Tailwind b z-index utilities. Chno l class s7i7a?",
        "text": "Comment donner à un élément un ordre d'empilement supérieur dans Tailwind ?",
        "code": "<div class=\"???\">popup</div>",
        "answers": [
          "stack-high",
          "z-10",
          "above-all",
          "order-10"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "Purge kay7taj content paths kamlin. 3lach l CSS ba9i kbir f production?",
        "text": "Pourquoi le CSS de production est-il toujours énorme ?",
        "code": "// tailwind.config.js\nmodule.exports = {\n  content: [\"./src/**/*.{js,jsx}\"],\n}",
        "answers": [
          "Les chemins content ne couvrent pas tous les fichiers de templates, donc les utilitaires inutilisés ne peuvent pas être détectés et supprimés",
          "Tailwind est toujours énorme",
          "La config a besoin de plus de plugins",
          "JIT est désactivé par défaut"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la khfi element bla ma t-7yyed l space dyalo: chno l far9 bin hidden w invisible f Tailwind?",
        "text": "Quelle classe cache l'élément tout en gardant sa place dans la mise en page ?",
        "code": "<div class=\"???\">Hi</div>",
        "answers": [
          "hidden",
          "display-none",
          "opacity-0",
          "invisible — visibility: hidden garde sa place"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "Group-hover kat-bdel style dyal child mlli kat-hoveri l parent. Chno ghaytra?",
        "text": "Que se passe-t-il quand l'utilisateur survole la carte ?",
        "code": "<div class=\"group\">\n  <p class=\"group-hover:text-red-500\">Hi</p>\n</div>",
        "answers": [
          "Rien",
          "La carte devient rouge",
          "Le texte du paragraphe devient rouge quand la carte est survolée",
          "Le texte est toujours rouge"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "Peer kat-khlli sibling yt2athar b state dyal input. Chno ghaytra mlli t-checki?",
        "text": "Que se passe-t-il quand la case est cochée ?",
        "code": "<input type=\"checkbox\" class=\"peer\">\n<p class=\"peer-checked:font-bold\">Hi</p>",
        "answers": [
          "Rien",
          "Le paragraphe devient gras — peer-checked stylise un frère selon l'état de l'input",
          "La case disparaît",
          "Le texte est toujours gras"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "Divide kat-zid borders bin children. Chno l far9 bin divide-x w space-x?",
        "text": "Quelle est la différence entre divide-x et space-x ?",
        "code": "<div class=\"flex divide-x divide-gray-300\">...</div>",
        "answers": [
          "divide-x ajoute des bordures entre les enfants ; space-x ajoute des marges",
          "Ils sont identiques",
          "divide-x ne fonctionne que verticalement",
          "space-x ajoute des bordures"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la content khfi visually walakin accessible l screen readers: chno l class li kat-dir hadchi?",
        "text": "Quelle classe cache visuellement le contenu tout en le gardant accessible aux lecteurs d'écran ?",
        "code": "<span class=\"???\">Menu</span>",
        "answers": [
          "hidden",
          "invisible",
          "opacity-0",
          "sr-only"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "Truncate kat-9ta3 l text b ... Chno ghayban l filename?",
        "text": "À quoi ressemble le long nom de fichier dans cette boîte à largeur fixe ?",
        "code": "<div class=\"w-32 truncate\">very-long-file-name.txt</div>",
        "answers": [
          "Il passe sur deux lignes",
          "Il déborde visiblement",
          "Il est coupé avec des points de suspension",
          "La div s'élargit"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "Focus ring kay-beyen l element mlli kaykoun focused. Chno l classes li kat-dirha?",
        "text": "Quelles classes ajoutent un anneau de focus accessible au bouton ?",
        "code": "<button class=\"???\">Save</button>",
        "answers": [
          "focus-border",
          "focus:outline-none focus:ring-2 focus:ring-blue-500",
          "hover:ring",
          "focus-bold"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "Transition kat-dir animation smooth. Chno ghaytra mlli kat-hoveri l button?",
        "text": "Que font ces classes ensemble ?",
        "code": "<button class=\"transition duration-300 hover:bg-blue-700\">Hi</button>",
        "answers": [
          "La couleur de fond change en douceur sur 300ms au survol",
          "Le bouton attend 300ms puis change brutalement",
          "Rien — transition a besoin de JavaScript",
          "Le bouton s'anime en boucle"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la aspect-video: chno kay7fed? Fker f l ratio dyal video.",
        "text": "Quelle forme cette div garde-t-elle ?",
        "code": "<div class=\"aspect-video w-full\"></div>",
        "answers": [
          "Un carré",
          "Un cercle",
          "Selon son contenu",
          "Un rectangle 16:9 à n'importe quelle largeur"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "Object-cover kay-ghetti l frame bla ma y-tshwah. Kifach ghayban l photo?",
        "text": "Comment la photo remplit-elle son cadre carré ?",
        "code": "<img src=\"photo.jpg\" class=\"w-40 h-40 object-cover\">",
        "answers": [
          "Étirée et déformée",
          "Avec des barres vides",
          "Recadrée pour couvrir le carré sans déformation",
          "Elle garde sa taille naturelle"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "@apply khassha PostCSS dyal Tailwind. 3lach ma khdamch f had l file?",
        "text": "Pourquoi l'utilitaire personnalisé a-t-il cessé de fonctionner après son déplacement dans un fichier CSS ordinaire ?",
        "code": "/* styles.css — non traité par Tailwind */\n.card {\n  @apply bg-[#1da1f2];\n}",
        "answers": [
          "Les valeurs arbitraires sont interdites",
          "@apply ne fonctionne que dans les fichiers traités par Tailwind",
          "Les couleurs hex sont interdites",
          "Le nom de classe est faux"
        ],
        "correct": 1,
        "selection": null
      }
    ]
  }
];
