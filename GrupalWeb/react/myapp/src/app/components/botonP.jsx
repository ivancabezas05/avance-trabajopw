import React, { useState } from 'react';
import styles from './perfiladmin.module.css';

const BotonP = ({ opcionSeleccionada }) => {
  const [error, setError] = useState(null);
  const [inputValues, setInputValues] = useState({
    Nombres: '',
    'Tipo de Documento': '',
    Apellidos: '',
    'Nro de Documento': '',
    Username: '',
    Password: '',
    Color: '',
    Prefijo: '',
    Idioma: '',
  });

  const handleButtonClick = () => {
    const camposRequeridos = ['Nombres', 'Tipo de Documento', 'Apellidos', 'Nro de Documento'];

    // Obtener valores de los campos según la opción seleccionada
    const campos = camposRequeridos.filter((campo) => {
      return inputValues[campo] === '';
    });

    if (campos.length > 0) {
      // Mostrar mensaje de error si hay campos vacíos
      setError('Por favor, rellene los campos especificos.');
    } else {
      // Crear la lista de tuplas o realizar otras tareas aquí
      setError(null);
      // Ejemplo de cómo crear una lista de tuplas
      const listaDeTuplas = camposRequeridos.map((campo) => [campo, inputValues[campo]]);
      console.log('Lista de tuplas:', listaDeTuplas);
    }
  };

  const handleChange = (campo, valor) => {
    // Actualizar el estado de inputValues
    setInputValues({ ...inputValues, [campo]: valor });
  };

  return (
    <div>
      {error && <div className={styles.error}>{error}</div>}
      <button type='button' className={styles.Button} onClick={handleButtonClick}>
        Guardar
      </button>
    </div>
  );
};

export default BotonP;
