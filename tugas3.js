const myStr = "1.1.1.1"

let result
for (i=0; i<myStr.length; i++ ){
    result = myStr.split('.').join("()")
}
console.log(result);