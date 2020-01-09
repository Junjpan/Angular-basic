import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray,FormControl } from '@angular/forms';

@Component({
  selector: 'newcourse',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent  {
 form=new FormGroup({
 Topics:new FormArray([])//when you are dealing with an array of object, we use FormArray class
})
 addTopic(theme:HTMLInputElement){ //type of HTMLInputElement
  //this.form.get('Topics')return an AbstractControl Object and AbstractControl doesn't have push method, and push method only definded in Form Array class
  this.topics.push(new FormControl(theme.value))
  //put any abstractcontrol class in the push based on what values you are puting in, here we only put a single value so we pass formcontrol object, if your form's each object is complex object, then you need to add a form group object here
  theme.value="" 
}


get topics() {
  return this.form.get('Topics') as FormArray;
}

//topic is the type of FormControl Object
removeTopic(topic:FormControl){
  console.log(this.topics)
  console.log(topic)
  
let index=this.topics.controls.indexOf(topic);
this.topics.removeAt(index);
}
}

/* for the case with a formcontrol formArray together and another way to use formBuilder built from angular

export class NewCourseComponent {
method1:  form=new FormGroup({
    name:new FromControl('',Validators.required);
    contact:new FormGroup({
      email:new FormControl(),
      phone:new FormControl(),
    })
    topics:new FormArray([])
  })


//we have another way to simplify the code with Angular builtin Class called formbuilder to use for building form
//you need to import FormBuilder from @angular/forms
method2:
form:FormGroup;
constructor(fb:FormBuilder){
this.form=fb.group({
  name:['',Validators.required],//put the arguments of formcontrol objects inside the array
  contact:fb.group({
    email:[],
    phone:[]
  }),
  topics:fb.array([])
})
}
}
*/

//inside the html
/**
 * <form [formGroup]="form">
 * <input formControlName="name" />
 * <div formGroupName="contact">
 * <input formControlName="email" />
 * <input formControlName="phone" />
 * </div>
 * <ul>
 * <li *ngFor="let topic of topics.controls">
 * {{topic.value}}
 * </li>
 * </ul>
 </form>*/