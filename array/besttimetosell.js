function besttimetoSell(num) {
  let maxProfit = -Infinity;
  let buyPrice = num[0];
  let currentProfit;

  for (let i = 1; i < num.length; i++) {
    currentProfit = num[i] - buyPrice;
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    }
    if (buyPrice > num[i]) {
      buyPrice = num[i];
    }
    currentProfit = 0;
  }
  if (currentProfit > maxProfit) {
    maxProfit = currentProfit;
  }
  return maxProfit;
}
let prices = [7, 1, 5, 3, 6, 4];
console.log(besttimetoSell(prices));
