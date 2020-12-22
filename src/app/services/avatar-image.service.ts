import { Injectable } from '@angular/core';
import {CustomerService} from './customer.service';

@Injectable()
export class AvatarImageService {
  urlAvatar = '';
  fullName = '';

  constructor(
    private customerService: CustomerService
  ) {
  }

  setUserImage(id: number) {
    this.customerService.getCustomerById(id).subscribe(res => {
      this.urlAvatar = res.urlAvatar;
      this.fullName = res.firstName + ' ' + res.lastName;
    });
  }
}

