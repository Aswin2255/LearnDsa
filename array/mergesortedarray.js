function mergesortedArray(num1, num2, m, n) {
  let num1copy = num1.slice(0, m);
  let totallength = m + n;
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < totallength; i++) {
    if (p1 >= m) {
      num1[i] = num2[p2];
      p2++;
    } else if (p2 >= n) {
      num1[i] = num1copy[p1];
      p1++;
    } else if (num1copy[p1] > num2[p2]) {
      num1[i] = num2[p2];
      p2++;
    } else {
      num1[i] = num1copy[p1];
      p1++;
    }
  }
  return num1;
}
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
console.log(mergesortedArray(nums1, nums2, 3, 3));
