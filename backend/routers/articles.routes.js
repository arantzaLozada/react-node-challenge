import { Router } from 'express';
import { getArticles } from '../controllers/articles.controllers.js';

const router = Router();

router.get('/articles', getArticles);

export default router;
