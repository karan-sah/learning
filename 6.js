people = [
  { firstname: "Mahatma", lastname: "Candhi", age: 79 },
  { firstname: "Goutam", lastname: "buddha", age: 80 },
  { firstname: "aoutam", lastname: "buddha", age: 90 },
  { firstname: "cutam", lastname: "buddha", age: 93 },
  { firstname: "outam", lastname: "buddha", age: 44 }
];
group = (arr, method) => {
  if (method == "age") {
    return arr.sort(function(a, b) {
      //console.log(JSON.stringify(a)," " ,JSON.stringify(b))
      //  console.log(a.age - b.age);
      return a.age - b.age;
    });
  } else if (method == "firstname") {
    //  console.log('working')
    return arr.sort(function(a, b) {
      var nameA = a.firstname.toLowerCase(),
        nameB = b.firstname.toLowerCase();
      if (nameA < nameB)
        //sort string ascending
        return -1;
      if (nameA > nameB) return 1;
      return 0; //default return value (no sorting)
    });
  }
};
//group(people,'age')
console.log(group(people, "firstname"));
console.log(group(people, "age"));
