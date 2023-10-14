"use client"
import React, { useState, useEffect } from 'react';
import styles from './components/Biblioteca.module.css';
import Sidebar from './components/sidebar';
import Barra from './components/barra';
import BusquedaAlumn from './AlumnBusqueda';
import ResultadosAlumn from './AlumnResultados';

const BibliotecaBuscadorAlumn = () => {
  const [searchText, setSearchText] = useState('');
  const [categories, setCategories] = useState([]);
  const [libraryData, setLibraryData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('library.json')
      .then((response) => response.json())
      .then((data) => {
        setLibraryData(data);
      })
      .catch((error) => {
        console.error('Error al cargar library.json', error);
      });
  }, []);

  const handleSearch = (text, categories) => {
    setSearchText(text);
    setCategories(categories);

    const textResults = libraryData.filter((libro) =>
      libro.titulo.toLowerCase().includes(text.toLowerCase())
    );

    if (categories.length > 0) {
      const categoryResults = libraryData.filter((libro) => {
        const libroCategorias = (libro.categoria || '').toLowerCase(); 
        return categories.some((category) => libroCategorias.includes(category.toLowerCase()));
      });
      setSearchResults(categoryResults); 
    } else {
      setSearchResults(textResults); 
    }
  };

  return (
    <div className={styles.container}>
      <Barra titulobarra="Biblioteca" />
      <main className={styles.xd}>
        <Sidebar li1="Inicio" li2="Perfil" li3="Bibliotecas" />
        <section className={styles.parte2}>
          <div className={styles.titulo2}>
            <span>Búsqueda</span>
          </div>
          <article className={styles.articulo1}>
            <div className={styles.recuadro1}>
              <div className={styles.Barrasprestamo}>
                <BusquedaAlumn onSearch={handleSearch} />
                {searchResults.length > 0 && <ResultadosAlumn results={searchResults} />}
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default BibliotecaBuscadorAlumn;
