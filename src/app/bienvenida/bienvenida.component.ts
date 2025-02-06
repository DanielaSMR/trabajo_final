import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }), // Estado inicial
        animate('1s ease-out', style({ opacity: 1, transform: 'translateY(0)' })) // Estado final
      ])
    ])
  ]
})
export class BienvenidaComponent {

  constructor(private router: Router) {}

  irAHome(): void {
    this.router.navigate(['/home']); // Redirige a la página home
  }
}
