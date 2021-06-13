import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule, HttpErrorResponse} from '@angular/common/http'
import {FormsModule} from "@angular/forms";
import { StudentAddComponent } from './student-add.component';
import {StudentService} from "../student.service"
describe('StudentAddComponent', () => {
  let component: StudentAddComponent;
  let fixture: ComponentFixture<StudentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAddComponent ],
      imports:[HttpClientModule,FormsModule],
      providers:[StudentService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
