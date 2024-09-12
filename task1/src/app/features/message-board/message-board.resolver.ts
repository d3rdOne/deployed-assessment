import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router } from "@angular/router";
import { Message } from "../../shared/models/message";
import { MessageBoardService } from "./message-board.service";
import { catchError, Observable, of, take } from "rxjs";

@Injectable()
export class MessageResolver implements Resolve<Message | null> {

  constructor(private messageBoardService: MessageBoardService, private router: Router){

  }

  resolve(route: ActivatedRouteSnapshot): Observable<Message | null> {
    let id = route.paramMap.get('id');
    return this.messageBoardService.getMessage(+id!).pipe(
      take(1),
      catchError((error) => {
        console.log(error)
        this.router.navigate(['/messages'])
        return of(null)
      }))

  }
 }