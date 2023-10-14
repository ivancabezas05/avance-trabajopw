import React, { useState } from "react";
import styles from "./libro.module.css";
import DatePicker from "react-datepicker";
import MensajeReserva from "./mensaje-reserva";
import { format } from "date-fns";

const Libro = (props) => {
  const [isReserva, setIsReserva] = useState(false);
  const [fechaReserva, setFechaReserva] = useState(new Date());

  const handleClick = () => {
    setIsReserva(true);
  };

  return (
    <article className={styles.libro}>
      <div className={styles.librocuadro1}>
        <div className={styles.icono3}>
          <span>PP</span>
        </div>
        <p>
          Psychology of computer programming
        </p>
      </div>
      <div className={styles.imglibro}>
        <div className={styles.imglibro2}>
          <img src="/media/caperucita.png" alt="" />
        </div>
      </div>
      <div className={styles.informacionlibro}>
        <span className={styles.spaninfo1}>ISBN: 0932633420</span>
        <span className={styles.spaninfo2}>Autor: 0932633420</span>
        <span className={styles.spaninfo2}>Editor: Addison-Wesley</span>
        <span></span>
      </div>
      <div className={styles.contenedorbotonreserva}>
        <button onClick={handleClick}>Reservar</button>
      </div>

      {isReserva && (
        <MensajeReserva
          isVisible={true}
          fechaReserva={format(fechaReserva, "dd/MM/yy")}
          onClose={() => setIsReserva(false)}
        />
      )}

      <DatePicker
        selected={fechaReserva}
        onChange={setFechaReserva}
      />
    </article>
  );
};

export default Libro;