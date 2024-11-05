/*
import AppName from "./components/AppName";
import InputComp from "./components/InputComp";
import ListComps from "./components/ListComps"; 
import "./App.css"
import { useReducer } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { todoItemsContext } from "./store/todo-items-store";

const reducerTodoItem = (currentToDoItems, action) => 
{
  let newTodoItems = currentToDoItems
  if(action.type === "Add")
  {
    newTodoItems = [...currentToDoItems, {itemName:action.payload.todoName, dueDate:action.payload.newdueDate}];
  }
  if(action.type === 'Delete')
  {
    newTodoItems= currentToDoItems.filter(item => item.itemName !== action.payload.todoName);
  }
  return newTodoItems;
}

function App()
{
  const initialTodoItem = 
  [{
    itemName: "Complete Assignment",
    dueDate: "2024-10-01",
  },
  {
    itemName: 'Complete Project',
    dueDate: '2024-10-01',
  }];

  const [todoItems, dispatchTodoItems]=useReducer(reducerTodoItem, initialTodoItem);

  const addNewItem= (todoName, newdueDate)=>
    {
      const newItemAction = {
        type: "Add",
        payload: {
          todoName,
          newdueDate,
        }
      }
      dispatchTodoItems(newItemAction);
    };

  const deleteItem = (todoName) => 
    {
     const deleteItemAction= 
     {
       type: "Delete",
       payload: {
        todoName,
      }
     }
    dispatchTodoItems(deleteItemAction);
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
*/



/* In the above code todoItems is used in every component so instead of passing it as a prop to the children we use Context API so that cumbersome of code is also reduced. 
  Also if we notice function App() itself defines addNewItem() and deleteItem(), what can be done is we provide addNewItem() and deleteItem() in context API and App only deals with UI logic not the business logic.*/

import AppName from "./components/AppName";
import InputComp from "./components/InputComp";
import ListComps from "./components/ListComps"; 
import "./App.css"
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

function App()
{
  return (      
    <TodoItemsContextProvider>
    <center className="todo-container">
      <AppName/>
      <InputComp/>
      <WelcomeMessage/>
      <ListComps/>
    </center>
    </TodoItemsContextProvider>
    )   
}
export default App;