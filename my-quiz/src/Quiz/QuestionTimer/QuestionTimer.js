import React, { useState, useEffect, useRef } from "react";
import "./QuestionTimer.css";

// Per-question countdown. Resets when the question changes.
// Calls onTimeout() once when it reaches zero.
export const QuestionTimer = ({ seconds, questionId, onTimeout, FR }) => {
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
        <span className="timer-label">{FR ? "Temps restant" : "Time left"}</span>
        <span className="timer-value">{left}s</span>
      </div>
      <div className="timer-bar">
        <div className="timer-bar-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};
