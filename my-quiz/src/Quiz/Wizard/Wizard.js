import React, { useContext } from "react";
import "./Wizard.css";
import { LangueContext } from "../../Context/LangueContext";

// Reusable multi-step wizard shell: step indicator + progress bar,
// Back/Next navigation, and a "← Menu" escape hatch. One choice per screen.
export const Wizard = ({
  step,
  totalSteps,
  title,
  children,
  onBack,
  onNext,
  nextLabel,
  canNext = true,
  customActions = null,
}) => {
  const { langueTrans, setMenuOpen, setGameStarted } = useContext(LangueContext);
  const FR = langueTrans === "FR";

  const goToMenu = () => {
    setGameStarted(false);
    setMenuOpen(true);
  };

  return (
    <div className="wizard">
      <div className="wizard-top">
        <button type="button" className="menu-back" onClick={goToMenu}>
          ← Menu
        </button>
      </div>

      <div className="wizard-progress" aria-hidden="true">
        <span className="wizard-step-label">
          {FR ? `Étape ${step}/${totalSteps}` : `Step ${step}/${totalSteps}`}
        </span>
        <div className="wizard-bar">
          <div
            className="wizard-bar-fill"
            style={{ width: `${Math.round((step / totalSteps) * 100)}%` }}
          />
        </div>
      </div>

      {title && <h2 className="wizard-title">{title}</h2>}

      <div className="wizard-body">{children}</div>

      <div className="wizard-nav">
        {step > 1 ? (
          <button type="button" className="wizard-back" onClick={onBack}>
            ← {FR ? "Retour" : "Back"}
          </button>
        ) : (
          <span />
        )}
        {customActions || (
          <button
            type="button"
            className="intro-button wizard-next"
            onClick={onNext}
            disabled={!canNext}
            style={!canNext ? { opacity: 0.4, cursor: "not-allowed" } : undefined}
          >
            {nextLabel}
          </button>
        )}
      </div>
    </div>
  );
};

// Single-choice time picker: no timer, or a per-question countdown.
// Replaces the old checkbox-based toggle in wizard flows.
export const TimeSelector = ({ FR }) => {
  const { timed, setTimed, timePerQuestion, setTimePerQuestion } =
    useContext(LangueContext);

  const pick = (d) => {
    if (d === null) {
      setTimed(false);
    } else {
      setTimed(true);
      setTimePerQuestion(d);
    }
  };
  const isActive = (d) =>
    d === null ? !timed : timed && timePerQuestion === d;

  return (
    <div className="level-selector">
      <span className="level-selector-label">
        {FR ? "Temps :" : "Time:"}
      </span>
      <div className="level-buttons">
        <button
          type="button"
          className={`level-button ${isActive(null) ? "level-active" : ""}`}
          onClick={() => pick(null)}
        >
          {FR ? "Sans chrono" : "No timer"}
        </button>
        {[15, 30, 60].map((d) => (
          <button
            key={d}
            type="button"
            className={`level-button ${isActive(d) ? "level-active" : ""}`}
            onClick={() => pick(d)}
          >
            {d}s
          </button>
        ))}
      </div>
    </div>
  );
};
