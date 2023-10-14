import styles from './prestamo.module.css'
import Sidebar from './sidebar';
import Barra from './barra';
import Barrareserva from './barrareserva';
import { useEffect, useState } from 'react';


const Prestamo = () =>{


    const modo= 'alumno'
    const [nombre, setNombre] = useState(""); 
    
    useEffect(() => {

        
        // Recuperar datos del usuario desde localStorage
        const usuarioJSON = localStorage.getItem('usuario');
        const usuario = JSON.parse(usuarioJSON);
    
        if (usuario) {
          // Aquí puedes utilizar los datos del usuario en esta página
          const nombreUsuario = usuario.nombres;
          setNombre(nombreUsuario);
          console.log('Datos del usuario recuperados desde localStorage:', usuario);
        } else {
          // Si no se encuentra un usuario en localStorage, puedes manejarlo adecuadamente.
          router.push('/login'); // Redirigir al usuario a la página de inicio de sesión si no hay usuario en localStorage.
        }
      }, []); // Esto se ejecutará después de la renderización inicial del componente
    
      // Resto de tu código de la página de inicio del alumno


    return (
        <div className={styles.container}>
        <Barra titulobarra = 'Administración de Biblioteca'/>
        <main className={styles.xd}>
            <Sidebar li1="Inicio" li2="Perfil" li3="Bibliotecas"/>
            <section className={styles.parte2}>
                <div className={styles.titulo2}>
                    <span>Bienvenido, {nombre}!</span>
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