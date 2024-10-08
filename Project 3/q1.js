
function st(){
    let a= document.getElementById("data").value
     
    if(a<=0 && a<1){
        document.getElementById("ans").innerHTML=`Ancient`;
    }
    else if(a>=1 && a<=1500){
        document.getElementById("ans").innerHTML=`Medieval`;
    }
    else if(a>1500 && a<=2024){
        document.getElementById("ans").innerHTML=`Modern`;
    }
    else if(a>2024){
        document.getElementById("ans").innerHTML=`Future`;
    }
}
