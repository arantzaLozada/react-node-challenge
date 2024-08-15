import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: Date,
});

export const Article = mongoose.model('Articles', articleSchema);
