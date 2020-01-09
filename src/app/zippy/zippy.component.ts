import { Component, Input} from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent  {
  @Input('title') title:string;
  isExpanded:boolean=false;
  isHidden:boolean=true;
 
  toggle(){
    this.isExpanded=!this.isExpanded;
    this.isHidden=!this.isHidden;
  }

 

}
