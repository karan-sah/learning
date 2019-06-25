/*

Example input:
  'a1.b2.article1=0&a2.article2=1&c3!article3=0&article16-abc=2';
Example output:
  {
    article1: 'DRAFT',
    article2: 'REVISION',
    article3: 'DRAFT',
    article16: 'READY'
  }
*/

var k = "article";
arr = [];
op = {};
key = {};
var regex = /(article)\d{1,}/;
var config = {
  "0": "DRAFT",
  "1": "REVISION",
  "2": "READY"
};
function queryToObject(query) {
  //console.log(query)
  //var i= 0;
  var s = query.split("&");
  for (item of s) {
    //  console.log(item)
    var t = item.split("=");

    key[t[0].match(regex)[0]] = config[t[1]];

    // console.log(i.indexOf(k));
  }

  arr.splice();
  console.log(arr);
  //console.log(key)

  for (let i = 0; i < arr.length; i++) {
    op[key[i][0]] = arr[i];
  }
  console.log(key);
  return key;
}

module.exports = queryToObject;
