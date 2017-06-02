import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title;
  public username: any;
  public password: any;

  constructor() {
    this.title = 'this is coming from the login component';
  }

  ngOnInit() {
  }
}
