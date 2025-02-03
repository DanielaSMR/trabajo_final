import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './titulo/titulo.component';
import { FiltroComponent } from './filtro/filtro.component';
import { ProductComponent } from './producto/producto.component';
import { CartaComponent } from './carta/carta.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    HeaderComponent,
    FiltroComponent,
    ProductComponent,
    CartaComponent,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
