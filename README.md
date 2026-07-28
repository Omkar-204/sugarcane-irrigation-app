# Cane & Current — AI Irrigation Advisory for Sugarcane

A 5-page React site built for the "AI Use Case Integration" assignment (KJS-AGR-01):
**Home · How It Works · Advisory Dashboard · Farmer Registration · Team**

The Farmer Registration page writes real documents to a MongoDB Atlas database
through a Vercel serverless API route (`/api/farmers`).

---

## 1. Set up MongoDB Atlas (5 min)

1. Go to MongoDB Atlas → **Create a new project** → name it `sugarcane-irrigation`.
2. **Build a Database** → choose the **M0 Free** cluster → pick any nearby region → Create.
3. **Database Access** (left sidebar) → **Add New Database User**
   - Username/password authentication
   - Give it a username and a strong password (save these — you'll need them)
   - Role: **Read and write to any database**
4. **Network Access** (left sidebar) → **Add IP Address** → **Allow Access from Anywhere**
   (`0.0.0.0/0`). This is required because Vercel's serverless functions don't have a
   fixed IP.
5. Go back to **Database** → click **Connect** on your cluster → **Drivers** →
   copy the connection string. It looks like:

   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

   Replace `<username>` and `<password>` with the real values from step 3.

Keep this string handy — you'll paste it in two places (local `.env.local` and later
in Vercel's dashboard).

---

## 2. Run the project locally

```bash
# 1. Install dependencies
npm install

# 2. Create your local env file
cp .env.local.example .env.local
```

Open `.env.local` and paste your real connection string:

```
MONGODB_URI=mongodb+srv://yourUser:yourPassword@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
MONGODB_DB=sugarcane_irrigation
```

### Running the frontend only (no live database)

```bash
npm run dev
```

Visit `http://localhost:5173`. Every page works except the Farmer Registration
form's save/load calls, since `/api` routes aren't served by plain Vite.

### Running frontend + API together (recommended, to actually test MongoDB)

Install the Vercel CLI once, globally:

```bash
npm install -g vercel
```

Then, from the project folder:

```bash
vercel dev
```

This serves both the React app **and** the `/api/farmers` serverless function on
`http://localhost:3000`, backed by your real MongoDB Atlas cluster. Use this to
actually test registering a farmer before you deploy.

---

## Project structure

```
sugarcane-irrigation-app/
├── api/
│   ├── _lib/db.js        # cached MongoDB Atlas connection
│   └── farmers.js        # GET (recent list) / POST (register) → Atlas
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Register.jsx
│   │   └── Team.jsx
│   ├── App.jsx            # routes
│   ├── main.jsx           # React entry point
│   └── index.css          # design tokens + all styling
├── .env.local.example
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

## Design notes

- **Palette**: deep field green (`#1F3D2B`), cane-jaggery gold (`#C99A2B`), parchment
  paper (`#F6F1E4`), irrigation blue (`#3E7CB1`), soil clay (`#8B5E3C`).
- **Type**: Fraunces (serif, display headings) + Inter (body) + IBM Plex Mono (all
  data/sensor readouts, to visually separate "measured numbers" from "written copy").
- **Signature motif**: the `.furrows` divider — a repeating horizontal line pattern
  that echoes ploughed sugarcane rows, used as section breaks instead of a plain `<hr>`.


