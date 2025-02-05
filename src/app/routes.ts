import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

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
    component: HomeComponent
  }
];

export default routes;