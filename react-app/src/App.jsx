//prima si mettono gli import esterni come le icone e poi il ressto

import { useState } from "react"; //importo una cosa di react che non è di default.
import { IoMdMail } from "react-icons/io";
//quando la chiamo mi resistuisce un array con 2 elementi: undefined(valore), una funzione

import Header from "./components/Header";

function App() {
  //qui scriviamo codice prima di return
  const [name, setName] = useState("ospite"); //se sappiamo il valore iniziale("ospite") diciamo a
  // useState di usarlo e il secondo prametro può cambiarlo perchè è una funzione
  //console.log("name: ", name);
  //console.log("setName", setName)

  const [mail, setMail] = useState("mail@test.com");
  /* console.log("mail: ",mail);
  console.log("setMail", setMail) */

  //invece di creare 2 variabili posso creare direttamente un oggetto
  const [user, setUser] = useState({
    name: "ospite",
    mail: "mail@test.com"
  });
  //console.log(user)
  /*  console.log("user", user)
   console.log("mail dell'utente: ", user.mail) */
  console.log(user)
  return (
    <> {/* tag padre */}

      <Header title="My App" /* text ="Registrati" */ />
      {/*onChange= attributo di addListener=> di default passa un parametro event per la callback .Si 
   usa una funzione freccia*/}
      <div className="flex flex-col justify-center items-center h-50 mt-3"> {/* h-50 è l'altezza */}
        <input type="text"
          value={name}
          className="border-black border-2 p-2 rounded"
          onChange={(event) => { //event passato di default 
            /* //faccio 2 destructuring
            const { target } = event;
            const { value } = target;
            //oppure uso uin altro metodo
            //console.log(event.target.values);
            //console.log() //oggetto => target=> value=>"quello che scriviamo nell'input"
            console.log(value) */

            //ancora più semplice:
            /*  const {
               target: {value}
             } = event;
             console.log(value); */
            //onChange = {({target : {value}})=> event}
            //const name = event.target.value; //creo variabile
            //setName(name);
            const newName = event.target.value;
            setName(newName);
            setUser((prevState) => {
              return { //i "..." => è rest che mi prende quello che c'è nell'oggetto e lo mette in un altro
                //oggetto. prevState=  name: "ospite",
                //mail: "mail@test.com"
                ...prevState,
                name: newName //questo elimina il vecchio nome
              }
            });//mi passa i valori attuali che già avevo messo 
            //sopra con prevState
            // console.log(user)


          }} />

        <h1>{name}</h1> {/* voglio vedere la mia variabile name; onChange e SetName 
          cambiano valore variabile. L'input ho un value che si modifica. In questo caso vedrò subito
          ospite nell'input*/}
        <input type="mail"
          value={mail}
          className="border-black border-2 p-2 rounded"
          onChange={(event) => {
            setMail(mail);
            const newMail = event.target.value;
            setMail(newMail);
            setUser((prevState) => {
              return {
                ...prevState,
                mail: newMail,
            
              }
            });
/* OPPURE...
 onChange={(event) => {
   setMail(event.target.value);
   sdetUser(prevState =>{
    return {
      ..prevState,
      mail: event.target.value,
    }
   })
   */
          }} />
        <h1>{mail}</h1>
      </div>


    </>
  );
}
{/* <input type="text" value={name} />
<input type="text" value={mail} onChange={onChange} /> */}
export default App;
