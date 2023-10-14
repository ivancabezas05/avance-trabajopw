import styles from './prestamo.module.css'
import Sidebar from './sidebar';
import Barra from './barra';
import Barrareserva from './barrareserva';

const Prestamo = () =>{
    return (
        <div className={styles.container}>
        <Barra titulobarra = 'Administración de Biblioteca'/>
        <main className={styles.xd}>
            <Sidebar li1="Inicio" li2="Perfil" li3="Bibliotecas"/>
            <section className={styles.parte2}>
                <div className={styles.titulo2}>
                    <span>Bienvenido, Andrés!</span>
                </div>
            <article className={styles.articulo1}>
                <div className={styles.recuadro1}>
                    <div className={styles.Barrasprestamo}>
                    <Barrareserva/>
                    </div>
                    <div className={styles.checkboxs}>
                        <span>Incluir busqueda</span>
                        <div>
                            <input type="checkbox" />
                            <span>xD</span> 
                        </div>
                        <div>
                            <input type="checkbox" />
                            <span>xD</span>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <span>xD</span>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <span>xD</span>
                        </div>


                    </div>
                </div>
            </article>
            </section>
        </main>
    </div>
    )
}

export default Prestamo;