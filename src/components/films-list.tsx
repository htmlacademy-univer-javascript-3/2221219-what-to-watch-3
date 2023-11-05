import { Film } from '../const';
import MovieCard from './film-card';
import { useState } from 'react';
import { TimeoutId } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';

type FilmsListPops = {
  films: Film[];
  filmsCount: number;
};

export default function MoviesList({ films, filmsCount }: FilmsListPops) {
  const [activeFilm, setActiveFilm] = useState<string | null>(null);
  let timer: undefined | TimeoutId = undefined;
  const handleFilmFocus = (id: string) => {
    timer = setTimeout(() => {
      setActiveFilm(id);
    }, 1000);
  };

  const handleFilmOut = () => {
    clearTimeout(timer);
    setActiveFilm(null);
  };

  return (
    <div className="catalog__films-list">
      {films
        .slice(0, filmsCount > films.length ? films.length : filmsCount)
        .map((film) => (
          <MovieCard
            film={film}
            onMouseOver={handleFilmFocus}
            onMouseOut={handleFilmOut}
            activeFilm={activeFilm}
            key={film.id}
          />
        ))}
    </div>
  );
}