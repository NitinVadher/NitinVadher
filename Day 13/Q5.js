function prime(a)
{
    var count=0;

    for(var h=1; h<=a;h++)
    {
        if(a%h==0)
        {
            count++
        }
      
    }

    if(count==2)
    {
        return "True"
    }
    else{
        return "False"
    }
}

var h = prime(7);

console.log(h);