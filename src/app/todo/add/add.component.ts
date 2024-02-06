import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'add-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  @Output() addTaskEvent = new EventEmitter<string>();

  taskToAdd:FormControl = new FormControl('');

  onAddTask(event: Event){
    event.preventDefault();

    this.addTaskEvent.emit(this.taskToAdd.value);
  }
}
