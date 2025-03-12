const names = ["Edoardo", "Simone", "Francesco"];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'
console.log("---FOR EACH---");
names.forEach((element) => {
  console.log(element);
});

//CON CILCLO FOR
console.log("---CICLO FOR---");
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
