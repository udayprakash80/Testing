describe('main.js', function (){
  describe('calculate()', function (){
    it('validate expression if first number is invalid', function () {
        spyOn(window, 'updateResult');
        calculate({target: {value: 'a+4'}});
        expect(window.updateResult).toHaveBeenCalled();
        expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
        expect(window.updateResult).toHaveBeenCalledTimes(1)
    });

    it('validate expression if second number is invalid', function () {
      spyOn(window, 'updateResult');
      calculate({target: {value: '4+a'}});
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
    });

    it('validate expression if operation is invalid', function () {
      const spy = spyOn(window, 'updateResult');
      calculate({target: {value: '4_4'}});
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith('Expression not recognized');
    });

    it('call add', function () {
      const spy = spyOn(Calculator.prototype, 'add');
      calculate({target: {value: '5+4'}});
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(4);
      expect(spy).toHaveBeenCalledWith(5);
      expect(spy).toHaveBeenCalledTimes(2);
    });
    it('call subtract', function () {
      const spy = spyOn(Calculator.prototype, 'subtract');
      calculate({target: {value: '5-4'}});
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(4);
      expect(spy).not.toHaveBeenCalledWith(5);
      expect(spy).toHaveBeenCalledTimes(1)
    });
    it('call multiply', function (){
      const spy = spyOn(Calculator.prototype, 'multiply');
      calculate({target: {value: '5*4'}});
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(4);
      expect(spy).not.toHaveBeenCalledWith(5);
      expect(spy).toHaveBeenCalledTimes(1)
    });
    it('call divide', function (){
      const spy = spyOn(Calculator.prototype, 'divide');
      calculate({target: {value: '8/4'}});
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(4);
      expect(spy).not.toHaveBeenCalledWith(8);
      expect(spy).toHaveBeenCalledTimes(1)
    });
    xit('validate Operation', function (){

    });
    it('validate updateResult (example callThrough)', function (){
        spyOn(window, 'updateResult');
        spyOn(Calculator.prototype, 'divide').and.callThrough();
        calculate({target: {value: '8/4'}});
        expect(window.updateResult).toHaveBeenCalled();
        expect(Calculator.prototype.divide).toHaveBeenCalled();
        expect(window.updateResult).toHaveBeenCalledWith(2);

    });
    it('validate updateResult for call fake', function (){
      spyOn(window, 'updateResult');
      spyOn(Calculator.prototype, 'divide').and.callFake(function (){
        return 'Fake call';
      });
      calculate({target: {value: '8/4'}});
      expect(window.updateResult).toHaveBeenCalled();
      expect(Calculator.prototype.divide).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith('Fake call');

    });

    it('validate updateResult for return value', function (){
      spyOn(window, 'updateResult');
      spyOn(Calculator.prototype, 'divide').and.returnValue('returns a value');
      calculate({target: {value: '8/4'}});
      expect(window.updateResult).toHaveBeenCalled();
      expect(Calculator.prototype.divide).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith('returns a value');

    });
    it('udaya doest handle errors', function (){
      spyOn(Calculator.prototype, 'multiply').and.throwError('some error');
      calculate({target: {value: '8/4'}});

    });



  });

  describe('updateResult()', function (){
    beforeAll(function (){
      const element = document.createElement('div');
      element.setAttribute('id', 'result');
      document.body.appendChild(element);
      this.element = element;
    });
    afterAll(function (){
      const element = document.getElementById('result');
      document.body.removeChild(this.element);
    });
    it('add result to dom element', function (){
        updateResult('5');
        expect(this.element.innerText).toBe('5');
    });
  });

  describe('showVersion()', function (){

    it('should call the show version method', function (done){
        const element = spyOn(document, 'getElementById').and.returnValue({
          innerText: null
        })
        const spy = spyOnProperty(Calculator.prototype, 'version', 'get').and.returnValue(Promise.resolve('0.1'))
        showVersion();
        expect(spy).toHaveBeenCalled();
        spy().then(function (version){
          expect(element().innerText).toBe(version);
          done();
        })

    });
  });

});
