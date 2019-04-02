import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder,FormsModule} from '@angular/forms';
import {user} from '../userDetails';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  userdetail:user;
  constructor(private formBuilder:FormBuilder,private dataStorage:DataService,private router: Router) {

    this.registerForm = this.createFormGroupWithBuilderAndModel(formBuilder);
   
   }
 
  ngOnInit() {
  }
  createFormGroupWithBuilderAndModel(formBuilder: FormBuilder) {
    
    return formBuilder.group(new user());
  }
  onClickSubmit(data) {
    
if(data.name==null||data.name==""){

  alert("Enter name");
}
else if(data.phoneNo==null||data.phoneNo==""){

  alert("Enter Phone number");
} 
else if(data.email==null||data.email==""){

  alert("Enter  email");
}
else if(data.pswd==null||data.pswd==""){

  alert("Enter  password");
}
else{ this.userdetail =data;
  console.log(this.userdetail);
    localStorage.setItem(data.email,JSON.stringify(this.userdetail));
    this.router.navigate(['dash']);}

 
      }

}
