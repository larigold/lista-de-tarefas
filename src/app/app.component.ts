import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

interface Todo {
  valor: string;
  status: boolean;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Aula de Angular';
  value = '';

  todoLists: Todo[] = [];

  gravarTodos(todo: string) {
    const todoList = this.todoLists.some((todos: Todo) => {
      return todos.valor == todo;
    });

    if (!todoList) {
      this.todoLists.push({ valor: todo, status: false });
      this.value = '';
    }
  }

  concluirTarefa(tarefa: Todo) {
    this.todoLists.find((todos: Todo) => {
      if (todos.valor === tarefa.valor) {
        todos.status = !todos.status;
      }
    });
  }

  deletarTarefa(tarefa: Todo) {
    this.todoLists.find((todos: Todo, index: number) => {
      if (todos.valor === tarefa.valor) {
        this.todoLists.splice(index, 1);
      }
    });
  }
}
