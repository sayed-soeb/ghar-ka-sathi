import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CleaningServiceComponent } from './components/services/cleaning-service/cleaning-service.component';
import { ElectricServiceComponent } from './components/services/electric-service/electric-service.component';
import { HomeServiceComponent } from './components/services/home-service/home-service.component';
import { PestControlComponent } from './components/services/pest-control/pest-control.component';
import { PackersMoversComponent } from './components/services/packers-movers/packers-movers.component';
import { BuySellRentComponent } from './components/services/buy-sell-rent/buy-sell-rent.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cleaning-service', component: CleaningServiceComponent },
  { path: 'electric-service', component: ElectricServiceComponent },
  { path: 'home-renovation', component: HomeServiceComponent },
  { path: 'buy-sell-rent', component: BuySellRentComponent },
  { path: 'pest-control', component: PestControlComponent },
  { path: 'packers-movers', component: PackersMoversComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
