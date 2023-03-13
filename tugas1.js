function solution(x, y){
    if(x % 5 === 0 && x < y){
        var total = y - (x + 0.5)
         console.log('Saldo Yudi setelah transaksi adalah ', total)
    }else{
        if(x > y){
            console.log(y)
        }else if(x % 5 !== 0){
             console.log('Penarikan harus kelipatan 5!')
        }
    }
}


solution(10, 100)