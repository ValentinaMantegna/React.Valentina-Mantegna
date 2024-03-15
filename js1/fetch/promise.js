// Promise is a built-in object in JavaScript that represents the result of an asynchronous operation
// pending: This is the default state of a defined promise
// fulfilled:  This is the state of a successful promise
// rejected: This is the state of a failed promise
import { students } from "./../data.js"
import { randomNumbers } from "./../data.js"

const callback = (resolve, reject) => {
  setTimeout(() => {
    resolve({ status: 200, data: students });
  }, 3000);
};

// resolve and reject are functions that are passed to the promise
const firstResolvedPromise = new Promise(callback);

const secondResolvedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ status: 200, data: randomNumbers });
  }, 1000);
});

/* const rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject({ status: 404, data: "Not found" }); // catch va a prendere l'errore che c'è
  }, 1000);
}); 
 */
/* firstResolvedPromise
   .then(result => console.log(result)) //quando c'è una risposta positiva( funzione che prende una
   //callback)
   .catch(error => console.log(error)) //quando ci mette tanto, abbiamo un errore
 .finally(() => console.log("close connection with DB in firstResolvedPromise")); //viene sempre
 //eseguito */

const fetchData = async () => {
  const response = await firstResolvedPromise; //variabile creata
  console.log(response);
};

// secondResolvedPromise
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
//   .finally(() => console.log("close connection with DB in secondResolvedPromise"));

 /*                                                                                                                                                                                                                                                                                                                                                                                                                       */

 /* Promise.all([firstResolvedPromise, rejectedPromise])
  .then(result => console.log(result))
   .catch(error => console.log(error))
   .finally(() => console.log("close connection with DB in Promise.all with rejectedPromise")); */

// Promise.all([firstResolvedPromise, secondResolvedPromise]) //partono dopo 3 sec perchè la prima 
//ha bisogno di più tempo
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
//   .finally(() => console.log("close connection with DB in Promise.all with secondResolvedPromise"));

//fetchData();
