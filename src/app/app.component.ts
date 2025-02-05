import { Component} from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';



@Component({
  selector: 'app-root',
  template: `
  <main>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
  </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, RouterLink,RouterOutlet,HomeComponent]
})
export class AppComponent {
  title = 'homes';
  
}
