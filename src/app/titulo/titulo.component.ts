import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../producto';
import { RouterLink } from '@angular/router';
import { FiltroComponent } from '../filtro/filtro.component';
import { ProductComponent } from '../producto/producto.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ProductoService } from '../producto.service';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink,ProductComponent,FiltroComponent,SidebarComponent], 
  template: `
   <div class="header">
      <img src="assets/images/Fondo.png" alt="Header Image" class="header-image" />
    </div>

    <div class="content">
      <div class="info-box">
        <h1 class="store-name">Burger King</h1>
        <p class="store-info">Abierto de 9:00 - 23:00. Disfruta de la experiencia burger</p>
      </div>

      <div class="cart-icon">
        <span class="cart-count">{{ totalQuantity }}</span>
        <button class="new" [routerLink]="['/cart']">🛒Carrito</button>      
      </div>

      <div class="main-content">
        <section>
          <form>
            <input type="text" placeholder="🔎 ¿Qué buscas?" #filter />
            <button class="primary" type="button" (click)="filterResults(filter.value)">Buscar</button>
            <app-filtro (toggleDiscount)="toggleDiscount($event)"></app-filtro>
          </form>
        </section>

        <section class="results">
          <div>
            <div class="category-title" name="menu">🍲 Menús</div>
            <div class="category-group">
              <app-product *ngFor="let producto of menus" [producto]="producto"></app-product>
            </div>
          </div>

          <div>
            <div class="category-title" name="hamburguesa">🍔 Hamburguesas</div>
            <div class="category-group">
              <app-product *ngFor="let producto of hamburguesas" [producto]="producto"></app-product>
            </div>
          </div>

          <div>
            <div class="category-title" name="entrante">🍟 Entrantes</div>
            <div class="category-group">
              <app-product *ngFor="let producto of entrantes" [producto]="producto"></app-product>
            </div>
          </div>

          <div>
            <div class="category-title" name="postre">🍨 Postres</div>
            <div class="category-group">
              <app-product *ngFor="let producto of postres" [producto]="producto"></app-product>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styleUrls: ['./titulo.component.css'], 
})

export class HeaderComponent implements OnInit{
  listaProductos : Producto[] = [];
  productoService : ProductoService = inject(ProductoService);
  carritoService : CarritoService = inject(CarritoService);
  listaFiltradaProductos : Producto[] = [];

  hamburguesas: Producto[] = [];
  entrantes: Producto[] = [];
  postres: Producto[] = [];
  menus: Producto[] = [];

  totalQuantity: number = 0;

  constructor() {
    this.listaProductos = this.productoService.getPosicionProductos();
    this.listaFiltradaProductos = this.listaProductos;

    this.hamburguesas = this.listaFiltradaProductos.filter(p => p.category === 'hamburguesas');
    this.entrantes = this.listaFiltradaProductos.filter(p => p.category === 'entrantes');
    this.postres = this.listaFiltradaProductos.filter(p => p.category === 'postres');
    this.menus = this.listaFiltradaProductos.filter(p => p.category === 'menús');
  }


  ngOnInit(): void {
    this.carritoService.totalQuantity$.subscribe((cantidad: number) => {
      this.totalQuantity = cantidad;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.listaFiltradaProductos = this.listaProductos;
    } else {
      this.listaFiltradaProductos = this.listaProductos.filter((producto) =>
        producto.name.toLowerCase().includes(text.toLowerCase())
      );
    }
  
    this.actualizarCategorias();
  }
  

  toggleDiscount(showOnlyDiscounted: boolean) {
    if (showOnlyDiscounted) {
      this.listaFiltradaProductos = this.listaProductos.filter(producto => producto.discount > 0);
    } else {
      this.listaFiltradaProductos = [...this.listaProductos];
    }
  
    this.actualizarCategorias();
  }
  
  actualizarCategorias() {
    this.hamburguesas = this.listaFiltradaProductos.filter(p => p.category === 'hamburguesas');
    this.entrantes = this.listaFiltradaProductos.filter(p => p.category === 'entrantes');
    this.postres = this.listaFiltradaProductos.filter(p => p.category === 'postres');
    this.menus = this.listaFiltradaProductos.filter(p => p.category === 'menús');
  }
  
  
}
