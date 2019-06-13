let arr = [2, 3, 4, 2, 2, 4, 6, 6, 9, 7, 8, 6];
let len = 1;
let max = 1;
let index = 0;
var flag = true;
let tempindex = null;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > arr[i - 1]) {
    if (flag) {
      tempindex = i - 1;
      flag = false;
    }
    len++;
  } else {
    flag = true;
    if (len > max) {
      max = len;
      index = tempindex;
    }
    len = 1;
  }
}
console.log("index" + index + " max" + max);
console.log(arr.splice(index, max));
