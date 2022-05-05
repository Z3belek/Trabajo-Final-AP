import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url='http://localhost:8080/api/data/all/project';
  constructor(private http: HttpClient) { }
  
  getProject():Observable<any>
  {
    return this.http.get<Project[]>(this.url);
  }
  getOneProject(id: number):Observable<any>
  {
    return this.http.get(this.url+'/'+id);
  }

  saveProject(project: Project):Observable<Project>
  {
    return this.http.post<Project>(this.url, project);
  }

  editProject(id:number, project: Project):Observable<any>
  {
    return this.http.put(this.url+'/'+id, project);
  }

  deleteProject(id: number):Observable<any>
  {
    return this.http.delete(this.url+'/'+id);
  }
}

export interface Project {
  id?: number,
  title: string,
  type: string,
  place: string,
  dtexto: string;
  imgurl: string;
}