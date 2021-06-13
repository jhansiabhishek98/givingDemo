import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddEventComponent} from "./add-event/add-event.component";
import {EventListComponent} from "./event-list/event-list.component";
import {EditEventComponent} from "./edit-event/edit-event.component";
import{DeactivateGuard} from "./deactivate.guard"
import { ResolveGuard } from './resolve.guard';

const routes: Routes = [
  {
    path:"add",
    component:AddEventComponent,
    canDeactivate:[DeactivateGuard]
  },
  {
    path:"list",
    component:EventListComponent,
    resolve:{
      data:ResolveGuard
    }
  },
  {
    path:"edit/:id",
    component:EditEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
