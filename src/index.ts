import express from 'express';

const app = express();

const PORT = process.env.port || 8000;

app.get('/', (req, res) => {
    res.send('<h1>test</h1>')
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});