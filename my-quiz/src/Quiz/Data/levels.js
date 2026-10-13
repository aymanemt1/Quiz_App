// Difficulty levels 1-5 with EN/FR labels
export const LEVELS = [1, 2, 3, 4, 5];

export const LEVEL_LABELS = {
  1: { en: "Easy", fr: "Facile" },
  2: { en: "Fairly easy", fr: "Assez facile" },
  3: { en: "Medium", fr: "Moyen" },
  4: { en: "Hard", fr: "Difficile" },
  5: { en: "Expert", fr: "Expert" },
};

export const levelLabel = (level, langTrans) => {
  const l = LEVEL_LABELS[level] || LEVEL_LABELS[1];
  return langTrans === "FR" ? l.fr : l.en;
};

export const levelBadgeText = (level, langTrans) => {
  const word = langTrans === "FR" ? "Niveau" : "Level";
  return `${word} ${level} · ${levelLabel(level, langTrans)}`;
};
