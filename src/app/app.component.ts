import { Component } from '@angular/core';
import { CartService } from './carta/carta.service';
import { HeaderComponent } from "./titulo/titulo.component";
import { FiltroComponent } from "./filtro/filtro.component";
import { ProductComponent } from "./producto/producto.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, FiltroComponent, ProductComponent]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  cartCount: number = 0;

  products = [
    { name: 'Pizza', description: 'Deliciosa pizza de pepperoni', image: 'pizza.jpg' },
    { name: 'Hamburguesa', description: 'Hamburguesa con queso y bacon', image: 'hamburguesa.jpg' },
    { name: 'Ensalada', description: 'Ensalada fresca con aderezo', image: 'ensalada.jpg' },
  ];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartCount = this.cartService.getCartCount();
  }

  updateCartCount() {
    this.cartCount = this.cartService.getCartCount();
  }
}

