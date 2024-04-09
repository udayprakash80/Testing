import {CalculatorService} from "./calculator.service";
import {LoggerService} from "../Logger/logger.service";
import {TestBed} from "@angular/core/testing";


describe('Calculator Service', () => {
  let loggerServiceSpy: jasmine.SpyObj<LoggerService>;
  let calculatorService: CalculatorService;
  beforeEach(() => {
    const mockLoggerService = jasmine.createSpyObj('loggerService', ['log'])
    TestBed.configureTestingModule({

      providers: [CalculatorService,
        {
          provide: LoggerService,
          useValue: mockLoggerService
        }
      ]
    })
    calculatorService = TestBed.inject(CalculatorService);
    loggerServiceSpy = TestBed.inject(LoggerService) as jasmine.SpyObj<LoggerService>;
  });

  it('should add two number ', () => {
    let result = calculatorService.add(2, 2);
    expect(result).toBe(4);
    expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two number ', () => {
    let result = calculatorService.subtract(4, 2);
    expect(result).toBe(2);
    expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
  });
})
