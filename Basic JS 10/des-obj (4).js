const profile = {
  firstName: "Amelia",
  lastName: "Akhila",
  age: 18,
};

const { firstName, age, isFemale = false } = profile;

console.log(firstName);
console.log(age);
console.log(isFemale);

/* output:
Amelia
18
false
*/
