import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {EventListService} from "./event-list.service"

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {
  constructor(private event:EventListService){}
resolve(){
  return this.event.getClientsDetails();

}
  
  
}
