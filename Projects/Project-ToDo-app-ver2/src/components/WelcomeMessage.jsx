/* eslint-disable react/prop-types */

import style from './WelcomeMessage.module.css';
const WelcomeMessage = ({ todoItems }) => {
  return (
     todoItems.length === 0 && <p className={style.welcome}>Enjoy Your Day</p>
  );
}

export default WelcomeMessage;