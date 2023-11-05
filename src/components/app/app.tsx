import MainScreen from '../../pages/main/main-page';

type AppProps = {
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmYear: string;
}

function App({promoFilmTitle, promoFilmGenre, promoFilmYear}: AppProps): JSX.Element {
  return (
    <MainScreen
      promoFilmTitle={promoFilmTitle}
      promoFilmGenre={promoFilmGenre}
      promoFilmYear={promoFilmYear}
    />
  );
}

export default App;
