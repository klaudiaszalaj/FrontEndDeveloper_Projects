export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471825", name: "Drama" },
    
];

export function getGenres() {
  return genres.filter(g => g);
}