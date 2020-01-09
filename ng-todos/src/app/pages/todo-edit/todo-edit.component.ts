import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TodoApiService, TodoInterface } from 'src/app/services/todo-api/todo-api.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  public todo: TodoInterface;

  constructor(private router: Router, private route: ActivatedRoute, private todoApi: TodoApiService) {
    this.todo  = { id: null, title: null, done: null };
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.getTodo(id);
  }

  /** */
  getTodo(id: number) {
    this.todoApi.getTodo(id).then(data => {
      this.todo = data;
    });
  }

  /** */
  updateTodo() {
    this.todoApi.updateTodo(this.todo).then(_ => {
      this.router.navigate(['/todos']);
    });
  }

}
