import {MessageService} from './message.service';
import {of} from 'rxjs';
import {HttpClient} from "@angular/common/http";

describe('MessageService', () => {

    let httpClientSpy: jasmine.SpyObj<HttpClient>
    let messageService: MessageService;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj<HttpClient>('HttpClient', ['get']);
        messageService = new MessageService(httpClientSpy);
    });

    it('should get messages', () => {
        const expectedMessages: { id: number, name: string }[] = [
            {id: 1, name: 'A'},
            {id: 2, name: 'B'}
        ];

        httpClientSpy.get.and.returnValue(of(expectedMessages));

        messageService.getMessages().subscribe(messages => expect(messages).toEqual(expectedMessages));

        expect(httpClientSpy.get.calls.count()).toBe(1);
    });
});
