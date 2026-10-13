export const nextjsQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "Next.js kat-bni 3la React: routing, SSR/SSG, API routes... tfekkar chno no3 dyalo b dabt.",
        "text": "What is Next.js?",
        "answers": [
          "A CSS framework for styling React apps",
          "A React framework for full-stack web apps: routing, rendering, and APIs",
          "A database that pairs with React",
          "A testing library for React components"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "App Router jdid khdam b dossier wa7ed — tfekkar chno smito, machi pages/ li kant 9bel.",
        "text": "Which directory enables the App Router?",
        "answers": [
          "pages/",
          "app/",
          "api/",
          "static/"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "F App Router kol route khaso file b smiya mo3ayana — tfekkar chno smit l file li kay-rendi l page.",
        "text": "Which file renders the /about page?",
        "answers": [
          "app/about.js",
          "app/about/index.js",
          "app/about/page.js",
          "pages/about/page.js"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "<a> kat-reloadi l page kamla — Link kat-dir 7aja khra. Fker chno kat-rba7 m3aha.",
        "text": "Why use next/link instead of a plain <a> tag?",
        "code": "import Link from 'next/link';\n<Link href=\"/about\">About</Link>",
        "answers": [
          "It makes the text bold",
          "It enables client-side navigation without a full page reload",
          "It only works for external URLs",
          "It improves SEO of images"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "next dev l dev, next build l production — tfekkar chno kat-dir dev b dabt.",
        "text": "What does the command `next dev` do?",
        "answers": [
          "Builds the app for production",
          "Starts the development server, usually on http://localhost:3000",
          "Deploys the app to Vercel",
          "Installs Next.js"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "Default f App Router: server wla client? Fker fin kayt-renda l component bla ma tzid walo.",
        "text": "In the App Router, what kind of component is a component by default?",
        "answers": [
          "A Client Component",
          "A Server Component",
          "A class component",
          "An API route"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "\"use client\" kat-gol l Next.js: had component khaso browser. Fker 3lach: hooks, events...",
        "text": "What does the \"use client\" directive do?",
        "code": "\"use client\";\nimport { useState } from 'react';",
        "answers": [
          "It deploys the component to the client CDN",
          "It marks the component as a Client Component so hooks and interactivity work",
          "It makes the page load faster on the server",
          "It disables JavaScript"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "next/image kat-optimiw tsawer: resize, lazy load... tfekkar chno kat-rba7 3la <img> 3adiya.",
        "text": "What is the main benefit of the next/image component over a plain <img>?",
        "answers": [
          "It only supports GIFs",
          "Automatic image optimization: resizing, lazy loading, and modern formats",
          "It uploads images to Vercel",
          "It removes the need for alt text"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "Next.js mn 3nd charika wa7da li hiya li kat-hostih mzyan — fker chno smitha.",
        "text": "Which company created Next.js and offers its best-known hosting?",
        "answers": [
          "Meta",
          "Vercel",
          "Netlify",
          "Google"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "metadata kat-bedel <head> dyal l page: title, description... bla ma tkteb <head> b yedik.",
        "text": "What does exporting a `metadata` object from a page do?",
        "code": "export const metadata = { title: 'About us' };",
        "answers": [
          "It sets the HTML <head> title and meta tags for that page",
          "It creates a sitemap",
          "It enables TypeScript",
          "It adds the page to the navbar"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "Dynamic segment kat-tkteb b [ ] — tfekkar fin kat-7et slug f l file path.",
        "text": "Which file handles the dynamic route /blog/hello-world?",
        "answers": [
          "app/blog/page.js",
          "app/blog/[slug]/page.js",
          "app/blog/slug/page.js",
          "app/[blog]/hello-world.js"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "params kat-jib l dynamic segment mn URL — fker chno ghadi ykon f slug hna.",
        "text": "On /blog/hello-world, what does params.slug hold?",
        "code": "export default function Post({ params }) {\n  return <h1>{params.slug}</h1>;\n}",
        "answers": [
          "\"blog\"",
          "\"hello-world\"",
          "\"/blog/hello-world\"",
          "undefined"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "layout.js UI mochtaraka: navbar, footer... kat-b9a bla ma t3awd t-renda. Fker 3lach mofida.",
        "text": "What is the role of layout.js in the App Router?",
        "answers": [
          "It defines the 404 page",
          "Shared UI (navbar, footer) that wraps pages and is preserved across navigation",
          "It configures the database",
          "It runs only on the client"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "loading.js = fallback UI melli l page mazal kat-loadi. Fker chno kay-chof l user f had l wa9t.",
        "text": "What does a loading.js file next to page.js give you?",
        "answers": [
          "A slower page",
          "An instant loading UI shown while the page streams in, via a Suspense boundary",
          "A build error",
          "A redirect"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "error.js khaso \"use client\" — 3lach? Fker: reset(), useEffect...",
        "text": "An error.js file must be a Client Component. Why?",
        "answers": [
          "Because errors only happen in the browser",
          "Because it uses hooks like useEffect and a reset() function for the error boundary",
          "Because Server Components cannot have files",
          "Because Vercel requires it"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "route.js = API endpoint. Fker chno URL ghadi yjawb w b ina method.",
        "text": "What does this file create?",
        "code": "// app/api/users/route.js\nexport async function GET() {\n  return Response.json({ ok: true });\n}",
        "answers": [
          "A page at /api/users",
          "A GET route handler responding at /api/users",
          "A middleware",
          "A Server Action"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "Bach t-generi /blog/slug1, /blog/slug2 f build — kayna function mo3ayana. Fker smitha.",
        "text": "Which function pre-renders dynamic routes like /blog/[slug] at build time?",
        "answers": [
          "generateMetadata",
          "generateStaticParams",
          "revalidatePath",
          "notFound"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "Bla NEXT_PUBLIC_, l variable ghir f server. Fker 3lach khaso prefix bach t-ban f browser.",
        "text": "Why does this variable need the NEXT_PUBLIC_ prefix?",
        "code": "const key = process.env.NEXT_PUBLIC_API_URL;",
        "answers": [
          "It makes the value secret",
          "It exposes the variable to browser-side code",
          "It is required for all env variables",
          "It encrypts the value"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "ISR = static + refresh. revalidate = 60 ma3naha... tfekkar.",
        "text": "In a page or route, what does `export const revalidate = 60` do?",
        "code": "export const revalidate = 60;",
        "answers": [
          "It caches the page for 60 milliseconds",
          "It enables ISR: the page regenerates at most every 60 seconds",
          "It delays the response by 60 seconds",
          "It limits the page to 60 visitors"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "middleware.js kay-khdem 9bel ma twsal l request l page. Fker fin kayn w chno y9dar ydir: redirect, rewrite...",
        "text": "Where does middleware.js live and when does it run?",
        "answers": [
          "In app/, after the page renders",
          "At the project root (or src/), before the request completes — it can rewrite, redirect, or modify the response",
          "In public/, only for images",
          "It runs only at build time"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "\"use server\" kat-gol: had function kat-khdem f server, wakha t-3ayet liha mn client. Fker smit l concept.",
        "text": "What is createPost here?",
        "code": "\"use server\";\nexport async function createPost(formData) {\n  // save to DB\n}",
        "answers": [
          "A Client Component",
          "A Server Action: runs on the server but can be called from client code / forms",
          "A middleware",
          "An API route"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "no-store = ma t-cache-ich walo. Fker chno no3 dyal rendering ghadi ykon.",
        "text": "What does `cache: 'no-store'` do?",
        "code": "const res = await fetch(url, { cache: 'no-store' });",
        "answers": [
          "It caches forever",
          "It skips the cache: the route is always rendered dynamically with fresh data",
          "It stores the response for 1 second",
          "It only works in the browser"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "Badelti data f DB — l cache 9dim khaso ytm7a. Fker chno function kat-dir hadchi.",
        "text": "After mutating data in a Server Action, how do you refresh cached pages that show that data?",
        "answers": [
          "Call revalidatePath('/blog') or revalidateTag('posts')",
          "Reload the Vercel dashboard",
          "Delete the app/ folder",
          "Call router.refresh() from a Server Component"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "Streaming = ba3d l page kat-ban w l slow part kat-ji mn ba3d. Fker b chno kat-wrapiha.",
        "text": "A page fetches a slow API and you want the rest of the UI to show immediately. What do you do?",
        "answers": [
          "Use loading.js only",
          "Wrap the slow component in <Suspense fallback={...}> so it streams in",
          "Add \"use client\" to the page",
          "Increase the server timeout"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "redirect() dyal next/navigation khasa b server. F client event handler kat-sta3mel 7aja khra. Fker.",
        "text": "Where can redirect() from next/navigation be used?",
        "code": "import { redirect } from 'next/navigation';\nredirect('/login');",
        "answers": [
          "In any Client Component event handler",
          "In Server Components, Server Actions, and route handlers — not in event handlers",
          "Only in middleware",
          "Only in next.config.js"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "cookies() w headers() kat-qraw request dyal server — ma ymknch f browser. Fker fin.",
        "text": "Where can you call cookies() / headers()?",
        "code": "import { cookies } from 'next/headers';",
        "answers": [
          "In any Client Component",
          "Only in Server Components, Server Actions, and route handlers",
          "In middleware only",
          "In the browser console"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "next/font kat-host l font m3a site dyalk — bla request l Google, bla layout shift. Fker l fayda.",
        "text": "What does next/font give you?",
        "answers": [
          "It downloads fonts from Google at runtime on every visit",
          "Self-hosted fonts with zero layout shift and no external request",
          "It only works with system fonts",
          "It converts fonts to images"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "next/image ma kat-9belch ay external domain — khaso tsre7 lih. Fker fin.",
        "text": "Your <Image> loads from https://cdn.example.com. What must you configure?",
        "answers": [
          "Nothing, it works by default",
          "remotePatterns (or domains) for cdn.example.com in next.config.js",
          "A middleware",
          "An API route"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "await mor await = wa7ed kay-tsna lakhor (waterfall). Promise.all bjojhom f nafs l wa9t. Fker l far9 f speed.",
        "text": "Why is this better than two sequential awaits in a Server Component?",
        "code": "const [user, posts] = await Promise.all([\n  getUser(id),\n  getPosts(id),\n]);",
        "answers": [
          "It uses less memory",
          "Both requests start at once instead of waiting one after another (no waterfall)",
          "It caches the results",
          "It works in Client Components only"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "notFound() kat-warri not-found.js b status 404. Fker chno kay-chof l user.",
        "text": "Calling notFound() from next/navigation inside a page does what?",
        "answers": [
          "Throws a build error",
          "Renders the closest not-found.js UI with a 404 status",
          "Redirects to /404",
          "Deletes the page"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "Edge Runtime khfif — machi Node kaml. Fker chno ma ymknch t-sta3mel fih.",
        "text": "Middleware runs on the Edge Runtime. What is a practical consequence?",
        "answers": [
          "You can use any Node.js API like fs",
          "You cannot use Node.js-only APIs (fs, child_process); keep it light and fast",
          "It runs only in development",
          "It has direct access to the database"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "generateMetadata b params kat-dir title dynamique 7asab slug. Fker chno ghadi yban f <title>.",
        "text": "What does this do?",
        "code": "export async function generateMetadata({ params }) {\n  const post = await getPost(params.slug);\n  return { title: post.title };\n}",
        "answers": [
          "It generates static params",
          "It sets a dynamic <head> title per page based on the slug",
          "It creates an RSS feed",
          "It redirects unknown slugs"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "force-dynamic = dayman dynamic, bla static. Fker imta kat-7tajha.",
        "text": "What does this route segment config do?",
        "code": "export const dynamic = 'force-dynamic';",
        "answers": [
          "It forces the route to be statically generated",
          "It opts the route out of static rendering: always rendered dynamically per request",
          "It enables ISR",
          "It disables the route"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "matcher '/dashboard/:path*' — :path* ma3naha ay sub-path ta7t dashboard. Fker ina URL kat-matchi.",
        "text": "Which URL does this middleware run for?",
        "code": "// middleware.js\nexport const config = {\n  matcher: '/dashboard/:path*',\n};",
        "answers": [
          "/dashboard/settings",
          "/dash",
          "/",
          "/about"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "Server Actions khdamin b HTML form 3adi — bla JS kay-sift l form l server. Fker.",
        "text": "This form calls a Server Action. What happens if JavaScript is disabled in the browser?",
        "code": "<form action={createPost}>\n  <input name=\"title\" />\n  <button>Save</button>\n</form>",
        "answers": [
          "The form breaks",
          "It still works: the form posts to the server action (progressive enhancement)",
          "It redirects to /404",
          "The data is lost"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "pending = true melli l action khdama. Fker chno kat-warri l user f had l wa9t.",
        "text": "What is useFormStatus().pending used for?",
        "code": "import { useFormStatus } from 'react-dom';\nconst { pending } = useFormStatus();",
        "answers": [
          "To check if the database is online",
          "To show a loading state on the submit button while the Server Action runs",
          "To validate the form",
          "To redirect after submit"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "3600 seconds = sa3a. Fker chno ma3na revalidate hna.",
        "text": "What does `next: { revalidate: 3600 }` do?",
        "code": "const res = await fetch(url, { next: { revalidate: 3600 } });",
        "answers": [
          "It retries the fetch 3600 times",
          "It caches the fetch result and revalidates it at most every hour",
          "It times out after 3600 ms",
          "It disables caching"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "page.js w route.js f nafs l dossier — conflict. Fker chno kay-gol Next.js.",
        "text": "A folder contains both page.js and route.js. What happens?",
        "answers": [
          "Both work fine",
          "Build error: a route segment cannot have both a page and a route handler",
          "The page wins",
          "The API wins"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "async component + \"use client\" = mochkil. Fker 3lach: async ghir l Server Components.",
        "text": "What is wrong with this Client Component?",
        "code": "\"use client\";\nexport default async function List() {\n  const data = await getData();\n  return <ul>...</ul>;\n}",
        "answers": [
          "Nothing, it is valid",
          "Client Components cannot be async — async components are only for Server Components",
          "use client must be at the bottom",
          "getData must use fetch"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "dynamicParams = false ma3naha: ghir li f generateStaticParams. /blog/c ma kaynach — fker chno kay-w93e3.",
        "text": "A user visits /blog/c. What happens?",
        "code": "export async function generateStaticParams() {\n  return [{ slug: 'a' }, { slug: 'b' }];\n}\nexport const dynamicParams = false;",
        "answers": [
          "The page renders dynamically",
          "It returns the not-found UI (404), because only a and b were pre-rendered",
          "It redirects to /blog/a",
          "It crashes the build"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "Server rendera wa9t, client wa9t akhor — mismatch. Fker kifach t-khaliha ghir f client.",
        "text": "This Client Component sometimes throws a hydration mismatch. Why, and what is the fix?",
        "code": "export default function Clock() {\n  return <p>{new Date().toLocaleTimeString()}</p>;\n}",
        "answers": [
          "The server and client render different times; render it in useEffect/useState so it only renders on the client",
          "Date is not allowed in React",
          "toLocaleTimeString is deprecated",
          "The component needs \"use server\""
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "useEffect fetch = render, fetch, render (waterfall). F server kat-jib data 9bel ma tsift HTML. Fker l far9.",
        "text": "A Client Component fetches data in useEffect on mount, then the parent passes it down. What rendering problem does this cause versus fetching in a Server Component?",
        "answers": [
          "None, it is identical",
          "A client-side waterfall: the page renders, then fetches, then renders again — slower than server-side parallel fetching",
          "It breaks SEO only",
          "It causes infinite loops"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "rewrite kat-bedel l content bla ma t-bedel URL. redirect kat-bedel URL. Fker chno ghadi ychof l user.",
        "text": "rewrite vs redirect in middleware: what does the user see?",
        "code": "// middleware.js\nreturn NextResponse.rewrite(new URL('/maintenance', req.url));",
        "answers": [
          "The URL changes to /maintenance",
          "The user sees the /maintenance content but the URL stays the same",
          "It returns a 404",
          "It reloads the page twice"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "tags + revalidateTag = t-m7i cache dyal tag mo3ayan on demand. Fker.",
        "text": "What does this pair accomplish?",
        "code": "await fetch(url, { next: { tags: ['posts'] } });\n// later, in a Server Action:\nrevalidateTag('posts');",
        "answers": [
          "It deletes the posts table",
          "On-demand revalidation: all fetches tagged 'posts' are purged and refetched fresh",
          "It renames the tag",
          "It caches forever"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "template '%s | Acme' — %s kat-t3awed b title dyal l page. Fker chno ghadi yban.",
        "text": "A child page sets title: 'Pricing'. What shows in the browser tab?",
        "code": "export const metadata = {\n  title: { template: '%s | Acme', default: 'Acme' },\n};",
        "answers": [
          "Pricing",
          "Acme",
          "Pricing | Acme",
          "%s | Acme"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "priority = had tswira mohima (LCP) — preloadiha. Fker 3lach.",
        "text": "What does the `priority` prop do?",
        "code": "<Image src=\"/hero.jpg\" alt=\"Hero\" priority />",
        "answers": [
          "It makes the image bigger",
          "It preloads the image (high fetch priority) — use it for the LCP image",
          "It skips lazy loading for all images",
          "It compresses the image more"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "@folder = slot f layout. default.js fallback melli slot ma 3ndo match. Fker l use case: dashboard.",
        "text": "What are parallel routes (@analytics, @team) with a default.js file used for?",
        "answers": [
          "To run code in parallel threads",
          "To render multiple independent slots in one layout, with default.js as fallback when a slot has no match",
          "To duplicate pages",
          "To speed up the build"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "output export = static 100%, bla server. Fker chno kat-khsar: middleware, ISR...",
        "text": "You set `output: 'export'` in next.config.js. What is the trade-off?",
        "answers": [
          "Faster dynamic routes",
          "Fully static HTML export: no server features (no middleware, no ISR, no server-dependent Server Actions)",
          "It enables the Edge runtime",
          "It requires Vercel"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "(.) = intercept — modal fo9 l feed, w melli t-refresh kat-mchi l URL 7a9i9iya. Fker.",
        "text": "An intercepting route like app/feed/(.)photo/[id]/page.js does what?",
        "answers": [
          "It blocks the photo page",
          "It renders the photo as a modal over the feed while keeping /photo/[id] as the real URL on refresh",
          "It deletes the feed",
          "It redirects to /feed"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "headers() khaso request — static page ma 3ndhach request. Fker l 7el: force-dynamic.",
        "text": "Build fails with 'Dynamic server usage' for a page using headers(). What is the cause and fix?",
        "answers": [
          "headers() is banned; remove it",
          "The page was statically rendered but headers() needs the request: mark it dynamic (force-dynamic) or accept dynamic rendering",
          "It is a Vercel-only error",
          "Add \"use client\""
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
        "explain_dr": "Next.js kat-bni 3la React: routing, SSR/SSG, API routes... tfekkar chno no3 dyalo b dabt.",
        "text": "Qu'est-ce que Next.js ?",
        "answers": [
          "Un framework CSS pour styliser les apps React",
          "Un framework React pour des apps web full-stack : routage, rendu et APIs",
          "Une base de données qui va avec React",
          "Une librairie de tests pour React"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "App Router jdid khdam b dossier wa7ed — tfekkar chno smito, machi pages/ li kant 9bel.",
        "text": "Quel dossier active l'App Router ?",
        "answers": [
          "pages/",
          "app/",
          "api/",
          "static/"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "F App Router kol route khaso file b smiya mo3ayana — tfekkar chno smit l file li kay-rendi l page.",
        "text": "Quel fichier affiche la page /about ?",
        "answers": [
          "app/about.js",
          "app/about/index.js",
          "app/about/page.js",
          "pages/about/page.js"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "<a> kat-reloadi l page kamla — Link kat-dir 7aja khra. Fker chno kat-rba7 m3aha.",
        "text": "Pourquoi utiliser next/link plutôt qu'une balise <a> classique ?",
        "code": "import Link from 'next/link';\n<Link href=\"/about\">About</Link>",
        "answers": [
          "Ça met le texte en gras",
          "Ça permet la navigation côté client sans recharger toute la page",
          "Ça ne marche que pour les URLs externes",
          "Ça améliore le SEO des images"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "next dev l dev, next build l production — tfekkar chno kat-dir dev b dabt.",
        "text": "Que fait la commande `next dev` ?",
        "answers": [
          "Elle build l'app pour la production",
          "Elle lance le serveur de développement, en général sur http://localhost:3000",
          "Elle déploie l'app sur Vercel",
          "Elle installe Next.js"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "Default f App Router: server wla client? Fker fin kayt-renda l component bla ma tzid walo.",
        "text": "Dans l'App Router, quel type de composant est un composant par défaut ?",
        "answers": [
          "Un Client Component",
          "Un Server Component",
          "Un composant classe",
          "Une route API"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "\"use client\" kat-gol l Next.js: had component khaso browser. Fker 3lach: hooks, events...",
        "text": "Que fait la directive \"use client\" ?",
        "code": "\"use client\";\nimport { useState } from 'react';",
        "answers": [
          "Elle déploie le composant sur le CDN client",
          "Elle marque le composant comme Client Component pour que les hooks et l'interactivité marchent",
          "Elle accélère le chargement côté serveur",
          "Elle désactive JavaScript"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "next/image kat-optimiw tsawer: resize, lazy load... tfekkar chno kat-rba7 3la <img> 3adiya.",
        "text": "Quel est le principal avantage du composant next/image par rapport à un <img> classique ?",
        "answers": [
          "Il ne supporte que les GIF",
          "Optimisation automatique des images : redimensionnement, lazy loading et formats modernes",
          "Il uploade les images vers Vercel",
          "Il supprime le besoin du texte alt"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "Next.js mn 3nd charika wa7da li hiya li kat-hostih mzyan — fker chno smitha.",
        "text": "Quelle entreprise a créé Next.js et propose son hébergement le plus connu ?",
        "answers": [
          "Meta",
          "Vercel",
          "Netlify",
          "Google"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "metadata kat-bedel <head> dyal l page: title, description... bla ma tkteb <head> b yedik.",
        "text": "Qu'est-ce que l'export d'un objet `metadata` depuis une page fait ?",
        "code": "export const metadata = { title: 'About us' };",
        "answers": [
          "Ça définit le <head> HTML (titre et meta tags) de cette page",
          "Ça crée un sitemap",
          "Ça active TypeScript",
          "Ça ajoute la page à la barre de navigation"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "Dynamic segment kat-tkteb b [ ] — tfekkar fin kat-7et slug f l file path.",
        "text": "Quel fichier gère la route dynamique /blog/hello-world ?",
        "answers": [
          "app/blog/page.js",
          "app/blog/[slug]/page.js",
          "app/blog/slug/page.js",
          "app/[blog]/hello-world.js"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "params kat-jib l dynamic segment mn URL — fker chno ghadi ykon f slug hna.",
        "text": "Sur /blog/hello-world, que contient params.slug ?",
        "code": "export default function Post({ params }) {\n  return <h1>{params.slug}</h1>;\n}",
        "answers": [
          "\"blog\"",
          "\"hello-world\"",
          "\"/blog/hello-world\"",
          "undefined"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "layout.js UI mochtaraka: navbar, footer... kat-b9a bla ma t3awd t-renda. Fker 3lach mofida.",
        "text": "Quel est le rôle de layout.js dans l'App Router ?",
        "answers": [
          "Il définit la page 404",
          "Une UI partagée (navbar, footer) qui englobe les pages et est préservée pendant la navigation",
          "Il configure la base de données",
          "Il ne s'exécute que côté client"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "loading.js = fallback UI melli l page mazal kat-loadi. Fker chno kay-chof l user f had l wa9t.",
        "text": "Qu'est-ce qu'un fichier loading.js à côté de page.js vous donne ?",
        "answers": [
          "Une page plus lente",
          "Une UI de chargement instantanée affichée pendant que la page arrive en streaming, via une limite Suspense",
          "Une erreur de build",
          "Une redirection"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "error.js khaso \"use client\" — 3lach? Fker: reset(), useEffect...",
        "text": "Un fichier error.js doit être un Client Component. Pourquoi ?",
        "answers": [
          "Parce que les erreurs n'arrivent que dans le navigateur",
          "Parce qu'il utilise des hooks comme useEffect et une fonction reset() pour la limite d'erreur",
          "Parce que les Server Components ne peuvent pas avoir de fichiers",
          "Parce que Vercel l'exige"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "route.js = API endpoint. Fker chno URL ghadi yjawb w b ina method.",
        "text": "Que crée ce fichier ?",
        "code": "// app/api/users/route.js\nexport async function GET() {\n  return Response.json({ ok: true });\n}",
        "answers": [
          "Une page à /api/users",
          "Un route handler GET qui répond à /api/users",
          "Un middleware",
          "Une Server Action"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "Bach t-generi /blog/slug1, /blog/slug2 f build — kayna function mo3ayana. Fker smitha.",
        "text": "Quelle fonction pré-rend les routes dynamiques comme /blog/[slug] au build ?",
        "answers": [
          "generateMetadata",
          "generateStaticParams",
          "revalidatePath",
          "notFound"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "Bla NEXT_PUBLIC_, l variable ghir f server. Fker 3lach khaso prefix bach t-ban f browser.",
        "text": "Pourquoi cette variable a-t-elle besoin du préfixe NEXT_PUBLIC_ ?",
        "code": "const key = process.env.NEXT_PUBLIC_API_URL;",
        "answers": [
          "Ça rend la valeur secrète",
          "Ça expose la variable au code côté navigateur",
          "C'est requis pour toutes les variables d'environnement",
          "Ça chiffre la valeur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "ISR = static + refresh. revalidate = 60 ma3naha... tfekkar.",
        "text": "Dans une page ou une route, que fait `export const revalidate = 60` ?",
        "code": "export const revalidate = 60;",
        "answers": [
          "Ça met la page en cache 60 millisecondes",
          "Ça active l'ISR : la page est régénérée au plus toutes les 60 secondes",
          "Ça retarde la réponse de 60 secondes",
          "Ça limite la page à 60 visiteurs"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "middleware.js kay-khdem 9bel ma twsal l request l page. Fker fin kayn w chno y9dar ydir: redirect, rewrite...",
        "text": "Où vit middleware.js et quand s'exécute-t-il ?",
        "answers": [
          "Dans app/, après le rendu de la page",
          "À la racine du projet (ou src/), avant que la requête ne se termine — il peut réécrire, rediriger ou modifier la réponse",
          "Dans public/, seulement pour les images",
          "Il ne s'exécute qu'au build"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "\"use server\" kat-gol: had function kat-khdem f server, wakha t-3ayet liha mn client. Fker smit l concept.",
        "text": "Qu'est-ce que createPost ici ?",
        "code": "\"use server\";\nexport async function createPost(formData) {\n  // save to DB\n}",
        "answers": [
          "Un Client Component",
          "Une Server Action : s'exécute sur le serveur mais peut être appelée depuis le code client / les formulaires",
          "Un middleware",
          "Une route API"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "no-store = ma t-cache-ich walo. Fker chno no3 dyal rendering ghadi ykon.",
        "text": "Que fait `cache: 'no-store'` ?",
        "code": "const res = await fetch(url, { cache: 'no-store' });",
        "answers": [
          "Ça met en cache pour toujours",
          "Ça saute le cache : la route est toujours rendue dynamiquement avec des données fraîches",
          "Ça stocke la réponse 1 seconde",
          "Ça ne marche que dans le navigateur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "Badelti data f DB — l cache 9dim khaso ytm7a. Fker chno function kat-dir hadchi.",
        "text": "Après avoir modifié des données dans une Server Action, comment rafraîchir les pages en cache qui affichent ces données ?",
        "answers": [
          "Appeler revalidatePath('/blog') ou revalidateTag('posts')",
          "Recharger le dashboard Vercel",
          "Supprimer le dossier app/",
          "Appeler router.refresh() depuis un Server Component"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "Streaming = ba3d l page kat-ban w l slow part kat-ji mn ba3d. Fker b chno kat-wrapiha.",
        "text": "Une page récupère une API lente et vous voulez que le reste de l'UI s'affiche tout de suite. Que faites-vous ?",
        "answers": [
          "Utiliser seulement loading.js",
          "Envelopper le composant lent dans <Suspense fallback={...}> pour qu'il arrive en streaming",
          "Ajouter \"use client\" à la page",
          "Augmenter le timeout du serveur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "redirect() dyal next/navigation khasa b server. F client event handler kat-sta3mel 7aja khra. Fker.",
        "text": "Où peut-on utiliser redirect() de next/navigation ?",
        "code": "import { redirect } from 'next/navigation';\nredirect('/login');",
        "answers": [
          "Dans n'importe quel gestionnaire d'événement d'un Client Component",
          "Dans les Server Components, les Server Actions et les route handlers — pas dans les gestionnaires d'événements",
          "Seulement dans le middleware",
          "Seulement dans next.config.js"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "cookies() w headers() kat-qraw request dyal server — ma ymknch f browser. Fker fin.",
        "text": "Où peut-on appeler cookies() / headers() ?",
        "code": "import { cookies } from 'next/headers';",
        "answers": [
          "Dans n'importe quel Client Component",
          "Seulement dans les Server Components, les Server Actions et les route handlers",
          "Seulement dans le middleware",
          "Dans la console du navigateur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "next/font kat-host l font m3a site dyalk — bla request l Google, bla layout shift. Fker l fayda.",
        "text": "Qu'est-ce que next/font vous apporte ?",
        "answers": [
          "Il télécharge les polices depuis Google à chaque visite",
          "Des polices auto-hébergées sans décalage de mise en page et sans requête externe",
          "Il ne marche qu'avec les polices système",
          "Il convertit les polices en images"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "next/image ma kat-9belch ay external domain — khaso tsre7 lih. Fker fin.",
        "text": "Votre <Image> charge depuis https://cdn.example.com. Que devez-vous configurer ?",
        "answers": [
          "Rien, ça marche par défaut",
          "remotePatterns (ou domains) pour cdn.example.com dans next.config.js",
          "Un middleware",
          "Une route API"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "await mor await = wa7ed kay-tsna lakhor (waterfall). Promise.all bjojhom f nafs l wa9t. Fker l far9 f speed.",
        "text": "Pourquoi est-ce mieux que deux await séquentiels dans un Server Component ?",
        "code": "const [user, posts] = await Promise.all([\n  getUser(id),\n  getPosts(id),\n]);",
        "answers": [
          "Ça utilise moins de mémoire",
          "Les deux requêtes démarrent en même temps au lieu d'attendre l'une après l'autre (pas de waterfall)",
          "Ça met les résultats en cache",
          "Ça ne marche que dans les Client Components"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "notFound() kat-warri not-found.js b status 404. Fker chno kay-chof l user.",
        "text": "Appeler notFound() de next/navigation dans une page fait quoi ?",
        "answers": [
          "Ça lance une erreur de build",
          "Ça affiche l'UI not-found.js la plus proche avec un statut 404",
          "Ça redirige vers /404",
          "Ça supprime la page"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "Edge Runtime khfif — machi Node kaml. Fker chno ma ymknch t-sta3mel fih.",
        "text": "Le middleware s'exécute sur l'Edge Runtime. Quelle conséquence pratique ?",
        "answers": [
          "Vous pouvez utiliser n'importe quelle API Node.js comme fs",
          "Vous ne pouvez pas utiliser les APIs réservées à Node.js (fs, child_process) ; restez léger et rapide",
          "Il ne s'exécute qu'en développement",
          "Il a un accès direct à la base de données"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "generateMetadata b params kat-dir title dynamique 7asab slug. Fker chno ghadi yban f <title>.",
        "text": "Que fait ceci ?",
        "code": "export async function generateMetadata({ params }) {\n  const post = await getPost(params.slug);\n  return { title: post.title };\n}",
        "answers": [
          "Ça génère les params statiques",
          "Ça définit un titre <head> dynamique par page selon le slug",
          "Ça crée un flux RSS",
          "Ça redirige les slugs inconnus"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "force-dynamic = dayman dynamic, bla static. Fker imta kat-7tajha.",
        "text": "Que fait cette config de segment de route ?",
        "code": "export const dynamic = 'force-dynamic';",
        "answers": [
          "Ça force la route à être générée statiquement",
          "Ça sort la route du rendu statique : toujours rendue dynamiquement à chaque requête",
          "Ça active l'ISR",
          "Ça désactive la route"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "matcher '/dashboard/:path*' — :path* ma3naha ay sub-path ta7t dashboard. Fker ina URL kat-matchi.",
        "text": "Pour quelle URL ce middleware s'exécute-t-il ?",
        "code": "// middleware.js\nexport const config = {\n  matcher: '/dashboard/:path*',\n};",
        "answers": [
          "/dashboard/settings",
          "/dash",
          "/",
          "/about"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "Server Actions khdamin b HTML form 3adi — bla JS kay-sift l form l server. Fker.",
        "text": "Ce formulaire appelle une Server Action. Que se passe-t-il si JavaScript est désactivé dans le navigateur ?",
        "code": "<form action={createPost}>\n  <input name=\"title\" />\n  <button>Save</button>\n</form>",
        "answers": [
          "Le formulaire casse",
          "Ça marche quand même : le formulaire est posté vers la server action (progressive enhancement)",
          "Ça redirige vers /404",
          "Les données sont perdues"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "pending = true melli l action khdama. Fker chno kat-warri l user f had l wa9t.",
        "text": "À quoi sert useFormStatus().pending ?",
        "code": "import { useFormStatus } from 'react-dom';\nconst { pending } = useFormStatus();",
        "answers": [
          "À vérifier si la base de données est en ligne",
          "À afficher un état de chargement sur le bouton pendant que la Server Action s'exécute",
          "À valider le formulaire",
          "À rediriger après l'envoi"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "3600 seconds = sa3a. Fker chno ma3na revalidate hna.",
        "text": "Que fait `next: { revalidate: 3600 }` ?",
        "code": "const res = await fetch(url, { next: { revalidate: 3600 } });",
        "answers": [
          "Ça réessaie le fetch 3600 fois",
          "Ça met le résultat en cache et le revalide au plus toutes les heures",
          "Ça expire après 3600 ms",
          "Ça désactive le cache"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "page.js w route.js f nafs l dossier — conflict. Fker chno kay-gol Next.js.",
        "text": "Un dossier contient à la fois page.js et route.js. Que se passe-t-il ?",
        "answers": [
          "Les deux marchent très bien",
          "Erreur de build : un segment de route ne peut pas avoir à la fois une page et un route handler",
          "La page gagne",
          "L'API gagne"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "async component + \"use client\" = mochkil. Fker 3lach: async ghir l Server Components.",
        "text": "Qu'est-ce qui ne va pas avec ce Client Component ?",
        "code": "\"use client\";\nexport default async function List() {\n  const data = await getData();\n  return <ul>...</ul>;\n}",
        "answers": [
          "Rien, il est valide",
          "Les Client Components ne peuvent pas être async — les composants async sont réservés aux Server Components",
          "use client doit être en bas",
          "getData doit utiliser fetch"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "dynamicParams = false ma3naha: ghir li f generateStaticParams. /blog/c ma kaynach — fker chno kay-w93e3.",
        "text": "Un utilisateur visite /blog/c. Que se passe-t-il ?",
        "code": "export async function generateStaticParams() {\n  return [{ slug: 'a' }, { slug: 'b' }];\n}\nexport const dynamicParams = false;",
        "answers": [
          "La page est rendue dynamiquement",
          "Ça affiche l'UI not-found (404), car seuls a et b ont été pré-rendus",
          "Ça redirige vers /blog/a",
          "Ça fait crasher le build"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "Server rendera wa9t, client wa9t akhor — mismatch. Fker kifach t-khaliha ghir f client.",
        "text": "Ce Client Component lève parfois une erreur d'hydratation (hydration mismatch). Pourquoi, et quel est le fix ?",
        "code": "export default function Clock() {\n  return <p>{new Date().toLocaleTimeString()}</p>;\n}",
        "answers": [
          "Le serveur et le client affichent des heures différentes ; l'afficher dans useEffect/useState pour ne le rendre que côté client",
          "Date n'est pas autorisé dans React",
          "toLocaleTimeString est déprécié",
          "Le composant a besoin de \"use server\""
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "useEffect fetch = render, fetch, render (waterfall). F server kat-jib data 9bel ma tsift HTML. Fker l far9.",
        "text": "Un Client Component récupère des données dans useEffect au montage, puis le parent les transmet. Quel problème de rendu cela cause-t-il par rapport à un fetch dans un Server Component ?",
        "answers": [
          "Aucun, c'est identique",
          "Un waterfall côté client : la page s'affiche, puis récupère, puis se ré-affiche — plus lent que le fetch parallèle côté serveur",
          "Ça casse seulement le SEO",
          "Ça cause des boucles infinies"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "rewrite kat-bedel l content bla ma t-bedel URL. redirect kat-bedel URL. Fker chno ghadi ychof l user.",
        "text": "rewrite vs redirect dans le middleware : que voit l'utilisateur ?",
        "code": "// middleware.js\nreturn NextResponse.rewrite(new URL('/maintenance', req.url));",
        "answers": [
          "L'URL change vers /maintenance",
          "L'utilisateur voit le contenu de /maintenance mais l'URL reste la même",
          "Ça retourne une 404",
          "Ça recharge la page deux fois"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "tags + revalidateTag = t-m7i cache dyal tag mo3ayan on demand. Fker.",
        "text": "Qu'est-ce que cette paire accomplit ?",
        "code": "await fetch(url, { next: { tags: ['posts'] } });\n// later, in a Server Action:\nrevalidateTag('posts');",
        "answers": [
          "Ça supprime la table posts",
          "Revalidation à la demande : tous les fetch taggés 'posts' sont purgés et re-récupérés frais",
          "Ça renomme le tag",
          "Ça met en cache pour toujours"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "template '%s | Acme' — %s kat-t3awed b title dyal l page. Fker chno ghadi yban.",
        "text": "Une page enfant définit title: 'Pricing'. Qu'est-ce qui s'affiche dans l'onglet du navigateur ?",
        "code": "export const metadata = {\n  title: { template: '%s | Acme', default: 'Acme' },\n};",
        "answers": [
          "Pricing",
          "Acme",
          "Pricing | Acme",
          "%s | Acme"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "priority = had tswira mohima (LCP) — preloadiha. Fker 3lach.",
        "text": "Que fait la prop `priority` ?",
        "code": "<Image src=\"/hero.jpg\" alt=\"Hero\" priority />",
        "answers": [
          "Elle agrandit l'image",
          "Elle précharge l'image (priorité haute) — à utiliser pour l'image LCP",
          "Elle désactive le lazy loading pour toutes les images",
          "Elle compresse davantage l'image"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "@folder = slot f layout. default.js fallback melli slot ma 3ndo match. Fker l use case: dashboard.",
        "text": "À quoi servent les routes parallèles (@analytics, @team) avec un fichier default.js ?",
        "answers": [
          "À exécuter du code dans des threads parallèles",
          "À afficher plusieurs slots indépendants dans un layout, avec default.js comme repli quand un slot n'a pas de correspondance",
          "À dupliquer les pages",
          "À accélérer le build"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "output export = static 100%, bla server. Fker chno kat-khsar: middleware, ISR...",
        "text": "Vous mettez `output: 'export'` dans next.config.js. Quel est le compromis ?",
        "answers": [
          "Des routes dynamiques plus rapides",
          "Export HTML entièrement statique : pas de fonctionnalités serveur (ni middleware, ni ISR, ni Server Actions nécessitant un serveur)",
          "Ça active l'Edge runtime",
          "Ça exige Vercel"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "(.) = intercept — modal fo9 l feed, w melli t-refresh kat-mchi l URL 7a9i9iya. Fker.",
        "text": "Que fait une route d'interception comme app/feed/(.)photo/[id]/page.js ?",
        "answers": [
          "Elle bloque la page photo",
          "Elle affiche la photo en modale par-dessus le feed tout en gardant /photo/[id] comme vraie URL au refresh",
          "Elle supprime le feed",
          "Elle redirige vers /feed"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "headers() khaso request — static page ma 3ndhach request. Fker l 7el: force-dynamic.",
        "text": "Le build échoue avec 'Dynamic server usage' pour une page qui utilise headers(). Quelle est la cause et le fix ?",
        "answers": [
          "headers() est interdit ; supprimez-le",
          "La page était rendue statiquement mais headers() a besoin de la requête : rendez-la dynamique (force-dynamic) ou acceptez le rendu dynamique",
          "C'est une erreur réservée à Vercel",
          "Ajoutez \"use client\""
        ],
        "correct": 1,
        "selection": null
      }
    ]
  }
];
