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

// ---- Profile: { name, color } ----
const PROFILE_KEY = "quizapp_profile_v1";

export const AVATAR_COLORS = [
  "#a3e635",
  "#4ade80",
  "#ec4899",
  "#10b981",
  "#f59e0b",
  "#ef4444",
];

export const loadProfile = () => {
  const p = readObj(PROFILE_KEY);
  return {
    name: typeof p.name === "string" && p.name.trim() ? p.name.trim().slice(0, 24) : "Aymane",
    color: AVATAR_COLORS.includes(p.color) ? p.color : AVATAR_COLORS[0],
  };
};

export const saveProfile = (profile) => {
  const cur = loadProfile();
  const next = {
    name: typeof profile.name === "string" && profile.name.trim() ? profile.name.trim().slice(0, 24) : cur.name,
    color: AVATAR_COLORS.includes(profile.color) ? profile.color : cur.color,
  };
  write(PROFILE_KEY, next);
  return next;
};

// ---- Completed courses: { topic: ISO date } ----
const COURSES_KEY = "quizapp_courses_v1";
export const getCompletedCourses = () => readObj(COURSES_KEY);
export const markCourseCompleted = (topic) => {
  const c = getCompletedCourses();
  if (c[topic]) return false; // already completed
  c[topic] = new Date().toISOString();
  write(COURSES_KEY, c);
  return true;
};

// ---- XP + ranks: 10 XP per correct answer, +50 bonus per completed exam/daily/course ----
export const getXP = () => {
  let xp = 0;
  loadHistory().forEach((e) => {
    xp += (e.correct || 0) * 10;
    if ((e.mode === "exam" || e.mode === "daily") && e.total > 0) xp += 50;
  });
  xp += Object.keys(getCompletedCourses()).length * 50;
  return xp;
};

export const RANKS = [
  { min: 0, en: "Beginner", fr: "Débutant", dr: "Mobtadi2" },
  { min: 500, en: "Intermediate", fr: "Intermédiaire", dr: "Mutawssit" },
  { min: 1500, en: "Advanced", fr: "Avancé", dr: "Muta9adim" },
  { min: 3000, en: "Expert", fr: "Expert", dr: "Khabir" },
  { min: 6000, en: "Master", fr: "Maître", dr: "Ostadh" },
];

export const getRank = (xp) => {
  let idx = 0;
  RANKS.forEach((r, i) => {
    if (xp >= r.min) idx = i;
  });
  const current = RANKS[idx];
  const next = RANKS[idx + 1] || null;
  const progress = next
    ? Math.min(100, Math.round(((xp - current.min) / (next.min - current.min)) * 100))
    : 100;
  return { current, next, progress, xp };
};

// ---- Aggregated profile stats ----
export const getProfileStats = () => {
  const h = loadHistory().filter((e) => e.total > 0);
  let correct = 0;
  let total = 0;
  let best = 0;
  const per = {};
  h.forEach((e) => {
    correct += e.correct || 0;
    total += e.total;
    const pct = (e.correct / e.total) * 100;
    if (pct > best) best = pct;
    if (
      e.mode === "quiz" &&
      Array.isArray(e.topics) &&
      e.topics.length === 1 &&
      TOPIC_KEYS.includes(e.topics[0])
    ) {
      const t = e.topics[0];
      per[t] = per[t] || { n: 0, sum: 0 };
      per[t].n += 1;
      per[t].sum += pct;
    }
  });
  const stacks = Object.entries(per)
    .map(([t, s]) => ({ topic: t, avg: Math.round(s.sum / s.n), n: s.n }))
    .sort((a, b) => b.avg - a.avg);
  return {
    sessions: h.length,
    answered: total,
    correct,
    avg: total ? Math.round((correct / total) * 100) : 0,
    best: Math.round(best),
    stacks,
  };
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

// Filtered mistake list for the review wizard (language + optional topic)
export const getMistakes = (langTrans, topic = "All") =>
  read(MISTAKES_KEY).filter(
    (m) => m.lang === langTrans && (topic === "All" || m.topic === topic)
  );

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
