import { Component } from '@angular/core';

import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [AddComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  taskList: string[] = ['Tarea 1', 'Tarea 2', 'Tarea 3'];

  onTextoPruebaChange(texto:string){
    this.taskList.push(texto);
  }
}
