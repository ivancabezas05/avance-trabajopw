import styles from './perfiladmin.module.css'

const InputP = (props) =>{
    return (
        <div className={styles.label} htmlFor="">
            <label className={styles.placeholder} htmlFor="">{props.placeholder}</label>
            <input className={styles.input} type="text" />
        </div>
    )
}

export default InputP;