import { otherCategories } from './../assets/otherCategories';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
      private http: HttpClient,
  ) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': "application/json"
      }),
      responseType: 'json'
    }
    this.testUrl = "https://collectionapi.metmuseum.org/public/collection/v1/objects"; 
  }

  getCategories(){     
    return otherCategories; 
    return this.http.get('/assets/categories.json')
  }

  testGetFetch(){
    return this.http.get(this.testUrl, this.httpOptions);
  }
}