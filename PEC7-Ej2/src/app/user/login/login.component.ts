import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public username: string = '';
  public password: string = '';

  public message: string = '';
  constructor(private userService: UserService,
              private router: Router) { }

  login() {
    this.userService.login(this.username, this.password)
      .subscribe((resp) => {
        console.log('Successfully logged in');
        this.message = resp.msg;
        sessionStorage.setItem('wine-token', resp.msg);
        console.log('Token en sessionStorage');
        this.router.navigate(['wine', 'list'], {queryParams: {page: 1}});
      }, (err) => {
        console.error('Error logging in', err);
        this.message = err.error.msg;
      });
  }
}
