// Example, remove file
class Example {
  constructor(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;
  }

  get sum() {
    return this.calcSum();
  }

  calcSum() {
    return this.value1 + this.value2;
  }
}

export default Example;
