"use client"
import React, { useState, useEffect } from 'react';
import styles from './components/Biblioteca.module.css';
import Sidebar from './components/sidebar';
import Barra from './components/barra';
import Barrareserva from './components/barrareserva';
import Busqueda from './AdmBusqueda';
import Resultados from './AdmResultados';

const BibliotecaBuscadorAdm = () => {
  const [searchText, setSearchText] = useState('');
  const [libraryData, setLibraryData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('library.json')
      .then(response => response.json())
      .then(data => {
        setLibraryData(data);
      })
      .catch(error => {
        console.error("Error al cargar library.json", error);
      });
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);

    const results = libraryData.filter(libro => libro.titulo.toLowerCase().includes(text.toLowerCase()));

    setSearchResults(results);
  }

  return (
    <div className={styles.container}>
      <Barra titulobarra="Biblioteca" />
      <main className={styles.xd}>
        <Sidebar li1="Inicio" li2="Perfil" li3="Bibliotecas" />
        <section className={styles.parte2}>
          <div className={styles.titulo2}>
            <span>Biblioteca</span>
          </div>
          <article className={styles.articulo1}>
            <div className={styles.recuadro1}>
              <div className={styles.Barrasprestamo}>
                <Busqueda onSearch={handleSearch} />
                <Resultados results={searchResults} />
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default BibliotecaBuscadorAdm;
