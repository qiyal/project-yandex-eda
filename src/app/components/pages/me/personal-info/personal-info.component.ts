import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../../models/customer";
import {AuthService} from "../../../../services/auth.service";
import {CustomerService} from "../../../../services/customer.service";
import {MatDialog} from "@angular/material/dialog";
import {ProfileInfoEditComponent} from "../../../dialogs/profile-info-edit/profile-info-edit.component";
import {AvatarImageService} from '../../../../services/avatar-image.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  customer: Customer;

  constructor(
    private auth: AuthService,
    private customerService: CustomerService,
    private dialog: MatDialog,
    private avatarImageService: AvatarImageService
  ) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer() {
    this.customerService.getCustomerById(this.auth.authUserId).subscribe(res => {
      this.customer = res;
      console.log(this.customer);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ProfileInfoEditComponent, {
      data: { customer: this.customer }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customerService.updateCustomerInfoFull(result.customer.id, result.customer).subscribe(res => {
          this.customer = res;
          this.avatarImageService.fullName = res.firstName + ' ' + res.lastName;
        });
      } else {
        this.getCustomer();
      }
    });
  }

}
