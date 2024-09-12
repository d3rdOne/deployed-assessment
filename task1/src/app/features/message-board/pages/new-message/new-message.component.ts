import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormMode } from '../../../../shared/models/enums/form-mode';
import { MessageFormComponent } from '../../components/message-form/message-form.component';
import { MessageBoardService } from '../../message-board.service';
import { Message, MessageForm } from '../../../../shared/models/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-message',
  standalone: true,
  imports: [MessageFormComponent],
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.scss'
})
export class NewMessageComponent{;

  constructor(private fb: FormBuilder, private messageBoardService: MessageBoardService, private router: Router) {
  }

  get FormMode() {
     return FormMode
  }

  submitForm(messageForm: any) {
    let message: MessageForm = {
      title: messageForm.title,
      body: messageForm.body
    }

    this.messageBoardService.newMessage(message).subscribe(_ => {
      this.router.navigate(['/messages'])
    })
  }
}
