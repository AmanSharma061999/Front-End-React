/* eslint-disable react/prop-types */
import style from "./ListItem.module.css"

const ListItem = ({ foodItem, bought , alertByButton, deleteFromList }) =>
{
 
  return (
    <li className={` ${style.liCss} list-group-item ${bought && 'active' }`}>

    <span className={style.listItem}>{foodItem}</span>

    <button className={`${style.btn} btn btn-info`} 
      onClick={alertByButton}
      >Buy</button>
    <button className={`${style.btn} btn btn-danger`}   
      onClick={deleteFromList}
      >Delete</button>

    </li>
    );
};

/*
const ListItem = ({ foodItem }) =>
  {
  
    const alertByButton = (ev,foodItemPassed)=>{
      console.log(ev);
      console.log(`Item bought is ${foodItemPassed}`);
    }
  
    return (<li className="list-group-item">
      <span className={style.listItem}>{foodItem}</span>
      <button className={ `${style['btn']} btn btn-info`} 
        onClick={(ev)=>{alertByButton(ev,foodItem)}}
    >Buy</button></li>
      );
  };
*/  

export default ListItem;