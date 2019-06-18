function Calc() {
  this.new_value = true;
  this.value_1;
  this.value_2;
  this.operation;
  this.result = 0;
}

Calc.prototype.setNewValue = function (isNew) {
  this.new_value = isNew;
}

Calc.prototype.isNewValue = function () {
  return this.new_value;
}

Calc.prototype.setVal1 = function (value) {
  this.value_1 = parseFloat(value);
}

Calc.prototype.setVal2 = function (value) {
  this.value_2 = parseFloat(value);
}

Calc.prototype.setOperation = function (operation) {
  this.operation = operation;
}

Calc.prototype.setValue = function (value) {
  if (this.value_1 == undefined) {
    this.setVal1(value);
    this.setResult(this.value_1);
  } else {
    this.setVal2(value);
    this.calcResult();
  }

  this.setNewValue(true);
}

Calc.prototype.calcResult = function () {
  switch(this.operation) {
    case 'SUM':
      this.setResult(this.value_1 + this.value_2);
      break;
    case 'SUB':
      this.setResult(this.value_1 - this.value_2);
      break;
    case 'DIV':
      this.setResult(this.value_1 / this.value_2);
      break;
    case 'MUL':
      this.setResult(this.value_1 * this.value_2);
      break;
  }

  this.operation = '';
  this.value_1 = this.result;
  this.value_2 = 0;

  return this.result;
}

Calc.prototype.setResult = function (result) {
  this.result = result;
}

Calc.prototype.getResult = function () {
  return this.result;
}

Calc.prototype.reset = function () {
  this.value_1 = undefined;
  this.value_2 = undefined;
  this.operation = undefined;
  this.result = 0;
}