import { AuthGuardGuard } from './auth-guard.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { AddimagesComponent } from './addimages/addimages.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    AddimagesComponent,
    PagenotfoundComponent,
    AddimagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,BrowserAnimationsModule,ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"login",component:LoginComponent},
      {path:"header",component:HeaderComponent},
      {path:"signup",component:SignupComponent},
      {path:"addimages",component:AddimagesComponent ,canActivate:[AuthGuardGuard]},
      {path:"**",component:PagenotfoundComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
