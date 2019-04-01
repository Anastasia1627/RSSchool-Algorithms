module.exports = function solveSudoku(matrix) {
  function removeNullInRow(row, candidate) {
    return matrix[row].indexOf(candidate) == -1;
  }

  function removeNullInColumn(column, candidate) {
    let arrColumn = [];
    for (let i = 0; i < 9; i++) {
      arrColumn.push(matrix[i][column]);
    }
    return arrColumn.indexOf(candidate) == -1;
  }

  function removeNullInCell(row, column, candidate) {
    let x = (Math.trunc(row / 3)) * 3;
    let y = (Math.trunc(column / 3)) * 3;
    let arrCell = [];
    for (let a = x; a < x + 3; a++){
      for (let b = y; b < y + 3; b++){
        arrCell.push(matrix[a][b]);
      }
    }
    return arrCell.indexOf(candidate) == -1;
  }

  function checkCandidateInRow(row, candidate) {
    let count = 0;
    for (let i = 0; i < 9; i++) {
      let currentNumber = matrix[row][i];
      if (typeof(currentNumber) == 'number') {
        if (currentNumber == candidate) {
          return false;
        }
      }
      else if(typeof(currentNumber) == 'object'){
        if (currentNumber.indexOf(candidate) != -1){
          count +=1;
        }
      }
    }
    return count == 1;
  }

  function checkCandidateInColumn(column, candidate) {
    let count = 0;
    for (let i = 0; i < 9; i++) {
      let currentNumber = matrix[i][column];
      if (typeof(currentNumber) == 'number') {
        if (currentNumber == candidate) {
          return false;
        }
      }
      else if(typeof(currentNumber) == 'object'){
        if (currentNumber.indexOf(candidate) != -1){
          count +=1;
        }
      }
    }
    return count == 1;
  }

  function checkCandidateInCell(row, column, candidate) {
    let x = (Math.trunc(row / 3)) * 3;
    let y = (Math.trunc(column / 3)) * 3;
    let arrCell = [];
    for (let a = x; a < x + 3; a++){
      for (let b = y; b < y + 3; b++){
        arrCell.push(matrix[a][b]);
      }
    }
    let count = 0;
    for (let i = 0; i < 9; i++) {
      let currentNumber = arrCell[i];
      if (typeof(currentNumber) == 'number') {
        if (currentNumber == candidate) {
          return false;
        }
      }
      else if(typeof(currentNumber) == 'object'){
        if (currentNumber.indexOf(candidate) != -1){
          count +=1;
        }
      }
    }
    return count == 1;
  }

  function check(row, column, candidate) {
    for (let i = 0; i < 9; i++) {
      let currentNumber = matrix[row][i];
      if(typeof(currentNumber) == 'object'){
        if (currentNumber.indexOf(candidate) != -1){
          currentNumber.splice(currentNumber.indexOf(candidate), 1);
          if(currentNumber.length == 1){
            matrix[row][i] = currentNumber[0];
            check(row, i, matrix[row][i]);
          }
        }
      }
    }
    for (let i = 0; i < 9; i++) {
      let currentNumber = matrix[i][column];
      if(typeof(currentNumber) == 'object'){
        if (currentNumber.indexOf(candidate) != -1){
          currentNumber.splice(currentNumber.indexOf(candidate), 1);
          if(currentNumber.length == 1){
            matrix[i][column] = currentNumber[0];
            check(i, column, matrix[i][column]);
          }
        }
      }
    }
  }

  function findCandidate() {
    for (let row = 0; row < 9; row++) {
      for (let column = 0; column < 9; column++) {
        if (matrix[row][column] === 0){
          let arr = [];
          for (let candidate = 1; candidate <= 9; candidate++) {
            if (removeNullInRow(row, candidate) && removeNullInColumn(column, candidate) && removeNullInCell(row, column, candidate)){
              arr.push(candidate);
            }
          }
          if (arr.length == 1){
            matrix[row][column] = arr[0];
            check(row, column, matrix[row][column]);
          }
          else {
            matrix[row][column] = arr;
          }
        }
        else {
          let arr = [];
          for (let i = 0; i < matrix[row][column].length; i++) {
            let candidate = matrix[row][column][i];
            if (checkCandidateInRow(row, candidate) || checkCandidateInColumn(column, candidate) || checkCandidateInCell(row, column, candidate)){
              matrix[row][column] = candidate;
              check(row, column, matrix[row][column]);
            }
          }
        }
      }
    }
  }

  findCandidate();
  findCandidate();
  return matrix;
}
