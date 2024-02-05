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

  @Input() textoPrueba: string = '';
  @Output() textoPruebaChange = new EventEmitter<string>();

  taskToAdd:FormControl = new FormControl();

  showTaskToAdd(event: Event){
    event.preventDefault();
    // console.log(this.taskToAdd.value);

    this.textoPruebaChange.emit(this.taskToAdd.value);
  }
}
