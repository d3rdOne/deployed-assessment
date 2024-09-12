import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../../core/layout/layout.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessageBoardService } from './message-board.service';

@Component({
  selector: 'app-message-board',
  standalone: true,
  imports: [LayoutComponent, RouterOutlet, CommonModule],
  templateUrl: './message-board.component.html',
  styleUrl: './message-board.component.scss'
})
export class MessageBoardComponent implements OnInit{

  constructor(public messageBoardService: MessageBoardService){}

  ngOnInit(): void {
  }
}
