import { questionsCss } from "./QuestiondataCss";
import { questionsHtml } from "./QuestiondataHtml";
import { javascriptQuestions } from "./QuestiondataJavascript";
import { laravelQuestions } from "./QuestiondataLaravel";
import { mongodbQuestions } from "./QuestiondataMongoDb";
import { nodejsQuestions } from "./QuestiondataNode";
import { phpQuestions } from "./QuestiondataPhp";
import {reactQuestions} from './QuestiondataReact'
import { sqlQuestions } from "./QuestiondataSql";
import { mysqlQuestions } from "./QuestiondataMysql";
import { postgresqlQuestions } from "./QuestiondataPostgresql";
import { typescriptQuestions } from "./QuestiondataTypescript";
import { vueQuestions } from "./QuestiondataVue";
import { tailwindQuestions } from "./QuestiondataTailwind";
import { restApiQuestions } from "./QuestiondataRestApi";
import { gitQuestions } from "./QuestiondataGit";
import { dockerQuestions } from "./QuestiondataDocker";
import { supabaseQuestions } from "./QuestiondataSupabase";
import { expressQuestions } from "./QuestiondataExpress";
import { agileQuestions } from "./QuestiondataAgile";
import { materialUiQuestions } from "./QuestiondataMaterialUi";
import { gsapQuestions } from "./QuestiondataGsap";
import { convexQuestions } from "./QuestiondataConvex";
import { clerkQuestions } from "./QuestiondataClerk";
import { postmanQuestions } from "./QuestiondataPostman";
import { nextjsQuestions } from "./QuestiondataNextJs";
import { bootstrapQuestions } from "./QuestiondataBootstrap";

export const TOPIC_KEYS = [
  "React",
  "Javascript",
  "Typescript",
  "VueJs",
  "Html",
  "Css",
  "Tailwind",
  "NodeJs",
  "RestApi",
  "Laravel",
  "Php",
  "Sql",
  "MongoDb",
  "Git",
  "Docker",
  "Supabase",
  "ExpressJs",
  "Agile",
  "MaterialUi",
  "Gsap",
  "Convex",
  "Clerk",
  "Postman",
  "NextJs",
  "Bootstrap",
  "Mysql",
  "Postgresql",
];

export const TOPIC_LABELS = {
  React: "React",
  Javascript: "Javascript",
  Typescript: "Typescript",
  VueJs: "VueJs",
  Html: "Html",
  Css: "Css",
  Tailwind: "Tailwind",
  NodeJs: "NodeJs",
  RestApi: "REST API",
  Laravel: "Laravel",
  Php: "Php",
  Sql: "Sql",
  MongoDb: "MongoDb",
  Git: "Git",
  Docker: "Docker",
  Supabase: "Supabase",
  ExpressJs: "Express.js",
  Agile: "Agile/Scrum",
  MaterialUi: "Material UI",
  Gsap: "GSAP",
  Convex: "Convex",
  Clerk: "Clerk",
  Postman: "Postman",
  NextJs: "Next.js",
  Bootstrap: "Bootstrap",
  Mysql: "MySQL",
  Postgresql: "PostgreSQL",
};

export const questionsData = {
  type: {
    Javascript: [...javascriptQuestions],
    Css: [...questionsCss],
    Html: [...questionsHtml],
    React: [...reactQuestions],
    NodeJs: [...nodejsQuestions],
    Laravel: [...laravelQuestions],
    Sql: [...sqlQuestions],
    Php: [...phpQuestions],
    MongoDb: [...mongodbQuestions],
    Typescript: [...typescriptQuestions],
    VueJs: [...vueQuestions],
    Tailwind: [...tailwindQuestions],
    RestApi: [...restApiQuestions],
    Git: [...gitQuestions],
    Docker: [...dockerQuestions],
    Supabase: [...supabaseQuestions],
    ExpressJs: [...expressQuestions],
    Agile: [...agileQuestions],
    MaterialUi: [...materialUiQuestions],
    Gsap: [...gsapQuestions],
    Convex: [...convexQuestions],
    Clerk: [...clerkQuestions],
    Postman: [...postmanQuestions],
    NextJs: [...nextjsQuestions],
    Bootstrap: [...bootstrapQuestions],
    Mysql: [...mysqlQuestions],
    Postgresql: [...postgresqlQuestions],
  }
};

// Questions of one topic in a given UI language, optionally filtered by level, sorted easy -> hard
export const getTopicQuestions = (topic, langTrans, level = "all") => {
  const blocks = questionsData.type[topic] || [];
  const block = blocks.find((b) => b.lang === langTrans);
  if (!block) return [];
  let qs = [...block.qsts];
  if (level !== "all") qs = qs.filter((q) => q.level === Number(level));
  return qs.sort((a, b) => (a.level || 1) - (b.level || 1));
};

// Custom exam: balanced round-robin across selected topics, easy -> hard
// topics: array of topic keys, level: 'all' | 1..5, count: number
export const getExamQuestions = (langTrans, topics, level = "all", count = 20) => {
  const pools = (topics && topics.length ? topics : TOPIC_KEYS)
    .filter((t) => TOPIC_KEYS.includes(t))
    .map((t) => ({ topic: t, qs: getTopicQuestions(t, langTrans, level) }))
    .filter((p) => p.qs.length > 0);
  if (!pools.length || count <= 0) return [];
  const picked = [];
  let i = 0;
  let guard = 0;
  while (picked.length < count && guard < count * pools.length + pools.length) {
    guard += 1;
    let added = false;
    for (const p of pools) {
      if (picked.length >= count) break;
      const q = p.qs[i];
      if (q) {
        picked.push({ ...q, topic: p.topic });
        added = true;
      }
    }
    i += 1;
    if (!added) break;
  }
  return picked
    .sort((a, b) => (a.level || 1) - (b.level || 1))
    .map((q, idx) => ({ ...q, id: idx, selection: null }));
};
