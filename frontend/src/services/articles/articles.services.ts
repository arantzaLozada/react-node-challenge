import { myApi } from '../axios';

export const articlesServices = {
  getArticles: async () => {
    const getData = await myApi.get('/articles');

    return getData.data;
  },
};
