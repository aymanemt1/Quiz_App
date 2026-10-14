import React, { useContext, useState } from "react";
import "./ResumeDarija.css";
import { LangueContext } from "../../Context/LangueContext";
import { TOPIC_KEYS, TOPIC_LABELS } from "../Data/QuestionAllData";
import { getResumeDarija } from "../Data/ResumeDarija";
import { stackIcon } from "../Data/stacks";
import { StackGrid, stackOptions } from "../StackGrid/StackGrid";

// Condensed Darija cheat-sheet per stack: one scrollable page per topic.
export const ResumeDarija = () => {
  const { langueTrans, langue, setlangue, setMode, setMenuOpen } =
    useContext(LangueContext);
  const FR = langueTrans === "FR";
  const DR = langueTrans === "DR";

  const [topic, setTopic] = useState(
    TOPIC_KEYS.includes(langue) ? langue : "React"
  );
  const [showGrid, setShowGrid] = useState(false);

  const sections = getResumeDarija(topic);
  const label = (TOPIC_LABELS && TOPIC_LABELS[topic]) || topic;

  const title = DR ? "Molakhasat" : FR ? "Résumés Darija" : "Darija cheatsheets";
  const sub = DR
    ? "Molakhas morakaz dyal kol stack b darija"
    : FR
    ? "L'essentiel de chaque stack, en darija"
    : "Each stack condensed, in Darija";
  const back = DR ? "Rje3" : FR ? "Retour" : "Back";
  const stacksLabel = "Stacks";

  const pickStack = (t) => {
    setTopic(t);
    setlangue(t);
    setShowGrid(false);
  };

  const backToMenu = () => {
    setMode("quiz");
    setMenuOpen(true);
  };

  if (showGrid) {
    return (
      <div className="resume-dr">
        <h1 className="intro-title">{title}</h1>
        <p className="resume-dr-sub">{sub}</p>
        <StackGrid
          options={stackOptions(TOPIC_KEYS)}
          value={topic}
          onSelect={pickStack}
          label={DR ? "Stack :" : "Stack:"}
        />
        <button
          type="button"
          className="intro-button resume-dr-back"
          onClick={backToMenu}
        >
          ← {back}
        </button>
      </div>
    );
  }

  return (
    <div className="resume-dr">
      <button
        type="button"
        className="resume-dr-stacks-link"
        onClick={() => setShowGrid(true)}
      >
        ← {stacksLabel}
      </button>

      <div className="resume-dr-head">
        <span className="resume-dr-icon" aria-hidden="true">
          {stackIcon(topic)}
        </span>
        <div>
          <h2 className="resume-dr-topic">{label}</h2>
          <p className="resume-dr-tagline">{sub}</p>
        </div>
      </div>

      <div className="resume-dr-sheet">
        {sections.map((s, i) => (
          <section key={i} className="resume-dr-section">
            <h3 className="resume-dr-section-title">{s.t}</h3>
            <ul className="resume-dr-list">
              {s.b.map((bullet, j) => (
                <li key={j} className="resume-dr-bullet">
                  {bullet}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <button
        type="button"
        className="intro-button resume-dr-back"
        onClick={backToMenu}
      >
        ← {back}
      </button>
    </div>
  );
};
