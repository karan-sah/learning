var bar = "bar1";

var o2 = {
  bar: "bar2",

  foo: () => {
    return () => bar;
  }
};

var f1 = o2.foo();

f1.call(o2);
