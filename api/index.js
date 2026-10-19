const express = require('express');
const app = express();

// Middleware para procesar JSON en peticiones POST
app.use(express.json());

// Ruta principal (por ejemplo, para responder con un mensaje o API status)
app.get('/api', (req, res) => {
  res.json({ message: 'API funcionando correctamente en Vercel' });
});

// Ejemplo de una ruta POST genérica
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({ status: 'recibido', data });
});

// IMPORTANTE PARA VERCEL: 
// Se exporta la instancia de express en lugar de usar app.listen()
module.exports = app;