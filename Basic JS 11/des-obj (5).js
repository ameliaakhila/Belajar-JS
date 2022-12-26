const profile = {
  firstName: "Amelia",
  lastName: "Akhila",
  age: 18,
};

const {
  firstName: localFirstName,
  lastName: localLastName,
  age: localAge,
} = profile;

console.log(localFirstName);
console.log(localLastName);
console.log(localAge);

/* output:
Amelia
Akhila
18
*/
