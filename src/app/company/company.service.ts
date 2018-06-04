import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from 'underscore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Urls, APIURLS } from '../app.constants';
import { Company } from './company.domain';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class CompanyService {
  constructor(private http: HttpClient) {
  }

  save(company: Company): Observable<Company> {
    var url = Urls.getDomain().concat(APIURLS.updatecompany);
    return this.http.post<Company>(url, company, { headers: httpOptions.headers });
  }

  getCompany(): Observable<Company> {
    var url = Urls.getDomain().concat(APIURLS.getcompany);
    return this.http.get<Company>(url);
  }

}