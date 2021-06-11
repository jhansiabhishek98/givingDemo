import { Component, OnInit } from '@angular/core';
import {EventService} from "../event.service";
import {FormGroup,FormControl,Validators} from "@angular/forms";
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  alert:boolean=false;
  collection:any=[];
  constructor( private event:EventService) { }
  add=new FormGroup({
    studentName:new FormControl('',Validators.required),
    eventId:new FormControl('',Validators.required)
})

  ngOnInit(): void {
    this.event.getList().subscribe((result)=>{
      console.log(result)
      this.collection=result;
    })
  }
  collectInfo()
  {
    var a:number=+this.add.value.eventId
    this.add.value.eventId=a;
    console.warn(this.add.value)
     this.event.saveStudentList(this.add.value).subscribe((result)=>{
       console.warn(result)
     })
     this.alert=true;

    this.add.reset({})
  }
  check()
  {
    this.alert=false;
  }

}
