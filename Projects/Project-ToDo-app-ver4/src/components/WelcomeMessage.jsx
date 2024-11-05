
import style from './WelcomeMessage.module.css';
import { todoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const WelcomeMessage = () => {
  //const contextObj = useContext(todoItemsContext);
  //const todoItems = contextObj.todoItems;

  // Or we Destructure it ----  const { todoItems } = useContext(todoItemsContext)

  const { todoItems } = useContext(todoItemsContext)

  return (
     todoItems.length === 0 && <p className={style.welcome}>Enjoy Your Day</p>
  );
}

export default WelcomeMessage;