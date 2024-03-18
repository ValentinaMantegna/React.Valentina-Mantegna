import { IoIosLogIn } from "react-icons/io"; //componenent va dentro le graffe, metto la virgola per aggiungere altre icone

function Header (props) {
    console.log(props.title);
    return(
        <header className="bg-cyan-900 flex justify-between  items-center h-16" >
        <div className=" w-1/2  flex justify-end items-center"> 
        <h1 className=" text-white text-4xl">{props.title}</h1>
        </div>
        <div className="flex justify-end">
      <button className="bg-green-500 text-xl text-white border rounded py-2 px-4 mr-3"><IoIosLogIn/></button>
        </div>
       </header>
    );
}

export default Header;