import { StatsService } from './../services/stats.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList!: Todo[];
  statNum!: number;

  constructor(private serviceStats: StatsService) { }

  ngOnInit(): void {
    this.todoList = [
      {userId: 1, id: 1, title: "first todo", completed: false},
      {userId: 2, id: 2, title: "first todo", completed: true}
    ]
  }

  stats(){
     this.statNum = this.serviceStats.getStats(this.todoList, "completed", true);
     console.log(this.statNum);
  }

}
