export function index({ req, res, database }) {
  const { status } = req.query;

  // verifica se o status existe   
  const filters = status ? { status } : null;

  const tickets = database.select("tickets", filters);

  return res.writeHead(200).end(JSON.stringify(tickets));
}