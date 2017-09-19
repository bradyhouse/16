import { Component, Inject, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';


import { Config, ILang, LogService, StorageService, StorageKey } from '../../core/index';
import { IAppState } from '../../ngrx/index';
import { ElectronEventService } from '../../electron/index';
import * as multilingual from '../actions/index';
import { MultilingualService, Languages, LanguageViewHelper } from '../services/index';

@Component({
  moduleId: module.id,
  selector: 'lang-switcher',
  templateUrl: 'lang-switcher.component.html',
  styleUrls: ['lang-switcher.component.css'],
})
export class LangSwitcherComponent {

  public supportedLanguages: Array<ILang>;

  lang: string;


  constructor(
    private store: Store<IAppState>,
    private log: LogService,
    private storageService: StorageService,
    @Inject(Languages) private languages,
    @Inject(LanguageViewHelper) private viewHelper
  ) {

    if (this.storageService.getItem(StorageKey.LANGUAGE)) {
      this.lang = this.storageService.getItem(StorageKey.LANGUAGE);
    } else {
      store.take(1).subscribe((s: any) => {
        this.lang = s && s.i18n ? s.i18n.lang : '';
      });
    }
    if (Config.IS_DESKTOP()) {
      ElectronEventService.on('changeLang').subscribe((e: any) => {
        this.changeLang({ target: { value: e.detail.value } });
      });
    }
  }

  changeLang(e: any) {
    let lang = this.supportedLanguages[0].code;

    if (Config.IS_MOBILE_NATIVE()) {
      if (e) {
        lang = this.supportedLanguages[e.newIndex].code;
      }
    } else if (e && e.target) {
      this.storageService.setItem(StorageKey.LANGUAGE, e.target.value);
      lang = e.target.value;
    }
    this.log.debug(`Language change: ${lang}`);
    this.store.dispatch(new multilingual.ChangeAction(lang));
  }

  ngOnInit() {
    this.supportedLanguages = this.languages;
    if (Config.IS_MOBILE_NATIVE() && this.viewHelper) {
      this.supportedLanguages = this.viewHelper;
    }

    window.setTimeout(() => {
      if (this.storageService.getItem(StorageKey.LANGUAGE)) {
        this.changeLang({ target: { value: this.storageService.getItem(StorageKey.LANGUAGE) } });
      }
    }, 64);

  }
}
