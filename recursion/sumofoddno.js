let arr = [0,2,6,7,9,0]

function sumofodd(n){
    if (n === 0){
        if (arr[n] % 2 !== 0 ){
            return arr[n]
        }
        else{
            return 0
        }
    }

    if (arr[n] % 2 !== 0){
        return arr[n] + sumofodd(n-1)
    }
    else{
        return 0 + sumofodd(n-1)
    }
}

console.log(sumofodd(arr.length-1))