import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private taskList: string[] = [];
  constructor() { }

  addTask(task: string): void {
    this.taskList.push(task);
  }

  getTasks(): string[] {
    return this.taskList;
  }
}
