import { Component, OnInit } from '@angular/core';
import {EventListService} from '../event-list.service'
import {FormGroup,FormControl,Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  alert:boolean
  constructor(private router:ActivatedRoute,private Event:EventListService) { }
  add=new FormGroup({
    eventName:new FormControl('',Validators.required),
})

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
    this.Event.getCurrentList(this.router.snapshot.params.id).subscribe((result)=>{
      console.warn(result)
      this.add=new FormGroup({
        eventName:new FormControl(result['eventName']),
       })
       })
  }
  collectInfo()
  {
    
    this.Event.updateList(this.router.snapshot.params.id,this.add.value).subscribe((result)=>{
      console.warn("result",result)
    })
    this.alert=true;
    this.add.reset({})
 }
 check()
  {
    this.alert=false;
  }

}
