// Iterate over the students array and log the name and age of each student.


var students = [
  { name: "John", age: 20, grade: "A" },
  { name: "Alice", age: 22, grade: "B" },
  { name: "Bob", age: 21, grade: "C" },
]

for (var h = 0; h < students.length; h++)
{
    console.log(`${students[h].name} - ${students[h].age} years old`)
}