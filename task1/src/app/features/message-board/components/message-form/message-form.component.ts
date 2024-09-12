import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormMode } from '../../../../shared/models/enums/form-mode';
import { Message } from '../../../../shared/models/message';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './message-form.component.html',
  styleUrl: './message-form.component.scss'
})
export class MessageFormComponent implements OnInit {

  @Input()
  mode: FormMode = FormMode.NEW;

  @Input()
  message?: Message;

  @Output()
  submitForm = new EventEmitter<any>();

  messageForm!: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializedForm(this.message);
  }

  initializedForm(message?: Message) {
    let title = '';
    let body= '';
    if(message) {
      title = message.title,
      body = message.body
    }

    this.messageForm = this.fb.group({
      title: [title, [Validators.required, Validators.minLength(5)]],
      body: [body , [Validators.required, Validators.minLength(10)]]
    })
  }

  onSubmitForm() {
    let message = this.messageForm.value;
    this.submitForm.emit(message);
  }
}
