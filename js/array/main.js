import { colors, numbers, students } from "./../data.js";

let result = [];

// destructuring and spread operator

// const [first, second, ...rest] = colors;
// console.log(first);
// console.log(second);
// console.log(rest);

// const newColors = [...colors, { id: 11, name: "pink" }];
// console.log(newColors);

// const [firstSrudent, secondStudent, ...restStudents] = students;
// const { first_name, last_name, age } = firstSrudent;
// const { first_name, last_name, age } = secondStudent;

// <------------------------------------------------------------>
// <------------------------------------------------------------>

// How to use array functions

// 1. push()
// numbers.push(5);
// colors.push({ id: 11, name: "pink" });
// 2. pop()
// colors.pop();
// 3. unshift()
//numbers.unshift(0);
// colors.unshift({ id: 0, name: "violet" });
// 4. shift()
// colors.shift();
// 5. forEach()
// result = numbers.forEach((number) => console.log(number));
// 6. map()
// result = numbers.map((number) => number * 2);
// 7. filter()
// result = numbers.filter((number) => number > 5);
// 8. find()
// result = numbers.find((number) => number === 5);
// 9. every()
// result = numbers.every((number) => number > 0);
// 10. some()
// result = numbers.some((number) => number > 5);
// 11. reduce()
// result = numbers.reduce((acc, number) => acc + number, 0);
// 12. sort()
// result = students.sort((a, b) => a.first_name.localeCompare(b.first_name));
// result = students.sort((a, b) => {
//   if (a.age > b.age) {
//     return 1;
//   } else if (a.age < b.age) {
//     return -1;
//   } else {
//     return 0;
//   }
// });
//reDesign with destructuring and callback function
// 13. reverse()
// result = students.reverse();
// 14. isArray()
// result = Array.isArray(students);

// console.log(result);
// console.log(numbers);
// console.log(colors);
