import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  title="3 Authors";
  imageUrl="https://thumbs.dreamstime.com/z/hands-family-five-mixed-race-placed-over-yellow-background-166957520.jpg"
  colSpan=2;
  isActive:boolean=false;
  courses;
  email="me@yahoo.com";
  nickname="banana"
  getTitle(){
    return this.title
  }

  onDivClicked(){
    console.log("div is clicked!")
  }

  onKeyUp(e){//or you can type $event
    console.log(e.target.value)
  }

  onEnter(name){
    console.log(name)
  }

  onEnterEmail(){
    console.log(this.email)
  }

  onEnterName(){
    console.log(this.nickname);
  }
  onSave($event){
    
   $event.stopPropagation()//stop event(needs to be same event) bubbling(mean when button was clicked, it will not get affected by the it is parent's event handler )
    console.log($event)
  }
  //a constructor is where to initialize an object
  constructor(service:CourseService) { //dependence injection mean inject dependency class into the constructor,in order to make it work, we need to register the independcy inside the module inside the providers
    //which is equal is below
    /**
     * service=new CourseService()
     */
    
    this.courses=service.getCourse();
  }

  ngOnInit() {
  }

}
