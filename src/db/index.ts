import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost:27017/my-stoic-path')
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log('DB connection failed:', err);
  });
