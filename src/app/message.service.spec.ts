import { MessageService } from './message.service';
import { of } from 'rxjs';

describe('MessageService', () => {

  let httpClientSpy: { get: jasmine.Spy };
  let heroService: MessageService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    heroService = new MessageService(<any>httpClientSpy);
  });

  it('should be created', () => {
    const expectedMessages: any[] = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

    httpClientSpy.get.and.returnValue(of(expectedMessages));

    heroService.getMessages().subscribe(messages => expect(messages).toEqual(expectedMessages, 'expected heroes'), fail);
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
