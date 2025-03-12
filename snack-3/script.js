const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]
console.log("---MAP---");
const numbersAddOne = numbers.map((element) => element + 1);
console.log(numbersAddOne);

//CON CICLO FOR
console.log("---CICLO FOR---");
let newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  newNumbers.push(numbers[i] + 1);
}
console.log(newNumbers);
