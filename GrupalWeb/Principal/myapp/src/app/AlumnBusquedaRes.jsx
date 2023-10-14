"use client"
import React, { useState, useRef } from 'react';
import styles from './components/BibliotecaBusqueda.module.css';

function BusquedaAlumnRes(props) {
  const [searchText, setSearchText] = useState('');
  const [categories, setCategories] = useState([]);
  const categoryInputRef = useRef(null);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setSearchText(inputText);
  }

  const handleCategoryInputKeyDown = (e) => {
    if (e.key === 'Enter' && categoryInputRef.current.value.trim() !== '') {
      const newCategory = categoryInputRef.current.value.trim();
      setCategories([...categories, newCategory]);
      categoryInputRef.current.value = '';
    }
  }

  const removeCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  }

  const handleSearch = () => {
    props.onSearch(searchText, categories);
  }

  return (
    <div >
    
    <div >
        <button className={styles.boton} onClick={handleSearch}>
                Volver a buscar
              </button>
    </div>
        
    </div>
  );
}

export default BusquedaAlumnRes;
