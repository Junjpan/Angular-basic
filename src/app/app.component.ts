import { Component } from '@angular/core';
import { FavoriteChangeEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post={
    title:"Angular",
    isFavorite:false
  };
  tweet={
    number:10,
    name:{
      sex:"female",
      name:"John"
    },
    like:true,
    bodytext:"Click the tweet you like"
  }
  title="Shipping Details"
  viewMode:string;
  onFavoriteChanged(isFavorite:FavoriteChangeEventArgs){ //for the complicated projects, we'll do the inline type varification
    console.log("Favorite Changed "+isFavorite)
  }
}
//if you are building a reuseable component, you better declare the interface from your modules
