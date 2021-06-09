import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnInit {
  constructor(private router: Router, private auth: AuthService) { }



  ngOnInit(): void {

  }


  canActivate() {
    console.log("canActivate", this.auth.allow);
    if (this.auth.allow) {
      console.log("canActivate1");
      this.router.navigate(['/login']);
    }

    return true;
  }
}
