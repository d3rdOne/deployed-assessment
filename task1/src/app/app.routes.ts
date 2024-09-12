import { Routes } from '@angular/router';
import { MessageBoardService } from './features/message-board/message-board.service';
import { MessageResolver } from './features/message-board/message-board.resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import(`./features/landing/pages/landing/landing.component`).then(c => c.LandingComponent)

  },
  { path: 'messages',
    loadComponent: () => import(`./features/message-board/message-board.component`).then (c => c.MessageBoardComponent),
    providers: [MessageBoardService, MessageResolver],
    children: [
      {
        path:'',
        loadComponent: () => import(`./features/message-board/pages/message-list/message-list.component`).then(c => c.MessageListComponent),
        title: 'Message'
      }, {
        path:'new',
        loadComponent: () => import(`./features/message-board/pages/new-message/new-message.component`).then(c => c.NewMessageComponent),
        title: 'New Message'
      }, {
        path:':id/details',
        resolve: {
          message: MessageResolver
        },
        loadComponent: () => import(`./features/message-board/pages/message-details/message-details.component`).then(c => c.MessageDetailsComponent)
      }
    ]
  }

];
