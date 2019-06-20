//Function Scope
var k = 9;
function loop() {
  var k = 8;
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

//Block Scope
function loop2() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // console.log(i)
}
loop();
loop2();
//console.log(i)
console.log(k);
