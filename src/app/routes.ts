import {  Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    title: 'Home Page'
  },
  {
    path: '**',
    pathMatch: 'full'
  }
];

export default routes;