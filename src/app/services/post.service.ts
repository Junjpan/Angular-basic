import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
//import 'rxjs/add/operator/catch';
//import {Observable,of} from 'rxjs';
//import {catchError} from 'rxjs/operators'
import { DataService } from './data.service';

@Injectable()
export class PostService extends DataService{
  constructor(http: Http) { 
   super('http://jsonplaceholder.typicode.com/posts',http);
  }
}
//we extracting a reusable data service so that we don't need the below code.
/** 
  getPosts(){
    return this.http.get(this.url);
  }

  createPosts(post){
    return this.http.post(this.url,post)
  }

  updatePosts(id,info){
return this.http.patch(this.url+'/'+id,info)
  }
//consuming HTTP services-Throwing application -specific errors. (there is an error, not finishing)
  deletePosts(id){
    return this.http.delete(this.url+'/'+id)
    //.pipe(catchError((error=>of([]) ))
  }
*/
