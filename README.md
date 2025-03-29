# Chatter

The <b>Chat</b>bot Star<b>ter</b> (with RAG). This project is a demo for a chatbot with RAG functionality. The chatbot will act as George, a virtual sales agent for a coffee machine brand Bruvi to answer the user's questions with references to the pages on Bruvi website. The project also demonstrates serving with different model types: `human`, `custom hosted model`, `OpenAI with RAG`. The user can toggle the model from the UI.

The project is designed for educational purpose, with only the minimal and most essential dependencies. It can be used to understand how the system operates under the hood, and is easily customizable.

## UI

![screenshot](public/screenshot.png)

## RAG diagram

The diagram below shows the flow of RAG. This repo only implements the online part. The offline part is in the [scrapy-demo](https://github.com/minfawang/scrapy-demo) repo.

![rag_diagram](public/rag_diagram.png)

## Tech stack

- [x] [Next.js](https://nextjs.org/) (Frontend, SSR)
- [x] [Supabase](https://supabase.com/) (Database, PubSub)
- [x] [FastAPI](https://fastapi.tiangolo.com/) (Backend)
- [x] [pipenv](https://pipenv.pypa.io/en/latest/) (Python virtual management)
- [x] [shadcn/ui](https://ui.shadcn.com/) (UI components, Tailwind CSS)

It uses numpy to build the in-memory "vector database" for RAG.



## Getting Started

### First time

Update `SUPABASE_PROJECT_URL` and `SUPABASE_ANON_KEY` in [supabase.tsx](app/supabase.tsx) if necessary.

#### 🛠️ Supabase Setup Instructions

To enable real-time messaging and storage, make sure to create the required `messages` table in your Supabase database **before running the app**.

##### ✅ Option 1: Use Supabase Dashboard (Recommended)

1. Go to your Supabase project → Navigate to **"Database" → "Table Editor"** on the left sidebar.
2. In the right panel, select the `public` schema and click **"Create a new table"**.
3. Fill out the following:

   - **Table name**: `messages`
   - **Columns**:
     - `id`: `uuid` (Primary Key, Default: `gen_random_uuid()`)
     - `text`: `text`
     - `source`: `text`
     - `references`: `jsonb`
     - `created_at`: `timestamp with time zone` (Default: `now()`)

4. Save the table.

##### Warning

- ⚠️ Do **not** use the SQL Editor to create this table.  

- PostgreSQL reserves the keyword `references`, which can lead to syntax errors when creating columns via raw SQL.
- 🔒 Row Level Security (RLS)
  Make sure **RLS is disabled** for the `messages` table. If enabled, you must manually add `INSERT` and `SELECT` policies.
  For beginner use and local testing, it's recommended to disable RLS.
- 🔄 Enable Realtime Updates
  - Go to the **"Database" → "Replication"** tab in Supabase. Enable Realtime for the `messages` table.

With these settings in place, the app will be able to store, retrieve, and display chat messages in real time.

Also, create `.env` file. See [.env.example](/.env.example) for an example.

#### 🧩 Install Dependencies Backend 

Make sure you have [Pipenv](https://pipenv.pypa.io/en/latest/) installed.

````bash
pipenv install
npm install
````

### Dev

Run the backend server:

```bash
pipenv shell
cd api
uvicorn index:app --reload
```

Run the frontend development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
