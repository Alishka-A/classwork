// let firstName = 'John'

// let lastName = 'Smith'

// let age = 34

// let uni = "Texas University"

// let loc = 'Texas,USA'

let person = {
    firstName: "John",
    lastName: "Smith",
    "Father-name": "James",
    99: '54th',
    age: 34,
    year: 1990,
    month: "june",
    day: 5,
    uni: "Texas University",
    address: {
        country: "USA",
        city: "Texas",
        extra: {
            street: "5th avenue",
        },
    },
    email: "johnSmith@gmail.com",
};

// console.log(person);

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person["Father-name"]);
// console.log(person.age);
// console.log(person.year);
// console.log(person.month);
// console.log(person.day);
// console.log(person.uni);
// console.log(person.address);
// console.log(person.address.city);
// console.log(person.address.country);
// console.log(person.address.extra);
// console.log(person[99]);
// console.log(person.email);


// console.log(Object.keys[person]);
// console.log(Object.values[person]);



// for (key in person) {
//     console.log(key, ':', person[key]);

// }
// for (value in person) {
//     console.log(value, ':', person[value]);

// }
for (value in person) {
    console.log(person[value]);

}

// let salary = person.Salary {}


// There are two ways to create objects
const obj1 = {}; //literal
const obj2 = new Object(); //constructor