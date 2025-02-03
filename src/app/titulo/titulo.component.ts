import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../producto/product.service';
import { Producto } from '../producto';
import { CartService } from '../carta/carta.service';
import { RouterLink } from '@angular/router';
import { FiltroComponent } from '../filtro/filtro.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, FiltroComponent], 
  template: `
    <section>
      <header>
        <h1>Tienda de Comida a Domicilio</h1>
      </header>

      <input type="text" placeholder="Buscar comida..." #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Buscar</button>
      <app-filtro (toggleDiscount)="toggleDiscount($event)"></app-filtro>
    </section>

    <section class="results">
      <div *ngFor="let product of filteredProductList" class="product-box">
        <img [src]="product.imageUrl" alt="Imagen de comida" />
        <p>{{ product.name }}</p>
        <p>{{ product.description }}</p>
        <button (click)="addToCart(product)">Añadir al carrito</button>
      </div>
    </section>
  `,
  styleUrls: ['./titulo.component.css'], 
})
export class HeaderComponent implements OnInit {
  productList: Producto[] = [];
  filteredProductList: Producto[] = [];
  showDiscounts: boolean = false;
  productService: ProductService = inject(ProductService);
  cartCount: number = 0;
  cartService: CartService = inject(CartService);

  constructor() {
    this.productList = this.productService.getAllProducts();
    this.filteredProductList = this.productList;
    this.cartCount = this.cartService.getCartCount();
  }

  ngOnInit(): void {}

  filterResults(text: string) {
    if (!text) {
      this.filteredProductList = this.productList;
      return;
    }
    this.filteredProductList = this.productList.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  toggleDiscount(showDiscounts: boolean) {
    this.showDiscounts = showDiscounts;
    if (this.showDiscounts) {
      this.filteredProductList = this.productList.filter((product) => product.discount > 0);
    } else {
      this.filteredProductList = this.productList; 
    }
  }

  addToCart(product: Producto) {
    this.cartService.addToCart(product);
    this.cartCount = this.cartService.getCartCount() + 1; 
  }
}
