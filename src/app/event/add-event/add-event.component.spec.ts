import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule, HttpErrorResponse} from '@angular/common/http'
import {ReactiveFormsModule} from "@angular/forms";
import { AddEventComponent } from './add-event.component';
import {EventListService} from "../event-list.service"
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { IEvent } from '../EventModel';
import {environment} from "../../../environments/environment"
describe('AddEventComponent', () => {
  let component: AddEventComponent;
  let fixture: ComponentFixture<AddEventComponent>;
  let eventService:EventListService;
  let h1:HTMLElement;
  let httpTestCtrl:HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEventComponent ],
      imports:[HttpClientModule,ReactiveFormsModule,HttpClientTestingModule],
      providers:[EventListService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventComponent);
    component = fixture.componentInstance;
   eventService=TestBed.inject(EventListService);
   httpTestCtrl=TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });
  afterEach(()=>{
    httpTestCtrl.verify();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check html component', () => {
    h1=fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toBe("Enter Event Name");
  });

  it('checking dependency injection', () => {
    expect(eventService instanceof EventListService).toBeTruthy();
  });
  it('checking form is valid or not', () => {
    expect(component.add.valid).toBeFalsy();
  });
  it('checking form is valid or not when values entered', () => {
    component.add.controls['eventName'].setValue('Horse Riding');
    expect(component.add.valid).toBeTruthy();
  });
  it('checking errors is there or not', () => {
    let name=component.add.controls['eventName'];
    expect(name.valid).toBeFalsy();
    expect(name.errors['required']).toBeTruthy();
    name.setValue('jogging');
    expect(name.errors).toBeNull();
  });
it('should test HttpClient.get',()=>{
const testList:IEvent[]=[
  {eventName:"BasketBall"},
  {eventName:"Snooker"},
  {eventName:"Tracking"}
]
eventService.getClientsDetails().subscribe((posts)=>{
  expect(testList).toBe(posts,'Should check mocked data');
})
const req=httpTestCtrl.expectOne(environment.URL+'Event');
expect(req.cancelled).toBeFalsy();
expect(req.request.responseType).toEqual('json');
req.flush(testList);
});
it('should test HttpClient.post',()=>{
  const newPost:IEvent={eventName:"BasketBall"}
  eventService.createEvent(newPost).subscribe((addedPost)=>{
    expect(addedPost).toBe(newPost);
  })
  const req=httpTestCtrl.expectOne(environment.URL+'Event');
  expect(req.cancelled).toBeFalsy();
  expect(req.request.responseType).toEqual('json');
  req.flush(newPost);
  });
it('should have 404 error',()=>{
  const errorMsg='mock 404 error occured';
  eventService.getClientsDetails().subscribe(
    (data)=>{
      fail('failing with error 404');
    },
    (error:HttpErrorResponse)=>{
      expect(error.status).toEqual(404);
      expect(error.error).toEqual(errorMsg)
    }
  );
  const req=httpTestCtrl.expectOne(environment.URL+'Event');
  req.flush(errorMsg,{status:404,statusText:'Not Found'});
})  

  
});
