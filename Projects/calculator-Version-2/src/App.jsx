import { useState } from 'react';
import style from './App.module.css';
import AppHeading from "./components/AppHeading";
import ButtonsComp from './components/ButtonsComp';
import DisplayComp from "./components/DisplayComp";

function App()
{

  const [calVal, setcalVal]= useState("");

  const onClickDefinition = (buttonText) => {
    if(buttonText === 'C')
      setcalVal("");
    else if( buttonText === '=')
    {
      let newCalVal= eval(calVal);
      setcalVal(newCalVal);
    }
    else
    {
      const newDisplayValue=calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  };


  return (
    <div className={style.container}>
      <AppHeading></AppHeading>
      <DisplayComp displayVal={calVal}></DisplayComp>
      <ButtonsComp onClickBehaviour={onClickDefinition}></ButtonsComp>
    </div>
  );
}

export default App;