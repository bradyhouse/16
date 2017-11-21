import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/share';

@Injectable()
export class DeepLinkService {
  params:any;
  hash:string;
  path:string;
  readyChange$:Observable<boolean>;
  private _readyObserver:Observer<boolean>;

  constructor(private _location: Location) {
    this.params = {};
    this.readyChange$ = new Observable<boolean>(
      (observer:any) => this._readyObserver = observer
    ).share();
  }

  read() {
    let hash:string = window.location.hash.substring(2);

    if (hash) {
      let pathSplit:string[] = hash.split('?');
      this.path = pathSplit[0];
      if (pathSplit.length > 1) {
        this.params = {};
        this.hash = pathSplit[1];
        let paramSplit:string[] = [];
        try {
          paramSplit = decodeURIComponent(this.hash).split('&');
        } catch (e) {
          this.reset();
        }
        paramSplit.forEach((pair:any) => {
          let pairSplit:any = pair.split('=');
          if (pairSplit.length > 1) {
            try {
              let value:any = JSON.parse(pairSplit[1]);
              if (value.constructor === Array) {
                value.forEach((item:any, index:number) => {
                  value[index] = decodeURIComponent(value[index]);
                });
              } else {
                value = decodeURIComponent(value);
              }
              if (value === 'true') {
                value = true;
              } else if (value === 'false') {
                value = false;
              }
              this.params[pairSplit[0]] = value;
            } catch (e) {
              this.params[pairSplit[0]] = null;
            }
          }
        });
      }
    }

    if (this._readyObserver) {
      this._readyObserver.next(true);
    }
  }

  generate(params:any, route:string = null) {
    let hashParams:string = '';
    for (let key in params) {
      let value:any = params[key];
      if(value !== undefined && value !== null) {
        if (value.constructor === Array) {
          value = value.map((item:any, index:number) => {
            return encodeURIComponent(item);
          });
        } else if (value.constructor === Object) {
          value = encodeURIComponent(JSON.stringify(value));
        } else {
          value = encodeURIComponent(value);
        }

        if (hashParams) {
          hashParams += '&';
        }
        hashParams += key + '=' + JSON.stringify(value);
      }
    }

    if (hashParams) {
      hashParams = '?' + encodeURIComponent(hashParams);
    }

    if(!route) {
      route =  window.location.hash.split('?')[0];
    }

    return window.location.href.split('#')[0] + route + hashParams;
  }

  reset() {
    this._location.replaceState(this._location.path().split('?')[0]);
  }

  updateStateService(stateService:any) {
    setTimeout(() => {
      stateService.isReady = false;
      stateService.stateEvent = 'deeplink';
      for (let key in this.params) {
        if (key in stateService) {
          stateService[key] = this.params[key];
        }
      }
      stateService.stateEvent = null;
      stateService.isReady = true;
    }, 100);
  }

  getRoute():string {
    let route:string = '';
    let hash:string = window.location.hash.substring(2);
    if (hash) {
      route = hash.split('?')[0];
    }

    return route;
  }
}
