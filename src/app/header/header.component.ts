import { Router } from '@angular/router';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedin:Boolean=false;

  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(userData=>{
      if(userData && userData.emailVerified){
        this.isLoggedin=true;
      } else {
        this.isLoggedin=false;
      }
    });
  }
  logout(user){
    firebase.auth().signOut();
    this.userservice.destroy();
    this.router.navigate(["/login"]);
  }

}
