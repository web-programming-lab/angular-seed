import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-app-banner',
  templateUrl: './app-banner.component.html',
  styleUrls: ['./app-banner.component.css']
})
export class AppBannerComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  getMessages(): Observable<any> {
    return this.messageService.getMessages();
  }

}
