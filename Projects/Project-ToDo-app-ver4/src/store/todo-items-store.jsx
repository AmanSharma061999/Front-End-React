/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useReducer } from "react";


export const todoItemsContext=createContext({                  
    todoItems: [],                  
    addNewItem: () => {},           
    deleteItem: () => {},         
});

const reducerTodoItem = (currentToDoItems, action) => 
    {
      let newTodoItems = currentToDoItems
      if(action.type === "Add")
      {
        newTodoItems = [...currentToDoItems, {itemName:action.payload.todoName, dueDate:action.payload.newdueDate}];
      }
      else if(action.type === 'Delete')
      {
        newTodoItems= currentToDoItems.filter(item => item.itemName !== action.payload.todoName);
      }
      return newTodoItems;
    }
    

const TodoItemsContextProvider = ({ children }) => 
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

   const [todoItems, dispatchTodoItems]= useReducer(reducerTodoItem, initialTodoItem);

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
            todoName}
        }
        dispatchTodoItems(deleteItemAction);
    };

    return <todoItemsContext.Provider 
    value={
        {                                   // {
        todoItems: todoItems,             //  todoItems,
        addNewItem: addNewItem,           //  addNewItem,
        deleteItem:deleteItem,            //  deleteItem,    }
        }
        }> {children} </todoItemsContext.Provider>
    }

export default TodoItemsContextProvider;