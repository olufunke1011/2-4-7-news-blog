import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';

const routes: Routes = [
  {
    path: "business",
    component: BusinessComponent
  },

  {
    path: "entertainment",
    component: EntertainmentComponent
  }

  {
    path: "health",
    component: HealthComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
