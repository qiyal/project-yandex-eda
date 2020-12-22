import {Component, Inject, OnInit} from '@angular/core';
import {Customer} from "../../../models/customer";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-profile-info-edit',
  templateUrl: './profile-info-edit.component.html',
  styleUrls: ['./profile-info-edit.component.scss']
})
export class ProfileInfoEditComponent implements OnInit {
  customer: Customer;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {customer: Customer}
  ) { }

  ngOnInit(): void {}

}
