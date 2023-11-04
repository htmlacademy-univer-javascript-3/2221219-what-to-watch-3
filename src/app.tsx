import MainPage, { MainPageProps } from './pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from './const';
import SignIn from './pages/SignIn';
import Player from './pages/Player';
import Movie from './pages/Movie';
import AddReview from './pages/AddReview';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
import MyList from './pages/MyList';
//
export default function App({ title, genre, date }: MainPageProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage title={title} genre={genre} date={date} />}
        />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path={AppRoute.Film} element={<Movie />} />
        <Route path={AppRoute.AddReview} element={<AddReview />} />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
