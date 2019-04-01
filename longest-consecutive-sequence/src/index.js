module.exports = function longestConsecutiveLength(array) {
  let object = {};
  if (array.length == 0){
    return 0;
  }
  else if (array.length == 1) {
    return 1;
  }
  else {
    let arrOfLengths = [1];
    for (let i = 0; i < array.length; i++){
      object[array[i]] = true;
      let length = 1;
      var current = array[i];
      while (object[current - 1]) {
        length += 1;
        current = current - 1;
      }
      var current = array[i];
      while (object[current + 1]) {
        length += 1;
        current = current + 1;
      }
      if (length > 1 && length > arrOfLengths[0]){
        arrOfLengths = [length];
      }
    }
    return arrOfLengths[0];
  }
}
