import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ProductoCarrito } from './productoCarrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  constructor(private router: Router) {}
  
  private carrito: ProductoCarrito[] = [];
  private totalQuantitySubject = new BehaviorSubject<number>(0);
  totalQuantity$ = this.totalQuantitySubject.asObservable();

  addToCart(producto: ProductoCarrito) {
    const item = this.carrito.find(p => p.id === producto.id);
    if (item) {
      item.cantidad++;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
    this.actualizarCantidadTotal();
  }

  updateQuantity(producto: ProductoCarrito, change: number) {
    const item = this.carrito.find(p => p.id === producto.id);
    if (item) {
      item.cantidad += change;
      if (item.cantidad <= 0) {
        this.carrito = this.carrito.filter(p => p.id !== producto.id);
      }
    }
    this.actualizarCantidadTotal();
  }

  getCart() {
    return this.carrito;
  }

  getTotalPrice(): number {
    return this.carrito.reduce((total, item) => total + item.price * item.cantidad, 0);
  }

  private actualizarCantidadTotal() {
    const total = this.carrito.reduce((sum, item) => sum + item.cantidad, 0);
    this.totalQuantitySubject.next(total);
  }
}
