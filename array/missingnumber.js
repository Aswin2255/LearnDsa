function missingNumber(num) {
  let n = num.length;
  let totalsum = (n * (n + 1)) / 2;
  let partialsum = 0;
  for (let i = 0; i < num.length; i++) {
    partialsum += num[i];
  }
  return totalsum - partialsum;
}

let nums = [3, 0, 1];
console.log(missingNumber(nums));
