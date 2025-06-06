import type { VercelRequest, VercelResponse } from '@vercel/node';

// Inline storage implementation for Vercel
const events = [
  {
    id: 1,
    title: "Forme e Colori",
    description: "Mostra collettiva di arte astratta contemporanea con opere di artisti locali e internazionali.",
    date: "15 MAR 2024",
    location: "Galleria d'Arte Moderna",
    createdAt: new Date()
  },
  {
    id: 2,
    title: "Workshop Creativo",
    description: "Laboratorio pratico di pittura astratta per principianti e esperti. Materiali inclusi.",
    date: "22 MAR 2024",
    location: "Studio d'Arte Centrale",
    createdAt: new Date()
  },
  {
    id: 3,
    title: "Conferenza: Arte e Territorio",
    description: "Incontro con critici d'arte sul ruolo dell'arte astratta nella valorizzazione culturale.",
    date: "05 APR 2024",
    location: "Auditorium Comunale",
    createdAt: new Date()
  }
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    if (req.method === 'GET') {
      res.json(events);
    } else if (req.method === 'POST') {
      // For demo purposes, just return success
      res.json({ success: true, message: "Evento creato con successo" });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error: any) {
    res.status(400).json({ 
      success: false, 
      message: error.message || "Errore del server" 
    });
  }
}