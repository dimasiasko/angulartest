import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photocard } from '../models/photocard';

@Injectable({
  providedIn: 'root'
})
export class PhotocardsService {

  baseUrl: string = 'https://boiling-refuge-66454.herokuapp.com/images';
  constructor(private http: HttpClient) { }

  getAllCards(): Observable<Photocard[]> {
    return this.http.get<Photocard[]>(this.baseUrl);
  }
  
  getSingleCard(id: string): Observable<Photocard>{
    return this.http.get<Photocard>(this.baseUrl + '/' + id);
  }

  updateCard(id: string, newComment: string): Observable<Photocard> {
    return this.http.post<Photocard>(this.baseUrl + '/' + id + '/' + newComment, newComment)
  }
  

}
