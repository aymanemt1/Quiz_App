export const vueQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "{{ name }} f template: ref kay-t-unwrap automatiquement f template. Chno ghadi y-ban f <h1>?",
        "text": "What renders?",
        "code": "<script setup>\nimport { ref } from \"vue\";\nconst name = ref(\"Aymane\");\n</script>\n<template>\n  <h1>Hello {{ name }}</h1>\n</template>",
        "answers": ["Hello {{ name }}", "Hello ref(Aymane)", "Hello Aymane", "An error"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": ":href='url': l-colon kay-rbet l-attribute b expression. url ref, w f template kay-t-unwrap.",
        "text": "Where does the link point?",
        "code": "<script setup>\nimport { ref } from \"vue\";\nconst url = ref(\"https://vuejs.org\");\n</script>\n<template>\n  <a :href=\"url\">Docs</a>\n</template>",
        "answers": ["Nowhere", "https://vuejs.org", "The literal text url", "An error"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "@click='count++': template kay-9bel expressions; count ref kay-t-unwrap w kay-t-incrementa b click.",
        "text": "After one click, what does the button show?",
        "code": "<script setup>\nimport { ref } from \"vue\";\nconst count = ref(0);\n</script>\n<template>\n  <button @click=\"count++\">{{ count }}</button>\n</template>",
        "answers": ["1", "0", "count++", "NaN"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "v-if='show' b show = true: l-element kay-t-rendera 3adi.",
        "text": "What renders?",
        "code": "<script setup>\nimport { ref } from \"vue\";\nconst show = ref(true);\n</script>\n<template>\n  <p v-if=\"show\">Visible</p>\n</template>",
        "answers": ["Nothing", "true", "show", "Visible"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "v-for 3la items: kol item kay-creyi <li>. :key='item' kat-3awen l-reconciliation.",
        "text": "What renders?",
        "code": "<script setup>\nimport { ref } from \"vue\";\nconst items = ref([\"a\", \"b\", \"c\"]);\n</script>\n<template>\n  <ul>\n    <li v-for=\"item in items\" :key=\"item\">{{ item }}</li>\n  </ul>\n</template>",
        "answers": ["An empty list", "Three items: a, b, c", "[a, b, c] as text", "An error"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "v-model: two-way binding bin l-input w text. L-paragraphe kay-affichi nafs li t-ktb f l-input.",
        "text": "The user types hi. What does the paragraph show?",
        "code": "<script setup>\nimport { ref } from \"vue\";\nconst text = ref(\"\");\n</script>\n<template>\n  <input v-model=\"text\" />\n  <p>{{ text }}</p>\n</template>",
        "answers": ["hi", "Nothing", "", "An error"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "{{ double(21) }}: functions mkhadamin f template expressions. double kat-dreb f 2.",
        "text": "What does the paragraph show?",
        "code": "<script setup>\nfunction double(n) { return n * 2; }\n</script>\n<template>\n  <p>{{ double(21) }}</p>\n</template>",
        "answers": ["double(21)", "21", "42", "NaN"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": ":class='{ active: isActive }': object syntax - l-class kat-t-applika mli l-valeur dyalha truthy.",
        "text": "Which class is applied to the paragraph?",
        "code": "<script setup>\nimport { ref } from \"vue\";\nconst isActive = ref(true);\n</script>\n<template>\n  <p :class=\"{ active: isActive }\">Hi</p>\n</template>",
        "answers": ["none", "active", "isActive", "true"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "v-show='false': l-element kay-b9a f DOM (display: none), machi bhal v-if li kay-7iydo men DOM.",
        "text": "Is the paragraph in the DOM?",
        "code": "<template>\n  <p v-show=\"false\">Hidden</p>\n</template>",
        "answers": ["Yes, with display: none", "No", "Yes, visible", "An error"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "reactive object: state.count reactive, @click kay-zido. L-template kay-update automatiquement.",
        "text": "After one click, what does the button show?",
        "code": "<script setup>\nimport { reactive } from \"vue\";\nconst state = reactive({ count: 0 });\n</script>\n<template>\n  <button @click=\"state.count++\">{{ state.count }}</button>\n</template>",
        "answers": ["0", "NaN", "An error", "1"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "F script (machi template), ref khaso .value bach t-wsal l-valeur w t-badelha. Chno hiya l-syntax s7i7a?",
        "text": "Which line correctly increments the ref? (const count = ref(0);)",
        "answers": ["count.value++", "count = count + 1", "count++", "count.set(count + 1)"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "Destructuring reactive: const { count } = state kay-fek l-reactivity. count++ ma ghadi-ch y-update state.count.",
        "text": "Does the paragraph update?",
        "code": "<script setup>\nimport { reactive } from \"vue\";\nconst state = reactive({ count: 0 });\nconst { count } = state;\ncount++;\n</script>\n<template><p>{{ state.count }}</p></template>",
        "answers": ["Yes", "It shows NaN", "No", "An error"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "Bla :key, Vue kay-sta3mel in-place patch: l-reconciliation ma-mzyanach w ghadi y-warningi.",
        "text": "The :key is missing. What will Vue do?",
        "code": "<li v-for=\"item in items\">{{ item }}</li>",
        "answers": ["It crashes", "Log a warning; it still renders", "It skips the list", "Nothing at all"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "computed: doubled = count.value * 2. F template, computed kay-t-unwrap automatiquement.",
        "text": "What does the paragraph show?",
        "code": "<script setup>\nimport { ref, computed } from \"vue\";\nconst count = ref(2);\nconst doubled = computed(() => count.value * 2);\n</script>\n<template><p>{{ doubled }}</p></template>",
        "answers": ["0", "2", "undefined", "4"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "computed lazy w cached: l-getter kay-t3awed ghir mli wa7da men dependencies t-t-badel.",
        "text": "When does the getter re-run?",
        "code": "const fullName = computed(() => first.value + \" \" + last.value);",
        "answers": ["On every render", "Only when first or last changes", "Once", "Never"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "v-else khaso y-kon direct mor v-if: <span> wastathom kay-keser l-chaine dyalhom.",
        "text": "What is wrong here?",
        "code": "<p v-if=\"ok\">Yes</p>\n<span>middle</span>\n<p v-else>No</p>",
        "answers": ["v-else must immediately follow v-if", "Nothing", "v-else needs a key", "ok must be a ref"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "Props readonly: ma t9derch t-modifihom men l-child. Vue ghadi y-warningi 3la l-m7awala.",
        "text": "What happens?",
        "code": "<script setup>\nconst props = defineProps([\"title\"]);\nprops.title = \"changed\";\n</script>",
        "answers": ["It works fine", "The parent updates", "Vue warns: props are readonly", "An error"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "$emit('select', 5): l-parent kay-9bel l-argument li t-emitta. onSelect ghadi y-ched chno?",
        "text": "What does the parent's onSelect receive?",
        "code": "<!-- child -->\n<button @click=\"$emit('select', 5)\">Pick</button>\n<!-- parent: <Child @select=\"onSelect\" /> -->",
        "answers": ["Nothing", "5", "The button element", "The child component"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "v-model.trim: kay-7iyed les espaces men l-wwel w l-kher 9bel ma y-7et l-valeur f text.",
        "text": "What is stored in text? (user types \"  hi  \" with spaces)",
        "code": "<input v-model.trim=\"text\" />",
        "answers": ["\"  hi  \"", "hi with a warning", "", "hi"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "ref dyal object: f template, ref kay-t-unwrap. user.name ghadi y-ban chno?",
        "text": "What renders?",
        "code": "<script setup>\nimport { ref } from \"vue\";\nconst user = ref({ name: \"Sara\" });\n</script>\n<template><p>{{ user.name }}</p></template>",
        "answers": ["Sara", "[object Object]", "undefined", "An error: use .value"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "watch(source, cb): cb(newVal, oldVal). count tbadel men 0 l 5: chno les deux valeurs?",
        "text": "What is logged?",
        "code": "<script setup>\nimport { ref, watch } from \"vue\";\nconst count = ref(0);\nwatch(count, (newVal, oldVal) => {\n  console.log(newVal, oldVal);\n});\ncount.value = 5;\n</script>",
        "answers": ["0 5", "5 0", "5", "Nothing"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "watchEffect kay-run l-wwel merra direct, w men be3d kol merra dependency t-t-badel. Chhal men log total ghadi y-kon?",
        "text": "What is logged?",
        "code": "<script setup>\nimport { ref, watchEffect } from \"vue\";\nconst n = ref(1);\nwatchEffect(() => console.log(\"n is\", n.value));\nn.value = 2;\n</script>",
        "answers": ["n is 1 then n is 2", "n is 1", "n is 2", "Nothing"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "watch 3la reactive object: deep b default. user.name tbadel = l-callback ghadi t-triggera.",
        "text": "Does it log changed?",
        "code": "<script setup>\nimport { reactive, watch } from \"vue\";\nconst user = reactive({ name: \"Ali\" });\nwatch(user, () => console.log(\"changed\"));\nuser.name = \"Sara\";\n</script>",
        "answers": ["No: needs deep: true", "No: user is not a ref", "Yes", "An error"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "onMounted kay-run mli l-component t-mounta f DOM.",
        "text": "When does this run?",
        "code": "<script setup>\nimport { onMounted } from \"vue\";\nonMounted(() => console.log(\"mounted\"));\n</script>",
        "answers": ["Before the template compiles", "After the component is inserted into the DOM", "On every update", "Never in <script setup>"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "DOM updates async: console.log wa9t l-click kay-9ra l-valeur l-9dima, 7it Vue ma update-ach DOM l-db.",
        "text": "add() runs once. What is logged: the old or the new value?",
        "code": "<script setup>\nimport { ref } from \"vue\";\nconst count = ref(0);\nfunction add() {\n  count.value++;\n  console.log(document.querySelector(\"p\").textContent);\n}\n</script>\n<template><p>{{ count }}</p></template>",
        "answers": ["The new value", "undefined", "An error", "The old value"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "toRefs kay-7afed l-reactivity: a howa ref marbot b state. a.value++ ghadi y-badel state.a.",
        "text": "What is state.a now?",
        "code": "<script setup>\nimport { reactive, toRefs } from \"vue\";\nconst state = reactive({ a: 1, b: 2 });\nconst { a, b } = toRefs(state);\na.value++;\n</script>",
        "answers": ["1", "2", "undefined", "An error"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "default: 'hi' kay-t-sta3mel mli l-prop ma t-3tatch. <Comp /> bla msg ghadi y-ched chno?",
        "text": "What is props.msg? (used as <Comp />)",
        "code": "<script setup>\nconst props = defineProps({\n  msg: { type: String, default: \"hi\" }\n});\n</script>",
        "answers": ["hi", "undefined", "null", "An error"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "v-for b (value, key): kay-iteri 3la les properties dyal l-object. Chno ghadi y-ban l kol property?",
        "text": "What renders?",
        "code": "<script setup>\nimport { reactive } from \"vue\";\nconst user = reactive({ name: \"Ali\", age: 20 });\n</script>\n<template>\n  <li v-for=\"(value, key) in user\" :key=\"key\">{{ key }}: {{ value }}</li>\n</template>",
        "answers": ["Ali: name and 20: age", "Nothing", "name: Ali and age: 20", "An error"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "Bla colon, title='post.title' string literal: l-prop ghadi t-wsalha 'post.title' k text, machi l-valeur dyalha.",
        "text": "Without the colon, what does the title prop receive?",
        "code": "<!-- instead of <BlogPost :title=\"post.title\" /> -->\n<BlogPost title=\"post.title\" />",
        "answers": ["The post's title value", "The literal string post.title", "undefined", "An error"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "watch b getter () => state.count: l-callback kay-t-triggera mli l-valeur t-t-badel. state.count wlat 3.",
        "text": "What is logged?",
        "code": "<script setup>\nimport { reactive, watch } from \"vue\";\nconst state = reactive({ count: 0 });\nwatch(() => state.count, (v) => console.log(v));\nstate.count = 3;\n</script>",
        "answers": ["0", "undefined", "Nothing", "3"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "reactive({ count }): ref wast reactive kay-t-unwrap. state.count = 5 f l-wwel, w l-assignment tanya kay-update count.value.",
        "text": "What is logged?",
        "code": "<script setup>\nimport { ref, reactive } from \"vue\";\nconst count = ref(5);\nconst state = reactive({ count });\nconsole.log(state.count);\nstate.count = 10;\nconsole.log(count.value);\n</script>",
        "answers": ["5 then 10", "5 then 5", "RefImpl then 10", "undefined then 10"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "shallowRef: ghir .value reactive, l-dakhel la. data.value.n = 2 ma ghadi-ch y-triggeri update f template.",
        "text": "After data.value.n = 2, does the template update?",
        "code": "<script setup>\nimport { shallowRef } from \"vue\";\nconst data = shallowRef({ n: 1 });\n</script>\n<template><p>{{ data.n }}</p></template>",
        "answers": ["Yes", "It shows NaN", "No", "An error"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "v-model default: prop modelValue + event update:modelValue. Chof l-code ldakhel dyal MyInput.",
        "text": "Which prop/event pair does v-model use by default? (<MyInput v-model=\"text\" />)",
        "code": "// inside MyInput:\n// defineProps([\"modelValue\"])\n// on input: $emit(\"update:modelValue\", value)",
        "answers": ["value / input", "modelValue / update:modelValue", "model / update", "text / change"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "v-model:title: prop title + event update:title. Nafs l-logique dyal v-model l-3adiya ghir b smiya mokhtalfa.",
        "text": "Which prop and event are used? (<MyInput v-model:title=\"t\" />)",
        "answers": ["title / input", "value / update:title", "modelValue / update:modelValue", "title / update:title"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "Lifecycle: l-child kay-t-mounta 9bel l-parent (children l-wwel, men be3d parent).",
        "text": "A parent renders a child. Which mounted hook runs first?",
        "answers": ["Parent's", "Child's", "Both at once", "Neither in <script setup>"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": ":key tbadel = component jdid: l-9dim kay-t-unmount w jdid kay-t-mount, w l-state l-dakhli kay-t-reset.",
        "text": "What happens to UserForm's internal state? (userId changes from 1 to 2)",
        "code": "<UserForm :key=\"userId\" />",
        "answers": ["Reset: a fresh mount", "Kept", "Merged", "An error"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "F Vue 3, v-if 3ndo priority 3la v-for 3la nafs l-element.",
        "text": "In Vue 3, which has higher priority on the same element?",
        "code": "<li v-for=\"item in items\" v-if=\"item.visible\" :key=\"item.id\">{{ item.name }}</li>",
        "answers": ["v-for", "It is an error", "v-if", "They run together"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "Fallthrough attributes: class w id li ma t-declariw-ch k props kay-mchiw l root element dyal l-child.",
        "text": "Where do class and id end up? (Parent: <Child class=\"big\" id=\"x\" />; child root is a div)",
        "answers": ["Nowhere", "On the child's root div", "On every child element", "An error"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "@click.once: l-handler kay-khdem ghir merra wa7da, men be3d kay-t-7iyed.",
        "text": "How many times can save run?",
        "code": "<button @click.once=\"save\">Save</button>",
        "answers": ["Unlimited", "Twice", "Zero", "Once"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "Prop validation: 'twenty' machi Number. Vue ghadi y-warningi (invalid prop type).",
        "text": "What happens? (used as <Comp age=\"twenty\" />)",
        "code": "<script setup>\nconst props = defineProps({ age: Number });\n</script>",
        "answers": ["It works", "Vue warns: invalid prop type", "An error", "age becomes 0"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "immediate: true: l-callback kay-run direct wa9t l-setup, 9bel ay changement.",
        "text": "When does cb first run?",
        "code": "<script setup>\nimport { ref, watch } from \"vue\";\nconst count = ref(0);\nwatch(count, () => console.log(\"cb\"), { immediate: true });\n</script>",
        "answers": ["Immediately during setup", "On first change", "Never", "On unmount"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "reactive Map: les collections mkhadamin f reactive. m.get('a') ghadi y-rje3 chno?",
        "text": "What renders?",
        "code": "<script setup>\nimport { reactive } from \"vue\";\nconst m = reactive(new Map());\nm.set(\"a\", 1);\n</script>\n<template><p>{{ m.get(\"a\") }}</p></template>",
        "answers": ["Nothing", "undefined", "1", "An error"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "bla defineExpose, <script setup> msdoud b default: l-parent ma y9derch y-wsal l secret b template ref.",
        "text": "Without defineExpose, can the parent access secret via the template ref?",
        "code": "<!-- child: const secret = ref(1); defineExpose({ secret }); -->\n<!-- parent: childRef.value.secret -->",
        "answers": ["Yes", "No", "Only in dev", "Only for refs"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "v-memo: l-subtree kay-t-re-render ghir mli value t-t-badel.",
        "text": "When does this subtree re-render?",
        "code": "<div v-memo=\"[value]\">\n  <ExpensiveTree />\n</div>",
        "answers": ["On every render", "Never", "Only on mount", "Only when value changes"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "Teleport to='body': l-div kay-t-7et f <body>, machi f blaset l-component f DOM.",
        "text": "Where is the modal div placed in the DOM?",
        "code": "<Teleport to=\"body\">\n  <div class=\"modal\">Hi</div>\n</Teleport>",
        "answers": ["Inside the component", "As a child of <body>", "In <head>", "Nowhere"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "provide/inject: descendant kay-ched l-valeur li 3taha ancestor.",
        "text": "What is theme in the descendant? (ancestor: provide(\"theme\", \"dark\"); descendant: inject(\"theme\"))",
        "answers": ["dark", "undefined", "The ancestor", "An error"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "readonly: l-modification ma mkhadmach. Vue ghadi y-warningi w l-valeur ma t-t-badelch.",
        "text": "What happens?",
        "code": "<script setup>\nimport { reactive, readonly } from \"vue\";\nconst state = readonly(reactive({ n: 1 }));\nstate.n = 2;\n</script>",
        "answers": ["n becomes 2", "An error is thrown", "Vue warns; n stays 1", "The app crashes"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "default dyal Object khaso y-kon function bach kol instance t-ched object jdid, ma y-partagiwch nafs reference.",
        "text": "Why is the default a function?",
        "code": "const props = defineProps({\n  config: { type: Object, default: () => ({}) }\n});",
        "answers": ["Required syntax", "Each instance gets its own object", "Performance", "It is optional"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "toRef kay-7afed l-reactivity: destructuring props kay-fekha. msg kay-b9a marbot b props.msg.",
        "text": "Why use toRef instead of const { msg } = props?",
        "code": "<script setup>\nconst props = defineProps([\"msg\"]);\nimport { toRef } from \"vue\";\nconst msg = toRef(props, \"msg\");\n</script>",
        "answers": ["No reason", "Faster", "It makes it a string", "It keeps reactivity with the prop"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "Template ref: el.value howa l-element <p> ba3d mount. tagName kay-rje3 smiyat l-element b majuscules.",
        "text": "What is logged?",
        "code": "<script setup>\nimport { ref, onMounted } from \"vue\";\nconst el = ref(null);\nonMounted(() => console.log(el.value.tagName));\n</script>\n<template><p ref=\"el\">Hi</p></template>",
        "answers": ["null", "P", "undefined", "An error"],
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
        "explain_dr": "{{ name }} f template: ref kay-t-unwrap automatiquement f template. Chno ghadi y-ban f <h1>?",
        "text": "Qu'est-ce qui s'affiche ?",
        "code": "<script setup>\nimport { ref } from \"vue\";\nconst name = ref(\"Aymane\");\n</script>\n<template>\n  <h1>Hello {{ name }}</h1>\n</template>",
        "answers": ["Hello {{ name }}", "Hello ref(Aymane)", "Hello Aymane", "Une erreur"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": ":href='url': l-colon kay-rbet l-attribute b expression. url ref, w f template kay-t-unwrap.",
        "text": "Vers où pointe le lien ?",
        "code": "<script setup>\nimport { ref } from \"vue\";\nconst url = ref(\"https://vuejs.org\");\n</script>\n<template>\n  <a :href=\"url\">Docs</a>\n</template>",
        "answers": ["Nulle part", "https://vuejs.org", "Le texte littéral url", "Une erreur"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "@click='count++': template kay-9bel expressions; count ref kay-t-unwrap w kay-t-incrementa b click.",
        "text": "Après un clic, qu'affiche le bouton ?",
        "code": "<script setup>\nimport { ref } from \"vue\";\nconst count = ref(0);\n</script>\n<template>\n  <button @click=\"count++\">{{ count }}</button>\n</template>",
        "answers": ["1", "0", "count++", "NaN"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "v-if='show' b show = true: l-element kay-t-rendera 3adi.",
        "text": "Qu'est-ce qui s'affiche ?",
        "code": "<script setup>\nimport { ref } from \"vue\";\nconst show = ref(true);\n</script>\n<template>\n  <p v-if=\"show\">Visible</p>\n</template>",
        "answers": ["Rien", "true", "show", "Visible"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "v-for 3la items: kol item kay-creyi <li>. :key='item' kat-3awen l-reconciliation.",
        "text": "Qu'est-ce qui s'affiche ?",
        "code": "<script setup>\nimport { ref } from \"vue\";\nconst items = ref([\"a\", \"b\", \"c\"]);\n</script>\n<template>\n  <ul>\n    <li v-for=\"item in items\" :key=\"item\">{{ item }}</li>\n  </ul>\n</template>",
        "answers": ["Une liste vide", "Trois éléments : a, b, c", "[a, b, c] en texte", "Une erreur"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "v-model: two-way binding bin l-input w text. L-paragraphe kay-affichi nafs li t-ktb f l-input.",
        "text": "L'utilisateur tape hi. Qu'affiche le paragraphe ?",
        "code": "<script setup>\nimport { ref } from \"vue\";\nconst text = ref(\"\");\n</script>\n<template>\n  <input v-model=\"text\" />\n  <p>{{ text }}</p>\n</template>",
        "answers": ["hi", "Rien", "", "Une erreur"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "{{ double(21) }}: functions mkhadamin f template expressions. double kat-dreb f 2.",
        "text": "Qu'affiche le paragraphe ?",
        "code": "<script setup>\nfunction double(n) { return n * 2; }\n</script>\n<template>\n  <p>{{ double(21) }}</p>\n</template>",
        "answers": ["double(21)", "21", "42", "NaN"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": ":class='{ active: isActive }': object syntax - l-class kat-t-applika mli l-valeur dyalha truthy.",
        "text": "Quelle classe est appliquée au paragraphe ?",
        "code": "<script setup>\nimport { ref } from \"vue\";\nconst isActive = ref(true);\n</script>\n<template>\n  <p :class=\"{ active: isActive }\">Hi</p>\n</template>",
        "answers": ["aucune", "active", "isActive", "true"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "v-show='false': l-element kay-b9a f DOM (display: none), machi bhal v-if li kay-7iydo men DOM.",
        "text": "Le paragraphe est-il dans le DOM ?",
        "code": "<template>\n  <p v-show=\"false\">Hidden</p>\n</template>",
        "answers": ["Oui, avec display: none", "Non", "Oui, visible", "Une erreur"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "reactive object: state.count reactive, @click kay-zido. L-template kay-update automatiquement.",
        "text": "Après un clic, qu'affiche le bouton ?",
        "code": "<script setup>\nimport { reactive } from \"vue\";\nconst state = reactive({ count: 0 });\n</script>\n<template>\n  <button @click=\"state.count++\">{{ state.count }}</button>\n</template>",
        "answers": ["0", "NaN", "Une erreur", "1"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "F script (machi template), ref khaso .value bach t-wsal l-valeur w t-badelha. Chno hiya l-syntax s7i7a?",
        "text": "Quelle ligne incrémente correctement la ref ? (const count = ref(0);)",
        "answers": ["count.value++", "count = count + 1", "count++", "count.set(count + 1)"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "Destructuring reactive: const { count } = state kay-fek l-reactivity. count++ ma ghadi-ch y-update state.count.",
        "text": "Le paragraphe se met-il à jour ?",
        "code": "<script setup>\nimport { reactive } from \"vue\";\nconst state = reactive({ count: 0 });\nconst { count } = state;\ncount++;\n</script>\n<template><p>{{ state.count }}</p></template>",
        "answers": ["Oui", "Il affiche NaN", "Non", "Une erreur"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "Bla :key, Vue kay-sta3mel in-place patch: l-reconciliation ma-mzyanach w ghadi y-warningi.",
        "text": "La :key manque. Que va faire Vue ?",
        "code": "<li v-for=\"item in items\">{{ item }}</li>",
        "answers": ["Il plante", "Il logge un avertissement ; ça s'affiche quand même", "Il saute la liste", "Rien du tout"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "computed: doubled = count.value * 2. F template, computed kay-t-unwrap automatiquement.",
        "text": "Qu'affiche le paragraphe ?",
        "code": "<script setup>\nimport { ref, computed } from \"vue\";\nconst count = ref(2);\nconst doubled = computed(() => count.value * 2);\n</script>\n<template><p>{{ doubled }}</p></template>",
        "answers": ["0", "2", "undefined", "4"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "computed lazy w cached: l-getter kay-t3awed ghir mli wa7da men dependencies t-t-badel.",
        "text": "Quand le getter se réexécute-t-il ?",
        "code": "const fullName = computed(() => first.value + \" \" + last.value);",
        "answers": ["À chaque rendu", "Seulement quand first ou last change", "Une fois", "Jamais"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "v-else khaso y-kon direct mor v-if: <span> wastathom kay-keser l-chaine dyalhom.",
        "text": "Quel est le problème ici ?",
        "code": "<p v-if=\"ok\">Yes</p>\n<span>middle</span>\n<p v-else>No</p>",
        "answers": ["v-else doit suivre immédiatement v-if", "Rien", "v-else a besoin d'une key", "ok doit être une ref"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "Props readonly: ma t9derch t-modifihom men l-child. Vue ghadi y-warningi 3la l-m7awala.",
        "text": "Que se passe-t-il ?",
        "code": "<script setup>\nconst props = defineProps([\"title\"]);\nprops.title = \"changed\";\n</script>",
        "answers": ["Ça marche", "Le parent se met à jour", "Vue avertit : les props sont readonly", "Une erreur"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "$emit('select', 5): l-parent kay-9bel l-argument li t-emitta. onSelect ghadi y-ched chno?",
        "text": "Que reçoit le onSelect du parent ?",
        "code": "<!-- enfant -->\n<button @click=\"$emit('select', 5)\">Pick</button>\n<!-- parent : <Child @select=\"onSelect\" /> -->",
        "answers": ["Rien", "5", "L'élément bouton", "Le composant enfant"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "v-model.trim: kay-7iyed les espaces men l-wwel w l-kher 9bel ma y-7et l-valeur f text.",
        "text": "Que contient text ? (l'utilisateur tape \"  hi  \" avec des espaces)",
        "code": "<input v-model.trim=\"text\" />",
        "answers": ["\"  hi  \"", "hi avec un avertissement", "", "hi"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "ref dyal object: f template, ref kay-t-unwrap. user.name ghadi y-ban chno?",
        "text": "Qu'est-ce qui s'affiche ?",
        "code": "<script setup>\nimport { ref } from \"vue\";\nconst user = ref({ name: \"Sara\" });\n</script>\n<template><p>{{ user.name }}</p></template>",
        "answers": ["Sara", "[object Object]", "undefined", "Une erreur : utiliser .value"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "watch(source, cb): cb(newVal, oldVal). count tbadel men 0 l 5: chno les deux valeurs?",
        "text": "Qu'est-ce qui est loggé ?",
        "code": "<script setup>\nimport { ref, watch } from \"vue\";\nconst count = ref(0);\nwatch(count, (newVal, oldVal) => {\n  console.log(newVal, oldVal);\n});\ncount.value = 5;\n</script>",
        "answers": ["0 5", "5 0", "5", "Rien"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "watchEffect kay-run l-wwel merra direct, w men be3d kol merra dependency t-t-badel. Chhal men log total ghadi y-kon?",
        "text": "Qu'est-ce qui est loggé ?",
        "code": "<script setup>\nimport { ref, watchEffect } from \"vue\";\nconst n = ref(1);\nwatchEffect(() => console.log(\"n is\", n.value));\nn.value = 2;\n</script>",
        "answers": ["n is 1 puis n is 2", "n is 1", "n is 2", "Rien"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "watch 3la reactive object: deep b default. user.name tbadel = l-callback ghadi t-triggera.",
        "text": "Est-ce que « changed » s'affiche ?",
        "code": "<script setup>\nimport { reactive, watch } from \"vue\";\nconst user = reactive({ name: \"Ali\" });\nwatch(user, () => console.log(\"changed\"));\nuser.name = \"Sara\";\n</script>",
        "answers": ["Non : il faut deep: true", "Non : user n'est pas une ref", "Oui", "Une erreur"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "onMounted kay-run mli l-component t-mounta f DOM.",
        "text": "Quand est-ce que ça s'exécute ?",
        "code": "<script setup>\nimport { onMounted } from \"vue\";\nonMounted(() => console.log(\"mounted\"));\n</script>",
        "answers": ["Avant la compilation du template", "Après l'insertion du composant dans le DOM", "À chaque mise à jour", "Jamais dans <script setup>"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "DOM updates async: console.log wa9t l-click kay-9ra l-valeur l-9dima, 7it Vue ma update-ach DOM l-db.",
        "text": "add() s'exécute une fois. Qu'est-ce qui est loggé : l'ancienne ou la nouvelle valeur ?",
        "code": "<script setup>\nimport { ref } from \"vue\";\nconst count = ref(0);\nfunction add() {\n  count.value++;\n  console.log(document.querySelector(\"p\").textContent);\n}\n</script>\n<template><p>{{ count }}</p></template>",
        "answers": ["La nouvelle valeur", "undefined", "Une erreur", "L'ancienne valeur"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "toRefs kay-7afed l-reactivity: a howa ref marbot b state. a.value++ ghadi y-badel state.a.",
        "text": "Combien vaut state.a maintenant ?",
        "code": "<script setup>\nimport { reactive, toRefs } from \"vue\";\nconst state = reactive({ a: 1, b: 2 });\nconst { a, b } = toRefs(state);\na.value++;\n</script>",
        "answers": ["1", "2", "undefined", "Une erreur"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "default: 'hi' kay-t-sta3mel mli l-prop ma t-3tatch. <Comp /> bla msg ghadi y-ched chno?",
        "text": "Que vaut props.msg ? (utilisé comme <Comp />)",
        "code": "<script setup>\nconst props = defineProps({\n  msg: { type: String, default: \"hi\" }\n});\n</script>",
        "answers": ["hi", "undefined", "null", "Une erreur"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "v-for b (value, key): kay-iteri 3la les properties dyal l-object. Chno ghadi y-ban l kol property?",
        "text": "Qu'est-ce qui s'affiche ?",
        "code": "<script setup>\nimport { reactive } from \"vue\";\nconst user = reactive({ name: \"Ali\", age: 20 });\n</script>\n<template>\n  <li v-for=\"(value, key) in user\" :key=\"key\">{{ key }}: {{ value }}</li>\n</template>",
        "answers": ["Ali: name et 20: age", "Rien", "name: Ali et age: 20", "Une erreur"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "Bla colon, title='post.title' string literal: l-prop ghadi t-wsalha 'post.title' k text, machi l-valeur dyalha.",
        "text": "Sans les deux-points, que reçoit la prop title ?",
        "code": "<!-- au lieu de <BlogPost :title=\"post.title\" /> -->\n<BlogPost title=\"post.title\" />",
        "answers": ["La valeur du titre du post", "La chaîne littérale post.title", "undefined", "Une erreur"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "watch b getter () => state.count: l-callback kay-t-triggera mli l-valeur t-t-badel. state.count wlat 3.",
        "text": "Qu'est-ce qui est loggé ?",
        "code": "<script setup>\nimport { reactive, watch } from \"vue\";\nconst state = reactive({ count: 0 });\nwatch(() => state.count, (v) => console.log(v));\nstate.count = 3;\n</script>",
        "answers": ["0", "undefined", "Rien", "3"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "reactive({ count }): ref wast reactive kay-t-unwrap. state.count = 5 f l-wwel, w l-assignment tanya kay-update count.value.",
        "text": "Qu'est-ce qui est loggé ?",
        "code": "<script setup>\nimport { ref, reactive } from \"vue\";\nconst count = ref(5);\nconst state = reactive({ count });\nconsole.log(state.count);\nstate.count = 10;\nconsole.log(count.value);\n</script>",
        "answers": ["5 puis 10", "5 puis 5", "RefImpl puis 10", "undefined puis 10"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "shallowRef: ghir .value reactive, l-dakhel la. data.value.n = 2 ma ghadi-ch y-triggeri update f template.",
        "text": "Après data.value.n = 2, le template se met-il à jour ?",
        "code": "<script setup>\nimport { shallowRef } from \"vue\";\nconst data = shallowRef({ n: 1 });\n</script>\n<template><p>{{ data.n }}</p></template>",
        "answers": ["Oui", "Il affiche NaN", "Non", "Une erreur"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "v-model default: prop modelValue + event update:modelValue. Chof l-code ldakhel dyal MyInput.",
        "text": "Quelle paire prop/événement v-model utilise-t-il par défaut ? (<MyInput v-model=\"text\" />)",
        "code": "// dans MyInput :\n// defineProps([\"modelValue\"])\n// sur input : $emit(\"update:modelValue\", value)",
        "answers": ["value / input", "modelValue / update:modelValue", "model / update", "text / change"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "v-model:title: prop title + event update:title. Nafs l-logique dyal v-model l-3adiya ghir b smiya mokhtalfa.",
        "text": "Quelle prop et quel événement sont utilisés ? (<MyInput v-model:title=\"t\" />)",
        "answers": ["title / input", "value / update:title", "modelValue / update:modelValue", "title / update:title"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "Lifecycle: l-child kay-t-mounta 9bel l-parent (children l-wwel, men be3d parent).",
        "text": "Un parent affiche un enfant. Quel hook mounted s'exécute en premier ?",
        "answers": ["Celui du parent", "Celui de l'enfant", "Les deux en même temps", "Aucun dans <script setup>"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": ":key tbadel = component jdid: l-9dim kay-t-unmount w jdid kay-t-mount, w l-state l-dakhli kay-t-reset.",
        "text": "Qu'arrive-t-il à l'état interne de UserForm ? (userId passe de 1 à 2)",
        "code": "<UserForm :key=\"userId\" />",
        "answers": ["Réinitialisé : nouveau montage", "Gardé", "Fusionné", "Une erreur"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "F Vue 3, v-if 3ndo priority 3la v-for 3la nafs l-element.",
        "text": "En Vue 3, lequel a la priorité sur le même élément ?",
        "code": "<li v-for=\"item in items\" v-if=\"item.visible\" :key=\"item.id\">{{ item.name }}</li>",
        "answers": ["v-for", "C'est une erreur", "v-if", "Ils s'exécutent ensemble"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "Fallthrough attributes: class w id li ma t-declariw-ch k props kay-mchiw l root element dyal l-child.",
        "text": "Où finissent class et id ? (Parent : <Child class=\"big\" id=\"x\" /> ; racine de l'enfant : une div)",
        "answers": ["Nulle part", "Sur la div racine de l'enfant", "Sur chaque élément enfant", "Une erreur"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "@click.once: l-handler kay-khdem ghir merra wa7da, men be3d kay-t-7iyed.",
        "text": "Combien de fois save peut-elle s'exécuter ?",
        "code": "<button @click.once=\"save\">Save</button>",
        "answers": ["Sans limite", "Deux fois", "Zéro", "Une fois"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "Prop validation: 'twenty' machi Number. Vue ghadi y-warningi (invalid prop type).",
        "text": "Que se passe-t-il ? (utilisé comme <Comp age=\"twenty\" />)",
        "code": "<script setup>\nconst props = defineProps({ age: Number });\n</script>",
        "answers": ["Ça marche", "Vue avertit : type de prop invalide", "Une erreur", "age devient 0"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "immediate: true: l-callback kay-run direct wa9t l-setup, 9bel ay changement.",
        "text": "Quand cb s'exécute-t-elle pour la première fois ?",
        "code": "<script setup>\nimport { ref, watch } from \"vue\";\nconst count = ref(0);\nwatch(count, () => console.log(\"cb\"), { immediate: true });\n</script>",
        "answers": ["Immédiatement pendant le setup", "Au premier changement", "Jamais", "Au démontage"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "reactive Map: les collections mkhadamin f reactive. m.get('a') ghadi y-rje3 chno?",
        "text": "Qu'est-ce qui s'affiche ?",
        "code": "<script setup>\nimport { reactive } from \"vue\";\nconst m = reactive(new Map());\nm.set(\"a\", 1);\n</script>\n<template><p>{{ m.get(\"a\") }}</p></template>",
        "answers": ["Rien", "undefined", "1", "Une erreur"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "bla defineExpose, <script setup> msdoud b default: l-parent ma y9derch y-wsal l secret b template ref.",
        "text": "Sans defineExpose, le parent peut-il accéder à secret via la template ref ?",
        "code": "<!-- enfant : const secret = ref(1); defineExpose({ secret }); -->\n<!-- parent : childRef.value.secret -->",
        "answers": ["Oui", "Non", "Seulement en dev", "Seulement pour les refs"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "v-memo: l-subtree kay-t-re-render ghir mli value t-t-badel.",
        "text": "Quand ce sous-arbre se re-rend-il ?",
        "code": "<div v-memo=\"[value]\">\n  <ExpensiveTree />\n</div>",
        "answers": ["À chaque rendu", "Jamais", "Seulement au montage", "Seulement quand value change"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "Teleport to='body': l-div kay-t-7et f <body>, machi f blaset l-component f DOM.",
        "text": "Où la div modal est-elle placée dans le DOM ?",
        "code": "<Teleport to=\"body\">\n  <div class=\"modal\">Hi</div>\n</Teleport>",
        "answers": ["Dans le composant", "Comme enfant de <body>", "Dans <head>", "Nulle part"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "provide/inject: descendant kay-ched l-valeur li 3taha ancestor.",
        "text": "Que vaut theme dans le descendant ? (ancêtre : provide(\"theme\", \"dark\") ; descendant : inject(\"theme\"))",
        "answers": ["dark", "undefined", "L'ancêtre", "Une erreur"],
        "correct": 0,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "readonly: l-modification ma mkhadmach. Vue ghadi y-warningi w l-valeur ma t-t-badelch.",
        "text": "Que se passe-t-il ?",
        "code": "<script setup>\nimport { reactive, readonly } from \"vue\";\nconst state = readonly(reactive({ n: 1 }));\nstate.n = 2;\n</script>",
        "answers": ["n devient 2", "Une erreur est levée", "Vue avertit ; n reste 1", "L'app plante"],
        "correct": 2,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "default dyal Object khaso y-kon function bach kol instance t-ched object jdid, ma y-partagiwch nafs reference.",
        "text": "Pourquoi le défaut est-il une fonction ?",
        "code": "const props = defineProps({\n  config: { type: Object, default: () => ({}) }\n});",
        "answers": ["Syntaxe requise", "Chaque instance a son propre objet", "Performance", "C'est optionnel"],
        "correct": 1,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "toRef kay-7afed l-reactivity: destructuring props kay-fekha. msg kay-b9a marbot b props.msg.",
        "text": "Pourquoi utiliser toRef au lieu de const { msg } = props ?",
        "code": "<script setup>\nconst props = defineProps([\"msg\"]);\nimport { toRef } from \"vue\";\nconst msg = toRef(props, \"msg\");\n</script>",
        "answers": ["Aucune raison", "Plus rapide", "Ça en fait une string", "Ça garde la réactivité avec la prop"],
        "correct": 3,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "Template ref: el.value howa l-element <p> ba3d mount. tagName kay-rje3 smiyat l-element b majuscules.",
        "text": "Qu'est-ce qui est loggé ?",
        "code": "<script setup>\nimport { ref, onMounted } from \"vue\";\nconst el = ref(null);\nonMounted(() => console.log(el.value.tagName));\n</script>\n<template><p ref=\"el\">Hi</p></template>",
        "answers": ["null", "P", "undefined", "Une erreur"],
        "correct": 1,
        "selection": null
      }
    ]
  }
];
