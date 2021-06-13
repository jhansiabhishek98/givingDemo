import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import {StudentService} from "../student.service"

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  

  constructor(private student:StudentService) { }
  alert:boolean=false;
  collection:any=[];
  ngOnInit(): void {
    this.student.getEventsDetails().subscribe((result)=>{
      console.log(result)
      this.collection=result;
    })
  }
  collectInfo(regForm:FormGroup)
  {
    this.student.saveStudentList(regForm.value).subscribe((result)=>{
      console.log(result);
    })
    this.alert=true;

    regForm.reset();
  }
  check()
  {
    this.alert=false;
  }

  }


