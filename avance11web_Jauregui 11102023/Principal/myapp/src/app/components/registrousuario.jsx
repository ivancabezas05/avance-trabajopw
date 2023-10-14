import styles from './registro.module.css'
import Input from './input1'
import React, { useState } from 'react';
import Link from 'next/link'

const Registro = () =>{
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        tipoDocumento: '',
        nroDocumento: '',
        correoElectronico: '',
        password: '',
        confirmarPassword: '',
      });
      const [errorMessage, setErrorMessage] = useState('');
      const [registroExitoso, setRegistroExitoso] = useState(false);
      const [registroList, setRegistroList] = useState([]);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Verifica si los campos de tipo "text" están llenos
        for (const key in formData) {
          if (key !== 'password' && key !== 'confirmarPassword' && formData[key] === '') {
            console.log({formData})
            setErrorMessage('Las credenciales no se rellenaron completamente');
            return;
          }
        }
    
        // Verifica si las contraseñas coinciden
        if (formData.password !== formData.confirmarPassword) {
          setErrorMessage('Las contraseñas no coinciden');
          return;
        }
    
        // Agrega los datos a la lista de registros
        setRegistroList([...registroList, formData]);

        // Almacena la lista actualizada en el localStorage
        localStorage.setItem('alumnos', JSON.stringify(registroList));

    
        // Muestra un mensaje de registro exitoso
        setRegistroExitoso(true);
    
        // Muestra un mensaje de registro exitoso
        setRegistroExitoso(true);
    
        // Reinicia los campos de tipo "text"
        setFormData({
          ...formData,
          nombres: '',
          apellidos: '',
          tipoDocumento: '',
          nroDocumento: '',
          correoElectronico: '',
        });

          // Espera 2 segundos y luego redirige a la página de inicio de sesión
          setTimeout(() => {
            window.location.href = '/page'; // Reemplaza '/page.js' con la ruta correcta a tu página de inicio de sesión
          }, 2000); // 2000 milisegundos (2 segundos)
      
      };

    return (
    <div className={styles.container}>
    <div className={styles.texto}>   
        <span className={styles.spa1}>Sistema de reserva de libros</span>
        <span className={styles.spa2}>Registro de usuario</span>
    </div>
        <form className={styles.section} onSubmit={handleSubmit}>
            <div className={styles.form} >
            <span className={styles.spa3}>Datos Personales</span>
            <Input spanText="Nombres" inputType="text" value={formData.nombres} onChange={handleInputChange} required name="nombres"/>
            <Input spanText="Apellidos" inputType="text" value={formData.apellidos} onChange={handleInputChange} required name ="apellidos"/>
            <Input spanText="Tipo de Documento" inputType="text" value={formData.tipoDocumento} onChange={handleInputChange} required  name= "tipoDocumento"/>
            <Input spanText="Nro de Documento" inputType="text" value={formData.nroDocumento} onChange={handleInputChange} required name= "nroDocumento"/>
            </div>
            <div className={styles.form} >
            <span className={styles.spa3}>Datos de la cuenta</span>
            <Input spanText="Correo Electrónico" inputType="email" value={formData.correoElectronico} onChange={handleInputChange} required name= "correoElectronico"/>
            <Input name="password" spanText="Password" inputType="password" value={formData.password} onChange={handleInputChange} required />
            <Input name="confirmarPassword" spanText="Ingrese Password Nuevamente" inputType="password" value={formData.confirmarPassword} onChange={handleInputChange} required />
            {errorMessage && <div className={styles.error}>{errorMessage}</div>}
            {registroExitoso && (
              <div className={styles.exitoso}>Usuario registrado correctamente.</div>
            )}
            <div className={styles.boton}>
              <Link href="./app"><button type="submit" onClick={handleSubmit}>Registrar</button></Link>
            </div>
            </div>
          </form>
    </div>
    )
}

export default Registro;