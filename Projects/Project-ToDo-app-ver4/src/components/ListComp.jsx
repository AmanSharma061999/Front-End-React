/* eslint-disable react/prop-types */
import { useContext } from "react";
import styles from "./ListComp.module.css";
import { MdDelete } from "react-icons/md";
import { todoItemsContext } from "../store/todo-items-store.jsx";

function ListComp({itemName, dueDate})
{
  const {deleteItem } = useContext(todoItemsContext);

  return (
    <div className={`container ${styles['contentAlign']}`}>

      <div className="row samp-row">
        <div className="col-6">
          {itemName}</div>

        <div className="col-4">
          {dueDate}</div>

        <div className="col-2">
          <button type="button" className="btn btn-danger samp-btn" onClick={()=>deleteItem(itemName)}>
          <MdDelete /></button>
        </div>
      </div>
    </div>
  );
}

export default ListComp;