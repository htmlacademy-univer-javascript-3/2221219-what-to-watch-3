import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { PromoFilm } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      promoFilmTitle={PromoFilm.FilmTitle}
      promoFilmGenre={PromoFilm.FilmGenre}
      promoFilmYear={PromoFilm.FilmYear}
    />
  </React.StrictMode>
);
