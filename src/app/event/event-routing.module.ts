import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddEventComponent} from "./add-event/add-event.component";
import {EventListComponent} from "./event-list/event-list.component";

const routes: Routes = [
  {
    path:"add",
    component:AddEventComponent
  },
  {
    path:"list",
    component:EventListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
