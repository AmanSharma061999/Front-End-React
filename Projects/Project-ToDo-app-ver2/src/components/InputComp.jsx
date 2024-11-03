/* eslint-disable react/prop-types */
import style from "./InputComp.module.css";
import { useRef } from "react";
//import { useState } from "react";
import { MdAddCard } from "react-icons/md";

/*function InputComp({ onNewItem })
{

  const [itemData, setItemData] = useState();
  const [dueDate, setDueDate] = useState();

  const handleItemChange = (event) =>{
    console.log(event.target.value);
    setItemData(event.target.value);
  };

  const handleDueDateChange = (event) =>{
    console.log(event.target.value);
    setDueDate(event.target.value);
  };

  const handleOnClick = () => {
    onNewItem(itemData, dueDate);
    setDueDate("");
    setItemData("");
  };

  return (
  <div className="container text-center">
    <div className="row samp-row">    
  <div className="col-6">
    <input 
    className={style['inputCompClass']} 
    type="text" 
    placeholder="Enter ToDo Here" 
    onChange={handleItemChange}/>
  </div>
  <div className="col-4">
    <input 
    type="date"
    className={style['inputCompClass']} 
    placeholder="Enter Due Date" 
    onChange={handleDueDateChange}/>
  </div>
  <div className="col-2"><button type="button" className="btn btn-success samp-btn" onClick={handleOnClick}><MdAddCard />
  </button></div>
</div>
</div>);
};

export default InputComp;*/


/*
So till this point of time to fetch the value from input we used state and then using setState we kept track of the changes in input, This infact re-paints a whole component which is cumbersome. 
Hence, useRef it retains only the value by using ref attribute in <input /> and then manipulating according to the needs.
*/

function InputComp({ onNewItem })
{

  const todoItemElement = useRef()
  const dueDateElement = useRef()

  const handleOnClick = (event) => {
    event.preventDefault();
    const todoName = todoItemElement.current.value
    const dueDate = dueDateElement.current.value;
    onNewItem(todoName, dueDate);
    dueDateElement.current.value = "";
    todoItemElement.current.value = "";
  };

  return (
  <form className="container text-center" onSubmit={handleOnClick}>
    <div className="row samp-row">    
      <div className="col-6">
        <input 
        className={style['inputCompClass']} 
        type="text" 
        placeholder="Enter ToDo Here" 
        ref={todoItemElement}/>
      </div>
      <div className="col-4">
        <input 
        type="date"
        className={style['inputCompClass']} 
        placeholder="Enter Due Date" 
        ref={dueDateElement}/>
      </div>
      <div className="col-2"><button 
        className="btn btn-success samp-btn">
          <MdAddCard />
        </button></div>
</div>
</form>);
};

export default InputComp;

