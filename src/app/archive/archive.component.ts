import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit{
 year:string;
 month:string;
 //inject Router service
  constructor(private router:Router,private route:ActivatedRoute) { }
  ngOnInit(){
    this.route.paramMap
    .subscribe((params)=>{
      this.year=params.get('year');
      this.month=params.get('month');

    })
  }

  viewAll(){
   this.router.navigate(['/'])
  }

}
