//Problem: Check whether a string is a palandrome
//#################################################

//Stacks with Arrays
const str = "racecar";
const strArr = [...str]; //string to array
let rstr = "";

for (let i = 0; i < str.length; i++) {
  rstr += strArr.pop(); //reversing the string
}

//comparision
if (str === rstr) {
  console.log("Palindrome", str, rstr);
} else {
  console.log("naaaahhh", str, rstr);
}

//Stacks with Objects
//functions: push, pop, peek, size
function Stack() {
  this.storage = {};
  this.size = -1;

  this.push = (value) => {
    this.size++;
    this.storage[this.size] = value;
  };

  this.pop = () => {
    if (this.size === -1) {
      return undefined;
    }
    const result = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return result;
  };

  this.peek = () => {
    return this.storage[this.size];
  };

  this.length = () => {
    return this.size;
  };
}

const word = "racecar";
let rword = "";

let letters = new Stack();

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (word === rword) {
  console.log("Palindrome", word, rword);
} else {
  console.log("naaaahhh", word, rword);
}
