const mongoose = require('mongoose');
import { RequestHandler } from 'express';
import Entry, { EntryDocument } from '../models/entry';
import { log } from 'console';

export interface IncomingBody {
  description: string;
}

export const createEntry: RequestHandler = async (req, res) => {
  const newEntry = await Entry.create<EntryDocument>({
    description: (req.body as IncomingBody).description,
  });
  res.json({
    entry: {
      id: newEntry._id,
      description: newEntry.description,
      timestamp: newEntry.updatedAt,
    },
  });
};

export const updateEntry: RequestHandler = async (req, res) => {
  const { entryId } = req.params;

  const { description } = req.body as IncomingBody;

  const entry = await Entry.findByIdAndUpdate(
    entryId.trim(),
    { description },
    { new: true }
  );
  if (!entry) return res.json({ error: 'Entry not found' });

  res.json({
    entry: {
      id: entry._id,
      description: entry.description,
      timestamp: entry.updatedAt,
    },
  });
};

export const deleteEntry: RequestHandler = async (req, res) => {
  const { entryId } = req.params;

  const removedEntry = await Entry.findByIdAndDelete(entryId.trim());
  if (!removedEntry) return res.json({ error: 'Entry not found' });
  res.json({ message: 'Entry removed successfully' });
};

export const getAllEntries: RequestHandler = async (req, res) => {
  const entries = await Entry.find();
  res.json({
    entries: entries.map((entry) => {
      return {
        id: entry._id,
        description: entry.description,
        timestamp: entry.updatedAt,
      };
    }),
  });
};

export const getSingleEntry: RequestHandler = async (req, res) => {
  const { entryId } = req.params;
  const entry = await Entry.findById(entryId.trim());
  if (!entry) return res.json({ error: 'Entry not found' });
  res.json({ entry });
};
