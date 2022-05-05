import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EducationService {
  url='http://localhost:8080/api/data/all/education';
  constructor(private http: HttpClient) { }
  
  getEducation():Observable<any>
  {
    return this.http.get<Education[]>(this.url);
  }
  getOneEducation(id: number):Observable<any>
  {
    return this.http.get(this.url+'/'+id);
  }

  saveEducation(education: Education):Observable<Education>
  {
    return this.http.post<Education>(this.url, education);
  }

  editEducation(id:number, education: Education):Observable<any>
  {
    return this.http.put(this.url+'/'+id, education);
  }

  deleteEducation(id: number):Observable<any>
  {
    return this.http.delete(this.url+'/'+id);
  }
}

export interface Education {
  id?: number,
  year1: string,
  year2: string,
  level: string;
  place: string,
  dtexto: string
}