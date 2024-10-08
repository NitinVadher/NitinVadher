function st(){
       let  a=document.getElementById("data").value
       let  b=document.getElementById("data1").value
       let  c=document.getElementById("data2").value


     if(a>=b && a<=c){
        document.getElementById("ans").innerHTML=`A is second last Number`;
     }
     else if(b>=c && b<=a){
        document.getElementById("ans").innerHTML=`B is second last Number`;
     }
     else{
        document.getElementById("ans").innerHTML=`C is second last Number`;
     }

}
