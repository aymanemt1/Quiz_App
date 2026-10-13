import React, { useContext, useState, useEffect } from "react";
import "./Revision.css";
import { LangueContext } from "../../Context/LangueContext";import { TOPIC_KEYS } from "../Data/QuestionAllData";
import { getRevisionNotes } from "../Data/RevisionNotes";
import { StackGrid, stackOptions } from "../StackGrid/StackGrid";

// Renders `code` spans from backtick-marked text
const renderRich = (text) => {
  const parts = String(text).split("`");
  return parts.map((p, i) =>
    i % 2 === 1 ? <code key={i}>{p}</code> : <span key={i}>{p}</span>
  );
};

export const Revision = () => {
  const { langueTrans, langue, setlangue, setMode, setMenuOpen } = useContext(LangueContext);
  const FR = langueTrans === "FR";
  const DR = langueTrans === "DR";

  const [topic, setTopic] = useState(
    TOPIC_KEYS.includes(langue) ? langue : "React"
  );
  const [step, setStep] = useState(0);
  const [showExplain, setShowExplain] = useState(false);
  const explainLabel = langueTrans === "FR" ? "💡 Explique-moi" : DR ? "💡 Chreh liya" : "💡 Explain";
  // One thing per page: the stack grid is only shown to pick/change the
  // stack; the reading view shows ONLY the step card (no grid above it).
  const [showGrid, setShowGrid] = useState(false);

  // Revision notes only exist in EN/FR — DR UI reads EN content.
  const notes = getRevisionNotes(topic, langueTrans === "DR" ? "EN" : langueTrans);
  const total = notes.length;

  // Reset to first card when topic or language changes
  useEffect(() => {
    setStep(0);
    setShowExplain(false);
  }, [topic, langueTrans]);

  // When the user picks a stack on the start screen then hits "Cours",
  // open the notes scoped to that stack (straight into reading view)
  useEffect(() => {
    if (TOPIC_KEYS.includes(langue)) {
      setTopic(langue);
      setShowGrid(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [langue]);

  const go = (delta) => {
    setShowExplain(false);
    setStep((s) => Math.min(Math.max(s + delta, 0), total - 1));
  };

  const pickStack = (t) => {
    setTopic(t);
    setlangue(t);
    setShowGrid(false);
  };

  const backToMenu = () => {
    setMode("quiz");
    setMenuOpen(true);
  };

  const pct = total > 0 ? ((step + 1) / total) * 100 : 0;

  // Step 1 — stack picker only (no card on this page)
  if (showGrid) {
    return (
      <div className="revision">
        <h1 className="intro-title">
          {DR ? "Doros" : FR ? "Fiches de révision" : "Revision notes"}
        </h1>

        <StackGrid
          options={stackOptions(TOPIC_KEYS)}
          value={topic}
          onSelect={pickStack}
          label={DR ? "Stack :" : "Stack:"}
        />

        <button
          type="button"
          className="intro-button revision-back"
          onClick={backToMenu}
        >
          ← {DR ? "Rje3" : FR ? "Retour" : "Back"}
        </button>
      </div>
    );
  }

  // Step 2+ — reading view only: back link + progress + step label +
  // concept card + Previous/Next (no stack grid on this page)
  return (
    <div className="revision">
      <button
        type="button"
        className="revision-stacks-link"
        onClick={() => setShowGrid(true)}
      >
        ← Stacks
      </button>

      {total > 0 ? (
        <div className="revision-card-wrap">
          <div className="revision-progress">
            <div
              className="revision-progress-fill"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="revision-step-label">
            {DR ? `Khotwa ${step + 1}/${total}` : FR ? `Étape ${step + 1}/${total}` : `Step ${step + 1}/${total}`}
          </p>

          <div className="revision-card" key={`${topic}-${step}`}>
            <div className="revision-point-row">
              <p className="revision-point">{renderRich(notes[step].text)}</p>
              {notes[step].explain_dr && (
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
            {showExplain && notes[step].explain_dr && (
              <div className="explain-panel">
                <span className="explain-panel-label">{explainLabel}</span>
                <p>{notes[step].explain_dr}</p>
              </div>
            )}
          </div>

          <div className="revision-nav">
            <button
              type="button"
              className="intro-button revision-nav-btn"
              onClick={() => go(-1)}
              disabled={step === 0}
              style={step === 0 ? { opacity: 0.4, cursor: "not-allowed" } : undefined}
            >
              ← {DR ? "Qbel" : FR ? "Précédent" : "Previous"}
            </button>
            <button
              type="button"
              className="intro-button revision-nav-btn"
              onClick={() => go(1)}
              disabled={step === total - 1}
              style={step === total - 1 ? { opacity: 0.4, cursor: "not-allowed" } : undefined}
            >
              {DR ? "Doz" : FR ? "Suivant" : "Next"} →
            </button>
          </div>
        </div>
      ) : (
        <p className="intro-desc">
          {DR ? "Makaynach doros lhad lmawdo3." : FR ? "Aucune fiche pour ce sujet." : "No notes for this topic."}
        </p>
      )}

      <button
        type="button"
        className="intro-button revision-back"
        onClick={backToMenu}
      >
        ← {DR ? "Rje3" : FR ? "Retour" : "Back"}
      </button>
    </div>
  );
};
