import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'; //create a reacitve form you have to import FormGroup and Formcontrol
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form=new FormGroup({
    //creat a subgroup named account
    account:new FormGroup({
      'username':new FormControl('',[Validators.required,Validators.minLength(3),UsernameValidators.cannotContainSpace],UsernameValidators.shouldBeUnique),//async validaator will be third arguments of the class
      'password':new FormControl('',Validators.required)//if you use simple form, such as one input, you can just do new FormControl() object,if you deal with subgroup or more complex form you should use FormGroup()
    })    
    });

  get password(){
    return this.form.get('account.password');
  }

  login(){
    //call the server
    //let isValid=authService.login(this.form.value)
    //if(!isValid){
      this.form.setErrors({invalidLogin:true})  //if you want to set an error in an individual form control level, you can do this.username.setErrors ({validation objects})
   //}
  }
}
