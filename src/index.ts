import express from 'express';
import './db';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const PORT = process.env.port || 8000;

app.post('/', (req, res) => {
  console.log(req.body);

  res.json({ message: 'I am listening' });
});

app.post('/create', (req, res) => {
  console.log(req.body);

  res.json({ message: 'entry created' });
});



app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
