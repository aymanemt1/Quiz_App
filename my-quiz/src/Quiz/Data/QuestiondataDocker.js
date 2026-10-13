export const dockerQuestions = [
  {
    "lang": "EN",
    "qsts": [
      {
        "id": 0,
        "level": 1,
        "explain_dr": "So2al 3la docker run: fker wach docker kay-7taj l image 9bl ma y-starti l container, w mnin ghadi y-jibha ila ma kaynach 3andk local.",
        "text": "It's the first run on this machine. What happens?",
        "code": "$ docker run nginx",
        "answers": [
          "An error — the image must be pulled first",
          "Only the image is downloaded",
          "Docker pulls the nginx image, then starts a container",
          "A Dockerfile is created"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al 3la docker ps: l command l 3adiya kat-wri ghir l containers li khdamin daba. L containers li w9fo khasshom flag khassa. Fker chkon hia.",
        "text": "A container was stopped. Where does it appear?",
        "code": "$ docker ps\n$ docker ps -a",
        "answers": [
          "Only in docker ps -a",
          "In both",
          "Only in docker ps",
          "In docker images"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al 3la docker images: had l command kat-lister l images li m-downloadin 3andk local, machi l containers. Fker l far9 bin image w container.",
        "text": "What does this list?",
        "code": "$ docker images",
        "answers": [
          "Running containers",
          "Dockerfiles",
          "Volumes",
          "Images stored locally"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al 3la --name: smit l container khass tkoun unique. Ila 3titih smia li deja msta3mla, docker ghadi y-rfd. Fker chnu l mochkil hna.",
        "text": "Why does the second command fail?",
        "code": "$ docker run --name web nginx\n$ docker run --name web nginx",
        "answers": [
          "nginx can run only once",
          "The container name 'web' is already taken",
          "The image was deleted",
          "Port 80 is busy"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "So2al 3la -d: had l flag kat-bdl l tari9a li kay-khdm biha l container. Fker chnu kay3ni 'detached' — wach ghadi y-rjja3lk l prompt?",
        "text": "What does -d do?",
        "code": "$ docker run -d nginx",
        "answers": [
          "Runs the container detached in the background",
          "Deletes the container on exit",
          "Runs in debug mode",
          "Downloads the image only"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "So2al 3la docker logs: had l command kat-wri l output dyal l container (stdout/stderr) — mzyana bach t-debugi. Fker chnu kay-ktb l app f l console.",
        "text": "The app inside crashed. What does this show?",
        "code": "$ docker logs web",
        "answers": [
          "The Dockerfile",
          "Running processes",
          "The container's stdout/stderr output",
          "The image layers"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al 3la docker exec: had l command kat-khdm command DAKHL l container li khdam deja, machi container jdid. Fker l far9 bin exec w run.",
        "text": "The web container is running. What does this do?",
        "code": "$ docker exec -it web sh",
        "answers": [
          "Starts a new container",
          "Opens an interactive shell inside the running container",
          "Stops the container",
          "Rebuilds the image"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "So2al 3la tags: node:20 kay3ni l image 'node' b l tag '20'. Fker chnu kay3ni l tag — wach hwa l version label?",
        "text": "What does node:20 mean?",
        "code": "$ docker pull node:20",
        "answers": [
          "Node.js version 20 installed locally",
          "20 containers",
          "Port 20",
          "The node image tagged version 20"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "So2al 3la docker stop: l stop ma kay-m7ich l container — ghir kay-w9fo. L container kay-b9a kayn walakin stopped. Fker fin ghadi y-ban.",
        "text": "Where is the web container now?",
        "code": "$ docker stop web\n$ docker ps",
        "answers": [
          "Deleted",
          "Still in docker ps",
          "Still exists but stopped — visible in docker ps -a",
          "Restarted automatically"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "So2al 3la docker rm: ma t-9drch t-m7i container li khdam — khass t-w9fo lwl wla t-force l remove. Fker chnu ghadi y-golik docker.",
        "text": "web is running. What happens?",
        "code": "$ docker rm web",
        "answers": [
          "An error — stop it first or use -f",
          "It is removed",
          "It is restarted",
          "It is paused"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "So2al 3la -p: l format hwa host_port:container_port. L app kat-sma3 3la 80 DAKHL l container, w nta kat-wslha mn port dyal l host. Fker l mapping.",
        "text": "The app listens on port 80 in the container. How do you reach it from the host?",
        "code": "$ docker run -p 8080:80 nginx",
        "answers": [
          "http://localhost:80",
          "http://localhost:8080",
          "http://nginx:8080",
          "It is unreachable — -p is wrong"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "So2al 3la -p reversed: l format dima host:lwl w container:tani. Ila 9lbtihom, l mapping ghadi ykoun ghalat. Fker chkon li kayn 3la 8080 daba.",
        "text": "Goal: host 8080 -> container 80. Why can't you reach the app on localhost:8080?",
        "code": "$ docker run -p 80:8080 nginx",
        "answers": [
          "nginx doesn't support -p",
          "The container didn't start",
          "localhost is wrong",
          "The mapping is reversed — it maps host 80 to container 8080"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "So2al 3la ubuntu exit: l container kay-b9a khdam ghir ila 3andu process f l foreground. ubuntu bla command kat-kmml direct w kat-khrj. Fker chnu na9s.",
        "text": "The container exits immediately. Why?",
        "code": "$ docker run ubuntu",
        "answers": [
          "ubuntu has no long-running foreground process by default",
          "The image is broken",
          "docker run needs -d",
          "Ubuntu cannot run in Docker"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "So2al 3la docker build: l '.' f l akhir hia l build context — l directory li docker kay-9ra mnha l Dockerfile w l files. Machi l tag wla l port.",
        "text": "What does the final '.' mean?",
        "code": "$ docker build -t myapp .",
        "answers": [
          "The image tag",
          "The container name",
          "The build context path — the Dockerfile is read from the current directory",
          "The port"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "So2al 3la -e: had l flag kat-bdl 7aja DAKHL l environment dyal l container. Fker chnu ghadi ykoun l value dyal NODE_ENV dakhl l app.",
        "text": "What does -e do?",
        "code": "$ docker run -e NODE_ENV=production myapp",
        "answers": [
          "Edits the Dockerfile",
          "Exposes a port",
          "Enables debug logs",
          "Sets the NODE_ENV environment variable inside the container"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al 3la -v: had l flag kat-rbt directory dyal l host m3a directory dakhl l container. Fker l direction: l data fin kat-b9a w fin kat-ban.",
        "text": "What does -v do here?",
        "code": "$ docker run -v /host/data:/data postgres",
        "answers": [
          "Copies /data into the image",
          "Mounts the host directory /host/data at /data in the container",
          "Creates a backup",
          "Sets a version"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al 3la layer cache: docker kay-cache kol step. Ila bdlti ay file 9bl ma t-copy l dependencies, l cache dyal npm install kay-tfsakh. Fker l tartib dyal l COPY.",
        "text": "Every tiny code change makes the build reinstall all dependencies. Why?",
        "code": "FROM node:20\nWORKDIR /app\nCOPY . .\nRUN npm install\nCMD [\"node\", \"server.js\"]",
        "answers": [
          "COPY . . before RUN npm install invalidates the layer cache on any file change",
          "npm install is slow by nature",
          "WORKDIR is wrong",
          "CMD should be RUN"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al 3la docker stop: docker ma kay-9tlch l container direct — kay-sift signal lwl w kay-tsna shwiya. Fker chnu kay-w9a3 f had l modda.",
        "text": "Why doesn't the container stop instantly?",
        "code": "$ docker stop web   # takes 10 seconds",
        "answers": [
          "The network is slow",
          "docker stop always takes 10s",
          "docker stop sends SIGTERM and waits a grace period before SIGKILL",
          "The image is large"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "So2al 3la image prune: had l command kat-m7i ghir no3 mo3ayan dyal l images. Fker chnu kay3ni 'dangling' — wach ga3 l images wla ghir chi no3?",
        "text": "What does this remove?",
        "code": "$ docker image prune",
        "answers": [
          "All images",
          "Dangling (untagged) images",
          "Running containers",
          "Volumes"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al 3la build context: docker build kat-sift GA3 l directory (l context) l l daemon 9bl ma y-bda l build. Ila kan kbir, l build ghadi y-bda b shwiya. Fker chnu kayn f l context.",
        "text": "The project has a 2GB node_modules and no .dockerignore. Why is the build so slow to start?",
        "code": "$ docker build -t myapp .",
        "answers": [
          "node:20 is a big image",
          "The CPU is slow",
          "docker build always copies node_modules",
          "The whole 2GB context (including node_modules) is sent to the daemon"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al 3la layer cache: l steps li ma t-bdloch kayt-3awd y-sta3mlo mn l cache. Ghir l steps mn l point li t-bdl kayt-3awdo. Fker fin bdlti server.js.",
        "text": "You change only server.js and rebuild. Which steps re-run?",
        "code": "FROM node:20\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nCMD [\"node\", \"server.js\"]",
        "answers": [
          "Every step from FROM",
          "Only CMD",
          "From the second COPY onward — package install stays cached",
          "No step — the image is reused entirely"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "So2al 3la RUN vs CMD: wa7da kat-tnfd f wa9t l BUILD w l khra f wa9t l RUN dyal l container. L server khass y-bda f wa9t l container, machi f l build.",
        "text": "Why does the build hang or fail?",
        "code": "FROM node:20\nRUN npm start",
        "answers": [
          "npm start doesn't exist",
          "RUN executes at build time — starting the server belongs in CMD",
          "FROM must come last",
          "node:20 has no npm"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al 3la compose up: had l command kat-starti ga3 l services li f l file. L flag -d kat-khdmhom f l background. Fker chkon l command l kamla.",
        "text": "How do you start everything in the background?",
        "code": "services:\n  web:\n    image: myapp\n    ports: [\"8080:80\"]\n  db:\n    image: postgres",
        "answers": [
          "docker compose up -d",
          "docker compose start all",
          "docker run compose",
          "docker build compose"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al 3la compose networking: kol container 3andu l localhost dyalo b7alo. Bach l web y-wsl l db, khass y-sta3ml smit l service b7al hostname.",
        "text": "The web container calls http://localhost:5432 but the db service runs postgres. It gets 'connection refused'. Why?",
        "code": "services:\n  web: ...\n  db:\n    image: postgres",
        "answers": [
          "Postgres isn't running",
          "The port must be 5433",
          "Compose doesn't provide networking",
          "Each container has its own localhost — web must use host 'db'"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "So2al 3la depends_on: had l option ghir kat-rtb l start order. L db ymkn y-bda walakin mazal ma ready. Fker l far9 bin 'started' w 'ready'.",
        "text": "The web app sometimes crashes on startup. Why doesn't depends_on prevent it?",
        "code": "services:\n  web:\n    depends_on: [db]",
        "answers": [
          "depends_on is broken",
          "The DB image is wrong",
          "depends_on only orders startup — it doesn't wait for the DB to be ready",
          "web starts too fast by design"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "So2al 3la EXPOSE: had l instruction ghir documentation — kat-gol chkon l port li l app kat-sta3ml. Fker: wach EXPOSE bohdo kafi bach t-wsl l app mn l host?",
        "text": "The app isn't reachable from the host. Why?",
        "code": "FROM node:20\nEXPOSE 3000\nCMD [\"node\", \"server.js\"]\n\n$ docker run myapp",
        "answers": [
          "EXPOSE only documents the port — you still need -p 3000:3000",
          "EXPOSE is invalid",
          "The app crashed",
          "Port 3000 is reserved"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al 3la docker exec: exec kat-khdm command dakhl container li khdam deja. Fker: psql ghadi y-tkhdm fin — f container jdid wla f db?",
        "text": "The db container is running. What does this do?",
        "code": "$ docker exec -it db psql -U postgres",
        "answers": [
          "Creates a new db container",
          "Runs psql inside the existing db container",
          "Restarts the db container",
          "Backs up the database"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al 3la restart policy: 'unless-stopped' kat-gol l docker chnu y-dir m3a l container ila w9f. Fker chnu ghadi yw9a3 mn ba3d l reboot.",
        "text": "The host reboots overnight. What happens to web?",
        "code": "services:\n  web:\n    restart: unless-stopped",
        "answers": [
          "It stays stopped",
          "It is deleted",
          "Compose must be re-run manually",
          "Docker restarts it automatically"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al 3la user-defined network: f l networks li kat-creehom nta, docker kat-7l l DNS bin l containers — t-9dr t-sta3ml smit l container b7al hostname.",
        "text": "Two containers share a user-defined network. How can one reach the other?",
        "code": "$ docker network ls",
        "answers": [
          "By container name as hostname",
          "Only by IP address",
          "They cannot communicate",
          "Via localhost"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al 3la docker inspect: had l command kat-wri l details kamlin dyal l container — l mounts, l network, l env, etc. Fker chkon li kay-wri l low-level info.",
        "text": "Which command shows a container's mounts, IP and env?",
        "answers": [
          "docker ps web",
          "docker logs web",
          "docker inspect web",
          "docker info web"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al 3la ENTRYPOINT + CMD: l ENTRYPOINT hwa l command l fixed, w l CMD hia l default arguments. Ila 3titi arguments f docker run, kat-3wd l CMD. Fker chnu ghadi y-tkhdm.",
        "text": "What actually executes?",
        "code": "ENTRYPOINT [\"node\", \"app.py\"]\nCMD [\"--help\"]\n\n$ docker run myapp --version",
        "answers": [
          "--version",
          "node app.py --help",
          "An error",
          "node app.py --version"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "So2al 3la compose down: down kat-m7i l containers. Fker: wach kat-m7i l volumes m3ahom wla l data kat-b9a?",
        "text": "The db service uses a named volume. Is the database data still there?",
        "code": "$ docker compose down\n$ docker compose up -d",
        "answers": [
          "Yes — named volumes survive down (only down -v removes them)",
          "No — down deletes volumes",
          "Only if it was a bind mount",
          "No — containers are recreated"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "So2al 3la down -v: fker chnu kay-zid l flag -v 3la down l 3adi — chnu ghadi yw9a3 l l data li kant f l volume?",
        "text": "After this, the database is empty. Why?",
        "code": "$ docker compose down -v",
        "answers": [
          "Postgres failed to start",
          "The image was updated",
          "down -v deletes named volumes, wiping the data",
          "Compose never persists data"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al 3la ARG vs ENV: kayn far9 bin build-time w run-time. Fker chkon li kayn f l akhir — l value dyal l build wla dyal l run?",
        "text": "What is API_URL inside the container?",
        "code": "ARG API_URL\nENV API_URL=$API_URL\n\n$ docker build --build-arg API_URL=a .\n$ docker run -e API_URL=b myapp",
        "answers": [
          "a — build args win",
          "b — the runtime -e overrides the build-time value",
          "Empty",
          "An error"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al 3la host.docker.internal: had l hostname l khass kat-7l l docker bach l container y-9dr y-wsl l service li khdam 3la l host. Fker l direction — mn container l host.",
        "text": "The container needs a service running on the host laptop. What is host.docker.internal for?",
        "code": "# container -> host.docker.internal:3000",
        "answers": [
          "A special hostname to reach the host from inside a container",
          "The container's own IP",
          "A Docker Hub mirror",
          "The default bridge gateway"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al 3la healthcheck: had l config kat-khli docker y-testi wach l service ready bssa7 (b7al pg_isready). L orchestrator kay-sta3mlha bach y-3rf imta y-bda li wrah.",
        "text": "What is this healthcheck for?",
        "code": "services:\n  db:\n    image: postgres\n    healthcheck:\n      test: [\"CMD-SHELL\", \"pg_isready\"]",
        "answers": [
          "Restarting postgres",
          "Backing up the DB",
          "It does nothing",
          "Letting orchestrators (and depends_on conditions) know when the DB is really ready"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "So2al 3la latest tag: l tag 'latest' kay-tbdl kol ma t-pushi build jdid — ma kay3nich version thabta. Fker chnu l mochkil f CI ila l tag tbdl bla ma t-bdl l code.",
        "text": "CI broke after a rebuild, with no code changed. What likely happened, and what is the fix?",
        "code": "$ docker run myapp:latest",
        "answers": [
          "Docker Hub was hacked",
          "The cache was cleared",
          "'latest' moved to a new build — pin a version tag or digest",
          "latest never changes"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "So2al 3la PID 1 w signals: f shell form, sh hwa PID 1 w ma kay-forwardich l signals l node. L app ma kat-wslhach SIGTERM w docker kay-tsna 7ta l timeout.",
        "text": "The container takes 10s to stop on docker stop. Why?",
        "code": "CMD npm start",
        "answers": [
          "npm is slow",
          "Shell form makes sh PID 1, so SIGTERM isn't forwarded to node",
          "10s is the minimum",
          "The app ignores signals by default"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "So2al 3la docker history: had l command kat-wri l layers dyal l image w l commands li createawhom. Fker chnu ghadi y-ban l kol layer.",
        "text": "What does this show?",
        "code": "$ docker history myapp",
        "answers": [
          "Running containers",
          "The git history",
          "Past docker commands you typed",
          "The image's layers and the commands that created them"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al 3la secrets f image: fker wach l layers dyal l image kayt-m7aw mn ba3d l build wla kay-b9aw — w chnu kay3ni hadchi l l key li t-bakat.",
        "text": "Why is baking the key into the image dangerous?",
        "code": "ARG API_KEY=sk-live-123\nRUN curl -H \"Key: $API_KEY\" https://api.example.com/setup",
        "answers": [
          "It stays visible in layers via docker history and in the registry",
          "ARG values are printed at runtime",
          "It slows the build",
          "It breaks caching"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al 3la BuildKit cache mount: had l mount kat-7tfz l cache (b7al downloads dyal npm) bin l builds bach l build li wrah ykoun sri3. Fker chnu kayt-7tfz.",
        "text": "What does this BuildKit mount do?",
        "code": "RUN --mount=type=cache,target=/root/.npm npm ci",
        "answers": [
          "Installs npm globally",
          "Caches npm downloads across builds to speed them up",
          "Copies node_modules from the host",
          "It is the same as a volume"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al 3la scratch: had l base image l khawya mzyana ghir l l binaries li statically compiled — ma 7tajin ta OS. Fker ch7al ghadi tkoun sghira w secure.",
        "text": "When is a scratch base image a good choice?",
        "code": "FROM scratch\nCOPY myapp /myapp\nCMD [\"/myapp\"]",
        "answers": [
          "For Node.js apps",
          "For databases",
          "For a statically compiled binary — minimal size and attack surface",
          "Never — scratch is deprecated"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "So2al 3la OOM: l message 'Out of memory: Killed' kay3ni l system 9tl l process 7it khssat l memory. Khass t-chof l usage w t-7dd l limits wla t-fixi l app.",
        "text": "The container keeps dying. What is the diagnosis and fix?",
        "code": "# dmesg: Out of memory: Killed process (myapp)",
        "answers": [
          "Check usage with docker stats, then set --memory limits / fix the app's memory use",
          "Increase the image size",
          "Add more CPUs only",
          "Restart Docker"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al 3la logs disk: l json-file log driver l default ma 3andush limit — l logs kat-kbr bla 7d. Fker chnu kay-ml l disk w kifach t-7dd l size.",
        "text": "/var/lib/docker fills up and the app logs a lot. Why does the disk fill, and how do you limit it?",
        "code": "# /var/lib/docker is full",
        "answers": [
          "Images grow over time",
          "Volumes grow automatically",
          "Docker has no log limits",
          "json-file logs grow unbounded — set --log-opt max-size/max-file"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "So2al 3la registry f tag: docker kay-9ra l registry mn smit l image. Fker: ila ma 7dditich fin, fin ghadi y-mchi l push by default?",
        "text": "Why must the tag include the registry host?",
        "code": "$ docker tag myapp registry.example.com/team/myapp:1.0\n$ docker push registry.example.com/team/myapp:1.0",
        "answers": [
          "It is just a label",
          "Tags cannot contain dots",
          "The host in the name tells Docker where to push (otherwise it defaults to Docker Hub)",
          "Push requires latest"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al 3la port conflict: l port dyal l host wa7ed — joj containers ma ymknch y-sta3mlo nafs l host port f nafs l wa9t. Fker chkon li khdah lwl.",
        "text": "Why does the second command fail?",
        "code": "$ docker run -p 80:80 nginx\n$ docker run -p 80:80 httpd",
        "answers": [
          "Host port 80 is already allocated by the first container",
          "Two web servers cannot coexist",
          "The image names conflict",
          "httpd needs port 8080"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "So2al 3la docker commit: fker wach t-9dr t-3awd t-bni nafs l image b nafs l tari9a mn commit — wach kayn record dyal kifach t-bnat?",
        "text": "The image was built with docker commit from a tweaked container. Why is docker commit a bad practice for production images?",
        "code": "$ docker commit web myapp:manual",
        "answers": [
          "commit doesn't save changes",
          "It is slower",
          "commit is read-only",
          "The image isn't reproducible — no record of how it was built"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al 3la compose -f multiple: docker compose kat-merge l files b l tartib — l file li wra kay-override l values dyal li 9blo. Fker chkon li kay-rba7.",
        "text": "What does passing two -f files do?",
        "code": "$ docker compose -f compose.yml -f compose.prod.yml up -d",
        "answers": [
          "Runs two separate projects",
          "Merges them, with compose.prod.yml overriding values",
          "It is an error",
          "Only the first is used"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al 3la multi-stage: l stage l khra (nginx) ghir kat-nskh l files l m-bniyin — l toolchain dyal l build ma kay-dkhlch f l image l nihaiya. Fker ch7al ghadi tkoun sghira.",
        "text": "Why use two stages here?",
        "code": "FROM node:20 AS build\nWORKDIR /app\nCOPY . .\nRUN npm ci && npm run build\nFROM nginx:alpine\nCOPY --from=build /app/dist /usr/share/nginx/html",
        "answers": [
          "The final image contains only the built static files, not the Node toolchain",
          "It builds twice as fast",
          "nginx needs Node",
          "Stages are required"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "So2al 3la resource limits: fker wach had l flags kay-sr3o l container wla kay-7ddo l max dyal l resources li y-9dr y-sta3ml.",
        "text": "What do these flags do?",
        "code": "$ docker run --memory=512m --cpus=1 myapp",
        "answers": [
          "Reserve 512MB on the host",
          "Speed up the container",
          "Cap the container at 512MB RAM and 1 CPU",
          "They are only documentation"
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
        "explain_dr": "So2al 3la docker run: fker wach docker kay-7taj l image 9bl ma y-starti l container, w mnin ghadi y-jibha ila ma kaynach 3andk local.",
        "text": "C'est la première exécution sur cette machine. Que se passe-t-il ?",
        "code": "$ docker run nginx",
        "answers": [
          "Une erreur — l'image doit d'abord être téléchargée",
          "Seule l'image est téléchargée",
          "Docker télécharge l'image nginx, puis démarre un conteneur",
          "Un Dockerfile est créé"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 1,
        "level": 1,
        "explain_dr": "So2al 3la docker ps: l command l 3adiya kat-wri ghir l containers li khdamin daba. L containers li w9fo khasshom flag khassa. Fker chkon hia.",
        "text": "Un conteneur a été arrêté. Où apparaît-il ?",
        "code": "$ docker ps\n$ docker ps -a",
        "answers": [
          "Seulement dans docker ps -a",
          "Dans les deux",
          "Seulement dans docker ps",
          "Dans docker images"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 2,
        "level": 1,
        "explain_dr": "So2al 3la docker images: had l command kat-lister l images li m-downloadin 3andk local, machi l containers. Fker l far9 bin image w container.",
        "text": "Qu'est-ce que cela liste ?",
        "code": "$ docker images",
        "answers": [
          "Les conteneurs en cours",
          "Les Dockerfiles",
          "Les volumes",
          "Les images stockées localement"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 3,
        "level": 1,
        "explain_dr": "So2al 3la --name: smit l container khass tkoun unique. Ila 3titih smia li deja msta3mla, docker ghadi y-rfd. Fker chnu l mochkil hna.",
        "text": "Pourquoi la deuxième commande échoue-t-elle ?",
        "code": "$ docker run --name web nginx\n$ docker run --name web nginx",
        "answers": [
          "nginx ne peut tourner qu'une fois",
          "Le nom de conteneur « web » est déjà pris",
          "L'image a été supprimée",
          "Le port 80 est occupé"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 4,
        "level": 1,
        "explain_dr": "So2al 3la -d: had l flag kat-bdl l tari9a li kay-khdm biha l container. Fker chnu kay3ni 'detached' — wach ghadi y-rjja3lk l prompt?",
        "text": "Que fait -d ?",
        "code": "$ docker run -d nginx",
        "answers": [
          "Lance le conteneur détaché en arrière-plan",
          "Supprime le conteneur à la sortie",
          "Lance en mode debug",
          "Télécharge seulement l'image"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 5,
        "level": 1,
        "explain_dr": "So2al 3la docker logs: had l command kat-wri l output dyal l container (stdout/stderr) — mzyana bach t-debugi. Fker chnu kay-ktb l app f l console.",
        "text": "L'application à l'intérieur a planté. Qu'est-ce que cela affiche ?",
        "code": "$ docker logs web",
        "answers": [
          "Le Dockerfile",
          "Les processus en cours",
          "La sortie stdout/stderr du conteneur",
          "Les couches de l'image"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 6,
        "level": 1,
        "explain_dr": "So2al 3la docker exec: had l command kat-khdm command DAKHL l container li khdam deja, machi container jdid. Fker l far9 bin exec w run.",
        "text": "Le conteneur web tourne. Que fait ceci ?",
        "code": "$ docker exec -it web sh",
        "answers": [
          "Démarre un nouveau conteneur",
          "Ouvre un shell interactif dans le conteneur en cours",
          "Arrête le conteneur",
          "Reconstruit l'image"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 7,
        "level": 1,
        "explain_dr": "So2al 3la tags: node:20 kay3ni l image 'node' b l tag '20'. Fker chnu kay3ni l tag — wach hwa l version label?",
        "text": "Que signifie node:20 ?",
        "code": "$ docker pull node:20",
        "answers": [
          "Node.js version 20 installé localement",
          "20 conteneurs",
          "Le port 20",
          "L'image node taguée version 20"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 8,
        "level": 1,
        "explain_dr": "So2al 3la docker stop: l stop ma kay-m7ich l container — ghir kay-w9fo. L container kay-b9a kayn walakin stopped. Fker fin ghadi y-ban.",
        "text": "Où est le conteneur web maintenant ?",
        "code": "$ docker stop web\n$ docker ps",
        "answers": [
          "Supprimé",
          "Toujours dans docker ps",
          "Existe toujours mais arrêté — visible dans docker ps -a",
          "Redémarré automatiquement"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 9,
        "level": 1,
        "explain_dr": "So2al 3la docker rm: ma t-9drch t-m7i container li khdam — khass t-w9fo lwl wla t-force l remove. Fker chnu ghadi y-golik docker.",
        "text": "web tourne. Que se passe-t-il ?",
        "code": "$ docker rm web",
        "answers": [
          "Une erreur — arrêtez-le d'abord ou utilisez -f",
          "Il est supprimé",
          "Il est redémarré",
          "Il est mis en pause"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 10,
        "level": 2,
        "explain_dr": "So2al 3la -p: l format hwa host_port:container_port. L app kat-sma3 3la 80 DAKHL l container, w nta kat-wslha mn port dyal l host. Fker l mapping.",
        "text": "L'application écoute sur le port 80 dans le conteneur. Comment l'atteindre depuis l'hôte ?",
        "code": "$ docker run -p 8080:80 nginx",
        "answers": [
          "http://localhost:80",
          "http://localhost:8080",
          "http://nginx:8080",
          "Inaccessible — -p est faux"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 11,
        "level": 2,
        "explain_dr": "So2al 3la -p reversed: l format dima host:lwl w container:tani. Ila 9lbtihom, l mapping ghadi ykoun ghalat. Fker chkon li kayn 3la 8080 daba.",
        "text": "Objectif : hôte 8080 -> conteneur 80. Pourquoi l'application est-elle injoignable sur localhost:8080 ?",
        "code": "$ docker run -p 80:8080 nginx",
        "answers": [
          "nginx ne supporte pas -p",
          "Le conteneur n'a pas démarré",
          "localhost est faux",
          "Le mappage est inversé — il mappe l'hôte 80 vers le conteneur 8080"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 12,
        "level": 2,
        "explain_dr": "So2al 3la ubuntu exit: l container kay-b9a khdam ghir ila 3andu process f l foreground. ubuntu bla command kat-kmml direct w kat-khrj. Fker chnu na9s.",
        "text": "Le conteneur se termine aussitôt. Pourquoi ?",
        "code": "$ docker run ubuntu",
        "answers": [
          "ubuntu n'a pas de processus de premier plan durable par défaut",
          "L'image est cassée",
          "docker run exige -d",
          "Ubuntu ne peut pas tourner dans Docker"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 13,
        "level": 2,
        "explain_dr": "So2al 3la docker build: l '.' f l akhir hia l build context — l directory li docker kay-9ra mnha l Dockerfile w l files. Machi l tag wla l port.",
        "text": "Que signifie le « . » final ?",
        "code": "$ docker build -t myapp .",
        "answers": [
          "Le tag de l'image",
          "Le nom du conteneur",
          "Le chemin du contexte de build — le Dockerfile est lu depuis le dossier actuel",
          "Le port"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 14,
        "level": 2,
        "explain_dr": "So2al 3la -e: had l flag kat-bdl 7aja DAKHL l environment dyal l container. Fker chnu ghadi ykoun l value dyal NODE_ENV dakhl l app.",
        "text": "Que fait -e ?",
        "code": "$ docker run -e NODE_ENV=production myapp",
        "answers": [
          "Modifie le Dockerfile",
          "Expose un port",
          "Active les logs de debug",
          "Définit la variable d'environnement NODE_ENV dans le conteneur"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 15,
        "level": 2,
        "explain_dr": "So2al 3la -v: had l flag kat-rbt directory dyal l host m3a directory dakhl l container. Fker l direction: l data fin kat-b9a w fin kat-ban.",
        "text": "Que fait -v ici ?",
        "code": "$ docker run -v /host/data:/data postgres",
        "answers": [
          "Copie /data dans l'image",
          "Monte le dossier hôte /host/data sur /data dans le conteneur",
          "Crée une sauvegarde",
          "Définit une version"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 16,
        "level": 2,
        "explain_dr": "So2al 3la layer cache: docker kay-cache kol step. Ila bdlti ay file 9bl ma t-copy l dependencies, l cache dyal npm install kay-tfsakh. Fker l tartib dyal l COPY.",
        "text": "Chaque petit changement de code réinstalle toutes les dépendances. Pourquoi ?",
        "code": "FROM node:20\nWORKDIR /app\nCOPY . .\nRUN npm install\nCMD [\"node\", \"server.js\"]",
        "answers": [
          "COPY . . avant RUN npm install invalide le cache des couches à chaque changement de fichier",
          "npm install est lent par nature",
          "WORKDIR est faux",
          "CMD devrait être RUN"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 17,
        "level": 2,
        "explain_dr": "So2al 3la docker stop: docker ma kay-9tlch l container direct — kay-sift signal lwl w kay-tsna shwiya. Fker chnu kay-w9a3 f had l modda.",
        "text": "Pourquoi le conteneur ne s'arrête-t-il pas instantanément ?",
        "code": "$ docker stop web   # prend 10 secondes",
        "answers": [
          "Le réseau est lent",
          "docker stop prend toujours 10s",
          "docker stop envoie SIGTERM et attend un délai de grâce avant SIGKILL",
          "L'image est grosse"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 18,
        "level": 2,
        "explain_dr": "So2al 3la image prune: had l command kat-m7i ghir no3 mo3ayan dyal l images. Fker chnu kay3ni 'dangling' — wach ga3 l images wla ghir chi no3?",
        "text": "Qu'est-ce que cela supprime ?",
        "code": "$ docker image prune",
        "answers": [
          "Toutes les images",
          "Les images pendantes (sans tag)",
          "Les conteneurs en cours",
          "Les volumes"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 19,
        "level": 2,
        "explain_dr": "So2al 3la build context: docker build kat-sift GA3 l directory (l context) l l daemon 9bl ma y-bda l build. Ila kan kbir, l build ghadi y-bda b shwiya. Fker chnu kayn f l context.",
        "text": "Le projet a un node_modules de 2 Go et pas de .dockerignore. Pourquoi le build est-il si lent à démarrer ?",
        "code": "$ docker build -t myapp .",
        "answers": [
          "node:20 est une grosse image",
          "Le CPU est lent",
          "docker build copie toujours node_modules",
          "Tout le contexte de 2 Go (dont node_modules) est envoyé au démon"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 20,
        "level": 3,
        "explain_dr": "So2al 3la layer cache: l steps li ma t-bdloch kayt-3awd y-sta3mlo mn l cache. Ghir l steps mn l point li t-bdl kayt-3awdo. Fker fin bdlti server.js.",
        "text": "Vous changez uniquement server.js et reconstruisez. Quelles étapes se ré-exécutent ?",
        "code": "FROM node:20\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nCMD [\"node\", \"server.js\"]",
        "answers": [
          "Chaque étape depuis FROM",
          "Seulement CMD",
          "Depuis le deuxième COPY — l'installation des paquets reste en cache",
          "Aucune étape — l'image est entièrement réutilisée"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 21,
        "level": 3,
        "explain_dr": "So2al 3la RUN vs CMD: wa7da kat-tnfd f wa9t l BUILD w l khra f wa9t l RUN dyal l container. L server khass y-bda f wa9t l container, machi f l build.",
        "text": "Pourquoi le build se bloque-t-il ou échoue-t-il ?",
        "code": "FROM node:20\nRUN npm start",
        "answers": [
          "npm start n'existe pas",
          "RUN s'exécute au build — démarrer le serveur relève de CMD",
          "FROM doit venir en dernier",
          "node:20 n'a pas npm"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 22,
        "level": 3,
        "explain_dr": "So2al 3la compose up: had l command kat-starti ga3 l services li f l file. L flag -d kat-khdmhom f l background. Fker chkon l command l kamla.",
        "text": "Comment tout démarrer en arrière-plan ?",
        "code": "services:\n  web:\n    image: myapp\n    ports: [\"8080:80\"]\n  db:\n    image: postgres",
        "answers": [
          "docker compose up -d",
          "docker compose start all",
          "docker run compose",
          "docker build compose"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 23,
        "level": 3,
        "explain_dr": "So2al 3la compose networking: kol container 3andu l localhost dyalo b7alo. Bach l web y-wsl l db, khass y-sta3ml smit l service b7al hostname.",
        "text": "Le conteneur web appelle http://localhost:5432 mais le service db fait tourner postgres. Il reçoit « connection refused ». Pourquoi ?",
        "code": "services:\n  web: ...\n  db:\n    image: postgres",
        "answers": [
          "Postgres ne tourne pas",
          "Le port doit être 5433",
          "Compose ne fournit pas de réseau",
          "Chaque conteneur a son propre localhost — web doit utiliser l'hôte « db »"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 24,
        "level": 3,
        "explain_dr": "So2al 3la depends_on: had l option ghir kat-rtb l start order. L db ymkn y-bda walakin mazal ma ready. Fker l far9 bin 'started' w 'ready'.",
        "text": "L'application web plante parfois au démarrage. Pourquoi depends_on ne l'empêche-t-il pas ?",
        "code": "services:\n  web:\n    depends_on: [db]",
        "answers": [
          "depends_on est cassé",
          "L'image de la DB est fausse",
          "depends_on ordonne seulement le démarrage — il n'attend pas que la DB soit prête",
          "web démarre trop vite par conception"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 25,
        "level": 3,
        "explain_dr": "So2al 3la EXPOSE: had l instruction ghir documentation — kat-gol chkon l port li l app kat-sta3ml. Fker: wach EXPOSE bohdo kafi bach t-wsl l app mn l host?",
        "text": "L'application n'est pas joignable depuis l'hôte. Pourquoi ?",
        "code": "FROM node:20\nEXPOSE 3000\nCMD [\"node\", \"server.js\"]\n\n$ docker run myapp",
        "answers": [
          "EXPOSE documente seulement le port — il faut quand même -p 3000:3000",
          "EXPOSE est invalide",
          "L'application a planté",
          "Le port 3000 est réservé"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 26,
        "level": 3,
        "explain_dr": "So2al 3la docker exec: exec kat-khdm command dakhl container li khdam deja. Fker: psql ghadi y-tkhdm fin — f container jdid wla f db?",
        "text": "Le conteneur db tourne. Que fait ceci ?",
        "code": "$ docker exec -it db psql -U postgres",
        "answers": [
          "Crée un nouveau conteneur db",
          "Lance psql dans le conteneur db existant",
          "Redémarre le conteneur db",
          "Sauvegarde la base de données"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 27,
        "level": 3,
        "explain_dr": "So2al 3la restart policy: 'unless-stopped' kat-gol l docker chnu y-dir m3a l container ila w9f. Fker chnu ghadi yw9a3 mn ba3d l reboot.",
        "text": "L'hôte redémarre pendant la nuit. Qu'arrive-t-il à web ?",
        "code": "services:\n  web:\n    restart: unless-stopped",
        "answers": [
          "Il reste arrêté",
          "Il est supprimé",
          "Compose doit être relancé manuellement",
          "Docker le redémarre automatiquement"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 28,
        "level": 3,
        "explain_dr": "So2al 3la user-defined network: f l networks li kat-creehom nta, docker kat-7l l DNS bin l containers — t-9dr t-sta3ml smit l container b7al hostname.",
        "text": "Deux conteneurs partagent un réseau défini par l'utilisateur. Comment l'un peut-il joindre l'autre ?",
        "code": "$ docker network ls",
        "answers": [
          "Par le nom du conteneur comme nom d'hôte",
          "Seulement par adresse IP",
          "Ils ne peuvent pas communiquer",
          "Via localhost"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 29,
        "level": 3,
        "explain_dr": "So2al 3la docker inspect: had l command kat-wri l details kamlin dyal l container — l mounts, l network, l env, etc. Fker chkon li kay-wri l low-level info.",
        "text": "Quelle commande montre les montages, l'IP et l'environnement d'un conteneur ?",
        "answers": [
          "docker ps web",
          "docker logs web",
          "docker inspect web",
          "docker info web"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 30,
        "level": 4,
        "explain_dr": "So2al 3la ENTRYPOINT + CMD: l ENTRYPOINT hwa l command l fixed, w l CMD hia l default arguments. Ila 3titi arguments f docker run, kat-3wd l CMD. Fker chnu ghadi y-tkhdm.",
        "text": "Qu'est-ce qui s'exécute vraiment ?",
        "code": "ENTRYPOINT [\"node\", \"app.py\"]\nCMD [\"--help\"]\n\n$ docker run myapp --version",
        "answers": [
          "--version",
          "node app.py --help",
          "Une erreur",
          "node app.py --version"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 31,
        "level": 4,
        "explain_dr": "So2al 3la compose down: down kat-m7i l containers. Fker: wach kat-m7i l volumes m3ahom wla l data kat-b9a?",
        "text": "Le service db utilise un volume nommé. Les données de la base sont-elles toujours là ?",
        "code": "$ docker compose down\n$ docker compose up -d",
        "answers": [
          "Oui — les volumes nommés survivent à down (seul down -v les supprime)",
          "Non — down supprime les volumes",
          "Seulement si c'était un montage lié",
          "Non — les conteneurs sont recréés"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 32,
        "level": 4,
        "explain_dr": "So2al 3la down -v: fker chnu kay-zid l flag -v 3la down l 3adi — chnu ghadi yw9a3 l l data li kant f l volume?",
        "text": "Après ceci, la base de données est vide. Pourquoi ?",
        "code": "$ docker compose down -v",
        "answers": [
          "Postgres n'a pas démarré",
          "L'image a été mise à jour",
          "down -v supprime les volumes nommés, effaçant les données",
          "Compose ne persiste jamais les données"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 33,
        "level": 4,
        "explain_dr": "So2al 3la ARG vs ENV: kayn far9 bin build-time w run-time. Fker chkon li kayn f l akhir — l value dyal l build wla dyal l run?",
        "text": "Que vaut API_URL dans le conteneur ?",
        "code": "ARG API_URL\nENV API_URL=$API_URL\n\n$ docker build --build-arg API_URL=a .\n$ docker run -e API_URL=b myapp",
        "answers": [
          "a — les args de build gagnent",
          "b — le -e au runtime surcharge la valeur du build",
          "Vide",
          "Une erreur"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 34,
        "level": 4,
        "explain_dr": "So2al 3la host.docker.internal: had l hostname l khass kat-7l l docker bach l container y-9dr y-wsl l service li khdam 3la l host. Fker l direction — mn container l host.",
        "text": "Le conteneur a besoin d'un service tournant sur le portable hôte. À quoi sert host.docker.internal ?",
        "code": "# conteneur -> host.docker.internal:3000",
        "answers": [
          "Un nom d'hôte spécial pour joindre l'hôte depuis un conteneur",
          "La propre IP du conteneur",
          "Un miroir de Docker Hub",
          "La passerelle du pont par défaut"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 35,
        "level": 4,
        "explain_dr": "So2al 3la healthcheck: had l config kat-khli docker y-testi wach l service ready bssa7 (b7al pg_isready). L orchestrator kay-sta3mlha bach y-3rf imta y-bda li wrah.",
        "text": "À quoi sert ce healthcheck ?",
        "code": "services:\n  db:\n    image: postgres\n    healthcheck:\n      test: [\"CMD-SHELL\", \"pg_isready\"]",
        "answers": [
          "À redémarrer postgres",
          "À sauvegarder la DB",
          "À ne rien faire",
          "À signaler aux orchestrateurs (et aux conditions depends_on) quand la DB est vraiment prête"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 36,
        "level": 4,
        "explain_dr": "So2al 3la latest tag: l tag 'latest' kay-tbdl kol ma t-pushi build jdid — ma kay3nich version thabta. Fker chnu l mochkil f CI ila l tag tbdl bla ma t-bdl l code.",
        "text": "La CI casse après un rebuild, sans changement de code. Que s'est-il probablement passé, et quel est le correctif ?",
        "code": "$ docker run myapp:latest",
        "answers": [
          "Docker Hub a été piraté",
          "Le cache a été vidé",
          "« latest » a bougé vers un nouveau build — épinglez un tag de version ou un digest",
          "latest ne change jamais"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 37,
        "level": 4,
        "explain_dr": "So2al 3la PID 1 w signals: f shell form, sh hwa PID 1 w ma kay-forwardich l signals l node. L app ma kat-wslhach SIGTERM w docker kay-tsna 7ta l timeout.",
        "text": "Le conteneur met 10s à s'arrêter sur docker stop. Pourquoi ?",
        "code": "CMD npm start",
        "answers": [
          "npm est lent",
          "La forme shell fait de sh le PID 1, donc SIGTERM n'est pas transmis à node",
          "10s est le minimum",
          "L'application ignore les signaux par défaut"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 38,
        "level": 4,
        "explain_dr": "So2al 3la docker history: had l command kat-wri l layers dyal l image w l commands li createawhom. Fker chnu ghadi y-ban l kol layer.",
        "text": "Qu'est-ce que cela montre ?",
        "code": "$ docker history myapp",
        "answers": [
          "Les conteneurs en cours",
          "L'historique git",
          "Les commandes docker que vous avez tapées",
          "Les couches de l'image et les commandes qui les ont créées"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 39,
        "level": 4,
        "explain_dr": "So2al 3la secrets f image: fker wach l layers dyal l image kayt-m7aw mn ba3d l build wla kay-b9aw — w chnu kay3ni hadchi l l key li t-bakat.",
        "text": "Pourquoi intégrer la clé dans l'image est-il dangereux ?",
        "code": "ARG API_KEY=sk-live-123\nRUN curl -H \"Key: $API_KEY\" https://api.example.com/setup",
        "answers": [
          "Elle reste visible dans les couches via docker history et dans le registre",
          "Les valeurs ARG sont affichées au runtime",
          "Cela ralentit le build",
          "Cela casse le cache"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 40,
        "level": 5,
        "explain_dr": "So2al 3la BuildKit cache mount: had l mount kat-7tfz l cache (b7al downloads dyal npm) bin l builds bach l build li wrah ykoun sri3. Fker chnu kayt-7tfz.",
        "text": "Que fait ce montage BuildKit ?",
        "code": "RUN --mount=type=cache,target=/root/.npm npm ci",
        "answers": [
          "Installe npm globalement",
          "Met en cache les téléchargements npm entre les builds pour les accélérer",
          "Copie node_modules depuis l'hôte",
          "C'est pareil qu'un volume"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 41,
        "level": 5,
        "explain_dr": "So2al 3la scratch: had l base image l khawya mzyana ghir l l binaries li statically compiled — ma 7tajin ta OS. Fker ch7al ghadi tkoun sghira w secure.",
        "text": "Quand une image de base scratch est-elle un bon choix ?",
        "code": "FROM scratch\nCOPY myapp /myapp\nCMD [\"/myapp\"]",
        "answers": [
          "Pour les applications Node.js",
          "Pour les bases de données",
          "Pour un binaire compilé statiquement — taille minimale et surface d'attaque réduite",
          "Jamais — scratch est déprécié"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 42,
        "level": 5,
        "explain_dr": "So2al 3la OOM: l message 'Out of memory: Killed' kay3ni l system 9tl l process 7it khssat l memory. Khass t-chof l usage w t-7dd l limits wla t-fixi l app.",
        "text": "Le conteneur meurt sans arrêt. Quel est le diagnostic et le correctif ?",
        "code": "# dmesg : Out of memory: Killed process (myapp)",
        "answers": [
          "Vérifier l'usage avec docker stats, puis fixer des limites --memory / corriger l'usage mémoire de l'app",
          "Augmenter la taille de l'image",
          "Ajouter seulement plus de CPU",
          "Redémarrer Docker"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 43,
        "level": 5,
        "explain_dr": "So2al 3la logs disk: l json-file log driver l default ma 3andush limit — l logs kat-kbr bla 7d. Fker chnu kay-ml l disk w kifach t-7dd l size.",
        "text": "/var/lib/docker se remplit et l'application loggue beaucoup. Pourquoi le disque se remplit-il, et comment limiter ?",
        "code": "# /var/lib/docker est plein",
        "answers": [
          "Les images grossissent avec le temps",
          "Les volumes grossissent automatiquement",
          "Docker n'a pas de limites de logs",
          "Les logs json-file croissent sans limite — fixez --log-opt max-size/max-file"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 44,
        "level": 5,
        "explain_dr": "So2al 3la registry f tag: docker kay-9ra l registry mn smit l image. Fker: ila ma 7dditich fin, fin ghadi y-mchi l push by default?",
        "text": "Pourquoi le tag doit-il inclure l'hôte du registre ?",
        "code": "$ docker tag myapp registry.example.com/team/myapp:1.0\n$ docker push registry.example.com/team/myapp:1.0",
        "answers": [
          "C'est juste une étiquette",
          "Les tags ne peuvent pas contenir de points",
          "L'hôte dans le nom indique à Docker où pousser (sinon Docker Hub par défaut)",
          "Push exige latest"
        ],
        "correct": 2,
        "selection": null
      },
      {
        "id": 45,
        "level": 5,
        "explain_dr": "So2al 3la port conflict: l port dyal l host wa7ed — joj containers ma ymknch y-sta3mlo nafs l host port f nafs l wa9t. Fker chkon li khdah lwl.",
        "text": "Pourquoi la deuxième commande échoue-t-elle ?",
        "code": "$ docker run -p 80:80 nginx\n$ docker run -p 80:80 httpd",
        "answers": [
          "Le port hôte 80 est déjà alloué par le premier conteneur",
          "Deux serveurs web ne peuvent pas coexister",
          "Les noms d'images sont en conflit",
          "httpd exige le port 8080"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 46,
        "level": 5,
        "explain_dr": "So2al 3la docker commit: fker wach t-9dr t-3awd t-bni nafs l image b nafs l tari9a mn commit — wach kayn record dyal kifach t-bnat?",
        "text": "L'image a été construite avec docker commit depuis un conteneur modifié. Pourquoi docker commit est-il une mauvaise pratique pour les images de production ?",
        "code": "$ docker commit web myapp:manual",
        "answers": [
          "commit ne sauvegarde pas les changements",
          "C'est plus lent",
          "commit est en lecture seule",
          "L'image n'est pas reproductible — aucune trace de sa construction"
        ],
        "correct": 3,
        "selection": null
      },
      {
        "id": 47,
        "level": 5,
        "explain_dr": "So2al 3la compose -f multiple: docker compose kat-merge l files b l tartib — l file li wra kay-override l values dyal li 9blo. Fker chkon li kay-rba7.",
        "text": "Que fait le passage de deux fichiers -f ?",
        "code": "$ docker compose -f compose.yml -f compose.prod.yml up -d",
        "answers": [
          "Lance deux projets séparés",
          "Fusionne les deux, compose.prod.yml surchargeant les valeurs",
          "C'est une erreur",
          "Seul le premier est utilisé"
        ],
        "correct": 1,
        "selection": null
      },
      {
        "id": 48,
        "level": 5,
        "explain_dr": "So2al 3la multi-stage: l stage l khra (nginx) ghir kat-nskh l files l m-bniyin — l toolchain dyal l build ma kay-dkhlch f l image l nihaiya. Fker ch7al ghadi tkoun sghira.",
        "text": "Pourquoi utiliser deux étapes ici ?",
        "code": "FROM node:20 AS build\nWORKDIR /app\nCOPY . .\nRUN npm ci && npm run build\nFROM nginx:alpine\nCOPY --from=build /app/dist /usr/share/nginx/html",
        "answers": [
          "L'image finale ne contient que les fichiers statiques construits, pas la toolchain Node",
          "Cela build deux fois plus vite",
          "nginx a besoin de Node",
          "Les étapes sont obligatoires"
        ],
        "correct": 0,
        "selection": null
      },
      {
        "id": 49,
        "level": 5,
        "explain_dr": "So2al 3la resource limits: fker wach had l flags kay-sr3o l container wla kay-7ddo l max dyal l resources li y-9dr y-sta3ml.",
        "text": "Que font ces drapeaux ?",
        "code": "$ docker run --memory=512m --cpus=1 myapp",
        "answers": [
          "Réservent 512 Mo sur l'hôte",
          "Accélèrent le conteneur",
          "Plafonnent le conteneur à 512 Mo de RAM et 1 CPU",
          "Ce n'est que de la documentation"
        ],
        "correct": 2,
        "selection": null
      }
    ]
  }
];
