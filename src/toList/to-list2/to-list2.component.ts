import { Component, OnInit } from '@angular/core';
import { TodoItem, DataService } from '../../app/data.service';

@Component({
  selector: 'app-to-list2',
  templateUrl: './to-list2.component.html',
  styleUrl: './to-list2.component.css'
})
export class ToList2Component implements OnInit {
  todos: TodoItem[] = [];
  newTodo: TodoItem = { id: 0, name: '', age: 0 };

  constructor(private todoService: DataService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  addTodo(): void {
    this.todoService.addTodo(this.newTodo).subscribe(todo => {
      this.todos.push(todo);
      this.newTodo = { id: 0, name: '', age: 0 };
    });
  }

  updateTodo(todo: TodoItem): void {
    this.todoService.updateTodo(todo).subscribe(() => {
      this.loadTodos();
    });
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }
}
