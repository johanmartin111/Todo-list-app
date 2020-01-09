import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/** TODO TASK MODEL */
export interface TodoInterface {
  id?: number;
  title?: string;
  done?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private http: HttpClient) { }

  /** RETURN ALL TODOS TASKS */
  getTodos(): Promise<any> {
    return this.http.get('http://localhost:8080/todo').toPromise();
  }

  /** RETURN TODO TASK BY ID */
  getTodo(id: number): Promise <any> {
    return this.http.get(`http://localhost:8080/todo/${id}`).toPromise();
  }

  /** CREATE A NEW TODO */
  createTodo(data: any): Promise<any> {
    return this.http.post('http://localhost:8080/todo', data).toPromise();
  }

  /** UPDATE A ASSIGMENT */
  updateTodo(data: TodoInterface) {
    return this.http.put('http://localhost:8080/todo', data).toPromise();
  }

  /** DELETE A ASSIGMENT */
  deleteTodo(id: number) {
    return this.http.delete(`http://localhost:8080/todo/${id}` ).toPromise();
  }
}
