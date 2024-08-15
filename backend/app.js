import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import articleRouter from './routers/articles.routes.js';

const corsOptions = {
  origin: '*',
  methods: 'GET,POST',
  optionsSuccessStatus: 200,
};

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));
// app.use(express.urlencoded({ extended: false }));

app.use('/api', articleRouter);

export { app };
