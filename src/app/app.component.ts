import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';



@Component({
  selector: 'app-root',
  template: `
  <main>
      <div class="main-content">
        <section class="content">
          <app-home></app-home>
        </section>
      </div>
  </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [RouterModule,HomeComponent]
})
export class AppComponent {
  title = 'homes';
}
