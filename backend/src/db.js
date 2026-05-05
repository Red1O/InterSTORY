import path from 'node:path';
import Database from 'better-sqlite3';

const dbFilePath = path.join(process.cwd(), 'data', 'quiz.db');

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

// Ensure schema exists before preparing statements.
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
