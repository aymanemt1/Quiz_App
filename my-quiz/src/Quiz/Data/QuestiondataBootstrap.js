export const bootstrapQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "Bootstrap kat3tik classes jahzin dyal CSS bach t-sayb site responsive dghya bla ma tkteb CSS bzaf. Fker chno no3 dyalo bl dabt.",
        "text": "What is Bootstrap?",
        "answers": [
          "A JavaScript testing framework",
          "An open-source CSS framework for building responsive, mobile-first websites",
          "A relational database",
          "A PHP backend framework"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "Styles kayjiw mn CSS file, w JavaScript ghir l components interactifs bhal modal. Fker chno khask bach t-chof l design.",
        "text": "What is the minimum you must add to an HTML page to use Bootstrap 5 styles?",
        "answers": [
          "A <link> to the bootstrap.min.css stylesheet",
          "The bootstrap.bundle.min.js script only",
          "jQuery and Popper.js scripts",
          "A <bootstrap> HTML tag"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "Grid dyal Bootstrap m9assma l row l wa7ed 3adad tabet dyal columns. Fker ch7al howa.",
        "text": "How many columns does the Bootstrap grid divide each row into?",
        "answers": [
          "6",
          "8",
          "12",
          "16"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "Grid khaso parent li kay-markazi l content w kay-7aded l width. Fker smit l class li kat-ji 9bel row.",
        "text": "Which class completes this basic grid wrapper?",
        "code": "<div class='???'>\n  <div class='row'>\n    <div class='col'>...</div>\n  </div>\n</div>",
        "answers": [
          "grid",
          "wrapper",
          "container",
          "page"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "Wa7ed fihom dayman 100% width, w l akhor 3ndo max-width kaytbedel 7asab l ecran. Fker ina wa7ed kay-markazi.",
        "text": "What is the difference between .container and .container-fluid?",
        "answers": [
          "container has responsive fixed max-widths and is centered; container-fluid is always 100% wide",
          "container-fluid is centered; container is full width",
          "They are identical",
          "container only works on mobile"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "Buttons f Bootstrap kaybdaw b class dyal base w moraha class dyal l color. Fker chno homa b joj.",
        "text": "Which classes render a blue primary button?",
        "code": "<button class='???'>Save</button>",
        "answers": [
          "button button-blue",
          "btn btn-primary",
          "button-primary",
          "primary-btn"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "m = margin, t = top, w ra9m 3 = 1rem f scale dyal Bootstrap (0-5). Fker chno kaydir had l class.",
        "text": "What does the class mt-3 do?",
        "answers": [
          "Adds margin-top of 1rem",
          "Adds padding-top of 3px",
          "Adds margin-top of 3px",
          "Sets max-width to 3rem"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "d = display, w none kat-7ayed l element mn layout kamel (mach bhal invisible). Fker smit l class.",
        "text": "Which class completely hides an element on all screen sizes?",
        "answers": [
          "hidden",
          "d-none",
          "invisible-all",
          "display-0"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "Classes dyal text alignment f Bootstrap kaybdaw b text-. Fker chno kat-kemel moraha.",
        "text": "Which class centers text inside an element?",
        "answers": [
          "align-center",
          "text-center",
          "center-text",
          "text-middle"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "F v5 ma kaynach jQuery — data-bs-* homa li kay-che3lo components bla ma tkteb JavaScript. Fker chno dawrhom.",
        "text": "What do the data-bs-* attributes do in Bootstrap 5?",
        "code": "<button data-bs-toggle='modal' data-bs-target='#myModal'>Open</button>",
        "answers": [
          "They replace jQuery plugins with vanilla-JS hooks that wire up components without custom JavaScript",
          "They only work with React",
          "They load the Bootstrap CSS",
          "They are comments ignored by the browser"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "Breakpoints: sm 576, md ..., lg 992, xl 1200, xxl 1400. Fker ch7al dyal md.",
        "text": "At which minimum viewport width does the md breakpoint start?",
        "answers": [
          "576px",
          "768px",
          "992px",
          "1200px"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "Mobile-first: bda b col-12 l tele, w zid breakpoint class l tablets. Fker chno l combination s7i7a.",
        "text": "Which classes stack A and B on phones but place them side-by-side (50/50) on tablets and larger?",
        "code": "<div class='row'>\n  <div class='???'>A</div>\n  <div class='???'>B</div>\n</div>",
        "answers": [
          "col-12 col-md-6",
          "col-6",
          "col-md-12",
          "col-sm-6 col-12"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "expand-lg = m7loula f lg w lfo9, w kat-t replia l toggler lte7t mn lg. Fker smit l class.",
        "text": "Which class makes a navbar stay expanded on large screens but collapse into a hamburger toggler on smaller screens?",
        "answers": [
          "navbar-collapse",
          "navbar-expand-lg",
          "navbar-toggleable",
          "navbar-responsive"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "Card khasha wrapper .card w ldakhel .card-body — l ordre mohim. Fker l nesting s7i7.",
        "text": "Which markup is a correct basic Bootstrap card?",
        "answers": [
          "<div class='card'><div class='card-body'><h5 class='card-title'>Title</h5></div></div>",
          "<div class='card-body'><div class='card'>Title</div></div>",
          "<card><body>Title</body></card>",
          "<div class='bs-card'>Title</div>"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "Alert khaso alert + alert-danger l red, w alert-dismissible + btn-close bach ytsed. Fker l combination kamla.",
        "text": "How do you create a red alert that the user can dismiss?",
        "answers": [
          "<div class='alert alert-danger alert-dismissible'>...<button class='btn-close' data-bs-dismiss='alert'></button></div>",
          "<div class='danger'>...</div>",
          "<div class='alert-red'>...</div>",
          "<alert type='danger' closable>...</alert>"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "Inputs f Bootstrap kayt-stylaw b class wa7da mchhora bzf. Fker chno hiya.",
        "text": "Which class gives a text <input> the Bootstrap form styling?",
        "answers": [
          "input-form",
          "form-input",
          "form-control",
          "bs-input"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "d-flex + justify-content-center l horizontal + align-items-center l vertical. Fker l combo kamel.",
        "text": "How do you center a child element both horizontally and vertically with Bootstrap utilities?",
        "answers": [
          "class='d-flex justify-content-center align-items-center'",
          "class='center-xy'",
          "class='d-block m-auto'",
          "class='text-center align-middle'"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "Blue dyal theme = primary (bg-primary), w text white = text-white. Fker l combo.",
        "text": "Which classes give a <div> a blue background with white text?",
        "answers": [
          "bg-blue text-white",
          "bg-primary text-white",
          "primary-bg white-text",
          "bg-info text-light"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "v5 kat-sta3mel data-bs-toggle w data-bs-target, w target khaso # 9bel l id. Fker chno s7i7.",
        "text": "Which attributes make this button open the modal with id='demoModal'?",
        "code": "<button class='btn btn-primary' ???>Launch demo</button>",
        "answers": [
          "data-bs-toggle='modal' data-bs-target='#demoModal'",
          "data-toggle='modal' data-target='demoModal'",
          "onclick='openModal()'",
          "data-modal='demoModal'"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "Badge = badge + bg-success l green. Fker l markup s7i7.",
        "text": "Which markup creates a green 'New' badge?",
        "answers": [
          "<span class='badge bg-success'>New</span>",
          "<span class='label green'>New</span>",
          "<badge color='green'>New</badge>",
          "<span class='bg-green badge'>New</span>"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "Modal 3ndo structure tabta: modal, ldakhel modal-dialog, ldakhel modal-content. Fker l ordre s7i7.",
        "text": "Which nesting is required for a working Bootstrap modal?",
        "answers": [
          "modal > modal-dialog > modal-content > modal-header/body/footer",
          "modal-content > modal > modal-dialog",
          "modal-dialog > modal",
          "Any div with class 'popup'"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "data-bs-parent kat-gol l items: melli wa7ed yt7al, l akhrin ytseddo. Fker chno kaydir bl dabt.",
        "text": "In an accordion, what does data-bs-parent='#faqAccordion' do on each collapse element?",
        "answers": [
          "It keeps only one accordion item open at a time",
          "It styles the parent container",
          "It disables the accordion",
          "It makes all items open by default"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "Carousel khaso class carousel slide 3la wrapper w data-bs-ride='carousel' bach y-bda auto. Fker chno homa b joj.",
        "text": "What two things make a carousel slide automatically?",
        "answers": [
          "class='carousel slide' on the wrapper and data-bs-ride='carousel'",
          "class='slider' and autoplay='true'",
          "Two <img> tags",
          "The carousel.js file only"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "Dropdown kat-t7al b attribute wa7ed 3la button. Fker chno howa.",
        "text": "Which attribute on the button toggles the dropdown menu?",
        "code": "<div class='dropdown'>\n  <button class='btn btn-secondary' ???>Menu</button>\n  <ul class='dropdown-menu'>...</ul>\n</div>",
        "answers": [
          "data-bs-toggle='dropdown'",
          "data-bs-menu='open'",
          "onclick='toggle()'",
          "data-dropdown='true'"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "Tooltip w popover 3ndhom 9a3ida khasa: data attribute bo7do ma kafich. Fker 3lach ma ban walo.",
        "text": "You added data-bs-toggle='tooltip' to a button but no tooltip appears. Why?",
        "answers": [
          "Tooltips must be initialized with JavaScript in Bootstrap 5",
          "The attribute should be data-toggle",
          "Tooltips were removed in Bootstrap 5",
          "You must add the 'tooltip' class to <body>"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "Form khaso novalidate + needs-validation, w melli t-submiti kat-zid was-validated b JavaScript. Fker l steps.",
        "text": "How do you enable Bootstrap's custom form-validation styles?",
        "answers": [
          "Add novalidate and class='needs-validation' to the form, then add 'was-validated' via JavaScript on submit",
          "Add class='validate' to each input",
          "Add required='bootstrap' to the form",
          "Validation works automatically with no setup"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "Reboot = reset dyal CSS li kay-wa7ed styles dyal browsers (bhal normalize). Fker chno howa.",
        "text": "What is Reboot in Bootstrap?",
        "answers": [
          "Bootstrap's built-in CSS reset that normalizes default browser styles",
          "A JavaScript module that restarts components",
          "A tool that reboots the dev server",
          "The dark-mode engine"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "Dark mode f 5.3 kat-tfa3al b attribute wa7ed 3la <html>. Fker chno howa.",
        "text": "How do you enable Bootstrap 5.3's built-in dark mode for the whole page?",
        "answers": [
          "Add data-bs-theme='dark' to the <html> element",
          "Add class='dark' to <body>",
          "Include darkmode.js",
          "Add data-theme='black' to <head>"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "Gutters kat-tzad b classes g-* 3la row, machi margin 3la columns (kat-kheser l 7sab). Fker chno s7i7.",
        "text": "Your grid columns touch each other with no gap. What is the Bootstrap way to add gutters?",
        "answers": [
          "Add a gutter class like g-3 to the .row",
          "Add m-3 to each .col",
          "Add p-3 to the .container",
          "Gutters cannot be changed"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "d-none kat-khebbi kolchi, w d-md-block kat-rj3o visible mn md lfo9. Fker l combo.",
        "text": "Which classes hide an element on phones but show it on tablets (md) and larger?",
        "answers": [
          "d-none d-md-block",
          "hidden-sm",
          "d-md-none",
          "invisible d-md-visible"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "Variables dyal Sass khas t-override-hom 9bel ma t-importi bootstrap, machi moraha. Fker l ordre.",
        "text": "You installed Bootstrap via npm and want to change the primary color everywhere. What is the correct Sass approach?",
        "answers": [
          "Set $primary (or $theme-colors) BEFORE @import 'bootstrap'",
          "Edit the compiled bootstrap.min.css directly",
          "Set $primary AFTER @import 'bootstrap'",
          "Only add !important rules in a separate file"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "Install b npm, w moraha importi CSS file f entry point dyal React (index.js). Fker l steps b joj.",
        "text": "How do you add Bootstrap 5 to a Create React App project?",
        "answers": [
          "npm install bootstrap, then import 'bootstrap/dist/css/bootstrap.min.css' in index.js",
          "Add a <link> to node_modules in index.html",
          "npm install react-bootstrap-css",
          "Copy the CSS into App.css manually"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "Bundle = bootstrap + Popper mjmo3in f file wa7ed. Fker chno zayed fih.",
        "text": "What is the difference between bootstrap.bundle.min.js and bootstrap.min.js?",
        "answers": [
          "The bundle includes Popper.js, which dropdowns, tooltips and popovers need",
          "The bundle is the CSS file",
          "There is no difference",
          "The bundle only works with jQuery"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "Offset classes kat-dfe3 column l limen b 3adad dyal columns (bhal margin-left). Fker smit l class.",
        "text": "How do you push a col-md-6 three columns to the right on medium screens and up?",
        "answers": [
          "Add class='offset-md-3'",
          "Add class='ms-3'",
          "Add class='push-md-3'",
          "Add style='margin-left: 25%'"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "Order classes kat-bedlo l ordre visuel bla ma t-beddel HTML. Fker ina class kat-jib sidebar lwel ghir f desktop.",
        "text": "On mobile the sidebar must appear AFTER the main content, but on desktop it must appear BEFORE it. The sidebar is second in the HTML. Which class fixes this?",
        "answers": [
          "Add order-md-first to the sidebar",
          "Add order-last to the main content",
          "Reorder the HTML with JavaScript",
          "Add float-md-left to the sidebar"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "data-bs-toggle='collapse' kat-che3el collapse component b animation. Fker chno kaydir had l code.",
        "text": "What does this code do?",
        "code": "<button data-bs-toggle='collapse' data-bs-target='#more'>Show more</button>\n<div class='collapse' id='more'>...</div>",
        "answers": [
          "It toggles the visibility of the #more section with a collapse animation",
          "It opens a modal",
          "It submits a form",
          "It does nothing without jQuery"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "Floating labels: label kat-ji mor l input, w input khaso placeholder attribute. Fker l ordre.",
        "text": "In a floating-label input, where must the <label> be placed?",
        "answers": [
          "After the <input>, and the input needs a placeholder attribute",
          "Before the <input>",
          "Inside a <span> wrapper",
          "Labels are not used with floating inputs"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "show = 9bel ma yt7al, shown = melli sala l animation kamel. Fker ina wa7ed khask.",
        "text": "You need to run code AFTER a modal has finished opening (animation complete). Which event should you listen to?",
        "answers": [
          "shown.bs.modal",
          "show.bs.modal",
          "opened.modal",
          "modal.shown"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "container-md = fluid lte7t mn md, w container 3adi mn md lfo9. Fker chno kaydir bl dabt.",
        "text": "What does the class container-md do?",
        "answers": [
          "It is full-width below the md breakpoint and a fixed max-width container at md and up",
          "It is always full-width",
          "It centers only on md screens exactly",
          "It is the same as container-fluid"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "Bootstrap 3ndo Utility API b Sass bach t-zid utilities custom b tari9a rasmiya. Fker b chno kat-khdem.",
        "text": "How do you add a custom utility class like .cursor-pointer the official Bootstrap way?",
        "answers": [
          "Extend the $utilities Sass map with the Utility API, then recompile",
          "Write plain CSS in any file — there is no official way",
          "Edit bootstrap.min.css",
          "Add it to the $theme-colors map"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "Bootstrap 5.3 kay-sta3mel CSS variables --bs-* li ymkn t-override-hom f ay wa9t. Fker kifach.",
        "text": "Without using Sass, how can you change Bootstrap's primary color at runtime?",
        "answers": [
          "Override the --bs-primary CSS custom property, e.g. :root { --bs-primary: #ff5733; }",
          "It is impossible without Sass",
          "Edit the data-bs-primary attribute",
          "Change the <html> lang attribute"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "F v5 7aydo jQuery, w bdlo data-toggle l data-bs-toggle w ml- l ms-. Fker ina jomla s7i7a.",
        "text": "Which statement about migrating from Bootstrap 4 to Bootstrap 5 is TRUE?",
        "answers": [
          "jQuery is no longer required — all plugins are vanilla JavaScript",
          "data-toggle still works unchanged",
          "Classes ml-* and mr-* still work",
          "Popper.js is no longer needed"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "Modal khaso tabindex='-1' w aria attributes bach screen readers yfhmoh. Fker chno homa.",
        "text": "Which attributes belong on the .modal element for accessibility?",
        "answers": [
          "tabindex='-1', aria-labelledby and aria-hidden='true'",
          "role='popup' only",
          "No attributes are needed",
          "alt and title"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "Bach t-sghar l CSS, kayn tool kay-7ayed classes li ma sta3meltich f build. Fker chno smito.",
        "text": "Your Bootstrap CSS is 200KB but you only use a few classes. What is the recommended production optimization?",
        "answers": [
          "Purge unused CSS at build time (e.g. with PurgeCSS)",
          "Delete bootstrap.min.css",
          "Use !important everywhere",
          "Load the CSS twice"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "data-bs-auto-close kat-7aded imta dropdown ytsed: 'outside' = ytsed ghir melli t-clicki barra. Fker l value.",
        "text": "A dropdown containing a form closes every time you click inside it. How do you keep it open while interacting with the form?",
        "answers": [
          "Add data-bs-auto-close='outside' to the dropdown",
          "Remove the dropdown-menu class",
          "Add data-bs-toggle='form'",
          "It cannot be changed"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "Bootstrap = components jahzin dghya, Tailwind = control kamel 3la design. Fker imta Bootstrap 7sen.",
        "text": "When is Bootstrap a better choice than Tailwind CSS?",
        "answers": [
          "When you need ready-made, styled components fast (admin panels, MVPs, prototypes)",
          "When you need full control over every design token",
          "When you want zero CSS in the bundle",
          "Never — Tailwind is always better"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "Backdrop dyal modal 3ndo z-index 1050, kber mn 1020 dyal navbar. Fker 3lach t-ghetta.",
        "text": "Your sticky navbar (z-index 1020) is covered by the modal backdrop. Why?",
        "answers": [
          "The modal backdrop uses z-index 1050, which is higher than 1020",
          "z-index does not work with Bootstrap",
          "The navbar needs position: static",
          "Modals always render behind everything"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "Color modes f Bootstrap = CSS variables scoped b attribute selector. Fker kifach t-dir wa7ed custom.",
        "text": "How do you define a custom color mode such as data-bs-theme='brand'?",
        "answers": [
          "Override Bootstrap's CSS variables under a [data-bs-theme='brand'] selector",
          "Add class='brand' to <body>",
          "It is not possible — only light and dark exist",
          "Edit the bootstrap.js file"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "data-bs-target khaso ykon '#navMenu' b # — verifi l matching m3a l id. Fker chno l bug l ghalib.",
        "text": "The navbar hamburger button does nothing. The collapsible div has id='navMenu'. What is the most likely bug?",
        "answers": [
          "The button's data-bs-target is missing the '#' or does not match '#navMenu'",
          "The button needs type='submit'",
          "navMenu must be a class, not an id",
          "Hamburgers require jQuery"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "Row 3ndo negative margins — khaso ykon dakhel col wla container, machi dakhel row nichan. Fker 3lach l overflow.",
        "text": "You nested a .row directly inside another .row and got horizontal overflow. Why?",
        "answers": [
          "Rows have negative margins and must be placed inside a column or container, not directly in another row",
          "Rows cannot be nested at all",
          "You need row-cols-2",
          "Bootstrap grid does not support nesting"
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
        "explain_dr": "Bootstrap kat3tik classes jahzin dyal CSS bach t-sayb site responsive dghya bla ma tkteb CSS bzaf. Fker chno no3 dyalo bl dabt.",
        "text": "Qu'est-ce que Bootstrap ?",
        "answers": [
          "Un framework de test JavaScript",
          "Un framework CSS open-source pour créer des sites responsives mobile-first",
          "Une base de données relationnelle",
          "Un framework backend PHP"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "Styles kayjiw mn CSS file, w JavaScript ghir l components interactifs bhal modal. Fker chno khask bach t-chof l design.",
        "text": "Que faut-il au minimum ajouter à une page HTML pour utiliser les styles de Bootstrap 5 ?",
        "answers": [
          "Un <link> vers la feuille de style bootstrap.min.css",
          "Uniquement le script bootstrap.bundle.min.js",
          "Les scripts jQuery et Popper.js",
          "Une balise HTML <bootstrap>"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "Grid dyal Bootstrap m9assma l row l wa7ed 3adad tabet dyal columns. Fker ch7al howa.",
        "text": "En combien de colonnes la grille Bootstrap divise-t-elle chaque ligne ?",
        "answers": [
          "6",
          "8",
          "12",
          "16"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "Grid khaso parent li kay-markazi l content w kay-7aded l width. Fker smit l class li kat-ji 9bel row.",
        "text": "Quelle classe complète ce wrapper de grille de base ?",
        "code": "<div class='???'>\n  <div class='row'>\n    <div class='col'>...</div>\n  </div>\n</div>",
        "answers": [
          "grid",
          "wrapper",
          "container",
          "page"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "Wa7ed fihom dayman 100% width, w l akhor 3ndo max-width kaytbedel 7asab l ecran. Fker ina wa7ed kay-markazi.",
        "text": "Quelle est la différence entre .container et .container-fluid ?",
        "answers": [
          "container a des largeurs max fixes responsives et est centré ; container-fluid fait toujours 100 % de large",
          "container-fluid est centré ; container fait toute la largeur",
          "Ils sont identiques",
          "container ne fonctionne que sur mobile"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "Buttons f Bootstrap kaybdaw b class dyal base w moraha class dyal l color. Fker chno homa b joj.",
        "text": "Quelles classes affichent un bouton bleu principal ?",
        "code": "<button class='???'>Save</button>",
        "answers": [
          "button button-blue",
          "btn btn-primary",
          "button-primary",
          "primary-btn"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "m = margin, t = top, w ra9m 3 = 1rem f scale dyal Bootstrap (0-5). Fker chno kaydir had l class.",
        "text": "Que fait la classe mt-3 ?",
        "answers": [
          "Ajoute une marge haute de 1rem",
          "Ajoute un padding haut de 3px",
          "Ajoute une marge haute de 3px",
          "Définit la largeur max à 3rem"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "d = display, w none kat-7ayed l element mn layout kamel (mach bhal invisible). Fker smit l class.",
        "text": "Quelle classe masque complètement un élément sur toutes les tailles d'écran ?",
        "answers": [
          "hidden",
          "d-none",
          "invisible-all",
          "display-0"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "Classes dyal text alignment f Bootstrap kaybdaw b text-. Fker chno kat-kemel moraha.",
        "text": "Quelle classe centre le texte dans un élément ?",
        "answers": [
          "align-center",
          "text-center",
          "center-text",
          "text-middle"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "F v5 ma kaynach jQuery — data-bs-* homa li kay-che3lo components bla ma tkteb JavaScript. Fker chno dawrhom.",
        "text": "Que font les attributs data-bs-* dans Bootstrap 5 ?",
        "code": "<button data-bs-toggle='modal' data-bs-target='#myModal'>Open</button>",
        "answers": [
          "Ils remplacent les plugins jQuery par des hooks en JavaScript natif qui activent les composants sans JS personnalisé",
          "Ils ne fonctionnent qu'avec React",
          "Ils chargent le CSS de Bootstrap",
          "Ce sont des commentaires ignorés par le navigateur"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "Breakpoints: sm 576, md ..., lg 992, xl 1200, xxl 1400. Fker ch7al dyal md.",
        "text": "À partir de quelle largeur d'écran le breakpoint md commence-t-il ?",
        "answers": [
          "576px",
          "768px",
          "992px",
          "1200px"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "Mobile-first: bda b col-12 l tele, w zid breakpoint class l tablets. Fker chno l combination s7i7a.",
        "text": "Quelles classes empilent A et B sur téléphone mais les placent côte à côte (50/50) sur tablette et plus ?",
        "code": "<div class='row'>\n  <div class='???'>A</div>\n  <div class='???'>B</div>\n</div>",
        "answers": [
          "col-12 col-md-6",
          "col-6",
          "col-md-12",
          "col-sm-6 col-12"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "expand-lg = m7loula f lg w lfo9, w kat-t replia l toggler lte7t mn lg. Fker smit l class.",
        "text": "Quelle classe garde une barre de navigation dépliée sur grands écrans mais la replie en bouton hamburger sur petits écrans ?",
        "answers": [
          "navbar-collapse",
          "navbar-expand-lg",
          "navbar-toggleable",
          "navbar-responsive"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "Card khasha wrapper .card w ldakhel .card-body — l ordre mohim. Fker l nesting s7i7.",
        "text": "Quel balisage correspond à une carte Bootstrap de base correcte ?",
        "answers": [
          "<div class='card'><div class='card-body'><h5 class='card-title'>Title</h5></div></div>",
          "<div class='card-body'><div class='card'>Title</div></div>",
          "<card><body>Title</body></card>",
          "<div class='bs-card'>Title</div>"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "Alert khaso alert + alert-danger l red, w alert-dismissible + btn-close bach ytsed. Fker l combination kamla.",
        "text": "Comment créer une alerte rouge que l'utilisateur peut fermer ?",
        "answers": [
          "<div class='alert alert-danger alert-dismissible'>...<button class='btn-close' data-bs-dismiss='alert'></button></div>",
          "<div class='danger'>...</div>",
          "<div class='alert-red'>...</div>",
          "<alert type='danger' closable>...</alert>"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "Inputs f Bootstrap kayt-stylaw b class wa7da mchhora bzf. Fker chno hiya.",
        "text": "Quelle classe donne à un <input> texte le style de formulaire Bootstrap ?",
        "answers": [
          "input-form",
          "form-input",
          "form-control",
          "bs-input"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "d-flex + justify-content-center l horizontal + align-items-center l vertical. Fker l combo kamel.",
        "text": "Comment centrer un élément enfant horizontalement et verticalement avec les utilitaires Bootstrap ?",
        "answers": [
          "class='d-flex justify-content-center align-items-center'",
          "class='center-xy'",
          "class='d-block m-auto'",
          "class='text-center align-middle'"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "Blue dyal theme = primary (bg-primary), w text white = text-white. Fker l combo.",
        "text": "Quelles classes donnent à une <div> un fond bleu avec du texte blanc ?",
        "answers": [
          "bg-blue text-white",
          "bg-primary text-white",
          "primary-bg white-text",
          "bg-info text-light"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "v5 kat-sta3mel data-bs-toggle w data-bs-target, w target khaso # 9bel l id. Fker chno s7i7.",
        "text": "Quels attributs font en sorte que ce bouton ouvre la modale d'id='demoModal' ?",
        "code": "<button class='btn btn-primary' ???>Launch demo</button>",
        "answers": [
          "data-bs-toggle='modal' data-bs-target='#demoModal'",
          "data-toggle='modal' data-target='demoModal'",
          "onclick='openModal()'",
          "data-modal='demoModal'"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "Badge = badge + bg-success l green. Fker l markup s7i7.",
        "text": "Quel balisage crée un badge vert « New » ?",
        "answers": [
          "<span class='badge bg-success'>New</span>",
          "<span class='label green'>New</span>",
          "<badge color='green'>New</badge>",
          "<span class='bg-green badge'>New</span>"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "Modal 3ndo structure tabta: modal, ldakhel modal-dialog, ldakhel modal-content. Fker l ordre s7i7.",
        "text": "Quelle imbrication est requise pour une modale Bootstrap fonctionnelle ?",
        "answers": [
          "modal > modal-dialog > modal-content > modal-header/body/footer",
          "modal-content > modal > modal-dialog",
          "modal-dialog > modal",
          "N'importe quelle div avec la classe 'popup'"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "data-bs-parent kat-gol l items: melli wa7ed yt7al, l akhrin ytseddo. Fker chno kaydir bl dabt.",
        "text": "Dans un accordéon, que fait data-bs-parent='#faqAccordion' sur chaque élément repliable ?",
        "answers": [
          "Il ne garde qu'un seul élément ouvert à la fois",
          "Il stylise le conteneur parent",
          "Il désactive l'accordéon",
          "Il ouvre tous les éléments par défaut"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "Carousel khaso class carousel slide 3la wrapper w data-bs-ride='carousel' bach y-bda auto. Fker chno homa b joj.",
        "text": "Quelles deux choses font défiler un carrousel automatiquement ?",
        "answers": [
          "class='carousel slide' sur le wrapper et data-bs-ride='carousel'",
          "class='slider' et autoplay='true'",
          "Deux balises <img>",
          "Le fichier carousel.js uniquement"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "Dropdown kat-t7al b attribute wa7ed 3la button. Fker chno howa.",
        "text": "Quel attribut sur le bouton ouvre/ferme le menu déroulant ?",
        "code": "<div class='dropdown'>\n  <button class='btn btn-secondary' ???>Menu</button>\n  <ul class='dropdown-menu'>...</ul>\n</div>",
        "answers": [
          "data-bs-toggle='dropdown'",
          "data-bs-menu='open'",
          "onclick='toggle()'",
          "data-dropdown='true'"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "Tooltip w popover 3ndhom 9a3ida khasa: data attribute bo7do ma kafich. Fker 3lach ma ban walo.",
        "text": "Vous avez ajouté data-bs-toggle='tooltip' à un bouton mais aucune infobulle n'apparaît. Pourquoi ?",
        "answers": [
          "Les infobulles doivent être initialisées en JavaScript dans Bootstrap 5",
          "L'attribut devrait être data-toggle",
          "Les infobulles ont été supprimées de Bootstrap 5",
          "Il faut ajouter la classe 'tooltip' au <body>"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "Form khaso novalidate + needs-validation, w melli t-submiti kat-zid was-validated b JavaScript. Fker l steps.",
        "text": "Comment activer les styles de validation de formulaire personnalisés de Bootstrap ?",
        "answers": [
          "Ajouter novalidate et class='needs-validation' au formulaire, puis ajouter 'was-validated' en JavaScript à la soumission",
          "Ajouter class='validate' à chaque input",
          "Ajouter required='bootstrap' au formulaire",
          "La validation fonctionne automatiquement sans configuration"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "Reboot = reset dyal CSS li kay-wa7ed styles dyal browsers (bhal normalize). Fker chno howa.",
        "text": "Qu'est-ce que Reboot dans Bootstrap ?",
        "answers": [
          "Le reset CSS intégré de Bootstrap qui normalise les styles par défaut des navigateurs",
          "Un module JavaScript qui redémarre les composants",
          "Un outil qui redémarre le serveur de dev",
          "Le moteur du mode sombre"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "Dark mode f 5.3 kat-tfa3al b attribute wa7ed 3la <html>. Fker chno howa.",
        "text": "Comment activer le mode sombre intégré de Bootstrap 5.3 pour toute la page ?",
        "answers": [
          "Ajouter data-bs-theme='dark' à l'élément <html>",
          "Ajouter class='dark' au <body>",
          "Inclure darkmode.js",
          "Ajouter data-theme='black' au <head>"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "Gutters kat-tzad b classes g-* 3la row, machi margin 3la columns (kat-kheser l 7sab). Fker chno s7i7.",
        "text": "Vos colonnes de grille se touchent sans espace. Quelle est la façon Bootstrap d'ajouter des gouttières ?",
        "answers": [
          "Ajouter une classe de gouttière comme g-3 à la .row",
          "Ajouter m-3 à chaque .col",
          "Ajouter p-3 au .container",
          "Les gouttières ne peuvent pas être modifiées"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "d-none kat-khebbi kolchi, w d-md-block kat-rj3o visible mn md lfo9. Fker l combo.",
        "text": "Quelles classes masquent un élément sur téléphone mais l'affichent sur tablette (md) et plus ?",
        "answers": [
          "d-none d-md-block",
          "hidden-sm",
          "d-md-none",
          "invisible d-md-visible"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "Variables dyal Sass khas t-override-hom 9bel ma t-importi bootstrap, machi moraha. Fker l ordre.",
        "text": "Vous avez installé Bootstrap via npm et voulez changer la couleur primaire partout. Quelle est la bonne approche Sass ?",
        "answers": [
          "Définir $primary (ou $theme-colors) AVANT @import 'bootstrap'",
          "Modifier directement le fichier bootstrap.min.css compilé",
          "Définir $primary APRÈS @import 'bootstrap'",
          "Ajouter uniquement des règles !important dans un fichier séparé"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "Install b npm, w moraha importi CSS file f entry point dyal React (index.js). Fker l steps b joj.",
        "text": "Comment ajouter Bootstrap 5 à un projet Create React App ?",
        "answers": [
          "npm install bootstrap, puis import 'bootstrap/dist/css/bootstrap.min.css' dans index.js",
          "Ajouter un <link> vers node_modules dans index.html",
          "npm install react-bootstrap-css",
          "Copier le CSS dans App.css manuellement"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "Bundle = bootstrap + Popper mjmo3in f file wa7ed. Fker chno zayed fih.",
        "text": "Quelle est la différence entre bootstrap.bundle.min.js et bootstrap.min.js ?",
        "answers": [
          "Le bundle inclut Popper.js, dont les dropdowns, infobulles et popovers ont besoin",
          "Le bundle est le fichier CSS",
          "Il n'y a aucune différence",
          "Le bundle ne fonctionne qu'avec jQuery"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "Offset classes kat-dfe3 column l limen b 3adad dyal columns (bhal margin-left). Fker smit l class.",
        "text": "Comment décaler une col-md-6 de trois colonnes vers la droite sur écrans moyens et plus ?",
        "answers": [
          "Ajouter class='offset-md-3'",
          "Ajouter class='ms-3'",
          "Ajouter class='push-md-3'",
          "Ajouter style='margin-left: 25%'"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "Order classes kat-bedlo l ordre visuel bla ma t-beddel HTML. Fker ina class kat-jib sidebar lwel ghir f desktop.",
        "text": "Sur mobile la barre latérale doit apparaître APRÈS le contenu principal, mais sur desktop AVANT. La barre latérale est deuxième dans le HTML. Quelle classe corrige cela ?",
        "answers": [
          "Ajouter order-md-first à la barre latérale",
          "Ajouter order-last au contenu principal",
          "Réordonner le HTML avec JavaScript",
          "Ajouter float-md-left à la barre latérale"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "data-bs-toggle='collapse' kat-che3el collapse component b animation. Fker chno kaydir had l code.",
        "text": "Que fait ce code ?",
        "code": "<button data-bs-toggle='collapse' data-bs-target='#more'>Show more</button>\n<div class='collapse' id='more'>...</div>",
        "answers": [
          "Il affiche/masque la section #more avec une animation de repli",
          "Il ouvre une modale",
          "Il soumet un formulaire",
          "Il ne fait rien sans jQuery"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "Floating labels: label kat-ji mor l input, w input khaso placeholder attribute. Fker l ordre.",
        "text": "Dans un champ à libellé flottant, où doit être placée la <label> ?",
        "answers": [
          "Après le <input>, et l'input doit avoir un attribut placeholder",
          "Avant le <input>",
          "Dans un wrapper <span>",
          "Les labels ne sont pas utilisés avec les libellés flottants"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "show = 9bel ma yt7al, shown = melli sala l animation kamel. Fker ina wa7ed khask.",
        "text": "Vous devez exécuter du code APRÈS qu'une modale a fini de s'ouvrir (animation terminée). Quel événement écouter ?",
        "answers": [
          "shown.bs.modal",
          "show.bs.modal",
          "opened.modal",
          "modal.shown"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "container-md = fluid lte7t mn md, w container 3adi mn md lfo9. Fker chno kaydir bl dabt.",
        "text": "Que fait la classe container-md ?",
        "answers": [
          "Elle fait toute la largeur sous le breakpoint md et devient un conteneur à largeur max fixe à partir de md",
          "Elle fait toujours toute la largeur",
          "Elle ne centre que sur les écrans md exactement",
          "C'est la même chose que container-fluid"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "Bootstrap 3ndo Utility API b Sass bach t-zid utilities custom b tari9a rasmiya. Fker b chno kat-khdem.",
        "text": "Comment ajouter une classe utilitaire personnalisée comme .cursor-pointer de façon officielle avec Bootstrap ?",
        "answers": [
          "Étendre la map Sass $utilities avec l'Utility API, puis recompiler",
          "Écrire du CSS simple dans n'importe quel fichier — il n'y a pas de façon officielle",
          "Modifier bootstrap.min.css",
          "L'ajouter à la map $theme-colors"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "Bootstrap 5.3 kay-sta3mel CSS variables --bs-* li ymkn t-override-hom f ay wa9t. Fker kifach.",
        "text": "Sans utiliser Sass, comment changer la couleur primaire de Bootstrap à l'exécution ?",
        "answers": [
          "Surcharger la propriété CSS personnalisée --bs-primary, ex. :root { --bs-primary: #ff5733; }",
          "Impossible sans Sass",
          "Modifier l'attribut data-bs-primary",
          "Changer l'attribut lang de <html>"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "F v5 7aydo jQuery, w bdlo data-toggle l data-bs-toggle w ml- l ms-. Fker ina jomla s7i7a.",
        "text": "Quelle affirmation sur la migration de Bootstrap 4 vers Bootstrap 5 est VRAIE ?",
        "answers": [
          "jQuery n'est plus requis — tous les plugins sont en JavaScript natif",
          "data-toggle fonctionne toujours sans changement",
          "Les classes ml-* et mr-* fonctionnent toujours",
          "Popper.js n'est plus nécessaire"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "Modal khaso tabindex='-1' w aria attributes bach screen readers yfhmoh. Fker chno homa.",
        "text": "Quels attributs doivent figurer sur l'élément .modal pour l'accessibilité ?",
        "answers": [
          "tabindex='-1', aria-labelledby et aria-hidden='true'",
          "role='popup' uniquement",
          "Aucun attribut n'est nécessaire",
          "alt et title"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "Bach t-sghar l CSS, kayn tool kay-7ayed classes li ma sta3meltich f build. Fker chno smito.",
        "text": "Votre CSS Bootstrap fait 200 Ko mais vous n'utilisez que quelques classes. Quelle optimisation est recommandée en production ?",
        "answers": [
          "Purger le CSS inutilisé au build (ex. avec PurgeCSS)",
          "Supprimer bootstrap.min.css",
          "Utiliser !important partout",
          "Charger le CSS deux fois"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "data-bs-auto-close kat-7aded imta dropdown ytsed: 'outside' = ytsed ghir melli t-clicki barra. Fker l value.",
        "text": "Un dropdown contenant un formulaire se ferme à chaque clic à l'intérieur. Comment le garder ouvert pendant l'interaction avec le formulaire ?",
        "answers": [
          "Ajouter data-bs-auto-close='outside' au dropdown",
          "Retirer la classe dropdown-menu",
          "Ajouter data-bs-toggle='form'",
          "Impossible à modifier"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "Bootstrap = components jahzin dghya, Tailwind = control kamel 3la design. Fker imta Bootstrap 7sen.",
        "text": "Quand Bootstrap est-il un meilleur choix que Tailwind CSS ?",
        "answers": [
          "Quand il faut des composants stylés prêts à l'emploi rapidement (panneaux d'admin, MVP, prototypes)",
          "Quand il faut un contrôle total sur chaque token de design",
          "Quand on veut zéro CSS dans le bundle",
          "Jamais — Tailwind est toujours meilleur"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "Backdrop dyal modal 3ndo z-index 1050, kber mn 1020 dyal navbar. Fker 3lach t-ghetta.",
        "text": "Votre barre de navigation sticky (z-index 1020) est recouverte par le fond de la modale. Pourquoi ?",
        "answers": [
          "Le fond de modale utilise z-index 1050, supérieur à 1020",
          "z-index ne fonctionne pas avec Bootstrap",
          "La barre de navigation doit avoir position: static",
          "Les modales s'affichent toujours derrière tout"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "Color modes f Bootstrap = CSS variables scoped b attribute selector. Fker kifach t-dir wa7ed custom.",
        "text": "Comment définir un mode de couleur personnalisé comme data-bs-theme='brand' ?",
        "answers": [
          "Surcharger les variables CSS de Bootstrap sous un sélecteur [data-bs-theme='brand']",
          "Ajouter class='brand' au <body>",
          "Impossible — seuls light et dark existent",
          "Modifier le fichier bootstrap.js"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "data-bs-target khaso ykon '#navMenu' b # — verifi l matching m3a l id. Fker chno l bug l ghalib.",
        "text": "Le bouton hamburger de la barre de navigation ne fait rien. La div repliable a id='navMenu'. Quel est le bug le plus probable ?",
        "answers": [
          "Le data-bs-target du bouton n'a pas le '#' ou ne correspond pas à '#navMenu'",
          "Le bouton doit avoir type='submit'",
          "navMenu doit être une classe, pas un id",
          "Les hamburgers nécessitent jQuery"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "Row 3ndo negative margins — khaso ykon dakhel col wla container, machi dakhel row nichan. Fker 3lach l overflow.",
        "text": "Vous avez imbriqué une .row directement dans une autre .row et obtenu un débordement horizontal. Pourquoi ?",
        "answers": [
          "Les lignes ont des marges négatives et doivent être placées dans une colonne ou un conteneur, pas directement dans une autre ligne",
          "Les lignes ne peuvent pas du tout être imbriquées",
          "Il faut row-cols-2",
          "La grille Bootstrap ne supporte pas l'imbrication"
        ],
        "correct": 0,
        "selection": null
      }
    ]
  }
];
