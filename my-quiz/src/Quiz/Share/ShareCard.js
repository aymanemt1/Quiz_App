import React, { useContext, useState } from "react";
import "./ShareCard.css";
import { LangueContext } from "../../Context/LangueContext";
import { TOPIC_LABELS } from "../Data/QuestionAllData";

// Renders a 1080x1080 score card on a <canvas> and shares it via
// navigator.share (file) when available, falling back to PNG download.
const drawScoreCard = ({ pct, correct, total, modeText, topicText, dateText }) =>
  new Promise((resolve, reject) => {
    try {
      const S = 1080;
      const canvas = document.createElement("canvas");
      canvas.width = S;
      canvas.height = S;
      const ctx = canvas.getContext("2d");

      // Background
      const g = ctx.createLinearGradient(0, 0, S, S);
      g.addColorStop(0, "#0b1220");
      g.addColorStop(1, "#1e1b4b");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, S, S);

      // Soft glow circles
      const glow = (x, y, r, color) => {
        const rg = ctx.createRadialGradient(x, y, 0, x, y, r);
        rg.addColorStop(0, color);
        rg.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = rg;
        ctx.fillRect(x - r, y - r, r * 2, r * 2);
      };
      glow(200, 180, 320, "rgba(129,140,248,0.25)");
      glow(900, 920, 380, "rgba(52,211,153,0.16)");

      // Frame
      ctx.strokeStyle = "rgba(129,140,248,0.5)";
      ctx.lineWidth = 6;
      ctx.strokeRect(40, 40, S - 80, S - 80);

      ctx.textAlign = "center";
      ctx.textBaseline = "alphabetic";

      // App name
      ctx.fillStyle = "#818cf8";
      ctx.font = "600 46px system-ui, -apple-system, sans-serif";
      ctx.fillText("Q U I Z   A P P", S / 2, 170);

      // Score ring
      const cx = S / 2;
      const cy = 500;
      const r = 215;
      ctx.lineWidth = 38;
      ctx.lineCap = "round";
      ctx.strokeStyle = "rgba(255,255,255,0.12)";
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();
      const ringColor = pct >= 80 ? "#34d399" : pct >= 50 ? "#fbbf24" : "#f87171";
      ctx.strokeStyle = ringColor;
      ctx.beginPath();
      ctx.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (pct / 100));
      ctx.stroke();

      ctx.fillStyle = "#ffffff";
      ctx.font = "800 150px system-ui, -apple-system, sans-serif";
      ctx.fillText(`${pct}%`, cx, cy + 55);

      // correct / total
      ctx.fillStyle = "rgba(255,255,255,0.85)";
      ctx.font = "500 54px system-ui, -apple-system, sans-serif";
      ctx.fillText(`${correct}/${total}`, cx, cy + 165);

      // mode + topic
      ctx.fillStyle = "#c7d2fe";
      ctx.font = "600 44px system-ui, -apple-system, sans-serif";
      ctx.fillText(modeText, cx, 830);
      ctx.fillStyle = "rgba(255,255,255,0.65)";
      ctx.font = "400 36px system-ui, -apple-system, sans-serif";
      ctx.fillText(topicText, cx, 885);

      // date
      ctx.fillStyle = "rgba(255,255,255,0.45)";
      ctx.font = "400 30px system-ui, -apple-system, sans-serif";
      ctx.fillText(dateText, cx, 985);

      canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("toBlob failed"))), "image/png");
    } catch (e) {
      reject(e);
    }
  });

export const ShareButton = ({ correct, total }) => {
  const { langueTrans, mode, langue, examTopics, codeTopic, level } =
    useContext(LangueContext);
  const FR = langueTrans === "FR";
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState("");

  const topicLabel = (t) => TOPIC_LABELS[t] || t;
  let modeText = "Quiz App";
  let topicText = "";
  if (mode === "quiz") {
    modeText = "Quiz";
    topicText = topicLabel(langue);
  } else if (mode === "code") {
    modeText = FR ? "Défi code" : "Code challenge";
    topicText = codeTopic === "All" ? (FR ? "Tous les stacks" : "All stacks") : topicLabel(codeTopic);
  } else if (mode === "exam") {
    modeText = FR ? "Examen" : "Exam";
    topicText =
      examTopics.length >= 16
        ? FR
          ? "Tous les stacks"
          : "All stacks"
        : examTopics.map(topicLabel).slice(0, 3).join(", ") +
          (examTopics.length > 3 ? "…" : "");
  } else if (mode === "daily") {
    modeText = FR ? "Défi du jour" : "Daily challenge";
    topicText = FR ? "Tous les stacks" : "All stacks";
  } else if (mode === "review") {
    modeText = FR ? "Erreurs" : "Mistakes";
    topicText = FR ? "Révision" : "Review";
  } else if (mode === "blitz") {
    modeText = "Blitz";
    topicText = FR ? "Vrai/Faux · Tous les stacks" : "True/False · All stacks";
  }
  if (level !== "all" && (mode === "quiz" || mode === "code" || mode === "exam")) {
    topicText += ` · ${FR ? "Niveau" : "Level"} ${level}`;
  }

  const share = async () => {
    setBusy(true);
    setDone("");
    try {
      const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
      const dateText = new Date().toLocaleDateString(FR ? "fr-FR" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const blob = await drawScoreCard({
        pct,
        correct,
        total,
        modeText,
        topicText,
        dateText,
      });
      const file = new File([blob], "quiz-app-score.png", { type: "image/png" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: "Quiz App" });
        setDone(FR ? "Partagé !" : "Shared!");
      } else {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "quiz-app-score.png";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 5000);
        setDone(FR ? "Image téléchargée !" : "Image downloaded!");
      }
    } catch (e) {
      if (!e || e.name !== "AbortError") setDone(FR ? "Échec du partage" : "Share failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <span className="share-wrap">
      <button
        type="button"
        className="share-button"
        onClick={share}
        disabled={busy}
      >
        {busy ? "…" : FR ? "Partager" : "Share"}
      </button>
      {done && <span className="share-done">{done}</span>}
    </span>
  );
};
