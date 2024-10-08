var ages = [21,18, 5, 655, 77, 90];

var maxAge = 0;

for (var h = 0; h < ages.length; h++){
    if (ages[h] > maxAge)
    {
        maxAge = ages[h];
    }
}

    console.log(maxAge)
