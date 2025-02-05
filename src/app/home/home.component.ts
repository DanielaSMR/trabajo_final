import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../producto';
import { FiltroComponent } from '../filtro/filtro.component';
import { ProductComponent } from '../producto/producto.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ProductoService } from '../producto.service';
import { HeaderComponent } from '../titulo/titulo.component';


@Component({
  selector: 'app-home',
  imports: [CommonModule,ProductComponent,FiltroComponent,SidebarComponent,HeaderComponent], 
  template: `
  <app-header></app-header>
  
  <div class="layout">
    <app-sidebar></app-sidebar>
    <div class="main-content">
      <section>
        <form>
          <input type="text" placeholder="🔎Que buscas?" #filter />
          <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
          <app-filtro (toggleDiscount)="toggleDiscount($event)"></app-filtro>
          <br>   
        </form>
      </section>
      <section class="results">
        <div>
          <div class="category-title" name="menu">🍲Menus</div>
          <div class="category-group">
            <app-product *ngFor="let producto of menus" [producto]="producto"></app-product>
          </div>
        </div>

        <div>
          <div class="category-title" name="hamburguesa">🍔Hamburguesas</div>
          <div class="category-group">
            <app-product *ngFor="let producto of hamburguesas" [producto]="producto"></app-product>
          </div>
        </div>

        <div>
          <div class="category-title" name="entrante">🍟Entrantes</div>
          <div class="category-group">
            <app-product *ngFor="let producto of entrantes" [producto]="producto"></app-product>
          </div>
        </div>

        <div>
          <div class="category-title" name="postre">🍨Postres</div>
          <div class="category-group">
            <app-product *ngFor="let producto of postres" [producto]="producto"></app-product>
          </div>
        </div>
      </section>
    </div>
  </div>
  `,
  styleUrls: ['./home.component.css'], 
})

export class HomeComponent{
  listaProductos : Producto[] = [];
  productoService : ProductoService = inject(ProductoService);
  listaFiltradaProductos : Producto[] = [];

  hamburguesas: Producto[] = [];
  entrantes: Producto[] = [];
  postres: Producto[] = [];
  menus: Producto[] = [];

  constructor() {
    this.listaProductos = this.productoService.getPosicionProductos();
    this.listaFiltradaProductos = this.listaProductos;

    this.hamburguesas = this.listaFiltradaProductos.filter(p => p.category === 'hamburguesas');
    this.entrantes = this.listaFiltradaProductos.filter(p => p.category === 'entrantes');
    this.postres = this.listaFiltradaProductos.filter(p => p.category === 'postres');
    this.menus = this.listaFiltradaProductos.filter(p => p.category === 'menús');
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
