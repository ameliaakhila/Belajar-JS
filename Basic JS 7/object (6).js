const user = {
  firstName: "Amelia",
  lastName: "Akhila",
  age: 18,
  isJedi: true,
  "home world": "Serang",
};
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);
/* output
Halo, nama saya Amelia Akhila
Umur saya 18 tahun
Saya berasal dari Serang
*/
