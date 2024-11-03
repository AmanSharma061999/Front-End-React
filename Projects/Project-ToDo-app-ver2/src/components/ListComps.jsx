/* eslint-disable react/prop-types */
import ListComp from "./ListComp.jsx";


const ListComps = ({todoItemsL,handleDelete}) =>
{
  return (
      <div className="items-container">
        {
          todoItemsL.map((item) => 
          (
            <ListComp key ={item.id} itemName={item.itemName} dueDate={item.dueDate} handleDelete={handleDelete}></ListComp>
          ))
        }
      </div>
  );
};

export default ListComps;