import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './titulo/titulo.component';
import { FiltroComponent } from './filtro/filtro.component';
import { ProductComponent } from './producto/producto.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarritoService } from './carrito.service';
import { CarritoComponent } from './carrito/carrito.component';
import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    HeaderComponent,
    FiltroComponent,
    ProductComponent,
    CarritoService,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    CommonModule,
    CarritoComponent
  ]

})
export class AppModule { }