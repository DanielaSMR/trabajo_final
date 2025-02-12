import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './titulo/titulo.component';
import { FiltroComponent } from './filtro/filtro.component';
import { ProductComponent } from './producto/producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    AppRoutingModule,
    AppComponent,
    HeaderComponent,
    FiltroComponent,
    ProductComponent,
    HomeComponent,
    BrowserModule, 
    AppRoutingModule
  ],
})
export class AppModule {}
