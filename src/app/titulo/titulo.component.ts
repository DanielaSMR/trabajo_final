import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../producto';
import { RouterLink } from '@angular/router';
import { FiltroComponent } from '../filtro/filtro.component';
import { ProductComponent } from '../producto/producto.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ProductoService } from '../producto.service';
import { CarritoService } from '../carrito.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink,ProductComponent,FiltroComponent,SidebarComponent,HomeComponent], 
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
        <button class="new" [routerLink]="['/cart']">🛒Carrito</button>      
      </div>
    </div>

  </main>
  `,
  styleUrls: ['./titulo.component.css'], 
})

export class HeaderComponent implements OnInit{
  totalQuantity: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.totalQuantity$.subscribe((cantidad: number) => {
      this.totalQuantity = cantidad;
    });
  }
  
  
}
