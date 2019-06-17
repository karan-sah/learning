var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"];
var a = 1;
var i = 0;
let removeElements = () => {
  arr.map(x => {
    console.log(x);

    if (x === a) {
      arr.splice(i, 1);
    }
    i++;
  });
};
removeElements();
console.log(arr);
