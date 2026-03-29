function sunofN(n){
    if (n==0) return 0;
    return n + sunofN(n-1)
}

console.log(sunofN(5))