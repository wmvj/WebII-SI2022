import {create} from "../controllers/tickets/create.js";

export const tickets = [
    {
        method: 'POST',
        path: '/tickets',
        controller: create,
        // controller: (req, res) => {
        //     res.end("Ticket criado com sucesso")
        // }
    }
]