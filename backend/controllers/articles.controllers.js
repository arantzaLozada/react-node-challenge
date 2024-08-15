import { Article } from '../models/Article.js';

export const getArticles = async (req, res) => {
  try {
    const articles = await Article.find({});
    return res.json(articles);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
