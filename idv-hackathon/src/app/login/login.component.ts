import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,private auth:AuthService) { }
  email:any="";
  pwd:any="";
  ngOnInit(): void {

  }

  loginMe(){
    this.route.navigate(['/bookAppointment/chooseDate']);
  }


  checkUser(){
    if(this.email == "idv@ee.com" && this.pwd=="idv_pwd"){
      console.log("sameer");
      this.auth.login.next(true);
      setTimeout(() => {
        this.loginMe();
      }, 9000);
    }else{
      this.auth.login.next(false);
    }
    this.loginMe();
  }
}
