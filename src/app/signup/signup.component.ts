import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private toastr:ToastrService,private router:Router) { }

  ngOnInit() {
  }

  submit(form:NgForm){
    const email=form.value.email;
    const fullname=form.value.fullname;
    const username=form.value.username;
    const password=form.value.password;
    
    firebase.auth().createUserWithEmailAndPassword(email,password).then(userData=>{
      console.log(userData);
      userData.user.sendEmailVerification();
      const message=`Notification email has been sent to ${email} address. Please verify mail`;
      this.toastr.success(message);
      firebase
      .database()
      .ref("/users"+userData.user.uid)
      .set({
        uid:userData.user.uid,
        email,
        password,
        fullname,
        username,
        registrationDate:new Date().toString()
      });
      this.router.navigate(["/login"]);
    }).catch(err=>{
      this.toastr.error(err.message);
      console.log(err);
    });
  }
}
