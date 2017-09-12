// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

// app
import { LogService } from '../../modules/core/services/index';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('el') el: ElementRef;
  height: number;

  constructor(public log: LogService) {}

  ngOnInit() {

    this.log.debug('home > el parent offsetHeight: ' + this.el.nativeElement.offsetParent.offsetHeight);

    this.log.debug('home > el offsetHeight: ' + this.el.nativeElement.offsetHeight);

    if (typeof document == 'object' && document.title) {
      document.title = 'home';
      this.height = this.el.nativeElement.offsetParent.offsetHeight - (48 * 2);
    }


  }


}
