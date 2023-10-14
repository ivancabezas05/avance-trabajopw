"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import styles from './page.module.css'
import Input from './input1'; 

import Admins from './administradores.json';
import Usuario from './usuario.json';


const Logear = () => {
  const [state, setState] = useState({ usuario: '', contrasena: '' });
  const router = useRouter();

  // Función para manejar cambios en los campos de entrada
  function mngmtChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  // Función para validar el inicio de sesión
  const validarLogeo = async (e) => {
    e.preventDefault();

    const { usuario, contrasena } = state;

    // Verificar si es un administrador
    const admin = Object.values(Admins).find(
      (admin) => admin.correo === usuario && admin.contrasena === contrasena
    );

    // Verificar si es un alumno
    const alumno = Object.values(Usuario).find(
      (alumno) => alumno.correo === usuario && alumno.password === contrasena
    );

    if (admin) {
      // Usuario es un administrador
      router.push(`/blog/admin/${admin.correo}/perfiladmin`);
    } else if (alumno && alumno.correo === usuario && alumno.password === contrasena) {
      // Usuario es un alumno
      router.push(`/blog/alumno/${alumno.correo}/principalalm`);
    } else {
      // No coincide la contraseña o usuario
      alert('No coincide la contraseña o usuario');
    }
  };

  return (
    <div className={styles.contenedor}>
      <div className={styles.contenido}>
        <span className={styles.titulo1}>Sistema de reserva de Libros</span>
        <form className={styles.registro} onSubmit={validarLogeo}>
          <Input
            inputType="text"
            spanText="Usuario o Correo"
            name="usuario"
            value={state.usuario}
            onChange={mngmtChange}
          />
          <div className={styles.label2}>
            <Input
              inputType="password"
              spanText="Contraseña"
              name="contrasena"
              value={state.contrasena}
              onChange={mngmtChange}
            />
            <div className={styles.opcion}>
              <span>Olvidé mi contraseña</span>
            </div>
          </div>
          <div className={styles.botones}>
            <button className={styles.button1}>
              <Link href="./registro">Registro usuario</Link>
            </button>
            <button className={styles.button2} type="submit">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Logear;