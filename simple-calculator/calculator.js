function Calculator() {
  this.total = 0;
}

Calculator.prototype.add = function (number){
  return this.total += number;
};
Calculator.prototype.subtract = function (number){
  return this.total -= number;
};
Calculator.prototype.multiply = function (number){
  return this.total *= number;
};
Calculator.prototype.divide = function (number){
  if( number ==0 ){
    throw new Error("number cann't be zero");
  }
  return this.total /= number;
};

Object.defineProperty(Calculator.prototype, 'version', {
  get: function (){
    return fetch(
      'https://gist.githubusercontent.com/udayprakash80/a9e20a15d76d76fbda2e7d808f31e073/raw/936f6bdc47553ba204a17abc18f6fff124c4ff63/version.json'
    ).then(function (result){

      return result.json();
    }).then(function (jsonData){
      return jsonData?.version;
    });
  },
  configurable: true,
  enumerable: true
})




