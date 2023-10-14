const express = require('express');
const router = express.Router();

router.get('/api/busqueda', (req, res) => {
  // Obtiene los datos de la búsqueda
  const { searchText, categories } = req.query;

  // Filtra los datos de la biblioteca
  const filteredData = libraryData.filter((libro) => {
    // Busca por título
    if (searchText) {
      return libro.titulo.toLowerCase().includes(searchText.toLowerCase());
    }

    // Busca por categoría
    if (categories.length > 0) {
      return categories.some((category) => libro.categoría.toLowerCase().includes(category.toLowerCase()));
    }

    // Devuelve todos los libros si no hay criterios de búsqueda
    return true;
  });

  // Devuelve los datos de la búsqueda
  res.json(filteredData);
});

module.exports = router;
