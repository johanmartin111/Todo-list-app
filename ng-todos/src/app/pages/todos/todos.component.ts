import { Component, OnInit } from '@angular/core';
import { TodoInterface, TodoApiService } from 'src/app/services/todo-api/todo-api.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public todos: Array<TodoInterface>;
  public title: string;

  constructor(private todoApi: TodoApiService) {
    this.todos = [];
    this.title = '';
  }

  /** */
  ngOnInit() {
    this.getTodos();
  }

  /** */
  getTodos() {
    this.todoApi.getTodos()
    .then(data => {
      this.todos = data;
    });
  }

  /** */
  createTodo(title) {
    this.todoApi.createTodo({ title })
    .then(data => {
      this.getTodos();
      this.title = '';
    });
  }

  /** */
  updateTodo(data: TodoInterface) {
    this.todoApi.updateTodo(data)
    .then(_ => {
      this.getTodos();
    });
  }

  deleteTodo(id: number) {
    this.todoApi.deleteTodo(id)
    .then(_ => {
      this.getTodos();
    });
  }

}
