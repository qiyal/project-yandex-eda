import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../models/customer";

@Injectable()
export class CustomerService {
  api = '/customers';

  constructor(
    private http: HttpClient
  ) { }

  getCustomerByLogin(login: string): Observable<Customer> {
    return this.http.get<Customer>(this.api + `/${login}`);
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.api + `/${id}`);
  }

  updateCustomerInfoFull(id: string, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.api + `/${id}`, customer);
  }

  createNewCustomer(customer: any): Observable<any> {
    return this.http.post<any>(this.api, customer);
  }
}
