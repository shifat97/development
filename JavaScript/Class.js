class Teacher {
    constructor(name, subject, institution) {
        this.name = name;
        this.subject = subject;
        this.institution = institution;
    }

    lecture() {
        console.log(`${this.name} sir is teaching about ${this.subject}.`);
        console.log(`He is from ${this.institution}.`);
    }
}

const teacher1 = new Teacher("Nafis Saheed", "Physics", "Jahangirnagar University");
console.log(teacher1);
teacher1.lecture();

console.log("\n");

const teacher2 = new Teacher("Moynul Hossain", "Computer Networks", "BUET");
console.log(teacher2);
teacher2.lecture();