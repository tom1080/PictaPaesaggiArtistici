# Guida al Deployment

## Deploy su Vercel (Consigliato)

### Passo 1: Preparazione
Il progetto è già configurato per Vercel con:
- `vercel.json` ottimizzato
- API endpoints serverless in `/api`
- Build configuration per Vite

### Passo 2: Deploy
1. **Push su GitHub**:
   ```bash
   git add .
   git commit -m "feat: ready for vercel deployment"
   git push origin main
   ```

2. **Connetti a Vercel**:
   - Vai su [vercel.com](https://vercel.com)
   - Clicca "New Project"
   - Importa il repository GitHub
   - Vercel userà automaticamente la configurazione in `vercel.json`

3. **Il sito sarà live**:
   - URL format: `https://your-project.vercel.app`
   - Deploy automatici ad ogni push su main

### 2. Deploy su Netlify

1. **Connetti il repository**:
   - Vai su [netlify.com](https://netlify.com)
   - Clicca "New site from Git"
   - Connetti il repository GitHub

2. **Configurazioni build**:
   - Build command: `vite build`
   - Publish directory: `client/dist`

### 3. Deploy su Replit

1. **Usa il pulsante Deploy**:
   - Nel tuo progetto Replit, clicca "Deploy"
   - Scegli "Autoscale Deployment"
   - Il sito sarà disponibile su un URL `.replit.app`

## Configurazione del Progetto

Il progetto è già configurato con:
- ✅ `vercel.json` per Vercel
- ✅ API endpoints serverless in `/api`
- ✅ Build script ottimizzato
- ✅ Routing client-side configurato

## Note Importanti

- **API Endpoints**: Gli endpoint API sono configurati come funzioni serverless
- **Routing**: Il routing client-side è gestito da Wouter
- **Storage**: Utilizza storage in-memory (i dati si resettano ad ogni deploy)

## Troubleshooting

### Errore 404 sulle rotte
Se le rotte come `/evento/1` danno errore 404:
- Verifica che il file `vercel.json` sia presente
- Controlla che le rewrites siano configurate correttamente

### API non funzionanti
Se le API non rispondono:
- Verifica che i file in `/api` siano presenti
- Controlla i logs di deployment per errori

### Build fallito
Se il build fallisce:
- Controlla che tutte le dipendenze siano installate
- Verifica che il comando build sia corretto: `vite build`