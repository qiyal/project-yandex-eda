import { Component, OnInit } from '@angular/core';
import {Card} from '../../../../models/card';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CreditCardService} from '../../../../services/credit-card.service';

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

  constructor(
    private cardService: CreditCardService
  ) { }

  ngOnInit(): void {
    this.getUserCards();
  }

  getUserCards() {
    const userId = +localStorage.getItem('userId');
    this.cardService.getUserCreditCards(userId).subscribe(res => {
      this.cards = res;
    });
  }

  createCardForm() {
    const userId = localStorage.getItem('userId');

    this.cardForm = new FormGroup({
      cardNumber: new FormControl('', [Validators.required, Validators.pattern(this.regexCardNumber)]),
      data: new FormControl('', [ Validators.required, Validators.pattern(this.regexCardData)]),
      cvc: new FormControl('', [Validators.required, Validators.pattern(this.regexCardCVC)]),
      userId: new FormControl(userId)
    });
  }

  toogleAddNewBtn() {
    if (this.showAddCardBox) {
      this.showAddCardBox = false;
    } else {
      this.createCardForm();
      this.showAddCardBox = true;
    }
  }

  addCart() {
    const userId = +localStorage.getItem('userId');
    this.cardService.getCreditCardByNumber(this.cardForm.get('cardNumber').value, userId).subscribe(res1 => {
      const ans1 = res1;

      if (ans1.length === 0) {
        const userId = +localStorage.getItem('userId');

        this.cardService.postCart(new Card(null, this.cardForm.get('cardNumber').value, this.cardForm.get('data').value, this.cardForm.get('cvc').value, userId)).subscribe(res2 => {
          this.getUserCards();
          this.showAddCardBox = false;
        });
      }
    });
  }

  deleteCard(id: number) {
    this.cardService.deleteCard(id).subscribe(() => {
      this.getUserCards();
    });
  }
}
