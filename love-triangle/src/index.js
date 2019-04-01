module.exports = function getLoveTrianglesCount(arrayOfSpichonee) {
let result = 0;
  for (let i = 0; i < arrayOfSpichonee.length; i++){
    let triangle = [];
    triangle.push(i + 1);
    triangle.push(arrayOfSpichonee[i]);
    triangle.push(arrayOfSpichonee[triangle[1] - 1]);
    triangle.push(arrayOfSpichonee[triangle[2] - 1]);
    if (triangle[0] === triangle[3] && triangle[1] != triangle[0]){
      result += 1;
    }
  }
 return result/3;
};
