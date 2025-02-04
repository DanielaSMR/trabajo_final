import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../producto';
import { CartService } from '../carta/carta.service';
import { RouterLink } from '@angular/router';
import { FiltroComponent } from '../filtro/filtro.component';
import { ProductComponent } from '../producto/producto.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink,ProductComponent,FiltroComponent,SidebarComponent], 
  template: `
  <div class="layout">
    <app-sidebar></app-sidebar>
    <div class="main-content">
      <section>
        <form>
          <input type="text" placeholder="Filter by city" />
          <button class="primary" type="button">Search</button>
          <app-filtro (toggleDiscount)="toggleDiscount($event)"></app-filtro>      
        </form>
      </section>
      <section class="results">
        <app-product *ngFor="let producto of producto"
          [producto]="producto"></app-product>
      </section>
    </div>
  </div>
  `,
  styleUrls: ['./titulo.component.css'], 
})

export class HeaderComponent{
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  producto: Producto[] = [
    // 🍔 Hamburguesas
    {
      discount: 0,
      id: 1001,
      name: 'Big Viking',
      description: 'Hamburguesa con doble carne y queso cheddar',
      imageUrl: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      price: 8.99
    },
    {
      discount: 15,
      id: 1002,
      name: 'Thor Smash',
      description: 'Hamburguesa con salsa barbacoa y cebolla crujiente',
      imageUrl: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      price: 9.99,
    },
    {
      discount: 20,
      id: 1003,
      name: 'Odin Supreme',
      description: 'Hamburguesa triple con bacon y mayonesa especial',
      imageUrl: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      price: 11.49,
    },
    {
      discount: 5,
      id: 1004,
      name: 'Freya Delight',
      description: 'Hamburguesa vegetariana con aguacate y queso de cabra',
      imageUrl: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      price: 8.49,
    },
  
    {
      discount: 10,
      id: 2001,
      name: 'Asgard Fries',
      description: 'Papas fritas con queso fundido y jalapeños',
      imageUrl: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      price: 4.99, 
    },
    {
      discount: 0,
      id: 2002,
      name: 'Loki Wings',
      description: 'Alitas de pollo picantes con salsa buffalo',
      imageUrl: `${this.baseUrl}/loki-wings.jpg`,
      price: 6.99,  // Precio aproximado
    },
    {
      discount: 12,
      id: 2003,
      name: 'Mjolnir Rings',
      description: 'Aros de cebolla crujientes con salsa de miel y mostaza',
      imageUrl: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      price: 5.49,
    },
  
    {
      discount: 5,
      id: 3001,
      name: 'Valhalla Cheesecake',
      description: 'Tarta de queso con caramelo y nueces',
      imageUrl: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      price: 4.49, 
    },
    {
      discount: 7,
      id: 3002,
      name: 'Bifröst Brownie',
      description: 'Brownie de chocolate con helado de vainilla',
      imageUrl: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      price: 5.99,
    },
    {
      discount: 10,
      id: 3003,
      name: 'Ragnarök Ice Cream',
      description: 'Helado de frutos del bosque con crumble de galleta',
      imageUrl: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      price: 3.99, 
    }
  ];
  
  toggleDiscount(showOnlyDiscounted: boolean) {
    if (showOnlyDiscounted) {
      this.producto = this.producto.filter(producto => producto.discount > 0);
    } else {
      this.producto = [...this.producto]; 
    }
  }
}
