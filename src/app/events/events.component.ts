import { Component, OnInit } from '@angular/core';
import { EventsService } from './model/events.service';
import { Event } from './model/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private data:EventsService) { }

  public events:Event[];

  ngOnInit() {
    this.events = this.data.getEvents();
  }

}
