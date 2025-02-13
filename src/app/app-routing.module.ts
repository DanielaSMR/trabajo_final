import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

export const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],  
  exports: [RouterModule],
})
export class AppRoutingModule {}
