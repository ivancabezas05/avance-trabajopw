import styles from './agregarlibro.module.css'
import Sidebar from './sidebar';
import Barra from './barra';
import Contenido from './contenidoadmin';

const Agregarlibro = () =>{

    const modo='agregar'
    return (
        <div className={styles.container}>
        <Barra titulobarra='Administración de Bibliotecas'/>
        <main className={styles.xd}>
            <Sidebar li1="Inicio" li2="Perfil" li3="Biblioteca"/>
            <section className={styles.parte2}>
                <div className={styles.titulo2}>
                    <span>Bienvenido, Juan</span>
                </div>
                <Contenido modo= 'agregar'/>
                
            </section>
        </main>
    </div>
    )
}

export default Agregarlibro;