import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  json_server_base_url:string ="http://localhost:3000/"

  constructor(private http:HttpClient) { }

  testGetCategory():Observable<Array<Object>> {

      return this.http.get<Array<Object>>(this.json_server_base_url+"categoryTree")
  }

}
