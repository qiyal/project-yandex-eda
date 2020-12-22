import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Customer} from '../models/customer';
import {AvatarImageService} from './avatar-image.service';

@Injectable()
export class AuthService {

  api = '/customers';
  auth = false;
  authUserLogin: string;
  authUserId: number;

  constructor(
    private http: HttpClient,
    private avatarImageService: AvatarImageService
  ) {
    this.init();
  }

  init() {
    const login = localStorage.getItem('userLogin');
    const id = localStorage.getItem('userId');
    if (login) {
      this.setUserLogin(login, +id);
    }
  }

  isAuth(): boolean {
    return this.auth;
  }

  setUserLogin(login: string, id: number) {
    localStorage.setItem('userLogin', login);
    localStorage.setItem('userId', id + '');
    this.auth = true;
    this.authUserLogin = login;
    this.authUserId = id;
    this.avatarImageService.setUserImage(id);
  }

  login(data): Observable<Customer> {
    return this.http.get<Customer>(this.api + `?email=${data.email}&password=${data.password}`);
  }

  logout() {
    this.auth = false;
    this.authUserLogin = null;
    this.authUserId = null;
    localStorage.clear();
  }
}
