import styles from './peralum.module.css'
import Barra from './barra';
import Sidebar from './sidebar';
import Contenido from './contenidoadmin';

const Perfilalum = () =>{
    
    const modo= 'alumno'
    return (
        <div className={styles.container}>
        <Barra/>
        <main className={styles.xd}>
            <Sidebar/>
            <section className={styles.parte2}>
                <div className={styles.titulo2}>
                    <span>Mi Perfil</span>
                </div>
                <Contenido modo = 'alumno'/>
            </section>
        </main>
    </div>
    )
}

export default Perfilalum;