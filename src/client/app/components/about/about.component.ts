import {Injector, Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {Config} from '../../modules/core/index';

@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: [
    'about.component.css',
  ],
})
export class AboutComponent implements OnInit {

  @ViewChild('el') el: ElementRef;
  height: number;
  timeOut: any;


  // Just one way you could handle the {N} `ui/page` Page class
  // in a shared component...
  private _page: any;
  private get page() {
    if (Config.PageClass) {
      if (!this._page) {
        this._page = this.injector.get(Config.PageClass);
      }

      return this._page;
    }
  }

  constructor(private injector: Injector) {
    // This is here as an example
    // if (this.page) {
    //   this.page.actionBarHidden = true;
    // }
  }

  ngOnInit() {
    if (typeof document === 'object' && document.title) {
      document.title = 'About';
      this._calcHeight();
    }
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
