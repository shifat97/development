const student = {
    id: 3240,
    name: "Joe Biden",
    university: "Daffodil International University",
    course: ['Data Structures', "Networking", "Algorithms"]
}

console.log(typeof student);
console.log(student);

const studentJSON = JSON.stringify(student);
console.log(typeof studentJSON);
console.log(studentJSON);

const studentOBJ = JSON.parse(studentJSON);
console.log(typeof studentOBJ);
console.log(studentOBJ);