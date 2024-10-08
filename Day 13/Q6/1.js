// Print Prime Number from 1 to 100

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
        console.log(`${a} is Prime Number`)
    }
   
}

for (var a = 1; a <= 100; a++) 
{
prime(a);
   
}


