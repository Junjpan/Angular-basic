import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable()
export class FollowerService extends DataService{
 
  constructor(http:Http) { 
    super('https://api.github.com/users/Mosh-Hamedani/followers',http)
  }
}
