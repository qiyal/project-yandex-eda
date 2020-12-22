import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../services/customer.service";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {Customer} from '../../../models/customer';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  passwordStatus: boolean;

  constructor(
    private customerService: CustomerService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(''),
      phoneNumber: new FormControl('', [Validators.required]),
      genre: new FormControl(),
      cashBack: new FormControl(0),
      urlAvatar: new FormControl('assets/images/users/avatar/user0.jpg')
    });
  }

  createCustomer() {
    if (this.form.valid && this.passwordsValid()) {
      this.customerService.createNewCustomer(this.form.getRawValue()).subscribe(res => {
        const customer: Customer = res;
        this.auth.setUserLogin(customer.email, customer.id);
        this.router.navigate(['me/personal-info']);
      });
    }
  }

  passwordsValid() {
     return this.form.get('password').value === this.form.get('confirmPassword').value;
  }
}
