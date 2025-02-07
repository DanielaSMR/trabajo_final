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
        <p [ngClass]="{ 'old-price': producto.discount > 0 }" class="listing-price">
          {{ producto.price }} $
        </p>
        <p [hidden]="producto.discount <= 0" class="new-price">
          {{ (producto.price * (1 - producto.discount / 100)).toFixed(2) }} $
        </p>
        <p [hidden]="producto.discount <= 0" class="discount">
          {{ producto.discount }} %
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
  ) {}

  anyadirCarrito() {
    const productoCarrito: ProductoCarrito = {
      id: this.producto.id,
      name: this.producto.name,
      price: this.producto.price,
      cantidad: 1,
      image: this.producto.imageUrl
    };

    this.cartService.anyadirCarrito(productoCarrito); 
  }

}

