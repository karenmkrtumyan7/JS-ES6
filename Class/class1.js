class Author {
    constructor (name, email, gender) {
        this._name = name;
        this._email = email;
        this._gender = gender;
    }

    get name () {
        return this._name;
    }

    set name (v) {
        if (typeof v === 'string') {
            this._name = v;
        }
    }

    get email () {
        return this._email;
    }

    set email (v) {
        if (v.includes('@')) {
            this._email = v;
        }
    }

    get gender () {
        return this._gender;
    }

    set gender (v) {
        if (v === 'male' || v === 'female') {
            this._gender = v;
        }
    }

    toString() {
        return `{
            name: ${this._name},
            email: ${this._email},
            gender: ${this._gender}
            }`
         
    }
}

class Book extends Author {
    constructor(title, name, email, gender, price, quantity) {
        super(name, email, gender);
        this._title = title;
        this._price = price;
        this._quantity = quantity;
    }
    
    get title () {
        return this._title;
    }

    set title (v) {
        this._title = v;
    }

    set price (v) {
        if (v > 0) { this._price = v };
    }

    get price () {
        return this._price;
    }

    get quantity () {
        return this._quantity;
    }

    set quantity (v) {
        if (v > 0) { this._quantity = v };
    }

    getProfit() {
        return this._quantity * this._price;
    }

    toString() {
        return `{
            title: ${this._title},
            price: ${this._price},
            quantity: ${this._quantity},
            name: ${this._name},
            email: ${this._email},
            gender: ${this._gender}
            }`
         
    }
}

let book = new Book('karenigirq','karen', 'karenmkrtumyan7@gmail.com', 'male', 1000, 30);
