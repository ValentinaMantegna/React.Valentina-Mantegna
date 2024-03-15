







/* 
const fetchData = () => { 
  const url = "https://dummyjson.com/products";
  const promise = fetch(url);
  console.log(promise);
  const jsonPromise = promise.then(response => { //fetch crea una promessa con all'interno JSON
    console.log(promise);
    return response.json();
  });
  console.log(jsonPromise); //jsonPromise è il json della risposta
  jsonPromise
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(jsonPromise);
      console.log(error);
    });
}; */
const product = document.getElementById("product")
const title = document.getElementById("title")
const AsyncFetchData = async () => { //stessa funzione,ma con async/await; risponde con status 200 quindi
  // tutto a posto
  const url = "https://dummyjson.com/products/2"; // se sbaglio come per esempio  cartella sbagliata 
  //mi dà errore 404
  try {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    title.textContent = data.title;
    data.images.forEach(img => {
      <img src={img} />
      /* questo in versione normale,non react  const image = document.createElement("img")
       image.src = img;
       product.appendChild(image) */
    })

  } catch (error) {
    console.log(error);
  }
};
// <img  src ={img} />  in React si scrive così 

const createProduct = async product => {
  const url = "https://dummyjson.com/products/add";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const status = response.status;
  if (status === 200) {
    const data = await response.json();
    console.log(data);
  } else {
    console.log("Error");
  }
};

const updateProduct = async (id, product) => {
  const url = `https://dummyjson.com/products/${id}`;
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const status = response.status;
  if (status === 200) {
    const data = await response.json();
    console.log(data);
  } else {
    console.log("Error");
  }
};

const deleteProduct = async id => {
  const url = `https://dummyjson.com/products/${id}`;
  const response = await fetch(url, {
    method: "DELETE"
  });
  const status = response.status;
  if (status === 200) {
    console.log("Product deleted");
  } else {
    console.log("Error");
  }
};

//fetchData();
AsyncFetchData();
// createProduct({ name: 'test', price: 100 });
// updateProduct(1, { name: 'test', title: 'Iphone 14' ,price: 1000000 });
// deleteProduct(1);
