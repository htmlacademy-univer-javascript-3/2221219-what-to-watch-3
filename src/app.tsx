import MainPage from './pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  AppRoute,
  AuthorizationStatus,
  Film,
  FilmCard,
  PromoFilm,
} from './const';
import SignIn from './pages/SignIn';
import Player from './pages/Player';
import MoviePage from './pages/MoviePage';
import AddReview from './pages/AddReview';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
import MyList from './pages/MyList';
import { filmCard } from './mocks/filmCard';

type AppProps = {
  promoFilm: PromoFilm;
  // eslint-disable-next-line react/no-unused-prop-types
  filmCard: FilmCard;
  films: Film[];
};

export default function App({ films, promoFilm }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage films={films} promoFilm={promoFilm} />}
        />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList films={films} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<Player film={filmCard} />} />
        <Route
          path={AppRoute.Film}
          element={<MoviePage filmCard={filmCard} />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview film={filmCard} />}
        />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
