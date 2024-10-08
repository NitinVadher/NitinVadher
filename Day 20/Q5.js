// Iterate over the students array and log the name of students who are older than 21

var students = [
  { name: "John", age: 20, grade: "A" },
  { name: "Alice", age: 22, grade: "B" },
  { name: "Bob", age: 21, grade: "C" },
]

students.forEach((Element) => {
    if (Element.age > 21)
    {
        console.log(Element.name)
      }
})
