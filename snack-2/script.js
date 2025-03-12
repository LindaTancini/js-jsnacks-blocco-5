const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'
console.log("---FOR EACH---");
people.forEach((element) => {
  console.log(element.name);
});

// CON CICLO FOR
console.log("---CICLO FOR---");
for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
