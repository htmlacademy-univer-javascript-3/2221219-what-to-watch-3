import MainPage from '../pages/main/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, Film} from '../const';
import SignIn from '../pages/sign-in/sign-in-page';
import Player from '../pages/player/player-page';
import MoviePage from '../pages/film/film-page';
import AddReview from '../pages/add-review/add-review-page';
import NotFound from '../pages/not-found/not-found-page';
import PrivateRoute from '../components/private-route';
import MyList from '../pages/my-list/my-list-page';
import { filmCard } from '../mocks/filmCard';

type AppProps = {
  films: Film[];
};

export default function App({ films }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyList films={films} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<Player film={filmCard} />} />
        <Route
          path={AppRoute.Film}
          element={
            <MoviePage
              filmCard={filmCard}
              authorizationStatus={AuthorizationStatus.Auth}
            />
          }
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
