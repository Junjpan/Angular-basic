import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  @Input("likeCount") number:number; 
  @Input("isActive") like:boolean;
  @Input() bodytext:string;

  onClickLike(){
    this.like=!this.like;
    if (this.like===true){
      this.number+=1
    }else{
      this.number-=1;
    }
  }
 

}
