import fs from 'fs';
import PromptSync from 'prompt-sync';

const prompt = PromptSync({ sigint: true });

const data = fs.readFileSync('tasks.csv', 'utf8');

const savedTasks = data.trim().split('\r\n');



class Task {
  constructor(name, completed = false) {
    this.name = name;
    this.completed = completed;
  }
}