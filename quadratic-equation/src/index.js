module.exports = function solveEquation(equation){
  let result = [];
  let a = equation.split(" ")[0];
  let b = equation.split(" ")[3] + equation.split(" ")[4];
  let c = equation.split(" ")[7] + equation.split(" ")[8];
  let d = b * b - 4 * a * c;
  if (d > 0){
    let x1 = (- b + Math.sqrt(d))/2/a;
    let x2 = (- b - Math.sqrt(d))/2/a;
    result.push(Math.round(x1), Math.round(x2));
  }
  return result.sort((a, b) => a - b);
}
