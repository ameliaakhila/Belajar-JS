const spaceship = {
  name: "Amelia Cantik",
  manufacturer: "Front End Development",
  maxSpeed: 1500,
  color: "Light blue",
};

spaceship.color = "Dark blue";
spaceship["maxSpeed"] = 1500;
console.log(spaceship);

/* output
{
name: 'Amelia Cantik',
manufacturer: 'Front End Development',
maxSpeed: 1500,
color: 'Lght blue'
}
*/
