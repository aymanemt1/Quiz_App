import { TOPIC_KEYS, getTopicQuestions } from "./QuestionAllData";

// Deterministic daily challenge: same 10 questions all day, new set tomorrow.
// Seeded PRNG (mulberry32) keyed on the calendar date string.

const hashSeed = (str) => {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
};

const mulberry32 = (a) => () => {
  a |= 0;
  a = (a + 0x6d2b79f5) | 0;
  let t = Math.imul(a ^ (a >>> 15), 1 | a);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

export const DAILY_COUNT = 10;

// 10 questions, balanced across topics (seeded topic order), sorted easy -> hard
export const getDailyQuestions = (langTrans, dateStr) => {
  const rng = mulberry32(hashSeed(dateStr || "1970-01-01"));
  const topics = [...TOPIC_KEYS];
  for (let i = topics.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [topics[i], topics[j]] = [topics[j], topics[i]];
  }
  const picked = [];
  for (let i = 0; i < DAILY_COUNT; i++) {
    const topic = topics[i % topics.length];
    const pool = getTopicQuestions(topic, langTrans, "all");
    if (!pool.length) continue;
    const q = pool[Math.floor(rng() * pool.length)];
    picked.push({ ...q, topic });
  }
  return picked
    .sort((a, b) => (a.level || 1) - (b.level || 1))
    .map((q, idx) => ({ ...q, id: idx, selection: null }));
};
