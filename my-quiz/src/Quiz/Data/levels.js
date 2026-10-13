// Difficulty levels 1-5 with EN/FR/DR labels
export const LEVELS = [1, 2, 3, 4, 5];

export const LEVEL_LABELS = {
  1: { en: "Easy", fr: "Facile", dr: "Sahla" },
  2: { en: "Fairly easy", fr: "Assez facile", dr: "Sahla chwiya" },
  3: { en: "Medium", fr: "Moyen", dr: "Mutawssita" },
  4: { en: "Hard", fr: "Difficile", dr: "S3iba" },
  5: { en: "Expert", fr: "Expert", dr: "Khabir" },
};

export const levelLabel = (level, langTrans) => {
  const l = LEVEL_LABELS[level] || LEVEL_LABELS[1];
  return langTrans === "FR" ? l.fr : langTrans === "DR" ? l.dr : l.en;
};

export const levelBadgeText = (level, langTrans) => {
  const word = langTrans === "FR" ? "Niveau" : langTrans === "DR" ? "Mostawa" : "Level";
  return `${word} ${level} · ${levelLabel(level, langTrans)}`;
};
