import {Component} from '@angular/core';
import {MessageService} from '../message.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-app-banner',
  templateUrl: './app-banner.component.html',
  styleUrls: ['./app-banner.component.css']
})
export class AppBannerComponent {

  constructor(private messageService: MessageService) { }

  getMessages(): Observable<unknown> {
    return this.messageService.getMessages();
  }

}
