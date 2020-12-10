import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "business",
    component: BusinessComponent
  },

  {
    path: "entertainment",
    component: EntertainmentComponent
  },

  {
    path: "health",
    component: HealthComponent
  },
  
  {
    path: "home",
    component: HomeComponent
  },
  
  {
    path: "login",
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
