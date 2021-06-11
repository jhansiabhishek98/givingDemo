import { Component, OnInit } from '@angular/core';
import {EventService} from "../event.service";
import {FormGroup,FormControl,Validators} from "@angular/forms";
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  alert:boolean=false;
  constructor(private Event:EventService) { }
  add=new FormGroup({
    eventName:new FormControl('',Validators.required),
})

  ngOnInit(): void {
  }
  collectInfo()
  {
    this.Event.saveList(this.add.value).subscribe((result)=>{
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
