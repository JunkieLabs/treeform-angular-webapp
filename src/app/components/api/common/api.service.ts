import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Postman, POSTMAN } from '../postman';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
  }

  private formatErrors(error: any) {
    console.log(error);

    return throwError(error.error);
  }

  // get(path: string, params: any = new HttpParams()): Observable<any> {
  //   return this.http.get(`${Postman.API_URL}${path}`, { params, headers : this.headers })
  //     .pipe(catchError(this.formatErrors));
  // }

  // put(path: string, body: Object = {}): Observable<any> {
  //   return this.http.put(
  //     `${Postman.API_URL}${path}`,
  //     JSON.stringify(body),
  //     {headers : this.headers}
  //   ).pipe(catchError(this.formatErrors));
  // }

  // post(path: string, body: Object = {}, params: any = new HttpParams()): Observable<any> {
  //   return this.http
  //     .post(`${Postman.API_URL}${path}`, JSON.stringify(body), {
  //       params: params,
  //       headers: this.headers
  //     })
  //     .pipe(catchError(this.formatErrors));
  // }

  // delete(path): Observable<any> {
  //   return this.http.delete(
  //     `${Postman.API_URL}${path}`,
  //     {headers : this.headers}
  //   ).pipe(catchError(this.formatErrors));
  // }

  get(url): Observable<any> {
    return this.http.get(url, { headers : this.headers });
  }

  doGetObservableForQuery(url, params): Observable<any> {
    return this.http.get(url, { headers: this.headers, params });
  }

  // Post
  doPostObservable(url, data): Observable<any> {
    return this.http.post(url, JSON.stringify(data), { headers : this.headers });
  }

}
