import { UserService } from './../service/user.service';
import { MyfireService } from './../service/myfire.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private toastService:ToastrService,
    private myfire:MyfireService,
    private userservice:UserService,
    private router:Router) { }

  ngOnInit() {
  }

  submit(form:NgForm){
    const email=form.value.email;
    const password=form.value.password;
    firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then(userData=>{
      if(userData.user.emailVerified){
        this.myfire
        .getDataFromDatabase(userData.user.uid)
        .then(userDataFromDatabase=>{
          this.userservice.set(userDataFromDatabase);
          const message=`${email} has been successfully verified.`;
          this.toastService.success(message);
          this.router.navigate(["/addimages"]);
        })
        .catch(err=>console.log(err));

        // const message=`${email} has been successfully verified.`;
        // this.toastService.success(message);
      }else{
        const message=`${email} not yet verified please check your email address and please verify and login.`;
        this.toastService.error(message);
        firebase.auth().signOut();
      }
    })
    .catch(err=>{
      this.toastService.error(err.message);
    })
  }
}
