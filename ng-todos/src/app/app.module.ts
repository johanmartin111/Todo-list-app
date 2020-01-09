// ANGULAR DEPs
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// ROUTES
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

// COMPONENTS
import { AppComponent } from './app.component';
import { FoldersComponent } from './pages/folders/folders.component';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoEditComponent } from './pages/todo-edit/todo-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FoldersComponent,
    TodosComponent,
    TodoEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
