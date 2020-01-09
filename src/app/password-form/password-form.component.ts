import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { passwordValidator } from './password.validators';


@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent {
  
 form:FormGroup;
 /** this way I don't know how to add the formgroup validator here, so I use formbuilder method
form=new FormGroup({
    oldPassword:new FormControl('',Validators.required,passwordValidator.notTheSamePassword),
    newPassword:new FormControl('',Validators.required),
    confirmPassword:new FormControl('',Validators.required)
  })*/
  
  constructor(fb:FormBuilder) {
    this.form=fb.group({
      oldPassword:['',Validators.required,passwordValidator.notTheSamePassword],
      newPassword:['',Validators.required],
      confirmPassword:['',Validators.required]      
    },{validator:passwordValidator.passwordShouldMatch}) //second parameter is for the form/formgroup validator
   }

  get oldPassword(){
    return this.form.get('oldPassword')
  } 
  
  get newPassword(){
    return this.form.get('newPassword')
  }

  get confirmPassword(){
    return this.form.get('confirmPassword')
  }

  

  submitForm(){
    console.log(this.form.value)
  }

}

