import PromptSync from "prompt-sync";
import { TodoList } from './todolist.js';

const prompt = PromptSync({ sigint: true });


const myTodoList = new TodoList();

console.log('1.Add task');
console.log('2.Remove task');
console.log('3.Complete task');
console.log('4.Display tasks');

let choice = prompt("Enter your choice from 1 to 4: ");

if (choice === '1') {
  myTodoList.addTask(prompt('Add task: '));
} 
else if (choice === '2') {
  myTodoList.removeTask(prompt('Remove task: '));
}
else if (choice === '3') {
  myTodoList.completeTask(prompt('Complete task: '));
}
else if (choice === '4') {
  displayTasks(myTodoList);
}
else {
  console.log('HAKUNA MATATA :)')
}

myTodoList.saveToCsv();


function displayTasks(todoList) {
  for (const task of todoList.tasks) {
    const status = task.completed ? 'completed' : 'not completed';
    console.log(`${task.name} : ${status}`);
  }
}