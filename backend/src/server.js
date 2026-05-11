import express from 'express';
import cors from 'cors';
import { z } from 'zod';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { getQuizResultStats, insertQuizResult, listRecentResults } from './db.js';

const app = express();

app.use(cors());
app.use(express.json({ limit: '256kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

const quizResultSchema = z.object({
  score: z.number().int().nonnegative(),
  totalQuestions: z.number().int().positive(),
  answers: z
    .array(
      z.object({
        questionIndex: z.number().int().nonnegative(),
        answerIndex: z.number().int().nonnegative(),
        isCorrect: z.boolean()
      })
    )
    .optional()
});

app.post('/api/quiz-results', (req, res) => {
  const parsed = quizResultSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      error: 'Invalid payload',
      details: parsed.error.flatten()
    });
  }

  const { score, totalQuestions, answers } = parsed.data;

  const result = insertQuizResult.run({
    createdAt: new Date().toISOString(),
    score,
    totalQuestions,
    answersJson: answers ? JSON.stringify(answers) : null
  });

  return res.status(201).json({ id: result.lastInsertRowid });
});

// Useful for quick verification during development.
app.get('/api/quiz-results', (req, res) => {
  const limit = Math.min(Number(req.query.limit ?? 10) || 10, 100);
  const rows = listRecentResults.all({ limit });
  res.json({ results: rows });
});

app.get('/api/quiz-results/stats', (_req, res) => {
  const row = getQuizResultStats.get();

  const stats = {
    totalAttempts: Number(row?.total_attempts ?? 0),
    bestScore: row?.best_score == null ? null : Number(row.best_score),
    avgScore: row?.avg_score == null ? null : Number(row.avg_score),
    avgAccuracy: row?.avg_accuracy == null ? null : Number(row.avg_accuracy)
  };

  res.json({ stats });
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const frontendBuildPath = path.resolve(__dirname, '..', '..', 'frontend', 'build');
const frontendIndexHtml = path.join(frontendBuildPath, 'index.html');

if (fs.existsSync(frontendIndexHtml)) {
  app.use(express.static(frontendBuildPath));

  // SPA fallback (leave /api routes untouched).
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) return next();
    return res.sendFile(frontendIndexHtml);
  });
}

const port = Number(process.env.PORT ?? 5000);
app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});
