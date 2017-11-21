import {Component, ElementRef, ViewChild, OnInit, AfterViewInit} from '@angular/core';


import {AppService, RouterExtensions} from '../../modules/core/services/index';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('el') el: ElementRef;
  height: number;
  timeOut: any;

  constructor(private _appService: AppService,
              public routerExt: RouterExtensions) {
  }

  ngOnInit() {
    if (typeof document === 'object' && document.title) {
      document.title = 'Home';
      this._calcHeight();
    }
  }

  ngAfterViewInit(): void {
    this._appService.isPreloader = false;
  }

  onWindowResize(event: any) {
    if (this.timeOut) {
      window.clearTimeout(this.timeOut);
    }
    this.timeOut = window.setTimeout(() => {
      this._calcHeight();
    }, 64);
  }

  private _calcHeight() {
    if (typeof document === 'object' && document.title) {
      this.height = this.el.nativeElement.offsetParent.offsetHeight - (48 * 2);

    }
  }

}
