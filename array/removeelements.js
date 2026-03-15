function removeElements(num, k) {
  let uniqueindex = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] != k) {
      num[uniqueindex] = num[i];
      uniqueindex++;
    }
  }
  return { num, uniqueindex };
}

let num = [3, 2, 2, 3];

console.log(removeElements(num, 3));
