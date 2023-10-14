import styles from './resultados.module.css';
import Sidebar from './sidebar';
import Botonlibros from './busquedalibro';
import Barra from './barra';
import Libro from './libro';
import Barrareserva from './barrareserva';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Admins from "./Admin.json";
import Alumnos from "./Alumnos.json"


const Resultados = () => {
  // No necesitas verificar la condición AdminPage
  useEffect(() => {
    // Recuperar datos del usuario desde localStorage
    const usuarioJSON = localStorage.getItem('usuario');
    const usuario = JSON.parse(usuarioJSON);

    if (usuario) {
      // Aquí puedes utilizar los datos del usuario en esta página
        console.log('Datos del usuario recuperados desde localStorage:', usuario);
    } else {
      // Si no se encuentra un usuario en localStorage, puedes manejarlo adecuadamente.
      router.push('/login'); // Redirigir al usuario a la página de inicio de sesión si no hay usuario en localStorage.
    }
  }, []);
  return (
    <div className={styles.container}>
      <Barra />
      <main className={styles.xd}>
        <Sidebar li1="Principal" li2="Perfil" li3="Biblioteca" />
        <section className={styles.parte2}>
          <div className={styles.titulo2}>
            <span>Biblioteca</span>
            <Link href={'./agregarlibro'}>
              <button className={styles.botontitulo}>Añadir un nuevo recurso</button>
            </Link>
          </div>
          <article className={styles.articulo1}>
            <div className={styles.recuadro1}>
              <Barrareserva />
            </div>
            <div className={styles.libros}>
              <Libro />
              <Libro />
              <Libro />
            </div>
            <Botonlibros />
          </article>
        </section>
      </main>
    </div>
  );
};

export default Resultados;