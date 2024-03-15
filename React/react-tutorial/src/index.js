import React from 'react';//al posto di React si può mettere qualsiasi nome
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/* const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  React.createElement("div"
  { id:"hello",
  className: "hello"},
    
    
  ,"Hello World") 
    );

    //null quando non ci sono id e classe

   equivalente di quello sopra <div class="hello" id ="hello">Hello World!</div>

   <div>
   <button> Click</button> 
   </div>







  //parametro div,null,children
  (children è quello che va dentro il tag)
);
//per chiamare una funzione di react:

<React>

</React>


//import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/> //abbiamo importato una cosa che non sappiamo cosa sia e deve avere la lettera maiscola se è un componente React
);

 */