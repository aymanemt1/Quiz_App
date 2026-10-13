export const clerkQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "So2al 3la Clerk: chnu hiya l khidma li kat-9adem? Fker f l mochkil li kat-7el — authentication w user management — machi database wla hosting.",
        "text": "What problem does Clerk solve for a React app?",
        "answers": [
          "It hosts your static files",
          "It provides ready-made authentication and user management",
          "It replaces your database",
          "It compiles your JSX"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al 3la ClerkProvider: context provider lazem ykon f l root bach kolchi y-wsal l auth state. Fker fin kat-7et l providers f React.",
        "text": "Where must <ClerkProvider> be placed so every component can access auth state?",
        "code": "import { ClerkProvider } from \"@clerk/clerk-react\";\n\n// ???\n<App />",
        "answers": [
          "Only around the login page",
          "At the root, wrapping the whole app",
          "Inside each component that needs auth",
          "In the index.css file"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al 3la SignedIn: had l component kat-afficher l children ghir ila user signed in. Fker chnu smito kay-gol.",
        "text": "Which component renders its children only when the user is signed in?",
        "code": "<SignedIn>\n  <Dashboard />\n</SignedIn>",
        "answers": [
          "<SignedOut>",
          "<AuthWall>",
          "<SignedIn>",
          "<PrivateRoute>"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al 3la SignedOut: l 3aks dyal SignedIn — kat-afficher content ghir l guests. Fker chnu ghadi t-weri l wa7ed li ma signed in-ch.",
        "text": "You want to show a 'Log in' prompt only to visitors who are NOT signed in. Which component?",
        "code": "<SignedOut>\n  <p>Please log in</p>\n</SignedOut>",
        "answers": [
          "<SignedIn>",
          "<SignedOut>",
          "<GuestOnly>",
          "<Anonymous>"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "So2al 3la useUser: had l hook kay-rja3 l user object (profile data). Fker ina hook kay-3ti l user nafso.",
        "text": "Which hook gives you the current user's profile data (name, email, avatar)?",
        "code": "const { user } = ???;\nconsole.log(user?.firstName);",
        "answers": [
          "useAuth()",
          "useSession()",
          "useUser()",
          "useClerkUser()"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "So2al 3la <SignIn />: Clerk 3ndo prebuilt components jahzin. Fker chnu kay-rendre <SignIn />.",
        "text": "What does the <SignIn /> component render?",
        "answers": [
          "A complete, ready-made sign-in UI (email, password, OAuth buttons)",
          "A JSON object with the session token",
          "A redirect to your backend",
          "Nothing — you must build the form yourself"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al 3la publishable key: Clerk kay-sta3mel joj keys — wa7ed public w wa7ed secret. Fker chnu prefix dyal l public key li kat-7et f frontend.",
        "text": "Which key is safe to expose in your frontend code?",
        "code": "REACT_APP_CLERK_PUBLISHABLE_KEY=pk_test_abc123",
        "answers": [
          "The secret key (sk_...)",
          "The publishable key (pk_...)",
          "Your database password",
          "The webhook signing secret"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "So2al 3la UserButton: had l component kay-weri avatar w menu jahz. Fker chnu kay-dir l user melli kay-cliquer 3lih.",
        "text": "What does <UserButton /> render?",
        "code": "<SignedIn>\n  <UserButton />\n</SignedIn>",
        "answers": [
          "A sign-up form",
          "The user's avatar with a menu (profile, sign out)",
          "A list of all users",
          "The organization switcher"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "So2al 3la <SignUp />: b7al <SignIn /> walakin l sign-up. Fker l far9 binathom.",
        "text": "A new visitor needs to create an account. Which prebuilt component?",
        "answers": [
          "<SignIn />",
          "<SignUp />",
          "<UserButton />",
          "<Register />"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "So2al 3la secret key: sk_... 3ndo full access l API — ila t-exposa, ay wa7ed y9der y-dir ay 7aja. Fker fin khaso y-b9a.",
        "text": "Where must the Clerk secret key (sk_...) live?",
        "answers": [
          "In the frontend bundle",
          "In a public GitHub repo",
          "Server-side only, never in the browser",
          "In localStorage"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "So2al 3la useAuth: had l hook kay-rja3 auth state w helpers (userId, getToken, signOut) — machi l user object kamel. Fker chnu kay-7taj l component bach y-3ref wach signed in.",
        "text": "What does useAuth() return?",
        "code": "const { isSignedIn, userId, getToken, signOut } = useAuth();",
        "answers": [
          "Only the user's avatar URL",
          "Auth state and helpers: isSignedIn, userId, getToken, signOut",
          "The full user profile object",
          "A list of organizations"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "So2al 3la nav bar: bghiti t-weri Sign in l guests w avatar l signed-in users. Fker kifach kat-jma3 SignedIn w SignedOut f nafs l blassa.",
        "text": "Complete the navbar so guests see 'Sign in' and members see their avatar:",
        "code": "<nav>\n  <SignedOut><SignInButton /></SignedOut>\n  <SignedIn>???</SignedIn>\n</nav>",
        "answers": [
          "<SignUpButton />",
          "<UserButton />",
          "<SignOut />",
          "<Avatar />"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "So2al 3la route protection: f SPA, 9bel ma t-afficher page khasa, khask t-checki auth state. Fker chnu lazem t-tsena 9bel ma t-7kem (isLoaded).",
        "text": "Why must you check isLoaded before redirecting an unsigned user away from a protected page?",
        "code": "const { isLoaded, isSignedIn } = useAuth();\nif (!isLoaded) return <Spinner />;\nif (!isSignedIn) return <Navigate to=\"/sign-in\" />;",
        "answers": [
          "isLoaded is always true, it is just a formality",
          "Auth state loads asynchronously — without it you might redirect a signed-in user by mistake",
          "It prevents the sign-in page from rendering",
          "It encrypts the redirect URL"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "So2al 3la SignOutButton: ila bghiti button khasa b sign out (mach menu dyal avatar). Fker chnu smit l component l mnasba.",
        "text": "You want a standalone 'Log out' button in your settings page. Which component?",
        "answers": [
          "<SignOut />",
          "<SignOutButton />",
          "<UserButton mode=\"logout\" />",
          "<LogoutForm />"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "So2al 3la webhooks: Clerk y9der y-notifier backend dyalk melli user t-crea wla t-update. Fker chnu smit had l mechanism.",
        "text": "Your backend needs to create a database row every time a user signs up. Which Clerk feature delivers user.created events to your server?",
        "answers": [
          "Polling useUser() every second",
          "Webhooks",
          "localStorage listeners",
          "The <SignUp /> onSuccess prop"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al 3la svix: webhook requests ymkn y-tspoofaw — lazem t-verifi signature. Fker chnu l library li kat-sta3mel l verification.",
        "text": "How do you verify that an incoming Clerk webhook request is genuine?",
        "answers": [
          "Trust any POST to the endpoint",
          "Check the svix-id / svix-timestamp / svix-signature headers with the Svix Webhook verifier",
          "Compare the request IP to a hardcoded list",
          "Decode the JWT in the URL"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al 3la organizations: B2B apps kay-7tajo groups dyal users. Fker chnu smit l component li kay-khali user y-switchi bin organizations.",
        "text": "Which component lets a signed-in user switch between their organizations?",
        "answers": [
          "<UserButton />",
          "<OrganizationSwitcher />",
          "<SignIn />",
          "<TeamPicker />"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al 3la useOrganization: hook bach t-jib l organization l active w membership dyal user. Fker chnu kay-rja3.",
        "text": "What does useOrganization() give you?",
        "code": "const { organization, membership } = useOrganization();",
        "answers": [
          "The list of all Clerk users",
          "The active organization and the current user's membership in it",
          "The publishable key",
          "The session token"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "So2al 3la useSession: session hiya l login l active dyal user. Fker ina hook kay-rja3 l session object.",
        "text": "Which hook returns the current active session object?",
        "answers": [
          "useUser()",
          "useAuth()",
          "useSession()",
          "useSignIn()"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al 3la getToken: frontend khaso y-sift token l backend dyalo bach y-3ref chkon kay-sift request. Fker chnu l method li kat-jib l JWT.",
        "text": "Your React app calls your own Express API. How do you get a token to send with the request?",
        "code": "const { getToken } = useAuth();\nconst token = await getToken();\nfetch(\"/api/orders\", { headers: { Authorization: \"Bearer \" + token } });",
        "answers": [
          "Read it from document.cookie manually",
          "Call getToken() from useAuth() and send it as a Bearer token",
          "Hardcode the secret key in the fetch",
          "Use user.password"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al 3la clerkMiddleware: f Next.js, middleware kay-7mi routes 9bel ma y-wslo l page. Fker chnu l function li kat-sta3mel.",
        "text": "In a Next.js app, which middleware function from Clerk protects routes?",
        "code": "import { clerkMiddleware } from \"@clerk/nextjs/server\";",
        "answers": [
          "authMiddleware()",
          "clerkMiddleware()",
          "withClerk()",
          "protectMiddleware()"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "So2al 3la createRouteMatcher: bach t-7ded ina routes public w ina protected. Fker kifach kat-3ref l matcher.",
        "text": "How do you mark only /dashboard and /settings as protected in Clerk middleware?",
        "code": "const isProtectedRoute = createRouteMatcher([\n  \"/dashboard(.*)\",\n  \"/settings(.*)\",\n]);",
        "answers": [
          "List them in createRouteMatcher so the middleware can check each request",
          "Add them to the .env file",
          "Wrap them in <SignedIn> in the middleware file",
          "Rename the folders to (protected)"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al 3la auth().protect(): f server component wla route handler, had l method kat-forcer auth. Fker chnu kay-tra ila user ma signed in-ch.",
        "text": "What does auth().protect() do when the user is not signed in?",
        "code": "import { auth } from \"@clerk/nextjs/server\";\n\nexport async function GET() {\n  const { userId } = await auth();\n  // or: await auth.protect();\n}",
        "answers": [
          "Returns userId as null and continues",
          "Throws / redirects so the unauthenticated request never reaches your code",
          "Creates a guest account automatically",
          "Retries the request with the secret key"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al 3la auth() f server: auth() kat-rja3 userId w sessionClaims bla ma t-jib l user kamel. Fker l far9 binha w bin useUser.",
        "text": "In a Next.js Server Component, what does auth() return?",
        "answers": [
          "The full user profile with email addresses",
          "{ userId, sessionId, sessionClaims, ... } — lightweight auth facts, not the full user object",
          "A React component",
          "The publishable key"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "So2al 3la org roles: organizations 3ndhom roles b7al admin w member. Fker kifach kat-checki wach user admin f l org l active.",
        "text": "How do you check if the current user is an admin of the active organization?",
        "code": "const { has } = useAuth();\nconst isAdmin = has({ role: \"org:admin\" });",
        "answers": [
          "user.isAdmin === true",
          "has({ role: \"org:admin\" }) from useAuth()",
          "organization.plan === \"admin\"",
          "Check localStorage for \"admin\""
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "So2al 3la webhook handler: lazem t-verifi 9bel ma t-traiti event. Fker l tartib: headers -> verify -> switch 3la type.",
        "text": "What is the correct order of steps in a Clerk webhook handler?",
        "answers": [
          "Process the event, then verify the signature",
          "Verify the Svix signature first, then handle the event type (e.g. user.created)",
          "Save the raw body to the database, then verify",
          "Verify only user.deleted events"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al 3la custom JWT template: backend khaso claims zyada f token (b7al role). Fker fin kat-configuri hadchi w kifach kat-tlbo.",
        "text": "Your API needs a custom claim (e.g. role) inside the Clerk JWT. How?",
        "code": "const token = await getToken({ template: \"my-api\" });",
        "answers": [
          "Edit the token in localStorage",
          "Create a JWT template in the Clerk dashboard, then request it with getToken({ template: \"my-api\" })",
          "Append claims to the publishable key",
          "Use user.fullName as the claim"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al 3la invitations: admin y9der y-inviti members l organization. Fker chnu l method li kat-sift invitation.",
        "text": "How does an org admin invite someone to their organization via the Clerk API?",
        "answers": [
          "organization.inviteMember({ emailAddress, role })",
          "Sending them the secret key",
          "Adding their email to the .env file",
          "organization.addUser(userId)"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al 3la multi-session: Clerk kay-khali user ykon signed in b accounts m7talfin f nafs l browser. Fker chnu l feature li kat-mken hadchi.",
        "text": "A user is signed in with two accounts and wants to switch between them. Which Clerk capability is this?",
        "answers": [
          "Multi-session support — setActive() can switch the active session",
          "Two ClerkProvider wrappers",
          "Two different publishable keys",
          "Incognito mode"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al 3la isLoaded m3a useUser: b7al useAuth, user data kat-ji async. Fker chnu lazem t-checki 9bel ma t-sta3mel user.",
        "text": "What is wrong with this component?",
        "code": "const { user } = useUser();\nreturn <h1>Hello {user.firstName}</h1>;",
        "answers": [
          "Nothing, it is correct",
          "It crashes while user is still loading — must check isLoaded (or user) first",
          "useUser cannot be used in components",
          "firstName does not exist on the user object"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al debugging: app ma kat-loadi-ch auth w console kay-gol missing key. Fker ina key w fin khaso ykon.",
        "text": "The app throws: 'Missing publishableKey'. What is the fix?",
        "code": "<ClerkProvider>\n  <App />\n</ClerkProvider>",
        "answers": [
          "Add the secret key to the frontend",
          "Pass publishableKey={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY} to ClerkProvider",
          "Wrap App in <SignedIn> instead",
          "Install @clerk/backend"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "So2al 3la backend verification: backend lazem y-verifi token li jah mn frontend. Fker chnu l tool li kat-verifi signature b secret dyal Clerk.",
        "text": "How does an Express backend verify the Bearer token sent by the Clerk frontend?",
        "answers": [
          "Split the token and read the payload without verification",
          "Use Clerk's verifyToken / clerkClient with the secret key (or clerkMiddleware) to validate the signature",
          "Compare it to the publishable key",
          "Trust it if it starts with 'eyJ'"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "So2al 3la signInUrl/signUpUrl: melli route protected kat-redirecti, fin kat-mchi? Fker chnu l props dyal ClerkProvider li kat-7ded had l URLs.",
        "text": "You want unauthenticated users redirected to /sign-in and /sign-up. Where do you configure this?",
        "code": "<ClerkProvider\n  publishableKey={key}\n  signInUrl=\"/sign-in\"\n  signUpUrl=\"/sign-up\"\n>",
        "answers": [
          "In the props of <SignedOut>",
          "As signInUrl / signUpUrl props on ClerkProvider",
          "In the webhook endpoint",
          "In package.json"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al 3la webhook events: kaynin bzf event types (user.created, organizationMembership.created...). Fker chnu kay-miyez binathom.",
        "text": "Your webhook receives many events but you only care about new sign-ups. How do you filter?",
        "code": "const evt = wh.verify(payload, headers);\n// evt.type === ???",
        "answers": [
          "Check evt.type === \"user.created\" and ignore the rest",
          "Create one endpoint per event",
          "Filter by the user's email domain",
          "Webhooks only send user.created anyway"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al 3la OAuth: Google/GitHub login ma kay-7tajch code zyad f <SignIn />. Fker fin kat-7el had l providers.",
        "text": "You want 'Continue with Google' on your sign-in page. Where do you enable it?",
        "answers": [
          "Write a custom OAuth flow with fetch()",
          "Enable Google in the Clerk dashboard under Social connections — <SignIn /> shows the button automatically",
          "Add <GoogleButton /> manually",
          "It is enabled by default with no setup"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al debugging: webhook kay-rja3 400 w Clerk dashboard kay-gol signature invalid. Fker chnu l ghalat l chaye3 f l handler.",
        "text": "Your webhook handler rejects every event with an invalid-signature error. What is the most likely bug?",
        "code": "app.post(\"/webhooks\", express.json(), (req, res) => {\n  const wh = new Webhook(SECRET);\n  wh.verify(JSON.stringify(req.body), req.headers); // fails\n});",
        "answers": [
          "The endpoint URL is wrong",
          "Svix verification needs the RAW request body, not the parsed/re-stringified JSON",
          "The secret key is too short",
          "Webhooks only work with GET"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "So2al 3la <Protect>: component kat-7mi UI 7asab role wla permission. Fker chnu l props li kat-sta3mel.",
        "text": "Only org admins should see the billing panel. Which component enforces this in the UI?",
        "code": "<Protect role=\"org:admin\" fallback={<p>Not allowed</p>}>\n  <BillingPanel />\n</Protect>",
        "answers": [
          "<SignedIn role=\"admin\">",
          "<Protect role=\"org:admin\"> with a fallback",
          "<AdminOnly>",
          "{isAdmin && ...} is the only way"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "So2al 3la sessionClaims: token fih claims jahzin (b7al org role). Fker fin kat-l9ahom f server.",
        "text": "In a Server Component you need the user's org role without fetching the user. Where is it?",
        "code": "const { sessionClaims } = await auth();\n// sessionClaims.???",
        "answers": [
          "sessionClaims.org_role",
          "user.role (requires a fetch)",
          "localStorage.getItem(\"role\")",
          "It is not available in the token"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "So2al 3la dev vs prod keys: Clerk 3ndo instances m7talfin. Fker chnu l far9 bin pk_test_ w pk_live_.",
        "text": "What is the difference between pk_test_... and pk_live_... keys?",
        "answers": [
          "No difference, they are interchangeable",
          "pk_test_ belongs to the development instance (test users), pk_live_ to the production instance (real users)",
          "pk_test_ is the secret key",
          "pk_live_ only works on localhost"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al debugging: getToken() kay-rja3 null. Fker chnu l asbab l momkina — session? template?",
        "text": "await getToken() returns null even though the user is signed in. What could cause this?",
        "answers": [
          "The user is signed in, so this is impossible",
          "A requested JWT template name does not exist, or the session has no token for that template",
          "getToken only works in Server Components",
          "The publishable key is too long"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al 3la permissions: roles kbar, permissions d9a9. Fker kifach kat-checki permission mo3ayana b has().",
        "text": "Beyond roles, Clerk supports fine-grained permissions. How do you check one?",
        "code": "const { has } = useAuth();\nconst canInvite = has({ permission: \"org:sys_memberships:manage\" });",
        "answers": [
          "Permissions do not exist in Clerk",
          "has({ permission: \"org:sys_memberships:manage\" })",
          "user.permissions.includes(...)",
          "Check the JWT manually with atob()"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al 3la authorizedParties: token verification kat-7mi mn token theft. Fker chnu l option li kat-7ded l origins l ma9bolin.",
        "text": "When verifying tokens server-side, what does the authorizedParties option protect against?",
        "code": "await verifyToken(token, { authorizedParties: [\"https://myapp.com\"] });",
        "answers": [
          "It speeds up verification",
          "It rejects tokens issued for a different origin — mitigating token replay from another app",
          "It encrypts the token",
          "It refreshes the session"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "So2al 3la machine-to-machine: backend l backend bla user. Fker chnu l key li kat-sta3mel w chnu l client.",
        "text": "A cron job (no user session) needs to list users via the Clerk API. How?",
        "code": "import { createClerkClient } from \"@clerk/backend\";\nconst clerk = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });\nawait clerk.users.getUserList();",
        "answers": [
          "Use the publishable key in the browser",
          "Use the Backend SDK with the secret key server-side (machine-to-machine)",
          "Call getToken() without a session",
          "Share an admin user's password"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al 3la webhook idempotency: webhooks ymkn y-t3awdo. Fker kifach kat-7mi mn duplicate processing.",
        "text": "Clerk may deliver the same webhook event more than once. How should your handler behave?",
        "answers": [
          "Process it every time — duplicates are harmless",
          "Make handling idempotent (e.g. upsert by Clerk user id instead of blind insert)",
          "Return 500 so Clerk stops retrying",
          "Delete the endpoint after the first event"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "So2al 3la restricted sign-up: bghiti ghir nass m3aynin y-sign up (invitation-only). Fker fin kat-configuri had l restriction.",
        "text": "You want sign-up limited to invited users only. Where is this enforced?",
        "answers": [
          "Hide the <SignUp /> component with CSS",
          "In the Clerk dashboard: restrict sign-up modes / enable invitations and disable public sign-up",
          "Delete the /sign-up route",
          "It cannot be done with Clerk"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al 3la user migration: 3ndek users 9dam b passwords hashed. Fker chnu l tari9a l mnasba bach t-jibhom l Clerk.",
        "text": "How do you migrate existing users (with bcrypt password hashes) into Clerk?",
        "answers": [
          "Ask every user to re-register manually",
          "Bulk-import users via the Backend API, providing the password hashes so they keep their passwords",
          "Copy the hashes into localStorage",
          "It is impossible — Clerk cannot import passwords"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "So2al 3la short session tokens: getToken kat-jib token l API dyalk. Fker chnu l far9 bin default token w template token.",
        "text": "What is the difference between getToken() and getToken({ template: \"...\" })?",
        "answers": [
          "No difference",
          "getToken() returns the default session JWT; with a template it returns a JWT shaped by your custom JWT template (custom claims/audience)",
          "The template version never expires",
          "The template version works without sign-in"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al 3la session token lifetime: tokens 9sar l-3mor a7san l security. Fker fin kat-configuri l expiration.",
        "text": "Where do you configure how long Clerk session tokens stay valid?",
        "answers": [
          "In your React code with setTimeout()",
          "In the Clerk dashboard under Sessions / JWT settings",
          "In the publishable key string",
          "Tokens never expire"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al 3la <SignIn /> routing: f SPA b React Router, Clerk components ymkn y-khdmo b path routing. Fker chnu l props.",
        "text": "You use React Router and want /sign-in to render Clerk's sign-in UI. Which props?",
        "code": "<SignIn routing=\"path\" path=\"/sign-in\" />",
        "answers": [
          "<SignIn url=\"/sign-in\" />",
          "routing=\"path\" and path=\"/sign-in\"",
          "It works automatically with no props",
          "<SignIn route=\"/sign-in\" />"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "So2al 3la actor tokens / impersonation: admin y9der y-chof app b7al user akhor l debugging. Fker chnu l concept dyal Clerk l had l gharad.",
        "text": "Support needs to see the app exactly as a specific user sees it for debugging. Which Clerk feature covers this?",
        "answers": [
          "Sharing the user's password",
          "User impersonation (sign in as another user from the dashboard / via API)",
          "Copying their session token from devtools",
          "Creating a duplicate account"
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
        "explain_dr": "So2al 3la Clerk: chnu hiya l khidma li kat-9adem? Fker f l mochkil li kat-7el — authentication w user management — machi database wla hosting.",
        "text": "Quel problème Clerk résout-il pour une application React ?",
        "answers": [
          "Il héberge vos fichiers statiques",
          "Il fournit l'authentification et la gestion des utilisateurs prêtes à l'emploi",
          "Il remplace votre base de données",
          "Il compile votre JSX"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al 3la ClerkProvider: context provider lazem ykon f l root bach kolchi y-wsal l auth state. Fker fin kat-7et l providers f React.",
        "text": "Où faut-il placer <ClerkProvider> pour que chaque composant accède à l'état d'authentification ?",
        "code": "import { ClerkProvider } from \"@clerk/clerk-react\";\n\n// ???\n<App />",
        "answers": [
          "Uniquement autour de la page de connexion",
          "À la racine, autour de toute l'application",
          "Dans chaque composant qui a besoin d'auth",
          "Dans le fichier index.css"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al 3la SignedIn: had l component kat-afficher l children ghir ila user signed in. Fker chnu smito kay-gol.",
        "text": "Quel composant affiche ses enfants uniquement quand l'utilisateur est connecté ?",
        "code": "<SignedIn>\n  <Dashboard />\n</SignedIn>",
        "answers": [
          "<SignedOut>",
          "<AuthWall>",
          "<SignedIn>",
          "<PrivateRoute>"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al 3la SignedOut: l 3aks dyal SignedIn — kat-afficher content ghir l guests. Fker chnu ghadi t-weri l wa7ed li ma signed in-ch.",
        "text": "Vous voulez afficher « Connectez-vous » uniquement aux visiteurs NON connectés. Quel composant ?",
        "code": "<SignedOut>\n  <p>Please log in</p>\n</SignedOut>",
        "answers": [
          "<SignedIn>",
          "<SignedOut>",
          "<GuestOnly>",
          "<Anonymous>"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "So2al 3la useUser: had l hook kay-rja3 l user object (profile data). Fker ina hook kay-3ti l user nafso.",
        "text": "Quel hook donne les données du profil de l'utilisateur courant (nom, email, avatar) ?",
        "code": "const { user } = ???;\nconsole.log(user?.firstName);",
        "answers": [
          "useAuth()",
          "useSession()",
          "useUser()",
          "useClerkUser()"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "So2al 3la <SignIn />: Clerk 3ndo prebuilt components jahzin. Fker chnu kay-rendre <SignIn />.",
        "text": "Que rend le composant <SignIn /> ?",
        "answers": [
          "Une interface de connexion complète et prête (email, mot de passe, boutons OAuth)",
          "Un objet JSON avec le token de session",
          "Une redirection vers votre backend",
          "Rien — vous devez construire le formulaire vous-même"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al 3la publishable key: Clerk kay-sta3mel joj keys — wa7ed public w wa7ed secret. Fker chnu prefix dyal l public key li kat-7et f frontend.",
        "text": "Quelle clé peut être exposée sans risque dans votre code frontend ?",
        "code": "REACT_APP_CLERK_PUBLISHABLE_KEY=pk_test_abc123",
        "answers": [
          "La clé secrète (sk_...)",
          "La clé publique (pk_...)",
          "Votre mot de passe de base de données",
          "Le secret de signature des webhooks"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "So2al 3la UserButton: had l component kay-weri avatar w menu jahz. Fker chnu kay-dir l user melli kay-cliquer 3lih.",
        "text": "Que rend <UserButton /> ?",
        "code": "<SignedIn>\n  <UserButton />\n</SignedIn>",
        "answers": [
          "Un formulaire d'inscription",
          "L'avatar de l'utilisateur avec un menu (profil, déconnexion)",
          "La liste de tous les utilisateurs",
          "Le sélecteur d'organisation"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "So2al 3la <SignUp />: b7al <SignIn /> walakin l sign-up. Fker l far9 binathom.",
        "text": "Un nouveau visiteur doit créer un compte. Quel composant préconstruit ?",
        "answers": [
          "<SignIn />",
          "<SignUp />",
          "<UserButton />",
          "<Register />"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "So2al 3la secret key: sk_... 3ndo full access l API — ila t-exposa, ay wa7ed y9der y-dir ay 7aja. Fker fin khaso y-b9a.",
        "text": "Où la clé secrète Clerk (sk_...) doit-elle résider ?",
        "answers": [
          "Dans le bundle frontend",
          "Dans un dépôt GitHub public",
          "Côté serveur uniquement, jamais dans le navigateur",
          "Dans le localStorage"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "So2al 3la useAuth: had l hook kay-rja3 auth state w helpers (userId, getToken, signOut) — machi l user object kamel. Fker chnu kay-7taj l component bach y-3ref wach signed in.",
        "text": "Que retourne useAuth() ?",
        "code": "const { isSignedIn, userId, getToken, signOut } = useAuth();",
        "answers": [
          "Uniquement l'URL de l'avatar",
          "L'état d'auth et des helpers : isSignedIn, userId, getToken, signOut",
          "L'objet profil complet de l'utilisateur",
          "La liste des organisations"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "So2al 3la nav bar: bghiti t-weri Sign in l guests w avatar l signed-in users. Fker kifach kat-jma3 SignedIn w SignedOut f nafs l blassa.",
        "text": "Complétez la barre de navigation pour que les invités voient « Sign in » et les membres leur avatar :",
        "code": "<nav>\n  <SignedOut><SignInButton /></SignedOut>\n  <SignedIn>???</SignedIn>\n</nav>",
        "answers": [
          "<SignUpButton />",
          "<UserButton />",
          "<SignOut />",
          "<Avatar />"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "So2al 3la route protection: f SPA, 9bel ma t-afficher page khasa, khask t-checki auth state. Fker chnu lazem t-tsena 9bel ma t-7kem (isLoaded).",
        "text": "Pourquoi faut-il vérifier isLoaded avant de rediriger un utilisateur non connecté hors d'une page protégée ?",
        "code": "const { isLoaded, isSignedIn } = useAuth();\nif (!isLoaded) return <Spinner />;\nif (!isSignedIn) return <Navigate to=\"/sign-in\" />;",
        "answers": [
          "isLoaded est toujours vrai, c'est une formalité",
          "L'état d'auth se charge de façon asynchrone — sans ça on risque de rediriger un utilisateur connecté par erreur",
          "Ça empêche la page de connexion de s'afficher",
          "Ça chiffre l'URL de redirection"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "So2al 3la SignOutButton: ila bghiti button khasa b sign out (mach menu dyal avatar). Fker chnu smit l component l mnasba.",
        "text": "Vous voulez un bouton « Déconnexion » autonome dans la page des paramètres. Quel composant ?",
        "answers": [
          "<SignOut />",
          "<SignOutButton />",
          "<UserButton mode=\"logout\" />",
          "<LogoutForm />"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "So2al 3la webhooks: Clerk y9der y-notifier backend dyalk melli user t-crea wla t-update. Fker chnu smit had l mechanism.",
        "text": "Votre backend doit créer une ligne en base à chaque inscription. Quelle fonctionnalité Clerk envoie les événements user.created à votre serveur ?",
        "answers": [
          "Interroger useUser() chaque seconde",
          "Les webhooks",
          "Les écouteurs localStorage",
          "La prop onSuccess de <SignUp />"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al 3la svix: webhook requests ymkn y-tspoofaw — lazem t-verifi signature. Fker chnu l library li kat-sta3mel l verification.",
        "text": "Comment vérifier qu'une requête webhook Clerk entrante est authentique ?",
        "answers": [
          "Faire confiance à tout POST vers l'endpoint",
          "Vérifier les en-têtes svix-id / svix-timestamp / svix-signature avec le vérificateur Svix Webhook",
          "Comparer l'IP à une liste codée en dur",
          "Décoder le JWT dans l'URL"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al 3la organizations: B2B apps kay-7tajo groups dyal users. Fker chnu smit l component li kay-khali user y-switchi bin organizations.",
        "text": "Quel composant permet à un utilisateur connecté de basculer entre ses organisations ?",
        "answers": [
          "<UserButton />",
          "<OrganizationSwitcher />",
          "<SignIn />",
          "<TeamPicker />"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al 3la useOrganization: hook bach t-jib l organization l active w membership dyal user. Fker chnu kay-rja3.",
        "text": "Que vous donne useOrganization() ?",
        "code": "const { organization, membership } = useOrganization();",
        "answers": [
          "La liste de tous les utilisateurs Clerk",
          "L'organisation active et l'appartenance de l'utilisateur courant",
          "La clé publique",
          "Le token de session"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "So2al 3la useSession: session hiya l login l active dyal user. Fker ina hook kay-rja3 l session object.",
        "text": "Quel hook retourne l'objet de la session active ?",
        "answers": [
          "useUser()",
          "useAuth()",
          "useSession()",
          "useSignIn()"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al 3la getToken: frontend khaso y-sift token l backend dyalo bach y-3ref chkon kay-sift request. Fker chnu l method li kat-jib l JWT.",
        "text": "Votre app React appelle votre API Express. Comment obtenir un token à envoyer avec la requête ?",
        "code": "const { getToken } = useAuth();\nconst token = await getToken();\nfetch(\"/api/orders\", { headers: { Authorization: \"Bearer \" + token } });",
        "answers": [
          "Le lire manuellement depuis document.cookie",
          "Appeler getToken() de useAuth() et l'envoyer comme token Bearer",
          "Coder en dur la clé secrète dans le fetch",
          "Utiliser user.password"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al 3la clerkMiddleware: f Next.js, middleware kay-7mi routes 9bel ma y-wslo l page. Fker chnu l function li kat-sta3mel.",
        "text": "Dans une app Next.js, quelle fonction middleware de Clerk protège les routes ?",
        "code": "import { clerkMiddleware } from \"@clerk/nextjs/server\";",
        "answers": [
          "authMiddleware()",
          "clerkMiddleware()",
          "withClerk()",
          "protectMiddleware()"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "So2al 3la createRouteMatcher: bach t-7ded ina routes public w ina protected. Fker kifach kat-3ref l matcher.",
        "text": "Comment marquer uniquement /dashboard et /settings comme protégées dans le middleware Clerk ?",
        "code": "const isProtectedRoute = createRouteMatcher([\n  \"/dashboard(.*)\",\n  \"/settings(.*)\",\n]);",
        "answers": [
          "Les lister dans createRouteMatcher pour que le middleware vérifie chaque requête",
          "Les ajouter au fichier .env",
          "Les envelopper dans <SignedIn> dans le fichier middleware",
          "Renommer les dossiers en (protected)"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al 3la auth().protect(): f server component wla route handler, had l method kat-forcer auth. Fker chnu kay-tra ila user ma signed in-ch.",
        "text": "Que fait auth().protect() quand l'utilisateur n'est pas connecté ?",
        "code": "import { auth } from \"@clerk/nextjs/server\";\n\nexport async function GET() {\n  const { userId } = await auth();\n  // or: await auth.protect();\n}",
        "answers": [
          "Retourne userId à null et continue",
          "Lève une erreur / redirige pour que la requête non authentifiée n'atteigne jamais votre code",
          "Crée automatiquement un compte invité",
          "Relance la requête avec la clé secrète"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al 3la auth() f server: auth() kat-rja3 userId w sessionClaims bla ma t-jib l user kamel. Fker l far9 binha w bin useUser.",
        "text": "Dans un Server Component Next.js, que retourne auth() ?",
        "answers": [
          "Le profil complet avec les emails",
          "{ userId, sessionId, sessionClaims, ... } — des infos d'auth légères, pas l'objet utilisateur complet",
          "Un composant React",
          "La clé publique"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "So2al 3la org roles: organizations 3ndhom roles b7al admin w member. Fker kifach kat-checki wach user admin f l org l active.",
        "text": "Comment vérifier si l'utilisateur courant est admin de l'organisation active ?",
        "code": "const { has } = useAuth();\nconst isAdmin = has({ role: \"org:admin\" });",
        "answers": [
          "user.isAdmin === true",
          "has({ role: \"org:admin\" }) depuis useAuth()",
          "organization.plan === \"admin\"",
          "Vérifier le localStorage pour \"admin\""
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "So2al 3la webhook handler: lazem t-verifi 9bel ma t-traiti event. Fker l tartib: headers -> verify -> switch 3la type.",
        "text": "Quel est l'ordre correct des étapes dans un gestionnaire de webhook Clerk ?",
        "answers": [
          "Traiter l'événement, puis vérifier la signature",
          "Vérifier d'abord la signature Svix, puis gérer le type d'événement (ex. user.created)",
          "Sauver le corps brut en base, puis vérifier",
          "Vérifier uniquement les événements user.deleted"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al 3la custom JWT template: backend khaso claims zyada f token (b7al role). Fker fin kat-configuri hadchi w kifach kat-tlbo.",
        "text": "Votre API a besoin d'un claim personnalisé (ex. rôle) dans le JWT Clerk. Comment ?",
        "code": "const token = await getToken({ template: \"my-api\" });",
        "answers": [
          "Éditer le token dans le localStorage",
          "Créer un modèle JWT dans le dashboard Clerk, puis le demander avec getToken({ template: \"my-api\" })",
          "Ajouter des claims à la clé publique",
          "Utiliser user.fullName comme claim"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al 3la invitations: admin y9der y-inviti members l organization. Fker chnu l method li kat-sift invitation.",
        "text": "Comment un admin d'organisation invite-t-il quelqu'un via l'API Clerk ?",
        "answers": [
          "organization.inviteMember({ emailAddress, role })",
          "En lui envoyant la clé secrète",
          "En ajoutant son email au fichier .env",
          "organization.addUser(userId)"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al 3la multi-session: Clerk kay-khali user ykon signed in b accounts m7talfin f nafs l browser. Fker chnu l feature li kat-mken hadchi.",
        "text": "Un utilisateur est connecté avec deux comptes et veut basculer entre eux. De quelle capacité Clerk s'agit-il ?",
        "answers": [
          "Le support multi-session — setActive() peut changer la session active",
          "Deux wrappers ClerkProvider",
          "Deux clés publiques différentes",
          "Le mode navigation privée"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al 3la isLoaded m3a useUser: b7al useAuth, user data kat-ji async. Fker chnu lazem t-checki 9bel ma t-sta3mel user.",
        "text": "Quel est le problème avec ce composant ?",
        "code": "const { user } = useUser();\nreturn <h1>Hello {user.firstName}</h1>;",
        "answers": [
          "Rien, il est correct",
          "Il plante pendant le chargement de user — il faut d'abord vérifier isLoaded (ou user)",
          "useUser ne peut pas être utilisé dans des composants",
          "firstName n'existe pas sur l'objet user"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al debugging: app ma kat-loadi-ch auth w console kay-gol missing key. Fker ina key w fin khaso ykon.",
        "text": "L'application lève : « Missing publishableKey ». Quelle est la correction ?",
        "code": "<ClerkProvider>\n  <App />\n</ClerkProvider>",
        "answers": [
          "Ajouter la clé secrète au frontend",
          "Passer publishableKey={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY} à ClerkProvider",
          "Envelopper App dans <SignedIn> à la place",
          "Installer @clerk/backend"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "So2al 3la backend verification: backend lazem y-verifi token li jah mn frontend. Fker chnu l tool li kat-verifi signature b secret dyal Clerk.",
        "text": "Comment un backend Express vérifie-t-il le token Bearer envoyé par le frontend Clerk ?",
        "answers": [
          "Découper le token et lire le payload sans vérification",
          "Utiliser verifyToken / clerkClient de Clerk avec la clé secrète (ou clerkMiddleware) pour valider la signature",
          "Le comparer à la clé publique",
          "Lui faire confiance s'il commence par « eyJ »"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "So2al 3la signInUrl/signUpUrl: melli route protected kat-redirecti, fin kat-mchi? Fker chnu l props dyal ClerkProvider li kat-7ded had l URLs.",
        "text": "Vous voulez rediriger les utilisateurs non connectés vers /sign-in et /sign-up. Où configurer cela ?",
        "code": "<ClerkProvider\n  publishableKey={key}\n  signInUrl=\"/sign-in\"\n  signUpUrl=\"/sign-up\"\n>",
        "answers": [
          "Dans les props de <SignedOut>",
          "Via les props signInUrl / signUpUrl de ClerkProvider",
          "Dans l'endpoint webhook",
          "Dans package.json"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al 3la webhook events: kaynin bzf event types (user.created, organizationMembership.created...). Fker chnu kay-miyez binathom.",
        "text": "Votre webhook reçoit beaucoup d'événements mais seules les inscriptions vous intéressent. Comment filtrer ?",
        "code": "const evt = wh.verify(payload, headers);\n// evt.type === ???",
        "answers": [
          "Vérifier evt.type === \"user.created\" et ignorer le reste",
          "Créer un endpoint par événement",
          "Filtrer par domaine email",
          "Les webhooks n'envoient de toute façon que user.created"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al 3la OAuth: Google/GitHub login ma kay-7tajch code zyad f <SignIn />. Fker fin kat-7el had l providers.",
        "text": "Vous voulez « Continuer avec Google » sur votre page de connexion. Où l'activer ?",
        "answers": [
          "Écrire un flux OAuth personnalisé avec fetch()",
          "Activer Google dans le dashboard Clerk sous Connexions sociales — <SignIn /> affiche le bouton automatiquement",
          "Ajouter <GoogleButton /> manuellement",
          "C'est activé par défaut sans configuration"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al debugging: webhook kay-rja3 400 w Clerk dashboard kay-gol signature invalid. Fker chnu l ghalat l chaye3 f l handler.",
        "text": "Votre gestionnaire webhook rejette chaque événement avec une erreur de signature invalide. Quel est le bug le plus probable ?",
        "code": "app.post(\"/webhooks\", express.json(), (req, res) => {\n  const wh = new Webhook(SECRET);\n  wh.verify(JSON.stringify(req.body), req.headers); // fails\n});",
        "answers": [
          "L'URL de l'endpoint est fausse",
          "La vérification Svix exige le corps de requête BRUT, pas le JSON parsé puis re-sérialisé",
          "La clé secrète est trop courte",
          "Les webhooks ne fonctionnent qu'en GET"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "So2al 3la <Protect>: component kat-7mi UI 7asab role wla permission. Fker chnu l props li kat-sta3mel.",
        "text": "Seuls les admins d'organisation doivent voir le panneau de facturation. Quel composant l'impose dans l'UI ?",
        "code": "<Protect role=\"org:admin\" fallback={<p>Not allowed</p>}>\n  <BillingPanel />\n</Protect>",
        "answers": [
          "<SignedIn role=\"admin\">",
          "<Protect role=\"org:admin\"> avec un fallback",
          "<AdminOnly>",
          "{isAdmin && ...} est la seule façon"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "So2al 3la sessionClaims: token fih claims jahzin (b7al org role). Fker fin kat-l9ahom f server.",
        "text": "Dans un Server Component, vous avez besoin du rôle d'organisation sans récupérer l'utilisateur. Où est-il ?",
        "code": "const { sessionClaims } = await auth();\n// sessionClaims.???",
        "answers": [
          "sessionClaims.org_role",
          "user.role (nécessite un fetch)",
          "localStorage.getItem(\"role\")",
          "Il n'est pas disponible dans le token"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "So2al 3la dev vs prod keys: Clerk 3ndo instances m7talfin. Fker chnu l far9 bin pk_test_ w pk_live_.",
        "text": "Quelle est la différence entre les clés pk_test_... et pk_live_... ?",
        "answers": [
          "Aucune différence, elles sont interchangeables",
          "pk_test_ appartient à l'instance de développement (utilisateurs de test), pk_live_ à l'instance de production (vrais utilisateurs)",
          "pk_test_ est la clé secrète",
          "pk_live_ ne fonctionne qu'en localhost"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al debugging: getToken() kay-rja3 null. Fker chnu l asbab l momkina — session? template?",
        "text": "await getToken() retourne null alors que l'utilisateur est connecté. Quelle cause possible ?",
        "answers": [
          "L'utilisateur est connecté, c'est donc impossible",
          "Le nom du modèle JWT demandé n'existe pas, ou la session n'a pas de token pour ce modèle",
          "getToken ne fonctionne que dans les Server Components",
          "La clé publique est trop longue"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al 3la permissions: roles kbar, permissions d9a9. Fker kifach kat-checki permission mo3ayana b has().",
        "text": "Au-delà des rôles, Clerk gère des permissions fines. Comment en vérifier une ?",
        "code": "const { has } = useAuth();\nconst canInvite = has({ permission: \"org:sys_memberships:manage\" });",
        "answers": [
          "Les permissions n'existent pas dans Clerk",
          "has({ permission: \"org:sys_memberships:manage\" })",
          "user.permissions.includes(...)",
          "Vérifier le JWT manuellement avec atob()"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al 3la authorizedParties: token verification kat-7mi mn token theft. Fker chnu l option li kat-7ded l origins l ma9bolin.",
        "text": "Lors de la vérification serveur des tokens, contre quoi l'option authorizedParties protège-t-elle ?",
        "code": "await verifyToken(token, { authorizedParties: [\"https://myapp.com\"] });",
        "answers": [
          "Elle accélère la vérification",
          "Elle rejette les tokens émis pour une autre origine — contre la réutilisation d'un token d'une autre app",
          "Elle chiffre le token",
          "Elle rafraîchit la session"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "So2al 3la machine-to-machine: backend l backend bla user. Fker chnu l key li kat-sta3mel w chnu l client.",
        "text": "Un cron (sans session utilisateur) doit lister les utilisateurs via l'API Clerk. Comment ?",
        "code": "import { createClerkClient } from \"@clerk/backend\";\nconst clerk = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });\nawait clerk.users.getUserList();",
        "answers": [
          "Utiliser la clé publique dans le navigateur",
          "Utiliser le SDK Backend avec la clé secrète côté serveur (machine-to-machine)",
          "Appeler getToken() sans session",
          "Partager le mot de passe d'un admin"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al 3la webhook idempotency: webhooks ymkn y-t3awdo. Fker kifach kat-7mi mn duplicate processing.",
        "text": "Clerk peut livrer le même événement webhook plusieurs fois. Comment le gestionnaire doit-il se comporter ?",
        "answers": [
          "Le traiter à chaque fois — les doublons sont sans danger",
          "Rendre le traitement idempotent (ex. upsert par id utilisateur Clerk au lieu d'insertion aveugle)",
          "Retourner 500 pour que Clerk arrête de réessayer",
          "Supprimer l'endpoint après le premier événement"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "So2al 3la restricted sign-up: bghiti ghir nass m3aynin y-sign up (invitation-only). Fker fin kat-configuri had l restriction.",
        "text": "Vous voulez limiter l'inscription aux seuls utilisateurs invités. Où cela s'applique-t-il ?",
        "answers": [
          "Masquer <SignUp /> avec du CSS",
          "Dans le dashboard Clerk : restreindre les modes d'inscription / activer les invitations et désactiver l'inscription publique",
          "Supprimer la route /sign-up",
          "Impossible avec Clerk"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al 3la user migration: 3ndek users 9dam b passwords hashed. Fker chnu l tari9a l mnasba bach t-jibhom l Clerk.",
        "text": "Comment migrer des utilisateurs existants (avec hash bcrypt) vers Clerk ?",
        "answers": [
          "Demander à chaque utilisateur de se réinscrire",
          "Importer en masse via l'API Backend en fournissant les hash de mots de passe pour qu'ils gardent leurs mots de passe",
          "Copier les hash dans le localStorage",
          "Impossible — Clerk ne peut pas importer de mots de passe"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "So2al 3la short session tokens: getToken kat-jib token l API dyalk. Fker chnu l far9 bin default token w template token.",
        "text": "Quelle est la différence entre getToken() et getToken({ template: \"...\" }) ?",
        "answers": [
          "Aucune différence",
          "getToken() retourne le JWT de session par défaut ; avec un modèle, il retourne un JWT façonné par votre modèle JWT personnalisé (claims/audience sur mesure)",
          "La version avec modèle n'expire jamais",
          "La version avec modèle fonctionne sans connexion"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al 3la session token lifetime: tokens 9sar l-3mor a7san l security. Fker fin kat-configuri l expiration.",
        "text": "Où configurer la durée de validité des tokens de session Clerk ?",
        "answers": [
          "Dans votre code React avec setTimeout()",
          "Dans le dashboard Clerk sous Sessions / paramètres JWT",
          "Dans la chaîne de la clé publique",
          "Les tokens n'expirent jamais"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al 3la <SignIn /> routing: f SPA b React Router, Clerk components ymkn y-khdmo b path routing. Fker chnu l props.",
        "text": "Vous utilisez React Router et voulez que /sign-in affiche l'UI de connexion Clerk. Quelles props ?",
        "code": "<SignIn routing=\"path\" path=\"/sign-in\" />",
        "answers": [
          "<SignIn url=\"/sign-in\" />",
          "routing=\"path\" et path=\"/sign-in\"",
          "Ça fonctionne automatiquement sans props",
          "<SignIn route=\"/sign-in\" />"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "So2al 3la actor tokens / impersonation: admin y9der y-chof app b7al user akhor l debugging. Fker chnu l concept dyal Clerk l had l gharad.",
        "text": "Le support doit voir l'application exactement comme un utilisateur précis pour déboguer. Quelle fonctionnalité Clerk couvre cela ?",
        "answers": [
          "Partager le mot de passe de l'utilisateur",
          "L'impersonation d'utilisateur (se connecter en tant qu'un autre utilisateur depuis le dashboard / via l'API)",
          "Copier son token de session depuis les devtools",
          "Créer un compte en double"
        ],
        "correct": 1,
        "selection": null
      }
    ]
  }
];
