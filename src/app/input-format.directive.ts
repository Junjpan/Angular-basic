import { Directive,HostListener,ElementRef, Input } from '@angular/core';
//HostListener that declares a DOM event to listen for and provides a handler  method to run when that event occurs.
//create customer directive
@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  //ElementReft is a service defined by Angular allow access to DOM object
  @Input('appInputFormat') format:string;
  
  constructor(private el: ElementRef){

  }

  @HostListener('click',['$event.target.value']) onClick(value){
    console.log(value);
  }
 

  @HostListener('blur') onBlur(){
    //nativeElement allow you to access actual DOM object
    let value:string=this.el.nativeElement.value;
   
    if(this.format=='lowercase'){
    this.el.nativeElement.value=value.toLowerCase()}
    else{
      this.el.nativeElement.value=value.toUpperCase()
    }
  }
}
