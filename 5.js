var people = [
  { firstname: "Mahatma", lastname: "Candhi", age: 78 },
  { firstname: "Goutam", lastname: "buddha", age: 80 }
];
var smallest = Infinity;
var youngestP = {};
for (let i = 0; i < people.length; i++) {
  if (people[i].age < smallest) {
    smallest = people[i].age;
    youngestP = people[i];
  }
}

console.log(JSON.stringify(youngestP));
