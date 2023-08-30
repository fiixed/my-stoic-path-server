import express from 'express';
import './db';

import entryRouter from './routers/entry';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.port || 8000;

app.use('/journal', entryRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
