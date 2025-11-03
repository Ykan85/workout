class Person {
constructor(public name: string, public age: number) {
this.bind()
}

introduce() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

celebrateBirthday() {
    this.age++;
    console.log(`Happy birthday ${this.name}! You are now ${this.age} years old.`);
}

bind(){ 
    this.introduce()
    this.celebrateBirthday()
}  
}

const alice = new Person("Alice", 30);
alice.introduce();
alice.celebrateBirthday();