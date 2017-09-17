import './operators';

import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../modules/puzzle/index';
import { AnalyticsService } from '../modules/analytics/services/index';
import { LogService, AppService } from '../modules/core/services/index';
import { Config } from '../modules/core/utils/index';

@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html'
})
export class AppComponent extends BaseComponent {

  private _preloader: any;

  constructor(
    public analytics: AnalyticsService,
    public log: LogService,
    private _appService: AppService
  ) {
    super();

    log.debug(`Config env: ${Config.ENVIRONMENT().ENV}`);

    this.subscriptions.push(_appService.isPreloaderChange$
      .subscribe(
        (data:boolean) => this.togglePreloader(data)
      ));

    this._preloader = document.getElementsByClassName('preloader')[0];

  }



  private togglePreloader(isPreloader:boolean) {
    if (this._preloader) {
      if (isPreloader) {
        this._preloader.classList.remove('loaded');
      } else {
        this._preloader.classList.add('loaded');
      }
    }
  }

}
