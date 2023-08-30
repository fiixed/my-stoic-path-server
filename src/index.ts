import express from 'express';
import './db';
import Entry, { EntryDocument } from './models/entry';
import {
  createEntry,
  deleteEntry,
  getAllEntries,
  getSingleEntry,
  updateEntry,
} from './controllers/entry';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.port || 8000;

app.get('/', getAllEntries);
app.get('/:entryId', getSingleEntry);
app.post('/create', createEntry);
app.patch('/:entryId', updateEntry);
app.delete('/:entryId', deleteEntry);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
