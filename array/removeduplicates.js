function removeDuplicates(num) {
  let uniqueindex = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[uniqueindex] < num[i]) {
      uniqueindex++;
    }
    num[uniqueindex] = num[i];
  }
  return { num, uniqueindex };
}

let num = [3, 2, 2, 3];
console.log(removeDuplicates(num));
