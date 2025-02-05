import { Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    title: 'Home Page'
  },
  {
     path: 'cart', 
    component: CarritoComponent, 
    title: 'Carrito Page'
  },
  {
    path: '**',
    pathMatch: 'full'
  }
];

export default routes;