let text
let locateA, locateB, diff, checkA = 0, checkB = 0

function solution(text){
    for(i = 0; i <= text.length ; i++){
        if(text.charAt(i) == 'a' && checkA == 0){
            locateA = i 
            checkA++
        }else if(text.charAt(i) == 'b' || checkB == 0){
            locateB = i
            checkB++
        }
    }
    
    if(locateA > locateB){
        diff = locateA - locateB
        if(diff > 3){
            console.log(diff,'YES')
        }else{console.log(diff,'NO');}    
    }else{
        diff = locateB - locateA
        if(diff > 3){
            console.log('YES')
        }else{console.log('NO');}    
    }

    checkA = 0;
    checkB = 0;
}


solution('acdebae')
solution('cdaecba')
  