import { HomeComponent } from './home.component';

export const HomeRoutes: Array<any> = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
