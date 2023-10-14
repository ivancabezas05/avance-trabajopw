import styles from './perfiladmin.module.css'
import BarraP from './barraperfiles';
import InputP from './inputperfil';
import BotonP from './botonP';
import FotoP from './fotoperfil';
import React, { useState } from 'react';
const Contenido = ({ modo }) => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('DATOS PERSONALES');

  return (
    <article className={styles.articulo1}>
      <div className={styles.recuadro1}>
        <div className={styles.cuadro1}>
          <FotoP modo = {modo}/>
        </div>
        <div className={styles.cuadro2}>
          <BarraP setOpcionSeleccionada={setOpcionSeleccionada} modo = {modo}/>
          {modo === 'admin' ? (
            <form className={styles.formulario} action="">
              {/* Renderizar inputs basados en la opción seleccionada */}
              {opcionSeleccionada === 'DATOS PERSONALES' && (
                <>
                  <InputP placeholder='Nombres' />
                  <InputP placeholder='Tipo de Documento' />
                  <InputP placeholder='Apellidos' />
                  <InputP placeholder='Nro de Documento' />
                </>
              )}
              {opcionSeleccionada === 'CUENTA' && (
                <>
                  <InputP placeholder='Correo' inputType='email' />
                  <InputP placeholder='Password' inputType='password' />
                </>
              )}
              {opcionSeleccionada === 'PREFERENCIAS' && (
                <>
                  <InputP placeholder='Color' />
                  <InputP placeholder='Prefijo' />
                  <InputP placeholder='Idioma' />
                </>
              )}
              <BotonP />
            </form>
          ) : modo === 'alumno' ? (
            <form className={styles.formulario} action="">
              {/* Renderizar inputs basados en la opción seleccionada */}
              {opcionSeleccionada === 'DATOS PERSONALES' && (
                <>
                  <InputP placeholder='Nombres' />
                  <InputP placeholder='Tipo de Documento' />
                  <InputP placeholder='Apellidos' />
                  <InputP placeholder='Nro de Documento' />
                </>
              )}
              {opcionSeleccionada === 'CUENTA' && (
                <>
                  <InputP placeholder='Correo' inputType='email' />
                  <InputP placeholder='Password' inputType='password' />
                </>
              )}
              <BotonP />
            </form>
          ) : modo ='agregar' ? (
            <form className={styles.formulario} action="">
                {/* Renderizar inputs basados en la opción seleccionada */}
                {opcionSeleccionada === 'DATOS PERSONALES' && (
                  <>
                    <InputP placeholder='TÍTULO' />
                    <InputP placeholder='Autor, autores' />
                    <InputP placeholder='ISBN' />
                    <InputP placeholder='Serie, tipo' />
                  </>
                )}
                
                <BotonP />
              </form>
          ) : null }
        </div>
      </div>
    </article>
  );
};

export default Contenido;

  