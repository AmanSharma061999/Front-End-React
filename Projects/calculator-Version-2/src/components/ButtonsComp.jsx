/* eslint-disable react/prop-types */
import styles from './ButtonsComp.module.css';


const ButtonsComp = ( {onClickBehaviour} ) =>
{
  const buttonsName= ['C','1','2','+','-','5','6','*','7','8','/','=','9','0','.',];

  return (
    <div className={styles.buttonsContainer}>
      {
        buttonsName.map((buttonName) => (<button 
          key={buttonName} 
          className={styles.button} 
          onClick={()=> onClickBehaviour(buttonName)}>{buttonName} </button>))
        }
    </div>
  );
};

export default ButtonsComp;