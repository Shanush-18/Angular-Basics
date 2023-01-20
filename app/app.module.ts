import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CommonModule } from '@angular/common';
import { TodoServiceService } from './todo-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CompletedPipe } from './completed.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, HelloComponent, CompletedPipe],
  providers: [TodoServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
