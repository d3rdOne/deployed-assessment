import { Component } from '@angular/core';
import { MessageBoardService } from '../../message-board.service';
import { MessageCardComponent } from '../../components/message-card/message-card.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [MessageCardComponent, RouterModule],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss'
})
export class MessageListComponent {


  constructor(public messageBoardService: MessageBoardService, private router: Router) {}

  onDeleteMessage(id: number) {
    this.messageBoardService.deleteMessage(id)
  }

  navigateToDetails(id: number) {
    this.router.navigate(['/messages', id, 'details'])
  }


}
