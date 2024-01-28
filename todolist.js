import fs from 'fs';
import PromptSync from 'prompt-sync';
import { Task } from './tasks.js'

const prompt = PromptSync({ sigint: true });

const data = fs.readFileSync('tasks.csv', 'utf8');
const savedTasks = data.trim().split('\r\n');


export class TodoList {
  constructor() {
    this.tasks = [];
    this.readFromCsv();
  }

  addTask(taskName, priority) {
    console.log(`Priority received: ${priority}`);
    console.log(`Priority received: ${priority}`);

    priority = parseInt(priority, 10);

    if (![1, 2, 3].includes(priority)) {
      console.log("Please only enter 1, 2 or 3.");
      return;
    }

    const task = new Task(taskName, false, priority);
    this.tasks.push(task);
    this.saveToCsv();
  }

  completeTask(taskName) {
    const task = this.tasks.find((t) => this.compareNames(t.name, taskName));
    if (task) {
      task.completed = !task.completed;
      this.saveToCsv();
    }
  }

  removeTask(taskName) {
    const index = this.tasks.findIndex((t) => this.compareNames(t.name, taskName));
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.saveToCsv();
    }
  }

  saveToCsv() {
    const taskData = this.tasks.map(task => `${task.name},${task.completed},${task.priority}`);
    fs.writeFileSync('tasks.csv', taskData.join('\n'));
  }

  readFromCsv() {
    if (fs.existsSync('tasks.csv')) {
      const data = fs.readFileSync('tasks.csv', 'utf8');
      this.tasks = data.trim().split('\n').map(taskData => {
        const [name, completed] = taskData.split(',');
        return new Task(name, completed === 'true');
      });
    }
  }


  compareNames(name1, name2) {
    return name1.toLowerCase() === name2.toLowerCase();
  }


  changePriority(taskName, newPriority) {
    const task = this.tasks.find((t) => this.compareNames(t.name, taskName));
    if (task) {
      task.changePriority(newPriority);
      this.saveToCsv();
    }
  }
}