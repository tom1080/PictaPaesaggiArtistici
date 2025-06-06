# Picta Paesaggi Culturali

Un sito web mobile-responsive per l'organizzazione no profit **Picta Paesaggi Culturali**, dedicata alla promozione dell'arte astratta contemporanea e alla valorizzazione dei paesaggi culturali.

## 🎨 Caratteristiche

- **Design ispirato all'arte astratta** con elementi geometrici e colori pastello
- **Completamente responsive** per dispositivi mobili e desktop
- **Sezione eventi** con pagine dettaglio cliccabili
- **Form di contatto** con validazione
- **Interfaccia in italiano**
- **Animazioni fluide** e transizioni eleganti

## 🛠️ Tecnologie Utilizzate

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + Shadcn/ui
- **Routing**: Wouter
- **Forms**: React Hook Form + Zod
- **Backend**: Express.js + TypeScript
- **Database**: In-memory storage (facilmente sostituibile con PostgreSQL)

## 🚀 Installazione e Avvio

```bash
# Clona il repository
git clone [url-del-repository]
cd pictapaesaggiculturali

# Installa le dipendenze
npm install

# Avvia l'applicazione in modalità sviluppo
npm run dev
```

L'applicazione sarà disponibile su `http://localhost:5000`

## 📱 Funzionalità

### Home Page
- Hero section con call-to-action
- Sezione missione dell'organizzazione
- Panoramica degli eventi
- Form di contatto

### Eventi
- Lista eventi con design a carte
- Pagine dettaglio per ogni evento
- Navigazione fluida tra sezioni

### Contatti
- Form di contatto con validazione
- Informazioni di contatto
- Link ai social media

## 🎨 Palette Colori

Il sito utilizza una palette di colori pastello ispirata all'arte:
- **Primary**: Rosa cipria (`#D4A5A5`)
- **Secondary**: Blu salvia (`#A5C4D4`)
- **Accent**: Giallo pesca (`#F2E394`)
- **Background**: Crema morbido (`#FAF8F5`)

## 📂 Struttura del Progetto

```
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componenti UI riutilizzabili
│   │   ├── pages/          # Pagine dell'applicazione
│   │   ├── lib/            # Utilità e configurazioni
│   │   └── hooks/          # Custom hooks
├── server/                 # Backend Express
│   ├── index.ts           # Server principale
│   ├── routes.ts          # API routes
│   └── storage.ts         # Gestione dati
├── shared/                 # Schemi e tipi condivisi
└── components.json        # Configurazione Shadcn/ui
```

## 🌐 API Endpoints

- `GET /api/events` - Recupera tutti gli eventi
- `POST /api/events` - Crea un nuovo evento
- `GET /api/contacts` - Recupera tutti i contatti
- `POST /api/contacts` - Invia un nuovo messaggio di contatto

## 📄 Licenza

Questo progetto è sviluppato per l'organizzazione no profit Picta Paesaggi Culturali.

---

*Sviluppato con ❤️ per promuovere l'arte astratta contemporanea*