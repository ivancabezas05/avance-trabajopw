import styles from './resultados.module.css'
import Sidebar from './sidebar';
import Botonlibros from './busquedalibro';
import Barra from './barra';
import Libro from './libro';
import Barrareserva from './barrareserva';

const Resultados = () =>{
    return (
        <div className={styles.container}>
        <Barra/>
        <main className={styles.xd}>
            <Sidebar li1="Principal" li2="Perfil" li3="Biblioteca"/>
            <section className={styles.parte2}>
                <div className={styles.titulo2}>
                    <span>Biblioteca</span>
                    <button className={styles.botontitulo}>Añadir un nuevo recurso</button>
                </div>
                <article className={styles.articulo1}>  
                    <div className={styles.recuadro1}>   
                        <Barrareserva/>
                    </div>
                    <div className={styles.libros}>
                        <Libro/>
                        <Libro/>
                        <Libro/>
                    </div>
                    <Botonlibros/>
                </article>
            </section>
        </main>
    </div>
    )
}

export default Resultados;