import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  template:`
  <h2>🡺 Secciones</h2>
  <div class="sidebar">
    <div class="sidebar-content">
      <a href="#manu">Menús</a>
      <a href="#hamburguesa">Hamburguesas</a>
      <a href="#entrante">Entrantes</a>
      <a href="#postre">Postre</a>
    </div>
  </div>
`,
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
