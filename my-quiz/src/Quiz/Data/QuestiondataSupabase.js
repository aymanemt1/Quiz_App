export const supabaseQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "Supabase kat3tik backend kaml bla ma tkteb server: database, auth, storage... tfekkar chno smit had no3 dyal service w 3la chno database mebni.",
        "text": "What is Supabase?",
        "answers": [
          "A CSS framework",
          "An open-source backend-as-a-service built on Postgres",
          "A JavaScript testing library",
          "A code editor"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "Supabase machi database jdida mn zero — hiya wrapper 3la database mojouda w m3rofa bzf. Fker ina wa7da.",
        "text": "Which database runs under the hood of Supabase?",
        "answers": [
          "MongoDB",
          "PostgreSQL",
          "MySQL",
          "SQLite"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "createClient khaso joj 7wayj bach y3ref ina project ghadi yhdar m3ah w b ina key. Fker chno kayt7et f dashboard dyal project.",
        "text": "What two values does createClient() need?",
        "code": "import { createClient } from '@supabase/supabase-js';\nconst supabase = createClient(???, ???);",
        "answers": [
          "A username and password",
          "The project URL and the anon key",
          "A host and a port number",
          "An access token and a refresh token"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "supabase-js dayman kat-rja3 { data, error }. Fker chno shape dyal data melli kat-selecti bzaf dyal rows.",
        "text": "The todos table has 4 rows and no error occurs. What does data hold?",
        "code": "const { data, error } = await supabase.from('todos').select();",
        "answers": [
          "A single row object",
          "null",
          "An array with the 4 row objects",
          "A SQL query string"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "Vite 3ndo 9a3ida sarya: ghir variables li kaybdaw b prefix mo3ayan kaybanu f import.meta.env. Fker chno howa.",
        "text": "In a Vite + React app, how should the Supabase URL be read?",
        "code": "const url = import.meta.env.???;",
        "answers": [
          "SUPABASE_URL",
          "REACT_APP_SUPABASE_URL",
          "VITE_SUPABASE_URL",
          "process.env.SUPABASE_URL"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "Kayan far9 bin tsewb compte jdid w dkhoul l compte mojoud. Fker ina method kat-cree user jdid.",
        "text": "Which method creates a brand-new user account?",
        "code": "await supabase.auth.???({ email, password });",
        "answers": [
          "signInWithPassword",
          "signUp",
          "signOut",
          "getSession"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "User 3ndo compte deja. Bgha ydkhol b email w password. Fker ina method dyal login, machi dyal creation.",
        "text": "Which method logs in an existing user with email + password?",
        "answers": [
          "signUp",
          "verifyOtp",
          "signInWithPassword",
          "resetPasswordForEmail"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "Storage f Supabase kaytndem l files f containers. Fker chno smit had l container li fih images matalan.",
        "text": "What is a storage bucket in Supabase?",
        "answers": [
          "A Postgres table",
          "A container that stores files in Supabase Storage",
          "An auth role",
          "A realtime channel"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": ".eq() kat-dir filter 3la query. Fker: ina rows ghadi y-rja3o melli kat-golih done يساوي true.",
        "text": "What rows does this query return?",
        "code": "await supabase.from('todos').select().eq('done', true);",
        "answers": [
          "All rows in the table",
          "Only the rows where done is true",
          "Only the rows where done is false",
          "It deletes the rows where done is true"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "Kayan joj keys: wa7da public w wa7da khatira. Fker ina wa7da tsaybat bach tban f frontend code w 3lach lkhra la.",
        "text": "Which key is safe to expose in frontend code?",
        "answers": [
          "The service_role key",
          "The database password",
          "The anon (public) key",
          "The JWT secret"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "select('id, username') kat-gol l database ghir jib had l colonnes. Fker chno ghadi ykon ldakhel dyal kol object f data.",
        "text": "What does each object in data contain?",
        "code": "const { data } = await supabase.from('profiles').select('id, username');",
        "answers": [
          "All columns of every row",
          "Only the id and username fields of each row",
          "Only the number of rows",
          "An error — you must use *"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "ascending: false kat3ni tartib 3eksi. Fker: m3a created_at, ina rows ghadi yjiw lowlin.",
        "text": "In what order are the rows returned?",
        "code": "await supabase.from('posts').select().order('created_at', { ascending: false });",
        "answers": [
          "Oldest first",
          "Newest first",
          "In random order",
          "Alphabetical by id"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": ".insert() kat-zid row jdida w kat-rja3 representation dyalha. Fker chno shape dyal data mn ba3d insert naj7.",
        "text": "What does data contain after this successful insert?",
        "code": "const { data, error } = await supabase\n  .from('todos')\n  .insert({ title: 'Buy milk' });",
        "answers": [
          "true",
          "An array containing the inserted row object(s)",
          "Only the new row's id",
          "null"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": ".update() bla filter khatira, walakin hna kayn .eq('id', 7). Fker 3la ch7al mn row ghadi y-t2athar.",
        "text": "What does this query do?",
        "code": "await supabase.from('todos').update({ done: true }).eq('id', 7);",
        "answers": [
          "It sets done to true on every row",
          "It deletes the row with id 7",
          "It sets done to true only on the row with id 7",
          "It creates a new row with id 7"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "signOut kat-khrej l user. Fker chno kaytra l session li kant m7fouda f browser.",
        "text": "What happens to the local session after signOut()?",
        "code": "await supabase.auth.signOut();",
        "answers": [
          "Nothing changes until the page reloads",
          "A new anonymous user is created",
          "The session is cleared and the user is logged out",
          "The session token is refreshed"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": ".single() kat-gol l client: tsenna ghir row wa7da. Fker chno shape dyal data — array wla object.",
        "text": "What shape is data here?",
        "code": "const { data } = await supabase.from('profiles').select().eq('id', 1).single();",
        "answers": [
          "An array with one object",
          "A single row object (not an array)",
          "A JSON string",
          "Always null"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "RLS melli kat-enable-ih bla policies, l default behavior dyalo strict. Fker wach ghadi yban chi row wla walo.",
        "text": "RLS is enabled on todos but no policies exist. A logged-in user runs .select(). What happens?",
        "answers": [
          "All rows are returned",
          "An error is thrown",
          "No rows are returned — access is denied by default",
          "Only rows of the logged-in user are returned"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": ".limit(5) kat-7ded l 3adad. Fker: wach kat-rja3 dima 5 wla 3la 7sab li kayn.",
        "text": "What does .limit(5) do?",
        "code": "await supabase.from('todos').select().limit(5);",
        "answers": [
          "It returns exactly 5 rows or throws",
          "It returns at most 5 rows",
          "It skips the first 5 rows",
          "It deletes 5 rows"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "Mn ba3d login naj7, l session khasha t-t7fed chi blasa bach t-b9a mconnecte. Fker fin kay7fdoha supabase-js b default.",
        "text": "After a successful signInWithPassword, where is the session stored by default?",
        "answers": [
          "Only on the Supabase servers",
          "In the browser (localStorage) by the client library",
          "In a server-side cookie only",
          "Nowhere — you must save it manually"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": ".delete() m3a .eq() kat-msa7 ghir li kay-tab9o l chart. Fker ina rows ghadi yt-msa7o hna.",
        "text": "What does this query do?",
        "code": "await supabase.from('todos').delete().eq('id', 9);",
        "answers": [
          "It deletes every row in todos",
          "It deletes only the row with id 9",
          "It empties the table but keeps row 9",
          "It archives row 9 instead of deleting"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "Had policy kat-sta3mel auth.uid() li kat-rja3 id dyal user li dayer login. Fker: ina rows ghadi y9der y9rahom.",
        "text": "What does this RLS policy allow?",
        "code": "create policy \"own_todos\"\non todos for select\nusing (auth.uid() = user_id);",
        "answers": [
          "Reading every row in todos",
          "Reading only rows whose user_id matches the logged-in user",
          "Inserting rows for any user",
          "Updating other users' rows"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "getUser() machi ghir kat-9ra mn localStorage — kat-sowel server. Fker 3lach had verification mohima l security.",
        "text": "Why is getUser() safer than reading the session from localStorage directly?",
        "code": "const { data: { user } } = await supabase.auth.getUser();",
        "answers": [
          "It is faster than getSession()",
          "It works without internet",
          "It re-validates the JWT with the Supabase Auth server",
          "It also returns the user's password"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "onAuthStateChange kat-rja3 subscription. Fker chno khask dir biha melli component yt-unmounta bach ma yb9ach listener khdam.",
        "text": "What should you do with subscription when the component unmounts?",
        "code": "const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {\n  console.log(event);\n});",
        "answers": [
          "Call subscription.subscribe() again",
          "Do nothing — it cleans itself up",
          "Call subscription.unsubscribe()",
          "Call supabase.auth.signOut()"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "upload() 3ndo option upsert li b default false. Fker chno kaytra melli file b nafs smiya mojoud deja.",
        "text": "The file me.png already exists in the bucket. What happens?",
        "code": "await supabase.storage.from('avatars').upload('me.png', file);",
        "answers": [
          "The old file is silently overwritten",
          "A second copy is created",
          "The upload fails — upsert defaults to false",
          "The whole bucket is deleted"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "getPublicUrl kat-bni URL mn bucket + path. Fker wach khasha request l server wla la, w wach kat-verifi l file.",
        "text": "Which statement about getPublicUrl() is true?",
        "code": "const { data } = supabase.storage.from('avatars').getPublicUrl('me.png');",
        "answers": [
          "It uploads the file if it is missing",
          "It builds the URL locally without checking the file exists",
          "It only works on private buckets",
          "It returns a signed URL that expires in 60 seconds"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "Had channel kay-tsnet l event INSERT 3la table todos. Fker imta ghadi y-khdem l callback — mra wa7da wla kol mra.",
        "text": "When does the callback run?",
        "code": "supabase\n  .channel('todos-room')\n  .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'todos' }, (payload) => {\n    console.log(payload.new);\n  })\n  .subscribe();",
        "answers": [
          "Once, right when .subscribe() is called",
          "Whenever a new row is inserted into public.todos",
          "On every page reload",
          "When any table in the database changes"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "Realtime khaso table t-tzad l publication khasa. Fker chno smit had l publication w chno khask dir b SQL.",
        "text": "Your postgres_changes subscription receives nothing for the orders table. What is the most likely missing step?",
        "answers": [
          "The table was not added to the supabase_realtime publication",
          "Realtime needs the service_role key",
          "You must query with .from() instead of .channel()",
          "The anon key cannot be used for realtime"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "rpc() kat-3yet l function li kayna f database. Fker chno kat-dir: kat-cree-aha wla kat-executiha.",
        "text": "What does rpc() do here?",
        "code": "const { data } = await supabase.rpc('get_top_products', { limit_count: 5 });",
        "answers": [
          "It creates a new Postgres function",
          "It calls the Postgres function get_top_products",
          "It opens a realtime channel",
          "It uploads a file to storage"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "USING kat-filtri rows li kaynin, WITH CHECK kat-verifi row jdida. Fker ina wa7da mnasba l INSERT.",
        "text": "Why does this INSERT policy use WITH CHECK instead of USING?",
        "code": "create policy \"insert_own\"\non todos for insert\nwith check (auth.uid() = user_id);",
        "answers": [
          "USING and WITH CHECK are identical",
          "USING validates the new row; WITH CHECK filters existing rows",
          "USING filters existing rows; WITH CHECK validates the row being written",
          "WITH CHECK is deprecated"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "service_role key 3ndha power kbir. Fker wach RLS kay-7besha wla hiya kat-jawz kolchi.",
        "text": "A server route uses the service_role key to query a table with RLS enabled. What happens?",
        "answers": [
          "RLS still blocks it like any other key",
          "It bypasses all RLS policies and sees every row",
          "It can read but never write",
          "The query fails because there is no auth.uid()"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "payload.old khawi 7it Postgres ma kay-siftch l row l9dima b default. Fker chno setting khask tbdl 3la table.",
        "text": "Your postgres_changes handler for UPDATE events logs payload.old, but it is always empty. What fixes it?",
        "answers": [
          "Use event: 'INSERT' instead of 'UPDATE'",
          "Call .subscribe() a second time",
          "Set the table's replica identity to FULL",
          "Disable RLS on the table"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "Storage 3ndo RLS dyalo 3la table storage.objects. Fker chno kat-7kem had policy: buckets, files, wla tables 3adiya.",
        "text": "What does this storage policy control?",
        "code": "create policy \"public read\"\non storage.objects for select\nusing (bucket_id = 'public-assets');",
        "answers": [
          "Who can create new buckets",
          "Who can read files in the public-assets bucket",
          "Who can query Postgres tables",
          "Who can subscribe to realtime channels"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "profiles ( username ) kat-tb3 l foreign key. Fker chno ghadi y-tzad ldakhel dyal kol todo object.",
        "text": "What does profiles ( username ) do in this query?",
        "code": "const { data } = await supabase\n  .from('todos')\n  .select('id, title, profiles ( username )');",
        "answers": [
          "It creates a new profiles table",
          "It filters todos by username",
          "It embeds the related profile's username through the foreign key",
          "It deletes the linked profile"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "count: 'exact' kat-gol l database 7seb liya ch7al. Fker chno ghadi ykon f count — rows wla 7aja khra.",
        "text": "What does count hold here?",
        "code": "const { count } = await supabase\n  .from('todos')\n  .select('*', { count: 'exact' });",
        "answers": [
          "The number of columns in the table",
          "The total number of matching rows",
          "Always 0",
          "The table size in bytes"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "upsert = update or insert. m3a onConflict: 'id', fker chno kaytra melli row b nafs id mojoud deja.",
        "text": "A profile with id 1 already exists. What happens?",
        "code": "await supabase\n  .from('profiles')\n  .upsert({ id: 1, username: 'aymane' }, { onConflict: 'id' });",
        "answers": [
          "A duplicate row is inserted",
          "The existing row is updated",
          "An error is thrown",
          "The existing row is deleted first"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "signInWithOtp ma kay-7tajch password. Fker chno kay-wsel l user b email bach ydkhol.",
        "text": "What does signInWithOtp() do?",
        "code": "await supabase.auth.signInWithOtp({ email: 'a@b.com' });",
        "answers": [
          "It changes the user's password",
          "It deletes the user account",
          "It emails a magic link / one-time code for passwordless login",
          "It signs the user out everywhere"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "functions.invoke kat-3yet l code li deployiti f Supabase. Fker fin kay-khdem had l code: database wla serverless.",
        "text": "What is send-email in this call?",
        "code": "const { data } = await supabase.functions.invoke('send-email', {\n  body: { to: 'a@b.com' }\n});",
        "answers": [
          "A Postgres stored function",
          "A Supabase Edge Function deployed to the project",
          "A storage bucket",
          "An OAuth provider"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "auth.admin kat-khali server y-cree users w y-dir admin tasks. Fker 3lach khasha key khasa w 3lach ma t-sta3melch anon key.",
        "text": "Why must this server code use the service_role key?",
        "code": "// server-side code\nawait supabase.auth.admin.createUser({ email, password });",
        "answers": [
          "The anon key is faster for admin tasks",
          "auth.admin only works in the browser",
          "auth.admin endpoints require the service_role key",
          "It is only a naming convention"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "maybeSingle() hiya version tolerant dyal single(). Fker chno kat-rja3 melli ma kayn 7ta row — error wla null.",
        "text": "No profile has id 999. What is data?",
        "code": "const { data } = await supabase.from('profiles').select().eq('id', 999).maybeSingle();",
        "answers": [
          "An error is thrown",
          "data is null and error is null",
          "data is an empty array",
          "The app crashes"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "range() f PostgREST inclusive mn joj jihat. Fker ch7al mn row ghadi y-rja3 range(10, 19).",
        "text": "Which rows are returned?",
        "code": "await supabase.from('todos').select().order('id').range(10, 19);",
        "answers": [
          "Rows 10–19 (the 10th to 19th rows)",
          "10 random rows",
          "Rows 11–20 — range bounds are inclusive",
          "Every row in the table"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "SECURITY DEFINER function kat-khdem b permissions dyal owner. Fker 3lach attacker y9der y-stghel search_path ila ma 7ddtihach.",
        "text": "Why is set search_path = public recommended on SECURITY DEFINER functions?",
        "code": "create function get_secret()\nreturns text\nlanguage sql\nsecurity definer\nset search_path = public\nas $$ select 'x' $$;",
        "answers": [
          "It makes the function run faster",
          "It prevents search-path hijacking of tables in other schemas",
          "It is required for realtime triggers",
          "It automatically enables RLS"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "Edge Functions ma khdaminch 3la Node.js. Fker ina runtime khdam 3lih Supabase l had l functions.",
        "text": "Supabase Edge Functions run on which runtime?",
        "answers": [
          "Node.js",
          "Deno",
          "Bun",
          "Go"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "createSignedUrl l files li f private buckets. Fker ch7al dyal lwa9t had l URL valid w wach dayem.",
        "text": "What does data.signedUrl give you here?",
        "code": "const { data } = await supabase.storage\n  .from('private-docs')\n  .createSignedUrl('contract.pdf', 120);",
        "answers": [
          "A permanent public URL",
          "The raw file bytes",
          "A temporary URL valid for 120 seconds to a private file",
          "A new storage bucket"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "Channel fih 3 anwa3: postgres_changes, presence, broadcast. Fker chno dawr dyal broadcast b dabt.",
        "text": "What is broadcast used for in a realtime channel?",
        "code": "supabase.channel('room', { config: { broadcast: { self: true } } });",
        "answers": [
          "Listening to Postgres row changes",
          "Tracking which users are online",
          "Sending low-latency ephemeral messages between clients",
          "Uploading files in chunks"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "auth.uid() mlli kat-3yet 3liha f policy, Postgres y9der y-3awed y7sebha l kol row. Fker kifach t-khaliha t-t7seb mra wa7da.",
        "text": "For a policy evaluated on thousands of rows, what is the recommended optimization?",
        "code": "create policy \"p\" on todos for select\nusing (auth.uid() = user_id);",
        "answers": [
          "Remove the RLS policy entirely",
          "Use the service_role key instead",
          "Wrap it as (select auth.uid()) so it is evaluated once per query",
          "Add a database index on auth.uid()"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "like w ilike bjojhom pattern matching f Postgres. Fker chno l far9 l wa7id binhom.",
        "text": "How does ilike differ from like?",
        "code": "await supabase.from('products').select().ilike('name', '%phone%');",
        "answers": [
          "ilike is faster than like",
          "like is case-insensitive; ilike is case-sensitive",
          "ilike is case-insensitive; like is case-sensitive",
          "They behave exactly the same"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "PERMISSIVE policies kat-jm3o b OR. RESTRICTIVE 3ndha logic 3eksi. Fker chno kaytra melli tzid restrictive policy.",
        "text": "Multiple PERMISSIVE policies combine with OR. What changes with a RESTRICTIVE policy?",
        "answers": [
          "It is ignored by Postgres",
          "It disables RLS for the table",
          "It must also pass — restrictive policies combine with AND",
          "It applies only to the table owner"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "Access tokens 3ndhom expiry date. supabase-js kay-refreshihom automatically. Fker imta kay-fire had l event.",
        "text": "When does the TOKEN_REFRESHED event fire?",
        "code": "supabase.auth.onAuthStateChange((event, session) => {\n  if (event === 'TOKEN_REFRESHED') { /* ... */ }\n});",
        "answers": [
          "When the user changes their password",
          "When the user signs out",
          "When the client automatically refreshes an expiring access token",
          "It never fires — the event is deprecated"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": ".or() kat-jm3 conditions. Fker: wach khasha jojhom y-t7e9o wla wa7da kafya.",
        "text": "What does .or() do here?",
        "code": "await supabase.from('todos').select().or('done.eq.true,priority.eq.high');",
        "answers": [
          "Returns rows matching both conditions",
          "Returns rows matching either condition",
          "It deletes the matching rows",
          "It sorts by both columns"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "Realtime kay-7tarem RLS b7al ay query. Fker 3lach INSERT events ma kay-wsloch wakha select() khdam.",
        "text": "A postgres_changes subscription with the anon key gets no INSERT events, but .select() returns rows. What is the likely cause?",
        "answers": [
          "Realtime never works with the anon key",
          "INSERT events are not supported",
          "Realtime respects RLS — the subscription needs an authenticated session passing the SELECT policy",
          "You must use the service_role key in the browser"
        ],
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
        "explain_dr": "Supabase kat3tik backend kaml bla ma tkteb server: database, auth, storage... tfekkar chno smit had no3 dyal service w 3la chno database mebni.",
        "text": "Qu'est-ce que Supabase ?",
        "answers": [
          "Un framework CSS",
          "Un backend-as-a-service open-source construit sur Postgres",
          "Une bibliothèque de tests JavaScript",
          "Un éditeur de code"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "Supabase machi database jdida mn zero — hiya wrapper 3la database mojouda w m3rofa bzf. Fker ina wa7da.",
        "text": "Quelle base de données fait fonctionner Supabase en interne ?",
        "answers": [
          "MongoDB",
          "PostgreSQL",
          "MySQL",
          "SQLite"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "createClient khaso joj 7wayj bach y3ref ina project ghadi yhdar m3ah w b ina key. Fker chno kayt7et f dashboard dyal project.",
        "text": "Quelles deux valeurs createClient() nécessite-t-il ?",
        "code": "import { createClient } from '@supabase/supabase-js';\nconst supabase = createClient(???, ???);",
        "answers": [
          "Un nom d'utilisateur et un mot de passe",
          "L'URL du projet et la clé anon",
          "Un hôte et un numéro de port",
          "Un access token et un refresh token"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "supabase-js dayman kat-rja3 { data, error }. Fker chno shape dyal data melli kat-selecti bzaf dyal rows.",
        "text": "La table todos contient 4 lignes et aucune erreur ne se produit. Que contient data ?",
        "code": "const { data, error } = await supabase.from('todos').select();",
        "answers": [
          "Un seul objet ligne",
          "null",
          "Un tableau avec les 4 objets lignes",
          "Une chaîne de requête SQL"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "Vite 3ndo 9a3ida sarya: ghir variables li kaybdaw b prefix mo3ayan kaybanu f import.meta.env. Fker chno howa.",
        "text": "Dans une app Vite + React, comment lire l'URL Supabase ?",
        "code": "const url = import.meta.env.???;",
        "answers": [
          "SUPABASE_URL",
          "REACT_APP_SUPABASE_URL",
          "VITE_SUPABASE_URL",
          "process.env.SUPABASE_URL"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "Kayan far9 bin tsewb compte jdid w dkhoul l compte mojoud. Fker ina method kat-cree user jdid.",
        "text": "Quelle méthode crée un tout nouveau compte utilisateur ?",
        "code": "await supabase.auth.???({ email, password });",
        "answers": [
          "signInWithPassword",
          "signUp",
          "signOut",
          "getSession"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "User 3ndo compte deja. Bgha ydkhol b email w password. Fker ina method dyal login, machi dyal creation.",
        "text": "Quelle méthode connecte un utilisateur existant avec email + mot de passe ?",
        "answers": [
          "signUp",
          "verifyOtp",
          "signInWithPassword",
          "resetPasswordForEmail"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "Storage f Supabase kaytndem l files f containers. Fker chno smit had l container li fih images matalan.",
        "text": "Qu'est-ce qu'un bucket de stockage dans Supabase ?",
        "answers": [
          "Une table Postgres",
          "Un conteneur qui stocke des fichiers dans Supabase Storage",
          "Un rôle d'authentification",
          "Un canal realtime"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": ".eq() kat-dir filter 3la query. Fker: ina rows ghadi y-rja3o melli kat-golih done يساوي true.",
        "text": "Quelles lignes cette requête retourne-t-elle ?",
        "code": "await supabase.from('todos').select().eq('done', true);",
        "answers": [
          "Toutes les lignes de la table",
          "Uniquement les lignes où done vaut true",
          "Uniquement les lignes où done vaut false",
          "Elle supprime les lignes où done vaut true"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "Kayan joj keys: wa7da public w wa7da khatira. Fker ina wa7da tsaybat bach tban f frontend code w 3lach lkhra la.",
        "text": "Quelle clé peut être exposée dans le code frontend ?",
        "answers": [
          "La clé service_role",
          "Le mot de passe de la base de données",
          "La clé anon (publique)",
          "Le secret JWT"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "select('id, username') kat-gol l database ghir jib had l colonnes. Fker chno ghadi ykon ldakhel dyal kol object f data.",
        "text": "Que contient chaque objet dans data ?",
        "code": "const { data } = await supabase.from('profiles').select('id, username');",
        "answers": [
          "Toutes les colonnes de chaque ligne",
          "Uniquement les champs id et username de chaque ligne",
          "Uniquement le nombre de lignes",
          "Une erreur — vous devez utiliser *"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "ascending: false kat3ni tartib 3eksi. Fker: m3a created_at, ina rows ghadi yjiw lowlin.",
        "text": "Dans quel ordre les lignes sont-elles retournées ?",
        "code": "await supabase.from('posts').select().order('created_at', { ascending: false });",
        "answers": [
          "Les plus anciennes d'abord",
          "Les plus récentes d'abord",
          "Dans un ordre aléatoire",
          "Par ordre alphabétique d'id"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": ".insert() kat-zid row jdida w kat-rja3 representation dyalha. Fker chno shape dyal data mn ba3d insert naj7.",
        "text": "Que contient data après cet insert réussi ?",
        "code": "const { data, error } = await supabase\n  .from('todos')\n  .insert({ title: 'Buy milk' });",
        "answers": [
          "true",
          "Un tableau contenant le(s) objet(s) ligne inséré(s)",
          "Uniquement l'id de la nouvelle ligne",
          "null"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": ".update() bla filter khatira, walakin hna kayn .eq('id', 7). Fker 3la ch7al mn row ghadi y-t2athar.",
        "text": "Que fait cette requête ?",
        "code": "await supabase.from('todos').update({ done: true }).eq('id', 7);",
        "answers": [
          "Elle met done à true sur toutes les lignes",
          "Elle supprime la ligne avec id 7",
          "Elle met done à true uniquement sur la ligne avec id 7",
          "Elle crée une nouvelle ligne avec id 7"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "signOut kat-khrej l user. Fker chno kaytra l session li kant m7fouda f browser.",
        "text": "Qu'advient-il de la session locale après signOut() ?",
        "code": "await supabase.auth.signOut();",
        "answers": [
          "Rien ne change jusqu'au rechargement de la page",
          "Un nouvel utilisateur anonyme est créé",
          "La session est effacée et l'utilisateur est déconnecté",
          "Le token de session est rafraîchi"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": ".single() kat-gol l client: tsenna ghir row wa7da. Fker chno shape dyal data — array wla object.",
        "text": "Quelle est la forme de data ici ?",
        "code": "const { data } = await supabase.from('profiles').select().eq('id', 1).single();",
        "answers": [
          "Un tableau avec un objet",
          "Un seul objet ligne (pas un tableau)",
          "Une chaîne JSON",
          "Toujours null"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "RLS melli kat-enable-ih bla policies, l default behavior dyalo strict. Fker wach ghadi yban chi row wla walo.",
        "text": "RLS est activé sur todos mais aucune politique n'existe. Un utilisateur connecté exécute .select(). Que se passe-t-il ?",
        "answers": [
          "Toutes les lignes sont retournées",
          "Une erreur est levée",
          "Aucune ligne n'est retournée — l'accès est refusé par défaut",
          "Seules les lignes de l'utilisateur connecté sont retournées"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": ".limit(5) kat-7ded l 3adad. Fker: wach kat-rja3 dima 5 wla 3la 7sab li kayn.",
        "text": "Que fait .limit(5) ?",
        "code": "await supabase.from('todos').select().limit(5);",
        "answers": [
          "Il retourne exactement 5 lignes ou lève une erreur",
          "Il retourne au maximum 5 lignes",
          "Il saute les 5 premières lignes",
          "Il supprime 5 lignes"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "Mn ba3d login naj7, l session khasha t-t7fed chi blasa bach t-b9a mconnecte. Fker fin kay7fdoha supabase-js b default.",
        "text": "Après un signInWithPassword réussi, où la session est-elle stockée par défaut ?",
        "answers": [
          "Uniquement sur les serveurs Supabase",
          "Dans le navigateur (localStorage) par la bibliothèque cliente",
          "Dans un cookie côté serveur uniquement",
          "Nulle part — vous devez l'enregistrer manuellement"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": ".delete() m3a .eq() kat-msa7 ghir li kay-tab9o l chart. Fker ina rows ghadi yt-msa7o hna.",
        "text": "Que fait cette requête ?",
        "code": "await supabase.from('todos').delete().eq('id', 9);",
        "answers": [
          "Elle supprime toutes les lignes de todos",
          "Elle supprime uniquement la ligne avec id 9",
          "Elle vide la table mais garde la ligne 9",
          "Elle archive la ligne 9 au lieu de la supprimer"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "Had policy kat-sta3mel auth.uid() li kat-rja3 id dyal user li dayer login. Fker: ina rows ghadi y9der y9rahom.",
        "text": "Qu'autorise cette politique RLS ?",
        "code": "create policy \"own_todos\"\non todos for select\nusing (auth.uid() = user_id);",
        "answers": [
          "Lire toutes les lignes de todos",
          "Lire uniquement les lignes dont user_id correspond à l'utilisateur connecté",
          "Insérer des lignes pour n'importe quel utilisateur",
          "Mettre à jour les lignes des autres utilisateurs"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "getUser() machi ghir kat-9ra mn localStorage — kat-sowel server. Fker 3lach had verification mohima l security.",
        "text": "Pourquoi getUser() est-il plus sûr que de lire la session depuis localStorage directement ?",
        "code": "const { data: { user } } = await supabase.auth.getUser();",
        "answers": [
          "Il est plus rapide que getSession()",
          "Il fonctionne sans internet",
          "Il re-valide le JWT auprès du serveur Supabase Auth",
          "Il retourne aussi le mot de passe de l'utilisateur"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "onAuthStateChange kat-rja3 subscription. Fker chno khask dir biha melli component yt-unmounta bach ma yb9ach listener khdam.",
        "text": "Que faut-il faire de subscription quand le composant se démonte ?",
        "code": "const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {\n  console.log(event);\n});",
        "answers": [
          "Rappeler subscription.subscribe()",
          "Ne rien faire — il se nettoie tout seul",
          "Appeler subscription.unsubscribe()",
          "Appeler supabase.auth.signOut()"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "upload() 3ndo option upsert li b default false. Fker chno kaytra melli file b nafs smiya mojoud deja.",
        "text": "Le fichier me.png existe déjà dans le bucket. Que se passe-t-il ?",
        "code": "await supabase.storage.from('avatars').upload('me.png', file);",
        "answers": [
          "L'ancien fichier est écrasé silencieusement",
          "Une seconde copie est créée",
          "L'upload échoue — upsert vaut false par défaut",
          "Tout le bucket est supprimé"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "getPublicUrl kat-bni URL mn bucket + path. Fker wach khasha request l server wla la, w wach kat-verifi l file.",
        "text": "Quelle affirmation sur getPublicUrl() est vraie ?",
        "code": "const { data } = supabase.storage.from('avatars').getPublicUrl('me.png');",
        "answers": [
          "Elle uploade le fichier s'il est manquant",
          "Elle construit l'URL localement sans vérifier que le fichier existe",
          "Elle ne fonctionne que sur les buckets privés",
          "Elle retourne une URL signée qui expire en 60 secondes"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "Had channel kay-tsnet l event INSERT 3la table todos. Fker imta ghadi y-khdem l callback — mra wa7da wla kol mra.",
        "text": "Quand le callback s'exécute-t-il ?",
        "code": "supabase\n  .channel('todos-room')\n  .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'todos' }, (payload) => {\n    console.log(payload.new);\n  })\n  .subscribe();",
        "answers": [
          "Une fois, juste quand .subscribe() est appelé",
          "Chaque fois qu'une nouvelle ligne est insérée dans public.todos",
          "À chaque rechargement de page",
          "Quand n'importe quelle table de la base change"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "Realtime khaso table t-tzad l publication khasa. Fker chno smit had l publication w chno khask dir b SQL.",
        "text": "Votre abonnement postgres_changes ne reçoit rien pour la table orders. Quelle est l'étape manquante la plus probable ?",
        "answers": [
          "La table n'a pas été ajoutée à la publication supabase_realtime",
          "Realtime nécessite la clé service_role",
          "Vous devez interroger avec .from() au lieu de .channel()",
          "La clé anon ne peut pas être utilisée pour realtime"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "rpc() kat-3yet l function li kayna f database. Fker chno kat-dir: kat-cree-aha wla kat-executiha.",
        "text": "Que fait rpc() ici ?",
        "code": "const { data } = await supabase.rpc('get_top_products', { limit_count: 5 });",
        "answers": [
          "Elle crée une nouvelle fonction Postgres",
          "Elle appelle la fonction Postgres get_top_products",
          "Elle ouvre un canal realtime",
          "Elle uploade un fichier vers le stockage"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "USING kat-filtri rows li kaynin, WITH CHECK kat-verifi row jdida. Fker ina wa7da mnasba l INSERT.",
        "text": "Pourquoi cette politique INSERT utilise-t-elle WITH CHECK plutôt que USING ?",
        "code": "create policy \"insert_own\"\non todos for insert\nwith check (auth.uid() = user_id);",
        "answers": [
          "USING et WITH CHECK sont identiques",
          "USING valide la nouvelle ligne ; WITH CHECK filtre les lignes existantes",
          "USING filtre les lignes existantes ; WITH CHECK valide la ligne écrite",
          "WITH CHECK est déprécié"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "service_role key 3ndha power kbir. Fker wach RLS kay-7besha wla hiya kat-jawz kolchi.",
        "text": "Une route serveur utilise la clé service_role pour interroger une table avec RLS activé. Que se passe-t-il ?",
        "answers": [
          "RLS la bloque comme n'importe quelle autre clé",
          "Elle contourne toutes les politiques RLS et voit chaque ligne",
          "Elle peut lire mais jamais écrire",
          "La requête échoue car il n'y a pas de auth.uid()"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "payload.old khawi 7it Postgres ma kay-siftch l row l9dima b default. Fker chno setting khask tbdl 3la table.",
        "text": "Votre handler postgres_changes pour les événements UPDATE journalise payload.old, mais il est toujours vide. Que faut-il corriger ?",
        "answers": [
          "Utiliser event: 'INSERT' au lieu de 'UPDATE'",
          "Appeler .subscribe() une seconde fois",
          "Mettre la replica identity de la table à FULL",
          "Désactiver RLS sur la table"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "Storage 3ndo RLS dyalo 3la table storage.objects. Fker chno kat-7kem had policy: buckets, files, wla tables 3adiya.",
        "text": "Que contrôle cette politique de stockage ?",
        "code": "create policy \"public read\"\non storage.objects for select\nusing (bucket_id = 'public-assets');",
        "answers": [
          "Qui peut créer de nouveaux buckets",
          "Qui peut lire les fichiers du bucket public-assets",
          "Qui peut interroger les tables Postgres",
          "Qui peut s'abonner aux canaux realtime"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "profiles ( username ) kat-tb3 l foreign key. Fker chno ghadi y-tzad ldakhel dyal kol todo object.",
        "text": "Que fait profiles ( username ) dans cette requête ?",
        "code": "const { data } = await supabase\n  .from('todos')\n  .select('id, title, profiles ( username )');",
        "answers": [
          "Elle crée une nouvelle table profiles",
          "Elle filtre les todos par username",
          "Elle imbrique le username du profil lié via la clé étrangère",
          "Elle supprime le profil lié"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "count: 'exact' kat-gol l database 7seb liya ch7al. Fker chno ghadi ykon f count — rows wla 7aja khra.",
        "text": "Que contient count ici ?",
        "code": "const { count } = await supabase\n  .from('todos')\n  .select('*', { count: 'exact' });",
        "answers": [
          "Le nombre de colonnes de la table",
          "Le nombre total de lignes correspondantes",
          "Toujours 0",
          "La taille de la table en octets"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "upsert = update or insert. m3a onConflict: 'id', fker chno kaytra melli row b nafs id mojoud deja.",
        "text": "Un profil avec id 1 existe déjà. Que se passe-t-il ?",
        "code": "await supabase\n  .from('profiles')\n  .upsert({ id: 1, username: 'aymane' }, { onConflict: 'id' });",
        "answers": [
          "Une ligne en double est insérée",
          "La ligne existante est mise à jour",
          "Une erreur est levée",
          "La ligne existante est d'abord supprimée"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "signInWithOtp ma kay-7tajch password. Fker chno kay-wsel l user b email bach ydkhol.",
        "text": "Que fait signInWithOtp() ?",
        "code": "await supabase.auth.signInWithOtp({ email: 'a@b.com' });",
        "answers": [
          "Elle change le mot de passe de l'utilisateur",
          "Elle supprime le compte utilisateur",
          "Elle envoie par email un lien magique / code unique pour une connexion sans mot de passe",
          "Elle déconnecte l'utilisateur partout"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "functions.invoke kat-3yet l code li deployiti f Supabase. Fker fin kay-khdem had l code: database wla serverless.",
        "text": "Qu'est-ce que send-email dans cet appel ?",
        "code": "const { data } = await supabase.functions.invoke('send-email', {\n  body: { to: 'a@b.com' }\n});",
        "answers": [
          "Une fonction stockée Postgres",
          "Une Edge Function Supabase déployée sur le projet",
          "Un bucket de stockage",
          "Un fournisseur OAuth"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "auth.admin kat-khali server y-cree users w y-dir admin tasks. Fker 3lach khasha key khasa w 3lach ma t-sta3melch anon key.",
        "text": "Pourquoi ce code serveur doit-il utiliser la clé service_role ?",
        "code": "// code côté serveur\nawait supabase.auth.admin.createUser({ email, password });",
        "answers": [
          "La clé anon est plus rapide pour les tâches admin",
          "auth.admin ne fonctionne que dans le navigateur",
          "Les endpoints auth.admin exigent la clé service_role",
          "C'est seulement une convention de nommage"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "maybeSingle() hiya version tolerant dyal single(). Fker chno kat-rja3 melli ma kayn 7ta row — error wla null.",
        "text": "Aucun profil n'a l'id 999. Que vaut data ?",
        "code": "const { data } = await supabase.from('profiles').select().eq('id', 999).maybeSingle();",
        "answers": [
          "Une erreur est levée",
          "data vaut null et error vaut null",
          "data est un tableau vide",
          "L'application plante"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "range() f PostgREST inclusive mn joj jihat. Fker ch7al mn row ghadi y-rja3 range(10, 19).",
        "text": "Quelles lignes sont retournées ?",
        "code": "await supabase.from('todos').select().order('id').range(10, 19);",
        "answers": [
          "Les lignes 10 à 19 (10e à 19e lignes)",
          "10 lignes aléatoires",
          "Les lignes 11 à 20 — les bornes de range sont inclusives",
          "Toutes les lignes de la table"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "SECURITY DEFINER function kat-khdem b permissions dyal owner. Fker 3lach attacker y9der y-stghel search_path ila ma 7ddtihach.",
        "text": "Pourquoi set search_path = public est-il recommandé sur les fonctions SECURITY DEFINER ?",
        "code": "create function get_secret()\nreturns text\nlanguage sql\nsecurity definer\nset search_path = public\nas $$ select 'x' $$;",
        "answers": [
          "Cela rend la fonction plus rapide",
          "Cela empêche le détournement du search_path vers des tables d'autres schémas",
          "C'est requis pour les triggers realtime",
          "Cela active automatiquement RLS"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "Edge Functions ma khdaminch 3la Node.js. Fker ina runtime khdam 3lih Supabase l had l functions.",
        "text": "Sur quel runtime fonctionnent les Edge Functions Supabase ?",
        "answers": [
          "Node.js",
          "Deno",
          "Bun",
          "Go"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "createSignedUrl l files li f private buckets. Fker ch7al dyal lwa9t had l URL valid w wach dayem.",
        "text": "Que vous donne data.signedUrl ici ?",
        "code": "const { data } = await supabase.storage\n  .from('private-docs')\n  .createSignedUrl('contract.pdf', 120);",
        "answers": [
          "Une URL publique permanente",
          "Les octets bruts du fichier",
          "Une URL temporaire valide 120 secondes vers un fichier privé",
          "Un nouveau bucket de stockage"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "Channel fih 3 anwa3: postgres_changes, presence, broadcast. Fker chno dawr dyal broadcast b dabt.",
        "text": "À quoi sert broadcast dans un canal realtime ?",
        "code": "supabase.channel('room', { config: { broadcast: { self: true } } });",
        "answers": [
          "Écouter les changements de lignes Postgres",
          "Suivre quels utilisateurs sont en ligne",
          "Envoyer des messages éphémères à faible latence entre clients",
          "Uploader des fichiers par morceaux"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "auth.uid() mlli kat-3yet 3liha f policy, Postgres y9der y-3awed y7sebha l kol row. Fker kifach t-khaliha t-t7seb mra wa7da.",
        "text": "Pour une politique évaluée sur des milliers de lignes, quelle optimisation est recommandée ?",
        "code": "create policy \"p\" on todos for select\nusing (auth.uid() = user_id);",
        "answers": [
          "Supprimer entièrement la politique RLS",
          "Utiliser la clé service_role à la place",
          "L'envelopper en (select auth.uid()) pour qu'elle soit évaluée une fois par requête",
          "Ajouter un index de base de données sur auth.uid()"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "like w ilike bjojhom pattern matching f Postgres. Fker chno l far9 l wa7id binhom.",
        "text": "En quoi ilike diffère-t-il de like ?",
        "code": "await supabase.from('products').select().ilike('name', '%phone%');",
        "answers": [
          "ilike est plus rapide que like",
          "like est insensible à la casse ; ilike est sensible à la casse",
          "ilike est insensible à la casse ; like est sensible à la casse",
          "Ils se comportent exactement pareil"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "PERMISSIVE policies kat-jm3o b OR. RESTRICTIVE 3ndha logic 3eksi. Fker chno kaytra melli tzid restrictive policy.",
        "text": "Plusieurs politiques PERMISSIVE se combinent avec OR. Que change une politique RESTRICTIVE ?",
        "answers": [
          "Elle est ignorée par Postgres",
          "Elle désactive RLS pour la table",
          "Elle doit aussi passer — les politiques restrictives se combinent avec AND",
          "Elle ne s'applique qu'au propriétaire de la table"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "Access tokens 3ndhom expiry date. supabase-js kay-refreshihom automatically. Fker imta kay-fire had l event.",
        "text": "Quand l'événement TOKEN_REFRESHED se déclenche-t-il ?",
        "code": "supabase.auth.onAuthStateChange((event, session) => {\n  if (event === 'TOKEN_REFRESHED') { /* ... */ }\n});",
        "answers": [
          "Quand l'utilisateur change son mot de passe",
          "Quand l'utilisateur se déconnecte",
          "Quand le client rafraîchit automatiquement un access token expirant",
          "Il ne se déclenche jamais — l'événement est déprécié"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": ".or() kat-jm3 conditions. Fker: wach khasha jojhom y-t7e9o wla wa7da kafya.",
        "text": "Que fait .or() ici ?",
        "code": "await supabase.from('todos').select().or('done.eq.true,priority.eq.high');",
        "answers": [
          "Retourne les lignes correspondant aux deux conditions",
          "Retourne les lignes correspondant à l'une ou l'autre condition",
          "Il supprime les lignes correspondantes",
          "Il trie selon les deux colonnes"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "Realtime kay-7tarem RLS b7al ay query. Fker 3lach INSERT events ma kay-wsloch wakha select() khdam.",
        "text": "Un abonnement postgres_changes avec la clé anon ne reçoit aucun événement INSERT, mais .select() retourne des lignes. Quelle est la cause probable ?",
        "answers": [
          "Realtime ne fonctionne jamais avec la clé anon",
          "Les événements INSERT ne sont pas supportés",
          "Realtime respecte RLS — l'abonnement nécessite une session authentifiée passant la politique SELECT",
          "Vous devez utiliser la clé service_role dans le navigateur"
        ],
        "correct": 2,
        "selection": null
      }
    ]
  }
];
