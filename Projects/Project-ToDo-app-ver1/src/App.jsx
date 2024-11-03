import AppName from "./components/AppName";
import DeleteComp1 from "./components/DeleteComp1";
import DeleteComp2 from "./components/DeleteComp2";
import InputComp from "./components/InputComp";
import "./App.css"

function App(){
  return <center className="todo-container">
    <AppName />
    <InputComp />
    <div className="DeleteComp-container">
      <DeleteComp1 />
      <DeleteComp2 />
    </div>
  </center>
}
export default App;