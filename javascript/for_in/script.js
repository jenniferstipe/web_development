var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// show just the properties
for(var property in nyc) {
    console.log(property);
};

// write a for-in loop to print the value of nyc's properties
for (var property in nyc) {
  console.log(nyc[property]);
}