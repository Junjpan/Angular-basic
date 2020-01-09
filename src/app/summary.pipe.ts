import {Pipe, PipeTransform } from '@angular/core';
//Pipe declaration
@Pipe({
    name:'summary' //match up with markup name
})
export class SummaryPipe implements PipeTransform {
    // you can add as many parameters you want, which is completedly up to your custom pipe want to implement
    transform(value:string,limit:number,args?:any){
        if(!value){
            return null;
        }
let actualLimit=(limit)?limit:50
      return value.substr(0,limit)+"...";
    }
}