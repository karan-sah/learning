const character = {
  name: "Simon",
  getCharacter() {
    console.log(this.name);
    return this.name;
  }
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);
// need to pass the reference to the object charachter
//How Would you fix this?
console.log("?", giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't
