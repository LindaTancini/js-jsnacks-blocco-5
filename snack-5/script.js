const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]
console.log("---FOR EACH---");
const numPari = nums.filter((element) => element % 2 === 0);
console.log(numPari);

// CON CICLO FOR
console.log("---CICLO FOR---");
let newPari = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    newPari.push(nums[i]);
  }
}
console.log(newPari);
