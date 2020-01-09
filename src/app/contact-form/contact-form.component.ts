import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent  {
  contactMethods=[
    {id:1,name:"Email"},
    {id:2,name:"Phone"},
    {id:3,name:"Mail"}

  ]

 log(info){
   console.log(info)
 }

 onSubmit(form){
   console.log(form.value) //template-driven forms-ngform, in future, when you submit the data to api, this is always the way we use it
 }
}
