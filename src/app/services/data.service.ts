//extractomg a reusable data service

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import {map, retry} from 'rxjs/operators';
import { AppError } from '../common/app-error';


@Injectable()

export class DataService {

    constructor(private url: string, private http: Http) {
    }

    getAll() {
        return this.http.get(this.url).pipe(map(response=>response.json()))  //mapping and transfoming the response object to an array of javascript object             
    }

    create(resource) {
        return this.http.post(this.url, resource).pipe(map(response=>response.json()))
    }

    update(id, info) {
        return this.http.patch(this.url + '/' + id, info).pipe(map(response=>response.json()),retry(3))//retry only work on the observable and obserable allow reactive programming(rxjs)and observable is lazy, nothing happen to it until you subscribe it
    }
    //consuming HTTP services-Throwing application -specific errors. (there is an error, not finishing)
    delete(id) {
        
        return this.http.delete(this.url + '/' + id).pipe(map(response=>response.json()))//will return an empty object
        
        //.pipe(catchError((error=>of([]) ))
    }
}
