import { useEffect, useState } from 'react';
import { articlesServices } from '../../services/articles';
import { Card } from '../Card/Card';

interface Article {
  author: string;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
  __v: number;
  _id: string;
}

export const CardList = () => {
  const [getArticles, setGetArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    articlesServices
      .getArticles()
      .then((res) => {
        setGetArticles(res);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {getArticles.map((article) => (
        <Card
          key={article._id}
          author={article.author}
          description={article.description}
          title={article.title}
          url={article.url}
          urlToImage={article.urlToImage}
        />
      ))}
    </div>
  );
};
