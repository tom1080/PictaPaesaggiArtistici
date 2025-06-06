import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { insertContactSchema, insertEventSchema } from '../shared/schema';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const url = new URL(req.url || '', `http://${req.headers.host}`);
  const pathname = url.pathname;

  try {
    // Routes
    if (pathname === '/api/events' && req.method === 'GET') {
      const events = await storage.getEvents();
      res.json(events);
    } else if (pathname === '/api/events' && req.method === 'POST') {
      const validatedData = insertEventSchema.parse(req.body);
      const event = await storage.createEvent(validatedData);
      res.json({ success: true, event });
    } else if (pathname === '/api/contacts' && req.method === 'GET') {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } else if (pathname === '/api/contacts' && req.method === 'POST') {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, contact });
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  } catch (error: any) {
    res.status(400).json({ 
      success: false, 
      message: error.message || "Errore del server" 
    });
  }
}