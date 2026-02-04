export default function handler(req, res) {
  return res.status(500).json({
    error: "🚨 SI VES ESTO, EL DEPLOY CAMBIÓ 🚨",
    timestamp: new Date().toISOString()
  });
}