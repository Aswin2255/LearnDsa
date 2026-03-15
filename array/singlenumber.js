function singlenumber(num) {
  let xor = 0;
  for (let i = 0; i < num.length; i++) {
    xor = num[i] ^ xor;
  }
  return xor;
}

let n = [2, 2, 1];
console.log(singlenumber(n));
