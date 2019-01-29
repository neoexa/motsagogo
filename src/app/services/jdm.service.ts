import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { from } from 'rxjs';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';


@Injectable({
  providedIn: 'root'
})

export class JdmService {
  private API_URL: string = environment.REZODUMP_API_URL;

  constructor(private http: HttpClient) { }

  getDetails(query) {
    return this.http.get(`${this.API_URL}/mots/${query}`, {responseType: 'json'})
  }

  getEntries() {
  	return this.http.get(`${this.API_URL}/autocomplete`, {responseType: 'text'})
  }

}
