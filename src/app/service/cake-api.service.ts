import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Cake} from '../model/Cake';

@Injectable()
export class CakeApiService {

  private endPointURL = 'http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes';

  constructor (private http: HttpClient) { }

  public getAllCakes (): Observable<any> {
    return this.getCakes();
  }

  public getSingleCake (cakeId: string): Observable<any> {
    return this.getCake(cakeId);
  }

  public persistNewCake (imageUrl: string): Observable<any> {
    return this.saveNewCake(imageUrl)
  }

  public persistExistingCake (cakeToPersist: Cake): Observable<any> {
    return this.updateCake(cakeToPersist);
  }

  // -------------- quick rest methods below

  private getCakes (): Observable<any> {
    return this.http.get(this.endPointURL);
  }

  private getCake (cakeId: string): Observable<any> {
    return this.http.get(this.endPointURL + `/${cakeId}`);
  }

  private updateCake (cake: Cake): Observable<any> {
    return this.http.put(this.endPointURL + `/${cake.id}`, {
      comment: cake.comment,
      name: cake.name,
      yumFactor: cake.yumFactor,
      imageUrl: cake.imageUrl
    });
  }

  private saveNewCake (imageUrl: string): Observable<any> {
    return this.http.post(this.endPointURL, { imageUrl });
  }

  private deleteCake (cakeId: string): Observable<any> {
    return this.http.delete(this.endPointURL + `/${cakeId}`);
  }
}
