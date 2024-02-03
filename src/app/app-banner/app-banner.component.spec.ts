import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {AppBannerComponent} from './app-banner.component';
import {MessageService} from '../message.service';
import {of} from 'rxjs';

describe('AppBannerComponent', () => {
    let component: AppBannerComponent;
    let fixture: ComponentFixture<AppBannerComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AppBannerComponent],
            providers: [{
                provide: MessageService,
                useValue: jasmine.createSpyObj('messageService', ['getMessages'])
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
        const messageService = TestBed.inject(MessageService) as jasmine.SpyObj<MessageService>;
        messageService.getMessages.and.returnValue(observable)

        expect(component.getMessages()).toEqual(observable);
    });
});
