export const laravelQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la routes f Laravel: chnu kayw9e3 mli katzoor /hello? Fker f l return dyal l closure.",
        "text": "What does visiting /hello return?",
        "code": "Route::get('/hello', function () {\n    return 'Hello!';\n});",
        "answers": [
          "Hello!",
          "hello.blade.php view",
          "404",
          "An empty page"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la {{ }} f Blade: wach kaykhli l HTML kima howa wla kay7mih? Fker f escaping.",
        "text": "What does this Blade line output? ($name is \"<b>Aymane</b>\")",
        "code": "{{ $name }}",
        "answers": [
          "<b>Aymane</b> (bold text)",
          "&lt;b&gt;Aymane&lt;/b&gt; (escaped)",
          "Nothing",
          "A Blade error"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la route parameters: chnu kat3mel {id} mli katji 9ima f l URL? Fker fih.",
        "text": "What does visiting /users/42 return?",
        "code": "Route::get('/users/{id}', function ($id) {\n    return \"User \" . $id;\n});",
        "answers": [
          "User 42",
          "User {id}",
          "404",
          "User id"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la find(1): wach kayrje3 model wa7ed wla collection? Fker fih.",
        "text": "A user with id 1 exists. What does this return?",
        "code": "$user = User::find(1);",
        "answers": [
          "An array of all users",
          "true",
          "The User model with id 1",
          "The number 1"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la @foreach: chnu kaytbe3 f kol dawra? Fker f $user->name.",
        "text": "What does this Blade block do?",
        "code": "@foreach ($users as $user)\n    {{ $user->name }}\n@endforeach",
        "answers": [
          "Prints the number of users",
          "Creates users",
          "Throws an error",
          "Prints each user's name"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la redirect(): wach kay affichi view wla kaysift l browser l blassa khra? Fker f HTTP redirect.",
        "text": "What does this do in a controller?",
        "code": "return redirect('/home');",
        "answers": [
          "Renders the home view",
          "Redirects the browser to /home",
          "Returns JSON",
          "Logs the user out"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la all(): wach kayrje3 wa7ed wla kolchi? Fker f collection.",
        "text": "What does User::all() return?",
        "code": "$users = User::all();",
        "answers": [
          "A collection of all users",
          "A single user",
          "An SQL string",
          "true"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la view(): chnu kayw9e3 b l data li kat3tiha? Fker f $name f Blade.",
        "text": "What happens here?",
        "code": "return view('profile', ['name' => 'Aymane']);",
        "answers": [
          "Redirects to /profile",
          "Returns JSON",
          "Renders profile.blade.php with $name available",
          "Downloads a file"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la request('name'): chnu kayrje3 mli kat3tih smit l input? Fker f l 9ima li tsiftat.",
        "text": "A form submitted name=Aymane. What is $name?",
        "code": "// in a controller\n$name = request('name');",
        "answers": [
          "null",
          "$_POST array",
          "The whole request object",
          "Aymane"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la Route::post: chnu l far9 binha w bin Route::get? Fker f l HTTP method.",
        "text": "What does this line define?",
        "code": "Route::post('/login', [AuthController::class, 'login']);",
        "answers": [
          "A GET route to /login",
          "A POST route to /login handled by AuthController@login",
          "A login form view",
          "A middleware"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la {!! !!}: chnu l far9 binha w bin {{ }}? Fker f raw HTML.",
        "text": "What is rendered in the browser? ($html is \"<b>Hi</b>\")",
        "code": "{!! $html !!}",
        "answers": [
          "<b>Hi</b> shown as text",
          "Hi in bold",
          "&lt;b&gt;Hi&lt;/b&gt;",
          "Nothing"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la find(999): mli l id ma kaynch, chnu kayrje3 find? Fker f null->name.",
        "text": "What happens on the second line?",
        "code": "$user = User::find(999); // no user with id 999\n$user->name;",
        "answers": [
          "It prints null",
          "An empty string",
          "Error: Attempt to read property \"name\" on null",
          "404 page"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la mass assignment: 3lach Laravel kay7mi mn create b ay fields? Fker f $fillable.",
        "text": "The User model has no $fillable set. What happens?",
        "code": "User::create(['name' => 'Aymane', 'role' => 'admin']);",
        "answers": [
          "The user is created",
          "Only 'name' is saved",
          "A 404 is returned",
          "MassAssignmentException is thrown"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la error 419: chnu na9es f l form? Fker f CSRF.",
        "text": "Submitting this form returns a 419 error. What's missing?",
        "code": "<form method=\"POST\" action=\"/save\">\n    <input name=\"title\">\n    <button>Save</button>\n</form>",
        "answers": [
          "@csrf token",
          "method=\"GET\"",
          "An id attribute",
          "enctype"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la where()->get(): wach kayrje3 wa7ed wla collection? Fker f get.",
        "text": "What does $active contain?",
        "code": "$active = User::where('active', 1)->get();",
        "answers": [
          "The first active user",
          "A collection of active users",
          "The number of active users",
          "An SQL string"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la count(): chnu kat7seb hna? Fker f 3adad l users.",
        "text": "What is $count?",
        "code": "$count = User::all()->count();",
        "answers": [
          "A collection",
          "The last user",
          "The number of users",
          "Always 1"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la l ordre dyal routes: chkun kaytmatcha lwel m3a /users/create? Fker f {id}.",
        "text": "Visiting /users/create shows...?",
        "code": "Route::get('/users/{id}', fn($id) => \"show $id\");\nRoute::get('/users/create', fn() => \"create form\");",
        "answers": [
          "The create form",
          "404",
          "A redirect",
          "\"show create\" (the {id} route catches it first)"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la config cache: chnu khass tdir bach l app t9ra .env jdid? Fker f artisan commands dyal config.",
        "text": "After editing .env, the app still uses the old values (config is cached). Which command fixes it?",
        "answers": [
          "php artisan config:clear",
          "php artisan migrate",
          "composer update",
          "php artisan serve"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la has(): mta kayrje3 true? Fker f wjod l input f l request.",
        "text": "When is the block executed?",
        "code": "if ($request->has('email')) { ... }",
        "answers": [
          "Always",
          "Only when the request contains an 'email' input",
          "Only for GET requests",
          "Never"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la first(): mli ma kayn walo, chnu kayrje3 - null wla collection khawya? Fker fih.",
        "text": "No user has that email. What is $user?",
        "code": "$user = User::where('email', 'a@x.com')->first();",
        "answers": [
          "An empty collection",
          "false",
          "null",
          "An empty User"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la belongsTo: l post kayntami l chkun? Fker f l author dyalo.",
        "text": "What is printed? ($post is a Post)",
        "code": "class Post extends Model {\n    public function user() {\n        return $this->belongsTo(User::class);\n    }\n}\necho $post->user->name;",
        "answers": [
          "All users' names",
          "The post title",
          "The post author's name",
          "null"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la hasMany: l user 3ndo ch7al mn post? Fker f collection.",
        "text": "What is $posts?",
        "code": "class User extends Model {\n    public function posts() {\n        return $this->hasMany(Post::class);\n    }\n}\n$posts = $user->posts;",
        "answers": [
          "A collection of the user's posts",
          "A single post",
          "An SQL string",
          "null"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la N+1: 3lach kayn bzzaf dyal queries f l loop? Fker f eager loading.",
        "text": "With 100 posts, what's the performance problem and the fix?",
        "code": "$posts = Post::all();\nforeach ($posts as $post) {\n    echo $post->user->name;\n}",
        "answers": [
          "No problem",
          "Too much memory — fix with first()",
          "Slow view — fix with @csrf",
          "N+1 queries — fix with Post::with('user')->get()"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la query builder: chnu howa l filter w chnu howa l tri? Fker f age w name.",
        "text": "What does this return?",
        "code": "$users = User::where('age', '>', 18)->orderBy('name')->get();",
        "answers": [
          "All users sorted by age",
          "Users over 18 sorted by name",
          "The oldest user",
          "Users under 18"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la create 3la relation: wach l comment kaytlinka wahdo l post? Fker f foreign key.",
        "text": "What happens?",
        "code": "$post->comments()->create(['body' => 'Nice!']);",
        "answers": [
          "A comment is created without a post",
          "The post is updated",
          "A comment is created and linked to the post",
          "An error — comments() is not a method"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la chaining: l where kat7ded chkun? Fker f posts dyal had l user.",
        "text": "What is $published?",
        "code": "$published = $user->posts()->where('published', true)->get();",
        "answers": [
          "Only the user's published posts",
          "All of the user's posts",
          "All published posts in the DB",
          "true/false"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la attach: chnu kaytzad f l pivot table? Fker f ligne jjdida katlinki user w role.",
        "text": "roles() is belongsToMany. What does this do?",
        "code": "$user->roles()->attach($roleId);",
        "answers": [
          "Replaces all roles",
          "Deletes the role",
          "Creates a new user",
          "Adds a row in the pivot table linking user and role"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la withCount: chnu hiya comments_count - ra9m wla collection? Fker fih.",
        "text": "What is printed?",
        "code": "$posts = Post::withCount('comments')->get();\necho $posts[0]->comments_count;",
        "answers": [
          "The comments collection",
          "The number of comments on the first post",
          "null",
          "An error"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la sum('price'): chnu katjme3? Fker f l prices dyal l items.",
        "text": "What is $total?",
        "code": "$total = $order->items->sum('price');",
        "answers": [
          "The number of items",
          "The highest price",
          "The sum of all item prices",
          "A collection"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la nested eager loading: chnu kaytloada m3a users? Fker f posts w comments dyalhom.",
        "text": "What does with('posts.comments') do?",
        "code": "$users = User::with('posts.comments')->get();",
        "answers": [
          "Loads users with posts and each post's comments, eagerly",
          "Loads only comments",
          "Deletes posts without comments",
          "Sorts by comments"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la query builder: chnu homa l conditions? Fker f active w age.",
        "text": "What does this return?",
        "code": "$users = DB::table('users')\n    ->where('active', 1)\n    ->where('age', '>', 18)\n    ->get();",
        "answers": [
          "All users",
          "Active users under 18",
          "The first user",
          "Active users over 18"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la firstOrFail: chnu l far9 binha w bin first() mli ma kayn walo? Fker fih.",
        "text": "No user has that email. What happens?",
        "code": "$user = User::where('email', $email)->firstOrFail();",
        "answers": [
          "$user is null",
          "A 404 response is thrown",
          "An empty user is returned",
          "The query keeps retrying"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la updateOrCreate: mli l user kayn deja, wach kaytzad wa7ed jdid? Fker f update.",
        "text": "A user with $email already exists. What happens?",
        "code": "User::updateOrCreate(\n    ['email' => $email],\n    ['name' => $name]\n);",
        "answers": [
          "A duplicate is created",
          "Nothing happens",
          "The existing user's name is updated",
          "An exception is thrown"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la middleware auth: guest li ma msjelch fin kaymchi? Fker f login.",
        "text": "A guest (not logged in) visits /dashboard. What happens?",
        "code": "Route::get('/dashboard', [DashController::class, 'index'])\n    ->middleware('auth');",
        "answers": [
          "Redirected to the login page",
          "The dashboard renders",
          "404",
          "A blank page"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la validation: mli l email ghalet, chnu kayw9e3? Fker f redirect back m3a errors.",
        "text": "The submitted email is 'not-an-email'. What happens?",
        "code": "$request->validate([\n    'email' => 'required|email',\n]);",
        "answers": [
          "It passes",
          "A 500 error",
          "The email is auto-corrected",
          "Validation fails — redirected back with errors"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la chunk(): chnu l fayda m3a 10,000 users? Fker f batches dyal 100.",
        "text": "With 10,000 users, what does chunk() do?",
        "code": "User::chunk(100, function ($users) {\n    // send newsletter\n});",
        "answers": [
          "Loads all 10,000 at once",
          "Processes users in batches of 100",
          "Sends only 100 emails",
          "Deletes users in batches"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la Cache::remember: tanya merra f 60s, wach kaymchi l DB? Fker f cache hit.",
        "text": "What happens on the second request within 60 seconds?",
        "code": "$users = Cache::remember('users', 60, function () {\n    return User::all();\n});",
        "answers": [
          "The DB is queried again",
          "The cache is deleted",
          "The cached users are returned, no DB query",
          "An error"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la transactions: mli katw9e3 exception, chnu kayw9e3 l save? Fker f rollback.",
        "text": "What happens to the saved order?",
        "code": "DB::transaction(function () {\n    $order->save();\n    throw new \\Exception('oops');\n});",
        "answers": [
          "It is rolled back (not saved)",
          "It stays saved",
          "It is saved twice",
          "The app crashes permanently"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la response()->json: chnu kaywsel l client - HTML wla JSON? Fker f status 201.",
        "text": "What does the client receive?",
        "code": "return response()->json(['ok' => true], 201);",
        "answers": [
          "HTML page",
          "JSON with status 200",
          "A redirect",
          "JSON {\"ok\":true} with status 201"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la SoftDeletes: wach delete katmse7 nihaiyan? Fker f deleted_at.",
        "text": "After this, is the user in $all? (User uses SoftDeletes)",
        "code": "$user = User::find(1);\n$user->delete();\n$all = User::all();",
        "answers": [
          "Yes",
          "No — deleted_at is set and it's excluded",
          "Only if restored",
          "The table is empty"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la route model binding: mli l user ma kaynch, chnu kaydir Laravel automatiquement? Fker fih.",
        "text": "Visiting /users/999 with no such user. What happens? (implicit route model binding)",
        "code": "Route::get('/users/{user}', function (User $user) {\n    return $user->name;\n});",
        "answers": [
          "A 404 is returned automatically",
          "null is printed",
          "An empty page",
          "It returns user 999 anyway"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la get() bla nata2ij: wach kayrje3 null? Fker f empty collection.",
        "text": "No user matches. What is $none?",
        "code": "$none = User::where('active', 9)->get();",
        "answers": [
          "null",
          "false",
          "An empty collection (not null)",
          "An exception"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la update 3la model: chnu kayrje3 - l model wla true/false? Fker fih.",
        "text": "The update succeeds. What is $ok?",
        "code": "$ok = $user->update(['name' => 'X']);",
        "answers": [
          "The updated User",
          "true",
          "The number of rows",
          "null"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la collections: chnu kaydir map l kol element? Fker f *2.",
        "text": "What is $names?",
        "code": "$names = collect([1, 2, 3])\n    ->map(fn($n) => $n * 2)\n    ->toArray();",
        "answers": [
          "[1, 2, 3]",
          "A collection",
          "null",
          "[2, 4, 6]"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la Str::slug: chnu kaydir l string? Fker f lowercase w dashes.",
        "text": "What is printed?",
        "code": "echo Str::slug('Hello World!');",
        "answers": [
          "hello-world",
          "Hello World!",
          "hello_world",
          "Hello-World"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la Carbon: now()->addDay() chnu kat3ti? Fker f isTomorrow().",
        "text": "What is printed?",
        "code": "var_dump(now()->addDay()->isTomorrow());",
        "answers": [
          "bool(false)",
          "Tomorrow's date",
          "bool(true)",
          "An error"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la wasRecentlyCreated: mor create, wach l model jdid? Fker fih.",
        "text": "What is printed?",
        "code": "$fresh = User::create(['name' => 'Z']);\nvar_dump($fresh->wasRecentlyCreated);",
        "answers": [
          "bool(false)",
          "bool(true)",
          "NULL",
          "The new id"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la update 3la builder: chnu kayrje3 - boolean wla 3adad? Fker f affected rows.",
        "text": "What does update() return on a query builder?",
        "code": "User::where('active', 1)->update(['banned' => true]);",
        "answers": [
          "true/false",
          "The collection",
          "null",
          "The number of affected rows"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la insertGetId: chnu kayrje3 - ghir l id wla l row kamla? Fker fih.",
        "text": "What is $id?",
        "code": "$id = DB::table('users')->insertGetId(['name' => 'A']);",
        "answers": [
          "The new user's id",
          "true",
          "The whole row",
          "null"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la session(): kifach kat7et 9ima w kat9raha? Fker f l key w l value.",
        "text": "What is $theme?",
        "code": "session(['theme' => 'dark']);\n$theme = session('theme');",
        "answers": [
          "null",
          "['theme' => 'dark']",
          "'dark'",
          "An error"
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
        "explain_dr": "So2al kaysewlk 3la routes f Laravel: chnu kayw9e3 mli katzoor /hello? Fker f l return dyal l closure.",
        "text": "Que retourne la visite de /hello ?",
        "code": "Route::get('/hello', function () {\n    return 'Hello!';\n});",
        "answers": [
          "Hello!",
          "la vue hello.blade.php",
          "404",
          "Une page vide"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la {{ }} f Blade: wach kaykhli l HTML kima howa wla kay7mih? Fker f escaping.",
        "text": "Qu'affiche cette ligne Blade ? ($name vaut \"<b>Aymane</b>\")",
        "code": "{{ $name }}",
        "answers": [
          "<b>Aymane</b> (texte en gras)",
          "&lt;b&gt;Aymane&lt;/b&gt; (échappé)",
          "Rien",
          "Une erreur Blade"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la route parameters: chnu kat3mel {id} mli katji 9ima f l URL? Fker fih.",
        "text": "Que retourne la visite de /users/42 ?",
        "code": "Route::get('/users/{id}', function ($id) {\n    return \"User \" . $id;\n});",
        "answers": [
          "User 42",
          "User {id}",
          "404",
          "User id"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la find(1): wach kayrje3 model wa7ed wla collection? Fker fih.",
        "text": "Un utilisateur avec l'id 1 existe. Que retourne ceci ?",
        "code": "$user = User::find(1);",
        "answers": [
          "Un tableau de tous les utilisateurs",
          "true",
          "Le modèle User avec l'id 1",
          "Le nombre 1"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la @foreach: chnu kaytbe3 f kol dawra? Fker f $user->name.",
        "text": "Que fait ce bloc Blade ?",
        "code": "@foreach ($users as $user)\n    {{ $user->name }}\n@endforeach",
        "answers": [
          "Affiche le nombre d'utilisateurs",
          "Crée des utilisateurs",
          "Lève une erreur",
          "Affiche le nom de chaque utilisateur"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la redirect(): wach kay affichi view wla kaysift l browser l blassa khra? Fker f HTTP redirect.",
        "text": "Que fait ceci dans un contrôleur ?",
        "code": "return redirect('/home');",
        "answers": [
          "Affiche la vue home",
          "Redirige le navigateur vers /home",
          "Retourne du JSON",
          "Déconnecte l'utilisateur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la all(): wach kayrje3 wa7ed wla kolchi? Fker f collection.",
        "text": "Que retourne User::all() ?",
        "code": "$users = User::all();",
        "answers": [
          "Une collection de tous les utilisateurs",
          "Un seul utilisateur",
          "Une chaîne SQL",
          "true"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la view(): chnu kayw9e3 b l data li kat3tiha? Fker f $name f Blade.",
        "text": "Que se passe-t-il ici ?",
        "code": "return view('profile', ['name' => 'Aymane']);",
        "answers": [
          "Redirige vers /profile",
          "Retourne du JSON",
          "Affiche profile.blade.php avec $name disponible",
          "Télécharge un fichier"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la request('name'): chnu kayrje3 mli kat3tih smit l input? Fker f l 9ima li tsiftat.",
        "text": "Un formulaire a envoyé name=Aymane. Que vaut $name ?",
        "code": "// dans un contrôleur\n$name = request('name');",
        "answers": [
          "null",
          "le tableau $_POST",
          "Tout l'objet requête",
          "Aymane"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "So2al kaysewlk 3la Route::post: chnu l far9 binha w bin Route::get? Fker f l HTTP method.",
        "text": "Que définit cette ligne ?",
        "code": "Route::post('/login', [AuthController::class, 'login']);",
        "answers": [
          "Une route GET vers /login",
          "Une route POST vers /login gérée par AuthController@login",
          "Une vue de formulaire de connexion",
          "Un middleware"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la {!! !!}: chnu l far9 binha w bin {{ }}? Fker f raw HTML.",
        "text": "Qu'est-ce qui s'affiche dans le navigateur ? ($html vaut \"<b>Hi</b>\")",
        "code": "{!! $html !!}",
        "answers": [
          "<b>Hi</b> affiché comme texte",
          "Hi en gras",
          "&lt;b&gt;Hi&lt;/b&gt;",
          "Rien"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la find(999): mli l id ma kaynch, chnu kayrje3 find? Fker f null->name.",
        "text": "Que se passe-t-il à la deuxième ligne ?",
        "code": "$user = User::find(999); // aucun utilisateur avec l'id 999\n$user->name;",
        "answers": [
          "Ça affiche null",
          "Une chaîne vide",
          "Erreur : Attempt to read property \"name\" on null",
          "Page 404"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la mass assignment: 3lach Laravel kay7mi mn create b ay fields? Fker f $fillable.",
        "text": "Le modèle User n'a pas de $fillable. Que se passe-t-il ?",
        "code": "User::create(['name' => 'Aymane', 'role' => 'admin']);",
        "answers": [
          "L'utilisateur est créé",
          "Seul 'name' est enregistré",
          "Un 404 est retourné",
          "MassAssignmentException est levée"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la error 419: chnu na9es f l form? Fker f CSRF.",
        "text": "L'envoi de ce formulaire retourne une erreur 419. Que manque-t-il ?",
        "code": "<form method=\"POST\" action=\"/save\">\n    <input name=\"title\">\n    <button>Save</button>\n</form>",
        "answers": [
          "Le token @csrf",
          "method=\"GET\"",
          "Un attribut id",
          "enctype"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la where()->get(): wach kayrje3 wa7ed wla collection? Fker f get.",
        "text": "Que contient $active ?",
        "code": "$active = User::where('active', 1)->get();",
        "answers": [
          "Le premier utilisateur actif",
          "Une collection des utilisateurs actifs",
          "Le nombre d'utilisateurs actifs",
          "Une chaîne SQL"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la count(): chnu kat7seb hna? Fker f 3adad l users.",
        "text": "Que vaut $count ?",
        "code": "$count = User::all()->count();",
        "answers": [
          "Une collection",
          "Le dernier utilisateur",
          "Le nombre d'utilisateurs",
          "Toujours 1"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la l ordre dyal routes: chkun kaytmatcha lwel m3a /users/create? Fker f {id}.",
        "text": "La visite de /users/create affiche... ?",
        "code": "Route::get('/users/{id}', fn($id) => \"show $id\");\nRoute::get('/users/create', fn() => \"create form\");",
        "answers": [
          "Le formulaire de création",
          "404",
          "Une redirection",
          "\"show create\" (la route {id} l'attrape en premier)"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la config cache: chnu khass tdir bach l app t9ra .env jdid? Fker f artisan commands dyal config.",
        "text": "Après modification du .env, l'app utilise toujours les anciennes valeurs (config en cache). Quelle commande corrige ça ?",
        "answers": [
          "php artisan config:clear",
          "php artisan migrate",
          "composer update",
          "php artisan serve"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la has(): mta kayrje3 true? Fker f wjod l input f l request.",
        "text": "Quand le bloc est-il exécuté ?",
        "code": "if ($request->has('email')) { ... }",
        "answers": [
          "Toujours",
          "Seulement quand la requête contient un champ 'email'",
          "Seulement pour les requêtes GET",
          "Jamais"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al kaysewlk 3la first(): mli ma kayn walo, chnu kayrje3 - null wla collection khawya? Fker fih.",
        "text": "Aucun utilisateur n'a cet email. Que vaut $user ?",
        "code": "$user = User::where('email', 'a@x.com')->first();",
        "answers": [
          "Une collection vide",
          "false",
          "null",
          "Un User vide"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la belongsTo: l post kayntami l chkun? Fker f l author dyalo.",
        "text": "Qu'est-ce qui s'affiche ? ($post est un Post)",
        "code": "class Post extends Model {\n    public function user() {\n        return $this->belongsTo(User::class);\n    }\n}\necho $post->user->name;",
        "answers": [
          "Les noms de tous les utilisateurs",
          "Le titre du post",
          "Le nom de l'auteur du post",
          "null"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la hasMany: l user 3ndo ch7al mn post? Fker f collection.",
        "text": "Que vaut $posts ?",
        "code": "class User extends Model {\n    public function posts() {\n        return $this->hasMany(Post::class);\n    }\n}\n$posts = $user->posts;",
        "answers": [
          "Une collection des posts de l'utilisateur",
          "Un seul post",
          "Une chaîne SQL",
          "null"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la N+1: 3lach kayn bzzaf dyal queries f l loop? Fker f eager loading.",
        "text": "Avec 100 posts, quel est le problème de performance et sa solution ?",
        "code": "$posts = Post::all();\nforeach ($posts as $post) {\n    echo $post->user->name;\n}",
        "answers": [
          "Aucun problème",
          "Trop de mémoire — corriger avec first()",
          "Vue lente — corriger avec @csrf",
          "Requêtes N+1 — corriger avec Post::with('user')->get()"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la query builder: chnu howa l filter w chnu howa l tri? Fker f age w name.",
        "text": "Que retourne ceci ?",
        "code": "$users = User::where('age', '>', 18)->orderBy('name')->get();",
        "answers": [
          "Tous les utilisateurs triés par âge",
          "Les utilisateurs de plus de 18 ans triés par nom",
          "L'utilisateur le plus âgé",
          "Les utilisateurs de moins de 18 ans"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la create 3la relation: wach l comment kaytlinka wahdo l post? Fker f foreign key.",
        "text": "Que se passe-t-il ?",
        "code": "$post->comments()->create(['body' => 'Nice!']);",
        "answers": [
          "Un commentaire est créé sans post",
          "Le post est mis à jour",
          "Un commentaire est créé et lié au post",
          "Une erreur — comments() n'est pas une méthode"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la chaining: l where kat7ded chkun? Fker f posts dyal had l user.",
        "text": "Que vaut $published ?",
        "code": "$published = $user->posts()->where('published', true)->get();",
        "answers": [
          "Seulement les posts publiés de l'utilisateur",
          "Tous les posts de l'utilisateur",
          "Tous les posts publiés de la BDD",
          "true/false"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la attach: chnu kaytzad f l pivot table? Fker f ligne jjdida katlinki user w role.",
        "text": "roles() est un belongsToMany. Que fait ceci ?",
        "code": "$user->roles()->attach($roleId);",
        "answers": [
          "Remplace tous les rôles",
          "Supprime le rôle",
          "Crée un nouvel utilisateur",
          "Ajoute une ligne dans la table pivot liant user et rôle"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la withCount: chnu hiya comments_count - ra9m wla collection? Fker fih.",
        "text": "Qu'est-ce qui s'affiche ?",
        "code": "$posts = Post::withCount('comments')->get();\necho $posts[0]->comments_count;",
        "answers": [
          "La collection des commentaires",
          "Le nombre de commentaires du premier post",
          "null",
          "Une erreur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la sum('price'): chnu katjme3? Fker f l prices dyal l items.",
        "text": "Que vaut $total ?",
        "code": "$total = $order->items->sum('price');",
        "answers": [
          "Le nombre d'articles",
          "Le prix le plus élevé",
          "La somme des prix des articles",
          "Une collection"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al kaysewlk 3la nested eager loading: chnu kaytloada m3a users? Fker f posts w comments dyalhom.",
        "text": "Que fait with('posts.comments') ?",
        "code": "$users = User::with('posts.comments')->get();",
        "answers": [
          "Charge les users avec leurs posts et les commentaires de chaque post, en eager",
          "Charge seulement les commentaires",
          "Supprime les posts sans commentaires",
          "Trie par commentaires"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la query builder: chnu homa l conditions? Fker f active w age.",
        "text": "Que retourne ceci ?",
        "code": "$users = DB::table('users')\n    ->where('active', 1)\n    ->where('age', '>', 18)\n    ->get();",
        "answers": [
          "Tous les utilisateurs",
          "Les utilisateurs actifs de moins de 18 ans",
          "Le premier utilisateur",
          "Les utilisateurs actifs de plus de 18 ans"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la firstOrFail: chnu l far9 binha w bin first() mli ma kayn walo? Fker fih.",
        "text": "Aucun utilisateur n'a cet email. Que se passe-t-il ?",
        "code": "$user = User::where('email', $email)->firstOrFail();",
        "answers": [
          "$user vaut null",
          "Une réponse 404 est levée",
          "Un utilisateur vide est retourné",
          "La requête réessaie en boucle"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la updateOrCreate: mli l user kayn deja, wach kaytzad wa7ed jdid? Fker f update.",
        "text": "Un utilisateur avec cet $email existe déjà. Que se passe-t-il ?",
        "code": "User::updateOrCreate(\n    ['email' => $email],\n    ['name' => $name]\n);",
        "answers": [
          "Un doublon est créé",
          "Rien ne se passe",
          "Le nom de l'utilisateur existant est mis à jour",
          "Une exception est levée"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la middleware auth: guest li ma msjelch fin kaymchi? Fker f login.",
        "text": "Un invité (non connecté) visite /dashboard. Que se passe-t-il ?",
        "code": "Route::get('/dashboard', [DashController::class, 'index'])\n    ->middleware('auth');",
        "answers": [
          "Redirigé vers la page de connexion",
          "Le dashboard s'affiche",
          "404",
          "Une page blanche"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la validation: mli l email ghalet, chnu kayw9e3? Fker f redirect back m3a errors.",
        "text": "L'email soumis est 'not-an-email'. Que se passe-t-il ?",
        "code": "$request->validate([\n    'email' => 'required|email',\n]);",
        "answers": [
          "Ça passe",
          "Une erreur 500",
          "L'email est auto-corrigé",
          "La validation échoue — redirection avec les erreurs"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la chunk(): chnu l fayda m3a 10,000 users? Fker f batches dyal 100.",
        "text": "Avec 10 000 utilisateurs, que fait chunk() ?",
        "code": "User::chunk(100, function ($users) {\n    // send newsletter\n});",
        "answers": [
          "Charge les 10 000 d'un coup",
          "Traite les utilisateurs par lots de 100",
          "Envoie seulement 100 emails",
          "Supprime les utilisateurs par lots"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la Cache::remember: tanya merra f 60s, wach kaymchi l DB? Fker f cache hit.",
        "text": "Que se passe-t-il à la deuxième requête dans les 60 secondes ?",
        "code": "$users = Cache::remember('users', 60, function () {\n    return User::all();\n});",
        "answers": [
          "La BDD est interrogée à nouveau",
          "Le cache est supprimé",
          "Les utilisateurs en cache sont retournés, sans requête BDD",
          "Une erreur"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la transactions: mli katw9e3 exception, chnu kayw9e3 l save? Fker f rollback.",
        "text": "Qu'advient-il de la commande enregistrée ?",
        "code": "DB::transaction(function () {\n    $order->save();\n    throw new \\Exception('oops');\n});",
        "answers": [
          "Elle est annulée (rollback, non enregistrée)",
          "Elle reste enregistrée",
          "Elle est enregistrée deux fois",
          "L'app plante définitivement"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la response()->json: chnu kaywsel l client - HTML wla JSON? Fker f status 201.",
        "text": "Que reçoit le client ?",
        "code": "return response()->json(['ok' => true], 201);",
        "answers": [
          "Une page HTML",
          "Du JSON avec le statut 200",
          "Une redirection",
          "Du JSON {\"ok\":true} avec le statut 201"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al kaysewlk 3la SoftDeletes: wach delete katmse7 nihaiyan? Fker f deleted_at.",
        "text": "Après ceci, l'utilisateur est-il dans $all ? (User utilise SoftDeletes)",
        "code": "$user = User::find(1);\n$user->delete();\n$all = User::all();",
        "answers": [
          "Oui",
          "Non — deleted_at est défini et il est exclu",
          "Seulement si restauré",
          "La table est vide"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la route model binding: mli l user ma kaynch, chnu kaydir Laravel automatiquement? Fker fih.",
        "text": "Visite de /users/999 sans utilisateur existant. Que se passe-t-il ? (route model binding implicite)",
        "code": "Route::get('/users/{user}', function (User $user) {\n    return $user->name;\n});",
        "answers": [
          "Un 404 est retourné automatiquement",
          "null s'affiche",
          "Une page vide",
          "Ça retourne quand même l'utilisateur 999"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la get() bla nata2ij: wach kayrje3 null? Fker f empty collection.",
        "text": "Aucun utilisateur ne correspond. Que vaut $none ?",
        "code": "$none = User::where('active', 9)->get();",
        "answers": [
          "null",
          "false",
          "Une collection vide (pas null)",
          "Une exception"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la update 3la model: chnu kayrje3 - l model wla true/false? Fker fih.",
        "text": "La mise à jour réussit. Que vaut $ok ?",
        "code": "$ok = $user->update(['name' => 'X']);",
        "answers": [
          "Le User mis à jour",
          "true",
          "Le nombre de lignes",
          "null"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la collections: chnu kaydir map l kol element? Fker f *2.",
        "text": "Que vaut $names ?",
        "code": "$names = collect([1, 2, 3])\n    ->map(fn($n) => $n * 2)\n    ->toArray();",
        "answers": [
          "[1, 2, 3]",
          "Une collection",
          "null",
          "[2, 4, 6]"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la Str::slug: chnu kaydir l string? Fker f lowercase w dashes.",
        "text": "Qu'est-ce qui s'affiche ?",
        "code": "echo Str::slug('Hello World!');",
        "answers": [
          "hello-world",
          "Hello World!",
          "hello_world",
          "Hello-World"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la Carbon: now()->addDay() chnu kat3ti? Fker f isTomorrow().",
        "text": "Qu'est-ce qui s'affiche ?",
        "code": "var_dump(now()->addDay()->isTomorrow());",
        "answers": [
          "bool(false)",
          "La date de demain",
          "bool(true)",
          "Une erreur"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la wasRecentlyCreated: mor create, wach l model jdid? Fker fih.",
        "text": "Qu'est-ce qui s'affiche ?",
        "code": "$fresh = User::create(['name' => 'Z']);\nvar_dump($fresh->wasRecentlyCreated);",
        "answers": [
          "bool(false)",
          "bool(true)",
          "NULL",
          "Le nouvel id"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la update 3la builder: chnu kayrje3 - boolean wla 3adad? Fker f affected rows.",
        "text": "Que retourne update() sur un query builder ?",
        "code": "User::where('active', 1)->update(['banned' => true]);",
        "answers": [
          "true/false",
          "La collection",
          "null",
          "Le nombre de lignes affectées"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la insertGetId: chnu kayrje3 - ghir l id wla l row kamla? Fker fih.",
        "text": "Que vaut $id ?",
        "code": "$id = DB::table('users')->insertGetId(['name' => 'A']);",
        "answers": [
          "L'id du nouvel utilisateur",
          "true",
          "Toute la ligne",
          "null"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "So2al kaysewlk 3la session(): kifach kat7et 9ima w kat9raha? Fker f l key w l value.",
        "text": "Que vaut $theme ?",
        "code": "session(['theme' => 'dark']);\n$theme = session('theme');",
        "answers": [
          "null",
          "['theme' => 'dark']",
          "'dark'",
          "Une erreur"
        ],
        "correct": 2,
        "selection": null
      }
    ]
  }
];
