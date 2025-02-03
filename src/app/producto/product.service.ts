import { Injectable } from '@angular/core';
import { Producto } from '../producto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Producto[] = [
    { discount: 0,id: 1, name: 'Pizza', description: 'Pizza deliciosa con pepperoni', imageUrl: 'pizza.jpg' },
    { discount: 20,id: 2, name: 'Hamburguesa', description: 'Hamburguesa con queso', imageUrl: 'hamburger.jpg' },
  ];

  constructor() {}

  getAllProducts(): Producto[] {
    return this.products;
  }
}
