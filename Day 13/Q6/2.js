// Count Prime Number between 1 to 50

function prime(a) {
    var count = 0; 

    for (var h = 1; h <= a; h++) 
    {
        if (a % h == 0) 
        {
            count++
        }

    }
    if(count==2)
    {
        return 1
    }
   
}

var primeNum=0;
for (var a = 1; a <= 50; a++) 
{

if(prime(a)==1)
{
    primeNum++
}
   
}

console.log(primeNum)
