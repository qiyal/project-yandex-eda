import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {AvatarImageService} from '../../../services/avatar-image.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private avatarImageService: AvatarImageService
  ) {}

  ngOnInit(): void {}

  getImage(): string {
    return this.avatarImageService.urlAvatar;
  }

  getFullName(): string {
    return this.avatarImageService.fullName;
  }

  isShow(): boolean {
    return !this.authService.isAuth();
  }

  navToSignUp() {
    this.router.navigate(['/sign-up']);
  }

  navToSignIn() {
    this.router.navigate(['/sign-in']);
  }

  navToProfile() {
    this.router.navigate(['/me/personal-info']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
