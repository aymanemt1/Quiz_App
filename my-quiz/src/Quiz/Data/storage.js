// localStorage persistence: score history + mistakes to review
import { TOPIC_KEYS } from "./QuestionAllData";

const HISTORY_KEY = "quizapp_history_v1";
const MISTAKES_KEY = "quizapp_mistakes_v1";
const DAILY_KEY = "quizapp_daily_v1";

const read = (key) => {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
};

const readObj = (key) => {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (e) {
    return {};
  }
};

const write = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    /* storage unavailable */
  }
};

// ---- Score history: { date, mode, topics[], level, correct, total } ----
export const loadHistory = () => read(HISTORY_KEY);

export const saveHistoryEntry = (entry) => {
  const h = read(HISTORY_KEY);
  h.push(entry);
  write(HISTORY_KEY, h.slice(-300));
};

export const clearHistory = () => write(HISTORY_KEY, []);

// ---- Weak spot: single-topic quiz stack with the lowest average score ----
// Requires at least 2 finished sessions on a stack to qualify.
export const getWeakSpot = () => {
  const per = {};
  loadHistory()
    .filter(
      (e) =>
        e.mode === "quiz" &&
        e.total > 0 &&
        Array.isArray(e.topics) &&
        e.topics.length === 1 &&
        TOPIC_KEYS.includes(e.topics[0])
    )
    .forEach((e) => {
      const t = e.topics[0];
      per[t] = per[t] || { n: 0, sum: 0 };
      per[t].n += 1;
      per[t].sum += (e.correct / e.total) * 100;
    });
  let worst = null;
  Object.entries(per).forEach(([t, s]) => {
    if (s.n < 2) return;
    const avg = Math.round(s.sum / s.n);
    if (!worst || avg < worst.avg) worst = { topic: t, avg };
  });
  return worst;
};

// ---- Mistakes: { id, topic, lang, level, text, answers[], correct } ----
export const loadMistakes = () => read(MISTAKES_KEY);

export const getMistakeCount = (langTrans) =>
  read(MISTAKES_KEY).filter((m) => m.lang === langTrans).length;

export const addMistakes = (list) => {
  const cur = read(MISTAKES_KEY);
  const ids = new Set(cur.map((m) => m.id));
  list.forEach((m) => {
    if (!ids.has(m.id)) {
      cur.push(m);
      ids.add(m.id);
    }
  });
  write(MISTAKES_KEY, cur.slice(-400));
};

export const removeMistakes = (ids) => {
  const set = new Set(ids);
  write(MISTAKES_KEY, read(MISTAKES_KEY).filter((m) => !set.has(m.id)));
};

export const clearMistakes = () => write(MISTAKES_KEY, []);

// ---- Daily challenge: { lastDate, streak, result: { date, correct, total } } ----
export const todayStr = () => {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mm}-${dd}`;
};

const yesterdayStr = () => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mm}-${dd}`;
};

export const loadDaily = () => readObj(DAILY_KEY);

export const getStreak = () => loadDaily().streak || 0;

export const getTodayResult = () => {
  const d = loadDaily();
  return d.result && d.result.date === todayStr() ? d.result : null;
};

export const recordDailyCompletion = (correct, total) => {
  const d = loadDaily();
  const t = todayStr();
  if (d.result && d.result.date === t) return d; // already recorded today
  const streak = d.lastDate === yesterdayStr() ? (d.streak || 0) + 1 : 1;
  const next = { lastDate: t, streak, result: { date: t, correct, total } };
  write(DAILY_KEY, next);
  return next;
};
