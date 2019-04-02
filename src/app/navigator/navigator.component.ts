import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { user } from '../userDetails';
import { SessionStorageService } from 'ngx-webstorage';
import { isNull } from 'util';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  navbarOpen = false;

  show: boolean = false;

  loginForm: FormGroup;
  userdetail:user;
  userName="Guest";
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

 

  
  // getSession(){
  //   this.session.store( ,"use");
  // }
  
  constructor(private session:SessionStorageService,private formBuilder:FormBuilder,private dataStorage:DataService,private router: Router) {

    this.loginForm = this.createFormGroupWithBuilder(formBuilder);
  
   }
  
  ngOnInit() {
  }
  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    
    return formBuilder.group({email: new FormControl(),
      pswd: new FormControl()
      });
  }

  onClickSubmit(data) {
    
 
  console.log(data);
  this.userdetail=JSON.parse(localStorage.getItem(data.email));
  if(this.userdetail==null){
alert("Email Id not found<br>Please enter vaild ID or login.");
  }else if(this.userdetail.pswd==data.pswd){
    this.session.store("username" ,this.userdetail.name);
    this.session.store("email" ,this.userdetail.email);
    this.router.navigate(['dash']);
    this.show=!this.show;
   this.userName=this.session.retrieve("username");
   this.ngOnInit();
  }
  else{

    alert("User name/Password Wrong.Please enter correct credentials");
  }
 
    // localStorage.setItem(data.name,JSON.stringify(this.userdetail));
    // this.router.navigate(['dash']);
      }

}
