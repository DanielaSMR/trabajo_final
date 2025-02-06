import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { Producto } from '../producto';
import { CarritoService } from '../carrito.service';
import { ProductoCarrito } from '../productoCarrito';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-product',
  imports:[CommonModule],
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
      <div class="container">
        <p>Precio:</p>
        <p [ngStyle]="{ 'color': producto.discount > 0 ? 'red' : 'black' }" class="listing-price">
          {{ producto.price }} $
        </p>
      </div>
      <button (click)="addToCart()">+</button>
    </div>
  </section>
`,
styleUrls: ['./producto.component.css']

})
export class ProductComponent {
  @Input() producto!: Producto;

  constructor(
    private cartService: CarritoService,
    private productoService: ProductoService
  ) {}

  addToCart() {
    const productoCarrito: ProductoCarrito = {
      id: this.producto.id,
      name: this.producto.name,
      price: this.producto.price,
      cantidad: 1,
      image: this.producto.imageUrl
    };

    this.cartService.addToCart(productoCarrito); 
  }

}

