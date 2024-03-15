import { numbers, randomNumbers, students } from '../data.js';
let result = undefined;
// <----------1---------->

const avg = array => {
  if (Array.isArray(array)) {
    const sum = array.reduce((acc, number) => acc + number, 0);
    return sum / array.length;
  }
  return "Please provide an array";
};

result = avg(numbers); 
// console.log(result);

// <----------2---------->

const mostFrequent = array => {
  if (Array.isArray(array)) {
    const result = [];
    const obj = {};
    array.forEach(number => {
      if (obj[number]) {
        obj[number]++;
      } else {
        obj[number] = 1;
      }
    });
    const max = Math.max(...Object.values(obj));
    for (const key in obj) {
      if (obj[key] === max) {
        result.push(Number(key));
      }
    }
    return result;
  }
  return "Please provide an array";
};

result = mostFrequent(randomNumbers);
// console.log(randomNumbers);
// console.log(result);

// <----------3---------->

const isValidPassword = (password, username) => {
  if (password.length >= 8 && !password.includes(" ") && !password.includes(username)) {
    return true;
  }
  return false;
};

const [firstStudent] = students;
const { password, username } = firstStudent;


result = isValidPassword(password, username);
// console.log(result);

// <----------4---------->

const isPangram = sentence => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowerCaseSentence = sentence.toLowerCase();
  let result = true;
  alphabet.split("").forEach(letter => {
    if (!lowerCaseSentence.includes(letter)) {
      result = false;
    }
  });
  return result;
};

const [secondStudent] = students;
const { first_name } = secondStudent;
result = isPangram(first_name);
// console.log(result);

result = isPangram("The five boxing wizards jump quickly");
// console.log(result);

// <----------5---------->

const data = {
  name: "John",
  username: "JohnWick",
  email: "JohnWick2023@gmail.com",
};

const create = () => {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(response => response.json())
    .then(json => console.log(json, "created"));
};

const update = async id => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  });
  const json = await response.json();
  console.log(json, "updated");
}

const remove = id => {
  fetch("https://jsonplaceholder.typicode.com/users/" + id, {
    method: "DELETE",
  })
    .then(response => response.json())
    .then(json => console.log(json, "deleted"));
}

// create();
// update(1);
// remove(5);