// Promise is a built-in object in JavaScript that represents the result of an asynchronous operation
// pending: This is the default state of a defined promise
// fulfilled:  This is the state of a successful promise
// rejected: This is the state of a failed promise

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

const rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject({ status: 404, data: "Not found" });
  }, 1000);
});

// firstResolvedPromise
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
//   .finally(() => console.log("close connection with DB in firstResolvedPromise"));

const fetchData = async () => {
  const response = await firstResolvedPromise;
  console.log(response);
};

// secondResolvedPromise
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
//   .finally(() => console.log("close connection with DB in secondResolvedPromise"));

// rejectedPromise
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
//   .finally(() => console.log("close connection with DB in rejectedPromise"));

// Promise.all([firstResolvedPromise, rejectedPromise])
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
//   .finally(() => console.log("close connection with DB in Promise.all with rejectedPromise"));

// Promise.all([firstResolvedPromise, secondResolvedPromise])
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
//   .finally(() => console.log("close connection with DB in Promise.all with secondResolvedPromise"));

fetchData();
