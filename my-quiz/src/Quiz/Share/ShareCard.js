import React, { useContext, useState } from "react";
import "./ShareCard.css";
import { LangueContext } from "../../Context/LangueContext";
import { TOPIC_LABELS } from "../Data/QuestionAllData";

// Draws the Quiz App "Q" logo mark on the canvas.
const drawLogo = (ctx, cx, topY, size) => {
  const r = size * 0.24;
  const x = cx - size / 2;
  const y = topY;
  // rounded-square gradient badge
  const bg = ctx.createLinearGradient(x, y, x + size, y + size);
  bg.addColorStop(0, "#6d28d9");
  bg.addColorStop(0.55, "#a855f7");
  bg.addColorStop(1, "#d946ef");
  ctx.fillStyle = bg;
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(x, y, size, size, r);
  } else {
    ctx.rect(x, y, size, size);
  }
  ctx.fill();
  // Q ring
  const qcx = cx - size * 0.03;
  const qcy = y + size * 0.44;
  const qr = size * 0.21;
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = size * 0.1;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.arc(qcx, qcy, qr, 0, Math.PI * 2);
  ctx.stroke();
  // Q tail
  ctx.beginPath();
  ctx.moveTo(qcx + qr * 0.72, qcy + qr * 0.72);
  ctx.lineTo(qcx + qr * 1.5, qcy + qr * 1.5);
  ctx.stroke();
  // spark
  const sx = x + size * 0.76;
  const sy = y + size * 0.18;
  const s = size * 0.055;
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(sx, sy - s);
  ctx.quadraticCurveTo(sx, sy, sx + s, sy);
  ctx.quadraticCurveTo(sx, sy, sx, sy + s);
  ctx.quadraticCurveTo(sx, sy, sx - s, sy);
  ctx.quadraticCurveTo(sx, sy, sx, sy - s);
  ctx.fill();
};

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

      // Background — premium deep purple
      const g = ctx.createLinearGradient(0, 0, S, S);
      g.addColorStop(0, "#0d0a1f");
      g.addColorStop(0.6, "#150f2e");
      g.addColorStop(1, "#1e1240");
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
      glow(200, 180, 340, "rgba(168,85,247,0.28)");
      glow(900, 920, 400, "rgba(217,70,239,0.16)");

      // Frame
      ctx.strokeStyle = "rgba(168,85,247,0.45)";
      ctx.lineWidth = 6;
      ctx.strokeRect(40, 40, S - 80, S - 80);

      ctx.textAlign = "center";
      ctx.textBaseline = "alphabetic";

      // Logo
      drawLogo(ctx, S / 2, 92, 150);

      // App name
      ctx.fillStyle = "#c084fc";
      ctx.font = "600 40px system-ui, -apple-system, sans-serif";
      ctx.fillText("Q U I Z   A P P", S / 2, 300);

      // Score ring
      const cx = S / 2;
      const cy = 570;
      const r = 200;
      ctx.lineWidth = 36;
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
      ctx.font = "800 140px system-ui, -apple-system, sans-serif";
      ctx.fillText(`${pct}%`, cx, cy + 50);

      // correct / total
      ctx.fillStyle = "rgba(255,255,255,0.85)";
      ctx.font = "500 50px system-ui, -apple-system, sans-serif";
      ctx.fillText(`${correct}/${total}`, cx, cy + 155);

      // mode + topic
      ctx.fillStyle = "#d8b4fe";
      ctx.font = "600 42px system-ui, -apple-system, sans-serif";
      ctx.fillText(modeText, cx, 895);
      ctx.fillStyle = "rgba(255,255,255,0.65)";
      ctx.font = "400 34px system-ui, -apple-system, sans-serif";
      ctx.fillText(topicText, cx, 945);

      // date
      ctx.fillStyle = "rgba(255,255,255,0.45)";
      ctx.font = "400 28px system-ui, -apple-system, sans-serif";
      ctx.fillText(dateText, cx, 1010);

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
