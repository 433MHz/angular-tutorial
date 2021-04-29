import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiReaderService {

  constructor(private http: HttpClient) { }

  public getApi(): Observable<RootObject>{
    return this.http.get<RootObject>('https://jsonplaceholder.typicode.com/comments');
  }
}

export interface RootObject {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
