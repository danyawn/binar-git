let input = 2022
let n = input;
let sum = 0;

while (n > 0) {
  const digit = n % 10;
  sum += digit; 
  n = Math.floor(n / 10); 
}

console.log(`Hasil jumlah dengan input ${input} adalah ${sum}`);
