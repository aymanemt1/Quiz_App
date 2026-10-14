// True/False blitz statements: 4 per topic x 16 topics, EN + FR.
// statement: { id, topic, level, text, answer: true|false }

const S = (id, topic, level, en, fr, answer, dr) => ({ id, topic, level, en, fr, answer, explain_dr: dr });

const STATEMENTS = [
  // React
  S(0, "React", 1, "In React, state updates are always applied immediately and synchronously.", "En React, les mises à jour d'état sont toujours appliquées immédiatement et de façon synchrone.", false, "F React, melli kat3ayet l setState, tfekkar: wach React kaytabaq l update f nafs lwa9t b dabt, wla kayjma3hom w kaydirhom m3a b3diyathom?"),
  S(1, "React", 1, "Keys help React identify which items have changed in a list.", "Les clés (keys) aident React à identifier les éléments modifiés d'une liste.", true, "F list dyal components, React khaso chi tari9a bach ya3ref ina item tbedel w ina wa7ed b9a howa howa — tfekkar f chno kaytsta3mel l had l gharad."),
  S(2, "React", 2, "useEffect with an empty dependency array runs after every render.", "useEffect avec un tableau de dépendances vide s'exécute après chaque rendu.", false, "Dependency array dyal useEffect kay7added imta l effect kaytkhedem — tfekkar f l far9 bin array khawya w array fiha values."),
  S(3, "React", 1, "Props flow from parent components down to child components.", "Les props circulent des composants parents vers les composants enfants.", true, "Data flow f React 3ndo sens wa7ed — tfekkar: mnin katji l data l child component, mn parent wla mn child l parent?"),
  // Javascript
  S(4, "Javascript", 2, "typeof null returns 'object' in JavaScript.", "typeof null retourne 'object' en JavaScript.", true, "typeof katweli type dyal ay value — tfekkar chno kat3ti m3a null, hadi 7ala khasa w 9dima f JavaScript."),
  S(5, "Javascript", 2, "const makes the contents of an object immutable.", "const rend le contenu d'un objet immuable.", false, "const katmen3ek tbadel l variable nafso, walakin tfekkar: wach katmen3ek tbadel l mo7tawa li ldakhel, b7al properties dyal object?"),
  S(6, "Javascript", 2, "Arrow functions have their own this binding.", "Les fonctions fléchées ont leur propre liaison de this.", false, "this f JavaScript kaytkhelaf 7asab fin tkatbet l function — tfekkar chno kaydir l arrow function m3a this, wach katkhali nafso wla katjib wa7ed mn barra?"),
  S(7, "Javascript", 1, "=== compares both value and type without coercion.", "=== compare la valeur et le type sans coercition.", true, "F JavaScript kaynin joj mo9aranat: == w === — tfekkar chno l far9 binhom f type coercion."),
  // Typescript
  S(8, "Typescript", 1, "TypeScript code runs directly in the browser without compilation.", "Le code TypeScript s'exécute directement dans le navigateur sans compilation.", false, "Browser kayfhem ghir JavaScript — tfekkar wach TypeScript kay9der ykhdem nichan f browser, wla khaso chi mar7ala 9bel?"),
  S(9, "Typescript", 2, "unknown is a type-safe alternative to any.", "unknown est une alternative sûre à any.", true, "any w unknown bjojhom kay9eblo ay type — tfekkar chno l far9 binhom f salama, wach wa7ed fihom kayjberk tverifi l type 9bel ma tsta3mlo?"),
  S(10, "Typescript", 3, "Interfaces can be merged by declaring them twice with the same name.", "Les interfaces peuvent être fusionnées en les déclarant deux fois avec le même nom.", true, "Interfaces f TypeScript kaykhadmo b7al l3o9od dyal shapes — tfekkar: ila 3awedt 3erfti nafs l interface b nafs smiya, chno kaytra?"),
  S(11, "Typescript", 3, "With strictNullChecks, a string variable can hold null.", "Avec strictNullChecks, une variable string peut contenir null.", false, "strictNullChecks mode sarem bzf m3a null — tfekkar: f had l mode, wach string 3adiya kat9bel null, wla khask tzid chi 7aja l type?"),
  // VueJs
  S(12, "VueJs", 2, "Vue 3's Composition API is written inside setup() or <script setup>.", "La Composition API de Vue 3 s'écrit dans setup() ou <script setup>.", true, "Composition API hiya l tari9a l jdida bach tkteb logic f Vue 3 — tfekkar fin katkteb had l code, wach f blasa khasa?"),
  S(13, "VueJs", 2, "v-if and v-for should be used together on the same element.", "v-if et v-for doivent être utilisés ensemble sur le même élément.", false, "v-if w v-for bjojhom directives dyal rendering — tfekkar wach mezian tsta3melhom bjoj f nafs l element, wla hadi katdir mochkil f priority?"),
  S(14, "VueJs", 1, "In Vue, ref() values are accessed via .value in JavaScript.", "En Vue, on accède aux valeurs de ref() via .value en JavaScript.", true, "ref() katkhali value reactive f Vue — tfekkar kifach katwessel l l9ima mn code JavaScript, wach nichan wla b chi tari9a khasa?"),
  S(15, "VueJs", 3, "Vuex is the only official state management solution for Vue 3.", "Vuex est la seule solution officielle de gestion d'état pour Vue 3.", false, "Vue 3 3ndha official state management — tfekkar: wach Vuex bo7do li kayn, wla kayn chi 7al akhor rasmii tla3 m3a Vue 3?"),
  // Html
  S(16, "Html", 1, "The div element is an inline element by default.", "L'élément div est un élément inline par défaut.", false, "Block w inline joj anwa3 dyal display f HTML — tfekkar: div kay7tel satr kamel wla kaykteb 7da l3anaser lokhrin?"),
  S(17, "Html", 2, "An HTML page should contain only one main element.", "Une page HTML ne doit contenir qu'un seul élément main.", true, "main element 3ndo dawr semantique f page — tfekkar ch7al mn main khaso ykon f page wa7da 7asab l standards?"),
  S(18, "Html", 1, "alt attributes on images improve accessibility.", "Les attributs alt des images améliorent l'accessibilité.", true, "alt attribute katwsef image b ktaba — tfekkar chkon li kaystafed mn had l wesf, khososan nass li kayst3emlo screen readers."),
  S(19, "Html", 1, "br requires a closing tag.", "br nécessite une balise fermante.", false, "br mn l3anaser li kaytsemaw void elements — tfekkar: wach khaso closing tag b7al p w div, wla kaykhdem bo7do?"),
  // Css
  S(20, "Css", 2, "In the CSS box model, margin is inside the border.", "Dans le modèle de boîte CSS, la marge (margin) est à l'intérieur de la bordure.", false, "Box model f CSS fih layers: content, padding, border, margin — tfekkar l tartib dyalhom mn ldakhel l barra."),
  S(21, "Css", 1, "display: none removes an element from the layout flow.", "display: none retire un élément du flux de mise en page.", true, "display: none w visibility: hidden bjojhom kaykhefiw — tfekkar l far9: wa7ed kay7ayed l element mn layout kamel, tfekkar chno kaytra l l'espace dyalo."),
  S(22, "Css", 2, "IDs have higher specificity than classes in CSS.", "Les IDs ont une spécificité plus élevée que les classes en CSS.", true, "Specificity hiya li kat7ded ina style kayrba7 melli kaytnaza3o — tfekkar l tartib: id, class, w element, chkon 9wa?"),
  S(23, "Css", 3, "z-index works on statically positioned elements.", "z-index fonctionne sur les éléments en position statique.", false, "z-index kay7added l fo9ania f stacking — tfekkar: wach kaykhdem 3la ay element, wla khaso l element ykon 3ndo position mo3ayana?"),
  // Tailwind
  S(24, "Tailwind", 1, "Tailwind CSS is a utility-first CSS framework.", "Tailwind CSS est un framework CSS utilitaire (utility-first).", true, "Tailwind 3ndo falsafa mo3ayana f ktaba dyal CSS — tfekkar: wach katkteb classes jahzin f HTML, wla katkteb CSS yeddi b7al l3ada?"),
  S(25, "Tailwind", 2, "The md: prefix in Tailwind applies styles on mobile screens.", "Le préfixe md: de Tailwind applique les styles sur mobile.", false, "Prefixes b7al md: kay7addo imta style kaytkhedem 7asab 7ajm screen — tfekkar: md kat3ni mobile sghir wla screens kbar mn mobile?"),
  S(26, "Tailwind", 1, "Tailwind's flex class sets display: flex.", "La classe flex de Tailwind applique display: flex.", true, "flex class f Tailwind katbadel display dyal element — tfekkar chno display kat3ti, wach katkhali l children ytretbo b tari9a mo3ayana?"),
  S(27, "Tailwind", 1, "You must write custom CSS files to use Tailwind.", "Il faut écrire des fichiers CSS personnalisés pour utiliser Tailwind.", false, "Tailwind katkteb classes f HTML — tfekkar: wach darori tkteb CSS files b yeddik bach ykhdem, wla kaykfi ghir l classes?"),
  // NodeJs
  S(28, "NodeJs", 1, "Node.js runs JavaScript outside the browser using the V8 engine.", "Node.js exécute JavaScript hors navigateur grâce au moteur V8.", true, "Node.js kaykhali JavaScript ykhdem barra browser — tfekkar chno l engine li kaysta3mel bach y executa l code."),
  S(29, "NodeJs", 2, "Node.js is single-threaded and cannot handle concurrent requests.", "Node.js est mono-thread et ne peut pas gérer de requêtes concurrentes.", false, "Single-threaded ma kat3nich ma kay9derch ydir bzf l7wayej — tfekkar kifach Node.js kayt3amel m3a requests bzf f nafs lwa9t b event loop."),
  S(30, "NodeJs", 1, "require() is the CommonJS way to import modules.", "require() est la façon CommonJS d'importer des modules.", true, "Kayan joj systems dyal modules f JavaScript: CommonJS w ES modules — tfekkar ina syntax katsta3mel require()."),
  S(31, "NodeJs", 3, "The event loop blocks while waiting for file I/O.", "La boucle d'événements (event loop) se bloque en attendant les I/O fichiers.", false, "Event loop hiya l9elb dyal Node.js — tfekkar kifach kattsaraf m3a operations li katstana, b7al 9raya dyal files, wach katbloqui wla katkemel?"),
  // RestApi
  S(32, "RestApi", 1, "A GET request should not change server state.", "Une requête GET ne doit pas modifier l'état du serveur.", true, "HTTP methods 3ndhom ma3ani: GET l 9raya — tfekkar l 9a3ida: wach GET khaso ybedel 7aja f server wla ghir kayjib data?"),
  S(33, "RestApi", 2, "HTTP status 201 means the resource was created.", "Le statut HTTP 201 signifie que la ressource a été créée.", true, "Status codes kaygolo chno tra l request — tfekkar chno kat3ni 201, wach request nja7 wla chi 7aja tkhla9et?"),
  S(34, "RestApi", 3, "PUT and PATCH have exactly the same semantics.", "PUT et PATCH ont exactement la même sémantique.", false, "PUT w PATCH bjojhom l update — tfekkar l far9: wa7ed kaybedel resource kamla, w lakhor ghir chi joza2 menha."),
  S(35, "RestApi", 1, "REST APIs must always return XML.", "Les API REST doivent toujours retourner du XML.", false, "REST ma kayforedch format wa7ed dyal response — tfekkar chno l format li ghaliban kaytsta3mel lyom, wach XML darori?"),
  // Laravel
  S(36, "Laravel", 1, "Laravel's Eloquent is an ORM for database interaction.", "Eloquent de Laravel est un ORM pour interagir avec la base de données.", true, "Eloquent hiya tari9a dyal Laravel bach thder m3a database — tfekkar chno no3 had l outil, wach katkteb SQL b yeddik m3ah?"),
  S(37, "Laravel", 2, "Migrations modify the database schema in versioned steps.", "Les migrations modifient le schéma de base de données par étapes versionnées.", true, "Migrations b7al version control l database schema — tfekkar: wach katbedel schema b khatwat mortabin li kat9der trja3hom?"),
  S(38, "Laravel", 1, "Blade is Laravel's JavaScript framework.", "Blade est le framework JavaScript de Laravel.", false, "Blade hiya smiya katban bzf f Laravel — tfekkar chno naw3o: wach framework dyal JavaScript, wla 7aja khra khasa b Laravel?"),
  S(39, "Laravel", 2, "Laravel routes are defined in routes/web.php and routes/api.php.", "Les routes Laravel sont définies dans routes/web.php et routes/api.php.", true, "Routes f Laravel kat3ref fin kaymchi kol URL — tfekkar fin kaytketbo: wach f files mo3ayanin 7asab no3 l route?"),
  // Php
  S(40, "Php", 1, "PHP variables start with a $ sign.", "Les variables PHP commencent par le signe $.", true, "Variables f PHP 3ndhom 3alama momayaza f l bidaya — tfekkar chno had l 3alama li katfar9ehom 3la ba9i l code."),
  S(41, "Php", 3, "echo and print behave identically in every situation.", "echo et print se comportent exactement pareil dans tous les cas.", false, "echo w print bjojhom kaytab3o output — tfekkar: wach kaytsarfo b7al b7al dima, wla kayn far9 sghir binhom?"),
  S(42, "Php", 2, "PHP 8 introduced the match expression.", "PHP 8 a introduit l'expression match.", true, "PHP 8 jab bzf l jadid — tfekkar: match expression li katshbeh switch walakin b syntax 7ditha, f ina version banet?"),
  S(43, "Php", 2, "== in PHP never performs type juggling.", "== en PHP ne fait jamais de conversion de type implicite.", false, "== f PHP ma9arna motasahila — tfekkar wach katbedel types automatically 9bel ma t9aren, wla kat9arenhom kima homa?"),
  // Sql
  S(44, "Sql", 3, "WHERE filters rows before grouping; HAVING filters after.", "WHERE filtre les lignes avant le regroupement ; HAVING filtre après.", true, "WHERE w HAVING bjojhom kayfiltriw walakin f wa9t mokhtalef — tfekkar: wa7ed 9bel GROUP BY w lakhor morah, ina wa7ed fin?"),
  S(45, "Sql", 3, "COUNT(*) ignores NULL values.", "COUNT(*) ignore les valeurs NULL.", false, "COUNT(*) kat7seb rows — tfekkar wach kat7seb kolchi bla stitna2, wla katjhel rows li fihom NULL?"),
  S(46, "Sql", 1, "A primary key column can contain duplicate values.", "Une colonne clé primaire peut contenir des doublons.", false, "Primary key hiya l mo3aref l wa7id dyal kol row — tfekkar: wach l gharad menha ykheli nafs l9ima t3awed?"),
  S(47, "Sql", 1, "JOIN combines rows from two or more tables.", "JOIN combine les lignes de deux tables ou plus.", true, "JOIN katjma3 data mn tables mokhtalfin — tfekkar l gharad dyalo l asasi f queries li kat7taj data mn ktar mn table."),
  // MongoDb
  S(48, "MongoDb", 1, "MongoDB stores data in JSON-like documents.", "MongoDB stocke les données dans des documents de type JSON.", true, "MongoDB ma kaykhezench data f tables — tfekkar chno l we7da li kaykhezen fiha: documents li kayshbho l JSON."),
  S(49, "MongoDb", 2, "Every MongoDB document must have exactly the same fields.", "Chaque document MongoDB doit avoir exactement les mêmes champs.", false, "Schema flexible hiya miziya kbira dyal MongoDB — tfekkar: wach kol document majbur ykon 3ndo nafs l fields b dabt?"),
  S(50, "MongoDb", 1, "db.users.find() returns all documents in the users collection.", "db.users.find() retourne tous les documents de la collection users.", true, "find() hiya tari9a bach tjib documents — tfekkar chno katrja3 melli kat3ayet liha bla conditions."),
  S(51, "MongoDb", 1, "MongoDB is a relational database.", "MongoDB est une base de données relationnelle.", false, "Relational w NoSQL joj 3a2ilat dyal databases — tfekkar fin kayntami MongoDB: wach kaysta3mel tables w relations?"),
  // Git
  S(52, "Git", 1, "git pull fetches and merges remote changes.", "git pull récupère et fusionne les changements distants.", true, "git pull katjib akhir changes mn remote — tfekkar chno kaydir b dabt: wach ghir kayjibhom, wla kayjibhom w kaydemjhom m3a code dyalek?"),
  S(53, "Git", 2, "A merge conflict can only happen on binary files.", "Un conflit de fusion ne peut arriver que sur des fichiers binaires.", false, "Merge conflict kaytra melli joj nass bedlo nafs l blasa — tfekkar wach hadchi kaytra ghir m3a binary files wla 7ta m3a text files?"),
  S(54, "Git", 2, "git stash temporarily saves uncommitted changes.", "git stash sauvegarde temporairement les changements non commités.", true, "git stash b7al drawer kat7et fih khedmtek mo2a9atan — tfekkar chno kaydir b changes li mazal ma committitihomch."),
  S(55, "Git", 1, "Commits in Git are identified by sequential numbers.", "Les commits Git sont identifiés par des numéros séquentiels.", false, "Kol commit 3ndo identifier wa7ed — tfekkar chno shakl had l identifier: wach ra9m motasalsil b7al 1, 2, 3, wla 7aja khra?"),
  // Docker
  S(56, "Docker", 1, "A Docker image is a read-only template used to create containers.", "Une image Docker est un modèle en lecture seule pour créer des conteneurs.", true, "Image w container joj mafahim asasiyyn f Docker — tfekkar l 3ala9a binhom: image b7al template, tfekkar wach kat9der tbedlo mor ma tkhla9?"),
  S(57, "Docker", 2, "Containers share the host OS kernel.", "Les conteneurs partagent le noyau du système hôte.", true, "Containers khfaf 7it ma fihomch OS kamel — tfekkar chno kaypartagiw m3a host: wach kol wa7ed 3ndo kernel dyalo wla kaysta3mlo wa7ed?"),
  S(58, "Docker", 2, "docker-compose.yml defines multi-container applications.", "docker-compose.yml définit des applications multi-conteneurs.", true, "docker-compose.yml file katjma3 bzf l services — tfekkar chno l gharad dyalo: wach l ta3rif dyal application fiha ktar mn container?"),
  S(59, "Docker", 1, "Deleting a container also deletes its image.", "Supprimer un conteneur supprime aussi son image.", false, "Container kaykhdem mn image walakin homa 7wayej mokhtalfin — tfekkar: melli katmseh container, wach image li tkhla9 menha katmchi m3ah?"),
  // Supabase
  S(60, "Supabase", 1, "The anon key is safe to use in frontend code because Row Level Security still applies.", "La clé anon peut être utilisée dans le code frontend car Row Level Security s'applique toujours.", true, "Melli kat7et key f frontend, ay wa7ed y9der ychofha — tfekkar: wach kayn key m3mola khsisa l browser, w chno li kay7mi data wakha key tban?"),
  S(61, "Supabase", 2, "Enabling RLS on a table with no policies blocks all access to its rows.", "Activer RLS sur une table sans politiques bloque tout accès à ses lignes.", true, "RLS melli kat-enable-ih, default dyalo strict wla mfto7? tfekkar chno kaytra melli ma kayn 7ta policy."),
  S(62, "Supabase", 3, "The service_role key respects Row Level Security policies.", "La clé service_role respecte les politiques Row Level Security.", false, "service_role 3ndha power kbir — tfekkar wach RLS kay9der ywe9efha wla hiya katjewz kolchi?"),
  S(63, "Supabase", 2, "storage.getPublicUrl() makes a network request to check that the file exists.", "storage.getPublicUrl() effectue une requête réseau pour vérifier que le fichier existe.", false, "getPublicUrl katbni URL mn bucket + path — tfekkar wach khasha tsowel server 9bel wla kat7sebha ghir b 7sabha?"),
  // ExpressJs
  S(64, "ExpressJs", 1, "In Express, route parameters like :id are available on req.params as strings.", "En Express, les paramètres de route comme :id sont disponibles sur req.params sous forme de chaînes.", true, "Route params b7al :id kaytjibo mn URL path — tfekkar chnu type katrja3 Express l had l values, string wla number?"),
  S(65, "ExpressJs", 1, "Calling next() inside a middleware passes control to the next middleware or route handler.", "Appeler next() dans un middleware passe le contrôle au middleware ou gestionnaire de route suivant.", true, "Middleware chain katkhdem b tartib — tfekkar chnu l call li katkhali request idoz l li mn wrah."),
  S(66, "ExpressJs", 3, "An error-handling middleware in Express is recognized by having four parameters: (err, req, res, next).", "Un middleware de gestion d'erreur en Express se reconnaît à ses quatre paramètres : (err, req, res, next).", true, "Express kay3ref type dyal middleware mn 3adad arguments — tfekkar ch7al mn argument 3nd error handler w chnu howa lwl."),
  S(67, "ExpressJs", 3, "In Express 4, a rejected promise inside an async route handler is automatically caught and sent to the error handler.", "En Express 4, une promesse rejetée dans un gestionnaire de route async est automatiquement attrapée et envoyée au gestionnaire d'erreur.", false, "Async handlers w promises li kayfchlo — tfekkar wach Express 4 kaychddhom bo7do wla khask tdir 7aja b yeddek."),
  // Agile
  S(68, "Agile", 1, "The Product Owner is responsible for ordering the Product Backlog by value.", "Le Product Owner est responsable d'ordonner le Product Backlog par valeur.", true, "Product Backlog khaso wa7ed mas2ol 3la tartibo — tfekkar chkon li kay-mettel sot l client w kay-7ded chno l aham."),
  S(69, "Agile", 2, "Story points measure the exact number of hours a story will take.", "Les story points mesurent le nombre exact d'heures qu'une story prendra.", false, "Story points a7jam nisbya machi sa3at — tfekkar 3lach l teams kat-sta3melhom bach t-tfada ni9achat l wa9t l da9i9."),
  S(70, "Agile", 2, "The Daily Standup is a 15-minute synchronization meeting for the development team.", "Le Daily Standup est une réunion de synchronisation de 15 minutes pour l'équipe de développement.", true, "Daily Standup meeting 9sira kol sbah — tfekkar ch7al mn d9i9a khaso y-doom w chkon li kay-sync fih."),
  S(71, "Agile", 3, "Comparing velocity across different teams is a reliable way to judge which team performs better.", "Comparer la vélocité entre différentes équipes est un moyen fiable de juger quelle équipe performe le mieux.", false, "Velocity nisbya l kol team — tfekkar wach l point dyal team wa7da howa nafs l point dyal team okhra."),
  // MaterialUi
  S(72,"MaterialUi",1,"MUI components must be imported from '@mui/material' (or a subpath like '@mui/material/Button').","Les composants MUI doivent être importés depuis '@mui/material' (ou un sous-chemin comme '@mui/material/Button').",true,"Import dyal components dyal MUI — fker mnin kay-jiw: package wa7ed rasmii wla mnin ma kan?"),
  S(73,"MaterialUi",1,"sx={{ p: 2 }} adds exactly 2px of padding.","sx={{ p: 2 }} ajoute exactement 2px de padding.",false,"p: 2 wach kat3ni 2px nichan, wla kayn factor dyal theme li kay-tdreb fih?"),
  S(74,"MaterialUi",3,"createTheme({ palette: { mode: 'dark' } }) switches every MUI component to dark mode.","createTheme({ palette: { mode: 'dark' } }) passe tous les composants MUI en mode sombre.",true,"Dark mode kat-t7eded f palette — fker wach had l option wa7edha kafya bach kolchi y-tbeddel."),
  S(75,"MaterialUi",4,"In MUI v6's Grid v2, the item prop was removed and replaced by the size prop.","Dans Grid v2 de MUI v6, la prop item a été supprimée et remplacée par la prop size.",true,"Grid v2 bedlat l API — fker chno t7eyed w chno ja f blastu."),
  // Gsap
  S(76, "Gsap", 1, "gsap.to() animates an element from its current values to the given values.", "gsap.to() anime un élément de ses valeurs actuelles vers les valeurs données.", true, "gsap.to kat-bda mn l 7ala li fiha l element daba w kat-mchi l l values li 3titih — tfekkar: wach kat-bda mn zero wla mn fin kayn daba?"),
  S(77, "Gsap", 2, "In GSAP, the position parameter \"<\" starts a tween at the same time as the previous tween starts.", "En GSAP, le paramètre de position « < » démarre un tween en même temps que le tween précédent démarre.", true, "Position parameters f timeline kay7addo imta kat-bda l tween — tfekkar chno kay3ni l symbol \"<\", wach kay3ni l bdia wla l nihaya dyal li 9blo?"),
  S(78, "Gsap", 2, "Setting repeat: -1 makes a GSAP tween loop forever.", "Définir repeat: -1 fait boucler un tween GSAP indéfiniment.", true, "repeat kat3awd l animation — tfekkar chno l value l khasa li kat3ni bla 7doud, wach hia 0, -1, wla Infinity?"),
  S(79, "Gsap", 3, "ScrollTrigger works without calling gsap.registerPlugin(ScrollTrigger) first.", "ScrollTrigger fonctionne sans appeler gsap.registerPlugin(ScrollTrigger) au préalable.", false, "ScrollTrigger plugin mnfsl 3la l core dyal GSAP — tfekkar wach khaso tssjil 9bl l use wla kaykhdem nichan mlli kat-importih?"),
  // Convex
  S(80, "Convex", 1, "Convex queries can write to the database.", "Les queries Convex peuvent écrire dans la base de données.", false, "Query read-only hiya — tfekkar ina type dyal function kay9der ydir insert wla patch, wach hiya query wla 7aja okhra."),
  S(81, "Convex", 1, "useQuery re-renders a component automatically when the underlying data changes.", "useQuery re-rend automatiquement un composant quand les données sous-jacentes changent.", true, "useQuery mn convex/react subscription — tfekkar chno kaytra f UI melli data f backend tbedel."),
  S(82, "Convex", 2, "If a mutation throws an error halfway, the writes it already made are kept.", "Si une mutation lève une erreur à mi-chemin, les écritures déjà effectuées sont conservées.", false, "Mutations f Convex transactional — tfekkar chno kaytra l writes ila error w9e3at 9bel ma tkmel."),
  S(83, "Convex", 3, "Actions can read the database directly with ctx.db.", "Les actions peuvent lire la base de données directement avec ctx.db.", false, "Action 3ndha ctx khass — tfekkar wach 3ndha ctx.db nichan wla khasha t3ayet l query b ctx.runQuery."),
  // Clerk
  S(84,"Clerk",2,"Clerk's publishable key (pk_...) is safe to expose in frontend code.","La clé publique Clerk (pk_...) peut être exposée sans risque dans le code frontend.",true,"Clerk 3ndo joj keys: wa7da public w wa7da secret — tfekkar ina wa7da li tssmmat bach tkon visible f browser, w chno prefix dyalha."),
  S(85,"Clerk",3,"useAuth() returns the full user profile object including email addresses.","useAuth() retourne l'objet profil complet de l'utilisateur, emails inclus.",false,"useAuth w useUser bjojhom hooks dyal Clerk walakin ma kay-rj3och nafs l7aja — tfekkar ina wa7ed kay-3ti l user object kamel, w ina wa7ed kay-3ti ghir auth state w helpers."),
  S(86,"Clerk",2,"Clerk webhooks must be verified with the Svix signature headers before trusting the payload.","Les webhooks Clerk doivent être vérifiés avec les en-têtes de signature Svix avant de faire confiance au payload.",true,"Ay wa7ed y9der y-sift POST l endpoint dyalk — tfekkar kifach kat-t2aked belli l request jaya bssa7 mn Clerk, chno l headers li khask t-checki."),
  S(87,"Clerk",3,"The Clerk secret key (sk_...) should be stored in a frontend environment variable like REACT_APP_CLERK_SECRET_KEY.","La clé secrète Clerk (sk_...) doit être stockée dans une variable d'environnement frontend comme REACT_APP_CLERK_SECRET_KEY.",false,"sk_... 3ndha full access l API dyal Clerk — tfekkar: wach mezyan t-7etha f code li kay-mchi l browser dyal ay wa7ed, wla khasha t-b9a ghir f server?"),
  // Postman
  S(88,"Postman",1,"Variables in Postman are written as {{variableName}}.","Les variables Postman s'écrivent {{variableName}}.",true,"Variables f Postman 3ndhom syntax khasa — tfekkar b chnu kayt7essro smit l variable melli katsta3mlo f URL wla headers."),
  S(89,"Postman",2,"A pre-request script runs after the response is received.","Un script de pré-requête s'exécute après la réception de la réponse.",false,"Pre-request smito katgol kolchi — tfekkar imta kaykhdem: 9bel ma ttsifat request wla mor ma twsal response?"),
  S(90,"Postman",3,"A mock server can simulate API responses before the backend is ready.","Un serveur mock peut simuler des réponses d'API avant que le backend soit prêt.",true,"Mock server katsta3mlo melli backend mazal ma wajed — tfekkar chnu kaydir: wach kaysimuli responses wla kaydeployi API?"),
  S(91,"Postman",2,"Newman runs Postman collections from the command line and in CI pipelines.","Newman exécute les collections Postman en ligne de commande et dans les pipelines CI.",true,"Newman smiya katban f CI/CD — tfekkar chnu howa: wach tool dyal command line l collections, wla 7aja khra?"),
  // NextJs
  S(92,"NextJs",1,"In the App Router, every component is a Client Component by default.","Dans l'App Router, chaque composant est un Client Component par défaut.",false,"F App Router bla \"use client\", tfekkar: fin kayt-renda l component — f server wla f browser?"),
  S(93,"NextJs",2,"A file named app/blog/[slug]/page.js handles URLs like /blog/hello-world.","Un fichier nommé app/blog/[slug]/page.js gère les URLs comme /blog/hello-world.",true,"[slug] kat-wakkel placeholder f URL — tfekkar chno kat-matchi m3a /blog/hello-world."),
  S(94,"NextJs",2,"Server Actions run in the browser.","Les Server Actions s'exécutent dans le navigateur.",false,"\"use server\" — smiya kat-gol kolchi. Fker fin kat-khdem l function b dabt."),
  S(95,"NextJs",3,"Setting export const revalidate = 60 makes a page regenerate at most once per minute.","Mettre export const revalidate = 60 fait régénérer une page au plus une fois par minute.",true,"revalidate = 60 seconds = d9i9a. Fker chno kat-dir ISR b had l 9ima."),
  // Bootstrap
  S(96,"Bootstrap",1,"Bootstrap 5 requires jQuery to function.","Bootstrap 5 nécessite jQuery pour fonctionner.",false,"F v5 7aydo jQuery w wlaw plugins b JavaScript 3adi — tfekkar wach ba9i khaso jQuery."),
  S(97,"Bootstrap",2,"Adding d-none d-md-block hides an element on phones but shows it on tablets and larger.","Ajouter d-none d-md-block masque un élément sur téléphone mais l'affiche sur tablette et plus.",true,"d-none kat-khebbi kolchi, w d-md-block kat-rj3o mn md lfo9 — tfekkar chno l resultat."),
  S(98,"Bootstrap",1,"The Bootstrap grid divides each row into 12 columns.","La grille Bootstrap divise chaque ligne en 12 colonnes.",true,"Grid m9assma l 3adad tabet dyal columns — tfekkar ch7al."),
  S(99,"Bootstrap",3,"In Bootstrap 5, tooltips work with data-bs-toggle='tooltip' alone and need no JavaScript.","Dans Bootstrap 5, les infobulles fonctionnent avec le seul data-bs-toggle='tooltip', sans JavaScript.",false,"Tooltip w popover 3ndhom 9a3ida khasa f v5 — tfekkar wach data attribute bo7do kafi."),
  // Mysql
  S(100,"Mysql",4,"A stored function must return a value with RETURN.","Une fonction stockée doit retourner une valeur avec RETURN.",true,"Fonction bla RETURN ma khdamach — tfekkar chno l far9 l asasi bin fonction w procedure."),
  S(101,"Mysql",4,"You execute a stored procedure with a SELECT statement.","On exécute une procédure stockée avec un SELECT.",false,"Procedure kat-t3yet liha b CALL — tfekkar l keyword s7i7."),
  S(102,"Mysql",5,"In a BEFORE INSERT trigger, OLD holds the previous version of the row.","Dans un trigger BEFORE INSERT, OLD contient la version précédente de la ligne.",false,"F INSERT ma kaynach ligne 9dima — tfekkar imta OLD kay-kon kayn (UPDATE/DELETE)."),
  S(103,"Mysql",5,"Changing DELIMITER lets a procedure body full of semicolons reach the server as one statement.","Changer le DELIMITER permet au corps d'une procédure plein de points-virgules d'arriver au serveur en un seul bloc.",true,"DELIMITER kay-7mi l body — tfekkar 3lach l ';' ldakhel mochkil."),
];

export const trueFalseStatements = [
  {
    lang: "EN",
    statements: STATEMENTS.map((s) => ({
      id: s.id, topic: s.topic, level: s.level, text: s.en, answer: s.answer, explain_dr: s.explain_dr,
    })),
  },
  {
    lang: "FR",
    statements: STATEMENTS.map((s) => ({
      id: s.id, topic: s.topic, level: s.level, text: s.fr, answer: s.answer, explain_dr: s.explain_dr,
    })),
  },
];

export const BLITZ_DURATION = 60;

// Shuffled copy of the statements for a blitz run
export const getBlitzStatements = (langTrans) => {
  const block = trueFalseStatements.find((b) => b.lang === langTrans);
  if (!block) return [];
  const arr = block.statements.map((s) => ({ ...s }));
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
