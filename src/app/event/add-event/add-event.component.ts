import { Component, OnInit } from '@angular/core';
import {EventListService} from '../event-list.service'
import {FormGroup,FormControl,Validators} from "@angular/forms";
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
alert:boolean
  constructor(private Event:EventListService) { }
  add=new FormGroup({
    eventName:new FormControl('',Validators.required),
})
  ngOnInit(): void {
  }
  collectInfo()
  {
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
}
