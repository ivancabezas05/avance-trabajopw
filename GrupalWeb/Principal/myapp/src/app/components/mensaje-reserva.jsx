import React, { useState } from "react";
import styles from "./libro.module.css";


const MensajeReserva = ({ isVisible, fechaReserva, onClose }) => {
  const [isMostrado, setIsMostrado] = useState(isVisible);

  const handleClose = () => {
    setIsMostrado(false);
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "312px",
        left: "900px",
        width: "312px", 
        height: "240px", 
        backgroundColor: "#ECE6F0",
        display: "block",
        border: "1px ",
        padding: "10px",
        textAlign: "center",
        borderRadius: "28px",
        radius: "10px",
       

      }}
    >
      <div style={{ textAlign: "left" }}>
        <p style={{ fontWeight: "400", fontStyle: "normal", fontfamily: "Roboto"
            ,fontSize:"24px",lineheight: "32px"}}>
          Reserva realizada
        </p>
        <p style={{ fontWeight: "400", fontStyle: "normal", fontfamily: "Roboto"
            ,fontSize:"14px",lineheight: "20px"}}>
          La reserva del recurso se ha realizado con éxito.Este debe ser devuelto el dia  {fechaReserva }.
        </p></div>
        <div className={styles.contenedorbotonok}>
        <button onClick={handleClose}>OK</button>
      </div>
    </div>
  );
};

export default MensajeReserva;