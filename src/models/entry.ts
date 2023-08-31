import { Schema, model } from 'mongoose';

export interface EntryDocument {
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const entrySchema = new Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default model<EntryDocument>('Entry', entrySchema);
