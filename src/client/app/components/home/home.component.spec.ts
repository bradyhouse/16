
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { t } from '../../modules/test/index';
import { NameListService, SampleEffects, reducer } from '../../modules/sample/index';
import {TEST_CORE_PROVIDERS, TEST_HTTP_PROVIDERS} from '../../modules/core/testing/index';
import { CoreModule } from '../../modules/core/core.module';
import { AnalyticsModule } from '../../modules/analytics/analytics.module';
import { MultilingualModule } from '../../modules/i18n/multilingual.module';
import { LanguageProviders } from '../../modules/i18n/index';
import { SharedModule } from '../../modules/shared/index';
import { HomeComponent } from './home.component';


const testModuleConfig = () => {
  TestBed.configureTestingModule({
    imports: [
      CoreModule,
      SharedModule,
      RouterTestingModule,
      AnalyticsModule,
      MultilingualModule,
      StoreModule.provideStore({ sample: reducer }),
      EffectsModule.run(SampleEffects)
    ],
    declarations: [HomeComponent, TestComponent],
    providers: [
      TEST_CORE_PROVIDERS(),
      TEST_HTTP_PROVIDERS(),
      LanguageProviders,
      NameListService,
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http, useFactory: function (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      }
    ]
  });
};

export function main() {
  t.describe('@Component: HomeComponent', () => {

    t.be(testModuleConfig);

    t.it('should work',
      t.async(() => {
        TestBed.compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();

            let homeInstance = fixture.debugElement.children[0].componentInstance;
            let homeDOMEl = fixture.debugElement.children[0].nativeElement;

            t.e(homeDOMEl.querySelectorAll('li').length).toEqual(4);


            t.e(homeDOMEl.querySelectorAll('li')[0].textContent.trim()).toEqual('PLAY');
            t.e(homeDOMEl.querySelectorAll('li')[1].textContent.trim()).toEqual('ABOUT');

          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-home></sd-home>'
})
class TestComponent {

}
