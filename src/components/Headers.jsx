import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import Sun from "../images/icon-sun.svg";
import Moon from "../images/icon-moon.svg"

function Header() {
  
  const [condition, setCondition] = useState(true)
  const {addTask, checkState, setCheckState, setInputBackground, inputBackground} = useContext(GlobalContext); 
  const [inputValue, setInputValue] = useState("");
  const [isBackground, setIsBackground] = useState("darkBackground");


  const handleKeyDown = (e) => {
    if(e.key === "Enter" && inputValue.trim() !== "")
    {
      addTask(inputValue);
      setInputValue("");  
    }
  }

  return ( 
    <div className={`${isBackground} h-3 flex-column flex justify-content-center align-items-center `}>
    <div className='w-4 h-3 flex  justify-content-between todo'>
      <h1 style={{ letterSpacing: "10px" }} className="text-5xl text-white">TODO</h1>
     
      {
  condition ? 
    <img
      src={Sun}
      className='theme'
      style={{ width: "26px", height: "26px" }}
      alt=""
      onClick={() => {
        setIsBackground("lightBackground");
        setInputBackground("inputLightBackground");
        setCondition(false);

        document.body.style.backgroundColor = "#FAFAFA";
        document.querySelector(".footerInput").style.backgroundColor = "#fff"
      }}
    />
  : 
    <img
      src={Moon}
      className='theme'
      style={{ width: "26px", height: "26px" }}
      alt=""
      onClick={() => {
        setIsBackground("darkBackground");
        setInputBackground("inputDarkBackground");
        setCondition(true);

        document.body.style.backgroundColor = "#161722";
        document.querySelector(".footerInput").style.backgroundColor = "#25273C"
      }}
    />
  
}

      
    </div>

    <div  className="mt-4 transtition">
      <input  type='checkbox' className='checkNull' checked={checkState} onChange={() => setCheckState(!checkState)}></input>
      <input className={`${inputBackground} inputType firstInput`} value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} placeholder='Create New Task' type="text" /> 
    </div>
    
    </div>
  );
}

export default Header;

