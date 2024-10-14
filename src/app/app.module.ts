import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CleaningServiceComponent } from './components/services/cleaning-service/cleaning-service.component';
import { ElectricServiceComponent } from './components/services/electric-service/electric-service.component';
import { HomeServiceComponent } from './components/services/home-service/home-service.component';
import { BuySellRentComponent } from './components/services/buy-sell-rent/buy-sell-rent.component';
import { PestControlComponent } from './components/services/pest-control/pest-control.component';
import { PackersMoversComponent } from './components/services/packers-movers/packers-movers.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CleaningServiceComponent,
    ElectricServiceComponent,
    HomeServiceComponent,
    BuySellRentComponent,
    PestControlComponent,
    PackersMoversComponent,
    LoginComponent,
    RegisterComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
