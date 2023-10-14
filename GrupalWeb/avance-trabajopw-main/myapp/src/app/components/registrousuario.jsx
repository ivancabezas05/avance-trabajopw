"use client"

import Link from 'next/link'
import styles from './registro.module.css'
import Input from './input1'
import { useState } from "react"


const Registro = () =>{
    //ESTADO para manejar validación de contraseñas
  const [isValid, setIsValid] = useState(true)

  const [state, setState] = useState(
    { nombres: "", apellidos: "", tipoDocumento: "", nroDocumento: "", correo: "", password: "", repetirPassword: "" }
  )

  function mngmtChange(e) {
    console.log(e.target.name, e.target.value)
    setState({ ...state, [e.target.name]: e.target.value })
  }

  function mngmtSubmit(e) {
    e.preventDefault();

    //logica para manejar la validación de contraseña
    if (state.password !== state.repetirPassword) {
      setIsValid(false)
      alert('No coincide la contraseña');
      return;
    }
    setIsValid(true)
    let formData = new FormData();
    for (let [key, value] of Object.entries(state)) {
      formData.append(key, value)
    }
    //Una vez que se ha cargado el formData, se envia el formulario normalmente usando fetch (backend)...
    console.log(formData)

    // Redirigir a la página "/login" si las contraseñas coinciden
    window.location.href = "/login";
    alert("Se ha registrado correctamente");
  }
  const doEscribir = async () => {
    let formData = new FormData()
    for (let [key, value] of Object.entries(state)) {
      formData.append(key, value)
    }

    //aparentemente el formData no funciona bien
    //Genero mapa con los valores
    let params = new Map([])
    formData.forEach((value, key) => {
      params.set(key, value)
    })

    //Generar un objeto JSON a través de ese mapa
    let jsonObject = {}
    params.forEach((value, key) => { jsonObject[key] = value })
    console.log(JSON.stringify(jsonObject))

    //Invocar a la API
    try {
      const req = await fetch(
        `/api/contactoapiArchivo`,
        {
          method: 'POST',
          body: JSON.stringify({ jsonObject }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const data = await req.json()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }



    return (
    <div className={styles.container}>
    <div className={styles.texto}>   
        <span className={styles.spa1}>Sistema de reserva de libros</span>
        <span className={styles.spa2}>Registro de usuario</span>
    </div>
    <section className={styles.section}>
        <form className={styles.form} action="">
            <span className={styles.spa3}>Datos Personales</span>
            <Input spanText="Nombres" inputType="text" />
            <Input spanText="Apellidos" inputType="text"/>
            <Input spanText="Tipo de Documento" inputType="text"/>
            <Input spanText="Nro de Documento" inputType="text"/>
        </form>
        <form className={styles.form} action="">
            <span className={styles.spa3}>Datos de la cuenta</span>
            <Input spanText="Correo Electrónico" inputType="email"/>
            <Input spanText="Password" inputType="password"/>
            <Input spanText="Ingrese Password Nuevamente" inputType="password"/>
            <div className={styles.boton}>
            <button><Link href="./alumno">Registrar</Link></button>
            </div>
        </form>
    </section>
    </div>
    )
}

export default Registro;