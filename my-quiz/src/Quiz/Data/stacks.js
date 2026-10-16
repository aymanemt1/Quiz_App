// Stack icons used across the app (setup grids, results, progress…)
export const STACK_ICONS = {
  React: "⚛️",
  Javascript: "🟨",
  Typescript: "🔷",
  VueJs: "💚",
  Html: "🌐",
  Css: "🎨",
  Tailwind: "🌊",
  NodeJs: "🟢",
  RestApi: "🔌",
  Laravel: "🔺",
  Php: "🐘",
  Sql: "🗄️",
  MongoDb: "🍃",
  Git: "🌿",
  Docker: "🐳",
  Supabase: "⚡",
  ExpressJs: "🚂",
  Agile: "🔄",
  Postman: "📮",
  NextJs: "▲",
  Bootstrap: "🟪",
  Mysql: "🐬",
  Postgresql: "🐘",
};

export const stackIcon = (key) => STACK_ICONS[key] || "🧩";
