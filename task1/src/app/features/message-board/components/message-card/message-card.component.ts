import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from '../../../../shared/models/message';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-message-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './message-card.component.html',
  styleUrl: './message-card.component.scss'
})
export class MessageCardComponent {

  @Input()
  message!: Message;

  @Output()
  deleteMessage = new EventEmitter<number>();

  @Output()
  clickedMessage = new EventEmitter<number>();


}
