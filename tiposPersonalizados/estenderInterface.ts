
interface Person {
    id: number,
    name: string,
    email: string
}



interface Teacher extends Person {
    // id: number,
    // name: string,
    subjects: string[]
}

interface Student extends Person {
    // id: number,
    // name: string,
    age: number,
}

let teacher: Teacher = {id: 123, name: "Rodrigo", subjects: ["Math", "English"], email: "rodrigo@email.com"}

let student: Student = {id: 456, name: "Gustavo", age: 21, email: "gustavo@email.com"}


