class Sorter {
  constructor() {
    this.array = [];
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }
  
  sort(indices) {
    indices.sort();
    let arr = [];
    for (let i = 0; i < indices.length; i++){
      arr.push(this.array[indices[i]]);
    }
    if (this.compareFunction != undefined){
      arr.sort(this.compareFunction);
    }
    else {
      arr.sort((a, b) => a - b);
    }
    if (indices[0] + 1 == indices[1]){
      this.array.splice(indices[0], indices.length, ...arr);
    }
    else {
      for (let i = 0; i < indices.length; i++){
        this.array.splice(indices[i], 1, arr[i]);
      }
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
