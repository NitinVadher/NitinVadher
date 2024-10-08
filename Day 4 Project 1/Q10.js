// Write C Program to find gross salary by adding % of HRA, DA, and TA of user choice.

var Base_Salary = 100;
var HRA = (Base_Salary * 10) / 100;
var DA = (Base_Salary * 5) / 100;
var TA = (Base_Salary * 8) / 100;
var ans = Base_Salary + HRA + DA + TA;

console.log(ans);