import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AppBannerComponent} from './app-banner.component';
import {MessageService} from '../message.service';
import {of} from 'rxjs';

describe('AppBannerComponent', () => {
    let component: AppBannerComponent;
    let fixture: ComponentFixture<AppBannerComponent>;
    let messageService: jasmine.SpyObj<MessageService> = jasmine.createSpyObj('messageService', ['getMessages'])

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AppBannerComponent],
            providers: [{
                provide: MessageService,
                useValue: messageService
            }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppBannerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should get messages', () => {
        const observable = of([]);
        messageService.getMessages.and.returnValue(observable)

        expect(component.getMessages()).toEqual(observable);
    });
});
