import React, { useState } from 'react';
import BarraP from './barraperfiles';
import InputP from './inputperfil';
import BotonP from './botonP';
import FotoP from './fotoperfil';
import styles from './perfiladmin.module.css';

const Contenido = () => {
  // Agrega un estado para almacenar la opción seleccionada
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('DATOS PERSONALES');

  return (
    <article className={styles.articulo1}>
      <div className={styles.recuadro1}>
        <div className={styles.cuadro1}>
          <FotoP />
        </div>
        <div className={styles.cuadro2}>
          <BarraP setOpcionSeleccionada={setOpcionSeleccionada} />
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
                <InputP placeholder='Username' />
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
        </div>
      </div>
    </article>
  );
};

export default Contenido;
