import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Olá Node.js");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App rodando em: http://localhost:${port}`);
});
