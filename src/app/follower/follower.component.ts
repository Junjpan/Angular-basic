import { Component, OnInit } from '@angular/core';
import { FollowerService } from './../services/follower.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest} from 'rxjs';
import {switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.scss']
})
export class FollowerComponent implements OnInit {
  followerArr:any[];

  constructor(private route:ActivatedRoute, private service:FollowerService) {

   }

  ngOnInit() {
    //to be able to subscribe multiple observables,you need to import combinelatest
    combineLatest([this.route.paramMap,this.route.queryParamMap
]).pipe(switchMap(combined=>{
  let username=combined[0].get('userid');
  let page=combined[1].get('page');
  console.log(username,page)
  return this.service.getAll()
})).subscribe((info)=>this.followerArr=info)


/** 
 * this way has subscribe inside another subscribe, in order to make the codes more cleaner, we use switchMap function as above
combineLatest([this.route.paramMap,this.route.queryParamMap
])
 .subscribe(combined=>{
      console.log(combined)//it will be an array with two object, the first one is the object for parameters, the second one is the queryParameters
      let username=combined[0].get('userid');
      let page=combined[1].get('page');
      console.log(username,page);
      this.service.getAll()
    .subscribe(
      (followers)=>{
        this.followerArr=followers;
      }
    )})*/
    
    
    
    //let page=this.route.snapshot.queryParamMap.get('page')
    
  }
}
