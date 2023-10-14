import styles from './perfiladmin.module.css'
import BarraP from './barraperfiles';
import InputP from './inputperfil';
import BotonP from './botonP';
import FotoP from './fotoperfil';
const Contenido = () =>{
    return (
    <article className={styles.articulo1}>  
                    <div className={styles.recuadro1}>   
                        <div className={styles.cuadro1}>
                            <FotoP/>
                        </div>
                        <div className={styles.cuadro2}>
                            <BarraP/>
                            <form className={styles.formulario}action="">
                                <InputP placeholder='Nombres'/>
                                <InputP  placeholder='Tipo de Documento'/>
                                <InputP  placeholder='Apellidos'/>
                                <InputP  placeholder='Nro de Documento'/>
                                <BotonP/>
                            </form>
                            
                        </div>  
                    </div>
                </article>
    )
}

export default Contenido;