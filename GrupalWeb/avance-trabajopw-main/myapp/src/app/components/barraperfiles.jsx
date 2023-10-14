import styles from './perfiladmin.module.css'

const BarraP = () =>{
    return (
        <nav className={styles.barracuadro}>
            <ul className={styles.opcionescuadro}>
                <li className={styles.licuadro}>DATOS PERSONALES</li>
                <li className={styles.licuadro}>CUENTA</li>
                <li className={styles.licuadro}>PREFERENCIAS</li>
            </ul>
        </nav>
    )
}

export default BarraP;