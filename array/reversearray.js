function reverseArray(nums) {
  console.log(nums.length);
  for (let i = 0; i < nums.length; i++) {
    console.log(i);
    let lastlength = nums.length - 1 - i;
    console.log(lastlength);
    if (lastlength <= i) {
      break;
    }
    let temp = nums[i];
    nums[i] = nums[lastlength];
    nums[lastlength] = temp;
  }
  return nums;
}

let num = ["h", "e", "l", "l", "o"];

console.log(reverseArray(num));
