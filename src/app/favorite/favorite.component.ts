import { Component,Input,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  //inputs:['isFavorite'] another way to define input property and you don't need to import {Input} and use @Input() in front of property
})
export class FavoriteComponent {
  @Input('is-favorite') isFavorite:boolean; //Input is another declartor for marking field and propeties as input propeties, now this field is exposed to outsides and can binding the property to somewhere else. 'is-favorite' is alias of the input propeties
  @Output("change-event") change=new EventEmitter()//You also can give output properties an alias as well,here is "change-event"
  title="Please Enter your title";
  constructor() { }
  
  onClick(){
    this.isFavorite=!this.isFavorite;
    this.change.emit({newValue:this.isFavorite}) //emit() notify others something has happened
  }

  

}

export interface FavoriteChangeEventArgs{
  newValue:boolean
}