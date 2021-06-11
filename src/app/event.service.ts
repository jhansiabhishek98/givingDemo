import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from "../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(public http:HttpClient) { }
url="https://localhost:44341/api/Event"
url2="https://localhost:44341/api/Student"
value="Event"
getList()
{
  return this.http.get(this.url);
}  
saveList(data)
{
  return this.http.post(this.url,data);
}
deleteList(id)
{
  return this.http.delete(`${this.url}/${id}`)
}
getCurrentList(id)
{
  return this.http.get(`${environment.URL+this.value}/${id}`)
}
updateList(id,data)
{
  return this.http.put(`${this.url}/${id}`,data)
}
saveStudentList(data)
{
  return this.http.post(this.url2,data);
}

}