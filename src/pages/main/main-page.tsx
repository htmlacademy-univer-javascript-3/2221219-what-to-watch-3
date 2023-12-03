import MoviesList from '../../components/films-list.tsx';
import GenresList from '../../components/genres-list.tsx';
import { useAppSelector } from '../../redux/hooks.ts';
import ShowMoreButton from '../../components/show-more-button.tsx';
import PromoFilm from '../../components/promo-film.tsx';
import Footer from '../../components/footer.tsx';

export default function MainPage() {
  const filmsCount = useAppSelector((state) => state.filmsCount);
  const films = useAppSelector((state) => state.films);

  return (
    <>
      <PromoFilm />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <MoviesList films={films} filmsCount={filmsCount} />
          {filmsCount < films.length && <ShowMoreButton />}
        </section>
        <Footer />
      </div>
    </>
  );
}
