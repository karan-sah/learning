let k = {
  hello() {}
};

const hasProperty = (obj, pName) => {
  if (obj.hasOwnProperty(pName)) {
    return true;
  }
};

console.log(hasProperty(k, "hello"));
