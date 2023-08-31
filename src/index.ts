import express from 'express';
import './db';
import cors from 'cors';

import entryRouter from './routers/entry';

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.port || 8000;

app.use('/journal', entryRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
