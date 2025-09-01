export const tickets = [
    {
        method: 'POST',
        path: '/tickets',
        controler: (req, res) => {
            res.end("Ticket criado com sucesso")
        }
    }
]