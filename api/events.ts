import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { insertEventSchema } from '../shared/schema';

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
      const events = await storage.getEvents();
      res.json(events);
    } else if (req.method === 'POST') {
      const validatedData = insertEventSchema.parse(req.body);
      const event = await storage.createEvent(validatedData);
      res.json({ success: true, event });
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