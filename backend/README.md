# Portfolio chat API

FastAPI service that answers questions about Jatin using Groq. The Groq key is read from the
`GROQ_API_KEY` environment variable on the server. It is never put in the website code.

## Deploy on Render (free)
1. Get a free key at console.groq.com (API Keys).
2. On render.com: New > Blueprint > pick this repo (it reads `render.yaml`), or New > Web Service with
   Root Directory `backend`, Build `pip install -r requirements.txt`,
   Start `uvicorn main:app --host 0.0.0.0 --port $PORT`.
3. Add the environment variable `GROQ_API_KEY` in Render's dashboard.
4. Open `https://<your-service>.onrender.com/health`. You should see `{"ok":true}`.
5. Put that address into `CHAT_API` at the top of `js/projects.js`, commit and push.

The free tier sleeps when idle, so the first question can take up to a minute. The website falls
back to its built-in answers if the API doesn't respond.

## Keep the answers accurate
`knowledge.md` is what the model is allowed to use. After editing `js/projects.js` or the FACTS in
`build_knowledge.js`, run `node backend/build_knowledge.js` from the repo root and commit.

## Settings (environment variables)
`GROQ_MODEL` (default `llama-3.1-8b-instant`), `ALLOWED_ORIGINS` (default your GitHub Pages site),
`RATE_PER_HOUR` (default 30 questions per visitor).
