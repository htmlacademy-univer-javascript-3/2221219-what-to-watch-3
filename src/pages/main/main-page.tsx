/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import MoviesList from '../../components/films-list.tsx';
import GenresList from '../../components/genres-list.tsx';
import { useAppSelector } from '../../redux/hooks.ts';
import ShowMoreButton from '../../components/show-more-button.tsx';
import PromoFilm from '../../components/promo-film.tsx';
import Footer from '../../components/footer.tsx';
import Spinner from '../../components/spinner/spinner.tsx';

export default function MainPage() {
  const filmsCount = useAppSelector((state) => state.filmsCount);
  const films = useAppSelector((state) => state.filmsByGenre);
  const promoFilm = useAppSelector((state) => state.promoFilm);
  return (
    <>
      {promoFilm && <PromoFilm promoFilm={promoFilm} />}
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {films.length !== 0 ? (
            <>
              <GenresList />
              <MoviesList films={films} filmsCount={filmsCount} />
            </>
          ) : (
            <Spinner />
          )}

          {filmsCount < films.length && <ShowMoreButton />}
        </section>
        <Footer />
      </div>
    </>
  );
}
