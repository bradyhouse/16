import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {AnalyticsService} from '../../../modules/analytics/services/analytics.service';
import {LogService} from './logging/log.service';
import {Config} from '../utils/config';

@Injectable()
export class AppService {

  isPreloaderChange$: Observable<boolean>;
  isReadyChange$: Observable<boolean>;
  langChange$: Observable<string>;


  private _isReady: boolean;
  private _isReadyObserver: Observer<boolean>;
  private _isPreloader: boolean;
  private _isPreloaderObserver: Observer<boolean>;

  private _language: string;
  private _langChangeObserver: Observer<string>;

  get isReady(): boolean {
    return this._isReady;
  }

  set isReady(value: boolean) {
    this._isReady = value;
    if (this._isReadyObserver) {
      this._isReadyObserver.next(value);
    }
  }

  set isPreloader(newValue: boolean) {
    this._isPreloader = newValue;
    if (this._isPreloaderObserver) {
      this._isPreloaderObserver.next(newValue);
    }
  }

  get isPreloader(): boolean {
    return this._isPreloader;
  }


  get language(): string {
    return this._language;
  }

  set language(value: string) {
    this._language = value;
    if (this._langChangeObserver) {
      this._langChangeObserver.next(value);
    }
  }

  constructor(public analytics: AnalyticsService, public log: LogService) {
    this.log.debug(`AppService -> Config env: ${Config.ENVIRONMENT().ENV}`);

    this._isPreloader = true;
    this._isReady = false;

    this.isReadyChange$ = new Observable<boolean>(
      (observer: any) => this._isReadyObserver = observer
    ).share();

    this.isPreloaderChange$ = new Observable<boolean>(
      (observer: any) => this._isPreloaderObserver = observer
    ).share();

    this.langChange$ = new Observable<string>(
      (observer: any) => this._isPreloaderObserver = observer
    ).share();

  }
}
