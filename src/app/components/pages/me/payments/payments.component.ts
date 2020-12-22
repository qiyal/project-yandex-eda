import { Component, OnInit } from '@angular/core';
import {Card} from '../../../../models/card';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  cards: Card[] = [];
  showAddCardBox = false;
  cardForm: FormGroup;
  regexCardNumber = '[0-9]{16}';
  regexCardData = '(^1{1}[0-2]{1}|0{1}[1-9]{1})\\/([0-9]{2})';
  regexCardCVC = '[0-9]{3}';
  regexExample = '[0-9]{3}';

  constructor() { }

  ngOnInit(): void {
  }

  createCardForm() {
    this.cardForm = new FormGroup({
      cardNumber: new FormControl('', [Validators.required, Validators.pattern(this.regexCardNumber)]),
      data: new FormControl('', [ Validators.required, Validators.pattern(this.regexCardData)]),
      cvc: new FormControl('', [Validators.required, Validators.pattern(this.regexCardCVC)]),
      example: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
    });
  }

}
