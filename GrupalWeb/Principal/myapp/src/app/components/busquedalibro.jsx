import styles from './botoneslibro.module.css'

const Botoneslibro = () =>{
    return (
        <div className={styles.busquedalibro}>
                        <span>pagina 1</span>
                        <button className={styles.botoncambio}>anterior</button>
                        <button className={styles.botoncambio}>siguiente</button>
                    </div>
    )
}

export default Botoneslibro;