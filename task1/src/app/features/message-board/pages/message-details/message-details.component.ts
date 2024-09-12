import { Component, OnInit } from '@angular/core';
import { Message } from '../../../../shared/models/message';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-message-details',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './message-details.component.html',
  styleUrl: './message-details.component.scss'
})
export class MessageDetailsComponent implements OnInit {


  message!: Message;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.message =  this.activatedRoute.snapshot.data['message']
  }
}
