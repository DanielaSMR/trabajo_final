import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../producto';
import { FiltroComponent } from '../filtro/filtro.component';
import { ProductComponent } from '../producto/producto.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ProductoService } from '../producto.service';
import { HeaderComponent } from "../titulo/titulo.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductComponent, FiltroComponent, SidebarComponent, HeaderComponent], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{
  route: ActivatedRoute = inject(ActivatedRoute);
  
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
