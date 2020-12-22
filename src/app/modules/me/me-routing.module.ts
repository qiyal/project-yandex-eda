import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MeComponent} from '../../components/pages/me/me.component';
import {PersonalInfoComponent} from '../../components/pages/me/personal-info/personal-info.component';
import {PaymentsComponent} from '../../components/pages/me/payments/payments.component';
import {AddressesComponent} from '../../components/pages/me/addresses/addresses.component';
import {OrderHistoryComponent} from '../../components/pages/me/order-history/order-history.component';
import {MyPromoCodesComponent} from '../../components/pages/me/my-promo-codes/my-promo-codes.component';

const meRouters: Routes = [
  {
    path: '',
    component: MeComponent,
    children: [
      {
        path: 'personal-info',
        component: PersonalInfoComponent
      },
      {
        path: 'payments',
        component: PaymentsComponent
      },
      {
        path: 'addresses',
        component: AddressesComponent
      },
      {
        path: 'order-history',
        component: OrderHistoryComponent
      },
      {
        path: 'my-promo-codes',
        component: MyPromoCodesComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(meRouters)
  ],
  exports: [
    RouterModule
  ]
})
export class MeRoutingModule { }
