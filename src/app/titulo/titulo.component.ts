import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink], 
  template: `
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
    </div>
  `,
  styleUrls: ['./titulo.component.css'], 
})

export class HeaderComponent{
    
  totalQuantity: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.totalQuantity$.subscribe((cantidad: number) => {
      this.totalQuantity = cantidad;
    });
  }
}