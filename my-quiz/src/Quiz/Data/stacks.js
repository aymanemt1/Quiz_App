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
  Python: "🐍",
  Sql: "🗄️",
  MongoDb: "🍃",
  Git: "🌿",
  Docker: "🐳",
};

export const stackIcon = (key) => STACK_ICONS[key] || "🧩";
