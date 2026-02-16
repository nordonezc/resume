import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './core/pages/work/work.component';
import { OverviewComponent } from './core/pages/overview/overview.component';

const routes: Routes = [
  { path: '', component: OverviewComponent }, 
  { path: 'projects', component: WorkComponent },
  { path: '**', redirectTo: '' } // Comodín para evitar pantallas en blanco
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
