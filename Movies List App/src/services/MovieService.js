const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Midsommar",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    director: "A. Aster",
    numberInStock: 6,
    dailyRentalRate: 7.1,
    publishDate: "2020-05-014T19:04:28.809Z",
    liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Lighthouse",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    director: "R. Eggers",
    numberInStock: 5,
    dailyRentalRate: 5.2
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    director: "J. Peele",
    numberInStock: 8,
    dailyRentalRate: 7.7
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Long Day's Journey Into Night",
    genre: { _id: "5b21ca3eeb7f6fbccd471825", name: "Drama" },
    director: "Gan Bi",
    numberInStock: 7,
    dailyRentalRate: 7.2
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Little Women",
    genre: { _id: "5b21ca3eeb7f6fbccd471825", name: "Drama" },
    director: "G. Gerwig",
    numberInStock: 7,
    dailyRentalRate: 7.9
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Parasite",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    director: "J. Bong",
    numberInStock: 7,
    dailyRentalRate: 8.6
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Knives Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    director: "R. Johnson",
    numberInStock: 7,
    dailyRentalRate: 7.9
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The 1917",
    genre: { _id: "5b21ca3eeb7f6fbccd471825", name: "Drama" },
    director: "S. Mendes",
    numberInStock: 4,
    dailyRentalRate: 8.3
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Farewell",
    genre: { _id: "5b21ca3eeb7f6fbccd471825", name: "Drama" },
    director: "L. Wang",
    numberInStock: 7,
    dailyRentalRate: 7.6
  }
];

export function getMovies() {
  return movies;
}


