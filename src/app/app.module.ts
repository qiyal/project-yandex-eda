import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/part/header/header.component';
import { FooterComponent } from './components/part/footer/footer.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import {AuthService} from './services/auth.service';
import { HomeComponent } from './components/pages/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RestaurantCardComponent } from './components/part/restaurant-card/restaurant-card.component';
import { CarouselComponent } from './components/part/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import {CustomerService} from './services/customer.service';
import { ProfileInfoEditComponent } from './components/dialogs/profile-info-edit/profile-info-edit.component';
import {AvatarImageService} from './services/avatar-image.service';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {RestaurantService} from "./services/restaurant.service";
import {OrderService} from './services/order.service';
import { SearchComponent } from './components/part/search/search.component';
import {CreditCardService} from './services/credit-card.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SignInComponent,
        SignUpComponent,
        HomeComponent,
        RestaurantCardComponent,
        CarouselComponent,
        ProfileInfoEditComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        MatChipsModule,
        MatIconModule,
        MatMenuModule
    ],
    providers: [
      AuthService,
      AvatarImageService,
      CustomerService,
      RestaurantService,
      OrderService,
      CreditCardService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
