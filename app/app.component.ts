import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoServiceService } from './todo-service.service';
interface TodoList {
  title: string;
  date: Date;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'Angular';
  todoList: TodoList[] = [
    {
      title: 'qwertyu',
      date: new Date(),
    },
  ];
  todoFg: FormGroup;
  today = new Date();
  todo$;
  constructor(
    private fb: FormBuilder,
    private todoServiceService: TodoServiceService
  ) {}

  ngOnInit() {
    this.todoFg = this.fb.group({
      title: ['qqqqqqqqqqqqqq', Validators.required],
      date: [this.today, [Validators.required]],
    });
    this.todo$ = this.todoServiceService?.getAllTodoList();
  }
  onClickBtn() {
    const todo: TodoList = {
      title: this.todoFg?.value?.title,
      date: this.todoFg?.value?.date,
    };
    this.todoList.push(todo);
  }
}
