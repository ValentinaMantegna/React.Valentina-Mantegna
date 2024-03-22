import { IoIosLogIn as Login} from "react-icons/io"; //componenent va dentro le graffe, metto la virgola per aggiungere altre icone

function Header ( props)/* (props) */ { //parametro props, comodo perchè più dinamico
  const {title} = props; //destructuring se metto const allora sotto posso solo scrivere title // {props.title}= (props) //questo lo levo se come 
  //coome parametro c'è title
    console.log(props.title);
    return(
        <header className="bg-cyan-900 flex justify-between  items-center h-16" >
        <div className=" w-1/2  flex justify-end items-center"> 
        <h1 className=" text-white text-4xl">{title}</h1>  
        </div>
        <div className="flex justify-end">
      <button className="bg-green-500 text-xl text-white border rounded py-2 px-4 mr-3"><Login/></button>
        </div>
       </header>
    );
}

export default Header;