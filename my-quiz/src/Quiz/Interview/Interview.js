import React, { useContext, useEffect, useMemo, useState } from 'react';
import "./Interview.css";
import { LangueContext } from '../../Context/LangueContext';
import { interviewQuestions } from '../Data/InterviewData';

export const Interview = () => {
  const { langue, langueTrans, setGameStarted, setMenuOpen } = useContext(LangueContext);
  const FR = langueTrans === "FR";
  const DR = langueTrans === "DR";

  // Interview content only exists in EN/FR — DR UI reads EN content.
  const contentLang = langueTrans === "DR" ? "EN" : langueTrans;
  const items = useMemo(() => {
    const block = interviewQuestions.find((b) => b.lang === contentLang);
    let qsts = block ? block.qsts : [];
    if (langue !== 'All') qsts = qsts.filter((q) => q.topic === langue);
    return qsts;
  }, [langue, contentLang]);

  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [known, setKnown] = useState(0);
  const [review, setReview] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setIndex(0);
    setShowAnswer(false);
    setKnown(0);
    setReview(0);
    setFinished(false);
  }, [items]);

  const restart = () => {
    setIndex(0);
    setShowAnswer(false);
    setKnown(0);
    setReview(0);
    setFinished(false);
  };

  const assess = (knewIt) => {
    if (knewIt) setKnown((v) => v + 1);
    else setReview((v) => v + 1);
    setShowAnswer(false);
    if (index + 1 >= items.length) setFinished(true);
    else setIndex((i) => i + 1);
  };

  if (!items.length) {
    return (
      <div className="interview">
        <p className="interview-empty">{DR ? "Makaynach las2ila lhad lmawdo3." : FR ? "Aucune question pour ce sujet." : "No questions for this topic."}</p>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="interview">
        <div className="interview-card interview-summary">
          <h2 className="interview-title">{DR ? "Linterview salat !" : FR ? "Entretien terminé !" : "Interview complete!"}</h2>
          <div className="interview-score">
            <div className="interview-score-item is-known">
              <span className="interview-score-count">{known}</span>
              <span className="interview-score-label">{DR ? "3arefhom" : FR ? "connues" : "known"}</span>
            </div>
            <div className="interview-score-item is-review">
              <span className="interview-score-count">{review}</span>
              <span className="interview-score-label">{DR ? "khasni nraje3hom" : FR ? "à revoir" : "to review"}</span>
            </div>
          </div>
          <div className="interview-actions">
            <button className="interview-button" onClick={restart}>
              {DR ? "3awd" : FR ? "Recommencer" : "Restart"}
            </button>
            <button className="interview-button interview-button-ghost" onClick={() => { setGameStarted(false); setMenuOpen(true); }}>
              {DR ? "Rje3 l menu" : FR ? "Retour au menu" : "Back to menu"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const current = items[index];

  return (
    <div className="interview">
      <div className="interview-progress">
        {index + 1} / {items.length}
      </div>
      <div className="interview-card">
        <span className="interview-topic">{current.topic}</span>
        <h2 className="interview-question">{current.q}</h2>
        {!showAnswer ? (
          <button className="interview-button" onClick={() => setShowAnswer(true)}>
            {DR ? "Werri ljawab" : FR ? "Voir la réponse" : "Show answer"}
          </button>
        ) : (
          <>
            <p className="interview-answer">{current.a}</p>
            {current.dr && (
              <div className="interview-dr">
                <span className="interview-dr-label">💡 {DR ? "Molakhas b Darija" : FR ? "Résumé en darija" : "Darija summary"}</span>
                <p>{current.dr}</p>
              </div>
            )}
            <div className="interview-actions">
              <button className="interview-button is-known" onClick={() => assess(true)}>
                {DR ? "Kont 3arfha" : FR ? "Je savais" : "I knew it"}
              </button>
              <button className="interview-button is-review" onClick={() => assess(false)}>
                {DR ? "Khasni nraje3ha" : FR ? "À revoir" : "To review"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
