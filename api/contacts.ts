import type { VercelRequest, VercelResponse } from '@vercel/node';

// Simple in-memory storage for demo
let contacts: any[] = [];

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
      res.json(contacts);
    } else if (req.method === 'POST') {
      const { nome, email, messaggio } = req.body;
      
      if (!nome || !email || !messaggio) {
        res.status(400).json({ 
          success: false, 
          message: "Tutti i campi sono obbligatori" 
        });
        return;
      }
      
      const contact = {
        id: contacts.length + 1,
        nome,
        email,
        messaggio,
        createdAt: new Date()
      };
      
      contacts.push(contact);
      res.json({ success: true, contact });
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