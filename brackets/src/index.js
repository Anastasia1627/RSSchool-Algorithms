module.exports = function check(str, bracketsConfig) {
  let strArr = str.split("");
  for (let a = 0; a < strArr.length; a++){
    for (let b = 0; b < bracketsConfig.length; b++){
      if (strArr[a] === bracketsConfig[b][0] && strArr[a + 1] === bracketsConfig[b][1]){
        strArr.splice(a, 2);
        return check(strArr.join(""), bracketsConfig);
      }
    }
  }
  return strArr.length == 0;
}
