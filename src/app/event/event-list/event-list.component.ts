import { Component, OnInit } from '@angular/core';
import {EventListService} from "../event-list.service"
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  collection:any=[];
  constructor( private event:EventListService) { }

  ngOnInit(): void {
    this.event.getClientsDetails().subscribe((result)=>{
      console.log(result)
      this.collection=result;
    })
  }
  EventItem(item){
    // this.collection.splice(item-1,1)
    // this.event.deleteList(item).subscribe((result)=>{
    // console.warn(result)
    // })}
  }
}
