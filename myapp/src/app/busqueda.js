"use client"
import React, { useState, useEffect } from 'react';
import './App.css'; 
import styles from './busqueda.module.css'
import Sidebar from './sidebar';

function Busqueda() {
  const [filtro, setFiltro] = useState({
    titulo: false,
    autor: false,
    autores: false,
    serie: false,
    ISBN: false,
  });

  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);
  const [mostrarResultados, setMostrarResultados] = useState(false);

  useEffect(() => {
    if (!mostrarResultados) {
      setResultados([]);
    } else {
      // Realiza la búsqueda según los filtros activos
      fetch('library.json')
        .then(response => response.json())
        .then(data => {
          const librosFiltrados = data.filter(libro => {
            if (filtro.titulo && libro.titulo.toLowerCase().includes(busqueda.toLowerCase())) {
              return true;
            }
            if (filtro.autor && libro.autor.toLowerCase().includes(busqueda.toLowerCase())) {
              return true;
            }
            if (filtro.autores && libro.autores.toLowerCase().includes(busqueda.toLowerCase())) {
              return true;
            }
            if (filtro.serie && libro.serie.toLowerCase().includes(busqueda.toLowerCase())) {
              return true;
            }
            if (filtro.ISBN && libro.ISBN.toLowerCase().includes(busqueda.toLowerCase())) {
              return true;
            }
            return false;
          });
          setResultados(librosFiltrados);
        })
        .catch(error => {
          console.error("Error al cargar library.json", error);
        });
    }
  }, [mostrarResultados, filtro, busqueda]);

  const toggleFiltro = filtro => {
    setFiltro({ ...filtro, [filtro]: !filtro[filtro] });
  };

  const handleChange = e => {
    setBusqueda(e.target.value);
    setMostrarResultados(true);
  };

  return (
    
    <div className="styles.container">
      <header className={styles.barra}>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <div className={styles.icono1}>
              <img src="/media/menu-hamburguesa.png" alt="barras"/>
          </div>
          <span className={styles.titulobarra}>Biblioteca</span>
          <div className={styles.icono2}>
              <img src="/media/usuario.png" alt="usuario"/>
          </div>
       </header>
       <main className={styles.xd}>
            <Sidebar li1="Principal" li2="Perfil" li3="Préstamos"/>
            <section className={styles.parte2}>
                <div className={styles.titulo2}>
                    <span>Búsqueda</span>
                </div> 

      <div>          
      <label className={styles.placeholder}  htmlFor="">Ingresa la palabra clave</label>    
      <input className={styles.input}
        type="text"
        placeholder="Buscar..."
        onChange={handleChange}
      />
       <button className={styles.lupa} type='submit'>
        <i className={`fa fa-search ${styles.i}`} aria-hidden="true"></i>
        </button>
      </div>

      <br />
      <div className={styles.xd}>
        <label>
        <input
          type="checkbox"
          checked={filtro.titulo}
          onChange={() => toggleFiltro('titulo')}
        />
        Título
        </label>
        <label>
          <input
            type="checkbox"
            checked={filtro.autor}
            onChange={() => toggleFiltro('autor')}
          />
          Autor
        </label>
        <label>
          <input
            type="checkbox"
            checked={filtro.autores}
            onChange={() => toggleFiltro('autores')}
          />
          Autores
        </label>
        <label>
          <input
            type="checkbox"
            checked={filtro.serie}
            onChange={() => toggleFiltro('serie')}
          />
          Serie
        </label>
        <label>
          <input
            type="checkbox"
            checked={filtro.ISBN}
            onChange={() => toggleFiltro('ISBN')}
          />
          ISBN
        </label>
      </div>
      <button onClick={() => setMostrarResultados(true)}>Buscar Libro</button>
      <h2>Resultados de la Búsqueda:</h2>
      {resultados.length === 0 ? (
        <p>No se encontraron resultados.</p>
      ) : (
        <ul>
          {resultados.map((libro, index) => (
            <li key={index}>
              <h3>Título: {libro.titulo}</h3>
              <p>Autor: {libro.autor}</p>
              {/* Agrega otros campos aquí */}
            </li>
          ))}
        </ul>
      )}
      </section>
      </main>
    </div>
  );
}

export default Busqueda;

