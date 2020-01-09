import { Routes } from '@angular/router';

// import { FoldersComponent } from './pages/folders/folders.component';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoEditComponent } from './pages/todo-edit/todo-edit.component';

/**
 * ROUTE -> COMPONENT
 */
export const ROUTES: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'todos/:id/edit',
    component: TodoEditComponent
  }
];
