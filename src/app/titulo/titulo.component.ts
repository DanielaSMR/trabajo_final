import { Component } from '@angular/core';
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
        <h1 class="store-name">Burger King</h1>
        <p class="store-info">Abierto de 9:00 - 23:00. Disfruta de la experiencia burger</p>
      </div>
      
      <div class="cart-icon">
        <span class="cart-count">{{ totalQuantity }}</span>
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

            <!-- Botones para cambiar cantidad -->
            <div class="quantity-control">
              <button (click)="updateQuantity(item, -1)">-</button>
              <span>{{ item.cantidad }}</span>
              <button (click)="updateQuantity(item, 1)">+</button>
            </div>
          </div>
        </div>

        <!-- Total -->
        <div class="cart-total">
          <h3>Total: {{ totalPrice }}</h3>
        </div>

        <!-- Botones para vaciar y cerrar -->
        <button (click)="vaciarCarrito()">Vaciar Carrito</button>
        <button (click)="toggleCarrito()">Cerrar</button>
      </div>
    </div>
  `,
  styleUrls: ['./titulo.component.css'], 
})

export class HeaderComponent{
  totalQuantity: number = 0;
  carritoAbierto: boolean = false;  // Controlar la visibilidad del modal
  productosCarrito: ProductoCarrito[] = [];
  totalPrice: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    // Suscribirse al observable para actualizar la cantidad total
    this.carritoService.totalQuantity$.subscribe((cantidad: number) => {
      this.totalQuantity = cantidad;
    });

    this.productosCarrito = this.carritoService.getCart();  // Obtener los productos del carrito
    this.calculateTotal();  // Calcular el total al inicializar
  }

  // Mostrar/ocultar el modal
  toggleCarrito(): void {
    this.carritoAbierto = !this.carritoAbierto;
  }

  // Actualizar la cantidad de un producto en el carrito
  updateQuantity(item: ProductoCarrito, change: number) {
    this.carritoService.updateQuantity(item, change);
    this.productosCarrito = this.carritoService.getCart();  // Actualizar productos del carrito
    this.calculateTotal();  // Recalcular el total
  }

  vaciarCarrito(): void {
    this.carritoService.vaciarCarrito();  // Llamada al servicio para vaciar el carrito
    this.productosCarrito = this.carritoService.getCart();  // Actualiza la lista de productos en el carrito
    this.carritoAbierto = false;  // Cierra el modal después de vaciar el carrito
  }

  // Calcular el total de la compra
  calculateTotal() {
    this.totalPrice = this.carritoService.getTotalPrice();
  }
}