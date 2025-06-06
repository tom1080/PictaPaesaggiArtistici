import { users, contacts, events, type User, type InsertUser, type Contact, type InsertContact, type Event, type InsertEvent } from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Event methods
  getEvents(): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private events: Map<number, Event>;
  private currentUserId: number;
  private currentContactId: number;
  private currentEventId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.events = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentEventId = 1;

    // Add some sample events
    this.initializeEvents();
  }

  private initializeEvents() {
    const sampleEvents: InsertEvent[] = [
      {
        title: "Forme e Colori",
        description: "Mostra collettiva di arte astratta contemporanea con opere di artisti locali e internazionali.",
        date: "15 MAR 2024",
        location: "Galleria d'Arte Moderna"
      },
      {
        title: "Workshop Creativo",
        description: "Laboratorio pratico di pittura astratta per principianti e esperti. Materiali inclusi.",
        date: "22 MAR 2024",
        location: "Studio d'Arte Centrale"
      },
      {
        title: "Conferenza: Arte e Territorio",
        description: "Incontro con critici d'arte sul ruolo dell'arte astratta nella valorizzazione culturale.",
        date: "05 APR 2024",
        location: "Auditorium Comunale"
      }
    ];

    sampleEvents.forEach(event => {
      const id = this.currentEventId++;
      const fullEvent: Event = {
        ...event,
        id,
        createdAt: new Date()
      };
      this.events.set(id, fullEvent);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values()).sort((a, b) => 
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = this.currentEventId++;
    const event: Event = {
      ...insertEvent,
      id,
      createdAt: new Date()
    };
    this.events.set(id, event);
    return event;
  }
}

export const storage = new MemStorage();
