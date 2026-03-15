function Maxconsecutive(num) {
  let maxconsecutive = 0;
  let current = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] == 1) {
      current++;
    } else {
      if (current > maxconsecutive) {
        maxconsecutive = current;
      }
      current = 0;
    }
  }
  return Math.max(current, maxconsecutive);
}

let nums = [1, 0, 1, 1, 0, 1];
console.log(Maxconsecutive(nums));
