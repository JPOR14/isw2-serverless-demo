export default function handler(req, res) {
  const nombre = req.query.nombre || "anónimo";

  // Simular error si el nombre es "error"
  if (nombre.toLowerCase() === "error") {
    return res.status(500).json({
      error: "Simulación de fallo en /api/procesar",
      detalle: "El nombre 'error' provoca un fallo intencional"
    });
  }

  // Agregar timestamp
  const timestamp = new Date().toISOString();

  res.status(200).json({
    resultado: `Nombre procesado: ${nombre.toUpperCase()}`,
    timestamp: timestamp
  });
}
