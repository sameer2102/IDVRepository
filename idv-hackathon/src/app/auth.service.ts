import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  login= new Subject();
  allow: boolean = false;
  constructor() {
    this.login.subscribe((value: boolean) => {
      this.allow = value;
      console.log("s",this.allow  );
    });
  }


  ngOnInit(): void {
    this.login.subscribe((value: boolean) => {
      console.log("s",this.allow  );
      this.allow = value;
    });
  }


}
