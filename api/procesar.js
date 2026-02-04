export default function handler(req, res) {
  const rawNombre = req.query.nombre || "anónimo";
  const nombre = Array.isArray(rawNombre) ? rawNombre[0] : rawNombre;

  // Simular error
  if (nombre.toLowerCase() === "error") {
    return res.status(500).json({
      error: "Error simulado en /api/procesar",
      timestamp: new Date().toISOString()
    });
  }

  res.status(200).json({
    resultado: `Nombre procesado: ${nombre.toUpperCase()}`,
    timestamp: new Date().toISOString()
  });
}
