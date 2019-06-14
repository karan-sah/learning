function multiply(x) {
  return function(y) {
    return x * y;
  };
}

function multiplyByTwo() {
  const k = multiply(2);
  k(2);
}
