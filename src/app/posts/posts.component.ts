//consuming HTTP services
import { Component ,OnInit} from '@angular/core';
import {PostService} from '../../app/services/post.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

//technical you don't need to implements Oninit interface as long as you have ngOnInit method, however, using implements OnInit will help compile type checking
export class PostsComponent implements OnInit{
posts:any[];


//when you need to use HTTP services, we need to import HttpModule and register in the app.module.ts and import {http} from @angular/http
// type of Http ,to be able to use http in the filed of the class, we can set http private in front of htimport { PostService } from './../services/post.service';

//do not use constructor to call http services, it affect performance
constructor(private service: PostService) {
 
 }
 //for the separation of concerns, we seperate the http service  with this class. In future if the url link changes  will not affect the function of this class, and you only need to change service class 
 ngOnInit(){
  this.service.getAll()
  .subscribe(posts=>
    this.posts=posts)}//using global error handling method
  //,error=>{alert('An unexpected error occurred');
  //console.log(error)} 
   //subscribing the observable

 createPost(input:HTMLInputElement){
let post={title:input.value};
this.posts.splice(0,0,post) //Optimistic updates

input.value='';

this.service.create(JSON.stringify(post))
          .subscribe(newPost=>{
            post['id']=newPost.id;
            this.posts.splice(0,0,post) //Pessimistic updates(when server response sucessfully then update)
          },
          (error:Response)=>{
            this.posts.splice(0,1)

            if(error.status===400){
              //this.form.setErrors(error.json()) this is the code when you use the form to display the error
            }else{ throw error //you have to rethrow error otherwise you can not use the global error handling
            //alert('An unexpected error occurred');
                  //console.log(error)}
                }})}
updatePost(post){
  //patch is better used for when you slightly change the object
  this.service.update(post.id,JSON.stringify({isRead:true}))
  .subscribe(updatedPost=>{
    console.log(updatedPost)
  }
  //,error=>{alert('An unexpected error occurred');
                  //console.log(error)} //using glbal error handling
                )}   

deletePost(post){
  let index=this.posts.indexOf(post);
  this.posts.splice(index,1)

  this.service.delete(post.id)
  .subscribe(()=>{
    null
  },
  (error:Response)=>{
    this.posts.splice(index,0,post)

    if(error.status===404){
      alert('This post has been deleted');
    }else{
      alert('An unexpected error occurred')
    }
  console.log(error)})

}

}
