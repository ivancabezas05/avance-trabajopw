import styles from './resultados.module.css'
import Sidebar from './sidebar';

const Resultados = () =>{
    return (
        <div className={styles.container}>
        <header className={styles.barra}>
            <div className={styles.icono1}>
                <img src="/media/menu-hamburguesa.png" alt="barras"/>
            </div>
            <span className={styles.titulobarra}>Biblioteca</span>
            <div className={styles.icono2}>
                <img src="/media/usuario.png" alt="usuario"/>
            </div>
        </header>
        <main className={styles.xd}>
            <Sidebar li1="ddd" li2="ddd" li3="dff"/>
            <section className={styles.parte2}>
                <div className={styles.titulo2}>
                    <span>Biblioteca</span>
                    <button className={styles.botontitulo}>Añadir un nuevo recurso</button>
                </div>
                <article className={styles.articulo1}>  
                    <div className={styles.recuadro1}>   
                        <div className={styles.label} htmlFor="">
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                    <label className={styles.placeholder}  htmlFor="">Ingresa la palabra clave:</label>
                                    <input className={styles.input} type="text" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.libros}>
                        <article className={styles.libro}></article>
                        <article className={styles.libro}></article>
                        <article className={styles.libro}></article>
                    </div>
                </article>
            </section>
        </main>
    </div>
    )
}

export default Resultados;