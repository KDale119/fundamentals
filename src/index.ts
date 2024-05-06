
type me = {
    age: number,
    name: string,
    isFemale: boolean,
    favNumbers: Array<number>
    grossNumbers: number[]
}

interface Person {
    name: string,
    age: number,
    email: string | undefined
}

class Employee implements Person{
    info: string | number
    constructor(
        public name: string,
        public age: number,
        public email: string | undefined
    ) {
        this.info = name + " " + age + " " + email;
    }
    displayInfo = () => {
        console.log(this.info)
    }
}

class Box<T> {

    public value: T;
    constructor(value: T) {
        this.value = value;
    }
    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
    }
}


const me = {
    age: 26,
    name: "Kayla",
    isFemale: true,
    favNumbers: [7, 9, 15, 21],
    grossNumbers: [3, 6, 13]
}
console.log(me);

const person = {
    name: "Bobby",
    age: 7,
    email: "bobbyjo123@gmail.com"
}
console.log(person)

const emp = new Employee("Bobby", 7, "bobbyjo123@gmail.com");
console.log(emp)

const box = new Box<number>(10);
console.log(box.value);

export {}