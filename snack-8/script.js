const students = [
  {
    id: 1,
    name: "Marco Lanci",
    age: 32,
    class: "3C",
  },
  {
    id: 2,
    name: "Mario Banfi",
    age: 34,
    class: "4A",
  },
  {
    id: 3,
    name: "Luigi Banzi",
    age: 33,
    class: "5B",
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'
console.log("---FIND---");
const classStudent = students.find(
  (element) => element.name === "Marco Lanci"
).class;
console.log(classStudent);

// CON CICLO FOR
console.log("---CICLO FOR---");
for (let i = 0; i < students.length; i++) {
  if (students[i].name === "Marco Lanci") {
    console.log("La classe di Marco Lanci è " + students[i].class);
  }
}
