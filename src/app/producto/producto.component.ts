import { Component, Input } from '@angular/core';
import { CartService } from '../carta/carta.service'; 

@Component({
  selector: 'app-product',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductComponent {
  @Input() product: any; 

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.product); 
  }
}

