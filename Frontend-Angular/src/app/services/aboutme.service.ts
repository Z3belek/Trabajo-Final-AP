import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AboutmeService {
  url='http://localhost:8080/api/data/all/aboutme';
  constructor(private http: HttpClient) { }
  
  getAboutme():Observable<any>
  {
    return this.http.get<Aboutme[]>(this.url);
  }

  editAboutme(id:number, aboutme: Aboutme):Observable<any>
  {
    return this.http.put(this.url+'/'+id, aboutme);
  }
}
export interface Aboutme {
  name: string,
  dtexto: string,
  skill1: string;
  skill2: string,
  skill3: string,
  percentage1: number,
  percentage2: number,
  percentage3: number,
  urlselfie: string,
  urlcv: string,
  linkedin: string,
  github: string,
  mail: string,
  pinterest: string,
  pcompletados: string,
  ctomados: string,
  csatisfactorios: string,
  premios: string
}