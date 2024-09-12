import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Message, MessageForm } from '../../shared/models/message';
import { delay, from, map, Observable, tap } from 'rxjs';

@Injectable()
export class MessageBoardService {

  overlayVisible = signal(false);
  messages = signal([{
    "id": 1,
    "title": "Announcement No 1",
    "body": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus nam provident ut. Autem iste quisquam vero quasi id? Repellat sit sequi est recusandae pariatur, alias perferendis deserunt nihil iste, eligendi impedit? Voluptates ab eos distinctio quam a velit voluptate ipsa architecto ipsum reiciendis aut, non tempora tenetur recusandae cumque sequi veritatis fugiat? Repudiandae quis hic eum quaerat, voluptatem labore commodi. Eius vel temporibus enim ullam? Nam impedit ipsam eos sint recusandae, laboriosam molestiae? Beatae hic dignissimos delectus rerum dolore quibusdam laborum. Voluptates commodi aut deleniti vitae ex odio necessitatibus facilis reiciendis quo! Non dolor unde, inventore ab voluptate distinctio nulla./",
    "dateCreated": "2024-09-10T12:38:19.903Z"
  },
  {
    "id": 2,
    "title": "Announcement No 1",
    "body": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus nam provident ut.",
    "dateCreated": "2024-09-10T12:38:19.903Z"
  }])





  newMessage(messageForm: MessageForm): Observable<any> {
    return new Observable(observer => {
      this.showOverlay(true)
      setTimeout(() => {
        let newId = Math.max(...this.messages().map(message => message.id)) + 1;
        let newMessage: Message = {
          title: messageForm.title,
          body: messageForm.body,
          id: newId,
          dateCreated: (new Date()).toISOString()
        }
        this.messages.update(messages => [...messages, newMessage]);
        this.showOverlay(false)
        observer.next(newMessage);
        observer.complete();
      }, 500);
    })

  }


  deleteMessage(id: number) {
    this.showOverlay(true)
    setTimeout(() => {

      this.messages.update(messages => messages.filter(message => message.id !== id))
      this.showOverlay(false)
    }, 300)
  };


  getMessage(id: number): Observable<Message> {
    return new Observable(observer => {
      this.showOverlay(true);
      let message = this.messages().find(message => message.id === id);
      this.showOverlay(false);
      if(message) {
        observer.next(message);
      } else {
        throw new Error('Message not found');
      }

      observer.complete()
    })
  }

  showOverlay(show: boolean) {
    this.overlayVisible.update(_ => show);
  }
}
