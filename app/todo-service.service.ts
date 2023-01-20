import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoServiceService {
  constructor(private http: HttpClient) {}

  getAllTodoList() {
    return this.http?.get('https://jsonplaceholder.typicode.com/todos');
  }
}
