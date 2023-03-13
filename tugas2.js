function solution(x){
    if(x > 90 && x < 101){
        return console.log('Nilai nya adalah A')
    }else if(x > 80 && x < 91){
        return console.log('Nilai nya adalah B')
    }else if(x > 70 && x < 81){
        return console.log('Nilai nya adalah C')
    }else if(x > 60 && x < 71){
        return console.log('Nilai nya adalah D')
    }else if( x < 61){
        return console.log('Nilai nya adalah E')
    }
}

solution(95)
solution(75)