// create and call the function
function sayHello() {
  console.log("Hello");
}

//parameters
const greeting = name => {
  if (typeof name === "string") {
    console.log(`Hello ${name}`);
  } else {
    console.log("Please provide a name");
  }
};

const add = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return "Please provide two numbers";
  }
};

const addToEnd = (array, item) => {
  if (Array.isArray(array)) {
    return [...array, item];
  } else {
    return "Please provide an array";
  }
};

const canDrink = age => {
  if (typeof age === "number") {
    const canDrink = age >= 18 && age < 60;
    return canDrink;
  } else {
    return "Please provide a number";
  }
};
