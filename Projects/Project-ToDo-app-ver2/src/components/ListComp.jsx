/* eslint-disable react/prop-types */
import styles from "./ListComp.module.css";
import { MdDelete } from "react-icons/md";
function ListComp({itemName,dueDate,handleDelete})
{
  return (
    <div className={`container ${styles['contentAlign']}`}>

      <div className="row samp-row">
        <div className="col-6">
          {itemName}</div>

        <div className="col-4">
        {dueDate}</div>

        <div className="col-2">
          <button type="button" className="btn btn-danger samp-btn" onClick={()=>handleDelete(itemName)}>
          <MdDelete /></button>
        </div>
      </div>
    </div>
  );
}

export default ListComp;