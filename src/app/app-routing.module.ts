import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AzulComponent } from './jeux/azul/azul.component';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  //{ path: '**', component: AccueilComponent }, // si adresse tapée inexistante
  { path: 'azul', component: AzulComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
