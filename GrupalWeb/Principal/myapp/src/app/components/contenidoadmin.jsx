import styles from './perfiladmin.module.css'
import BarraP from './barraperfiles';
import InputP from './inputperfil';
import BotonP from './botonP';
import FotoP from './fotoperfil';
import React, { useState } from 'react';



const Contenido = ({ modo }) => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('DATOS PERSONALES');
  const [datosPersonales, setDatosPersonales] = useState({
    nombres: '',
    tipoDocumento: '',
    apellidos: '',
    nroDocumento: '',
    correo: '',
    password: '',
    color: '',
    prefijo: '',
    idioma: '',
  });

  // Función para manejar cambios en los datos personales
  const handleDatosPersonalesChange = (e) => {
    const { name, value } = e.target;
    setDatosPersonales({ ...datosPersonales, [name]: value });
  };

  // Función para guardar los cambios en el localStorage
  const handleGuardarCambios = () => {
    // Guarda los datos actualizados en el localStorage
    localStorage.setItem('usuario', JSON.stringify(datosPersonales));
    console.log('Datos de usuario actualizados en localStorage:', datosPersonales);
  };

  
  return (
    <article className={styles.articulo1}>
      <div className={styles.recuadro1}>
        <div className={styles.cuadro1}>
          <FotoP modo = {modo} />
        </div>
        <div className={styles.cuadro2}>
          <BarraP setOpcionSeleccionada={setOpcionSeleccionada} modo = {modo}/>
          {modo === 'admin' ? (
            <form className={styles.formulario} action="">
              {/* Renderizar inputs basados en la opción seleccionada */}
              {opcionSeleccionada === 'DATOS PERSONALES' && (
                <>
                  <InputP placeholder='Nombres' inputType='text' required name='nombres' value={datosPersonales.nombres || ''} onChange={handleDatosPersonalesChange} />
                  <InputP placeholder='Tipo de Documento' inputType='text' name='tipoDocumento' required value={datosPersonales.tipoDocumento || ''} onChange={handleDatosPersonalesChange} />
                  <InputP placeholder='Apellidos' inputType='text' required name='apellidos' value={datosPersonales.apellidos || ''} onChange={handleDatosPersonalesChange} />
                  <InputP placeholder='Nro de Documento' inputType='text' name='nroDocumento' required value={datosPersonales.nroDocumento || ''} onChange={handleDatosPersonalesChange}  />
                </>
              )}
              {opcionSeleccionada === 'CUENTA' && (
                <>
                  <InputP placeholder='Correo' inputType='email' name='corrreo' required value={datosPersonales.correo || ''} onChange={handleDatosPersonalesChange} />
                  <InputP placeholder='Password' inputType='password' name='password' required value={datosPersonales.password || ''} onChange={handleDatosPersonalesChange} />
                </>
              )}
              {opcionSeleccionada === 'PREFERENCIAS' && (
                <>
                  <InputP placeholder='Color' inputType='text' name='color' required value={datosPersonales.color || ''} onChange={handleDatosPersonalesChange} />
                  <InputP placeholder='Prefijo' inputType='text' name='prefijo' required value={datosPersonales.prefijo || ''} onChange={handleDatosPersonalesChange} />
                  <InputP placeholder='Idioma' inputType='text'  name='idioma' required value={datosPersonales.idioma || ''} onChange={handleDatosPersonalesChange} />
                </>
              )}
              <BotonP />
            </form>
          ) : modo === 'alumno' ? (
            <form className={styles.formulario} action="">
              {/* Renderizar inputs basados en la opción seleccionada */}
              {opcionSeleccionada === 'DATOS PERSONALES' && (
                <>
                  <InputP placeholder='Nombres'inputType='text' name='nombres' value={datosPersonales.nombres || ''} onChange={handleDatosPersonalesChange} required />
                  <InputP placeholder='Tipo de Documento' inputType='text'  name='tipoDocumento' required value={datosPersonales.tipoDocumento || ''} onChange={handleDatosPersonalesChange} />
                  <InputP placeholder='Apellidos' inputType='text' name='apellidos' required value={datosPersonales.apellidos || ''} onChange={handleDatosPersonalesChange} />
                  <InputP placeholder='Nro de Documento' inputType='text' name='nroDocumento' required value={datosPersonales.nroDocumento || ''} onChange={handleDatosPersonalesChange} />
                </>
              )}
              {opcionSeleccionada === 'CUENTA' && (
                <>
                  <InputP placeholder='Correo' inputType='email'  name='correo' required value={datosPersonales.correo || ''} onChange={handleDatosPersonalesChange} />
                  <InputP placeholder='Password' inputType='password' name='password' required value={datosPersonales.password || ''} onChange={handleDatosPersonalesChange} />
                </>
              )}
              <BotonP />
            </form>
          ) : modo ='agregar' ? (
            <form className={styles.formulario} action="">
                {/* Renderizar inputs basados en la opción seleccionada */}
                {opcionSeleccionada === 'DATOS PERSONALES' && (
                  <>
                    <InputP placeholder='TÍTULO' inputType='text' name='' value={datosPersonales.Titulo || ''} onChange={handleDatosPersonalesChange} required/>
                    <InputP placeholder='Autor, autores' inputType='text'  name='' value={datosPersonales.nombres || ''} onChange={handleDatosPersonalesChange} required />
                    <InputP placeholder='ISBN' inputType='text'  name='' value={datosPersonales.nombres || ''} onChange={handleDatosPersonalesChange} required/>
                    <InputP placeholder='Serie, tipo'  inputType='text' name='' value={datosPersonales.nombres || ''} onChange={handleDatosPersonalesChange} required />
                  </>
                )}
                
                <BotonP onSaveChanges={handleGuardarCambios} />
              </form>
          ) : null }
        </div>
      </div>
    </article>
  );
};

export default Contenido;

  