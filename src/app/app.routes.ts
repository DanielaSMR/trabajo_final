import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'cart', component: CarritoComponent }
];

export default routes;