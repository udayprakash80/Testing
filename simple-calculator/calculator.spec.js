describe('Calculator.js', function () {
    describe("Calculator", function (){
        let calculator;
        beforeEach(function (){
            calculator = new Calculator();
        });
        afterEach(function (){
        // clean up after each spec
        });

        it('should initialize the total', function () {
            expect(calculator.total).toBe(0);
        })
        describe("Test add Method", function (){
            it('should add number to total', function () {
                calculator.add(2);
                calculator.add(2);
                expect(calculator.total).toBe(4);
            });
        });

        describe("Test subtract Method", function (){
            it('should subtract number to total', function () {
                calculator.total = 30;
                calculator.subtract(5);
                expect(calculator.total).toBe(25);
            });
        });

        describe("Test multiply Method", function (){
            it('should multiply number to total', function () {
                // const calculator = new Calculator();
                calculator.total = 10;
                calculator.multiply(2);
                expect(calculator.total).toBe(20);
            });
        });

        describe("Test divide Method", function (){
            it('should divide number to total', function () {
                calculator.total = 30;
                calculator.divide(5);
                expect(calculator.total).toBe(6);
            });
        });

        describe("get version", function (){
          it('should fetch version from api', async function () {
            spyOn(window, 'fetch').and.returnValue(Promise.resolve(new Response('{"version": "0.1"}')));
            const version = await calculator.version;
              expect(version).toBe('0.1');
          });
      });

    })



})
