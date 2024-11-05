import ListComp from "./ListComp.jsx";
import { todoItemsContext } from "../store/todo-items-store.jsx";
import { useContext } from "react";


const ListComps = () =>
{
  const {todoItems} = useContext(todoItemsContext);
  

  // Or we Destructure it ----  const { todoItems } = useContext(todoItemsContext)

  return (
      <div className="items-container">
        {
          todoItems.map((item) => 
          (
            <ListComp key ={item.id} 
                      itemName={item.itemName} 
                      dueDate={item.dueDate}>
                      </ListComp>
          ))
        }
      </div>
  );
};

export default ListComps;