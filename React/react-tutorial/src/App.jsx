

function App() { //funzione React con la maiuscola
  return ( //questo return non ci dà errore perchè riconosciuto da React => restituisce elementi html
    <div className="flex justify-center items-center bg-pink-300">
    <button className="bg-green-500 text-white rounded py-2 px-4">
      Click me
    </button>
    </div>
  );
}

export default App;
