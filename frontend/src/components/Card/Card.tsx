import { FC } from 'react';

interface ArticleProps {
  author?: string;
  description?: string;
  title?: string;
  url?: string;
  urlToImage?: string;
}

export const Card: FC<ArticleProps> = ({
  author,
  description,
  title,
  url,
  urlToImage,
}) => {
  return (
    <a
      href={url}
      role="button"
      target="_blank"
      aria-label={`Link to ${title} by ${author}`}
    >
      <article className="flex gap-6 border border-gray-400 rounded-2xl py-[26px] px-10 mb-9 hover:shadow-lg transition-shadow">
        <div>
          <img
            className="w-[100px] aspect-square rounded-xl object-cover"
            src={urlToImage}
            alt={`Image related to ${title}`}
          />
        </div>
        <div className="flex flex-col justify-center gap-[6px] w-[80%]">
          <strong className="text-lg font-medium">{title}</strong>
          <small className="text-sm font-normal text-color-small">
            {author}
          </small>
          <p className="text-sm font-normal text-color-paragraph">
            {description}
          </p>
        </div>
      </article>
    </a>
  );
};
