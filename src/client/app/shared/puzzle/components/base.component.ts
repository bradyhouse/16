import {OnDestroy} from '@angular/core';
import {ISubscription} from 'rxjs/Subscription';
import {Config} from '../common/config.common';


export class BaseComponent implements OnDestroy {

  subscriptions: Array<ISubscription>;

  constructor() {
    this.subscriptions = [];
  }

  ngOnDestroy() {
    this.clearSubscriptions();
  }

  protected clearSubscriptions(): void {
    this.subscriptions.map((subscription: ISubscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
  }

  protected handleErrors(error: any): any {
    this.consoleLogMsg('ERROR', error);
  }

  protected consoleLogMsg(tag: string, msg: string): void {
    if (Config.isDev === true) {
      console.log(tag + ': ' + msg);
    }
  }

}
