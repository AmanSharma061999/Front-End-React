/* eslint-disable react/prop-types */
import styles from './DisplayComp.module.css';

const DisplayComp = ({ displayVal }) =>
{
  return (  <input  className={styles.displayContainer} type="text" placeholder=" 0 + 1 " value={displayVal} readOnly></input>);
}

export default DisplayComp;