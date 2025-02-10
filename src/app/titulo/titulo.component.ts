import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../carrito.service';
import { ProductoCarrito } from '../productoCarrito';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink], 
  template: `
    <div class="header">
      <img src="assets/images/Fondo.png" alt="Header Image" class="header-image" />
    </div>
    <div class="content">
      <div class="info-box">
        <h1 class="store-name">Tu comida favorita</h1>
        <p class="store-info">Abierto de 9:00 - 23:00. Disfruta de la experiencia burger</p>
      </div>
      
      <div class="cart-icon">
        <span class="cart-count">{{ cantidadTotal }}</span>
        <button class="new" (click)="toggleCarrito()">🛒Carrito</button>
      </div>
    </div>

     <div class="cart-modal" *ngIf="carritoAbierto">
      <div class="cart-modal-content">
        <h2>Mi Carrito</h2>

        <div *ngIf="productosCarrito.length === 0">
          <p>No hay productos en el carrito</p>
        </div>

        <div *ngFor="let item of productosCarrito" class="cart-item">
          <img [src]="item.image" alt="Imagen del producto" class="cart-item-img" />
          <div class="cart-item-details">
            <h3>{{ item.name }}</h3>
            <p>Precio: {{ item.price }}</p>
            <p>Cantidad: {{ item.cantidad }}</p>

            <div class="quantity-control">
              <button (click)="actualizarCantidad(item, -1)">-</button>
              <span>{{ item.cantidad }}</span>
              <button (click)="actualizarCantidad(item, 1)">+</button>
            </div>
          </div>
        </div>

        <div class="cart-total">
          <h3>Total: {{ totalPrice }}</h3>
        </div>

        <button (click)="vaciarCarrito()">Vaciar Carrito</button>
        <button (click)="toggleCarrito()">Cerrar</button>
        <button class="boton-realizar" (click)="realizarPedido()" *ngIf="productosCarrito.length > 0">Realizar Pedido</button>

      </div>
    </div>
  `,
  styleUrls: ['./titulo.component.css'], 
})

export class HeaderComponent implements OnInit {
  cantidadTotal: number = 0;
  carritoAbierto: boolean = false; 
  productosCarrito: ProductoCarrito[] = [];
  totalPrice: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.totalQuantity$?.subscribe((cantidad: number) => {
      this.cantidadTotal = cantidad;
      this.productosCarrito = this.carritoService.getCart(); 
      this.calculateTotal();
    });
  }

  toggleCarrito(): void {
    this.carritoAbierto = !this.carritoAbierto;
    if (this.carritoAbierto) {
      this.productosCarrito = this.carritoService.getCart(); 
      this.calculateTotal(); 
    }
  }

  actualizarCantidad(item: ProductoCarrito, change: number): void {
    this.carritoService.actualizarCantidad(item, change);
    this.productosCarrito = this.carritoService.getCart(); 
    this.calculateTotal(); 
  }

  vaciarCarrito(): void {
    this.carritoService.vaciarCarrito(); 
    this.productosCarrito = []; 
    this.cantidadTotal = 0;
    this.totalPrice = 0;
    this.carritoAbierto = false;  
  }

  calculateTotal(): void {
    this.totalPrice = this.carritoService.getTotalPrice();
  }

  realizarPedido(): void {
    alert("Pedido realizado, llegará en 20 min");
    this.carritoService.vaciarCarrito();
    this.productosCarrito = this.carritoService.getCart();
    this.calculateTotal();
    this.carritoAbierto = false;
  }
  
}