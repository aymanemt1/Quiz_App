import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import "./Blitz.css";
import { LangueContext } from "../../Context/LangueContext";
import { getBlitzStatements, BLITZ_DURATION } from "../Data/TrueFalse";
import { saveHistoryEntry, addMistakes } from "../Data/storage";
import { ShareButton } from "../Share/ShareCard";

// 60-second rapid-fire true/false. One tap per statement, no "next" button.
export const Blitz = () => {
  const { langueTrans, setGameStarted, setMenuOpen } = useContext(LangueContext);
  const FR = langueTrans === "FR";
  const DR = langueTrans === "DR";

  const [runId, setRunId] = useState(0);
  // Blitz statements only exist in EN/FR — DR UI reads EN content.
  const contentLang = langueTrans === "DR" ? "EN" : langueTrans;
  const statements = useMemo(
    () => getBlitzStatements(contentLang),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [contentLang, runId]
  );

  const [idx, setIdx] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [timeLeft, setTimeLeft] = useState(BLITZ_DURATION);
  const [finished, setFinished] = useState(false);
  const [log, setLog] = useState([]);
  const [showExplain, setShowExplain] = useState(false);
  const explainLabel = langueTrans === "FR" ? "💡 Explique-moi" : DR ? "💡 Chreh liya" : "💡 Explain";
  const savedRef = useRef(false);

  // Global 60s countdown
  useEffect(() => {
    if (finished) return;
    if (timeLeft <= 0) {
      setFinished(true);
      return;
    }
    const t = setTimeout(() => setTimeLeft((l) => l - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, finished]);

  const answer = (picked) => {
    if (finished) return;
    const st = statements[idx];
    if (!st) {
      setFinished(true);
      return;
    }
    setShowExplain(false);
    const ok = picked === st.answer;
    setLog((l) => [...l, { statement: st, picked, ok }]);
    if (ok) setCorrectCount((c) => c + 1);
    setAnswered((a) => a + 1);
    if (idx + 1 >= statements.length) setFinished(true);
    else setIdx(idx + 1);
  };

  // Persist history + mistakes once per run
  useEffect(() => {
    if (!finished || savedRef.current) return;
    savedRef.current = true;
    saveHistoryEntry({
      date: new Date().toISOString(),
      mode: "blitz",
      topics: ["Blitz"],
      level: "all",
      correct: correctCount,
      total: answered,
    });
    const missed = log
      .filter((e) => !e.ok)
      .map((e) => ({
        id: `blitz|${langueTrans}|${e.statement.text}`,
        topic: e.statement.topic,
        lang: langueTrans,
        level: e.statement.level || 2,
        text: e.statement.text,
        explain_dr: e.statement.explain_dr,
        answers: DR ? ["S7i7", "Ghalt"] : FR ? ["Vrai", "Faux"] : ["True", "False"],
        correct: e.statement.answer ? 0 : 1,
      }));
    if (missed.length) addMistakes(missed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  const restart = () => {
    savedRef.current = false;
    setIdx(0);
    setShowExplain(false);
    setCorrectCount(0);
    setAnswered(0);
    setTimeLeft(BLITZ_DURATION);
    setFinished(false);
    setLog([]);
    setRunId((r) => r + 1);
  };

  const accuracy = answered > 0 ? Math.round((correctCount / answered) * 100) : 0;
  const current = statements[idx];
  const danger = timeLeft <= 10;

  if (finished) {
    return (
      <div className="blitz blitz-end">
        <h2 className="blitz-end-title">
          {DR ? "Sali lwa9t !" : FR ? "Temps écoulé !" : "Time's up!"}
        </h2>
        <div className="blitz-end-score">{correctCount}</div>
        <p className="blitz-end-sub">
          {DR
            ? `${answered} jawabat · ${accuracy}% da9a`
            : FR
            ? `${answered} affirmation${answered > 1 ? "s" : ""} · ${accuracy} % de précision`
            : `${answered} statement${answered > 1 ? "s" : ""} · ${accuracy}% accuracy`}
        </p>
        <div className="blitz-end-buttons">
          <button type="button" className="intro-button" onClick={restart}>
            {DR ? "3awd l3eb" : FR ? "Rejouer" : "Play again"}
          </button>
          <button
            type="button"
            className="intro-button"
            onClick={() => { setGameStarted(false); setMenuOpen(true); }}
          >
            {DR ? "Rje3" : FR ? "Retour" : "Back"}
          </button>
          <ShareButton correct={correctCount} total={answered} />
        </div>
      </div>
    );
  }

  return (
    <div className="blitz">
      <div className="blitz-top">
        <div className={`blitz-timer ${danger ? "blitz-danger" : ""}`}>
          {timeLeft}s
        </div>
        <div className="blitz-score">
          <span className="blitz-score-ok">✓ {correctCount}</span>
          <span className="blitz-score-count">
            {answered}/{statements.length}
          </span>
        </div>
      </div>
      <div className="blitz-bar">
        <div
          className="blitz-bar-fill"
          style={{ width: `${(timeLeft / BLITZ_DURATION) * 100}%` }}
        />
      </div>
      {current && (
        <div className="blitz-card" key={`${runId}-${idx}`}>
          <span className="question-topic">{current.topic}</span>
          <div className="blitz-statement-row">
            <p className="blitz-statement">{current.text}</p>
            {current.explain_dr && (
              <button
                type="button"
                className={`explain-btn${showExplain ? " is-open" : ""}`}
                onClick={() => setShowExplain((v) => !v)}
                title={explainLabel}
                aria-label={explainLabel}
                aria-expanded={showExplain}
              >
                💡
              </button>
            )}
          </div>
          {showExplain && current.explain_dr && (
            <div className="explain-panel">
              <span className="explain-panel-label">{explainLabel}</span>
              <p>{current.explain_dr}</p>
            </div>
          )}
          <div className="blitz-buttons">
            <button
              type="button"
              className="blitz-button blitz-true"
              onClick={() => answer(true)}
            >
              {DR ? "S7I7" : FR ? "VRAI" : "TRUE"}
            </button>
            <button
              type="button"
              className="blitz-button blitz-false"
              onClick={() => answer(false)}
            >
              {DR ? "GHALT" : FR ? "FAUX" : "FALSE"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
