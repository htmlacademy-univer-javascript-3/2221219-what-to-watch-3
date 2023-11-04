export const FilmCardCount = {
  MyListScreen: 9,
  FilmScreen: 4,
};

export const filmCards = [
  {
    id: 0,
    imgSrc: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    title: 'Fantastic Beasts: The Crimes of Grindelwald'
  },
  {
    id: 1,
    imgSrc: 'img/bohemian-rhapsody.jpg',
    title: 'Bohemian Rhapsody'
  },
  {
    id: 2,
    imgSrc: 'img/macbeth.jpg',
    title: 'Macbeth'
  },
  {
    id: 3,
    imgSrc: 'img/aviator.jpg',
    title: 'Aviator'
  },
  {
    id: 4,
    imgSrc: 'img/we-need-to-talk-about-kevin.jpg',
    title: 'We need to talk about Kevin'
  },
  {
    id: 5,
    imgSrc: 'img/what-we-do-in-the-shadows.jpg',
    title: 'What We Do in the Shadows'
  },
  {
    id: 6,
    imgSrc: 'img/revenant.jpg',
    title: 'Revenant'
  },
  {
    id: 7,
    imgSrc: 'img/johnny-english.jpg',
    title: 'Johnny English'
  },
  {
    id: 8,
    imgSrc: 'img/shutter-island.jpg',
    title: 'Shutter Island'
  },
  {
    id: 9,
    imgSrc: 'img/pulp-fiction.jpg',
    title: 'Pulp Fiction'
  },
  {
    id: 10,
    imgSrc: 'img/no-country-for-old-men.jpg',
    title: 'No Country for Old Men'
  },
  {
    id: 11,
    imgSrc: 'img/snatch.jpg',
    title: 'Snatch'
  },
  {
    id: 12,
    imgSrc: 'img/moonrise-kingdom.jpg',
    title: 'Moonrise Kingdom'
  },
  {
    id: 13,
    imgSrc: 'img/seven-years-in-tibet.jpg',
    title: 'Seven Years in Tibe'
  },
  {
    id: 14,
    imgSrc: 'img/midnight-special.jpg',
    title: 'Midnight Special'
  },
  {
    id: 15,
    imgSrc: 'img/war-of-the-worlds.jpg',
    title: 'War of the Worlds'
  },
  {
    id: 16,
    imgSrc: 'img/dardjeeling-limited.jpg',
    title: 'Dardjeeling Limited'
  },
  {
    id: 17,
    imgSrc: 'img/orlando.jpg',
    title: 'Orlando'
  },
  {
    id: 18,
    imgSrc: 'img/mindhunter.jpg',
    title: 'Mindhunter'
  },
  {
    id: 19,
    imgSrc: 'img/midnight-special.jpg',
    title: 'Midnight Special'
  }
];

export const PromoFilm = {
  FilmImgSrc: 'img/the-grand-budapest-hotel-poster.jpg',
  FilmTitle: 'The Grand Budapest Hotel',
  FilmGenre: 'Drama',
  FilmYear: '2014'
};

export enum AppRoute {
    Main = '/',
    SignIn = '/login',
    MyList = '/mylist',
    Film = '/films/:id',
    AddReview = '/films/:id/review',
    Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
