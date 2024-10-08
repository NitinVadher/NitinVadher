
function st(){
       let  a=document.getElementById("data").value
       let  b=document.getElementById("data1").value
       let  c=document.getElementById("data2").value


       if(b<= a && c>=a){
        document.getElementById("ans").innerHTML=`TRUE...`;
       }
       else{
        document.getElementById("ans").innerHTML=`FALSE...`;
       }


}
