import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { AppProps } from './components/app/app';
import { PromoFilm, filmCards } from './const';

const appData: AppProps = {
  promoFilmCard: PromoFilm,
  smallFilmCards: filmCards
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      promoFilmCard={appData.promoFilmCard}
      smallFilmCards={appData.smallFilmCards}
    />
  </React.StrictMode>
);
