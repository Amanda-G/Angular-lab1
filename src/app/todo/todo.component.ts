import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: Todo[] = [
    { task: "Sweep til the floor's all clean", completed: true },
    { task: "Polish and wax", completed: true },
    { task: "Laundry", completed: false },
    { task: "Mop", completed: false },
    { task: "Shine up", completed: false },
    { task: "Sweep again", completed: false },
    { task: "It's like 7:15", completed: false },
    { task: "Read a book or 2 or 3", completed: false },
    { task: "paint", completed: false },
    { task: "play guitar", completed: false },
    { task: "Knit", completed: false },
    { task: "Cook", completed: false },
    { task: "Basically just wonder when will my life begin", completed: false }
  ];

  constructor() { }



  ngOnInit(): void {
  }

}
