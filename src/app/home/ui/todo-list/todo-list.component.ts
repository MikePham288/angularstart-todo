import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../shared/interfaces/todo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  @Input({ required: true }) todos!: Todo[];
  @Output() deleteTodo = new EventEmitter<Todo>();
}
