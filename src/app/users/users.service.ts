import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from 'underscore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Urls, APIURLS } from '../app.constants';
import {User} from './users.domain';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UserService { 
  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    var url = Urls.getDomain().concat(APIURLS.user);
    return this.http.get<User[]>(url);
  }

  save(user:User): Observable<User> {
    var url = Urls.getDomain().concat(APIURLS.user);
    return this.http.post<User>(url,user,{headers:httpOptions.headers});
  }
}
