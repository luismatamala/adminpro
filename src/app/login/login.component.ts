import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(@Inject(Router) public router: Router) { }

  ngOnInit() {

  }

  ingresar(){
    this.router.navigate([ '/dashboard' ]);
  }
}
