import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private router: Router) {}
  readonly baseUrl = 'assets/images';

  listaProducto: Producto[] = [
    {
      discount: 10,
      id: 1,
      name: 'Menú Valhalla',
      description: 'Hamburguesa a elección, papas fritas y bebida',
      imageUrl: `${this.baseUrl}/Combo1.jpg`,
      price: 12.99,
      category: 'menús',
      cantidad: 1
    },
    {
      discount: 10,
      id: 2,
      name: 'Menú Ragnarök',
      description: 'Doble hamburguesa con queso, papas y refresco',
      imageUrl: `${this.baseUrl}/Combo2.jpg`,
      price: 14.99,
      category: 'menús',
      cantidad: 1
    },
    {
      discount: 10,
      id: 3,
      name: 'Menú Asgard',
      description: 'Hamburguesa de pollo, aros de cebolla y bebida',
      imageUrl: `${this.baseUrl}/Combo3.jpg`,
      price: 11.99,
      category: 'menús',
      cantidad: 1

    },

    {
      discount: 0,
      id: 1001,
      name: 'Big Viking',
      description: 'Hamburguesa con doble carne y queso cheddar',
      imageUrl: `${this.baseUrl}/BigKing.jpg`,
      price: 8.99,
      category: 'hamburguesas',
      cantidad: 1

    },
    {
      discount: 15,
      id: 1002,
      name: 'Thor Smash',
      description: 'Hamburguesa con salsa barbacoa y cebolla crujiente',
      imageUrl: `${this.baseUrl}/Thor.jpg`,
      price: 9.99,
      category: 'hamburguesas',
      cantidad: 1
    },
    {
      discount: 20,
      id: 1003,
      name: 'Odin Supreme',
      description: 'Hamburguesa triple con bacon y mayonesa especial',
      imageUrl: `${this.baseUrl}/Odin.jpg`,
      price: 11.49,
      category: 'hamburguesas',
      cantidad: 1

    },
    {
      discount: 5,
      id: 1004,
      name: 'Freya Delight',
      description: 'Hamburguesa vegetariana con aguacate y queso de cabra',
      imageUrl: `${this.baseUrl}/Freya.jpg`,
      price: 8.49,
      category: 'hamburguesas',
      cantidad: 1

    },

    {
      discount: 10,
      id: 2001,
      name: 'Asgard Fries',
      description: 'Papas fritas con queso fundido y jalapeños',
      imageUrl: `${this.baseUrl}/Patatas.jpg`,
      price: 4.99,
      category: 'entrantes',
      cantidad: 1

    },
    {
      discount: 0,
      id: 2002,
      name: 'Loki Wings',
      description: 'Alitas de pollo picantes con salsa buffalo',
      imageUrl: `${this.baseUrl}/Loki.jpg`,
      price: 6.99,
      category: 'entrantes',
      cantidad: 1

    },
    {
      discount: 12,
      id: 2003,
      name: 'Mjolnir Rings',
      description: 'Aros de cebolla crujientes con salsa de miel y mostaza',
      imageUrl: `${this.baseUrl}/Aros.jpg`,
      price: 5.49,
      category: 'entrantes',
      cantidad: 1

    },

    {
      discount: 5,
      id: 3001,
      name: 'Valhalla Grofe',
      description: 'El postre mas goloso un delicioso gofre con sirope a elegir',
      imageUrl: `${this.baseUrl}/Gofre.jpg`,
      price: 4.49,
      category: 'postres',
      cantidad: 1

    },
    {
      discount: 7,
      id: 3002,
      name: 'Bifröst Brownie',
      description: 'Brownie de chocolate con helado de vainilla',
      imageUrl: `${this.baseUrl}/Brownie.jpg`,
      price: 5.99,
      category: 'postres',
      cantidad: 1

    },
    {
      discount: 10,
      id: 3003,
      name: 'Ragnarök Ice Cream',
      description: 'Helado de frutos del bosque con crumble de galleta',
      imageUrl: `${this.baseUrl}/Helado.jpg`,
      price: 3.99,
      category: 'postres',
      cantidad: 1

    }
  ];

  getPosicionProductos(): Producto[] {
    return this.listaProducto;
  }

}
