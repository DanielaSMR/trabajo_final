import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { Producto } from '../producto';
import { CarritoService } from '../carrito.service';
import { ProductoCarrito } from '../productoCarrito';

@Component({
  selector: 'app-product',
  template: `
  <section class="listing">
    <img
      class="listing-img"
      [src]="producto.imageUrl"
      alt="Exterior photo of {{ producto.name }}"
      crossorigin
    />
    <div class="listing-content">
      <h2 class="listing-heading">{{ producto.name }}</h2>
      <p class="listing-location">{{ producto.description }}</p>
      <p class="listing-price">Precio: {{ producto.price }} €</p>
      <button (click)="addToCart()">+</button>
    </div>
  </section>
`,
styleUrls: ['./producto.component.css']

})
export class ProductComponent {
  @Input() producto!: Producto;

  constructor(private cartService: CarritoService) {}

  addToCart() {
    const productoCarrito: ProductoCarrito = {
      id: this.producto.id,
      name: this.producto.name,
      price: this.producto.price,
      cantidad: 1,
      image: this.producto.imageUrl
    };

    this.cartService.addToCart(productoCarrito);  // Agregar el producto al carrito
  }
}

