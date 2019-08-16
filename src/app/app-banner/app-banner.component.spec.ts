import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBannerComponent } from './app-banner.component';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';

describe('AppBannerComponent', () => {
  let component: AppBannerComponent;
  let fixture: ComponentFixture<AppBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBannerComponent ],
      providers: [{ provide: MessageService, useValue: jasmine.createSpyObj('messageService', ['getMessages']) }]
    })
    .compileComponents();
  }));

  beforeEach(() => {   
    fixture = TestBed.createComponent(AppBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get messages', () => {
    let observable = Observable.create([]);
    TestBed.get(MessageService).getMessages.and.returnValue(observable);
    expect(component.getMessages()).toEqual(observable);
  });
});
