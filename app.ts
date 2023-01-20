// PROPERTIES: 
class Person {
    private _name: string;
    private _age: number;
    private _address: string;

    constructor(name: string, age: number, address: string) {
        this._name = name;
        this._age = age;
        this._address = address;
    }
// METHODS: 
// Here we take our string as a separator or argument, and returns the name and address concatenated together with the separator passed.
    public getFullInfo(separator: string): string {
        try {
            return this._name + separator + this._address;
        } catch (error) {
            console.log("An error occurred:", error);
        }
    }
}
// Uses Type Annotations for our properties and methods, and it has a try-catch block in the method to catch any errors. 

// Console Log with NO errors. 
let person = new Person("Mariah Teasdale", 24, "123 R2H St, North Carolina USA");
console.log(person.getFullInfo(", "));

// Console Log WITH errors.
let person2 = new Person("John Doe", 35, undefined);
console.log(person2.getFullInfo(", "));