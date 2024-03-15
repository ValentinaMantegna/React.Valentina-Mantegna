// create and call the function
 export function sayHello() {
  console.log("Hello");
}

//parameters
 export const greeting = name => {
  if (typeof name === "string") {
    console.log(`Hello ${name}`); 
  } else {
    console.log("Please provide a name");
  }
};

export const add = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return "Please provide two numbers"; 
  }
};

export const addToEnd = (array, item) => { 
  if (Array.isArray(array)) {
    return [...array, item];
  } else {
    return "Please provide an array"; //è possibile non scrivere else,ma solo return per renderlo più pulito
  }
};

export const canDrink = age => {
  if (typeof age === "number") {
    const canDrink = age >= 18 && age < 60;
    return canDrink;
  } 
  return "Please provide a number"
// throw new Error("Please provide a number") //promise rigettata
};
