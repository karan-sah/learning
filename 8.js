/**
 *
 *  Try to complete the following ：
 *
 *  map([1, 2], function(i) {
 *   return i * 2
 *  })
 *  required output： [2, 4]
 *
 *  map([{name: 'nanfeng', age: 25}, {name: 'beifang', age: 33}], function(i) {
 *   return i.age
 *  })
 *  required output： [25, 33]
 *
 *  map([5, 7], function(i) {
 *   return this + i
 *  }, 2)
 *  required output： [7, 9]
 *
 **/
function map(arr, func, ctx) {

    if (x !== 0) {

    }

    for (i = 0; i < arr.length; i++) {
        return func.call(this, arr[i]);

    }

}