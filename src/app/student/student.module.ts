import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from "@angular/forms";
import { StudentRoutingModule } from './student-routing.module';
import { StudentAddComponent } from './student-add/student-add.component';
import {StudentService} from "./student.service"

@NgModule({
  declarations: [
    
    StudentAddComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[StudentService]
})
export class StudentModule { }
