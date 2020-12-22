import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MeRoutingModule} from './me-routing.module';
import {MeComponent} from '../../components/pages/me/me.component';
import {PersonalInfoComponent} from '../../components/pages/me/personal-info/personal-info.component';
import {PaymentsComponent} from '../../components/pages/me/payments/payments.component';
import {AddressesComponent} from '../../components/pages/me/addresses/addresses.component';
import {OrderHistoryComponent} from '../../components/pages/me/order-history/order-history.component';
import {MyPromoCodesComponent} from '../../components/pages/me/my-promo-codes/my-promo-codes.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MeComponent,
    PersonalInfoComponent,
    PaymentsComponent,
    AddressesComponent,
    OrderHistoryComponent,
    MyPromoCodesComponent
  ],
  imports: [
    CommonModule,
    MeRoutingModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MeModule { }
