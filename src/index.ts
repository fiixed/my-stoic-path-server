import express from 'express';
import './db';
import Entry, { EntryDocument } from './models/entry';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.port || 8000;

app.post('/', (req, res) => {
  console.log(req.body);

  res.json({ message: 'I am listening' });
});

interface IncomingBody {
  description: string;
}

app.get('/', async (req, res) => {
  const entries = await Entry.find();
  res.json({ entries });
});

app.get('/:entryId', async (req, res) => {
  const { entryId } = req.params;
  const entry = await Entry.findById(entryId.trim());
  if(!entry) return res.json({error: 'Entry not found'});
  res.json({ entry });
});

app.post('/create', async (req, res) => {
  await Entry.create<EntryDocument>({
    description: (req.body as IncomingBody).description,
  });

  res.json({ message: 'entry created' });
});

app.patch('/:entryId', async (req, res) => {
  const { entryId } = req.params;

  const { description } = req.body as IncomingBody;

  const entry = await Entry.findByIdAndUpdate(
    entryId.trim(),
    { description },
    { new: true }
  );
  if (!entry) return res.json({ error: 'Entry not found' });

  res.json({ entry });
});

app.delete('/:entryId', async (req, res) => {
  const { entryId } = req.params;

  const removedEntry = await Entry.findByIdAndDelete(entryId.trim());
  if (!removedEntry) return res.json({ error: 'Entry not found' });
  res.json({ message: 'Entry removed successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
