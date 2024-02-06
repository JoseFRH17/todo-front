import { Component } from '@angular/core';

import { AddComponent } from './add/add.component';
import {TaskListComponent} from "./task-list/task-list.component";
import { Task } from './models/task';

@Component({
    selector: 'app-todo',
    standalone: true,
    imports: [AddComponent, TaskListComponent],
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.css'
})
export class TodoComponent {

    taskList: Task[] = [
        {id: '1', title: 'Tarea 1', isCompleted: false},
        {id: '2', title: 'Tarea 2', isCompleted: true},
        {id: '3', title: 'Tarea 3', isCompleted: false}
    ];

    onAddTaskChange(title:string){
        const task: Task = {id: '4', title, isCompleted: false}
        this.taskList.push(task);
    }

}
