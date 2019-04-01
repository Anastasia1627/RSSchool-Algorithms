const createEnumerableProperty = function(propertyName){
  return propertyName;
};

const createNotEnumerableProperty = function(propertyName){
  Object.defineProperty(Object.prototype, propertyName, {
    value: "value",
    enumerable: false
  });
  return propertyName;
};

const createProtoMagicObject = function(){
  createProtoMagicObject.prototype = createProtoMagicObject.__proto__;
  return createProtoMagicObject;
};

let incrementorCount = 0;
const incrementor = function(){
  incrementorCount++;
  incrementor.valueOf = () => {
    return incrementorCount;
  };
  return incrementor;
}

let asyncIncrementorCount = 0;
const asyncIncrementor = function(){
  return new Promise(resolve => {
    asyncIncrementorCount++;
    resolve(asyncIncrementorCount);
  });
}

const createIncrementer = function*(){
  let curr = 0;
  while (true) {
    yield ++curr;
  }
  return createIncrementer;
}

const returnBackInSecond = (param) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(false);
    }, 1500);
    setTimeout(() => {
      resolve(param);
    }, 1000);
  });
};

const getDeepPropertiesCount = function(obj){
  let count = Object.keys(obj).length;
  for (let prop in obj) {
    if (typeof(obj[prop]) == 'object') {
      count += getDeepPropertiesCount(obj[prop]);
    }
  }
  return count;
};

const createSerializedObject = function(){
  return new String('object');
};

const sortByProto = function(array){
  return array.sort();
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
