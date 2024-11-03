import style from './App.module.css';
import AppHeading from "./components/AppHeading";
import ButtonsComp from './components/ButtonsComp';
import DisplayComp from "./components/DisplayComp";

function App()
{
  return (
    <div className={style.container}>
      <AppHeading></AppHeading>
      <DisplayComp></DisplayComp>
      <ButtonsComp></ButtonsComp>
    </div>
  );
}

export default App;