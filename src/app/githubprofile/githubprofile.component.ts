import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-githubprofile',
  templateUrl: './githubprofile.component.html',
  styleUrls: ['./githubprofile.component.scss']
})
export class GithubprofileComponent implements OnInit {

  //to be able to access the parameter in the link, we need to use ActivatedRoute
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    //paramMap is the property to give all the parameters in this route
    //if you don't allow the user to stay on the same page and navigate  back and forth, there is a simple way to get the paramater which is calleded snapshot
    //let id=this.route.snapshot.paramMap.get('id');
    this.route.paramMap//route parameters are observables
    .subscribe(params=>{let id=+params.get('id');
    console.log(id)}
  //to change to string to  Number, simple put the + in front of params.get('id)

 )}
//navigate back to main page
 submit(){
   this.router.navigate(['/followers','github'],{queryParams:{page:1,order:'newest'}})
 }
}
