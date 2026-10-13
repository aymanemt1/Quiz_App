import React from "react";
import "./StackGrid.css";
import { TOPIC_LABELS } from "../Data/QuestionAllData";
import { stackIcon } from "../Data/stacks";

// Stack options helper: [{ key, label, icon }]
export const stackOptions = (keys) =>
  keys.map((k) => ({ key: k, label: TOPIC_LABELS[k] || k, icon: stackIcon(k) }));

export const allStacksOption = (label) => ({
  key: "All",
  label,
  icon: "🧩",
});

// Tidy responsive grid of stack buttons (single- or multi-select).
export const StackGrid = ({ options, value, onSelect, multi = false, label }) => (
  <div className="stack-picker">
    {label && <span className="stack-picker-label">{label}</span>}
    <div className="stack-grid">
      {options.map((t) => {
        const active = multi ? value.includes(t.key) : value === t.key;
        return (
          <button
            key={t.key}
            type="button"
            className={`stack-btn ${active ? "stack-active" : ""}`}
            onClick={() => onSelect(t.key)}
            aria-pressed={active}
          >
            <span className="stack-btn-icon" aria-hidden="true">
              {t.icon}
            </span>
            <span className="stack-btn-label">{t.label}</span>
          </button>
        );
      })}
    </div>
  </div>
);
