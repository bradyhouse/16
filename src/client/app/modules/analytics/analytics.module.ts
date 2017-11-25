
import { NgModule } from '@angular/core';

import { Angulartics2Module} from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';



import { ANALYTICS_PROVIDERS } from './services/index';

@NgModule({
  imports: [
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])
  ],
  providers: [
    ...ANALYTICS_PROVIDERS
  ]
})
export class AnalyticsModule {

}
