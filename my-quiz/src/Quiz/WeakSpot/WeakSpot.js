import React, { useContext } from "react";
import "./WeakSpot.css";
import { LangueContext } from "../../Context/LangueContext";
import { getWeakSpot } from "../Data/storage";
import { TOPIC_LABELS } from "../Data/QuestionAllData";

// Highlighted card: the stack with the lowest average score (2+ sessions),
// with a shortcut to its course. Neutral hint when there is no history yet.
export const WeakSpot = () => {
  const { langueTrans, setlangue, setMode } = useContext(LangueContext);
  const FR = langueTrans === "FR";
  const weak = getWeakSpot();

  const goToCourse = () => {
    if (!weak) return;
    setlangue(weak.topic);
    setMode("notes");
  };

  return (
    <div className={`weak-spot ${weak ? "weak-spot-alert" : "weak-spot-idle"}`}>
      {weak ? (
        <>
          <span className="weak-spot-icon" aria-hidden="true">
            ⚠
          </span>
          <p className="weak-spot-text">
            {FR ? (
              <>
                Point faible : <strong>{TOPIC_LABELS[weak.topic] || weak.topic}</strong>{" "}
                ({weak.avg} %) — révise-le !
              </>
            ) : (
              <>
                Weak spot: <strong>{TOPIC_LABELS[weak.topic] || weak.topic}</strong>{" "}
                ({weak.avg}%) — review it!
              </>
            )}
          </p>
          <button
            type="button"
            className="weak-spot-button"
            onClick={goToCourse}
          >
            {FR ? "Voir le cours" : "Open course"}
          </button>
        </>
      ) : (
        <p className="weak-spot-text weak-spot-hint">
          {FR
            ? "Termine des quiz pour découvrir ton point faible."
            : "Finish some quizzes to discover your weak spot."}
        </p>
      )}
    </div>
  );
};
