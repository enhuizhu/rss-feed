import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  constructor(private http:HttpClient) { 

  }

  getFeed(url:string):Observable<any> {
    return this.http.get(url, {responseType: 'text'});
  }

  getPath(url:string):string {
    return `http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&q=${url}`;
  }
}
