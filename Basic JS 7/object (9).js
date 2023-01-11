const spaceship = {
  name: "Amelia Akhila",
  manufacturer: "Front End Development",
  maxSpeed: 14000,
  color: "Light gray",
};

spaceship.color = "Light blue";
spaceship["maxSpeed"] = 1500;
spaceship.class = "UNBAJA University";

console.log(spaceship);

/* output
{
name: 'Amelia Akhila',
manufacturer: 'Front End Development',
maxSpeed: 1500,
color: 'Light blue',
class: 'UNBAJA University'
}
*/
