export const gsapQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "So2al 3la gsap.to: had l method kat-animi mn l 7ala l 7alia dyal l element l l values li 3titih. Fker x chnu kay3ni f GSAP, w duration b chnu kat-t7sab.",
        "text": "What does this do?",
        "code": "gsap.to(\".box\", { x: 100, duration: 1 });",
        "answers": [
          "Moves .box 100px to the right over 1 second",
          "Moves .box 100px instantly",
          "Fades .box out over 1 second",
          "Rotates .box 100 degrees over 1 second"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al 3la duration: GSAP kay-sta3ml wa7ed l unit mo3ayana l l wa9t. Fker wach hia milliseconds b7al setTimeout wla 7aja khra.",
        "text": "How long does the fade take?",
        "code": "gsap.to(\".box\", { opacity: 0, duration: 2 });",
        "answers": [
          "2 milliseconds",
          "2 seconds",
          "2 frames",
          "It never finishes"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al 3la gsap.from: had l method kat-bda mn l values li 3titih w kat-mchi l l 7ala l 7alia dyal l element. Fker fin ghadi y-sali l card.",
        "text": "What is the final state of .card after this runs?",
        "code": "gsap.from(\".card\", { y: 50, opacity: 0, duration: 0.8 });",
        "answers": [
          "Shifted 50px down and invisible",
          "Back at its natural position, fully visible",
          "Shifted 50px up and invisible",
          "Scaled down to zero"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al 3la fromTo: had l method kat-7dded b dabt mnin kat-bda w fin kat-sali. Fker 3lach ghadi t-khtarha 3la to() ila l element tqdar ykoun t7rk mn 9bl.",
        "text": "Why use fromTo here instead of to()?",
        "code": "gsap.fromTo(\".box\", { x: 0 }, { x: 200, duration: 1 });",
        "answers": [
          "It is faster than to()",
          "It forces the animation to always start at x: 0, even if the box was moved before",
          "It animates two elements at once",
          "fromTo does not need a duration"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "So2al 3la targets: GSAP kat-qbl selector string b7al querySelectorAll. Fker ch7al mn element ghadi y-t-anima ila kaynin bzaf b nafs l class.",
        "text": "The page has three elements with class \"item\". Which ones animate?",
        "code": "gsap.to(\".item\", { rotation: 45, duration: 1 });",
        "answers": [
          "Only the first .item",
          "Every element matching .item",
          "Only the last .item",
          "None — GSAP needs a DOM node, not a string"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "So2al 3la x w y: GSAP kay-trjmhom l transforms. Fker chnu hia l property dyal CSS li kat-mthl l movement b pixels.",
        "text": "What do x and y animate?",
        "code": "gsap.to(\".box\", { x: 100, y: -50, duration: 1 });",
        "answers": [
          "translateX / translateY in pixels",
          "margin-left / margin-top",
          "left / top in percent",
          "rotateX / rotateY in degrees"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al 3la default ease: GSAP 3 3andu ease li kay-t-sta3ml ila ma 7ddtich wa7ed. Fker wach l movement kay-bda b sor3a w kay-hbs b chouia wla l 3aks.",
        "text": "No ease is specified. Which ease does GSAP use by default?",
        "code": "gsap.to(\".box\", { x: 200, duration: 1 });",
        "answers": [
          "power1.out",
          "\"none\" (linear)",
          "power2.in",
          "elastic.out"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "So2al 3la gsap.set: had l method b7al to() walakin bla duration. Fker chnu kay-w9a3 melli ma kaynach animation.",
        "text": "What happens when this runs?",
        "code": "gsap.set(\".box\", { x: 100, opacity: 0.5 });",
        "answers": [
          "The box animates to these values over the default duration",
          "The values apply instantly, with no animation",
          "Nothing — set is not a GSAP method",
          "The box is removed from the DOM"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "So2al 3la onComplete: had l callback kat-t3yt melli l tween kamla. Fker imta kat-kmel l tween — 3la 7sab duration.",
        "text": "When does \"done\" print?",
        "code": "gsap.to(\".box\", {\n  x: 100,\n  rotation: 90,\n  duration: 1,\n  onComplete: () => console.log(\"done\")\n});",
        "answers": [
          "Immediately",
          "After 1 second, when the tween finishes",
          "Once per animated property",
          "Never — onComplete is invalid on to()"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "So2al 3la delay: had l property kat-2jl l bdia dyal l tween. Fker l far9 bin delay w duration.",
        "text": "When does the box start moving?",
        "code": "gsap.to(\".box\", { x: 100, duration: 1, delay: 0.5 });",
        "answers": [
          "Immediately",
          "0.5 seconds after the tween is created",
          "1 second after the tween is created",
          "Only after calling .play()"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "So2al 3la timeline: l tweens li kat-zidhom b tartib kay-l3bo wa7ed mn ba3d l akhor. Fker wach kay-bdaw f nafs l wa9t wla la.",
        "text": "How do the two tweens play?",
        "code": "const tl = gsap.timeline();\ntl.to(\".a\", { x: 100, duration: 1 });\ntl.to(\".b\", { x: 100, duration: 1 });",
        "answers": [
          "At the same time",
          ".b starts after .a finishes",
          ".a starts after .b finishes",
          "Only .a plays"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "So2al 3la position parameter: l symbol \"<\" kay3ni l bdia dyal l tween li 9blo. Fker fin ghadi y-bda .b 3la 7sab had l position.",
        "text": "What does the \"<\" position do?",
        "code": "tl.to(\".a\", { x: 100, duration: 1 });\ntl.to(\".b\", { x: 100, duration: 1 }, \"<\");",
        "answers": [
          "Starts .b when .a ends",
          "Starts .b at the same time .a starts",
          "Cancels .a",
          "Moves .b before .a in the DOM"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "So2al 3la \"-=0.5\": l minus kay3ni rja3 l wra mn l akhir. Fker ch7al ghadi ykoun l overlap bin l joj tweens.",
        "text": "When does .b start relative to .a?",
        "code": "tl.to(\".a\", { x: 100, duration: 1 });\ntl.to(\".b\", { x: 100, duration: 1 }, \"-=0.5\");",
        "answers": [
          "0.5s after .a ends",
          "0.5s before .a ends — the two overlap",
          "At the very start of the timeline",
          "0.5s after the timeline starts"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "So2al 3la stagger: had l property kat-frr9 l bdia bin l targets. M3a 4 cards, 7ssb ch7al mn gap kayn 9bl l akhira.",
        "text": "With 4 cards, when does the last card start?",
        "code": "gsap.to(\".card\", { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 });",
        "answers": [
          "At the same time as the first",
          "0.15s after the first starts",
          "0.45s after the first starts",
          "0.6s after the first starts"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "So2al 3la timeline defaults: l defaults kat-ttbeq 3la l tweens li ma 3andhomch l value sari7a. Fker .b 3andha duration sari7a wla la.",
        "text": "What duration does .b's tween use?",
        "code": "const tl = gsap.timeline({ defaults: { duration: 0.5, ease: \"power2.out\" } });\ntl.to(\".a\", { x: 100 });\ntl.to(\".b\", { x: 200, duration: 1 });",
        "answers": [
          "0.5",
          "1 — the explicit value wins over defaults",
          "1.5",
          "0"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al 3la repeat: -1: had l value l khasa kat3ni repeat bla 7doud. Fker m3a ease \"none\" kifach ghadi t-ban l rotation.",
        "text": "What happens?",
        "code": "gsap.to(\".spinner\", { rotation: 360, duration: 2, repeat: -1, ease: \"none\" });",
        "answers": [
          "It rotates once, then stops",
          "It rotates forever at a constant speed",
          "It rotates back and forth",
          "It throws — repeat must be positive"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al 3la yoyo: had l property kat-rdd l tween l wra melli kat-kmel, walakin khassha repeat. Fker l movement kamla mn l bdia l l nihaya.",
        "text": "Describe the motion.",
        "code": "gsap.to(\".box\", { x: 200, duration: 1, repeat: 1, yoyo: true });",
        "answers": [
          "Moves right 200px, jumps back, moves right again",
          "Moves right 200px, then smoothly returns to the start",
          "Moves right 400px in total",
          "Moves right 200px and stops"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al 3la paused: true: l tween kat-t-crea walakin ma kat-l3bch. Fker chnu khass dir bach t-khdmha.",
        "text": "The box never moves. Why?",
        "code": "const tween = gsap.to(\".box\", { x: 100, duration: 1, paused: true });",
        "answers": [
          "x is not an animatable property",
          "The tween is paused — call tween.play() to start it",
          "paused must be set after creation",
          "GSAP is not loaded"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "So2al 3la repeatDelay: had l pause kat-w9a3 bin l repeats. M3a repeat: 2, 7ssb ch7al mn marra kat-t3awd l animation w ch7al mn gap binathom.",
        "text": "How many 0.5s pauses occur in total?",
        "code": "gsap.to(\".box\", { x: 100, duration: 1, repeat: 2, repeatDelay: 0.5 });",
        "answers": [
          "0",
          "1",
          "2 — one pause between each repeat",
          "3"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al 3la killTweensOf: joj tweens 3la nafs l property dyal nafs l element kay-t-khasmo. Fker 3lach khass t-7bs l 9dima 9bl ma t-bda l jdida.",
        "text": "Why call killTweensOf before creating the second tween?",
        "code": "gsap.to(\".box\", { x: 500, duration: 5 });\n// ...later\ngsap.killTweensOf(\".box\");\ngsap.to(\".box\", { x: 100, duration: 1 });",
        "answers": [
          "To delete the element",
          "To stop the old tween so the two don't fight over x",
          "It is required before any second tween",
          "Only to free memory"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al 3la registerPlugin: ScrollTrigger plugin mnfsl 3la l core. Fker wach khass t-sjlo 9bl ma t-sta3mlo wla kay-khdm nichan.",
        "text": "Why is this line needed?",
        "code": "gsap.registerPlugin(ScrollTrigger);",
        "answers": [
          "ScrollTrigger is a separate plugin that must be registered before use",
          "It enables the GSAP core itself",
          "It is optional decoration",
          "It replaces the need to import gsap"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "So2al 3la start: \"top 80%\": l kelma l wla 3la l trigger, w tania 3la l viewport. Fker fin kay-wsl l top dyal .box melli kat-bda l animation.",
        "text": "When does the animation start?",
        "code": "gsap.to(\".box\", {\n  x: 200,\n  scrollTrigger: { trigger: \".box\", start: \"top 80%\" }\n});",
        "answers": [
          "When the page loads",
          "When the top of .box reaches 80% down the viewport",
          "After scrolling 80% of the page",
          "When the bottom of .box hits the top of the viewport"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al 3la toggleActions: l 4 values b tartib — onEnter, onLeave, onEnterBack, onLeaveBack. Fker ina wa7da kat-ttbeq melli kat-rja3 l fo9 fo9 l start.",
        "text": "You scroll past .box, then scroll back up above the start point. What happens?",
        "code": "scrollTrigger: {\n  trigger: \".box\",\n  start: \"top 80%\",\n  toggleActions: \"play none none reverse\"\n}",
        "answers": [
          "It plays again from the start",
          "Nothing happens",
          "It reverses back to the beginning",
          "It jumps to the end"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al 3la scrub: true: had l option kat-rbt l animation b l scroll nichan. Fker l far9 bin animation kat-l3b bo7dha w wa7da li l progress dyalha mrbot b scrollbar.",
        "text": "What does scrub: true do?",
        "code": "gsap.to(\".bar\", {\n  scaleX: 1,\n  ease: \"none\",\n  scrollTrigger: { trigger: \"body\", start: \"top top\", end: \"bottom bottom\", scrub: true }\n});",
        "answers": [
          "Plays the animation once when scrolled into view",
          "Links the tween's progress directly to the scrollbar position",
          "Delays the animation",
          "Disables the animation on mobile"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "So2al 3la toArray + forEach: tween wa7da 3la selector kat-partagi nafs l trigger. Fker 3lach kol card khassha trigger dyalha bo7dha.",
        "text": "Why loop with toArray instead of one tween on \".card\"?",
        "code": "gsap.utils.toArray(\".card\").forEach((card) => {\n  gsap.from(card, {\n    y: 60, opacity: 0,\n    scrollTrigger: { trigger: card, start: \"top 85%\" }\n  });\n});",
        "answers": [
          "It renders faster",
          "Each card gets its own trigger, so it animates when it enters the viewport",
          "toArray is required for from()",
          "One tween cannot target a class"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "So2al 3la once: true: had l option kat-khli l trigger y-tfire ghir marra wa7da. Fker chnu kay-w9a3 ila scrolliti l fo9 w rj3ti l t7t mn ba3d.",
        "text": "What does once: true change?",
        "code": "gsap.to(\".box\", {\n  x: 200,\n  scrollTrigger: { trigger: \".box\", start: \"top 80%\", once: true }\n});",
        "answers": [
          "The animation plays only the first time the trigger fires",
          "The tween runs only once per page load, ignoring scroll",
          "ScrollTrigger is removed from the page entirely",
          "The trigger fires twice instead of once"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al 3la pin: true: had l option kat-thbs l element f blasto w l page kat-scroll mn wrah. Fker chnu l visual effect li kat-chof.",
        "text": "What does pin: true do?",
        "code": "gsap.to(\".panel\", {\n  x: -500,\n  scrollTrigger: { trigger: \".panel\", start: \"top top\", end: \"+=500\", pin: true, scrub: true }\n});",
        "answers": [
          "Holds the trigger element fixed in place while the scroll animation plays",
          "Hides the element during scroll",
          "Locks the whole page scroll",
          "Makes the animation loop forever"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al 3la self.progress: had l value kat-mthl fin wslt f l trigger range. Fker l range li bin 0 w 1 wach kat3ni pixels wla nisba.",
        "text": "What values does self.progress log while scrolling?",
        "code": "ScrollTrigger.create({\n  trigger: \".box\",\n  start: \"top bottom\",\n  end: \"bottom top\",\n  onUpdate: (self) => console.log(self.progress)\n});",
        "answers": [
          "0 to 1 as you scroll through the trigger range",
          "The number of pixels scrolled",
          "Always 0",
          "The tween's duration in seconds"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al 3la markers: true: had l option kat-rssm khyot f l viewport. Fker imta kat-7taj tchof b 3inik fin kayn start w end.",
        "text": "What are markers for?",
        "code": "scrollTrigger: { trigger: \".box\", start: \"top 80%\", end: \"top 30%\", markers: true }",
        "answers": [
          "Styling the animation for production",
          "Debugging — they draw the start/end lines in the viewport",
          "Bookmarking code sections",
          "They are required for pin to work"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al 3la end m3a scrub: start w end kay-7ddo l range dyal l scroll. Fker fin kat-wsl l animation l 100% dyalha.",
        "text": "With scrub enabled, what does end define?",
        "code": "scrollTrigger: { trigger: \".box\", start: \"top 80%\", end: \"top 30%\", scrub: true }",
        "answers": [
          "When the animation reverses",
          "The scroll point where the tween reaches 100% progress",
          "The duration in seconds",
          "Which element gets animated"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al 3la useLayoutEffect: had l hook kay-khdm 9bl ma l browser y-rssm. Fker chnu ghadi y-chof l user ila l animation khdmat mn ba3d l paint.",
        "text": "Why is useLayoutEffect preferred over useEffect for GSAP animations?",
        "code": "useLayoutEffect(() => {\n  gsap.from(\".hero\", { y: 40, opacity: 0 });\n}, []);",
        "answers": [
          "It runs after the browser paints",
          "It runs before the browser paints, avoiding a flash of un-animated content",
          "GSAP only works inside it",
          "useEffect is deprecated in React 18"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "So2al 3la ctx.revert(): had l method kat-rjja3 kolchi l 7alto l 2aslia. Fker chnu khass y-w9a3 l l animations melli l component kay-t-unmounta.",
        "text": "What does ctx.revert() do in the cleanup?",
        "code": "useLayoutEffect(() => {\n  const ctx = gsap.context(() => {\n    gsap.to(\".box\", { x: 100 });\n  });\n  return () => ctx.revert();\n}, []);",
        "answers": [
          "Pauses all tweens but keeps their styles",
          "Reverts every animation and ScrollTrigger made in the context, restoring original styles",
          "Deletes the component from the DOM",
          "Reloads the page"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "So2al 3la scope f gsap.context: l scope kay-7dded fin kay-qllb 3la l selectors. Fker 3lach hadchi mohim ila 3andk joj instances mn nafs l component.",
        "text": "What does passing sectionRef as the scope do?",
        "code": "const sectionRef = useRef(null);\nuseLayoutEffect(() => {\n  const ctx = gsap.context(() => {\n    gsap.to(\".box\", { x: 100 });\n  }, sectionRef);\n  return () => ctx.revert();\n}, []);",
        "answers": [
          "Nothing — the second argument is ignored",
          "Limits the \".box\" selector to elements inside sectionRef",
          "Creates a new timeline automatically",
          "Speeds up the initial render"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al 3la useRef: l ref kat-3tik l DOM node nichan. Fker l far9 bin ma t-targeti b ref w b selector string 3am.",
        "text": "Why animate boxRef.current instead of the \".box\" selector?",
        "code": "const boxRef = useRef(null);\nuseLayoutEffect(() => {\n  gsap.to(boxRef.current, { x: 100 });\n});\nreturn <div ref={boxRef} className=\"box\" />;",
        "answers": [
          "Refs animate faster",
          "It targets exactly this component's element — safe when several instances exist",
          "GSAP cannot use selector strings",
          "React requires refs for all animations"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al 3la StrictMode: f dev, StrictMode kay-3awd y-khdm l effects joj marrat. Fker chnu ghadi y-w9a3 l l ScrollTriggers ila l cleanup ma rj3atch kolchi.",
        "text": "In React StrictMode (dev), effects run twice. What GSAP problem can this cause?",
        "code": "useLayoutEffect(() => {\n  gsap.to(\".box\", { scrollTrigger: { trigger: \".box\", start: \"top 80%\" }, x: 100 });\n}, []);",
        "answers": [
          "No problem at all",
          "Duplicate animations and ScrollTriggers if the effect has no reverting cleanup",
          "GSAP throws an error",
          "Tweens run at half speed"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al 3la timeline paused: l timeline kat-t-crea paused w kat-t-l3b mn ba3d b .play(). Fker 3lach ma khllinahach t-l3b nichan melli t-creat.",
        "text": "Why is the timeline created paused?",
        "code": "const tl = useRef(null);\nuseLayoutEffect(() => {\n  tl.current = gsap.timeline({ paused: true });\n  tl.current.to(\".menu\", { x: 0, duration: 0.5 });\n}, []);\nconst open = () => tl.current.play();",
        "answers": [
          "Paused timelines use less memory",
          "So the animation waits for the button click instead of playing on mount",
          "GSAP requires paused timelines in React",
          "It prevents component re-renders"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "So2al 3la cleanup dyal ScrollTrigger f React: l context kay-jm3 kolchi li t-crea ldakhl. Fker chnu kay-w9a3 l l ScrollTrigger melli l component kay-mchi.",
        "text": "What happens to the ScrollTrigger when the component unmounts?",
        "code": "useLayoutEffect(() => {\n  const ctx = gsap.context(() => {\n    gsap.to(\".box\", { x: 100, scrollTrigger: { trigger: \".box\", start: \"top 80%\" } });\n  });\n  return () => ctx.revert();\n}, []);",
        "answers": [
          "It keeps listening to scroll forever",
          "ctx.revert() kills it together with the tween",
          "It pauses automatically",
          "It throws an error"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "So2al 3la stagger m3a refs: stagger kat-khdm 3la ay list dyal targets. Fker kifach t-bdl l forEach b option wa7da f l tween.",
        "text": "What is the simpler equivalent of this loop?",
        "code": "itemsRef.current.forEach((el, i) => {\n  gsap.from(el, { y: 40, opacity: 0, delay: i * 0.1 });\n});",
        "answers": [
          "gsap.from(itemsRef.current, { y: 40, opacity: 0, stagger: 0.1 })",
          "A for loop with setTimeout",
          "One timeline per element",
          "It can only be done with CSS"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "So2al 3la re-creation: kol render li kay-3awd y-cree ScrollTrigger kay-zid wa7ed jdid. Fker chnu khass dir bach t-creeh ghir marra.",
        "text": "This component re-renders on every scroll event. What is the bug?",
        "code": "function Banner() {\n  ScrollTrigger.create({ trigger: \".banner\", start: \"top 80%\", onEnter: () => gsap.to(\".banner\", { y: 0 }) });\n  return <div className=\"banner\" />;\n}",
        "answers": [
          "ScrollTriggers pile up — create it once inside an effect with cleanup",
          "There is no bug",
          "GSAP automatically removes duplicates",
          "React batches the creations"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al 3la animation 3la 7sab state: l effect kay-t3awd kol ma open kat-tbdl. Fker chnu kay-w9a3 l l box melli t-clicki.",
        "text": "What does this do?",
        "code": "const [open, setOpen] = useState(false);\nconst boxRef = useRef(null);\nuseLayoutEffect(() => {\n  gsap.to(boxRef.current, { x: open ? 200 : 0, duration: 0.4 });\n}, [open]);",
        "answers": [
          "Animates the box in and out whenever open changes",
          "Runs only once on mount",
          "Causes an infinite render loop",
          "Nothing — x must be a string"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al 3la function-based values: l function ma kat-t7ssbch melli kat-ktb l code. Fker imta GSAP kay-3yt liha bach y-3rf l value.",
        "text": "When is the arrow function evaluated?",
        "code": "gsap.to(\".box\", { x: () => window.innerWidth / 2, duration: 1 });",
        "answers": [
          "Once when the file loads",
          "When the tween first plays (and again after invalidate())",
          "Never — functions are not valid values",
          "On every animation frame"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al 3la overwrite: \"auto\": joj tweens 3la nafs l property kay-t-khasmo. Fker chnu kat-dir \"auto\" l l tween l 9dima.",
        "text": "What does overwrite: \"auto\" do here?",
        "code": "gsap.to(\".box\", { x: 500, duration: 5 });\ngsap.to(\".box\", { x: 100, duration: 1, overwrite: \"auto\" });",
        "answers": [
          "Deletes the element",
          "Immediately kills the conflicting x tween so only the new one controls x",
          "Pauses the first tween",
          "Throws an error"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "So2al 3la nested timelines: add() kat-dkhl timeline wst timeline khra. Fker fin kat-t7t intro f l master.",
        "text": "What does master.add(intro) do?",
        "code": "const master = gsap.timeline();\nconst intro = gsap.timeline();\nintro.to(\".logo\", { opacity: 1, duration: 0.5 });\nmaster.add(intro);\nmaster.to(\".nav\", { y: 0, duration: 0.5 });",
        "answers": [
          "Copies intro's tweens into master",
          "Inserts the intro timeline as a child, playing before .nav's tween",
          "Plays intro immediately",
          "Merges the two timelines' defaults only"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al 3la keyframes: l array kat-mthl sequence dyal 7rakat. Fker wach kay-l3bo f nafs l wa9t wla wa7ed mn ba3d l akhor.",
        "text": "How do the keyframes play?",
        "code": "gsap.to(\".box\", { keyframes: [{ x: 100 }, { y: 100 }, { x: 0, y: 0 }], duration: 1 });",
        "answers": [
          "All three at the same time",
          "In sequence, one after another",
          "Only the first one plays",
          "In reverse order"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "So2al 3la timeScale: had l method kat-bdl sor3at l timeline. Fker chnu kay3ni 2 — wach l duration kat-tbdl wla l sor3a.",
        "text": "What is the effect of timeScale(2)?",
        "code": "const tl = gsap.timeline();\ntl.to(\".a\", { x: 100, duration: 1 });\ntl.to(\".b\", { x: 100, duration: 1 });\ntl.timeScale(2);",
        "answers": [
          "The timeline becomes twice as long",
          "The whole timeline plays twice as fast",
          "The timeline reverses",
          "The timeline pauses"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al 3la seek: had l method kat-7rk l playhead l wa9t mo3ayan. Fker wach seek kat-bdl l 7ala dyal paused wla kat-khliha.",
        "text": "What happens?",
        "code": "const tl = gsap.timeline();\ntl.to(\".a\", { x: 100, duration: 2 });\ntl.pause();\ntl.seek(1.5);",
        "answers": [
          "The playhead jumps to 1.5s and the timeline stays paused",
          "The timeline plays from 1.5s",
          "Seek is ignored while paused",
          "The timeline restarts from 0"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "So2al 3la gsap.matchMedia: had l API b7al matchMedia dyal CSS walakin l l animations. Fker chnu kay-w9a3 melli l screen kat-sghar w kat-khrj mn l condition.",
        "text": "What is gsap.matchMedia() for?",
        "code": "const mm = gsap.matchMedia();\nmm.add(\"(min-width: 768px)\", () => {\n  gsap.to(\".hero\", { x: 200, scrollTrigger: { trigger: \".hero\", scrub: true } });\n});",
        "answers": [
          "Matching media files like video",
          "Running different animations per breakpoint, with automatic cleanup when the query stops matching",
          "Playing background video",
          "It is deprecated — use CSS instead"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al 3la quickTo: mousemove kat-fire bzaf dyal l marrat f tania. Fker 3lach khass t-3awd t-sta3ml nafs l tween bla ma t-cree wa7ed jdid kol marra.",
        "text": "Why use quickTo instead of gsap.to inside the mousemove handler?",
        "code": "const xTo = gsap.quickTo(\".box\", \"x\", { duration: 0.4 });\nwindow.addEventListener(\"mousemove\", (e) => xTo(e.clientX));",
        "answers": [
          "It is shorter to type",
          "It reuses a single tween, which is far faster for high-frequency updates like mousemove",
          "It works without GSAP loaded",
          "It skips the animation and sets x instantly"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al 3la delayedCall: had l method b7al setTimeout dyal GSAP. Fker ch7al dyal l wa9t 9bl ma t-t3yt l function.",
        "text": "What does this do?",
        "code": "gsap.delayedCall(2, () => console.log(\"hi\"));",
        "answers": [
          "Logs \"hi\" after 2 seconds",
          "Logs \"hi\" immediately",
          "Delays every tween on the page",
          "Creates an empty timeline"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "So2al 3la onComplete dyal timeline: l callback dyal l timeline kat-t3yt melli l timeline kamla kat-kmel. Fker l far9 binha w bin onComplete dyal tween wa7da.",
        "text": "When does \"all done\" log?",
        "code": "const tl = gsap.timeline({ onComplete: () => console.log(\"all done\") });\ntl.to(\".a\", { x: 100, duration: 1 });\ntl.to(\".b\", { x: 100, duration: 1 });",
        "answers": [
          "After .a finishes",
          "After the whole timeline finishes",
          "After each tween finishes",
          "Immediately when the timeline is created"
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
        "explain_dr": "So2al 3la gsap.to: had l method kat-animi mn l 7ala l 7alia dyal l element l l values li 3titih. Fker x chnu kay3ni f GSAP, w duration b chnu kat-t7sab.",
        "text": "Que fait ce code ?",
        "code": "gsap.to(\".box\", { x: 100, duration: 1 });",
        "answers": [
          "Déplace .box de 100px vers la droite en 1 seconde",
          "Déplace .box de 100px instantanément",
          "Fait disparaître .box en fondu en 1 seconde",
          "Fait pivoter .box de 100 degrés en 1 seconde"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al 3la duration: GSAP kay-sta3ml wa7ed l unit mo3ayana l l wa9t. Fker wach hia milliseconds b7al setTimeout wla 7aja khra.",
        "text": "Combien de temps dure le fondu ?",
        "code": "gsap.to(\".box\", { opacity: 0, duration: 2 });",
        "answers": [
          "2 millisecondes",
          "2 secondes",
          "2 images",
          "Il ne se termine jamais"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al 3la gsap.from: had l method kat-bda mn l values li 3titih w kat-mchi l l 7ala l 7alia dyal l element. Fker fin ghadi y-sali l card.",
        "text": "Quel est l'état final de .card une fois l'animation jouée ?",
        "code": "gsap.from(\".card\", { y: 50, opacity: 0, duration: 0.8 });",
        "answers": [
          "Décalée de 50px vers le bas et invisible",
          "De retour à sa position naturelle, totalement visible",
          "Décalée de 50px vers le haut et invisible",
          "Réduite à zéro"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al 3la fromTo: had l method kat-7dded b dabt mnin kat-bda w fin kat-sali. Fker 3lach ghadi t-khtarha 3la to() ila l element tqdar ykoun t7rk mn 9bl.",
        "text": "Pourquoi utiliser fromTo ici plutôt que to() ?",
        "code": "gsap.fromTo(\".box\", { x: 0 }, { x: 200, duration: 1 });",
        "answers": [
          "C'est plus rapide que to()",
          "Cela force l'animation à toujours commencer à x: 0, même si la boîte a déjà été déplacée",
          "Cela anime deux éléments à la fois",
          "fromTo n'a pas besoin de durée"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "So2al 3la targets: GSAP kat-qbl selector string b7al querySelectorAll. Fker ch7al mn element ghadi y-t-anima ila kaynin bzaf b nafs l class.",
        "text": "La page contient trois éléments de classe « item ». Lesquels sont animés ?",
        "code": "gsap.to(\".item\", { rotation: 45, duration: 1 });",
        "answers": [
          "Seulement le premier .item",
          "Tous les éléments correspondant à .item",
          "Seulement le dernier .item",
          "Aucun — GSAP exige un nœud DOM, pas une chaîne"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "So2al 3la x w y: GSAP kay-trjmhom l transforms. Fker chnu hia l property dyal CSS li kat-mthl l movement b pixels.",
        "text": "Qu'animent x et y ?",
        "code": "gsap.to(\".box\", { x: 100, y: -50, duration: 1 });",
        "answers": [
          "translateX / translateY en pixels",
          "margin-left / margin-top",
          "left / top en pourcent",
          "rotateX / rotateY en degrés"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al 3la default ease: GSAP 3 3andu ease li kay-t-sta3ml ila ma 7ddtich wa7ed. Fker wach l movement kay-bda b sor3a w kay-hbs b chouia wla l 3aks.",
        "text": "Aucun ease n'est précisé. Quel ease GSAP utilise-t-il par défaut ?",
        "code": "gsap.to(\".box\", { x: 200, duration: 1 });",
        "answers": [
          "power1.out",
          "« none » (linéaire)",
          "power2.in",
          "elastic.out"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "So2al 3la gsap.set: had l method b7al to() walakin bla duration. Fker chnu kay-w9a3 melli ma kaynach animation.",
        "text": "Que se passe-t-il à l'exécution ?",
        "code": "gsap.set(\".box\", { x: 100, opacity: 0.5 });",
        "answers": [
          "La boîte s'anime vers ces valeurs sur la durée par défaut",
          "Les valeurs s'appliquent instantanément, sans animation",
          "Rien — set n'est pas une méthode GSAP",
          "La boîte est retirée du DOM"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "So2al 3la onComplete: had l callback kat-t3yt melli l tween kamla. Fker imta kat-kmel l tween — 3la 7sab duration.",
        "text": "Quand « done » s'affiche-t-il ?",
        "code": "gsap.to(\".box\", {\n  x: 100,\n  rotation: 90,\n  duration: 1,\n  onComplete: () => console.log(\"done\")\n});",
        "answers": [
          "Immédiatement",
          "Après 1 seconde, quand le tween se termine",
          "Une fois par propriété animée",
          "Jamais — onComplete est invalide sur to()"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "So2al 3la delay: had l property kat-2jl l bdia dyal l tween. Fker l far9 bin delay w duration.",
        "text": "Quand la boîte commence-t-elle à bouger ?",
        "code": "gsap.to(\".box\", { x: 100, duration: 1, delay: 0.5 });",
        "answers": [
          "Immédiatement",
          "0,5 seconde après la création du tween",
          "1 seconde après la création du tween",
          "Seulement après avoir appelé .play()"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "So2al 3la timeline: l tweens li kat-zidhom b tartib kay-l3bo wa7ed mn ba3d l akhor. Fker wach kay-bdaw f nafs l wa9t wla la.",
        "text": "Comment les deux tweens se jouent-ils ?",
        "code": "const tl = gsap.timeline();\ntl.to(\".a\", { x: 100, duration: 1 });\ntl.to(\".b\", { x: 100, duration: 1 });",
        "answers": [
          "En même temps",
          ".b démarre après la fin de .a",
          ".a démarre après la fin de .b",
          "Seul .a se joue"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "So2al 3la position parameter: l symbol \"<\" kay3ni l bdia dyal l tween li 9blo. Fker fin ghadi y-bda .b 3la 7sab had l position.",
        "text": "Que fait la position « < » ?",
        "code": "tl.to(\".a\", { x: 100, duration: 1 });\ntl.to(\".b\", { x: 100, duration: 1 }, \"<\");",
        "answers": [
          "Démarre .b à la fin de .a",
          "Démarre .b en même temps que .a",
          "Annule .a",
          "Déplace .b avant .a dans le DOM"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "So2al 3la \"-=0.5\": l minus kay3ni rja3 l wra mn l akhir. Fker ch7al ghadi ykoun l overlap bin l joj tweens.",
        "text": "Quand .b démarre-t-il par rapport à .a ?",
        "code": "tl.to(\".a\", { x: 100, duration: 1 });\ntl.to(\".b\", { x: 100, duration: 1 }, \"-=0.5\");",
        "answers": [
          "0,5 s après la fin de .a",
          "0,5 s avant la fin de .a — les deux se chevauchent",
          "Au tout début de la timeline",
          "0,5 s après le début de la timeline"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "So2al 3la stagger: had l property kat-frr9 l bdia bin l targets. M3a 4 cards, 7ssb ch7al mn gap kayn 9bl l akhira.",
        "text": "Avec 4 cartes, quand la dernière démarre-t-elle ?",
        "code": "gsap.to(\".card\", { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 });",
        "answers": [
          "En même temps que la première",
          "0,15 s après le début de la première",
          "0,45 s après le début de la première",
          "0,6 s après le début de la première"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "So2al 3la timeline defaults: l defaults kat-ttbeq 3la l tweens li ma 3andhomch l value sari7a. Fker .b 3andha duration sari7a wla la.",
        "text": "Quelle durée le tween de .b utilise-t-il ?",
        "code": "const tl = gsap.timeline({ defaults: { duration: 0.5, ease: \"power2.out\" } });\ntl.to(\".a\", { x: 100 });\ntl.to(\".b\", { x: 200, duration: 1 });",
        "answers": [
          "0,5",
          "1 — la valeur explicite l'emporte sur les défauts",
          "1,5",
          "0"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al 3la repeat: -1: had l value l khasa kat3ni repeat bla 7doud. Fker m3a ease \"none\" kifach ghadi t-ban l rotation.",
        "text": "Que se passe-t-il ?",
        "code": "gsap.to(\".spinner\", { rotation: 360, duration: 2, repeat: -1, ease: \"none\" });",
        "answers": [
          "Il tourne une fois, puis s'arrête",
          "Il tourne indéfiniment à vitesse constante",
          "Il tourne d'avant en arrière",
          "Erreur — repeat doit être positif"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al 3la yoyo: had l property kat-rdd l tween l wra melli kat-kmel, walakin khassha repeat. Fker l movement kamla mn l bdia l l nihaya.",
        "text": "Décrivez le mouvement.",
        "code": "gsap.to(\".box\", { x: 200, duration: 1, repeat: 1, yoyo: true });",
        "answers": [
          "Va 200px à droite, revient d'un coup, puis repart",
          "Se déplace de 200px vers la droite, puis revient en douceur au point de départ",
          "Parcourt 400px au total",
          "Va 200px à droite et s'arrête"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al 3la paused: true: l tween kat-t-crea walakin ma kat-l3bch. Fker chnu khass dir bach t-khdmha.",
        "text": "La boîte ne bouge jamais. Pourquoi ?",
        "code": "const tween = gsap.to(\".box\", { x: 100, duration: 1, paused: true });",
        "answers": [
          "x n'est pas une propriété animable",
          "Le tween est en pause — appelez tween.play() pour le démarrer",
          "paused doit être défini après la création",
          "GSAP n'est pas chargé"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "So2al 3la repeatDelay: had l pause kat-w9a3 bin l repeats. M3a repeat: 2, 7ssb ch7al mn marra kat-t3awd l animation w ch7al mn gap binathom.",
        "text": "Combien de pauses de 0,5 s ont lieu au total ?",
        "code": "gsap.to(\".box\", { x: 100, duration: 1, repeat: 2, repeatDelay: 0.5 });",
        "answers": [
          "0",
          "1",
          "2 — une pause entre chaque répétition",
          "3"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al 3la killTweensOf: joj tweens 3la nafs l property dyal nafs l element kay-t-khasmo. Fker 3lach khass t-7bs l 9dima 9bl ma t-bda l jdida.",
        "text": "Pourquoi appeler killTweensOf avant de créer le second tween ?",
        "code": "gsap.to(\".box\", { x: 500, duration: 5 });\n// ...plus tard\ngsap.killTweensOf(\".box\");\ngsap.to(\".box\", { x: 100, duration: 1 });",
        "answers": [
          "Pour supprimer l'élément",
          "Pour arrêter l'ancien tween afin que les deux ne se disputent pas x",
          "C'est obligatoire avant tout second tween",
          "Uniquement pour libérer de la mémoire"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al 3la registerPlugin: ScrollTrigger plugin mnfsl 3la l core. Fker wach khass t-sjlo 9bl ma t-sta3mlo wla kay-khdm nichan.",
        "text": "Pourquoi cette ligne est-elle nécessaire ?",
        "code": "gsap.registerPlugin(ScrollTrigger);",
        "answers": [
          "ScrollTrigger est un plugin séparé qui doit être enregistré avant usage",
          "Elle active le cœur de GSAP lui-même",
          "C'est une décoration optionnelle",
          "Elle remplace l'import de gsap"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "So2al 3la start: \"top 80%\": l kelma l wla 3la l trigger, w tania 3la l viewport. Fker fin kay-wsl l top dyal .box melli kat-bda l animation.",
        "text": "Quand l'animation démarre-t-elle ?",
        "code": "gsap.to(\".box\", {\n  x: 200,\n  scrollTrigger: { trigger: \".box\", start: \"top 80%\" }\n});",
        "answers": [
          "Au chargement de la page",
          "Quand le haut de .box atteint 80 % de la hauteur du viewport",
          "Après avoir défilé 80 % de la page",
          "Quand le bas de .box touche le haut du viewport"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al 3la toggleActions: l 4 values b tartib — onEnter, onLeave, onEnterBack, onLeaveBack. Fker ina wa7da kat-ttbeq melli kat-rja3 l fo9 fo9 l start.",
        "text": "Vous dépassez .box en défilant, puis remontez au-dessus du point de départ. Que se passe-t-il ?",
        "code": "scrollTrigger: {\n  trigger: \".box\",\n  start: \"top 80%\",\n  toggleActions: \"play none none reverse\"\n}",
        "answers": [
          "Elle rejoue depuis le début",
          "Rien ne se passe",
          "Elle revient en arrière jusqu'au début",
          "Elle saute à la fin"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al 3la scrub: true: had l option kat-rbt l animation b l scroll nichan. Fker l far9 bin animation kat-l3b bo7dha w wa7da li l progress dyalha mrbot b scrollbar.",
        "text": "Que fait scrub: true ?",
        "code": "gsap.to(\".bar\", {\n  scaleX: 1,\n  ease: \"none\",\n  scrollTrigger: { trigger: \"body\", start: \"top top\", end: \"bottom bottom\", scrub: true }\n});",
        "answers": [
          "Joue l'animation une fois à l'apparition",
          "Lie la progression du tween directement à la position de la barre de défilement",
          "Retarde l'animation",
          "Désactive l'animation sur mobile"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "So2al 3la toArray + forEach: tween wa7da 3la selector kat-partagi nafs l trigger. Fker 3lach kol card khassha trigger dyalha bo7dha.",
        "text": "Pourquoi boucler avec toArray plutôt qu'un seul tween sur « .card » ?",
        "code": "gsap.utils.toArray(\".card\").forEach((card) => {\n  gsap.from(card, {\n    y: 60, opacity: 0,\n    scrollTrigger: { trigger: card, start: \"top 85%\" }\n  });\n});",
        "answers": [
          "Le rendu est plus rapide",
          "Chaque carte a son propre déclencheur et s'anime à son entrée dans le viewport",
          "toArray est requis pour from()",
          "Un seul tween ne peut pas cibler une classe"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "So2al 3la once: true: had l option kat-khli l trigger y-tfire ghir marra wa7da. Fker chnu kay-w9a3 ila scrolliti l fo9 w rj3ti l t7t mn ba3d.",
        "text": "Que change once: true ?",
        "code": "gsap.to(\".box\", {\n  x: 200,\n  scrollTrigger: { trigger: \".box\", start: \"top 80%\", once: true }\n});",
        "answers": [
          "L'animation ne se joue que la première fois que le déclencheur se déclenche",
          "Le tween ne s'exécute qu'une fois par chargement de page, sans tenir compte du scroll",
          "ScrollTrigger est entièrement retiré de la page",
          "Le déclencheur se déclenche deux fois au lieu d'une"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al 3la pin: true: had l option kat-thbs l element f blasto w l page kat-scroll mn wrah. Fker chnu l visual effect li kat-chof.",
        "text": "Que fait pin: true ?",
        "code": "gsap.to(\".panel\", {\n  x: -500,\n  scrollTrigger: { trigger: \".panel\", start: \"top top\", end: \"+=500\", pin: true, scrub: true }\n});",
        "answers": [
          "Maintient l'élément déclencheur fixe pendant que l'animation de scroll se joue",
          "Cache l'élément pendant le défilement",
          "Verrouille tout le défilement de la page",
          "Fait boucler l'animation indéfiniment"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al 3la self.progress: had l value kat-mthl fin wslt f l trigger range. Fker l range li bin 0 w 1 wach kat3ni pixels wla nisba.",
        "text": "Quelles valeurs self.progress affiche-t-il pendant le défilement ?",
        "code": "ScrollTrigger.create({\n  trigger: \".box\",\n  start: \"top bottom\",\n  end: \"bottom top\",\n  onUpdate: (self) => console.log(self.progress)\n});",
        "answers": [
          "De 0 à 1 pendant la traversée de la zone du déclencheur",
          "Le nombre de pixels défilés",
          "Toujours 0",
          "La durée du tween en secondes"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al 3la markers: true: had l option kat-rssm khyot f l viewport. Fker imta kat-7taj tchof b 3inik fin kayn start w end.",
        "text": "À quoi servent les markers ?",
        "code": "scrollTrigger: { trigger: \".box\", start: \"top 80%\", end: \"top 30%\", markers: true }",
        "answers": [
          "À styliser l'animation pour la production",
          "Au débogage — ils dessinent les lignes de début/fin dans le viewport",
          "À marquer des sections de code",
          "Ils sont requis pour que pin fonctionne"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al 3la end m3a scrub: start w end kay-7ddo l range dyal l scroll. Fker fin kat-wsl l animation l 100% dyalha.",
        "text": "Avec scrub activé, que définit end ?",
        "code": "scrollTrigger: { trigger: \".box\", start: \"top 80%\", end: \"top 30%\", scrub: true }",
        "answers": [
          "Quand l'animation s'inverse",
          "Le point de défilement où le tween atteint 100 % de progression",
          "La durée en secondes",
          "L'élément à animer"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al 3la useLayoutEffect: had l hook kay-khdm 9bl ma l browser y-rssm. Fker chnu ghadi y-chof l user ila l animation khdmat mn ba3d l paint.",
        "text": "Pourquoi useLayoutEffect est-il préféré à useEffect pour les animations GSAP ?",
        "code": "useLayoutEffect(() => {\n  gsap.from(\".hero\", { y: 40, opacity: 0 });\n}, []);",
        "answers": [
          "Il s'exécute après le paint du navigateur",
          "Il s'exécute avant le paint du navigateur, évitant un flash de contenu non animé",
          "GSAP ne fonctionne qu'à l'intérieur",
          "useEffect est déprécié dans React 18"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "So2al 3la ctx.revert(): had l method kat-rjja3 kolchi l 7alto l 2aslia. Fker chnu khass y-w9a3 l l animations melli l component kay-t-unmounta.",
        "text": "Que fait ctx.revert() dans le nettoyage ?",
        "code": "useLayoutEffect(() => {\n  const ctx = gsap.context(() => {\n    gsap.to(\".box\", { x: 100 });\n  });\n  return () => ctx.revert();\n}, []);",
        "answers": [
          "Met tous les tweens en pause en gardant leurs styles",
          "Annule chaque animation et ScrollTrigger créés dans le contexte, restaurant les styles d'origine",
          "Supprime le composant du DOM",
          "Recharge la page"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "So2al 3la scope f gsap.context: l scope kay-7dded fin kay-qllb 3la l selectors. Fker 3lach hadchi mohim ila 3andk joj instances mn nafs l component.",
        "text": "Que fait le passage de sectionRef comme scope ?",
        "code": "const sectionRef = useRef(null);\nuseLayoutEffect(() => {\n  const ctx = gsap.context(() => {\n    gsap.to(\".box\", { x: 100 });\n  }, sectionRef);\n  return () => ctx.revert();\n}, []);",
        "answers": [
          "Rien — le second argument est ignoré",
          "Limite le sélecteur « .box » aux éléments à l'intérieur de sectionRef",
          "Crée automatiquement une nouvelle timeline",
          "Accélère le rendu initial"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al 3la useRef: l ref kat-3tik l DOM node nichan. Fker l far9 bin ma t-targeti b ref w b selector string 3am.",
        "text": "Pourquoi animer boxRef.current plutôt que le sélecteur « .box » ?",
        "code": "const boxRef = useRef(null);\nuseLayoutEffect(() => {\n  gsap.to(boxRef.current, { x: 100 });\n});\nreturn <div ref={boxRef} className=\"box\" />;",
        "answers": [
          "Les refs s'animent plus vite",
          "Cela cible exactement l'élément de ce composant — sûr quand plusieurs instances existent",
          "GSAP ne peut pas utiliser de chaînes de sélecteurs",
          "React exige des refs pour toute animation"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al 3la StrictMode: f dev, StrictMode kay-3awd y-khdm l effects joj marrat. Fker chnu ghadi y-w9a3 l l ScrollTriggers ila l cleanup ma rj3atch kolchi.",
        "text": "En React StrictMode (dev), les effets s'exécutent deux fois. Quel problème GSAP cela peut-il causer ?",
        "code": "useLayoutEffect(() => {\n  gsap.to(\".box\", { scrollTrigger: { trigger: \".box\", start: \"top 80%\" }, x: 100 });\n}, []);",
        "answers": [
          "Aucun problème",
          "Des animations et ScrollTriggers en double si l'effet n'a pas de nettoyage avec réversion",
          "GSAP lève une erreur",
          "Les tweens tournent à moitié vitesse"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al 3la timeline paused: l timeline kat-t-crea paused w kat-t-l3b mn ba3d b .play(). Fker 3lach ma khllinahach t-l3b nichan melli t-creat.",
        "text": "Pourquoi la timeline est-elle créée en pause ?",
        "code": "const tl = useRef(null);\nuseLayoutEffect(() => {\n  tl.current = gsap.timeline({ paused: true });\n  tl.current.to(\".menu\", { x: 0, duration: 0.5 });\n}, []);\nconst open = () => tl.current.play();",
        "answers": [
          "Les timelines en pause consomment moins de mémoire",
          "Pour que l'animation attende le clic sur le bouton au lieu de se jouer au montage",
          "GSAP exige des timelines en pause dans React",
          "Cela empêche les re-rendus du composant"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "So2al 3la cleanup dyal ScrollTrigger f React: l context kay-jm3 kolchi li t-crea ldakhl. Fker chnu kay-w9a3 l l ScrollTrigger melli l component kay-mchi.",
        "text": "Qu'advient-il du ScrollTrigger quand le composant se démonte ?",
        "code": "useLayoutEffect(() => {\n  const ctx = gsap.context(() => {\n    gsap.to(\".box\", { x: 100, scrollTrigger: { trigger: \".box\", start: \"top 80%\" } });\n  });\n  return () => ctx.revert();\n}, []);",
        "answers": [
          "Il continue d'écouter le scroll indéfiniment",
          "ctx.revert() le détruit avec le tween",
          "Il se met en pause automatiquement",
          "Il lève une erreur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "So2al 3la stagger m3a refs: stagger kat-khdm 3la ay list dyal targets. Fker kifach t-bdl l forEach b option wa7da f l tween.",
        "text": "Quel est l'équivalent plus simple de cette boucle ?",
        "code": "itemsRef.current.forEach((el, i) => {\n  gsap.from(el, { y: 40, opacity: 0, delay: i * 0.1 });\n});",
        "answers": [
          "gsap.from(itemsRef.current, { y: 40, opacity: 0, stagger: 0.1 })",
          "Une boucle for avec setTimeout",
          "Une timeline par élément",
          "C'est uniquement faisable en CSS"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "So2al 3la re-creation: kol render li kay-3awd y-cree ScrollTrigger kay-zid wa7ed jdid. Fker chnu khass dir bach t-creeh ghir marra.",
        "text": "Ce composant se re-rend à chaque événement de scroll. Quel est le bug ?",
        "code": "function Banner() {\n  ScrollTrigger.create({ trigger: \".banner\", start: \"top 80%\", onEnter: () => gsap.to(\".banner\", { y: 0 }) });\n  return <div className=\"banner\" />;\n}",
        "answers": [
          "Les ScrollTriggers s'accumulent — créez-le une fois dans un effet avec nettoyage",
          "Il n'y a aucun bug",
          "GSAP supprime automatiquement les doublons",
          "React regroupe les créations"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al 3la animation 3la 7sab state: l effect kay-t3awd kol ma open kat-tbdl. Fker chnu kay-w9a3 l l box melli t-clicki.",
        "text": "Que fait ce code ?",
        "code": "const [open, setOpen] = useState(false);\nconst boxRef = useRef(null);\nuseLayoutEffect(() => {\n  gsap.to(boxRef.current, { x: open ? 200 : 0, duration: 0.4 });\n}, [open]);",
        "answers": [
          "Anime la boîte à l'aller et au retour à chaque changement de open",
          "Ne s'exécute qu'une fois au montage",
          "Cause une boucle de rendu infinie",
          "Rien — x doit être une chaîne"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al 3la function-based values: l function ma kat-t7ssbch melli kat-ktb l code. Fker imta GSAP kay-3yt liha bach y-3rf l value.",
        "text": "Quand la fonction fléchée est-elle évaluée ?",
        "code": "gsap.to(\".box\", { x: () => window.innerWidth / 2, duration: 1 });",
        "answers": [
          "Une fois au chargement du fichier",
          "Quand le tween se joue pour la première fois (et après invalidate())",
          "Jamais — les fonctions ne sont pas des valeurs valides",
          "À chaque frame d'animation"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al 3la overwrite: \"auto\": joj tweens 3la nafs l property kay-t-khasmo. Fker chnu kat-dir \"auto\" l l tween l 9dima.",
        "text": "Que fait overwrite: « auto » ici ?",
        "code": "gsap.to(\".box\", { x: 500, duration: 5 });\ngsap.to(\".box\", { x: 100, duration: 1, overwrite: \"auto\" });",
        "answers": [
          "Supprime l'élément",
          "Tue immédiatement le tween x en conflit pour que seul le nouveau contrôle x",
          "Met le premier tween en pause",
          "Lève une erreur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "So2al 3la nested timelines: add() kat-dkhl timeline wst timeline khra. Fker fin kat-t7t intro f l master.",
        "text": "Que fait master.add(intro) ?",
        "code": "const master = gsap.timeline();\nconst intro = gsap.timeline();\nintro.to(\".logo\", { opacity: 1, duration: 0.5 });\nmaster.add(intro);\nmaster.to(\".nav\", { y: 0, duration: 0.5 });",
        "answers": [
          "Copie les tweens d'intro dans master",
          "Insère la timeline intro comme enfant, jouée avant le tween de .nav",
          "Joue intro immédiatement",
          "Fusionne uniquement les défauts des deux timelines"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al 3la keyframes: l array kat-mthl sequence dyal 7rakat. Fker wach kay-l3bo f nafs l wa9t wla wa7ed mn ba3d l akhor.",
        "text": "Comment les keyframes se jouent-elles ?",
        "code": "gsap.to(\".box\", { keyframes: [{ x: 100 }, { y: 100 }, { x: 0, y: 0 }], duration: 1 });",
        "answers": [
          "Les trois en même temps",
          "En séquence, l'une après l'autre",
          "Seule la première se joue",
          "En ordre inverse"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "So2al 3la timeScale: had l method kat-bdl sor3at l timeline. Fker chnu kay3ni 2 — wach l duration kat-tbdl wla l sor3a.",
        "text": "Quel est l'effet de timeScale(2) ?",
        "code": "const tl = gsap.timeline();\ntl.to(\".a\", { x: 100, duration: 1 });\ntl.to(\".b\", { x: 100, duration: 1 });\ntl.timeScale(2);",
        "answers": [
          "La timeline devient deux fois plus longue",
          "Toute la timeline se joue deux fois plus vite",
          "La timeline s'inverse",
          "La timeline se met en pause"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al 3la seek: had l method kat-7rk l playhead l wa9t mo3ayan. Fker wach seek kat-bdl l 7ala dyal paused wla kat-khliha.",
        "text": "Que se passe-t-il ?",
        "code": "const tl = gsap.timeline();\ntl.to(\".a\", { x: 100, duration: 2 });\ntl.pause();\ntl.seek(1.5);",
        "answers": [
          "La tête de lecture saute à 1,5 s et la timeline reste en pause",
          "La timeline se joue depuis 1,5 s",
          "Seek est ignoré en pause",
          "La timeline redémarre à 0"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "So2al 3la gsap.matchMedia: had l API b7al matchMedia dyal CSS walakin l l animations. Fker chnu kay-w9a3 melli l screen kat-sghar w kat-khrj mn l condition.",
        "text": "À quoi sert gsap.matchMedia() ?",
        "code": "const mm = gsap.matchMedia();\nmm.add(\"(min-width: 768px)\", () => {\n  gsap.to(\".hero\", { x: 200, scrollTrigger: { trigger: \".hero\", scrub: true } });\n});",
        "answers": [
          "À associer des fichiers médias comme la vidéo",
          "À exécuter des animations différentes par breakpoint, avec nettoyage automatique quand la requête ne correspond plus",
          "À lire une vidéo de fond",
          "Il est déprécié — utilisez CSS à la place"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al 3la quickTo: mousemove kat-fire bzaf dyal l marrat f tania. Fker 3lach khass t-3awd t-sta3ml nafs l tween bla ma t-cree wa7ed jdid kol marra.",
        "text": "Pourquoi utiliser quickTo plutôt que gsap.to dans le gestionnaire mousemove ?",
        "code": "const xTo = gsap.quickTo(\".box\", \"x\", { duration: 0.4 });\nwindow.addEventListener(\"mousemove\", (e) => xTo(e.clientX));",
        "answers": [
          "C'est plus court à écrire",
          "Il réutilise un seul tween, bien plus rapide pour les mises à jour à haute fréquence comme mousemove",
          "Il fonctionne sans GSAP chargé",
          "Il saute l'animation et définit x instantanément"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al 3la delayedCall: had l method b7al setTimeout dyal GSAP. Fker ch7al dyal l wa9t 9bl ma t-t3yt l function.",
        "text": "Que fait ce code ?",
        "code": "gsap.delayedCall(2, () => console.log(\"hi\"));",
        "answers": [
          "Affiche « hi » après 2 secondes",
          "Affiche « hi » immédiatement",
          "Retarde tous les tweens de la page",
          "Crée une timeline vide"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "So2al 3la onComplete dyal timeline: l callback dyal l timeline kat-t3yt melli l timeline kamla kat-kmel. Fker l far9 binha w bin onComplete dyal tween wa7da.",
        "text": "Quand « all done » s'affiche-t-il ?",
        "code": "const tl = gsap.timeline({ onComplete: () => console.log(\"all done\") });\ntl.to(\".a\", { x: 100, duration: 1 });\ntl.to(\".b\", { x: 100, duration: 1 });",
        "answers": [
          "Après la fin de .a",
          "Après la fin de toute la timeline",
          "Après la fin de chaque tween",
          "Immédiatement à la création de la timeline"
        ],
        "correct": 1,
        "selection": null
      }
    ]
  }
]
