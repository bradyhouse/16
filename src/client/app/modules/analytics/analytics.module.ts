
import { NgModule } from '@angular/core';

import { Angulartics2Module, Angulartics2Segment } from 'angulartics2';


import { ANALYTICS_PROVIDERS } from './services/index';

@NgModule({
  imports: [
    Angulartics2Module.forRoot([
      Angulartics2Segment
    ])
  ],
  providers: [
    ...ANALYTICS_PROVIDERS
  ]
})
export class AnalyticsModule {

}
