import React, { useState } from 'react';
import styles from './components/BibliotecaBusqueda.module.css';

function ResultadosAlumn({ results }) {
  const [page, setPage] = useState(1);
  const booksPerPage = 3;

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const startIndex = (page - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const booksToDisplay = results.slice(startIndex, endIndex);

  return (
    <div className={styles.resultadosContainer}>
      {booksToDisplay.length > 0 ? (
        <div className={styles.resultadosGrid}>
          {booksToDisplay.map((libro, index) => (
            <div key={index} className={styles.resultadoBox}>
              <h2>{libro.titulo.replace('Título: ', '')}</h2>
              <div className={styles.resultadoImg}>
                <img src={libro['imagen-portada-url']} alt="Portada del Libro" />
              </div>
              <h3>Autor: {libro.autor}</h3>
              <h3>Categoría: {libro.categoria}</h3> 
              <h3>ISBN: {libro.ISBN}</h3>
              <h3>Editorial: {libro.editorial}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron resultados.</p>
      )}

      <div className={styles.pagination}>
        <button onClick={handlePrevPage} disabled={page === 1}>
          Anterior
        </button>
        <button onClick={handleNextPage} disabled={endIndex >= results.length}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default ResultadosAlumn;
