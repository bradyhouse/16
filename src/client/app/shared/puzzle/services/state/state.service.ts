import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {List} from 'immutable';
import 'rxjs/add/operator/share';
import {DatabaseService} from './../database/database.service';
import {StateServiceInterface} from './state-service.interface';

@Injectable()
export class StateService implements StateServiceInterface {

  databaseService: DatabaseService;

  stateEventChange$: Observable<string>;

  private _stateEvent: string;
  private _stateEventObserver: Observer<string>;

  constructor(databaseService: DatabaseService) {

    this.databaseService = databaseService;
    this._stateEvent = 'init';

    this.stateEventChange$ = new Observable<string>(
      (observer:any) => this._stateEventObserver = observer
    ).share();

  }

  get stateEvent(): string {
    return this._stateEvent;
  }

  set stateEvent(value: string) {
    if (this.stateEvent !== value) {
      this.stateEvent = value;
      if (this._stateEventObserver) {
        this._stateEventObserver.next(value);
      }
    }
  }

}
