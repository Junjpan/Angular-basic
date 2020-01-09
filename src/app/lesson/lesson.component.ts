import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent  {
  lesson={
    title:"The Complete Angular Lesson",
    rating:"4.9745",
    students:30212,
    price:190.456,
    releaseDate:new Date(2018,5,7)
  };
  lessons:object[]=[{id:0,name:"lesson0"}]
  
  text="Yahoo! is an American web services provider headquartered in Sunnyvale, California, and owned by Verizon Media. The original Yahoo! company was founded by Jerry Yang and David Filo in January 1994 and was incorporated on March 2, 1995. Yahoo was one of the pioneers of the early Internet era in the 1990s."
  onLoad(){
    this. lessons=[{id:1,name:"lesson1"},{id:2,name:"lesson2"},{id:3,name:"lesson3"}];
  }
  trackCourse(index,lesson){
  return lesson?lesson.id:undefined;
  }
  
  onAdd(){
     this.lessons.push({id:4,name:"lesson4"})
   }
   onDelete(index){
this.lessons.splice(index,1)
   }

   onEdit(lesson){
     lesson.name="updated"
   }

}
