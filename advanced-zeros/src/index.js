module.exports = function getZerosCount(count, base) {
  let allPrimeFactors = {};
  for (let i = 2; i <= base; i++){
    let num = 0;
    while (base % i === 0){
      num += 1;
      allPrimeFactors[i] = num;
      base = base / i;
    }
  }
  let arrayOfBaseNumbers = Object.keys(allPrimeFactors);
  let answer = [];
  for (let a = 0; a < arrayOfBaseNumbers.length; a++){
    let result = 0;
    result += Math.trunc(count / arrayOfBaseNumbers[a]);
    let pow = 2;
    while (Math.trunc(count / Math.pow(arrayOfBaseNumbers[a], pow))){
      result += Math.trunc(count / Math.pow(arrayOfBaseNumbers[a], pow));
      pow += 1;
    }
    answer.push(Math.trunc(result / allPrimeFactors[arrayOfBaseNumbers[a]]));
  }
  return (answer.sort((a, b) => a - b)[0]);
}
