var scores = [100, 80, 50, 20, 50];
var count = 0;
var sum = 0;
var average;


for (var h = 0; h <= scores .length - 1; h++)
{
    sum = sum + scores[h];
    count++;
    
}

average = sum / count; 

console.log(average);


