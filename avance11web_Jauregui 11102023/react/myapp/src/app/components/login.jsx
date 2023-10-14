import Link from 'next/link'
import styles from './page.module.css'
import Input from './input1'; 



const Login = () =>{
    


    return (
        <div className={styles.contenedor}>
          <div className={styles.contenido}> 
          <span className={styles.titulo1}>Sistema de reserva de Libros</span>
          <form  className= {styles.registro} action="">
              <Input inputType="text" spanText="Usuario o Correo"/>
              <div className={styles.label2}>
              <Input inputType="password" spanText="Contraseña"/>
              <div className={styles.opcion}>
                <span>Olvidé mi contraseña</span>
              </div>
              </div>
              <div className={styles.botones}>
                  <button className= {styles.button1} ><Link href="./registro">Registro usuario</Link></button>
                  <button className= {styles.button2} type="submit">Ingresar</button>
              </div>
          </form>
          </div> 
          
      </div>
    )
}

export default Login;
