import { Component , OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Iron';
  ngOnInit(){
    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCt3qE1_KCtCLaz-7YJ8Qld2QAwExyIrRk",
    authDomain: "instagram-ad90b.firebaseapp.com",
    databaseURL: "https://instagram-ad90b.firebaseio.com",
    projectId: "instagram-ad90b",
    storageBucket: "instagram-ad90b.appspot.com",
    messagingSenderId: "1096201854881",
    appId: "1:1096201854881:web:dd8e3c33ba0c320c60f5e0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  }
}
