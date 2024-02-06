import {Component, Input} from '@angular/core';
import {Task} from "../models/task";

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
    @Input() taskList: Task[] = [];

    onIsCompleted(task: Task): void {
        task.isCompleted = !task.isCompleted;
    }
}
