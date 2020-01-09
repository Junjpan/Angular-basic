import { Injectable } from '@angular/core'

//building the services, it is not an component and it is pure typescript class
@Injectable() //use the injectable decorator if you have dependence in the service constructor
export class CourseService{
   getCourse(){
       return ["author1","author2","author3"]
   }
   constructor(){
 
   }
}