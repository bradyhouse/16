import {Injector, Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import {AppService} from '../../modules/core/services/index';
import {Config} from '../../modules/core/index';

@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: [
    'about.component.css',
  ],
})
export class AboutComponent implements OnInit, AfterViewInit {

  @ViewChild('el') el: ElementRef;
  height: number;
  timeOut: any;


  private _page: any;
  private get page() {
    if (Config.PageClass) {
      if (!this._page) {
        this._page = this.injector.get(Config.PageClass);
      }

      return this._page;
    }
  }

  constructor(private _appService: AppService,
    private injector: Injector) {
  }

  ngOnInit() {
    if (typeof document === 'object' && document.title) {
      document.title = 'About';
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
      this.height = this.el.nativeElement.offsetParent.offsetHeight - (48 * 2) - 16;
    }
  }


}
