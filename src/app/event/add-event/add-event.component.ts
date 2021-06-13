import { Component, OnInit } from '@angular/core';
import {EventListService} from '../event-list.service'
import {FormGroup,FormControl,Validators} from "@angular/forms";
import {canComponentLeave} from "../deactivate.guard"
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit,canComponentLeave {
  myValue='red';
alert:boolean
  constructor(private Event:EventListService) { }
  add=new FormGroup({
    eventName:new FormControl('',Validators.required),
})
  ngOnInit(): void {
  }
  collectInfo()
  {
    
    this.myValue='green';
    console.warn(this.add.value)
    this.Event.createEvent(this.add.value).subscribe((result)=>{
      console.warn(result)
    })
    this.alert=true;
    
    this.add.reset({})
   
  }
  
  check()
  {
    this.alert=false;
  }
  canLeave()
  {
    if(this.add.dirty)
    {
      return window.confirm("you really want to move away from this window");
    }
    return true;

  }
}
