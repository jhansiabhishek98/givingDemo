import { Injectable } from '@angular/core';
import {IEvent} from "./EventModel";
import {environment} from "../../environments/environment"
import {HttpClient,HttpHandler,HttpHeaders} from "@angular/common/http";
import {} from "rxjs"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventListService {
value:string="Event";
  constructor(private http:HttpClient) { }
  getClientsDetails():Observable<IEvent[]>{
    return this.http.get<IEvent[]>(environment.URL+this.value);
  }
  
  createEvent(event:IEvent):Observable<IEvent>
  {
    let httpheaders=new HttpHeaders().set('Content-Type','application/Json');
    let options={
      headers:httpheaders,
    };
    return this.http.post<IEvent>(environment.URL+this.value,event,options);
}
deleteList(id)
{
  return this.http.delete(`${environment.URL+this.value}/${id}`)
}
getCurrentList(id)
{
  return this.http.get(`${environment.URL+this.value}/${id}`)
}
updateList(id,data)
{
  return this.http.put(`${environment.URL+this.value}/${id}`,data)
}
}
