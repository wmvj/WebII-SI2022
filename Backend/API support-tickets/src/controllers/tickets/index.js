export function index({ req, res, database }) {
  const { status } = req.query; // pega o valor do parametro na requisição

  // verifica se o status existe, se sim coloca dentro de um objeto   
  const filters = status ? { status } : null;

  const tickets = database.select("tickets", filters);

  return res.writeHead(200).end(JSON.stringify(tickets));
}