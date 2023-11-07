import PromptSync from "prompt-sync";
import { TodoList } from './todolist.js';

const prompt = PromptSync({ sigint: true });


const myTodoList = new TodoList();

console.log('1.Add task');
console.log('2.Remove task');
console.log('3.Complete task');
console.log('4.Display tasks');

let choice = prompt("Enter your choice from 1 to 4: ");

