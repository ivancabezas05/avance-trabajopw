import styles from './perfiladmin.module.css';

const BarraP = ({ setOpcionSeleccionada }) => {
  const handleOptionClick = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  return (
    <nav className={styles.barracuadro}>
      <ul className={styles.opcionescuadro}>
        <li className={styles.licuadro} onClick={() => handleOptionClick('DATOS PERSONALES')}>DATOS PERSONALES </li>
        <li className={styles.licuadro} onClick={() => handleOptionClick('CUENTA')}>CUENTA</li>
        <li className={styles.licuadro} onClick={() => handleOptionClick('PREFERENCIAS')}>PREFERENCIAS</li>
      </ul>
    </nav>
  );
};

export default BarraP;
