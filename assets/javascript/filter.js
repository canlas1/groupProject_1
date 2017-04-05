function isBigEnough(value) {
  return value >= 10;
}


var arr = [0, 3, 6, 10, 55, 199];

var newArr = arr.filter(isBigEnough);

console.log(newArr);