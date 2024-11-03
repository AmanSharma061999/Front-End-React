import { createContext } from "react";

export const todoItemsContext=createContext({                                  // {
    todoItems: [],             //  todoItems,
    addNewItem: () => {},           //  addNewItem,
    deleteItem: () => {},            //  deleteItem,    
});