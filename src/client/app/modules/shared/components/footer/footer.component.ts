
import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';

import { IEvent, EventType } from '../../../core/index';

@Component({
  moduleId: module.id,
  selector: 'sd-footer',
  templateUrl: 'footer.component.html',
  styleUrls: [
    'footer.component.css',
  ],
})
export class FooterComponent {

  @Output() events: EventEmitter<IEvent>;

  constructor() {
    this.events = new EventEmitter();
  }

  onClick() {
    this.events.emit({
      type: EventType.SHAKE,
      data: null
    });
  }

}
