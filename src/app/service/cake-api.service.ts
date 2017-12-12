import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CakeApiService {

  private endPointURL = 'http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes';

  constructor (private http: HttpClient) { }

  getAllCakes (): Observable<any> {
    return this.http.get(this.endPointURL);
  }

}
