import mongoose from 'mongoose';
import { Article } from './models/Article.js';

import fs from 'fs';
import { MONGODB_URI } from './config.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);

    // Delete existing articles to avoid duplicates
    await Article.deleteMany({});

    // Read JSON file
    fs.readFile('../data.json', 'utf8', async (err, data) => {
      if (err) {
        console.error('Error reading JSON file', err);
        return;
      }

      // Convert content to JSON
      const articles = JSON.parse(data);

      // Insert the articles into the collection
      const result = await Article.insertMany(articles);
      console.log(`${result.length} inserted articles`);
    });
  } catch (error) {
    console.error(error);
  }

  //   finally {
  //     mongoose.connection.close();
  //   }
};

mongoose.connection.on('connected', () => {
  console.log('Mongodb is connected to', mongoose.connection.db.databaseName);
});
