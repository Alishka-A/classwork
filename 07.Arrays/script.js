//  There are two ways to create Arrays


//  Object

const obj1 = new Object()
const obj2 = {}

// Array 

const aar1 = new Array()
const arr2 = []




// const num = [4,5,7,8,10,33,0]

// let mult = 1

// for (let i = 0; i < num.length;i++){
//     if(num[i] % 2){
//         console.log(`odd numbers ${num[i]}`);
        
//     }
//     mult *= num[i]

//     if (5<=num[i] && num[i]<=10){
//         console.log(`select numbers between 5 and 10 ${num[i]}`)
        
//     }
//      if(num[i]){
//          console.log(`true numbers ${num[i]}`);
        
//     }
//     if(num[i] % 2 !=1){
//         console.log(`even numbers ${num[i]}`);
        
//     }

// }
// console.log(`Mults numb ${mult}`);

const users =[
    {
        id:1,
        name:'Michael',
        gender:'Male',
        age:25,
    },
    {
        id:2,
        name:'Gabriel',
        gender:'Male',
        age:26,
    },
    {
        id:3,
        name:'Uriel',
        gender:'Male',
        age:23,
    },
    {
        id:4,
        name:'Anna',
        gender:'Female',
        age:21,
    },
    {
        id:5,
        name:'June',
        gender:'Female',
        age:24,
    },
    {
        id:6,
        name:'Gibrael',
        gender:'Male',
        age:30,
    },
    {
        id:7,
        name:'Jane',
        gender:'Female',
        age:28,
    },
    {
        id:8,
        name:'Alex',
        gender:'Male',
        age:24,
    },

]
let sum = 0
users.map(items =>sum += items.age);
console.log(`sum all age ${sum}`);

console.log(users.filter(items => items.gender ==='Female'))

console.log(users.filter(items => items.age>25));



users.map(items =>items.age*10);
console.log(`Mult each users age whit 10 ${users.map(items =>items.age*10)}`);






