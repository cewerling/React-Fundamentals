class User {
    constructor(first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

var userOne = new User("Pau1", "O’Connor", "poconnor@e1evenfifty.org");
console.log(userOne.first); //undefined
console.log(userOne.f); //Pau1
console.log(userOne.l); //0'Connor
console.log(userOne); //User {f2 "Paul", 1: "O'Connor", email: "poconnor@e1evenfifty.org"}
