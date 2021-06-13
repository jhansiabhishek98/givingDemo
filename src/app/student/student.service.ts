import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  value:string="Student";
  constructor(private http:HttpClient) { }
  saveStudentList(data)
  {
    return this.http.post(environment.URL+this.value,data);
  }
  getEventsDetails(){
    return this.http.get(environment.URL+"Event");
  }

}
