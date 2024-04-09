import {LoggerService} from "./logger.service";
import {TestBed} from "@angular/core/testing";

describe('LoggerService', () => {
  let loggerService: LoggerService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerService]
    })
    loggerService = TestBed.inject(LoggerService);
  })
  it('should not have any message', () => {
    expect(loggerService.messages.length).toBe(0);
  });

  it('should add the message when log is called', () => {
    loggerService.log("test");
    expect(loggerService.messages.length).toBe(1);
  })

  it('should clear the message when log is called', () => {
    loggerService.log("test");
    loggerService.clear();
    expect(loggerService.messages.length).toBe(0);
  })
})
