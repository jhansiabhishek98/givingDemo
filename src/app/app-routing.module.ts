import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddEventComponent} from "./add-event/add-event.component";
import {AddStudentComponent} from "./add-student/add-student.component";
import {EventListComponent} from "./event-list/event-list.component";
import {UpdateEventComponent} from "./update-event/update-event.component";

const routes: Routes = [
{
  path:"event",loadChildren:()=>import('./event/event.module').then(mod=>mod.EventModule) 

},
{
  path:"list",
  component:EventListComponent

}
  ,{
    path:"edit/:id",
    component:UpdateEventComponent
  },
  {
    path:"addStu",
    component:AddStudentComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
