import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Database from 'better-sqlite3';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const defaultDbFilePath = path.resolve(__dirname, '..', 'data', 'quiz.db');
const dbFilePath = process.env.DB_PATH
  ? path.resolve(process.env.DB_PATH)
  : defaultDbFilePath;

fs.mkdirSync(path.dirname(dbFilePath), { recursive: true });

export const db = new Database(dbFilePath);

export function initDb() {
  db.pragma('journal_mode = WAL');

  db.exec(`
    CREATE TABLE IF NOT EXISTS quiz_results (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT NOT NULL,
      score INTEGER NOT NULL,
      total_questions INTEGER NOT NULL,
      answers_json TEXT
    );
  `);
}
initDb();

export const insertQuizResult = db.prepare(
  `INSERT INTO quiz_results (created_at, score, total_questions, answers_json)
   VALUES (@createdAt, @score, @totalQuestions, @answersJson)`
);

export const listRecentResults = db.prepare(
  `SELECT id, created_at, score, total_questions
   FROM quiz_results
   ORDER BY id DESC
   LIMIT @limit`
);

export const getQuizResultStats = db.prepare(
  `SELECT
     COUNT(*) AS total_attempts,
     MAX(score) AS best_score,
     AVG(score) AS avg_score,
     AVG(CAST(score AS REAL) / total_questions) AS avg_accuracy
   FROM quiz_results`
);
