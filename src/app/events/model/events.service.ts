import { Injectable } from '@angular/core';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  private events:Event[] = [
    { eventId: 1, heading: '$1 000 000 prize pool!', iconPath: '../assets/images/events/icons/icon.svg', description: 'Soon we will hold the largest event ever seen in this world.', bg: '../assets/images/events//cards/bg.svg' },
    { eventId: 2, heading: 'Audi TT — competitive prize!', iconPath: '../assets/images/events/icons/icon.svg', description: 'Soon we will hold the largest event ever seen in this world.', bg: '../assets/images/events/cards/card1.png' },
    { eventId: 3, heading: 'Global update', iconPath: '../assets/images/events/icons/icon.svg', description: 'Soon we will hold the largest event ever seen in this world.', bg: '../assets/images/events/cards/bg.svg' },
    { eventId: 4, heading: 'Cryptocurrency comes back!', iconPath: '../assets/images/events/icons/icon.svg', description: 'Soon we will hold the largest event ever seen in this world.', bg: '../assets/images/events/cards/card2.png' },
    { eventId: 5, heading: '$1 000 000 prize pool!', iconPath: '../assets/images/events/icons/icon.svg', description: 'Soon we will hold the largest event ever seen in this world.', bg: '../assets/images/events/cards/card3.png' }
  ];

  public getEvents() {
    return this.events;
  }
}
