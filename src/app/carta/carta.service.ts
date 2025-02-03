import { Injectable } from '@angular/core';
import { Producto } from '../producto';  // Asegúrate de tener la interfaz o clase Producto

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Producto[] = [];  // Arreglo para almacenar los productos del carrito

  constructor() {}

  // Método para añadir productos al carrito
  addToCart(product: Producto): void {
    this.cart.push(product);
    console.log(`${product.name} ha sido añadido al carrito`);
  }

  // Método para obtener el número de productos en el carrito
  getCartCount(): number {
    return this.cart.length;
  }

  // Método para obtener todos los productos en el carrito
  getCartItems(): Producto[] {
    return this.cart;
  }

  // Método para eliminar todos los productos del carrito
  clearCart(): void {
    this.cart = [];
    console.log('El carrito ha sido vaciado');
  }
}
