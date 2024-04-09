
function calculate(event) {
  const inputValue = event.target.value;
  const expression = /\+|\-|\*|\//;
  const numbers = inputValue.split(expression);
  const operation = inputValue.match(expression);
  const operator = operation && operation.length > 0 ? operation[0] : '';
  const numberA = +numbers[0];
  const numberB = +numbers[1];
  if(isNaN(numberA) || isNaN(numberB) || operation === null){
    updateResult('Expression not recognized');
    return;
  }

  const calculator = new Calculator();
  calculator.add(numberA);

  let result;
  switch (operator) {
    case '+':
      result = calculator.add(numberB);
      break;
    case '-':
      result = calculator.subtract(numberB);
      break;
    case '*':
      result = calculator.multiply(numberB);
      break;
    case '/':
      result = calculator.divide(numberB);
      break;
    default:
      result = 'Operation not recognized';
      break;
  }
  updateResult(result);
}

document.getElementById('inputValue') && document.getElementById('inputValue').addEventListener('change', calculate);

function showVersion() {
  const calculator = new Calculator();
  const element = document.getElementById('version');
  if(element){
    calculator.version.then(function (version){
      element.innerText = version;
    })
  }
}

function updateResult(result){
  let element = document.getElementById('result');
  if(element){
    element.innerText = result;
  }
}
