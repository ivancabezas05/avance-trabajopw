
import styles from './page.module.css'

const Input = ({ inputType, spanText }) =>{ 

    return (
        <div className={styles.div}>
             <label className={styles.span1}>{spanText}</label>
             <input className={styles.usuario} type={inputType} required />
        </div>
    )

}

export default Input;