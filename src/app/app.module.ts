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
import { AboutUsComponent } from './components/services/about-us/about-us.component';
import { ContactComponent } from './components/services/contact/contact.component';
import { PaintingServiceComponent } from './components/services/painting-service/painting-service.component';
import { CarpentryServiceComponent } from './components/services/carpentry-service/carpentry-service.component';
import { PlumbingServiceComponent } from './components/services/plumbing-service/plumbing-service.component';
import { PropertyDetailComponent } from './components/services/property-detail/property-detail.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { MyServicesComponent } from './components/myservices/myservices.component';
import { HttpClientModule } from '@angular/common/http';
import { SettingsComponent } from './settings/settings.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
    LoaderComponent,
    AboutUsComponent,
    ContactComponent,
    PaintingServiceComponent,
    CarpentryServiceComponent,
    PlumbingServiceComponent,
    PropertyDetailComponent,
    OurservicesComponent,
    MyServicesComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule ,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
