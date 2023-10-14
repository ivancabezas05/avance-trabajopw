import styles from './admin.module.css'
import Sidebar from './sidebar';
import Cuadros from './cuadros';
import Barra from './barra';

const Admin = () =>{
    return (
        <div className={styles.container}>
        <Barra titulobarra = 'Administración de Biblioteca'/>
        <main className={styles.xd}>
            <Sidebar li1="Inicio" li2="Perfil" li3="Bibliotecas"/>
            <section className={styles.parte2}>
                <div className={styles.titulo2}>
                    <span>Bienvenido, Andrés!</span>
                </div>
                    <Cuadros texto='Últimas Reservas' mostrarOpcion={true}/>
                    <Cuadros texto='Los más pedidos' mostrarOpcion={false}/>
            </section>
        </main>
    </div>
    )
}

export default Admin;