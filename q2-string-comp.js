var chararray1 = ["c", "a", "t"];
var chararray2 = ["r", "a", "t"];
let eq = false;
const check = (ca1, ca2) => {
  if (ca1.length === ca2.length) {
    for (let i = 0; i < ca1.length; i++) {
      if (ca1[i] !== ca2[i]) {
        return false;
      } else return true;
    }
  } else return false;
};
console.log(check(chararray1, chararray2));
