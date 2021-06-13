import { Injectable } from '@angular/core';
import { CanDeactivate,ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
export interface canComponentLeave{
  canLeave:()=>boolean;
}
@Injectable({
  providedIn: 'root'
})

export class DeactivateGuard implements CanDeactivate<canComponentLeave> {
  canDeactivate(component:canComponentLeave)
  {
    if(component.canLeave)
    {
      return component.canLeave();
    }
    return true;
  }
  
}
