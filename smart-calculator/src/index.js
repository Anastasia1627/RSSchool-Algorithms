class SmartCalculator {
  constructor(initialValue) {
    this.value = [initialValue];
    return this;
  }
  add(number) {
    this.value.push("+", number);
    return this;
  }
  subtract(number) {
    this.value.push("-", number);
    return this;
  }
  multiply(number) {
    this.value.push("*", number);
    return this;
  }
  devide(number) {
    this.value.push("/", number);
    return this;
  }
  pow(number) {
    this.value.push("^", number);
    return this;
  }
  valueOf() {
    let reverse = this.value.reverse();
    while (this.value.indexOf("^") != -1){
      let power = Math.pow(reverse[reverse.indexOf("^") + 1], reverse[reverse.indexOf("^") - 1]);
      reverse.splice(reverse.indexOf("^") - 1, 3, power);
    }
    this.value = reverse.reverse();
    while (this.value.indexOf("*") != -1){
      let mult = this.value[this.value.indexOf("*") - 1] * this.value[this.value.indexOf("*") + 1];
      this.value.splice(this.value.indexOf("*") - 1, 3, mult);
    }
    while (this.value.indexOf("/") != -1){
      let dev = this.value[this.value.indexOf("/") - 1] / this.value[this.value.indexOf("/") + 1];
      this.value.splice(this.value.indexOf("/") - 1, 3, dev);
    }
    while (this.value.indexOf("+") != -1 || this.value.indexOf("-") != -1){
      if (this.value[1] == "+"){
        let sum = this.value[0] + this.value[2];
        this.value.splice(0, 3, sum);
      }
      else if (this.value[1] == "-") {
        let subt = this.value[0] - this.value[2];
        this.value.splice(0, 3, subt);
      }
    }
    return this.value[0];
  }
}
module.exports = SmartCalculator;
