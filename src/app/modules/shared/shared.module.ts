import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderCardComponent} from '../../components/part/order-card/order-card.component';
import {TransformFirstCharToUppercasePipe} from '../../pipes/transform-first-char-to-uppercase.pipe';
import {ConvertPhysicsValuesPipe} from '../../pipes/convert-physics-values.pipe';



@NgModule({
  declarations: [
    OrderCardComponent,
    TransformFirstCharToUppercasePipe,
    ConvertPhysicsValuesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OrderCardComponent,
    TransformFirstCharToUppercasePipe,
    ConvertPhysicsValuesPipe
  ]
})
export class SharedModule { }
