import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  template:`
  <h2>Secciones</h2>
  <div class="sidebar">
    <div class="sidebar-content">
      <a href="#menus">Menús</a>
      <a href="#hamburguesas">Hamburguesas</a>
      <a href="#entrantes">Entrantes</a>
      <a href="#bebidas">Bebidas</a>
    </div>
  </div>
`,
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
