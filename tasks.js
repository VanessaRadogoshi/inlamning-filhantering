export class Task {
  constructor(name, completed = false, priority) {
    this.name = name;
    this.completed = completed;
    this.priority = priority;
  }
    
  changePriority(newPriority) {
    this.priority = newPriority;
  }
}