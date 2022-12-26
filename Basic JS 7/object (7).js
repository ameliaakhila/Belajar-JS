const spaceship = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray",
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
console.log(spaceship);

/* output
{
name: 'Millenium Falcon',
manufacturer: 'Corellian Engineering Corporation',
maxSpeed: 1300,
color: 'Glossy red'
}
*/
