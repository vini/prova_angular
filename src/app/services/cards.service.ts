import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import  * as config from '../config';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient, private router: Router) { }

  getAll() {
    
    return this.http.get(config.API_URL);

  }

}
