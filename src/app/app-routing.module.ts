import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { PoliticsComponent } from './politics/politics.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SportsComponent } from './sports/sports.component';

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
  
  {
    path: "news",
    component: NewsComponent
  },

  {
    path: "politics",
    component: PoliticsComponent
  },

  {
    path: "sign-up",
    component: SignUpComponent
  },

  {
    path: "sports",
    component: SportsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
