import React from 'react';
import ResultadosAlumn from './AlumnResultados';
import BusquedaAlumnRes from './AlumnBusquedaRes';
import styles from './components/Biblioteca.module.css';

function PaginaResultados({ results }) {
  return (
    <div>
    
    <div className={styles.container}>
      <main className={styles.xd}>
        <section className={styles.parte2}>
          <div className={styles.titulo2}>
            <span>Búsqueda</span>
            <BusquedaAlumnRes />
          </div>
          <h7 className={styles.h1}>Resultados de la Búsqueda: </h7>
          <article className={styles.articulo1}>
            <div className={styles.recuadro1}>
              <div className={styles.Barrasprestamo}>
              <ResultadosAlumn results={results} />
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
    </div>
  );
}

export default PaginaResultados;
