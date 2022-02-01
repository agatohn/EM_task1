// Task 1
console.log("task 1");

function integerToBits(value) {
  if (value !== Math.floor(value)) {
    return console.log("No integer");
  }

  return Math.abs(value)
    .toString(2)
    .split("")
    .reduce((previousValue, currentValue) => {
      return previousValue + Number(currentValue);
    }, 0);
  // return Math.abs(value).toString(2).split("0").join("").split("").length;
}
console.log(integerToBits(-1234));

// Task 2
console.log("task 2");

function fizzbuzz(n) {
  let arr = [];
  for (let i = 1; i <= n; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}

console.log(fizzbuzz(40));

// Task 3
console.log("task 3");

function multiplyToOneDigit(input) {
  console.log(input);
  let arr = [];
  if (input !== Math.floor(input) || input !== Math.abs(input)) {
    return console.log("Incorrect input");
  }
  if (input.toString().length === 1) {
    return arr;
  }
  let itterable = input;
  while (itterable.toString().length > 1) {
    arr.push(
      Array.from(String(itterable), Number).reduce(function (
        previousValue,
        currentValue
      ) {
        itterable = previousValue * currentValue;
        return itterable;
      })
    );
  }
  return arr;
}

console.log(multiplyToOneDigit(277777788888899));

// Task 4
console.log("task 4");

Array.prototype.concatPolyfill = function (...args) {
  const result = [...this];
  for (let i of args) {
    result.push(...i);
  }
  return result;
};

const arr1 = ["a", "a", "a", "b", "a", "a", "c"];
const arr2 = ["d", "e", "f"];
const arr3 = arr1.concatPolyfill(arr2, arr1);
console.log(arr3);

Array.prototype.lastIndexOfPolyfill = function (search) {
  const newArr = Array.from(this.entries())
    .filter((i) => i[1] === search)
    .map((i) => i[0]);
  return newArr[newArr.length - 1];
};

console.log(arr1.lastIndexOfPolyfill("a"));

Array.prototype.includesPolyfill = function (search) {
  return !!this.indexOf(search);
};

console.log(arr1.includesPolyfill("b"));

String.prototype.repeatPolyfill = function (count) {
  let str = "";
  for (let i = 0; i <= count; i += 1) {
    str = str.concat(this);
  }
  return str;
};
const str = "1dsfsdfs";
console.log(str.repeatPolyfill(5));

String.prototype.substrPolyfill = function (index, count) {
  return this.split("")
    .slice(index, index + count)
    .join("");
  // return this.substring(index, index + count);
};
console.log(str.substrPolyfill(1, 4));

String.prototype.substringPolyfill = function (startIndex, endIdex) {
  if (!endIdex) {
    return this.split("").slice(startIndex).join("");
    // return this.substr(startIndex, this.length - startIndex);
  }
  return this.split("").slice(startIndex, endIdex).join("");
  // return this.substr(startIndex, endIdex - startIndex);
};
console.log(str.substringPolyfill(1, 4));
