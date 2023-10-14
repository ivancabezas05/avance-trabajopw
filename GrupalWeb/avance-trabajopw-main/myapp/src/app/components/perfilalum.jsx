import styles from './peralum.module.css'
import Link from 'next/link';


const Perfilalum = () =>{
    return (
        <div className={styles.container}>
        <header className={styles.barra}>
            <div className={styles.icono1}>
                <img src="/media/menu-hamburguesa.png" alt="barras"/>
            </div>
            <span className={styles.titulobarra}>Biblioteca</span>
            <div className={styles.icono2}>
                <img src="/media/usuario (1).png" alt="usuario"/>
            </div>
        </header>
        <main className={styles.xd}>
            <aside className={styles.barralateral}>
                <ul className={styles.opciones}>
                    <li className={styles.li}>
                    <Link href="./perfilAlumno">Principal</Link> {/* Enlace "Principal" */}
                    </li>
                    <li className={styles.li}>Perfil</li>
                    <li className={styles.li}>Préstamos</li>
                </ul>
            </aside>
            <section className={styles.parte2}>
                <div className={styles.titulo2}>
                    <span>Mi Perfil</span>
                </div>
                <article className={styles.articulo1}>  
                    <div className={styles.recuadro1}>   
                        <div className={styles.cuadro1}>
                            <div className={styles.contenedorphoto}>
                                <span>hola</span>
                            </div>
                        </div>
                        <div className={styles.cuadro2}>
                            <nav className={styles.barracuadro}>
                                <ul className={styles.opcionescuadro}>
                                    <li className={styles.licuadro}>DATOS PERSONALES</li>
                                    <li className={styles.licuadro}>CUENTA</li>
                                </ul>
                            </nav>
                            <form className={styles.formulario}action="">
                                <div className={styles.label} htmlFor="">
                                    <label className={styles.placeholder} htmlFor="">Nombres</label>
                                    <input className={styles.input} type="text" />
                                    
                                </div>
                                <div className={styles.label} htmlFor="">
                                    <label className={styles.placeholder}  htmlFor="">Tipo de Documento</label>
                                    <input className={styles.input} type="text" />
                                </div>
                                <div className={styles.label} htmlFor="">
                                    <label className={styles.placeholder}  htmlFor="">Apellidos</label>
                                    <input className={styles.input} type="text" />
                                </div>
                                <div className={styles.label} htmlFor="">
                                    <label className={styles.placeholder}  htmlFor="">Nro de Documento</label>
                                    <input className={styles.input} type="text" />
                                </div>
                                <button type='submit' className={styles.Button}>Guardar</button>
                            </form>
                        </div>  
                    </div>
                </article>
            </section>
        </main>
    </div>
    )
}

export default Perfilalum;