import express from 'express';

const app = express();
app.use(express.json());

const livros = [
    {id: 1, titulo: 'Senhor dos Anéis', autor: 'J.R.R. Tolkien'},
    {id: 2, titulo: 'Poderoso Chefão', autor: 'Mario Puzo'},
];

app.get('/', (req, res) => {
    res.status(200).send('Bem vindo ao node.js');
});

export default app;