import { Component, inject, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { ProductoCarrito } from '../productoCarrito';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CarritoComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);

  cartItems: ProductoCarrito[] = [];
  totalPrice: number = 0;


  constructor(private cartService: CarritoService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();  // Cargar los productos del carrito
    this.calculateTotal();  // Calcular el total
  }

  updateQuantity(item: ProductoCarrito, change: number) {
    this.cartService.updateQuantity(item, change);  // Actualiza la cantidad en el servicio
    this.cartItems = this.cartService.getCart();  // Actualiza la lista de productos
    this.calculateTotal();  // Recalcula el total
  }

  calculateTotal() {
    this.totalPrice = this.cartService.getTotalPrice(); 
  }

  placeOrder() {
    alert('Pedido realizado con éxito!');
  }
}
