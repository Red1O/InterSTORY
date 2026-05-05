# InterSTORY Backend

Minimal Express API that saves quiz results into a local SQLite database.

## Run

```bash
cd backend
npm install
npm start
```

- API health: `GET http://localhost:5000/api/health`
- Save result: `POST http://localhost:5000/api/quiz-results`
- List recent: `GET http://localhost:5000/api/quiz-results?limit=10`

Database file is created at `backend/data/quiz.db`.
