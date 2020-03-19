class Account {
    constructor(id, name, balance) {
        this._id = id;
        this._name = name;
        this._balance = balance;
    }

    get id() {
        return this._id;
    }
    
    get name() {
        return this._name;
    }

    get balance() {
        return this._balance;
    }

    set balance(v) {
        this._balance = v;
    }

    credit(amount) {
        this.balance += amount;
        return this.balance;
    }

    debit(amount) {
        this.balance = this.balance >= amount ? this.balance - amount : this.balance;
        return this.balance;
    }

    transferTo(anotherAccount, amount) {
        if (amount <= this.balance) {
            this.debit(amount);
            anotherAccount.credit(amount);
        }
    }

    static identifyAccounts(accountFirst, accountSecond) {
        debugger;
       if(accountFirst.id === accountSecond.id && accountFirst.name === accountSecond.name) {
           accountFirst.balance += accountSecond.balance;
           Object.setPrototypeOf(accountSecond, null);
           for (let i in accountSecond) {
               accountSecond[i] = undefined;
           }
           // classi mej delete chem kar grem strict modi xndira
       }
    }
}

let Kar = new Account(1, 'Karen', 100);  
let Kar2 = new Account(1, 'Karen', 500);  
let a = new Account(5, 'a', 1000); 
