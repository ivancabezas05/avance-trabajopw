import styles from './libro.module.css'

const Libro = (props) =>{
    return(
    <article className={styles.libro}>
                            <div className={styles.librocuadro1}>
                                <div className={styles.icono3}>
                                <span>PP</span>
                                </div>
                                <p>
                                Psychology of computer programming
                                </p>
                            </div>
                            <div className={styles.imglibro}>
                                <div className={styles.imglibro2}> 
                                <img src="/media/caperucita.png" alt="" />
                                </div>
                            </div>
                            <div className={styles.informacionlibro}>
                                <span className={styles.spaninfo1}>ISBN: 0932633420</span>
                                <span className={styles.spaninfo2}>Autor: 0932633420</span>
                                <span className={styles.spaninfo2}>Editor: Addison-Wesley</span>
                                <span></span>
                            </div>
                            <div className={styles.contenedorbotonreserva}>
                                <button>Reservar</button>
                            </div>
                        </article>
)
}

export default Libro;