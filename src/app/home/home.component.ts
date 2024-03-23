import { Component, inject, signal } from '@angular/core';
import { TodoFormComponent } from './ui/todo-form/todo-form.component';
import { Todo } from '../shared/interfaces/todo';
import { TodoService } from '../shared/data-access/todo.service';
import { TodoListComponent } from './ui/todo-list/todo-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  todoService = inject(TodoService);
  showGreeting = signal(false);
  createTodo(todo: Todo) {
    console.log(todo);
  }

  toggleGreeting(){
      this.showGreeting.update((showGreeting) => !showGreeting)
  }
}
