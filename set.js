//Sets - each value is unique
//ES6 Set functions: has, add, clear(removes all values), delete
//Array to set: new Set(array)
//Set to array: [...set]
//Other functions in Set not in ES6: union, intersection, difference, subset

function MySet() {
  this.storage = []; //we'll use array without duplicate values for storage

  this.has = function (value) {
    if (this.storage.indexOf(value) !== -1) {
      return true;
    }
    return false;
  };

  this.add = function (value) {
    if (!this.has(value)) {
      this.storage.push(value);
    }
    return this.storage;
  };

  this.clear = function () {
    this.storage = [];
  };

  this.delete = function (value) {
    if (this.has(value)) {
      this.storage.splice(this.storage.indexOf(value), 1);
      return true;
    }
    return false;
  };

  //combines the values of both the array and removes the duplicates
  this.union = function (secondArray) {
    let union = new MySet();
    this.storage.forEach((element) => {
      union.add(element);
    });
    secondArray.forEach((element) => {
      if (!union.has(element)) {
        union.add(element);
      }
    });
    return union;
  };

  //returns common values from both arrays
  this.intersection = function (secondArray) {
    let intersection = new MySet();
    this.storage.forEach((element) => {
      if (secondArray.indexOf(element) !== -1) {
        intersection.add(element);
      }
    });
    secondArray.forEach((element) => {
      if (this.has(element)) {
        intersection.add(element);
      }
    });
    return intersection;
  };

  // Union minus intersection
  this.difference = function (secondArray) {
    let firstSet = new MySet();
    this.storage.forEach((element) => {
      firstSet.add(element);
    });
    let union = firstSet.union(secondArray);
    let intersection = firstSet.intersection(secondArray);

    intersection.storage.forEach((element) => {
      union.delete(element);
    });

    return union;
  };

  //if first subset is contained in second subset
  this.subset = function (secondArray) {
    return this.storage.every((element) => {
      return secondArray.indexOf(element) !== -1;
    });
  };
}

const firstArray = [1, 2, 3, 4, 5];
const secondArray = [2, 4, 6, 8];

let firstSet = new MySet();
firstArray.forEach((element) => {
  firstSet.add(element);
});
// console.log(firstSet.storage);
// console.log(firstSet.has(6));
// console.log(firstSet.delete(5));
// console.log(firstSet.storage);

// console.log(firstSet.union(secondArray).storage);
// console.log(firstSet.intersection(secondArray).storage);
// console.log(firstSet.difference(secondArray).storage);
// console.log(firstSet.subset(secondArray));
