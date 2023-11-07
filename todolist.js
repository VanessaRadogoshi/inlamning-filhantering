import fs from 'fs';
import PromptSync from 'prompt-sync';
import { Task } from './tasks.js'

const prompt = PromptSync({ sigint: true });

const data = fs.readFileSync('tasks.csv', 'utf8');
const savedTasks = data.trim().split('\r\n');


class TodoList {
  constructor() {
    this.tasks = [];
    this.readFromCsv();
  }

  addTask(taskName) {
    const task = new Task(taskName);
    this.tasks.push(task);
    this.saveToCsv();
}

  completeTask(taskName) {
    const task = this.tasks.find((t) => t.name === taskName);
    if (task) {
      task.completed = !task.completed;
      this.saveToCsv();
    }
  }

}


