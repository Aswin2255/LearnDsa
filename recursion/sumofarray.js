let ar = [0,5,7,3,4]
function sumofArr(n){
    if (n === 0) return ar[0]
    return ar[n] + sumofArr(n-1)
}

console.log(sumofArr(ar.length-1))