import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./titulo/titulo.component";
import { FiltroComponent } from "./filtro/filtro.component";
import { ProductComponent } from "./producto/producto.component";
import { CommonModule } from '@angular/common';
import { CarritoService } from './carrito.service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <main>
      <section class="content">
        <app-header></app-header>
      </section>
  </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, ProductComponent, CommonModule,RouterModule,RouterLink]
})
export class AppComponent {
  title = 'homes';
  
}
