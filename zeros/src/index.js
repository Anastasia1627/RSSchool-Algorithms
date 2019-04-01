// The third solution - is the optimal quick solution.
module.exports = function getZerosCount(number) {
  let count = 0;
  count += Math.trunc(number / 5);
  let pow = 2;
  while (Math.trunc(number / Math.pow(5, pow))){
    count += Math.trunc(number / Math.pow(5, pow));
    pow += 1;
  }
  return count;
}


// The second solution - it's not clear why it works
// module.exports = function getZerosCount(number) {
//   let count = 0;
//   count += Math.trunc(number / 5);
//   while (number > 1){
//     count += Math.trunc(number / 25);
//     number = number / 5;
//   }
//   return count;
// }

//
// The first solution - is a long run of tests
// module.exports = function getZerosCount(number) {
//   let count = 0;
//   for (let i = 1; i <= number; i++){
//     let current = i;
//     while (current % 5 === 0){
//       count += 1;
//       current = current/5;
//     }
//   }
//   return count;
// }
