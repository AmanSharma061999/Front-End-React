/* eslint-disable react/prop-types */
import styles from './FoodInput.module.css';
const FoodInput= ({ callByOnKeyDown }) =>
{
  
  return (<input className = {styles.inputStyling} type="text" placeholder="Enter Item" onKeyDown={callByOnKeyDown}></input>);
}

export default FoodInput;