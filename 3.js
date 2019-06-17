var obj = {
  a: 1,
  b: 2
};
let deep = k => {
  l = { ...k };
  l.a++;
  console.log(k.a);
};

deep(obj);
