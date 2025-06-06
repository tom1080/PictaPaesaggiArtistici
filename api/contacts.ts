let contacts = [];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    res.status(200).json(contacts);
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
      createdAt: new Date().toISOString()
    };
    
    contacts.push(contact);
    res.status(200).json({ success: true, contact });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}