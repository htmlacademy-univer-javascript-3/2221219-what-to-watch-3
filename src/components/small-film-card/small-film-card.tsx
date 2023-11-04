import { ReactNode } from 'react';

export type SmallFilmCardProps = {
  // eslint-disable-next-line react/no-unused-prop-types
  id?: number;
  imgSrc: string;
  title: string;
}

export default function SmallFilmCard({imgSrc, title}: SmallFilmCardProps): ReactNode {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={imgSrc} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{title}</a>
      </h3>
    </article>
  );
}
