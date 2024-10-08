
function st(){
    let a= document.getElementById("data").value
    
    if(a%4==0 && a%100 !=0 || a%400==0){
        document.getElementById("ans").innerHTML=`Leap year`;
    }
    else(
        document.getElementById("ans").innerHTML=`Not Leap year`
    )
 
}
