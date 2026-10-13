import { questionsCss } from "./QuestiondataCss";
import { questionsHtml } from "./QuestiondataHtml";
import { javascriptQuestions } from "./QuestiondataJavascript";
import { laravelQuestions } from "./QuestiondataLaravel";
import { mongodbQuestions } from "./QuestiondataMongoDb";
import { nodejsQuestions } from "./QuestiondataNode";
import { phpQuestions } from "./QuestiondataPhp";
import { pythonQuestions } from "./QuestiondataPython";
import {reactQuestions} from './QuestiondataReact'
import { sqlQuestions } from "./QuestiondataSql";
import { typescriptQuestions } from "./QuestiondataTypescript";
import { vueQuestions } from "./QuestiondataVue";
import { tailwindQuestions } from "./QuestiondataTailwind";
import { restApiQuestions } from "./QuestiondataRestApi";
import { gitQuestions } from "./QuestiondataGit";
import { dockerQuestions } from "./QuestiondataDocker";

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
  "Python",
  "Sql",
  "MongoDb",
  "Git",
  "Docker",
];

export const questionsData = {
  type: {
    Javascript: [...javascriptQuestions],
    Python: [...pythonQuestions],
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
  }
};

// Questions of one topic in a given UI language, sorted easy -> hard
export const getTopicQuestions = (topic, langTrans) => {
  const blocks = questionsData.type[topic] || [];
  const block = blocks.find((b) => b.lang === langTrans);
  if (!block) return [];
  return [...block.qsts].sort((a, b) => (a.level || 1) - (b.level || 1));
};

// Final exam: 24 questions across all topics (>=1 per topic), easy -> hard
export const getExamQuestions = (langTrans) => {
  const picked = [];
  const perTopic = {};
  TOPIC_KEYS.forEach((topic) => {
    const sorted = getTopicQuestions(topic, langTrans);
    perTopic[topic] = sorted;
    if (sorted[0]) picked.push({ ...sorted[0], topic });
  });
  // 8 more to reach 24: a harder (level 2+) question from the first 8 topics
  TOPIC_KEYS.slice(0, 8).forEach((topic) => {
    const harder = perTopic[topic].find((q) => (q.level || 1) >= 2 && !picked.some((p) => p.topic === topic && p.text === q.text));
    if (harder) picked.push({ ...harder, topic });
  });
  return picked
    .sort((a, b) => (a.level || 1) - (b.level || 1))
    .map((q, i) => ({ ...q, id: i, selection: null }));
};
