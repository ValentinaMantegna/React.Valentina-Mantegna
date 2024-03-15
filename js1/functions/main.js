import {greeting,sayHello, add, addToEnd } from "./source"

import *as all from "./../data"

let result = undefined;//let result=> undefined

result =sayHello()

result = greeting("john") //mi ritorna undefined perchè non ho il ritorno

result = add("test",2)

// result = sayHello();

// result = greeting('John');

// result = add(1, 2);

 result = addToEnd(all.numbers, 4);
// console.log(result);

// result = canDrink(18);

console.log(result);
