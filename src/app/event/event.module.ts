import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { AddEventComponent } from './add-event/add-event.component';
import { EventListComponent } from './event-list/event-list.component';
import {EventListService} from "./event-list.service"
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from "@angular/forms";
import { EditEventComponent } from './edit-event/edit-event.component';
import {DeactivateGuard} from "./deactivate.guard"
import {ResolveGuard} from "./resolve.guard"
@NgModule({
  declarations: [
    AddEventComponent,
    EventListComponent,
    EditEventComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[EventListService,DeactivateGuard,ResolveGuard]
})
export class EventModule { }
