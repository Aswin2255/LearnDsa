function pwrof2(n){
    if (n === 1) return true
    if ((n%2 !== 0) || (n<1)) return false
   return pwrof2(n/2)
}

console.log(pwrof2(32))