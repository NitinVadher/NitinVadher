// 1. Write a function that takes a positive integer as input and returns the sum of its digits.

function sum(a){
    var num = a + ""
   var  sum =0;
    for(var x=0;x<num.length;x++){
        sum += Number(num[x])
    }
    console.log(sum)


}

sum(12345)