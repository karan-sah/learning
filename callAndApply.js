const array = [1, 2, 3];

function getMaxNumber(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log(max);
}

getMaxNumber.apply(this, [array]);
