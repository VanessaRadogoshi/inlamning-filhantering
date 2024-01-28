import PromptSync from "prompt-sync";
import { TodoList } from './todolist.js';

const prompt = PromptSync({ sigint: true });


const myTodoList = new TodoList();


function displayMenu() {
  console.log('1.Add task');
  console.log('2.Remove task');
  console.log('3.Complete task');
  console.log('4.Display tasks');
  console.log('5.Change priority:');
}

let choice;
do {
  displayMenu();
  choice = prompt("Enter your choice from 1 to 4: ");

  if (choice === '1') {
    const taskName = prompt('Add task: ');
    const priority = prompt('Enter priority between 1 to three (1 being the most important): ');
    myTodoList.addTask(taskName, priority);
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
  else if (choice === '5') {
    const taskName = prompt('enter the name of the task of which you want to change the priority: ');
    const newPriority = prompt('Enter the new priority level between 1 to 3: ');
    myTodoList.changePriority(taskName, parseInt(newPriority, 10));
  }
  else {
    console.log('Invalid choice. You can try again.');
  }
} while (choice !== '4');




function displayTasks(todoList) {
  for (const task of todoList.tasks) {
    const status = task.completed ? 'completed' : 'not completed';

    console.log(`TaskName: ${task.name}, Priority: ${task.priority}`);
    console.log(`${task.name} : ${status}`);
  }
}