let arr = [2, 2, 3, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4];
var current = 1;
var maxlength = 1;
var start = 0;
//  n = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] == arr[i + 1]) {
    current++;
  } else {
    if (current > maxlength) {
      maxlength = current;
      start = i - current + 1;
    }
    current = 1;
  }
}
console.log("start" + start);
console.log("max" + maxlength);
console.log(arr.splice(start, maxlength));
