var inputValue;
var sumOp;
var subOp;
var divOp;
var mulOp;
var getResult;
var clearButton;
var calculadora;

function resetInput(value) {
  inputValue.value = value;
  inputValue.select();
}

window.addEventListener('load', function () {
  inputValue = document.getElementById('input_value');
  sumOp = document.getElementById('sum_op');
  subOp = document.getElementById('sub_op');
  divOp = document.getElementById('div_op');
  mulOp = document.getElementById('mul_op');
  getResult = document.getElementById('get_result');
  clearButton = document.getElementById('reset');

  calculadora = new Calc();
  resetInput(0);

  // document.addEventListener('keydown', function (e) {
  //   console.log(e);
  // });

  inputValue.addEventListener('keyup', function (e) {
    e.preventDefault();

    if (e.keyCode == 27) {
      resetInput(0);
      calculadora.reset();
    }
  });

  inputValue.addEventListener('click', function () {
    console.log("inputValue Clicked");
    this.select();
  });

  inputValue.addEventListener('keypress', function (e) {
    e.preventDefault();

    if (calculadora.isNewValue()) {
      this.value = "";
    }

    calculadora.setNewValue(false);

    if (e.charCode >= 48 && e.charCode <= 57) {
      inputValue.value += e.key;
    }

    switch (e.charCode) {
      case 42:
        calculadora.setValue(inputValue.value);
        calculadora.setOperation('MUL');
        resetInput(calculadora.getResult());
        break;
      case 43:
        calculadora.setValue(inputValue.value);
        calculadora.setOperation('SUM');
        resetInput(calculadora.getResult());
        break;
      case 45:
        calculadora.setValue(inputValue.value);
        calculadora.setOperation('SUB');
        resetInput(calculadora.getResult());
        break;
      case 47:
        calculadora.setValue(inputValue.value);
        calculadora.setOperation('DIV');
        resetInput(calculadora.getResult());
        break;
      case 13:
        calculadora.setValue(inputValue.value);
        calculadora.calcResult();
        resetInput(calculadora.getResult());
        break;
    }

    console.log(calculadora);
  });

  sumOp.addEventListener('click', function () {
    console.log("sumOp Clicked");
    calculadora.setValue(inputValue.value);
    calculadora.setOperation('SUM');
    resetInput(calculadora.getResult());
  });

  subOp.addEventListener('click', function () {
    console.log("subOp Clicked");
    calculadora.setValue(inputValue.value);
    calculadora.setOperation('SUB');
    resetInput(calculadora.getResult());
  });

  divOp.addEventListener('click', function () {
    console.log("divOp Clicked");
    calculadora.setValue(inputValue.value);
    calculadora.setOperation('DIV');
    resetInput(calculadora.getResult());
  });

  mulOp.addEventListener('click', function () {
    console.log("mulOp Clicked");
    calculadora.setValue(inputValue.value);
    calculadora.setOperation('MUL');
    resetInput(calculadora.getResult());
  });

  getResult.addEventListener('click', function () {
    console.log('getResult Clicked');
    calculadora.setValue(inputValue.value);
    calculadora.calcResult();
    resetInput(calculadora.getResult());
  });

  clearButton.addEventListener('click', function () {
    console.log('Reset calcl clicked');
    calculadora.reset();
    resetInput(0);
  });
});