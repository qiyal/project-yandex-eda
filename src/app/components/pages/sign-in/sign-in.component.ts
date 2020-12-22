import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {Customer} from '../../../models/customer';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  invalidData = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  login() {
    if (this.form.valid) {
      this.form.disable();

      this.authService.login(this.form.getRawValue()).subscribe(res => {
        const customer: Customer = res[0];

        if (customer) {
          this.authService.setUserLogin(res[0].email, res[0].id);
          this.router.navigate(['/me/personal-info']);
        } else {
          this.invalidData = true;
        }
        this.form.enable();
      });
    } else {
      this.invalidData = true;
    }
  }

}
