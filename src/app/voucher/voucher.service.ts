import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from 'underscore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Urls, APIURLS } from '../app.constants';
import { Voucher} from './voucher.domain';
import { SearchVoucher } from './voucher.domain';
import { SearchVoucherResult } from './voucher.domain';
import { Vendor } from '../vendor/vendor.domain';
import { OAuthService } from '../app.auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class VoucherService {
  constructor(private http: HttpClient,private oauthService:OAuthService) {
  } 

  save(voucher: Voucher): Observable<Voucher> {
    var url = Urls.getDomain().concat(APIURLS.savevoucher);
    let headers=this.oauthService.getAuthHeaders()
    return this.http.post<Voucher>(url, voucher, { headers: headers });
  }

  searchVoucher(searchVoucher: SearchVoucher, pageNo: number = 0): Observable<SearchVoucherResult> {
    var url = Urls.getDomain().concat(APIURLS.voucher).concat("/search")
      .concat("?pageNumber=")
      .concat(pageNo.toString())
    console.log("Searching : " + url);
    let headers=this.oauthService.getAuthHeaders()
    return this.http.post<SearchVoucherResult>(url, searchVoucher, { headers: headers });
  }
  
  getVoucher(id:number): Observable<Voucher> {
    var url = Urls.getDomain().concat(APIURLS.voucher).concat("?id=").concat(id.toString());
    let headers=this.oauthService.getAuthHeaders()
    return this.http.get<Voucher>(url,{ headers: headers });
  }
  deleteVoucher(id:number): Observable<string> {
    var url = Urls.getDomain().concat(APIURLS.voucher).concat("?id=").concat(id.toString());
    let headers=this.oauthService.getAuthHeaders()
    return this.http.delete<string>(url,{headers:headers,responseType:'text' as 'json'});
  }

  getVendors():Observable<Vendor[]>{
    var url = Urls.getDomain().concat(APIURLS.vendor);
    let headers=this.oauthService.getAuthHeaders()
    return this.http.get<Vendor[]>(url, { headers: headers });
  }

  approve(voucher: Voucher): Observable<Voucher> {
    var url = Urls.getDomain().concat(APIURLS.approveVoucher);
    let headers=this.oauthService.getAuthHeaders()
    return this.http.post<Voucher>(url, voucher, { headers: headers });
  }

  getFyaVouchers(pageNo: number = 0): Observable<SearchVoucherResult> {
    var url = Urls.getDomain().concat(APIURLS.voucher).concat("/fya")
      .concat("?pageNumber=")
      .concat(pageNo.toString())
    console.log("Searching : " + url);
    let headers=this.oauthService.getAuthHeaders()
    return this.http.get<SearchVoucherResult>(url, { headers: headers });
  }
}