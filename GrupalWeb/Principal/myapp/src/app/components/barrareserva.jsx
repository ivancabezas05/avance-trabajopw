import styles from './barrareserva.module.css';

const Barrareserva = () => {
   
  return (
    <div className={styles.busqueda}>
                            <div className={styles.lupa}>
                                <img src="/media/lupa.png" alt="lupa" />
                            </div>
                            <div className={styles.info}>
                                    <label className={styles.placeholder}  htmlFor="">Ingresa la palabra clave:</label>
                                    <input className={styles.input} type="text" />
                            </div>
                        </div>
  );
};

export default Barrareserva;