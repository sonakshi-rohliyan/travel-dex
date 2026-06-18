# Travel PokéDex 🕸️

Your personal travel bucket-list, styled as a Pokédex.

## Deploy to Vercel (3 steps)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "initial"
   gh repo create travel-pokedex --public --push --source=.
   ```

2. **Import on Vercel**
   - Go to https://vercel.com/new
   - Select your GitHub repo
   - Framework will be auto-detected as **Next.js**
   - Click **Deploy** — no env vars needed

3. **Done!** Your site will be live at `https://travel-pokedex.vercel.app` (or similar).

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000
