import ListItems from './Component/ListItems'
import ErrorMessage from './Component/ErrorMessage';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from './Component/Container';
import FoodInput from './Component/FoodInput';
import { useState } from 'react';

function App() 
{
  let [foodItems, setFoodItems] = useState([]);

  const callByOnKeyDown = (ev) => 
  {
    if(ev.key === "Enter")
    {
      let newFoodItem = ev.target.value;
      ev.target.value="";
      let newFoodItems = [...foodItems, newFoodItem];
      setFoodItems(newFoodItems);
    }
  }

  const deleteFromList = () => {
    let newFoodItems= foodItems.slice(0,-1);
    setFoodItems(newFoodItems);
  }

 return (
  <>
  <Container>
  <h1 className="head-content">Healthy Food List</h1>
  <FoodInput callByOnKeyDown={callByOnKeyDown}></FoodInput>
  <ListItems items={foodItems} deleteFromList1={deleteFromList}/>
  <ErrorMessage foodItems={foodItems}/>
  </Container>

  {/*{<Container>
    <p>Hey above are Healthy Fodd Items that are good in budget.</p>
  </Container>}*/}
  </>
 );
}

export default App;
