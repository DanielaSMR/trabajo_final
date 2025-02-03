import { CartService } from '../carta/carta.service'; 
import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { Producto } from '../producto';

@Component({
  selector: 'app-product',
  template:`
  <section class="listing">
      <img
        class="listing-img"
        [src]="producto.imageUrl"
        alt="Exterior photo of {{ producto.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ producto.name }}</h2>
      <p class="listing-location">{{ producto.description }}</p>
      <p class="listing-location">{{ producto.price }}</p>
    </section>
  `,
  styleUrls: ['./producto.component.css']
})
export class ProductComponent {
  @Input() producto!: Producto; 

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.producto); 
  }
}

