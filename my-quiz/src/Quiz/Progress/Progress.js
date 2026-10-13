import React, { useContext, useMemo, useState } from 'react';
import "./Progress.css";
import { LangueContext } from '../../Context/LangueContext';
import { TOPIC_LABELS, TOPIC_KEYS } from '../Data/QuestionAllData';
import { loadHistory, clearHistory } from '../Data/storage';

export const Progress = () => {
  const { langueTrans, setMode } = useContext(LangueContext);
  const FR = langueTrans === "FR";
  const [, force] = useState(0);

  const stats = useMemo(() => {
    const history = loadHistory().filter((e) => e.total > 0);
    const perTopic = {};
    TOPIC_KEYS.forEach((t) => { perTopic[t] = { attempts: 0, best: 0, sum: 0 }; });
    let totalRuns = 0, totalCorrect = 0, totalQs = 0, bestPct = 0, sumPct = 0;
    history.forEach((e) => {
      const pct = Math.round((e.correct / e.total) * 100);
      totalRuns += 1;
      totalCorrect += e.correct;
      totalQs += e.total;
      sumPct += pct;
      if (pct > bestPct) bestPct = pct;
      (e.topics || []).forEach((t) => {
        if (!perTopic[t]) return;
        perTopic[t].attempts += 1;
        perTopic[t].sum += pct;
        if (pct > perTopic[t].best) perTopic[t].best = pct;
      });
    });
    return { perTopic, totalRuns, totalCorrect, totalQs, bestPct, avgPct: totalRuns ? Math.round(sumPct / totalRuns) : 0 };
  }, []);

  const played = TOPIC_KEYS.filter((t) => stats.perTopic[t].attempts > 0);

  return (
    <div className="progress">
      <h2 className="progress-title">{FR ? "Mes progrès" : "My progress"}</h2>

      {stats.totalRuns === 0 ? (
        <p className="progress-empty">
          {FR ? "Aucun quiz terminé pour le moment. Lancez un quiz pour voir vos statistiques ici."
              : "No completed quizzes yet. Start a quiz to see your stats here."}
        </p>
      ) : (
        <>
          <div className="progress-overall">
            <div className="progress-stat">
              <span className="progress-stat-count">{stats.totalRuns}</span>
              <span className="progress-stat-label">{FR ? "sessions" : "sessions"}</span>
            </div>
            <div className="progress-stat">
              <span className="progress-stat-count">{stats.avgPct}%</span>
              <span className="progress-stat-label">{FR ? "score moyen" : "avg score"}</span>
            </div>
            <div className="progress-stat">
              <span className="progress-stat-count">{stats.bestPct}%</span>
              <span className="progress-stat-label">{FR ? "meilleur" : "best"}</span>
            </div>
            <div className="progress-stat">
              <span className="progress-stat-count">{stats.totalCorrect}/{stats.totalQs}</span>
              <span className="progress-stat-label">{FR ? "bonnes réponses" : "correct"}</span>
            </div>
          </div>

          <div className="progress-topics">
            {played.map((t) => {
              const s = stats.perTopic[t];
              const avg = Math.round(s.sum / s.attempts);
              return (
                <div className="progress-topic" key={t}>
                  <span className="progress-topic-name">{TOPIC_LABELS[t]}</span>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: `${s.best}%` }} />
                  </div>
                  <span className="progress-topic-scores">
                    {FR ? `meilleur ${s.best}% · moy. ${avg}%` : `best ${s.best}% · avg ${avg}%`}
                  </span>
                </div>
              );
            })}
          </div>

          <button
            className="progress-clear"
            type="button"
            onClick={() => { clearHistory(); force((v) => v + 1); }}
          >
            {FR ? "Effacer l'historique" : "Clear history"}
          </button>
        </>
      )}

      <button className="intro-button" type="button" onClick={() => setMode('quiz')}>
        {FR ? "Retour" : "Back"}
      </button>
    </div>
  );
};
