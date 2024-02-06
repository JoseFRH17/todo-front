import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); 
  });

  it('Should have a taskToAdd FormControl', () => {
    expect(component.taskToAdd).toBeTruthy();
  });

  it('Should have an empty task on component creation', () => {
    expect(component.taskToAdd.value).toBe('');
  });

  it('Should raise addTaskEvent event when creating a new task', () => {
    let taskToAdd = 'Irrelevant-task';
    let taskToAddEmitted = '';
    component.addTaskEvent.subscribe((text:string) => taskToAddEmitted = text);
    component.taskToAdd.setValue(taskToAdd);

    component.onAddTask(new Event('click'));

    expect(taskToAddEmitted).toBe(taskToAdd);
  });
});
