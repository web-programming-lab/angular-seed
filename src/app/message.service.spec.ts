import { MessageService } from './message.service';
import { of } from 'rxjs';

describe('MessageService', () => {

  let httpClientSpy: { get: jasmine.Spy };
  let messageService: MessageService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    messageService = new MessageService(<any>httpClientSpy);
  });

  it('should get messages', () => {
    const expectedMessages: any[] = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

    httpClientSpy.get.and.returnValue(of(expectedMessages));

    messageService.getMessages().subscribe(messages => expect(messages).toEqual(expectedMessages, 'expected messages'), fail);
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
