import MainPage from '../../pages/main/main-page.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import SignInPage from '../../pages/sign-in/sign-in-page.tsx';
import PlayerPage from '../../pages/player/player-page.tsx';
import MoviePage from '../../pages/film/film-page.tsx';
import AddReviewPage from '../../pages/add-review/add-review-page.tsx';
import NotFoundPage from '../../pages/not-found/not-found-page.tsx';
import PrivateRoute from '../../components/private-route/private-route.tsx';
import MyListPage from '../../pages/my-list/my-list-page.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.SignIn} element={<SignInPage />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<PlayerPage />} />
        <Route path={AppRoute.Film} element={<MoviePage />} />
        <Route path={AppRoute.AddReview} element={<AddReviewPage />} />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
