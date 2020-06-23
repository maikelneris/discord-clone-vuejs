function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateName() {
  var name1 = ["Rodrigo", "Rafael", "Daniela", "Érica", "Graciela", "Denner"];

  var name2 = ["Alcantara", "Conceição", "Firmino", "Neris", "Buendía"];

  var name =
    name1[getRandomInt(0, name1.length)] +
    " " +
    name2[getRandomInt(0, name2.length)];
  return name;
}

export default generateName;
