import useGenre from "./useGenre";
import { Genre } from "./genre-service";
const GenreList = () => {
  const { genres, error } = useGenre();
  return (
    <ul>
      {error && <p> Error in Genre Loading! </p>}
      {genres.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
