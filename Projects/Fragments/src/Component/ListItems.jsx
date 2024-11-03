/* eslint-disable react/prop-types */
import { useState } from "react";
import ListItem from "./ListItem";

const ListItems = ({items, deleteFromList1}) =>
{
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (clickedItem) => 
    {
    let newItems = [...activeItems,clickedItem];
    setActiveItems(newItems);
    
   }

  return (
    <ul className="list-group">
      {
        items.map((item) => (
          <ListItem 
          key={item} 
          foodItem={item} 
          alertByButton={(event) => onBuyButton(item,event)} 
          deleteFromList={deleteFromList1} 
          bought={activeItems.includes(item)}/>
        ))}
    </ul>
  );
}

export default ListItems;