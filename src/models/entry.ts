import { Schema, model } from 'mongoose';

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

export default model('Entry', entrySchema);
