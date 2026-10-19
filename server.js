
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post("/api/demo-login", (req, res) => {
  const { usuario } = req.body;

  if (typeof usuario !== "string" || !usuario.trim()) {
    return res.status(400).json({
      mensaje: "Introduce un usuario de prueba."
    });
  }

  // Solo se registra el nombre ficticio.
  console.log("Usuario de demostración recibido:", usuario);

  res.json({
    mensaje: "¡Conexión correcta! El servidor recibió el usuario de prueba."
  });
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Servidor listo en http://localhost:${PORT}`);
});
