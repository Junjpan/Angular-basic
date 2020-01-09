import { Component} from '@angular/core';

@Component({
  selector: 'courseform',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
categorylist=[
  {id:1,name:"Development"},
  {id:2,name:"Art"},
  {id:3,name:"Languages"}
]
 
onSubmit(value){
  console.log(value)
}

}
