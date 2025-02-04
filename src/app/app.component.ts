import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./titulo/titulo.component";
import { FiltroComponent } from "./filtro/filtro.component";
import { ProductComponent } from "./producto/producto.component";
import { CommonModule } from '@angular/common';
import { CarritoService } from './carrito.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <main>
    <div class="header">
      <img src="assets/images/Fondo.png" alt="Header Image" class="header-image" />
    </div>
    <div class="content">
      <div class="info-box">
        <h1 class="store-name">Burger King</h1>
        <p class="store-info">Abierto de 9:00 - 23:00. Disfruta de la experiencia burger</p>
      </div>
      
      <div class="cart-icon">
        <span class="cart-count">{{ totalQuantity }}</span>
        <button class="new" [routerLink]="['/cart']">Carrito</button>      
      </div>

      <div class="main-content">
        <section class="content">
          <app-header></app-header>
        </section>
      </div>
    </div>

    <router-outlet></router-outlet>  
  </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, FiltroComponent, ProductComponent, CommonModule,RouterModule]
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  totalQuantity: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.totalQuantity$.subscribe((cantidad: number) => {
      this.totalQuantity = cantidad;
    });
  }
}
