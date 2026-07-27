# Cane & Current — AI Irrigation Advisory for Sugarcane

A 5-page React site built for the "AI Use Case Integration" assignment (KJS-AGR-01):
**Home · How It Works · Advisory Dashboard · Farmer Registration · Team**

The Farmer Registration page writes real documents to a MongoDB Atlas database
through a Vercel serverless API route (`/api/farmers`).

---

## 0. What you need before starting

- [Node.js](https://nodejs.org) 18+ installed (`node -v` to check)
- A free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) account
- A free [Vercel](https://vercel.com/signup) account (sign up with GitHub)
- A free [GitHub](https://github.com) account
- Git installed locally

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

## 3. Test the website (Procedure step 2)

Manually click through and confirm:

- [ ] All 5 nav links load a different page (Home, How It Works, Dashboard,
      Farmer Registration, Team) and the active link is highlighted
- [ ] The site is usable on a phone-sized window (resize browser or use dev tools'
      device toolbar) — the nav collapses into a menu button
- [ ] On **Farmer Registration**, submitting the form with a field left empty shows
      a validation message and does _not_ save
- [ ] Submitting a complete, valid form shows "Registered ✓" and the new entry
      appears in **Database → Browse Collections** in MongoDB Atlas, inside the
      `sugarcane_irrigation.farmers` collection
- [ ] Refreshing the Farmer Registration page shows the new entry under "Recently
      registered" (proves the GET route reads from Atlas too)

---

## 4. Push the code to GitHub

```bash
git init
git add .
git commit -m "Initial commit: AI irrigation advisory site"
```

Create a new **empty** repository on GitHub (no README/gitignore, since you already
have them), then:

```bash
git remote add origin https://github.com/<your-username>/sugarcane-irrigation-advisory.git
git branch -M main
git push -u origin main
```

---

## 5. Deploy to Vercel (Procedure steps 3 & 4)

### Deploy

1. Go to [vercel.com/new](https://vercel.com/new) and **Import** your GitHub repo.
2. Framework preset: Vercel auto-detects **Vite** — leave build settings as default
   (`npm run build`, output directory `dist`).
3. Before clicking Deploy, open **Environment Variables** and add:
   | Name | Value |
   |---|---|
   | `MONGODB_URI` | your Atlas connection string from Step 1 |
   | `MONGODB_DB` | `sugarcane_irrigation` |
4. Click **Deploy**. In about a minute you'll get a live URL like
   `https://sugarcane-irrigation-advisory.vercel.app`.
5. Repeat the checklist from Step 3 on the live URL to confirm the deployed API
   route can also reach MongoDB Atlas.

### Register and connect a real domain (Procedure step 3)

You don't have to buy a domain — the free `.vercel.app` URL already satisfies
"host it on any domain." If you want a custom domain for extra credit:

1. Buy a cheap domain (e.g. `.xyz`, `.site`, `.in` are usually the cheapest) from
   [Namecheap](https://www.namecheap.com), [Hostinger](https://www.hostinger.com),
   or directly through **Vercel → your project → Settings → Domains → Buy**.
2. In your Vercel project: **Settings → Domains → Add** → type your domain →
   follow Vercel's instructions to add the DNS records it shows you at your
   domain registrar (usually one `A` record and one `CNAME` record).
3. DNS can take a few minutes to a few hours to propagate. Once it does, your
   custom domain will serve the same site automatically, with free HTTPS.

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

## Content source

All copy about the problem statement, workflow, AI models, and faculty committee is
adapted from the assignment brief, _"Irrigation Advisory System for Sugarcane Crop
using AI and Sensor-based Technology" (Use Case ID: KJS-AGR-01)_.
