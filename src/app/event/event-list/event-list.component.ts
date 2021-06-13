import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EventListService} from "../event-list.service"
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  collection:any=[];
  constructor( private event:EventListService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
      this.collection=this.route.snapshot.data['data'];
    
  }
  EventItem(item){
     this.collection.splice(item-1,1)
     this.event.deleteList(item).subscribe((result)=>{
     console.warn(result)
     })}
  }
