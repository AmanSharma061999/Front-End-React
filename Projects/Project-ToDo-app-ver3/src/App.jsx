import AppName from "./components/AppName";
import InputComp from "./components/InputComp";
import ListComps from "./components/ListComps"; 
import "./App.css"
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { todoItemsContext } from "./store/todo-items-store";

function App()
{
  /*const todoItems1 = [
    {
      id:1,
      itemName: 'Complete Assignment',
      dueDate: '2024-10-01',
    },
    {
      id:2,
      itemName: 'Complete Project',
      dueDate: '2024-10-01',
    },
    {
      id:3,
      itemName: 'Buy Milk',
      dueDate: '2024-10-01',
    }
  ];

  //const [todoItems, setTodoItems]=useState([]);
  const [todoItems, setTodoItems]=useState(todoItems1);

  const addNewItem= (todoName, newdueDate)=>
    {
     setTodoItems((currValue) => [...currValue, {itemName: todoName, 
      dueDate: newdueDate}]);
  };

  const deleteItem = (itemNameDelete) => {
    const newTodoItems = todoItems.filter(item => item.itemName !== itemNameDelete);
    console.log(`${itemNameDelete}`);
    setTodoItems(newTodoItems)
  }

  return (
  <todoItemsContext.Provider value={todoItems}>
    <center className="todo-container">
      <AppName />
      <InputComp onNewItem={addNewItem}/>
      <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
      <ListComps todoItemsL={todoItems} handleDelete={deleteItem}/>
    </center>
  </todoItemsContext.Provider>);*/

  const todoItems1 = [
    {
      id:1,
      itemName: 'Complete Assignment',
      dueDate: '2024-10-01',
    },
    {
      id:2,
      itemName: 'Complete Project',
      dueDate: '2024-10-01',
    },
    {
      id:3,
      itemName: 'Buy Milk',
      dueDate: '2024-10-01',
    }
  ];

  //const [todoItems, setTodoItems]=useState([]);
  const [todoItems, setTodoItems]=useState(todoItems1);

  const addNewItem= (todoName, newdueDate)=>
    {
     setTodoItems((currValue) => [...currValue, {itemName: todoName, 
                                                dueDate: newdueDate}]);
  };

  const deleteItem = (itemNameDelete) => {
    const newTodoItems = todoItems.filter(item => item.itemName !== itemNameDelete);
    console.log(`${itemNameDelete}`);
    setTodoItems(newTodoItems)
  }

  return (
  <todoItemsContext.Provider value={
    {                                   // {
      todoItems: todoItems,             //  todoItems,
      addNewItem: addNewItem,           //  addNewItem,
      deleteItem:deleteItem,            //  deleteItem,    }
    }}>                                 
    <center className="todo-container">
      <AppName/>
      <InputComp/>
      <WelcomeMessage/>
      <ListComps/>
    </center>
  </todoItemsContext.Provider>);
}
export default App;



/* In the above code todoItems is used in every component so instead of passing it as a prop to the children we use Context API so that cumbersome of code is also reduced. */