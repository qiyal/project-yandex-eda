import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderCardComponent} from '../../components/part/order-card/order-card.component';
import {TransformFirstCharToUppercasePipe} from '../../pipes/transform-first-char-to-uppercase.pipe';
import {ConvertPhysicsValuesPipe} from '../../pipes/convert-physics-values.pipe';
import {CreditCardComponent} from '../../components/part/credit-card/credit-card.component';



@NgModule({
  declarations: [
    OrderCardComponent,
    TransformFirstCharToUppercasePipe,
    ConvertPhysicsValuesPipe,
    CreditCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OrderCardComponent,
    TransformFirstCharToUppercasePipe,
    ConvertPhysicsValuesPipe,
    CreditCardComponent
  ]
})
export class SharedModule { }
