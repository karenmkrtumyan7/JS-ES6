class Person {
    constructor (firstName, lastName, gender, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
    }

    get firstName () {
        return this_firstName;
    }

    get lastName () {
        return this_lastName;
    }

    get gender () {
        return this_gender;
    }

    get age () {
        return this_age;
    }

    set firstName(v) {
        this_firstName = v;
    }

    set lastName(v) {
        this_lastName = v;
    }

    set gender(v) {
        this_gender = v;
    }

    set age(v) {
        if (v > 0) { this_age = v };
    }

    toString() {
        return `{
            firstName: ${this._firstName},
            lastName: ${this._lastName},
            gender: ${this._gender}, 
            age: ${this._age}
            }`
         
    }
    
}

class Student extends Person {
    constructor (firstName, lastName, gender, age, programs, year, fee) {
        super(firstName, lastName, gender, age);
        this._programs = programs;
        this._year = year;
        this._fee = fee;
    }

    get programs() {
        return this._programs;   
    }

    set programs(v) {
        this._programs = v;
    }

    get year() {
        return this._year;   
    }

    set year(v) {
        if (this._year < v) {
            this._year = v;
        }
    }

    get fee() {
        return this._fee;   
    }

    set fee(v) {
        if (v > 0) {
            this_fee = v;
        }
    }

    #grades = [];

    passExam(program, grade) {
        if(this.programs.includes(program)) {
            this.#grades.push(grade);
        }

        if (this.#grades.length === this.programs.length) {
            if(this.#grades.reduce((calc, curr) => calc += curr) >= 50) {
                this.year++;
                this.#grades = [];
            } else {
                this.#grades = [];
            }
        }
    }

    

    toString() {
         return `{
            firstName: ${this._firstName},
            lastName: ${this._lastName},
            gender: ${this._gender}, 
            age: ${this._age},
            programs: ${this._programs},
            year: ${this._year},
            fee: ${this._fee},
            }`
    }

}

class Teacher extends Person{
    constructor(firstName, lastName, gender, age, program, pay) {
        super(firstName, lastName, gender, age);
        this._program = program;
        this._pay = pay;
    }

    get program() {
        return this._program;
    }
    
    set program(v) {
        this._program = program;
    }

    get fee() {
        return this._fee;
    }

    set fee(v) {
        this._fee = fee;
    }

    toString() {
         return `{
            firstName: ${this._firstName},
            lastName: ${this._lastName},
            gender: ${this._gender}, 
            age: ${this._age},
            program: ${this._program},
            fee: ${this._fee},
            }`
    }

}

let a = new Student('karen', 'mkrtumyan', 'male', 17, ['Math', 'Physics', 'English'], 2019, 1000000);
