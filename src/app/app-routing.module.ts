import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProComponent } from './pro/pro.component'
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', 
    component: HomeComponent },
  {
    path: 'pro',
    component: ProComponent
  },

  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
