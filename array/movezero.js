function moveZero(num) {
  let zeroIndex = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] !== 0) {
      num[zeroIndex] = num[i];
      zeroIndex++;
    }
  }
  for (let i = zeroIndex; i < num.length; i++) {
    num[i] = 0;
  }
  return num;
}
let n = [0, 1, 0, 3, 12];
console.log(moveZero(n));
