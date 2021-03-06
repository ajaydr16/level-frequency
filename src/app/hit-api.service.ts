import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HitApiService {

  path: any = 'http://localhost:9002/questionFrequency';

  constructor(private http:HttpClient) { }

  public sendkeys(keys:any){
    return this.http.post(this.path,keys);
  }
}
