// angular
import {NgModule} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {Http} from '@angular/http';

// libs
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {TranslateLoader} from '@ngx-translate/core';

// app
import {APP_COMPONENTS, AppComponent} from './app/components/index';
import {routes} from './app/components/app.routes';

// feature modules
import {CoreModule} from './app/shared/core/core.module';
import {AppReducer} from './app/shared/ngrx/index';
import {AnalyticsModule} from './app/shared/analytics/analytics.module';
import {PuzzleModule} from './app/shared/puzzle/puzzle.module';

// config
import {Config, WindowService, ConsoleService} from './app/shared/core/index';
Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;
if (String('<%= BUILD_TYPE %>') === 'dev') {
  // only output console logging in dev mode
  Config.DEBUG.LEVEL_4 = true;
}


let routerModule = RouterModule.forRoot(routes);

if (String('<%= TARGET_DESKTOP %>') === 'true') {
  Config.PLATFORM_TARGET = Config.PLATFORMS.DESKTOP;
  // desktop (electron) must use hash
  routerModule = RouterModule.forRoot(routes, {useHash: true});
}

declare var window, console;

// For AoT compilation to work:
export function win() {
  return window;
}
export function cons() {
  return console;
}

let DEV_IMPORTS: any[] = [];

if (String('<%= BUILD_TYPE %>') === 'dev') {
  DEV_IMPORTS = [
    ...DEV_IMPORTS,
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ];
}

@NgModule({
  imports: [
    BrowserModule,
    CoreModule.forRoot([
      {provide: WindowService, useFactory: (win)},
      {provide: ConsoleService, useFactory: (cons)}
    ]),
    routerModule,
    AnalyticsModule,
    PuzzleModule,
    StoreModule.provideStore(AppReducer),
    DEV_IMPORTS
  ],
  declarations: [
    APP_COMPONENTS
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
    }
  ],
  bootstrap: [AppComponent]
})

export class WebModule {
}
