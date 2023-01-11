const spaceship = {
  name: "Amelia Akhila",
  manufacturer: "Front End Development",
  maxSpeed: 1200,
  color: "Light blue",
};

spaceship.color = "Navy";
spaceship["maxSpeed"] = 1500;

delete spaceship.manufacturer;

console.log(spaceship);

/* output
{ name: 'Amelia Akhila', maxSpeed: 1300, color: 'Navy' }
*/
