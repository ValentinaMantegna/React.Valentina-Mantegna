import importedNumbers, { randomNumbers } from "./../data.js"

import { colors, numbers, students } from "./../data.js"

let result = [];

console.log(colors)
// destructuring and spread operator

const [firstColor, second, ...rest] = colors;
console.log(firstColor);
console.log(second);
console.log(rest);

const newColors = [...colors, { id: 11, name: "pink" }];
console.log(newColors);

console.log(students[0].age)


const [firstStudent, secondStudent, ...restStudents] = students;
const { first_name: firstName, last_name, age } = firstStudent;

console.log(firstName)
// const { first_name, last_name, age } = secondStudent;

// <------------------------------------------------------------>
// <------------------------------------------------------------>

// How to use array functions

// 1. push()
numbers.push(5);
console.log(numbers)
// colors.push({ id: 11, name: "pink" });
// 2. pop()
// colors.pop();
// 3. unshift()
//numbers.unshift(0);
// colors.unshift({ id: 0, name: "violet" });
// 4. shift()
// colors.shift();
// 5. forEach()
function stamp(element) {
    console.log(element)
}
//stamp("Stella") //=> creo una funzione che passo a un'altra funzione

result = numbers.forEach(stamp);
console.log(result) // nonrestituisce nulla il forEach perchè non modifica come map


// result = numbers.forEach((number) => console.log(number));
// 6. map()
const add = (element) => {
   return element +2
 }
result = numbers.map(add)
console.log(result)
console.log(numbers)
 //result = numbers.map((number) => number * 2);


// 7. filter()

 result = numbers.filter((number) => number > 5);

// 8. find()
 result = numbers.find((number) => number === 5);
 console.log(result)
// 9. every()
 result = numbers.every((number) => number > 3);
 console.log(result)
// 10. some()
 result = numbers.some((number) => number > 5);
 console.log(result)
// 11. reduce()
 result = numbers.reduce((acc, number) => acc + number, 0); //numero precedente
 console.log(result)
// 12. sort()
 result = students.sort((a, b) => a.first_name.localeCompare(b.first_name));
 console.log(result)
//reDesign with destructuring and callback function
// 13. reverse()
// result = students.reverse();
// 14. isArray()
// result = Array.isArray(students);

// console.log(result);
// console.log(numbers);
// console.log(colors);
