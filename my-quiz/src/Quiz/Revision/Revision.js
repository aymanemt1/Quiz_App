import React, { useContext, useState, useEffect } from "react";
import "./Revision.css";
import { LangueContext } from "../../Context/LangueContext";import { TOPIC_KEYS, TOPIC_LABELS } from "../Data/QuestionAllData";
import { getRevisionNotes } from "../Data/RevisionNotes";

// Renders `code` spans from backtick-marked text
const renderRich = (text) => {
  const parts = String(text).split("`");
  return parts.map((p, i) =>
    i % 2 === 1 ? <code key={i}>{p}</code> : <span key={i}>{p}</span>
  );
};

export const Revision = () => {
  const { langueTrans, langue, setlangue, setMode } = useContext(LangueContext);
  const FR = langueTrans === "FR";

  const [topic, setTopic] = useState(
    TOPIC_KEYS.includes(langue) ? langue : "React"
  );
  const [step, setStep] = useState(0);

  const notes = getRevisionNotes(topic, langueTrans);
  const total = notes.length;

  // Reset to first card when topic or language changes
  useEffect(() => {
    setStep(0);
  }, [topic, langueTrans]);

  // When the user picks a stack on the start screen then hits "Cours",
  // open the notes scoped to that stack
  useEffect(() => {
    if (TOPIC_KEYS.includes(langue)) setTopic(langue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [langue]);

  const go = (delta) =>
    setStep((s) => Math.min(Math.max(s + delta, 0), total - 1));

  const pct = total > 0 ? ((step + 1) / total) * 100 : 0;

  return (
    <div className="revision">
      <h1 className="intro-title">
        {FR ? "Fiches de révision" : "Revision notes"}
      </h1>

      <select
        className="select_options"
        value={topic}
        onChange={(e) => {
          setTopic(e.target.value);
          setlangue(e.target.value);
        }}
      >
        {TOPIC_KEYS.map((t) => (
          <option key={t} value={t}>
            {TOPIC_LABELS[t]}
          </option>
        ))}
      </select>

      {total > 0 ? (
        <div className="revision-card-wrap">
          <div className="revision-progress">
            <div
              className="revision-progress-fill"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="revision-step-label">
            {FR ? `Étape ${step + 1}/${total}` : `Step ${step + 1}/${total}`}
          </p>

          <div className="revision-card" key={`${topic}-${step}`}>
            <p className="revision-point">{renderRich(notes[step])}</p>
          </div>

          <div className="revision-nav">
            <button
              type="button"
              className="intro-button revision-nav-btn"
              onClick={() => go(-1)}
              disabled={step === 0}
              style={step === 0 ? { opacity: 0.4, cursor: "not-allowed" } : undefined}
            >
              ← {FR ? "Précédent" : "Previous"}
            </button>
            <button
              type="button"
              className="intro-button revision-nav-btn"
              onClick={() => go(1)}
              disabled={step === total - 1}
              style={step === total - 1 ? { opacity: 0.4, cursor: "not-allowed" } : undefined}
            >
              {FR ? "Suivant" : "Next"} →
            </button>
          </div>
        </div>
      ) : (
        <p className="intro-desc">
          {FR ? "Aucune fiche pour ce sujet." : "No notes for this topic."}
        </p>
      )}

      <button
        type="button"
        className="intro-button revision-back"
        onClick={() => setMode("quiz")}
      >
        ← {FR ? "Retour" : "Back"}
      </button>
    </div>
  );
};
