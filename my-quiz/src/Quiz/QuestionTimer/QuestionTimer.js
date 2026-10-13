import React, { useState, useEffect, useRef, useContext } from "react";
import "./QuestionTimer.css";
import { LangueContext } from "../../Context/LangueContext";

// Per-question countdown. Resets when the question changes.
// Calls onTimeout() once when it reaches zero.
export const QuestionTimer = ({ seconds, questionId, onTimeout }) => {
  const { langueTrans } = useContext(LangueContext);
  const FR = langueTrans === "FR";
  const DR = langueTrans === "DR";
  const [left, setLeft] = useState(seconds);
  const timeoutRef = useRef(onTimeout);
  timeoutRef.current = onTimeout;

  useEffect(() => {
    setLeft(seconds);
  }, [seconds, questionId]);

  useEffect(() => {
    if (left <= 0) {
      timeoutRef.current();
      return;
    }
    const t = setTimeout(() => setLeft((l) => l - 1), 1000);
    return () => clearTimeout(t);
  }, [left]);

  const danger = left <= 5;
  const pct = Math.max(0, Math.min(100, (left / seconds) * 100));

  return (
    <div className={`question-timer ${danger ? "timer-danger" : ""}`}>
      <div className="timer-top">
        <span className="timer-label">{DR ? "Lwa9t li b9a" : FR ? "Temps restant" : "Time left"}</span>
        <span className="timer-value">{left}s</span>
      </div>
      <div className="timer-bar">
        <div className="timer-bar-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};
