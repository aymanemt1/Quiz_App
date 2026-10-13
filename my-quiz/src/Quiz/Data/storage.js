// localStorage persistence: score history + mistakes to review
const HISTORY_KEY = "quizapp_history_v1";
const MISTAKES_KEY = "quizapp_mistakes_v1";

const read = (key) => {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
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
