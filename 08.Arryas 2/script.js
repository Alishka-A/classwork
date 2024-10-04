//const numbers = [
  // 5, 6, 8, 25, 15, 11, 1223, 5525, 15, 35, 48, 984, 7798, 889, 10, 21, 5, 3, 1,
  // 11,
// ];

// console.log( numbers.sort((a,b) => a-b));
// console.log( numbers.sort((a,b) => b-a));

// console.log(numbers.reverse());

// console.log(numbers.splice(5,8));

// console.log(numbers.find((num) => num === 11));
// console.log(numbers.filter((num) => num > 10));
// numbers.push(66, 77);
// console.log(numbers);

// for (i = 0; i < 4; i++) {
//   numbers.pop();
// }
// console.log(numbers);

// for (i = 0; i < 2; i++) {
//   numbers.unshift(Math.floor(Math.random() * 10) + 1);
// }
// console.log(numbers);

// for (i = 0; i < 3; i++) {
//   numbers.unshift(i);
// }
// console.log(numbers);
// console.log(Math.floor(Math.random() * 10) + 1);



// const nums = [5,4,6,7,14,222]

// const result = nums.every((num)=>num > 2)
// const result2 = nums.some((num)=>num > 110)
// console.log('result',result);
// console.log('result2',result2);




const numbers = [9, 5, 3, 11, 12, 33, 22, 9, 11, 10, 0, 8]
const list = ['6', '3', true, 'a', undefined, false, 10, 11, 5]
const list2 = ['a', ['f'], 7, ['d', [false]]]


// const a = numbers.every((num)=>num > 2)
// const b = numbers.some((num)=>num > 5)

// console.log(list2.flat(2));
// console.log(list2.flat(Infinity));



const sum = numbers.reduce((a, b) => a + b, 0)
const sum2 = list.filter((item) => typeof(item)==='number').reduce((a,b)=>a+b,0)
// const sum3 = list.reduce((a,b) => list.filter((item) =>item === NaN)
// const test = numbers.filter((item) => item !== 'number')
// const sum2 = list.filter((item) => typeof(item) === 'number')
console.log(sum2);
// console.log(test);

const ifTrue = list.every((item) => item)
console.log(ifTrue);


const test = list.filter((item) => typeof(item)==='number').sort()

console.log(test);


// list.reduce((a, b) => a + b, 0)



const fax = list.reduce((a,b) => (typeof b ==='number' ? a + b:a),0)

console.log(fax);



